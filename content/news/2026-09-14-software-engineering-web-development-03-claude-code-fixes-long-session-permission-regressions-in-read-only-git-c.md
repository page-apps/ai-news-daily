---
type: AI News
title: "Claude Code fixes long-session permission regressions in read-only Git commands"
description: "Claude Code 2.1.270 repairs a regression that caused read-only Git commands to request permission again during long sessions."
date: 2026-09-14
published_at: "2026-09-12T19:45:44.000Z"
summary: "The patch fixes permission prompts that could reappear after a session had been running for a while. Anthropic identifies the issue as a regression introduced in version 2.1.269."
categories: ["Software engineering & web development"]
tags: ["claude code","coding agents","permissions","git","reliability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.270"
    title: "Claude Code 2.1.270"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-13T15:57:33.575Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-13T16:04:14.245Z" }
status: stable
stale_after: 2026-09-14
---

## Summary

The patch fixes permission prompts that could reappear after a session had been running for a while. Anthropic identifies the issue as a regression introduced in version 2.1.269.

## Why it matters

Reducing false approval prompts improves the reliability of unattended and long-running coding-agent workflows.

## Related coverage

- [Qwen Code nightly hardens local-file bridges and agent process controls](./2026-09-14-software-engineering-web-development-04-qwen-code-nightly-hardens-local-file-bridges-and-agent-process-controls.md)
- [Letta Code adds asynchronous cloud messaging and agent coordination](./2026-09-14-software-engineering-web-development-09-letta-code-adds-asynchronous-cloud-messaging-and-agent-coordination.md)
- [pnpm 11.27 adds explicit build approval and trust-policy cleanup](./2026-09-14-software-engineering-web-development-01-pnpm-11-27-adds-explicit-build-approval-and-trust-policy-cleanup.md)

## Sources

- [Claude Code 2.1.270](https://github.com/anthropics/claude-code/releases/tag/v2.1.270)
