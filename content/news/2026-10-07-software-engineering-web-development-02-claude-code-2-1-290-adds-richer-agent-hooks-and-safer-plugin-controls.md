---
type: AI News
title: "Claude Code 2.1.290 adds richer agent hooks and safer plugin controls"
description: "Anthropic released Claude Code 2.1.290 with new hook metadata, agent-session controls and extensive permission and sandbox fixes."
date: 2026-10-07
published_at: "2026-10-05T23:33:00.000Z"
summary: "The release adds tool-call and subagent identifiers to plugin hooks, introduces named-session attach and log commands, and expands managed-agent onboarding. It also fixes MCP attribution, symlink escapes, sandbox approvals, scheduled-task recovery and several remote-session failure modes."
categories: ["Software engineering & web development"]
tags: ["claude code","coding agents","plugins","mcp","sandboxing","security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.290"
    title: "Claude Code v2.1.290"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-06T14:04:20.132Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-06T14:06:06.635Z" }
status: stable
stale_after: 2026-10-07
---

## Summary

The release adds tool-call and subagent identifiers to plugin hooks, introduces named-session attach and log commands, and expands managed-agent onboarding. It also fixes MCP attribution, symlink escapes, sandbox approvals, scheduled-task recovery and several remote-session failure modes.

## Why it matters

Claude Code integrations can now observe and control agent execution more precisely while inheriting stronger safeguards around plugins, files and tools.

## Related coverage

- [GitHub Copilot CLI 1.0.92 improves cloud runs and MCP reliability](./2026-10-07-software-engineering-web-development-03-github-copilot-cli-1-0-92-improves-cloud-runs-and-mcp-reliability.md)
- [Codex CLI 0.160.1 fixes Windows remote-MCP environment handling](./2026-10-07-software-engineering-web-development-04-codex-cli-0-160-1-fixes-windows-remote-mcp-environment-handling.md)
- [OpenHands 1.25.0 expands agent configuration and workflow controls](./2026-10-07-software-engineering-web-development-01-openhands-1-25-0-expands-agent-configuration-and-workflow-controls.md)

## Sources

- [Claude Code v2.1.290](https://github.com/anthropics/claude-code/releases/tag/v2.1.290)
