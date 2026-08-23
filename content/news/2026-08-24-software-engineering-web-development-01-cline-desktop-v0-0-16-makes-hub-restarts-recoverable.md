---
type: AI News
title: "Cline Desktop v0.0.16 makes Hub restarts recoverable"
description: "Cline Desktop v0.0.16 adds restart-safe handoffs between Hub instances and fixes custom OpenAI-compatible tool calling."
date: 2026-08-24
published_at: "2026-08-22T23:45:00.000Z"
summary: "The release drains a Hub before restart, refuses new work, and replays missed messages so agent handoffs survive upgrades. It also refreshes model catalogues and pricing and honours server-side feature flags."
categories: ["Software engineering & web development"]
tags: ["coding agents","cline","agent operations","developer tools"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cline/cline/releases/tag/desktop-v0.0.16"
    title: "Cline Desktop v0.0.16"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-23T21:07:59.606Z" }
verified: { by: "human:cmwen", at: "2026-08-23T21:35:25.196Z" }
status: stable
stale_after: 2026-08-24
---

## Summary

The release drains a Hub before restart, refuses new work, and replays missed messages so agent handoffs survive upgrades. It also refreshes model catalogues and pricing and honours server-side feature flags.

## Why it matters

Restart-safe handoffs reduce operational risk when teams run persistent coding agents across local and hosted environments.

## Related coverage

- [Cline CLI v3.0.57 adds drain-aware Hub upgrades](./2026-08-24-software-engineering-web-development-03-cline-cli-v3-0-57-adds-drain-aware-hub-upgrades.md)
- [Cline SDK v0.0.78 adds durable Hub event replay](./2026-08-24-software-engineering-web-development-02-cline-sdk-v0-0-78-adds-durable-hub-event-replay.md)
- [Cline v4.1.14 refreshes its supported model catalogue](./2026-08-24-software-engineering-web-development-04-cline-v4-1-14-refreshes-its-supported-model-catalogue.md)

## Sources

- [Cline Desktop v0.0.16](https://github.com/cline/cline/releases/tag/desktop-v0.0.16)
