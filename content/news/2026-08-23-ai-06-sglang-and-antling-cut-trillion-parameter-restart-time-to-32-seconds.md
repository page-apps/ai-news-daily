---
type: AI News
title: "SGLang and AntLing cut trillion-parameter restart time to 32 seconds"
description: "A new Weight Cache Daemon keeps model weights in memory to accelerate SGLang restarts."
date: 2026-08-23
published_at: "2026-08-22T04:36:00.000Z"
summary: "AntLingAGI and Alibaba reported 0.63-second weight loading for the Ling-2.6-1T FP8 model, up to 780 times faster than disk loading. The end-to-end engine restart fell to about 32 seconds by avoiding repeated disk reads."
categories: ["Infrastructure & compute","Open source"]
tags: ["sglang","model-serving","inference","memory","alibaba","large-models"]
pipeline: "ai"
sources:
  - id: source-1
    resource: "https://huggingnews.com/ai/sglang-cuts-1t-model-restarts-to-32-seconds-down-from-88-minutes-230119fa"
    title: "SGLang Cuts 1T Model Restarts to 32 Seconds"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-22T20:47:12.840Z" }
verified: { by: "human:cmwen", at: "2026-08-22T22:44:02.978Z" }
status: stable
stale_after: 2026-08-23
---

## Summary

AntLingAGI and Alibaba reported 0.63-second weight loading for the Ling-2.6-1T FP8 model, up to 780 times faster than disk loading. The end-to-end engine restart fell to about 32 seconds by avoiding repeated disk reads.

## Why it matters

Fast recovery reduces the operational penalty of serving very large models and improves utilisation of expensive inference hardware.

## Related coverage

- [GLM-5.3 doubles its reported KernelBench-Mega speedup](./2026-08-23-ai-09-glm-5-3-doubles-its-reported-kernelbench-mega-speedup.md)
- [UBS sees $4.1 trillion of hyperscaler AI infrastructure spending through 2028](./2026-08-23-ai-10-ubs-sees-4-1-trillion-of-hyperscaler-ai-infrastructure-spending-through-.md)
- [Microsoft receives first production Vera Rubin systems as Nvidia ramps the platform](./2026-08-23-ai-02-microsoft-receives-first-production-vera-rubin-systems-as-nvidia-ramps-t.md)

## Sources

- [SGLang Cuts 1T Model Restarts to 32 Seconds](https://huggingnews.com/ai/sglang-cuts-1t-model-restarts-to-32-seconds-down-from-88-minutes-230119fa)
