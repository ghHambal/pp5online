import { getClassStudents, getClassAttendanceSummary, getClassScoreSummary, getMyClasses } from './api.js'

const _e = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const GRADE_BANDS = [
  { label: 'A',  min: 80, color: '#10b981' },
  { label: 'B+', min: 75, color: '#34d399' },
  { label: 'B',  min: 70, color: '#6ee7b7' },
  { label: 'C+', min: 65, color: '#fbbf24' },
  { label: 'C',  min: 60, color: '#fb923c' },
  { label: 'D+', min: 55, color: '#f87171' },
  { label: 'D',  min: 50, color: '#ef4444' },
  { label: 'F',  min: 0,  color: '#dc2626' },
]
const _scoreToGrade = pct => GRADE_BANDS.find(b => pct >= b.min)?.label ?? 'F'

// parse minTier for dashboard from donationSpecialFeatures config
function _dashboardMinTier(cfg) {
  return String(cfg?.donationSpecialFeatures ?? '').split('\n')
    .map(line => { const p = line.split('|'); return { text: p[1] ?? '', minTier: parseInt(p[2]) || 1 } })
    .find(f => f.text.includes('Dashboard'))?.minTier ?? 2
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
    const classes = window._classesFlat?.length
      ? window._classesFlat
      : await getMyClasses(teacher?.id)
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

  const ms = cls?.master_subjects ?? {}
  const subjectName = ms.subject_name ?? '—'
  const subjectCode  = ms.subject_code ?? '—'
  const className    = cls?.class_name ?? '—'

  const m = document.createElement('div')
  m.id = 'class-dashboard-modal'
  m.className = 'fixed inset-0 z-[90] flex flex-col bg-gray-50'

  // ── Tier gate ───────────────────────────────────────────────────────────────
  if (tierIndex < minTier) {
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
    m.querySelector('#dash-upgrade').addEventListener('click', () => {
      m.remove()
      document.getElementById('btn-donate-float')?.click()
    })
    return
  }

  m.innerHTML = `
    <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="dash-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800 truncate">📈 ${_e(subjectName)}</h2>
        <p class="text-xs text-gray-400">ห้อง <strong class="text-gray-600">${_e(className)}</strong> · ${_e(subjectCode)}</p>
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
    if (tab === 'attendance') _renderAttendance()
    else _renderGrades()
  }
  tabs.forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)))

  const _loading = () => { body.innerHTML = `<div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลดข้อมูล...</div>` }
  const _err     = () => { body.innerHTML = `<div class="flex justify-center py-16 text-rose-400 text-sm">โหลดข้อมูลไม่สำเร็จ กรุณาลองใหม่</div>` }

  let _attData = null, _gradeData = null, _roster = null

  // ── Tab: การเข้าเรียน ────────────────────────────────────────────────────────
  async function _renderAttendance() {
    _loading()
    try {
      if (!_attData || !_roster) {
        const [att, students] = await Promise.all([
          getClassAttendanceSummary(classId),
          getClassStudents(classId).catch(() => []),
        ])
        _attData    = att
        _roster     = students
      }

      const att       = _attData
      const studentMap = Object.fromEntries((_roster ?? []).map((s, i) => [s.id, { ...s, seat: i + 1 }]))
      const total     = att.length
      const counts    = { present: 0, late: 0, sick: 0, excused: 0, absent: 0 }
      att.forEach(r => { if (r.status in counts) counts[r.status]++ })
      const attended  = counts.present + counts.late
      const rate      = total ? Math.round(attended / total * 100) : 0
      const rateColor = rate >= 80 ? '#10b981' : rate >= 60 ? '#f59e0b' : '#ef4444'
      const rateText  = rate >= 80 ? 'text-emerald-600' : rate >= 60 ? 'text-amber-500' : 'text-red-500'

      // per-student absence count
      const absByStudent = {}
      att.forEach(r => {
        if (r.status === 'absent') absByStudent[r.student_id] = (absByStudent[r.student_id] ?? 0) + 1
      })
      const top5 = Object.entries(absByStudent)
        .sort((a, b) => b[1] - a[1]).slice(0, 5)
        .map(([sid, cnt]) => ({ s: studentMap[parseInt(sid)], cnt }))

      // weekly trend (last 6 weeks)
      const weeks = {}
      att.forEach(r => {
        const d   = new Date(r.check_date)
        const dow = d.getDay()
        const mon = new Date(d); mon.setDate(d.getDate() - (dow === 0 ? 6 : dow - 1))
        const wk  = mon.toISOString().slice(0, 10)
        if (!weeks[wk]) weeks[wk] = { t: 0, a: 0 }
        weeks[wk].t++
        if (r.status === 'present' || r.status === 'late') weeks[wk].a++
      })
      const wkKeys = Object.keys(weeks).sort().slice(-6)

      const statusCfg = [
        { key: 'present', label: 'มาเรียน',  bg: 'bg-emerald-50', txt: 'text-emerald-700' },
        { key: 'late',    label: 'มาสาย',    bg: 'bg-amber-50',   txt: 'text-amber-700'   },
        { key: 'sick',    label: 'ลาป่วย',   bg: 'bg-indigo-50',  txt: 'text-indigo-700'  },
        { key: 'excused', label: 'ลากิจ',    bg: 'bg-violet-50',  txt: 'text-violet-700'  },
        { key: 'absent',  label: 'ขาดเรียน', bg: 'bg-red-50',     txt: 'text-red-600'     },
      ]

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
            ${statusCfg.map(s => `
            <div class="rounded-xl p-3 text-center ${s.bg}">
              <p class="text-xl font-extrabold ${s.txt}">${counts[s.key].toLocaleString()}</p>
              <p class="text-[11px] ${s.txt} mt-0.5">${s.label}</p>
              <p class="text-[10px] text-gray-400 mt-0.5">${total ? Math.round(counts[s.key] / total * 100) : 0}%</p>
            </div>`).join('')}
          </div>

          ${wkKeys.length ? `
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-3 font-semibold uppercase tracking-widest">แนวโน้มรายสัปดาห์ (ล่าสุด ${wkKeys.length} สัปดาห์)</p>
            <div class="flex items-end gap-1.5 h-28">
              ${wkKeys.map(wk => {
                const r   = weeks[wk].t ? Math.round(weeks[wk].a / weeks[wk].t * 100) : 0
                const hPx = Math.max(4, Math.round(r * 96 / 100))
                const col = r >= 80 ? '#10b981' : r >= 60 ? '#f59e0b' : '#ef4444'
                const d   = new Date(wk)
                return `<div class="flex-1 flex flex-col items-center gap-1">
                  <span class="text-[9px] text-gray-400">${r}%</span>
                  <div class="w-full rounded-t-lg" style="height:${hPx}px;background:${col}"></div>
                  <span class="text-[9px] text-gray-400">${d.getDate()}/${d.getMonth() + 1}</span>
                </div>`
              }).join('')}
            </div>
          </div>` : ''}

          ${top5.length ? `
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-3 font-semibold uppercase tracking-widest">⚠️ ขาดเรียนมากที่สุด (Top 5)</p>
            <div class="divide-y divide-gray-50">
              ${top5.map(({ s, cnt }) => `
              <div class="flex items-center justify-between py-2.5">
                <div class="flex items-center gap-2.5">
                  <span class="w-6 h-6 rounded-full bg-gray-100 text-[10px] text-gray-500 flex items-center justify-center font-mono">${s?.seat ?? '—'}</span>
                  <span class="text-sm text-gray-700">${_e(s?.full_name ?? `รหัส ${s?.student_code ?? '?'}`)}</span>
                </div>
                <span class="text-sm font-bold text-red-500">${cnt} ครั้ง</span>
              </div>`).join('')}
            </div>
          </div>` : `
          <div class="bg-emerald-50 rounded-2xl p-5 text-center border border-emerald-100">
            <p class="text-3xl mb-2">🎉</p>
            <p class="text-emerald-700 text-sm font-semibold">ไม่มีข้อมูลการขาดเรียน</p>
          </div>`}
        </div>`
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

      const studentMap = Object.fromEntries((_roster ?? []).map((s, i) => [s.id, { ...s, seat: i + 1 }]))
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

      const statColor = v => v >= 80 ? 'text-emerald-600' : v >= 60 ? 'text-amber-500' : 'text-red-500'

      body.innerHTML = `
        <div class="p-4 space-y-4 max-w-2xl mx-auto pb-8">

          <div class="grid grid-cols-3 gap-3">
            <div class="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p class="text-3xl font-extrabold ${statColor(meanPct)}">${meanPct}%</p>
              <p class="text-[11px] text-gray-400 mt-0.5">คะแนนเฉลี่ย</p>
            </div>
            <div class="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p class="text-3xl font-extrabold ${statColor(passRate)}">${passRate}%</p>
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
                const cnt  = gradeCounts[b.label] ?? 0
                const pct  = n ? Math.round(cnt / n * 100) : 0
                return `<div class="flex items-center gap-3">
                  <span class="w-7 text-xs font-bold text-right" style="color:${b.color}">${b.label}</span>
                  <div class="flex-1 h-7 bg-gray-100 rounded-full overflow-hidden flex items-center">
                    <div class="h-full rounded-full flex items-center pl-2 min-w-0 transition-all"
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
                const s = studentMap[sid]
                return `<div class="flex items-center justify-between py-2.5">
                  <div class="flex items-center gap-2.5">
                    <span class="w-6 h-6 rounded-full bg-gray-100 text-[10px] text-gray-500 flex items-center justify-center font-mono">${s?.seat ?? '—'}</span>
                    <span class="text-sm text-gray-700">${_e(s?.full_name ?? `รหัส ${s?.student_code ?? sid}`)}</span>
                  </div>
                  <div class="text-right leading-tight">
                    <span class="text-sm font-bold text-red-500">${pct}%</span>
                    <span class="text-[10px] text-gray-400 block">${Math.round(tot)}/${totalMax}</span>
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
    } catch (e) { console.error(e); _err() }
  }

  setTab('attendance')
}
