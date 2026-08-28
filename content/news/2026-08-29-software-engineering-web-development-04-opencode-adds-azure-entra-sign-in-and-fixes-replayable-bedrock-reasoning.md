---
type: AI News
title: "OpenCode adds Azure Entra sign-in and fixes replayable Bedrock reasoning"
description: "OpenCode 1.18.24 improves provider authentication and preserves reasoning state during agent-session replay."
date: 2026-08-29
published_at: "2026-08-28T04:10:14.000Z"
summary: "OpenCode v1.18.24 stops Bedrock reasoning responses from being cached as unreplayable empty messages and lets Azure providers authenticate through Microsoft Entra ID via the Azure CLI. It also reads supported v2 configuration fields, easing mixed-version deployments."
categories: ["Software engineering & web development"]
tags: ["coding-agents","azure","bedrock","authentication"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anomalyco/opencode/releases/tag/v1.18.24"
    title: "OpenCode v1.18.24 release notes"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-28T21:07:10.872Z" }
verified: { by: "human:cmwen", at: "2026-08-28T21:41:20.340Z" }
status: stable
stale_after: 2026-08-29
---

## Summary

OpenCode v1.18.24 stops Bedrock reasoning responses from being cached as unreplayable empty messages and lets Azure providers authenticate through Microsoft Entra ID via the Azure CLI. It also reads supported v2 configuration fields, easing mixed-version deployments.

## Why it matters

The update improves provider portability and makes recovery more reliable for developers running multi-provider coding agents.

## Related coverage

- [Claude Code adds restricted execution and cross-session messaging](./2026-08-29-software-engineering-web-development-01-claude-code-adds-restricted-execution-and-cross-session-messaging.md)
- [Claude Code adds model-switch hooks and remote subagent visibility](./2026-08-29-software-engineering-web-development-02-claude-code-adds-model-switch-hooks-and-remote-subagent-visibility.md)
- [Cline Desktop expands to Windows and improves long-running agent workflows](./2026-08-29-software-engineering-web-development-03-cline-desktop-expands-to-windows-and-improves-long-running-agent-workflo.md)

## Sources

- [OpenCode v1.18.24 release notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.24)
