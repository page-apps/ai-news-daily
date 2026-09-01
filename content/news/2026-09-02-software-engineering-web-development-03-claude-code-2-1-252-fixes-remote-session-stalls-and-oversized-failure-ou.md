---
type: AI News
title: "Claude Code 2.1.252 fixes remote-session stalls and oversized failure output"
description: "Anthropic shipped a Claude Code patch focused on remote-control reliability and background-task failure handling."
date: 2026-09-02
published_at: "2026-08-31T19:46:55.000Z"
summary: "Version 2.1.252 fixes Remote Control sessions stalling after tools finish when the Claude service connection is degraded. It also prevents very large background-task failure messages from pushing conversations beyond the API request-size limit."
categories: ["Software engineering & web development"]
tags: ["claude-code","coding-agents","remote-control","background-tasks","reliability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.252"
    title: "Release v2.1.252"
    author: "Anthropic"
  - id: source-2
    resource: "https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.252"
    title: "Claude Code release metadata"
    author: "GitHub"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-01T15:18:25.104Z" }
verified: { by: "human:cmwen", at: "2026-09-01T21:02:15.333Z" }
status: stable
stale_after: 2026-09-02
---

## Summary

Version 2.1.252 fixes Remote Control sessions stalling after tools finish when the Claude service connection is degraded. It also prevents very large background-task failure messages from pushing conversations beyond the API request-size limit.

## Why it matters

Long-running coding sessions depend on predictable remote recovery and bounded tool output; both fixes address failure modes that can otherwise discard agent work.

## Related coverage

- [Codex CLI 0.152 adds MCP output caps and longer shell-command deadlines](./2026-09-02-software-engineering-web-development-02-codex-cli-0-152-adds-mcp-output-caps-and-longer-shell-command-deadlines.md)
- [Cline Desktop 0.0.21 makes delegated-agent stops propagate](./2026-09-02-software-engineering-web-development-04-cline-desktop-0-0-21-makes-delegated-agent-stops-propagate.md)
- [Apodex 1.1 pairs an open-weight model with verifiable execution](./2026-09-02-software-engineering-web-development-08-apodex-1-1-pairs-an-open-weight-model-with-verifiable-execution.md)

## Sources

- [Release v2.1.252](https://github.com/anthropics/claude-code/releases/tag/v2.1.252)
- [Claude Code release metadata](https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.252)
