// js/council-checkin-scanner.js — 📷 สแกน QR เช็คอินกิจกรรม (สเปคข้อ 8.8)
// ใช้ QR ใบเดียวกับระบบเช็คชื่อ/สแกนละหมาดเดิม (รูปแบบ SQ:{student_code}:{timestamp}, อายุ ±60 วินาที)
// mirror pattern js/score-qr-scanner.js (เปลี่ยนจากป๊อบอัพกรอกคะแนน เป็นเช็คอินทันทีเมื่อสแกนพบ)
// รองรับกิจกรรมที่เปิดให้นักเรียนทั่วไปเข้าร่วมด้วย (openToGeneral) — ถ้าสแกนแล้วไม่เจอในรายชื่อ
// สมาชิกสภาที่โหลดมา จะค้นหานักเรียนทั่วไปด้วย student_code แทน (ไม่โหลดรายชื่อนักเรียนทั้งโรงเรียน
// มาไว้ล่วงหน้าเพราะมีเป็นพันคน — ค้นแบบ on-demand ทีละคนตอนสแกนเจอ)
import { checkInAttendance, undoCheckInAttendance, searchStudentsForCouncil } from './council-api.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'
function _playScanBeep(type = 'success') {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.connect(gain); gain.connect(audioCtx.destination)
    if (type === 'success') {
      osc.type = 'sine'
      osc.frequency.setValueAtTime(880, audioCtx.currentTime)
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12)
      osc.start(); osc.stop(audioCtx.currentTime + 0.12)
    } else {
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(150, audioCtx.currentTime)
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3)
      osc.start(); osc.stop(audioCtx.currentTime + 0.3)
    }
  } catch { /* เสียงเป็นแค่ของเสริม ไม่บล็อกการทำงานหลัก */ }
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

function _esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

// opts: { activityId, activityTitle, members: [{ id, student_id, students:{full_name, student_code, image_url, photo_url} }],
//   alreadyChecked: Set<studentId>, onCheckedIn: (studentId) => void, openToGeneral: boolean }
// Duty mode accepts onDutyScanned({member,status}) and saves through the caller's scoped duty RPC.
export function openCouncilCheckinScanner(opts) {
  const { activityId, activityTitle, members = [], alreadyChecked, onCheckedIn, onUndo, openToGeneral } = opts
  const dutyMode = opts.mode === 'duty'
  const lookupMode = opts.mode === 'lookup'
  const onDutyScanned = opts.onDutyScanned
  const onLookupScanned = opts.onLookupScanned
  const onClose = opts.onClose
  const dutyStatuses = [
    ['present', 'มา', 'bg-emerald-500 text-white'],
    ['late', 'สาย', 'bg-amber-400 text-white'],
    ['absent', 'ขาด', 'bg-red-500 text-white'],
    ['excused', 'ลา', 'bg-blue-500 text-white'],
  ]
  let selectedDutyStatus = dutyStatuses.some(([key]) => key === opts.initialStatus) ? opts.initialStatus : 'present'
  const dutyStatusLabel = status => dutyStatuses.find(([key]) => key === status)?.[1] || 'มา'
  document.getElementById('council-checkin-overlay')?.remove()

  const overlay = document.createElement('div')
  overlay.id = 'council-checkin-overlay'
  overlay.className = 'fixed inset-0 z-[9999] bg-slate-950 flex flex-col'
  overlay.innerHTML = `
    <style>
      @keyframes ccs-laser-move { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .ccs-laser { animation: ccs-laser-move 2s ease-in-out infinite; }
      .ccs-flash-success { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .ccs-flash-error { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="text-slate-100 font-bold text-sm">📷 ${dutyMode ? 'สแกนเช็คชื่อเวร' : lookupMode ? 'สแกนค้นหาสมาชิก' : 'สแกนเช็คอินกิจกรรม'}</h3>
        <p class="text-xs text-slate-400 truncate">${_esc(activityTitle ?? '')}</p>
      </div>
      <button id="ccs-close" class="text-slate-400 hover:text-white text-2xl leading-none px-2">&times;</button>
    </div>
    <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 max-w-md mx-auto w-full">
      ${dutyMode ? `<section class="bg-slate-900 border border-slate-800 rounded-2xl p-3"><p class="text-[10px] text-slate-400 font-bold mb-2">เลือกสถานะที่จะบันทึก</p><div class="grid grid-cols-4 gap-1.5">${dutyStatuses.map(([key, label, color]) => `<button type="button" data-ccs-duty-status="${key}" class="rounded-lg border px-2 py-2 text-xs font-bold transition ${selectedDutyStatus === key ? `${color} border-transparent shadow-sm` : 'border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500'}">${label}</button>`).join('')}</div></section>` : ''}
      <div id="ccs-camera-container" class="relative w-full aspect-square bg-black rounded-2xl overflow-hidden">
        <div id="ccs-camera-reader" class="w-full h-full"></div>
        <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div class="absolute inset-0 bg-black/30"></div>
          <div class="relative w-48 h-48 rounded-2xl border border-white/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] overflow-hidden">
            <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400 rounded-tl"></div>
            <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 rounded-tr"></div>
            <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400 rounded-bl"></div>
            <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400 rounded-br"></div>
            <div class="ccs-laser absolute left-0 w-full h-0.5 bg-sky-400"></div>
          </div>
        </div>
      </div>
      <div id="ccs-feedback" class="min-h-[70px]">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400">
          ${dutyMode ? 'ยกกล้องส่อง QR ของสมาชิกสภาเพื่อบันทึกสถานะเวร' : lookupMode ? 'สแกน QR นักเรียนเพื่อเลือกสมาชิกสำหรับบันทึกเงินออม' : `ยกกล้องส่อง QR ของ${openToGeneral ? 'นักเรียน' : 'สมาชิกสภา'}เพื่อเช็คอิน`}
        </div>
      </div>
      <form id="ccs-manual-form" class="flex gap-2">
        <input id="ccs-manual-code" type="text" inputmode="numeric" placeholder="หรือพิมพ์รหัสนักเรียนแล้วกด Enter" class="flex-1 min-w-0 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500" />
        <button type="submit" class="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex-shrink-0">${dutyMode ? 'บันทึกสถานะ' : 'เช็คอิน'}</button>
      </form>
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3">
        <div class="flex items-center justify-between gap-2 mb-2">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">${dutyMode ? 'บันทึกแล้วรอบนี้' : 'เช็คอินแล้วรอบนี้'}</p>
          <span id="ccs-history-count" class="text-[10px] font-bold text-sky-400">0 คน</span>
        </div>
        <div id="ccs-history-list" class="space-y-1.5 text-xs max-h-40 overflow-y-auto pr-1">
          <p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>
        </div>
      </div>
    </div>`
  document.body.appendChild(overlay)

  const recentList = []
  let html5Qrcode = null
  let lastCode = null
  let lastTime = 0
  const checked = new Set(alreadyChecked ?? [])
  const processingDutyStudentIds = new Set()
  const recentDutyStatusByStudent = new Map()

  const renderHistory = () => {
    const list = overlay.querySelector('#ccs-history-list')
    const count = overlay.querySelector('#ccs-history-count')
    count.textContent = `${recentList.length} คน`
    if (!recentList.length) { list.innerHTML = `<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>`; return }
    list.innerHTML = recentList.map(r => `
      <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${_esc(r.name)}</span>
        ${dutyMode ? `<span class="text-emerald-400 font-bold text-[11px] flex-shrink-0">✓ ${_esc(dutyStatusLabel(r.status))}</span>` : '<span class="text-emerald-400 font-bold text-[11px] flex-shrink-0">✓ เช็คอินแล้ว</span><button data-ccs-undo="' + _esc(r.studentId) + '" class="px-2 py-0.5 rounded-md border border-red-800/60 bg-red-950/40 text-red-400 text-[10.5px] font-bold flex-shrink-0">✕ ยกเลิก</button>'}
      </div>`).join('')
  }

  // หาว่ารหัสนี้เป็นใคร — เช็คในรายชื่อสมาชิกสภาที่โหลดมาก่อน (เร็ว ไม่ query) ถ้าไม่เจอและ
  // กิจกรรมเปิดให้นักเรียนทั่วไป ค่อยค้นหาเพิ่มทีละคน (ไม่โหลดรายชื่อนักเรียนทั้งโรงเรียนมาล่วงหน้า)
  async function resolveStudentByCode(studentCode) {
    const member = members.find(m => m.students?.student_code === studentCode)
    if (member) return { studentId: member.student_id, membershipId: member.id, member, name: member.students?.full_name ?? '—' }
    if (!openToGeneral) return null
    const results = await searchStudentsForCouncil(studentCode).catch(() => [])
    const exact = results.find(s => s.student_code === studentCode)
    return exact ? { studentId: exact.id, name: exact.full_name } : null
  }

  async function processCode(studentCode) {
    const container = overlay.querySelector('#ccs-camera-container')
    const feedback = overlay.querySelector('#ccs-feedback')
    const flash = ok => {
      container.classList.add(ok ? 'ccs-flash-success' : 'ccs-flash-error')
      setTimeout(() => container.classList.remove(ok ? 'ccs-flash-success' : 'ccs-flash-error'), 500)
    }

    const resolved = await resolveStudentByCode(studentCode)
    if (!resolved) {
      _playScanBeep('error'); flash(false)
      feedback.innerHTML = `<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">ไม่พบ${openToGeneral ? 'นักเรียน' : 'สมาชิกสภา'}รหัสนี้</div>`
      return
    }
    if (lookupMode) {
      try {
        if (!resolved.member || !onLookupScanned) throw new Error('ไม่สามารถระบุสมาชิกสภาจาก QR นี้ได้')
        _playScanBeep('success'); flash(true)
        feedback.innerHTML = `<div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 text-center text-xs text-emerald-300">พบ ${_esc(resolved.name)} กำลังเลือกสมาชิก…</div>`
        onLookupScanned(resolved.member)
        if (html5Qrcode) { try { await html5Qrcode.stop() } catch { /* กล้องอาจหยุดไปแล้ว */ } }
        overlay.remove()
      } catch (err) {
        _playScanBeep('error'); flash(false)
        feedback.innerHTML = `<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">เลือกสมาชิกไม่สำเร็จ: ${_esc(getFriendlyErrorMessage(err))}</div>`
      }
      return
    }
    const statusForThisScan = selectedDutyStatus
    if (!dutyMode && checked.has(resolved.studentId)) {
      _playScanBeep('error'); flash(false)
      feedback.innerHTML = `<div class="bg-amber-950/40 border border-amber-800/80 rounded-2xl p-3 text-center text-xs text-amber-400">${_esc(resolved.name)} เช็คอินไปแล้ว</div>`
      return
    }
    if (dutyMode && recentDutyStatusByStudent.get(resolved.studentId) === statusForThisScan) {
      feedback.innerHTML = `<div class="bg-amber-950/40 border border-amber-800/80 rounded-2xl p-3 text-center text-xs text-amber-300">${_esc(resolved.name)} บันทึกสถานะ “${_esc(dutyStatusLabel(statusForThisScan))}” แล้ว</div>`
      return
    }
    if (dutyMode && processingDutyStudentIds.has(resolved.studentId)) return
    if (dutyMode) processingDutyStudentIds.add(resolved.studentId)

    try {
      if (dutyMode) {
        if (!resolved.membershipId || !onDutyScanned) throw new Error('ไม่สามารถระบุสมาชิกที่ต้องบันทึกเวรได้')
        await onDutyScanned({ member: resolved.member, status: statusForThisScan })
      } else {
        await checkInAttendance({ activityId, studentId: resolved.studentId })
      }
      checked.add(resolved.studentId)
      if (dutyMode) recentDutyStatusByStudent.set(resolved.studentId, statusForThisScan)
      _playScanBeep('success'); flash(true)
      feedback.innerHTML = `<div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 text-center text-xs text-emerald-300">✓ ${dutyMode ? `บันทึก ${_esc(resolved.name)} เป็น “${_esc(dutyStatusLabel(statusForThisScan))}” แล้ว` : `เช็คอิน ${_esc(resolved.name)} สำเร็จ`}</div>`
      const previousIndex = dutyMode ? recentList.findIndex(item => item.studentId === resolved.studentId) : -1
      if (previousIndex !== -1) recentList.splice(previousIndex, 1)
      recentList.unshift({ name: resolved.name, studentId: resolved.studentId, status: statusForThisScan })
      renderHistory()
      onCheckedIn?.(resolved.studentId, selectedDutyStatus, resolved.member)
    } catch (err) {
      _playScanBeep('error'); flash(false)
      feedback.innerHTML = `<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">บันทึกไม่สำเร็จ: ${_esc(getFriendlyErrorMessage(err))}</div>`
      showToast('เช็คอินไม่สำเร็จ: ' + (getFriendlyErrorMessage(err)), 'error')
    } finally {
      if (dutyMode) processingDutyStudentIds.delete(resolved.studentId)
    }
  }

  async function processScan(decodedText) {
    let studentCode = decodedText
    if (decodedText.startsWith('SQ:')) {
      const [, code, timestampStr] = decodedText.split(':')
      const diff = Math.floor(Date.now() / 1000) - parseInt(timestampStr, 10)
      if (diff > 60 || diff < -60) {
        const feedback = overlay.querySelector('#ccs-feedback')
        const container = overlay.querySelector('#ccs-camera-container')
        _playScanBeep('error'); container.classList.add('ccs-flash-error'); setTimeout(() => container.classList.remove('ccs-flash-error'), 500)
        feedback.innerHTML = `<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">QR Code หมดอายุแล้ว ให้เปิดหน้าใหม่</div>`
        return
      }
      studentCode = code
    }
    await processCode(studentCode)
  }

  overlay.querySelector('#ccs-manual-form').addEventListener('submit', async e => {
    e.preventDefault()
    const input = overlay.querySelector('#ccs-manual-code')
    const code = input.value.trim()
    if (!code) return
    await processCode(code)
    input.value = ''
    input.focus()
  })

  overlay.querySelectorAll('[data-ccs-duty-status]').forEach(button => button.addEventListener('click', () => {
    selectedDutyStatus = button.dataset.ccsDutyStatus
    overlay.querySelectorAll('[data-ccs-duty-status]').forEach(option => {
      const selected = option.dataset.ccsDutyStatus === selectedDutyStatus
      const color = dutyStatuses.find(([key]) => key === option.dataset.ccsDutyStatus)?.[2] || ''
      option.className = `rounded-lg border px-2 py-2 text-xs font-bold transition ${selected ? `${color} border-transparent shadow-sm` : 'border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500'}`
    })
  }))

  overlay.querySelector('#ccs-history-list').addEventListener('click', async e => {
    const btn = e.target.closest('[data-ccs-undo]')
    if (!btn) return
    const studentId = Number(btn.dataset.ccsUndo)
    btn.disabled = true
    try {
      await undoCheckInAttendance({ activityId, studentId })
      checked.delete(studentId)
      const idx = recentList.findIndex(r => r.studentId === studentId)
      if (idx !== -1) recentList.splice(idx, 1)
      renderHistory()
      onUndo?.(studentId)
    } catch (err) {
      showToast('ยกเลิกไม่สำเร็จ: ' + (getFriendlyErrorMessage(err)), 'error')
      btn.disabled = false
    }
  })

  overlay.querySelector('#ccs-close').addEventListener('click', async () => {
    if (html5Qrcode) { try { await html5Qrcode.stop() } catch { /* กล้องอาจปิดไปแล้ว ไม่ต้องแจ้งเตือนซ้ำ */ } }
    overlay.remove()
    onClose?.()
  })

  ;(async () => {
    try {
      const Html5Qrcode = await _loadHtml5Qrcode()
      html5Qrcode = new Html5Qrcode('ccs-camera-reader')
      await html5Qrcode.start(
        { facingMode: 'environment' },
        { fps: 25, aspectRatio: 1.0 },
        decodedText => {
          if (decodedText === lastCode && Date.now() - lastTime < 2000) return
          lastCode = decodedText; lastTime = Date.now()
          processScan(decodedText)
        },
        () => {},
      )
    } catch (err) {
      showToast('ไม่สามารถเปิดกล้องได้: ' + (getFriendlyErrorMessage(err)), 'error')
      overlay.remove()
      onClose?.()
    }
  })()
}
