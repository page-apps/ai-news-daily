---
type: AI News
title: "OpenCode 1.18.33 improves agent gateway reliability and secrecy"
description: "OpenCode 1.18.33 fixes Cloudflare AI Gateway timeout handling, reports immediate MCP browser-launch failures, redacts sensitive debug output and aligns Gemini thinking controls."
date: 2026-09-29
published_at: "2026-09-28T04:22:00.000Z"
summary: "Provider response and stream timeouts are now honoured for Cloudflare AI Gateway models. The release also prevents credentials and sensitive headers from appearing in debug configuration output and makes MCP launch failures visible to users."
categories: ["Software engineering & web development"]
tags: ["opencode","coding-agents","cloudflare","mcp","observability","security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anomalyco/opencode/releases/tag/v1.18.33"
    title: "Release v1.18.33"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-28T15:11:26.858Z" }
verified: { by: "human:cmwen", at: "2026-09-29T12:25:06.646Z" }
status: stable
stale_after: 2026-09-29
---

## Summary

Provider response and stream timeouts are now honoured for Cloudflare AI Gateway models. The release also prevents credentials and sensitive headers from appearing in debug configuration output and makes MCP launch failures visible to users.

## Why it matters

These changes reduce hidden hangs, diagnostic credential leakage and ambiguous failures in production coding-agent workflows.

## Related coverage

- [LiteLLM 1.104 release candidate tightens gateway accounting and masking](./2026-09-29-software-engineering-web-development-04-litellm-1-104-release-candidate-tightens-gateway-accounting-and-masking.md)
- [Codex CLI 0.158 hardens MCP, sandboxing and terminal approvals](./2026-09-29-software-engineering-web-development-01-codex-cli-0-158-hardens-mcp-sandboxing-and-terminal-approvals.md)
- [Rulesync 22.0 changes how agent instructions map to projects](./2026-09-29-software-engineering-web-development-07-rulesync-22-0-changes-how-agent-instructions-map-to-projects.md)

## Sources

- [Release v1.18.33](https://github.com/anomalyco/opencode/releases/tag/v1.18.33)
