export const LEAVE_OVERDUE_DISPLAY_LIMIT_MS = 10 * 60 * 1000

function _formatTimer(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000))
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export function formatLeaveCountdown(startValue, durationMinutes, now = new Date()) {
  const start = new Date(startValue)
  const durationMs = Number(durationMinutes || 0) * 60 * 1000
  const end = new Date(start.getTime() + durationMs)
  const diffMs = end.getTime() - now.getTime()

  if (!startValue || Number.isNaN(start.getTime()) || durationMs <= 0) {
    return {
      text: 'ไม่พบเวลา',
      timerText: '--:--',
      label: 'สถานะ:',
      isOverdue: false,
      isBeyondLimit: false
    }
  }

  if (diffMs >= 0) {
    const timeText = _formatTimer(diffMs)
    return {
      text: `เหลือ ${timeText}`,
      timerText: timeText,
      label: 'เวลาที่เหลือ:',
      isOverdue: false,
      isBeyondLimit: false
    }
  }

  const overdueMs = Math.abs(diffMs)
  if (overdueMs <= LEAVE_OVERDUE_DISPLAY_LIMIT_MS) {
    const timeText = _formatTimer(overdueMs)
    return {
      text: `เกิน ${timeText}`,
      timerText: `-${timeText}`,
      label: 'เกินเวลา:',
      isOverdue: true,
      isBeyondLimit: false
    }
  }

  return {
    text: 'เกินเวลาแล้ว',
    timerText: 'ครบเวลา',
    label: 'สถานะ:',
    isOverdue: true,
    isBeyondLimit: true
  }
}
