import {
  getPendingAdvisorStudentLeaveCount,
} from './student-leave-api.js'
import {
  getPendingAdvisorStudentPasswordResetCount,
} from './student-password-reset-api.js'

const TAB_STYLES = {
  active: 'bg-indigo-600 text-white shadow-sm',
  idle: 'text-gray-600 hover:bg-white',
}
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]))

function setAdminNavActive() {
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.classList.remove('bg-indigo-800', 'text-white')
    link.classList.add('text-indigo-200')
  })
  const active = document.querySelector('[data-nav="student-requests-admin"]')
  active?.classList.remove('text-indigo-200')
  active?.classList.add('bg-indigo-800', 'text-white')
}

export async function renderAdminStudentRequests() {
  const root = document.getElementById('main-content')
  if (!root) return
  setAdminNavActive()
  root.innerHTML = `
    <section class="animate-fade space-y-5">
      <header>
        <h1 class="text-xl font-bold text-gray-800">📄 คำร้องนักเรียน</h1>
        <p class="mt-1 text-sm text-gray-500">ดูคำร้องแจ้งลาและรีเซ็ตรหัสผ่านจากทุกห้องเรียน พร้อมเปิดดูใบลาที่แนบมา การตรวจยืนยันและอนุมัติยังทำในหน้าครูที่ปรึกษา</p>
      </header>
      <nav class="grid grid-cols-2 gap-2 rounded-2xl bg-gray-100 p-1.5" aria-label="ประเภทคำร้องนักเรียน">
        <button type="button" role="tab" aria-selected="true" data-admin-request-tab="leave"
          class="rounded-xl px-3 py-3 text-sm font-bold transition ${TAB_STYLES.active}">
          📄 แจ้งลา <span data-pending-count="leave" class="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs">…</span>
        </button>
        <button type="button" role="tab" aria-selected="false" data-admin-request-tab="password"
          class="rounded-xl px-3 py-3 text-sm font-bold transition ${TAB_STYLES.idle}">
          🔐 รีเซ็ตรหัสผ่าน <span data-pending-count="password" class="ml-1 rounded-full bg-gray-200 px-2 py-0.5 text-xs">…</span>
        </button>
      </nav>
      <div id="admin-student-request-panel" role="tabpanel" class="min-h-48"></div>
    </section>`

  const panel = root.querySelector('#admin-student-request-panel')
  const tabs = [...root.querySelectorAll('[data-admin-request-tab]')]
  const showTab = async name => {
    tabs.forEach(button => {
      const selected = button.dataset.adminRequestTab === name
      button.setAttribute('aria-selected', String(selected))
      button.className = `rounded-xl px-3 py-3 text-sm font-bold transition ${selected ? TAB_STYLES.active : TAB_STYLES.idle}`
    })
    panel.innerHTML = '<div class="py-12 text-center text-gray-400">กำลังโหลดคำร้อง...</div>'
    try {
      if (name === 'leave') {
        const { renderStudentLeaveRequests } = await import('./teacher-views-student-leaves.js')
        await renderStudentLeaveRequests(null, { container: panel, readOnly: true })
      } else {
        const { renderAdvisorStudentPasswordResets } = await import('./teacher-views-student-password-resets.js')
        await renderAdvisorStudentPasswordResets(panel, { readOnly: true })
      }
    } catch (error) {
      panel.innerHTML = `<div class="rounded-2xl border border-red-100 bg-white p-5 text-sm text-red-600">เปิดคำร้องไม่สำเร็จ: ${esc(error?.message ?? 'เกิดข้อผิดพลาด')}</div>`
    }
  }

  tabs.forEach(button => button.addEventListener('click', () => showTab(button.dataset.adminRequestTab)))
  await showTab('leave')

  Promise.allSettled([
    getPendingAdvisorStudentLeaveCount(),
    getPendingAdvisorStudentPasswordResetCount(),
  ]).then(results => {
    if (!root.isConnected) return
    results.forEach((result, index) => {
      if (result.status !== 'fulfilled') return
      const name = index === 0 ? 'leave' : 'password'
      const badge = root.querySelector(`[data-pending-count="${name}"]`)
      if (badge) badge.textContent = String(result.value)
    })
  })
}
