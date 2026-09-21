---
type: AI News
title: "Cloudflare workerd 1.20260920.1 fixes Node interop and queued-stream cleanup"
description: "The Workers runtime corrected transform-pair error propagation in its Node.js interop hook and stopped queued streams from enqueueing after all consumers were collected."
date: 2026-09-21
published_at: "2026-09-20T01:12:56.000Z"
summary: "workerd 1.20260920.1 changes how Node.js interop reports errors from transform pairs. It also drops queued stream data once every consumer has been collected."
categories: ["Software engineering & web development"]
tags: ["cloudflare","workers","workerd","nodejs","streams","web-runtime"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cloudflare/workerd/releases/tag/v1.20260920.1"
    title: "workerd v1.20260920.1"
  - id: source-2
    resource: "https://www.onlylabs.fyi/signals/294bff84-7bf3-4817-944c-bf89746c88fa"
    title: "Release provenance for workerd v1.20260920.1"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-20T22:26:15.405Z" }
verified: { by: "human:cmwen", at: "2026-09-21T07:14:23.579Z" }
status: stable
stale_after: 2026-09-21
---

## Summary

workerd 1.20260920.1 changes how Node.js interop reports errors from transform pairs. It also drops queued stream data once every consumer has been collected.

## Why it matters

Workers developers get more predictable failure behavior and less unnecessary stream work in applications that combine Node compatibility layers with web-stream consumers.

## Related coverage

- [OpenAI Node SDK 7.20.0 adds vault credentials and safety lifecycle APIs](./2026-09-21-software-engineering-web-development-01-openai-node-sdk-7-20-0-adds-vault-credentials-and-safety-lifecycle-apis.md)
- [OpenAI Go SDK 3.64.0 adds agent safety and session-environment controls](./2026-09-21-software-engineering-web-development-02-openai-go-sdk-3-64-0-adds-agent-safety-and-session-environment-controls.md)
- [Qwen Code 0.24.2 adds a Linux sandbox foundation and durable workflow controls](./2026-09-21-software-engineering-web-development-03-qwen-code-0-24-2-adds-a-linux-sandbox-foundation-and-durable-workflow-co.md)

## Sources

- [workerd v1.20260920.1](https://github.com/cloudflare/workerd/releases/tag/v1.20260920.1)
- [Release provenance for workerd v1.20260920.1](https://www.onlylabs.fyi/signals/294bff84-7bf3-4817-944c-bf89746c88fa)
