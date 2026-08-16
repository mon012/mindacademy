import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/index.json' }),
  schema: z.object({
    route: z.string().startsWith('/').endsWith('/').or(z.literal('/')),
    title: z.string().min(1),
    description: z.string().default(''),
    canonical: z.string().optional(),
    bodyClass: z.string().default(''),
    /** Raw JSON-LD strings carried over from WordPress, used to recover dates and hero images. */
    jsonLd: z.array(z.string()).default([]),
    kind: z.enum(['standard-page', 'article-page']),
    content: z.string().default(''),
  }),
});

export const collections = { pages };
