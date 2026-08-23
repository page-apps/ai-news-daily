---
type: AI News
title: "LiteLLM v1.98.0 adds gateway observability and control features"
description: "LiteLLM v1.98.0 adds trace correlation, streaming heartbeats, token-rate limits, virtual routing groups, and billing fixes."
date: 2026-08-24
published_at: "2026-08-23T00:28:00.000Z"
summary: "The gateway can now attach opt-in session and trace identifiers to JSON logs, send per-deployment SSE heartbeats, and enforce configurable output-token limits by key, team, or model. The release also exposes routing groups as virtual models and improves MCP timeouts, tracing, and provider cost accounting."
categories: ["Software engineering & web development"]
tags: ["litellm","ai gateways","observability","rate limits","mcp","cost control"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/BerriAI/litellm/releases/tag/v1.98.0"
    title: "LiteLLM v1.98.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-23T21:07:59.609Z" }
verified: { by: "human:cmwen", at: "2026-08-23T21:12:09.010Z" }
status: stable
stale_after: 2026-08-24
---

## Summary

The gateway can now attach opt-in session and trace identifiers to JSON logs, send per-deployment SSE heartbeats, and enforce configurable output-token limits by key, team, or model. The release also exposes routing groups as virtual models and improves MCP timeouts, tracing, and provider cost accounting.

## Why it matters

These controls address the operational problems that emerge when teams run multiple model providers and long-lived agent or application streams through a shared gateway.

## Related coverage

- [Cline SDK v0.0.78 adds durable Hub event replay](./2026-08-24-software-engineering-web-development-02-cline-sdk-v0-0-78-adds-durable-hub-event-replay.md)
- [Cline Desktop v0.0.16 makes Hub restarts recoverable](./2026-08-24-software-engineering-web-development-01-cline-desktop-v0-0-16-makes-hub-restarts-recoverable.md)
- [Cline CLI v3.0.57 adds drain-aware Hub upgrades](./2026-08-24-software-engineering-web-development-03-cline-cli-v3-0-57-adds-drain-aware-hub-upgrades.md)

## Sources

- [LiteLLM v1.98.0](https://github.com/BerriAI/litellm/releases/tag/v1.98.0)
