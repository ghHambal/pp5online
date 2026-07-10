import { renderLeaveMonitorWidget } from './leave-monitor.js?v=10.18.19'

function todayInputValue() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function updateClock() {
  const el = document.getElementById('leave-monitor-clock')
  if (!el) return
  el.textContent = new Date().toLocaleString('th-TH', {
    dateStyle: 'medium',
    timeStyle: 'medium'
  })
}

async function init() {
  updateClock()
  setInterval(updateClock, 1000)

  const params = new URLSearchParams(window.location.search)
  const date = params.get('date') || todayInputValue()
  const days = parseInt(params.get('days') || '14', 10)
  const view = params.get('view') === 'list' ? 'list' : 'dashboard'
  const container = document.getElementById('public-leave-monitor')
  await renderLeaveMonitorWidget(container, {
    title: '🚪 ติดตามใบอนุญาตออกนอกห้อง',
    subtitle: 'จอแสดงผลสาธารณะ อ่านอย่างเดียว รีเฟรชอัตโนมัติ',
    date,
    analyticsDays: Number.isFinite(days) ? days : 14,
    initialView: view,
    publicMode: true,
    readOnly: true,
    refreshMs: 15000
  })
}

init().catch(err => {
  const container = document.getElementById('public-leave-monitor')
  if (container) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl border border-red-100 p-6 text-sm text-red-600">
        โหลดจอติดตามออกนอกห้องไม่สำเร็จ: ${String(err?.message || err)}
      </div>
    `
  }
})
