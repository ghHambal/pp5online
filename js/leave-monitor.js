import { getLeavePermissionDashboard, closeLeavePermission } from './api.js'
import { formatLeaveCountdown } from './leave-time.js'
import { showToast } from './ui.js'

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

function _dateInputValue(dateValue) {
  const d = dateValue instanceof Date ? new Date(dateValue) : new Date(dateValue)
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function _addDays(dateStr, offset) {
  const [y, m, d] = String(dateStr || _todayInputValue()).split('-').map(Number)
  const dt = new Date(y, (m || 1) - 1, d || 1)
  dt.setDate(dt.getDate() + offset)
  return _dateInputValue(dt)
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

function _groupRows(rows, getKey, labelForKey = key => key || 'ไม่ระบุ') {
  const map = new Map()
  rows.forEach(row => {
    const key = getKey(row) || 'ไม่ระบุ'
    const item = map.get(key) || { key, label: labelForKey(key), total: 0, overdue: 0, returned: 0, active: 0 }
    item.total += 1
    const status = _statusKey(row)
    if (status === 'overdue') item.overdue += 1
    else if (status === 'returned') item.returned += 1
    else item.active += 1
    map.set(key, item)
  })
  return Array.from(map.values()).sort((a, b) => b.total - a.total)
}

function _buildLeaveAnalytics(rows, selectedDate, days) {
  const dayKeys = Array.from({ length: days }, (_, idx) => _addDays(selectedDate, idx - days + 1))
  const dayMap = Object.fromEntries(dayKeys.map(key => [key, { key, total: 0, overdue: 0, returned: 0, active: 0 }]))
  rows.forEach(row => {
    const key = _dateInputValue(row.created_at)
    if (!dayMap[key]) return
    dayMap[key].total += 1
    const status = _statusKey(row)
    if (status === 'overdue') dayMap[key].overdue += 1
    else if (status === 'returned') dayMap[key].returned += 1
    else dayMap[key].active += 1
  })
  const byDay = dayKeys.map(key => dayMap[key])
  const byHour = Array.from({ length: 14 }, (_, idx) => ({ key: `${idx + 6}:00`, hour: idx + 6, total: 0, overdue: 0 }))
  rows.forEach(row => {
    const hour = new Date(row.created_at).getHours()
    const item = byHour.find(h => h.hour === hour)
    if (!item) return
    item.total += 1
    if (_statusKey(row) === 'overdue') item.overdue += 1
  })
  const total = rows.length
  const overdue = rows.filter(row => _statusKey(row) === 'overdue').length
  const returned = rows.filter(row => _statusKey(row) === 'returned').length
  const active = rows.filter(row => _statusKey(row) === 'active').length
  const midpoint = Math.floor(byDay.length / 2)
  const previousTotal = byDay.slice(0, midpoint).reduce((sum, item) => sum + item.total, 0)
  const currentTotal = byDay.slice(midpoint).reduce((sum, item) => sum + item.total, 0)
  const trendDelta = currentTotal - previousTotal
  return {
    total,
    active,
    overdue,
    returned,
    returnRate: total ? Math.round((returned / total) * 100) : 0,
    overdueRate: total ? Math.round((overdue / total) * 100) : 0,
    dailyAverage: days ? (total / days).toFixed(1) : '0.0',
    trendDelta,
    byDay,
    byHour,
    topReasons: _groupRows(rows, row => row.reason || 'ไม่ระบุ').slice(0, 6),
    topRooms: _groupRows(rows, row => row.classes?.class_name || row.students?.main_room || 'ไม่ระบุ').slice(0, 6),
    riskyStudents: _groupRows(rows, row => row.student_id, key => {
      const found = rows.find(row => String(row.student_id) === String(key))
      return found?.students?.full_name || `รหัส ${key}`
    }).filter(item => item.total >= 2 || item.overdue > 0).slice(0, 8),
    peakHour: byHour.reduce((max, item) => item.total > max.total ? item : max, byHour[0] || { key: '—', total: 0 })
  }
}

function _metricCard(label, value, tone, sub = '') {
  const tones = {
    amber: 'bg-amber-50 border-amber-100 text-amber-700',
    red: 'bg-red-50 border-red-100 text-red-700',
    emerald: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    indigo: 'bg-indigo-50 border-indigo-100 text-indigo-700',
    slate: 'bg-slate-50 border-slate-100 text-slate-700'
  }
  return `
    <div class="rounded-xl border px-3 py-2 ${tones[tone] || tones.slate}">
      <p class="text-[10px] font-bold opacity-75">${_esc(label)}</p>
      <p class="text-xl font-extrabold">${_esc(value)}</p>
      ${sub ? `<p class="text-[10px] opacity-70 mt-0.5">${_esc(sub)}</p>` : ''}
    </div>
  `
}

function _lineChart(points) {
  const max = Math.max(1, ...points.map(p => p.total))
  const width = 560
  const height = 170
  const step = points.length > 1 ? width / (points.length - 1) : width
  const coords = points.map((p, idx) => {
    const x = Math.round(idx * step)
    const y = Math.round(height - ((p.total / max) * (height - 24)) - 12)
    return `${x},${y}`
  }).join(' ')
  return `
    <div class="rounded-xl border border-gray-100 bg-white p-3">
      <div class="flex items-center justify-between mb-2">
        <p class="text-xs font-bold text-gray-700">แนวโน้มจำนวนการออกนอกห้อง</p>
        <p class="text-[10px] text-gray-400">สูงสุด ${max} ครั้ง/วัน</p>
      </div>
      <svg viewBox="0 0 ${width} ${height}" class="w-full h-44" preserveAspectRatio="none">
        <polyline points="${coords}" fill="none" stroke="#4f46e5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
        ${points.map((p, idx) => {
          const [x, y] = coords.split(' ')[idx].split(',')
          return `<circle cx="${x}" cy="${y}" r="4" fill="#4f46e5"><title>${_esc(p.key)}: ${p.total}</title></circle>`
        }).join('')}
      </svg>
      <div class="grid gap-1 text-[10px] text-gray-400" style="grid-template-columns: repeat(${Math.min(points.length, 14)}, minmax(0, 1fr));">
        ${points.map(p => `<span class="truncate">${_esc(p.key.slice(5))}</span>`).join('')}
      </div>
    </div>
  `
}

function _barList(items, colorClass = 'bg-indigo-500', emptyText = 'ยังไม่มีข้อมูล') {
  const max = Math.max(1, ...items.map(item => item.total))
  if (!items.length) return `<div class="text-sm text-gray-400 py-8 text-center">${_esc(emptyText)}</div>`
  return `
    <div class="space-y-2">
      ${items.map(item => `
        <div>
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-semibold text-gray-700 truncate pr-3">${_esc(item.label || item.key)}</span>
            <span class="text-gray-400 font-mono">${item.total}</span>
          </div>
          <div class="h-2 rounded-full bg-gray-100 overflow-hidden">
            <div class="h-full ${colorClass}" style="width:${Math.max(4, Math.round((item.total / max) * 100))}%"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `
}

function _hourChart(items) {
  const max = Math.max(1, ...items.map(item => item.total))
  return `
    <div class="rounded-xl border border-gray-100 bg-white p-3">
      <p class="text-xs font-bold text-gray-700 mb-3">ช่วงเวลาที่ออกบ่อย</p>
      <div class="flex items-end gap-1 h-36">
        ${items.map(item => `
          <div class="flex-1 min-w-0 flex flex-col items-center gap-1">
            <div class="w-full rounded-t bg-amber-400" style="height:${Math.max(4, Math.round((item.total / max) * 110))}px" title="${_esc(item.key)} ${item.total} ครั้ง"></div>
            <span class="text-[9px] text-gray-400 truncate">${item.hour}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `
}

export async function renderLeaveMonitorWidget(container, options = {}) {
  if (!container) return
  if (container._leaveMonitorTimer) {
    clearInterval(container._leaveMonitorTimer)
    container._leaveMonitorTimer = null
  }
  if (container._leaveMonitorRefreshTimer) {
    clearInterval(container._leaveMonitorRefreshTimer)
    container._leaveMonitorRefreshTimer = null
  }

  const title = options.title || '🚪 ติดตามใบอนุญาตออกนอกห้อง'
  const subtitle = options.subtitle || 'ข้อมูลรายวัน'
  const selectedDate = options.date || _todayInputValue()
  const limit = options.limit ?? null
  const analyticsDays = Math.max(7, Math.min(30, parseInt(options.analyticsDays, 10) || 14))
  const trendStartDate = _addDays(selectedDate, -analyticsDays + 1)
  const teacherId = options.teacherId || null
  const scope = options.scope || null
  const readOnly = Boolean(options.readOnly)
  const publicMode = Boolean(options.publicMode)
  const externalUrl = options.externalUrl || ''
  const refreshMs = Math.max(0, parseInt(options.refreshMs, 10) || 0)
  let filter = options.initialFilter || 'all'
  let viewMode = options.initialView || 'list'

  container.innerHTML = `
    <div class="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
      <div class="px-5 py-8 text-center text-sm text-gray-400">กำลังโหลดข้อมูลใบอนุญาต...</div>
    </div>
  `

  try {
    const [{ rows: rawRows }, { rows: rawTrendRows }] = await Promise.all([
      getLeavePermissionDashboard({ date: selectedDate, limit, teacherId, publicMode }),
      getLeavePermissionDashboard({ startDate: trendStartDate, endDate: selectedDate, teacherId, publicMode })
    ])
    const rows = (rawRows || []).filter(row => _scopeMatchesRow(row, scope))
    const trendRows = (rawTrendRows || []).filter(row => _scopeMatchesRow(row, scope))
    const analytics = _buildLeaveAnalytics(trendRows, selectedDate, analyticsDays)
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

    const renderActionCell = (row) => {
      const status = _statusKey(row)
      if (readOnly) return '<span class="text-[10px] text-gray-400 font-bold">ดูอย่างเดียว</span>'
      if (status === 'returned') return '<span class="text-[10px] text-emerald-600 font-bold">ปิดรายการแล้ว</span>'
      if (row.status === 'overdue') return '<span class="text-[10px] text-red-500 font-bold">บันทึกไม่กลับแล้ว</span>'
      return `
        <div class="flex flex-col gap-1 min-w-[110px]">
          <button type="button" data-leave-action="returned" data-leave-action-id="${_esc(row.id)}"
            class="px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold">
            กลับแล้ว
          </button>
          <button type="button" data-leave-action="overdue" data-leave-action-id="${_esc(row.id)}"
            class="px-2 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-[10px] font-bold border border-red-100">
            ไม่กลับ
          </button>
        </div>
      `
    }

    const renderDashboard = () => {
      const trendTone = analytics.trendDelta <= 0 ? 'emerald' : 'red'
      const trendText = analytics.trendDelta === 0
        ? 'ทรงตัว'
        : analytics.trendDelta > 0
          ? `เพิ่ม ${analytics.trendDelta}`
          : `ลด ${Math.abs(analytics.trendDelta)}`
      return `
        <div class="p-4 space-y-4">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
            ${_metricCard('รวมช่วงที่เลือก', analytics.total, 'indigo', `${analyticsDays} วันล่าสุด`)}
            ${_metricCard('เฉลี่ยต่อวัน', analytics.dailyAverage, 'amber', 'ครั้ง/วัน')}
            ${_metricCard('กลับแล้ว', `${analytics.returnRate}%`, 'emerald', `${analytics.returned} รายการ`)}
            ${_metricCard('เกินเวลา/ไม่กลับ', `${analytics.overdueRate}%`, 'red', `${analytics.overdue} รายการ`)}
            ${_metricCard('แนวโน้ม', trendText, trendTone, 'เทียบครึ่งแรก')}
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div class="xl:col-span-2">${_lineChart(analytics.byDay)}</div>
            ${_hourChart(analytics.byHour)}
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="rounded-xl border border-gray-100 bg-white p-4">
              <p class="text-xs font-bold text-gray-700 mb-3">เหตุผลที่ใช้บ่อย</p>
              ${_barList(analytics.topReasons, 'bg-amber-500')}
            </div>
            <div class="rounded-xl border border-gray-100 bg-white p-4">
              <p class="text-xs font-bold text-gray-700 mb-3">ห้อง/กลุ่มที่ออกบ่อย</p>
              ${_barList(analytics.topRooms, 'bg-indigo-500')}
            </div>
            <div class="rounded-xl border border-gray-100 bg-white p-4">
              <p class="text-xs font-bold text-gray-700 mb-3">นักเรียนที่ควรติดตาม</p>
              ${analytics.riskyStudents.length ? `
                <div class="space-y-2">
                  ${analytics.riskyStudents.map(item => `
                    <div class="rounded-lg border border-gray-100 px-3 py-2">
                      <div class="flex justify-between gap-2">
                        <span class="text-xs font-bold text-gray-700 truncate">${_esc(item.label)}</span>
                        <span class="text-[10px] text-gray-400 font-mono">${item.total} ครั้ง</span>
                      </div>
                      <div class="text-[10px] text-red-500 mt-1">เกินเวลา/ไม่กลับ ${item.overdue} ครั้ง</div>
                    </div>
                  `).join('')}
                </div>
              ` : `<div class="text-sm text-gray-400 py-8 text-center">ยังไม่พบนักเรียนกลุ่มเสี่ยง</div>`}
            </div>
          </div>
          <div class="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs text-emerald-800">
            <span class="font-bold">เป้าหมายระบบ:</span>
            ลดจำนวนการออกนอกห้องเวลาเรียน โดยดูแนวโน้มรวม ช่วงเวลาที่ออกบ่อย เหตุผลซ้ำ และนักเรียนที่มีประวัติเกินเวลา/ไม่กลับเข้าห้อง
          </div>
        </div>
      `
    }

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
              ${externalUrl ? `
                <a href="${_esc(externalUrl)}" target="_blank"
                  class="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition">
                  เปิดจอแยก
                </a>
              ` : ''}
              <input type="date" data-leave-date value="${_esc(selectedDate)}"
                class="text-xs font-bold text-amber-800 bg-white border border-amber-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200" />
              <select data-leave-range
                class="text-xs font-bold text-amber-800 bg-white border border-amber-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200">
                <option value="7" ${analyticsDays === 7 ? 'selected' : ''}>7 วัน</option>
                <option value="14" ${analyticsDays === 14 ? 'selected' : ''}>14 วัน</option>
                <option value="30" ${analyticsDays === 30 ? 'selected' : ''}>30 วัน</option>
              </select>
              <span data-leave-show-count class="text-xs text-amber-700 font-bold whitespace-nowrap">แสดง ${filtered.length}/${rows.length} รายการ</span>
            </div>
          </div>
          <div class="px-4 pt-3 bg-white border-b border-gray-50">
            <div class="inline-flex rounded-xl bg-gray-100 p-1 text-xs font-bold">
              <button type="button" data-leave-view="list"
                class="px-3 py-1.5 rounded-lg ${viewMode === 'list' ? 'bg-white text-amber-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}">
                รายการติดตาม
              </button>
              <button type="button" data-leave-view="dashboard"
                class="px-3 py-1.5 rounded-lg ${viewMode === 'dashboard' ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}">
                แดชบอร์ดแนวโน้ม
              </button>
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
          ${viewMode === 'dashboard' ? renderDashboard() : `
          <div class="overflow-x-auto">
            ${rows.length ? `
              <table class="w-full text-xs min-w-[1040px]">
                <thead class="bg-gray-50 text-gray-500 border-b border-gray-100">
                  <tr>
                    <th class="px-4 py-3 text-left">สถานะ</th>
                    <th class="px-4 py-3 text-left">ข้อมูลนักเรียน</th>
                    <th class="px-4 py-3 text-left">ครูผู้สอน</th>
                    <th class="px-4 py-3 text-left">เหตุผล</th>
                    <th class="px-4 py-3 text-left">เวลา</th>
                    ${readOnly ? '' : '<th class="px-4 py-3 text-left">จัดการ</th>'}
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
                      ${readOnly ? '' : `<td class="px-4 py-2">${renderActionCell(row)}</td>`}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
              <div data-leave-empty class="px-5 py-8 text-center text-sm text-gray-400 ${filtered.length ? 'hidden' : ''}">ไม่พบข้อมูลตามตัวกรองนี้</div>
            ` : `<div class="px-5 py-8 text-center text-sm text-gray-400">ไม่พบข้อมูลตามตัวกรองนี้</div>`}
          </div>
          `}
        </div>
      `
      container.querySelectorAll('[data-leave-view]').forEach(btn => {
        btn.addEventListener('click', () => {
          viewMode = btn.dataset.leaveView || 'list'
          render()
        })
      })
      container.querySelectorAll('.leave-monitor-filter').forEach(btn => {
        btn.addEventListener('click', () => {
          filter = btn.dataset.filter || 'all'
          viewMode = 'list'
          render()
        })
      })
      container.querySelector('[data-leave-date]')?.addEventListener('change', e => {
        const nextDate = e.target.value || _todayInputValue()
        renderLeaveMonitorWidget(container, { ...options, date: nextDate, initialFilter: filter, initialView: viewMode, analyticsDays })
      })
      container.querySelector('[data-leave-range]')?.addEventListener('change', e => {
        const nextDays = parseInt(e.target.value, 10) || analyticsDays
        renderLeaveMonitorWidget(container, { ...options, date: selectedDate, initialFilter: filter, initialView: viewMode, analyticsDays: nextDays })
      })
      if (!readOnly) {
        container.querySelectorAll('[data-leave-action]').forEach(btn => {
          btn.addEventListener('click', async () => {
            const id = btn.dataset.leaveActionId
            const status = btn.dataset.leaveAction
            const row = rows.find(item => String(item.id) === String(id))
            const studentName = row?.students?.full_name || 'นักเรียน'
            const message = status === 'returned'
              ? `ยืนยันบันทึกว่า "${studentName}" กลับเข้าห้องแล้ว?`
              : `ยืนยันบันทึกว่า "${studentName}" ไม่กลับเข้าห้อง? ระบบจะเก็บเป็นประวัติการเกินเวลา`
            if (!window.confirm(message)) return
            btn.disabled = true
            try {
              await closeLeavePermission(id, status)
              showToast(status === 'returned' ? 'บันทึกกลับเข้าห้องแล้ว' : 'บันทึกประวัติไม่กลับเข้าห้องแล้ว', 'success')
              renderLeaveMonitorWidget(container, { ...options, date: selectedDate, initialFilter: filter, initialView: viewMode, analyticsDays })
            } catch (err) {
              btn.disabled = false
              showToast(`บันทึกไม่สำเร็จ: ${err.message || err}`, 'error')
            }
          })
        })
      }
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
    if (refreshMs > 0) {
      container._leaveMonitorRefreshTimer = setInterval(() => {
        if (!document.body.contains(container)) {
          clearInterval(container._leaveMonitorRefreshTimer)
          container._leaveMonitorRefreshTimer = null
          return
        }
        renderLeaveMonitorWidget(container, { ...options, date: selectedDate, initialFilter: filter, initialView: viewMode, analyticsDays })
      }, refreshMs)
    }
    container._leaveMonitorTimer = setInterval(() => {
      if (!document.body.contains(container)) {
        clearInterval(container._leaveMonitorTimer)
        container._leaveMonitorTimer = null
        if (container._leaveMonitorRefreshTimer) {
          clearInterval(container._leaveMonitorRefreshTimer)
          container._leaveMonitorRefreshTimer = null
        }
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
