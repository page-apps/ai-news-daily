---
type: AI News
title: "Aspire 13.5.2 removes an unused Windows CLI binary blocking WinGet publication"
description: "The patch release removes an unnecessary helper executable from Windows CLI archives so distribution can pass marketplace security validation."
date: 2026-08-23
published_at: "2026-08-21T23:18:00.000Z"
summary: "Aspire 13.5.2 removes the unused `hex1bpty.exe` from Windows CLI archives because Aspire never executes it. The patch lets the release pass WinGet’s executable and malware validation while leaving Unix native assets unchanged."
categories: ["Software engineering & web development"]
tags: ["aspire","dotnet","windows","winget","packaging"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/microsoft/aspire/releases/tag/v13.5.2"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-22T21:44:45.476Z" }
verified: { by: "human:cmwen", at: "2026-08-23T04:30:04.835Z" }
status: stable
stale_after: 2026-08-23
---

## Summary

Aspire 13.5.2 removes the unused `hex1bpty.exe` from Windows CLI archives because Aspire never executes it. The patch lets the release pass WinGet’s executable and malware validation while leaving Unix native assets unchanged.

## Why it matters

Unnecessary executables can trigger marketplace security checks and delay distribution of otherwise valid developer tooling.

## Related coverage

- [Cline 4.1.12 extends enterprise MCP controls across its agent stack](./2026-08-23-software-engineering-web-development-01-cline-4-1-12-extends-enterprise-mcp-controls-across-its-agent-stack.md)
- [Cloudflare workerd adds dynamic WebAssembly modules and TypeScript stream RPC support](./2026-08-23-software-engineering-web-development-02-cloudflare-workerd-adds-dynamic-webassembly-modules-and-typescript-strea.md)
- [Gemini CLI nightly hardens macOS agent sandbox boundaries](./2026-08-23-software-engineering-web-development-03-gemini-cli-nightly-hardens-macos-agent-sandbox-boundaries.md)

## Sources

- [https://github.com/microsoft/aspire/releases/tag/v13.5.2](https://github.com/microsoft/aspire/releases/tag/v13.5.2)
