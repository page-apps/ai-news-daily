import { access, readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { latestStableOfflineContent } from "./offline-content.mjs";

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

const serviceWorker = await readFile(resolve(dist, "sw.js"), "utf8");
const offlineReadingRoutes = (await files(dist))
  .filter((path) => /\/(?:daily|news)\/.+\/index\.html$/.test(path))
  .map((path) => path.slice(dist.length + 1).replace(/\/index\.html$/, ""));
const latestOffline = await latestStableOfflineContent(resolve("content"));
for (const route of latestOffline.routes) {
  if (!serviceWorker.includes(`url:"${route}"`)) throw new Error(`Latest reading route is not precached for offline use: ${route}`);
}
const historicalRoutes = offlineReadingRoutes.filter((route) => !latestOffline.routes.includes(route));
for (const route of historicalRoutes) {
  if (serviceWorker.includes(`url:"${route}"`)) throw new Error(`Historical reading route should not delay offline sync: ${route}`);
}
if (/url:"topics(?:\/|\")/.test(serviceWorker) || /url:"review(?:\/|\")/.test(serviceWorker)) {
  throw new Error("Browse and review pages should not delay the latest-news offline sync.");
}
if (!serviceWorker.includes('directoryIndex:"index.html"')) throw new Error("The service worker cannot resolve clean reading URLs offline.");
if (serviceWorker.includes("createHandlerBoundToURL")) throw new Error("Uncached article navigation must not fall back to the home page.");
if (!serviceWorker.includes("ai-daily-visited-pages")) throw new Error("Visited reading pages need a bounded runtime cache.");

const reviewHtml = await readFile(resolve(dist, "review/index.html"), "utf8");
for (const required of ["Review independent editions", "PENDING DRAFTS", "FULL ARTICLE", "CITATIONS", "Discard private draft", "Approve article &amp; publish"]) {
  if (!reviewHtml.includes(required)) throw new Error(`Review artifact is missing required UI copy: ${required}`);
}

console.log(`Validated the review shell and a focused offline set for ${latestOffline.editionIds.length} latest edition(s) and ${latestOffline.storyIds.length} stories.`);
