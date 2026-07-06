import { supabase } from './supabase.js'

const PAGE_SIZE = 1000
const DEFAULT_DAYS = 14
const MAX_DAYS = 31
const REFRESH_MS = 30000

const root = document.getElementById('prayer-dashboard-root')
let state = {
  days: DEFAULT_DAYS,
  endDate: todayInputValue(),
  location: '',
  roomGroup: '',
  rows: [],
  students: [],
  loading: false,
  updatedAt: null,
}

const esc = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

function todayInputValue() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function dateInputValue(value) {
  const d = value instanceof Date ? new Date(value) : new Date(value)
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function addDays(dateStr, offset) {
  const [y, m, d] = String(dateStr || todayInputValue()).split('-').map(Number)
  const dt = new Date(y, (m || 1) - 1, d || 1)
  dt.setDate(dt.getDate() + offset)
  return dateInputValue(dt)
}

function clampDays(value) {
  const parsed = parseInt(value, 10)
  if (!Number.isFinite(parsed)) return DEFAULT_DAYS
  return Math.max(7, Math.min(MAX_DAYS, parsed))
}

function locationLabel(loc) {
  return {
    musolla_male: 'มูซอลลาชาย',
    masjid_kuwait: 'มัสยิดคูเวต',
    musolla_female_1: 'มูซอลลาหญิง 1',
    musolla_female_2: 'มูซอลลาหญิง 2',
  }[loc] || 'ไม่ระบุจุด'
}

function locationTone(loc) {
  return {
    musolla_male: 'bg-blue-50 text-blue-700 border-blue-100',
    masjid_kuwait: 'bg-violet-50 text-violet-700 border-violet-100',
    musolla_female_1: 'bg-pink-50 text-pink-700 border-pink-100',
    musolla_female_2: 'bg-amber-50 text-amber-700 border-amber-100',
  }[loc] || 'bg-slate-50 text-slate-600 border-slate-100'
}

function groupLabel(room = '') {
  const text = String(room || '').trim()
  if (text.startsWith('ปวช.')) return 'ปวช.'
  const found = text.match(/^ม\.\d/)
  return found ? found[0] : 'ไม่ระบุ'
}

function uniqueByStudent(rows) {
  const map = new Map()
  rows.forEach(row => {
    if (!row.student_id) return
    const prev = map.get(row.student_id)
    if (!prev || String(row.created_at || '') > String(prev.created_at || '')) {
      map.set(row.student_id, row)
    }
  })
  return Array.from(map.values())
}

async function fetchPaged(table, selectColumns, configure = q => q) {
  const rows = []
  for (let from = 0; ; from += PAGE_SIZE) {
    let q = supabase.from(table).select(selectColumns)
    q = configure(q)
    const { data, error } = await q.range(from, from + PAGE_SIZE - 1)
    if (error) throw error
    rows.push(...(data ?? []))
    if (!data || data.length < PAGE_SIZE) break
  }
  return rows
}

async function loadData() {
  if (state.loading) return
  state.loading = true
  renderShell()
  try {
    const startDate = addDays(state.endDate, -(state.days - 1))
    const snapshot = await loadPublicSnapshot(startDate, state.endDate)
    state.students = snapshot.students
    state.rows = snapshot.records
    state.updatedAt = new Date()
  } catch (err) {
    console.error('Load prayer dashboard failed:', err)
    root.innerHTML = `
      <div class="bg-white border border-red-100 rounded-2xl p-6 text-red-600 text-sm">
        โหลดแดชบอร์ดละหมาดไม่สำเร็จ: ${esc(err?.message || err)}
      </div>
    `
  } finally {
    state.loading = false
    renderShell()
  }
}

async function loadPublicSnapshot(startDate, endDate) {
  const { data, error } = await supabase.rpc('get_public_prayer_dashboard_snapshot', {
    p_start_date: startDate,
    p_end_date: endDate,
    p_limit: 50000,
  })
  if (!error && data) {
    return {
      students: Array.isArray(data.students) ? data.students : [],
      records: Array.isArray(data.records) ? data.records : [],
    }
  }
  console.warn('Public prayer dashboard RPC unavailable, falling back to direct reads:', error)
  const [students, records] = await Promise.all([
    fetchPaged(
      'students',
      'id, student_code, full_name, main_room, religion_room, gender, is_active',
      q => q.eq('is_active', true).order('student_code')
    ),
    fetchPaged(
      'prayer_records',
      'id, student_id, main_room, status, check_date, location, scanned_by, input_method, scanner_code, scanner_name, scanner_room, scanner_gender, same_room_flag, created_at, students(id, student_code, full_name, main_room, religion_room, gender)',
      q => q
        .gte('check_date', startDate)
        .lte('check_date', endDate)
        .not('location', 'is', null)
        .order('check_date', { ascending: true })
        .order('created_at', { ascending: true })
    ),
  ])
  if ((students?.length ?? 0) === 0 && (records?.length ?? 0) === 0 && error?.code === 'PGRST202') {
    throw new Error('ยังไม่ได้รัน patch_public_prayer_dashboard_read.sql ใน Supabase')
  }
  return { students, records }
}

function filteredStudents() {
  return state.students.filter(student => {
    if (state.roomGroup && groupLabel(student.main_room) !== state.roomGroup) return false
    return true
  })
}

function filteredRows() {
  return state.rows.filter(row => {
    const student = row.students || {}
    if (state.location && row.location !== state.location) return false
    if (state.roomGroup && groupLabel(row.main_room || student.main_room) !== state.roomGroup) return false
    return true
  })
}

function buildAnalytics() {
  const students = filteredStudents()
  const rows = filteredRows()
  const studentIds = new Set(students.map(s => s.id))
  const scopedRows = rows.filter(row => !studentIds.size || studentIds.has(row.student_id))
  const dayKeys = Array.from({ length: state.days }, (_, idx) => addDays(state.endDate, idx - state.days + 1))
  const byDayMap = Object.fromEntries(dayKeys.map(key => [key, {
    key,
    total: 0,
    pray: 0,
    usor: 0,
    other: 0,
    uniqueStudents: new Set(),
    operators: new Set(),
  }]))
  const operatorMap = new Map()
  const locationMap = new Map()
  const roomMap = new Map()

  scopedRows.forEach(row => {
    const day = row.check_date
    const dayItem = byDayMap[day]
    const isPray = row.status === 'pray'
    const isUsor = row.status === 'usor'
    const operatorKey = row.scanner_code || row.scanned_by || row.scanner_name || 'ไม่ระบุผู้สแกน'
    const operatorName = row.scanner_name || row.scanned_by || 'ไม่ระบุผู้สแกน'
    const operatorRoom = row.scanner_room || ''
    if (dayItem) {
      dayItem.total += 1
      if (isPray) dayItem.pray += 1
      else if (isUsor) dayItem.usor += 1
      else dayItem.other += 1
      dayItem.uniqueStudents.add(row.student_id)
      dayItem.operators.add(operatorKey)
    }

    const op = operatorMap.get(operatorKey) || {
      key: operatorKey,
      label: operatorName,
      room: operatorRoom,
      total: 0,
      pray: 0,
      manual: 0,
      sameRoom: 0,
      days: new Set(),
      locations: new Set(),
    }
    op.total += 1
    if (isPray) op.pray += 1
    if (row.input_method === 'manual') op.manual += 1
    if (row.same_room_flag) op.sameRoom += 1
    if (row.check_date) op.days.add(row.check_date)
    if (row.location) op.locations.add(row.location)
    operatorMap.set(operatorKey, op)

    const locKey = row.location || 'ไม่ระบุจุด'
    const loc = locationMap.get(locKey) || { key: locKey, label: locationLabel(locKey), total: 0, pray: 0 }
    loc.total += 1
    if (isPray) loc.pray += 1
    locationMap.set(locKey, loc)

    const roomKey = row.main_room || row.students?.main_room || 'ไม่ระบุ'
    const room = roomMap.get(roomKey) || { key: roomKey, label: roomKey, total: 0, pray: 0, usor: 0 }
    room.total += 1
    if (isPray) room.pray += 1
    if (isUsor) room.usor += 1
    roomMap.set(roomKey, room)
  })

  const byDay = dayKeys.map(key => {
    const item = byDayMap[key]
    const expected = students.length
    const unique = item.uniqueStudents.size
    return {
      ...item,
      unique,
      operatorsCount: item.operators.size,
      participationRate: expected ? Math.round((unique / expected) * 100) : 0,
      prayerRate: expected ? Math.round((item.pray / expected) * 100) : 0,
    }
  })
  const todayRows = scopedRows.filter(row => row.check_date === state.endDate)
  const todayUnique = uniqueByStudent(todayRows)
  const totalUniquePeriod = new Set(scopedRows.map(row => row.student_id)).size
  const totalPray = scopedRows.filter(row => row.status === 'pray').length
  const totalUsor = scopedRows.filter(row => row.status === 'usor').length
  const expectedToday = students.length
  const currentHalf = byDay.slice(Math.floor(byDay.length / 2))
  const prevHalf = byDay.slice(0, Math.floor(byDay.length / 2))
  const currentAvg = currentHalf.length ? currentHalf.reduce((s, d) => s + d.pray, 0) / currentHalf.length : 0
  const prevAvg = prevHalf.length ? prevHalf.reduce((s, d) => s + d.pray, 0) / prevHalf.length : 0

  const operators = Array.from(operatorMap.values())
    .map(op => ({
      ...op,
      activeDays: op.days.size,
      locationsText: Array.from(op.locations).map(locationLabel).join(', ') || '—',
      manualRate: op.total ? Math.round((op.manual / op.total) * 100) : 0,
    }))
    .sort((a, b) => b.activeDays - a.activeDays || b.total - a.total)

  const rooms = Array.from(roomMap.values())
    .map(item => ({ ...item, prayerRate: item.total ? Math.round((item.pray / item.total) * 100) : 0 }))
    .sort((a, b) => b.pray - a.pray)

  return {
    students,
    rows: scopedRows,
    byDay,
    operators,
    locations: Array.from(locationMap.values()).sort((a, b) => b.total - a.total),
    rooms,
    expectedToday,
    todayTotal: todayRows.length,
    todayPray: todayRows.filter(row => row.status === 'pray').length,
    todayUsor: todayRows.filter(row => row.status === 'usor').length,
    todayUnique: todayUnique.length,
    todayRate: expectedToday ? Math.round((todayUnique.length / expectedToday) * 100) : 0,
    periodUnique: totalUniquePeriod,
    periodPray: totalPray,
    periodUsor: totalUsor,
    trendDelta: Math.round(currentAvg - prevAvg),
    activeOperatorsToday: new Set(todayRows.map(row => row.scanner_code || row.scanned_by || row.scanner_name).filter(Boolean)).size,
  }
}

function metricCard(label, value, tone, sub = '') {
  const tones = {
    emerald: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    blue: 'bg-blue-50 border-blue-100 text-blue-700',
    violet: 'bg-violet-50 border-violet-100 text-violet-700',
    amber: 'bg-amber-50 border-amber-100 text-amber-700',
    rose: 'bg-rose-50 border-rose-100 text-rose-700',
    slate: 'bg-slate-50 border-slate-100 text-slate-700',
  }
  return `
    <div class="rounded-2xl border p-4 ${tones[tone] || tones.slate}">
      <p class="text-[11px] font-bold opacity-75">${esc(label)}</p>
      <p class="text-2xl sm:text-3xl font-extrabold mt-1">${esc(value)}</p>
      ${sub ? `<p class="text-[11px] opacity-70 mt-1">${esc(sub)}</p>` : ''}
    </div>
  `
}

function lineChart(points) {
  const max = Math.max(1, ...points.map(p => Math.max(p.pray, p.unique)))
  const width = 680
  const height = 190
  const step = points.length > 1 ? width / (points.length - 1) : width
  const pathFor = key => points.map((p, idx) => {
    const x = Math.round(idx * step)
    const y = Math.round(height - ((p[key] / max) * (height - 28)) - 14)
    return `${x},${y}`
  }).join(' ')
  const prayPath = pathFor('pray')
  const uniquePath = pathFor('unique')
  return `
    <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between gap-3 mb-2">
        <div>
          <h2 class="font-extrabold text-slate-800 text-sm">แนวโน้มผู้ละหมาด</h2>
          <p class="text-[11px] text-slate-400">เส้นเขียว = ละหมาดจริง, เส้นน้ำเงิน = มีบันทึกเข้าร่วม</p>
        </div>
        <span class="text-[11px] text-slate-400">สูงสุด ${max} คน/วัน</span>
      </div>
      <svg viewBox="0 0 ${width} ${height}" class="w-full h-48" preserveAspectRatio="none">
        <polyline points="${uniquePath}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></polyline>
        <polyline points="${prayPath}" fill="none" stroke="#059669" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>
        ${points.map((p, idx) => {
          const [x, y] = prayPath.split(' ')[idx].split(',')
          return `<circle cx="${x}" cy="${y}" r="4" fill="#059669"><title>${esc(p.key)}: ${p.pray} คน</title></circle>`
        }).join('')}
      </svg>
      <div class="grid gap-1 text-[10px] text-slate-400" style="grid-template-columns: repeat(${Math.min(points.length, MAX_DAYS)}, minmax(0, 1fr));">
        ${points.map(p => `<span class="truncate">${esc(p.key.slice(5))}</span>`).join('')}
      </div>
    </div>
  `
}

function operatorChart(points) {
  const max = Math.max(1, ...points.map(p => p.operatorsCount))
  return `
    <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-extrabold text-slate-800 text-sm">แนวโน้มแกนนำที่ปฏิบัติหน้าที่</h2>
        <span class="text-[11px] text-slate-400">คน active ต่อวัน</span>
      </div>
      <div class="flex items-end gap-1 h-40">
        ${points.map(item => `
          <div class="flex-1 min-w-0 flex flex-col items-center gap-1">
            <div class="w-full rounded-t-lg bg-violet-500" style="height:${Math.max(4, Math.round((item.operatorsCount / max) * 124))}px" title="${esc(item.key)}: ${item.operatorsCount} คน"></div>
            <span class="text-[9px] text-slate-400 truncate">${esc(item.key.slice(8))}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `
}

function barList(items, valueKey = 'total', color = 'bg-emerald-500', empty = 'ยังไม่มีข้อมูล') {
  if (!items.length) return `<p class="text-center text-sm text-slate-400 py-8">${esc(empty)}</p>`
  const max = Math.max(1, ...items.map(item => item[valueKey] || 0))
  return `
    <div class="space-y-3">
      ${items.map(item => `
        <div>
          <div class="flex items-center justify-between text-xs gap-3">
            <span class="font-bold text-slate-700 truncate">${esc(item.label || item.key)}</span>
            <span class="font-mono text-slate-400">${esc(item[valueKey] || 0)}</span>
          </div>
          <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden mt-1">
            <div class="${color} h-full rounded-full" style="width:${Math.max(4, Math.round(((item[valueKey] || 0) / max) * 100))}%"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `
}

function operatorTable(operators) {
  if (!operators.length) {
    return `<div class="text-center text-sm text-slate-400 py-10">ยังไม่มีข้อมูลแกนนำในช่วงที่เลือก</div>`
  }
  return `
    <div class="overflow-x-auto">
      <table class="w-full text-left text-xs">
        <thead>
          <tr class="border-b border-slate-100 text-slate-400">
            <th class="py-2 pr-3">แกนนำ/ผู้สแกน</th>
            <th class="py-2 px-3 text-center">วันทำหน้าที่</th>
            <th class="py-2 px-3 text-center">สแกน</th>
            <th class="py-2 px-3 text-center">กรอกรหัส</th>
            <th class="py-2 pl-3">จุดที่ดูแล</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-50">
          ${operators.slice(0, 10).map(op => `
            <tr>
              <td class="py-3 pr-3">
                <p class="font-bold text-slate-800">${esc(op.label)}</p>
                <p class="text-[10px] text-slate-400">${esc(op.room || op.key || '—')}</p>
              </td>
              <td class="py-3 px-3 text-center font-extrabold text-violet-700">${op.activeDays}</td>
              <td class="py-3 px-3 text-center font-mono text-slate-600">${op.total}</td>
              <td class="py-3 px-3 text-center font-mono ${op.manualRate >= 25 ? 'text-amber-600 font-bold' : 'text-slate-400'}">${op.manualRate}%</td>
              <td class="py-3 pl-3 text-slate-500">${esc(op.locationsText)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `
}

function renderShell() {
  const analytics = buildAnalytics()
  const updatedText = state.updatedAt
    ? state.updatedAt.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    : '—'
  const trendTone = analytics.trendDelta >= 0 ? 'emerald' : 'rose'
  root.innerHTML = `
    <header class="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-4">
      <div>
        <div class="flex items-center gap-3">
          <span class="w-11 h-11 rounded-2xl bg-emerald-100 text-2xl flex items-center justify-center">🕌</span>
          <div>
            <h1 class="text-xl sm:text-2xl font-extrabold text-slate-900">แดชบอร์ดแนวโน้มละหมาด</h1>
            <p class="text-xs text-slate-500">ติดตามแนวโน้มนักเรียนละหมาด และการทำหน้าที่ของแกนนำ</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <input id="prayer-end-date" type="date" value="${esc(state.endDate)}"
          class="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-300" />
        <select id="prayer-days" class="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-300">
          ${[7, 14, 21, 31].map(day => `<option value="${day}" ${state.days === day ? 'selected' : ''}>${day} วัน</option>`).join('')}
        </select>
        <select id="prayer-room-group" class="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-300">
          <option value="">ทุกระดับ</option>
          ${['ม.1', 'ม.2', 'ม.3', 'ม.4', 'ม.5', 'ม.6', 'ปวช.'].map(g => `<option value="${g}" ${state.roomGroup === g ? 'selected' : ''}>${g}</option>`).join('')}
        </select>
        <select id="prayer-location" class="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-300">
          <option value="">ทุกจุดละหมาด</option>
          ${['musolla_male', 'masjid_kuwait', 'musolla_female_1', 'musolla_female_2'].map(loc => `<option value="${loc}" ${state.location === loc ? 'selected' : ''}>${locationLabel(loc)}</option>`).join('')}
        </select>
        <button id="prayer-refresh" class="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 active:scale-95 transition">รีเฟรช</button>
      </div>
    </header>

    <section class="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
      ${metricCard('ละหมาดวันนี้', analytics.todayPray, 'emerald', `จาก ${analytics.expectedToday} คนในกลุ่มที่เลือก`)}
      ${metricCard('มีบันทึกวันนี้', analytics.todayUnique, 'blue', `${analytics.todayRate}% ของนักเรียน`)}
      ${metricCard('อูโซรวันนี้', analytics.todayUsor, 'violet', 'แยกจากยอดละหมาดจริง')}
      ${metricCard('แกนนำ active', analytics.activeOperatorsToday, 'amber', 'ผู้สแกน/ผู้บันทึกวันนี้')}
      ${metricCard('ละหมาดช่วงนี้', analytics.periodPray, 'slate', `${state.days} วันล่าสุด`)}
      ${metricCard('แนวโน้ม', analytics.trendDelta >= 0 ? `เพิ่ม ${analytics.trendDelta}` : `ลด ${Math.abs(analytics.trendDelta)}`, trendTone, 'เทียบครึ่งช่วงก่อนหน้า')}
    </section>

    <section class="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr] gap-4 mb-4">
      ${lineChart(analytics.byDay)}
      ${operatorChart(analytics.byDay)}
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <h2 class="font-extrabold text-slate-800 text-sm mb-3">ห้อง/กลุ่มที่ละหมาดมาก</h2>
        ${barList(analytics.rooms.slice(0, 8), 'pray', 'bg-emerald-500', 'ยังไม่มีข้อมูลห้อง')}
      </div>
      <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <h2 class="font-extrabold text-slate-800 text-sm mb-3">จุดละหมาดที่ใช้งาน</h2>
        <div class="space-y-2">
          ${analytics.locations.length ? analytics.locations.map(loc => `
            <div class="flex items-center justify-between gap-3 rounded-xl border px-3 py-2 ${locationTone(loc.key)}">
              <span class="font-bold text-xs">${esc(loc.label)}</span>
              <span class="font-mono text-sm font-extrabold">${loc.total}</span>
            </div>
          `).join('') : `<p class="text-center text-sm text-slate-400 py-8">ยังไม่มีข้อมูลจุดละหมาด</p>`}
        </div>
      </div>
      <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div class="flex items-center justify-between gap-3 mb-3">
          <h2 class="font-extrabold text-slate-800 text-sm">ตารางแกนนำ</h2>
          <span class="text-[11px] text-slate-400">อัปเดต ${esc(updatedText)}</span>
        </div>
        ${operatorTable(analytics.operators)}
      </div>
    </section>

    <section class="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-emerald-800">
        <div><span class="font-extrabold">เป้าหมายผู้ละหมาด:</span> ดูเส้นเขียวให้สูงขึ้นต่อเนื่อง และเทียบกับเส้นน้ำเงินเพื่อแยกอูโซร/บันทึกอื่น</div>
        <div><span class="font-extrabold">เป้าหมายแกนนำ:</span> วันที่แกนนำ active มากขึ้นควรทำให้ยอดละหมาดจริงเพิ่มขึ้นตาม</div>
        <div><span class="font-extrabold">ใช้ติดตาม:</span> เลือกระดับ/จุดละหมาดเพื่อดูปัญหาเฉพาะกลุ่ม เช่น ม.5 หรือมัสยิดคูเวต</div>
      </div>
    </section>

    ${state.loading ? `<div class="fixed bottom-4 right-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-lg">กำลังโหลดข้อมูล...</div>` : ''}
  `
  bindControls()
}

function bindControls() {
  document.getElementById('prayer-end-date')?.addEventListener('change', event => {
    state.endDate = event.target.value || todayInputValue()
    loadData()
  })
  document.getElementById('prayer-days')?.addEventListener('change', event => {
    state.days = clampDays(event.target.value)
    loadData()
  })
  document.getElementById('prayer-room-group')?.addEventListener('change', event => {
    state.roomGroup = event.target.value || ''
    renderShell()
  })
  document.getElementById('prayer-location')?.addEventListener('change', event => {
    state.location = event.target.value || ''
    renderShell()
  })
  document.getElementById('prayer-refresh')?.addEventListener('click', loadData)
}

function initFromParams() {
  const params = new URLSearchParams(window.location.search)
  state.days = clampDays(params.get('days') || DEFAULT_DAYS)
  state.endDate = params.get('date') || todayInputValue()
  state.location = params.get('location') || ''
  state.roomGroup = params.get('room') || ''
}

initFromParams()
renderShell()
loadData()
setInterval(loadData, REFRESH_MS)
