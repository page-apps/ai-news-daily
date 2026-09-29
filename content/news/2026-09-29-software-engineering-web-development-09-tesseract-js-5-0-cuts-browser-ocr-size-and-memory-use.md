---
type: AI News
title: "Tesseract.js 5.0 cuts browser OCR size and memory use"
description: "Tesseract.js 5.0.0 reduces language-data file sizes, lowers worker memory use and changes worker initialisation APIs while restoring default compatibility with iOS 17."
date: 2026-09-29
published_at: "2026-09-28T07:42:00.000Z"
summary: "The release reports 54% smaller English data, 73% smaller Chinese data and a web-benchmark memory reduction from 311 MB to 164 MB. It also moves language and engine initialisation into `createWorker`, requiring migration from the older `loadLanguage` and `initialize` calls."
categories: ["Software engineering & web development"]
tags: ["tesseractjs","ocr","wasm","browser","performance","ios"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/naptha/tesseract.js/releases/tag/v5.0.0"
    title: "Release v5.0.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-28T15:11:26.861Z" }
verified: { by: "human:cmwen", at: "2026-09-29T12:25:06.646Z" }
status: stable
stale_after: 2026-09-29
---

## Summary

The release reports 54% smaller English data, 73% smaller Chinese data and a web-benchmark memory reduction from 311 MB to 164 MB. It also moves language and engine initialisation into `createWorker`, requiring migration from the older `loadLanguage` and `initialize` calls.

## Why it matters

Lower download and memory costs make browser-side OCR more practical, but the API changes require application developers to update existing integrations.

## Related coverage

- [Codex CLI 0.158 hardens MCP, sandboxing and terminal approvals](./2026-09-29-software-engineering-web-development-01-codex-cli-0-158-hardens-mcp-sandboxing-and-terminal-approvals.md)
- [OpenCode 1.18.33 improves agent gateway reliability and secrecy](./2026-09-29-software-engineering-web-development-02-opencode-1-18-33-improves-agent-gateway-reliability-and-secrecy.md)
- [Docker Agent adds distributed tracing across ACP requests](./2026-09-29-software-engineering-web-development-03-docker-agent-adds-distributed-tracing-across-acp-requests.md)

## Sources

- [Release v5.0.0](https://github.com/naptha/tesseract.js/releases/tag/v5.0.0)
