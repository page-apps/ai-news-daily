---
type: AI News
title: "Claude Code 2.1.282 hardens telemetry, permissions and session recovery"
description: "Anthropic released Claude Code 2.1.282 with extensive fixes and tighter controls over project settings, telemetry, skills, permissions and resumed sessions."
date: 2026-09-26
published_at: "2026-09-24T18:38:00.000Z"
summary: "The release ignores project-level telemetry settings that could enable export or content capture, adds managed Chrome/MCP controls, and improves recovery of extended-thinking sessions. It also fixes permission-rule bypasses, duplicate command execution and several remote-session failures."
categories: ["Software engineering & web development"]
tags: ["claude-code","coding-agents","telemetry","permissions","session-recovery"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/anthropics/claude-code/releases/tag/v2.1.282"
    title: "Claude Code 2.1.282 release"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-25T15:08:34.768Z" }
verified: { by: "human:cmwen", at: "2026-09-27T22:09:17.021Z" }
status: stable
stale_after: 2026-09-26
---

## Summary

The release ignores project-level telemetry settings that could enable export or content capture, adds managed Chrome/MCP controls, and improves recovery of extended-thinking sessions. It also fixes permission-rule bypasses, duplicate command execution and several remote-session failures.

## Why it matters

These changes address operational and security failure modes that become more important as coding agents run longer sessions with broader tool access.

## Related coverage

- [protoAgent adds Zed ACP integration and stronger runtime tracing](./2026-09-26-software-engineering-web-development-05-protoagent-adds-zed-acp-integration-and-stronger-runtime-tracing.md)
- [Payload CMS adds agent-assisted upgrades in its 4.0 canary](./2026-09-26-software-engineering-web-development-02-payload-cms-adds-agent-assisted-upgrades-in-its-4-0-canary.md)
- [Lightdash adds custom agent skills and exposes them through MCP](./2026-09-26-software-engineering-web-development-03-lightdash-adds-custom-agent-skills-and-exposes-them-through-mcp.md)

## Sources

- [Claude Code 2.1.282 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)
