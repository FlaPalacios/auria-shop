import { defineConfig } from 'astro/config';

export default defineConfig({
  // shortcut: URL de la vista previa de Cloudflare Pages; cambiar por el dominio propio cuando Edith lo defina.
  site: 'https://auria-shop.pages.dev',
  i18n: { defaultLocale: 'es', locales: ['es', 'en'] },
});
