import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { createHtmlPlugin } from 'vite-plugin-html';
import { visualizer } from 'rollup-plugin-visualizer';

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
    splitVendorChunkPlugin(),
    visualizer({ open: true }),
  ],
  css: {
    postcss: './postcss.config.cjs',
  },
  build: {
    rollupOptions: {},
  },
  base: 'https://aitrendsnow.github.io/aitrends.now/',
});
