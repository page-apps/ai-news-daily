---
type: AI News
title: "Stately Agent alpha adds lineage-safe session forking"
description: "Stately Agent’s latest alpha changes how forked agent event logs identify and resume execution."
date: 2026-10-27
published_at: "2026-10-25T19:34:33.000Z"
summary: "Stately Agent 2.0.0-alpha.32 gives a fork its own execution identity while recording its parent execution and cutoff position. Its conformance tests now reject mismatched parent logs and ensure resumed forks do not incorrectly reuse cached results from the parent."
categories: ["Software engineering & web development"]
tags: ["agent-frameworks","event-logs","reproducibility","state-management","typescript"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/statelyai/agent/releases/tag/%40statelyai%2Fagent%402.0.0-alpha.32"
    title: "Stately Agent 2.0.0-alpha.32"
  - id: source-2
    resource: "https://api.github.com/repos/statelyai/agent/releases/tags/%40statelyai%2Fagent%402.0.0-alpha.32"
    title: "Stately Agent release metadata"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-26T14:02:47.360Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-26T14:03:52.378Z" }
status: stable
stale_after: 2026-10-27
---

## Summary

Stately Agent 2.0.0-alpha.32 gives a fork its own execution identity while recording its parent execution and cutoff position. Its conformance tests now reject mismatched parent logs and ensure resumed forks do not incorrectly reuse cached results from the parent.

## Why it matters

Explicit fork lineage is important for reproducible agent runs, branching workflows and trustworthy replay when multiple software-engineering agents share state.

## Related coverage

- [Cline CLI 3.0.74 strengthens coding-agent reliability and safety](./2026-10-27-software-engineering-web-development-01-cline-cli-3-0-74-strengthens-coding-agent-reliability-and-safety.md)
- [Agent Swarm 2.6.0 adds workflow introspection and credential controls](./2026-10-27-software-engineering-web-development-02-agent-swarm-2-6-0-adds-workflow-introspection-and-credential-controls.md)
- [NocoBase beta adds bounded live previews for coding-agent runs](./2026-10-27-software-engineering-web-development-03-nocobase-beta-adds-bounded-live-previews-for-coding-agent-runs.md)

## Sources

- [Stately Agent 2.0.0-alpha.32](https://github.com/statelyai/agent/releases/tag/%40statelyai%2Fagent%402.0.0-alpha.32)
- [Stately Agent release metadata](https://api.github.com/repos/statelyai/agent/releases/tags/%40statelyai%2Fagent%402.0.0-alpha.32)
