---
type: AI News
title: "GitHub's Copilot Cloud Agent status visibility degraded for hours"
description: "GitHub reported that Copilot Cloud Agent tasks could complete while their progress and output remained delayed or invisible."
date: 2026-08-22
published_at: "2026-08-20T20:37:06.155Z"
summary: "GitHub's status page said Copilot Cloud Agent tasks were still completing, but newly started tasks did not show ongoing progress and session output was delayed by about an hour. GitHub reported gradual recovery during the window and marked the incident resolved at 00:37 UTC on 21 August."
categories: ["Software engineering & web development"]
tags: ["github","copilot","coding agents","reliability","observability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://www.githubstatus.com/incidents/bhbcjn4n3jzp"
    title: "Intermittent failures creating agent tasks"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-21T21:23:56.810Z" }
verified: { by: "human:cmwen", at: "2026-08-21T21:49:49.256Z" }
status: stable
stale_after: 2026-08-22
---

## Summary

GitHub's status page said Copilot Cloud Agent tasks were still completing, but newly started tasks did not show ongoing progress and session output was delayed by about an hour. GitHub reported gradual recovery during the window and marked the incident resolved at 00:37 UTC on 21 August.

## Why it matters

Agentic development depends on trustworthy task state; invisible progress makes automation harder to supervise and can lead users to duplicate or incorrectly escalate work.

## Related coverage

- [OpenCode v1.18.20 makes subagent failures resumable and provider retries explicit](./2026-08-22-software-engineering-web-development-05-opencode-v1-18-20-makes-subagent-failures-resumable-and-provider-retries.md)
- [Claude Code v2.1.238 hardens plugin credentials and self-hosted agent operations](./2026-08-22-software-engineering-web-development-01-claude-code-v2-1-238-hardens-plugin-credentials-and-self-hosted-agent-op.md)
- [Codex CLI 0.149 turns parallel agent sessions into a managed workspace](./2026-08-22-software-engineering-web-development-02-codex-cli-0-149-turns-parallel-agent-sessions-into-a-managed-workspace.md)

## Sources

- [Intermittent failures creating agent tasks](https://www.githubstatus.com/incidents/bhbcjn4n3jzp)
