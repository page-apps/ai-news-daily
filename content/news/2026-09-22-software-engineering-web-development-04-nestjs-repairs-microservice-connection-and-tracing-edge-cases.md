---
type: AI News
title: "NestJS repairs microservice connection and tracing edge cases"
description: "NestJS v12.0.4 improves Kafka, RabbitMQ, NATS, gRPC and request-response reliability."
date: 2026-09-22
published_at: "2026-09-21T08:03:00.000Z"
summary: "The release fixes Kafka retry after failed connection and fails pending RabbitMQ and NATS requests when clients close. It also repairs gRPC namespace handling, exactly-once request-response spans, handler rejection behaviour and Express multer limit merging."
categories: ["Software engineering & web development"]
tags: ["nestjs","microservices","kafka","grpc","observability"]
pipeline: "software-engineering-web-development"
sources:
  - id: source-1
    resource: "https://github.com/nestjs/nest/releases/tag/v12.0.4"
    title: "NestJS v12.0.4"
generated: { by: "codex/gpt-5.6-luna", at: "2026-09-21T23:06:42.779Z" }
verified: { by: "human:cmwen", at: "2026-09-22T03:48:05.281Z" }
status: stable
stale_after: 2026-09-22
---

## Summary

The release fixes Kafka retry after failed connection and fails pending RabbitMQ and NATS requests when clients close. It also repairs gRPC namespace handling, exactly-once request-response spans, handler rejection behaviour and Express multer limit merging.

## Why it matters

These fixes target failure modes that can otherwise create stuck requests, misleading traces or unreliable production messaging services.

## Related coverage

- [Docker Agent adds background-agent coordination and a shared WebAssembly runtime](./2026-09-22-software-engineering-web-development-01-docker-agent-adds-background-agent-coordination-and-a-shared-webassembly.md)
- [WordPress Studio adds persistent design context to its website-building agent](./2026-09-22-software-engineering-web-development-02-wordpress-studio-adds-persistent-design-context-to-its-website-building-.md)
- [Repomix disables repository-local Git configuration after command-execution flaw](./2026-09-22-software-engineering-web-development-03-repomix-disables-repository-local-git-configuration-after-command-execut.md)

## Sources

- [NestJS v12.0.4](https://github.com/nestjs/nest/releases/tag/v12.0.4)
