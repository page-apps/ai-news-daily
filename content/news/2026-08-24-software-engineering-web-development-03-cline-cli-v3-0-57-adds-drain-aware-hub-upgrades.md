---
type: AI News
title: "Cline CLI v3.0.57 adds drain-aware Hub upgrades"
description: "Cline CLI v3.0.57 adds Hub drain controls and upgrade sequencing that preserve active agent sessions."
date: 2026-08-24
published_at: "2026-08-23T00:04:00.000Z"
summary: "The new commands drain a Hub, wait for active work to finish, restart the current build, and lift the drain if an upgrade is aborted. Sessions replay missed events after reconnecting, while custom OpenAI-compatible models receive corrected tool-calling behaviour."
categories: ["Software engineering & web development"]
tags: ["coding agents","cline","cli","agent operations","upgrades"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cline/cline/releases/tag/cli-v3.0.57"
    title: "Cline CLI v3.0.57"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-23T21:07:59.607Z" }
verified: { by: "human:cmwen", at: "2026-08-23T21:12:09.010Z" }
status: stable
stale_after: 2026-08-24
---

## Summary

The new commands drain a Hub, wait for active work to finish, restart the current build, and lift the drain if an upgrade is aborted. Sessions replay missed events after reconnecting, while custom OpenAI-compatible models receive corrected tool-calling behaviour.

## Why it matters

Coding-agent operators can now upgrade shared Hub infrastructure with explicit maintenance controls and less risk of dropping work.

## Related coverage

- [Cline Desktop v0.0.16 makes Hub restarts recoverable](./2026-08-24-software-engineering-web-development-01-cline-desktop-v0-0-16-makes-hub-restarts-recoverable.md)
- [Cline SDK v0.0.78 adds durable Hub event replay](./2026-08-24-software-engineering-web-development-02-cline-sdk-v0-0-78-adds-durable-hub-event-replay.md)
- [Cline v4.1.14 refreshes its supported model catalogue](./2026-08-24-software-engineering-web-development-04-cline-v4-1-14-refreshes-its-supported-model-catalogue.md)

## Sources

- [Cline CLI v3.0.57](https://github.com/cline/cline/releases/tag/cli-v3.0.57)
