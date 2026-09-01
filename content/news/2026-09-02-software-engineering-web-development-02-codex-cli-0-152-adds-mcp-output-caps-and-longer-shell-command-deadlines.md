---
type: AI News
title: "Codex CLI 0.152 adds MCP output caps and longer shell-command deadlines"
description: "OpenAI's Codex CLI 0.152 release expands MCP controls, approval-review handling and cloud-task safeguards."
date: 2026-09-02
published_at: "2026-09-01T01:58:32.000Z"
summary: "The release adds per-tool MCP output limits, package-style MCP server names and configurable shell-command timeouts beyond one hour. It also preserves approval context through compaction and rejects untrusted cloud-task URLs and redirects."
categories: ["Software engineering & web development"]
tags: ["codex","coding-agents","mcp","security","cli","reliability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/openai/codex/releases/tag/rust-v0.152.0"
    title: "Release 0.152.0"
    author: "OpenAI"
  - id: source-2
    resource: "https://api.github.com/repos/openai/codex/releases/tags/rust-v0.152.0"
    title: "Codex release metadata"
    author: "GitHub"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-01T15:18:25.104Z" }
verified: { by: "human:cmwen", at: "2026-09-01T21:02:15.332Z" }
status: stable
stale_after: 2026-09-02
---

## Summary

The release adds per-tool MCP output limits, package-style MCP server names and configurable shell-command timeouts beyond one hour. It also preserves approval context through compaction and rejects untrusted cloud-task URLs and redirects.

## Why it matters

These changes target the reliability, security and operability problems that emerge when coding agents run long-lived, tool-heavy workflows.

## Related coverage

- [Claude Code 2.1.252 fixes remote-session stalls and oversized failure output](./2026-09-02-software-engineering-web-development-03-claude-code-2-1-252-fixes-remote-session-stalls-and-oversized-failure-ou.md)
- [Cline Desktop 0.0.21 makes delegated-agent stops propagate](./2026-09-02-software-engineering-web-development-04-cline-desktop-0-0-21-makes-delegated-agent-stops-propagate.md)
- [Apodex 1.1 pairs an open-weight model with verifiable execution](./2026-09-02-software-engineering-web-development-08-apodex-1-1-pairs-an-open-weight-model-with-verifiable-execution.md)

## Sources

- [Release 0.152.0](https://github.com/openai/codex/releases/tag/rust-v0.152.0)
- [Codex release metadata](https://api.github.com/repos/openai/codex/releases/tags/rust-v0.152.0)
