---
type: AI News
title: "Rulesync 22.0 changes how agent instructions map to projects"
description: "Rulesync 22.0.0 writes directory-scoped Codex rules as nested `AGENTS.md` files, translates MCP environment-variable headers correctly and improves cross-agent rule imports."
date: 2026-09-29
published_at: "2026-09-27T16:57:00.000Z"
summary: "The release enforces Codex’s 32 KiB instruction-chain limit and warns when generated rule files exceed it. It also converts bearer-token and header variable references into the Codex configuration fields that actually resolve environment values, while making malformed Claude skills non-fatal during import."
categories: ["Software engineering & web development"]
tags: ["rulesync","coding-agents","agentsmd","mcp","configuration","claude-code"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/dyoshikawa/rulesync/releases/tag/v22.0.0"
    title: "Release v22.0.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-28T15:11:26.860Z" }
verified: { by: "human:cmwen", at: "2026-09-29T12:25:06.646Z" }
status: stable
stale_after: 2026-09-29
---

## Summary

The release enforces Codex’s 32 KiB instruction-chain limit and warns when generated rule files exceed it. It also converts bearer-token and header variable references into the Codex configuration fields that actually resolve environment values, while making malformed Claude skills non-fatal during import.

## Why it matters

Instruction synchronisation is becoming infrastructure for teams that use several coding agents, and incorrect rule translation can silently change agent behaviour.

## Related coverage

- [Codex CLI 0.158 hardens MCP, sandboxing and terminal approvals](./2026-09-29-software-engineering-web-development-01-codex-cli-0-158-hardens-mcp-sandboxing-and-terminal-approvals.md)
- [OpenCode 1.18.33 improves agent gateway reliability and secrecy](./2026-09-29-software-engineering-web-development-02-opencode-1-18-33-improves-agent-gateway-reliability-and-secrecy.md)
- [LiteLLM 1.104 release candidate tightens gateway accounting and masking](./2026-09-29-software-engineering-web-development-04-litellm-1-104-release-candidate-tightens-gateway-accounting-and-masking.md)

## Sources

- [Release v22.0.0](https://github.com/dyoshikawa/rulesync/releases/tag/v22.0.0)
