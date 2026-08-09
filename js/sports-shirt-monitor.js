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
  const amountM = Number(snapshot.shirt_payment_amount_m) || 0
  const amountW = Number(snapshot.shirt_payment_amount_w) || 0
  const amountForGender = g => g === 'W' ? amountW : amountM
  const paymentsOpen = amountM > 0 || amountW > 0
  const allowedSizes = (snapshot.allowed_sizes && snapshot.allowed_sizes.length) ? snapshot.allowed_sizes : ['SS', 'S', 'M', 'L', 'XL', '2X', '3X', '4X', '5X', '6X', '7X', '8X']
  const colors = snapshot.team_colors || []
  // ครู — แยกจากนักเรียนโดยสิ้นเชิง ไม่มีสี/ห้อง แจ้งแล้วถือเป็นค่าสุดท้ายทันที (ไม่มีสถานะรอยืนยัน)
  // เพศเดาจากคำนำหน้าชื่อฝั่ง RPC (นาย/นาง/นางสาว, Mr/Mrs/Ms) อาจมีบางคนเดาไม่ได้ (gender=null)
  const teachers = snapshot.teachers || []
  const teacherRequests = snapshot.teacher_shirt_requests || []
  const teacherAllowedSizes = (snapshot.teacher_allowed_sizes && snapshot.teacher_allowed_sizes.length) ? snapshot.teacher_allowed_sizes : allowedSizes
  const teacherRequestOf = id => teacherRequests.find(r => r.teacher_id === id)

  let activeTab = 'size' // 'size' | 'payment' | 'teacher'
  let gender = 'ALL' // 'M' | 'W' | 'ALL'
  let selectedColorId = null
  let selectedSize = null
  let statusFilter = 'all' // size: 'all'|'pending' — payment: 'all'|'unpaid' — teacher: 'all'|'not_reported'

  const requestOf = id => (snapshot.shirt_requests || []).find(r => r.student_id === id)
  const paymentOf = id => (snapshot.shirt_payments || []).find(p => p.student_id === id)
  const rowStatus = s => {
    const req = requestOf(s.id)
    const pay = paymentOf(s.id)
    return { req, pay, sizeStatus: req?.status || null, sizeOk: sizeConfirmed(req?.status), paid: !!pay }
  }

  const colorsForGender = () => gender === 'ALL' ? colors : colors.filter(c => c.gender === gender)
  const studentsOf = g => g === 'ALL' ? (snapshot.students || []) : (snapshot.students || []).filter(s => s.gender === g)
  const baseStudents = () => studentsOf(gender) // ขอบเขตตามเพศเท่านั้น ไว้คำนวณตัวเลขในการ์ดสี/ตารางกริด

  const computeRows = () => {
    let list = baseStudents()
    if (selectedColorId) list = list.filter(s => s.team_color_id === selectedColorId)
    if (activeTab === 'size') {
      if (selectedSize) list = list.filter(s => requestOf(s.id)?.confirmed_size === selectedSize)
      if (statusFilter === 'pending') list = list.filter(s => !rowStatus(s).sizeOk)
    } else if (paymentsOpen && statusFilter === 'unpaid') {
      list = list.filter(s => amountForGender(s.gender) > 0 && !rowStatus(s).paid)
    }
    return list
  }

  root.innerHTML = `
    <div class="space-y-4">
      <div class="no-print flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex p-1 rounded-xl bg-white border border-slate-200 gap-1">
          <button type="button" data-tab="size" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👕 ไซซ์เสื้อ</button>
          <button type="button" data-tab="payment" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">💰 ค่าเสื้อ</button>
          <button type="button" data-tab="teacher" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👔 ไซซ์เสื้อครู</button>
        </div>
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 ชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 หญิง</button>
          <button type="button" data-gender="ALL" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👥 ทั้งหมด</button>
        </div>
      </div>

      <p id="scope-line" class="no-print text-xs text-slate-500"></p>

      <div id="color-cards" class="no-print grid grid-cols-2 sm:grid-cols-4 gap-2"></div>
      <div id="size-grid-wrap" class="no-print bg-white rounded-xl border border-slate-200 p-3 overflow-x-auto"></div>

      <div class="no-print bg-white rounded-xl border border-slate-200 p-3 flex flex-wrap items-center gap-3">
        <span class="text-xs font-bold text-slate-500">กรองสถานะ:</span>
        <div id="status-filter" class="inline-flex p-1 rounded-xl bg-slate-100 gap-1"></div>
      </div>

      <div class="no-print flex flex-wrap gap-2">
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ดาวน์โหลด Excel (CSV)</button>
        <button id="btn-print" class="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold">🖨️ พิมพ์เอกสาร</button>
      </div>
      <div id="shirt-list" class="no-print space-y-4"></div>
      <div id="print-content" class="print-only"></div>
    </div>`

  // ---- การ์ดสรุปตามสี (กดกรองได้) ----
  const renderColorCards = () => {
    const cardsOf = colorsForGender()
    root.querySelector('#color-cards').innerHTML = cardsOf.map(c => {
      const inColor = baseStudents().filter(s => s.team_color_id === c.id)
      const metricValue = activeTab === 'size'
        ? `${inColor.filter(s => rowStatus(s).sizeOk).length} / ${inColor.length}`
        : (amountForGender(c.gender) > 0 ? `${inColor.filter(s => rowStatus(s).paid).length} / ${inColor.length}` : 'รอราคา')
      const active = selectedColorId === c.id
      return `<button type="button" data-color-card="${esc(c.id)}" class="text-left rounded-xl border p-3 transition-all ${active ? 'ring-2 ring-offset-1' : 'border-slate-200 bg-white hover:border-slate-300'}" style="${active ? `border-color:${esc(c.hex_color)};box-shadow:0 0 0 2px ${esc(c.hex_color)}22;` : ''}">
        <div class="flex items-center gap-2 mb-1"><span class="w-3 h-3 rounded-full flex-shrink-0" style="background:${esc(c.hex_color)}"></span><b class="text-xs text-slate-700">สี${esc(c.name)}</b></div>
        <p class="text-[10px] text-slate-400">${inColor.length} คน</p>
        <p class="text-lg font-black mt-0.5" style="color:${esc(c.hex_color)}">${esc(metricValue)}</p>
      </button>`
    }).join('') || '<p class="col-span-full text-xs text-slate-400 text-center py-4">ไม่มีข้อมูลสี</p>'
    root.querySelectorAll('[data-color-card]').forEach(b => b.onclick = () => {
      selectedColorId = selectedColorId === b.dataset.colorCard ? null : b.dataset.colorCard
      render()
    })
  }

  // ---- ตารางกริด สี × ไซซ์ (เฉพาะแท็บไซซ์เสื้อ) — กดตัวเลขเพื่อกรองได้ ----
  const renderSizeGrid = () => {
    const wrap = root.querySelector('#size-grid-wrap')
    if (activeTab !== 'size') { wrap.innerHTML = ''; return }
    const cardsOf = colorsForGender()
    const countOf = (colorId, size) => baseStudents().filter(s => s.team_color_id === colorId && requestOf(s.id)?.confirmed_size === size).length
    const totalOfColor = colorId => baseStudents().filter(s => s.team_color_id === colorId && rowStatus(s).sizeOk).length
    const totalOfSize = size => baseStudents().filter(s => requestOf(s.id)?.confirmed_size === size && s.team_color_id && cardsOf.some(c => c.id === s.team_color_id)).length
    const grandTotal = cardsOf.reduce((sum, c) => sum + totalOfColor(c.id), 0)

    wrap.innerHTML = `
      <p class="text-xs font-bold text-slate-500 mb-2">สรุปจำนวนไซซ์ที่ยืนยันแล้วต่อสี — กดตัวเลขเพื่อกรองรายชื่อด้านล่าง</p>
      <table class="w-full text-xs border-collapse">
        <thead><tr>
          <th class="p-2 text-left border-b border-slate-200">สี</th>
          ${allowedSizes.map(sz => `<th class="p-2 text-center border-b border-slate-200 ${selectedSize === sz ? 'text-pink-600' : 'text-slate-500'}"><button type="button" data-size-col="${esc(sz)}" class="font-bold hover:underline">${esc(sz)}</button></th>`).join('')}
          <th class="p-2 text-center border-b border-slate-200 text-slate-500 font-bold">รวม</th>
        </tr></thead>
        <tbody>
          ${cardsOf.map(c => `<tr class="border-b border-slate-100">
            <td class="p-2"><span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${esc(c.hex_color)}"></span>${esc(c.name)}</span></td>
            ${allowedSizes.map(sz => {
              const n = countOf(c.id, sz)
              const on = selectedColorId === c.id && selectedSize === sz
              return `<td class="p-1 text-center"><button type="button" data-cell-color="${esc(c.id)}" data-cell-size="${esc(sz)}" class="w-9 h-8 rounded-lg text-xs font-bold ${on ? 'bg-pink-600 text-white' : n > 0 ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'text-slate-300'}">${n || '·'}</button></td>`
            }).join('')}
            <td class="p-1 text-center"><button type="button" data-color-total="${esc(c.id)}" class="w-10 h-8 rounded-lg text-xs font-bold ${selectedColorId === c.id && !selectedSize ? 'bg-pink-600 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-700'}">${totalOfColor(c.id)}</button></td>
          </tr>`).join('')}
          <tr>
            <td class="p-2 font-bold text-slate-600">รวม</td>
            ${allowedSizes.map(sz => `<td class="p-1 text-center"><button type="button" data-size-total="${esc(sz)}" class="w-9 h-8 rounded-lg text-xs font-bold ${!selectedColorId && selectedSize === sz ? 'bg-pink-600 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-700'}">${totalOfSize(sz)}</button></td>`).join('')}
            <td class="p-1 text-center font-black text-slate-700">${grandTotal}</td>
          </tr>
        </tbody>
      </table>`

    wrap.querySelectorAll('[data-cell-color]').forEach(b => b.onclick = () => {
      const cId = b.dataset.cellColor, sz = b.dataset.cellSize
      if (selectedColorId === cId && selectedSize === sz) { selectedColorId = null; selectedSize = null } else { selectedColorId = cId; selectedSize = sz }
      render()
    })
    wrap.querySelectorAll('[data-color-total]').forEach(b => b.onclick = () => {
      const cId = b.dataset.colorTotal
      if (selectedColorId === cId && !selectedSize) selectedColorId = null
      else { selectedColorId = cId; selectedSize = null }
      render()
    })
    wrap.querySelectorAll('[data-size-total],[data-size-col]').forEach(b => b.onclick = () => {
      const sz = b.dataset.sizeTotal || b.dataset.sizeCol
      if (!selectedColorId && selectedSize === sz) selectedSize = null
      else { selectedSize = sz; selectedColorId = null }
      render()
    })
  }

  const renderStatusFilter = () => {
    const el = root.querySelector('#status-filter')
    const options = activeTab === 'size'
      ? [['all', 'ทั้งหมด'], ['pending', 'ไซซ์ยังไม่ยืนยัน']]
      : (paymentsOpen ? [['all', 'ทั้งหมด'], ['unpaid', 'ยังไม่ชำระ']] : [['all', 'ทั้งหมด']])
    el.innerHTML = options.map(([v, label]) => `<button type="button" data-status="${v}" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${statusFilter === v ? 'bg-pink-600 text-white' : 'text-slate-500'}">${esc(label)}</button>`).join('')
    el.querySelectorAll('[data-status]').forEach(b => b.onclick = () => { statusFilter = b.dataset.status; render() })
  }

  // ---- เอกสารพิมพ์ (โลโก้+หัวเรื่อง+สถิติ+ตารางเดียวต่อชั้น) — ยึดตาม tab + ตัวกรองที่เลือกอยู่ ----
  const buildDocument = () => {
    const rows = computeRows()
    const byLevel = {}
    rows.forEach(s => { const lv = levelOf(s.main_room); (byLevel[lv] = byLevel[lv] || []).push(s) })
    const levels = Object.keys(byLevel).sort((a, b) => levelSortKey(a) - levelSortKey(b))
    const logoRow = `<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${LOGO_URLS.map(u => `<img src="${u}" style="height:56px">`).join('')}</div>`
    const genderLabel = gender === 'M' ? 'ชาย' : gender === 'W' ? 'หญิง' : ''
    const colorLabel = selectedColorId ? colors.find(c => c.id === selectedColorId)?.name : ''
    const title = activeTab === 'size' ? 'รายชื่อนักเรียน — ไซซ์เสื้อกีฬาสี' : 'รายชื่อนักเรียน — ค่าเสื้อกีฬาสี'

    return levels.map((lv, idx) => {
      const rowsOfLevel = [...byLevel[lv]].sort(byRoomThenName)
      return `<div style="${idx > 0 ? 'page-break-before:always;' : ''}padding-top:12px">
        ${logoRow}
        <div style="text-align:center;margin-bottom:10px">
          <h2 style="font-size:16px;margin:0 0 4px">${esc(title)}${genderLabel ? esc(genderLabel) : ''}${colorLabel ? ` — สี${esc(colorLabel)}` : ''}${selectedSize ? ` — ไซซ์ ${esc(selectedSize)}` : ''}</h2>
          <p style="font-size:13px;margin:0;font-weight:bold">${esc(SCHOOL_NAME)}</p>
          <p style="font-size:14px;margin:6px 0 0;font-weight:bold">ชั้น ${esc(lv)}</p>
        </div>
        <div style="display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:12px">
          <span>จำนวน: <b>${rowsOfLevel.length}</b> คน</span>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:10.5px">
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">รหัส</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ชื่อ-สกุล</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ห้อง</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สี</th>
            ${activeTab === 'size'
              ? `<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ไซซ์ยืนยัน</th><th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สถานะ</th>`
              : (paymentsOpen ? `<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สถานะชำระ</th>` : '')}
          </tr></thead>
          <tbody>${rowsOfLevel.map((s, i) => {
            const st = rowStatus(s)
            return `<tr>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${i + 1}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(s.student_code)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px">${photoImg(s.photo_url)}${esc(s.full_name)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(s.main_room || '—')}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(s.color_name || '—')}</td>
              ${activeTab === 'size'
                ? `<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(st.req?.confirmed_size || '—')}</td><td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${esc(sizeBadgeLabel(st.sizeStatus))}</td>`
                : (paymentsOpen ? `<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${amountForGender(s.gender) > 0 ? (st.paid ? 'ชำระแล้ว' : 'ยังไม่ชำระ') : 'รอราคา'}</td>` : '')}
            </tr>`
          }).join('')}</tbody>
        </table>
      </div>`
    }).join('')
  }

  // ---- แท็บ "ไซซ์เสื้อครู" — แยกจากนักเรียนโดยสิ้นเชิง ไม่มีสี/ห้อง ใช้ #color-cards/#size-grid-wrap/
  // #shirt-list ร่วมกับฝั่งนักเรียน (คนละเนื้อหา สลับตามแท็บ) ----
  const teacherRows = () => {
    let list = gender === 'ALL' ? teachers : teachers.filter(t => t.gender === gender)
    if (selectedSize) list = list.filter(t => teacherRequestOf(t.id)?.size === selectedSize)
    if (statusFilter === 'not_reported') list = list.filter(t => !teacherRequestOf(t.id))
    return list
  }
  const renderTeacherView = () => {
    root.querySelector('#color-cards').innerHTML = ''
    const scope = gender === 'ALL' ? teachers : teachers.filter(t => t.gender === gender)
    const reportedCount = scope.filter(t => teacherRequestOf(t.id)).length
    root.querySelector('#scope-line').textContent = `คุณครู${gender === 'M' ? 'ชาย' : gender === 'W' ? 'หญิง' : 'ทั้งหมด'} ${scope.length} คน — แจ้งไซซ์แล้ว ${reportedCount} คน`

    const countOf = sz => scope.filter(t => teacherRequestOf(t.id)?.size === sz).length
    const total = scope.filter(t => teacherRequestOf(t.id)).length
    root.querySelector('#size-grid-wrap').innerHTML = `
      <p class="text-xs font-bold text-slate-500 mb-2">สรุปจำนวนไซซ์เสื้อครูที่แจ้งแล้ว — กดตัวเลขเพื่อกรองรายชื่อด้านล่าง</p>
      <table class="w-full text-xs border-collapse">
        <thead><tr>
          ${teacherAllowedSizes.map(sz => `<th class="p-2 text-center border-b border-slate-200 ${selectedSize === sz ? 'text-pink-600' : 'text-slate-500'}"><button type="button" data-tsize-col="${esc(sz)}" class="font-bold hover:underline">${esc(sz)}</button></th>`).join('')}
          <th class="p-2 text-center border-b border-slate-200 text-slate-500 font-bold">รวม</th>
        </tr></thead>
        <tbody><tr>
          ${teacherAllowedSizes.map(sz => `<td class="p-1 text-center"><button type="button" data-tsize-col="${esc(sz)}" class="w-9 h-8 rounded-lg text-xs font-bold ${selectedSize === sz ? 'bg-pink-600 text-white' : countOf(sz) > 0 ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'text-slate-300'}">${countOf(sz) || '·'}</button></td>`).join('')}
          <td class="p-1 text-center font-black text-slate-700">${total}</td>
        </tr></tbody>
      </table>`
    root.querySelectorAll('[data-tsize-col]').forEach(b => b.onclick = () => {
      const sz = b.dataset.tsizeCol
      selectedSize = selectedSize === sz ? null : sz
      render()
    })

    const el = root.querySelector('#status-filter')
    el.innerHTML = [['all', 'ทั้งหมด'], ['not_reported', 'ยังไม่แจ้ง']].map(([v, label]) => `<button type="button" data-status="${v}" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${statusFilter === v ? 'bg-pink-600 text-white' : 'text-slate-500'}">${esc(label)}</button>`).join('')
    el.querySelectorAll('[data-status]').forEach(b => b.onclick = () => { statusFilter = b.dataset.status; render() })

    const rows = teacherRows().sort((a, b) => a.full_name.localeCompare(b.full_name, 'th'))
    root.querySelector('#shirt-list').innerHTML = rows.length ? `
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table class="w-full text-xs">
          <thead><tr class="text-slate-400 text-left bg-slate-50">
            <th class="p-2 font-bold">รหัส</th><th class="p-2 font-bold">ชื่อ-สกุล</th><th class="p-2 font-bold text-center">ไซซ์ที่แจ้ง</th><th class="p-2 font-bold text-center">วันที่แจ้ง</th>
          </tr></thead>
          <tbody>${rows.map(t => {
            const r = teacherRequestOf(t.id)
            return `<tr class="border-t border-slate-100">
              <td class="p-2 w-24 text-slate-500">${esc(t.teacher_code)}</td>
              <td class="p-2">${esc(t.full_name)}</td>
              <td class="p-2 text-center">${r ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">${esc(r.size)}</span>` : `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-500">ยังไม่แจ้ง</span>`}</td>
              <td class="p-2 text-center text-slate-400">${r?.updated_at ? new Date(r.updated_at).toLocaleDateString('th-TH', { dateStyle: 'medium' }) : '—'}</td>
            </tr>`
          }).join('')}</tbody>
        </table>
      </div>` : `<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ ไม่มีรายชื่อตามเงื่อนไขที่เลือก</div>`
    root.querySelector('#print-content').innerHTML = ''
  }

  const render = () => {
    root.querySelectorAll('[data-tab]').forEach(b => { const on = b.dataset.tab === activeTab; b.classList.toggle('bg-pink-600', on); b.classList.toggle('text-white', on) })
    root.querySelectorAll('[data-gender]').forEach(b => { const on = b.dataset.gender === gender; b.classList.toggle('bg-pink-600', on); b.classList.toggle('text-white', on) })

    if (activeTab === 'teacher') { renderTeacherView(); return }

    const scope = baseStudents()
    const genderLabel = gender === 'M' ? 'นักเรียนชาย' : gender === 'W' ? 'นักเรียนหญิง' : 'นักเรียนทั้งหมด'
    root.querySelector('#scope-line').textContent = `${genderLabel} ${scope.length} คน — กำลังแสดง ${computeRows().length} คนตามตัวกรองที่เลือก`

    renderColorCards()
    renderSizeGrid()
    renderStatusFilter()

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
            <th class="p-2 font-bold">รหัส</th><th class="p-2 font-bold">ชื่อ-สกุล</th><th class="p-2 font-bold text-center">สี</th>
            ${activeTab === 'size'
              ? '<th class="p-2 font-bold text-center">ไซซ์จำนง</th><th class="p-2 font-bold text-center">ไซซ์ยืนยัน</th><th class="p-2 font-bold text-center">สถานะไซซ์</th>'
              : (paymentsOpen ? '<th class="p-2 font-bold text-center">สถานะชำระ</th><th class="p-2 font-bold text-right">จำนวนเงิน</th>' : '<th class="p-2 font-bold text-center">สถานะชำระ</th>')}
          </tr></thead>
          <tbody>${byRoom[room].sort((a, b) => a.full_name.localeCompare(b.full_name, 'th')).map(s => {
            const st = rowStatus(s)
            const colorObj = colors.find(c => c.id === s.team_color_id)
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
              <td class="p-2 text-center"><span class="inline-flex items-center gap-1"><span class="w-2 h-2 rounded-full inline-block" style="background:${esc(colorObj?.hex_color || '#94a3b8')}"></span>${esc(s.color_name || '—')}</span></td>
              ${activeTab === 'size' ? `
                <td class="p-2 text-center">${esc(st.req?.requested_size || '—')}</td>
                <td class="p-2 text-center">${esc(st.req?.confirmed_size || '—')}</td>
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${st.sizeOk ? 'bg-emerald-100 text-emerald-700' : st.sizeStatus === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}">${esc(sizeBadgeLabel(st.sizeStatus))}</span></td>
              ` : paymentsOpen ? (amountForGender(s.gender) > 0 ? `
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${st.paid ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}">${st.paid ? 'ชำระแล้ว' : 'ยังไม่ชำระ'}</span></td>
                <td class="p-2 text-right">${st.paid ? `${Number(st.pay.amount).toLocaleString('th-TH')} บาท` : '—'}</td>
              ` : `
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">รอราคา</span></td>
                <td class="p-2 text-right text-slate-400">—</td>
              `) : `<td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">รอประกาศราคา</span></td>`}
            </tr>`
          }).join('')}</tbody>
        </table>
      </div>`).join('') : `<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ ไม่มีรายชื่อตามเงื่อนไขที่เลือก</div>`

    root.querySelector('#print-content').innerHTML = buildDocument() || `<p style="text-align:center;padding:40px">ไม่มีข้อมูลนักเรียน</p>`
  }

  root.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => {
    activeTab = b.dataset.tab
    selectedSize = null
    statusFilter = 'all'
    render()
  })
  root.querySelectorAll('[data-gender]').forEach(b => b.onclick = () => {
    gender = b.dataset.gender
    if (selectedColorId && !colorsForGender().some(c => c.id === selectedColorId)) selectedColorId = null
    render()
  })

  root.querySelector('#btn-export-csv').onclick = () => {
    const q = x => `"${String(x || '').replaceAll('"', '""')}"`
    const genderTag = gender === 'M' ? 'ชาย' : gender === 'W' ? 'หญิง' : 'ทั้งหมด'
    const sizeTag = selectedSize ? `-${selectedSize}` : ''
    if (activeTab === 'teacher') {
      const rows = teacherRows().sort((a, b) => a.full_name.localeCompare(b.full_name, 'th'))
      const header = ['รหัส', 'ชื่อ-สกุล', 'ไซซ์ที่แจ้ง', 'วันที่แจ้ง']
      const body = rows.map(t => {
        const r = teacherRequestOf(t.id)
        return [t.teacher_code, t.full_name, r?.size || '', r?.updated_at ? new Date(r.updated_at).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : ''].map(q).join(',')
      })
      const csvRows = [header.map(q).join(','), ...body]
      const a = document.createElement('a')
      a.href = URL.createObjectURL(new Blob(['﻿' + csvRows.join('\n')], { type: 'text/csv' }))
      a.download = `ไซซ์เสื้อครู-${genderTag}${sizeTag}.csv`
      a.click(); URL.revokeObjectURL(a.href)
      return
    }
    const rows = computeRows().sort(byRoomThenName)
    const header = activeTab === 'size'
      ? ['ห้อง', 'รหัส', 'ชื่อ-สกุล', 'สี', 'ไซซ์ที่จำนง', 'ไซซ์ที่ยืนยัน', 'สถานะไซซ์']
      : ['ห้อง', 'รหัส', 'ชื่อ-สกุล', 'สี', 'สถานะชำระ', 'วันที่ชำระ', 'จำนวนเงิน', 'วิธีชำระ']
    const body = rows.map(s => {
      const st = rowStatus(s)
      if (activeTab === 'size') {
        return [s.main_room, s.student_code, s.full_name, s.color_name, st.req?.requested_size || '', st.req?.confirmed_size || '', sizeBadgeLabel(st.sizeStatus)].map(q).join(',')
      }
      const payStatus = amountForGender(s.gender) <= 0 ? 'รอประกาศราคา' : (st.paid ? 'ชำระแล้ว' : 'ยังไม่ชำระ')
      const paidAt = st.paid ? new Date(st.pay.paid_at).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : ''
      const methodLabel = st.paid ? (st.pay.method === 'qr' ? 'สแกน QR' : 'กรอกรหัส') : ''
      return [s.main_room, s.student_code, s.full_name, s.color_name, payStatus, paidAt, st.paid ? Number(st.pay.amount) : '', methodLabel].map(q).join(',')
    })
    const csvRows = [header.map(q).join(','), ...body]
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob(['﻿' + csvRows.join('\n')], { type: 'text/csv' }))
    const colorTag = selectedColorId ? `-${colors.find(c => c.id === selectedColorId)?.name || ''}` : ''
    a.download = `${activeTab === 'size' ? 'ไซซ์เสื้อ' : 'ค่าเสื้อ'}กีฬาสี-${genderTag}${colorTag}${sizeTag}.csv`
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
