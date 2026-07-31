import { supabase } from './supabase.js'

const PW_KEY = 'sports_dues_monitor_pw'
const root = document.getElementById('dues-monitor-root')
const SCHOOL_NAME = 'โรงเรียนมูลนิธิอาซิซสถานร่วมกับวิทยาลัยเทคโนโลยีอาซิซสถานพณิชยการ'
const LOGO_URLS = [
  'https://lh3.googleusercontent.com/d/1JDduqJInp2BjORgZhhUgv80fXtMs3JzV',
  'https://lh3.googleusercontent.com/d/1lXMVnPf8rIl5SBzqZeSCEtbpf6U7idWa',
  'https://lh3.googleusercontent.com/d/1JPmgiu_pgACGYTymHsLqROm1GrzZSklP',
]

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

// รูปนักเรียนแบบสี่เหลี่ยมขอบมนแนวตั้ง (ตามธีมเดิมของระบบ ห้ามวงกลม) — ห้ามใส่ loading="lazy"
// ในเซลล์ที่อยู่ใน #print-content (ซ่อนด้วย display:none จนกว่าจะสั่งพิมพ์ lazy จะไม่โหลดเลย)
const photoImg = url => url
  ? `<img src="${esc(url)}" style="width:20px;height:26px;border-radius:4px;object-fit:cover;border:1px solid #cbd5e1;vertical-align:middle;margin-right:5px">`
  : ''

// เรียงห้องเรียนสามัญตามธรรมชาติ (ม.1/1, ม.1/2 ... ม.6/x, ปวช.1/1 ...) แบบเดียวกับ printColorRoster
const roomSortKey = str => {
  const m = String(str || '').match(/ม\.(\d+)\/(\d+)/)
  if (m) return [parseInt(m[1]), parseInt(m[2])]
  if (String(str || '').startsWith('ปวช.')) return [parseInt(str.split('.')[1]) + 6, 1]
  return [99, 99]
}
const levelOf = room => {
  const r = String(room || 'ไม่ระบุ')
  return r.startsWith('ปวช.') ? 'ปวช.' : (r.split('/')[0] || 'ไม่ระบุ')
}
const levelSortKey = level => level.startsWith('ปวช.') ? 100 : (parseInt(level.replace('ม.', '')) || 99)
const byRoomThenName = (a, b) => {
  const [ka, kb] = [roomSortKey(a.main_room), roomSortKey(b.main_room)]
  return ka[0] - kb[0] || ka[1] - kb[1] || a.full_name.localeCompare(b.full_name, 'th')
}

async function fetchSnapshot(password) {
  const { data, error } = await supabase.rpc('get_public_sports_dues_snapshot', { p_password: password })
  if (error) throw error
  return data
}

function renderGate(onSuccess) {
  root.innerHTML = `
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">สำหรับฝ่ายที่ได้รับสิทธิ์เข้าถึงข้อมูลค่าบำรุงสีเท่านั้น</p>
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
  const duesAmount = Number(snapshot.dues_amount) || 30
  let gender = 'M'

  root.innerHTML = `
    <div class="space-y-4">
      <div class="no-print flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 นักเรียนชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 นักเรียนหญิง</button>
        </div>
        <p class="text-xs text-slate-500 font-bold">ค่าบำรุงสีคนละ ${duesAmount.toLocaleString('th-TH')} บาท</p>
      </div>
      <div id="summary-cards" class="no-print grid grid-cols-2 sm:grid-cols-4 gap-3"></div>
      <div class="no-print flex flex-wrap gap-2">
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ส่งออก CSV</button>
        <button id="btn-print" class="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold">🖨️ พิมพ์เอกสาร</button>
      </div>
      <div id="unpaid-list" class="no-print space-y-4"></div>
      <div id="print-content" class="print-only"></div>
    </div>`

  const studentsOf = g => (snapshot.students || []).filter(s => s.gender === g)
  const paidIds = new Set((snapshot.dues || []).map(d => d.student_id))
  const paidRowOf = id => (snapshot.dues || []).find(d => d.student_id === id)

  const computeUnpaid = () => {
    const students = studentsOf(gender)
    const paid = students.filter(s => paidIds.has(s.id))
    const unpaid = students.filter(s => !paidIds.has(s.id))
    return { students, paid, unpaid }
  }

  // สร้างเนื้อหาเอกสารพิมพ์ (โลโก้+หัวเรื่อง+สถิติ+ตารางเดียวต่อชั้น เรียงตามห้องเรียน)
  const buildDocument = () => {
    const students = studentsOf(gender)
    const unpaid = students.filter(s => !paidIds.has(s.id))

    const byLevel = {}
    students.forEach(s => { const lv = levelOf(s.main_room); (byLevel[lv] = byLevel[lv] || { total: 0, paid: 0, students: [] }); byLevel[lv].total++ })
    students.forEach(s => { if (paidIds.has(s.id)) byLevel[levelOf(s.main_room)].paid++ })
    unpaid.forEach(s => { byLevel[levelOf(s.main_room)].students.push(s) })
    const levels = Object.keys(byLevel).sort((a, b) => levelSortKey(a) - levelSortKey(b))

    const logoRow = `<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${LOGO_URLS.map(u => `<img src="${u}" style="height:56px">`).join('')}</div>`

    return levels.map((lv, idx) => {
      const info = byLevel[lv]
      const rows = [...info.students].sort(byRoomThenName)
      const lvPct = info.total ? Math.round(info.paid / info.total * 100) : 0
      return `<div style="${idx > 0 ? 'page-break-before:always;' : ''}padding-top:12px">
        ${logoRow}
        <div style="text-align:center;margin-bottom:10px">
          <h2 style="font-size:16px;margin:0 0 4px">รายชื่อนักเรียน${gender === 'M' ? 'ชาย' : 'หญิง'}ที่ยังไม่ชำระค่าบำรุงสี</h2>
          <p style="font-size:13px;margin:0;font-weight:bold">${esc(SCHOOL_NAME)}</p>
          <p style="font-size:14px;margin:6px 0 0;font-weight:bold">ชั้น ${esc(lv)}</p>
        </div>
        <div style="display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:12px">
          <span>นักเรียนทั้งหมด: <b>${info.total}</b></span>
          <span style="color:#059669">จ่ายแล้ว: <b>${info.paid}</b></span>
          <span style="color:#dc2626">ยังไม่จ่าย: <b>${info.students.length}</b></span>
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
        </table>` : `<p style="text-align:center;color:#059669;font-weight:bold">✅ จ่ายค่าบำรุงครบทุกคนในชั้นนี้</p>`}
      </div>`
    }).join('')
  }

  const render = () => {
    root.querySelectorAll('[data-gender]').forEach(b => b.classList.toggle('bg-pink-600', b.dataset.gender === gender))
    root.querySelectorAll('[data-gender]').forEach(b => b.classList.toggle('text-white', b.dataset.gender === gender))

    const { students, paid, unpaid } = computeUnpaid()
    const pct = students.length ? Math.round(paid.length / students.length * 100) : 0
    const totalCollected = paid.reduce((s, x) => s + (Number(paidRowOf(x.id)?.amount) || 0), 0)

    root.querySelector('#summary-cards').innerHTML = `
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">นักเรียนทั้งหมด</p><b class="text-xl">${students.length}</b></div>
      <div class="bg-emerald-50 rounded-xl border border-emerald-200 p-3 text-center"><p class="text-[10px] text-emerald-600 font-bold">จ่ายแล้ว</p><b class="text-xl text-emerald-700">${paid.length}</b></div>
      <div class="bg-red-50 rounded-xl border border-red-200 p-3 text-center"><p class="text-[10px] text-red-600 font-bold">ยังไม่จ่าย</p><b class="text-xl text-red-700">${unpaid.length}</b></div>
      <div class="bg-slate-100 rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">รวมเงินที่เก็บได้</p><b class="text-xl">${totalCollected.toLocaleString('th-TH')}</b></div>`

    // แสดงบนหน้าจอ: แยกตามห้อง (เฉพาะคนยังไม่จ่าย กระชับดูเร็ว)
    const byRoom = {}
    unpaid.forEach(s => { (byRoom[s.main_room || 'ไม่ระบุห้อง'] = byRoom[s.main_room || 'ไม่ระบุห้อง'] || []).push(s) })
    const rooms = Object.keys(byRoom).sort((a, b) => { const [ka, kb] = [roomSortKey(a), roomSortKey(b)]; return ka[0] - kb[0] || ka[1] - kb[1] })
    root.querySelector('#unpaid-list').innerHTML = rooms.length ? rooms.map(room => `
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
          <b class="text-sm">ห้อง ${esc(room)}</b>
          <span class="text-xs text-red-600 font-bold">ยังไม่จ่าย ${byRoom[room].length} คน</span>
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
      </div>`).join('') : `<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ จ่ายค่าบำรุงครบทุกคนแล้ว</div>`

    root.querySelector('#print-content').innerHTML = buildDocument() || `<p style="text-align:center;padding:40px">ไม่มีข้อมูลนักเรียน</p>`
  }

  root.querySelectorAll('[data-gender]').forEach(b => b.onclick = () => { gender = b.dataset.gender; render() })

  root.querySelector('#btn-export-csv').onclick = () => {
    const q = x => `"${String(x || '').replaceAll('"', '""')}"`
    const { unpaid } = computeUnpaid()
    const rows = ['ห้อง,รหัส,ชื่อ-สกุล,สถานะ', ...unpaid.sort(byRoomThenName)
      .map(s => [s.main_room, s.student_code, s.full_name, 'ยังไม่จ่าย'].map(q).join(','))]
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob(['﻿' + rows.join('\n')], { type: 'text/csv' }))
    a.download = `ยังไม่จ่ายค่าบำรุง-${gender === 'M' ? 'ชาย' : 'หญิง'}.csv`
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
