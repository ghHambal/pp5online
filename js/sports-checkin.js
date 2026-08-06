import { supabase } from './supabase.js'

// รหัสผ่านหน้านี้เป็นแค่ทางเข้าระดับ UI (ตารางที่เกี่ยวข้องทั้งหมดเปิดให้ anon อ่าน/เขียนอยู่แล้ว
// เพราะ AZIZGAMES ทั้งระบบเชื่อมต่อแบบ anon เสมอ ไม่มี Supabase Auth) — ใช้รหัสเดียวกับปุ่ม
// "รายงานตัวนักกีฬา" ในแอป AZIZGAMES ให้ทีมงานจำรหัสเดียว
const PW = 'azreg26'
const PW_KEY = 'sports_checkin_pw'
const DEFAULT_EVENT = '00000000-0000-0000-0000-000000000001'
const root = document.getElementById('checkin-root')

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
// ห้ามใช้ new Date().toISOString().slice(0,10) หาวันที่ "วันนี้" — คืนวันที่ตาม UTC ทำให้ช่วง
// เที่ยงคืน-ตี 7 เวลาไทยเพี้ยนไปเป็นเมื่อวาน
const todayLocal = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` }
const photoOf = s => s?.image_url || s?.photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(s?.full_name || 'AZ')}&background=e2e8f0&color=334155`

async function _fetchAllRows(table, build, pageSize = 1000) {
  let all = [], from = 0
  while (true) {
    const { data, error } = await build(supabase.from(table)).range(from, from + pageSize - 1)
    if (error) throw error
    all = all.concat(data || [])
    if (!data || data.length < pageSize) break
    from += pageSize
  }
  return all
}

function renderGate(onSuccess) {
  root.innerHTML = `
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">สำหรับทีมงานรับรายงานตัวนักกีฬาหน้างานเท่านั้น</p>
      </div>
      <input id="gate-password" type="password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
      <button id="gate-submit" class="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">เข้าสู่ระบบ</button>
      <p id="gate-error" class="text-xs text-red-500 text-center hidden">รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</p>
    </div>`
  const input = root.querySelector('#gate-password')
  const errEl = root.querySelector('#gate-error')
  const submit = () => {
    const pw = input.value.trim()
    if (!pw) return
    if (pw === PW) {
      sessionStorage.setItem(PW_KEY, pw)
      onSuccess()
    } else {
      errEl.classList.remove('hidden')
    }
  }
  root.querySelector('#gate-submit').onclick = submit
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submit() })
}

async function _loadHtml5Qrcode() {
  if (window.Html5Qrcode) return window.Html5Qrcode
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'
    s.onload = () => resolve(window.Html5Qrcode)
    s.onerror = () => reject(new Error('โหลดตัวอ่าน QR Code ไม่สำเร็จ'))
    document.head.appendChild(s)
  })
}

function playBeep(success) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator(), gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    if (success) { osc.type = 'sine'; osc.frequency.setValueAtTime(880, ctx.currentTime); gain.gain.setValueAtTime(0.08, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12); osc.start(); osc.stop(ctx.currentTime + 0.12) }
    else { osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, ctx.currentTime); gain.gain.setValueAtTime(0.12, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3); osc.start(); osc.stop(ctx.currentTime + 0.3) }
  } catch (e) {}
}

async function loadData() {
  const [{ data: colors, error: e1 }, { data: sports, error: e2 }, { data: matches, error: e3 }] = await Promise.all([
    supabase.from('team_colors').select('id,name,hex_color').eq('event_id', DEFAULT_EVENT).order('display_order'),
    supabase.from('sports').select('id,name').eq('event_id', DEFAULT_EVENT),
    supabase.from('matches').select('id,sport_id,scheduled_date').eq('event_id', DEFAULT_EVENT),
  ])
  if (e1) throw e1; if (e2) throw e2; if (e3) throw e3
  const registrations = await _fetchAllRows('registrations', q => q.select('student_id,sport_id,team_color_id').eq('event_id', DEFAULT_EVENT))
  const studentIds = [...new Set(registrations.map(r => r.student_id))]
  let students = []
  for (let i = 0; i < studentIds.length; i += 1000) {
    const chunk = studentIds.slice(i, i + 1000)
    const { data, error } = await supabase.from('students').select('id,student_code,full_name,main_room,image_url,photo_url').in('id', chunk)
    if (error) throw error
    students = students.concat(data || [])
  }
  const dailyCheckins = await _fetchAllRows('daily_checkins', q => q.select('id,student_id,check_in_date,checked_in_at').eq('event_id', DEFAULT_EVENT))
  return { colors: colors || [], sports: sports || [], matches: matches || [], registrations, students, dailyCheckins }
}

function renderApp(data) {
  let { colors, sports, matches, registrations, students, dailyCheckins } = data
  let checkInDate = todayLocal()
  let search = '', colorFilter = '', sportFilter = ''
  let showScanner = false
  let html5Qrcode = null, scanning = false
  let feedback = { text: 'ยกกล้องส่อง QR ของนักกีฬาเพื่อรายงานตัว', tone: 'muted' }

  const studentById = new Map(students.map(s => [s.id, s]))
  const sportById = new Map(sports.map(s => [s.id, s]))
  const colorById = new Map(colors.map(c => [c.id, c]))

  const rosterForDate = () => {
    const sportIdsToday = new Set(matches.filter(m => m.scheduled_date === checkInDate && m.sport_id).map(m => m.sport_id))
    const bySport = new Map()
    registrations.filter(r => sportIdsToday.has(r.sport_id)).forEach(r => {
      const student = studentById.get(r.student_id)
      if (!student) return
      if (!bySport.has(student.id)) bySport.set(student.id, { student, sportNames: new Set(), teamColorId: r.team_color_id })
      const sport = sportById.get(r.sport_id)
      if (sport) bySport.get(student.id).sportNames.add(sport.name)
    })
    return [...bySport.values()].map(row => ({ ...row, sportNames: [...row.sportNames] }))
  }

  const checkedIdsToday = () => new Set(dailyCheckins.filter(c => c.check_in_date === checkInDate).map(c => c.student_id))

  root.innerHTML = `
    <div class="space-y-4">
      <div class="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center gap-3">
        <div>
          <label class="block text-[10px] text-slate-500 font-bold mb-1">วันที่รายงานตัว</label>
          <input id="ci-date" type="date" value="${checkInDate}" class="border border-slate-300 rounded-xl px-3 py-2 text-sm">
        </div>
        <div id="ci-summary" class="flex-1 min-w-[160px] rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2 text-xs text-emerald-700 font-bold"></div>
        <button id="ci-scan-toggle" class="px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200">📷 สแกน QR</button>
      </div>

      <div id="ci-scanner-wrap"></div>

      <div class="flex flex-wrap gap-2">
        <input id="ci-search" placeholder="🔍 ค้นหาชื่อ/รหัส/ห้อง..." class="flex-1 min-w-[180px] border border-slate-300 rounded-xl px-3 py-2 text-sm">
        <select id="ci-color-filter" class="border border-slate-300 rounded-xl px-3 py-2 text-sm"><option value="">ทุกสี</option>${colors.map(c => `<option value="${esc(c.id)}">สี${esc(c.name)}</option>`).join('')}</select>
        <select id="ci-sport-filter" class="border border-slate-300 rounded-xl px-3 py-2 text-sm"><option value="">ทุกกีฬา</option></select>
      </div>

      <div id="ci-list" class="bg-white rounded-xl border border-slate-200 overflow-hidden"></div>
    </div>`

  // สำคัญ: สร้าง DOM ของกล้อง (#ci-camera-reader) แค่ครั้งเดียวตอนเปิดกล้อง ห้ามเขียนทับ
  // wrap.innerHTML ซ้ำระหว่างสแกน — ไม่งั้นสตรีมกล้องเดิมจะยังทำงานค้างอยู่เบื้องหลังพร้อมกับ
  // สตรีมใหม่ที่เพิ่งสั่ง start() ซ้อนกัน ทำให้จอกระพริบแล้วกล้องหลุด/ปิดเองแบบสุ่ม (เจอบั๊กจริง
  // ตอนอัปเดตข้อความ feedback ทุกครั้งที่สแกนแล้วเรียก renderScanner() ทั้งฟังก์ชันซ้ำ) — แก้โดย
  // แยกอัปเดตแค่ข้อความ feedback ออกจากการสร้างกล้องใหม่ ตามแบบเดียวกับหน้าเช็คชื่อเข้าสี
  const updateFeedback = () => {
    const el = root.querySelector('#ci-feedback')
    if (!el) return
    const feedbackColor = { muted: '#64748b', success: '#059669', warn: '#d97706', error: '#dc2626' }[feedback.tone] || '#64748b'
    el.style.color = feedbackColor
    el.textContent = feedback.text
  }

  const openScanner = () => {
    const wrap = root.querySelector('#ci-scanner-wrap')
    wrap.innerHTML = `
      <div class="bg-white rounded-xl border border-slate-200 p-4 flex flex-col sm:flex-row gap-4">
        <div class="relative w-full sm:w-56 flex-shrink-0 rounded-xl overflow-hidden bg-black" style="aspect-ratio:1">
          <div id="ci-camera-reader" class="w-full h-full"></div>
        </div>
        <div class="flex-1 flex flex-col justify-center gap-2.5">
          <div id="ci-feedback" class="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center text-xs font-bold"></div>
          <form id="ci-manual-form" class="flex gap-2">
            <input id="ci-manual-code" placeholder="หรือพิมพ์รหัสนักเรียนแล้วกด Enter" class="flex-1 border border-slate-300 rounded-xl px-3 py-2 text-sm">
            <button type="submit" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold">รายงานตัว</button>
          </form>
        </div>
      </div>`
    wrap.querySelector('#ci-manual-form').onsubmit = e => { e.preventDefault(); const code = wrap.querySelector('#ci-manual-code').value.trim(); if (code) { tryCheckin(code); wrap.querySelector('#ci-manual-code').value = '' } }
    updateFeedback()
    startCamera()
  }

  const closeScanner = () => {
    root.querySelector('#ci-scanner-wrap').innerHTML = ''
  }

  const stopCamera = async () => {
    if (html5Qrcode && scanning) { try { await html5Qrcode.stop() } catch (e) {} }
    html5Qrcode = null
    scanning = false
  }

  const startCamera = async () => {
    try {
      const Html5Qrcode = await _loadHtml5Qrcode()
      html5Qrcode = new Html5Qrcode('ci-camera-reader')
      let lastCode = null, lastTime = 0
      await html5Qrcode.start({ facingMode: 'environment' }, { fps: 15, aspectRatio: 1 }, decodedText => {
        if (decodedText === lastCode && Date.now() - lastTime < 2000) return
        lastCode = decodedText; lastTime = Date.now()
        let code = decodedText
        if (code.startsWith('SQ:')) code = code.split(':')[1]
        tryCheckin(code)
      }, () => {})
      scanning = true
    } catch (e) {
      feedback = { text: 'เปิดกล้องไม่สำเร็จ: ' + (e?.message || ''), tone: 'error' }
      updateFeedback()
    }
  }

  const tryCheckin = async (code) => {
    const roster = rosterForDate()
    const row = roster.find(r => r.student.student_code === code)
    if (!row) { playBeep(false); feedback = { text: `ไม่พบรหัส ${code} ในนักกีฬาที่มีนัดแข่งวันนี้`, tone: 'error' }; updateFeedback(); return }
    if (checkedIdsToday().has(row.student.id)) { playBeep(false); feedback = { text: `${row.student.full_name} รายงานตัวไปแล้ว`, tone: 'warn' }; updateFeedback(); return }
    await doCheckin(row.student.id)
    playBeep(true)
    feedback = { text: `✓ รายงานตัวแล้ว · ${row.student.full_name}`, tone: 'success' }
    updateFeedback()
  }

  const doCheckin = async (studentId) => {
    const { data, error } = await supabase.from('daily_checkins')
      .upsert({ event_id: DEFAULT_EVENT, student_id: studentId, check_in_date: checkInDate, checked_in_at: new Date().toISOString() }, { onConflict: 'event_id,student_id,check_in_date' })
      .select().single()
    if (error) { alert(error.message); return }
    dailyCheckins = [...dailyCheckins.filter(c => !(c.student_id === studentId && c.check_in_date === checkInDate)), data]
    renderList()
  }

  const undoCheckin = async (id) => {
    const { error } = await supabase.from('daily_checkins').delete().eq('id', id)
    if (error) { alert(error.message); return }
    dailyCheckins = dailyCheckins.filter(c => c.id !== id)
    renderList()
  }

  const renderList = () => {
    const roster = rosterForDate()
    const checked = checkedIdsToday()
    root.querySelector('#ci-summary').textContent = `รายงานตัวแล้ว ${roster.filter(r => checked.has(r.student.id)).length} / ${roster.length} คน`

    const sportOptions = [...new Set(roster.flatMap(r => r.sportNames))].sort((a, b) => a.localeCompare(b, 'th'))
    const sportSel = root.querySelector('#ci-sport-filter')
    const prevSportVal = sportSel.value
    sportSel.innerHTML = `<option value="">ทุกกีฬา</option>${sportOptions.map(n => `<option value="${esc(n)}">${esc(n)}</option>`).join('')}`
    sportSel.value = sportOptions.includes(prevSportVal) ? prevSportVal : ''
    sportFilter = sportSel.value

    const q = search.trim().toLowerCase()
    const filtered = roster.filter(row => {
      if (colorFilter && row.teamColorId !== colorFilter) return false
      if (sportFilter && !row.sportNames.includes(sportFilter)) return false
      if (q) {
        const hay = `${row.student.student_code} ${row.student.full_name} ${row.student.main_room}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    }).sort((a, b) => (a.student.full_name || '').localeCompare(b.student.full_name || '', 'th'))

    const listEl = root.querySelector('#ci-list')
    if (!filtered.length) {
      listEl.innerHTML = `<div class="p-8 text-center text-xs text-slate-400">${roster.length === 0 ? 'ยังไม่มีนัดแข่งขันที่ตั้งตารางไว้ในวันนี้' : 'ไม่พบนักกีฬาตามตัวกรองนี้'}</div>`
      return
    }
    listEl.innerHTML = `<div class="divide-y divide-slate-100 max-h-[55vh] overflow-y-auto">${filtered.map(row => {
      const isChecked = checked.has(row.student.id)
      const colorName = colorById.get(row.teamColorId)?.name || ''
      return `<div class="flex items-center gap-3 px-4 py-2.5 ${isChecked ? 'bg-emerald-50' : ''}">
        <img src="${esc(photoOf(row.student))}" alt="" class="w-9 h-11 rounded-lg object-cover border border-slate-200 flex-shrink-0">
        <div class="flex-1 min-w-0">
          <div class="text-slate-800 text-xs font-bold truncate">${esc(row.student.full_name)} <span class="text-slate-400 font-normal">(${esc(row.student.student_code)})</span></div>
          <div class="text-slate-500 text-[10.5px] truncate">${esc(row.student.main_room)} · สี${esc(colorName)} · ${esc(row.sportNames.join(', '))}</div>
        </div>
        <button data-toggle="${esc(row.student.id)}" data-checked="${isChecked ? '1' : '0'}" class="flex-shrink-0 px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${isChecked ? 'bg-emerald-600 text-white' : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'}">${isChecked ? '✓ รายงานตัวแล้ว' : 'รายงานตัว'}</button>
      </div>`
    }).join('')}</div>`

    listEl.querySelectorAll('[data-toggle]').forEach(btn => btn.onclick = () => {
      const studentId = Number(btn.dataset.toggle)
      if (btn.dataset.checked === '1') {
        const row = dailyCheckins.find(c => c.student_id === studentId && c.check_in_date === checkInDate)
        if (row) undoCheckin(row.id)
      } else {
        doCheckin(studentId)
      }
    })
  }

  root.querySelector('#ci-date').onchange = e => { checkInDate = e.target.value || todayLocal(); renderList() }
  root.querySelector('#ci-search').oninput = e => { search = e.target.value; renderList() }
  root.querySelector('#ci-color-filter').onchange = e => { colorFilter = e.target.value; renderList() }
  root.querySelector('#ci-sport-filter').onchange = e => { sportFilter = e.target.value; renderList() }
  root.querySelector('#ci-scan-toggle').onclick = async () => {
    showScanner = !showScanner
    const btn = root.querySelector('#ci-scan-toggle')
    if (showScanner) {
      btn.textContent = '⏹ ปิดกล้องสแกน'; btn.classList.add('bg-pink-600', 'text-white'); btn.classList.remove('bg-slate-100', 'border', 'border-slate-200', 'text-slate-700')
      openScanner()
    } else {
      await stopCamera()
      btn.textContent = '📷 สแกน QR'; btn.classList.remove('bg-pink-600', 'text-white'); btn.classList.add('bg-slate-100', 'border', 'border-slate-200', 'text-slate-700')
      closeScanner()
    }
  }

  renderList()
}

async function init() {
  root.innerHTML = '<div class="py-16 text-center text-slate-400">กำลังโหลด...</div>'
  const cachedPw = sessionStorage.getItem(PW_KEY)
  const boot = async () => {
    try {
      const data = await loadData()
      renderApp(data)
    } catch (e) {
      root.innerHTML = `<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${esc(e.message || '')}</div>`
    }
  }
  if (cachedPw === PW) { boot(); return }
  renderGate(boot)
}

init()
