---
type: AI News
title: "Vercel Eve changes approval, delivery and session contracts for agents"
description: "Eve 0.84.0 makes approval reuse, delivery receipts and session APIs more explicit for agent applications."
date: 2026-10-28
published_at: "2026-10-26T22:04:00.000Z"
summary: "The release unifies tool and connection approvals, remembers per-tool approval decisions within a session, and adds delivery receipts with independent streaming and result reads. It also introduces idempotency keys for HTTP session messages and removes an unauthenticated route that could settle approvals."
categories: ["Software engineering & web development"]
tags: ["vercel","eve","agents","approvals","sessions","reliability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/vercel/eve/releases/tag/eve%400.84.0"
    title: "Release eve@0.84.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-27T14:02:57.258Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-27T14:04:24.849Z" }
status: stable
stale_after: 2026-10-28
---

## Summary

The release unifies tool and connection approvals, remembers per-tool approval decisions within a session, and adds delivery receipts with independent streaming and result reads. It also introduces idempotency keys for HTTP session messages and removes an unauthenticated route that could settle approvals.

## Why it matters

These changes target reliability, consent tracking and safer retries in long-running agent workflows.

## Related coverage

- [Vercel AI SDK adds agent steering and richer telemetry](./2026-10-28-software-engineering-web-development-01-vercel-ai-sdk-adds-agent-steering-and-richer-telemetry.md)
- [OpenAI Java SDK adds delegation controls and prompt-cache lifetimes](./2026-10-28-software-engineering-web-development-02-openai-java-sdk-adds-delegation-controls-and-prompt-cache-lifetimes.md)
- [FireMon introduces MCP-connected agents for firewall policy preparation](./2026-10-28-software-engineering-web-development-08-firemon-introduces-mcp-connected-agents-for-firewall-policy-preparation.md)

## Sources

- [Release eve@0.84.0](https://github.com/vercel/eve/releases/tag/eve%400.84.0)
