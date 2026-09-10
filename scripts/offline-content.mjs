import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const SAFE_ID = /^[a-z0-9][a-z0-9-]*$/;

function frontmatter(document) {
  const match = /^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/.exec(document);
  return match?.[1] ?? "";
}

function scalar(source, key) {
  const match = new RegExp(`^${key}:\\s*["']?([^"'\\n]+)["']?\\s*$`, "m").exec(source);
  return match?.[1].trim();
}

function newsIds(source) {
  const inline = /^news:\s*(\[[^\n]*\])\s*$/m.exec(source)?.[1];
  if (inline) {
    try {
      const value = JSON.parse(inline);
      if (Array.isArray(value)) return value.filter((id) => typeof id === "string");
    } catch {
      throw new Error("The latest daily edition has an invalid inline news list.");
    }
  }

  const block = /^news:\s*\n((?:\s+-\s+[^\n]+\n?)*)/m.exec(source)?.[1] ?? "";
  return [...block.matchAll(/^\s+-\s+["']?([^"'\n]+)["']?\s*$/gm)].map((match) => match[1].trim());
}

/** Returns the newest stable edition day and its connected stories for PWA precaching. */
export async function latestStableOfflineContent(contentRoot = resolve("content")) {
  const dailyRoot = resolve(contentRoot instanceof URL ? contentRoot.pathname : contentRoot, "daily");
  const files = (await readdir(dailyRoot)).filter((name) => /\.mdx?$/.test(name));
  const editions = [];

  for (const file of files) {
    const id = file.replace(/\.mdx?$/, "");
    if (!SAFE_ID.test(id)) continue;
    const metadata = frontmatter(await readFile(resolve(dailyRoot, file), "utf8"));
    if ((scalar(metadata, "status") ?? "stable") !== "stable") continue;
    const date = scalar(metadata, "date");
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
    const stories = newsIds(metadata);
    if (stories.some((storyId) => !SAFE_ID.test(storyId))) throw new Error(`Edition ${id} contains an unsafe news id.`);
    editions.push({ id, date, stories });
  }

  const date = editions.map((edition) => edition.date).sort().at(-1) ?? null;
  const latestEditions = editions.filter((edition) => edition.date === date);
  const editionIds = latestEditions.map((edition) => edition.id).sort();
  const storyIds = [...new Set(latestEditions.flatMap((edition) => edition.stories))].sort();

  return {
    date,
    editionIds,
    storyIds,
    routes: [
      ...editionIds.map((id) => `daily/${id}`),
      ...storyIds.map((id) => `news/${id}`),
    ],
  };
}
