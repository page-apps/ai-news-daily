---
type: AI News
title: "curl 8.22.0 ships security fixes and experimental HTTP Message Signatures"
description: "curl 8.22.0 brings security fixes, hundreds of bug fixes and new protocol and authentication behaviour."
date: 2026-09-03
published_at: "2026-09-02T05:59:00.000Z"
summary: "curl 8.22.0 includes security fixes across curl and libcurl, alongside 302 bug fixes and 525 commits. It adds experimental RFC 9421 HTTP Message Signatures, changes SPNEGO NTLM fallback behaviour and drops TLS-SRP, among other platform and protocol updates."
categories: ["Software engineering & web development"]
tags: ["curl","libcurl","security","http","authentication","developer-infrastructure"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/curl/curl/releases/tag/curl-8_22_0"
    title: "Release 8.22.0"
    author: "Daniel Stenberg"
  - id: source-2
    resource: "https://daniel.haxx.se/blog/2026/09/02/"
    title: "curl and libcurl 8.22.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-02T15:43:48.713Z" }
verified: { by: "human:cmwen", at: "2026-09-02T23:08:27.999Z" }
status: stable
stale_after: 2026-09-03
---

## Summary

curl 8.22.0 includes security fixes across curl and libcurl, alongside 302 bug fixes and 525 commits. It adds experimental RFC 9421 HTTP Message Signatures, changes SPNEGO NTLM fallback behaviour and drops TLS-SRP, among other platform and protocol updates.

## Why it matters

curl sits beneath countless build, deployment and service integrations, so security and authentication changes can propagate far beyond direct curl users. Teams should review the release notes for SPNEGO, TLS-SRP and signature-related compatibility before broad upgrades.

## Related coverage

- [JFrog adds AgentSecOps controls across the agentic software supply chain](./2026-09-03-software-engineering-web-development-01-jfrog-adds-agentsecops-controls-across-the-agentic-software-supply-chain.md)
- [CrowdStrike introduces Falcon Guardian for runtime control of AI agents](./2026-09-03-software-engineering-web-development-02-crowdstrike-introduces-falcon-guardian-for-runtime-control-of-ai-agents.md)
- [F5 and MuleSoft put inline AI guardrails inside Agent Fabric](./2026-09-03-software-engineering-web-development-03-f5-and-mulesoft-put-inline-ai-guardrails-inside-agent-fabric.md)

## Sources

- [Release 8.22.0](https://github.com/curl/curl/releases/tag/curl-8_22_0)
- [curl and libcurl 8.22.0](https://daniel.haxx.se/blog/2026/09/02/)
