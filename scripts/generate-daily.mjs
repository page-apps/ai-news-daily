#!/usr/bin/env node
/**
 * Runs a two-pass daily newsroom:
 *   1. a low-cost model selects and verifies the day's ten signals;
 *   2. a frontier model researches their implications and writes the edition.
 *
 * No key is stored here. Authentication is delegated to your local Codex or
 * Copilot CLI session. See README.md for configuration.
 */
import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dateArg = process.argv.find((arg) => arg.startsWith("--date="))?.slice(7);
const date = dateArg ?? new Intl.DateTimeFormat("en-CA", { timeZone: process.env.NEWS_TIMEZONE ?? "Australia/Sydney" }).format(new Date());
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error("Use --date=YYYY-MM-DD.");

const researchAgent = process.env.NEWS_RESEARCH_AGENT ?? "codex";
const writerAgent = process.env.NEWS_WRITER_AGENT ?? researchAgent;
const researchModel = process.env.NEWS_RESEARCH_MODEL ?? "gpt-5.6-luna";
const writerModel = process.env.NEWS_WRITER_MODEL ?? "gpt-5.6-sol";
const preferences = await readFile(join(root, "prompts/preferences.md"), "utf8");
const destination = join(root, "content/daily", `${date}.md`);

try { await access(destination); throw new Error(`${destination} already exists; refusing to overwrite an edition.`); }
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

function markdownOnly(output) {
  return output.replace(/^```(?:markdown|md)?\s*/i, "").replace(/\s*```\s*$/, "").trim();
}

const scoutPrompt = `You are the signal desk for AI Daily Brief. Today is ${date}. Use web research to identify the 10 most consequential, genuinely new AI developments from the preceding 24 hours. Prefer primary sources and reputable reporting. Do not invent facts, links, dates, quotes, metrics, or source URLs.

Return compact Markdown only, with exactly ten numbered items. For each item give: a precise headline, 2-3 factual sentences, why it matters, and 1-3 source links. Flag uncertainty or reports that cannot be independently verified. Select for durable importance, not attention volume.

Editorial preferences:\n${preferences}`;

console.log(`Researching ${date} with ${researchAgent}/${researchModel}…`);
const signals = await ask(researchAgent, researchModel, scoutPrompt);

const writerPrompt = `You are the editor of AI Daily Brief. Produce the final edition for ${date}, using the signal-desk material below as a starting point. Research the source links yourself where needed. Never promote a claim to fact without evidence. Prefer sources with direct links. Write in Australian English for an intelligent general reader using a phone or e-reader.

Return Markdown only: no YAML front matter, no title, no code fence. Use this structure exactly:
## The day in AI
Two short paragraphs synthesising the day.
## The ten developments
Ten numbered entries, each with a bold headline, concise explanation, why it matters, and source links.
## The deeper pattern
A clear, evidence-grounded analysis connecting the biggest stories. Include a Mermaid diagram only if it genuinely clarifies a relationship. Use LaTex only where a formula earns its place.
## What to watch next
Three specific, falsifiable things to watch.
## Editorial note
State the main uncertainty or potential blind spot in this edition.

Aim for 1,400–2,100 words, with links in normal Markdown format.

Editorial preferences:\n${preferences}

Signal-desk material:\n${signals}`;

console.log(`Writing ${date} with ${writerAgent}/${writerModel}…`);
const body = markdownOnly(await ask(writerAgent, writerModel, writerPrompt));
const words = body.replace(/[`*_#>[\]()]|https?:\/\/\S+/g, " ").trim().split(/\s+/).filter(Boolean).length;
const readingMinutes = Math.max(4, Math.ceil(words / 220));
const title = `AI Daily Brief — ${new Date(`${date}T12:00:00Z`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}`;
const document = `---\ntitle: "${title}"\ndescription: "Ten consequential AI developments and the deeper pattern behind them."\ndate: ${date}\nreadingMinutes: ${readingMinutes}\ntopics: ["AI", "Daily brief"]\nstatus: draft\n---\n\n${body}\n`;

await mkdir(join(root, "content/daily"), { recursive: true });
await writeFile(destination, document, "utf8");
console.log(`Created ${destination}. Review it, change status to 'published', then run pnpm publish:daily.`);
