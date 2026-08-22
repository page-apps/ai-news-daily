import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const source = z.object({
  id: z.string().optional(),
  resource: z.string().url(),
  title: z.string().optional(),
  author: z.string().optional(),
  last_modified: z.coerce.date().optional()
});

const actorEvent = z.object({ by: z.string().min(1), at: z.coerce.date() });
const status = z.enum(["draft", "stable", "deprecated"]).default("stable");
const category = z.enum([
  "Models & research",
  "Products & deployment",
  "Software engineering & web development",
  "Business & markets",
  "Infrastructure & compute",
  "Policy & governance",
  "Safety & society",
  "Science & applications",
  "Open source"
]);

const knowledge = {
  type: z.string().min(1),
  title: z.string(),
  description: z.string(),
  resource: z.string().url().optional(),
  tags: z.array(z.string().min(1)).default([]),
  categories: z.array(category).default([]),
  sources: z.array(source).default([]),
  published_at: z.coerce.date().optional(),
  pipeline: z.string().regex(/^[a-z0-9][a-z0-9-]*$/).optional(),
  generated: actorEvent.optional(),
  verified: z.union([actorEvent, z.array(actorEvent)]).optional(),
  status,
  stale_after: z.coerce.date().optional()
};

const news = defineCollection({
  loader: glob({ base: "./content/news", pattern: "**/*.md" }),
  schema: z.object({
    ...knowledge,
    date: z.coerce.date(),
    summary: z.string()
  })
});

const daily = defineCollection({
  loader: glob({ base: "./content/daily", pattern: "**/*.md" }),
  schema: z.object({
    ...knowledge,
    date: z.coerce.date(),
    readingMinutes: z.number().int().positive(),
    news: z.array(z.string()).default([])
  })
});

export const collections = { daily, news };
