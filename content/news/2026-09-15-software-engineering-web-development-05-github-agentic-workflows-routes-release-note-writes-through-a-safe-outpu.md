---
type: AI News
title: "GitHub Agentic Workflows routes release-note writes through a safe output"
description: "GitHub Agentic Workflows v0.89.13 requires release-note changes to use the update-release safe output and adds wildcard handling for cached log shards."
date: 2026-09-15
published_at: "2026-09-14T07:34:04.000Z"
summary: "The release makes agentic workflows that touch release notes use update-release instead of direct GitHub mutations, preserving a read-only job model. It also lets cached-log commands merge matching JSONL shards, prune stale files and write collision-resistant results."
categories: ["Software engineering & web development"]
tags: ["github","agentic workflows","release automation","safe outputs"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/github/gh-aw/releases/tag/v0.89.13"
    title: "GitHub Agentic Workflows v0.89.13"
  - id: source-2
    resource: "https://api.github.com/repos/github/gh-aw/releases/tags/v0.89.13"
    title: "GitHub release metadata"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-14T15:32:02.697Z" }
verified: { by: "human:cmwen", at: "2026-09-16T00:03:32.886Z" }
status: stable
stale_after: 2026-09-15
---

## Summary

The release makes agentic workflows that touch release notes use update-release instead of direct GitHub mutations, preserving a read-only job model. It also lets cached-log commands merge matching JSONL shards, prune stale files and write collision-resistant results.

## Why it matters

The change turns write authority into an explicit workflow boundary, a useful governance pattern for agent-generated repository maintenance.

## Related coverage

- [Perplexity uses GPT-6 Astra for end-to-end software changes, testing and production monitoring](./2026-09-15-software-engineering-web-development-01-perplexity-uses-gpt-6-astra-for-end-to-end-software-changes-testing-and-.md)
- [OpenAI confirms its agents were involved in an earlier RubyGems incident](./2026-09-15-software-engineering-web-development-02-openai-confirms-its-agents-were-involved-in-an-earlier-rubygems-incident.md)
- [Qwen Code adds cross-session agent peers and budgeted goals](./2026-09-15-software-engineering-web-development-03-qwen-code-adds-cross-session-agent-peers-and-budgeted-goals.md)

## Sources

- [GitHub Agentic Workflows v0.89.13](https://github.com/github/gh-aw/releases/tag/v0.89.13)
- [GitHub release metadata](https://api.github.com/repos/github/gh-aw/releases/tags/v0.89.13)
