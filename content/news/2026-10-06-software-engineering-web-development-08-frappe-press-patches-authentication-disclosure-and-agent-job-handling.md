---
type: AI News
title: "Frappe Press patches authentication disclosure and agent-job handling"
description: "Frappe Press 0.148.2 updates account security and records agent-job cancellation identity."
date: 2026-10-06
published_at: "2026-10-05T11:59:00.000Z"
summary: "The release prevents login endpoints from revealing account status and moves login-mail delivery into a background job. It also records who cancelled an agent job."
categories: ["Software engineering & web development"]
tags: ["frappe","deployment","authentication","agents","audit"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/frappe/press/releases/tag/v0.148.2"
    title: "Frappe Press v0.148.2"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-05T14:10:04.852Z" }
verified: { by: "human:cmwen", at: "2026-10-06T06:44:02.011Z" }
status: stable
stale_after: 2026-10-06
---

## Summary

The release prevents login endpoints from revealing account status and moves login-mail delivery into a background job. It also records who cancelled an agent job.

## Why it matters

The update combines a privacy-hardening fix with clearer accountability for automated jobs in a deployment platform.

## Related coverage

- [Mastra adds default agent error recovery and durable execution fixes](./2026-10-06-software-engineering-web-development-05-mastra-adds-default-agent-error-recovery-and-durable-execution-fixes.md)
- [Google ADK Go 1.8 hardens web and REST agent deployments](./2026-10-06-software-engineering-web-development-06-google-adk-go-1-8-hardens-web-and-rest-agent-deployments.md)
- [Qwen Code Desktop adds Linux ARM support and managed-agent controls](./2026-10-06-software-engineering-web-development-01-qwen-code-desktop-adds-linux-arm-support-and-managed-agent-controls.md)

## Sources

- [Frappe Press v0.148.2](https://github.com/frappe/press/releases/tag/v0.148.2)
