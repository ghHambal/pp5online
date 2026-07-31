import { supabase } from './supabase.js'

const PW_KEY = 'sports_att_monitor_pw'
const root = document.getElementById('attendance-monitor-root')

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

// เรียงห้องเรียนสามัญตามธรรมชาติ (ม.1/1, ม.1/2 ... ม.6/x, ปวช.1/1 ...) แบบเดียวกับ printColorRoster
const roomSortKey = str => {
  const m = String(str || '').match(/ม\.(\d+)\/(\d+)/)
  if (m) return [parseInt(m[1]), parseInt(m[2])]
  if (String(str || '').startsWith('ปวช.')) return [parseInt(str.split('.')[1]) + 6, 1]
  return [99, 99]
}

// ขยายช่วงวันของปฏิทิน (เช่น "กีฬาสี" 4 วัน) เป็นตัวเลือกวันแยกทีละวัน ให้เลือกดูรายวันได้ตรงจริง
const buildDayOptions = (calendar) => {
  const days = []
  calendar.forEach(ev => {
    const start = new Date(ev.event_date)
    const end = new Date(ev.end_date || ev.event_date)
    const totalDays = Math.round((end - start) / 86400000) + 1
    for (let i = 0; i < totalDays; i++) {
      const d = new Date(start)
      d.setDate(d.getDate() + i)
      const dateStr = d.toISOString().slice(0, 10)
      const label = totalDays > 1 ? `${ev.label} (วันที่ ${i + 1} จาก ${totalDays})` : ev.label
      days.push({ date: dateStr, label })
    }
  })
  return days.sort((a, b) => a.date < b.date ? -1 : 1)
}

const fmtThaiDate = dateStr => new Date(dateStr).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' })

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
  const todayStr = new Date().toISOString().slice(0, 10)
  const defaultDay = dayOptions.find(d => d.date === todayStr)?.date || dayOptions[dayOptions.length - 1]?.date || todayStr

  let gender = 'M'
  let selectedDay = defaultDay

  root.innerHTML = `
    <div class="space-y-4">
      <div class="no-print flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 นักเรียนชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 นักเรียนหญิง</button>
        </div>
        <select id="day-select" class="border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold"></select>
      </div>
      <div id="summary-cards" class="grid grid-cols-2 sm:grid-cols-4 gap-3"></div>
      <div class="no-print flex flex-wrap gap-2">
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ส่งออก CSV</button>
        <button id="btn-print" class="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold">🖨️ พิมพ์เอกสาร</button>
      </div>
      <div id="print-title" class="hidden print:block text-center mb-4">
        <h2 class="font-bold text-lg"></h2>
      </div>
      <div id="absent-list" class="space-y-4"></div>
    </div>`

  const daySelect = root.querySelector('#day-select')
  daySelect.innerHTML = dayOptions.map(d => `<option value="${d.date}">${esc(d.label)} — ${fmtThaiDate(d.date)}</option>`).join('') || '<option value="">ไม่มีข้อมูลปฏิทิน</option>'
  daySelect.value = selectedDay

  const computeAbsent = () => {
    const students = (snapshot.students || []).filter(s => s.gender === gender)
    const scannedIds = new Set((snapshot.attendance || []).filter(a => a.session_date === selectedDay).map(a => a.student_id))
    const present = students.filter(s => scannedIds.has(s.id))
    const absent = students.filter(s => !scannedIds.has(s.id))
    return { students, present, absent }
  }

  const render = () => {
    root.querySelectorAll('[data-gender]').forEach(b => b.classList.toggle('bg-pink-600', b.dataset.gender === gender))
    root.querySelectorAll('[data-gender]').forEach(b => b.classList.toggle('text-white', b.dataset.gender === gender))
    const { students, present, absent } = computeAbsent()
    const pct = students.length ? Math.round(present.length / students.length * 100) : 0

    root.querySelector('#summary-cards').innerHTML = `
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">นักเรียนทั้งหมด</p><b class="text-xl">${students.length}</b></div>
      <div class="bg-emerald-50 rounded-xl border border-emerald-200 p-3 text-center"><p class="text-[10px] text-emerald-600 font-bold">มาเช็คชื่อแล้ว</p><b class="text-xl text-emerald-700">${present.length}</b></div>
      <div class="bg-red-50 rounded-xl border border-red-200 p-3 text-center"><p class="text-[10px] text-red-600 font-bold">ขาดเช็คชื่อ</p><b class="text-xl text-red-700">${absent.length}</b></div>
      <div class="bg-slate-100 rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">มาแล้ว</p><b class="text-xl">${pct}%</b></div>`

    const byRoom = {}
    absent.forEach(s => { (byRoom[s.main_room || 'ไม่ระบุห้อง'] = byRoom[s.main_room || 'ไม่ระบุห้อง'] || []).push(s) })
    const rooms = Object.keys(byRoom).sort((a, b) => {
      const [ka, kb] = [roomSortKey(a), roomSortKey(b)]
      return ka[0] - kb[0] || ka[1] - kb[1]
    })

    const dayLabel = dayOptions.find(d => d.date === selectedDay)?.label || selectedDay
    root.querySelector('#print-title h2').textContent = `รายชื่อนักเรียน${gender === 'M' ? 'ชาย' : 'หญิง'}ที่ขาดเช็คชื่อ — ${dayLabel} (${fmtThaiDate(selectedDay)})`

    root.querySelector('#absent-list').innerHTML = rooms.length ? rooms.map(room => `
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
          <b class="text-sm">ห้อง ${esc(room)}</b>
          <span class="text-xs text-red-600 font-bold">ขาด ${byRoom[room].length} คน</span>
        </div>
        <table class="w-full text-xs">
          <tbody>${byRoom[room].sort((a, b) => a.full_name.localeCompare(b.full_name, 'th')).map(s => `
            <tr class="border-t border-slate-100"><td class="p-2 w-24 text-slate-500">${esc(s.student_code)}</td><td class="p-2">${esc(s.full_name)}</td></tr>
          `).join('')}</tbody>
        </table>
      </div>`).join('') : `<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ เช็คชื่อครบทุกคนในวันนี้</div>`
  }

  root.querySelectorAll('[data-gender]').forEach(b => b.onclick = () => { gender = b.dataset.gender; render() })
  daySelect.onchange = () => { selectedDay = daySelect.value; render() }

  root.querySelector('#btn-export-csv').onclick = () => {
    const { absent } = computeAbsent()
    const dayLabel = dayOptions.find(d => d.date === selectedDay)?.label || selectedDay
    const rows = ['ห้อง,รหัส,ชื่อ-สกุล,วันที่ขาด', ...absent
      .sort((a, b) => { const [ka, kb] = [roomSortKey(a.main_room), roomSortKey(b.main_room)]; return ka[0] - kb[0] || ka[1] - kb[1] })
      .map(s => [s.main_room, s.student_code, s.full_name, dayLabel].map(x => `"${String(x || '').replaceAll('"', '""')}"`).join(','))]
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob(['﻿' + rows.join('\n')], { type: 'text/csv' }))
    a.download = `ขาดเช็คชื่อ-${gender === 'M' ? 'ชาย' : 'หญิง'}-${selectedDay}.csv`
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
