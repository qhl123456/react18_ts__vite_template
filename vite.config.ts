import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   postcss: {
  //     plugins: [require('tailwindcss'), require('autoprefixer')]
  //   }
  // },
  base: '/',
  server: {
    cors: true,
    host: '0.0.0.0',
    port: 8005,
    strictPort: true
  }
})
