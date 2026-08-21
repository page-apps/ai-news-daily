---
type: AI News
title: "OpenCode v1.18.20 makes subagent failures resumable and provider retries explicit"
description: "The coding-agent release focuses on recoverability when subagents or model providers fail."
date: 2026-08-22
published_at: "2026-08-21T08:09:31.000Z"
summary: "OpenCode 1.18.20 now surfaces failed subagent calls with resumable task IDs instead of returning empty results, and retries several network, capacity and temporary-provider failures. It also preserves provider-specific token settings and handles permission requests raised by subagents during opencode run."
categories: ["Software engineering & web development"]
tags: ["opencode","coding agents","subagents","reliability","provider routing"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anomalyco/opencode/releases/tag/v1.18.20"
    title: "OpenCode v1.18.20"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-21T21:23:56.811Z" }
verified: { by: "human:cmwen", at: "2026-08-21T21:49:49.256Z" }
status: stable
stale_after: 2026-08-22
---

## Summary

OpenCode 1.18.20 now surfaces failed subagent calls with resumable task IDs instead of returning empty results, and retries several network, capacity and temporary-provider failures. It also preserves provider-specific token settings and handles permission requests raised by subagents during opencode run.

## Why it matters

Recoverable failure state is essential when coding agents run unattended; silent empty results and transient provider errors otherwise turn automation into guesswork.

## Related coverage

- [GitHub's Copilot Cloud Agent status visibility degraded for hours](./2026-08-22-software-engineering-web-development-03-github-s-copilot-cloud-agent-status-visibility-degraded-for-hours.md)
- [Claude Code v2.1.238 hardens plugin credentials and self-hosted agent operations](./2026-08-22-software-engineering-web-development-01-claude-code-v2-1-238-hardens-plugin-credentials-and-self-hosted-agent-op.md)
- [Codex CLI 0.149 turns parallel agent sessions into a managed workspace](./2026-08-22-software-engineering-web-development-02-codex-cli-0-149-turns-parallel-agent-sessions-into-a-managed-workspace.md)

## Sources

- [OpenCode v1.18.20](https://github.com/anomalyco/opencode/releases/tag/v1.18.20)
