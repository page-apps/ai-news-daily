export const categoryNames = ["Models & research", "Products & deployment", "Business & markets", "Infrastructure & compute", "Policy & governance", "Safety & society", "Science & applications", "Open source"] as const;
export type Category = typeof categoryNames[number];

export const categoryDescriptions: Record<Category, string> = {
  "Models & research": "Frontier models, techniques, benchmarks and fundamental research.",
  "Products & deployment": "What people can use, how it is shipped, and how it performs in practice.",
  "Business & markets": "Companies, investment, competition, partnerships and adoption.",
  "Infrastructure & compute": "Chips, clouds, energy, data centres and the systems beneath AI.",
  "Policy & governance": "Rules, institutions, standards, law and international coordination.",
  "Safety & society": "Security, alignment, labour, culture and the public consequences of AI.",
  "Science & applications": "AI used to accelerate discovery and work in specific fields.",
  "Open source": "Open models, weights, tooling, datasets and community infrastructure."
};

export function toSlug(value: string) {
  return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function trustTier(verified: unknown): "Human reviewed" | "Machine confirmed" | "Unverified" {
  const events = Array.isArray(verified) ? verified : verified ? [verified] : [];
  if (events.some((event) => typeof event === "object" && event !== null && String((event as { by?: string }).by).startsWith("human:"))) return "Human reviewed";
  return events.length ? "Machine confirmed" : "Unverified";
}
