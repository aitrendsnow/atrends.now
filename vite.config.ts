import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { createHtmlPlugin } from 'vite-plugin-html'; // ✅ Correct way to inline critical CSS

export default defineConfig({
  plugins: [
    react(),
    ViteMinifyPlugin(),
    createHtmlPlugin({
      minify: true, // Minifies HTML
      inject: {
        data: {
          criticalCSS: `<style>
            /* Manually include critical CSS here if necessary */
          </style>`,
        },
      },
    }),
  ],
  css: {
    postcss: {},
  },
  build: {
    rollupOptions: {},
  },
  base: 'https://aitrendsnow.github.io/aitrends.now/',
});