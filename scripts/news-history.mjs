import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const STOP_WORDS = new Set([
  "about", "after", "ahead", "against", "amid", "and", "are", "be", "becoming", "before", "being", "by",
  "for", "from", "gets", "has", "have", "into", "its", "new", "not", "of", "on", "over", "the", "their",
  "this", "to", "towards", "under", "with",
]);

async function markdownFiles(directory, { requireNewsDirectory = false, inNewsDirectory = false } = {}) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        files.push(...await markdownFiles(path, {
          requireNewsDirectory,
          inNewsDirectory: inNewsDirectory || entry.name === "news",
        }));
      } else if (entry.isFile() && entry.name.endsWith(".md") && (!requireNewsDirectory || inNewsDirectory)) {
        files.push(path);
      }
    }
    return files;
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

function scalar(value) {
  const clean = value.trim();
  if (clean.startsWith('"') && clean.endsWith('"')) {
    try { return String(JSON.parse(clean)); } catch { return clean.slice(1, -1); }
  }
  if (clean.startsWith("'") && clean.endsWith("'")) return clean.slice(1, -1).replace(/''/g, "'");
  return clean;
}

function frontmatter(text) {
  const match = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(text);
  return match?.[1] ?? "";
}

function parseStory(text) {
  const head = frontmatter(text);
  if (!head) return null;
  const title = scalar(/^title:\s*(.+)$/m.exec(head)?.[1] ?? "").trim();
  const status = scalar(/^status:\s*(.+)$/m.exec(head)?.[1] ?? "").trim();
  const sources = [...head.matchAll(/^\s+resource:\s*(.+)$/gm)]
    .map((match) => scalar(match[1]).trim())
    .filter((resource) => /^https?:\/\//i.test(resource));
  return title && sources.length ? { title, sources, status } : null;
}

export async function loadStoryHistory({ publicNewsRoot, editorialRoot }) {
  const publicFiles = await markdownFiles(publicNewsRoot);
  const editorialFiles = await markdownFiles(join(editorialRoot, "drafts"), { requireNewsDirectory: true });
  const files = [...publicFiles.map((path) => ({ path, public: true })), ...editorialFiles.map((path) => ({ path, public: false }))];
  const stories = [];
  for (const file of files) {
    const story = parseStory(await readFile(file.path, "utf8"));
    // The public repository contains a draft-only schema fixture; it is not accumulated news.
    if (story && (!file.public || story.status !== "draft")) stories.push(story);
  }
  return stories;
}

export function normaliseNewsUrl(value) {
  try {
    const url = new URL(value);
    url.hash = "";
    for (const key of [...url.searchParams.keys()]) if (/^(utm_|fbclid$|gclid$)/i.test(key)) url.searchParams.delete(key);
    return url.toString().replace(/\/$/, "");
  } catch {
    return String(value).trim().replace(/\/$/, "");
  }
}

export function normaliseNewsTitle(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function titleTokens(value) {
  return new Set(normaliseNewsTitle(value).split(" ").filter((token) => token.length > 2 && !STOP_WORDS.has(token)));
}

function titleSimilarity(left, right) {
  const leftTokens = titleTokens(left);
  const rightTokens = titleTokens(right);
  if (leftTokens.size < 4 || rightTokens.size < 4) return 0;
  const shared = [...leftTokens].filter((token) => rightTokens.has(token)).length;
  return shared / Math.min(leftTokens.size, rightTokens.size);
}

function sourceUrls(story) {
  return new Set((story.sources ?? []).map((source) => normaliseNewsUrl(typeof source === "string" ? source : source.resource)).filter(Boolean));
}

export function duplicateReason(story, previousStories) {
  const title = normaliseNewsTitle(story.title);
  const urls = sourceUrls(story);
  for (const previous of previousStories) {
    if (title && title === normaliseNewsTitle(previous.title)) return `title matches “${previous.title}”`;
    const sharedSource = [...urls].some((url) => sourceUrls(previous).has(url));
    if (sharedSource && titleSimilarity(story.title, previous.title) >= 0.7) return `title/source overlap with “${previous.title}”`;
    if (titleSimilarity(story.title, previous.title) >= 0.85) return `title is too similar to “${previous.title}”`;
  }
  return null;
}

export function formatStoryExclusions(stories) {
  const unique = new Map();
  for (const story of stories) {
    const key = normaliseNewsTitle(story.title);
    if (!key) continue;
    const existing = unique.get(key);
    if (existing) {
      existing.sources = [...new Set([...existing.sources, ...story.sources])];
    } else {
      unique.set(key, { title: story.title, sources: [...new Set(story.sources)] });
    }
  }
  return [...unique.values()]
    .sort((left, right) => left.title.localeCompare(right.title))
    .map((story) => `- ${story.title} | ${story.sources.join(", ")}`)
    .join("\n");
}
