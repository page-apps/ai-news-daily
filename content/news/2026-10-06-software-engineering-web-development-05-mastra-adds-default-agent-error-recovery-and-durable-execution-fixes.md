---
type: AI News
title: "Mastra adds default agent error recovery and durable execution fixes"
description: "Mastra 1.73.0 makes provider-error repair and bounded retries default for agents."
date: 2026-10-06
published_at: "2026-10-05T09:30:00.000Z"
summary: "The release enables three error processors by default, repairing incompatible history or prefills before retrying transient failures. It also adds a tool-call-resumed stream event, improves durable workflow fencing, and prevents duplicated evented steps during redelivery."
categories: ["Software engineering & web development"]
tags: ["mastra","agents","reliability","durable-workflows","streaming"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/mastra-ai/mastra/releases/tag/%40mastra%2Fcore%401.73.0"
    title: "Mastra core 1.73.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-05T14:10:04.849Z" }
verified: { by: "human:cmwen", at: "2026-10-06T06:44:02.010Z" }
status: stable
stale_after: 2026-10-06
---

## Summary

The release enables three error processors by default, repairing incompatible history or prefills before retrying transient failures. It also adds a tool-call-resumed stream event, improves durable workflow fencing, and prevents duplicated evented steps during redelivery.

## Why it matters

These changes target the reliability problems that make long-running, approval-gated and provider-dependent agents difficult to operate in production.

## Related coverage

- [n8n 2.42.3 expands API-key scope administration](./2026-10-06-software-engineering-web-development-03-n8n-2-42-3-expands-api-key-scope-administration.md)
- [Google ADK Go 1.8 hardens web and REST agent deployments](./2026-10-06-software-engineering-web-development-06-google-adk-go-1-8-hardens-web-and-rest-agent-deployments.md)
- [Frappe Press patches authentication disclosure and agent-job handling](./2026-10-06-software-engineering-web-development-08-frappe-press-patches-authentication-disclosure-and-agent-job-handling.md)

## Sources

- [Mastra core 1.73.0](https://github.com/mastra-ai/mastra/releases/tag/%40mastra%2Fcore%401.73.0)
