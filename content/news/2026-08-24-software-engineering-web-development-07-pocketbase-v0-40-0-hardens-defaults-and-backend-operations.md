---
type: AI News
title: "PocketBase v0.40.0 hardens defaults and backend operations"
description: "PocketBase v0.40.0 adds a COOP security header, improves logging and backups, and updates its SQLite and Go foundations."
date: 2026-08-24
published_at: "2026-08-23T04:47:00.000Z"
summary: "The release enables a same-origin Cross-Origin-Opener-Policy header by default, adds log deletion, caps log payload sizes, and avoids transaction locking during backups. It also enables SQLite defensive mode, updates modernc SQLite, raises the minimum Go version to 1.27, and migrates to encoding/json/v2."
categories: ["Software engineering & web development"]
tags: ["pocketbase","backend","application security","sqlite","backups","self-hosting"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/pocketbase/pocketbase/releases/tag/v0.40.0"
    title: "PocketBase v0.40.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-23T21:07:59.609Z" }
verified: { by: "human:cmwen", at: "2026-08-23T21:12:09.010Z" }
status: stable
stale_after: 2026-08-24
---

## Summary

The release enables a same-origin Cross-Origin-Opener-Policy header by default, adds log deletion, caps log payload sizes, and avoids transaction locking during backups. It also enables SQLite defensive mode, updates modernc SQLite, raises the minimum Go version to 1.27, and migrates to encoding/json/v2.

## Why it matters

The combined security and operational changes affect developers using PocketBase as a self-hosted application backend, particularly teams relying on its built-in logs and backups.

## Related coverage

- [Next.js 16.4.0-canary.2 introduces backend-storage construction options](./2026-08-24-software-engineering-web-development-06-next-js-16-4-0-canary-2-introduces-backend-storage-construction-options.md)
- [Cline Desktop v0.0.16 makes Hub restarts recoverable](./2026-08-24-software-engineering-web-development-01-cline-desktop-v0-0-16-makes-hub-restarts-recoverable.md)
- [Cline SDK v0.0.78 adds durable Hub event replay](./2026-08-24-software-engineering-web-development-02-cline-sdk-v0-0-78-adds-durable-hub-event-replay.md)

## Sources

- [PocketBase v0.40.0](https://github.com/pocketbase/pocketbase/releases/tag/v0.40.0)
