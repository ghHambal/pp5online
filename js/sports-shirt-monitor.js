import { supabase } from './supabase.js'

const PW_KEY = 'sports_shirt_monitor_pw'
const root = document.getElementById('shirt-monitor-root')
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

// สถานะไซซ์ — คำเดิมเป๊ะจาก js/sports-portals.js (badge/statusClass) ห้ามคิดคำใหม่
const sizeBadgeLabel = s => ({ pending: 'รอยืนยัน', confirmed: 'ยืนยันแล้ว', advisor_updated: 'ครูเลือก/แก้ไขแทน' }[s] || 'ยังไม่จำนง')
const sizeConfirmed = s => s === 'confirmed' || s === 'advisor_updated'

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
  const { data, error } = await supabase.rpc('get_public_sports_shirt_snapshot', { p_password: password })
  if (error) throw error
  return data
}

function renderGate(onSuccess) {
  root.innerHTML = `
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">สำหรับฝ่ายที่ได้รับสิทธิ์เข้าถึงข้อมูลไซซ์เสื้อและค่าเสื้อกีฬาสีเท่านั้น</p>
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
  const amount = Number(snapshot.shirt_payment_amount) || 0
  const paymentsOpen = amount > 0
  let gender = 'ALL' // 'M' | 'W' | 'ALL' — ดีฟอลต์ "ทั้งหมด" เพราะ gender อาจเป็น null/Coed ถ้า house_color ไม่ผูก team_colors
  let filter = 'all' // 'all' | 'size_pending' | 'unpaid'

  const requestOf = id => (snapshot.shirt_requests || []).find(r => r.student_id === id)
  const paymentOf = id => (snapshot.shirt_payments || []).find(p => p.student_id === id)

  root.innerHTML = `
    <div class="space-y-4">
      <div class="no-print flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 นักเรียนชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 นักเรียนหญิง</button>
          <button type="button" data-gender="ALL" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👥 ทั้งหมด</button>
        </div>
        <p class="text-xs text-slate-500 font-bold">${paymentsOpen ? `ค่าเสื้อกีฬาสีคนละ ${amount.toLocaleString('th-TH')} บาท` : 'แอดมินยังไม่ได้ตั้งราคาค่าเสื้อ'}</p>
      </div>
      <div id="summary-cards" class="no-print grid grid-cols-2 sm:grid-cols-4 gap-3"></div>
      <div class="no-print bg-white rounded-xl border border-slate-200 p-3 flex flex-wrap items-center gap-3">
        <span class="text-xs font-bold text-slate-500">กรองรายชื่อ:</span>
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-filter="all" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all">ทั้งหมด</button>
          <button type="button" data-filter="size_pending" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all">ไซซ์ยังไม่ยืนยัน</button>
          <button type="button" data-filter="unpaid" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all">ยังไม่ชำระ</button>
        </div>
      </div>
      <div class="no-print flex flex-wrap gap-2">
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ดาวน์โหลด Excel (CSV)</button>
        <button id="btn-print" class="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold">🖨️ พิมพ์เอกสาร</button>
      </div>
      <div id="shirt-list" class="no-print space-y-4"></div>
      <div id="print-content" class="print-only"></div>
    </div>`

  const studentsOf = g => g === 'ALL' ? (snapshot.students || []) : (snapshot.students || []).filter(s => s.gender === g)

  const rowStatus = s => {
    const req = requestOf(s.id)
    const pay = paymentOf(s.id)
    const sizeStatus = req?.status || null
    const sizeOk = sizeConfirmed(sizeStatus)
    const paid = !!pay
    return { req, pay, sizeStatus, sizeOk, paid }
  }

  const computeRows = () => {
    const students = studentsOf(gender)
    return students.filter(s => {
      if (filter === 'size_pending') { const { sizeOk } = rowStatus(s); return !sizeOk }
      if (filter === 'unpaid') { if (!paymentsOpen) return false; const { paid } = rowStatus(s); return !paid }
      return true
    })
  }

  // สร้างเนื้อหาเอกสารพิมพ์ (โลโก้+หัวเรื่อง+สถิติ+ตารางเดียวต่อชั้น เรียงตามห้องเรียน) — ยึดตาม filter ที่เลือกอยู่
  const buildDocument = () => {
    const students = studentsOf(gender)
    const rows = computeRows()

    const byLevel = {}
    students.forEach(s => { const lv = levelOf(s.main_room); (byLevel[lv] = byLevel[lv] || { total: 0, sizeOk: 0, paid: 0, students: [] }); byLevel[lv].total++ })
    students.forEach(s => { const { sizeOk, paid } = rowStatus(s); const lv = levelOf(s.main_room); if (sizeOk) byLevel[lv].sizeOk++; if (paid) byLevel[lv].paid++ })
    rows.forEach(s => { byLevel[levelOf(s.main_room)].students.push(s) })
    const levels = Object.keys(byLevel).sort((a, b) => levelSortKey(a) - levelSortKey(b))

    const logoRow = `<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${LOGO_URLS.map(u => `<img src="${u}" style="height:56px">`).join('')}</div>`
    const genderLabel = gender === 'M' ? 'ชาย' : gender === 'W' ? 'หญิง' : ''
    const titleByFilter = { all: 'รายชื่อนักเรียน', size_pending: 'รายชื่อนักเรียนที่ไซซ์เสื้อยังไม่ยืนยัน', unpaid: 'รายชื่อนักเรียนที่ยังไม่ชำระค่าเสื้อ' }[filter]

    return levels.map((lv, idx) => {
      const info = byLevel[lv]
      const rowsOfLevel = [...info.students].sort(byRoomThenName)
      return `<div style="${idx > 0 ? 'page-break-before:always;' : ''}padding-top:12px">
        ${logoRow}
        <div style="text-align:center;margin-bottom:10px">
          <h2 style="font-size:16px;margin:0 0 4px">${esc(titleByFilter)}${genderLabel ? esc(genderLabel) : ''}</h2>
          <p style="font-size:13px;margin:0;font-weight:bold">${esc(SCHOOL_NAME)}</p>
          <p style="font-size:14px;margin:6px 0 0;font-weight:bold">ชั้น ${esc(lv)}</p>
        </div>
        <div style="display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:12px">
          <span>นักเรียนทั้งหมด: <b>${info.total}</b></span>
          <span style="color:#059669">ยืนยันไซซ์แล้ว: <b>${info.sizeOk}</b></span>
          ${paymentsOpen ? `<span style="color:#059669">ชำระแล้ว: <b>${info.paid}</b></span>` : ''}
        </div>
        ${rowsOfLevel.length ? `<table style="width:100%;border-collapse:collapse;font-size:10.5px">
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">รหัส</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ชื่อ-สกุล</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ห้อง</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ไซซ์ยืนยัน</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สถานะไซซ์</th>
            ${paymentsOpen ? `<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สถานะชำระ</th>` : ''}
          </tr></thead>
          <tbody>${rowsOfLevel.map((s, i) => {
            const { sizeStatus, paid } = rowStatus(s)
            const req = requestOf(s.id)
            return `<tr>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${i + 1}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(s.student_code)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px">${photoImg(s.photo_url)}${esc(s.full_name)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(s.main_room || '—')}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(req?.confirmed_size || '—')}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(sizeBadgeLabel(sizeStatus))}</td>
              ${paymentsOpen ? `<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${paid ? 'ชำระแล้ว' : 'ยังไม่ชำระ'}</td>` : ''}
            </tr>`
          }).join('')}</tbody>
        </table>` : `<p style="text-align:center;color:#059669;font-weight:bold">✅ ไม่มีรายชื่อตามเงื่อนไขนี้ในชั้นนี้</p>`}
      </div>`
    }).join('')
  }

  const render = () => {
    root.querySelectorAll('[data-gender]').forEach(b => { const on = b.dataset.gender === gender; b.classList.toggle('bg-pink-600', on); b.classList.toggle('text-white', on) })
    root.querySelectorAll('[data-filter]').forEach(b => { const on = b.dataset.filter === filter; b.classList.toggle('bg-pink-600', on); b.classList.toggle('text-white', on) })

    const students = studentsOf(gender)
    const sizeOkCount = students.filter(s => rowStatus(s).sizeOk).length
    const paidCount = students.filter(s => rowStatus(s).paid).length
    const totalCollected = students.reduce((sum, s) => sum + (Number(paymentOf(s.id)?.amount) || 0), 0)

    root.querySelector('#summary-cards').innerHTML = `
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">นักเรียนทั้งหมด</p><b class="text-xl">${students.length}</b></div>
      <div class="bg-emerald-50 rounded-xl border border-emerald-200 p-3 text-center"><p class="text-[10px] text-emerald-600 font-bold">ยืนยันไซซ์แล้ว</p><b class="text-xl text-emerald-700">${sizeOkCount} / ${students.length}</b></div>
      <div class="${paymentsOpen ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'} rounded-xl border p-3 text-center"><p class="text-[10px] ${paymentsOpen ? 'text-emerald-600' : 'text-amber-600'} font-bold">ชำระแล้ว</p><b class="text-xl ${paymentsOpen ? 'text-emerald-700' : 'text-amber-700'}">${paymentsOpen ? `${paidCount} / ${students.length}` : 'รอประกาศราคา'}</b></div>
      <div class="bg-slate-100 rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">รวมเงินที่เก็บได้</p><b class="text-xl">${totalCollected.toLocaleString('th-TH')}</b></div>`

    // แสดงบนหน้าจอ: แยกตามห้อง ตามรายการที่ผ่าน filter อยู่
    const rows = computeRows()
    const byRoom = {}
    rows.forEach(s => { (byRoom[s.main_room || 'ไม่ระบุห้อง'] = byRoom[s.main_room || 'ไม่ระบุห้อง'] || []).push(s) })
    const rooms = Object.keys(byRoom).sort((a, b) => { const [ka, kb] = [roomSortKey(a), roomSortKey(b)]; return ka[0] - kb[0] || ka[1] - kb[1] })
    root.querySelector('#shirt-list').innerHTML = rooms.length ? rooms.map(room => `
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
          <b class="text-sm">ห้อง ${esc(room)}</b>
          <span class="text-xs text-slate-500 font-bold">${byRoom[room].length} คน</span>
        </div>
        <table class="w-full text-xs">
          <thead><tr class="text-slate-400 text-left">
            <th class="p-2 font-bold">รหัส</th><th class="p-2 font-bold">ชื่อ-สกุล</th>
            <th class="p-2 font-bold text-center">ไซซ์จำนง</th><th class="p-2 font-bold text-center">ไซซ์ยืนยัน</th>
            <th class="p-2 font-bold text-center">สถานะไซซ์</th>
            ${paymentsOpen ? '<th class="p-2 font-bold text-center">สถานะชำระ</th><th class="p-2 font-bold text-right">จำนวนเงิน</th>' : ''}
          </tr></thead>
          <tbody>${byRoom[room].sort((a, b) => a.full_name.localeCompare(b.full_name, 'th')).map(s => {
            const { sizeStatus, sizeOk, paid, pay } = rowStatus(s)
            const req = requestOf(s.id)
            return `<tr class="border-t border-slate-100">
              <td class="p-2 w-24 text-slate-500">${esc(s.student_code)}</td>
              <td class="p-2">
                <div class="flex items-center gap-2">
                  ${s.photo_url
                    ? `<img src="${esc(s.photo_url)}" alt="" class="w-7 h-9 rounded-md object-cover border border-slate-200 bg-slate-100 flex-shrink-0 shadow-sm" loading="lazy">`
                    : `<div class="w-7 h-9 rounded-md bg-slate-100 text-slate-400 grid place-items-center flex-shrink-0 border border-slate-200 text-[10px] font-bold">${esc((s.full_name || '?').charAt(0))}</div>`}
                  <span>${esc(s.full_name)}</span>
                </div>
              </td>
              <td class="p-2 text-center">${esc(req?.requested_size || '—')}</td>
              <td class="p-2 text-center">${esc(req?.confirmed_size || '—')}</td>
              <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${sizeOk ? 'bg-emerald-100 text-emerald-700' : sizeStatus === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}">${esc(sizeBadgeLabel(sizeStatus))}</span></td>
              ${paymentsOpen ? `
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${paid ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}">${paid ? 'ชำระแล้ว' : 'ยังไม่ชำระ'}</span></td>
                <td class="p-2 text-right">${paid ? `${Number(pay.amount).toLocaleString('th-TH')} บาท` : '—'}</td>
              ` : ''}
            </tr>`
          }).join('')}</tbody>
        </table>
      </div>`).join('') : `<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ ไม่มีรายชื่อตามเงื่อนไขที่เลือก</div>`

    root.querySelector('#print-content').innerHTML = buildDocument() || `<p style="text-align:center;padding:40px">ไม่มีข้อมูลนักเรียน</p>`
  }

  root.querySelectorAll('[data-gender]').forEach(b => b.onclick = () => { gender = b.dataset.gender; render() })
  root.querySelectorAll('[data-filter]').forEach(b => b.onclick = () => { filter = b.dataset.filter; render() })

  root.querySelector('#btn-export-csv').onclick = () => {
    const q = x => `"${String(x || '').replaceAll('"', '""')}"`
    const rows = computeRows().sort(byRoomThenName)
    const header = ['ห้อง', 'รหัส', 'ชื่อ-สกุล', 'ไซซ์ที่จำนง', 'ไซซ์ที่ยืนยัน', 'สถานะไซซ์', 'สถานะชำระ', 'วันที่ชำระ', 'จำนวนเงิน', 'วิธีชำระ']
    const body = rows.map(s => {
      const { sizeStatus, paid, pay } = rowStatus(s)
      const req = requestOf(s.id)
      const payStatus = !paymentsOpen ? 'รอประกาศราคา' : (paid ? 'ชำระแล้ว' : 'ยังไม่ชำระ')
      const paidAt = paid ? new Date(pay.paid_at).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : ''
      const methodLabel = paid ? (pay.method === 'qr' ? 'สแกน QR' : 'กรอกรหัส') : ''
      return [s.main_room, s.student_code, s.full_name, req?.requested_size || '', req?.confirmed_size || '', sizeBadgeLabel(sizeStatus), payStatus, paidAt, paid ? Number(pay.amount) : '', methodLabel].map(q).join(',')
    })
    const csvRows = [header.map(q).join(','), ...body]
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob(['﻿' + csvRows.join('\n')], { type: 'text/csv' }))
    const genderTag = gender === 'M' ? 'ชาย' : gender === 'W' ? 'หญิง' : 'ทั้งหมด'
    a.download = `ไซซ์เสื้อและค่าเสื้อกีฬาสี-${genderTag}.csv`
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
