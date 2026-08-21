---
type: AI News
title: "Claude Agent SDK adds explicit subagent depth and refusal lifecycle events"
description: "Anthropic's TypeScript agent SDK exposes more state for supervising nested and cross-session work."
date: 2026-08-22
published_at: "2026-08-20T20:33:14.000Z"
summary: "Claude Agent SDK TypeScript 0.3.238 adds is_backgrounded and spawn_depth to subagent task events, plus a terminal refused state for cross-session messages rejected by policy. It also fixes hook reinitialisation and exposes more reliable branch and prompt-suggestion events."
categories: ["Software engineering & web development"]
tags: ["claude","agent sdk","typescript","subagents","hooks","observability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.238"
    title: "Claude Agent SDK TypeScript v0.3.238"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-21T21:23:56.812Z" }
verified: { by: "human:cmwen", at: "2026-08-21T21:49:49.256Z" }
status: stable
stale_after: 2026-08-22
---

## Summary

Claude Agent SDK TypeScript 0.3.238 adds is_backgrounded and spawn_depth to subagent task events, plus a terminal refused state for cross-session messages rejected by policy. It also fixes hook reinitialisation and exposes more reliable branch and prompt-suggestion events.

## Why it matters

Explicit lifecycle state lets agent hosts distinguish background work, nesting and policy refusal instead of reconstructing those conditions from missing events.

## Related coverage

- [GitHub's Copilot Cloud Agent status visibility degraded for hours](./2026-08-22-software-engineering-web-development-03-github-s-copilot-cloud-agent-status-visibility-degraded-for-hours.md)
- [OpenCode v1.18.20 makes subagent failures resumable and provider retries explicit](./2026-08-22-software-engineering-web-development-05-opencode-v1-18-20-makes-subagent-failures-resumable-and-provider-retries.md)
- [Cline CLI v3.0.56 carries skills, images and hook state into agent sessions](./2026-08-22-software-engineering-web-development-07-cline-cli-v3-0-56-carries-skills-images-and-hook-state-into-agent-sessio.md)

## Sources

- [Claude Agent SDK TypeScript v0.3.238](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.238)
