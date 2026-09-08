---
type: Daily Brief
title: "Software Engineering & Web Development Brief — 9 September 2026"
description: "AI-driven changes to how software and web products are built, tested, secured and operated."
date: 2026-09-09
readingMinutes: 5
categories: ["Software engineering & web development"]
tags: ["mcp","python","oauth","http","security","coding-agents","memory","vscode","context","webassembly","browser","onnx"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/modelcontextprotocol/python-sdk/releases/tag/v2.2.0"
    title: "Release v2.2.0"
    author: "Model Context Protocol"
  - id: source-2
    resource: "https://pypi.org/project/mcp/2.2.0/"
    title: "mcp 2.2.0"
    author: "Model Context Protocol"
  - id: source-3
    resource: "https://github.com/vshulcz/deja-vu/releases/tag/v0.19.4"
    title: "Release v0.19.4"
    author: "vshulcz"
  - id: source-4
    resource: "https://github.com/ultralytics/inference/releases/tag/v0.0.42"
    title: "Release 0.0.42"
    author: "Ultralytics"
  - id: source-5
    resource: "https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.7"
    title: "Hermes Agent v0.21.1"
    author: "NousResearch"
  - id: source-6
    resource: "https://github.com/simonw/llm/releases/tag/0.35"
    title: "Release 0.35"
    author: "Simon Willison"
  - id: source-7
    resource: "https://simonwillison.net/2026/Sep/7/llm/"
    title: "Release: llm 0.35"
    author: "Simon Willison"
  - id: source-8
    resource: "https://github.com/pydantic/pydantic-ai/releases/tag/v2.41.0"
    title: "Release v2.41.0"
    author: "Pydantic"
  - id: source-9
    resource: "https://pypi.org/project/pydantic-ai/2.41.0/"
    title: "pydantic-ai 2.41.0"
    author: "Pydantic"
  - id: source-10
    resource: "https://github.com/oras-project/oras/releases/tag/v1.3.0"
    title: "Release v1.3.0"
    author: "ORAS Project"
  - id: source-11
    resource: "https://github.com/n8n-io/n8n/releases/tag/n8n@2.39.0"
    title: "n8n 2.39.0"
    author: "n8n"
  - id: source-12
    resource: "https://github.com/actions/runner-images/releases"
    title: "actions/runner-images releases"
    author: "GitHub Actions"
  - id: source-13
    resource: "https://www.prnewswire.com/news-releases/fimo-launches-autonomous-websites-making-ai-code-editable-and-self-improving-302871742.html"
    title: "Fimo launches autonomous websites, making AI code editable and self-improving"
    author: "Fimo"
generated: { by: "codex/gpt-5.6-sol", at: "2026-09-08T22:10:32.671Z" }
verified: { by: "machine:auto-review/codex/gpt-5.6-luna", at: "2026-09-08T22:15:29.061Z" }
status: stable
stale_after: 2026-09-09
news: ["2026-09-09-software-engineering-web-development-01-mcp-python-sdk-2-2-0-tightens-streamable-http-and-oauth-defaults","2026-09-09-software-engineering-web-development-02-deja-vu-0-19-4-gives-multiple-coding-agents-shared-project-memory","2026-09-09-software-engineering-web-development-03-ultralytics-inference-0-0-42-improves-browser-and-webassembly-inference","2026-09-09-software-engineering-web-development-04-hermes-agent-0-21-1-rolls-up-major-agent-runtime-and-mcp-changes","2026-09-09-software-engineering-web-development-05-llm-0-35-adds-gpt-6-astra-access-to-simon-willison-s-cli","2026-09-09-software-engineering-web-development-06-pydantic-ai-2-41-0-adds-chatgpt-and-codex-subscription-authentication","2026-09-09-software-engineering-web-development-07-oras-cli-1-3-0-adds-oci-1-1-1-support-and-portable-registry-backup","2026-09-09-software-engineering-web-development-08-n8n-2-39-0-expands-agent-workflow-controls-and-observability","2026-09-09-software-engineering-web-development-09-github-actions-previews-ubuntu-26-04-runner-images","2026-09-09-software-engineering-web-development-10-fimo-launches-autonomous-websites-around-coding-agent-output"]
---

## The day in Software Engineering & Web Development

The clearest signal today was not a new coding model but the infrastructure forming around agentic development. MCP’s Python SDK tightened network and authentication defaults; n8n added controls for tracing, concurrency and tool compatibility; and Déjà Vu extended shared project memory across 23 agent harnesses. Together, these releases treat agents less like isolated chat sessions and more like long-running software components with state, permissions and operational limits.

At the edges, developer workflows continued to broaden. Pydantic AI and Simon Willison’s `llm` opened new routes to OpenAI models, browser inference became more dependable, and supply-chain and CI tooling prepared for new deployment targets. Fimo’s launch pushed the argument further: coding agents may eventually maintain websites after launch, not merely generate their initial code. That proposition remains much less substantiated than the underlying infrastructure improvements.

## The deeper pattern

Agent development is acquiring a control plane.

The most consequential release is arguably [MCP Python SDK 2.2.0](https://github.com/modelcontextprotocol/python-sdk/releases/tag/v2.2.0). MCP clients now follow HTTP redirects only within the endpoint’s origin, with a limited allowance for an HTTP-to-HTTPS upgrade on the same host. Legacy stateful Streamable HTTP sessions that are idle for 30 minutes are closed by default, and servers accept no more than 10,000 simultaneous sessions unless configured otherwise. OAuth discovery also validates the authorisation server’s issuer more consistently, while new settings can check that a token was issued for the intended resource server.

These defaults reduce several avoidable risks: redirecting authenticated traffic to another origin, retaining abandoned sessions indefinitely and accepting poorly scoped credentials. They also turn implicit operational assumptions into migration work. Some legacy clients will encounter a 404 when attempting to reuse an expired session, while excess sessions receive a 503. Clients that keep the SDK’s GET stream open, stateless servers and connections using the newer protocol revision are not affected. Operators should therefore test actual connection behaviour rather than simply increasing limits.

[n8n 2.39.0](https://github.com/n8n-io/n8n/releases/tag/n8n@2.39.0) approaches the same problem one layer higher. Its release notes include OTLP-over-gRPC tracing, optional concurrency limits for AI runs, workflow-version and source-control APIs, and dependency tracking for tools used by agent workflows. Publishing can now be rejected when an agent refers to an unpublished workflow tool, and missing or incompatible tools are handled more defensively. Existing credentials can also be used through its MCP registry. These are production-shaped features: inventory, telemetry, capacity control and validation before execution. The important qualification is that GitHub currently labels 2.39.0 a **pre-release**, so this is evidence of direction rather than a settled production baseline.

State is becoming similarly portable. [Déjà Vu 0.19.4](https://github.com/vshulcz/deja-vu/releases/tag/v0.19.4) says it now integrates with 23 agent harnesses, adding VS Code Copilot Chat, Amp and Prime Agent while feeding other tools project digests, prompt-specific recall and context associated with failed commands. Several integrations deliberately forget discarded context after compaction. This begins to separate project memory from the assistant that created it: a developer can change harnesses without necessarily abandoning prior decisions and failure history.

That portability creates a second control problem. Shared memory can propagate a useful architectural decision, but it can also propagate stale assumptions, secrets or malicious instructions across agents. Déjà Vu’s visible attribution of recalled material by date and session is helpful, yet teams will eventually need retention policies, provenance inspection and mechanisms for quarantining untrusted memories. The release demonstrates integration breadth; it does not establish that retrieved context is consistently relevant or safe.

Access to models is also moving out of provider-specific interfaces. [Pydantic AI 2.41.0](https://github.com/pydantic/pydantic-ai/releases/tag/v2.41.0) adds an `openai-codex` provider that authenticates through ChatGPT or Codex subscriptions, as well as a direct image-generation API. Separately, [`llm` 0.35](https://github.com/simonw/llm/releases/tag/0.35) adds GPT-6 Astra to its OpenAI model catalogue. These changes matter because frameworks and command-line tools make models available to scripts, evaluations and repeatable local workflows. Neither release, however, supplies evidence about Astra’s coding quality or establishes that subscription-backed credentials are appropriate for unattended production workloads.

The supporting platform changes reinforce this shift from demos to operations. [ORAS CLI 1.3.0](https://github.com/oras-project/oras/releases/tag/v1.3.0) implements OCI Distribution Specification 1.1.1 and introduces experimental commands for backing up registry artefacts into local OCI layouts and restoring them elsewhere. This could improve recovery and portability for containers, models and other OCI-packaged assets, but “experimental” is the operative word. Meanwhile, [GitHub’s runner-image releases](https://github.com/actions/runner-images/releases) make Ubuntu 26.04 and its Arm64 counterpart available as public previews, add PostgreSQL to Ubuntu Arm64 images and announce the approaching deprecation of Ubuntu 22-based runners. CI teams now have a window in which to test operating-system, architecture and preinstalled-tool changes before migration becomes compulsory.

On the web client, [Ultralytics Inference 0.0.42](https://github.com/ultralytics/inference/releases/tag/v0.0.42) reduces unnecessary XNNPACK thread contention and fixes browser parsing that could mistake pose keypoint names for object-class labels. It is a small release, but representative: local browser inference succeeds through accumulated runtime, metadata and cross-platform fixes, not model announcements alone.

Finally, [Fimo’s launch announcement](https://www.prnewswire.com/news-releases/fimo-launches-autonomous-websites-making-ai-code-editable-and-self-improving-302871742.html) proposes that agents continuously refresh content, translation, schema and search optimisation while submitting every change through branches, pull requests, isolated execution and human review. That workflow design is plausible and aligns with the day’s broader pattern. Its performance and business benefits remain vendor claims, unsupported here by independent deployment data.

## What to watch next

1. **n8n’s path to stability:** whether 2.39.0 graduates from pre-release without withdrawing or materially redesigning its agent concurrency, tracing, dependency-validation and source-control features.

2. **MCP upgrade failures:** whether downstream projects report measurable increases in expired-session 404s, capacity-related 503s or OAuth issuer errors—and whether maintainers respond with configuration guidance rather than relaxing the safer defaults.

3. **Evidence for autonomous web operations:** whether Fimo publishes reproducible demonstrations or customer data showing that its agents can maintain real production sites through review-gated pull requests without increasing regressions, low-quality content or security exposure.

## Editorial note

Most evidence in this edition comes from project release notes, which establish that code and interfaces were published but rarely demonstrate reliability under production load. Hermes Agent’s [0.21.1 roll-up](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.7) is the largest example: it reports 5,139 non-merge commits, 4,364 changed files and 632 merged pull requests, while deferring curated feature documentation to version 0.22.0. Its scale may be significant, but the practical upgrade risk and user-visible improvements cannot yet be assessed confidently.
