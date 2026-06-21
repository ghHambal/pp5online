import { getClassStudents, getClassAttendanceSummary, getClassScoreSummary, getMyClasses } from './api.js'

const _e = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const GRADE_BANDS = [
  { label: '4',   min: 80, color: '#10b981' },
  { label: '3.5', min: 75, color: '#34d399' },
  { label: '3',   min: 70, color: '#6ee7b7' },
  { label: '2.5', min: 65, color: '#fbbf24' },
  { label: '2',   min: 60, color: '#fb923c' },
  { label: '1.5', min: 55, color: '#f87171' },
  { label: '1',   min: 50, color: '#ef4444' },
  { label: '0',   min: 0,  color: '#dc2626' },
]
const _scoreToGrade = pct => GRADE_BANDS.find(b => pct >= b.min)?.label ?? '0'

const ATT_STATUS = {
  present: { label: 'มาเรียน',  bg: 'bg-emerald-50', txt: 'text-emerald-700', pill: 'bg-emerald-100 text-emerald-700' },
  late:    { label: 'มาสาย',    bg: 'bg-amber-50',   txt: 'text-amber-700',   pill: 'bg-amber-100 text-amber-700'   },
  sick:    { label: 'ลาป่วย',   bg: 'bg-indigo-50',  txt: 'text-indigo-700',  pill: 'bg-indigo-100 text-indigo-700' },
  excused: { label: 'ลากิจ',    bg: 'bg-violet-50',  txt: 'text-violet-700',  pill: 'bg-violet-100 text-violet-700' },
  absent:  { label: 'ขาดเรียน', bg: 'bg-red-50',     txt: 'text-red-600',     pill: 'bg-red-100 text-red-700'       },
}

function _avatarHtml(s, w = 'w-9', h = 'h-12', r = 'rounded-xl') {
  const initial = _e((s?.full_name ?? '?').charAt(0))
  return s?.image_url
    ? `<img src="${_e(s.image_url)}" class="${w} ${h} ${r} object-cover flex-shrink-0 shadow-sm" />`
    : `<div class="${w} ${h} ${r} flex-shrink-0 bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 shadow-sm">${initial}</div>`
}

function _fmtDate(iso) {
  return new Date(iso).toLocaleDateString('th-TH', { weekday: 'short', day: 'numeric', month: 'short', year: '2-digit' })
}

function _dashboardMinTier(cfg) {
  return String(cfg?.donationSpecialFeatures ?? '').split('\n')
    .map(line => { const p = line.split('|'); return { text: p[1] ?? '', minTier: parseInt(p[2]) || 1 } })
    .find(f => f.text.includes('Dashboard'))?.minTier ?? 2
}

// ── Student Detail Popup ──────────────────────────────────────────────────────
function _openStudentDetail(student, attAll, gradeData, className) {
  const attRecords = (attAll ?? [])
    .filter(r => r.student_id === student.id)
    .sort((a, b) => b.check_date.localeCompare(a.check_date))

  document.getElementById('std-detail-modal')?.remove()
  const p = document.createElement('div')
  p.id = 'std-detail-modal'
  p.className = 'fixed inset-0 z-[95] flex flex-col bg-gray-50'

  p.innerHTML = `
    <div class="flex items-center gap-4 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="std-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none flex-shrink-0">←</button>
      ${_avatarHtml(student, 'w-12', 'h-16', 'rounded-2xl')}
      <div class="min-w-0 flex-1">
        <h2 class="font-bold text-gray-800 truncate text-base">${_e(student.full_name ?? '—')}</h2>
        <p class="text-xs text-gray-400 mt-0.5">เลขที่ ${student.seat ?? '—'} · รหัส ${_e(student.student_code ?? '—')}</p>
        <p class="text-xs text-gray-400">ห้อง ${_e(student.main_room ?? className ?? '—')}</p>
      </div>
    </div>
    <div class="flex bg-white border-b border-gray-200 flex-shrink-0">
      <button class="std-tab flex-1 py-3 text-sm font-semibold transition border-b-2" data-tab="att">✅ การเข้าเรียน</button>
      <button class="std-tab flex-1 py-3 text-sm font-semibold transition border-b-2" data-tab="scores">📝 คะแนนรายหัวข้อ</button>
    </div>
    <div id="std-body" class="flex-1 overflow-y-auto"></div>`

  document.body.appendChild(p)
  p.querySelector('#std-close').addEventListener('click', () => p.remove())

  const sbody = p.querySelector('#std-body')
  const stabs = [...p.querySelectorAll('.std-tab')]
  const setSTab = tab => {
    stabs.forEach(t => {
      const on = t.dataset.tab === tab
      t.className = `std-tab flex-1 py-3 text-sm font-semibold transition border-b-2 ${on ? 'border-emerald-500 text-emerald-700' : 'border-transparent text-gray-400 hover:text-gray-600'}`
    })
    tab === 'att' ? _renderStdAtt() : _renderStdScores()
  }
  stabs.forEach(t => t.addEventListener('click', () => setSTab(t.dataset.tab)))

  function _renderStdAtt() {
    if (!attRecords.length) {
      sbody.innerHTML = `<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีข้อมูลการเข้าเรียน</div>`
      return
    }
    const cnt = { present: 0, late: 0, sick: 0, excused: 0, absent: 0 }
    attRecords.forEach(r => { if (r.status in cnt) cnt[r.status]++ })
    const total   = attRecords.length
    const attended = cnt.present + cnt.late
    const rate    = total ? Math.round(attended / total * 100) : 0
    const rateCol = rate >= 80 ? '#10b981' : rate >= 60 ? '#f59e0b' : '#ef4444'

    sbody.innerHTML = `
      <div class="p-4 space-y-4 max-w-2xl mx-auto pb-8">
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div class="flex items-end gap-3 mb-3">
            <span class="text-4xl font-extrabold" style="color:${rateCol}">${rate}%</span>
            <span class="text-sm text-gray-400 pb-1">เข้าเรียน จาก ${total} ครั้ง</span>
          </div>
          <div class="h-2.5 rounded-full bg-gray-100 overflow-hidden mb-3">
            <div class="h-full rounded-full" style="width:${rate}%;background:${rateCol}"></div>
          </div>
          <div class="grid grid-cols-5 gap-1.5 text-center">
            ${Object.entries(ATT_STATUS).map(([k, v]) => `
            <div class="rounded-xl p-2 ${v.bg}">
              <p class="text-lg font-extrabold ${v.txt}">${cnt[k] ?? 0}</p>
              <p class="text-[10px] ${v.txt} leading-tight mt-0.5">${v.label}</p>
            </div>`).join('')}
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <p class="text-[11px] text-gray-400 px-4 pt-4 pb-2 font-semibold uppercase tracking-widest">ประวัติรายครั้ง</p>
          <div class="divide-y divide-gray-50">
            ${attRecords.map(r => {
              const st = ATT_STATUS[r.status] ?? { label: r.status, pill: 'bg-gray-100 text-gray-600' }
              return `<div class="flex items-center justify-between px-4 py-3">
                <span class="text-sm text-gray-700">${_fmtDate(r.check_date)}</span>
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${st.pill}">${st.label}</span>
              </div>`
            }).join('')}
          </div>
        </div>
      </div>`
  }

  function _renderStdScores() {
    const cols      = gradeData?.columns ?? []
    const allScores = gradeData?.scores  ?? []
    if (!cols.length) {
      sbody.innerHTML = `<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีข้อมูลคะแนน</div>`
      return
    }
    const totalMax    = cols.reduce((s, c) => s + (c.max_score ?? 0), 0)
    const scoreByCol  = Object.fromEntries(allScores.filter(r => r.student_id === student.id).map(r => [r.assignment_id, r.final_score ?? 0]))
    let totalGot = 0
    const rows = cols.map(col => {
      const got = scoreByCol[col.id] ?? 0
      totalGot += got
      const pct      = col.max_score ? Math.min(100, Math.round(got / col.max_score * 100)) : 0
      const barColor = pct >= 80 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444'
      const typeCls  = { 'ระหว่างเรียน': 'bg-sky-50 text-sky-700', 'กลางภาค': 'bg-violet-50 text-violet-700', 'ปลายภาค': 'bg-amber-50 text-amber-700', 'midterm': 'bg-violet-50 text-violet-700', 'final': 'bg-amber-50 text-amber-700' }[col.assignment_type] ?? 'bg-gray-100 text-gray-500'
      return { col, got, pct, barColor, typeCls }
    })
    const totalPct   = totalMax ? Math.min(100, Math.round(totalGot / totalMax * 100)) : 0
    const totalColor = totalPct >= 80 ? '#10b981' : totalPct >= 50 ? '#f59e0b' : '#ef4444'
    const grade      = _scoreToGrade(totalPct)
    const gBand      = GRADE_BANDS.find(b => b.label === grade)
    const fmt = n => n % 1 === 0 ? n : Number(n.toFixed(1))

    sbody.innerHTML = `
      <div class="p-4 space-y-4 max-w-2xl mx-auto pb-8">
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-[11px] text-gray-400 mb-1 font-semibold uppercase tracking-widest">คะแนนรวม</p>
              <p class="text-4xl font-extrabold" style="color:${totalColor}">${fmt(totalGot)}<span class="text-lg text-gray-400 font-normal">/${totalMax}</span></p>
              <p class="text-sm text-gray-400 mt-0.5">${totalPct}%</p>
            </div>
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                 style="background:${gBand?.color ?? '#dc2626'}22;border:2px solid ${gBand?.color ?? '#dc2626'}">
              <span class="text-2xl font-extrabold" style="color:${gBand?.color ?? '#dc2626'}">${grade}</span>
            </div>
          </div>
          <div class="mt-3 h-2.5 rounded-full bg-gray-100 overflow-hidden">
            <div class="h-full rounded-full" style="width:${totalPct}%;background:${totalColor}"></div>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <p class="text-[11px] text-gray-400 px-4 pt-4 pb-2 font-semibold uppercase tracking-widest">รายละเอียดคะแนน</p>
          <div class="divide-y divide-gray-50">
            ${rows.map(({ col, got, pct, barColor, typeCls }) => `
            <div class="px-4 py-3">
              <div class="flex items-center justify-between mb-1.5 gap-2">
                <div class="flex items-center gap-2 min-w-0">
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${typeCls}">${col.assignment_type ?? ''}</span>
                  <span class="text-sm text-gray-700 truncate">${_e(col.assignment_name)}</span>
                </div>
                <span class="text-sm font-bold text-gray-700 flex-shrink-0">${fmt(got)}/${col.max_score ?? '?'}</span>
              </div>
              <div class="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div class="h-full rounded-full" style="width:${pct}%;background:${barColor}"></div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>`
  }

  setSTab('att')
}

// ── Room picker (เมื่อเปิดจาก sidebar) ──────────────────────────────────────
export async function openDashboardRoomPicker(teacher, tierIndex = 0, cfg = {}) {
  document.getElementById('dash-picker-modal')?.remove()
  const m = document.createElement('div')
  m.id = 'dash-picker-modal'
  m.className = 'fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4'
  m.innerHTML = `
    <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl shadow-2xl flex flex-col max-h-[80vh]">
      <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="dp-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        <h3 class="font-bold text-gray-800">📈 เลือกห้องเรียน</h3>
      </div>
      <div id="dp-list" class="overflow-y-auto flex-1 p-3">
        <p class="text-center text-gray-400 text-sm py-8">กำลังโหลด...</p>
      </div>
    </div>`
  document.body.appendChild(m)
  m.querySelector('#dp-close').addEventListener('click', () => m.remove())
  m.addEventListener('click', e => { if (e.target === m) m.remove() })

  try {
    const classes = window._classesFlat?.length ? window._classesFlat : await getMyClasses(teacher?.id)
    const list = m.querySelector('#dp-list')
    if (!classes.length) {
      list.innerHTML = `<p class="text-center text-gray-400 text-sm py-8">ยังไม่มีห้องเรียน</p>`
      return
    }
    list.innerHTML = classes.map(c => {
      const ms = c.master_subjects ?? {}
      return `<button class="dp-item w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition" data-id="${c.id}">
        <div class="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-lg flex-shrink-0">🏫</div>
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${_e(ms.subject_name ?? '—')}</p>
          <p class="text-xs text-gray-400">ห้อง ${_e(c.class_name ?? '—')} · ${_e(ms.subject_code ?? '—')}</p>
        </div>
      </button>`
    }).join('')
    list.querySelectorAll('.dp-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const cls = classes.find(c => c.id === parseInt(btn.dataset.id))
        m.remove()
        if (cls) openClassDashboard(cls.id, cls, tierIndex, cfg)
      })
    })
  } catch {
    m.querySelector('#dp-list').innerHTML = `<p class="text-center text-rose-400 text-sm py-8">โหลดห้องเรียนไม่สำเร็จ</p>`
  }
}

// ── Dashboard popup หลัก ──────────────────────────────────────────────────────
export async function openClassDashboard(classId, cls, tierIndex = 0, cfg = {}) {
  const minTier = _dashboardMinTier(cfg)
  document.getElementById('class-dashboard-modal')?.remove()

  const ms          = cls?.master_subjects ?? {}
  const subjectName = ms.subject_name ?? '—'
  const subjectCode = ms.subject_code  ?? '—'
  const className   = cls?.class_name  ?? '—'

  const m = document.createElement('div')
  m.id = 'class-dashboard-modal'
  m.className = 'fixed inset-0 z-[90] flex flex-col bg-gray-50'

  // ── Tier gate & Trial check ──────────────────────────────────────────────────
  const systemDashboardLimit = cfg.freeDashboardLimit
  let freeLimit = 0
  if (systemDashboardLimit !== undefined && systemDashboardLimit !== '') {
    const parsedVal = parseInt(systemDashboardLimit, 10)
    if (Number.isFinite(parsedVal)) {
      freeLimit = parsedVal
    }
  }

  const teacherId = cls?.master_subjects?.teacher_id || 0
  let isAllowedByTrial = false
  let trialQuota = null
  if (tierIndex < minTier && freeLimit > 0 && teacherId) {
    trialQuota = _checkWeeklyDashboardQuota(teacherId, freeLimit)
    if (trialQuota.allowed) {
      isAllowedByTrial = true
      _incrementWeeklyDashboardQuota(teacherId, trialQuota.weekMonday)
    }
  }

  if (tierIndex < minTier && !isAllowedByTrial) {
    m.innerHTML = `
      <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
        <button id="dash-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 truncate">📈 Dashboard: ${_e(subjectName)}</h2>
          <p class="text-xs text-gray-400">ห้อง ${_e(className)}</p>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center p-8 text-center gap-4">
        <div class="text-6xl">🔒</div>
        <p class="font-bold text-gray-700 text-lg">ฟีเจอร์สำหรับผู้สนับสนุนระดับ ${minTier}+</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs">Dashboard วิเคราะห์ภาพรวมห้องเรียน<br>เปิดให้ใช้งานเมื่อสนับสนุนโครงการถึงระดับที่กำหนด</p>
        <button id="dash-upgrade" class="mt-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg"
          style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดระดับ</button>
      </div>`
    document.body.appendChild(m)
    m.querySelector('#dash-close').addEventListener('click', () => m.remove())
    m.querySelector('#dash-upgrade').addEventListener('click', () => { m.remove(); document.getElementById('btn-donate-float')?.click() })
    return
  }

  m.innerHTML = `
    <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="dash-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800 truncate">📈 ${_e(subjectName)}</h2>
        <p class="text-xs text-gray-400">ห้อง <strong class="text-gray-600">${_e(className)}</strong> · ${_e(subjectCode)}</p>
        ${trialQuota ? `<span class="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 animate-pulse">✨ ทดลองใช้งานฟรีสัปดาห์นี้ (ครั้งที่ ${trialQuota.count + 1}/${freeLimit})</span>` : ''}
      </div>
    </div>
    <div class="flex bg-white border-b border-gray-200 flex-shrink-0">
      <button class="dash-tab flex-1 py-3 text-sm font-semibold transition border-b-2" data-tab="attendance">✅ การเข้าเรียน</button>
      <button class="dash-tab flex-1 py-3 text-sm font-semibold transition border-b-2" data-tab="grades">📝 ผลสัมฤทธิ์</button>
    </div>
    <div id="dash-body" class="flex-1 overflow-y-auto"></div>`

  document.body.appendChild(m)
  m.querySelector('#dash-close').addEventListener('click', () => m.remove())

  const body = m.querySelector('#dash-body')
  const tabs = [...m.querySelectorAll('.dash-tab')]
  const setTab = tab => {
    tabs.forEach(t => {
      const on = t.dataset.tab === tab
      t.className = `dash-tab flex-1 py-3 text-sm font-semibold transition border-b-2 ${on ? 'border-emerald-500 text-emerald-700' : 'border-transparent text-gray-400 hover:text-gray-600'}`
    })
    tab === 'attendance' ? _renderAttendance() : _renderGrades()
  }
  tabs.forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)))

  const _loading = () => { body.innerHTML = `<div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลดข้อมูล...</div>` }
  const _err     = () => { body.innerHTML = `<div class="flex justify-center py-16 text-rose-400 text-sm">โหลดข้อมูลไม่สำเร็จ กรุณาลองใหม่</div>` }

  let _attData = null, _gradeData = null, _roster = null

  function _studentMap() {
    return Object.fromEntries((_roster ?? []).map((s, i) => [s.id, { ...s, seat: i + 1 }]))
  }

  // ── Tab: การเข้าเรียน ────────────────────────────────────────────────────────
  async function _renderAttendance() {
    _loading()
    try {
      if (!_attData || !_roster) {
        const [att, students] = await Promise.all([
          getClassAttendanceSummary(classId),
          getClassStudents(classId).catch(() => []),
        ])
        _attData = att
        _roster  = students
      }
      const att        = _attData
      const sMap       = _studentMap()
      const total      = att.length
      const counts     = { present: 0, late: 0, sick: 0, excused: 0, absent: 0 }
      att.forEach(r => { if (r.status in counts) counts[r.status]++ })
      const rate      = total ? Math.round((counts.present + counts.late) / total * 100) : 0
      const rateColor = rate >= 80 ? '#10b981' : rate >= 60 ? '#f59e0b' : '#ef4444'
      const rateText  = rate >= 80 ? 'text-emerald-600' : rate >= 60 ? 'text-amber-500' : 'text-red-500'

      const absByStudent = {}
      att.forEach(r => { if (r.status === 'absent') absByStudent[r.student_id] = (absByStudent[r.student_id] ?? 0) + 1 })
      const top5 = Object.entries(absByStudent)
        .sort((a, b) => b[1] - a[1]).slice(0, 5)
        .map(([sid, cnt]) => ({ s: sMap[parseInt(sid)], cnt, sid: parseInt(sid) }))

      const weeks = {}
      att.forEach(r => {
        const d = new Date(r.check_date), dow = d.getDay()
        const mon = new Date(d); mon.setDate(d.getDate() - (dow === 0 ? 6 : dow - 1))
        const wk = mon.toISOString().slice(0, 10)
        if (!weeks[wk]) weeks[wk] = { t: 0, a: 0 }
        weeks[wk].t++
        if (r.status === 'present' || r.status === 'late') weeks[wk].a++
      })
      const wkKeys = Object.keys(weeks).sort().slice(-6)

      body.innerHTML = `
        <div class="p-4 space-y-4 max-w-2xl mx-auto pb-8">
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-2 font-semibold uppercase tracking-widest">ภาพรวมการเข้าเรียน</p>
            <div class="flex items-end gap-3">
              <span class="text-5xl font-extrabold ${rateText}">${rate}%</span>
              <span class="text-sm text-gray-400 pb-1.5">จาก ${total.toLocaleString()} ครั้งที่บันทึก</span>
            </div>
            <div class="mt-3 h-3 rounded-full bg-gray-100 overflow-hidden">
              <div class="h-full rounded-full" style="width:${rate}%;background:${rateColor}"></div>
            </div>
          </div>
          <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
            ${Object.entries(ATT_STATUS).map(([k, v]) => `
            <div class="rounded-xl p-3 text-center ${v.bg}">
              <p class="text-xl font-extrabold ${v.txt}">${counts[k].toLocaleString()}</p>
              <p class="text-[11px] ${v.txt} mt-0.5">${v.label}</p>
              <p class="text-[10px] text-gray-400 mt-0.5">${total ? Math.round(counts[k] / total * 100) : 0}%</p>
            </div>`).join('')}
          </div>
          ${wkKeys.length ? `
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-3 font-semibold uppercase tracking-widest">แนวโน้มรายสัปดาห์ (ล่าสุด ${wkKeys.length} สัปดาห์)</p>
            <div class="flex items-end gap-1.5 h-28">
              ${wkKeys.map(wk => {
                const r = weeks[wk].t ? Math.round(weeks[wk].a / weeks[wk].t * 100) : 0
                const d = new Date(wk)
                return `<div class="flex-1 flex flex-col items-center gap-1">
                  <span class="text-[9px] text-gray-400">${r}%</span>
                  <div class="w-full rounded-t-lg" style="height:${Math.max(4, Math.round(r * 96 / 100))}px;background:${r >= 80 ? '#10b981' : r >= 60 ? '#f59e0b' : '#ef4444'}"></div>
                  <span class="text-[9px] text-gray-400">${d.getDate()}/${d.getMonth() + 1}</span>
                </div>`
              }).join('')}
            </div>
          </div>` : ''}
          ${top5.length ? `
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-3 font-semibold uppercase tracking-widest">⚠️ ขาดเรียนมากที่สุด (Top 5)</p>
            <div class="divide-y divide-gray-50" id="top5-list">
              ${top5.map(({ s, cnt, sid }) => `
              <div class="flex items-center justify-between py-2.5 -mx-1 px-2 rounded-xl cursor-pointer hover:bg-gray-50 transition std-row" data-sid="${sid}">
                <div class="flex items-center gap-2.5">
                  ${_avatarHtml(s, 'w-9', 'h-12', 'rounded-xl')}
                  <div>
                    <p class="text-sm text-gray-700 font-medium">${_e(s?.full_name ?? `รหัส ${s?.student_code ?? '?'}`)}</p>
                    <p class="text-[10px] text-gray-400">เลขที่ ${s?.seat ?? '—'}</p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-sm font-bold text-red-500">${cnt} ครั้ง</span>
                  <span class="text-gray-300 text-sm">›</span>
                </div>
              </div>`).join('')}
            </div>
          </div>` : `
          <div class="bg-emerald-50 rounded-2xl p-5 text-center border border-emerald-100">
            <p class="text-3xl mb-2">🎉</p>
            <p class="text-emerald-700 text-sm font-semibold">ไม่มีข้อมูลการขาดเรียน</p>
          </div>`}
        </div>`

      body.querySelectorAll('.std-row[data-sid]').forEach(el => {
        el.addEventListener('click', () => {
          const s = _studentMap()[parseInt(el.dataset.sid)]
          if (s) _openStudentDetail(s, att, _gradeData, className)
        })
      })
    } catch { _err() }
  }

  // ── Tab: ผลสัมฤทธิ์ ─────────────────────────────────────────────────────────
  async function _renderGrades() {
    _loading()
    try {
      if (!_gradeData || !_roster) {
        const [grade, students] = await Promise.all([
          getClassScoreSummary(classId),
          _roster ? Promise.resolve(_roster) : getClassStudents(classId).catch(() => []),
        ])
        _gradeData = grade
        if (!_roster) _roster = students
      }
      const { columns, scores } = _gradeData
      if (!columns.length) {
        body.innerHTML = `<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีข้อมูลคะแนนในห้องนี้</div>`
        return
      }
      const totalMax = columns.reduce((s, c) => s + (c.max_score ?? 0), 0)
      if (!totalMax) {
        body.innerHTML = `<div class="p-8 text-center text-gray-400 text-sm">คอลัมน์คะแนนยังไม่ได้กำหนดคะแนนเต็ม</div>`
        return
      }
      const sMap = _studentMap()
      const studentTotals = {}
      scores.forEach(r => { studentTotals[r.student_id] = (studentTotals[r.student_id] ?? 0) + (r.final_score ?? 0) })
      ;(_roster ?? []).forEach(s => { if (studentTotals[s.id] === undefined) studentTotals[s.id] = 0 })

      const percents = Object.entries(studentTotals).map(([sid, tot]) => ({
        sid: parseInt(sid), tot, pct: Math.min(100, Math.round(tot / totalMax * 100)),
      }))
      const gradeCounts = Object.fromEntries(GRADE_BANDS.map(b => [b.label, 0]))
      percents.forEach(({ pct }) => { gradeCounts[_scoreToGrade(pct)]++ })

      const n        = percents.length
      const meanPct  = n ? Math.round(percents.reduce((s, x) => s + x.pct, 0) / n) : 0
      const passRate = n ? Math.round(percents.filter(x => x.pct >= 50).length / n * 100) : 0
      const atRisk   = percents.filter(x => x.pct < 50).sort((a, b) => a.pct - b.pct).slice(0, 5)
      const sc       = v => v >= 80 ? 'text-emerald-600' : v >= 60 ? 'text-amber-500' : 'text-red-500'

      body.innerHTML = `
        <div class="p-4 space-y-4 max-w-2xl mx-auto pb-8">
          <div class="grid grid-cols-3 gap-3">
            <div class="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p class="text-3xl font-extrabold ${sc(meanPct)}">${meanPct}%</p>
              <p class="text-[11px] text-gray-400 mt-0.5">คะแนนเฉลี่ย</p>
            </div>
            <div class="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p class="text-3xl font-extrabold ${sc(passRate)}">${passRate}%</p>
              <p class="text-[11px] text-gray-400 mt-0.5">ผ่าน (≥50%)</p>
            </div>
            <div class="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p class="text-3xl font-extrabold text-gray-700">${n}</p>
              <p class="text-[11px] text-gray-400 mt-0.5">นักเรียนทั้งหมด</p>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-3 font-semibold uppercase tracking-widest">การกระจายเกรด</p>
            <div class="space-y-2.5">
              ${GRADE_BANDS.map(b => {
                const cnt = gradeCounts[b.label] ?? 0
                const pct = n ? Math.round(cnt / n * 100) : 0
                return `<div class="flex items-center gap-3">
                  <span class="w-7 text-xs font-bold text-right" style="color:${b.color}">${b.label}</span>
                  <div class="flex-1 h-7 bg-gray-100 rounded-full overflow-hidden flex items-center">
                    <div class="h-full rounded-full flex items-center pl-2 min-w-0"
                         style="width:${Math.max(pct, 0)}%;background:${b.color}">
                      ${cnt > 0 ? `<span class="text-[10px] text-white font-bold whitespace-nowrap">${cnt}</span>` : ''}
                    </div>
                  </div>
                  <span class="w-8 text-xs text-gray-400 text-right">${pct}%</span>
                </div>`
              }).join('')}
            </div>
          </div>
          ${atRisk.length ? `
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-3 font-semibold uppercase tracking-widest">⚠️ นักเรียนเสี่ยงตก (คะแนน &lt; 50%)</p>
            <div class="divide-y divide-gray-50">
              ${atRisk.map(({ sid, pct, tot }) => {
                const s = sMap[sid]
                return `<div class="flex items-center justify-between py-2.5 -mx-1 px-2 rounded-xl cursor-pointer hover:bg-gray-50 transition std-row" data-sid="${sid}">
                  <div class="flex items-center gap-2.5">
                    ${_avatarHtml(s, 'w-9', 'h-12', 'rounded-xl')}
                    <div>
                      <p class="text-sm text-gray-700 font-medium">${_e(s?.full_name ?? `รหัส ${s?.student_code ?? sid}`)}</p>
                      <p class="text-[10px] text-gray-400">เลขที่ ${s?.seat ?? '—'}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="text-right leading-tight">
                      <span class="text-sm font-bold text-red-500">${pct}%</span>
                      <span class="text-[10px] text-gray-400 block">${Math.round(tot)}/${totalMax}</span>
                    </div>
                    <span class="text-gray-300 text-sm">›</span>
                  </div>
                </div>`
              }).join('')}
            </div>
          </div>` : `
          <div class="bg-emerald-50 rounded-2xl p-5 text-center border border-emerald-100">
            <p class="text-3xl mb-2">🎉</p>
            <p class="text-emerald-700 text-sm font-semibold">ไม่มีนักเรียนเสี่ยงตกในขณะนี้</p>
          </div>`}
        </div>`

      body.querySelectorAll('.std-row[data-sid]').forEach(el => {
        el.addEventListener('click', () => {
          const s = _studentMap()[parseInt(el.dataset.sid)]
          if (s) _openStudentDetail(s, _attData, _gradeData, className)
        })
      })
    } catch (e) { console.error(e); _err() }
  }

  setTab('attendance')
}

// ─── Classroom Dashboard Trial Helpers ────────────────────────────────────────
function _checkWeeklyDashboardQuota(teacherId, freeLimit) {
  if (freeLimit <= 0) return { allowed: false, count: 0 }

  // Monday of the current week
  const d = new Date()
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  const mondayStr = new Date(d.setDate(diff)).toISOString().slice(0, 10)

  const key = `pp5_free_dash_week_${teacherId}`
  let data = { weekMonday: mondayStr, count: 0 }
  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed.weekMonday === mondayStr) {
        data = parsed
      }
    }
  } catch (e) {}

  return { allowed: data.count < freeLimit, count: data.count, weekMonday: mondayStr }
}

function _incrementWeeklyDashboardQuota(teacherId, weekMonday) {
  const key = `pp5_free_dash_week_${teacherId}`
  let count = 0
  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed.weekMonday === weekMonday) {
        count = parsed.count
      }
    }
  } catch (e) {}

  localStorage.setItem(key, JSON.stringify({ weekMonday, count: count + 1 }))
}
