---
type: AI News
title: "Google ADK Go 1.8 hardens web and REST agent deployments"
description: "The Go agent-development kit ships security and persistence changes for deployed agent applications."
date: 2026-10-06
published_at: "2026-10-05T06:51:00.000Z"
summary: "ADK Go 1.8 binds the web launcher to loopback by default and rejects cross-origin browser requests unless explicitly allowed. It also adds request-size limits, WebSocket protections, session-transcription persistence and fixes for Agent Engine deployment."
categories: ["Software engineering & web development"]
tags: ["google-adk","go","agents","security","web"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/google/adk-go/releases/tag/v1.8.0"
    title: "Google ADK Go v1.8.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-05T14:10:04.850Z" }
verified: { by: "human:cmwen", at: "2026-10-06T06:44:02.011Z" }
status: stable
stale_after: 2026-10-06
---

## Summary

ADK Go 1.8 binds the web launcher to loopback by default and rejects cross-origin browser requests unless explicitly allowed. It also adds request-size limits, WebSocket protections, session-transcription persistence and fixes for Agent Engine deployment.

## Why it matters

The defaults reduce exposure from accidentally public agent endpoints and make production session state more durable.

## Related coverage

- [Mastra adds default agent error recovery and durable execution fixes](./2026-10-06-software-engineering-web-development-05-mastra-adds-default-agent-error-recovery-and-durable-execution-fixes.md)
- [Next.js 16.4 canary advances bundle-analysis tooling](./2026-10-06-software-engineering-web-development-07-next-js-16-4-canary-advances-bundle-analysis-tooling.md)
- [Frappe Press patches authentication disclosure and agent-job handling](./2026-10-06-software-engineering-web-development-08-frappe-press-patches-authentication-disclosure-and-agent-job-handling.md)

## Sources

- [Google ADK Go v1.8.0](https://github.com/google/adk-go/releases/tag/v1.8.0)
