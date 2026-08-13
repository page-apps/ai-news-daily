import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pwa from "@vite-pwa/astro";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const [owner = "local", repository = "ai-news-daily"] = (process.env.GITHUB_REPOSITORY ?? "local/ai-news-daily").split("/");
const onGitHubPages = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repository === `${owner}.github.io`;

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
        icons: [
          { src: "icons/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
          { src: "icons/icon-maskable.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
        navigateFallback: "index.html"
      }
    })
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});
