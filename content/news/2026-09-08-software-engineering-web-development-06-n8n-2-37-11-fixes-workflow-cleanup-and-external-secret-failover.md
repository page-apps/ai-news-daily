---
type: AI News
title: "n8n 2.37.11 fixes workflow cleanup and external-secret failover"
description: "The workflow automation platform shipped reliability fixes for rejected runs and external secrets replacement."
date: 2026-09-08
published_at: "2026-09-07T12:53:00.000Z"
summary: "n8n 2.37.11 ensures running jobs are cleaned up when a workflow run rejects. It also keeps a serving external-secrets provider active when its replacement fails."
categories: ["Software engineering & web development"]
tags: ["workflow automation","reliability","secrets management","operations"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/n8n-io/n8n/releases/tag/n8n@2.37.11"
    title: "Release n8n@2.37.11"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-07T15:21:41.181Z" }
verified: { by: "human:cmwen", at: "2026-09-07T22:03:41.257Z" }
status: stable
stale_after: 2026-09-08
---

## Summary

n8n 2.37.11 ensures running jobs are cleaned up when a workflow run rejects. It also keeps a serving external-secrets provider active when its replacement fails.

## Why it matters

These fixes address failure paths that can otherwise leave automation resources running or interrupt credential delivery in production workflows.

## Related coverage

- [Microsoft APM 0.30.0 hardens agent package installation and cache lifecycle](./2026-09-08-software-engineering-web-development-01-microsoft-apm-0-30-0-hardens-agent-package-installation-and-cache-lifecy.md)
- [Qwen Code 0.23.1-preview.2 makes multi-agent sessions and workflow runs inspectable](./2026-09-08-software-engineering-web-development-02-qwen-code-0-23-1-preview-2-makes-multi-agent-sessions-and-workflow-runs-.md)
- [Midscene 1.12.4 adds scoped AI contexts and stateless UI test runs](./2026-09-08-software-engineering-web-development-03-midscene-1-12-4-adds-scoped-ai-contexts-and-stateless-ui-test-runs.md)

## Sources

- [Release n8n@2.37.11](https://github.com/n8n-io/n8n/releases/tag/n8n@2.37.11)
