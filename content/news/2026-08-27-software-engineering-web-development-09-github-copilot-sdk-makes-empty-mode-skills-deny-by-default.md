---
type: AI News
title: "GitHub Copilot SDK makes empty-mode skills deny-by-default"
description: "A preview release changes the SDK's empty client mode so runtime-bundled skills are excluded unless the host explicitly allows them."
date: 2026-08-27
published_at: "2026-08-26T20:06:22.000Z"
summary: "Copilot SDK v1.0.13-preview.1 makes ClientMode.Empty apply deny-by-default isolation to built-in skills across all six SDKs. Hosts can re-enable selected skills through includedBuiltinSkills, while sessions created in Empty mode otherwise start without runtime-bundled skills."
categories: ["Software engineering & web development"]
tags: ["copilot sdk","agent security","skills","allowlist","developer platforms","mcp"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/github/copilot-sdk/releases/tag/v1.0.13-preview.1"
    title: "GitHub Copilot SDK v1.0.13-preview.1 release"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-26T21:03:46.420Z" }
verified: { by: "human:cmwen", at: "2026-08-27T09:47:41.059Z" }
status: stable
stale_after: 2026-08-27
---

## Summary

Copilot SDK v1.0.13-preview.1 makes ClientMode.Empty apply deny-by-default isolation to built-in skills across all six SDKs. Hosts can re-enable selected skills through includedBuiltinSkills, while sessions created in Empty mode otherwise start without runtime-bundled skills.

## Why it matters

This gives developers embedding Copilot agents a narrower capability baseline and an explicit allowlist for skills that can execute inside an application.

## Related coverage

- [AI-Infra-Guard 4.6 adds LLM API-poisoning checks and agent red-team coverage](./2026-08-27-software-engineering-web-development-08-ai-infra-guard-4-6-adds-llm-api-poisoning-checks-and-agent-red-team-cove.md)
- [Codex CLI 0.150 makes cross-task coordination and trust controls first-class](./2026-08-27-software-engineering-web-development-01-codex-cli-0-150-makes-cross-task-coordination-and-trust-controls-first-c.md)
- [Anthropic updates Claude Code and its TypeScript Agent SDK](./2026-08-27-software-engineering-web-development-02-anthropic-updates-claude-code-and-its-typescript-agent-sdk.md)

## Sources

- [GitHub Copilot SDK v1.0.13-preview.1 release](https://github.com/github/copilot-sdk/releases/tag/v1.0.13-preview.1)
