import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/pp5online/',
  build: {
    rollupOptions: {
      input: {
        main:          resolve(__dirname, 'index.html'),
        teacher:       resolve(__dirname, 'teacher.html'),
        dashboard:     resolve(__dirname, 'dashboard.html'),
        student:       resolve(__dirname, 'student.html'),
        studentLogin:  resolve(__dirname, 'student-login.html'),
        prayerMonitor: resolve(__dirname, 'prayer-monitor.html'),
        leaveMonitor:  resolve(__dirname, 'leave-monitor.html'),
        publicMonitor: resolve(__dirname, 'public-monitor.html'),
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
