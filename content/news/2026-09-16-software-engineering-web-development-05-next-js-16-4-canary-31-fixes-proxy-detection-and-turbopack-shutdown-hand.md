---
type: AI News
title: "Next.js 16.4 canary.31 fixes proxy detection and Turbopack shutdown handling"
description: "The Next.js canary release fixes proxy.ts detection with compound page extensions and improves development-server shutdown behaviour."
date: 2026-09-16
published_at: "2026-09-14T23:44:56.000Z"
summary: "Version 16.4.0-canary.31 fixes detection of proxy.ts when compound pageExtensions are used and makes next dev wait for Turbopack shutdown. It also advances tree shaking through module wrappers and export tracing through client-component proxies."
categories: ["Software engineering & web development"]
tags: ["nextjs","turbopack","javascript","web-framework","build-tools"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/vercel/next.js/releases/tag/v16.4.0-canary.31"
    title: "Next.js v16.4.0-canary.31"
  - id: source-2
    resource: "https://github.com/vercel/next.js/releases.atom"
    title: "Next.js release feed"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-15T15:20:38.311Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-15T15:23:54.429Z" }
status: stable
stale_after: 2026-09-16
---

## Summary

Version 16.4.0-canary.31 fixes detection of proxy.ts when compound pageExtensions are used and makes next dev wait for Turbopack shutdown. It also advances tree shaking through module wrappers and export tracing through client-component proxies.

## Why it matters

These changes target correctness and developer-loop reliability in the Next.js and Turbopack toolchain, although the canary status warrants testing before production adoption.

## Related coverage

- [pnpm 12.4.2 patches executable-shim and GitHub Actions security issues](./2026-09-16-software-engineering-web-development-08-pnpm-12-4-2-patches-executable-shim-and-github-actions-security-issues.md)
- [GitHub Copilot Auto adds explicit cost-and-quality tiers](./2026-09-16-software-engineering-web-development-01-github-copilot-auto-adds-explicit-cost-and-quality-tiers.md)
- [Qwen Code 0.23.4 expands resumable and cross-session agent workflows](./2026-09-16-software-engineering-web-development-02-qwen-code-0-23-4-expands-resumable-and-cross-session-agent-workflows.md)

## Sources

- [Next.js v16.4.0-canary.31](https://github.com/vercel/next.js/releases/tag/v16.4.0-canary.31)
- [Next.js release feed](https://github.com/vercel/next.js/releases.atom)
