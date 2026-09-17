---
type: AI News
title: "Claude Code 2.1.274 hardens MCP startup, session recovery and telemetry"
description: "Anthropic's release adds bounded MCP startup waits, richer OpenTelemetry signals and numerous long-session recovery fixes."
date: 2026-09-18
published_at: "2026-09-17T00:12:02.000Z"
summary: "Claude Code 2.1.274 adds configuration for limiting MCP startup waits, an effort attribute for OpenTelemetry spans and a redacted managed-settings telemetry event. It also improves transcript repair, context compaction, subagent reliability, remote sessions and gateway error handling."
categories: ["Software engineering & web development"]
tags: ["claude-code","coding-agents","mcp","observability","session-recovery"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.274"
    title: "Claude Code v2.1.274 release notes"
    author: "Anthropic"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-17T15:29:18.866Z" }
verified: { by: "human:cmwen", at: "2026-09-17T21:08:55.235Z" }
status: stable
stale_after: 2026-09-18
---

## Summary

Claude Code 2.1.274 adds configuration for limiting MCP startup waits, an effort attribute for OpenTelemetry spans and a redacted managed-settings telemetry event. It also improves transcript repair, context compaction, subagent reliability, remote sessions and gateway error handling.

## Why it matters

Coding agents are becoming long-running services, making startup bounds, recoverable state and operator telemetry essential for dependable use in development environments.

## Related coverage

- [Cline 4.1.19 blocks planted executables and fixes context exhaustion](./2026-09-18-software-engineering-web-development-02-cline-4-1-19-blocks-planted-executables-and-fixes-context-exhaustion.md)
- [Kilo Code 7.7.3 repairs worktrees and restores browser automation](./2026-09-18-software-engineering-web-development-03-kilo-code-7-7-3-repairs-worktrees-and-restores-browser-automation.md)
- [OpenHands 1.20 adds profile-scoped secrets and Docker runtime forwarding](./2026-09-18-software-engineering-web-development-04-openhands-1-20-adds-profile-scoped-secrets-and-docker-runtime-forwarding.md)

## Sources

- [Claude Code v2.1.274 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.274)
