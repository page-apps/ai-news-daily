---
type: AI News
title: "Cline moves agent plugins into the hub process"
description: "Cline CLI 3.0.71 and SDK 0.0.93 changed plugin loading and failure reporting across the coding-agent stack."
date: 2026-10-14
published_at: "2026-10-13T08:56:25.000Z"
summary: "Plugins now load in the hub process by default, removing the requirement for a Node or Bun runtime on the user's PATH. Failed plugins remain visible through status commands and session diagnostics instead of silently losing their tools, while sandboxed subprocess loading remains available."
categories: ["Software engineering & web development"]
tags: ["cline","coding-agents","plugins","cli","sdk","observability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cline/cline/releases/tag/cli-v3.0.71"
    title: "Cline CLI v3.0.71"
  - id: source-2
    resource: "https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.93"
    title: "Cline SDK v0.0.93"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-13T14:02:43.624Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-13T14:05:45.573Z" }
status: stable
stale_after: 2026-10-14
---

## Summary

Plugins now load in the hub process by default, removing the requirement for a Node or Bun runtime on the user's PATH. Failed plugins remain visible through status commands and session diagnostics instead of silently losing their tools, while sandboxed subprocess loading remains available.

## Why it matters

The change simplifies deployment while making plugin failures and capability loss observable, which is important for reliable agent extensibility.

## Related coverage

- [GitHub Copilot CLI adds agent-scoped hooks and safer autopilot handling](./2026-10-14-software-engineering-web-development-02-github-copilot-cli-adds-agent-scoped-hooks-and-safer-autopilot-handling.md)
- [Qwen Code nightly improves managed-agent coordination and test triage](./2026-10-14-software-engineering-web-development-10-qwen-code-nightly-improves-managed-agent-coordination-and-test-triage.md)
- [OpenHands adds browser recording and built-in ACP agents](./2026-10-14-software-engineering-web-development-05-openhands-adds-browser-recording-and-built-in-acp-agents.md)

## Sources

- [Cline CLI v3.0.71](https://github.com/cline/cline/releases/tag/cli-v3.0.71)
- [Cline SDK v0.0.93](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.93)
