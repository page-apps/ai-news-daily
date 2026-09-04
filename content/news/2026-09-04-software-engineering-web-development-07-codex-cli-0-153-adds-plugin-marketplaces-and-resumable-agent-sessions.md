---
type: AI News
title: "Codex CLI 0.153 adds plugin marketplaces and resumable agent sessions"
description: "OpenAI's Codex CLI added plugin management, session recovery and new context controls."
date: 2026-09-04
published_at: "2026-09-03T01:39:03.000Z"
summary: "Codex CLI 0.153.0 adds commands to list, install and remove plugins from remote marketplaces, along with experimental context management and new app-server thread metadata. It also improves recovery after app-server disconnects, preserves Guardian and MCP approval state across compaction, restarts and forks, and adds a fuller TUI history view."
categories: ["Software engineering & web development"]
tags: ["codex","coding agents","cli","plugins","session recovery","mcp"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/openai/codex/releases/tag/rust-v0.153.0"
    title: "Release 0.153.0"
    author: "OpenAI"
  - id: source-2
    resource: "https://github.com/openai/codex/releases.atom"
    title: "OpenAI Codex release feed"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-04T23:11:53.944Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-04T23:17:09.930Z" }
status: stable
stale_after: 2026-09-04
---

## Summary

Codex CLI 0.153.0 adds commands to list, install and remove plugins from remote marketplaces, along with experimental context management and new app-server thread metadata. It also improves recovery after app-server disconnects, preserves Guardian and MCP approval state across compaction, restarts and forks, and adds a fuller TUI history view.

## Why it matters

The changes make longer-running coding-agent workflows easier to extend, recover and inspect. Remote plugins also increase the importance of extension provenance and approval controls.

## Related coverage

- [Meta releases Muse Spark 1.3 for coding and agentic workflows](./2026-09-04-software-engineering-web-development-02-meta-releases-muse-spark-1-3-for-coding-and-agentic-workflows.md)
- [GitHub details cost reductions in AI coding without reported quality loss](./2026-09-04-software-engineering-web-development-03-github-details-cost-reductions-in-ai-coding-without-reported-quality-los.md)
- [VS Code 1.136 adds Agent Merge and multi-root agent workspaces](./2026-09-04-software-engineering-web-development-08-vs-code-1-136-adds-agent-merge-and-multi-root-agent-workspaces.md)

## Sources

- [Release 0.153.0](https://github.com/openai/codex/releases/tag/rust-v0.153.0)
- [OpenAI Codex release feed](https://github.com/openai/codex/releases.atom)
