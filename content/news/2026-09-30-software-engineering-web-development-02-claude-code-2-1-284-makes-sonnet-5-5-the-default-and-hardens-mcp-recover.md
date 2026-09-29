---
type: AI News
title: "Claude Code 2.1.284 makes Sonnet 5.5 the default and hardens MCP recovery"
description: "Anthropic shipped a large Claude Code release covering model support, permissions, MCP reliability, gateway controls and session recovery."
date: 2026-09-30
published_at: "2026-09-28T17:11:00.000Z"
summary: "Version 2.1.284 adds Claude Sonnet 5.5 as the default Sonnet model on the Anthropic API, with 1-million-token context and published pricing. It also makes resumed MCP sessions wait for connecting servers, adds bulk MCP reconnect, improves permission and plugin controls, and fixes numerous agent-session failures."
categories: ["Software engineering & web development"]
tags: ["claude-code","mcp","coding-agents","permissions","session-recovery"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.284"
    title: "Claude Code v2.1.284"
  - id: source-2
    resource: "https://clauding.de/posts/claude-code-2-1-284/"
    title: "Claude Code 2.1.284 release timing and changes"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-29T15:20:32.384Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-29T15:24:31.895Z" }
status: stable
stale_after: 2026-09-30
---

## Summary

Version 2.1.284 adds Claude Sonnet 5.5 as the default Sonnet model on the Anthropic API, with 1-million-token context and published pricing. It also makes resumed MCP sessions wait for connecting servers, adds bulk MCP reconnect, improves permission and plugin controls, and fixes numerous agent-session failures.

## Why it matters

The release combines a model upgrade with operational safeguards that directly affect long-running coding-agent workflows.

## Related coverage

- [GitHub Copilot CLI 1.0.89 expands model choice and MCP resilience](./2026-09-30-software-engineering-web-development-03-github-copilot-cli-1-0-89-expands-model-choice-and-mcp-resilience.md)
- [Claude Sonnet 5.5 launches with a major coding-efficiency jump](./2026-09-30-software-engineering-web-development-01-claude-sonnet-5-5-launches-with-a-major-coding-efficiency-jump.md)
- [Copilot SDK adds typed outputs and human review for agent installations](./2026-09-30-software-engineering-web-development-04-copilot-sdk-adds-typed-outputs-and-human-review-for-agent-installations.md)

## Sources

- [Claude Code v2.1.284](https://github.com/anthropics/claude-code/releases/tag/v2.1.284)
- [Claude Code 2.1.284 release timing and changes](https://clauding.de/posts/claude-code-2-1-284/)
