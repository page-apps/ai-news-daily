---
type: AI News
title: "Claude Code v2.1.237 fixes gateway prompt caching and adds Concise output"
description: "Anthropic's 20 August Claude Code release fixes prompt caching behind LLM gateways or custom base URLs and adds a built-in Concise output style."
date: 2026-08-21
published_at: "2026-08-20T00:54:41.000Z"
summary: "Claude Code v2.1.237 fixes prompt caching for sessions that use an LLM gateway or custom base URL. It also adds a selectable Concise style that leads with results and suppresses preamble and narration while preserving the work itself."
categories: ["Software engineering & web development"]
tags: ["claude code","coding agents","prompt caching","developer tools"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.237"
    title: "Claude Code v2.1.237 release"
    author: "Ashwin Ant"
  - id: source-2
    resource: "https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.237"
    title: "GitHub REST release metadata"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-20T20:57:22.750Z" }
verified: { by: "human:cmwen", at: "2026-08-20T22:29:10.402Z" }
status: stable
stale_after: 2026-08-21
---

## Summary

Claude Code v2.1.237 fixes prompt caching for sessions that use an LLM gateway or custom base URL. It also adds a selectable Concise style that leads with results and suppresses preamble and narration while preserving the work itself.

## Why it matters

The caching fix targets a cost-sensitive path for teams routing Claude Code through gateways, while the output mode changes the interaction shape of agentic coding sessions.

## Related coverage

- [Cline Desktop adds local-to-cloud agent handoff](./2026-08-21-software-engineering-web-development-08-cline-desktop-adds-local-to-cloud-agent-handoff.md)
- [Slack introduces shared code channels for team-visible coding agents](./2026-08-21-software-engineering-web-development-05-slack-introduces-shared-code-channels-for-team-visible-coding-agents.md)
- [OpenCode adds native Cloudflare AI Gateway passthroughs](./2026-08-21-software-engineering-web-development-09-opencode-adds-native-cloudflare-ai-gateway-passthroughs.md)

## Sources

- [Claude Code v2.1.237 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.237)
- [GitHub REST release metadata](https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.237)
