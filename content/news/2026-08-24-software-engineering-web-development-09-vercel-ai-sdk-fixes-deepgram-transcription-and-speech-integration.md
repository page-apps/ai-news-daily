---
type: AI News
title: "Vercel AI SDK fixes Deepgram transcription and speech integration"
description: "The Vercel AI SDK Deepgram provider v3.1.0 stops dropping transcription options and improves speech metadata, speed handling, and error parsing."
date: 2026-08-24
published_at: "2026-08-23T01:45:00.000Z"
summary: "Options including keyterms, paragraphs, intents, sentiment, and replacement are now sent to Deepgram instead of being silently ignored, while diarisation is now opt-in rather than enabled by default. The provider also composes voice identifiers, passes speech speed, exposes response metadata, and parses Deepgram's structured error responses."
categories: ["Software engineering & web development"]
tags: ["vercel","ai sdk","deepgram","speech","transcription","typescript"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/vercel/ai/releases/tag/%40ai-sdk%2Fdeepgram%403.1.0"
    title: "@ai-sdk/deepgram 3.1.0"
generated: { by: "codex/gpt-5.6-luna", at: "2026-08-23T21:07:59.610Z" }
verified: { by: "human:cmwen", at: "2026-08-23T21:35:25.197Z" }
status: stable
stale_after: 2026-08-24
---

## Summary

Options including keyterms, paragraphs, intents, sentiment, and replacement are now sent to Deepgram instead of being silently ignored, while diarisation is now opt-in rather than enabled by default. The provider also composes voice identifiers, passes speech speed, exposes response metadata, and parses Deepgram's structured error responses.

## Why it matters

The update prevents silent request mismatches in production voice applications and makes billing, diagnostics, and speaker-diarisation behaviour more explicit.

## Related coverage

- [Cline Desktop v0.0.16 makes Hub restarts recoverable](./2026-08-24-software-engineering-web-development-01-cline-desktop-v0-0-16-makes-hub-restarts-recoverable.md)
- [Cline SDK v0.0.78 adds durable Hub event replay](./2026-08-24-software-engineering-web-development-02-cline-sdk-v0-0-78-adds-durable-hub-event-replay.md)
- [Cline CLI v3.0.57 adds drain-aware Hub upgrades](./2026-08-24-software-engineering-web-development-03-cline-cli-v3-0-57-adds-drain-aware-hub-upgrades.md)

## Sources

- [@ai-sdk/deepgram 3.1.0](https://github.com/vercel/ai/releases/tag/%40ai-sdk%2Fdeepgram%403.1.0)
