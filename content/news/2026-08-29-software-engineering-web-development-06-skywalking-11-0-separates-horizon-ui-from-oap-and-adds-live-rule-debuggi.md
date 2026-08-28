---
type: AI News
title: "SkyWalking 11.0 separates Horizon UI from OAP and adds live rule debugging"
description: "Apache SkyWalking 11.0.0 changes the deployment model and adds runtime controls for observability rules."
date: 2026-08-29
published_at: "2026-08-28T02:40:59.000Z"
summary: "SkyWalking 11.0.0 makes Horizon UI an independently deployed component rather than a bundled legacy web UI and exposes a dedicated administration port for management APIs. The release adds TLS certificate hot reload for OAP HTTP and REST servers, runtime rule hot-update, live DSL debugging, and trace-tail sampling."
categories: ["Software engineering & web development"]
tags: ["observability","skywalking","runtime-rules","dsl"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/apache/skywalking/releases/tag/v11.0.0"
    title: "Apache SkyWalking 11.0.0 release notes"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-28T21:07:10.873Z" }
verified: { by: "human:cmwen", at: "2026-08-28T21:41:20.340Z" }
status: stable
stale_after: 2026-08-29
---

## Summary

SkyWalking 11.0.0 makes Horizon UI an independently deployed component rather than a bundled legacy web UI and exposes a dedicated administration port for management APIs. The release adds TLS certificate hot reload for OAP HTTP and REST servers, runtime rule hot-update, live DSL debugging, and trace-tail sampling.

## Why it matters

Operators must account for a deployment-topology change, but can gain safer runtime observability changes without restarting the entire system.

## Related coverage

- [Claude Code adds restricted execution and cross-session messaging](./2026-08-29-software-engineering-web-development-01-claude-code-adds-restricted-execution-and-cross-session-messaging.md)
- [Claude Code adds model-switch hooks and remote subagent visibility](./2026-08-29-software-engineering-web-development-02-claude-code-adds-model-switch-hooks-and-remote-subagent-visibility.md)
- [Cline Desktop expands to Windows and improves long-running agent workflows](./2026-08-29-software-engineering-web-development-03-cline-desktop-expands-to-windows-and-improves-long-running-agent-workflo.md)

## Sources

- [Apache SkyWalking 11.0.0 release notes](https://github.com/apache/skywalking/releases/tag/v11.0.0)
