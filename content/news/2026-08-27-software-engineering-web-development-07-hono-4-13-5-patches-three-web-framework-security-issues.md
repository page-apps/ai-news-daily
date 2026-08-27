---
type: AI News
title: "Hono 4.13.5 patches three web-framework security issues"
description: "The edge-oriented JavaScript framework shipped a security release covering parser differentials, static-site-generation path containment and request-body exhaustion."
date: 2026-08-27
published_at: "2026-08-26T02:00:33.000Z"
summary: "Hono 4.13.5 fixes query parsing that could read parameters after a URL fragment, creating cache-key and proxy interpretation differentials. It also closes a toSSG path-normalisation gap that could write outside the output directory and bounds dot-notation expansion in parseBody() to prevent memory exhaustion."
categories: ["Software engineering & web development"]
tags: ["hono","web security","ssg","waf","request parsing","javascript"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/honojs/hono/releases/tag/v4.13.5"
    title: "Hono v4.13.5 security release"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-26T21:03:46.419Z" }
verified: { by: "human:cmwen", at: "2026-08-27T09:47:41.059Z" }
status: stable
stale_after: 2026-08-27
---

## Summary

Hono 4.13.5 fixes query parsing that could read parameters after a URL fragment, creating cache-key and proxy interpretation differentials. It also closes a toSSG path-normalisation gap that could write outside the output directory and bounds dot-notation expansion in parseBody() to prevent memory exhaustion.

## Why it matters

These issues affect web applications deployed behind proxies, WAFs or static-site pipelines, so maintainers should treat the patch as an upgrade rather than a routine bugfix.

## Related coverage

- [Node.js 26.8 adds crypto, diagnostics and SQLite APIs](./2026-08-27-software-engineering-web-development-05-node-js-26-8-adds-crypto-diagnostics-and-sqlite-apis.md)
- [pnpm 12 makes dependency resolution and runtime selection more deterministic](./2026-08-27-software-engineering-web-development-06-pnpm-12-makes-dependency-resolution-and-runtime-selection-more-determini.md)
- [Codex CLI 0.150 makes cross-task coordination and trust controls first-class](./2026-08-27-software-engineering-web-development-01-codex-cli-0-150-makes-cross-task-coordination-and-trust-controls-first-c.md)

## Sources

- [Hono v4.13.5 security release](https://github.com/honojs/hono/releases/tag/v4.13.5)
