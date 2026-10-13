---
type: AI News
title: "Mastra adds durable run ownership and storage-level fencing"
description: "Mastra core 1.76.0 introduced stronger concurrency and recovery guarantees for agent and workflow execution."
date: 2026-10-14
published_at: "2026-10-13T09:36:23.000Z"
summary: "Runs can now be claimed by the execution driving them, while recovery skips live claims or explicitly takes them over. Storage adapters can enforce run fences to reject writes from executions that have lost ownership, and PostgreSQL working-memory merges are performed atomically."
categories: ["Software engineering & web development"]
tags: ["mastra","agents","durable-execution","recovery","postgresql","concurrency"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/mastra-ai/mastra/releases/tag/%40mastra/core%401.76.0"
    title: "Mastra core 1.76.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-13T14:02:43.625Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-13T14:05:45.573Z" }
status: stable
stale_after: 2026-10-14
---

## Summary

Runs can now be claimed by the execution driving them, while recovery skips live claims or explicitly takes them over. Storage adapters can enforce run fences to reject writes from executions that have lost ownership, and PostgreSQL working-memory merges are performed atomically.

## Why it matters

These controls address a central production failure mode for multi-instance agents: duplicate recovery workers corrupting state after crashes or network partitions.

## Related coverage

- [LangChain model profiles expose mid-conversation support](./2026-10-14-software-engineering-web-development-07-langchain-model-profiles-expose-mid-conversation-support.md)
- [GitHub Agentic Workflows defaults read-only runs to no network access](./2026-10-14-software-engineering-web-development-01-github-agentic-workflows-defaults-read-only-runs-to-no-network-access.md)
- [GitHub Copilot CLI adds agent-scoped hooks and safer autopilot handling](./2026-10-14-software-engineering-web-development-02-github-copilot-cli-adds-agent-scoped-hooks-and-safer-autopilot-handling.md)

## Sources

- [Mastra core 1.76.0](https://github.com/mastra-ai/mastra/releases/tag/%40mastra/core%401.76.0)
