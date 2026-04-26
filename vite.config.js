import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/pp5online/',
  build: {
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        teacher:   resolve(__dirname, 'teacher.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
