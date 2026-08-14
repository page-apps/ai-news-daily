import { access, readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const dist = resolve("dist");
await Promise.all(["index.html", "review/index.html", "manifest.webmanifest"].map((path) => access(resolve(dist, path))));

async function files(path) {
  const entries = await readdir(path, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory() ? files(resolve(path, entry.name)) : [resolve(path, entry.name)]))).flat();
}

const textAssets = (await files(dist)).filter((path) => /\.(?:html|js|css|json|webmanifest)$/i.test(path));
for (const path of textAssets) {
  const value = await readFile(path, "utf8");
  if (/github_pat_[A-Za-z0-9_]{8,}/i.test(value)) throw new Error(`Credential-like PAT found in Pages artifact: ${path}`);
  if (/Example connected news concept|Draft metadata examples are excluded/i.test(value)) throw new Error(`Draft fixture leaked into Pages artifact: ${path}`);
}

console.log(`Validated public review shell and ${textAssets.length} text assets without a PAT or draft fixture.`);
