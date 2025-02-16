import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import createHtmlConfig from 'vite-plugin-html-config'; // Default import!

export default defineConfig({
  plugins: [
    react(),
    ViteMinifyPlugin(), // This *should* handle HTML minification
    createHtmlConfig({
      // minify: true,  // REMOVE THIS LINE
    }),
    visualizer({ open: false }),
    viteCompression(),
  ],
  css: {
    postcss: './postcss.config.cjs',
  },
  build: {
    rollupOptions: {},
    outDir: 'dist',
  },
  base: 'https://aitrendsnow.github.io/aitrends.now/',
});