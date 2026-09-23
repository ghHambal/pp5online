import { renderLeaveMonitorWidget, destroyLeaveMonitorWidget } from './leave-monitor.js?v=10.18.25'
import { watchWorkload } from './workload-scheduler.js'

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

let clockTimer = null
let monitorOptions = null

function renderPaused(text = 'อยู่นอกช่วงใช้งาน Monitor — ระบบบันทึกใบอนุญาตยังทำงานตามปกติ') {
  const container = document.getElementById('public-leave-monitor')
  if (!container) return
  destroyLeaveMonitorWidget(container)
  container.innerHTML = `<div class="h-full min-h-[320px] flex items-center justify-center p-8 text-center text-slate-500"><div><div class="text-4xl mb-3">⏸️</div><p class="font-bold">${text}</p><p class="text-xs mt-2">จะเปิด Live Monitor ตามตารางที่ผู้ดูแลกำหนด</p></div></div>`
}

async function startLeaveWorkload() {
  const container = document.getElementById('public-leave-monitor')
  if (!container || !monitorOptions) return
  await renderLeaveMonitorWidget(container, monitorOptions)
  if (!clockTimer) clockTimer = setInterval(updateClock, 1000)
}

async function stopLeaveWorkload() {
  const container = document.getElementById('public-leave-monitor')
  destroyLeaveMonitorWidget(container)
  if (clockTimer) { clearInterval(clockTimer); clockTimer = null }
  renderPaused()
}

async function init() {
  updateClock()

  const params = new URLSearchParams(window.location.search)
  const date = params.get('date') || todayInputValue()
  const days = parseInt(params.get('days') || '14', 10)
  const view = params.get('view') === 'list' ? 'list' : 'dashboard'
  monitorOptions = {
    title: '🚪 ติดตามใบอนุญาตออกนอกห้อง',
    subtitle: 'จอแสดงผลสาธารณะ อ่านอย่างเดียว รีเฟรชอัตโนมัติ',
    date,
    analyticsDays: Number.isFinite(days) ? days : 14,
    initialView: view,
    publicMode: true,
    readOnly: true,
    refreshMs: 15000
  }
  await watchWorkload('leave_monitor', {
    start: startLeaveWorkload,
    stop: stopLeaveWorkload,
    onStateChange: state => { if (!state.active && state.status === 'UNKNOWN') renderPaused('หยุดชั่วคราว: ไม่สามารถอ่านตาราง Monitor ได้') },
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
