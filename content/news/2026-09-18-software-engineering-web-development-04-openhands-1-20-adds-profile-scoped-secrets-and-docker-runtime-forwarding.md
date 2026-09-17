---
type: AI News
title: "OpenHands 1.20 adds profile-scoped secrets and Docker runtime forwarding"
description: "OpenHands expands agent profiles so automations can select credentials and runtime settings explicitly."
date: 2026-09-18
published_at: "2026-09-17T07:15:18.000Z"
summary: "OpenHands 1.20 lets agent profiles select the secrets available to them, forwards Docker conversation runtime settings and allows automations to choose saved profiles. The release also isolates mock-LLM profiles from ambient secrets in tests."
categories: ["Software engineering & web development"]
tags: ["openhands","coding-agents","secrets","docker","automation"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/OpenHands/OpenHands/releases/tag/v1.20.0"
    title: "OpenHands v1.20.0 release notes"
    author: "OpenHands"
  - id: source-2
    resource: "https://api.github.com/repos/OpenHands/OpenHands/releases/tags/v1.20.0"
    title: "OpenHands v1.20.0 release metadata"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-17T15:29:18.876Z" }
verified: { by: "human:cmwen", at: "2026-09-17T21:08:55.235Z" }
status: stable
stale_after: 2026-09-18
---

## Summary

OpenHands 1.20 lets agent profiles select the secrets available to them, forwards Docker conversation runtime settings and allows automations to choose saved profiles. The release also isolates mock-LLM profiles from ambient secrets in tests.

## Why it matters

Explicit secret and runtime scoping makes automated coding-agent deployments easier to reproduce and reduces accidental credential exposure.

## Related coverage

- [Claude Code 2.1.274 hardens MCP startup, session recovery and telemetry](./2026-09-18-software-engineering-web-development-01-claude-code-2-1-274-hardens-mcp-startup-session-recovery-and-telemetry.md)
- [Cline 4.1.19 blocks planted executables and fixes context exhaustion](./2026-09-18-software-engineering-web-development-02-cline-4-1-19-blocks-planted-executables-and-fixes-context-exhaustion.md)
- [Kilo Code 7.7.3 repairs worktrees and restores browser automation](./2026-09-18-software-engineering-web-development-03-kilo-code-7-7-3-repairs-worktrees-and-restores-browser-automation.md)

## Sources

- [OpenHands v1.20.0 release notes](https://github.com/OpenHands/OpenHands/releases/tag/v1.20.0)
- [OpenHands v1.20.0 release metadata](https://api.github.com/repos/OpenHands/OpenHands/releases/tags/v1.20.0)
