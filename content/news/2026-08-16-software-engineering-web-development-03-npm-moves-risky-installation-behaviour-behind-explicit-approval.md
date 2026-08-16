---
type: AI News
title: "npm moves risky installation behaviour behind explicit approval"
description: "npm 12 makes lifecycle scripts and several non-registry dependency sources opt-in rather than automatic."
date: 2026-08-16
summary: "The new defaults block preinstall, install and postinstall scripts, implicit node-gyp builds, Git dependencies and remote tarballs unless developers explicitly allow them. npm’s migration guidance uses project allowlists and also begins deprecating sensitive two-factor-authentication-bypass granular access tokens."
categories: ["Software engineering & web development"]
tags: ["npm","nodejs","supply chain","security","install scripts"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://www.infoq.com/news/2026/08/npm-12-released/"
    title: "npm 12 Released: Install Scripts Off by Default as Registry Moves to Explicit Trust"
    author: "Daniel Curtis"
  - id: source-2
    resource: "https://github.blog/changelog/2026-07-08-npm-install-time-security-and-gat-bypass2fa-deprecation/"
    title: "npm install-time security and GAT bypass2fa deprecation"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-16T00:40:46.516Z" }
verified: { by: "human:cmwen", at: "2026-08-16T21:05:51.880Z" }
status: stable
stale_after: 2026-08-16
---

## Summary

The new defaults block preinstall, install and postinstall scripts, implicit node-gyp builds, Git dependencies and remote tarballs unless developers explicitly allow them. npm’s migration guidance uses project allowlists and also begins deprecating sensitive two-factor-authentication-bypass granular access tokens.

## Why it matters

The change alters a foundational JavaScript workflow and gives teams a stronger default boundary against dependency installation code execution, while creating migration work for native modules and build tooling.

## Related coverage

- [ChainDrop exposes persistence through Claude Code and VS Code configuration](./2026-08-16-software-engineering-web-development-04-chaindrop-exposes-persistence-through-claude-code-and-vs-code-configurat.md)
- [Qwen3.8-27B expands locally deployable coding models](./2026-08-16-software-engineering-web-development-01-qwen3-8-27b-expands-locally-deployable-coding-models.md)
- [DeepSeek releases a plugin-oriented agent harness](./2026-08-16-software-engineering-web-development-02-deepseek-releases-a-plugin-oriented-agent-harness.md)

## Sources

- [npm 12 Released: Install Scripts Off by Default as Registry Moves to Explicit Trust](https://www.infoq.com/news/2026/08/npm-12-released/)
- [npm install-time security and GAT bypass2fa deprecation](https://github.blog/changelog/2026-07-08-npm-install-time-security-and-gat-bypass2fa-deprecation/)
