import { supabase } from './supabase.js'
import { getFriendlyErrorMessage } from './ui.js'

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
      <input id="gate-password" type="password" autocomplete="current-password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
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
    const { data, error } = await supabase.from('students').select('id,student_code,full_name,main_room,gender,image_url,photo_url').in('id', chunk)
    if (error) throw error
    students = students.concat(data || [])
  }
  const dailyCheckins = await _fetchAllRows('daily_checkins', q => q.select('id,student_id,check_in_date,checked_in_at,checked_in_by').eq('event_id', DEFAULT_EVENT))
  return { colors: colors || [], sports: sports || [], matches: matches || [], registrations, students, dailyCheckins }
}

function renderApp(data) {
  let { colors, sports, matches, registrations, students, dailyCheckins } = data
  let checkInDate = todayLocal()
  let lastLocalDate = checkInDate
  let autoFollowToday = true
  let search = '', colorFilter = '', sportFilter = '', genderFilter = ''
  let showScanner = false
  let html5Qrcode = null, scanning = false
  let refreshing = false
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
        <button id="ci-refresh" class="px-3 py-2.5 rounded-xl text-xs font-bold bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200">↻ รีเฟรช</button>
        <button id="ci-scan-toggle" class="px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all bg-pink-600 text-white shadow-sm hover:bg-pink-700">✅ รับรายงานตัว</button>
      </div>

      <div class="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-800">
        <div class="font-bold">📍 จุดรับรายงานตัวหลายจุดใช้ข้อมูลชุดเดียวกัน</div>
        <div class="mt-1">เจ้าหน้าที่แต่ละจุดสามารถสแกนหรือกดรายงานตัวแทนได้ ระบบจะกันการรายงานซ้ำ และกดรีเฟรชเพื่อดูสถานะล่าสุดจากจุดอื่นได้</div>
        <div class="mt-1 font-semibold">กรณีวัน 4 ให้เลือกวันที่ 4 ได้ตั้งแต่ช่วงเย็นวัน 3 เพื่อรับรายงานตัวล่วงหน้า</div>
      </div>

      <div id="ci-scanner-wrap"></div>

      <div class="flex flex-wrap gap-2">
        <input id="ci-search" placeholder="🔍 ค้นหาชื่อ/รหัส/ห้อง..." class="flex-1 min-w-[180px] border border-slate-300 rounded-xl px-3 py-2 text-sm">
        <div id="ci-gender-filter" class="flex items-center rounded-xl border border-slate-300 bg-white p-1 gap-1" aria-label="กรองตามเพศ">
          <button type="button" data-gender-filter="" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-pink-600 text-white shadow-sm">ทุกเพศ</button>
          <button type="button" data-gender-filter="ชาย" class="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100">ชาย</button>
          <button type="button" data-gender-filter="หญิง" class="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100">หญิง</button>
        </div>
        <select id="ci-color-filter" class="border border-slate-300 rounded-xl px-3 py-2 text-sm"><option value="">ทุกสี</option>${colors.map(c => `<option value="${esc(c.id)}">สี${esc(c.name)}</option>`).join('')}</select>
        <select id="ci-sport-filter" class="border border-slate-300 rounded-xl px-3 py-2 text-sm"><option value="">ทุกกีฬา</option></select>
      </div>

      <div id="ci-list" class="bg-white rounded-xl border border-slate-200 overflow-hidden"></div>
    </div>`

  // สำคัญ: modal กล้องถูกสร้างครั้งเดียวต่อการเปิดรับรายงานตัว และอัปเดตเฉพาะสถานะด้านล่าง
  // เพื่อไม่ให้การ render ซ้ำทำให้สตรีมกล้องเดิมค้างหรือเปิดซ้อนกันบนมือถือ
  const updateFeedback = () => {
    const el = root.querySelector('#ci-feedback')
    if (!el) return
    const feedbackColor = { muted: '#64748b', success: '#059669', warn: '#d97706', error: '#dc2626' }[feedback.tone] || '#64748b'
    el.style.color = feedbackColor
    el.textContent = feedback.text
  }

  const showScanResult = (student, tone = 'success') => {
    const card = root.querySelector('#ci-scan-result')
    if (!card) return
    if (!student) { card.className = 'hidden'; card.innerHTML = ''; return }
    const styles = {
      success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
      warn: 'border-amber-200 bg-amber-50 text-amber-800',
    }
    card.className = `rounded-2xl border px-4 py-3 ${styles[tone] || styles.success}`
    card.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="${esc(photoOf(student))}" alt="รูป ${esc(student.full_name)}" class="w-14 h-16 rounded-xl object-cover border border-white/80 shadow-sm flex-shrink-0">
        <div class="min-w-0">
          <div class="text-[11px] font-bold uppercase tracking-wide opacity-70">${tone === 'warn' ? 'รายงานตัวแล้ว' : 'รายงานตัวสำเร็จ'}</div>
          <div class="font-extrabold text-base truncate">${esc(student.full_name)}</div>
          <div class="text-xs opacity-80">รหัส ${esc(student.student_code)} · ${esc(student.main_room || 'ไม่ระบุห้อง')}</div>
        </div>
        <div class="ml-auto text-3xl">${tone === 'warn' ? '⚠️' : '✅'}</div>
      </div>`
  }

  const openScanner = () => {
    const wrap = root.querySelector('#ci-scanner-wrap')
    wrap.innerHTML = `
      <div id="ci-scanner-modal" class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-950/75 backdrop-blur-sm p-2 sm:p-6">
        <div class="w-full max-w-2xl max-h-[calc(100vh-1rem)] sm:max-h-[calc(100vh-3rem)] overflow-y-auto bg-white rounded-3xl shadow-2xl">
          <div class="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 py-3 sm:px-5 bg-pink-600 text-white">
            <div>
              <div class="font-extrabold">✅ รับรายงานตัวนักกีฬา</div>
              <div class="text-[11px] text-pink-100">ส่อง QR แล้วรอผลยืนยันด้านล่าง</div>
            </div>
            <button id="ci-modal-close" type="button" class="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-xl" aria-label="ปิดหน้ารับรายงานตัว">×</button>
          </div>
          <div class="p-3 sm:p-5 space-y-3">
            <div class="relative overflow-hidden rounded-2xl bg-slate-950 aspect-[4/3] sm:aspect-[16/9] border-4 border-slate-100 shadow-inner">
              <div id="ci-camera-reader" class="w-full h-full"></div>
            </div>
            <div id="ci-feedback" class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-bold text-slate-600">กำลังเตรียมกล้อง…</div>
            <div id="ci-scan-result" class="hidden"></div>
            <form id="ci-manual-form" class="flex gap-2">
              <input id="ci-manual-code" placeholder="หรือพิมพ์รหัสนักเรียน" class="min-w-0 flex-1 border border-slate-300 rounded-xl px-3 py-2.5 text-sm">
              <button type="submit" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold whitespace-nowrap">รายงานตัว</button>
            </form>
            <div class="text-center text-[11px] text-slate-400">เมื่อสำเร็จแล้ว กล้องจะพร้อมสแกนคนถัดไปทันที</div>
          </div>
        </div>
      </div>`
    showScanner = true
    const toggleBtn = root.querySelector('#ci-scan-toggle')
    if (toggleBtn) { toggleBtn.textContent = '⏹ ปิดหน้ารับรายงานตัว'; toggleBtn.className = 'px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all bg-slate-700 text-white shadow-sm hover:bg-slate-800' }
    wrap.querySelector('#ci-manual-form').onsubmit = e => {
      e.preventDefault()
      const input = wrap.querySelector('#ci-manual-code')
      const code = input.value.trim()
      if (code) { void tryCheckin(code); input.value = '' }
    }
    wrap.querySelector('#ci-modal-close').onclick = () => { void closeScanner() }
    wrap.querySelector('#ci-scanner-modal').addEventListener('click', e => { if (e.target.id === 'ci-scanner-modal') void closeScanner() })
    updateFeedback()
    void startCamera()
  }

  const closeScanner = async () => {
    await stopCamera()
    root.querySelector('#ci-scanner-wrap').innerHTML = ''
    showScanner = false
    const toggleBtn = root.querySelector('#ci-scan-toggle')
    if (toggleBtn) { toggleBtn.textContent = '✅ รับรายงานตัว'; toggleBtn.className = 'px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all bg-pink-600 text-white shadow-sm hover:bg-pink-700' }
  }

  const stopCamera = async () => {
    if (html5Qrcode) { try { await html5Qrcode.stop() } catch (e) {} }
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
      feedback = { text: 'เปิดกล้องไม่สำเร็จ: ' + (getFriendlyErrorMessage(e)), tone: 'error' }
      updateFeedback()
    }
  }

  const tryCheckin = async (code) => {
    const roster = rosterForDate()
    const row = roster.find(r => r.student.student_code === code)
    if (!row) { playBeep(false); feedback = { text: `ไม่พบรหัส ${code} ในนักกีฬาที่มีนัดแข่งวันที่เลือก`, tone: 'error' }; updateFeedback(); showScanResult(null); return }
    if (checkedIdsToday().has(row.student.id)) { playBeep(false); feedback = { text: `${row.student.full_name} รายงานตัวไปแล้ว`, tone: 'warn' }; updateFeedback(); showScanResult(row.student, 'warn'); return }
    const saved = await doCheckin(row.student.id)
    if (!saved) return
    playBeep(true)
    feedback = { text: `✓ รายงานตัวแล้ว · ${row.student.full_name}`, tone: 'success' }
    updateFeedback()
    showScanResult(row.student, 'success')
  }

  const doCheckin = async (studentId) => {
    const { data, error } = await supabase.from('daily_checkins').upsert({
      event_id: DEFAULT_EVENT,
      student_id: studentId,
      check_in_date: checkInDate,
      checked_in_at: new Date().toISOString(),
    }, { onConflict: 'event_id,student_id,check_in_date' }).select().single()
    if (error) { alert(error.message); return false }
    dailyCheckins = [...dailyCheckins.filter(c => !(c.student_id === studentId && c.check_in_date === checkInDate)), data]
    renderList()
    return true
  }

  const undoCheckin = async (id) => {
    const { error } = await supabase.from('daily_checkins').delete().eq('id', id)
    if (error) { alert(error.message); return false }
    dailyCheckins = dailyCheckins.filter(c => c.id !== id)
    renderList()
    return true
  }

  const refreshDailyCheckins = async (silent = false) => {
    if (refreshing) return
    refreshing = true
    const refreshBtn = root.querySelector('#ci-refresh')
    if (refreshBtn) { refreshBtn.disabled = true; refreshBtn.textContent = 'กำลังรีเฟรช…' }
    try {
      dailyCheckins = await _fetchAllRows('daily_checkins', q => q.select('id,student_id,check_in_date,checked_in_at,checked_in_by').eq('event_id', DEFAULT_EVENT))
      renderList()
    } catch (e) {
      if (!silent) alert('รีเฟรชข้อมูลไม่สำเร็จ: ' + getFriendlyErrorMessage(e))
    } finally {
      refreshing = false
      if (refreshBtn) { refreshBtn.disabled = false; refreshBtn.textContent = '↻ รีเฟรช' }
    }
  }

  const renderList = () => {
    const roster = rosterForDate()
    const checked = checkedIdsToday()
    root.querySelectorAll('[data-gender-filter]').forEach(btn => {
      const active = btn.dataset.genderFilter === genderFilter
      btn.className = active
        ? 'px-3 py-1.5 rounded-lg text-xs font-bold bg-pink-600 text-white shadow-sm'
        : 'px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100'
    })
    root.querySelector('#ci-summary').textContent = `รายงานตัวแล้ว ${roster.filter(r => checked.has(r.student.id)).length} / ${roster.length} คน`

    const sportOptions = [...new Set(roster.flatMap(r => r.sportNames))].sort((a, b) => a.localeCompare(b, 'th'))
    const sportSel = root.querySelector('#ci-sport-filter')
    const prevSportVal = sportSel.value
    sportSel.innerHTML = `<option value="">ทุกกีฬา</option>${sportOptions.map(n => `<option value="${esc(n)}">${esc(n)}</option>`).join('')}`
    sportSel.value = sportOptions.includes(prevSportVal) ? prevSportVal : ''
    sportFilter = sportSel.value

    const q = search.trim().toLowerCase()
    const filtered = roster.filter(row => {
      if (genderFilter && row.student.gender !== genderFilter) return false
      if (colorFilter && row.teamColorId !== colorFilter) return false
      if (sportFilter && !row.sportNames.includes(sportFilter)) return false
      if (q) {
        const hay = `${row.student.student_code} ${row.student.full_name} ${row.student.main_room}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    }).sort((a, b) => (a.student.full_name || '').localeCompare(b.student.full_name || '', 'th'))

    const listEl = root.querySelector('#ci-list')
    const selectedDateNote = checkInDate > todayLocal()
      ? `<div class="px-4 py-2 text-[11px] text-amber-800 bg-amber-50 border-b border-amber-100">กำลังเตรียมรายงานตัวล่วงหน้าสำหรับวันที่ ${esc(checkInDate)} — ระบบจะใช้รายชื่อนักกีฬาจากตารางแข่งขันของวันที่เลือก</div>`
      : ''
    if (!filtered.length) {
      listEl.innerHTML = `${selectedDateNote}<div class="p-8 text-center text-xs text-slate-400">${roster.length === 0 ? 'ยังไม่มีนัดแข่งขันที่ตั้งตารางไว้ในวันที่เลือก' : 'ไม่พบนักกีฬาตามตัวกรองนี้'}</div>`
      return
    }
    listEl.innerHTML = `${selectedDateNote}<div class="divide-y divide-slate-100 max-h-[55vh] overflow-y-auto">${filtered.map(row => {
      const isChecked = checked.has(row.student.id)
      const checkin = dailyCheckins.find(c => c.student_id === row.student.id && c.check_in_date === checkInDate)
      const colorName = colorById.get(row.teamColorId)?.name || ''
      return `<div class="flex items-center gap-3 px-4 py-2.5 ${isChecked ? 'bg-emerald-50' : ''}">
        <img src="${esc(photoOf(row.student))}" alt="รูป ${esc(row.student.full_name)}" class="w-11 h-14 rounded-lg object-cover border border-slate-200 flex-shrink-0">
        <div class="flex-1 min-w-0">
          <div class="text-slate-800 text-xs font-bold truncate">${esc(row.student.full_name)} <span class="text-slate-400 font-normal">(${esc(row.student.student_code)})</span></div>
          <div class="text-slate-500 text-[10.5px] truncate">${esc(row.student.main_room)} · สี${esc(colorName)} · ${esc(row.sportNames.join(', '))}</div>
          ${isChecked ? `<div class="text-emerald-700 text-[10px] mt-0.5">✓ รายงานตัวแล้ว${checkin?.checked_in_at ? ` · ${new Date(checkin.checked_in_at).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}` : ''}${checkin?.checked_in_by ? ` · ${esc(checkin.checked_in_by)}` : ''}</div>` : '<div class="text-slate-400 text-[10px] mt-0.5">ยังไม่รายงานตัว</div>'}
        </div>
        ${isChecked
          ? `<button data-cancel="${esc(checkin?.id || '')}" class="flex-shrink-0 px-3 py-1.5 rounded-xl text-[11px] font-bold bg-white border border-red-200 text-red-600 hover:bg-red-50">ยกเลิกการรายงานตัว</button>`
          : `<button data-report="${esc(row.student.id)}" class="flex-shrink-0 px-3 py-1.5 rounded-xl text-[11px] font-bold bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200">รายงานตัว</button>`}
      </div>`
    }).join('')}</div>`

    listEl.querySelectorAll('[data-report]').forEach(btn => btn.onclick = async () => {
      btn.disabled = true
      await doCheckin(Number(btn.dataset.report))
    })
    listEl.querySelectorAll('[data-cancel]').forEach(btn => btn.onclick = async () => {
      if (!btn.dataset.cancel || !confirm('ยืนยันยกเลิกการรายงานตัวของนักกีฬาคนนี้หรือไม่?')) return
      btn.disabled = true
      await undoCheckin(btn.dataset.cancel)
    })
  }

  root.querySelector('#ci-date').onchange = e => { checkInDate = e.target.value || todayLocal(); autoFollowToday = checkInDate === todayLocal(); renderList() }
  root.querySelector('#ci-refresh').onclick = () => refreshDailyCheckins()
  root.querySelector('#ci-search').oninput = e => { search = e.target.value; renderList() }
  root.querySelectorAll('[data-gender-filter]').forEach(btn => btn.onclick = () => {
    genderFilter = btn.dataset.genderFilter || ''
    renderList()
  })
  root.querySelector('#ci-color-filter').onchange = e => { colorFilter = e.target.value; renderList() }
  root.querySelector('#ci-sport-filter').onchange = e => { sportFilter = e.target.value; renderList() }
  root.querySelector('#ci-scan-toggle').onclick = () => {
    showScanner = !showScanner
    if (showScanner) {
      openScanner()
    } else {
      void closeScanner()
    }
  }

  renderList()

  const syncLocalDate = () => {
    const currentDate = todayLocal()
    if (currentDate === lastLocalDate) return
    const previousDate = lastLocalDate
    lastLocalDate = currentDate
    if (autoFollowToday || checkInDate === previousDate || checkInDate < currentDate) {
      checkInDate = currentDate
      autoFollowToday = true
      const dateInput = root.querySelector('#ci-date')
      if (dateInput) dateInput.value = currentDate
      renderList()
    }
    refreshDailyCheckins(true)
  }
  document.addEventListener('visibilitychange', syncLocalDate)
  window.setInterval(syncLocalDate, 30000)
  window.setInterval(() => { if (!document.hidden) refreshDailyCheckins(true) }, 30000)
}

async function init() {
  root.innerHTML = '<div class="py-16 text-center text-slate-400">กำลังโหลด...</div>'
  const cachedPw = sessionStorage.getItem(PW_KEY)
  const boot = async () => {
    try {
      const data = await loadData()
      renderApp(data)
    } catch (e) {
      root.innerHTML = `<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${esc(getFriendlyErrorMessage(e))}</div>`
    }
  }
  if (cachedPw === PW) {
    await boot()
    return
  }
  renderGate(boot)
}

init()
