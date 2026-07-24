// js/score-qr-scanner.js — 📷 สแกน QR นักเรียนเพื่อบันทึกคะแนนแบบต่อเนื่อง
// ใช้ QR ใบเดียวกับเช็คชื่อ/สแกนละหมาด (รูปแบบ SQ:{student_code}:{timestamp}, อายุ ±60 วินาที)
// เฉพาะคอลัมน์ที่ไม่ใช่คะแนนอัตโนมัติ (column_type ต้องเป็น regular/bonus และไม่ใช่ชื่อคอลัมน์ระบบกลาง)
import { getClassStudents, getScoreColumns, getStudentScores, saveStudentScore, getMyClasses, getLifeSkillColumns, getSystemConfig } from './api.js'
import { showToast } from './ui.js'

// ชื่อคอลัมน์คะแนนอัตโนมัติที่รู้จักตายตัว — ศาสนา (_RELIGION_REQUIRED_COLUMNS ใน api.js)
// + ทักษะชีวิต (แถวเริ่มต้นของตาราง life_skill_columns) กันไว้ก่อนแม้ query แถวจริงจะพลาด
const AUTO_COLUMN_NAMES = ['คะแนนมาเรียน', 'คะแนนละหมาด', 'การมาเรียน', 'เดินสวนสนาม', 'ความสะอาด']

export function isEligibleScoreColumn(col, extraExcludedNames = []) {
  if (!col) return false
  const type = col.column_type ?? 'regular'
  if (type !== 'regular' && type !== 'bonus') return false
  if (AUTO_COLUMN_NAMES.includes(col.assignment_name)) return false
  if (extraExcludedNames.includes(col.assignment_name)) return false
  return true
}

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

function _htmlEsc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

// เลือกห้องก่อน (ใช้เมื่อเปิดจากเมนูสแกนกลาง ที่ยังไม่รู้บริบทห้อง) แล้วค่อยเข้า openScoreScanner
export async function openScoreScannerPickClass(teacher) {
  let classes = []
  try { classes = await getMyClasses(teacher.id) } catch { classes = [] }
  if (!classes.length) { showToast('ยังไม่มีห้องเรียนที่สอนอยู่', 'warning'); return }

  const m = document.createElement('div')
  m.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50'
  m.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[85vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
        <h3 class="text-white font-bold text-base">📷 สแกนบันทึกคะแนน — เลือกห้อง</h3>
        <button id="sqp-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div class="p-4 overflow-y-auto flex flex-col gap-1.5">
        ${classes.map(c => `
          <button data-cid="${c.id}" class="sqp-class-btn text-left px-4 py-3 rounded-xl border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 transition">
            <p class="text-sm font-semibold text-gray-800 truncate">${_htmlEsc(c.class_name)}</p>
            <p class="text-xs text-gray-400 truncate">${_htmlEsc(c.master_subjects?.subject_name ?? '')}</p>
          </button>`).join('')}
      </div>
    </div>`
  document.body.appendChild(m)
  m.querySelector('#sqp-close').addEventListener('click', () => m.remove())
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
  m.querySelectorAll('.sqp-class-btn').forEach(btn => btn.addEventListener('click', () => {
    const c = classes.find(x => x.id === parseInt(btn.dataset.cid))
    m.remove()
    openScoreScanner({ classId: c.id, className: c.class_name })
  }))
}

// จุดเข้าใช้งานหลัก — opts: { classId, className, initialColumnId? }
export async function openScoreScanner(opts) {
  const { classId, className } = opts
  let students = [], columns = [], lifeSkillNames = []
  try {
    const sysCfg = await getSystemConfig().catch(() => ({}))
    const ay  = parseInt(sysCfg.academicYear ?? 2568)
    const sem = parseInt(sysCfg.semester ?? 1)
    ;[students, columns, lifeSkillNames] = await Promise.all([
      getClassStudents(classId),
      getScoreColumns(classId),
      getLifeSkillColumns(ay, sem, 'สามัญ').then(cols => cols.map(c => c.name)).catch(() => []),
    ])
  } catch (err) {
    showToast('โหลดข้อมูลห้องไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    return
  }
  if (!students.length) { showToast('ห้องนี้ยังไม่มีนักเรียน', 'warning'); return }
  const eligibleCols = columns.filter(c => isEligibleScoreColumn(c, lifeSkillNames))
  if (!eligibleCols.length) {
    showToast('ห้องนี้มีแต่คอลัมน์คะแนนอัตโนมัติ (เช่น คะแนนมาเรียน/คะแนนละหมาด/ทักษะชีวิต) ยังไม่มีคอลัมน์ที่ครูสร้างเองให้สแกนบันทึกได้ — เพิ่มคอลัมน์คะแนนใหม่ที่หน้าบันทึกคะแนนก่อนครับ', 'warning')
    return
  }
  let currentColumnId = (opts.initialColumnId && eligibleCols.some(c => c.id === opts.initialColumnId))
    ? opts.initialColumnId : eligibleCols[0].id

  let scores = []
  try { scores = await getStudentScores(classId) } catch { scores = [] }
  const scoreMap = {} // `${studentId}:${columnId}` -> score
  scores.forEach(s => { scoreMap[`${s.student_id}:${s.score_column_id}`] = s.score })

  _renderScannerOverlay({ classId, className, students, eligibleCols, currentColumnId, scoreMap })
}

function _renderScannerOverlay({ classId, className, students, eligibleCols, currentColumnId, scoreMap }) {
  document.getElementById('score-scan-overlay')?.remove()

  const overlay = document.createElement('div')
  overlay.id = 'score-scan-overlay'
  overlay.className = 'fixed inset-0 z-[9999] bg-slate-950 flex flex-col'
  overlay.innerHTML = `
    <style>
      @keyframes sqs-laser-move { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .sqs-laser { animation: sqs-laser-move 2s ease-in-out infinite; }
      .sqs-flash-success { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .sqs-flash-error { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="text-slate-100 font-bold text-sm">📷 สแกนบันทึกคะแนน</h3>
        <p class="text-xs text-slate-400 truncate">${_htmlEsc(className ?? '')}</p>
      </div>
      <button id="sqs-close" class="text-slate-400 hover:text-white text-2xl leading-none px-2">&times;</button>
    </div>

    ${eligibleCols.length > 1 ? `
    <div class="px-4 py-2.5 border-b border-slate-800 flex-shrink-0">
      <label class="text-[11px] text-slate-400 block mb-1">คอลัมน์เป้าหมาย (เปลี่ยนได้ทุกเมื่อ)</label>
      <select id="sqs-col-select" class="w-full bg-slate-900 border border-slate-700 text-slate-100 text-sm rounded-xl px-3 py-2">
        ${eligibleCols.map(c => `<option value="${c.id}" ${c.id === currentColumnId ? 'selected' : ''}>${_htmlEsc(c.assignment_name)} (เต็ม ${c.max_score ?? '-'})</option>`).join('')}
      </select>
    </div>` : ''}

    <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 max-w-md mx-auto w-full">
      <div id="sqs-camera-container" class="relative w-full aspect-square bg-black rounded-2xl overflow-hidden">
        <div id="sqs-camera-reader" class="w-full h-full"></div>
        <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div class="absolute inset-0 bg-black/30"></div>
          <div class="relative w-48 h-48 rounded-2xl border border-white/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] overflow-hidden">
            <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400 rounded-tl"></div>
            <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 rounded-tr"></div>
            <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400 rounded-bl"></div>
            <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400 rounded-br"></div>
            <div class="sqs-laser absolute left-0 w-full h-0.5 bg-sky-400"></div>
          </div>
        </div>
      </div>

      <div id="sqs-feedback" class="min-h-[70px]">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400">
          ยกกล้องส่อง QR ของนักเรียนเพื่อบันทึกคะแนน
        </div>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3">
        <div class="flex items-center justify-between gap-2 mb-2">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">บันทึกคะแนนแล้วรอบนี้</p>
          <span id="sqs-history-count" class="text-[10px] font-bold text-sky-400">0 คน</span>
        </div>
        <div id="sqs-history-list" class="space-y-1.5 text-xs max-h-40 overflow-y-auto pr-1">
          <p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>
        </div>
      </div>
    </div>

    <!-- ป๊อบอัพกรอกคะแนน (เด้งทับเมื่อสแกนสำเร็จ) -->
    <div id="sqs-score-popup" class="hidden fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-5 flex flex-col gap-3">
        <div id="sqs-popup-student" class="flex items-center gap-3"></div>
        <div>
          <p class="text-xs text-gray-500 mb-1" id="sqs-popup-colname"></p>
          <div class="flex items-center gap-2">
            <button data-adj="-1" class="sqs-adj px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm">−1</button>
            <input id="sqs-score-input" type="number" step="any" class="flex-1 min-w-0 text-center text-2xl font-bold border border-gray-200 rounded-xl py-2" />
            <button data-adj="1" class="sqs-adj px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm">+1</button>
            <button data-adj="5" class="sqs-adj px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm">+5</button>
          </div>
        </div>
        <div class="flex gap-2 mt-1">
          <button id="sqs-popup-cancel" class="flex-1 py-3 rounded-2xl border border-gray-200 text-gray-500 font-semibold text-sm hover:bg-gray-50">ข้าม</button>
          <button id="sqs-popup-save" class="flex-1 py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#0ea5e9,#6366f1);">💾 บันทึก</button>
        </div>
      </div>
    </div>
  `
  document.body.appendChild(overlay)

  const recentList = []
  let html5Qrcode = null
  let lastCode = null
  let lastTime = 0
  let popupOpen = false

  const currentCol = () => eligibleCols.find(c => c.id === currentColumnId)

  const renderHistory = () => {
    const list = overlay.querySelector('#sqs-history-list')
    const count = overlay.querySelector('#sqs-history-count')
    count.textContent = `${recentList.length} คน`
    if (!recentList.length) { list.innerHTML = `<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>`; return }
    list.innerHTML = recentList.map(r => `
      <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${_htmlEsc(r.name)}</span>
        <span class="text-sky-400 font-bold text-[11px] flex-shrink-0">${_htmlEsc(r.colName)}: ${r.score}</span>
      </div>`).join('')
  }

  const colSelect = overlay.querySelector('#sqs-col-select')
  if (colSelect) colSelect.addEventListener('change', e => { currentColumnId = parseInt(e.target.value) })

  async function pauseCamera() { if (html5Qrcode) { try { await html5Qrcode.pause(true) } catch {} } }
  async function resumeCamera() { if (html5Qrcode) { try { html5Qrcode.resume() } catch {} } }

  function openScorePopup(student) {
    popupOpen = true
    const col = currentCol()
    const key = `${student.id}:${col.id}`
    const existing = scoreMap[key]
    const popup = overlay.querySelector('#sqs-score-popup')
    const photoHTML = student.image_url
      ? `<img src="${student.image_url}" class="w-14 h-18 object-cover object-top rounded-xl border border-gray-200" />`
      : `<div class="w-14 h-18 rounded-xl bg-sky-50 border border-sky-100 text-sky-400 font-bold text-lg flex items-center justify-center">${student.full_name.charAt(0)}</div>`
    popup.querySelector('#sqs-popup-student').innerHTML = `
      ${photoHTML}
      <div class="min-w-0 flex-1">
        <h4 class="font-bold text-gray-800 text-sm truncate">${_htmlEsc(student.full_name)}</h4>
        <p class="text-xs text-gray-400 truncate">รหัส ${_htmlEsc(student.student_code)}</p>
      </div>`
    popup.querySelector('#sqs-popup-colname').textContent = `${col.assignment_name} (เต็ม ${col.max_score ?? '-'})${existing != null ? ' — คะแนนเดิม: ' + existing : ''}`
    const input = popup.querySelector('#sqs-score-input')
    input.value = existing ?? ''
    popup.classList.remove('hidden')
    setTimeout(() => input.focus(), 50)

    popup.querySelectorAll('.sqs-adj').forEach(btn => {
      btn.onclick = () => {
        const delta = parseFloat(btn.dataset.adj)
        const cur = parseFloat(input.value) || 0
        input.value = Math.round((cur + delta) * 1000) / 1000
      }
    })

    const closePopup = async () => {
      popup.classList.add('hidden')
      popupOpen = false
      await resumeCamera()
    }
    popup.querySelector('#sqs-popup-cancel').onclick = closePopup
    popup.querySelector('#sqs-popup-save').onclick = async () => {
      const val = input.value.trim()
      if (val === '') { showToast('กรุณากรอกคะแนน', 'warning'); return }
      const saveBtn = popup.querySelector('#sqs-popup-save')
      saveBtn.disabled = true
      try {
        const result = await saveStudentScore(classId, student.id, col.id, val, { max: col.max_score })
        scoreMap[key] = result?.final ?? parseFloat(val)
        recentList.unshift({ name: student.full_name, colName: col.assignment_name, score: scoreMap[key] })
        renderHistory()
        showToast(`บันทึกคะแนน ${student.full_name} แล้ว ✅`, 'success')
        await closePopup()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        saveBtn.disabled = false
      }
    }
  }

  async function processScan(decodedText) {
    if (popupOpen) return
    const container = overlay.querySelector('#sqs-camera-container')
    const feedback = overlay.querySelector('#sqs-feedback')
    const flash = ok => {
      container.classList.add(ok ? 'sqs-flash-success' : 'sqs-flash-error')
      setTimeout(() => container.classList.remove(ok ? 'sqs-flash-success' : 'sqs-flash-error'), 500)
    }

    let studentCode = decodedText
    if (decodedText.startsWith('SQ:')) {
      const [, code, timestampStr] = decodedText.split(':')
      const diff = Math.floor(Date.now() / 1000) - parseInt(timestampStr, 10)
      if (diff > 60 || diff < -60) {
        _playScanBeep('error'); flash(false)
        feedback.innerHTML = `<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">QR Code หมดอายุแล้ว ให้นักเรียนเปิดหน้าใหม่</div>`
        return
      }
      studentCode = code
    }

    const student = students.find(s => s.student_code === studentCode)
    if (!student) {
      _playScanBeep('error'); flash(false)
      feedback.innerHTML = `<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">ไม่พบนักเรียนคนนี้ในห้องนี้</div>`
      return
    }

    _playScanBeep('success'); flash(true)
    feedback.innerHTML = `<div class="bg-sky-950/40 border border-sky-800/80 rounded-2xl p-3 text-center text-xs text-sky-300">✓ พบ ${_htmlEsc(student.full_name)} — กรอกคะแนนในป๊อบอัพ</div>`
    await pauseCamera()
    openScorePopup(student)
  }

  overlay.querySelector('#sqs-close').addEventListener('click', async () => {
    if (html5Qrcode) { try { await html5Qrcode.stop() } catch {} }
    overlay.remove()
  })

  ;(async () => {
    try {
      const Html5Qrcode = await _loadHtml5Qrcode()
      html5Qrcode = new Html5Qrcode('sqs-camera-reader')
      await html5Qrcode.start(
        { facingMode: 'environment' },
        { fps: 25, aspectRatio: 1.0 },
        (decodedText) => {
          if (decodedText === lastCode && Date.now() - lastTime < 2000) return
          lastCode = decodedText; lastTime = Date.now()
          processScan(decodedText)
        },
        () => {},
      )
    } catch (err) {
      showToast('ไม่สามารถเปิดกล้องได้: ' + (err.message ?? ''), 'error')
      overlay.remove()
    }
  })()
}
