---
type: AI News
title: "SQLite WAL-reset bug explains Tailscale outages"
description: "Tailscale and SQLite maintainers identified and fixed a rare database-corruption race in write-ahead logging."
date: 2026-08-17
summary: "The bug can occur when multiple connections write to and checkpoint the same SQLite database in WAL mode at nearly the same time. SQLite says the issue was present from version 3.7.0 through 3.51.2 and is fixed in newer releases."
categories: ["Software engineering & web development"]
tags: ["sqlite","database","reliability","tailscale","backups","operations"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://sqlite.org/wal.html"
    title: "Write-Ahead Logging"
  - id: source-2
    resource: "https://www.theregister.com/databases/2026/08/12/deeply-buried-16-year-old-sqlite-bug-caused-last-years-tailscale-outages/5287004"
    title: "Deeply buried 16-year-old SQLite bug caused last year's Tailscale outages"
    author: "Brandon Vigliarolo"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-16T20:45:52.369Z" }
verified: { by: "human:cmwen", at: "2026-08-16T21:12:54.037Z" }
status: stable
stale_after: 2026-08-17
---

## Summary

The bug can occur when multiple connections write to and checkpoint the same SQLite database in WAL mode at nearly the same time. SQLite says the issue was present from version 3.7.0 through 3.51.2 and is fixed in newer releases.

## Why it matters

The incident is a durable reminder that non-standard database operation, aggressive checkpointing, and backup design can expose latent correctness failures in otherwise mature infrastructure.

## Related coverage

- [Autonomous AI attacks raise critical-infrastructure concerns](./2026-08-17-software-engineering-web-development-07-autonomous-ai-attacks-raise-critical-infrastructure-concerns.md)
- [Cursor officially joins SpaceX](./2026-08-17-software-engineering-web-development-01-cursor-officially-joins-spacex.md)
- [Cursor announces AIUC-1 agent-security certification](./2026-08-17-software-engineering-web-development-02-cursor-announces-aiuc-1-agent-security-certification.md)

## Sources

- [Write-Ahead Logging](https://sqlite.org/wal.html)
- [Deeply buried 16-year-old SQLite bug caused last year's Tailscale outages](https://www.theregister.com/databases/2026/08/12/deeply-buried-16-year-old-sqlite-bug-caused-last-years-tailscale-outages/5287004)
