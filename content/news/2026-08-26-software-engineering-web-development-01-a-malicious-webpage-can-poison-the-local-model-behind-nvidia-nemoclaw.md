---
type: AI News
title: "A malicious webpage can poison the local model behind NVIDIA NemoClaw"
description: "Oasis Security disclosed a browser-to-localhost attack that can reach an unauthenticated Ollama server used by NemoClaw and alter the model serving a developer's agent."
date: 2026-08-26
published_at: "2026-08-25T13:00:00.000Z"
summary: "The researchers said a malicious webpage can use DNS rebinding to reach the local Ollama API without credentials. They reported that an attacker can change the model's chat template, allowing hidden instructions to persist across later agent conversations."
categories: ["Software engineering & web development"]
tags: ["nvidia","nemoclaw","ollama","dns rebinding","model poisoning","ai agents"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://siliconangle.com/2026/08/25/nvidia-nemoclaw-flaw-let-attackers-poison-the-model-behind-a-developers-ai-agent/"
    title: "Nvidia NemoClaw flaw let attackers poison local AI models"
  - id: source-2
    resource: "https://thehackernews.com/2026/08/a-malicious-webpage-could-poison-your.html"
    title: "A Malicious Webpage Could Poison Your Local AI Model Behind NVIDIA NemoClaw"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-25T21:00:34.482Z" }
verified: { by: "human:cmwen", at: "2026-08-26T00:20:02.220Z" }
status: stable
stale_after: 2026-08-26
---

## Summary

The researchers said a malicious webpage can use DNS rebinding to reach the local Ollama API without credentials. They reported that an attacker can change the model's chat template, allowing hidden instructions to persist across later agent conversations.

## Why it matters

The finding breaks the assumption that a browser page and a local agent backend are separate trust domains. It makes browser exposure, local model integrity and agent sandboxing distinct controls for developer tooling.

## Related coverage

- [TRACE proposes a portable evidence standard for AI-agent runtimes](./2026-08-26-software-engineering-web-development-02-trace-proposes-a-portable-evidence-standard-for-ai-agent-runtimes.md)
- [AC2 launches an open protocol for user-approved agent actions](./2026-08-26-software-engineering-web-development-03-ac2-launches-an-open-protocol-for-user-approved-agent-actions.md)
- [Nucleus Helix combines vulnerability intelligence with agentic exposure workflows](./2026-08-26-software-engineering-web-development-04-nucleus-helix-combines-vulnerability-intelligence-with-agentic-exposure-.md)

## Sources

- [Nvidia NemoClaw flaw let attackers poison local AI models](https://siliconangle.com/2026/08/25/nvidia-nemoclaw-flaw-let-attackers-poison-the-model-behind-a-developers-ai-agent/)
- [A Malicious Webpage Could Poison Your Local AI Model Behind NVIDIA NemoClaw](https://thehackernews.com/2026/08/a-malicious-webpage-could-poison-your.html)
