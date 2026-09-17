---
type: AI News
title: "CERT warns MLflow model loaders can bypass pickle controls"
description: "CERT/CC documented a model-artifact path to arbitrary code execution in MLflow despite its pickle-deserialization safety setting."
date: 2026-09-18
published_at: "2026-09-16T17:10:00.000Z"
summary: "CERT/CC reported that MLflow's DSPy flavour applies its pickle guard conditionally based on the file extension, while the statsmodels flavour omits the guard. A malicious model artifact can therefore trigger arbitrary remote code execution through `mlflow.pyfunc.load_model()` even when pickle deserialization is disabled; statsmodels is fixed in version 3.15.0 and DSPy users are advised to avoid the affected flavour until fixed."
categories: ["Software engineering & web development"]
tags: ["mlflow","model-security","pickle","supply-chain","remote-code-execution"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://kb.cert.org/vuls/id/369093"
    title: "VU#369093 - MLflow dspy and statsmodels flavors bypass pickle deserialization control"
    author: "CERT Coordination Center"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-17T15:29:18.879Z" }
verified: { by: "human:cmwen", at: "2026-09-17T21:08:55.236Z" }
status: stable
stale_after: 2026-09-18
---

## Summary

CERT/CC reported that MLflow's DSPy flavour applies its pickle guard conditionally based on the file extension, while the statsmodels flavour omits the guard. A malicious model artifact can therefore trigger arbitrary remote code execution through `mlflow.pyfunc.load_model()` even when pickle deserialization is disabled; statsmodels is fixed in version 3.15.0 and DSPy users are advised to avoid the affected flavour until fixed.

## Why it matters

Model registries and artifact stores are part of modern software delivery, so bypassable deserialization controls can turn ordinary model loading into a supply-chain execution path.

## Related coverage

- [Deno 2.9.7 tightens network, cache and lockfile safety](./2026-09-18-software-engineering-web-development-09-deno-2-9-7-tightens-network-cache-and-lockfile-safety.md)
- [Claude Code 2.1.274 hardens MCP startup, session recovery and telemetry](./2026-09-18-software-engineering-web-development-01-claude-code-2-1-274-hardens-mcp-startup-session-recovery-and-telemetry.md)
- [Cline 4.1.19 blocks planted executables and fixes context exhaustion](./2026-09-18-software-engineering-web-development-02-cline-4-1-19-blocks-planted-executables-and-fixes-context-exhaustion.md)

## Sources

- [VU#369093 - MLflow dspy and statsmodels flavors bypass pickle deserialization control](https://kb.cert.org/vuls/id/369093)
