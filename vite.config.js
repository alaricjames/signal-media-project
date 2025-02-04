import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    historyApiFallback: true
  },
  base: '/',
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
