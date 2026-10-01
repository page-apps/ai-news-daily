---
type: AI News
title: "pnpm patches a dependency security advisory and store-corruption failures"
description: "pnpm 11.28.3 updates undici to clear a security advisory and fixes malformed or stale shared-store reads during concurrent package operations."
date: 2026-10-02
published_at: "2026-09-30T15:28:07.000Z"
summary: "The release ships undici 7.29.1 and addresses failures that occurred when multiple pnpm processes wrote to the same store. It also fixes handling for package, catalog, project and command names that collide with JavaScript built-in object properties."
categories: ["Software engineering & web development"]
tags: ["pnpm","javascript","supply-chain","security","ci-cd","reproducibility"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/pnpm/pnpm/releases/tag/v11.28.3"
    title: "pnpm 11.28.3"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-01T15:01:15.402Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-01T15:11:51.599Z" }
status: stable
stale_after: 2026-10-02
---

## Summary

The release ships undici 7.29.1 and addresses failures that occurred when multiple pnpm processes wrote to the same store. It also fixes handling for package, catalog, project and command names that collide with JavaScript built-in object properties.

## Why it matters

Package managers sit on the critical path of every JavaScript build, so security and reproducibility fixes have broad CI and developer-workstation consequences.

## Related coverage

- [GitHub Agentic Workflows expands audit ledgers and threat visibility](./2026-10-02-software-engineering-web-development-04-github-agentic-workflows-expands-audit-ledgers-and-threat-visibility.md)
- [Next.js ships a coordinated security release for supported branches](./2026-10-02-software-engineering-web-development-05-next-js-ships-a-coordinated-security-release-for-supported-branches.md)
- [LiteLLM makes signed gateway images explicit in its 1.103.2 release](./2026-10-02-software-engineering-web-development-10-litellm-makes-signed-gateway-images-explicit-in-its-1-103-2-release.md)

## Sources

- [pnpm 11.28.3](https://github.com/pnpm/pnpm/releases/tag/v11.28.3)
