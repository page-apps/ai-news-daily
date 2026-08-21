---
type: AI News
title: "Pydantic AI v2.33 repairs the Anthropic SDK 1.0 compatibility break"
description: "Pydantic AI shipped a compatibility release after Anthropic's 1.0 SDK changed its HTTP client baseline."
date: 2026-08-22
published_at: "2026-08-21T04:53:40.000Z"
summary: "Pydantic AI 2.33.0 requires and supports anthropic>=1.0.0 after fresh pydantic-ai[anthropic] installs could otherwise resolve an incompatible SDK and fail at runtime. Applications that pass a custom client to AnthropicProvider must now use httpx2.AsyncClient."
categories: ["Software engineering & web development"]
tags: ["pydantic ai","anthropic","python","sdk compatibility","agents"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/pydantic/pydantic-ai/releases/tag/v2.33.0"
    title: "Pydantic AI v2.33.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-21T21:23:56.810Z" }
verified: { by: "human:cmwen", at: "2026-08-21T21:49:49.256Z" }
status: stable
stale_after: 2026-08-22
---

## Summary

Pydantic AI 2.33.0 requires and supports anthropic>=1.0.0 after fresh pydantic-ai[anthropic] installs could otherwise resolve an incompatible SDK and fail at runtime. Applications that pass a custom client to AnthropicProvider must now use httpx2.AsyncClient.

## Why it matters

It is a concrete example of how fast-moving agent SDKs can break transitive integrations, and it gives application teams a precise upgrade or pinning path.

## Related coverage

- [Claude Code v2.1.238 hardens plugin credentials and self-hosted agent operations](./2026-08-22-software-engineering-web-development-01-claude-code-v2-1-238-hardens-plugin-credentials-and-self-hosted-agent-op.md)
- [Codex CLI 0.149 turns parallel agent sessions into a managed workspace](./2026-08-22-software-engineering-web-development-02-codex-cli-0-149-turns-parallel-agent-sessions-into-a-managed-workspace.md)
- [GitHub's Copilot Cloud Agent status visibility degraded for hours](./2026-08-22-software-engineering-web-development-03-github-s-copilot-cloud-agent-status-visibility-degraded-for-hours.md)

## Sources

- [Pydantic AI v2.33.0](https://github.com/pydantic/pydantic-ai/releases/tag/v2.33.0)
