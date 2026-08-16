#!/usr/bin/env node
/** Validate the small, filesystem-safe OKF editorial bundle emitted by generate-daily. */
import { readFile, stat } from "node:fs/promises";
import { resolve, join, relative } from "node:path";

const repo = process.env.NEWS_EDITORIAL_REPO ?? process.env.EDITORIAL_REPO;
const date = process.argv.find((arg) => arg.startsWith("--date="))?.slice(7);
const bundleArg = process.argv.find((arg) => arg.startsWith("--bundle="))?.slice(9);
const bundle = resolve(bundleArg ?? (repo && date ? join(repo, "drafts", date) : ""));
if (!bundleArg && (!repo || !date)) throw new Error("Set NEWS_EDITORIAL_REPO and --date=YYYY-MM-DD (or pass --bundle=PATH).");
if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? bundle.split("/").at(-1))) throw new Error("Invalid editorial draft date.");

const manifest = JSON.parse(await readFile(join(bundle, "manifest.json"), "utf8"));
const expectedDate = date ?? manifest.date;
if (!["ai-news-daily/editorial-draft/v1", "ai-news-daily/editorial-draft/v2"].includes(manifest.schema) || manifest.status !== "draft" || manifest.date !== expectedDate) throw new Error("Invalid OKF editorial draft manifest.");
if (manifest.schema.endsWith("/v2")) {
  const pipeline = manifest.pipeline;
  if (!pipeline || !/^[a-z0-9][a-z0-9-]*$/.test(pipeline.id ?? "") || typeof pipeline.title !== "string" || !Array.isArray(pipeline.categories) || !pipeline.categories.length) throw new Error("Pipeline draft manifests need a valid pipeline definition.");
  if (manifest.publicId !== `${expectedDate}--${pipeline.id}`) throw new Error("Pipeline draft manifest has an invalid public article id.");
}
if (!Array.isArray(manifest.news) || manifest.news.length !== 10 || manifest.daily !== "daily.md") throw new Error("Manifest must contain one daily and ten news concepts.");
const files = [manifest.daily, ...manifest.news];
if (!Array.isArray(manifest.files) || manifest.files.length !== 11 || new Set(manifest.files).size !== 11 || manifest.files.some((file) => !files.includes(file))) throw new Error("Manifest file list is incomplete.");
const frontmatter = (text, file) => {
  if (!text.startsWith("---\n") || !text.includes("\n---\n")) throw new Error(`${file} is missing YAML frontmatter.`);
  const head = text.slice(4, text.indexOf("\n---\n"));
  for (const field of ["type:", "title:", `date: ${expectedDate}`, "status: draft", "sources:"]) if (!head.includes(field)) throw new Error(`${file} is missing frontmatter ${field}`);
};
for (const file of files) {
  if (!file || file.startsWith("/") || file.split("/").includes("..") || resolve(bundle, file) !== resolve(bundle, relative(bundle, resolve(bundle, file)))) throw new Error(`Unsafe manifest path: ${file}`);
  await stat(join(bundle, file));
  frontmatter(await readFile(join(bundle, file), "utf8"), file);
}
const daily = await readFile(join(bundle, manifest.daily), "utf8");
for (const story of manifest.news) if (!daily.includes(story.replace(/^news\//, "").replace(/\.md$/, ""))) throw new Error(`Daily brief does not link ${story}.`);
console.log(`Validated OKF editorial draft: ${bundle}`);
