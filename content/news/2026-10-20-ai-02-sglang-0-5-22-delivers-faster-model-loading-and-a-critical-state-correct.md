---
type: AI News
title: "SGLang 0.5.22 delivers faster model loading and a critical state-correctness fix"
description: "The open-source inference runtime released a major update for large-model and multimodal serving."
date: 2026-10-20
published_at: "2026-10-19T02:55:00.000Z"
summary: "SGLang 0.5.22 introduces an InstantTensor loader that maintainers say makes models load up to ten times faster, adds new model and diffusion support, and improves DeepSeek-V4.1 throughput on H200 GPUs. It also fixes a bug that could resume hybrid-linear models from incorrect Mamba states when speculative decoding and structured output were combined."
categories: ["Infrastructure & compute","Open source"]
tags: ["sglang","inference","serving","deepseek","throughput","model safety"]
pipeline: "ai"
sources:
  - id: source-1
    resource: "https://github.com/sgl-project/sglang/releases/tag/v0.5.22"
    title: "SGLang v0.5.22 release"
  - id: source-2
    resource: "https://muhammad-ahmed.com/blog/ai-brief-a-search-api-at-75-cents-per-thousand/"
    title: "AI Brief, 19 October 2026"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-19T14:01:58.174Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-19T14:02:24.371Z" }
status: stable
stale_after: 2026-10-20
---

## Summary

SGLang 0.5.22 introduces an InstantTensor loader that maintainers say makes models load up to ten times faster, adds new model and diffusion support, and improves DeepSeek-V4.1 throughput on H200 GPUs. It also fixes a bug that could resume hybrid-linear models from incorrect Mamba states when speculative decoding and structured output were combined.

## Why it matters

Serving efficiency and silent-correctness failures directly affect the cost and trustworthiness of production inference, especially for large open-weight models.

## Sources

- [SGLang v0.5.22 release](https://github.com/sgl-project/sglang/releases/tag/v0.5.22)
- [AI Brief, 19 October 2026](https://muhammad-ahmed.com/blog/ai-brief-a-search-api-at-75-cents-per-thousand/)
