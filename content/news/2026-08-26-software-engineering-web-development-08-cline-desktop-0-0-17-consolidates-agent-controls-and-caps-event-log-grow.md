---
type: AI News
title: "Cline Desktop 0.0.17 consolidates agent controls and caps event-log growth"
description: "Cline's desktop release combines agent customisation surfaces and fixes local reliability problems, including unbounded event-log growth."
date: 2026-08-26
published_at: "2026-08-25T09:06:00.000Z"
summary: "Cline moved plugins, MCP servers, skills, rules, hooks and tools into one Customise hub and redesigned provider management. The release also fixes codebase-search crashes on files containing a single enormous line and prevents the hub event log from growing until it fills the disk."
categories: ["Software engineering & web development"]
tags: ["cline","coding agents","mcp","skills","local reliability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/cline/cline/releases/tag/desktop-v0.0.17"
    title: "Cline Desktop v0.0.17"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-25T21:00:34.487Z" }
verified: { by: "human:cmwen", at: "2026-08-26T00:20:02.220Z" }
status: stable
stale_after: 2026-08-26
---

## Summary

Cline moved plugins, MCP servers, skills, rules, hooks and tools into one Customise hub and redesigned provider management. The release also fixes codebase-search crashes on files containing a single enormous line and prevents the hub event log from growing until it fills the disk.

## Why it matters

The update brings more agent configuration and governance into one discoverable surface while addressing a failure mode that could consume local storage during long-running sessions. That is directly relevant to teams operating background coding agents on developer workstations.

## Related coverage

- [OpenCode 1.18.23 repairs Cloudflare AI Gateway routing and session handling](./2026-08-26-software-engineering-web-development-07-opencode-1-18-23-repairs-cloudflare-ai-gateway-routing-and-session-handl.md)
- [Google Antigravity CLI 1.1.20 improves workspace approvals and repository handling](./2026-08-26-software-engineering-web-development-09-google-antigravity-cli-1-1-20-improves-workspace-approvals-and-repositor.md)
- [A malicious webpage can poison the local model behind NVIDIA NemoClaw](./2026-08-26-software-engineering-web-development-01-a-malicious-webpage-can-poison-the-local-model-behind-nvidia-nemoclaw.md)

## Sources

- [Cline Desktop v0.0.17](https://github.com/cline/cline/releases/tag/desktop-v0.0.17)
