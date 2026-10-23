---
type: AI News
title: "Claude Code 2.1.309 closes multiple sandbox and permission bypasses"
description: "Anthropic released Claude Code 2.1.309 with security fixes spanning sandbox boundaries, MCP configuration, symlink handling and compound Bash commands."
date: 2026-10-24
published_at: "2026-10-22T22:18:57.000Z"
summary: "The release prevents shell startup files and MCP configuration files from being modified outside intended controls, and fixes permission checks that could be bypassed through symlinks or wrapped directory changes. It also hardens worktree isolation and Windows hook behaviour."
categories: ["Software engineering & web development"]
tags: ["claude-code","coding-agents","sandbox","mcp","developer-security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.309"
    title: "Claude Code v2.1.309 release"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-23T14:01:58.287Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-23T13:58:45.049Z" }
status: stable
stale_after: 2026-10-24
---

## Summary

The release prevents shell startup files and MCP configuration files from being modified outside intended controls, and fixes permission checks that could be bypassed through symlinks or wrapped directory changes. It also hardens worktree isolation and Windows hook behaviour.

## Why it matters

Coding agents execute commands with access to source trees and developer credentials, so sandbox correctness is a core supply-chain and workstation-security concern.

## Related coverage

- [Codex CLI 0.164.0 adds enterprise MCP authentication and reusable presets](./2026-10-24-software-engineering-web-development-02-codex-cli-0-164-0-adds-enterprise-mcp-authentication-and-reusable-preset.md)
- [Microsoft Agent Framework 1.23.0 establishes MCP 2.x compatibility](./2026-10-24-software-engineering-web-development-03-microsoft-agent-framework-1-23-0-establishes-mcp-2-x-compatibility.md)
- [Payload CMS 4.0 beta improves accessibility and speeds TanStack Start development loads](./2026-10-24-software-engineering-web-development-04-payload-cms-4-0-beta-improves-accessibility-and-speeds-tanstack-start-de.md)

## Sources

- [Claude Code v2.1.309 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.309)
