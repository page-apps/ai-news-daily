---
type: AI News
title: "Gemini CLI nightly hardens macOS agent sandbox boundaries"
description: "A pre-release Gemini CLI build isolates container-runtime access more tightly inside macOS Seatbelt."
date: 2026-08-23
published_at: "2026-08-22T01:10:00.000Z"
summary: "The v0.56.0 nightly 20260822 build isolates Docker and container-runtime sockets and binaries in macOS Seatbelt. The change is a pre-release sandbox fix rather than a stable-channel feature."
categories: ["Software engineering & web development"]
tags: ["gemini cli","sandbox","macos","docker","security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260822.g5411f113c"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-22T21:44:45.475Z" }
verified: { by: "human:cmwen", at: "2026-08-23T04:30:04.835Z" }
status: stable
stale_after: 2026-08-23
---

## Summary

The v0.56.0 nightly 20260822 build isolates Docker and container-runtime sockets and binaries in macOS Seatbelt. The change is a pre-release sandbox fix rather than a stable-channel feature.

## Why it matters

Coding agents that can reach local container infrastructure need the boundary to cover both sockets and executable binaries, narrowing host integration risk on macOS.

## Related coverage

- [GitHub Agentic Workflows tightens safe outputs and reproducibility](./2026-08-23-software-engineering-web-development-04-github-agentic-workflows-tightens-safe-outputs-and-reproducibility.md)
- [Cline 4.1.12 extends enterprise MCP controls across its agent stack](./2026-08-23-software-engineering-web-development-01-cline-4-1-12-extends-enterprise-mcp-controls-across-its-agent-stack.md)
- [Cloudflare workerd adds dynamic WebAssembly modules and TypeScript stream RPC support](./2026-08-23-software-engineering-web-development-02-cloudflare-workerd-adds-dynamic-webassembly-modules-and-typescript-strea.md)

## Sources

- [https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260822.g5411f113c](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260822.g5411f113c)
