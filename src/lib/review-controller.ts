import type { CredentialProvider } from "@repo-apps/credentials";
import { RepositoryError, type RepositoryClient, type RepositoryFile } from "@repo-apps/repo-client";
import {
  authenticatedGitHubLogin,
  connectGitHubPat,
  createNewsRepositoryClients,
  repositoryConfigFromIdentities,
  verifyNewsRepositories
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
  original: string;
}
interface DraftManifest { schema: string; date: string; status: string; daily: string; news: string[]; files: string[]; }
interface ReviewSession {
  credentials: CredentialProvider;
  editorial: RepositoryClient;
  site: RepositoryClient;
  manifest: DraftManifest;
  manifestFile: RepositoryFile;
  daily: ReviewDocument;
  stories: ReviewDocument[];
  selectedIndex: number;
}

let session: ReviewSession | undefined;

function parseScalar(head: string, key: string): string {
  const match = new RegExp(`^${key}:\\s*(.+)$`, "m").exec(head);
  if (!match) return "";
  const value = match[1].trim();
  try { return typeof JSON.parse(value) === "string" ? JSON.parse(value) : value; } catch { return value.replace(/^['"]|['"]$/g, ""); }
}

function parseArray(head: string, key: string): string[] {
  const value = parseScalar(head, key);
  try { const parsed: unknown = JSON.parse(value); return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : []; }
  catch { return value.replace(/^\[|\]$/g, "").split(",").map((item) => item.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean); }
}

function parseSources(head: string): Source[] {
  const sourceBlock = /^sources:\s*\n([\s\S]*?)(?=^[A-Za-z_][\w-]*:|$)/m.exec(head)?.[1] ?? "";
  return sourceBlock.split(/^\s*-\s+/m).slice(1).map((entry) => ({
    resource: parseScalar(entry, "resource"), title: parseScalar(entry, "title"), author: parseScalar(entry, "author")
  })).filter((source) => source.resource);
}

function readDocument(file: RepositoryFile): ReviewDocument {
  const end = file.content.indexOf("\n---\n", 4);
  if (!file.content.startsWith("---\n") || end < 0) throw new Error(`${file.path} has invalid frontmatter.`);
  const head = file.content.slice(4, end);
  return {
    ...file,
    original: file.content,
    metadata: {
      title: parseScalar(head, "title"), description: parseScalar(head, "description"), summary: parseScalar(head, "summary"),
      date: parseScalar(head, "date"), status: parseScalar(head, "status"), categories: parseArray(head, "categories"), tags: parseArray(head, "tags"), sources: parseSources(head)
    }
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
  const sourceBlock = `sources:\n${sources.map((source, index) => `  - id: source-${index + 1}\n    resource: ${JSON.stringify(source.resource ?? "")}${source.title ? `\n    title: ${JSON.stringify(source.title)}` : ""}`).join("\n")}\n`;
  const expression = /^sources:\n(?:^[ \t].*(?:\n|$))*/m;
  return expression.test(content) ? content.replace(expression, sourceBlock) : content.replace(/^---\n/, `---\n${sourceBlock}`);
}

function updateSelectedDocument(detail: { index: number; title: string; summary: string; categories: string[]; tags: string[]; sources: Source[] }) {
  if (!session) return;
  const document = detail.index === 0 ? session.daily : session.stories[detail.index - 1];
  if (!document) return;
  document.content = updateSources(updateArray(updateArray(updateLine(updateLine(document.content, "title", detail.title), document.metadata.summary ? "summary" : "description", detail.summary), "categories", detail.categories), "tags", detail.tags), detail.sources);
  document.metadata = { ...document.metadata, title: detail.title, ...(document.metadata.summary ? { summary: detail.summary } : { description: detail.summary }), categories: detail.categories, tags: detail.tags, sources: detail.sources };
}

function model() {
  if (!session) return undefined;
  const asView = (document: ReviewDocument) => ({ ...document.metadata, sources: document.metadata.sources });
  return { edition: { ...asView(session.daily), stories: session.stories.map(asView) }, selectedIndex: session.selectedIndex };
}

function emitModel() { window.dispatchEvent(new CustomEvent("ai-daily-review:model", { detail: model() })); }
function setMessage(message: string) { const target = document.querySelector<HTMLElement>("[data-auth-message]"); if (target) target.textContent = message; }
function setSignedIn(signedIn: boolean) { const target = document.querySelector<HTMLElement>(".signed-out"); if (target) target.hidden = signedIn; }

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

async function connect() {
  const missing = missingReviewConfiguration();
  if (missing.length) { setMessage(`Review is not configured yet: ${missing.join(", ")}.`); return; }
  const token = window.prompt("Paste a fine-grained GitHub PAT limited to the editorial and publication repositories. It will be kept for this browser tab only.");
  if (!token) return;
  const credentials = connectGitHubPat({ requestToken: () => token.trim() });
  try {
    await credentials.connect();
    const repositories = repositoryConfigFromIdentities(`${reviewConfig.editorialRepository}#${reviewConfig.editorialBranch}`, `${reviewConfig.publicRepository}#${reviewConfig.publicBranch}`);
    const clients = createNewsRepositoryClients(repositories, credentials);
    const [access, login] = await Promise.all([verifyNewsRepositories(clients), authenticatedGitHubLogin(credentials)]);
    if (login.toLowerCase() !== reviewConfig.reviewerLogin.toLowerCase()) throw new Error(`This review area is restricted to ${reviewConfig.reviewerLogin}. Connected as ${login}.`);
    if (!access.editorial.canRead || !access.editorial.canWrite || !access.site.canWrite) throw new Error("The PAT needs Contents: read and write for both configured repositories.");
    const draft = await loadLatestDraft(clients.editorial);
    session = { credentials, editorial: clients.editorial, site: clients.site, ...draft, selectedIndex: 0 };
    setSignedIn(true); setMessage(""); emitModel();
  } catch (error) {
    await credentials.disconnect();
    setMessage(error instanceof Error ? error.message : "Could not connect to the review repositories.");
  }
}

async function saveEdits(): Promise<void> {
  if (!session) throw new Error("Connect before saving a review.");
  const changed = [session.daily, ...session.stories].filter((document) => document.content !== document.original);
  if (!changed.length) return;
  const result = await session.editorial.batchCommit({ message: `Review AI Daily editorial draft: ${session.manifest.date}`, changes: changed.map((document) => ({ operation: "write" as const, path: document.path, content: document.content, expectedSha: document.sha })) });
  const refreshed = await loadLatestDraft(session.editorial);
  session = { ...session, ...refreshed, selectedIndex: session.selectedIndex };
  setMessage(`Saved review changes in ${result.commitSha.slice(0, 7)}.`); emitModel();
}

function stableDocument(content: string, reviewer: string): string {
  const verified = `verified: { by: ${JSON.stringify(`human:${reviewer}`)}, at: ${JSON.stringify(new Date().toISOString())} }`;
  const withVerification = /^verified:/m.test(content) ? content : content.replace(/^status: draft$/m, `${verified}\nstatus: draft`);
  return withVerification.replace(/^status: draft$/m, "status: stable");
}

async function publicExpectedSha(client: RepositoryClient, path: string): Promise<string | undefined> {
  try { return (await client.readFile(path)).sha; }
  catch (error) { if (error instanceof RepositoryError && error.code === "not-found") return undefined; throw error; }
}

async function closePrivateBundle(current: ReviewSession): Promise<void> {
  const documents = [current.daily, ...current.stories];
  const manifest = { ...current.manifest, status: "published", publishedAt: new Date().toISOString() };
  await current.editorial.batchCommit({
    message: `Close reviewed AI Daily editorial draft: ${current.manifest.date}`,
    changes: [
      ...documents.map((document) => ({ operation: "write" as const, path: document.path, content: stableDocument(document.content, reviewConfig.reviewerLogin), expectedSha: document.sha })),
      { operation: "write" as const, path: current.manifestFile.path, content: `${JSON.stringify(manifest, null, 2)}\n`, expectedSha: current.manifestFile.sha }
    ]
  });
}

async function approveAndPublish() {
  if (!session) return;
  try {
    await saveEdits();
    if (!session) return;
    const documents = [session.daily, ...session.stories];
    const paths = [`content/daily/${session.manifest.date}.md`, ...session.stories.map((story) => `content/news/${story.path.split("/").at(-1)}`)];
    if (new Set(paths).size !== 11) throw new Error("Publication paths are not a valid daily bundle.");
    const changes = await Promise.all(documents.map(async (document, index) => ({ operation: "write" as const, path: paths[index], content: stableDocument(document.content, reviewConfig.reviewerLogin), expectedSha: await publicExpectedSha(session!.site, paths[index]) })));
    const result = await session.site.batchCommit({ message: `Publish AI Daily Brief: ${session.manifest.date}`, changes });
    try {
      await closePrivateBundle(session);
      setMessage(`Published ${session.manifest.date} in ${result.commitSha.slice(0, 7)}. GitHub Pages is rebuilding now.`);
    } catch {
      setMessage(`Published ${session.manifest.date} in ${result.commitSha.slice(0, 7)}, but could not close the private draft. Reconnect before approving another edition.`);
    }
  } catch (error) {
    setMessage(error instanceof Error ? error.message : "Publishing failed. Your private draft remains available to retry.");
  }
}

export function mountReviewController() {
  window.addEventListener("ai-daily-review:sign-in", () => void connect());
  window.addEventListener("ai-daily-review:select", (event) => { if (session) { session.selectedIndex = (event as CustomEvent<{ index: number }>).detail.index; } });
  window.addEventListener("ai-daily-review:edit", (event) => updateSelectedDocument((event as CustomEvent<{ index: number; title: string; summary: string; categories: string[]; tags: string[]; sources: Source[] }>).detail));
  window.addEventListener("ai-daily-review:publish", () => void approveAndPublish());
}
