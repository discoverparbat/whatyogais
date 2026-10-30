import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://himalayanyogaroots.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
