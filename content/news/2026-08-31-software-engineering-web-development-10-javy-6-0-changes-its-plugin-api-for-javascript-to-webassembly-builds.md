---
type: AI News
title: "Javy 6.0 changes its plugin API for JavaScript-to-WebAssembly builds"
description: "The Bytecode Alliance's Javy runtime made a breaking plugin change and advanced its WebAssembly component integration."
date: 2026-08-31
published_at: "2026-08-29T17:47:00.000Z"
summary: "Javy 6.0 removes eval_bytecode from the default plugin and update namespace, moves plugin validation into code generation and changes the configuration schema API. It also adds a code-generation option for including source and documents a WASI Preview 2 plugin direction."
categories: ["Software engineering & web development"]
tags: ["webassembly","javascript","wasm","plugins"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/bytecodealliance/javy/releases/tag/v6.0.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-30T18:08:00.599Z" }
verified: { by: "human:cmwen", at: "2026-08-30T20:59:00.842Z" }
status: stable
stale_after: 2026-08-31
---

## Summary

Javy 6.0 removes eval_bytecode from the default plugin and update namespace, moves plugin validation into code generation and changes the configuration schema API. It also adds a code-generation option for including source and documents a WASI Preview 2 plugin direction.

## Why it matters

Projects embedding JavaScript in WebAssembly will need to migrate plugin integrations, while the clearer code-generation boundary supports more explicit and portable runtime composition.

## Related coverage

- [Next.js 16.4 canary improves codemods and SST key ordering](./2026-08-31-software-engineering-web-development-03-next-js-16-4-canary-improves-codemods-and-sst-key-ordering.md)
- [Alpine.js 3.17 adds deferred tree initialisation and a CSP fix](./2026-08-31-software-engineering-web-development-05-alpine-js-3-17-adds-deferred-tree-initialisation-and-a-csp-fix.md)
- [Plasmo 0.89 adds browser-specific manifest overrides](./2026-08-31-software-engineering-web-development-09-plasmo-0-89-adds-browser-specific-manifest-overrides.md)

## Sources

- [https://github.com/bytecodealliance/javy/releases/tag/v6.0.0](https://github.com/bytecodealliance/javy/releases/tag/v6.0.0)
