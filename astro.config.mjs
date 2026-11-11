import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://auria.example',
  i18n: { defaultLocale: 'es', locales: ['es', 'en'] },
});
