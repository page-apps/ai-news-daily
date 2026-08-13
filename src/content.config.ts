import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const daily = defineCollection({
  loader: glob({ base: "./content/daily", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    readingMinutes: z.number().int().positive(),
    topics: z.array(z.string()).default([]),
    status: z.enum(["draft", "published"]).default("published")
  })
});

export const collections = { daily };
