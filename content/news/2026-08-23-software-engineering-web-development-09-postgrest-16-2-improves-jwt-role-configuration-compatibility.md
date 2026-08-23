---
type: AI News
title: "PostgREST 16.2 improves JWT-role configuration compatibility"
description: "The API layer preserves compatibility for an older JWT role-claim configuration while warning users about deprecated syntax."
date: 2026-08-23
published_at: "2026-08-21T21:18:00.000Z"
summary: "PostgREST 16.2 makes `jwt-role-claim-key` configuration backwards-compatible while deprecating the old pre-v16 JSPath syntax. Deployments using the old form receive a log warning and can follow the documented migration path."
categories: ["Software engineering & web development"]
tags: ["postgrest","postgresql","jwt","rest api","compatibility"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/PostgREST/postgrest/releases/tag/v16.2"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-22T21:44:45.478Z" }
verified: { by: "human:cmwen", at: "2026-08-23T04:30:04.836Z" }
status: stable
stale_after: 2026-08-23
---

## Summary

PostgREST 16.2 makes `jwt-role-claim-key` configuration backwards-compatible while deprecating the old pre-v16 JSPath syntax. Deployments using the old form receive a log warning and can follow the documented migration path.

## Why it matters

The change reduces upgrade friction for database-backed REST APIs while giving operators a clear path away from legacy configuration.

## Related coverage

- [Cline 4.1.12 extends enterprise MCP controls across its agent stack](./2026-08-23-software-engineering-web-development-01-cline-4-1-12-extends-enterprise-mcp-controls-across-its-agent-stack.md)
- [Cloudflare workerd adds dynamic WebAssembly modules and TypeScript stream RPC support](./2026-08-23-software-engineering-web-development-02-cloudflare-workerd-adds-dynamic-webassembly-modules-and-typescript-strea.md)
- [Gemini CLI nightly hardens macOS agent sandbox boundaries](./2026-08-23-software-engineering-web-development-03-gemini-cli-nightly-hardens-macos-agent-sandbox-boundaries.md)

## Sources

- [https://github.com/PostgREST/postgrest/releases/tag/v16.2](https://github.com/PostgREST/postgrest/releases/tag/v16.2)
