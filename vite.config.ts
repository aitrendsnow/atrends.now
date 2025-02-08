import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    ViteMinifyPlugin(),
    createHtmlPlugin({
      minify: true,
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
    postcss: './postcss.config.js',
  },
  build: {
    rollupOptions: {},
  },
  base: 'https://aitrendsnow.github.io/aitrends.now/',
});
