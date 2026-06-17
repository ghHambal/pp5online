import { supabase } from './supabase.js'

// ─── State Management ────────────────────────────────────────────────────────
let studentCache = new Map() // student_id -> student object
let recentRecords = []       // array of recent record objects
let displayTimeout = null
let todayStr = new Date().toISOString().slice(0, 10)

// DOM Elements
const flashOverlay = document.getElementById('flash-overlay')
const standbyView = document.getElementById('standby-view')
const activeCard = document.getElementById('active-card')
const studentPhoto = document.getElementById('student-photo')
const studentFallback = document.getElementById('student-fallback')
const studentName = document.getElementById('student-name')
const studentCodeRoom = document.getElementById('student-code-room')
const recentList = document.getElementById('recent-list')
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
    
    // Play a dual-tone friendly chime for check-in success
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);

    // Play second tone shortly after
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
    
    // 2. Fetch recent check-ins for today to populate the footer
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
  connectionText.textContent = text
  const indicator = connectionStatus.querySelector('span:first-child')
  
  connectionStatus.className = 'flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border font-medium transition-all duration-300'
  
  if (state === 'connected') {
    connectionStatus.classList.add('bg-emerald-950/40', 'border-emerald-800/80', 'text-emerald-400')
    indicator.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse'
  } else if (state === 'connecting') {
    connectionStatus.classList.add('bg-amber-950/40', 'border-amber-800/80', 'text-amber-400')
    indicator.className = 'w-2 h-2 rounded-full bg-amber-500 animate-bounce'
  } else {
    connectionStatus.classList.add('bg-red-950/40', 'border-red-800/80', 'text-red-400')
    indicator.className = 'w-2 h-2 rounded-full bg-red-500'
  }
}

// ─── Realtime Engine ──────────────────────────────────────────────────────────
function setupRealtimeSubscription() {
  const channel = supabase.channel('prayer-realtime-monitor')
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'prayer_records'
    }, (payload) => {
      const record = payload.new
      // Double check it's for today
      if (record.check_date === todayStr) {
        handleNewCheckIn(record)
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
  }, 4000)
}

// ─── Fetch and Sync Records ──────────────────────────────────────────────────
async function fetchTodayRecords(isSilent = false) {
  try {
    const { data, error } = await supabase
      .from('prayer_records')
      .select('id, student_id, main_room, status, check_date, location')
      .eq('check_date', todayStr)
      .order('id', { ascending: false })
      .limit(20)

    if (error) throw error

    if (!data || data.length === 0) return

    // Find any records that we haven't processed yet
    const currentMaxId = recentRecords.length > 0 ? Math.max(...recentRecords.map(r => r.id)) : 0
    const newRecords = data.filter(r => r.id > currentMaxId).reverse() // oldest to newest of the new batch

    // Update internal lists
    recentRecords = data
    renderRecentList()

    // If silent check found new records, trigger check-in display sequential loop
    if (isSilent && newRecords.length > 0) {
      newRecords.forEach(r => {
        handleNewCheckIn(r, false) // display scan
      })
    }
  } catch (err) {
    if (!isSilent) throw err
  }
}

// ─── Location Checking Helper ────────────────────────────────────────────────
function isRecordInLocation(record, student, selectedLocation) {
  if (!selectedLocation) return true

  // If the record has a location saved in the database, check it first
  if (record.location) {
    return record.location === selectedLocation
  }

  // Fallback for legacy/teacher entries or automatic inference
  const gender = student.gender
  const room = student.main_room || ''
  const isMale = gender === 'ชาย'
  const isFemale = gender === 'หญิง'
  const isKuwaitGrade = room.startsWith('ม.6') || room.startsWith('ปวช.')

  if (selectedLocation === 'musolla_male') {
    return isMale && !isKuwaitGrade
  }
  if (selectedLocation === 'masjid_kuwait') {
    return isMale && isKuwaitGrade
  }
  if (selectedLocation === 'musolla_female_1' || selectedLocation === 'musolla_female_2') {
    // Since female students are not sub-grouped in legacy data, we just return true for any female
    return isFemale
  }
  return true
}

// ─── Process Check-in Event ──────────────────────────────────────────────────
function handleNewCheckIn(record, updateList = true) {
  // Prevent duplicate rendering if already in list
  if (recentRecords.some(r => r.id === record.id) && updateList) {
    return
  }

  if (updateList) {
    recentRecords.unshift(record)
    if (recentRecords.length > 20) recentRecords.pop()
    renderRecentList()
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
      // Doesn't match group filter, skip display
      return
    }
  }

  // Display Student Success Info
  displayStudentCheckIn(student)
}

// ─── Display Student Animation & Info ───────────────────────────────────────
function displayStudentCheckIn(student) {
  // Reset any running timeout
  if (displayTimeout) {
    clearTimeout(displayTimeout)
  }

  // 1. Play success tone
  playBeep()

  // 2. Trigger green flash screen overlay
  flashOverlay.className = 'absolute inset-0 pointer-events-none z-50'
  void flashOverlay.offsetWidth // force reflow to restart animation
  flashOverlay.className = 'absolute inset-0 pointer-events-none z-50 flash-effect'

  // 3. Update active card content
  if (student.image_url) {
    studentPhoto.src = student.image_url
    studentPhoto.classList.remove('hidden')
    studentFallback.classList.add('hidden')
  } else {
    studentPhoto.classList.add('hidden')
    studentFallback.classList.remove('hidden')
    studentFallback.textContent = (student.full_name || 'น').charAt(0)
  }

  studentName.textContent = student.full_name
  studentCodeRoom.textContent = `รหัส ${student.student_code} · ห้อง ${student.main_room || '—'}`

  // 4. Smooth transition animation to show card
  standbyView.classList.add('hidden')
  activeCard.classList.remove('hidden')
  
  // Wait minor tick to allow transition
  setTimeout(() => {
    activeCard.className = 'w-full max-w-2xl bg-slate-900/90 border-2 border-emerald-500/50 rounded-3xl p-8 glow-card flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden transition-all duration-300 transform scale-100 opacity-100'
  }, 20)

  // 5. Setup auto-dismiss after 1.5 seconds back to standby
  displayTimeout = setTimeout(() => {
    activeCard.className = 'w-full max-w-2xl bg-slate-900/90 border-2 border-emerald-500/50 rounded-3xl p-8 glow-card flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden transition-all duration-300 transform scale-95 opacity-0'
    setTimeout(() => {
      activeCard.classList.add('hidden')
      standbyView.classList.remove('hidden')
    }, 300)
  }, 1500)
}

// ─── Render Footer List ──────────────────────────────────────────────────────
function renderRecentList() {
  recentList.innerHTML = ''
  
  // Filter recent records according to selected room and location
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

  // Select top 5 records from filtered items
  const displayItems = filteredItems.slice(0, 5)

  if (displayItems.length === 0) {
    recentList.innerHTML = `<div class="col-span-5 text-center text-slate-500 py-3 border border-slate-800/50 rounded-xl bg-slate-900/20 text-xs">ไม่มีรายชื่อสแกนล่าสุด</div>`
    return
  }

  displayItems.forEach(rec => {
    const student = studentCache.get(rec.student_id)
    if (!student) return

    const item = document.createElement('div')
    item.className = 'flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 shadow-md animate-fade'
    
    const photoUrl = student.image_url
    const photoHTML = photoUrl 
      ? `<img src="${photoUrl}" class="w-8 h-8 rounded-lg object-cover object-top" />`
      : `<div class="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 font-bold text-xs flex items-center justify-center">${student.full_name.charAt(0)}</div>`

    item.innerHTML = `
      ${photoHTML}
      <div class="flex-1 min-w-0">
        <p class="text-xs font-bold text-slate-200 truncate">${student.full_name}</p>
        <p class="text-[10px] text-slate-400 mt-0.5 font-mono">ห้อง ${student.main_room || '—'}</p>
      </div>
      <span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-[10px] font-bold">✓</span>
    `
    recentList.appendChild(item)
  })
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
