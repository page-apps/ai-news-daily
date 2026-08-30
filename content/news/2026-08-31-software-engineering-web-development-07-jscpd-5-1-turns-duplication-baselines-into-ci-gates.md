---
type: AI News
title: "jscpd 5.1 turns duplication baselines into CI gates"
description: "The code-duplication detector added baseline workflows, richer quality reporters and signed release provenance."
date: 2026-08-31
published_at: "2026-08-30T11:03:00.000Z"
summary: "jscpd 5.1 introduces content-hash baselines, baseline updates and a fail-on-new-clones mode so CI can reject newly introduced duplication without blocking existing debt. It also adds ephemeral baselines from Git references, OpenMetrics and CodeClimate or GitLab Code Quality reporters, plus Windows ARM support and signed releases with SLSA provenance."
categories: ["Software engineering & web development"]
tags: ["code-quality","duplication","ci","slsa","provenance"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/kucherenko/jscpd/releases/tag/v5.1.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-30T18:08:00.598Z" }
verified: { by: "human:cmwen", at: "2026-08-30T20:59:00.842Z" }
status: stable
stale_after: 2026-08-31
---

## Summary

jscpd 5.1 introduces content-hash baselines, baseline updates and a fail-on-new-clones mode so CI can reject newly introduced duplication without blocking existing debt. It also adds ephemeral baselines from Git references, OpenMetrics and CodeClimate or GitLab Code Quality reporters, plus Windows ARM support and signed releases with SLSA provenance.

## Why it matters

Incremental quality gates make duplication enforcement practical in mature repositories while the provenance work improves trust in the analysis toolchain.

## Related coverage

- [GitHub Copilot CLI 1.0.82 tightens worktree and approval flows](./2026-08-31-software-engineering-web-development-01-github-copilot-cli-1-0-82-tightens-worktree-and-approval-flows.md)
- [T3 Code nightly unifies agent activity and composer state](./2026-08-31-software-engineering-web-development-02-t3-code-nightly-unifies-agent-activity-and-composer-state.md)
- [Next.js 16.4 canary improves codemods and SST key ordering](./2026-08-31-software-engineering-web-development-03-next-js-16-4-canary-improves-codemods-and-sst-key-ordering.md)

## Sources

- [https://github.com/kucherenko/jscpd/releases/tag/v5.1.0](https://github.com/kucherenko/jscpd/releases/tag/v5.1.0)
