---
type: AI News
title: "DOMPurify 3.4.15 strengthens XML clobbering defences"
description: "DOMPurify 3.4.15 adds targeted hardening for XML-related clobbering and other sanitisation edge cases."
date: 2026-09-07
published_at: "2026-09-06T11:36:00.000Z"
summary: "The release adds better clobbering hardening when XML content is involved and includes several smaller hardening and edge-case improvements. It also updates dependencies where possible."
categories: ["Software engineering & web development"]
tags: ["dompurify","web-security","xss","xml","sanitisation"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cure53/DOMPurify/releases/tag/3.4.15"
    title: "DOMPurify 3.4.15 release"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-06T16:20:57.540Z" }
verified: { by: "human:cmwen", at: "2026-09-06T20:26:25.834Z" }
status: stable
stale_after: 2026-09-07
---

## Summary

The release adds better clobbering hardening when XML content is involved and includes several smaller hardening and edge-case improvements. It also updates dependencies where possible.

## Why it matters

DOM sanitisation remains a foundational defence for web applications that render untrusted content, and parser-specific edge cases can undermine otherwise sound XSS controls.

## Related coverage

- [Qwen Code preview adds inspectable multi-agent workflows](./2026-09-07-software-engineering-web-development-01-qwen-code-preview-adds-inspectable-multi-agent-workflows.md)
- [Vercel AI SDK adds GPT-6 reasoning configuration](./2026-09-07-software-engineering-web-development-02-vercel-ai-sdk-adds-gpt-6-reasoning-configuration.md)
- [OpenClaw 2026.9.2 makes agent operations more recoverable](./2026-09-07-software-engineering-web-development-03-openclaw-2026-9-2-makes-agent-operations-more-recoverable.md)

## Sources

- [DOMPurify 3.4.15 release](https://github.com/cure53/DOMPurify/releases/tag/3.4.15)
