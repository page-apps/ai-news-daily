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
interface PipelineMetadata { id: string; title: string; categories: string[] }
interface DraftManifest {
  schema: string;
  date: string;
  status: string;
  daily: string;
  news: string[];
  files: string[];
  pipeline?: PipelineMetadata;
  publicId?: string;
  autoReview?: {
    status?: string;
    score?: number | null;
    threshold?: number;
    reviewer?: string;
    checkedAt?: string;
    blockingIssues?: string[];
    warnings?: string[];
  };
}
interface DraftDescriptor {
  id: string;
  bundlePath: string;
  manifest: DraftManifest;
  manifestFile: RepositoryFile;
  pipeline: PipelineMetadata;
}
interface EditorialDraftIndexEntry {
  id: string;
  bundlePath: string;
  manifestPath: string;
  manifestSha: string;
  manifest: DraftManifest;
}
interface EditorialDraftIndex {
  schema: string;
  drafts: EditorialDraftIndexEntry[];
}
interface EditorialDraftIndexState {
  file: RepositoryFile;
  value: EditorialDraftIndex;
}
interface ReviewConnection {
  credentials: CredentialProvider;
  editorial: RepositoryClient;
  site: RepositoryClient;
}
interface ReviewSession extends ReviewConnection {
  descriptor: DraftDescriptor;
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

let connection: ReviewConnection | undefined;
let session: ReviewSession | undefined;
let pendingDrafts: DraftDescriptor[] = [];
let editorialIndex: EditorialDraftIndexState | undefined;
let sharedCredentialAvailable = false;

const editorialIndexPath = "drafts/index.json";
const editorialIndexSchema = "ai-news-daily/editorial-index/v1";

function manifestContent(manifest: DraftManifest): string {
  return `${JSON.stringify(manifest, null, 2)}\n`;
}

function indexDescriptor(entry: EditorialDraftIndexEntry): DraftDescriptor {
  if (!entry || entry.id !== entry.bundlePath || entry.manifestPath !== `${entry.bundlePath}/manifest.json` || !/^[a-f0-9]{40}$/.test(entry.manifestSha)) {
    throw new Error("The editorial index contains an invalid bundle entry.");
  }
  const manifest = validateManifest(entry.manifest, entry.bundlePath);
  const content = manifestContent(manifest);
  return {
    id: entry.id,
    bundlePath: entry.bundlePath,
    manifest,
    manifestFile: { path: entry.manifestPath, sha: entry.manifestSha, content, size: new TextEncoder().encode(content).byteLength },
    pipeline: pipelineFor(manifest),
  };
}

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

function pipelineFor(manifest: DraftManifest): PipelineMetadata {
  if (manifest.pipeline && /^[a-z0-9][a-z0-9-]*$/.test(manifest.pipeline.id) && manifest.pipeline.title) {
    return { id: manifest.pipeline.id, title: manifest.pipeline.title, categories: manifest.pipeline.categories ?? [] };
  }
  return { id: "legacy-ai", title: "AI Daily Brief", categories: [] };
}

function validateManifest(value: unknown, bundlePath: string): DraftManifest {
  if (!value || typeof value !== "object") throw new Error(`Draft bundle ${bundlePath} has an invalid manifest.`);
  const manifest = value as DraftManifest;
  if (!["ai-news-daily/editorial-draft/v1", "ai-news-daily/editorial-draft/v2"].includes(manifest.schema)
    || !/^\d{4}-\d{2}-\d{2}$/.test(manifest.date)
    || !Array.isArray(manifest.news)
    || manifest.news.length !== 10
    || manifest.daily !== "daily.md"
    || !Array.isArray(manifest.files)
    || manifest.files.length !== 11) throw new Error(`Draft bundle ${bundlePath} is invalid.`);
  if (manifest.schema.endsWith("/v2")) {
    const pipeline = pipelineFor(manifest);
    if (pipeline.id === "legacy-ai" || manifest.publicId !== `${manifest.date}--${pipeline.id}`) throw new Error(`Draft bundle ${bundlePath} has an invalid pipeline definition.`);
  }
  return manifest;
}

async function draftDescriptor(editorial: RepositoryClient, bundlePath: string): Promise<DraftDescriptor> {
  const manifestFile = await editorial.readFile(`${bundlePath}/manifest.json`);
  const manifest = validateManifest(JSON.parse(manifestFile.content), bundlePath);
  const pipeline = pipelineFor(manifest);
  return { id: bundlePath, bundlePath, manifest, manifestFile, pipeline };
}

async function loadIndexedDrafts(editorial: RepositoryClient): Promise<DraftDescriptor[] | undefined> {
  let file: RepositoryFile;
  try {
    file = await editorial.readFile(editorialIndexPath);
  } catch (error) {
    if (error instanceof RepositoryError && error.code === "not-found") {
      editorialIndex = undefined;
      return undefined;
    }
    throw error;
  }
  try {
    const value = JSON.parse(file.content) as EditorialDraftIndex;
    if (value.schema !== editorialIndexSchema || !Array.isArray(value.drafts)) throw new Error("Invalid editorial index schema.");
    const descriptors = value.drafts.map(indexDescriptor);
    editorialIndex = { file, value };
    return descriptors;
  } catch {
    // Older editorial repositories do not have the index yet. Keep the
    // original scan as a compatibility path until the next publish run.
    editorialIndex = undefined;
    return undefined;
  }
}

async function loadPendingDrafts(editorial: RepositoryClient): Promise<DraftDescriptor[]> {
  const indexed = await loadIndexedDrafts(editorial);
  if (indexed) {
    return indexed
      .filter((draft) => draft.manifest.status === "draft")
      .sort((left, right) => right.manifest.date.localeCompare(left.manifest.date) || left.pipeline.title.localeCompare(right.pipeline.title));
  }
  const entries = await editorial.list("drafts");
  const dates = entries.filter((entry) => entry.type === "dir" && /^\d{4}-\d{2}-\d{2}$/.test(entry.name)).map((entry) => entry.name).sort();
  const candidates: DraftDescriptor[] = [];
  for (const date of dates) {
    const base = `drafts/${date}`;
    const children = await editorial.list(base);
    if (children.some((entry) => entry.type === "file" && entry.name === "manifest.json")) candidates.push(await draftDescriptor(editorial, base));
    for (const child of children.filter((entry) => entry.type === "dir" && !entry.name.startsWith("."))) {
      const childPath = `${base}/${child.name}`;
      const childEntries = await editorial.list(childPath);
      // A v1 draft has a sibling `news/` support directory. Only a directory
      // containing its own manifest is an independent v2 pipeline bundle.
      if (childEntries.some((entry) => entry.type === "file" && entry.name === "manifest.json")) {
        candidates.push(await draftDescriptor(editorial, childPath));
      }
    }
  }
  return candidates
    .filter((draft) => draft.manifest.status === "draft")
    .sort((left, right) => right.manifest.date.localeCompare(left.manifest.date) || left.pipeline.title.localeCompare(right.pipeline.title));
}

async function loadDraft(editorial: RepositoryClient, descriptor: DraftDescriptor): Promise<{ manifest: DraftManifest; manifestFile: RepositoryFile; daily: ReviewDocument; stories: ReviewDocument[] }> {
  const [daily, ...stories] = await Promise.all([descriptor.manifest.daily, ...descriptor.manifest.news].map((path) => editorial.readFile(`${descriptor.bundlePath}/${path}`)));
  return { manifest: descriptor.manifest, manifestFile: descriptor.manifestFile, daily: readDocument(daily), stories: stories.map(readDocument) };
}

function model() {
  return {
    drafts: pendingDrafts.map((draft) => ({ id: draft.id, date: draft.manifest.date, pipeline: draft.pipeline, status: draft.manifest.status, autoReview: draft.manifest.autoReview })),
    selectedDraftId: session?.descriptor.id,
    edition: session ? {
      ...session.daily.metadata,
      body: session.daily.body,
      sources: uniqueSources(session.daily.metadata.sources),
      supportingConcepts: session.stories.length,
      pipeline: session.descriptor.pipeline,
      autoReview: session.manifest.autoReview,
    } : undefined,
  };
}

function emitModel(): void {
  window.dispatchEvent(new CustomEvent("ai-daily-review:model", { detail: model() }));
}

function setStatus(message: string, options: { busy?: boolean; success?: boolean; error?: boolean } = {}): void {
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

async function refreshDrafts(preferredId?: string): Promise<void> {
  if (!connection) return;
  pendingDrafts = await loadPendingDrafts(connection.editorial);
  const descriptor = pendingDrafts.find((draft) => draft.id === preferredId) ?? pendingDrafts[0];
  if (!descriptor) {
    session = undefined;
    emitModel();
    return;
  }
  const loaded = await loadDraft(connection.editorial, descriptor);
  session = { ...connection, descriptor, ...loaded };
  emitModel();
}

async function loadSelectedDraft(descriptor: DraftDescriptor): Promise<void> {
  if (!connection) return;
  const loaded = await loadDraft(connection.editorial, descriptor);
  session = { ...connection, descriptor, ...loaded };
  emitModel();
}

async function removeCurrentDraft(current: ReviewSession): Promise<void> {
  pendingDrafts = pendingDrafts.filter((draft) => draft.id !== current.descriptor.id);
  const next = pendingDrafts[0];
  if (!next) {
    session = undefined;
    emitModel();
    return;
  }
  await loadSelectedDraft(next);
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
  if (login.toLowerCase() !== reviewConfig.reviewerLogin.toLowerCase()) throw new Error(`This review area is restricted to ${reviewConfig.reviewerLogin}. Connected as ${login}.`);
  if (!access.editorial.canRead || !access.editorial.canWrite || !access.site.canWrite) throw new Error("The PAT needs Contents: read and write for ai-news-daily and ai-news-daily-editorial.");
  connection = { credentials, editorial: clients.editorial, site: clients.site };
  setSignedIn(true, login);
  setStatus("Loading private drafts…", { busy: true });
  await refreshDrafts();
  setStatus(session
    ? `Ready to review ${pendingDrafts.length} pending article${pendingDrafts.length === 1 ? "" : "s"}.`
    : "No pending editorial drafts. Published and discarded drafts remain private in the editorial repository.");
}

function friendlyConnectionError(error: unknown, shared = false): string {
  if (shared && error instanceof RepositoryError && (error.code === "authentication" || error.code === "permission")) return "The shared PAT cannot access both news repositories. Update it in the Page Apps hub with Contents: read and write for ai-news-daily and ai-news-daily-editorial.";
  return error instanceof Error ? error.message : "Could not connect to the review repositories.";
}

async function useSharedCredential(): Promise<void> {
  const credentials = sharedNewsPat();
  try {
    if (!await credentials.useShared()) throw new Error("The shared PAT is no longer available. Set it up again in the Page Apps hub.");
    await finishConnection(credentials);
  } catch (error) {
    await credentials.disconnect();
    connection = undefined;
    session = undefined;
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
    connection = undefined;
    session = undefined;
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
    if (await shared.hasAppRegistration() && await shared.useShared()) {
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

function hasUnsavedEdits(current: ReviewSession): boolean {
  return [current.daily, ...current.stories].some((document) => document.content !== document.original);
}

async function selectDraft(id: string): Promise<void> {
  if (!connection || !pendingDrafts.some((draft) => draft.id === id)) return;
  if (session && session.descriptor.id !== id && hasUnsavedEdits(session) && !window.confirm("Switching articles will discard unsaved edits in this browser. Continue?")) return;
  try {
    setStatus("Loading the selected draft…", { busy: true });
    const descriptor = pendingDrafts.find((draft) => draft.id === id);
    if (!descriptor) return;
    await loadSelectedDraft(descriptor);
    if (session) setStatus(`Reviewing ${session.descriptor.pipeline.title} for ${session.manifest.date}.`);
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "Could not load the selected draft.", { error: true });
  }
}

async function saveEdits(): Promise<void> {
  if (!session) throw new Error("Connect before saving a review.");
  const current = session;
  const changed = [current.daily, ...current.stories].filter((document) => document.content !== document.original);
  if (!changed.length) return;
  await current.editorial.batchCommit({
    message: `Review ${current.descriptor.pipeline.title} editorial draft: ${current.manifest.date}`,
    changes: changed.map((document) => ({ operation: "write" as const, path: document.path, content: document.content, expectedSha: document.sha })),
  });
  await loadSelectedDraft(current.descriptor);
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

interface EditorialIndexUpdate {
  value: EditorialDraftIndex;
  content: string;
  sha: string;
  change: { operation: "write"; path: string; content: string; expectedSha: string };
}

async function gitBlobSha(content: string): Promise<string> {
  const bytes = new TextEncoder().encode(content);
  const prefix = new TextEncoder().encode(`blob ${bytes.byteLength}\0`);
  const input = new Uint8Array(prefix.byteLength + bytes.byteLength);
  input.set(prefix);
  input.set(bytes, prefix.byteLength);
  const digest = await globalThis.crypto.subtle.digest("SHA-1", input);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function editorialIndexUpdate(current: ReviewSession, manifest: DraftManifest): Promise<EditorialIndexUpdate | undefined> {
  if (!editorialIndex) return undefined;
  const existing = editorialIndex.value.drafts.find((draft) => draft.id === current.descriptor.id);
  if (!existing) throw new Error("The editorial index no longer contains the selected draft. Reload the review page.");
  const manifestSha = await gitBlobSha(manifestContent(manifest));
  const nextDrafts = editorialIndex.value.drafts.map((draft) => draft.id === current.descriptor.id
    ? { ...draft, manifest, manifestSha }
    : draft);
  const value = { ...editorialIndex.value, drafts: nextDrafts };
  const content = `${JSON.stringify(value, null, 2)}\n`;
  return {
    value,
    content,
    sha: await gitBlobSha(content),
    change: { operation: "write", path: editorialIndex.file.path, content, expectedSha: editorialIndex.file.sha },
  };
}

function applyEditorialIndexUpdate(update: EditorialIndexUpdate | undefined): void {
  if (!update || !editorialIndex) return;
  editorialIndex = {
    value: update.value,
    file: { ...editorialIndex.file, content: update.content, sha: update.sha, size: new TextEncoder().encode(update.content).byteLength },
  };
}

function publicEditionId(current: ReviewSession): string {
  const value = current.manifest.publicId ?? current.manifest.date;
  if (!/^\d{4}-\d{2}-\d{2}(?:--[a-z0-9][a-z0-9-]*)?$/.test(value)) throw new Error("The draft has an unsafe public article id.");
  return value;
}

async function closePrivateBundle(current: ReviewSession): Promise<void> {
  const documents = [current.daily, ...current.stories];
  const manifest = { ...current.manifest, status: "published", publishedAt: new Date().toISOString(), publishedBy: `human:${reviewConfig.reviewerLogin}` };
  const indexUpdate = await editorialIndexUpdate(current, manifest);
  await current.editorial.batchCommit({
    message: `Close reviewed ${current.descriptor.pipeline.title} editorial draft: ${current.manifest.date}`,
    changes: [
      ...documents.map((document) => ({ operation: "write" as const, path: document.path, content: stableDocument(document.content, reviewConfig.reviewerLogin), expectedSha: document.sha })),
      { operation: "write" as const, path: current.manifestFile.path, content: `${JSON.stringify(manifest, null, 2)}\n`, expectedSha: current.manifestFile.sha },
      ...(indexUpdate ? [indexUpdate.change] : []),
    ],
  });
  applyEditorialIndexUpdate(indexUpdate);
}

async function discardCurrentDraft(): Promise<void> {
  if (!session) {
    setStatus("Connect before discarding an edition.", { error: true });
    return;
  }
  const current = session;
  try {
    setStatus("Marking this private draft as discarded…", { busy: true });
    const manifest = { ...current.manifest, status: "discarded", discardedAt: new Date().toISOString(), discardedBy: `human:${reviewConfig.reviewerLogin}` };
    const indexUpdate = await editorialIndexUpdate(current, manifest);
    await current.editorial.batchCommit({
      message: `Discard ${current.descriptor.pipeline.title} editorial draft: ${current.manifest.date}`,
      changes: [
        { operation: "write" as const, path: current.manifestFile.path, content: `${JSON.stringify(manifest, null, 2)}\n`, expectedSha: current.manifestFile.sha },
        ...(indexUpdate ? [indexUpdate.change] : []),
      ],
    });
    applyEditorialIndexUpdate(indexUpdate);
    await removeCurrentDraft(current);
    setStatus(`Discarded the private ${current.descriptor.pipeline.title} draft. It will not appear in the review queue again.`, { success: true });
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "Discarding failed. The private draft remains available.", { error: true });
  }
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
    const current = session;
    const documents = [current.daily, ...current.stories];
    const editionId = publicEditionId(current);
    const paths = [`content/daily/${editionId}.md`, ...current.stories.map((story) => `content/news/${story.path.split("/").at(-1)}`)];
    if (new Set(paths).size !== 11) throw new Error("Publication paths are not a valid editorial bundle.");
    setStatus("Publishing the article and its supporting news concepts…", { busy: true });
    const changes = await Promise.all(documents.map(async (document, index) => ({
      operation: "write" as const,
      path: paths[index],
      content: stableDocument(document.content, reviewConfig.reviewerLogin),
      expectedSha: await publicExpectedSha(current.site, paths[index]),
    })));
    const result = await current.site.batchCommit({ message: `Publish ${current.descriptor.pipeline.title}: ${current.manifest.date}`, changes });
    try {
      await closePrivateBundle(current);
      await removeCurrentDraft(current);
      setStatus(`Published ${current.descriptor.pipeline.title} in ${result.commitSha.slice(0, 7)}. GitHub Pages is rebuilding now.`, { success: true });
    } catch {
      setStatus(`Published ${current.descriptor.pipeline.title} in ${result.commitSha.slice(0, 7)}, but could not close the private draft. Reconnect before approving another edition.`, { success: true, error: true });
    }
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "Publishing failed. Your private draft remains available to retry.", { error: true });
  }
}

export function mountReviewController(): void {
  window.addEventListener("ai-daily-review:sign-in", () => void connectRequested());
  window.addEventListener("ai-daily-review:manual-sign-in", () => void connectManually());
  window.addEventListener("ai-daily-review:edit", (event) => updateDailyDocument((event as CustomEvent<DailyEdit>).detail));
  window.addEventListener("ai-daily-review:select-draft", (event) => void selectDraft((event as CustomEvent<{ id?: string }>).detail?.id ?? ""));
  window.addEventListener("ai-daily-review:discard", () => void discardCurrentDraft());
  window.addEventListener("ai-daily-review:publish", () => void approveAndPublish());
  void restoreConnection();
}
