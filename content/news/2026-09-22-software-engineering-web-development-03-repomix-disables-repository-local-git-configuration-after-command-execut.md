---
type: AI News
title: "Repomix disables repository-local Git configuration after command-execution flaw"
description: "Repomix v1.18.1 closes a CLI supply-chain path involving crafted .git/config files."
date: 2026-09-22
published_at: "2026-09-21T08:34:00.000Z"
summary: "The release disables repository-local Git settings for all Git commands after crafted configuration could invoke executables through gpg.program, diff.external, textconv or core.fsmonitor. It also fixes a Windows .gitignore crash and several CLI output bugs."
categories: ["Software engineering & web development"]
tags: ["security","git","supply chain","cli","repomix"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/yamadashy/repomix/releases/tag/v1.18.1"
    title: "Repomix v1.18.1"
  - id: source-2
    resource: "https://github.com/yamadashy/repomix/security/advisories/GHSA-4p5g-gh74-q524"
    title: "Repomix security advisory"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-21T23:06:42.778Z" }
verified: { by: "human:cmwen", at: "2026-09-22T03:48:05.281Z" }
status: stable
stale_after: 2026-09-22
---

## Summary

The release disables repository-local Git settings for all Git commands after crafted configuration could invoke executables through gpg.program, diff.external, textconv or core.fsmonitor. It also fixes a Windows .gitignore crash and several CLI output bugs.

## Why it matters

Repository-inspection and context-packaging tools can process untrusted code, so Git configuration isolation is a direct boundary for coding-agent workflows.

## Related coverage

- [Docker Agent adds background-agent coordination and a shared WebAssembly runtime](./2026-09-22-software-engineering-web-development-01-docker-agent-adds-background-agent-coordination-and-a-shared-webassembly.md)
- [WordPress Studio adds persistent design context to its website-building agent](./2026-09-22-software-engineering-web-development-02-wordpress-studio-adds-persistent-design-context-to-its-website-building-.md)
- [NestJS repairs microservice connection and tracing edge cases](./2026-09-22-software-engineering-web-development-04-nestjs-repairs-microservice-connection-and-tracing-edge-cases.md)

## Sources

- [Repomix v1.18.1](https://github.com/yamadashy/repomix/releases/tag/v1.18.1)
- [Repomix security advisory](https://github.com/yamadashy/repomix/security/advisories/GHSA-4p5g-gh74-q524)
