---
type: AI News
title: "Cline 4.1.19 blocks planted executables and fixes context exhaustion"
description: "Cline's latest release adds clearer image-model handling, safer Windows process resolution and more reliable long-running agent execution."
date: 2026-09-18
published_at: "2026-09-17T07:51:58.000Z"
summary: "Cline 4.1.19 warns when images are attached to text-only models and improves model capability reporting. It bases compaction on provider-reported token counts, blocks workspace executables from shadowing trusted Windows commands, retries transient failures and prevents several command and credential-handling errors."
categories: ["Software engineering & web development"]
tags: ["cline","coding-agents","security","context-windows","windows"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cline/cline/releases/tag/v4.1.19"
    title: "Cline v4.1.19 release notes"
    author: "Cline"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-17T15:29:18.874Z" }
verified: { by: "human:cmwen", at: "2026-09-17T21:08:55.235Z" }
status: stable
stale_after: 2026-09-18
---

## Summary

Cline 4.1.19 warns when images are attached to text-only models and improves model capability reporting. It bases compaction on provider-reported token counts, blocks workspace executables from shadowing trusted Windows commands, retries transient failures and prevents several command and credential-handling errors.

## Why it matters

The release addresses both agent reliability and a practical workspace-level execution risk, two failure modes that become more important as coding agents gain broader repository and shell access.

## Related coverage

- [Claude Code 2.1.274 hardens MCP startup, session recovery and telemetry](./2026-09-18-software-engineering-web-development-01-claude-code-2-1-274-hardens-mcp-startup-session-recovery-and-telemetry.md)
- [Kilo Code 7.7.3 repairs worktrees and restores browser automation](./2026-09-18-software-engineering-web-development-03-kilo-code-7-7-3-repairs-worktrees-and-restores-browser-automation.md)
- [OpenHands 1.20 adds profile-scoped secrets and Docker runtime forwarding](./2026-09-18-software-engineering-web-development-04-openhands-1-20-adds-profile-scoped-secrets-and-docker-runtime-forwarding.md)

## Sources

- [Cline v4.1.19 release notes](https://github.com/cline/cline/releases/tag/v4.1.19)
