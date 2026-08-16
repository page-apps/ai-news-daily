#!/usr/bin/env node
import { readFile, readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const reviewer = process.env.NEWS_REVIEWER;
if (!reviewer?.startsWith("human:")) throw new Error("Set NEWS_REVIEWER to a human actor such as human:cmwen before publishing.");
const editionArg = process.argv.find((arg) => arg.startsWith("--edition="))?.slice(10);
const editions = (await readdir(join(root, "content/daily"))).filter((file) => file.endsWith(".md")).sort();
const edition = editionArg ? `${editionArg}.md` : editions.at(-1);
if (!edition || !editions.includes(edition) || !/^\d{4}-\d{2}-\d{2}(?:--[a-z0-9][a-z0-9-]*)?\.md$/.test(edition)) throw new Error("Use --edition=YYYY-MM-DD--PIPELINE-ID for an existing daily article.");
const dailyPath = join(root, "content/daily", edition);
const daily = await readFile(dailyPath, "utf8");
const newsValue = /^news:\s*(\[[^\n]*\])$/m.exec(daily)?.[1];
if (!newsValue) throw new Error(`${dailyPath} has no JSON news list.`);
const news = JSON.parse(newsValue);
if (!Array.isArray(news) || news.length !== 10 || news.some((id) => typeof id !== "string" || !/^[a-z0-9-]+$/.test(id))) throw new Error(`${dailyPath} has an invalid news list.`);
const files = [dailyPath, ...news.map((id) => join(root, "content/news", `${id}.md`))];
if (files.length !== 11) throw new Error(`Expected a daily brief and ten news concepts for ${edition}; found ${files.length} files.`);
const verified = `verified: { by: ${JSON.stringify(reviewer)}, at: ${JSON.stringify(new Date().toISOString())} }`;
for (const file of files) {
  const content = await readFile(file, "utf8");
  if (content.includes("status: stable") && content.includes("\nverified:")) continue;
  if (!content.includes("status: draft")) throw new Error(`${file} is neither a reviewable draft nor a stable reviewed concept.`);
  if (content.includes("\nverified:")) throw new Error(`${file} has verification metadata but is still a draft; review its lifecycle manually.`);
  await writeFile(file, content.replace("status: draft", `${verified}\nstatus: stable`), "utf8");
}
console.log(`Recorded human review by ${reviewer} for ${edition.slice(0, -3)}.`);
