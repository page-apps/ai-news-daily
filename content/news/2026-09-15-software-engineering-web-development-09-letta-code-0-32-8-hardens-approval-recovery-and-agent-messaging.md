---
type: AI News
title: "Letta Code 0.32.8 hardens approval recovery and agent messaging"
description: "Letta Code 0.32.8 improves gateway retries, approval recovery, queued-message handling and malformed-question resilience in its coding-agent runtime."
date: 2026-09-15
published_at: "2026-09-14T03:45:49.000Z"
summary: "The release retries message requests when a gateway returns an HTML error page and prevents malformed questions from crashing the approval interface. It also improves teleport ownership during approval recovery and consumes queued messages without sender holds."
categories: ["Software engineering & web development"]
tags: ["letta code","coding agents","approvals","messaging","reliability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/letta-ai/letta-code/releases/tag/v0.32.8"
    title: "Letta Code v0.32.8"
  - id: source-2
    resource: "https://api.github.com/repos/letta-ai/letta-code/releases/tags/v0.32.8"
    title: "GitHub release metadata"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-14T15:32:02.699Z" }
verified: { by: "human:cmwen", at: "2026-09-16T00:03:32.886Z" }
status: stable
stale_after: 2026-09-15
---

## Summary

The release retries message requests when a gateway returns an HTML error page and prevents malformed questions from crashing the approval interface. It also improves teleport ownership during approval recovery and consumes queued messages without sender holds.

## Why it matters

Long-running coding agents depend on recoverable approval and messaging state, particularly when work is handed between sessions or interrupted by network failures.

## Related coverage

- [Cline Desktop 0.0.27 hardens credentials, provider routing and session recovery](./2026-09-15-software-engineering-web-development-04-cline-desktop-0-0-27-hardens-credentials-provider-routing-and-session-re.md)
- [Agent Deck 1.16.10 hardens multi-agent session delivery and restart handling](./2026-09-15-software-engineering-web-development-10-agent-deck-1-16-10-hardens-multi-agent-session-delivery-and-restart-hand.md)
- [Perplexity uses GPT-6 Astra for end-to-end software changes, testing and production monitoring](./2026-09-15-software-engineering-web-development-01-perplexity-uses-gpt-6-astra-for-end-to-end-software-changes-testing-and-.md)

## Sources

- [Letta Code v0.32.8](https://github.com/letta-ai/letta-code/releases/tag/v0.32.8)
- [GitHub release metadata](https://api.github.com/repos/letta-ai/letta-code/releases/tags/v0.32.8)
