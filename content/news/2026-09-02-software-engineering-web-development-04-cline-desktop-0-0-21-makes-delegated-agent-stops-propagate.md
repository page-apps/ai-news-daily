---
type: AI News
title: "Cline Desktop 0.0.21 makes delegated-agent stops propagate"
description: "Cline's latest desktop release improves cancellation, model discovery, authentication diagnostics and tracing."
date: 2026-09-02
published_at: "2026-08-31T21:41:33.000Z"
summary: "Stopping a session now propagates aborts to child agents and teammates, with cancelled teammate tasks persisted as cancelled. The release also refreshes live provider models, distinguishes authentication failures from outages, restores Langfuse tracing in production builds and changes unpinned defaults across about 36 providers."
categories: ["Software engineering & web development"]
tags: ["cline","coding-agents","subagents","observability","model-catalog","reproducibility"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cline/cline/releases/tag/desktop-v0.0.21"
    title: "Release Desktop v0.0.21"
    author: "Cline"
  - id: source-2
    resource: "https://api.github.com/repos/cline/cline/releases/tags/desktop-v0.0.21"
    title: "Cline release metadata"
    author: "GitHub"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-01T15:18:25.104Z" }
verified: { by: "human:cmwen", at: "2026-09-01T21:02:15.333Z" }
status: stable
stale_after: 2026-09-02
---

## Summary

Stopping a session now propagates aborts to child agents and teammates, with cancelled teammate tasks persisted as cancelled. The release also refreshes live provider models, distinguishes authentication failures from outages, restores Langfuse tracing in production builds and changes unpinned defaults across about 36 providers.

## Why it matters

Reliable cancellation is a basic control for autonomous development, while live model catalogs and changed defaults make pinning and reproducibility more important.

## Related coverage

- [Codex CLI 0.152 adds MCP output caps and longer shell-command deadlines](./2026-09-02-software-engineering-web-development-02-codex-cli-0-152-adds-mcp-output-caps-and-longer-shell-command-deadlines.md)
- [Claude Code 2.1.252 fixes remote-session stalls and oversized failure output](./2026-09-02-software-engineering-web-development-03-claude-code-2-1-252-fixes-remote-session-stalls-and-oversized-failure-ou.md)
- [Apodex 1.1 pairs an open-weight model with verifiable execution](./2026-09-02-software-engineering-web-development-08-apodex-1-1-pairs-an-open-weight-model-with-verifiable-execution.md)

## Sources

- [Release Desktop v0.0.21](https://github.com/cline/cline/releases/tag/desktop-v0.0.21)
- [Cline release metadata](https://api.github.com/repos/cline/cline/releases/tags/desktop-v0.0.21)
