---
type: AI News
title: "Cline 4.1.12 extends enterprise MCP controls across its agent stack"
description: "The coding-agent release adds remote-policy enforcement for MCP marketplace entries and repairs tool calling for custom OpenAI-compatible endpoints."
date: 2026-08-23
published_at: "2026-08-21T22:39:00.000Z"
summary: "Cline 4.1.12 hides MCP marketplace entries when remote configuration disables the marketplace or restricts it to an `allowedMCPServers` allowlist. It also restores tool calling for custom OpenAI-compatible models whose stored capability list was empty."
categories: ["Software engineering & web development"]
tags: ["cline","mcp","enterprise","policy","coding agents"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cline/cline/releases/tag/v4.1.12"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-22T21:44:45.474Z" }
verified: { by: "human:cmwen", at: "2026-08-23T04:30:04.835Z" }
status: stable
stale_after: 2026-08-23
---

## Summary

Cline 4.1.12 hides MCP marketplace entries when remote configuration disables the marketplace or restricts it to an `allowedMCPServers` allowlist. It also restores tool calling for custom OpenAI-compatible models whose stored capability list was empty.

## Why it matters

This gives organisations a concrete policy boundary around agent extensions while improving compatibility with self-hosted model endpoints.

## Related coverage

- [Cloudflare workerd adds dynamic WebAssembly modules and TypeScript stream RPC support](./2026-08-23-software-engineering-web-development-02-cloudflare-workerd-adds-dynamic-webassembly-modules-and-typescript-strea.md)
- [Gemini CLI nightly hardens macOS agent sandbox boundaries](./2026-08-23-software-engineering-web-development-03-gemini-cli-nightly-hardens-macos-agent-sandbox-boundaries.md)
- [GitHub Agentic Workflows tightens safe outputs and reproducibility](./2026-08-23-software-engineering-web-development-04-github-agentic-workflows-tightens-safe-outputs-and-reproducibility.md)

## Sources

- [https://github.com/cline/cline/releases/tag/v4.1.12](https://github.com/cline/cline/releases/tag/v4.1.12)
