#!/usr/bin/env node
/** Builds the small metadata index used by the browser review queue. */
import { access, readFile, readdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join, relative, resolve } from "node:path";

export const editorialIndexPath = "drafts/index.json";
export const editorialIndexSchema = "ai-news-daily/editorial-index/v1";

export function gitBlobSha(content) {
  const bytes = Buffer.from(content, "utf8");
  return createHash("sha1").update(`blob ${bytes.byteLength}\0`).update(bytes).digest("hex");
}

async function exists(path) {
  try { await access(path); return true; }
  catch (error) { if (error.code === "ENOENT") return false; throw error; }
}

async function bundlePaths(editorialRoot) {
  const draftsRoot = join(editorialRoot, "drafts");
  const dates = (await readdir(draftsRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(entry.name))
    .map((entry) => entry.name)
    .sort();
  const bundles = [];
  for (const date of dates) {
    const dateRoot = join(draftsRoot, date);
    const children = await readdir(dateRoot, { withFileTypes: true });
    if (children.some((entry) => entry.isFile() && entry.name === "manifest.json")) bundles.push(dateRoot);
    for (const child of children.filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))) {
      const candidate = join(dateRoot, child.name);
      if (await exists(join(candidate, "manifest.json"))) bundles.push(candidate);
    }
  }
  return bundles;
}

function toRepositoryPath(path) {
  return path.split("\\").join("/");
}

export async function buildEditorialIndex(editorialRoot) {
  const repository = resolve(editorialRoot);
  const drafts = [];
  for (const bundle of await bundlePaths(repository)) {
    const manifestPath = join(bundle, "manifest.json");
    const content = await readFile(manifestPath, "utf8");
    let manifest;
    try { manifest = JSON.parse(content); }
    catch (error) { throw new Error(`Invalid JSON in ${manifestPath}: ${error.message}`); }
    if (!manifest || typeof manifest !== "object" || !/^\d{4}-\d{2}-\d{2}$/.test(manifest.date) || typeof manifest.status !== "string") {
      throw new Error(`Invalid editorial manifest: ${manifestPath}`);
    }
    const bundlePath = toRepositoryPath(relative(repository, bundle));
    drafts.push({
      id: bundlePath,
      bundlePath,
      manifestPath: `${bundlePath}/manifest.json`,
      manifestSha: gitBlobSha(content),
      manifest,
    });
  }
  return {
    schema: editorialIndexSchema,
    drafts: drafts.sort((left, right) => right.manifest.date.localeCompare(left.manifest.date) || left.id.localeCompare(right.id)),
  };
}

export async function writeEditorialIndex(editorialRoot) {
  const repository = resolve(editorialRoot);
  const value = await buildEditorialIndex(repository);
  const content = `${JSON.stringify(value, null, 2)}\n`;
  const path = join(repository, editorialIndexPath);
  let previous = "";
  try { previous = await readFile(path, "utf8"); }
  catch (error) { if (error.code !== "ENOENT") throw error; }
  if (previous !== content) await writeFile(path, content, "utf8");
  return { path, relativePath: editorialIndexPath, value, content, changed: previous !== content };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const repository = process.argv.find((arg) => arg.startsWith("--repo="))?.slice("--repo=".length)
    ?? process.env.NEWS_EDITORIAL_REPO
    ?? process.env.EDITORIAL_REPO;
  if (!repository || !repository.startsWith("/")) throw new Error("Set --repo=/absolute/path or NEWS_EDITORIAL_REPO.");
  const result = await writeEditorialIndex(repository);
  console.log(`${result.changed ? "Wrote" : "Verified"} ${result.relativePath} with ${result.value.drafts.length} editorial bundles.`);
}
