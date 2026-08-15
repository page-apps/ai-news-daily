#!/usr/bin/env node
/** Creates an OKF-inspired daily knowledge bundle from two agent passes. */
import { mkdir, readFile, writeFile, access, mkdtemp, rename, rm } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const editorialRoot = process.env.NEWS_EDITORIAL_REPO ?? process.env.EDITORIAL_REPO;
if (!editorialRoot) throw new Error("Set NEWS_EDITORIAL_REPO to the private editorial repository working tree; refusing to write the public site.");
const repository = resolve(editorialRoot);
if (repository === resolve(root) || repository.startsWith(`${resolve(root)}/`)) throw new Error("NEWS_EDITORIAL_REPO must be outside the public ai-news-daily repository.");
const dateArg = process.argv.find((arg) => arg.startsWith("--date="))?.slice(7);
const date = dateArg ?? new Intl.DateTimeFormat("en-CA", { timeZone: process.env.NEWS_TIMEZONE ?? "Australia/Sydney" }).format(new Date());
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error("Use --date=YYYY-MM-DD.");

const researchAgent = process.env.NEWS_RESEARCH_AGENT ?? "codex";
const writerAgent = process.env.NEWS_WRITER_AGENT ?? researchAgent;
const researchModel = process.env.NEWS_RESEARCH_MODEL ?? "gpt-5.6-luna";
const writerModel = process.env.NEWS_WRITER_MODEL ?? "gpt-5.6-sol";
const preferences = await readFile(join(root, "prompts/preferences.md"), "utf8");
const generatedAt = new Date().toISOString();
const categories = ["Models & research", "Products & deployment", "Business & markets", "Infrastructure & compute", "Policy & governance", "Safety & society", "Science & applications", "Open source"];
const destination = join(repository, "drafts", date);

try { await access(destination); throw new Error(`${destination} already exists; refusing to overwrite or merge an editorial bundle.`); }
catch (error) { if (error.code !== "ENOENT") throw error; }

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: root, stdio: ["ignore", "pipe", "pipe"], env: process.env });
    let stdout = "", stderr = "";
    child.stdout.on("data", (chunk) => stdout += chunk);
    child.stderr.on("data", (chunk) => stderr += chunk);
    child.on("error", (error) => reject(new Error(`Could not start ${command}: ${error.message}`)));
    child.on("close", (code) => code === 0 ? resolve(stdout.trim()) : reject(new Error(`${command} exited ${code}: ${stderr.trim()}`)));
  });
}

function ask(agent, model, prompt) {
  if (agent === "codex") return run("codex", ["exec", "--skip-git-repo-check", "--sandbox", "read-only", "--model", model, prompt]);
  if (agent === "copilot") return run("copilot", ["-p", prompt, "--model", model]);
  throw new Error(`Unsupported NEWS_*_AGENT '${agent}'. Use 'codex' or 'copilot'.`);
}

function slugify(value) { return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 72); }
function yaml(value) { return JSON.stringify(String(value)); }
function markdownOnly(output) { return output.replace(/^```(?:markdown|md)?\s*/i, "").replace(/\s*```\s*$/, "").trim(); }
function parseJson(output) {
  const clean = output.trim().replace(/^```json\s*/i, "").replace(/\s*```\s*$/, "");
  try { return JSON.parse(clean); } catch { throw new Error("The signal desk did not return valid JSON. No files were written; rerun the job."); }
}
function normaliseStory(story, index) {
  if (!story || typeof story !== "object" || !story.title || !story.summary || !story.whyItMatters) throw new Error(`Signal ${index + 1} is missing title, summary, or whyItMatters.`);
  const sources = Array.isArray(story.sources) ? story.sources.filter((source) => /^https?:\/\//.test(source?.resource ?? "")).slice(0, 3) : [];
  if (!sources.length) throw new Error(`Signal ${index + 1} has no usable source URL.`);
  const tags = [...new Set((Array.isArray(story.tags) ? story.tags : []).map((tag) => String(tag).trim().toLowerCase()).filter(Boolean))].slice(0, 8);
  const storyCategories = [...new Set((Array.isArray(story.categories) ? story.categories : []).filter((category) => categories.includes(category)))];
  return { title: String(story.title).trim(), description: String(story.description ?? story.summary).trim(), summary: String(story.summary).trim(), why: String(story.whyItMatters).trim(), tags, categories: storyCategories.length ? storyCategories : ["Models & research"], sources };
}
function sourceFrontmatter(sources) {
  return sources.map((source, index) => `  - id: source-${index + 1}\n    resource: ${yaml(source.resource)}${source.title ? `\n    title: ${yaml(source.title)}` : ""}${source.author ? `\n    author: ${yaml(source.author)}` : ""}`).join("\n");
}

const scoutPrompt = `You are the signal desk for AI Daily Brief. Today is ${date}. Use web research to identify the ten most consequential, genuinely new AI developments from the preceding 24 hours. Prefer primary sources and reputable reporting. Do not invent facts, links, dates, quotes, metrics, or source URLs. Select for durable importance, not attention volume.

Return ONLY valid JSON: an array with exactly 10 objects. Every object must have title, description, summary (2-3 factual sentences), whyItMatters, categories (one or two exact values from ${JSON.stringify(categories)}), tags (3-8 short lowercase strings), and sources (1-3 objects, each with resource absolute URL and optional title and author). Do not use Markdown or a code fence.

Editorial preferences:\n${preferences}`;

console.log(`Researching ${date} with ${researchAgent}/${researchModel}…`);
const signals = parseJson(await ask(researchAgent, researchModel, scoutPrompt));
if (!Array.isArray(signals) || signals.length !== 10) throw new Error("The signal desk must return exactly ten stories. No files were written.");
const stories = signals.map(normaliseStory);
const storyIds = stories.map((story, index) => `${date}-${String(index + 1).padStart(2, "0")}-${slugify(story.title)}`);

const writerPrompt = `You are the editor of AI Daily Brief. Produce the final daily edition for ${date} from the verified signal-desk material below. Research the supplied source links yourself where needed. Never promote a claim to fact without evidence. Write in Australian English for an intelligent general reader using a phone or e-reader.

Return Markdown only: no YAML front matter, no title, no code fence. Use this structure exactly:
## The day in AI
Two short paragraphs synthesising the day.
## The deeper pattern
A clear, evidence-grounded analysis connecting the biggest stories. Include a Mermaid diagram only if it genuinely clarifies a relationship. Use LaTex only where a formula earns its place.
## What to watch next
Three specific, falsifiable things to watch.
## Editorial note
State the main uncertainty or potential blind spot in this edition.

Aim for 800–1,300 words. Cite factual claims in context with ordinary Markdown links using only the supplied source URLs. The article must remain understandable without opening the ten supporting news concepts. The website separately presents those concepts for navigation, so do not repeat a long ten-item list.

Editorial preferences:\n${preferences}

Signal-desk material:\n${JSON.stringify(stories, null, 2)}`;

console.log(`Writing ${date} with ${writerAgent}/${writerModel}…`);
const body = markdownOnly(await ask(writerAgent, writerModel, writerPrompt));
const words = body.replace(/[`*_#>[\]()]|https?:\/\/\S+/g, " ").trim().split(/\s+/).filter(Boolean).length;
const readingMinutes = Math.max(4, Math.ceil(words / 220));
const allTags = [...new Set(stories.flatMap((story) => story.tags))].slice(0, 12);
const allCategories = [...new Set(stories.flatMap((story) => story.categories))];
const allSources = [...new Map(stories.flatMap((story) => story.sources).map((source) => [source.resource, source])).values()].slice(0, 30);
const title = `AI Daily Brief — ${new Date(`${date}T12:00:00Z`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}`;
const dailyDocument = `---\ntype: Daily Brief\ntitle: ${yaml(title)}\ndescription: ${yaml("Ten consequential AI developments and the deeper pattern behind them.")}\ndate: ${date}\nreadingMinutes: ${readingMinutes}\ncategories: ${JSON.stringify(allCategories)}\ntags: ${JSON.stringify(allTags)}\nsources:\n${sourceFrontmatter(allSources)}\ngenerated: { by: ${yaml(`${writerAgent}/${writerModel}`)}, at: ${yaml(generatedAt)} }\nstatus: draft\nstale_after: ${date}\nnews: ${JSON.stringify(storyIds)}\n---\n\n${body}\n`;

await mkdir(join(repository, "drafts"), { recursive: true });
const staging = await mkdtemp(join(repository, "drafts", `.${date}.`));
try {
await mkdir(join(staging, "news"), { recursive: true });
for (const [index, story] of stories.entries()) {
  const id = storyIds[index];
  const file = join(staging, "news", `${id}.md`);
  const related = stories.map((candidate, candidateIndex) => ({ candidate, candidateIndex, shared: candidate.tags.filter((tag) => story.tags.includes(tag)).length + candidate.categories.filter((category) => story.categories.includes(category)).length })).filter(({ candidateIndex, shared }) => candidateIndex !== index && shared > 0).sort((a, b) => b.shared - a.shared).slice(0, 3);
  const relatedLinks = related.length ? `\n## Related coverage\n\n${related.map(({ candidate, candidateIndex }) => `- [${candidate.title}](./${storyIds[candidateIndex]}.md)`).join("\n")}\n` : "";
  const sourceLinks = story.sources.map((source) => `- [${source.title ?? source.resource}](${source.resource})`).join("\n");
  const storyDocument = `---\ntype: AI News\ntitle: ${yaml(story.title)}\ndescription: ${yaml(story.description)}\ndate: ${date}\nsummary: ${yaml(story.summary)}\ncategories: ${JSON.stringify(story.categories)}\ntags: ${JSON.stringify(story.tags)}\nsources:\n${sourceFrontmatter(story.sources)}\ngenerated: { by: ${yaml(`${researchAgent}/${researchModel}`)}, at: ${yaml(generatedAt)} }\nstatus: draft\nstale_after: ${date}\n---\n\n## Summary\n\n${story.summary}\n\n## Why it matters\n\n${story.why}\n${relatedLinks}\n## Sources\n\n${sourceLinks}\n`;
  await writeFile(file, storyDocument, "utf8");
}
await writeFile(join(staging, "daily.md"), dailyDocument, "utf8");
const manifest = { schema: "ai-news-daily/editorial-draft/v1", date, status: "draft", daily: "daily.md", news: storyIds.map((id) => `news/${id}.md`), files: ["daily.md", ...storyIds.map((id) => `news/${id}.md`)], generatedAt };
await writeFile(join(staging, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
await run(process.execPath, [join(root, "scripts/validate-editorial-draft.mjs"), `--bundle=${staging}`, `--date=${date}`]);
await rename(staging, destination);
} catch (error) {
  await rm(staging, { recursive: true, force: true });
  throw error;
}
console.log(`Created one daily brief and ten linked news concepts for ${date} in ${destination}.`);
