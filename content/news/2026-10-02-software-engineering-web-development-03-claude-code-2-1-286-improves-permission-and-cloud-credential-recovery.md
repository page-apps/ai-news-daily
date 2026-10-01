---
type: AI News
title: "Claude Code 2.1.286 improves permission and cloud-credential recovery"
description: "Claude Code 2.1.286 adds clearer stacked permission prompts and fixes repeated login-browser launches when cloud credentials expire."
date: 2026-10-02
published_at: "2026-09-30T19:10:13.000Z"
summary: "The release shows counts such as “2 of 5” when several permission requests are pending and adds mouse navigation for fullscreen lists. It also fixes cases where GCP or AWS credential refreshes opened multiple login browsers and where resumed sessions lost turns."
categories: ["Software engineering & web development"]
tags: ["claude-code","coding-agents","permissions","sessions","authentication"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.286"
    title: "Claude Code 2.1.286"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-01T15:01:15.399Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-01T15:11:51.599Z" }
status: stable
stale_after: 2026-10-02
---

## Summary

The release shows counts such as “2 of 5” when several permission requests are pending and adds mouse navigation for fullscreen lists. It also fixes cases where GCP or AWS credential refreshes opened multiple login browsers and where resumed sessions lost turns.

## Why it matters

These changes target failure modes that interrupt long-running coding-agent work and can create confusing or excessive authentication flows.

## Related coverage

- [GitHub Copilot CLI adds GPT-6.1 Sol and tighter session controls](./2026-10-02-software-engineering-web-development-02-github-copilot-cli-adds-gpt-6-1-sol-and-tighter-session-controls.md)
- [OpenCode hardens macOS agent binaries and session identity](./2026-10-02-software-engineering-web-development-08-opencode-hardens-macos-agent-binaries-and-session-identity.md)
- [VS Code 1.140 makes multi-agent development a first-class workflow](./2026-10-02-software-engineering-web-development-01-vs-code-1-140-makes-multi-agent-development-a-first-class-workflow.md)

## Sources

- [Claude Code 2.1.286](https://github.com/anthropics/claude-code/releases/tag/v2.1.286)
