import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Articles live in src/content/articles/*.md. The file name is the URL slug.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['what-yoga-is', 'beyond-the-mat', 'lost-in-translation', 'the-texts', 'stories', 'himalayan-roots']),
    dev: z.string().optional(),   // headline Sanskrit term in Devanagari
    iast: z.string().optional(),  // its transliteration
    published: z.coerce.date(),
    updated: z.coerce.date(),
    order: z.number().default(100), // lower shows first within a section
    startHere: z.boolean().default(false),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().optional() })).default([]),
  }),
});

export const collections = { articles };
