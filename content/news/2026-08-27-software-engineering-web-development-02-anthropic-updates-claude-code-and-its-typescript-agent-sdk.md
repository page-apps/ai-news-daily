---
type: AI News
title: "Anthropic updates Claude Code and its TypeScript Agent SDK"
description: "A coordinated Claude Code and SDK update improves long-running agent control, MCP handling and host-side usage accounting."
date: 2026-08-27
published_at: "2026-08-25T22:31:51.000Z"
summary: "Claude Code v2.1.246 adds an Auto mode tab to /permissions and fixes background-session startup, MCP interruption reporting, plugin handling, large-session safety checks and third-party gateway credential handling. TypeScript Agent SDK v0.3.246 adds user_message_uuid correlation, costBasis and managed modelPricing metadata, plus perTaskStopAffordance so interrupt() can stop the current turn without stopping background agents and workflows."
categories: ["Software engineering & web development"]
tags: ["claude code","agent sdk","mcp","background agents","permissions","telemetry"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.246"
    title: "Claude Code v2.1.246 release"
  - id: source-2
    resource: "https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.246"
    title: "Claude Agent SDK v0.3.246 release"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-26T21:03:46.416Z" }
verified: { by: "human:cmwen", at: "2026-08-27T09:47:41.059Z" }
status: stable
stale_after: 2026-08-27
---

## Summary

Claude Code v2.1.246 adds an Auto mode tab to /permissions and fixes background-session startup, MCP interruption reporting, plugin handling, large-session safety checks and third-party gateway credential handling. TypeScript Agent SDK v0.3.246 adds user_message_uuid correlation, costBasis and managed modelPricing metadata, plus perTaskStopAffordance so interrupt() can stop the current turn without stopping background agents and workflows.

## Why it matters

The changes target operational gaps that make autonomous coding sessions hard to observe, price and stop safely.

## Related coverage

- [Codex CLI 0.150 makes cross-task coordination and trust controls first-class](./2026-08-27-software-engineering-web-development-01-codex-cli-0-150-makes-cross-task-coordination-and-trust-controls-first-c.md)
- [AI-Infra-Guard 4.6 adds LLM API-poisoning checks and agent red-team coverage](./2026-08-27-software-engineering-web-development-08-ai-infra-guard-4-6-adds-llm-api-poisoning-checks-and-agent-red-team-cove.md)
- [GitHub Copilot SDK makes empty-mode skills deny-by-default](./2026-08-27-software-engineering-web-development-09-github-copilot-sdk-makes-empty-mode-skills-deny-by-default.md)

## Sources

- [Claude Code v2.1.246 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.246)
- [Claude Agent SDK v0.3.246 release](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.246)
