import { supabase } from './supabase.js'

const PW_KEY = 'sports_att_monitor_pw'
const root = document.getElementById('attendance-monitor-root')
const SCHOOL_NAME = 'โรงเรียนมูลนิธิอาซิซสถานร่วมกับวิทยาลัยเทคโนโลยีอาซิซสถานพณิชยการ'
const LOGO_URLS = [
  'https://lh3.googleusercontent.com/d/1JDduqJInp2BjORgZhhUgv80fXtMs3JzV',
  'https://lh3.googleusercontent.com/d/1lXMVnPf8rIl5SBzqZeSCEtbpf6U7idWa',
  'https://lh3.googleusercontent.com/d/1JPmgiu_pgACGYTymHsLqROm1GrzZSklP',
]

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

// รูปนักเรียนแบบสี่เหลี่ยมขอบมนแนวตั้ง (ตามธีมเดิมของระบบ ห้ามวงกลม) แสดงในเซลล์ชื่อ-สกุลเลย ไม่แยกคอลัมน์
// ห้ามใส่ loading="lazy" — เซลล์นี้อยู่ใน #print-content ที่ซ่อนด้วย display:none จนกว่าจะสั่งพิมพ์
// รูปแบบ lazy จะไม่โหลดเลยเพราะ browser มองว่า element นี้ไม่เคยเข้าใกล้ viewport
const photoImg = url => url
  ? `<img src="${esc(url)}" style="width:20px;height:26px;border-radius:4px;object-fit:cover;border:1px solid #cbd5e1;vertical-align:middle;margin-right:5px">`
  : ''

// ==== วันที่: ทำงานล้วนๆ กับตัวเลข Y/M/D ไม่ผ่าน Date object แบบ local-timezone เลย ====
// (บั๊กเดิม: new Date("2026-09-26") ถูก parse เป็น UTC แล้วพอ .toISOString() หรือ toLocaleDateString
// แปลงกลับผ่าน timezone เครื่องผู้ใช้ อาจได้วันที่คลาดเคลื่อนไป 1 วัน โดยเฉพาะช่วงเช้ามืดในไทย)
const parseYMD = str => { const [y, m, d] = String(str).split('-').map(Number); return { y, m, d } }
const toUTCms = dateStr => { const { y, m, d } = parseYMD(dateStr); return Date.UTC(y, m - 1, d) }
const addDaysStr = (dateStr, n) => {
  const { y, m, d } = parseYMD(dateStr)
  const dt = new Date(Date.UTC(y, m - 1, d + n))
  return dt.toISOString().slice(0, 10)
}
const todayLocalStr = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
const fmtThaiDate = dateStr => {
  const { y, m, d } = parseYMD(dateStr)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
}
// แบบย่อไม่มีปี ใช้ในคอลัมน์ "ขาดวันที่" ของโหมดทุกวัน (ปีเดียวกันทั้งช่วง ใส่ซ้ำไม่จำเป็น)
const fmtThaiDateShort = dateStr => {
  const { y, m, d } = parseYMD(dateStr)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', timeZone: 'UTC' })
}
// วันที่แบบเลขล้วน d/m ใช้เป็นหัวคอลัมน์แคบๆ ในตารางแบบวัน-ต่อ-คอลัมน์ (โหมดทุกวัน)
const fmtShortNumeric = dateStr => { const { m, d } = parseYMD(dateStr); return `${d}/${m}` }

// เรียงห้องเรียนสามัญตามธรรมชาติ (ม.1/1, ม.1/2 ... ม.6/x, ปวช.1/1 ...) แบบเดียวกับ printColorRoster
const roomSortKey = str => {
  const m = String(str || '').match(/ม\.(\d+)\/(\d+)/)
  if (m) return [parseInt(m[1]), parseInt(m[2])]
  if (String(str || '').startsWith('ปวช.')) return [parseInt(str.split('.')[1]) + 6, 1]
  return [99, 99]
}
// ดึง "ชั้น" จากห้อง (ม.1/1→ม.1, ปวช.2/1→ปวช. รวมทุกปวช.เป็นกลุ่มเดียว) แบบเดียวกับ printColorRoster
const levelOf = room => {
  const r = String(room || 'ไม่ระบุ')
  return r.startsWith('ปวช.') ? 'ปวช.' : (r.split('/')[0] || 'ไม่ระบุ')
}
const levelSortKey = level => level.startsWith('ปวช.') ? 100 : (parseInt(level.replace('ม.', '')) || 99)
const byRoomThenName = (a, b) => {
  const [ka, kb] = [roomSortKey(a.main_room), roomSortKey(b.main_room)]
  return ka[0] - kb[0] || ka[1] - kb[1] || a.full_name.localeCompare(b.full_name, 'th')
}

// ขยายช่วงวันของปฏิทิน (เช่น "กีฬาสี" 4 วัน) เป็นตัวเลือกวันแยกทีละวัน ให้เลือกดูรายวันได้ตรงจริง
const buildDayOptions = (calendar) => {
  const days = []
  calendar.forEach(ev => {
    const totalDays = Math.round((toUTCms(ev.end_date || ev.event_date) - toUTCms(ev.event_date)) / 86400000) + 1
    for (let i = 0; i < totalDays; i++) {
      const dateStr = addDaysStr(ev.event_date, i)
      const label = totalDays > 1 ? `${ev.label} (วันที่ ${i + 1} จาก ${totalDays})` : ev.label
      days.push({ date: dateStr, label })
    }
  })
  return days.sort((a, b) => a.date < b.date ? -1 : 1)
}

async function fetchSnapshot(password) {
  const { data, error } = await supabase.rpc('get_public_sports_attendance_snapshot', { p_password: password })
  if (error) throw error
  return data
}

function renderGate(onSuccess) {
  root.innerHTML = `
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">สำหรับฝ่ายที่ได้รับสิทธิ์เข้าถึงข้อมูลเช็คชื่อกีฬาสีเท่านั้น</p>
      </div>
      <input id="gate-password" type="password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
      <button id="gate-submit" class="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">เข้าดูข้อมูล</button>
      <p id="gate-error" class="text-xs text-red-500 text-center hidden">รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</p>
    </div>`
  const input = root.querySelector('#gate-password')
  const errEl = root.querySelector('#gate-error')
  const submit = async () => {
    const pw = input.value.trim()
    if (!pw) return
    root.querySelector('#gate-submit').disabled = true
    try {
      const data = await fetchSnapshot(pw)
      sessionStorage.setItem(PW_KEY, pw)
      onSuccess(data)
    } catch (e) {
      errEl.classList.remove('hidden')
      root.querySelector('#gate-submit').disabled = false
    }
  }
  root.querySelector('#gate-submit').onclick = submit
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submit() })
}

function renderDashboard(snapshot) {
  const dayOptions = buildDayOptions(snapshot.calendar || [])
  const todayStr = todayLocalStr()
  const defaultDay = dayOptions.find(d => d.date === todayStr)?.date || dayOptions[dayOptions.length - 1]?.date || todayStr

  let gender = 'M'
  let selectedDay = defaultDay
  let printMode = 'single' // 'single' | 'all'
  let levelFilter = '' // '' = ทุกระดับชั้น

  // รายชั้นทั้งหมดที่มีอยู่จริง (รวมทั้งสองเพศ) ให้ตัวเลือกคงที่ไม่กระโดดตอนสลับเพศ
  const allLevels = [...new Set((snapshot.students || []).map(s => levelOf(s.main_room)))].sort((a, b) => levelSortKey(a) - levelSortKey(b))

  root.innerHTML = `
    <div class="space-y-4">
      <div class="no-print flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 นักเรียนชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 นักเรียนหญิง</button>
        </div>
        <div class="flex items-center gap-2">
          <select id="level-select" class="border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold"><option value="">ทุกระดับชั้น</option>${allLevels.map(lv => `<option value="${esc(lv)}">ชั้น ${esc(lv)}</option>`).join('')}</select>
          <select id="day-select" class="border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold"></select>
        </div>
      </div>
      <div id="summary-cards" class="no-print grid grid-cols-2 sm:grid-cols-4 gap-3"></div>
      <div class="no-print bg-white rounded-xl border border-slate-200 p-3 flex flex-wrap items-center gap-3">
        <span class="text-xs font-bold text-slate-500">พิมพ์/บันทึกไฟล์:</span>
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-print-mode="single" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all">📅 เฉพาะวันที่เลือก</button>
          <button type="button" data-print-mode="all" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all">📚 ทุกวัน (เข้าสี+วันจริงทั้งหมด)</button>
        </div>
      </div>
      <div class="no-print flex flex-wrap gap-2">
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ส่งออก CSV</button>
        <button id="btn-print" class="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold">🖨️ พิมพ์เอกสาร</button>
      </div>
      <div id="absent-list" class="no-print space-y-4"></div>
      <div id="print-content" class="print-only"></div>
    </div>`

  const daySelect = root.querySelector('#day-select')
  daySelect.innerHTML = dayOptions.map(d => `<option value="${d.date}">${esc(d.label)} — ${fmtThaiDate(d.date)}</option>`).join('') || '<option value="">ไม่มีข้อมูลปฏิทิน</option>'
  daySelect.value = selectedDay

  const studentsOf = g => (snapshot.students || []).filter(s => s.gender === g && (!levelFilter || levelOf(s.main_room) === levelFilter))
  const scannedIdsOn = day => new Set((snapshot.attendance || []).filter(a => a.session_date === day).map(a => a.student_id))

  const computeAbsent = () => {
    const students = studentsOf(gender)
    const scannedIds = scannedIdsOn(selectedDay)
    const present = students.filter(s => scannedIds.has(s.id))
    const absent = students.filter(s => !scannedIds.has(s.id))
    return { students, present, absent }
  }

  // สร้างเนื้อหาเอกสาร (โลโก้+หัวเรื่อง+สถิติ+ตารางเดียวต่อชั้น มีคอลัมน์เลขที่/รหัส/ชื่อ-สกุล/ห้อง
  // เรียงตามห้องเรียน) สำหรับ "วันเดียว" — ใช้ร่วมกันได้ทั้งโหมด single และวนซ้ำในโหมด all
  const buildDayDocument = (day, dayLabel, isFirstOverall) => {
    const students = studentsOf(gender)
    const scannedIds = scannedIdsOn(day)
    const absent = students.filter(s => !scannedIds.has(s.id))

    const byLevel = {}
    students.forEach(s => { const lv = levelOf(s.main_room); (byLevel[lv] = byLevel[lv] || { total: 0, present: 0, students: [] }); byLevel[lv].total++ })
    students.forEach(s => { if (scannedIds.has(s.id)) byLevel[levelOf(s.main_room)].present++ })
    absent.forEach(s => { byLevel[levelOf(s.main_room)].students.push(s) })
    const levels = Object.keys(byLevel).sort((a, b) => levelSortKey(a) - levelSortKey(b))

    const logoRow = `<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${LOGO_URLS.map(u => `<img src="${u}" style="height:56px">`).join('')}</div>`

    return levels.map((lv, idx) => {
      const info = byLevel[lv]
      const rows = [...info.students].sort(byRoomThenName)
      const lvPct = info.total ? Math.round(info.present / info.total * 100) : 0
      const pageBreak = !(isFirstOverall && idx === 0)
      return `<div style="${pageBreak ? 'page-break-before:always;' : ''}padding-top:12px">
        ${logoRow}
        <div style="text-align:center;margin-bottom:10px">
          <h2 style="font-size:16px;margin:0 0 4px">รายชื่อนักเรียน${gender === 'M' ? 'ชาย' : 'หญิง'}ที่ขาดเช็คชื่อ — ${esc(dayLabel)} (${fmtThaiDate(day)})</h2>
          <p style="font-size:13px;margin:0;font-weight:bold">${esc(SCHOOL_NAME)}</p>
          <p style="font-size:14px;margin:6px 0 0;font-weight:bold">ชั้น ${esc(lv)}</p>
        </div>
        <div style="display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:12px">
          <span>นักเรียนทั้งหมด: <b>${info.total}</b></span>
          <span style="color:#059669">มาแล้ว: <b>${info.present}</b></span>
          <span style="color:#dc2626">ขาด: <b>${info.students.length}</b></span>
          <span>คิดเป็น: <b>${lvPct}%</b></span>
        </div>
        ${rows.length ? `<table style="width:100%;border-collapse:collapse;font-size:11px">
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">รหัส</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ชื่อ-สกุล</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ห้อง</th>
          </tr></thead>
          <tbody>${rows.map((s, i) => `
            <tr>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${i + 1}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(s.student_code)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px">${photoImg(s.photo_url)}${esc(s.full_name)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(s.main_room || '—')}</td>
            </tr>`).join('')}</tbody>
        </table>` : `<p style="text-align:center;color:#059669;font-weight:bold">✅ เช็คชื่อครบทุกคนในชั้นนี้</p>`}
      </div>`
    }).join('')
  }

  // เอกสาร "ทุกวัน" — สร้างครั้งเดียว (ไม่ซ้ำตามจำนวนวัน) ต่อชั้น 1 หน้า แยกคอลัมน์ตามวันชัดเจน
  // แต่ละวันมีคอลัมน์ของตัวเอง แสดง ✓ (มา) / ✗ (ขาด) เทียบกับวันนั้นๆ ตรงๆ
  // (แสดงเฉพาะคนที่ขาดอย่างน้อย 1 วันในช่วงทั้งหมด — คนที่มาครบทุกวันไม่ต้องแสดง)
  const buildAllDaysDocument = () => {
    const students = studentsOf(gender)
    const scannedByDay = new Map(dayOptions.map(d => [d.date, scannedIdsOn(d.date)]))
    const byLevel = {}
    students.forEach(s => { const lv = levelOf(s.main_room); (byLevel[lv] = byLevel[lv] || { total: 0, rows: [] }); byLevel[lv].total++ })
    students.forEach(s => {
      const missedAny = dayOptions.some(d => !scannedByDay.get(d.date).has(s.id))
      if (missedAny) byLevel[levelOf(s.main_room)].rows.push(s)
    })
    const levels = Object.keys(byLevel).sort((a, b) => levelSortKey(a) - levelSortKey(b))
    const logoRow = `<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${LOGO_URLS.map(u => `<img src="${u}" style="height:56px">`).join('')}</div>`
    const dayColWidth = Math.max(22, Math.floor(360 / Math.max(1, dayOptions.length)))

    return levels.map((lv, idx) => {
      const info = byLevel[lv]
      const rows = [...info.rows].sort(byRoomThenName)
      return `<div style="${idx > 0 ? 'page-break-before:always;' : ''}padding-top:12px">
        ${logoRow}
        <div style="text-align:center;margin-bottom:10px">
          <h2 style="font-size:16px;margin:0 0 4px">รายชื่อนักเรียน${gender === 'M' ? 'ชาย' : 'หญิง'}ที่ขาดเช็คชื่อ — สรุปทุกวัน (เข้าสี+วันงานจริง)</h2>
          <p style="font-size:13px;margin:0;font-weight:bold">${esc(SCHOOL_NAME)}</p>
          <p style="font-size:14px;margin:6px 0 0;font-weight:bold">ชั้น ${esc(lv)}</p>
        </div>
        <div style="display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:12px">
          <span>นักเรียนทั้งหมด: <b>${info.total}</b></span>
          <span style="color:#dc2626">ขาดอย่างน้อย 1 วัน: <b>${rows.length}</b></span>
        </div>
        ${rows.length ? `<table style="width:100%;border-collapse:collapse;font-size:10px;table-layout:fixed">
          <colgroup>
            <col style="width:26px"><col style="width:56px"><col><col style="width:92px">
            ${dayOptions.map(() => `<col style="width:${dayColWidth}px">`).join('')}
          </colgroup>
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:3px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
            <th style="border:1px solid #cbd5e1;padding:3px;background:#f1f5f9;white-space:nowrap">รหัส</th>
            <th style="border:1px solid #cbd5e1;padding:3px 6px;background:#f1f5f9;text-align:left">ชื่อ-สกุล</th>
            <th style="border:1px solid #cbd5e1;padding:3px;background:#f1f5f9;white-space:nowrap">ห้อง</th>
            ${dayOptions.map(d => `<th style="border:1px solid #cbd5e1;padding:2px;background:#f1f5f9;white-space:nowrap;font-size:9px" title="${esc(d.label)}">${fmtShortNumeric(d.date)}</th>`).join('')}
          </tr></thead>
          <tbody>${rows.map((s, i) => `
            <tr>
              <td style="border:1px solid #cbd5e1;padding:3px;text-align:center">${i + 1}</td>
              <td style="border:1px solid #cbd5e1;padding:3px;text-align:center">${esc(s.student_code)}</td>
              <td style="border:1px solid #cbd5e1;padding:3px 6px">${photoImg(s.photo_url)}${esc(s.full_name)}</td>
              <td style="border:1px solid #cbd5e1;padding:3px;text-align:center;white-space:nowrap">${esc(s.main_room || '—')}</td>
              ${dayOptions.map(d => {
                const present = scannedByDay.get(d.date).has(s.id)
                return `<td style="border:1px solid #cbd5e1;padding:2px;text-align:center;font-weight:bold;color:${present ? '#059669' : '#dc2626'}">${present ? '✓' : '✗'}</td>`
              }).join('')}
            </tr>`).join('')}</tbody>
        </table>` : `<p style="text-align:center;color:#059669;font-weight:bold">✅ ไม่มีใครขาดเช็คชื่อเลยตลอดช่วงนี้</p>`}
      </div>`
    }).join('')
  }

  const render = () => {
    root.querySelectorAll('[data-gender]').forEach(b => b.classList.toggle('bg-pink-600', b.dataset.gender === gender))
    root.querySelectorAll('[data-gender]').forEach(b => b.classList.toggle('text-white', b.dataset.gender === gender))
    root.querySelectorAll('[data-print-mode]').forEach(b => b.classList.toggle('bg-pink-600', b.dataset.printMode === printMode))
    root.querySelectorAll('[data-print-mode]').forEach(b => b.classList.toggle('text-white', b.dataset.printMode === printMode))
    daySelect.disabled = printMode === 'all'

    const { students, present, absent } = computeAbsent()
    const pct = students.length ? Math.round(present.length / students.length * 100) : 0

    root.querySelector('#summary-cards').innerHTML = `
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">นักเรียนทั้งหมด</p><b class="text-xl">${students.length}</b></div>
      <div class="bg-emerald-50 rounded-xl border border-emerald-200 p-3 text-center"><p class="text-[10px] text-emerald-600 font-bold">มาเช็คชื่อแล้ว</p><b class="text-xl text-emerald-700">${present.length}</b></div>
      <div class="bg-red-50 rounded-xl border border-red-200 p-3 text-center"><p class="text-[10px] text-red-600 font-bold">ขาดเช็คชื่อ</p><b class="text-xl text-red-700">${absent.length}</b></div>
      <div class="bg-slate-100 rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">มาแล้ว</p><b class="text-xl">${pct}%</b></div>`

    // แสดงบนหน้าจอ: แยกตามห้องเหมือนเดิม (กระชับ ดูเร็ว) — ใช้วันที่เลือกเดี่ยวเสมอ ไม่ขึ้นกับ printMode
    const byRoom = {}
    absent.forEach(s => { (byRoom[s.main_room || 'ไม่ระบุห้อง'] = byRoom[s.main_room || 'ไม่ระบุห้อง'] || []).push(s) })
    const rooms = Object.keys(byRoom).sort((a, b) => { const [ka, kb] = [roomSortKey(a), roomSortKey(b)]; return ka[0] - kb[0] || ka[1] - kb[1] })
    root.querySelector('#absent-list').innerHTML = rooms.length ? rooms.map(room => `
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
          <b class="text-sm">ห้อง ${esc(room)}</b>
          <span class="text-xs text-red-600 font-bold">ขาด ${byRoom[room].length} คน</span>
        </div>
        <table class="w-full text-xs">
          <tbody>${byRoom[room].sort((a, b) => a.full_name.localeCompare(b.full_name, 'th')).map(s => `
            <tr class="border-t border-slate-100">
              <td class="p-2 w-24 text-slate-500">${esc(s.student_code)}</td>
              <td class="p-2">
                <div class="flex items-center gap-2">
                  ${s.photo_url
                    ? `<img src="${esc(s.photo_url)}" alt="" class="w-7 h-9 rounded-md object-cover border border-slate-200 bg-slate-100 flex-shrink-0 shadow-sm" loading="lazy">`
                    : `<div class="w-7 h-9 rounded-md bg-slate-100 text-slate-400 grid place-items-center flex-shrink-0 border border-slate-200 text-[10px] font-bold">${esc((s.full_name || '?').charAt(0))}</div>`}
                  <span>${esc(s.full_name)}</span>
                </div>
              </td>
            </tr>
          `).join('')}</tbody>
        </table>
      </div>`).join('') : `<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ เช็คชื่อครบทุกคนในวันนี้</div>`

    // เอกสารพิมพ์: โหมดเดียว = วันที่เลือกอยู่ตอนนี้เท่านั้น, โหมดทุกวัน = สรุปครั้งเดียว
    // (1 หน้าต่อชั้น ไม่ซ้ำตามจำนวนวัน) มีคอลัมน์ "ขาดวันที่" ระบุว่าขาดวันไหนบ้าง
    if (printMode === 'all') {
      root.querySelector('#print-content').innerHTML = dayOptions.length
        ? buildAllDaysDocument()
        : `<p style="text-align:center;padding:40px">ไม่มีข้อมูลปฏิทิน</p>`
    } else {
      const dayLabel = dayOptions.find(d => d.date === selectedDay)?.label || selectedDay
      root.querySelector('#print-content').innerHTML = buildDayDocument(selectedDay, dayLabel, true) || `<p style="text-align:center;padding:40px">ไม่มีข้อมูลนักเรียน</p>`
    }
  }

  root.querySelectorAll('[data-gender]').forEach(b => b.onclick = () => { gender = b.dataset.gender; render() })
  root.querySelectorAll('[data-print-mode]').forEach(b => b.onclick = () => { printMode = b.dataset.printMode; render() })
  daySelect.onchange = () => { selectedDay = daySelect.value; render() }
  root.querySelector('#level-select').onchange = e => { levelFilter = e.target.value; render() }

  root.querySelector('#btn-export-csv').onclick = () => {
    const q = x => `"${String(x || '').replaceAll('"', '""')}"`
    let rows
    if (printMode === 'all') {
      // 1 แถวต่อนักเรียน (ไม่ซ้ำตามจำนวนวัน) แยกคอลัมน์ตามวันชัดเจน ระบุ มา/ขาด ตรงตามวันนั้นๆ
      const scannedByDay = new Map(dayOptions.map(d => [d.date, scannedIdsOn(d.date)]))
      const students = studentsOf(gender).filter(s => dayOptions.some(d => !scannedByDay.get(d.date).has(s.id))).sort(byRoomThenName)
      rows = [['ห้อง', 'รหัส', 'ชื่อ-สกุล', ...dayOptions.map(d => fmtThaiDateShort(d.date))].map(q).join(','),
        ...students.map(s => [s.main_room, s.student_code, s.full_name,
          ...dayOptions.map(d => scannedByDay.get(d.date).has(s.id) ? 'มา' : 'ขาด')].map(q).join(','))]
    } else {
      const dayLabel = dayOptions.find(d => d.date === selectedDay)?.label || selectedDay
      const { absent } = computeAbsent()
      rows = ['ห้อง,รหัส,ชื่อ-สกุล,วันที่ขาด', ...absent.sort(byRoomThenName)
        .map(s => [s.main_room, s.student_code, s.full_name, dayLabel].map(q).join(','))]
    }
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob(['﻿' + rows.join('\n')], { type: 'text/csv' }))
    const levelSuffix = levelFilter ? `-${levelFilter}` : ''
    a.download = printMode === 'all' ? `ขาดเช็คชื่อ-${gender === 'M' ? 'ชาย' : 'หญิง'}${levelSuffix}-ทุกวัน.csv` : `ขาดเช็คชื่อ-${gender === 'M' ? 'ชาย' : 'หญิง'}${levelSuffix}-${selectedDay}.csv`
    a.click(); URL.revokeObjectURL(a.href)
  }
  root.querySelector('#btn-print').onclick = () => window.print()

  render()
}

async function init() {
  const cachedPw = sessionStorage.getItem(PW_KEY)
  if (cachedPw) {
    try {
      const data = await fetchSnapshot(cachedPw)
      renderDashboard(data)
      return
    } catch (e) {
      sessionStorage.removeItem(PW_KEY)
    }
  }
  renderGate(renderDashboard)
}

init()
