---
type: AI News
title: "Cline SDK adds recoverable oversized MCP tool results"
description: "Cline SDK 0.0.89 lets agents recover oversized MCP and Composio tool results through bounded previews and paginated cache reads."
date: 2026-10-02
published_at: "2026-09-30T23:34:22.000Z"
summary: "Instead of losing tool output when it exceeds the model context, the SDK stores the complete result in a per-session cache and exposes a cline://cache URI. Agents can retrieve the remaining content by line range, with session-level size and expiry limits."
categories: ["Software engineering & web development"]
tags: ["cline","mcp","coding-agents","context","tooling","reliability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.89"
    title: "Cline SDK v0.0.89"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-01T15:01:15.401Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-01T15:11:51.599Z" }
status: stable
stale_after: 2026-10-02
---

## Summary

Instead of losing tool output when it exceeds the model context, the SDK stores the complete result in a per-session cache and exposes a cline://cache URI. Agents can retrieve the remaining content by line range, with session-level size and expiry limits.

## Why it matters

Large tool responses are a common reliability failure in agent workflows; this change preserves evidence without injecting the entire payload into every model turn.

## Related coverage

- [GitHub Copilot CLI adds GPT-6.1 Sol and tighter session controls](./2026-10-02-software-engineering-web-development-02-github-copilot-cli-adds-gpt-6-1-sol-and-tighter-session-controls.md)
- [VS Code 1.140 makes multi-agent development a first-class workflow](./2026-10-02-software-engineering-web-development-01-vs-code-1-140-makes-multi-agent-development-a-first-class-workflow.md)
- [Claude Code 2.1.286 improves permission and cloud-credential recovery](./2026-10-02-software-engineering-web-development-03-claude-code-2-1-286-improves-permission-and-cloud-credential-recovery.md)

## Sources

- [Cline SDK v0.0.89](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.89)
