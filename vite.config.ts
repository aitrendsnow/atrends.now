import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://aitrendsnow.github.io/atrends.now/", // ← REPLACE with your repo name
});
