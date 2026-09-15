---
type: AI News
title: "Grafana 13.2.2 ships a coordinated security release"
description: "Grafana 13.2.2 fixes three disclosed CVEs alongside dashboard-import and provisioning defects."
date: 2026-09-16
published_at: "2026-09-15T12:42:07.000Z"
summary: "The release fixes CVE-2026-15815, CVE-2026-76154 and CVE-2026-79656. It also preserves query-variable refresh settings during v2 dashboard import and fixes a folder-rename UID collision during full provisioning synchronisation."
categories: ["Software engineering & web development"]
tags: ["grafana","observability","security","cves","monitoring"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/grafana/grafana/releases/tag/v13.2.2"
    title: "Grafana 13.2.2"
  - id: source-2
    resource: "https://github.com/grafana/grafana/releases.atom"
    title: "Grafana release feed"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-15T15:20:38.314Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-15T15:23:54.429Z" }
status: stable
stale_after: 2026-09-16
---

## Summary

The release fixes CVE-2026-15815, CVE-2026-76154 and CVE-2026-79656. It also preserves query-variable refresh settings during v2 dashboard import and fixes a folder-rename UID collision during full provisioning synchronisation.

## Why it matters

Grafana operators need to apply the coordinated release to address vulnerabilities in a widely deployed observability platform.

## Related coverage

- [Claude Code 2.1.271 adds remote fast mode and tighter agent controls](./2026-09-16-software-engineering-web-development-04-claude-code-2-1-271-adds-remote-fast-mode-and-tighter-agent-controls.md)
- [Cline SDK 0.0.83 introduces hub-managed Agent Plugins](./2026-09-16-software-engineering-web-development-06-cline-sdk-0-0-83-introduces-hub-managed-agent-plugins.md)
- [pnpm 12.4.2 patches executable-shim and GitHub Actions security issues](./2026-09-16-software-engineering-web-development-08-pnpm-12-4-2-patches-executable-shim-and-github-actions-security-issues.md)

## Sources

- [Grafana 13.2.2](https://github.com/grafana/grafana/releases/tag/v13.2.2)
- [Grafana release feed](https://github.com/grafana/grafana/releases.atom)
