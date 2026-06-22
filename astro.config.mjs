// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://savethedate.sudheim.eu',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'da'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
