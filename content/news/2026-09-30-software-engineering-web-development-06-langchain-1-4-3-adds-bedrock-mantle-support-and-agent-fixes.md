---
type: AI News
title: "LangChain 1.4.3 adds Bedrock Mantle support and agent fixes"
description: "LangChain released version 1.4.3 with new model-provider support and fixes affecting agent construction and structured outputs."
date: 2026-09-30
published_at: "2026-09-28T20:17:22.978Z"
summary: "The release adds Amazon Bedrock Mantle chat-model support to init_chat_model and recognises GPT-6 structured output without explicit profiles. It also repairs invalid tool calls in create_agent and sanitises cache settings for fallback models."
categories: ["Software engineering & web development"]
tags: ["langchain","agents","bedrock","structured-output","python"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://pypi.org/pypi/langchain/1.4.3/json"
    title: "LangChain 1.4.3 PyPI metadata"
  - id: source-2
    resource: "https://github.com/langchain-ai/langchain/releases/tag/langchain%3D%3D1.4.3"
    title: "LangChain 1.4.3 release notes"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-29T15:20:32.386Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-29T15:24:31.895Z" }
status: stable
stale_after: 2026-09-30
---

## Summary

The release adds Amazon Bedrock Mantle chat-model support to init_chat_model and recognises GPT-6 structured output without explicit profiles. It also repairs invalid tool calls in create_agent and sanitises cache settings for fallback models.

## Why it matters

These changes reduce provider-specific integration work and improve reliability for applications built on LangChain’s agent abstractions.

## Related coverage

- [Claude Sonnet 5.5 launches with a major coding-efficiency jump](./2026-09-30-software-engineering-web-development-01-claude-sonnet-5-5-launches-with-a-major-coding-efficiency-jump.md)
- [Claude Code 2.1.284 makes Sonnet 5.5 the default and hardens MCP recovery](./2026-09-30-software-engineering-web-development-02-claude-code-2-1-284-makes-sonnet-5-5-the-default-and-hardens-mcp-recover.md)
- [GitHub Copilot CLI 1.0.89 expands model choice and MCP resilience](./2026-09-30-software-engineering-web-development-03-github-copilot-cli-1-0-89-expands-model-choice-and-mcp-resilience.md)

## Sources

- [LangChain 1.4.3 PyPI metadata](https://pypi.org/pypi/langchain/1.4.3/json)
- [LangChain 1.4.3 release notes](https://github.com/langchain-ai/langchain/releases/tag/langchain%3D%3D1.4.3)
