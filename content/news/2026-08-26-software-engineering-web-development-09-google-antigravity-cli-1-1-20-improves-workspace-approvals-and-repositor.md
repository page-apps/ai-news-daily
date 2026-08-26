---
type: AI News
title: "Google Antigravity CLI 1.1.20 improves workspace approvals and repository handling"
description: "Antigravity CLI 1.1.20 adds workspace-scoped read approvals and improves path completion, submodule scanning and recoverable tool-error handling."
date: 2026-08-26
published_at: "2026-08-25T02:58:00.000Z"
summary: "The release adds workspace-scoped read auto-approvals, indexes empty directories for path completion and skips recursive worktree scans in submodules. It also makes benign tool errors and permission denials non-fatal in print mode and preserves malformed settings instead of discarding them."
categories: ["Software engineering & web development"]
tags: ["coding agents","cli","workspace permissions","monorepos","tool reliability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.20"
    title: "Google Antigravity CLI 1.1.20"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-25T21:00:34.487Z" }
verified: { by: "human:cmwen", at: "2026-08-26T00:20:02.220Z" }
status: stable
stale_after: 2026-08-26
---

## Summary

The release adds workspace-scoped read auto-approvals, indexes empty directories for path completion and skips recursive worktree scans in submodules. It also makes benign tool errors and permission denials non-fatal in print mode and preserves malformed settings instead of discarding them.

## Why it matters

These changes target the operational friction that makes coding agents brittle in real repositories: repeated permission prompts, slow scans and fatal handling of recoverable errors. They improve the predictability of CLI agents without expanding their authority globally.

## Related coverage

- [OpenCode 1.18.23 repairs Cloudflare AI Gateway routing and session handling](./2026-08-26-software-engineering-web-development-07-opencode-1-18-23-repairs-cloudflare-ai-gateway-routing-and-session-handl.md)
- [Cline Desktop 0.0.17 consolidates agent controls and caps event-log growth](./2026-08-26-software-engineering-web-development-08-cline-desktop-0-0-17-consolidates-agent-controls-and-caps-event-log-grow.md)
- [A malicious webpage can poison the local model behind NVIDIA NemoClaw](./2026-08-26-software-engineering-web-development-01-a-malicious-webpage-can-poison-the-local-model-behind-nvidia-nemoclaw.md)

## Sources

- [Google Antigravity CLI 1.1.20](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.20)
