---
type: AI News
title: "Deno 2.9.7 tightens network, cache and lockfile safety"
description: "Deno's patch release closes several correctness and security gaps in model-independent JavaScript tooling and deployment workflows."
date: 2026-09-18
published_at: "2026-09-17T09:04:55.000Z"
summary: "Deno 2.9.7 makes audit honour configured certificate stores, disambiguates HTTP authority paths and checks resolved IPs against the network deny list. It also validates lockfile tarball registry paths, fixes permission descriptors and removes argument, completion and sourcemap handling errors in deployment and sandbox commands."
categories: ["Software engineering & web development"]
tags: ["deno","javascript","supply-chain","network-security","deployment"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/denoland/deno/releases/tag/v2.9.7"
    title: "Deno v2.9.7 release notes"
    author: "Deno"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-17T15:29:18.878Z" }
verified: { by: "human:cmwen", at: "2026-09-17T21:08:55.236Z" }
status: stable
stale_after: 2026-09-18
---

## Summary

Deno 2.9.7 makes audit honour configured certificate stores, disambiguates HTTP authority paths and checks resolved IPs against the network deny list. It also validates lockfile tarball registry paths, fixes permission descriptors and removes argument, completion and sourcemap handling errors in deployment and sandbox commands.

## Why it matters

These fixes reduce ambiguity in dependency installation and network policy enforcement, areas where small runtime errors can become supply-chain or isolation failures.

## Related coverage

- [Node.js 26.9 expands Web Workers, crypto and runtime diagnostics](./2026-09-18-software-engineering-web-development-08-node-js-26-9-expands-web-workers-crypto-and-runtime-diagnostics.md)
- [CERT warns MLflow model loaders can bypass pickle controls](./2026-09-18-software-engineering-web-development-10-cert-warns-mlflow-model-loaders-can-bypass-pickle-controls.md)
- [Claude Code 2.1.274 hardens MCP startup, session recovery and telemetry](./2026-09-18-software-engineering-web-development-01-claude-code-2-1-274-hardens-mcp-startup-session-recovery-and-telemetry.md)

## Sources

- [Deno v2.9.7 release notes](https://github.com/denoland/deno/releases/tag/v2.9.7)
