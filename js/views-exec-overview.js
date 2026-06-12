import { getExecClassOverview, getDepartments, getSystemConfig, getTeachers } from './api.js'

// ─── Helpers ────────────────────────────────────────────────────────────────
const _esc = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

function setActive(nav) {
  document.querySelectorAll('[data-nav]').forEach(el => {
    const on = el.dataset.nav === nav
    el.classList.toggle('bg-indigo-800', on)
    el.classList.toggle('text-white', on)
    el.classList.toggle('text-indigo-200', !on)
  })
}

function setContent(html) {
  document.getElementById('main-content').innerHTML = html
}

const STATUS_LABEL = { green: 'ปกติ', yellow: 'เริ่มช้า', red: 'ต้องตามงาน', gray: 'ยังไม่เริ่ม' }
const STATUS_BG = {
  green: 'bg-emerald-100 text-emerald-700',
  yellow: 'bg-amber-100 text-amber-700',
  red: 'bg-red-100 text-red-600',
  gray: 'bg-gray-100 text-gray-400',
}
const DIM_ICON = { doc: '📋', dates: '📅', att: '✅', score: '📝' }
const DIM_LABEL = { doc: 'ปก ปพ.5', dates: 'วันที่สอน', att: 'เช็คชื่อ', score: 'บันทึกคะแนน' }

// badge ไอคอน + สีพื้นตามสถานะ (green/yellow/red/gray)
function _badge(icon, label, status, sizeClass = 'w-8 h-8 text-base') {
  return `<span class="inline-flex items-center justify-center ${sizeClass} rounded-lg ${STATUS_BG[status]}" title="${label}">${icon}</span>`
}
// badge ไอคอนตามมิติ (doc/dates/att/score) ของห้องเรียน
function _statusBadge(dim, status, sizeClass = 'w-8 h-8 text-base') {
  return _badge(DIM_ICON[dim], `${DIM_LABEL[dim]}: ${STATUS_LABEL[status]}`, status, sizeClass)
}

const KPI_INFO = {
  doc:   'สัดส่วนห้องเรียนที่กรอกข้อมูลหน้าปกเอกสาร ปพ.5 (มาตรฐานการเรียนรู้/ตัวชี้วัด) เรียบร้อยแล้ว',
  dates: 'สัดส่วนห้องเรียนที่ตั้งวันที่สอนในตารางเรียบร้อยแล้ว',
  att:   'สัดส่วนห้องเรียน (ที่เริ่มเรียนแล้ว) ที่เช็คชื่อล่าสุดภายใน 7 วันที่ผ่านมา',
  score: 'สัดส่วนห้องเรียน (ที่ตั้งคอลัมน์คะแนนแล้ว) ที่กรอกคะแนนแล้วอย่างน้อย 80%',
}

// dept_code อาจซ้ำกันข้ามหมวด (เช่น SOC ทั้งสามัญและศาสนา) — แยกด้วย category จาก subject_group
function _deptCategory(subjectGroup) {
  if (['AGM', 'AGMVOC'].includes(subjectGroup)) return 'ศาสนา'
  if (subjectGroup === 'ACDMVOC') return 'สามัญปวช'
  return 'สามัญ'
}
function _matchDept(row, depts) {
  const category = _deptCategory(row.subject_group)
  return depts.find(d => d.dept_code === row.dept && d.category === category)
      ?? depts.find(d => d.dept_code === row.dept)
      ?? depts.find(d => d.dept_name === row.dept)
      ?? null
}

// จับคู่กลุ่มสาระของ "ครู" (teachers.dept + teachers.category เป็นคนละชุดกับ subject_group ของวิชา)
function _matchDeptForTeacher(t, depts) {
  if (!t.dept) return null
  return depts.find(d => d.dept_code === t.dept && d.category === t.category)
      ?? depts.find(d => d.dept_code === t.dept)
      ?? null
}

function _diffDays(todayStr, dateStr) {
  return Math.round((new Date(todayStr) - new Date(dateStr)) / 86400000)
}

// สถานะ 4 มิติของห้องเรียน 1 ห้อง
function _computeStatus(row, todayStr) {
  const doc = row.has_doc_rows ? 'green' : 'red'
  const dates = row.has_teaching_dates ? 'green' : 'red'

  let att
  if (!row.has_teaching_dates || (row.day1_date && row.day1_date > todayStr)) {
    att = 'gray' // ยังไม่เริ่มเรียน
  } else if (!row.last_check_date) {
    att = 'red' // เริ่มแล้วแต่ไม่เคยเช็คชื่อ
  } else {
    const days = _diffDays(todayStr, row.last_check_date)
    att = days <= 7 ? 'green' : days <= 14 ? 'yellow' : 'red'
  }

  let score
  if (!row.score_col_count) {
    score = 'gray' // ยังไม่ตั้งคอลัมน์คะแนน
  } else {
    const expected = row.student_count * row.score_col_count
    const pct = expected > 0 ? row.score_filled_count / expected : 0
    score = pct >= 0.8 ? 'green' : pct > 0 ? 'yellow' : 'red'
  }

  return { doc, dates, att, score }
}

// สถานะ "แย่ที่สุด" ของกลุ่ม (ไม่รวม gray ถ้ามีค่าอื่นในกลุ่ม)
function _worstStatus(statuses) {
  const real = statuses.filter(s => s !== 'gray')
  if (real.length === 0) return 'gray'
  if (real.includes('red')) return 'red'
  if (real.includes('yellow')) return 'yellow'
  return 'green'
}

function _needsAttention(status) {
  return Object.values(status).some(s => s === 'red' || s === 'yellow')
}

// ─── View: Executive Overview ─────────────────────────────────────────────────
export async function renderExecOverview() {
  setActive('exec-overview')
  document.getElementById('page-title').textContent = 'ภาพรวมผู้บริหาร'

  setContent(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="text-center py-16 text-gray-400">กำลังโหลดข้อมูล...</div>
  </div>`)

  let overview, depts, cfg, allTeachers
  try {
    [overview, depts, cfg, allTeachers] = await Promise.all([
      getExecClassOverview(),
      getDepartments(),
      getSystemConfig().catch(() => ({})),
      getTeachers(),
    ])
  } catch (err) {
    setContent(`<div class="max-w-6xl mx-auto animate-fade">
      <p class="text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${_esc(err.message ?? '')}</p>
    </div>`)
    return
  }

  const academicYear = cfg.academicYear ?? cfg.academic_year ?? ''
  const semester = cfg.semester ?? ''
  const todayStr = new Date().toISOString().slice(0, 10)

  // เตรียมข้อมูลต่อห้อง: สถานะ 4 มิติ + กลุ่มสาระ
  const classRows = overview
    .filter(r => r.subject_id != null)
    .map(r => {
      const dept = _matchDept(r, depts)
      return {
        ...r,
        deptKey: dept?.id != null ? `d${dept.id}` : `u_${r.dept ?? '-'}`,
        deptName: dept?.dept_name ?? r.dept ?? 'ไม่ระบุกลุ่มสาระ',
        status: _computeStatus(r, todayStr),
      }
    })

  // จับกลุ่มตามกลุ่มสาระ
  const groupMap = new Map()
  for (const r of classRows) {
    if (!groupMap.has(r.deptKey)) groupMap.set(r.deptKey, { deptName: r.deptName, rows: [] })
    groupMap.get(r.deptKey).rows.push(r)
  }
  const groups = [...groupMap.entries()]
    .map(([key, g]) => ({ key, ...g }))
    .sort((a, b) => a.deptName.localeCompare(b.deptName, 'th'))

  // สถานะครูผู้สอนทุกคน: ลงทะเบียนใช้งาน → เพิ่มวิชา/ห้องที่สอน → เช็คชื่อเป็นปัจจุบัน
  const classRowsByTeacher = new Map()
  for (const r of classRows) {
    if (r.teacher_id == null) continue
    if (!classRowsByTeacher.has(r.teacher_id)) classRowsByTeacher.set(r.teacher_id, [])
    classRowsByTeacher.get(r.teacher_id).push(r)
  }

  const teacherStatuses = allTeachers
    .filter(t => t.staff_type === 'ครู')
    .map(t => {
      const rows = classRowsByTeacher.get(t.id) ?? []
      const registered = t.profile_id != null
      const classCount = rows.length
      const attWorst = classCount > 0 ? _worstStatus(rows.map(r => r.status.att)) : 'gray'

      let dept
      if (rows[0]) {
        dept = { key: rows[0].deptKey, name: rows[0].deptName }
      } else {
        const d = _matchDeptForTeacher(t, depts)
        dept = d ? { key: `d${d.id}`, name: d.dept_name } : { key: null, name: 'ไม่ระบุกลุ่มสาระ' }
      }

      let severity
      if (!registered) severity = 3
      else if (classCount === 0) severity = 2
      else if (attWorst === 'red') severity = 1.5
      else if (attWorst === 'yellow') severity = 1
      else severity = 0

      return {
        teacherId: t.id, teacherName: t.full_name,
        deptKey: dept.key, deptName: dept.name,
        registered, classCount, attWorst, severity,
      }
    })
    .sort((a, b) => b.severity - a.severity || a.teacherName.localeCompare(b.teacherName, 'th'))

  const unregisteredCount = teacherStatuses.filter(t => !t.registered).length
  const noCourseCount = teacherStatuses.filter(t => t.registered && t.classCount === 0).length
  const attBehindCount = teacherStatuses.filter(t => t.registered && t.classCount > 0 && (t.attWorst === 'red' || t.attWorst === 'yellow')).length
  const teacherFollowupCount = teacherStatuses.filter(t => t.severity > 0).length

  // KPI รวมทั้งโรง: % ห้องที่ "เขียว" ต่อมิติ (ไม่รวม gray)
  function _kpi(dim) {
    const considered = classRows.filter(r => r.status[dim] !== 'gray')
    const green = considered.filter(r => r.status[dim] === 'green').length
    const grayCount = classRows.length - considered.length
    const pct = considered.length > 0 ? Math.round((green / considered.length) * 100) : null
    return { pct, green, total: considered.length, grayCount }
  }
  const kpis = { doc: _kpi('doc'), dates: _kpi('dates'), att: _kpi('att'), score: _kpi('score') }

  // KPI funnel ครูผู้สอน: ลงทะเบียน → มีตารางสอน/คอร์ส → เช็คชื่อเป็นปัจจุบัน (แต่ละขั้นนับจากผู้ผ่านขั้นก่อนหน้า)
  const teacherTotal = teacherStatuses.length
  const teacherRegisteredCount = teacherStatuses.filter(t => t.registered).length
  const teacherHasCoursesCount = teacherStatuses.filter(t => t.registered && t.classCount > 0).length
  const teacherAttOkCount = teacherStatuses.filter(t => t.registered && t.classCount > 0 && t.attWorst === 'green').length
  const teacherKpis = {
    registered: { pct: teacherTotal > 0 ? Math.round(teacherRegisteredCount / teacherTotal * 100) : null, num: teacherRegisteredCount, total: teacherTotal },
    courses: { pct: teacherRegisteredCount > 0 ? Math.round(teacherHasCoursesCount / teacherRegisteredCount * 100) : null, num: teacherHasCoursesCount, total: teacherRegisteredCount },
    attendance: { pct: teacherHasCoursesCount > 0 ? Math.round(teacherAttOkCount / teacherHasCoursesCount * 100) : null, num: teacherAttOkCount, total: teacherHasCoursesCount },
  }

  const attentionTotal = classRows.filter(r => _needsAttention(r.status)).length
  const attentionPct = classRows.length > 0 ? Math.round((attentionTotal / classRows.length) * 100) : 0

  // ─── สถานะตัวกรอง ────────────────────────────────────────────────────────────
  let selectedDept = null   // deptKey หรือ null = ทั้งโรงเรียน
  let tableMode = 'attention' // 'attention' = เฉพาะที่ต้องตามงาน, 'all' = ทั้งหมด
  let searchQuery = ''
  let teacherFilter = null  // null | 'unregistered' | 'no-courses' | 'att-behind' — จากการคลิกการ์ด KPI ครู

  const TEACHER_FILTER_LABEL = {
    unregistered: '🔑 ครูที่ยังไม่ลงทะเบียนใช้งาน',
    'no-courses': '📚 ครูที่ลงทะเบียนแล้วแต่ยังไม่เพิ่มวิชา/ห้องที่สอน',
    'att-behind': '✅ ครูที่มีตารางสอนแล้วแต่เช็คชื่อไม่เป็นปัจจุบัน',
  }

  // ─── dept cards ────────────────────────────────────────────────────────────
  function renderDeptCards() {
    return groups.map(g => {
      const worst = {
        doc: _worstStatus(g.rows.map(r => r.status.doc)),
        dates: _worstStatus(g.rows.map(r => r.status.dates)),
        att: _worstStatus(g.rows.map(r => r.status.att)),
        score: _worstStatus(g.rows.map(r => r.status.score)),
      }
      const attentionCount = g.rows.filter(r => _needsAttention(r.status)).length
      const selected = selectedDept === g.key
      return `
        <button type="button" data-dept-key="${g.key}"
          class="exec-dept-card text-left bg-white rounded-2xl border shadow-sm p-4 transition
                 hover:border-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200
                 ${selected ? 'border-indigo-400 ring-2 ring-indigo-100' : 'border-gray-100'}">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-gray-700 text-sm">${_esc(g.deptName)}</h4>
            <span class="text-[10px] text-gray-400 whitespace-nowrap">${g.rows.length} ห้อง</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            ${_statusBadge('doc', worst.doc)}
            ${_statusBadge('dates', worst.dates)}
            ${_statusBadge('att', worst.att)}
            ${_statusBadge('score', worst.score)}
          </div>
          <p class="text-xs ${attentionCount > 0 ? 'text-amber-600 font-semibold' : 'text-emerald-600'}">
            ${attentionCount > 0 ? `⚠️ ${attentionCount} ห้องต้องตามงาน` : '✅ ปกติทั้งหมด'}
          </p>
          <p class="text-[10px] text-indigo-400 mt-1">${selected ? '🔽 กำลังดูกลุ่มนี้ — คลิกซ้ำเพื่อยกเลิก' : 'คลิกเพื่อดูรายละเอียด ▸'}</p>
        </button>`
    }).join('')
  }

  // ─── table header (ชื่อ + ปุ่มสลับมุมมอง/ล้างตัวกรอง) ─────────────────────────
  function renderTableHeader() {
    const deptName = selectedDept ? groups.find(g => g.key === selectedDept)?.deptName : null
    const scopeLabel = tableMode === 'all' ? 'ห้องเรียนทั้งหมด' : 'ห้องที่ต้องตามงาน'
    const title = deptName ? `${scopeLabel} · ${_esc(deptName)}` : `${scopeLabel} (ทั้งโรงเรียน)`
    return `
      <div>
        <h4 class="font-bold text-gray-700">📋 ${title}</h4>
        <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-3 flex-wrap">
          <span class="inline-flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-100 border border-emerald-200"></span>ปกติ</span>
          <span class="inline-flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-amber-100 border border-amber-200"></span>เริ่มล่าช้า</span>
          <span class="inline-flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-red-100 border border-red-200"></span>ต้องตามงาน</span>
          <span class="inline-flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-gray-100 border border-gray-200"></span>ยังไม่เริ่ม/ไม่มีข้อมูล</span>
        </p>
      </div>
      <div class="flex items-center gap-2">
        <button id="exec-toggle-scope" type="button"
          class="text-xs font-medium px-2.5 py-1.5 rounded-lg border transition
                 ${tableMode === 'all' ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}">
          ${tableMode === 'all' ? '👁️ ดูทั้งหมด' : '⚠️ เฉพาะที่ต้องตามงาน'}
        </button>
        ${selectedDept ? `<button id="exec-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5">ล้างตัวกรอง ✕</button>` : ''}
      </div>`
  }

  // ─── class table body ─────────────────────────────────────────────────────
  function renderClassTable() {
    let rows = classRows
    if (tableMode === 'attention') rows = rows.filter(r => _needsAttention(r.status))
    if (selectedDept) rows = rows.filter(r => r.deptKey === selectedDept)
    if (searchQuery) {
      rows = rows.filter(r =>
        (r.class_name ?? '').toLowerCase().includes(searchQuery) ||
        (r.subject_name ?? '').toLowerCase().includes(searchQuery) ||
        (r.teacher_name ?? '').toLowerCase().includes(searchQuery))
    }

    rows = [...rows].sort((a, b) => {
      const score = s => Object.values(s).reduce((n, v) => n + (v === 'red' ? 2 : v === 'yellow' ? 1 : 0), 0)
      return score(b.status) - score(a.status)
    })

    if (rows.length === 0) {
      return `<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบห้องเรียนตามเงื่อนไขที่เลือก</p>`
    }

    return `
      <div class="overflow-x-auto max-h-[600px] overflow-y-auto">
        <table class="w-full text-sm">
          <thead class="sticky top-0 bg-gray-50 text-gray-500 text-xs">
            <tr>
              <th class="px-4 py-2 text-left">วิชา / ห้อง</th>
              <th class="px-4 py-2 text-left">ครูผู้สอน</th>
              <th class="px-4 py-2 text-left">กลุ่มสาระ</th>
              <th class="px-4 py-2 text-center">ปก ปพ.5</th>
              <th class="px-4 py-2 text-center">เช็คชื่อ</th>
              <th class="px-4 py-2 text-center">คะแนน</th>
              <th class="px-4 py-2 text-center">วันที่สอน</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${rows.map(r => `
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-2">
                  <p class="font-medium text-gray-700">${_esc(r.class_name)}</p>
                  <p class="text-xs text-gray-400">${_esc(r.subject_name ?? '')}</p>
                </td>
                <td class="px-4 py-2 text-gray-500">${_esc(r.teacher_name ?? '-')}</td>
                <td class="px-4 py-2 text-gray-500">${_esc(r.deptName)}</td>
                <td class="px-4 py-2 text-center">${_statusBadge('doc', r.status.doc, 'w-7 h-7 text-sm')}</td>
                <td class="px-4 py-2 text-center">${_statusBadge('att', r.status.att, 'w-7 h-7 text-sm')}</td>
                <td class="px-4 py-2 text-center">${_statusBadge('score', r.status.score, 'w-7 h-7 text-sm')}</td>
                <td class="px-4 py-2 text-center">${_statusBadge('dates', r.status.dates, 'w-7 h-7 text-sm')}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`
  }

  // ─── teacher status table ────────────────────────────────────────────────
  function renderTeacherSection() {
    let list = teacherStatuses
    if (teacherFilter === 'unregistered') list = list.filter(t => !t.registered)
    else if (teacherFilter === 'no-courses') list = list.filter(t => t.registered && t.classCount === 0)
    else if (teacherFilter === 'att-behind') list = list.filter(t => t.registered && t.classCount > 0 && (t.attWorst === 'red' || t.attWorst === 'yellow'))
    else if (tableMode === 'attention') list = list.filter(t => t.severity > 0)

    if (selectedDept) list = list.filter(t => t.deptKey === selectedDept)
    if (searchQuery) list = list.filter(t => (t.teacherName ?? '').toLowerCase().includes(searchQuery))

    const title = teacherFilter
      ? `${TEACHER_FILTER_LABEL[teacherFilter]} (${list.length} คน)`
      : tableMode === 'all'
        ? `ครูผู้สอนทั้งหมด (${list.length}/${teacherStatuses.length} คน)`
        : `ครูที่ต้องติดตาม (${list.length} คน)`

    const body = list.length === 0
      ? `<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่พบครูตามเงื่อนไขที่เลือก</p>`
      : `<div class="overflow-x-auto max-h-[400px] overflow-y-auto">
          <table class="w-full text-sm">
            <thead class="sticky top-0 bg-gray-50 text-gray-500 text-xs">
              <tr>
                <th class="px-4 py-2 text-left">ชื่อครู</th>
                <th class="px-4 py-2 text-left">กลุ่มสาระ</th>
                <th class="px-4 py-2 text-center">ลงทะเบียน</th>
                <th class="px-4 py-2 text-center">วิชา/ห้องสอน</th>
                <th class="px-4 py-2 text-center">เช็คชื่อ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${list.map(t => `
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-2 font-medium text-gray-700">${_esc(t.teacherName)}</td>
                  <td class="px-4 py-2 text-gray-500">${_esc(t.deptName)}</td>
                  <td class="px-4 py-2 text-center">${_badge('🔑',
                    t.registered ? 'ลงทะเบียนใช้งานแล้ว' : 'ยังไม่ลงทะเบียนใช้งาน',
                    t.registered ? 'green' : 'red', 'w-7 h-7 text-sm')}</td>
                  <td class="px-4 py-2 text-center">${_badge('📚',
                    t.classCount > 0 ? `มีวิชา/ห้องที่สอน ${t.classCount} ห้อง` : (t.registered ? 'ยังไม่เพิ่มวิชา/ห้องที่สอน' : 'ยังไม่ลงทะเบียน'),
                    t.classCount > 0 ? 'green' : (t.registered ? 'red' : 'gray'), 'w-7 h-7 text-sm')}</td>
                  <td class="px-4 py-2 text-center">${t.classCount > 0
                    ? _badge('✅', `เช็คชื่อ: ${STATUS_LABEL[t.attWorst]}`, t.attWorst, 'w-7 h-7 text-sm')
                    : _badge('✅', 'ยังไม่มีวิชา/ห้องที่สอน', 'gray', 'w-7 h-7 text-sm')}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>`

    return `
      <div class="px-5 py-3 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h4 class="font-bold text-gray-700">👤 ${title}</h4>
          <p class="text-[11px] text-gray-400 mt-0.5">ติดตาม 3 ขั้น: ลงทะเบียนใช้งาน → เพิ่มวิชา/ห้องที่สอน → เช็คชื่อเป็นปัจจุบัน</p>
        </div>
        ${teacherFilter ? `<button id="exec-teacher-clear-filter" type="button" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1.5 whitespace-nowrap">ล้างตัวกรอง ✕</button>` : ''}
      </div>
      ${body}`
  }

  // ─── KPI cards ────────────────────────────────────────────────────────────
  function _kpiCard({ icon, label, info, pct, numerator, denominator, unit = 'ห้อง', extraNote = '', filterKey = null, active = false }) {
    const pctColor = pct == null ? 'text-gray-400'
      : pct >= 80 ? 'text-emerald-700' : pct >= 50 ? 'text-amber-600' : 'text-red-600'
    const tag = filterKey ? 'button' : 'div'
    const typeAttr = filterKey ? ' type="button"' : ''
    const dataAttr = filterKey ? ` data-teacher-filter="${filterKey}"` : ''
    const interactiveClasses = filterKey
      ? ` text-left w-full cursor-pointer transition hover:border-indigo-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200 ${active ? 'border-indigo-400 ring-2 ring-indigo-100' : ''}`
      : ''
    return `
      <${tag}${typeAttr}${dataAttr} class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5${interactiveClasses}" title="${_esc(info)}">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-indigo-50">${icon}</div>
          <p class="text-sm font-semibold text-gray-600">${label} <span class="text-gray-300 font-normal">ℹ️</span></p>
        </div>
        <p class="text-3xl font-extrabold ${pctColor}">${pct == null ? '—' : pct + '%'}</p>
        <p class="text-xs text-gray-400 mt-1">${denominator > 0 ? `${numerator}/${denominator} ${unit}` : 'ไม่มีข้อมูล'}${extraNote}</p>
        ${filterKey ? `<p class="text-[10px] text-indigo-400 mt-1">${active ? '🔽 กำลังดูรายชื่อนี้ — คลิกซ้ำเพื่อยกเลิก' : 'คลิกเพื่อดูรายชื่อ ▸'}</p>` : ''}
      </${tag}>`
  }

  function renderKpiCard(icon, label, dim) {
    const k = kpis[dim]
    return _kpiCard({
      icon, label, info: KPI_INFO[dim], pct: k.pct, numerator: k.green, denominator: k.total, unit: 'ห้อง',
      extraNote: k.grayCount > 0 ? ` <span class="text-gray-300">· ยังไม่เริ่ม ${k.grayCount}</span>` : '',
    })
  }

  function renderTeacherKpiCard(icon, label, info, k, extraNote = '', filterKey = null) {
    return _kpiCard({
      icon, label, info, pct: k.pct, numerator: k.num, denominator: k.total, unit: 'คน', extraNote,
      filterKey, active: teacherFilter === filterKey,
    })
  }

  function renderTeacherKpiCards() {
    return `
      ${renderTeacherKpiCard('🔑', 'ลงทะเบียนใช้งาน', 'สัดส่วนครู/บุคลากรที่ลงทะเบียนใช้งานระบบ ปพ.5 แล้ว (มีข้อมูลกลุ่มสาระ/กลุ่มวิชา)', teacherKpis.registered,
        unregisteredCount > 0 ? ` <span class="text-gray-300">· ยังไม่ลงทะเบียน ${unregisteredCount}</span>` : '', 'unregistered')}
      ${renderTeacherKpiCard('📚', 'สร้างตารางสอน/เพิ่มวิชา', 'สัดส่วนครูที่ลงทะเบียนแล้วและได้เพิ่มคอร์สวิชา/ห้องที่สอนแล้ว (จากครูที่ลงทะเบียนแล้ว)', teacherKpis.courses,
        noCourseCount > 0 ? ` <span class="text-gray-300">· ยังไม่เพิ่มวิชา ${noCourseCount}</span>` : '', 'no-courses')}
      ${renderTeacherKpiCard('✅', 'เช็คชื่อเป็นปัจจุบัน', 'สัดส่วนครูที่มีตารางสอนแล้วและเช็คชื่อล่าสุดภายใน 7 วัน (จากครูที่มีตารางสอนแล้ว)', teacherKpis.attendance,
        attBehindCount > 0 ? ` <span class="text-gray-300">· ไม่เป็นปัจจุบัน ${attBehindCount}</span>` : '', 'att-behind')}`
  }

  // ─── ผูก event handler ของส่วนที่ re-render ได้ ─────────────────────────────
  function attachInteractiveHandlers() {
    document.querySelectorAll('.exec-dept-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.deptKey
        if (selectedDept === key) {
          selectedDept = null
          tableMode = 'attention'
        } else {
          selectedDept = key
          tableMode = 'all'
        }
        refreshInteractive()
        document.getElementById('exec-table-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })
    document.getElementById('exec-clear-filter')?.addEventListener('click', () => {
      selectedDept = null
      tableMode = 'attention'
      refreshInteractive()
    })
    document.getElementById('exec-toggle-scope')?.addEventListener('click', () => {
      tableMode = tableMode === 'all' ? 'attention' : 'all'
      refreshInteractive()
    })
    document.querySelectorAll('[data-teacher-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.teacherFilter
        teacherFilter = teacherFilter === key ? null : key
        selectedDept = null
        searchQuery = ''
        refreshInteractive()
        document.getElementById('exec-teacher-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })
    document.getElementById('exec-teacher-clear-filter')?.addEventListener('click', () => {
      teacherFilter = null
      refreshInteractive()
    })
  }

  function refreshInteractive() {
    document.getElementById('exec-teacher-kpi').innerHTML = renderTeacherKpiCards()
    document.getElementById('exec-dept-cards').innerHTML = renderDeptCards()
    document.getElementById('exec-table-header').innerHTML = renderTableHeader()
    document.getElementById('exec-class-table').innerHTML = renderClassTable()
    document.getElementById('exec-teacher-section').innerHTML = renderTeacherSection()
    const sel = document.getElementById('exec-dept-select')
    if (sel) sel.value = selectedDept ?? ''
    const search = document.getElementById('exec-search')
    if (search) search.value = searchQuery
    attachInteractiveHandlers()
  }

  // ─── layout หลัก (render ครั้งเดียว) ────────────────────────────────────────
  setContent(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">🎯 ภาพรวมผู้บริหาร</h3>
      <p class="text-gray-500 text-sm mb-3">
        ${academicYear ? `ปีการศึกษา ${_esc(academicYear)}` : ''}${semester ? ` ภาคเรียนที่ ${_esc(semester)}` : ''}${(academicYear || semester) ? ' · ' : ''}ทั้งหมด ${classRows.length} ห้องเรียน
      </p>
      <p class="text-sm font-medium ${attentionTotal > 0 ? 'text-amber-700' : 'text-emerald-700'} bg-white/70 rounded-xl px-4 py-2.5">
        📌 สรุป: มี <b>${attentionTotal} ห้อง</b> (${attentionPct}%) ที่ต้องติดตามเร่งด่วน
      </p>
      ${teacherFollowupCount > 0 ? `
      <p class="text-sm font-medium text-amber-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">
        👤 มีครู <b>${teacherFollowupCount} คน</b> ที่ต้องติดตาม
        ${unregisteredCount > 0 ? ` · ยังไม่ลงทะเบียนใช้งาน <b>${unregisteredCount}</b> คน` : ''}
        ${noCourseCount > 0 ? ` · ยังไม่เพิ่มวิชา/ห้องที่สอน <b>${noCourseCount}</b> คน` : ''}
        ${attBehindCount > 0 ? ` · เช็คชื่อไม่เป็นปัจจุบัน <b>${attBehindCount}</b> คน` : ''}
      </p>` : `
      <p class="text-sm font-medium text-emerald-700 bg-white/70 rounded-xl px-4 py-2.5 mt-2">✅ ครูทุกคนลงทะเบียน เริ่มงาน และเช็คชื่อเป็นปัจจุบันแล้ว</p>`}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">👤 ความพร้อมของครู/บุคลากร</h4>
    <p class="text-xs text-gray-400 mb-3">💡 แต่ละขั้นนับเฉพาะครูที่ผ่านขั้นก่อนหน้าแล้ว: ลงทะเบียน → สร้างตารางสอน/เพิ่มวิชา → เช็คชื่อเป็นปัจจุบัน · คลิกการ์ดเพื่อดูรายชื่อ</p>
    <div id="exec-teacher-kpi" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      ${renderTeacherKpiCards()}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">📚 ภาพรวมห้องเรียนทั้งโรง</h4>
    <p class="text-xs text-gray-400 mb-3">สัดส่วนห้องเรียนที่ "ปกติ" ในแต่ละมิติ (ไม่รวมห้องที่ยังไม่เริ่มดำเนินการ)</p>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      ${renderKpiCard('📋', 'ปก ปพ.5', 'doc')}
      ${renderKpiCard('📅', 'วันที่สอน', 'dates')}
      ${renderKpiCard('✅', 'เช็คชื่อ', 'att')}
      ${renderKpiCard('📝', 'บันทึกคะแนน', 'score')}
    </div>

    <h4 class="font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</h4>
    <p class="text-xs text-gray-400 mb-3">💡 คลิกที่การ์ดเพื่อดูห้องเรียนทั้งหมดในกลุ่มสาระนั้น</p>
    <div id="exec-dept-cards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      ${renderDeptCards()}
    </div>

    <div class="flex flex-col sm:flex-row gap-3 mb-4">
      <div class="relative flex-1">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">🔍</span>
        <input id="exec-search" type="text" placeholder="ค้นหาชื่อครู / วิชา / ห้องเรียน..."
          class="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-indigo-400" />
      </div>
      <select id="exec-dept-select"
        class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-indigo-400 sm:w-56">
        <option value="">ทุกกลุ่มสาระ</option>
        ${groups.map(g => `<option value="${g.key}">${_esc(g.deptName)}</option>`).join('')}
      </select>
    </div>

    <div id="exec-table-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div id="exec-table-header" class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        ${renderTableHeader()}
      </div>
      <div id="exec-class-table">${renderClassTable()}</div>
    </div>

    <div id="exec-teacher-section" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      ${renderTeacherSection()}
    </div>
  </div>`)

  document.getElementById('exec-search')?.addEventListener('input', e => {
    searchQuery = e.target.value.trim().toLowerCase()
    refreshInteractive()
  })
  document.getElementById('exec-dept-select')?.addEventListener('change', e => {
    selectedDept = e.target.value || null
    tableMode = selectedDept ? 'all' : 'attention'
    refreshInteractive()
  })
  attachInteractiveHandlers()
}
