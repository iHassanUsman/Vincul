import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// GitHub Pages project site: set VITE_BASE=/Vincul/ in CI
export default defineConfig({
  plugins: [vue()],
  base: process.env.VITE_BASE || '/',
})
