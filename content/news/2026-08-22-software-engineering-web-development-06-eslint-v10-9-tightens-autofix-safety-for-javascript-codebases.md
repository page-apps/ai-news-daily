---
type: AI News
title: "ESLint v10.9 tightens autofix safety for JavaScript codebases"
description: "The latest ESLint release adds rule improvements and fixes cases where automatic rewrites could be unsafe."
date: 2026-08-22
published_at: "2026-08-21T13:05:50.000Z"
summary: "ESLint 10.9.0 adds checks for conditional loop expressions and numeric precision underflow, while fixing unsafe no-var and prefer-template autofixes. The release also updates shareable-config documentation and its CodeQL and CI dependencies."
categories: ["Software engineering & web development"]
tags: ["eslint","javascript","static analysis","autofix","code quality"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/eslint/eslint/releases/tag/v10.9.0"
    title: "ESLint v10.9.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-21T21:23:56.811Z" }
verified: { by: "human:cmwen", at: "2026-08-21T21:49:49.256Z" }
status: stable
stale_after: 2026-08-22
---

## Summary

ESLint 10.9.0 adds checks for conditional loop expressions and numeric precision underflow, while fixing unsafe no-var and prefer-template autofixes. The release also updates shareable-config documentation and its CodeQL and CI dependencies.

## Why it matters

Autofix is part of the build pipeline for many JavaScript projects, so preventing incorrect rewrites is more durable than adding another stylistic rule.

## Related coverage

- [Claude Code v2.1.238 hardens plugin credentials and self-hosted agent operations](./2026-08-22-software-engineering-web-development-01-claude-code-v2-1-238-hardens-plugin-credentials-and-self-hosted-agent-op.md)
- [Codex CLI 0.149 turns parallel agent sessions into a managed workspace](./2026-08-22-software-engineering-web-development-02-codex-cli-0-149-turns-parallel-agent-sessions-into-a-managed-workspace.md)
- [GitHub's Copilot Cloud Agent status visibility degraded for hours](./2026-08-22-software-engineering-web-development-03-github-s-copilot-cloud-agent-status-visibility-degraded-for-hours.md)

## Sources

- [ESLint v10.9.0](https://github.com/eslint/eslint/releases/tag/v10.9.0)
