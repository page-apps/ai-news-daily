---
type: AI News
title: "Claude Code adds restricted execution and cross-session messaging"
description: "Claude Code 2.1.248 introduces constrained execution and broader coordination across enterprise-hosted agent sessions."
date: 2026-08-29
published_at: "2026-08-27T22:12:20.000Z"
summary: "The release adds --restricted mode, which removes command-running tools and WebFetch unless explicitly allowed, confines file tools to the working directory, refuses bypassPermissions, and ignores local settings files. It also adds cross-session SendMessage and ListAgents support on Bedrock, Vertex, and Foundry, alongside self-hosted runner labels and prompt-cache fixes."
categories: ["Software engineering & web development"]
tags: ["coding-agents","sandboxing","mcp","enterprise-dev"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.248"
    title: "Claude Code v2.1.248 release notes"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-28T21:07:10.870Z" }
verified: { by: "human:cmwen", at: "2026-08-28T21:41:20.340Z" }
status: stable
stale_after: 2026-08-29
---

## Summary

The release adds --restricted mode, which removes command-running tools and WebFetch unless explicitly allowed, confines file tools to the working directory, refuses bypassPermissions, and ignores local settings files. It also adds cross-session SendMessage and ListAgents support on Bedrock, Vertex, and Foundry, alongside self-hosted runner labels and prompt-cache fixes.

## Why it matters

Engineering teams gain a stronger least-privilege baseline for coding agents while multi-session workflows become more viable on enterprise providers.

## Related coverage

- [Claude Code adds model-switch hooks and remote subagent visibility](./2026-08-29-software-engineering-web-development-02-claude-code-adds-model-switch-hooks-and-remote-subagent-visibility.md)
- [Cline Desktop expands to Windows and improves long-running agent workflows](./2026-08-29-software-engineering-web-development-03-cline-desktop-expands-to-windows-and-improves-long-running-agent-workflo.md)
- [OpenCode adds Azure Entra sign-in and fixes replayable Bedrock reasoning](./2026-08-29-software-engineering-web-development-04-opencode-adds-azure-entra-sign-in-and-fixes-replayable-bedrock-reasoning.md)

## Sources

- [Claude Code v2.1.248 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.248)
