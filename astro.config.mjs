import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const legacyRedirects = new Set([
  '/author/candide-mind/', '/author/duangporn-rattanaruang/', '/author/mon012/',
  '/author/mon012/page/2/', '/author/mon012/page/3/', '/blog/', '/blog/page/2/',
  '/blog/page/3/', '/page/2/', '/page/3/', '/tag/coding/', '/tag/english/',
  '/tag/math/', '/tag/math/page/2/', '/coding/',
  '/ef-%E0%B8%81%E0%B8%B8%E0%B8%8D%E0%B9%81%E0%B8%88%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D-%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3/',
  '/eng/', '/eng2/', '/pre-inter/', '/sam/', '/summer/', '/thai/', '/uncategorized/',
]);

const excludedFromSitemap = new Set(['/tk/']);

export default defineConfig({
  site: 'https://mindacademythai.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => {
      const pathname = new URL(page).pathname;
      return !legacyRedirects.has(pathname) && !excludedFromSitemap.has(pathname);
    },
  })],
  build: { format: 'directory' },
});
