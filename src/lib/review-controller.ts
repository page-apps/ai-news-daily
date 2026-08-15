import type { CredentialProvider } from "@repo-apps/credentials";
import { RepositoryError, type RepositoryClient, type RepositoryFile } from "@repo-apps/repo-client";
import {
  connectGitHubPat,
  createNewsRepositoryClients,
  repositoryConfigFromIdentities,
  sharedNewsPat,
  verifyNewsRepositories,
} from "./github-repositories";
import { missingReviewConfiguration, reviewConfig } from "./review-config";

interface Source { title?: string; resource?: string; author?: string }
interface ConceptMetadata {
  title: string; description: string; summary: string; date: string; status: string;
  categories: string[]; tags: string[]; sources: Source[];
}
interface ReviewDocument {
  path: string;
  sha: string;
  content: string;
  size: number;
  htmlUrl?: string;
  metadata: ConceptMetadata;
  body: string;
  original: string;
}
interface DraftManifest { schema: string; date: string; status: string; daily: string; news: string[]; files: string[] }
interface ReviewSession {
  credentials: CredentialProvider;
  editorial: RepositoryClient;
  site: RepositoryClient;
  manifest: DraftManifest;
  manifestFile: RepositoryFile;
  daily: ReviewDocument;
  stories: ReviewDocument[];
}
interface DailyEdit {
  title: string;
  summary: string;
  body: string;
  categories: string[];
  tags: string[];
  sources: Source[];
}

let session: ReviewSession | undefined;
let sharedCredentialAvailable = false;

function parseScalar(head: string, key: string): string {
  const match = new RegExp(`^${key}:\\s*(.+)$`, "m").exec(head);
  if (!match) return "";
  const value = match[1].trim();
  try { return typeof JSON.parse(value) === "string" ? JSON.parse(value) : value; }
  catch { return value.replace(/^['"]|['"]$/g, ""); }
}

function parseArray(head: string, key: string): string[] {
  const value = parseScalar(head, key);
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return value.replace(/^\[|\]$/g, "").split(",").map((item) => item.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean);
  }
}

function parseSources(head: string): Source[] {
  const sourceBlock = /^sources:\s*\n((?:^[ \t]+.*(?:\n|$))*)/m.exec(head)?.[1] ?? "";
  return sourceBlock.split(/^\s*-\s+/m).slice(1).map((entry) => ({
    resource: parseScalar(entry, "resource"),
    title: parseScalar(entry, "title"),
    author: parseScalar(entry, "author"),
  })).filter((source) => source.resource);
}

function readDocument(file: RepositoryFile): ReviewDocument {
  const end = file.content.indexOf("\n---\n", 4);
  if (!file.content.startsWith("---\n") || end < 0) throw new Error(`${file.path} has invalid frontmatter.`);
  const head = file.content.slice(4, end);
  return {
    ...file,
    original: file.content,
    body: file.content.slice(end + 5).trim(),
    metadata: {
      title: parseScalar(head, "title"),
      description: parseScalar(head, "description"),
      summary: parseScalar(head, "summary"),
      date: parseScalar(head, "date"),
      status: parseScalar(head, "status"),
      categories: parseArray(head, "categories"),
      tags: parseArray(head, "tags"),
      sources: parseSources(head),
    },
  };
}

function updateLine(content: string, key: string, value: string): string {
  const expression = new RegExp(`^${key}:.*$`, "m");
  if (expression.test(content)) return content.replace(expression, `${key}: ${JSON.stringify(value)}`);
  return content.replace(/^---\n/, `---\n${key}: ${JSON.stringify(value)}\n`);
}

function updateArray(content: string, key: string, values: string[]): string {
  const expression = new RegExp(`^${key}:.*$`, "m");
  const next = `${key}: ${JSON.stringify(values)}`;
  return expression.test(content) ? content.replace(expression, next) : content.replace(/^---\n/, `---\n${next}\n`);
}

function updateSources(content: string, sources: Source[]): string {
  const sourceBlock = `sources:\n${sources.map((source, index) => `  - id: source-${index + 1}\n    resource: ${JSON.stringify(source.resource ?? "")}${source.title ? `\n    title: ${JSON.stringify(source.title)}` : ""}${source.author ? `\n    author: ${JSON.stringify(source.author)}` : ""}`).join("\n")}\n`;
  const expression = /^sources:\n(?:^[ \t].*(?:\n|$))*/m;
  return expression.test(content) ? content.replace(expression, sourceBlock) : content.replace(/^---\n/, `---\n${sourceBlock}`);
}

function updateBody(content: string, body: string): string {
  const end = content.indexOf("\n---\n", 4);
  if (end < 0) throw new Error("The daily article has invalid frontmatter.");
  return `${content.slice(0, end + 5)}\n${body.trim()}\n`;
}

function updateDailyDocument(detail: DailyEdit): void {
  if (!session) return;
  const document = session.daily;
  const summaryKey = document.metadata.summary ? "summary" : "description";
  document.content = updateBody(
    updateSources(
      updateArray(
        updateArray(
          updateLine(updateLine(document.content, "title", detail.title), summaryKey, detail.summary),
          "categories",
          detail.categories,
        ),
        "tags",
        detail.tags,
      ),
      detail.sources,
    ),
    detail.body,
  );
  document.body = detail.body.trim();
  document.metadata = {
    ...document.metadata,
    title: detail.title,
    ...(summaryKey === "summary" ? { summary: detail.summary } : { description: detail.summary }),
    categories: detail.categories,
    tags: detail.tags,
    sources: detail.sources,
  };
}

function uniqueSources(sources: Source[]): Source[] {
  const seen = new Set<string>();
  return sources.filter((source) => {
    const key = source.resource?.trim();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function model() {
  if (!session) return undefined;
  return {
    edition: {
      ...session.daily.metadata,
      body: session.daily.body,
      sources: uniqueSources(session.daily.metadata.sources),
      supportingConcepts: session.stories.length,
    },
  };
}

function emitModel(): void {
  window.dispatchEvent(new CustomEvent("ai-daily-review:model", { detail: model() }));
}

function setStatus(message: string, options: { busy?: boolean; published?: boolean; error?: boolean } = {}): void {
  for (const target of document.querySelectorAll<HTMLElement>("[data-review-message], [data-auth-message]")) target.textContent = message;
  window.dispatchEvent(new CustomEvent("ai-daily-review:status", { detail: { message, ...options } }));
}

function setSignedIn(signedIn: boolean, login?: string): void {
  const panel = document.querySelector<HTMLElement>(".signed-out");
  if (panel) panel.hidden = signedIn;
  const badge = document.querySelector<HTMLElement>(".security-badge");
  if (badge) badge.textContent = signedIn ? `Connected · ${login ?? reviewConfig.reviewerLogin}` : "Signed out · secure by default";
}

function emitConnection(mode: "manual" | "shared" | "checking"): void {
  window.dispatchEvent(new CustomEvent("ai-daily-review:connection", { detail: { mode } }));
}

async function loadLatestDraft(editorial: RepositoryClient): Promise<{ manifest: DraftManifest; manifestFile: RepositoryFile; daily: ReviewDocument; stories: ReviewDocument[] }> {
  const entries = await editorial.list("drafts");
  const dates = entries.filter((entry) => entry.type === "dir" && /^\d{4}-\d{2}-\d{2}$/.test(entry.name)).map((entry) => entry.name).sort();
  for (const date of dates.reverse()) {
    const manifestFile = await editorial.readFile(`drafts/${date}/manifest.json`);
    const manifest = JSON.parse(manifestFile.content) as DraftManifest;
    if (manifest.schema !== "ai-news-daily/editorial-draft/v1" || manifest.news.length !== 10) throw new Error(`Draft bundle ${date} is invalid.`);
    if (manifest.status !== "draft") continue;
    const [daily, ...stories] = await Promise.all([manifest.daily, ...manifest.news].map((path) => editorial.readFile(`drafts/${date}/${path}`)));
    return { manifest, manifestFile, daily: readDocument(daily), stories: stories.map(readDocument) };
  }
  throw new Error("No unapproved editorial draft bundles are available yet.");
}

function repositoryClients(credentials: CredentialProvider) {
  const repositories = repositoryConfigFromIdentities(
    `${reviewConfig.editorialRepository}#${reviewConfig.editorialBranch}`,
    `${reviewConfig.publicRepository}#${reviewConfig.publicBranch}`,
  );
  return createNewsRepositoryClients(repositories, credentials);
}

async function finishConnection(credentials: CredentialProvider): Promise<void> {
  setStatus("Verifying this credential against both news repositories…", { busy: true });
  const clients = repositoryClients(credentials);
  const access = await verifyNewsRepositories(clients);
  const login = access.account.login;
  if (login.toLowerCase() !== reviewConfig.reviewerLogin.toLowerCase()) {
    throw new Error(`This review area is restricted to ${reviewConfig.reviewerLogin}. Connected as ${login}.`);
  }
  if (!access.editorial.canRead || !access.editorial.canWrite || !access.site.canWrite) {
    throw new Error("The PAT needs Contents: read and write for page-apps/ai-news-daily and page-apps/ai-news-daily-editorial.");
  }
  const draft = await loadLatestDraft(clients.editorial);
  session = { credentials, editorial: clients.editorial, site: clients.site, ...draft };
  setSignedIn(true, login);
  emitModel();
  setStatus(`Ready to review the ${draft.manifest.date} daily article. Its ten supporting concepts publish automatically.`);
}

function friendlyConnectionError(error: unknown, shared = false): string {
  if (shared && error instanceof RepositoryError && (error.code === "authentication" || error.code === "permission")) {
    return "The shared PAT cannot access both news repositories. Update it in the Page Apps hub with Contents: read and write for ai-news-daily and ai-news-daily-editorial.";
  }
  return error instanceof Error ? error.message : "Could not connect to the review repositories.";
}

async function useSharedCredential(): Promise<void> {
  const credentials = sharedNewsPat();
  try {
    if (!await credentials.useShared()) throw new Error("The shared PAT is no longer available. Set it up again in the Page Apps hub.");
    await finishConnection(credentials);
  } catch (error) {
    await credentials.disconnect();
    setSignedIn(false);
    emitConnection("shared");
    setStatus(friendlyConnectionError(error, true), { error: true });
  }
}

async function connectManually(): Promise<void> {
  const missing = missingReviewConfiguration();
  if (missing.length) {
    setStatus(`Review is not configured yet: ${missing.join(", ")}.`, { error: true });
    return;
  }
  const token = window.prompt("Paste a fine-grained GitHub PAT limited to the editorial and publication repositories. It stays in this browser tab.");
  if (!token) return;
  const credentials = connectGitHubPat({ requestToken: () => token.trim() });
  try {
    await credentials.connect();
    await finishConnection(credentials);
  } catch (error) {
    await credentials.disconnect();
    setSignedIn(false);
    setStatus(friendlyConnectionError(error), { error: true });
  }
}

async function connectRequested(): Promise<void> {
  if (sharedCredentialAvailable) await useSharedCredential();
  else await connectManually();
}

async function restoreConnection(): Promise<void> {
  const missing = missingReviewConfiguration();
  if (missing.length) {
    setStatus(`Review is not configured yet: ${missing.join(", ")}.`, { error: true });
    return;
  }
  emitConnection("checking");
  setStatus("Checking this browser for a Page Apps connection…", { busy: true });

  const tabCredential = connectGitHubPat({ requestToken: async () => "" });
  try {
    if (await tabCredential.get()) {
      await finishConnection(tabCredential);
      return;
    }
  } catch (error) {
    await tabCredential.disconnect();
    setStatus(friendlyConnectionError(error), { error: true });
  }

  try {
    const shared = sharedNewsPat();
    if (await shared.hasAppRegistration()) {
      if (await shared.useShared()) {
        try {
          await finishConnection(shared);
          return;
        } catch (error) {
          await shared.disconnect();
          sharedCredentialAvailable = await shared.hasShared();
          emitConnection(sharedCredentialAvailable ? "shared" : "manual");
          setStatus(friendlyConnectionError(error, true), { error: true });
          return;
        }
      }
    }
    sharedCredentialAvailable = await shared.hasShared();
    emitConnection(sharedCredentialAvailable ? "shared" : "manual");
    setStatus(sharedCredentialAvailable
      ? "A shared PAT is available from the Page Apps hub. Use it once here; later visits reconnect automatically."
      : "Connect with the Page Apps hub PAT or use a session-only PAT to review drafts.");
  } catch (error) {
    sharedCredentialAvailable = false;
    emitConnection("manual");
    setStatus(friendlyConnectionError(error), { error: true });
  }
}

async function saveEdits(): Promise<void> {
  if (!session) throw new Error("Connect before saving a review.");
  const changed = [session.daily, ...session.stories].filter((document) => document.content !== document.original);
  if (!changed.length) return;
  await session.editorial.batchCommit({
    message: `Review AI Daily editorial draft: ${session.manifest.date}`,
    changes: changed.map((document) => ({ operation: "write" as const, path: document.path, content: document.content, expectedSha: document.sha })),
  });
  const refreshed = await loadLatestDraft(session.editorial);
  session = { ...session, ...refreshed };
  emitModel();
}

function stableDocument(content: string, reviewer: string): string {
  const verified = `verified: { by: ${JSON.stringify(`human:${reviewer}`)}, at: ${JSON.stringify(new Date().toISOString())} }`;
  const withVerification = /^verified:/m.test(content) ? content : content.replace(/^status: draft$/m, `${verified}\nstatus: draft`);
  return withVerification.replace(/^status: draft$/m, "status: stable");
}

async function publicExpectedSha(client: RepositoryClient, path: string): Promise<string | undefined> {
  try { return (await client.readFile(path)).sha; }
  catch (error) {
    if (error instanceof RepositoryError && error.code === "not-found") return undefined;
    throw error;
  }
}

async function closePrivateBundle(current: ReviewSession): Promise<void> {
  const documents = [current.daily, ...current.stories];
  const manifest = { ...current.manifest, status: "published", publishedAt: new Date().toISOString() };
  await current.editorial.batchCommit({
    message: `Close reviewed AI Daily editorial draft: ${current.manifest.date}`,
    changes: [
      ...documents.map((document) => ({ operation: "write" as const, path: document.path, content: stableDocument(document.content, reviewConfig.reviewerLogin), expectedSha: document.sha })),
      { operation: "write" as const, path: current.manifestFile.path, content: `${JSON.stringify(manifest, null, 2)}\n`, expectedSha: current.manifestFile.sha },
    ],
  });
}

async function approveAndPublish(): Promise<void> {
  if (!session) {
    setStatus("Connect before approving an edition.", { error: true });
    return;
  }
  try {
    setStatus("Saving the reviewed article…", { busy: true });
    await saveEdits();
    if (!session) return;
    const documents = [session.daily, ...session.stories];
    const paths = [`content/daily/${session.manifest.date}.md`, ...session.stories.map((story) => `content/news/${story.path.split("/").at(-1)}`)];
    if (new Set(paths).size !== 11) throw new Error("Publication paths are not a valid daily bundle.");
    setStatus("Publishing the article and its supporting news concepts…", { busy: true });
    const changes = await Promise.all(documents.map(async (document, index) => ({
      operation: "write" as const,
      path: paths[index],
      content: stableDocument(document.content, reviewConfig.reviewerLogin),
      expectedSha: await publicExpectedSha(session!.site, paths[index]),
    })));
    const result = await session.site.batchCommit({ message: `Publish AI Daily Brief: ${session.manifest.date}`, changes });
    try {
      await closePrivateBundle(session);
      setStatus(`Published ${session.manifest.date} in ${result.commitSha.slice(0, 7)}. GitHub Pages is rebuilding now.`, { published: true });
    } catch {
      setStatus(`Published ${session.manifest.date} in ${result.commitSha.slice(0, 7)}, but could not close the private draft. Reconnect before approving another edition.`, { published: true, error: true });
    }
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "Publishing failed. Your private draft remains available to retry.", { error: true });
  }
}

export function mountReviewController(): void {
  window.addEventListener("ai-daily-review:sign-in", () => void connectRequested());
  window.addEventListener("ai-daily-review:manual-sign-in", () => void connectManually());
  window.addEventListener("ai-daily-review:edit", (event) => updateDailyDocument((event as CustomEvent<DailyEdit>).detail));
  window.addEventListener("ai-daily-review:publish", () => void approveAndPublish());
  void restoreConnection();
}
