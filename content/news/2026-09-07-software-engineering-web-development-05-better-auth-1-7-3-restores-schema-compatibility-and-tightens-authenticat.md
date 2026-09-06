---
type: AI News
title: "Better Auth 1.7.3 restores schema compatibility and tightens authentication defaults"
description: "Better Auth 1.7.3 adds schema validation, Cloudflare login support and several OAuth and session fixes."
date: 2026-09-07
published_at: "2026-09-06T03:02:00.000Z"
summary: "The release restores compatibility with 1.6 account schemas and enables initialisation-time schema validation by default, rejecting authentication requests when detected mismatches remain. It also adds Cloudflare as a social provider, Have I Been Pwned password checks and fixes for OAuth callbacks, session handling and TOTP re-enrolment."
categories: ["Software engineering & web development"]
tags: ["better-auth","authentication","oauth","cloudflare","security","schema-validation"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/better-auth/better-auth/releases/tag/v1.7.3"
    title: "Better Auth v1.7.3 release"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-06T16:20:57.539Z" }
verified: { by: "human:cmwen", at: "2026-09-06T20:26:25.834Z" }
status: stable
stale_after: 2026-09-07
---

## Summary

The release restores compatibility with 1.6 account schemas and enables initialisation-time schema validation by default, rejecting authentication requests when detected mismatches remain. It also adds Cloudflare as a social provider, Have I Been Pwned password checks and fixes for OAuth callbacks, session handling and TOTP re-enrolment.

## Why it matters

Schema drift and authentication edge cases can become production outages or security defects; moving validation earlier makes deployment failures more visible before they affect users.

## Related coverage

- [LiteLLM 1.100.0 expands gateway integrations and security controls](./2026-09-07-software-engineering-web-development-06-litellm-1-100-0-expands-gateway-integrations-and-security-controls.md)
- [Qwen Code preview adds inspectable multi-agent workflows](./2026-09-07-software-engineering-web-development-01-qwen-code-preview-adds-inspectable-multi-agent-workflows.md)
- [Vercel AI SDK adds GPT-6 reasoning configuration](./2026-09-07-software-engineering-web-development-02-vercel-ai-sdk-adds-gpt-6-reasoning-configuration.md)

## Sources

- [Better Auth v1.7.3 release](https://github.com/better-auth/better-auth/releases/tag/v1.7.3)
