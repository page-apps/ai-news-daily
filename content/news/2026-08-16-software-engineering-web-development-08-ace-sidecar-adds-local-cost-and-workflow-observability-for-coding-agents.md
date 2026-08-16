---
type: AI News
title: "ACE Sidecar adds local cost and workflow observability for coding agents"
description: "ACE Sidecar is an open-source local proxy and dashboard for measuring Claude Code and Google Antigravity sessions."
date: 2026-08-16
summary: "The sidecar records per-turn token, cache, latency and cost data, reads existing local transcripts, and stores metrics in a local SQLite database. It also exposes Prometheus metrics and mines repeated command sequences into installable SKILL.md files, while its optimisation recommendations currently measure rather than automatically change workflows."
categories: ["Software engineering & web development"]
tags: ["coding agents","observability","cost tracking","prometheus","developer productivity"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/ACE-Engineering/ace-sidecar"
    title: "ACE Sidecar"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-16T00:40:46.518Z" }
verified: { by: "human:cmwen", at: "2026-08-16T21:05:51.881Z" }
status: stable
stale_after: 2026-08-16
---

## Summary

The sidecar records per-turn token, cache, latency and cost data, reads existing local transcripts, and stores metrics in a local SQLite database. It also exposes Prometheus metrics and mines repeated command sequences into installable SKILL.md files, while its optimisation recommendations currently measure rather than automatically change workflows.

## Why it matters

As coding-agent usage becomes harder to budget and supervise, local cost attribution and workflow evidence provide a practical foundation for engineering governance.

## Related coverage

- [DeepSeek releases a plugin-oriented agent harness](./2026-08-16-software-engineering-web-development-02-deepseek-releases-a-plugin-oriented-agent-harness.md)
- [ChainDrop exposes persistence through Claude Code and VS Code configuration](./2026-08-16-software-engineering-web-development-04-chaindrop-exposes-persistence-through-claude-code-and-vs-code-configurat.md)
- [GraphQL tooling converges on LLM-generated mocks without a standard](./2026-08-16-software-engineering-web-development-05-graphql-tooling-converges-on-llm-generated-mocks-without-a-standard.md)

## Sources

- [ACE Sidecar](https://github.com/ACE-Engineering/ace-sidecar)
