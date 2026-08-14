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
        prayerDashboard: resolve(__dirname, 'prayer-dashboard.html'),
        leaveMonitor:  resolve(__dirname, 'leave-monitor.html'),
        publicMonitor: resolve(__dirname, 'public-monitor.html'),
        sports:        resolve(__dirname, 'sports.html'),
        quizExam:      resolve(__dirname, 'quiz-exam.html'),
        azizgames:     resolve(__dirname, 'azizgames.html'),
        azfutsal:      resolve(__dirname, 'azfutsal.html'),
        shirtVotePublic: resolve(__dirname, 'shirt-vote-public.html'),
        sportsAttendanceMonitor: resolve(__dirname, 'sports-attendance-monitor.html'),
        sportsDuesMonitor: resolve(__dirname, 'sports-dues-monitor.html'),
        sportsShirtMonitor: resolve(__dirname, 'sports-shirt-monitor.html'),
        staffShirtSize: resolve(__dirname, 'staff-shirt-size.html'),
        sportsFundMonitor: resolve(__dirname, 'sports-fund-monitor.html'),
        sportsCheckin: resolve(__dirname, 'sports-checkin.html'),
        studentcareInstall: resolve(__dirname, 'studentcare-install.html'),
        council:       resolve(__dirname, 'council.html'),
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
