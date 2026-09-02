---
type: AI News
title: "GitHub Copilot CLI adds model fallback and proxy-bound Linux sandboxes"
description: "A Copilot CLI pre-release adds ordered model fallback for custom agents and tighter network controls for Linux sandboxes."
date: 2026-09-03
published_at: "2026-09-02T06:35:00.000Z"
summary: "The v1.0.83-2 pre-release lets custom agents declare an ordered list of models and enforce a required model policy, and adds support for Claude Fable 5.1. It also restricts Linux sandbox network egress to a configured proxy, with additional host requirements for proxy mode."
categories: ["Software engineering & web development"]
tags: ["coding-agents","cli","sandboxing","model-routing","developer-workflow"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/github/copilot-cli/releases/tag/v1.0.83-2"
    title: "Release 1.0.83-2"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-02T15:43:48.711Z" }
verified: { by: "human:cmwen", at: "2026-09-02T23:08:27.999Z" }
status: stable
stale_after: 2026-09-03
---

## Summary

The v1.0.83-2 pre-release lets custom agents declare an ordered list of models and enforce a required model policy, and adds support for Claude Fable 5.1. It also restricts Linux sandbox network egress to a configured proxy, with additional host requirements for proxy mode.

## Why it matters

Model availability and network reach are both sources of nondeterminism for terminal agents. Declarative fallback plus constrained egress gives teams clearer failure behaviour and a tighter boundary around tools that can modify repositories or call external services.

## Related coverage

- [JFrog adds AgentSecOps controls across the agentic software supply chain](./2026-09-03-software-engineering-web-development-01-jfrog-adds-agentsecops-controls-across-the-agentic-software-supply-chain.md)
- [Cline Desktop 0.0.22 imports resumable sessions from other coding agents](./2026-09-03-software-engineering-web-development-07-cline-desktop-0-0-22-imports-resumable-sessions-from-other-coding-agents.md)
- [CrowdStrike introduces Falcon Guardian for runtime control of AI agents](./2026-09-03-software-engineering-web-development-02-crowdstrike-introduces-falcon-guardian-for-runtime-control-of-ai-agents.md)

## Sources

- [Release 1.0.83-2](https://github.com/github/copilot-cli/releases/tag/v1.0.83-2)
