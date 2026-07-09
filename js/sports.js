import { supabase } from './supabase.js'
import { showToast } from './ui.js'

const QUEUE_KEY = 'pp5_sports_offline_queue_v1'
const TABLES = {
  events: 'sports_events',
  competitions: 'sports_competitions',
  registrations: 'sports_registrations',
  matches: 'sports_matches',
  totals: 'sports_color_totals',
}

let _state = {
  loaded: false,
  missingSchema: false,
  missingMessage: '',
  event: null,
  groups: [],
  students: [],
  teachers: [],
  competitions: [],
  registrations: [],
  matches: [],
  totals: [],
  search: '',
}

const _esc = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

const _fmtDate = value => {
  if (!value) return '—'
  try { return new Date(value + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' }) }
  catch { return value }
}

function _setActiveNav(viewName) {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.toggle('bg-indigo-800', el.dataset.nav === viewName)
    el.classList.toggle('text-white', el.dataset.nav === viewName)
    el.classList.toggle('text-indigo-200', el.dataset.nav !== viewName)
  })
}

function _setContent(html) {
  const root = document.getElementById('main-content') || document.getElementById('sports-root')
  if (root) root.innerHTML = html
}

function _isMissingTable(error) {
  const msg = `${error?.code ?? ''} ${error?.message ?? ''} ${error?.details ?? ''}`
  return /PGRST20|does not exist|Could not find|schema cache|relation .* does not exist/i.test(msg)
}

async function _safeQuery(label, promise) {
  const { data, error } = await promise
  if (error) {
    if (_isMissingTable(error)) {
      _state.missingSchema = true
      _state.missingMessage = `${label}: ${error.message}`
      return []
    }
    throw error
  }
  return data ?? []
}

function _queue() {
  try { return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]') }
  catch { return [] }
}

function _saveQueue(rows) {
  localStorage.setItem(QUEUE_KEY, JSON.stringify(rows))
}

function _enqueue(type, payload) {
  const rows = _queue()
  rows.push({ id: `${Date.now()}_${Math.random().toString(16).slice(2)}`, type, payload, created_at: new Date().toISOString() })
  _saveQueue(rows)
}

async function _loadBaseData() {
  const [groups, students, teachers] = await Promise.all([
    _safeQuery('house_groups', supabase
      .from('house_groups')
      .select('id, name, color_hex, gender, sort_order, teacher_id')
      .order('gender')
      .order('sort_order')),
    _safeQuery('students', supabase
      .from('students')
      .select('id, student_code, full_name, main_room, religion_room, gender, house_color, sports_shirt_size, image_url, is_active')
      .eq('is_active', true)
      .order('student_code')),
    _safeQuery('teachers', supabase
      .from('teachers')
      .select('id, teacher_code, full_name, position, positions')
      .order('full_name')),
  ])
  _state.groups = groups
  _state.students = students
  _state.teachers = teachers
}

async function _loadSportsData() {
  _state.missingSchema = false
  _state.missingMessage = ''

  const events = await _safeQuery(TABLES.events, supabase
    .from(TABLES.events)
    .select('*')
    .order('academic_year', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(1))

  _state.event = events[0] ?? null
  if (!_state.event) {
    _state.competitions = []
    _state.registrations = []
    _state.matches = []
    _state.totals = []
    return
  }

  const eventId = _state.event.id
  const [competitions, registrations, matches, totals] = await Promise.all([
    _safeQuery(TABLES.competitions, supabase
      .from(TABLES.competitions)
      .select('*, teachers:responsible_teacher_id(id, teacher_code, full_name)')
      .eq('event_id', eventId)
      .order('display_order')
      .order('name')),
    _safeQuery(TABLES.registrations, supabase
      .from(TABLES.registrations)
      .select('*, students(id, student_code, full_name, main_room, gender, house_color, sports_shirt_size, image_url), sports_competitions(id, code, name, category)')
      .eq('event_id', eventId)
      .order('registered_at', { ascending: false })),
    _safeQuery(TABLES.matches, supabase
      .from(TABLES.matches)
      .select('*, sports_competitions(id, code, name, category)')
      .eq('event_id', eventId)
      .order('scheduled_date', { ascending: true })
      .order('scheduled_time', { ascending: true })),
    _safeQuery(TABLES.totals, supabase
      .from(TABLES.totals)
      .select('*')
      .eq('event_id', eventId)),
  ])

  _state.competitions = competitions
  _state.registrations = registrations
  _state.matches = matches
  _state.totals = totals
}

async function _loadAll() {
  _state.loaded = false
  _render()
  await _loadBaseData()
  await _loadSportsData()
  _state.loaded = true
  _render()
}

function _colorGroup(name) {
  return _state.groups.find(g => g.name === name)
}

function _studentsByColor() {
  const map = new Map()
  _state.students.forEach(s => {
    const key = s.house_color || '__none__'
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(s)
  })
  return map
}

function _colorOptions(current = '') {
  return [
    `<option value="">— เลือกสี —</option>`,
    ..._state.groups.map(g => `<option value="${_esc(g.name)}" ${g.name === current ? 'selected' : ''}>สี${_esc(g.name)}</option>`),
  ].join('')
}

function _teacherOptions(current = '') {
  return [
    `<option value="">— ไม่ระบุ —</option>`,
    ..._state.teachers.map(t => `<option value="${t.id}" ${String(t.id) === String(current) ? 'selected' : ''}>${_esc(t.full_name)}${t.teacher_code ? ` (${_esc(t.teacher_code)})` : ''}</option>`),
  ].join('')
}

function _competitionOptions(current = '') {
  return [
    `<option value="">— เลือกรายการแข่งขัน —</option>`,
    ..._state.competitions.map(s => `<option value="${s.id}" ${String(s.id) === String(current) ? 'selected' : ''}>${_esc(s.name)}${s.code ? ` (${_esc(s.code)})` : ''}</option>`),
  ].join('')
}

function _studentOptions() {
  const q = _state.search.trim().toLowerCase()
  const list = _state.students
    .filter(s => !q || [
      s.student_code,
      s.full_name,
      s.main_room,
      s.house_color,
    ].some(v => String(v ?? '').toLowerCase().includes(q)))
    .slice(0, 60)
  return [
    `<option value="">— เลือกนักเรียน —</option>`,
    ...list.map(s => `<option value="${s.id}">${_esc(s.student_code)} · ${_esc(s.full_name)} · ${_esc(s.main_room || '—')} · สี${_esc(s.house_color || '—')}</option>`),
  ].join('')
}

function _schemaNotice() {
  if (!_state.missingSchema) return ''
  return `
    <div class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
      <div class="font-bold mb-1">ยังไม่ได้ติดตั้งตารางกีฬาสีใน Supabase project เดิม</div>
      <p>ให้รันไฟล์ <code class="font-mono bg-white/70 px-1.5 py-0.5 rounded">patch_sports_module.sql</code> ใน Supabase SQL Editor ก่อนใช้งานบันทึกข้อมูลจริง</p>
      <p class="mt-1 text-xs text-amber-700">${_esc(_state.missingMessage)}</p>
    </div>
  `
}

function _summaryCards() {
  const colorMap = _studentsByColor()
  const assigned = _state.students.filter(s => s.house_color).length
  const done = _state.matches.filter(m => m.status === 'done').length
  const pendingQueue = _queue().length
  const items = [
    ['นักเรียนทั้งหมด', _state.students.length, 'คน', 'bg-indigo-50 text-indigo-700'],
    ['ระบุสีแล้ว', assigned, 'คน', 'bg-emerald-50 text-emerald-700'],
    ['คณะสี', Math.max(colorMap.size - (colorMap.has('__none__') ? 1 : 0), _state.groups.length), 'สี', 'bg-fuchsia-50 text-fuchsia-700'],
    ['รายการแข่งขัน', _state.competitions.length, 'รายการ', 'bg-sky-50 text-sky-700'],
    ['ลงทะเบียนนักกีฬา', _state.registrations.length, 'รายการ', 'bg-orange-50 text-orange-700'],
    ['แข่งเสร็จแล้ว', done, 'แมตช์', 'bg-slate-100 text-slate-700'],
    ['รอซิงก์', pendingQueue, 'รายการ', pendingQueue ? 'bg-amber-50 text-amber-700' : 'bg-gray-50 text-gray-500'],
  ]
  return `
    <div class="grid grid-cols-2 lg:grid-cols-7 gap-3">
      ${items.map(([label, value, unit, cls]) => `
        <div class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <p class="text-[11px] text-gray-400 font-semibold">${label}</p>
          <div class="mt-2 flex items-end gap-1">
            <span class="text-2xl font-bold ${cls.split(' ')[1]}">${Number(value).toLocaleString()}</span>
            <span class="text-xs text-gray-400 mb-1">${unit}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `
}

function _eventPanel() {
  if (!_state.event && !_state.missingSchema) {
    return `
      <div class="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p class="font-bold text-indigo-900">ยังไม่มีกิจกรรมกีฬาสี</p>
          <p class="text-xs text-indigo-600 mt-0.5">สร้างกิจกรรมปีปัจจุบันก่อน แล้วค่อยเพิ่มรายการแข่งขัน/ลงทะเบียน</p>
        </div>
        <button id="sports-create-event" class="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">สร้างกิจกรรมกีฬาสีปีนี้</button>
      </div>
    `
  }
  if (!_state.event) return ''
  return `
    <div class="rounded-2xl border border-gray-100 bg-white p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
      <div>
        <p class="text-xs text-gray-400 font-semibold">กิจกรรมปัจจุบัน</p>
        <h3 class="text-lg font-bold text-gray-800">${_esc(_state.event.name)}</h3>
        <p class="text-xs text-gray-500">ปีการศึกษา ${_esc(_state.event.academic_year)} · ${_fmtDate(_state.event.start_date)} - ${_fmtDate(_state.event.end_date)} · สถานะ ${_esc(_state.event.status)}</p>
      </div>
      <a href="sports.html" target="_blank" class="px-4 py-2 rounded-xl border border-indigo-200 text-indigo-700 text-sm font-semibold hover:bg-indigo-50 transition">เปิดหน้าเต็ม</a>
    </div>
  `
}

function _colorOverview() {
  const map = _studentsByColor()
  const groups = _state.groups.length ? _state.groups : [...map.keys()].filter(k => k !== '__none__').map(name => ({ name, color_hex: '#64748b', gender: '' }))
  const noneCount = map.get('__none__')?.length ?? 0
  return `
    <section class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between gap-3 mb-3">
        <h3 class="font-bold text-gray-800">สรุปนักเรียนตามสี</h3>
        <button id="sports-print-roster" class="px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50">พิมพ์รายชื่อสี</button>
      </div>
      <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
        ${groups.map(g => {
          const count = map.get(g.name)?.length ?? 0
          return `<div class="rounded-xl border border-gray-100 p-3" style="background:${g.color_hex || '#64748b'}12">
            <div class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 rounded-full border border-white shadow" style="background:${g.color_hex || '#64748b'}"></span>
              <span class="font-bold text-gray-800">สี${_esc(g.name)}</span>
              <span class="ml-auto text-xs text-gray-400">${_esc(g.gender || '')}</span>
            </div>
            <p class="mt-3 text-2xl font-bold" style="color:${g.color_hex || '#334155'}">${count.toLocaleString()}</p>
            <p class="text-xs text-gray-400">นักเรียน</p>
          </div>`
        }).join('')}
        ${noneCount ? `<div class="rounded-xl border border-amber-100 bg-amber-50 p-3">
          <div class="font-bold text-amber-700">ยังไม่มีสี</div>
          <p class="mt-3 text-2xl font-bold text-amber-600">${noneCount.toLocaleString()}</p>
          <p class="text-xs text-amber-500">ควรจัดสีให้ครบก่อนวันงาน</p>
        </div>` : ''}
      </div>
    </section>
  `
}

function _formsPanel() {
  return `
    <div class="grid xl:grid-cols-3 gap-4">
      <form id="sports-competition-form" class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm space-y-3">
        <h3 class="font-bold text-gray-800">เพิ่มรายการแข่งขัน</h3>
        <input name="name" required placeholder="ชื่อรายการ เช่น ฟุตบอล ม.ต้น" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <div class="grid grid-cols-2 gap-2">
          <input name="code" placeholder="รหัส เช่น SP001" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          <select name="category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
            <option value="sport">กีฬา</option>
            <option value="academic">วิชาการ/ทักษะ</option>
            <option value="parade">พาเหรด</option>
            <option value="page">สแตนด์/เพจ</option>
            <option value="other">อื่น ๆ</option>
          </select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <select name="gender" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
            <option value="">รวม</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
          <input name="max_athletes" type="number" min="0" placeholder="โควตา/สี" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <input name="venue" placeholder="สนาม/สถานที่" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <select name="responsible_teacher_id" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${_teacherOptions()}
        </select>
        <button class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">บันทึกรายการแข่งขัน</button>
      </form>

      <form id="sports-registration-form" class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm space-y-3">
        <h3 class="font-bold text-gray-800">ลงทะเบียนนักกีฬา</h3>
        <select name="competition_id" required class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${_competitionOptions()}
        </select>
        <input id="sports-student-search" placeholder="ค้นหานักเรียนก่อนเลือก..." value="${_esc(_state.search)}" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <select id="sports-student-select" name="student_id" required class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${_studentOptions()}
        </select>
        <div class="grid grid-cols-2 gap-2">
          <input name="jersey_number" placeholder="เบอร์เสื้อ" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          <input name="note" placeholder="หมายเหตุ" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <button class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">บันทึกลงทะเบียน</button>
      </form>

      <form id="sports-match-form" class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm space-y-3">
        <h3 class="font-bold text-gray-800">เพิ่มแมตช์แข่งขัน</h3>
        <select name="competition_id" required class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${_competitionOptions()}
        </select>
        <div class="grid grid-cols-2 gap-2">
          <select name="team_a_color" required class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">${_colorOptions()}</select>
          <select name="team_b_color" required class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">${_colorOptions()}</select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <input name="scheduled_date" type="date" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          <input name="scheduled_time" type="time" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <input name="venue" placeholder="สนาม/สถานที่" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <button class="w-full py-2.5 rounded-xl bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition">บันทึกแมตช์</button>
      </form>
    </div>
  `
}

function _competitionsTable() {
  const rows = _state.competitions
  return `
    <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      <div class="p-4 border-b border-gray-100 flex items-center justify-between gap-3">
        <h3 class="font-bold text-gray-800">รายการแข่งขัน</h3>
        <span class="text-xs text-gray-400">${rows.length.toLocaleString()} รายการ</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500">
            <tr><th class="px-4 py-3 text-left">รหัส</th><th class="px-4 py-3 text-left">รายการ</th><th class="px-4 py-3 text-left">ประเภท</th><th class="px-4 py-3 text-left">เพศ</th><th class="px-4 py-3 text-left">สถานที่</th><th class="px-4 py-3 text-left">ผู้รับผิดชอบ</th></tr>
          </thead>
          <tbody>
            ${rows.length ? rows.map(r => `
              <tr class="border-t border-gray-50">
                <td class="px-4 py-3 font-mono text-xs text-gray-500">${_esc(r.code || '—')}</td>
                <td class="px-4 py-3 font-semibold text-gray-800">${_esc(r.name)}</td>
                <td class="px-4 py-3 text-gray-500">${_esc(r.category)}</td>
                <td class="px-4 py-3 text-gray-500">${_esc(r.gender || 'รวม')}</td>
                <td class="px-4 py-3 text-gray-500">${_esc(r.venue || '—')}</td>
                <td class="px-4 py-3 text-gray-500">${_esc(r.teachers?.full_name || '—')}</td>
              </tr>
            `).join('') : `<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ยังไม่มีรายการแข่งขัน</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `
}

function _registrationsTable() {
  const rows = _state.registrations.slice(0, 80)
  return `
    <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      <div class="p-4 border-b border-gray-100 flex items-center justify-between gap-3">
        <h3 class="font-bold text-gray-800">รายการลงทะเบียนล่าสุด</h3>
        <span class="text-xs text-gray-400">แสดง ${rows.length.toLocaleString()} จาก ${_state.registrations.length.toLocaleString()}</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500">
            <tr><th class="px-4 py-3 text-left">นักเรียน</th><th class="px-4 py-3 text-left">ห้อง</th><th class="px-4 py-3 text-left">สี</th><th class="px-4 py-3 text-left">รายการ</th><th class="px-4 py-3 text-left">เบอร์</th><th class="px-4 py-3 text-left">เวลา</th></tr>
          </thead>
          <tbody>
            ${rows.length ? rows.map(r => {
              const st = r.students || {}
              const g = _colorGroup(st.house_color)
              return `<tr class="border-t border-gray-50">
                <td class="px-4 py-3">
                  <div class="font-semibold text-gray-800">${_esc(st.full_name || '—')}</div>
                  <div class="text-xs text-gray-400">${_esc(st.student_code || '')}</div>
                </td>
                <td class="px-4 py-3 text-gray-500">${_esc(st.main_room || '—')}</td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold" style="background:${g?.color_hex || '#64748b'}18;color:${g?.color_hex || '#475569'}">
                    <span class="w-2 h-2 rounded-full" style="background:${g?.color_hex || '#64748b'}"></span> สี${_esc(st.house_color || '—')}
                  </span>
                </td>
                <td class="px-4 py-3 text-gray-600">${_esc(r.sports_competitions?.name || '—')}</td>
                <td class="px-4 py-3 text-gray-500">${_esc(r.jersey_number || '—')}</td>
                <td class="px-4 py-3 text-xs text-gray-400">${_esc(r.registered_at ? new Date(r.registered_at).toLocaleString('th-TH') : '—')}</td>
              </tr>`
            }).join('') : `<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ยังไม่มีการลงทะเบียน</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `
}

function _matchesTable() {
  const rows = _state.matches
  return `
    <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      <div class="p-4 border-b border-gray-100 flex items-center justify-between gap-3">
        <h3 class="font-bold text-gray-800">ตารางแข่งขัน</h3>
        <span class="text-xs text-gray-400">${rows.length.toLocaleString()} แมตช์</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500">
            <tr><th class="px-4 py-3 text-left">วันเวลา</th><th class="px-4 py-3 text-left">รายการ</th><th class="px-4 py-3 text-left">คู่แข่ง</th><th class="px-4 py-3 text-left">ผล</th><th class="px-4 py-3 text-left">สถานะ</th><th class="px-4 py-3 text-left">สถานที่</th></tr>
          </thead>
          <tbody>
            ${rows.length ? rows.map(r => `
              <tr class="border-t border-gray-50">
                <td class="px-4 py-3 text-gray-500">${_fmtDate(r.scheduled_date)} ${_esc(r.scheduled_time ? String(r.scheduled_time).slice(0, 5) : '')}</td>
                <td class="px-4 py-3 font-semibold text-gray-800">${_esc(r.sports_competitions?.name || '—')}</td>
                <td class="px-4 py-3 text-gray-600">สี${_esc(r.team_a_color || '—')} พบ สี${_esc(r.team_b_color || '—')}</td>
                <td class="px-4 py-3 font-mono text-gray-600">${_esc(r.score_a || '—')} : ${_esc(r.score_b || '—')}</td>
                <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${r.status === 'done' ? 'bg-emerald-50 text-emerald-700' : r.status === 'live' ? 'bg-amber-50 text-amber-700' : 'bg-gray-100 text-gray-600'}">${_esc(r.status || 'pending')}</span></td>
                <td class="px-4 py-3 text-gray-500">${_esc(r.venue || '—')}</td>
              </tr>
            `).join('') : `<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ยังไม่มีตารางแข่งขัน</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `
}

function _queuePanel() {
  const rows = _queue()
  return `
    <section class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 class="font-bold text-gray-800">Offline Sync Queue</h3>
          <p class="text-xs text-gray-400 mt-0.5">ถ้าเน็ตหลุดระหว่างบันทึก ระบบจะเก็บงานไว้ในเครื่องนี้และกดซิงก์ภายหลังได้</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400">ค้าง ${rows.length.toLocaleString()} รายการ</span>
          <button id="sports-sync-queue" class="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 disabled:opacity-40" ${rows.length ? '' : 'disabled'}>ซิงก์ตอนนี้</button>
        </div>
      </div>
      ${rows.length ? `<div class="mt-3 space-y-2 text-xs text-gray-500">
        ${rows.slice(0, 8).map(r => `<div class="rounded-xl border border-gray-100 bg-gray-50 px-3 py-2 flex items-center justify-between"><span>${_esc(r.type)}</span><span>${_esc(new Date(r.created_at).toLocaleString('th-TH'))}</span></div>`).join('')}
      </div>` : ''}
    </section>
  `
}

function _render() {
  _setActiveNav('sports-admin')
  const title = document.getElementById('page-title')
  if (title) title.textContent = 'ระบบกีฬาสี'

  if (!_state.loaded && !_state.students.length) {
    _setContent(`<div class="min-h-[50vh] flex items-center justify-center text-gray-400">กำลังโหลดระบบกีฬาสี...</div>`)
    return
  }

  _setContent(`
    <div class="max-w-7xl mx-auto space-y-5 animate-fade">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-wider">AZIZGAMES in PP5 Online</p>
          <h2 class="text-2xl font-bold text-gray-900">ระบบจัดการกีฬาสี</h2>
          <p class="text-sm text-gray-500 mt-1">ใช้ฐานนักเรียน/ครู/สีเดิมจาก PP5 Online ไม่สร้าง Supabase project เพิ่ม</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button id="sports-refresh" class="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">รีเฟรช</button>
          <a href="patch_sports_module.sql" target="_blank" class="px-4 py-2 rounded-xl border border-amber-200 text-sm font-semibold text-amber-700 hover:bg-amber-50 transition">ดู SQL patch</a>
        </div>
      </div>

      ${_schemaNotice()}
      ${_eventPanel()}
      ${_summaryCards()}
      ${_colorOverview()}
      ${_formsPanel()}
      ${_competitionsTable()}
      ${_registrationsTable()}
      ${_matchesTable()}
      ${_queuePanel()}
    </div>
  `)
  _bind()
}

async function _createEvent() {
  const year = new Date().getFullYear() + 543
  const payload = {
    name: `กีฬาสีอาซิซเกมส์ ${year}`,
    academic_year: year,
    status: 'draft',
  }
  const { error } = await supabase.from(TABLES.events).insert(payload)
  if (error) throw error
}

function _formData(form) {
  return Object.fromEntries(new FormData(form).entries())
}

async function _saveCompetition(payload) {
  if (!_state.event) await _createEvent()
  await _loadSportsData()
  const data = {
    event_id: _state.event.id,
    code: payload.code || null,
    name: payload.name,
    category: payload.category || 'sport',
    gender: payload.gender || null,
    max_athletes: payload.max_athletes ? Number(payload.max_athletes) : null,
    venue: payload.venue || null,
    responsible_teacher_id: payload.responsible_teacher_id ? Number(payload.responsible_teacher_id) : null,
    is_active: true,
  }
  const { error } = await supabase.from(TABLES.competitions).insert(data)
  if (error) throw error
}

async function _saveRegistration(payload) {
  const student = _state.students.find(s => String(s.id) === String(payload.student_id))
  if (!student) throw new Error('ไม่พบนักเรียน')
  const data = {
    event_id: _state.event.id,
    competition_id: Number(payload.competition_id),
    student_id: Number(payload.student_id),
    team_color: student.house_color || null,
    jersey_number: payload.jersey_number || null,
    note: payload.note || null,
  }
  const { error } = await supabase.from(TABLES.registrations).insert(data)
  if (error) throw error
}

async function _saveMatch(payload) {
  const data = {
    event_id: _state.event.id,
    competition_id: Number(payload.competition_id),
    team_a_color: payload.team_a_color,
    team_b_color: payload.team_b_color,
    scheduled_date: payload.scheduled_date || null,
    scheduled_time: payload.scheduled_time || null,
    venue: payload.venue || null,
    status: 'pending',
  }
  const { error } = await supabase.from(TABLES.matches).insert(data)
  if (error) throw error
}

async function _tryOrQueue(type, payload, runner) {
  try {
    await runner(payload)
    showToast('บันทึกสำเร็จ', 'success')
  } catch (err) {
    if (!navigator.onLine || /fetch|network|Failed to fetch/i.test(err?.message ?? '')) {
      _enqueue(type, payload)
      showToast('เน็ตไม่พร้อม บันทึกไว้รอซิงก์แล้ว', 'warning')
    } else {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      throw err
    }
  }
}

async function _replay(item) {
  if (item.type === 'competition') return _saveCompetition(item.payload)
  if (item.type === 'registration') return _saveRegistration(item.payload)
  if (item.type === 'match') return _saveMatch(item.payload)
}

async function _syncQueue() {
  const rows = _queue()
  if (!rows.length) return
  const failed = []
  for (const item of rows) {
    try { await _replay(item) }
    catch { failed.push(item) }
  }
  _saveQueue(failed)
  showToast(failed.length ? `ซิงก์สำเร็จบางส่วน ค้าง ${failed.length} รายการ` : 'ซิงก์ข้อมูลค้างสำเร็จทั้งหมด', failed.length ? 'warning' : 'success')
  await _loadAll()
}

function _bind() {
  document.getElementById('sports-refresh')?.addEventListener('click', () => _loadAll())
  document.getElementById('sports-create-event')?.addEventListener('click', async () => {
    try { await _createEvent(); showToast('สร้างกิจกรรมแล้ว', 'success'); await _loadAll() }
    catch (err) { showToast('สร้างกิจกรรมไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
  })
  document.getElementById('sports-print-roster')?.addEventListener('click', () => window.print())
  document.getElementById('sports-sync-queue')?.addEventListener('click', _syncQueue)

  const search = document.getElementById('sports-student-search')
  search?.addEventListener('input', () => {
    _state.search = search.value
    const sel = document.getElementById('sports-student-select')
    if (sel) sel.innerHTML = _studentOptions()
  })

  document.getElementById('sports-competition-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    if (_state.missingSchema) { showToast('กรุณารัน patch_sports_module.sql ก่อน', 'warning'); return }
    const form = e.currentTarget
    const payload = _formData(form)
    if (!payload.name?.trim()) { showToast('กรุณากรอกชื่อรายการ', 'warning'); return }
    try { await _tryOrQueue('competition', payload, _saveCompetition); form.reset(); await _loadAll() } catch {}
  })

  document.getElementById('sports-registration-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    if (_state.missingSchema) { showToast('กรุณารัน patch_sports_module.sql ก่อน', 'warning'); return }
    if (!_state.event) { showToast('กรุณาสร้างกิจกรรมก่อน', 'warning'); return }
    const form = e.currentTarget
    const payload = _formData(form)
    if (!payload.competition_id || !payload.student_id) { showToast('กรุณาเลือกรายการและนักเรียน', 'warning'); return }
    try { await _tryOrQueue('registration', payload, _saveRegistration); form.reset(); _state.search = ''; await _loadAll() } catch {}
  })

  document.getElementById('sports-match-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    if (_state.missingSchema) { showToast('กรุณารัน patch_sports_module.sql ก่อน', 'warning'); return }
    if (!_state.event) { showToast('กรุณาสร้างกิจกรรมก่อน', 'warning'); return }
    const form = e.currentTarget
    const payload = _formData(form)
    if (!payload.competition_id || !payload.team_a_color || !payload.team_b_color) { showToast('กรุณากรอกคู่แข่งขันให้ครบ', 'warning'); return }
    if (payload.team_a_color === payload.team_b_color) { showToast('สีคู่แข่งต้องไม่ซ้ำกัน', 'warning'); return }
    try { await _tryOrQueue('match', payload, _saveMatch); form.reset(); await _loadAll() } catch {}
  })
}

export async function renderSportsAdmin() {
  _setActiveNav('sports-admin')
  await _loadAll()
}
