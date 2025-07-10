import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/', // Fixed: Use root path for GitHub Pages main site deployment
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})