#!/usr/bin/env node
/** Creates one or more isolated OKF-inspired editorial bundles from configured research pipelines. */
import { mkdir, readFile, writeFile, access, mkdtemp, rename, rm } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { duplicateReason, formatStoryExclusions, loadStoryHistory } from "./news-history.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const editorialRoot = process.env.NEWS_EDITORIAL_REPO ?? process.env.EDITORIAL_REPO;
if (!editorialRoot) throw new Error("Set NEWS_EDITORIAL_REPO to the private editorial repository working tree; refusing to write the public site.");
const repository = resolve(editorialRoot);
if (repository === resolve(root) || repository.startsWith(`${resolve(root)}/`)) throw new Error("NEWS_EDITORIAL_REPO must be outside the public ai-news-daily repository.");

const argumentsList = process.argv.slice(2);
const dateArg = argumentsList.find((arg) => arg.startsWith("--date="))?.slice(7);
const date = dateArg ?? new Intl.DateTimeFormat("en-CA", { timeZone: process.env.NEWS_TIMEZONE ?? "Australia/Sydney" }).format(new Date());
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error("Use --date=YYYY-MM-DD.");
const timezone = process.env.NEWS_TIMEZONE ?? "Australia/Sydney";
const runTime = process.env.NEWS_RUN_TIME ?? "01:00";
if (!/^\d{2}:\d{2}$/.test(runTime) || Number(runTime.slice(0, 2)) > 23 || Number(runTime.slice(3)) > 59) throw new Error("NEWS_RUN_TIME must use HH:MM (default: 01:00).");
const requestedPipelineIds = argumentsList.filter((arg) => arg.startsWith("--pipeline=")).map((arg) => arg.slice(11));
const generateAll = argumentsList.includes("--all");
if (generateAll && requestedPipelineIds.length) throw new Error("Use either --all or one or more --pipeline=ID arguments.");

const researchAgent = process.env.NEWS_RESEARCH_AGENT ?? "codex";
const writerAgent = process.env.NEWS_WRITER_AGENT ?? researchAgent;
const researchModel = process.env.NEWS_RESEARCH_MODEL ?? "gpt-5.6-luna";
const writerModel = process.env.NEWS_WRITER_MODEL ?? "gpt-5.6-sol";
const preferences = await readFile(join(root, "prompts/preferences.md"), "utf8");
const categoryNames = ["Models & research", "Products & deployment", "Software engineering & web development", "Business & markets", "Infrastructure & compute", "Policy & governance", "Safety & society", "Science & applications", "Open source"];

function zonedDateTimeToUtc(dateValue, timeValue, zone) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hour, minute] = timeValue.split(":").map(Number);
  const target = Date.UTC(year, month - 1, day, hour, minute);
  let guess = target;
  const parts = (instant) => Object.fromEntries(new Intl.DateTimeFormat("en-CA", {
    timeZone: zone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(instant).filter(({ type }) => type !== "literal").map(({ type, value }) => [type, value]));
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const local = parts(new Date(guess));
    const displayed = Date.UTC(Number(local.year), Number(local.month) - 1, Number(local.day), Number(local.hour), Number(local.minute));
    guess += target - displayed;
  }
  return new Date(guess);
}

const windowEnd = zonedDateTimeToUtc(date, runTime, timezone);
const windowStart = new Date(windowEnd.getTime() - 24 * 60 * 60 * 1000);
const storyHistory = await loadStoryHistory({ publicNewsRoot: join(root, "content/news"), editorialRoot: repository });
console.log(`Loaded ${storyHistory.length} previously accumulated news concepts for freshness and deduplication.`);

function pipelineConfig(value) {
  if (!value || typeof value !== "object" || !Array.isArray(value.pipelines)) throw new Error("prompts/pipelines.json must contain a pipelines array.");
  const ids = new Set();
  return value.pipelines.map((candidate, index) => {
    if (!candidate || typeof candidate !== "object") throw new Error(`Pipeline ${index + 1} must be an object.`);
    const id = String(candidate.id ?? "");
    const title = String(candidate.title ?? "").trim();
    const description = String(candidate.description ?? "").trim();
    const prompt = String(candidate.prompt ?? "").trim();
    const categories = Array.isArray(candidate.categories) ? [...new Set(candidate.categories.filter((category) => typeof category === "string"))] : [];
    if (!/^[a-z0-9][a-z0-9-]*$/.test(id) || ids.has(id)) throw new Error(`Pipeline ${index + 1} needs a unique lowercase id.`);
    if (!title || !description || !prompt) throw new Error(`Pipeline ${id} needs title, description and prompt values.`);
    if (!categories.length || categories.some((category) => !categoryNames.includes(category))) throw new Error(`Pipeline ${id} has an unsupported category.`);
    ids.add(id);
    return { id, title, description, prompt, categories };
  });
}

const configuredPipelines = pipelineConfig(JSON.parse(await readFile(join(root, "prompts/pipelines.json"), "utf8")));
const defaultPipeline = configuredPipelines.find((pipeline) => pipeline.id === "ai") ?? configuredPipelines[0];
const selectedPipelines = generateAll
  ? configuredPipelines
  : requestedPipelineIds.length
    ? requestedPipelineIds.map((id) => configuredPipelines.find((pipeline) => pipeline.id === id) ?? (() => { throw new Error(`Unknown pipeline '${id}'. Check prompts/pipelines.json.`); })())
    : [defaultPipeline];

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
function sourceFrontmatter(sources) {
  return sources.map((source, index) => `  - id: source-${index + 1}\n    resource: ${yaml(source.resource)}${source.title ? `\n    title: ${yaml(source.title)}` : ""}${source.author ? `\n    author: ${yaml(source.author)}` : ""}`).join("\n");
}

async function generatePipeline(pipeline) {
  const destination = join(repository, "drafts", date, pipeline.id);
  try { await access(destination); throw new Error(`${destination} already exists; refusing to overwrite or merge an editorial bundle.`); }
  catch (error) { if (error.code !== "ENOENT") throw error; }

  const existingStoryExclusions = formatStoryExclusions(storyHistory) || "- None recorded.";
  const normaliseStory = (story, index) => {
    if (!story || typeof story !== "object" || !story.title || !story.summary || !story.whyItMatters) throw new Error(`Signal ${index + 1} is missing title, summary, or whyItMatters.`);
    const sources = Array.isArray(story.sources) ? story.sources.filter((source) => /^https?:\/\//.test(source?.resource ?? "")).slice(0, 3) : [];
    if (!sources.length) throw new Error(`Signal ${index + 1} has no usable source URL.`);
    const publishedAt = String(story.publishedAt ?? "").trim();
    const publishedTimestamp = Date.parse(publishedAt);
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})$/.test(publishedAt) || !Number.isFinite(publishedTimestamp)) {
      throw new Error(`Signal ${index + 1} needs publishedAt as an ISO-8601 timestamp with timezone.`);
    }
    if (publishedTimestamp < windowStart.getTime() || publishedTimestamp >= windowEnd.getTime()) {
      throw new Error(`Signal ${index + 1} is outside the ${windowStart.toISOString()}–${windowEnd.toISOString()} freshness window.`);
    }
    const tags = [...new Set((Array.isArray(story.tags) ? story.tags : []).map((tag) => String(tag).trim().toLowerCase()).filter(Boolean))].slice(0, 8);
    const storyCategories = [...new Set((Array.isArray(story.categories) ? story.categories : []).filter((category) => pipeline.categories.includes(category)))];
    return { title: String(story.title).trim(), description: String(story.description ?? story.summary).trim(), summary: String(story.summary).trim(), why: String(story.whyItMatters).trim(), publishedAt: new Date(publishedTimestamp).toISOString(), tags, categories: storyCategories.length ? storyCategories : [pipeline.categories[0]], sources };
  };

  const scoutPrompt = `You are the signal desk for the ${pipeline.title}. The edition date is ${date} in ${timezone}; the configured run time is ${runTime}. Use web research to identify the ten most consequential, genuinely new developments that fit this pipeline and fall inside this exact freshness window: ${windowStart.toISOString()} inclusive through ${windowEnd.toISOString()} exclusive. This is a rolling 24-hour window, not a general request for recent or interesting news.

Freshness rules:
- A story qualifies only when its triggering event was first publicly announced or materially updated inside that window. The source page must show a publication or update time you can verify.
- Return the triggering source time as publishedAt in ISO-8601 format with an explicit timezone. Do not guess it. If the date or update cannot be verified, exclude the story.
- Reject old articles, evergreen pages, conference schedules, old announcements, retrospective analysis, and stories that merely resurfaced inside the window. Do not use an old source for a new interpretation.
- Do not fill a slot with an older or previously used story just to reach ten. If fewer than ten qualifying, unused developments exist, return only the qualifying stories; the generator will stop rather than accept stale filler.

Prefer primary sources and reputable reporting. Do not invent facts, links, dates, quotes, metrics, or source URLs. Select for durable importance, not attention volume.

Pipeline scope (takes precedence over general preferences):\n${pipeline.prompt}

Return ONLY valid JSON: an array with exactly 10 objects. Every object must have title, description, summary (2-3 factual sentences), whyItMatters, publishedAt, categories (one or two exact values from ${JSON.stringify(pipeline.categories)}), tags (3-8 short lowercase strings), and sources (1-3 objects, each with resource absolute URL and optional title and author). Do not use Markdown or a code fence.

Previously accumulated concepts are excluded. Do not repeat any of these developments, even with a rewritten title. A genuinely new, materially different update is eligible only if the source clearly documents that new update inside the freshness window:
${existingStoryExclusions}

Editorial preferences:\n${preferences}`;

  let stories;
  let scoutFailure = "";
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    console.log(`Researching ${date} · ${pipeline.id} with ${researchAgent}/${researchModel} (attempt ${attempt})…`);
    try {
      const repair = scoutFailure ? `\n\nThe previous response was rejected for this reason: ${scoutFailure}\nReturn a completely corrected set of ten qualifying stories. Replace every rejected candidate; do not explain the correction outside the JSON array.` : "";
      const signals = parseJson(await ask(researchAgent, researchModel, `${scoutPrompt}${repair}`));
      if (!Array.isArray(signals) || signals.length !== 10) throw new Error("The signal desk must return exactly ten stories; no older stories may be used to fill missing slots.");
      const candidates = signals.map(normaliseStory);
      const seen = [];
      const duplicateIssues = [];
      for (const candidate of candidates) {
        const reason = duplicateReason(candidate, [...storyHistory, ...seen]);
        if (reason) duplicateIssues.push(`“${candidate.title}”: ${reason}`);
        seen.push(candidate);
      }
      if (duplicateIssues.length) throw new Error(`Previously accumulated or repeated stories detected: ${duplicateIssues.slice(0, 4).join("; ")}.`);
      stories = candidates;
      break;
    } catch (error) {
      scoutFailure = error instanceof Error ? error.message : String(error);
      if (attempt === 2) throw new Error(`${scoutFailure} No files were written; rerun the job after checking the research window.`);
    }
  }
  const storyIds = stories.map((story, index) => `${date}-${pipeline.id}-${String(index + 1).padStart(2, "0")}-${slugify(story.title)}`);

  const writerPrompt = `You are the editor of the ${pipeline.title}. Produce the final daily edition for ${date} from the verified signal-desk material below. Research the supplied source links yourself where needed. Never promote a claim to fact without evidence. Write in Australian English for an intelligent general reader using a phone or e-reader.

Pipeline scope (takes precedence over general preferences):\n${pipeline.prompt}

Return Markdown only: no YAML front matter, no title, no code fence. Use this structure exactly:
## The day in ${pipeline.title.replace(/ Brief$/, "")}
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

  console.log(`Writing ${date} · ${pipeline.id} with ${writerAgent}/${writerModel}…`);
  const body = markdownOnly(await ask(writerAgent, writerModel, writerPrompt));
  const words = body.replace(/[`*_#>[\]()]|https?:\/\/\S+/g, " ").trim().split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(4, Math.ceil(words / 220));
  const allTags = [...new Set(stories.flatMap((story) => story.tags))].slice(0, 12);
  const allCategories = [...new Set(stories.flatMap((story) => story.categories))];
  const allSources = [...new Map(stories.flatMap((story) => story.sources).map((source) => [source.resource, source])).values()].slice(0, 30);
  const title = `${pipeline.title} — ${new Date(`${date}T12:00:00Z`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}`;
  const dailyDocument = `---\ntype: Daily Brief\ntitle: ${yaml(title)}\ndescription: ${yaml(pipeline.description)}\ndate: ${date}\nreadingMinutes: ${readingMinutes}\ncategories: ${JSON.stringify(allCategories)}\ntags: ${JSON.stringify(allTags)}\npipeline: ${yaml(pipeline.id)}\nsources:\n${sourceFrontmatter(allSources)}\ngenerated: { by: ${yaml(`${writerAgent}/${writerModel}`)}, at: ${yaml(new Date().toISOString())} }\nstatus: draft\nstale_after: ${date}\nnews: ${JSON.stringify(storyIds)}\n---\n\n${body}\n`;

  await mkdir(join(repository, "drafts", date), { recursive: true });
  const staging = await mkdtemp(join(repository, "drafts", date, `.${pipeline.id}.`));
  try {
    await mkdir(join(staging, "news"), { recursive: true });
    for (const [index, story] of stories.entries()) {
      const id = storyIds[index];
      const related = stories.map((candidate, candidateIndex) => ({ candidate, candidateIndex, shared: candidate.tags.filter((tag) => story.tags.includes(tag)).length + candidate.categories.filter((category) => story.categories.includes(category)).length })).filter(({ candidateIndex, shared }) => candidateIndex !== index && shared > 0).sort((a, b) => b.shared - a.shared).slice(0, 3);
      const relatedLinks = related.length ? `\n## Related coverage\n\n${related.map(({ candidate, candidateIndex }) => `- [${candidate.title}](./${storyIds[candidateIndex]}.md)`).join("\n")}\n` : "";
      const sourceLinks = story.sources.map((source) => `- [${source.title ?? source.resource}](${source.resource})`).join("\n");
      const storyDocument = `---\ntype: AI News\ntitle: ${yaml(story.title)}\ndescription: ${yaml(story.description)}\ndate: ${date}\npublished_at: ${yaml(story.publishedAt)}\nsummary: ${yaml(story.summary)}\ncategories: ${JSON.stringify(story.categories)}\ntags: ${JSON.stringify(story.tags)}\npipeline: ${yaml(pipeline.id)}\nsources:\n${sourceFrontmatter(story.sources)}\ngenerated: { by: ${yaml(`${researchAgent}/${researchModel}`)}, at: ${yaml(new Date().toISOString())} }\nstatus: draft\nstale_after: ${date}\n---\n\n## Summary\n\n${story.summary}\n\n## Why it matters\n\n${story.why}\n${relatedLinks}\n## Sources\n\n${sourceLinks}\n`;
      await writeFile(join(staging, "news", `${id}.md`), storyDocument, "utf8");
    }
    await writeFile(join(staging, "daily.md"), dailyDocument, "utf8");
    const manifest = {
      schema: "ai-news-daily/editorial-draft/v2",
      date,
      pipeline: { id: pipeline.id, title: pipeline.title, categories: pipeline.categories },
      publicId: `${date}--${pipeline.id}`,
      status: "draft",
      daily: "daily.md",
      news: storyIds.map((id) => `news/${id}.md`),
      files: ["daily.md", ...storyIds.map((id) => `news/${id}.md`)],
      generatedAt: new Date().toISOString(),
    };
    await writeFile(join(staging, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
    await run(process.execPath, [join(root, "scripts/validate-editorial-draft.mjs"), `--bundle=${staging}`, `--date=${date}`]);
    await rename(staging, destination);
  } catch (error) {
    await rm(staging, { recursive: true, force: true });
    throw error;
  }
  storyHistory.push(...stories);
  console.log(`Created ${pipeline.id} editorial bundle for ${date} in ${destination}.`);
}

for (const pipeline of selectedPipelines) await generatePipeline(pipeline);
