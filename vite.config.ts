import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
//import createHtmlConfig from 'vite-plugin-html-config'; // No longer needed
//import Critters from 'critters'; // No longer needed.

export default defineConfig({
  plugins: [
    react(),
    ViteMinifyPlugin(), // Handles HTML, CSS, and JS minification
    // No critters plugin needed here
    visualizer({ open: false }),
    viteCompression(),
  ],
  css: {
    postcss: './postcss.config.cjs',
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || 'default-asset-name';
          let extType = fileName.split('.').at(-1);

          if (!extType) {
            extType = 'unknown';
          }

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    outDir: 'dist',
  },
  base: 'https://aitrendsnow.github.io/aitrends.now/',
});