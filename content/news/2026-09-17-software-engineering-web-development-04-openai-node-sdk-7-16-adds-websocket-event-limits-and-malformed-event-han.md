---
type: AI News
title: "OpenAI Node SDK 7.16 adds WebSocket event limits and malformed-event handling"
description: "The official JavaScript SDK improves resilience and resource control for realtime and streaming API clients."
date: 2026-09-17
published_at: "2026-09-15T16:48:00.000Z"
summary: "Version 7.16 adds per-iterator limits for incoming WebSocket events and improves buffering and handling of malformed WebSocket messages. The release also bounds fallback abort subscriptions and keeps callback credentials local to individual HTTP requests."
categories: ["Software engineering & web development"]
tags: ["openai sdk","javascript","websocket","streaming","api reliability","security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/openai/openai-node/releases/tag/v7.16.0"
    title: "Release v7.16.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-16T15:28:31.171Z" }
verified: { by: "human:cmwen", at: "2026-09-17T01:04:33.228Z" }
status: stable
stale_after: 2026-09-17
---

## Summary

Version 7.16 adds per-iterator limits for incoming WebSocket events and improves buffering and handling of malformed WebSocket messages. The release also bounds fallback abort subscriptions and keeps callback credentials local to individual HTTP requests.

## Why it matters

Applications using realtime or streaming OpenAI APIs gain stronger protection against malformed input, unbounded event consumption and credential-scope errors.

## Related coverage

- [Claude Code v2.1.273 adds gateway telemetry hints and safer agent-session recovery](./2026-09-17-software-engineering-web-development-01-claude-code-v2-1-273-adds-gateway-telemetry-hints-and-safer-agent-sessio.md)
- [Gemini CLI 0.60 hardens MCP OAuth, sandboxing and extension boundaries](./2026-09-17-software-engineering-web-development-02-gemini-cli-0-60-hardens-mcp-oauth-sandboxing-and-extension-boundaries.md)
- [Mastra 1.67 adds persisted workflow authoring and platform-backed agent tools](./2026-09-17-software-engineering-web-development-03-mastra-1-67-adds-persisted-workflow-authoring-and-platform-backed-agent-.md)

## Sources

- [Release v7.16.0](https://github.com/openai/openai-node/releases/tag/v7.16.0)
