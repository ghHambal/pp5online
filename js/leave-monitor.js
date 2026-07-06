import { getLeavePermissionDashboard } from './api.js'
import { formatLeaveCountdown } from './leave-time.js'

const _esc = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

function _activeOverdue(row, now = new Date()) {
  if (row.status !== 'active') return false
  const start = new Date(row.created_at)
  const end = new Date(start.getTime() + Number(row.allowed_duration || 0) * 60 * 1000)
  return end.getTime() < now.getTime()
}

function _statusKey(row, now = new Date()) {
  if (row.status === 'returned') return 'returned'
  if (row.status === 'overdue' || _activeOverdue(row, now)) return 'overdue'
  return 'active'
}

function _remainingText(row, now = new Date()) {
  if (row.status !== 'active') return row.status === 'returned' ? 'กลับแล้ว' : 'เลยเวลา'
  return formatLeaveCountdown(row.created_at, row.allowed_duration, now).text
}

function _statusBadge(row, now = new Date()) {
  const key = _statusKey(row, now)
  if (key === 'active') {
    return '<span class="px-2 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">อยู่นอกห้อง</span>'
  }
  if (key === 'overdue') {
    return '<span class="px-2 py-1 rounded-lg bg-red-50 text-red-700 text-xs font-bold border border-red-100">เกินเวลา</span>'
  }
  return '<span class="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">กลับแล้ว</span>'
}

function _normScopeText(value) {
  return String(value || '').trim().toLowerCase()
}

function _todayInputValue() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function _scopeMatchesRow(row, scope) {
  if (!scope || scope.mode === 'all') return true
  const classIds = new Set((scope.classIds || []).map(id => String(id)))
  const roomNames = new Set((scope.roomNames || []).map(_normScopeText).filter(Boolean))
  if (classIds.has(String(row.class_id))) return true
  const rowRooms = [
    row.classes?.class_name,
    row.students?.main_room
  ].map(_normScopeText).filter(Boolean)
  return rowRooms.some(room => roomNames.has(room))
}

function _timeTextClass(row, now = new Date()) {
  const key = _statusKey(row, now)
  if (key === 'active') return 'text-amber-700'
  if (key === 'overdue') return 'text-red-600'
  return 'text-gray-400'
}

function _studentCell(row) {
  const img = row.students?.image_url
  const name = row.students?.full_name || '—'
  const code = row.students?.student_code || ''
  const room = row.classes?.class_name || row.students?.main_room || '—'
  return `
    <div class="flex items-center gap-3 min-w-[250px]">
      <div class="w-11 h-14 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 flex-shrink-0 shadow-sm">
        ${img
          ? `<img src="${_esc(img)}" class="w-full h-full object-cover" />`
          : `<div class="w-full h-full flex items-center justify-center text-lg text-gray-400 bg-gray-100">👤</div>`
        }
      </div>
      <div class="min-w-0">
        <p class="font-bold text-gray-800 text-sm truncate">${_esc(name)}</p>
        <p class="text-xs text-gray-400 font-mono truncate">${_esc(code)} · ${_esc(room)}</p>
      </div>
    </div>
  `
}

function _teacherCell(row) {
  const teacher = row.teachers?.full_name || '—'
  const subject = row.classes?.master_subjects?.subject_name || '—'
  return `
    <div class="min-w-[190px]">
      <p class="font-bold text-gray-700 text-sm truncate">${_esc(teacher)}</p>
      <p class="text-xs text-gray-400 truncate">${_esc(subject)}</p>
    </div>
  `
}

export async function renderLeaveMonitorWidget(container, options = {}) {
  if (!container) return
  if (container._leaveMonitorTimer) {
    clearInterval(container._leaveMonitorTimer)
    container._leaveMonitorTimer = null
  }

  const title = options.title || '🚪 ติดตามใบอนุญาตออกนอกห้อง'
  const subtitle = options.subtitle || 'ข้อมูลรายวัน'
  const selectedDate = options.date || _todayInputValue()
  const limit = options.limit ?? null
  const scope = options.scope || null
  let filter = options.initialFilter || 'all'

  container.innerHTML = `
    <div class="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
      <div class="px-5 py-8 text-center text-sm text-gray-400">กำลังโหลดข้อมูลใบอนุญาต...</div>
    </div>
  `

  try {
    const { rows: rawRows } = await getLeavePermissionDashboard({ date: selectedDate, limit })
    const rows = (rawRows || []).filter(row => _scopeMatchesRow(row, scope))
    const returnedRows = rows.filter(r => r.status === 'returned')
    const getFilteredRows = (now) => {
      if (filter === 'active') return rows.filter(r => _statusKey(r, now) === 'active')
      if (filter === 'overdue') return rows.filter(r => _statusKey(r, now) === 'overdue')
      if (filter === 'returnedToday') return returnedRows
      return rows
    }
    const getLiveSummary = (now) => ({
      active: rows.filter(r => _statusKey(r, now) === 'active').length,
      overdue: rows.filter(r => _statusKey(r, now) === 'overdue').length,
      returnedToday: returnedRows.length,
      totalWeek: rows.length
    })
    const rowMatchesFilter = (row, now) => {
      if (filter === 'active') return _statusKey(row, now) === 'active'
      if (filter === 'overdue') return _statusKey(row, now) === 'overdue'
      if (filter === 'returnedToday') return returnedRows.some(r => String(r.id) === String(row.id))
      return true
    }
    const cardBase = 'leave-monitor-filter rounded-xl border px-3 py-2 text-left transition hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200'

    const render = () => {
      const now = new Date()
      const filtered = getFilteredRows(now)
      const summary = getLiveSummary(now)
      container.innerHTML = `
        <div class="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          <div class="px-5 py-3.5 border-b border-amber-100 bg-amber-50 flex items-center justify-between gap-3">
            <div>
              <h4 class="font-bold text-amber-900 text-sm">${_esc(title)}</h4>
              <p class="text-xs text-amber-700/70 mt-0.5">${_esc(subtitle)}</p>
              ${scope?.label ? `<p class="text-[11px] text-amber-800/70 mt-1">${_esc(scope.label)}</p>` : ''}
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-2">
              <input type="date" data-leave-date value="${_esc(selectedDate)}"
                class="text-xs font-bold text-amber-800 bg-white border border-amber-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200" />
              <span data-leave-show-count class="text-xs text-amber-700 font-bold whitespace-nowrap">แสดง ${filtered.length}/${rows.length} รายการ</span>
            </div>
          </div>
          <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-gray-50">
            <button type="button" data-filter="active" class="${cardBase} ${filter === 'active' ? 'bg-amber-100 border-amber-300' : 'bg-amber-50 border-amber-100'}">
              <p class="text-[10px] font-bold text-amber-700/70">กำลังอยู่นอกห้อง</p>
              <p data-leave-summary="active" class="text-xl font-extrabold text-amber-700">${summary.active}</p>
            </button>
            <button type="button" data-filter="overdue" class="${cardBase} ${filter === 'overdue' ? 'bg-red-100 border-red-300' : 'bg-red-50 border-red-100'}">
              <p class="text-[10px] font-bold text-red-700/70">เลยเวลา</p>
              <p data-leave-summary="overdue" class="text-xl font-extrabold text-red-700">${summary.overdue}</p>
            </button>
            <button type="button" data-filter="returnedToday" class="${cardBase} ${filter === 'returnedToday' ? 'bg-emerald-100 border-emerald-300' : 'bg-emerald-50 border-emerald-100'}">
              <p class="text-[10px] font-bold text-emerald-700/70">กลับแล้ว</p>
              <p data-leave-summary="returnedToday" class="text-xl font-extrabold text-emerald-700">${summary.returnedToday}</p>
            </button>
            <button type="button" data-filter="all" class="${cardBase} ${filter === 'all' ? 'bg-indigo-100 border-indigo-300' : 'bg-indigo-50 border-indigo-100'}">
              <p class="text-[10px] font-bold text-indigo-700/70">รวมวันที่เลือก</p>
              <p data-leave-summary="totalWeek" class="text-xl font-extrabold text-indigo-700">${summary.totalWeek}</p>
            </button>
          </div>
          <div class="overflow-x-auto">
            ${rows.length ? `
              <table class="w-full text-xs min-w-[920px]">
                <thead class="bg-gray-50 text-gray-500 border-b border-gray-100">
                  <tr>
                    <th class="px-4 py-3 text-left">สถานะ</th>
                    <th class="px-4 py-3 text-left">ข้อมูลนักเรียน</th>
                    <th class="px-4 py-3 text-left">ครูผู้สอน</th>
                    <th class="px-4 py-3 text-left">เหตุผล</th>
                    <th class="px-4 py-3 text-left">เวลา</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
                  ${rows.map(row => `
                    <tr data-leave-row data-leave-id="${_esc(row.id)}" class="hover:bg-gray-50 ${rowMatchesFilter(row, now) ? '' : 'hidden'}">
                      <td data-leave-status class="px-4 py-2">${_statusBadge(row, now)}</td>
                      <td class="px-4 py-2">${_studentCell(row)}</td>
                      <td class="px-4 py-2">${_teacherCell(row)}</td>
                      <td class="px-4 py-2 text-gray-600">${_esc(row.reason || '—')}</td>
                      <td class="px-4 py-2 text-gray-600">
                        <div>${new Date(row.created_at).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })} น. · ${Number(row.allowed_duration || 0)} นาที</div>
                        <div data-leave-time class="font-semibold ${_timeTextClass(row, now)}">${_remainingText(row, now)}</div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
              <div data-leave-empty class="px-5 py-8 text-center text-sm text-gray-400 ${filtered.length ? 'hidden' : ''}">ไม่พบข้อมูลตามตัวกรองนี้</div>
            ` : `<div class="px-5 py-8 text-center text-sm text-gray-400">ไม่พบข้อมูลตามตัวกรองนี้</div>`}
          </div>
        </div>
      `
      container.querySelectorAll('.leave-monitor-filter').forEach(btn => {
        btn.addEventListener('click', () => {
          filter = btn.dataset.filter || 'all'
          render()
        })
      })
      container.querySelector('[data-leave-date]')?.addEventListener('change', e => {
        const nextDate = e.target.value || _todayInputValue()
        renderLeaveMonitorWidget(container, { ...options, date: nextDate, initialFilter: filter })
      })
    }

    const updateLiveFields = () => {
      const now = new Date()
      const summary = getLiveSummary(now)
      const visibleCount = rows.filter(row => rowMatchesFilter(row, now)).length
      const showCount = container.querySelector('[data-leave-show-count]')
      if (showCount) showCount.textContent = `แสดง ${visibleCount}/${rows.length} รายการ`
      Object.entries(summary).forEach(([key, value]) => {
        const el = container.querySelector(`[data-leave-summary="${key}"]`)
        if (el) el.textContent = value
      })

      rows.forEach(row => {
        const rowEl = container.querySelector(`[data-leave-id="${String(row.id).replace(/"/g, '\\"')}"]`)
        if (!rowEl) return
        rowEl.classList.toggle('hidden', !rowMatchesFilter(row, now))
        const statusEl = rowEl.querySelector('[data-leave-status]')
        if (statusEl) statusEl.innerHTML = _statusBadge(row, now)
        const timeEl = rowEl.querySelector('[data-leave-time]')
        if (timeEl) {
          timeEl.textContent = _remainingText(row, now)
          timeEl.className = `font-semibold ${_timeTextClass(row, now)}`
        }
      })

      const emptyEl = container.querySelector('[data-leave-empty]')
      if (emptyEl) emptyEl.classList.toggle('hidden', visibleCount > 0)
    }

    render()
    container._leaveMonitorTimer = setInterval(() => {
      if (!document.body.contains(container)) {
        clearInterval(container._leaveMonitorTimer)
        container._leaveMonitorTimer = null
        return
      }
      updateLiveFields()
    }, 1000)
  } catch (err) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl border border-red-100 p-5 text-sm text-red-500">
        โหลดข้อมูลใบอนุญาตออกนอกห้องไม่สำเร็จ: ${_esc(err.message || err)}
      </div>
    `
  }
}
