---
type: AI News
title: "Microsoft details TerminalFix campaign that turns fake CAPTCHA prompts into reverse tunnels"
description: "Microsoft documented a ClickFix variant that uses a fake Cloudflare CAPTCHA to deliver a persistent reverse-tunnel implant into enterprise environments."
date: 2026-08-30
published_at: "2026-08-29T03:43:27.000Z"
summary: "Microsoft Threat Intelligence said TerminalFix tricks users into pasting a PowerShell command, then uses DLL sideloading, steganographic payloads, persistence and Active Directory reconnaissance. The chain ends with a Python-based encrypted WebSocket tunnel that can proxy arbitrary TCP traffic through the compromised host; Microsoft did not observe the later-stage actions in the analysed chain."
categories: ["Safety & society"]
tags: ["terminalfix","clickfix","powershell","reverse tunnel","enterprise security","malware"]
pipeline: "ai"
sources:
  - id: source-1
    resource: "https://www.microsoft.com/en-us/security/blog/2026/08/28/terminalfix-campaign-deploys-reverse-tunnel-through-multistage-intrusion/"
    title: "TerminalFix campaign deploys reverse tunnel through multistage intrusion"
    author: "Microsoft Security Research; Sagar Patil; Suriyaraj Natarajan; Parasharan Raghavan"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-29T21:10:36.684Z" }
verified: { by: "human:cmwen", at: "2026-08-30T06:15:41.461Z" }
status: stable
stale_after: 2026-08-30
---

## Summary

Microsoft Threat Intelligence said TerminalFix tricks users into pasting a PowerShell command, then uses DLL sideloading, steganographic payloads, persistence and Active Directory reconnaissance. The chain ends with a Python-based encrypted WebSocket tunnel that can proxy arbitrary TCP traffic through the compromised host; Microsoft did not observe the later-stage actions in the analysed chain.

## Why it matters

This raises the stakes of fake-CAPTCHA social engineering from commodity malware delivery to potential network pivoting, giving defenders concrete indicators and hunting guidance.

## Related coverage

- [New loss-of-control tracker records a sharp rise in AI incidents](./2026-08-30-ai-02-new-loss-of-control-tracker-records-a-sharp-rise-in-ai-incidents.md)
- [Texas pauses state funding for AI-powered Flock surveillance cameras](./2026-08-30-ai-07-texas-pauses-state-funding-for-ai-powered-flock-surveillance-cameras.md)

## Sources

- [TerminalFix campaign deploys reverse tunnel through multistage intrusion](https://www.microsoft.com/en-us/security/blog/2026/08/28/terminalfix-campaign-deploys-reverse-tunnel-through-multistage-intrusion/)
