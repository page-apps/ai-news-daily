---
type: AI News
title: "Claude Code adds model-switch hooks and remote subagent visibility"
description: "Claude Code 2.1.251 exposes model lifecycle hooks, foreground subagent activity, cost data, and additional agent security fixes."
date: 2026-08-29
published_at: "2026-08-28T18:19:32.000Z"
summary: "The release adds PreModelSwitch and PostModelSwitch hooks, plus live streaming of foreground subagent tool calls and results to Remote Control clients. It also exposes spend-limit and prompt-cache data and fixes symlink races, plugin path traversal, unsafe workflow paths, and symlink-based search-rule bypasses."
categories: ["Software engineering & web development"]
tags: ["coding-agents","hooks","remote-control","security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.251"
    title: "Claude Code v2.1.251 release notes"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-28T21:07:10.871Z" }
verified: { by: "human:cmwen", at: "2026-08-28T21:41:20.340Z" }
status: stable
stale_after: 2026-08-29
---

## Summary

The release adds PreModelSwitch and PostModelSwitch hooks, plus live streaming of foreground subagent tool calls and results to Remote Control clients. It also exposes spend-limit and prompt-cache data and fixes symlink races, plugin path traversal, unsafe workflow paths, and symlink-based search-rule bypasses.

## Why it matters

Model changes, remote activity, cost and security controls become observable and enforceable parts of long-running agent workflows.

## Related coverage

- [Claude Code adds restricted execution and cross-session messaging](./2026-08-29-software-engineering-web-development-01-claude-code-adds-restricted-execution-and-cross-session-messaging.md)
- [Cline Desktop expands to Windows and improves long-running agent workflows](./2026-08-29-software-engineering-web-development-03-cline-desktop-expands-to-windows-and-improves-long-running-agent-workflo.md)
- [OpenCode adds Azure Entra sign-in and fixes replayable Bedrock reasoning](./2026-08-29-software-engineering-web-development-04-opencode-adds-azure-entra-sign-in-and-fixes-replayable-bedrock-reasoning.md)

## Sources

- [Claude Code v2.1.251 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.251)
