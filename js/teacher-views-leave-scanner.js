import { getActiveLeavePermission, closeLeavePermission } from './api.js'
import { renderLeaveMonitorWidget } from './leave-monitor.js?v=10.18.1'
import { formatLeaveCountdown } from './leave-time.js'
import { showToast } from './ui.js'
import { setContent, setTitle, setActiveNav, _htmlEsc } from './teacher-views-utils.js'

let html5QrcodeScanner = null
let scannerTimerInterval = null
let isProcessingLeaveCheck = false

const CAMERA_ICON_SM = `
  <svg aria-hidden="true" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`

// ฟังก์ชันสังเคราะห์เสียงแจ้งเตือนความสำเร็จ (Success sound)
function playSuccessBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, ctx.currentTime) // A5 (เสียงสูงใส)
    gain.gain.setValueAtTime(0.1, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.15)
  } catch (e) {
    console.warn('Play audio failed:', e)
  }
}

// ฟังก์ชันสังเคราะห์เสียงแจ้งเตือนข้อผิดพลาด (Failure sound)
function playFailureBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sawtooth' // เสียงหยักหยาบ
    osc.frequency.setValueAtTime(150, ctx.currentTime) // เสียงทุ้มต่ำเตือนภัย
    gain.gain.setValueAtTime(0.15, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.4)
  } catch (e) {
    console.warn('Play audio failed:', e)
  }
}

function pauseLeaveScannerForModal() {
  try {
    if (html5QrcodeScanner?.pause) html5QrcodeScanner.pause(true)
  } catch (err) {
    console.warn('Pause scanner error:', err)
  }
}

function resumeLeaveScannerAfterModal() {
  try {
    if (html5QrcodeScanner?.resume) html5QrcodeScanner.resume()
  } catch (err) {
    console.warn('Resume scanner error:', err)
  }
}

function closeLeaveScanModal({ resume = true } = {}) {
  const modal = document.getElementById('leave-scan-modal')
  if (modal) modal.remove()
  if (scannerTimerInterval) {
    clearInterval(scannerTimerInterval)
    scannerTimerInterval = null
  }
  isProcessingLeaveCheck = false
  if (resume) resumeLeaveScannerAfterModal()
}

function renderLeaveScanModal(contentHtml, { tone = 'indigo', maxWidth = 'max-w-md' } = {}) {
  document.getElementById('leave-scan-modal')?.remove()
  const toneClass = {
    indigo: 'border-indigo-100',
    emerald: 'border-emerald-100',
    red: 'border-red-100',
    amber: 'border-amber-100'
  }[tone] || 'border-gray-100'
  const modal = document.createElement('div')
  modal.id = 'leave-scan-modal'
  modal.className = 'fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/65 p-4 animate-fade'
  modal.innerHTML = `
    <div class="w-full ${maxWidth} max-h-[92vh] overflow-y-auto rounded-3xl bg-white border ${toneClass} shadow-2xl">
      ${contentHtml}
    </div>
  `
  document.body.appendChild(modal)
  return modal
}

function renderLeaveScanLoadingModal(studentCode) {
  renderLeaveScanModal(`
    <div class="p-6 text-center space-y-4">
      <div class="mx-auto w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
        <svg class="animate-spin h-6 w-6 text-indigo-500" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg>
      </div>
      <div>
        <h4 class="font-extrabold text-gray-800 text-lg">กำลังตรวจสอบใบอนุญาต</h4>
        <p class="text-xs text-gray-400 mt-1">รหัสนักเรียน <span class="font-mono font-bold text-gray-600">${_htmlEsc(studentCode)}</span></p>
      </div>
    </div>
  `)
}

function renderLeaveScanNotFoundModal(studentCode) {
  const modal = renderLeaveScanModal(`
    <div class="p-6 text-center space-y-5">
      <div class="mx-auto w-16 h-16 rounded-3xl bg-red-50 flex items-center justify-center text-4xl">🔴</div>
      <div class="space-y-1">
        <h4 class="font-extrabold text-red-700 text-lg">ไม่พบใบอนุญาตออกนอกห้องเรียน</h4>
        <p class="text-xs text-red-500 leading-relaxed">
          นักเรียนรหัส <strong class="font-mono text-sm">${_htmlEsc(studentCode)}</strong> ยังไม่ได้รับการอนุมัติ หรือเดินทางกลับเข้าห้องเรียนแล้ว
        </p>
      </div>
      <button id="btn-leave-scan-next" type="button" class="w-full py-3 rounded-2xl bg-gray-900 hover:bg-gray-950 text-white text-xs font-bold shadow-md transition">
        สแกนใหม่
      </button>
    </div>
  `, { tone: 'red' })
  modal.querySelector('#btn-leave-scan-next')?.addEventListener('click', () => closeLeaveScanModal())
}

function renderLeaveScanErrorModal(message) {
  const modal = renderLeaveScanModal(`
    <div class="p-6 text-center space-y-5">
      <div class="mx-auto w-16 h-16 rounded-3xl bg-red-50 flex items-center justify-center text-4xl">⚠️</div>
      <div class="space-y-1">
        <h4 class="font-extrabold text-red-700 text-lg">ตรวจสอบไม่สำเร็จ</h4>
        <p class="text-xs text-red-500 leading-relaxed">${_htmlEsc(message || 'เกิดข้อผิดพลาดในการดึงข้อมูลใบอนุญาต')}</p>
      </div>
      <button id="btn-leave-scan-next" type="button" class="w-full py-3 rounded-2xl bg-gray-900 hover:bg-gray-950 text-white text-xs font-bold shadow-md transition">
        สแกนใหม่
      </button>
    </div>
  `, { tone: 'red' })
  modal.querySelector('#btn-leave-scan-next')?.addEventListener('click', () => closeLeaveScanModal())
}

function renderLeaveScanSuccessReturnedModal(leave) {
  const modal = renderLeaveScanModal(`
    <div class="p-6 text-center space-y-5">
      <div class="mx-auto w-16 h-16 rounded-3xl bg-emerald-50 flex items-center justify-center text-4xl">🟢</div>
      <div class="space-y-1">
        <h4 class="font-extrabold text-emerald-700 text-lg">บันทึกส่งกลับห้องเรียบร้อย</h4>
        <p class="text-xs text-emerald-600 leading-relaxed">
          ${_htmlEsc(leave.students?.full_name || 'นักเรียน')} ได้กลับเข้าห้องเรียนแล้ว พร้อมสแกนคนถัดไป
        </p>
      </div>
      <button id="btn-leave-scan-next" type="button" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition">
        สแกนคนถัดไป
      </button>
    </div>
  `, { tone: 'emerald' })
  modal.querySelector('#btn-leave-scan-next')?.addEventListener('click', () => closeLeaveScanModal())
}

function renderLeaveScanPermitModal(leave) {
  const start = new Date(leave.created_at)
  const allowedMin = leave.allowed_duration

  if (scannerTimerInterval) clearInterval(scannerTimerInterval)

  const countdownState = () => {
    const countdown = formatLeaveCountdown(leave.created_at, allowedMin, new Date())
    const isOverdue = countdown.isOverdue
    return {
      countdown,
      statusTitle: isOverdue ? '🔴 เกินเวลาอนุญาต' : '🟢 อยู่ในเวลาอนุญาต',
      statusColorCls: isOverdue ? 'bg-red-50 border-red-200 text-red-700' : 'bg-emerald-50 border-emerald-200 text-emerald-700',
      timerCls: isOverdue
        ? `text-red-600 ${countdown.isBeyondLimit ? '' : 'animate-pulse'}`
        : 'text-emerald-600',
      tone: isOverdue ? 'red' : 'emerald'
    }
  }

  const initial = countdownState()
  const modal = renderLeaveScanModal(`
    <div class="p-5 sm:p-6 space-y-5">
      <div class="flex items-start justify-between gap-3 border-b border-gray-100 pb-4">
        <span id="leave-scan-status-badge" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${initial.statusColorCls}">
          ${initial.statusTitle}
        </span>
        <div class="text-right">
          <span id="leave-scan-timer-label" class="text-xs text-gray-400 block">${initial.countdown.label}</span>
          <span id="leave-scan-timer-text" class="text-3xl font-black font-mono ${initial.timerCls}">${initial.countdown.timerText}</span>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="w-20 h-24 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 flex-shrink-0 shadow-sm">
          ${leave.students?.image_url
            ? `<img src="${_htmlEsc(leave.students.image_url)}" class="w-full h-full object-cover" />`
            : `<div class="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">👤</div>`
          }
        </div>
        <div class="min-w-0 flex-1 space-y-1">
          <p class="text-xs text-gray-400">ข้อมูลนักเรียน</p>
          <h4 class="font-extrabold text-gray-800 text-base truncate">${_htmlEsc(leave.students?.full_name || 'ไม่ระบุชื่อ')}</h4>
          <p class="text-xs text-gray-500 font-mono">${_htmlEsc(leave.students?.student_code || '-')}</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 bg-gray-50 rounded-2xl p-4 text-xs">
        <div class="space-y-0.5">
          <span class="text-gray-400 block">ครูผู้อนุมัติ</span>
          <span class="font-bold text-gray-700 block truncate">${_htmlEsc(leave.teachers?.full_name || 'ไม่ระบุ')}</span>
        </div>
        <div class="space-y-0.5">
          <span class="text-gray-400 block">เหตุผล</span>
          <span class="font-bold text-gray-700 block truncate" title="${_htmlEsc(leave.reason)}">${_htmlEsc(leave.reason)}</span>
        </div>
        <div class="space-y-0.5">
          <span class="text-gray-400 block">เริ่มออก</span>
          <span class="font-bold text-gray-700 block">${start.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })} น.</span>
        </div>
        <div class="space-y-0.5">
          <span class="text-gray-400 block">ระยะเวลา</span>
          <span class="font-bold text-gray-700 block">${allowedMin} นาที</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button id="btn-inspector-return" type="button" class="py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition">
          ✅ บันทึกกลับเข้าห้อง
        </button>
        <button id="btn-leave-scan-next" type="button" class="py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs transition">
          สแกนคนถัดไป
        </button>
      </div>
    </div>
  `, { tone: initial.tone })

  const updateTimer = () => {
    const state = countdownState()
    const badge = modal.querySelector('#leave-scan-status-badge')
    const label = modal.querySelector('#leave-scan-timer-label')
    const timer = modal.querySelector('#leave-scan-timer-text')
    if (badge) {
      badge.className = `inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${state.statusColorCls}`
      badge.textContent = state.statusTitle
    }
    if (label) label.textContent = state.countdown.label
    if (timer) {
      timer.className = `text-3xl font-black font-mono ${state.timerCls}`
      timer.textContent = state.countdown.timerText
    }
    if (state.countdown.isBeyondLimit && scannerTimerInterval) {
      clearInterval(scannerTimerInterval)
      scannerTimerInterval = null
    }
  }

  modal.querySelector('#btn-leave-scan-next')?.addEventListener('click', () => closeLeaveScanModal())
  modal.querySelector('#btn-inspector-return')?.addEventListener('click', async e => {
    const btn = e.currentTarget
    if (btn.disabled) return
    btn.disabled = true
    btn.textContent = 'กำลังบันทึก...'
    btn.classList.add('opacity-70', 'cursor-not-allowed')
    try {
      if (scannerTimerInterval) {
        clearInterval(scannerTimerInterval)
        scannerTimerInterval = null
      }
      await closeLeavePermission(leave.id, 'returned')
      showToast('บันทึกการส่งกลับเข้าห้องเรียบร้อย', 'success')
      renderLeaveScanSuccessReturnedModal(leave)
    } catch (err) {
      btn.disabled = false
      btn.textContent = '✅ บันทึกกลับเข้าห้อง'
      btn.classList.remove('opacity-70', 'cursor-not-allowed')
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    }
  })

  updateTimer()
  scannerTimerInterval = setInterval(updateTimer, 1000)
}

export async function renderStudentLeaveScanner(teacher) {
  setActiveNav('student-leave-scanner')
  setTitle('ตรวจสอบใบอนุญาตออกนอกห้อง')
  
  // ล้างทรัพยากรเก่าที่ค้างอยู่ (ถ้ามี)
  cleanupLeaveScanner()
  
  setContent(`
    <div class="max-w-6xl mx-auto space-y-6 animate-fade pb-12">
      <div class="mb-4">
        <h3 class="text-lg font-bold text-gray-800">📋 ตรวจสอบใบอนุญาตออกนอกห้อง</h3>
        <p class="text-xs text-gray-400 mt-0.5">ใช้กล้องสแกน QR Code บนบัตรนักเรียนเพื่อเช็คสถานะการขอออกนอกห้องเรียนและความถูกต้องของเวลา</p>
      </div>

      <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-100 p-1 border border-gray-200">
        <button id="leave-view-scan-tab" type="button"
          class="px-4 py-2 rounded-xl bg-white text-indigo-700 shadow-sm text-xs font-bold transition flex items-center gap-1.5">
          ${CAMERA_ICON_SM}
          <span>สแกนใบอนุญาต</span>
        </button>
        <button id="leave-view-monitor-tab" type="button"
          class="px-4 py-2 rounded-xl text-gray-500 hover:text-gray-700 text-xs font-bold transition">
          📊 ติดตามข้อมูล
        </button>
      </div>

      <div id="leave-scanner-panel" class="max-w-xl mx-auto space-y-6">
        <!-- สแกนเนอร์กล้อง & ค้นหาด้วยรหัส -->
        <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <label class="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
            ${CAMERA_ICON_SM}
            <span>กล้องอ่าน QR Code</span>
          </label>
          <div class="flex items-center gap-2">
            <button id="btn-toggle-scanner" class="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5">
              ${CAMERA_ICON_SM}
              <span>เปิดกล้อง</span>
            </button>
          </div>
        </div>

        <!-- กล่องแสดงภาพกล้อง -->
        <div class="relative aspect-square bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 max-w-sm mx-auto flex items-center justify-center shadow-inner">
          <div id="leave-camera-reader" class="w-full h-full rounded-2xl overflow-hidden"></div>
          
          <!-- Custom Square Viewfinder Overlay -->
          <div id="scanner-viewfinder" class="hidden absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
            <!-- Dark semi-transparent background -->
            <div class="absolute inset-0 bg-black/35"></div>
            <!-- Viewfinder Frame -->
            <div class="relative w-48 h-48 rounded-3xl border-2 border-white/20 bg-transparent shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden">
              <!-- Neon Corner Brackets -->
              <div class="absolute top-0 left-0 w-5 h-5 border-t-[3px] border-l-[3px] border-indigo-400 rounded-tl-md"></div>
              <div class="absolute top-0 right-0 w-5 h-5 border-t-[3px] border-r-[3px] border-indigo-400 rounded-tr-md"></div>
              <div class="absolute bottom-0 left-0 w-5 h-5 border-b-[3px] border-l-[3px] border-indigo-400 rounded-bl-md"></div>
              <div class="absolute bottom-0 right-0 w-5 h-5 border-b-[3px] border-r-[3px] border-indigo-400 rounded-br-md"></div>
              <!-- Laser Sweeper Line -->
              <div class="w-full h-[2px] bg-indigo-400 opacity-90 absolute top-0 shadow-[0_0_8px_rgba(129,140,248,0.85)] animate-laser-move"></div>
            </div>
          </div>

          <div id="scanner-overlay" class="absolute inset-0 pointer-events-none flex items-center justify-center">
            <p id="scanner-placeholder-text" class="text-xs text-gray-400 text-center px-6">กดปุ่ม "เปิดกล้อง" หรือป้อนรหัสประจำตัวด้านล่างเพื่อตรวจสอบ</p>
          </div>
        </div>

        <style>
          @keyframes laser-sweep {
            0% { top: 0%; opacity: 0.3; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0.3; }
          }
          .animate-laser-move {
            animation: laser-sweep 2.8s infinite ease-in-out;
          }
        </style>

        <!-- ค้นหาแบบแมนนวล (ป้อนรหัส) -->
        <div class="pt-2 border-t border-gray-100 flex gap-2">
          <input type="text" id="input-search-student-code" class="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-500" placeholder="ป้อนรหัสประจำตัวนักเรียน..." />
          <button id="btn-search-leave-code" class="px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-900 text-white font-bold text-xs shadow-md transition-all">
            🔍 ตรวจสอบ
          </button>
        </div>
      </div>

      <!-- พื้นที่แสดงผลลัพธ์การตรวจสอบ -->
      <div id="leave-scan-result" class="hidden">
        <!-- จัดการแสดงผลด้วย _renderScanResult -->
      </div>
      </div>

      <div id="leave-monitor-panel" class="hidden">
        <div id="leave-monitor-widget"></div>
      </div>
    </div>
  `)

  // ผูก Event
  const searchInput = document.getElementById('input-search-student-code')
  const searchBtn = document.getElementById('btn-search-leave-code')
  const toggleScannerBtn = document.getElementById('btn-toggle-scanner')
  const placeholderText = document.getElementById('scanner-placeholder-text')
  const scanTab = document.getElementById('leave-view-scan-tab')
  const monitorTab = document.getElementById('leave-view-monitor-tab')
  const scannerPanel = document.getElementById('leave-scanner-panel')
  const monitorPanel = document.getElementById('leave-monitor-panel')
  const monitorWidget = document.getElementById('leave-monitor-widget')

  searchBtn.addEventListener('click', () => {
    const code = searchInput.value.trim()
    if (!code) {
      showToast('กรุณากรอกรหัสนักเรียน', 'warning')
      return
    }
    processLeaveCheck(code)
  })

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const code = searchInput.value.trim()
      if (code) processLeaveCheck(code)
    }
  })

  let isScanning = false
  const setMode = async (mode) => {
    const isMonitor = mode === 'monitor'
    scanTab.className = isMonitor
      ? 'px-4 py-2 rounded-xl text-gray-500 hover:text-gray-700 text-xs font-bold transition'
      : 'px-4 py-2 rounded-xl bg-white text-indigo-700 shadow-sm text-xs font-bold transition'
    monitorTab.className = isMonitor
      ? 'px-4 py-2 rounded-xl bg-white text-indigo-700 shadow-sm text-xs font-bold transition'
      : 'px-4 py-2 rounded-xl text-gray-500 hover:text-gray-700 text-xs font-bold transition'
    scannerPanel.classList.toggle('hidden', isMonitor)
    monitorPanel.classList.toggle('hidden', !isMonitor)
    if (isMonitor) {
      if (isScanning) stopScanner()
      await renderLeaveMonitorWidget(monitorWidget, {
        title: '🚪 ติดตามใบอนุญาตออกนอกห้อง',
        subtitle: 'รายการที่ฉันเป็นผู้อนุญาต พร้อมแดชบอร์ดแนวโน้ม',
        teacherId: teacher.id,
        analyticsDays: 14,
        externalUrl: 'public-monitor.html'
      })
    }
  }
  scanTab.addEventListener('click', () => setMode('scan'))
  monitorTab.addEventListener('click', () => setMode('monitor'))

  toggleScannerBtn.addEventListener('click', async () => {
    if (isScanning) {
      stopScanner()
    } else {
      await startScanner()
    }
  })

  // เริ่มต้นสร้าง Scanner
  async function startScanner() {
    try {
      placeholderText.textContent = 'กำลังเตรียมกล้อง...'
      const Html5Qrcode = await loadHtml5QrcodeLib()
      html5QrcodeScanner = new Html5Qrcode('leave-camera-reader')
      
      const viewfinder = document.getElementById('scanner-viewfinder')
      
      await html5QrcodeScanner.start(
        { facingMode: "environment" },
        {
          fps: 25,
          aspectRatio: 1.0
        },
        (decodedText) => {
          // สแกนสำเร็จ
          processLeaveCheck(decodedText)
        },
        () => {} // Ignored errors
      )

      isScanning = true
      toggleScannerBtn.innerHTML = `${CAMERA_ICON_SM}<span>ปิดกล้อง</span>`
      toggleScannerBtn.className = 'px-3.5 py-2 bg-red-500 hover:bg-red-600 active:scale-[0.98] text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5'
      placeholderText.classList.add('hidden')
      if (viewfinder) viewfinder.classList.remove('hidden')
    } catch (err) {
      console.error(err)
      showToast('ไม่สามารถเปิดใช้งานกล้องได้: ' + (err.message ?? ''), 'error')
      placeholderText.textContent = 'ไม่สามารถเปิดกล้องได้: ' + (err.message ?? '')
    }
  }

  function stopScanner() {
    if (html5QrcodeScanner) {
      html5QrcodeScanner.stop().then(() => {
        isScanning = false
        toggleScannerBtn.innerHTML = `${CAMERA_ICON_SM}<span>เปิดกล้อง</span>`
        toggleScannerBtn.className = 'px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5'
        placeholderText.textContent = 'กล้องถูกปิดใช้งานแล้ว'
        placeholderText.classList.remove('hidden')
        const viewfinder = document.getElementById('scanner-viewfinder')
        if (viewfinder) viewfinder.classList.add('hidden')
        html5QrcodeScanner = null
      }).catch(err => {
        console.warn('Stop scanner error:', err)
      })
    }
  }
}

// โหลดฐานข้อมูลสแกนเนอร์
async function loadHtml5QrcodeLib() {
  if (window.Html5Qrcode) return window.Html5Qrcode
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'
    s.onload = () => resolve(window.Html5Qrcode)
    s.onerror = () => reject(new Error('ดาวน์โหลดตัวอ่านสแกนเนอร์ไม่สำเร็จ'))
    document.head.appendChild(s)
  })
}

// ฟังก์ชันดึงและประมวลผลการเช็คใบอนุญาต
async function processLeaveCheck(studentCode) {
  const resultDiv = document.getElementById('leave-scan-result')
  if (!resultDiv) return
  if (isProcessingLeaveCheck) return

  isProcessingLeaveCheck = true
  pauseLeaveScannerForModal()
  resultDiv.classList.add('hidden')
  resultDiv.innerHTML = ''
  renderLeaveScanLoadingModal(studentCode)

  try {
    const leave = await getActiveLeavePermission(studentCode)
    
    // ถ้าไม่พบประวัติใบอนุญาตที่กำลังทำงานอยู่
    if (!leave) {
      playFailureBeep()
      renderLeaveScanNotFoundModal(studentCode)
      return
    }

    // สังเคราะห์เสียงความสำเร็จ
    playSuccessBeep()
    renderLeaveScanPermitModal(leave)

  } catch (err) {
    console.error(err)
    playFailureBeep()
    renderLeaveScanErrorModal(err.message || 'เกิดข้อผิดพลาดในการดึงข้อมูลใบอนุญาต')
  }
}

// ล้างการทำงานกล้องและเวลาเมื่อครูเปลี่ยนหน้าจอ
export function cleanupLeaveScanner() {
  document.getElementById('leave-scan-modal')?.remove()
  isProcessingLeaveCheck = false

  if (scannerTimerInterval) {
    clearInterval(scannerTimerInterval)
    scannerTimerInterval = null
  }
  
  if (html5QrcodeScanner) {
    html5QrcodeScanner.stop().catch(() => {})
    html5QrcodeScanner = null
  }
}

// ผูกฟังก์ชันล้างค่ากับหน้าจอภายนอก
window.addEventListener('hashchange', cleanupLeaveScanner)
window._cleanupLeaveScanner = cleanupLeaveScanner
