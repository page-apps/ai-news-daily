---
type: AI News
title: "Pydantic AI 2.44 closes four web-fetch and telemetry security paths"
description: "The framework's security release addresses network-policy bypasses, event-loop denial of service and sensitive telemetry leakage."
date: 2026-09-18
published_at: "2026-09-17T04:03:52.000Z"
summary: "Pydantic AI 2.44 fixes four vulnerabilities reachable through web fetching or OpenTelemetry instrumentation. The fixes cover an IPv6 zone-identifier bypass of private-network blocklists, superlinear processing of attacker-controlled pages, alternate spellings of blocked domains and sensitive content remaining in spans despite `include_content=False`."
categories: ["Software engineering & web development"]
tags: ["pydantic-ai","agent-security","web-fetch","opentelemetry","ssrf"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/pydantic/pydantic-ai/releases/tag/v2.44.0"
    title: "Pydantic AI v2.44.0 release notes"
    author: "Pydantic"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-17T15:29:18.877Z" }
verified: { by: "human:cmwen", at: "2026-09-17T21:08:55.235Z" }
status: stable
stale_after: 2026-09-18
---

## Summary

Pydantic AI 2.44 fixes four vulnerabilities reachable through web fetching or OpenTelemetry instrumentation. The fixes cover an IPv6 zone-identifier bypass of private-network blocklists, superlinear processing of attacker-controlled pages, alternate spellings of blocked domains and sensitive content remaining in spans despite `include_content=False`.

## Why it matters

Agent frameworks increasingly combine web access with tracing, so network filters and telemetry redaction are part of the application's security boundary rather than optional tooling.

## Related coverage

- [Claude Code 2.1.274 hardens MCP startup, session recovery and telemetry](./2026-09-18-software-engineering-web-development-01-claude-code-2-1-274-hardens-mcp-startup-session-recovery-and-telemetry.md)
- [Cline 4.1.19 blocks planted executables and fixes context exhaustion](./2026-09-18-software-engineering-web-development-02-cline-4-1-19-blocks-planted-executables-and-fixes-context-exhaustion.md)
- [Kilo Code 7.7.3 repairs worktrees and restores browser automation](./2026-09-18-software-engineering-web-development-03-kilo-code-7-7-3-repairs-worktrees-and-restores-browser-automation.md)

## Sources

- [Pydantic AI v2.44.0 release notes](https://github.com/pydantic/pydantic-ai/releases/tag/v2.44.0)
