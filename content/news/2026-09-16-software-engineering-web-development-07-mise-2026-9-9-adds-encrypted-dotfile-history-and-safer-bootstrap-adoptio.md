---
type: AI News
title: "mise 2026.9.9 adds encrypted dotfile history and safer bootstrap adoption"
description: "The mise release fixes false dotfile deletions and adds encrypted history enrolment plus more explicit bootstrap replacement controls."
date: 2026-09-16
published_at: "2026-09-15T07:00:26.000Z"
summary: "mise dot track --encrypt now creates an encrypted baseline and fails closed if that baseline cannot be saved. The release also isolates concurrent dotfile indexes, adds rollback-aware bootstrap --replace-history behaviour and introduces lock-aware uv options for PyPI tools."
categories: ["Software engineering & web development"]
tags: ["mise","dev-environments","dotfiles","encryption","uv","reproducibility"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/jdx/mise/releases/tag/v2026.9.9"
    title: "mise v2026.9.9"
  - id: source-2
    resource: "https://github.com/jdx/mise/releases.atom"
    title: "mise release feed"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-15T15:20:38.312Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-15T15:23:54.429Z" }
status: stable
stale_after: 2026-09-16
---

## Summary

mise dot track --encrypt now creates an encrypted baseline and fails closed if that baseline cannot be saved. The release also isolates concurrent dotfile indexes, adds rollback-aware bootstrap --replace-history behaviour and introduces lock-aware uv options for PyPI tools.

## Why it matters

The changes improve the safety and reproducibility of developer-machine configuration, especially where dotfile history may contain credentials or divergent local state.

## Related coverage

- [uv 0.12.15 restores valid Docker and target installation commands](./2026-09-16-software-engineering-web-development-09-uv-0-12-15-restores-valid-docker-and-target-installation-commands.md)
- [GitHub Copilot Auto adds explicit cost-and-quality tiers](./2026-09-16-software-engineering-web-development-01-github-copilot-auto-adds-explicit-cost-and-quality-tiers.md)
- [Qwen Code 0.23.4 expands resumable and cross-session agent workflows](./2026-09-16-software-engineering-web-development-02-qwen-code-0-23-4-expands-resumable-and-cross-session-agent-workflows.md)

## Sources

- [mise v2026.9.9](https://github.com/jdx/mise/releases/tag/v2026.9.9)
- [mise release feed](https://github.com/jdx/mise/releases.atom)
