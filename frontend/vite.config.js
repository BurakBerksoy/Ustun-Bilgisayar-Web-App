import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Geliştirme sırasında API proxy
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  preview: {
    port: 5000
  },
  base: '/',
  // Vite SPA uygulamaları için özel ayarlar
  publicDir: 'public',
  // SPA yönlendirmesi için
  experimental: {
    renderBuiltUrl: (filename) => {
      return `/${filename}`
    }
  }
})
