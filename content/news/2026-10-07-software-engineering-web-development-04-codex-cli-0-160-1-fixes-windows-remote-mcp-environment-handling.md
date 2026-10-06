---
type: AI News
title: "Codex CLI 0.160.1 fixes Windows remote-MCP environment handling"
description: "OpenAI released Codex CLI 0.160.1 with a targeted fix for remote standard-I/O MCP servers on Windows execution paths."
date: 2026-10-07
published_at: "2026-10-05T18:29:00.000Z"
summary: "The release preserves SYSTEMROOT, TEMP and TMP when remote MCP servers run with explicitly configured environment variables. The change allows Unix hosts to retain the Windows executor’s startup environment instead of losing required variables."
categories: ["Software engineering & web development"]
tags: ["codex","cli","mcp","windows","coding agents"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/openai/codex/releases/tag/rust-v0.160.1"
    title: "Codex CLI 0.160.1"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-06T14:04:20.133Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-06T14:06:06.635Z" }
status: stable
stale_after: 2026-10-07
---

## Summary

The release preserves SYSTEMROOT, TEMP and TMP when remote MCP servers run with explicitly configured environment variables. The change allows Unix hosts to retain the Windows executor’s startup environment instead of losing required variables.

## Why it matters

Cross-platform MCP execution is a foundational part of agentic development, and environment loss can prevent tools from starting or behave inconsistently across operating systems.

## Related coverage

- [GitHub Copilot CLI 1.0.92 improves cloud runs and MCP reliability](./2026-10-07-software-engineering-web-development-03-github-copilot-cli-1-0-92-improves-cloud-runs-and-mcp-reliability.md)
- [Claude Code 2.1.290 adds richer agent hooks and safer plugin controls](./2026-10-07-software-engineering-web-development-02-claude-code-2-1-290-adds-richer-agent-hooks-and-safer-plugin-controls.md)
- [Gemini CLI nightly strengthens the latest agent runtime path](./2026-10-07-software-engineering-web-development-07-gemini-cli-nightly-strengthens-the-latest-agent-runtime-path.md)

## Sources

- [Codex CLI 0.160.1](https://github.com/openai/codex/releases/tag/rust-v0.160.1)
