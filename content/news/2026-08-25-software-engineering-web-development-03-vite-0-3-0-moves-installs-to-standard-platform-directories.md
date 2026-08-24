---
type: AI News
title: "Vite+ 0.3.0 moves installs to standard platform directories"
description: "VoidZero’s unified web toolchain released v0.3.0 with a new install layout, tsup migration, Bun 1.4 routing and a smaller CLI package."
date: 2026-08-25
published_at: "2026-08-24T04:01:00.000Z"
summary: "Fresh installs now use split XDG directories on Unix and standard local application-data folders on Windows, while existing single-root installations remain in place. The release adds tsup-to-vp pack migration, forwards supported commands to Bun 1.4, cuts the published package size by 51 percent and removes upgrade-check delays."
categories: ["Software engineering & web development"]
tags: ["vite","web-toolchain","javascript","bundler","ci"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/voidzero-dev/vite-plus/releases/tag/v0.3.0"
    title: "vite-plus v0.3.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-24T21:01:52.498Z" }
verified: { by: "human:cmwen", at: "2026-08-24T21:39:48.952Z" }
status: stable
stale_after: 2026-08-25
---

## Summary

Fresh installs now use split XDG directories on Unix and standard local application-data folders on Windows, while existing single-root installations remain in place. The release adds tsup-to-vp pack migration, forwards supported commands to Bun 1.4, cuts the published package size by 51 percent and removes upgrade-check delays.

## Why it matters

Vite+ is consolidating runtime, package-manager, build, test and lint operations, so its layout and migration changes affect local development, CI and Docker workflows.

## Related coverage

- [create-vite 9.2.0 adds nub package-manager support](./2026-08-25-software-engineering-web-development-10-create-vite-9-2-0-adds-nub-package-manager-support.md)
- [Hono 4.13.4 fixes request, routing and client edge cases](./2026-08-25-software-engineering-web-development-04-hono-4-13-4-fixes-request-routing-and-client-edge-cases.md)
- [Zide opens public beta of a native workspace for code, Git, issues and CI](./2026-08-25-software-engineering-web-development-06-zide-opens-public-beta-of-a-native-workspace-for-code-git-issues-and-ci.md)

## Sources

- [vite-plus v0.3.0](https://github.com/voidzero-dev/vite-plus/releases/tag/v0.3.0)
