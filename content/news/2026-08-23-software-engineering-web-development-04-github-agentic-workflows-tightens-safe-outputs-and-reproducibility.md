---
type: AI News
title: "GitHub Agentic Workflows tightens safe outputs and reproducibility"
description: "gh-aw v0.87.4 makes agentic workflow compilation, plugin provenance and credential handling more explicit."
date: 2026-08-23
published_at: "2026-08-22T04:46:00.000Z"
summary: "gh-aw v0.87.4 makes compilation fail when safe-output step-output tokens cannot resolve, adds pinned Agent Plugins, and supports per-engine model overrides and custom providers. It also stops `GH_TOKEN` persisting in repo-memory clone `.git/config` and derives conclusion-job write permission from resolved safe-output configuration."
categories: ["Software engineering & web development"]
tags: ["github","agentic workflows","copilot","safe outputs","security","observability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/github/gh-aw/releases/tag/v0.87.4"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-22T21:44:45.476Z" }
verified: { by: "human:cmwen", at: "2026-08-23T04:30:04.835Z" }
status: stable
stale_after: 2026-08-23
---

## Summary

gh-aw v0.87.4 makes compilation fail when safe-output step-output tokens cannot resolve, adds pinned Agent Plugins, and supports per-engine model overrides and custom providers. It also stops `GH_TOKEN` persisting in repo-memory clone `.git/config` and derives conclusion-job write permission from resolved safe-output configuration.

## Why it matters

For agentic GitHub Actions, workflow compilation, extension provenance and credential handling become explicit parts of the build pipeline.

## Related coverage

- [Gemini CLI nightly hardens macOS agent sandbox boundaries](./2026-08-23-software-engineering-web-development-03-gemini-cli-nightly-hardens-macos-agent-sandbox-boundaries.md)
- [syslog-ng 4.9 adds native HTTP statistics exporters](./2026-08-23-software-engineering-web-development-07-syslog-ng-4-9-adds-native-http-statistics-exporters.md)
- [Cline 4.1.12 extends enterprise MCP controls across its agent stack](./2026-08-23-software-engineering-web-development-01-cline-4-1-12-extends-enterprise-mcp-controls-across-its-agent-stack.md)

## Sources

- [https://github.com/github/gh-aw/releases/tag/v0.87.4](https://github.com/github/gh-aw/releases/tag/v0.87.4)
