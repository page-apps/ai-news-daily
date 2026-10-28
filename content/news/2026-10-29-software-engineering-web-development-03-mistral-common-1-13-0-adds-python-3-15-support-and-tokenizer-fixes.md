---
type: AI News
title: "Mistral Common 1.13.0 adds Python 3.15 support and tokenizer fixes"
description: "Mistral Common released version 1.13.0 with compatibility and agent-oriented tokenizer changes."
date: 2026-10-29
published_at: "2026-10-28T00:51:00.000Z"
summary: "The release adds Python 3.15 support, improves offline tokenizer-download fallback, and rejects multiple tool results in tokenizer version 2. It also corrects cache-directory handling when listing locally cached tokenizer files."
categories: ["Software engineering & web development"]
tags: ["mistral","python","tokenizers","agents","developer libraries"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/mistralai/mistral-common/releases"
    title: "Mistral Common releases"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-28T14:04:41.830Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-28T14:05:28.102Z" }
status: stable
stale_after: 2026-10-29
---

## Summary

The release adds Python 3.15 support, improves offline tokenizer-download fallback, and rejects multiple tool results in tokenizer version 2. It also corrects cache-directory handling when listing locally cached tokenizer files.

## Why it matters

These foundational library changes affect developers packaging Mistral model workflows, especially as Python 3.15 adoption and tool-using model integrations expand.

## Related coverage

- [llama.cpp 0.8.0 adds multimodal LFM3 and realtime audio APIs](./2026-10-29-software-engineering-web-development-01-llama-cpp-0-8-0-adds-multimodal-lfm3-and-realtime-audio-apis.md)
- [GitHub Copilot CLI fixes model selection in long-context sessions](./2026-10-29-software-engineering-web-development-02-github-copilot-cli-fixes-model-selection-in-long-context-sessions.md)
- [Brotli 1.2.0 adds a decompression-size safeguard](./2026-10-29-software-engineering-web-development-04-brotli-1-2-0-adds-a-decompression-size-safeguard.md)

## Sources

- [Mistral Common releases](https://github.com/mistralai/mistral-common/releases)
