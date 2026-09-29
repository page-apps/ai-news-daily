---
type: AI News
title: "LiteLLM 1.104 release candidate tightens gateway accounting and masking"
description: "LiteLLM 1.104.0-rc.1 updates provider pricing coverage, migrates its Langfuse callback to SDK v4 and fixes MCP grant validation, streamed-output masking and router budget reads."
date: 2026-09-29
published_at: "2026-09-28T08:01:00.000Z"
summary: "The release adds cached image-input pricing and repairs accounting paths involving MCP grants and Redis budget pipelines. It also masks streamed output more reliably and updates the Langfuse integration to its fourth SDK generation."
categories: ["Software engineering & web development"]
tags: ["litellm","ai-gateway","mcp","observability","cost-controls","security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/BerriAI/litellm/releases/tag/v1.104.0-rc.1"
    title: "Release v1.104.0-rc.1"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-28T15:11:26.859Z" }
verified: { by: "human:cmwen", at: "2026-09-29T12:25:06.646Z" }
status: stable
stale_after: 2026-09-29
---

## Summary

The release adds cached image-input pricing and repairs accounting paths involving MCP grants and Redis budget pipelines. It also masks streamed output more reliably and updates the Langfuse integration to its fourth SDK generation.

## Why it matters

AI gateways sit between applications and multiple model providers, so accounting, redaction and access-control bugs can affect both cost controls and data exposure.

## Related coverage

- [OpenCode 1.18.33 improves agent gateway reliability and secrecy](./2026-09-29-software-engineering-web-development-02-opencode-1-18-33-improves-agent-gateway-reliability-and-secrecy.md)
- [Codex CLI 0.158 hardens MCP, sandboxing and terminal approvals](./2026-09-29-software-engineering-web-development-01-codex-cli-0-158-hardens-mcp-sandboxing-and-terminal-approvals.md)
- [Docker Agent adds distributed tracing across ACP requests](./2026-09-29-software-engineering-web-development-03-docker-agent-adds-distributed-tracing-across-acp-requests.md)

## Sources

- [Release v1.104.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.104.0-rc.1)
