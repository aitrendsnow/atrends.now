import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

// Async function to load the PurgeCSS plugin
async function loadPostCssPlugins() {
  const purgecss = (await import('postcss-purgecss')).default;

  return [
    purgecss({
      content: [
        './index.html',
        './src/**/*.{ts,tsx,js,jsx,html}',
      ],
      defaultExtractor: (content: string) =>
        content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ];
}

export default defineConfig(async () => ({
  plugins: [react(), ViteMinifyPlugin()],
  css: {
    postcss: {
      plugins: await loadPostCssPlugins(),
    },
  },
  base: 'https://aitrendsnow.github.io/aitrends.now/',
}));
