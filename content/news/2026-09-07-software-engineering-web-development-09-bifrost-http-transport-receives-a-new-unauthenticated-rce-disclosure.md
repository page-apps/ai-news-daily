---
type: AI News
title: "Bifrost HTTP transport receives a new unauthenticated RCE disclosure"
description: "CVE-2026-86242 documents a high-impact plugin-loading flaw in Bifrost HTTP transport before 2.0.0."
date: 2026-09-07
published_at: "2026-09-06T12:17:15.583Z"
summary: "The CVE describes unauthenticated plugin-path submission through POST /api/plugins when management authentication is disabled, allowing native code execution on affected dynamically linked builds. The published static Docker image is expected to be limited to SSRF, but operators should still upgrade or enable management authentication."
categories: ["Software engineering & web development"]
tags: ["bifrost","cve","rce","ai-gateway","plugins","ssrf"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://nvd.nist.gov/vuln/detail/CVE-2026-86242"
    title: "NVD CVE-2026-86242"
  - id: source-2
    resource: "https://github.com/maximhq/bifrost/security/advisories/GHSA-2qp8-4xgm-fw6g"
    title: "Bifrost security advisory"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-06T16:20:57.540Z" }
verified: { by: "human:cmwen", at: "2026-09-06T20:26:25.834Z" }
status: stable
stale_after: 2026-09-07
---

## Summary

The CVE describes unauthenticated plugin-path submission through POST /api/plugins when management authentication is disabled, allowing native code execution on affected dynamically linked builds. The published static Docker image is expected to be limited to SSRF, but operators should still upgrade or enable management authentication.

## Why it matters

AI gateways that load native extensions combine model-serving exposure with conventional server compromise risk, making plugin administration and build configuration security-critical.

## Related coverage

- [LiteLLM 1.100.0 expands gateway integrations and security controls](./2026-09-07-software-engineering-web-development-06-litellm-1-100-0-expands-gateway-integrations-and-security-controls.md)
- [Microsoft APM 0.29.1 hardens agent package management](./2026-09-07-software-engineering-web-development-07-microsoft-apm-0-29-1-hardens-agent-package-management.md)
- [Qwen Code preview adds inspectable multi-agent workflows](./2026-09-07-software-engineering-web-development-01-qwen-code-preview-adds-inspectable-multi-agent-workflows.md)

## Sources

- [NVD CVE-2026-86242](https://nvd.nist.gov/vuln/detail/CVE-2026-86242)
- [Bifrost security advisory](https://github.com/maximhq/bifrost/security/advisories/GHSA-2qp8-4xgm-fw6g)
