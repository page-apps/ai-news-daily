---
type: AI News
title: "OpenCode adds native Cloudflare AI Gateway passthroughs"
description: "OpenCode 1.18.19 adds direct OpenAI and Anthropic passthroughs for Cloudflare AI Gateway models and improves provider, pricing, residency and web-search handling."
date: 2026-08-21
published_at: "2026-08-20T06:22:06.000Z"
summary: "The release adds native OpenAI and Anthropic passthroughs for Cloudflare AI Gateway models and aligns Codex rate limits more closely with ChatGPT subscription limits. It also fixes malformed pricing handling, forwards ChatGPT workspace compute residency to Codex requests, enables web search for OpenCode Go and preserves v1 database compatibility."
categories: ["Software engineering & web development"]
tags: ["opencode","coding agents","cloudflare ai gateway","codex","web search","model routing"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anomalyco/opencode/releases/tag/v1.18.19"
    title: "OpenCode v1.18.19 release"
  - id: source-2
    resource: "https://api.github.com/repos/anomalyco/opencode/releases/tags/v1.18.19"
    title: "GitHub REST release metadata"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-20T20:57:22.750Z" }
verified: { by: "human:cmwen", at: "2026-08-20T22:29:10.402Z" }
status: stable
stale_after: 2026-08-21
---

## Summary

The release adds native OpenAI and Anthropic passthroughs for Cloudflare AI Gateway models and aligns Codex rate limits more closely with ChatGPT subscription limits. It also fixes malformed pricing handling, forwards ChatGPT workspace compute residency to Codex requests, enables web search for OpenCode Go and preserves v1 database compatibility.

## Why it matters

It reduces provider-specific glue for coding-agent users and makes model access, limits, residency metadata and cost accounting more predictable.

## Related coverage

- [Slack introduces shared code channels for team-visible coding agents](./2026-08-21-software-engineering-web-development-05-slack-introduces-shared-code-channels-for-team-visible-coding-agents.md)
- [Cline Desktop adds local-to-cloud agent handoff](./2026-08-21-software-engineering-web-development-08-cline-desktop-adds-local-to-cloud-agent-handoff.md)
- [Claude Code v2.1.237 fixes gateway prompt caching and adds Concise output](./2026-08-21-software-engineering-web-development-10-claude-code-v2-1-237-fixes-gateway-prompt-caching-and-adds-concise-outpu.md)

## Sources

- [OpenCode v1.18.19 release](https://github.com/anomalyco/opencode/releases/tag/v1.18.19)
- [GitHub REST release metadata](https://api.github.com/repos/anomalyco/opencode/releases/tags/v1.18.19)
