---
type: AI News
title: "GitHub Agentic Workflows 0.88.7 tightens agent output and MCP policy handling"
description: "The GitHub workflow engine adds fail-fast behaviour for incomplete agent work and stricter controls around generated artifacts and repository memory."
date: 2026-09-10
published_at: "2026-09-08T15:34:00.000Z"
summary: "Version 0.88.7 makes agent workflows fail when agents report incomplete work instead of silently succeeding, and restricts artifact packaging to known files. It also improves log-download tooling and filters disallowed repository-memory files before validation and upload."
categories: ["Software engineering & web development"]
tags: ["github","agentic workflows","ci/cd","mcp","security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/github/gh-aw/releases/tag/v0.88.7"
    title: "GitHub Agentic Workflows v0.88.7"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-09T15:22:08.007Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-09T15:25:46.337Z" }
status: stable
stale_after: 2026-09-10
---

## Summary

Version 0.88.7 makes agent workflows fail when agents report incomplete work instead of silently succeeding, and restricts artifact packaging to known files. It also improves log-download tooling and filters disallowed repository-memory files before validation and upload.

## Why it matters

These controls target two core failure modes of automated software delivery: false completion signals and unintended data exposure.

## Related coverage

- [Gemini CLI preview strengthens MCP OAuth, sandboxing and path boundaries](./2026-09-10-software-engineering-web-development-05-gemini-cli-preview-strengthens-mcp-oauth-sandboxing-and-path-boundaries.md)
- [LiteLLM adds streaming guardrail pipelines and stronger agent gateway controls](./2026-09-10-software-engineering-web-development-06-litellm-adds-streaming-guardrail-pipelines-and-stronger-agent-gateway-co.md)
- [Akeyless makes runtime intent controls for AI agents generally available](./2026-09-10-software-engineering-web-development-08-akeyless-makes-runtime-intent-controls-for-ai-agents-generally-available.md)

## Sources

- [GitHub Agentic Workflows v0.88.7](https://github.com/github/gh-aw/releases/tag/v0.88.7)
