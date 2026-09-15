---
type: AI News
title: "Claude Code 2.1.271 adds remote fast mode and tighter agent controls"
description: "Anthropic’s Claude Code release adds remote fast-mode support, per-command network domains and safer plugin command approval."
date: 2026-09-16
published_at: "2026-09-14T22:12:54.000Z"
summary: "The release applies fast mode to permitted cloud and self-hosted Remote sessions, adds per-command allowed domains in sandboxed auto mode and introduces hash-specific approval for plugin installation and updates. It also fixes MCP OAuth registration handling, session resumption, permission checks and background-command duplication."
categories: ["Software engineering & web development"]
tags: ["claude-code","coding-agent","sandboxing","mcp","remote-sessions","security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.271"
    title: "Claude Code v2.1.271"
  - id: source-2
    resource: "https://github.com/anthropics/claude-code/releases.atom"
    title: "Claude Code release feed"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-15T15:20:38.311Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-15T15:23:54.429Z" }
status: stable
stale_after: 2026-09-16
---

## Summary

The release applies fast mode to permitted cloud and self-hosted Remote sessions, adds per-command allowed domains in sandboxed auto mode and introduces hash-specific approval for plugin installation and updates. It also fixes MCP OAuth registration handling, session resumption, permission checks and background-command duplication.

## Why it matters

The changes improve the security boundaries and operational reliability of enterprise coding agents running remotely or with plugins and MCP servers.

## Related coverage

- [Cline SDK 0.0.83 introduces hub-managed Agent Plugins](./2026-09-16-software-engineering-web-development-06-cline-sdk-0-0-83-introduces-hub-managed-agent-plugins.md)
- [Qwen Code 0.23.4 expands resumable and cross-session agent workflows](./2026-09-16-software-engineering-web-development-02-qwen-code-0-23-4-expands-resumable-and-cross-session-agent-workflows.md)
- [OpenCode 1.18.31 restores state across resumed agent sessions](./2026-09-16-software-engineering-web-development-03-opencode-1-18-31-restores-state-across-resumed-agent-sessions.md)

## Sources

- [Claude Code v2.1.271](https://github.com/anthropics/claude-code/releases/tag/v2.1.271)
- [Claude Code release feed](https://github.com/anthropics/claude-code/releases.atom)
