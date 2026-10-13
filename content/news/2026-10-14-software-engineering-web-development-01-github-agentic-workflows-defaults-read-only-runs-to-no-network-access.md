---
type: AI News
title: "GitHub Agentic Workflows defaults read-only runs to no network access"
description: "GitHub Agentic Workflows 0.91.10 tightened the execution boundary for read-only agent workflows."
date: 2026-10-14
published_at: "2026-10-13T05:18:46.000Z"
summary: "The release disables network access by default for read-only workflows. It also records richer session provenance, plugin installations and MCP configuration, improving auditability of agent-driven automation."
categories: ["Software engineering & web development"]
tags: ["github","agentic-workflows","ci","mcp","sandboxing","security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/github/gh-aw/releases/tag/v0.91.10"
    title: "GitHub Agentic Workflows v0.91.10"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-13T14:02:43.623Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-13T14:05:45.573Z" }
status: stable
stale_after: 2026-10-14
---

## Summary

The release disables network access by default for read-only workflows. It also records richer session provenance, plugin installations and MCP configuration, improving auditability of agent-driven automation.

## Why it matters

This makes least-privilege defaults a built-in property of agentic CI workflows and reduces the blast radius of compromised or misbehaving agents.

## Related coverage

- [GitHub Copilot CLI adds agent-scoped hooks and safer autopilot handling](./2026-10-14-software-engineering-web-development-02-github-copilot-cli-adds-agent-scoped-hooks-and-safer-autopilot-handling.md)
- [pnpm adds registry profile and token management commands](./2026-10-14-software-engineering-web-development-08-pnpm-adds-registry-profile-and-token-management-commands.md)
- [Next.js canary adds agent-aware upgrade controls and durable-cache changes](./2026-10-14-software-engineering-web-development-03-next-js-canary-adds-agent-aware-upgrade-controls-and-durable-cache-chang.md)

## Sources

- [GitHub Agentic Workflows v0.91.10](https://github.com/github/gh-aw/releases/tag/v0.91.10)
