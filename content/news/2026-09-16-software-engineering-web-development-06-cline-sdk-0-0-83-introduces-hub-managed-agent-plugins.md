---
type: AI News
title: "Cline SDK 0.0.83 introduces hub-managed Agent Plugins"
description: "Cline’s SDK release adds centrally managed plugin discovery and hardens plugin, retry and workspace execution behaviour."
date: 2026-09-16
published_at: "2026-09-15T05:53:27.000Z"
summary: "Hub-managed plugins are discovered from explicit host paths, while workspace .agents/plugins directories are not scanned automatically and therefore cannot implicitly start repository-controlled MCP servers. The release also adds bounded retries for transient model failures, improves event-stream performance and prevents apply_patch Add File operations from silently overwriting existing files."
categories: ["Software engineering & web development"]
tags: ["cline","agent-plugins","mcp","coding-agent","security","reliability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cline/cline/releases/tag/sdk%2Fsdk%2Fv0.0.83"
    title: "Cline SDK v0.0.83"
  - id: source-2
    resource: "https://github.com/cline/cline/releases.atom"
    title: "Cline release feed"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-15T15:20:38.312Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-15T15:23:54.429Z" }
status: stable
stale_after: 2026-09-16
---

## Summary

Hub-managed plugins are discovered from explicit host paths, while workspace .agents/plugins directories are not scanned automatically and therefore cannot implicitly start repository-controlled MCP servers. The release also adds bounded retries for transient model failures, improves event-stream performance and prevents apply_patch Add File operations from silently overwriting existing files.

## Why it matters

The update combines a safer plugin trust model with reliability improvements for long-running coding-agent sessions.

## Related coverage

- [Claude Code 2.1.271 adds remote fast mode and tighter agent controls](./2026-09-16-software-engineering-web-development-04-claude-code-2-1-271-adds-remote-fast-mode-and-tighter-agent-controls.md)
- [OpenCode 1.18.31 restores state across resumed agent sessions](./2026-09-16-software-engineering-web-development-03-opencode-1-18-31-restores-state-across-resumed-agent-sessions.md)
- [Qwen Code 0.23.4 expands resumable and cross-session agent workflows](./2026-09-16-software-engineering-web-development-02-qwen-code-0-23-4-expands-resumable-and-cross-session-agent-workflows.md)

## Sources

- [Cline SDK v0.0.83](https://github.com/cline/cline/releases/tag/sdk%2Fsdk%2Fv0.0.83)
- [Cline release feed](https://github.com/cline/cline/releases.atom)
