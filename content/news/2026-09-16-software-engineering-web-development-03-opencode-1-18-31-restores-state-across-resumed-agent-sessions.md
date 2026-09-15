---
type: AI News
title: "OpenCode 1.18.31 restores state across resumed agent sessions"
description: "OpenCode fixed ACP session-state restoration and improved remote configuration error reporting."
date: 2026-09-16
published_at: "2026-09-14T17:47:30.000Z"
summary: "Version 1.18.31 restores model, effort, mode and reasoning-chunk boundaries when sessions are loaded, resumed or forked. It also makes remote configuration authentication failures visible during startup and exits with a failure status."
categories: ["Software engineering & web development"]
tags: ["opencode","coding-agent","acp","sessions","reliability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anomalyco/opencode/releases/tag/v1.18.31"
    title: "OpenCode v1.18.31"
  - id: source-2
    resource: "https://github.com/anomalyco/opencode/releases.atom"
    title: "OpenCode release feed"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-15T15:20:38.310Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-15T15:23:54.429Z" }
status: stable
stale_after: 2026-09-16
---

## Summary

Version 1.18.31 restores model, effort, mode and reasoning-chunk boundaries when sessions are loaded, resumed or forked. It also makes remote configuration authentication failures visible during startup and exits with a failure status.

## Why it matters

Reliable state restoration is essential for coding agents that operate across long-running, resumable tasks rather than one-shot prompts.

## Related coverage

- [Qwen Code 0.23.4 expands resumable and cross-session agent workflows](./2026-09-16-software-engineering-web-development-02-qwen-code-0-23-4-expands-resumable-and-cross-session-agent-workflows.md)
- [Cline SDK 0.0.83 introduces hub-managed Agent Plugins](./2026-09-16-software-engineering-web-development-06-cline-sdk-0-0-83-introduces-hub-managed-agent-plugins.md)
- [Claude Code 2.1.271 adds remote fast mode and tighter agent controls](./2026-09-16-software-engineering-web-development-04-claude-code-2-1-271-adds-remote-fast-mode-and-tighter-agent-controls.md)

## Sources

- [OpenCode v1.18.31](https://github.com/anomalyco/opencode/releases/tag/v1.18.31)
- [OpenCode release feed](https://github.com/anomalyco/opencode/releases.atom)
