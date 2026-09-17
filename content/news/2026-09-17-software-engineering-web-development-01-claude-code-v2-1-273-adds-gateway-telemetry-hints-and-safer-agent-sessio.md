---
type: AI News
title: "Claude Code v2.1.273 adds gateway telemetry hints and safer agent-session recovery"
description: "Anthropic’s coding agent release adds opt-in gateway headers, MCP reconnect diagnostics and remote-session forking."
date: 2026-09-17
published_at: "2026-09-15T20:23:00.000Z"
summary: "The release adds request headers for gateway routing and observability, MCP disconnect notifications, and the ability to fork remote-control sessions into local background sessions. It also fixes permission-analysis bypasses, managed MCP settings, background-agent result delivery, context accounting and artifact publishing."
categories: ["Software engineering & web development"]
tags: ["coding agents","mcp","observability","sandboxing","developer tools"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.273"
    title: "Release v2.1.273"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-16T15:28:31.169Z" }
verified: { by: "human:cmwen", at: "2026-09-17T01:04:33.227Z" }
status: stable
stale_after: 2026-09-17
---

## Summary

The release adds request headers for gateway routing and observability, MCP disconnect notifications, and the ability to fork remote-control sessions into local background sessions. It also fixes permission-analysis bypasses, managed MCP settings, background-agent result delivery, context accounting and artifact publishing.

## Why it matters

The update improves visibility and recovery for long-running coding agents while closing several permission and policy-enforcement gaps.

## Related coverage

- [Gemini CLI 0.60 hardens MCP OAuth, sandboxing and extension boundaries](./2026-09-17-software-engineering-web-development-02-gemini-cli-0-60-hardens-mcp-oauth-sandboxing-and-extension-boundaries.md)
- [Meta exposes WhatsApp Business setup to coding agents through a new MCP server](./2026-09-17-software-engineering-web-development-06-meta-exposes-whatsapp-business-setup-to-coding-agents-through-a-new-mcp-.md)
- [Mastra 1.67 adds persisted workflow authoring and platform-backed agent tools](./2026-09-17-software-engineering-web-development-03-mastra-1-67-adds-persisted-workflow-authoring-and-platform-backed-agent-.md)

## Sources

- [Release v2.1.273](https://github.com/anthropics/claude-code/releases/tag/v2.1.273)
