---
type: AI News
title: "Copilot SDK adds typed outputs and human review for agent installations"
description: "GitHub Copilot SDK 1.0.15 adds structured result handling and an explicit confirmation hook for MCP and skill installation."
date: 2026-09-30
published_at: "2026-09-28T19:38:57.000Z"
summary: "All six Copilot SDKs can now request JSON-Schema-validated or idiomatically typed outputs instead of free-form text. They also expose structured JSON-RPC error data and an installation-confirmation handler that lets applications require human approval before an MCP server or skill is installed."
categories: ["Software engineering & web development"]
tags: ["copilot-sdk","typed-output","mcp","agent-security","json-rpc"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/github/copilot-sdk/releases/tag/v1.0.15"
    title: "Copilot SDK v1.0.15"
  - id: source-2
    resource: "https://api.github.com/repos/github/copilot-sdk/releases/tags/v1.0.15"
    title: "Copilot SDK v1.0.15 release metadata"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-29T15:20:32.385Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-29T15:24:31.895Z" }
status: stable
stale_after: 2026-09-30
---

## Summary

All six Copilot SDKs can now request JSON-Schema-validated or idiomatically typed outputs instead of free-form text. They also expose structured JSON-RPC error data and an installation-confirmation handler that lets applications require human approval before an MCP server or skill is installed.

## Why it matters

Typed results improve integration reliability, while installation confirmation moves a critical agent permission boundary into the host application.

## Related coverage

- [Claude Code 2.1.284 makes Sonnet 5.5 the default and hardens MCP recovery](./2026-09-30-software-engineering-web-development-02-claude-code-2-1-284-makes-sonnet-5-5-the-default-and-hardens-mcp-recover.md)
- [GitHub Copilot CLI 1.0.89 expands model choice and MCP resilience](./2026-09-30-software-engineering-web-development-03-github-copilot-cli-1-0-89-expands-model-choice-and-mcp-resilience.md)
- [Firebase CLI 15.32.0 introduces function kits and deployment fixes](./2026-09-30-software-engineering-web-development-08-firebase-cli-15-32-0-introduces-function-kits-and-deployment-fixes.md)

## Sources

- [Copilot SDK v1.0.15](https://github.com/github/copilot-sdk/releases/tag/v1.0.15)
- [Copilot SDK v1.0.15 release metadata](https://api.github.com/repos/github/copilot-sdk/releases/tags/v1.0.15)
