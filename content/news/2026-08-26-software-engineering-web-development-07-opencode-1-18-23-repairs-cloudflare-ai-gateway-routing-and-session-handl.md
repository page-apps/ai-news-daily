---
type: AI News
title: "OpenCode 1.18.23 repairs Cloudflare AI Gateway routing and session handling"
description: "OpenCode released fixes for multi-provider routing through Cloudflare AI Gateway, Anthropic model identifiers, session headers and immutable OIDC authentication."
date: 2026-08-26
published_at: "2026-08-25T06:30:49.000Z"
summary: "Version 1.18.23 fixes third-party provider routing through Cloudflare AI Gateway and converts dotted Anthropic model IDs to the dashed form expected by Anthropic. It also fixes parent-session headers for session-aware providers and GitHub authentication using immutable OIDC subject tokens."
categories: ["Software engineering & web development"]
tags: ["coding agents","cloudflare","api interoperability","session management","oidc"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anomalyco/opencode/releases/tag/v1.18.23"
    title: "OpenCode v1.18.23"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-25T21:00:34.486Z" }
verified: { by: "human:cmwen", at: "2026-08-26T00:20:02.220Z" }
status: stable
stale_after: 2026-08-26
---

## Summary

Version 1.18.23 fixes third-party provider routing through Cloudflare AI Gateway and converts dotted Anthropic model IDs to the dashed form expected by Anthropic. It also fixes parent-session headers for session-aware providers and GitHub authentication using immutable OIDC subject tokens.

## Why it matters

The release improves interoperability for developers using OpenCode as a multi-provider agent client. The fixes address concrete provider, authentication and session failures that can disrupt automated engineering workflows.

## Related coverage

- [Cline Desktop 0.0.17 consolidates agent controls and caps event-log growth](./2026-08-26-software-engineering-web-development-08-cline-desktop-0-0-17-consolidates-agent-controls-and-caps-event-log-grow.md)
- [Google Antigravity CLI 1.1.20 improves workspace approvals and repository handling](./2026-08-26-software-engineering-web-development-09-google-antigravity-cli-1-1-20-improves-workspace-approvals-and-repositor.md)
- [A malicious webpage can poison the local model behind NVIDIA NemoClaw](./2026-08-26-software-engineering-web-development-01-a-malicious-webpage-can-poison-the-local-model-behind-nvidia-nemoclaw.md)

## Sources

- [OpenCode v1.18.23](https://github.com/anomalyco/opencode/releases/tag/v1.18.23)
