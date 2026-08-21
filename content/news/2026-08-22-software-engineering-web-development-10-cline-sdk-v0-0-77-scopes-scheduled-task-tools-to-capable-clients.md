---
type: AI News
title: "Cline SDK v0.0.77 scopes scheduled-task tools to capable clients"
description: "Cline's SDK now resolves task-tool availability from the requesting host rather than registering it everywhere."
date: 2026-08-22
published_at: "2026-08-21T04:56:35.000Z"
summary: "Cline SDK 0.0.77 scopes durable todo and one-time or recurring scheduling tools to clients that can service them, with hosts declaring their client type. The release centralises tool-catalog resolution and prevents CLI and editor clients from exposing actions they cannot execute."
categories: ["Software engineering & web development"]
tags: ["cline","sdk","agent tools","scheduling","vscode","cli"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.77"
    title: "Cline SDK v0.0.77"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-21T21:23:56.813Z" }
verified: { by: "human:cmwen", at: "2026-08-21T21:49:49.256Z" }
status: stable
stale_after: 2026-08-22
---

## Summary

Cline SDK 0.0.77 scopes durable todo and one-time or recurring scheduling tools to clients that can service them, with hosts declaring their client type. The release centralises tool-catalog resolution and prevents CLI and editor clients from exposing actions they cannot execute.

## Why it matters

Capability-aware tool registration reduces mismatches where an agent is offered durable workflow actions that its host cannot actually perform.

## Related coverage

- [Cline CLI v3.0.56 carries skills, images and hook state into agent sessions](./2026-08-22-software-engineering-web-development-07-cline-cli-v3-0-56-carries-skills-images-and-hook-state-into-agent-sessio.md)
- [Claude Code v2.1.238 hardens plugin credentials and self-hosted agent operations](./2026-08-22-software-engineering-web-development-01-claude-code-v2-1-238-hardens-plugin-credentials-and-self-hosted-agent-op.md)
- [Codex CLI 0.149 turns parallel agent sessions into a managed workspace](./2026-08-22-software-engineering-web-development-02-codex-cli-0-149-turns-parallel-agent-sessions-into-a-managed-workspace.md)

## Sources

- [Cline SDK v0.0.77](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.77)
