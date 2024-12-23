// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://yuan0100.github.io/glsl-113-1/',
  base: '/glsl-113-1',
  // integrations: [mdx(), sitemap(), react()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  }
});
