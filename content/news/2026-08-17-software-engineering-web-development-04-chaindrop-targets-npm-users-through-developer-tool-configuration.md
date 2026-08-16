---
type: AI News
title: "ChainDrop targets npm users through developer-tool configuration"
description: "A new Shai-Hulud variant is reported to spread through npm tarballs and development-tool hooks."
date: 2026-08-17
summary: "The Register reports that ChainDrop poisoned 444 npm packages and can activate through configuration used by environments such as VS Code and Claude Code. The campaign is designed to harvest npm tokens, cloud credentials, and other secrets, while dependency scanning may not detect the configuration-based payload."
categories: ["Software engineering & web development"]
tags: ["npm","supply-chain","claude-code","vscode","credentials","malware"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://www.theregister.com/security/2026/08/15/chaindrop-worm-crawls-into-npm-supply-chain-evades-standard-defenses/5287958"
    title: "ChainDrop worm crawls into npm supply chain, evades standard defenses"
    author: "Joab Jackson"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-16T20:45:52.366Z" }
verified: { by: "human:cmwen", at: "2026-08-16T21:12:54.036Z" }
status: stable
stale_after: 2026-08-17
---

## Summary

The Register reports that ChainDrop poisoned 444 npm packages and can activate through configuration used by environments such as VS Code and Claude Code. The campaign is designed to harvest npm tokens, cloud credentials, and other secrets, while dependency scanning may not detect the configuration-based payload.

## Why it matters

The incident expands software supply-chain risk from package contents into the agent and editor configuration that developers routinely trust and execute.

## Related coverage

- [Claude Code users report blank reasoning blocks despite billing](./2026-08-17-software-engineering-web-development-05-claude-code-users-report-blank-reasoning-blocks-despite-billing.md)
- [Cursor officially joins SpaceX](./2026-08-17-software-engineering-web-development-01-cursor-officially-joins-spacex.md)
- [Cursor announces AIUC-1 agent-security certification](./2026-08-17-software-engineering-web-development-02-cursor-announces-aiuc-1-agent-security-certification.md)

## Sources

- [ChainDrop worm crawls into npm supply chain, evades standard defenses](https://www.theregister.com/security/2026/08/15/chaindrop-worm-crawls-into-npm-supply-chain-evades-standard-defenses/5287958)
