---
type: AI News
title: "Gemini CLI 0.60 hardens MCP OAuth, sandboxing and extension boundaries"
description: "Google’s open-source coding CLI ships a release centred on safer tool execution and extension handling."
date: 2026-09-17
published_at: "2026-09-15T20:31:00.000Z"
summary: "Gemini CLI 0.60 enforces RFC 9207 issuer identification in MCP OAuth and improves web-fetch destination validation and connection routing. It also isolates macOS sandbox directories, validates extension paths and workspace boundaries, checks configuration ownership, sanitises environment changes and preserves provenance metadata for untrusted tool output."
categories: ["Software engineering & web development"]
tags: ["gemini cli","coding agents","mcp","oauth","sandboxing","developer security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0"
    title: "Release v0.60.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-16T15:28:31.170Z" }
verified: { by: "human:cmwen", at: "2026-09-17T01:06:24.116Z" }
status: stable
stale_after: 2026-09-17
---

## Summary

Gemini CLI 0.60 enforces RFC 9207 issuer identification in MCP OAuth and improves web-fetch destination validation and connection routing. It also isolates macOS sandbox directories, validates extension paths and workspace boundaries, checks configuration ownership, sanitises environment changes and preserves provenance metadata for untrusted tool output.

## Why it matters

The changes address the trust boundaries where coding agents connect to external tools, filesystems, extensions and web resources.

## Related coverage

- [Claude Code v2.1.273 adds gateway telemetry hints and safer agent-session recovery](./2026-09-17-software-engineering-web-development-01-claude-code-v2-1-273-adds-gateway-telemetry-hints-and-safer-agent-sessio.md)
- [LiteLLM 1.103 dev release tightens MCP admission, guardrails and spend controls](./2026-09-17-software-engineering-web-development-05-litellm-1-103-dev-release-tightens-mcp-admission-guardrails-and-spend-co.md)
- [Meta exposes WhatsApp Business setup to coding agents through a new MCP server](./2026-09-17-software-engineering-web-development-06-meta-exposes-whatsapp-business-setup-to-coding-agents-through-a-new-mcp-.md)

## Sources

- [Release v0.60.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0)
