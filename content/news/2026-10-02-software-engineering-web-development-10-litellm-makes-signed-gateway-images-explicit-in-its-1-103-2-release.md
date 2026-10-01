---
type: AI News
title: "LiteLLM makes signed gateway images explicit in its 1.103.2 release"
description: "LiteLLM 1.103.2 documents cosign verification for its Docker images while delivering proxy and Anthropic-provider fixes."
date: 2026-10-02
published_at: "2026-10-01T06:37:31.000Z"
summary: "The release provides a pinned public key and verification commands for checking LiteLLM container signatures before deployment. It also backports several proxy and Anthropic integration fixes into the stable 1.103 branch."
categories: ["Software engineering & web development"]
tags: ["litellm","ai-gateway","containers","cosign","supply-chain","observability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/BerriAI/litellm/releases/tag/v1.103.2"
    title: "LiteLLM v1.103.2"
generated: { by: "codex/gpt-5.6-luna", at: "2026-10-01T15:01:15.402Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-10-01T15:11:51.599Z" }
status: stable
stale_after: 2026-10-02
---

## Summary

The release provides a pinned public key and verification commands for checking LiteLLM container signatures before deployment. It also backports several proxy and Anthropic integration fixes into the stable 1.103 branch.

## Why it matters

Signed gateway images reduce the risk of deploying tampered AI-infrastructure artifacts, while provider fixes affect applications using LiteLLM as a model-routing layer.

## Related coverage

- [OpenCode hardens macOS agent binaries and session identity](./2026-10-02-software-engineering-web-development-08-opencode-hardens-macos-agent-binaries-and-session-identity.md)
- [pnpm patches a dependency security advisory and store-corruption failures](./2026-10-02-software-engineering-web-development-09-pnpm-patches-a-dependency-security-advisory-and-store-corruption-failure.md)
- [VS Code 1.140 makes multi-agent development a first-class workflow](./2026-10-02-software-engineering-web-development-01-vs-code-1-140-makes-multi-agent-development-a-first-class-workflow.md)

## Sources

- [LiteLLM v1.103.2](https://github.com/BerriAI/litellm/releases/tag/v1.103.2)
