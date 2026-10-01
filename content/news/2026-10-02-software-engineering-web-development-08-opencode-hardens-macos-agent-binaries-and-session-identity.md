---
type: AI News
title: "OpenCode hardens macOS agent binaries and session identity"
description: "OpenCode 1.18.34 adds namespaced session and parent-session headers and re-signs locally compiled macOS binaries with Developer ID support."
date: 2026-10-02
published_at: "2026-09-30T22:39:45.000Z"
summary: "Model requests now carry session identity that distinguishes nested and parent sessions. The release also improves macOS 27 compatibility by re-signing locally compiled binaries and signing CLI release binaries with a Developer ID."
categories: ["Software engineering & web development"]
tags: ["opencode","coding-agents","macos","signing","sessions","observability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anomalyco/opencode/releases/tag/v1.18.34"
    title: "OpenCode 1.18.34"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-01T15:01:15.401Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-01T15:11:51.599Z" }
status: stable
stale_after: 2026-10-02
---

## Summary

Model requests now carry session identity that distinguishes nested and parent sessions. The release also improves macOS 27 compatibility by re-signing locally compiled binaries and signing CLI release binaries with a Developer ID.

## Why it matters

The update strengthens traceability for nested agent work and reduces deployment friction for developers running the agent on newer macOS versions.

## Related coverage

- [GitHub Copilot CLI adds GPT-6.1 Sol and tighter session controls](./2026-10-02-software-engineering-web-development-02-github-copilot-cli-adds-gpt-6-1-sol-and-tighter-session-controls.md)
- [Claude Code 2.1.286 improves permission and cloud-credential recovery](./2026-10-02-software-engineering-web-development-03-claude-code-2-1-286-improves-permission-and-cloud-credential-recovery.md)
- [VS Code 1.140 makes multi-agent development a first-class workflow](./2026-10-02-software-engineering-web-development-01-vs-code-1-140-makes-multi-agent-development-a-first-class-workflow.md)

## Sources

- [OpenCode 1.18.34](https://github.com/anomalyco/opencode/releases/tag/v1.18.34)
