import { getExecClassOverview, getDepartments, getSystemConfig } from './api.js'

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

const STATUS_EMOJI = { green: '🟢', yellow: '🟡', red: '🔴', gray: '⚪' }
const STATUS_LABEL = { green: 'ปกติ', yellow: 'เริ่มช้า', red: 'ต้องตามงาน', gray: 'ยังไม่เริ่ม' }

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

// ห้องที่ "ยังไม่แตะอะไรเลย" — ไม่มีปก, ไม่มีวันสอน, ไม่เคยเช็คชื่อ, ไม่มีคอลัมน์คะแนน
function _isUntouched(row) {
  return row.status.doc === 'red' && row.status.dates === 'red'
    && !row.last_check_date && row.score_col_count === 0
}

// ─── View: Executive Overview ─────────────────────────────────────────────────
export async function renderExecOverview() {
  setActive('exec-overview')
  document.getElementById('page-title').textContent = 'ภาพรวมผู้บริหาร'

  setContent(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="text-center py-16 text-gray-400">กำลังโหลดข้อมูล...</div>
  </div>`)

  let overview, depts, cfg
  try {
    [overview, depts, cfg] = await Promise.all([
      getExecClassOverview(),
      getDepartments(),
      getSystemConfig().catch(() => ({})),
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

  // ครูที่ต้องติดตาม: ยังไม่ลงทะเบียนใช้งาน หรือ ทุกห้องที่สอนยังไม่แตะอะไรเลย
  const teacherMap = new Map()
  for (const r of classRows) {
    if (r.teacher_id == null) continue
    if (!teacherMap.has(r.teacher_id)) {
      teacherMap.set(r.teacher_id, {
        teacherId: r.teacher_id, teacherName: r.teacher_name,
        registered: r.teacher_registered, depts: new Set(), deptKeys: new Set(), rows: [],
      })
    }
    const g = teacherMap.get(r.teacher_id)
    g.depts.add(r.deptName)
    g.deptKeys.add(r.deptKey)
    g.rows.push(r)
  }
  const followups = [...teacherMap.values()]
    .map(g => ({ ...g, reason: !g.registered ? 'unregistered' : (g.rows.every(_isUntouched) ? 'inactive' : null) }))
    .filter(g => g.reason)
    .sort((a, b) => {
      if (a.reason !== b.reason) return a.reason === 'unregistered' ? -1 : 1
      return (a.teacherName ?? '').localeCompare(b.teacherName ?? '', 'th')
    })

  // KPI รวมทั้งโรง: % ห้องที่ "เขียว" ต่อมิติ (ไม่รวม gray)
  function _kpi(dim) {
    const considered = classRows.filter(r => r.status[dim] !== 'gray')
    const green = considered.filter(r => r.status[dim] === 'green').length
    const grayCount = classRows.length - considered.length
    const pct = considered.length > 0 ? Math.round((green / considered.length) * 100) : null
    return { pct, green, total: considered.length, grayCount }
  }
  const kpis = { doc: _kpi('doc'), dates: _kpi('dates'), att: _kpi('att'), score: _kpi('score') }

  const attentionTotal = classRows.filter(r => _needsAttention(r.status)).length
  const attentionPct = classRows.length > 0 ? Math.round((attentionTotal / classRows.length) * 100) : 0

  // ─── สถานะตัวกรอง ────────────────────────────────────────────────────────────
  let selectedDept = null   // deptKey หรือ null = ทั้งโรงเรียน
  let tableMode = 'attention' // 'attention' = เฉพาะที่ต้องตามงาน, 'all' = ทั้งหมด
  let searchQuery = ''

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
          <div class="flex items-center gap-3 text-lg mb-2">
            <span title="ปก ปพ.5: ${STATUS_LABEL[worst.doc]}">${STATUS_EMOJI[worst.doc]}</span>
            <span title="วันที่สอน: ${STATUS_LABEL[worst.dates]}">${STATUS_EMOJI[worst.dates]}</span>
            <span title="เช็คชื่อ: ${STATUS_LABEL[worst.att]}">${STATUS_EMOJI[worst.att]}</span>
            <span title="บันทึกคะแนน: ${STATUS_LABEL[worst.score]}">${STATUS_EMOJI[worst.score]}</span>
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
        <p class="text-[11px] text-gray-400 mt-0.5">🟢 ปกติ &nbsp; 🟡 เริ่มล่าช้า &nbsp; 🔴 ต้องตามงาน &nbsp; ⚪ ยังไม่เริ่ม/ไม่มีข้อมูล</p>
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
                <td class="px-4 py-2 text-center text-lg" title="${STATUS_LABEL[r.status.doc]}">${STATUS_EMOJI[r.status.doc]}</td>
                <td class="px-4 py-2 text-center text-lg" title="${STATUS_LABEL[r.status.att]}">${STATUS_EMOJI[r.status.att]}</td>
                <td class="px-4 py-2 text-center text-lg" title="${STATUS_LABEL[r.status.score]}">${STATUS_EMOJI[r.status.score]}</td>
                <td class="px-4 py-2 text-center text-lg" title="${STATUS_LABEL[r.status.dates]}">${STATUS_EMOJI[r.status.dates]}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`
  }

  // ─── teacher follow-up list ──────────────────────────────────────────────
  function renderFollowupSection() {
    let list = followups
    if (selectedDept) list = list.filter(t => t.deptKeys.has(selectedDept))
    if (searchQuery) list = list.filter(t => (t.teacherName ?? '').toLowerCase().includes(searchQuery))

    if (list.length === 0) {
      return `<p class="text-sm text-emerald-600 text-center py-6">✅ ไม่มีครูที่ต้องติดตามเป็นพิเศษ${(selectedDept || searchQuery) ? 'ตามเงื่อนไขที่เลือก' : ''}</p>`
    }

    return `<div class="divide-y divide-gray-50">
      ${list.map(t => `
        <div class="flex items-center justify-between gap-3 px-5 py-2.5 hover:bg-gray-50">
          <div class="min-w-0">
            <p class="font-medium text-gray-700 text-sm truncate">${_esc(t.teacherName ?? '-')}</p>
            <p class="text-xs text-gray-400 truncate">${[...t.depts].map(_esc).join(', ')} · สอน ${t.rows.length} วิชา/ห้อง</p>
          </div>
          <span class="text-[11px] px-2.5 py-1 rounded-full font-medium whitespace-nowrap
            ${t.reason === 'unregistered' ? 'bg-gray-100 text-gray-600' : 'bg-red-50 text-red-600'}">
            ${t.reason === 'unregistered' ? '🔒 ยังไม่ลงทะเบียนใช้งาน' : '💤 ยังไม่เริ่มดำเนินการ'}
          </span>
        </div>`).join('')}
    </div>`
  }

  // ─── KPI cards ────────────────────────────────────────────────────────────
  function renderKpiCard(icon, label, dim) {
    const k = kpis[dim]
    const pctColor = k.pct == null ? 'text-gray-400'
      : k.pct >= 80 ? 'text-emerald-700' : k.pct >= 50 ? 'text-amber-600' : 'text-red-600'
    return `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5" title="${_esc(KPI_INFO[dim])}">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-indigo-50">${icon}</div>
          <p class="text-sm font-semibold text-gray-600">${label} <span class="text-gray-300 font-normal">ℹ️</span></p>
        </div>
        <p class="text-3xl font-extrabold ${pctColor}">${k.pct == null ? '—' : k.pct + '%'}</p>
        <p class="text-xs text-gray-400 mt-1">${k.total > 0 ? `${k.green}/${k.total} ห้อง` : 'ยังไม่มีห้องที่เริ่มดำเนินการ'}
          ${k.grayCount > 0 ? `<span class="text-gray-300"> · ยังไม่เริ่ม ${k.grayCount}</span>` : ''}</p>
      </div>`
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
  }

  function refreshInteractive() {
    document.getElementById('exec-dept-cards').innerHTML = renderDeptCards()
    document.getElementById('exec-table-header').innerHTML = renderTableHeader()
    document.getElementById('exec-class-table').innerHTML = renderClassTable()
    document.getElementById('exec-followup-list').innerHTML = renderFollowupSection()
    const sel = document.getElementById('exec-dept-select')
    if (sel) sel.value = selectedDept ?? ''
    attachInteractiveHandlers()
  }

  // ─── layout หลัก (render ครั้งเดียว) ────────────────────────────────────────
  setContent(`<div class="max-w-6xl mx-auto animate-fade">
    <div class="bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h3 class="text-2xl font-bold text-indigo-900 mb-1">🎯 ภาพรวมผู้บริหาร</h3>
      <p class="text-gray-500 text-sm mb-3">
        ${academicYear ? `ปีการศึกษา ${_esc(academicYear)}` : ''}${semester ? ` ภาคเรียนที่ ${_esc(semester)}` : ''}${(academicYear || semester) ? ' · ' : ''}ทั้งหมด ${classRows.length} ห้องเรียน
      </p>
      <p class="text-sm font-medium ${attentionTotal > 0 ? 'text-amber-700' : 'text-emerald-700'} bg-white/70 rounded-xl px-4 py-2.5 inline-block">
        📌 สรุป: มี <b>${attentionTotal} ห้อง</b> (${attentionPct}%) ที่ต้องติดตามเร่งด่วน
        ${followups.length > 0
          ? ` และมีครู <b>${followups.length} คน</b> ที่ต้องติดตามเป็นพิเศษ (ยังไม่ลงทะเบียน/ยังไม่เริ่มดำเนินการ)`
          : ' · ครูทุกคนเริ่มดำเนินการแล้ว'}
      </p>
    </div>

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

    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        <h4 class="font-bold text-gray-700">👤 ครูที่ต้องติดตาม</h4>
        <p class="text-[11px] text-gray-400 mt-0.5">ครูที่ยังไม่ลงทะเบียนใช้งานระบบ หรือยังไม่เริ่มดำเนินการใดๆ ในภาคเรียนนี้</p>
      </div>
      <div id="exec-followup-list" class="max-h-[400px] overflow-y-auto">${renderFollowupSection()}</div>
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
