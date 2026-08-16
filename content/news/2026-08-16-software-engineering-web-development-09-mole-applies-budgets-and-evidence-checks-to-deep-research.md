---
type: AI News
title: "Mole applies budgets and evidence checks to deep research"
description: "Mole is a local research agent that enforces spending limits, verifies claims against source text and exposes its workflow through MCP."
date: 2026-08-16
summary: "Mole reserves every model call against a ledger before execution, checks extracted claims against verbatim source text, and records unsupported claims rather than silently retaining them. It runs as a static binary, supports OpenAI-compatible endpoints and restricts local-data analysis to aggregate outputs."
categories: ["Software engineering & web development"]
tags: ["research agents","mcp","verification","privacy","cost controls"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/lajosdeme/mole"
    title: "Mole"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-16T00:40:46.520Z" }
verified: { by: "human:cmwen", at: "2026-08-16T21:05:51.881Z" }
status: stable
stale_after: 2026-08-16
---

## Summary

Mole reserves every model call against a ledger before execution, checks extracted claims against verbatim source text, and records unsupported claims rather than silently retaining them. It runs as a static binary, supports OpenAI-compatible endpoints and restricts local-data analysis to aggregate outputs.

## Why it matters

Budget enforcement and evidence traceability address two operational weaknesses that make autonomous research difficult to use inside engineering and coding-agent workflows.

## Related coverage

- [Qwen3.8-27B expands locally deployable coding models](./2026-08-16-software-engineering-web-development-01-qwen3-8-27b-expands-locally-deployable-coding-models.md)
- [DeepSeek releases a plugin-oriented agent harness](./2026-08-16-software-engineering-web-development-02-deepseek-releases-a-plugin-oriented-agent-harness.md)
- [npm moves risky installation behaviour behind explicit approval](./2026-08-16-software-engineering-web-development-03-npm-moves-risky-installation-behaviour-behind-explicit-approval.md)

## Sources

- [Mole](https://github.com/lajosdeme/mole)
