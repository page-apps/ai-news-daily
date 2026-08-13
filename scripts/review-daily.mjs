#!/usr/bin/env node
import { readFile, readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const reviewer = process.env.NEWS_REVIEWER;
if (!reviewer?.startsWith("human:")) throw new Error("Set NEWS_REVIEWER to a human actor such as human:cmwen before publishing.");
const editions = (await readdir(join(root, "content/daily"))).filter((file) => file.endsWith(".md")).sort();
const latest = editions.at(-1);
if (!latest) throw new Error("No daily edition found.");
const date = latest.slice(0, 10);
const files = [join(root, "content/daily", latest), ...(await readdir(join(root, "content/news"))).filter((file) => file.startsWith(`${date}-`) && file.endsWith(".md")).map((file) => join(root, "content/news", file))];
if (files.length !== 11) throw new Error(`Expected a daily brief and ten news concepts for ${date}; found ${files.length} files.`);
const verified = `verified: { by: ${JSON.stringify(reviewer)}, at: ${JSON.stringify(new Date().toISOString())} }`;
for (const file of files) {
  const content = await readFile(file, "utf8");
  if (content.includes("status: stable") && content.includes("\nverified:")) continue;
  if (!content.includes("status: draft")) throw new Error(`${file} is neither a reviewable draft nor a stable reviewed concept.`);
  if (content.includes("\nverified:")) throw new Error(`${file} has verification metadata but is still a draft; review its lifecycle manually.`);
  await writeFile(file, content.replace("status: draft", `${verified}\nstatus: stable`), "utf8");
}
console.log(`Recorded human review by ${reviewer} for ${date}.`);
