---
type: AI News
title: "Docker Agent adds distributed tracing across ACP requests"
description: "Docker Agent 1.145.0 adds W3C trace propagation and server spans for its agent protocol handlers, alongside new Go lint rules and a streaming TUI fix."
date: 2026-09-29
published_at: "2026-09-28T07:00:00.000Z"
summary: "ACP requests now carry `traceparent` and `tracestate` headers, with server spans covering all 13 implemented agent protocol handlers. The release also adds lint checks for inefficient Go patterns and preserves TUI scrollback during partial tool calls."
categories: ["Software engineering & web development"]
tags: ["docker","agent-runtime","acp","tracing","observability","go"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/docker/docker-agent/releases/tag/v1.145.0"
    title: "Release v1.145.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-28T15:11:26.858Z" }
verified: { by: "human:cmwen", at: "2026-09-29T12:25:06.646Z" }
status: stable
stale_after: 2026-09-29
---

## Summary

ACP requests now carry `traceparent` and `tracestate` headers, with server spans covering all 13 implemented agent protocol handlers. The release also adds lint checks for inefficient Go patterns and preserves TUI scrollback during partial tool calls.

## Why it matters

Trace context makes multi-step agent execution easier to correlate across services, which is necessary for diagnosing latency and failed tool calls.

## Related coverage

- [OpenCode 1.18.33 improves agent gateway reliability and secrecy](./2026-09-29-software-engineering-web-development-02-opencode-1-18-33-improves-agent-gateway-reliability-and-secrecy.md)
- [LiteLLM 1.104 release candidate tightens gateway accounting and masking](./2026-09-29-software-engineering-web-development-04-litellm-1-104-release-candidate-tightens-gateway-accounting-and-masking.md)
- [Codex CLI 0.158 hardens MCP, sandboxing and terminal approvals](./2026-09-29-software-engineering-web-development-01-codex-cli-0-158-hardens-mcp-sandboxing-and-terminal-approvals.md)

## Sources

- [Release v1.145.0](https://github.com/docker/docker-agent/releases/tag/v1.145.0)
