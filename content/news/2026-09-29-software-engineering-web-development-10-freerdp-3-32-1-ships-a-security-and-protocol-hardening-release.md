---
type: AI News
title: "FreeRDP 3.32.1 ships a security and protocol-hardening release"
description: "FreeRDP 3.32.1 tightens protocol length and timeout checks, fixes several validation paths and links six GitHub security advisories."
date: 2026-09-29
published_at: "2026-09-28T07:59:00.000Z"
summary: "The release addresses checks in gateway HTTP timeouts, channel lengths, media-type negotiation, smart-card emulation and other protocol paths. It also fixes a regression affecting fragmented static-channel copy and paste and adds mobile platform updates."
categories: ["Software engineering & web development"]
tags: ["freerdp","security","remote-desktop","protocols","hardening","cve"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/FreeRDP/FreeRDP/releases/tag/3.32.1"
    title: "Release 3.32.1"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-28T15:11:26.862Z" }
verified: { by: "human:cmwen", at: "2026-09-29T12:25:06.646Z" }
status: stable
stale_after: 2026-09-29
---

## Summary

The release addresses checks in gateway HTTP timeouts, channel lengths, media-type negotiation, smart-card emulation and other protocol paths. It also fixes a regression affecting fragmented static-channel copy and paste and adds mobile platform updates.

## Why it matters

Remote-desktop libraries are embedded in larger clients and services, so hardening releases can reduce exposure across downstream software that developers do not directly control.

## Related coverage

- [OpenCode 1.18.33 improves agent gateway reliability and secrecy](./2026-09-29-software-engineering-web-development-02-opencode-1-18-33-improves-agent-gateway-reliability-and-secrecy.md)
- [LiteLLM 1.104 release candidate tightens gateway accounting and masking](./2026-09-29-software-engineering-web-development-04-litellm-1-104-release-candidate-tightens-gateway-accounting-and-masking.md)
- [Codex CLI 0.158 hardens MCP, sandboxing and terminal approvals](./2026-09-29-software-engineering-web-development-01-codex-cli-0-158-hardens-mcp-sandboxing-and-terminal-approvals.md)

## Sources

- [Release 3.32.1](https://github.com/FreeRDP/FreeRDP/releases/tag/3.32.1)
