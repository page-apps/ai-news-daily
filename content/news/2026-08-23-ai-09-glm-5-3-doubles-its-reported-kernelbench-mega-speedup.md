---
type: AI News
title: "GLM-5.3 doubles its reported KernelBench-Mega speedup"
description: "Z.ai's reported GLM-5.3 result reached 21.4 times the PyTorch baseline on KernelBench-Mega."
date: 2026-08-23
published_at: "2026-08-22T11:30:00.000Z"
summary: "The result compares with 11.1 times for GLM-5.2 and reportedly passes the benchmark's single-launch gate that the earlier version failed. The implementation used Kimi-Linear Decode on an RTX PRO 6000 and CUDA techniques including persistent CTAs, Int4 dequantisation and fused latent-attention handling."
categories: ["Models & research","Infrastructure & compute"]
tags: ["glm-5.3","inference","kernelbench","cuda","efficiency"]
pipeline: "ai"
sources:
  - id: source-1
    resource: "https://huggingnews.com/ai/glm-53-hits-214x-pytorch-speedup-on-kernelbench-mega-doubling-glm-52-per-930bfc4c"
    title: "GLM-5.3 Hits 21.4x PyTorch Speedup on KernelBench-Mega"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-22T20:47:12.842Z" }
verified: { by: "human:cmwen", at: "2026-08-22T22:44:02.978Z" }
status: stable
stale_after: 2026-08-23
---

## Summary

The result compares with 11.1 times for GLM-5.2 and reportedly passes the benchmark's single-launch gate that the earlier version failed. The implementation used Kimi-Linear Decode on an RTX PRO 6000 and CUDA techniques including persistent CTAs, Int4 dequantisation and fused latent-attention handling.

## Why it matters

It points to inference optimisation becoming a model-capability frontier, with software and kernel design materially changing usable performance.

## Related coverage

- [SGLang and AntLing cut trillion-parameter restart time to 32 seconds](./2026-08-23-ai-06-sglang-and-antling-cut-trillion-parameter-restart-time-to-32-seconds.md)
- [Token fingerprints link anonymous Ox Alpha to Baseten's GLM-5.2 Vision](./2026-08-23-ai-07-token-fingerprints-link-anonymous-ox-alpha-to-baseten-s-glm-5-2-vision.md)
- [Microsoft receives first production Vera Rubin systems as Nvidia ramps the platform](./2026-08-23-ai-02-microsoft-receives-first-production-vera-rubin-systems-as-nvidia-ramps-t.md)

## Sources

- [GLM-5.3 Hits 21.4x PyTorch Speedup on KernelBench-Mega](https://huggingnews.com/ai/glm-53-hits-214x-pytorch-speedup-on-kernelbench-mega-doubling-glm-52-per-930bfc4c)
