---
type: AI News
title: "syslog-ng 4.9 adds native HTTP statistics exporters"
description: "The logging daemon adds HTTP-accessible statistics sources and improves protocol and file-change detection."
date: 2026-08-23
published_at: "2026-08-22T20:14:00.000Z"
summary: "syslog-ng 4.9.0 adds `stats-exporter()` and `stats-exporter-dont-log()` sources that expose `syslog-ng-ctl` statistics or queries to HTTP scrapers, with rate, format and single-instance controls. It also adds RFC6587 auto-detection for octet-count framing and inotify-based wildcard-file change detection."
categories: ["Software engineering & web development"]
tags: ["syslog-ng","observability","logging","http","inotify"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/syslog-ng/syslog-ng/releases/tag/syslog-ng-4.9.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-22T21:44:45.477Z" }
verified: { by: "human:cmwen", at: "2026-08-23T04:30:04.836Z" }
status: stable
stale_after: 2026-08-23
---

## Summary

syslog-ng 4.9.0 adds `stats-exporter()` and `stats-exporter-dont-log()` sources that expose `syslog-ng-ctl` statistics or queries to HTTP scrapers, with rate, format and single-instance controls. It also adds RFC6587 auto-detection for octet-count framing and inotify-based wildcard-file change detection.

## Why it matters

Operational telemetry becomes part of the log daemon’s native HTTP surface, reducing the need for separate polling integrations.

## Related coverage

- [GitHub Agentic Workflows tightens safe outputs and reproducibility](./2026-08-23-software-engineering-web-development-04-github-agentic-workflows-tightens-safe-outputs-and-reproducibility.md)
- [Cline 4.1.12 extends enterprise MCP controls across its agent stack](./2026-08-23-software-engineering-web-development-01-cline-4-1-12-extends-enterprise-mcp-controls-across-its-agent-stack.md)
- [Cloudflare workerd adds dynamic WebAssembly modules and TypeScript stream RPC support](./2026-08-23-software-engineering-web-development-02-cloudflare-workerd-adds-dynamic-webassembly-modules-and-typescript-strea.md)

## Sources

- [https://github.com/syslog-ng/syslog-ng/releases/tag/syslog-ng-4.9.0](https://github.com/syslog-ng/syslog-ng/releases/tag/syslog-ng-4.9.0)
