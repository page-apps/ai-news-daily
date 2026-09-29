---
type: AI News
title: "pnpm 12.8 warns about accidental environment-file publication"
description: "pnpm 12.8.0 warns when package archives would include unlisted `.env` files and strengthens pnpr lockfile checks, workspace installs and git-dependency build handling."
date: 2026-09-29
published_at: "2026-09-28T07:35:00.000Z"
summary: "Package packing and publishing now flag `.env` and `.env.*` files that are not explicitly listed in package metadata. The release also records pnpmfile checksums in pnpr lockfiles and avoids running unapproved build scripts while preparing certain git dependencies."
categories: ["Software engineering & web development"]
tags: ["pnpm","npm","supply-chain","secrets","lockfiles","package-management"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/pnpm/pnpm/releases/tag/v12.8.0"
    title: "Release pnpm 12.8"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-28T15:11:26.859Z" }
verified: { by: "human:cmwen", at: "2026-09-29T12:25:06.646Z" }
status: stable
stale_after: 2026-09-29
---

## Summary

Package packing and publishing now flag `.env` and `.env.*` files that are not explicitly listed in package metadata. The release also records pnpmfile checksums in pnpr lockfiles and avoids running unapproved build scripts while preparing certain git dependencies.

## Why it matters

The changes address two practical supply-chain risks: accidentally publishing secrets and accepting dependency state that no longer matches the lockfile.

## Related coverage

- [Codex CLI 0.158 hardens MCP, sandboxing and terminal approvals](./2026-09-29-software-engineering-web-development-01-codex-cli-0-158-hardens-mcp-sandboxing-and-terminal-approvals.md)
- [OpenCode 1.18.33 improves agent gateway reliability and secrecy](./2026-09-29-software-engineering-web-development-02-opencode-1-18-33-improves-agent-gateway-reliability-and-secrecy.md)
- [Docker Agent adds distributed tracing across ACP requests](./2026-09-29-software-engineering-web-development-03-docker-agent-adds-distributed-tracing-across-acp-requests.md)

## Sources

- [Release pnpm 12.8](https://github.com/pnpm/pnpm/releases/tag/v12.8.0)
