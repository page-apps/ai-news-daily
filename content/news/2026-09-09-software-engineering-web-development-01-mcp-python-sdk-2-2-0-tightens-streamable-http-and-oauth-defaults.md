---
type: AI News
title: "MCP Python SDK 2.2.0 tightens Streamable HTTP and OAuth defaults"
description: "The Model Context Protocol Python SDK now restricts redirects, expires idle sessions and strengthens OAuth validation."
date: 2026-09-09
published_at: "2026-09-07T15:53:00.000Z"
summary: "MCP Python SDK 2.2.0 limits HTTP redirects to the endpoint origin, expires idle stateful sessions after 30 minutes and caps concurrent sessions at 10,000. It also validates OAuth issuer and token-resource settings more strictly."
categories: ["Software engineering & web development"]
tags: ["mcp","python","oauth","http","security"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/modelcontextprotocol/python-sdk/releases/tag/v2.2.0"
    title: "Release v2.2.0"
    author: "Model Context Protocol"
  - id: source-2
    resource: "https://pypi.org/project/mcp/2.2.0/"
    title: "mcp 2.2.0"
    author: "Model Context Protocol"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-08T22:10:32.673Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-08T22:15:29.061Z" }
status: stable
stale_after: 2026-09-09
---

## Summary

MCP Python SDK 2.2.0 limits HTTP redirects to the endpoint origin, expires idle stateful sessions after 30 minutes and caps concurrent sessions at 10,000. It also validates OAuth issuer and token-resource settings more strictly.

## Why it matters

MCP server operators need to review connection lifecycles, scaling limits and authentication assumptions before upgrading.

## Related coverage

- [Déjà Vu 0.19.4 gives multiple coding agents shared project memory](./2026-09-09-software-engineering-web-development-02-deja-vu-0-19-4-gives-multiple-coding-agents-shared-project-memory.md)
- [Hermes Agent 0.21.1 rolls up major agent-runtime and MCP changes](./2026-09-09-software-engineering-web-development-04-hermes-agent-0-21-1-rolls-up-major-agent-runtime-and-mcp-changes.md)
- [Pydantic AI 2.41.0 adds ChatGPT and Codex subscription authentication](./2026-09-09-software-engineering-web-development-06-pydantic-ai-2-41-0-adds-chatgpt-and-codex-subscription-authentication.md)

## Sources

- [Release v2.2.0](https://github.com/modelcontextprotocol/python-sdk/releases/tag/v2.2.0)
- [mcp 2.2.0](https://pypi.org/project/mcp/2.2.0/)
