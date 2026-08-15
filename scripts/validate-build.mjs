import { access, readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const dist = resolve("dist");
await Promise.all(["index.html", "review/index.html", "manifest.webmanifest", "sw.js", "registerSW.js"].map((path) => access(resolve(dist, path))));

const manifest = JSON.parse(await readFile(resolve(dist, "manifest.webmanifest"), "utf8"));
const iconSizes = new Set((manifest.icons ?? []).map((icon) => icon.sizes));
for (const requiredSize of ["192x192", "512x512"]) {
  if (!iconSizes.has(requiredSize)) throw new Error(`PWA manifest is missing a ${requiredSize} icon.`);
}
for (const icon of manifest.icons ?? []) await access(resolve(dist, icon.src));

async function files(path) {
  const entries = await readdir(path, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory() ? files(resolve(path, entry.name)) : [resolve(path, entry.name)]))).flat();
}

const textAssets = (await files(dist)).filter((path) => /\.(?:html|js|css|json|webmanifest)$/i.test(path));
let serviceWorkerRegistrationFound = false;
for (const path of textAssets) {
  const value = await readFile(path, "utf8");
  if (/serviceWorker\.register/.test(value)) serviceWorkerRegistrationFound = true;
  if (/github_pat_[A-Za-z0-9_]{8,}/i.test(value)) throw new Error(`Credential-like PAT found in Pages artifact: ${path}`);
  if (/Example connected news concept|Draft metadata examples are excluded/i.test(value)) throw new Error(`Draft fixture leaked into Pages artifact: ${path}`);
  if (/\/ai-news-daily(?:topics|review|icons)\//.test(value)) throw new Error(`GitHub Pages base path is missing a separator: ${path}`);
}

const indexHtml = await readFile(resolve(dist, "index.html"), "utf8");
if (!/rel=["']manifest["']/.test(indexHtml)) throw new Error("The app shell does not link its web manifest.");
if (!serviceWorkerRegistrationFound) throw new Error("The app shell does not register its service worker.");

const reviewHtml = await readFile(resolve(dist, "review/index.html"), "utf8");
for (const required of ["Review one complete edition", "FULL ARTICLE", "CITATIONS", "Approve article &amp; publish"]) {
  if (!reviewHtml.includes(required)) throw new Error(`Review artifact is missing required UI copy: ${required}`);
}

console.log(`Validated the full-article review shell and ${textAssets.length} public text assets without a PAT, draft fixture, or broken Pages path.`);
