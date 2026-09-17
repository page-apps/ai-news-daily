---
type: AI News
title: "GitHub Copilot CLI lets custom agents inherit repository instructions"
description: "Copilot CLI adds an explicit opt-in for custom agents to read standard repository instruction files."
date: 2026-09-18
published_at: "2026-09-16T21:30:12.000Z"
summary: "Copilot CLI 1.0.86-1 lets custom agents opt into AGENTS.md, copilot-instructions.md and CLAUDE.md through the `include-custom-instructions: true` frontmatter setting. The release also preserves marketplace plugins and skills when active sessions resume after reload and improves sandbox and background-shell status reporting."
categories: ["Software engineering & web development"]
tags: ["github","copilot","coding-agents","repository-instructions","session-resume"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/github/copilot-cli/releases/tag/v1.0.86-1"
    title: "GitHub Copilot CLI 1.0.86-1 release notes"
    author: "GitHub"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-17T15:29:18.877Z" }
verified: { by: "human:cmwen", at: "2026-09-17T21:08:55.235Z" }
status: stable
stale_after: 2026-09-18
---

## Summary

Copilot CLI 1.0.86-1 lets custom agents opt into AGENTS.md, copilot-instructions.md and CLAUDE.md through the `include-custom-instructions: true` frontmatter setting. The release also preserves marketplace plugins and skills when active sessions resume after reload and improves sandbox and background-shell status reporting.

## Why it matters

Repository-local instructions are a key control surface for coding agents, and explicit opt-in makes that context available without silently expanding an agent's operating instructions.

## Related coverage

- [Claude Code 2.1.274 hardens MCP startup, session recovery and telemetry](./2026-09-18-software-engineering-web-development-01-claude-code-2-1-274-hardens-mcp-startup-session-recovery-and-telemetry.md)
- [Cline 4.1.19 blocks planted executables and fixes context exhaustion](./2026-09-18-software-engineering-web-development-02-cline-4-1-19-blocks-planted-executables-and-fixes-context-exhaustion.md)
- [Kilo Code 7.7.3 repairs worktrees and restores browser automation](./2026-09-18-software-engineering-web-development-03-kilo-code-7-7-3-repairs-worktrees-and-restores-browser-automation.md)

## Sources

- [GitHub Copilot CLI 1.0.86-1 release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.86-1)
