import { defineConfig } from 'astro/config';

export default defineConfig({
  // shortcut: URL del Worker de vista previa; cambiar por el dominio propio cuando Edith lo defina.
  site: 'https://auria-shop.flavioalejandro99.workers.dev',
  i18n: { defaultLocale: 'es', locales: ['es', 'en'] },
});
