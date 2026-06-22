import { getActiveLeavePermission, closeLeavePermission } from './api.js'
import { showToast, showDangerConfirm } from './ui.js'
import { setContent, setTitle, setActiveNav, _htmlEsc } from './teacher-views-utils.js'

let html5QrcodeScanner = null
let scannerTimerInterval = null

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

export async function renderStudentLeaveScanner(teacher) {
  setActiveNav('student-leave-scanner')
  setTitle('ตรวจสอบใบอนุญาตออกนอกห้อง')
  
  // ล้างทรัพยากรเก่าที่ค้างอยู่ (ถ้ามี)
  cleanupLeaveScanner()
  
  setContent(`
    <div class="max-w-xl mx-auto space-y-6 animate-fade pb-12">
      <div class="mb-4">
        <h3 class="text-lg font-bold text-gray-800">📋 ตรวจสอบใบอนุญาตออกนอกห้อง</h3>
        <p class="text-xs text-gray-400 mt-0.5">ใช้กล้องสแกน QR Code บนบัตรนักเรียนเพื่อเช็คสถานะการขอออกนอกห้องเรียนและความถูกต้องของเวลา</p>
      </div>

      <!-- สแกนเนอร์กล้อง & ค้นหาด้วยรหัส -->
      <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">📷 กล้องอ่าน QR Code</label>
          <div class="flex items-center gap-2">
            <select id="leave-camera-select" class="hidden border border-gray-300 rounded-xl px-2 py-1 text-xs bg-white focus:outline-none focus:border-indigo-500"></select>
            <button id="btn-toggle-scanner" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs shadow-md transition-all">
              เริ่มใช้งานกล้อง
            </button>
          </div>
        </div>

        <!-- กล่องแสดงภาพกล้อง -->
        <div class="relative aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center">
          <div id="leave-camera-reader" class="w-full h-full"></div>
          <div id="scanner-overlay" class="absolute inset-0 border-2 border-dashed border-indigo-400/40 rounded-2xl pointer-events-none flex items-center justify-center">
            <p id="scanner-placeholder-text" class="text-xs text-gray-400 text-center px-6">กดปุ่ม "เริ่มใช้งานกล้อง" หรือป้อนรหัสประจำตัวด้านล่างเพื่อตรวจสอบ</p>
          </div>
        </div>

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
  `)

  // ผูก Event
  const searchInput = document.getElementById('input-search-student-code')
  const searchBtn = document.getElementById('btn-search-leave-code')
  const toggleScannerBtn = document.getElementById('btn-toggle-scanner')
  const cameraSelect = document.getElementById('leave-camera-select')
  const placeholderText = document.getElementById('scanner-placeholder-text')

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
      
      const devices = await Html5Qrcode.getCameras().catch(() => [])
      if (devices.length === 0) {
        showToast('ไม่พบกล้องในอุปกรณ์นี้', 'error')
        placeholderText.textContent = 'ไม่พบกล้องในอุปกรณ์นี้'
        return
      }

      cameraSelect.innerHTML = devices.map(d => `<option value="${d.id}">${d.label || 'กล้อง'}</option>`).join('')
      if (devices.length > 1) {
        cameraSelect.classList.remove('hidden')
      }

      const activeCameraId = devices[0].id
      
      await html5QrcodeScanner.start(
        activeCameraId,
        {
          fps: 10,
          qrbox: (width, height) => {
            const size = Math.min(width, height) * 0.7
            return { width: size, height: size }
          }
        },
        (decodedText) => {
          // สแกนสำเร็จ
          processLeaveCheck(decodedText)
        },
        () => {} // Ignored errors
      )

      isScanning = true
      toggleScannerBtn.textContent = '⚙️ ปิดกล้อง'
      toggleScannerBtn.className = 'px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-xs shadow-md transition-all'
      placeholderText.classList.add('hidden')
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
        toggleScannerBtn.textContent = 'เริ่มใช้งานกล้อง'
        toggleScannerBtn.className = 'px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs shadow-md transition-all'
        placeholderText.textContent = 'กล้องถูกปิดใช้งานแล้ว'
        placeholderText.classList.remove('hidden')
        cameraSelect.classList.add('hidden')
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
  
  resultDiv.classList.remove('hidden')
  resultDiv.innerHTML = `
    <div class="flex justify-center py-6 text-gray-400 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
      <svg class="animate-spin h-5 w-5 text-indigo-400 mr-2" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังตรวจสอบใบอนุญาต...
    </div>
  `

  try {
    const leave = await getActiveLeavePermission(studentCode)
    
    // ถ้าไม่พบประวัติใบอนุญาตที่กำลังทำงานอยู่
    if (!leave) {
      playFailureBeep()
      resultDiv.innerHTML = `
        <div class="bg-red-50 border border-red-200 rounded-3xl p-6 shadow-sm text-center space-y-4 animate-fade">
          <div class="text-5xl">🔴</div>
          <div class="space-y-1">
            <h4 class="font-extrabold text-red-700 text-lg">ไม่พบใบอนุญาตออกนอกห้องเรียน</h4>
            <p class="text-xs text-red-500">นักเรียนรหัส <strong class="font-mono text-sm">${_htmlEsc(studentCode)}</strong> ยังไม่ได้รับการอนุมัติ หรือ เดินทางกลับเข้าห้องเรียนแล้ว</p>
          </div>
        </div>
      `
      return
    }

    // สังเคราะห์เสียงความสำเร็จ
    playSuccessBeep()
    
    // อัปเดตการแสดงผลใบอนุญาต
    const start = new Date(leave.created_at)
    const allowedMin = leave.allowed_duration
    const expiry = new Date(start.getTime() + allowedMin * 60 * 1000)
    
    // เคลียร์ Timer เก่าก่อนเริ่มใหม่
    if (scannerTimerInterval) clearInterval(scannerTimerInterval)

    const renderCard = () => {
      const now = new Date()
      const diffMs = expiry.getTime() - now.getTime()
      const isOverdue = diffMs < 0
      const absDiff = Math.abs(diffMs)
      
      const mins = Math.floor(absDiff / (60 * 1000))
      const secs = Math.floor((absDiff % (60 * 1000)) / 1000)
      const timeText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
      
      const statusTitle = isOverdue ? '🔴 เกินเวลาอนุญาต' : '🟢 อยู่ในเวลาอนุญาต'
      const statusColorCls = isOverdue ? 'bg-red-50 border-red-200 text-red-700' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
      const timerCls = isOverdue ? 'text-red-600 animate-pulse' : 'text-emerald-600'
      const labelText = isOverdue ? 'เลยเวลา:' : 'เวลาที่เหลือ:'

      resultDiv.innerHTML = `
        <div class="border rounded-3xl p-6 shadow-sm space-y-5 bg-white border-gray-200 animate-fade">
          
          <!-- แถบสถานะใบอนุญาตและเลขนับถอยหลังเป็นวินาที -->
          <div class="flex items-center justify-between border-b pb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${statusColorCls}">
              ${statusTitle}
            </span>
            <div class="text-right">
              <span class="text-xs text-gray-400 block">${labelText}</span>
              <span class="text-2xl font-black font-mono ${timerCls}">${isOverdue ? '-' : ''}${timeText}</span>
            </div>
          </div>

          <!-- ข้อมูลนักเรียน -->
          <div class="flex gap-4">
            <div class="w-16 h-20 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 flex-shrink-0">
              ${leave.students?.image_url 
                ? `<img src="${_htmlEsc(leave.students.image_url)}" class="w-full h-full object-cover" />` 
                : `<div class="w-full h-full flex items-center justify-center text-xl font-bold text-gray-400">👤</div>`
              }
            </div>
            <div class="min-w-0 flex-1 space-y-1">
              <p class="text-xs text-gray-400">ชื่อนักเรียน</p>
              <h4 class="font-extrabold text-gray-800 text-sm truncate">${_htmlEsc(leave.students?.full_name || 'ไม่ระบุชื่อ')}</h4>
              <p class="text-xs text-gray-500 font-mono">รหัสประจำตัว: ${_htmlEsc(leave.students?.student_code || '-')}</p>
            </div>
          </div>

          <!-- รายละเอียดการอนุญาต -->
          <div class="grid grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-4 text-xs">
            <div class="space-y-0.5">
              <span class="text-gray-400 block">ครูผู้อนุมัติ</span>
              <span class="font-bold text-gray-700 block truncate">${_htmlEsc(leave.teachers?.full_name || 'ไม่ระบุ')}</span>
            </div>
            <div class="space-y-0.5">
              <span class="text-gray-400 block">เหตุผลการขอ</span>
              <span class="font-bold text-gray-700 block truncate" title="${_htmlEsc(leave.reason)}">${_htmlEsc(leave.reason)}</span>
            </div>
            <div class="space-y-0.5">
              <span class="text-gray-400 block">เวลาที่เริ่มออก</span>
              <span class="font-bold text-gray-700 block">${start.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })} น.</span>
            </div>
            <div class="space-y-0.5">
              <span class="text-gray-400 block">ระยะเวลาที่อนุญาต</span>
              <span class="font-bold text-gray-700 block">${allowedMin} นาที</span>
            </div>
          </div>

          <!-- ปุ่มส่งนักเรียนกลับเข้าห้อง -->
          <button id="btn-inspector-return" class="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-2xl shadow-md transition-all flex items-center justify-center gap-1.5">
            ✅ บันทึกส่งกลับเข้าห้องเรียน
          </button>
        </div>
      `

      // ผูก Event ปุ่มส่งกลับห้อง
      const returnBtn = document.getElementById('btn-inspector-return')
      if (returnBtn) {
        returnBtn.addEventListener('click', async () => {
          const confirmed = await showDangerConfirm({
            title: 'ส่งนักเรียนกลับเข้าห้อง?',
            message: `ยืนยันว่านักเรียน "${leave.students?.full_name}" เดินทางกลับถึงห้องเรียนเพื่อเข้าเรียนต่อตามปกติแล้ว`,
            confirmText: 'ส่งนักเรียนกลับเข้าห้อง',
          })
          if (!confirmed) return
          
          try {
            if (scannerTimerInterval) clearInterval(scannerTimerInterval)
            await closeLeavePermission(leave.id, 'returned')
            showToast('บันทึกการส่งกลับเข้าห้องเรียบร้อย', 'success')
            resultDiv.innerHTML = `
              <div class="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 shadow-sm text-center space-y-4 animate-fade">
                <div class="text-5xl">🟢</div>
                <div class="space-y-1">
                  <h4 class="font-extrabold text-emerald-700 text-lg">บันทึกส่งกลับห้องเรียบร้อย</h4>
                  <p class="text-xs text-emerald-600">นักเรียนได้กลับเข้าห้องเรียนเรียบร้อยแล้วพร้อมเริ่มสแกนคนถัดไป</p>
                </div>
              </div>
            `
          } catch (err) {
            showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
          }
        })
      }
    }

    // วนลูปวาดการ์ดเวลานับถอยหลังทุก 1 วินาที
    renderCard()
    scannerTimerInterval = setInterval(renderCard, 1000)

  } catch (err) {
    console.error(err)
    resultDiv.innerHTML = `<div class="p-6 text-red-500 text-sm text-center bg-white border border-gray-200 rounded-3xl">เกิดข้อผิดพลาดในการดึงข้อมูลใบอนุญาต</div>`
  }
}

// ล้างการทำงานกล้องและเวลาเมื่อครูเปลี่ยนหน้าจอ
export function cleanupLeaveScanner() {
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
