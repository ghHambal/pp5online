import { supabase } from './supabase.js'

// ─── State Management ────────────────────────────────────────────────────────
let studentCache = new Map() // student_id -> student object
let recentRecords = []       // array of recent record objects today

function getLocalDateString(d = new Date()) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
let todayStr = getLocalDateString()

// DOM Elements
const flashOverlay = document.getElementById('flash-overlay')
const standbyView = document.getElementById('standby-view')
const activeCard = document.getElementById('active-card')
const studentPhoto = document.getElementById('student-photo')
const studentFallback = document.getElementById('student-fallback')
const studentName = document.getElementById('student-name')
const studentCodeRoom = document.getElementById('student-code-room')
const studentTime = document.getElementById('student-time')
const studentLocation = document.getElementById('student-location')
const historyTableBody = document.getElementById('history-table-body')
const historyCount = document.getElementById('history-count')
const roomFilter = document.getElementById('room-filter')
const locationFilter = document.getElementById('location-filter')
const connectionStatus = document.getElementById('connection-status')
const connectionText = document.getElementById('connection-text')

// ─── Sound System (Web Audio API) ──────────────────────────────────────────
function playBeep() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);

    setTimeout(() => {
      const audioCtx2 = new (window.AudioContext || window.webkitAudioContext)();
      const osc2 = audioCtx2.createOscillator();
      const gain2 = audioCtx2.createGain();
      osc2.connect(gain2);
      gain2.connect(audioCtx2.destination);
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1109.73, audioCtx2.currentTime); // C#6
      gain2.gain.setValueAtTime(0.08, audioCtx2.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx2.currentTime + 0.2);
      osc2.start();
      osc2.stop(audioCtx2.currentTime + 0.2);
    }, 80);
  } catch (e) {
    console.error('Audio beep failed', e);
  }
}

// ─── Setup & Initialization ──────────────────────────────────────────────────
async function init() {
  setConnectionState('connecting', 'กำลังโหลดข้อมูลนักเรียน...');
  
  try {
    // 1. Fetch Student Roster to populate cache for instant lookups
    const { data: students, error } = await supabase
      .from('students')
      .select('id, student_code, full_name, main_room, image_url, gender')
      .eq('is_active', true)
    
    if (error) throw error
    
    students.forEach(s => {
      studentCache.set(s.id, s)
    })
    
    console.log(`Loaded ${studentCache.size} students into cache.`);
    setConnectionState('connected', 'เชื่อมต่อระบบแล้ว');
    
    // 2. Fetch recent check-ins for today to populate table
    await fetchTodayRecords()
    
    // 3. Subscribe to Realtime inserts on prayer_records
    setupRealtimeSubscription()

    // 4. Start backup polling loop (runs every 4 seconds)
    startPollingLoop()

  } catch (err) {
    console.error('Initialization failed:', err)
    setConnectionState('error', 'ข้อผิดพลาด: ' + (err.message || 'ไม่ทราบสาเหตุ'));
  }
}

// ─── Connection UI States ────────────────────────────────────────────────────
function setConnectionState(state, text) {
  if (!connectionText || !connectionStatus) return
  connectionText.textContent = text
  const indicator = connectionStatus.querySelector('span:first-child')
  
  connectionStatus.className = 'flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border font-medium transition-all duration-300'
  
  if (state === 'connected') {
    connectionStatus.classList.add('bg-emerald-50', 'border-emerald-200', 'text-emerald-700')
    if (indicator) indicator.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse'
  } else if (state === 'connecting') {
    connectionStatus.classList.add('bg-amber-50', 'border-amber-200', 'text-amber-700')
    if (indicator) indicator.className = 'w-2 h-2 rounded-full bg-amber-500 animate-bounce'
  } else {
    connectionStatus.classList.add('bg-red-50', 'border-red-200', 'text-red-700')
    if (indicator) indicator.className = 'w-2 h-2 rounded-full bg-red-500'
  }
}

// ─── Realtime Engine ──────────────────────────────────────────────────────────
function setupRealtimeSubscription() {
  const channel = supabase.channel('prayer-realtime-monitor')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'prayer_records'
    }, (payload) => {
      if (payload.eventType === 'INSERT') {
        const record = payload.new
        // Double check it's for today
        if (record.check_date === todayStr) {
          handleNewCheckIn(record)
        }
      } else if (payload.eventType === 'DELETE' || payload.eventType === 'UPDATE') {
        // Trigger silent fetch to sync state immediately when a record is deleted or updated
        fetchTodayRecords(true)
      }
    })

  channel.subscribe((status) => {
    if (status === 'SUBSCRIBED') {
      setConnectionState('connected', 'เชื่อมต่อระบบ Real-time แล้ว');
    } else if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
      setConnectionState('connecting', 'กำลังเชื่อมต่อใหม่ (ใช้ระบบสำรอง)...');
    }
  })
}

// ─── Backup Polling Engine ───────────────────────────────────────────────────
function startPollingLoop() {
  setInterval(async () => {
    try {
      await fetchTodayRecords(true) // silent update check
    } catch (err) {
      console.warn('Silent polling failed:', err)
    }
  }, 1500)
}

// ─── Fetch and Sync Records ──────────────────────────────────────────────────
async function fetchTodayRecords(isSilent = false) {
  try {
    const { data, error } = await supabase
      .from('prayer_records')
      .select('id, student_id, main_room, status, check_date, location, created_at')
      .eq('check_date', todayStr)
      .not('location', 'is', null) // โชว์เฉพาะข้อมูลที่สแกนเท่านั้น (มีพิกัดจุดสแกน)
      .order('id', { ascending: false })
      .limit(50)

    if (error) throw error

    if (!data || data.length === 0) {
      recentRecords = []
      renderRecentList()
      return
    }

    // Find any records that we haven't processed yet
    const currentMaxId = recentRecords.length > 0 ? Math.max(...recentRecords.map(r => r.id)) : 0
    const newRecords = data.filter(r => r.id > currentMaxId).reverse() // oldest to newest of the new batch

    if (newRecords.length > 0) {
      // Process new records sequentially with visual/sound feedback
      newRecords.forEach((r, index) => {
        setTimeout(() => {
          handleNewCheckIn(r, true)
        }, index * 600)
      })
      
      // Final full sync to guarantee state matches database exactly
      setTimeout(() => {
        recentRecords = data
        renderRecentList()
      }, newRecords.length * 600)
    } else {
      // Just update and render in place if no new records
      recentRecords = data
      renderRecentList()
    }
  } catch (err) {
    if (!isSilent) throw err
  }
}

// ─── Location Checking Helper ────────────────────────────────────────────────
function isRecordInLocation(record, student, selectedLocation) {
  if (!selectedLocation) return true
  return record.location === selectedLocation
}

// ─── Location Formatting Helpers ─────────────────────────────────────────────
function getLocationLabel(loc) {
  const mapping = {
    'musolla_male': 'มูซอลลาชาย',
    'masjid_kuwait': 'มัสยิดคูเวต',
    'musolla_female_1': 'มูซอลลาหญิง 1',
    'musolla_female_2': 'มูซอลลาหญิง 2'
  }
  return mapping[loc] || 'ไม่ระบุพื้นที่'
}

function getLocationBadgeClass(loc) {
  const mapping = {
    'musolla_male': 'bg-blue-50 text-blue-700 border-blue-200',
    'masjid_kuwait': 'bg-purple-50 text-purple-700 border-purple-200',
    'musolla_female_1': 'bg-pink-50 text-pink-700 border-pink-200',
    'musolla_female_2': 'bg-amber-50 text-amber-700 border-amber-200'
  }
  return mapping[loc] || 'bg-slate-100 text-slate-600 border-slate-200'
}

// ─── Process Check-in Event ──────────────────────────────────────────────────
function handleNewCheckIn(record, triggerFeedback = true) {
  // กรองเฉพาะข้อมูลที่สแกนเท่านั้น (ต้องมีข้อมูล location)
  if (!record.location) {
    return
  }

  // Prevent duplicate rendering if already in list
  if (recentRecords.some(r => r.id === record.id) && triggerFeedback) {
    return
  }

  // Look up student info from cache
  const student = studentCache.get(record.student_id)
  if (!student) {
    console.warn(`Student ID ${record.student_id} not found in cache.`)
    return
  }

  // Apply location filter
  const selectedLocation = locationFilter.value
  if (!isRecordInLocation(record, student, selectedLocation)) {
    return
  }

  // Apply room filter (if specified)
  const selectedFilter = roomFilter.value
  if (selectedFilter) {
    const studentRoom = student.main_room || ''
    if (!studentRoom.startsWith(selectedFilter)) {
      return
    }
  }

  if (triggerFeedback) {
    recentRecords.unshift(record)
    if (recentRecords.length > 50) recentRecords.pop()
    
    // Play sound and visual alert
    playBeep()
    triggerFlashEffect()
  }

  renderRecentList()
}

// ─── Trigger Green Flash Screen Overlay ──────────────────────────────────────
function triggerFlashEffect() {
  if (!flashOverlay) return
  flashOverlay.className = 'absolute inset-0 pointer-events-none z-50'
  void flashOverlay.offsetWidth // force reflow
  flashOverlay.className = 'absolute inset-0 pointer-events-none z-50 flash-effect'
}

// ─── Display Student Success Info ───────────────────────────────────────
function displayStudentCheckIn(student, record) {
  // Update active card photo
  if (student.image_url) {
    studentPhoto.src = student.image_url
    studentPhoto.classList.remove('hidden')
    studentFallback.classList.add('hidden')
  } else {
    studentPhoto.classList.add('hidden')
    studentFallback.classList.remove('hidden')
    studentFallback.textContent = (student.full_name || 'น').charAt(0)
  }

  // Update details
  studentName.textContent = student.full_name
  studentCodeRoom.textContent = `รหัส ${student.student_code} · ห้อง ${student.main_room || '—'}`

  // Format Scan Time
  let timeStr = '—'
  if (record.created_at) {
    try {
      const dateObj = new Date(record.created_at)
      timeStr = dateObj.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' น.'
    } catch (e) {
      console.error(e)
    }
  } else {
    timeStr = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' น.'
  }
  if (studentTime) {
    studentTime.textContent = timeStr
  }

  // Location details
  if (studentLocation) {
    const locLabel = getLocationLabel(record.location)
    studentLocation.textContent = locLabel
    studentLocation.className = `px-3 py-1 rounded-full text-xs font-bold border ${getLocationBadgeClass(record.location)}`
  }

  // Unhide card and hide standby
  standbyView.classList.add('hidden')
  activeCard.classList.remove('hidden')
}

// ─── Render Screen Layout & History Table ─────────────────────────────────────
function renderRecentList() {
  const selectedLocation = locationFilter.value
  const selectedRoomGroup = roomFilter.value

  const filteredItems = recentRecords.filter(rec => {
    const student = studentCache.get(rec.student_id)
    if (!student) return false

    // Location check
    if (!isRecordInLocation(rec, student, selectedLocation)) {
      return false
    }

    // Room check
    if (selectedRoomGroup) {
      const studentRoom = student.main_room || ''
      if (!studentRoom.startsWith(selectedRoomGroup)) {
        return false
      }
    }

    return true
  })

  // Display Total Count
  if (historyCount) {
    historyCount.textContent = filteredItems.length
  }

  if (filteredItems.length === 0) {
    // Show standby and hide active card
    standbyView.classList.remove('hidden')
    activeCard.classList.add('hidden')
    
    // Clear history table
    if (historyTableBody) {
      historyTableBody.innerHTML = `
        <tr>
          <td colspan="5" class="text-center text-slate-400 py-12 text-sm leading-relaxed">
            กำลังรอข้อมูลการสแกน...
          </td>
        </tr>
      `
    }
    return
  }

  // 1. Show the latest check-in prominently in the active card
  const latestRecord = filteredItems[0]
  const latestStudent = studentCache.get(latestRecord.student_id)
  if (latestStudent) {
    displayStudentCheckIn(latestStudent, latestRecord)
  }

  // 2. Render all previous items in the table below (skip the first one which is in the active card)
  const historyItems = filteredItems.slice(1)
  
  if (historyTableBody) {
    historyTableBody.innerHTML = ''
    if (historyItems.length === 0) {
      historyTableBody.innerHTML = `
        <tr>
          <td colspan="5" class="text-center text-slate-400 py-8 text-xs">
            ไม่มีรายการสแกนก่อนหน้าของวันนี้
          </td>
        </tr>
      `
    } else {
      historyItems.forEach((rec, idx) => {
        const student = studentCache.get(rec.student_id)
        if (!student) return

        const row = document.createElement('tr')
        row.className = 'border-b border-slate-100 hover:bg-slate-50 transition-colors text-sm text-slate-700'
        
        let timeStr = '—'
        if (rec.created_at) {
          try {
            const dateObj = new Date(rec.created_at)
            timeStr = dateObj.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          } catch (e) {
            console.error(e)
          }
        } else {
          timeStr = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        }

        const photoHTML = student.image_url
          ? `<img src="${student.image_url}" class="w-8 h-8 rounded-full object-cover object-top border border-slate-100 shadow-sm" />`
          : `<div class="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center">${student.full_name.charAt(0)}</div>`

        const locationLabel = getLocationLabel(rec.location)
        const locationBadgeColor = getLocationBadgeClass(rec.location)

        // Calculate sequence number (filteredItems.length - 1 - idx)
        const seqNum = filteredItems.length - 1 - idx

        row.innerHTML = `
          <td class="px-4 py-3 text-slate-400 text-xs font-mono font-bold text-center">${seqNum}</td>
          <td class="px-4 py-3 font-mono font-bold text-slate-500">${timeStr}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-3">
              ${photoHTML}
              <span class="font-bold text-slate-800">${student.full_name}</span>
            </div>
          </td>
          <td class="px-4 py-3 font-bold text-slate-500">ห้อง ${student.main_room || '—'}</td>
          <td class="px-4 py-3">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${locationBadgeColor}">
              ${locationLabel}
            </span>
          </td>
        `
        historyTableBody.appendChild(row)
      })
    }
  }
}

// Bind room filter event to automatically refresh views
roomFilter.addEventListener('change', () => {
  renderRecentList()
})

// Bind location filter event to automatically refresh views
locationFilter.addEventListener('change', () => {
  renderRecentList()
})

// Initialize Page
init()
