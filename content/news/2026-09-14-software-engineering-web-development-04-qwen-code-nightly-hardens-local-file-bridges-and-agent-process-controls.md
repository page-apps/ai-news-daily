---
type: AI News
title: "Qwen Code nightly hardens local-file bridges and agent process controls"
description: "Qwen Code's September 13 nightly release updates trust boundaries, retries and process handling across its agent stack."
date: 2026-09-14
published_at: "2026-09-12T22:03:27.000Z"
summary: "The release closes trust-gate and bystander gaps in the local-files bridge, rejects an unlimited cgroup sentinel for ACP child heaps and adds transient network retries. It also adds an explicit VS Code session-source switch, improves hook handling and reaps surviving Windows hook process trees."
categories: ["Software engineering & web development"]
tags: ["qwen code","coding agents","sandboxing","acp","vscode"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260912.54aa66834b"
    title: "Qwen Code nightly release"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-13T15:57:33.577Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-13T16:04:14.245Z" }
status: stable
stale_after: 2026-09-14
---

## Summary

The release closes trust-gate and bystander gaps in the local-files bridge, rejects an unlimited cgroup sentinel for ACP child heaps and adds transient network retries. It also adds an explicit VS Code session-source switch, improves hook handling and reaps surviving Windows hook process trees.

## Why it matters

These changes address practical isolation, recovery and lifecycle problems that affect the safety of terminal and IDE coding agents.

## Related coverage

- [Claude Code fixes long-session permission regressions in read-only Git commands](./2026-09-14-software-engineering-web-development-03-claude-code-fixes-long-session-permission-regressions-in-read-only-git-c.md)
- [Letta Code adds asynchronous cloud messaging and agent coordination](./2026-09-14-software-engineering-web-development-09-letta-code-adds-asynchronous-cloud-messaging-and-agent-coordination.md)
- [pnpm 11.27 adds explicit build approval and trust-policy cleanup](./2026-09-14-software-engineering-web-development-01-pnpm-11-27-adds-explicit-build-approval-and-trust-policy-cleanup.md)

## Sources

- [Qwen Code nightly release](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260912.54aa66834b)
