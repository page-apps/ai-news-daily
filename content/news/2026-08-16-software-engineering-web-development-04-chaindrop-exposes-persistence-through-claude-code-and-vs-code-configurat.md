---
type: AI News
title: "ChainDrop exposes persistence through Claude Code and VS Code configuration"
description: "New reporting on the ChainDrop npm worm shows a supply-chain attack path that extends from package installation into developer-agent configuration."
date: 2026-08-16
summary: "Microsoft’s analysis describes more than 400 affected packages, a malicious preinstall payload, credential theft from developer and CI environments, and automated republishing through stolen npm access. The malware can also use GitHub credentials to inject Claude and Visual Studio Code configuration files into repositories, creating another path between compromised projects and developers."
categories: ["Software engineering & web development"]
tags: ["npm","supply chain","malware","developer security","ci cd","coding agents"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://www.theregister.com/security/2026/08/15/chaindrop-worm-crawls-into-npm-supply-chain-evades-standard-defenses/5287958"
    title: "ChainDrop worm crawls into npm supply chain"
  - id: source-2
    resource: "https://www.microsoft.com/en-us/security/blog/2026/08/04/chaindrop-supply-chain-compromise-anatomy-self-propagating-worm/"
    title: "ChainDrop supply chain compromise: Anatomy of a self-propagating worm"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-16T00:40:46.516Z" }
verified: { by: "human:cmwen", at: "2026-08-16T21:05:51.880Z" }
status: stable
stale_after: 2026-08-16
---

## Summary

Microsoft’s analysis describes more than 400 affected packages, a malicious preinstall payload, credential theft from developer and CI environments, and automated republishing through stolen npm access. The malware can also use GitHub credentials to inject Claude and Visual Studio Code configuration files into repositories, creating another path between compromised projects and developers.

## Why it matters

Agent and editor configuration files now belong in supply-chain threat models alongside lockfiles, build scripts and CI workflows.

## Related coverage

- [npm moves risky installation behaviour behind explicit approval](./2026-08-16-software-engineering-web-development-03-npm-moves-risky-installation-behaviour-behind-explicit-approval.md)
- [DeepSeek releases a plugin-oriented agent harness](./2026-08-16-software-engineering-web-development-02-deepseek-releases-a-plugin-oriented-agent-harness.md)
- [GraphQL tooling converges on LLM-generated mocks without a standard](./2026-08-16-software-engineering-web-development-05-graphql-tooling-converges-on-llm-generated-mocks-without-a-standard.md)

## Sources

- [ChainDrop worm crawls into npm supply chain](https://www.theregister.com/security/2026/08/15/chaindrop-worm-crawls-into-npm-supply-chain-evades-standard-defenses/5287958)
- [ChainDrop supply chain compromise: Anatomy of a self-propagating worm](https://www.microsoft.com/en-us/security/blog/2026/08/04/chaindrop-supply-chain-compromise-anatomy-self-propagating-worm/)
