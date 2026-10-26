---
type: AI News
title: "Oh My OpenAgent 5.1.48 improves nested delegation and session recovery"
description: "The open-source coding-agent runtime released changes to nested task trees, memory recovery and long-session performance."
date: 2026-10-27
published_at: "2026-10-25T15:23:25.000Z"
summary: "Version 5.1.48 preserves session ancestry when delegated agents lead their own teams and exposes nested descendants through task and cancellation views. It also makes interrupted-session recovery retryable, preserves prompt caches during context-budget reminders, and reports substantially faster startup for large skill collections."
categories: ["Software engineering & web development"]
tags: ["coding-agents","delegation","session-recovery","memory","performance"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/code-yeongyu/oh-my-openagent/releases/tag/v5.1.48"
    title: "Oh My OpenAgent v5.1.48"
  - id: source-2
    resource: "https://api.github.com/repos/code-yeongyu/oh-my-openagent/releases/tags/v5.1.48"
    title: "Oh My OpenAgent release metadata"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-26T14:02:47.359Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-26T14:03:52.378Z" }
status: stable
stale_after: 2026-10-27
---

## Summary

Version 5.1.48 preserves session ancestry when delegated agents lead their own teams and exposes nested descendants through task and cancellation views. It also makes interrupted-session recovery retryable, preserves prompt caches during context-budget reminders, and reports substantially faster startup for large skill collections.

## Why it matters

Reliable delegation requires agents to retain an inspectable session tree and recover state without silently restarting work; these are foundational requirements for software-factory workflows.

## Related coverage

- [Cline CLI 3.0.74 strengthens coding-agent reliability and safety](./2026-10-27-software-engineering-web-development-01-cline-cli-3-0-74-strengthens-coding-agent-reliability-and-safety.md)
- [NocoBase beta adds bounded live previews for coding-agent runs](./2026-10-27-software-engineering-web-development-03-nocobase-beta-adds-bounded-live-previews-for-coding-agent-runs.md)
- [Agent Swarm 2.6.0 adds workflow introspection and credential controls](./2026-10-27-software-engineering-web-development-02-agent-swarm-2-6-0-adds-workflow-introspection-and-credential-controls.md)

## Sources

- [Oh My OpenAgent v5.1.48](https://github.com/code-yeongyu/oh-my-openagent/releases/tag/v5.1.48)
- [Oh My OpenAgent release metadata](https://api.github.com/repos/code-yeongyu/oh-my-openagent/releases/tags/v5.1.48)
