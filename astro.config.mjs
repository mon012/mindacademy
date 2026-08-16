import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Legacy WordPress URLs are handled by public/_redirects, which is the single
// source of truth for them. Only pages that really are built but should stay
// out of search results need listing here.
const excludedFromSitemap = new Set(['/tk/']);

/**
 * Each page carries the WordPress JSON-LD it was migrated with, which still holds
 * the real dateModified. Surfacing that as <lastmod> tells crawlers which pages
 * are worth revisiting.
 */
const lastModified = new Map();
const contentRoot = new URL('./src/content/pages', import.meta.url).pathname;
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(target);
      continue;
    }
    if (entry.name !== 'index.json') continue;
    const page = JSON.parse(readFileSync(target, 'utf8'));
    for (const raw of page.jsonLd ?? []) {
      try {
        const parsed = JSON.parse(raw);
        for (const node of parsed['@graph'] ?? [parsed]) {
          if (node.dateModified) {
            lastModified.set(page.route, new Date(node.dateModified));
            break;
          }
        }
      } catch {
        // A page without usable legacy JSON-LD simply gets no lastmod.
      }
      if (lastModified.has(page.route)) break;
    }
  }
};
walk(contentRoot);

export default defineConfig({
  site: 'https://mindacademythai.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => !excludedFromSitemap.has(new URL(page).pathname),
    serialize: (item) => {
      const stamp = lastModified.get(new URL(item.url).pathname);
      return stamp ? { ...item, lastmod: stamp.toISOString() } : item;
    },
  })],
  build: { format: 'directory' },
});
