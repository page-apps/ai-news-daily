---
type: AI News
title: "Claude Code 2.1.301 adds safer unattended retries and richer agent telemetry"
description: "Claude Code 2.1.301 adds a watchdog limit for unattended retries and exposes classifier and permission details through OpenTelemetry."
date: 2026-10-17
published_at: "2026-10-15T14:34:00.000Z"
summary: "The release adds CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS so unattended retry mode can stop instead of waiting indefinitely for a usage limit to reset. It also adds classifier verdict, permission mode, and classifier-category fields to tool-decision telemetry, while fixing unsafe worktree deletion and several search and workflow-reporting failures."
categories: ["Software engineering & web development"]
tags: ["claude-code","coding-agents","telemetry","observability","worktrees","automation"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.301"
    title: "Claude Code 2.1.301"
  - id: source-2
    resource: "https://ai-kidou.jp/ainews-20261016/"
    title: "2026年10月16日号"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-16T14:01:42.823Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-16T14:02:56.214Z" }
status: stable
stale_after: 2026-10-17
---

## Summary

The release adds CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS so unattended retry mode can stop instead of waiting indefinitely for a usage limit to reset. It also adds classifier verdict, permission mode, and classifier-category fields to tool-decision telemetry, while fixing unsafe worktree deletion and several search and workflow-reporting failures.

## Why it matters

These changes improve the operability and auditability of long-running coding agents, especially in automated or headless environments where silent stalls and incorrect success reports are costly.

## Related coverage

- [GitHub makes agentic autofix for code-scanning alerts generally available](./2026-10-17-software-engineering-web-development-01-github-makes-agentic-autofix-for-code-scanning-alerts-generally-availabl.md)

## Sources

- [Claude Code 2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301)
- [2026年10月16日号](https://ai-kidou.jp/ainews-20261016/)
