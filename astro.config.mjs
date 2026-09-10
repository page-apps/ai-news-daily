import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pwa from "@vite-pwa/astro";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { latestStableOfflineContent } from "./scripts/offline-content.mjs";

const [owner = "local", repository = "ai-news-daily"] = (process.env.GITHUB_REPOSITORY ?? "local/ai-news-daily").split("/");
const onGitHubPages = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repository === `${owner}.github.io`;
const latestOffline = await latestStableOfflineContent(new URL("./content", import.meta.url));
const offlinePagePatterns = latestOffline.routes.map((route) => `${route}/index.html`);

export default defineConfig({
  output: "static",
  site: onGitHubPages ? `https://${owner}.github.io` : "http://localhost:4321",
  base: onGitHubPages && !isUserSite ? `/${repository}` : "/",
  integrations: [
    mdx(),
    pwa({
      registerType: "autoUpdate",
      manifest: {
        name: "AI Daily Brief",
        short_name: "AI Brief",
        description: "A calm daily briefing on the most consequential AI news.",
        theme_color: "#14251f",
        background_color: "#f7f4ec",
        display: "standalone",
        orientation: "portrait-primary",
        icons: [
          { src: "icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
          { src: "icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
          { src: "icons/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }
        ]
      },
      workbox: {
        // Keep installation small for slower e-readers. Historical editions and
        // topic indexes remain available online and are cached after a visit.
        globPatterns: [
          "index.html",
          "registerSW.js",
          "icons/**/*.{svg,png}",
          "_astro/*.css",
          "_astro/*.woff2",
          "_astro/BaseLayout*.js",
          "_astro/github-repositories*.js",
          "_astro/preload-helper*.js",
          ...offlinePagePatterns,
        ],
        navigateFallback: null,
        runtimeCaching: [{
          urlPattern: ({ request }) => request.mode === "navigate",
          handler: "NetworkFirst",
          options: {
            cacheName: "ai-daily-visited-pages",
            networkTimeoutSeconds: 5,
            expiration: { maxEntries: 20, maxAgeSeconds: 7 * 24 * 60 * 60 },
            cacheableResponse: { statuses: [0, 200] },
          },
        }]
      }
    })
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});
