// js/timer-overlay.js — ⏱️ จับเวลาเต็มจอสำหรับหน้าห้องเรียน
// โหมด 1) นับถอยหลังทั่วไป (คุมกิจกรรมระหว่างคาบ) — พื้นไล่สีเขียว→เหลือง→แดง + เอฟเฟกต์สั่น/ขยายตอนใกล้หมดเวลา
// โหมด 2) พักเบรค — พื้นมืด→สว่างสวนทางกับตัวเลข ครูปรับเวลา +/- กลางคันได้ + เสียงธรรมชาติประกอบ
// โหมด 3) นับเวลา (stopwatch) — นับขึ้นจาก 0 ไม่มีกำหนดเวลา หยุดชั่วคราว/เล่นต่อได้
import { showToast } from './ui.js'
import { loadConfetti, fireConfetti } from './confetti-loader.js'

const FREE_COUNT_KEY = 'pp5_free_timer_count'
const LS_EFFECT       = 'pp5_timer_effect_style'      // 'shake' | 'scale'
const LS_SOUND        = 'pp5_timer_sound'             // 'on' | 'off'
const LS_BREAK_STEP   = 'pp5_timer_break_step'        // '60' | '30' (วินาที)
const LS_AMBIENT      = 'pp5_timer_ambient'           // key ใน AMBIENT_TRACKS หรือ 'none'
const LS_FONT_SCALE   = 'pp5_timer_font_scale'        // 0.5 - 1.8
const LS_LAST_COUNTDOWN_MIN = 'pp5_timer_last_countdown_min'
const LS_LAST_BREAK_MIN     = 'pp5_timer_last_break_min'

const ALARM_FILE = 'alarm-bell.mp3'
const AMBIENT_TRACKS = [
  { key: 'forest-wind',       label: '🌲 ลมป่า',        file: 'forest-wind.mp3' },
  { key: 'calm-ocean-breeze', label: '🌊 สายลมทะเล',    file: 'calm-ocean-breeze.mp3' },
  { key: 'path-to-jannah',    label: '🕌 Path to Jannah', file: 'path-to-jannah.mp3' },
  { key: 'waterfall-nature',  label: '💦 น้ำตกธรรมชาติ', file: 'waterfall-nature.mp3' },
  { key: 'calm',              label: '🧘 สงบ',          file: 'calm.mp3' },
  { key: 'meditation-01',     label: '🎐 สมาธิ 01',     file: 'meditation-01.mp3' },
  { key: 'meditation-02',     label: '🎐 สมาธิ 02',     file: 'meditation-02.mp3' },
  { key: 'nature-piano',      label: '🎹 เปียโนธรรมชาติ', file: 'nature-piano.mp3' },
  { key: 'solo-piano',        label: '🎹 เปียโนเดี่ยว',  file: 'solo-piano.mp3' },
  { key: 'rain',              label: '🌧️ เสียงฝน',      file: 'rain.mp3' },
]

function _soundUrl(file) {
  return `${import.meta.env.BASE_URL || '/'}sounds/${file}`
}

function _freeLimit() {
  const v = parseInt(window._pp5SystemCfg?.freeTimerLimit, 10)
  return Number.isFinite(v) ? v : 1
}

function _lerpColor(hexA, hexB, t) {
  t = Math.max(0, Math.min(1, t))
  const a = [1, 3, 5].map(i => parseInt(hexA.slice(i, i + 2), 16))
  const b = [1, 3, 5].map(i => parseInt(hexB.slice(i, i + 2), 16))
  const rgb = a.map((v, i) => Math.round(v + (b[i] - v) * t))
  return `rgb(${rgb.join(',')})`
}

function _fmtClock(totalSec) {
  const s = Math.max(0, Math.round(totalSec))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const r = s % 60
  return h > 0
    ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`
    : `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`
}

// เสียงติ๊กสังเคราะห์ด้วย WebAudio — ของเสริมเล็กๆ ไม่ต้องพึ่งไฟล์เสียง
let _actx = null
function _beep(freq, durMs, type = 'sine', vol = 0.18) {
  if (localStorage.getItem(LS_SOUND) === 'off') return
  try {
    _actx = _actx || new (window.AudioContext || window.webkitAudioContext)()
    if (_actx.state === 'suspended') _actx.resume()
    const osc = _actx.createOscillator()
    const gain = _actx.createGain()
    osc.type = type
    osc.frequency.value = freq
    gain.gain.value = vol
    osc.connect(gain); gain.connect(_actx.destination)
    osc.start()
    gain.gain.exponentialRampToValueAtTime(0.0001, _actx.currentTime + durMs / 1000)
    osc.stop(_actx.currentTime + durMs / 1000)
  } catch { /* เสียงเป็นแค่ของเสริม ไม่บล็อกการทำงานหลัก */ }
}
const _tickSound = () => _beep(880, 120, 'square', 0.12)

// เสียงกริ่งหมดเวลาจริง (ไฟล์เสียง ไม่ใช่เสียงสังเคราะห์)
let _alarmAudio = null
function _playAlarm() {
  if (localStorage.getItem(LS_SOUND) === 'off') return
  try {
    _alarmAudio = _alarmAudio || new Audio(_soundUrl(ALARM_FILE))
    _alarmAudio.currentTime = 0
    _alarmAudio.volume = 0.7
    _alarmAudio.play().catch(() => {})
  } catch { /* เสียงเป็นแค่ของเสริม ไม่บล็อกการทำงานหลัก */ }
}

function _showPaywall() {
  const m = document.createElement('div')
  m.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50'
  m.innerHTML = `
    <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
      <button id="tm-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-700 text-lg">สิทธิ์จับเวลาทดลองใช้งานครบแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์จับเวลาเต็มจอจำกัดการทดลองใช้ฟรี ${_freeLimit()} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
      <button id="tm-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
        style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`
  document.body.appendChild(m)
  m.querySelector('#tm-paywall-close').addEventListener('click', () => m.remove())
  m.querySelector('#tm-upgrade').addEventListener('click', () => { m.remove(); document.getElementById('btn-donate-float')?.click() })
}

export function openTimerModal(classId, cls, isDonorTeacher) {
  document.getElementById('timer-setup-modal')?.remove()

  let mode = 'countdown' // 'countdown' | 'break' | 'stopwatch'
  let effectStyle = localStorage.getItem(LS_EFFECT) || 'shake'
  let soundOn = localStorage.getItem(LS_SOUND) !== 'off'
  let breakStep = localStorage.getItem(LS_BREAK_STEP) || '60'
  let ambient = localStorage.getItem(LS_AMBIENT) || 'none'
  let minutes = parseInt(localStorage.getItem(LS_LAST_COUNTDOWN_MIN) || '5', 10)

  const m = document.createElement('div')
  m.id = 'timer-setup-modal'
  m.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50'
  document.body.appendChild(m)

  const PRESETS = [1, 3, 5, 10, 15, 20]
  const MODE_DEFS = [
    { key: 'countdown', icon: '⏱️', label: 'นับถอยหลัง', sub: 'คุมเวลากิจกรรม', grad: 'linear-gradient(135deg,#10b981,#0ea5e9);' },
    { key: 'break',     icon: '☕', label: 'พักเบรค',    sub: 'มืด→สว่างเตือนหมดเวลา', grad: 'linear-gradient(135deg,#334155,#64748b);' },
    { key: 'stopwatch', icon: '⏳', label: 'นับเวลา',    sub: 'นับขึ้นไม่จำกัด', grad: 'linear-gradient(135deg,#6366f1,#a855f7);' },
  ]

  function render() {
    m.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[94vh] flex flex-col">
        <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div class="min-w-0">
            <h3 class="text-white font-bold text-base">⏱️ จับเวลา</h3>
            <p class="text-white/80 text-xs mt-0.5 truncate">${cls?.class_name ? cls.class_name : ''}</p>
          </div>
          <button id="tm-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
        </div>
        <div class="p-5 overflow-y-auto flex flex-col gap-4">

          <div class="grid grid-cols-3 gap-1.5">
            ${MODE_DEFS.map(d => `
              <button data-mode="${d.key}" class="tm-mode-btn py-2.5 px-1 rounded-2xl text-xs font-bold transition ${mode === d.key ? 'text-white' : 'bg-gray-100 text-gray-500'}"
                style="${mode === d.key ? `background:${d.grad}` : ''}">${d.icon}<br>${d.label}<br><span class="font-normal text-[10px] opacity-80">${d.sub}</span></button>
            `).join('')}
          </div>

          ${mode !== 'stopwatch' ? `
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">ระยะเวลา</p>
            <div class="flex flex-wrap gap-1.5">
              ${PRESETS.map(p => `<button data-min="${p}" class="tm-preset-btn px-3 py-1.5 rounded-xl text-xs font-semibold transition ${minutes === p ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">${p} นาที</button>`).join('')}
            </div>
            <div class="flex items-center gap-2 mt-2">
              <input id="tm-custom-min" type="number" min="1" max="120" value="${minutes}" class="w-20 px-2.5 py-1.5 rounded-xl border border-gray-200 text-sm text-center" />
              <span class="text-xs text-gray-500">นาที (กำหนดเอง)</span>
            </div>
          </div>
          ` : ''}

          ${mode === 'countdown' ? `
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">เอฟเฟกต์ตอนใกล้หมดเวลา</p>
            <div class="flex gap-2">
              <button data-eff="shake" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${effectStyle === 'shake' ? 'bg-rose-500 text-white' : 'bg-gray-100 text-gray-600'}">📳 สั่น</button>
              <button data-eff="scale" class="tm-eff-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${effectStyle === 'scale' ? 'bg-rose-500 text-white' : 'bg-gray-100 text-gray-600'}">🔍 ขยาย</button>
            </div>
          </div>
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input id="tm-sound" type="checkbox" ${soundOn ? 'checked' : ''} class="w-4 h-4 rounded" />
            🔊 เปิดเสียงตอนนับถอยหลัง/หมดเวลา (เสียงกริ่งนาฬิกาปลุก)
          </label>
          ` : ''}

          ${mode === 'break' ? `
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">หน่วยปรับเวลาระหว่างเบรค</p>
            <div class="flex gap-2">
              <button data-step="60" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${breakStep === '60' ? 'bg-slate-700 text-white' : 'bg-gray-100 text-gray-600'}">±1 นาที</button>
              <button data-step="30" class="tm-step-btn flex-1 py-2 rounded-xl text-sm font-semibold transition ${breakStep === '30' ? 'bg-slate-700 text-white' : 'bg-gray-100 text-gray-600'}">±30 วินาที</button>
            </div>
          </div>
          <div>
            <p class="text-xs font-semibold text-gray-500 mb-1.5">🎵 เสียงประกอบระหว่างเบรค</p>
            <div class="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto pr-1">
              <button data-ambient="none" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${ambient === 'none' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-600'}">🔇 ไม่มีเสียง</button>
              ${AMBIENT_TRACKS.map(t => `<button data-ambient="${t.key}" class="tm-ambient-btn px-2 py-2 rounded-xl text-xs font-semibold transition text-left ${ambient === t.key ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600'}">${t.label}</button>`).join('')}
            </div>
          </div>
          ` : ''}

          <button id="tm-start" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]"
            style="background:linear-gradient(135deg,#0ea5e9,#6366f1);">▶️ เริ่มจับเวลา</button>
        </div>
      </div>`

    m.querySelector('#tm-close').addEventListener('click', () => m.remove())
    m.querySelectorAll('.tm-mode-btn').forEach(btn => btn.addEventListener('click', () => {
      mode = btn.dataset.mode
      if (mode !== 'stopwatch') minutes = parseInt(localStorage.getItem(mode === 'break' ? LS_LAST_BREAK_MIN : LS_LAST_COUNTDOWN_MIN) || '5', 10)
      render()
    }))
    m.querySelectorAll('.tm-preset-btn').forEach(btn => btn.addEventListener('click', () => { minutes = parseInt(btn.dataset.min, 10); render() }))
    m.querySelector('#tm-custom-min')?.addEventListener('change', e => {
      const v = parseInt(e.target.value, 10)
      if (Number.isFinite(v) && v > 0) minutes = v
    })
    m.querySelectorAll('.tm-eff-btn').forEach(btn => btn.addEventListener('click', () => {
      effectStyle = btn.dataset.eff
      localStorage.setItem(LS_EFFECT, effectStyle)
      render()
    }))
    m.querySelectorAll('.tm-step-btn').forEach(btn => btn.addEventListener('click', () => {
      breakStep = btn.dataset.step
      localStorage.setItem(LS_BREAK_STEP, breakStep)
      render()
    }))
    m.querySelectorAll('.tm-ambient-btn').forEach(btn => btn.addEventListener('click', () => {
      ambient = btn.dataset.ambient
      localStorage.setItem(LS_AMBIENT, ambient)
      render()
    }))
    const soundBox = m.querySelector('#tm-sound')
    if (soundBox) soundBox.addEventListener('change', e => localStorage.setItem(LS_SOUND, e.target.checked ? 'on' : 'off'))

    m.querySelector('#tm-start').addEventListener('click', () => {
      const customVal = parseInt(m.querySelector('#tm-custom-min')?.value, 10)
      if (Number.isFinite(customVal) && customVal > 0) minutes = customVal

      if (!isDonorTeacher) {
        const used = parseInt(localStorage.getItem(FREE_COUNT_KEY) || '0', 10)
        if (used >= _freeLimit()) { _showPaywall(); return }
        localStorage.setItem(FREE_COUNT_KEY, String(used + 1))
      }

      if (mode !== 'stopwatch') localStorage.setItem(mode === 'break' ? LS_LAST_BREAK_MIN : LS_LAST_COUNTDOWN_MIN, String(minutes))
      m.remove()
      _launchOverlay(mode, mode === 'stopwatch' ? 0 : minutes * 60, { effectStyle, breakStepSec: parseInt(breakStep, 10), ambient })
    })
  }

  render()
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
}

function _launchOverlay(mode, initialSeconds, { effectStyle, breakStepSec, ambient }) {
  document.getElementById('timer-fullscreen-overlay')?.remove()

  let totalSeconds = initialSeconds
  let remaining = initialSeconds
  let elapsed = 0
  let finished = false
  let isPaused = false
  let rafId = null
  let lastTickWhole = -1
  let fontScale = parseFloat(localStorage.getItem(LS_FONT_SCALE)) || 1

  let ambientAudio = null
  if (mode === 'break' && ambient && ambient !== 'none') {
    const track = AMBIENT_TRACKS.find(t => t.key === ambient)
    if (track) {
      try {
        ambientAudio = new Audio(_soundUrl(track.file))
        ambientAudio.loop = true
        ambientAudio.volume = 0.45
        ambientAudio.play().catch(() => {})
      } catch { /* เสียงประกอบเป็นของเสริม ไม่บล็อกการทำงานหลัก */ }
    }
  }

  const ov = document.createElement('div')
  ov.id = 'timer-fullscreen-overlay'
  ov.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:background-color .6s linear;'
  ov.innerHTML = `
    <style>
      @keyframes tm-shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
      @keyframes tm-scale { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
      .tm-digits { font-variant-numeric:tabular-nums; font-weight:800; letter-spacing:2px; transition:color .6s linear; }
      #tm-size-slider { -webkit-appearance:none; width:120px; height:4px; border-radius:2px; background:rgba(255,255,255,.3); }
      #tm-size-slider::-webkit-slider-thumb { -webkit-appearance:none; width:18px; height:18px; border-radius:50%; background:#fff; cursor:pointer; }
      #tm-size-slider::-moz-range-thumb { width:18px; height:18px; border-radius:50%; background:#fff; border:none; cursor:pointer; }
    </style>
    <button id="tm-exit" style="position:absolute;top:20px;right:24px;background:rgba(255,255,255,.15);border:none;color:inherit;width:44px;height:44px;border-radius:14px;font-size:22px;cursor:pointer;">✕</button>
    <div style="position:absolute;top:28px;left:24px;display:flex;align-items:center;gap:8px;color:inherit;opacity:.85;">
      <span style="font-size:13px;">🔠</span>
      <input id="tm-size-slider" type="range" min="0.5" max="1.8" step="0.1" value="${fontScale}" />
    </div>
    <div id="tm-digits" class="tm-digits" style="font-size:calc(min(28vw,220px) * ${fontScale});line-height:1;">${_fmtClock(mode === 'stopwatch' ? 0 : remaining)}</div>
    <div id="tm-sub" style="margin-top:12px;font-size:18px;opacity:.75;"></div>
    <div id="tm-mode-controls" style="display:none;margin-top:28px;gap:16px;align-items:center;"></div>
  `
  document.body.appendChild(ov)

  try { ov.requestFullscreen?.() } catch { /* บาง browser/ตอน iframe อาจขอ fullscreen ไม่ได้ — ใช้ overlay เต็มจอปกติแทนได้ */ }

  const digitsEl = ov.querySelector('#tm-digits')
  const subEl    = ov.querySelector('#tm-sub')

  ov.querySelector('#tm-size-slider').addEventListener('input', e => {
    fontScale = parseFloat(e.target.value)
    localStorage.setItem(LS_FONT_SCALE, String(fontScale))
    digitsEl.style.fontSize = `calc(min(28vw,220px) * ${fontScale})`
  })

  function exit() {
    if (rafId) cancelAnimationFrame(rafId)
    if (ambientAudio) { try { ambientAudio.pause() } catch {} }
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {})
    ov.remove()
  }
  ov.querySelector('#tm-exit').addEventListener('click', exit)

  if (mode === 'break') {
    const ctrl = ov.querySelector('#tm-mode-controls')
    ctrl.style.display = 'flex'
    const stepLabel = breakStepSec === 30 ? '30 วิ' : '1 นาที'
    ctrl.innerHTML = `
      <button id="tm-minus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">− ${stepLabel}</button>
      <button id="tm-plus" style="background:rgba(0,0,0,.15);border:none;padding:12px 22px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">+ ${stepLabel}</button>
    `
    ctrl.querySelector('#tm-minus').addEventListener('click', () => { remaining = Math.max(0, remaining - breakStepSec) })
    ctrl.querySelector('#tm-plus').addEventListener('click', () => {
      remaining += breakStepSec
      totalSeconds = Math.max(totalSeconds, remaining)
    })
    subEl.textContent = 'พักเบรค — จอสว่างเต็มที่ = หมดเวลาพัก'
  } else if (mode === 'stopwatch') {
    const ctrl = ov.querySelector('#tm-mode-controls')
    ctrl.style.display = 'flex'
    ctrl.innerHTML = `
      <button id="tm-pause" style="background:rgba(0,0,0,.15);border:none;padding:12px 26px;border-radius:16px;font-weight:700;font-size:16px;cursor:pointer;color:inherit;">⏸️ หยุดชั่วคราว</button>
    `
    const pauseBtn = ctrl.querySelector('#tm-pause')
    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused
      pauseBtn.textContent = isPaused ? '▶️ เล่นต่อ' : '⏸️ หยุดชั่วคราว'
    })
    ov.style.backgroundColor = '#1e293b'
    digitsEl.style.color = '#ffffff'
    subEl.textContent = 'นับเวลา'
  } else {
    subEl.textContent = 'นับถอยหลัง'
  }

  let lastTs = performance.now()
  function tick(now) {
    const dt = (now - lastTs) / 1000
    lastTs = now

    if (mode === 'stopwatch') {
      if (!isPaused) {
        elapsed += dt
        digitsEl.textContent = _fmtClock(elapsed)
      }
      rafId = requestAnimationFrame(tick)
      return
    }

    if (!finished) {
      remaining = Math.max(0, remaining - dt)
      const wholeSec = Math.ceil(remaining)
      const fracRemaining = totalSeconds > 0 ? remaining / totalSeconds : 0
      const fracElapsed = 1 - fracRemaining

      digitsEl.textContent = _fmtClock(remaining)

      if (mode === 'break') {
        // มืด (เริ่ม) → สว่าง (ใกล้หมด) : พื้นหลังไล่ตาม fracElapsed, ตัวเลขไล่สวนทาง
        ov.style.backgroundColor = _lerpColor('#0f172a', '#fef9c3', fracElapsed)
        digitsEl.style.color = _lerpColor('#94a3b8', '#1e293b', fracElapsed)
        digitsEl.style.animation = ''
      } else {
        // เขียว→เหลือง→แดง ตามเวลาที่เหลือ
        let bg
        if (fracRemaining > 0.3) bg = _lerpColor('#f59e0b', '#10b981', (fracRemaining - 0.3) / 0.7)
        else if (fracRemaining > 0.1) bg = _lerpColor('#ef4444', '#f59e0b', (fracRemaining - 0.1) / 0.2)
        else bg = '#ef4444'
        ov.style.backgroundColor = bg
        digitsEl.style.color = '#ffffff'

        if (fracRemaining <= 0.3) {
          const urgency = 1 - Math.min(1, fracRemaining / 0.3) // 0→1 ยิ่งใกล้หมดยิ่งเข้ม
          const durSec = Math.max(0.18, 0.9 - urgency * 0.7)
          digitsEl.style.animation = `${effectStyle === 'shake' ? 'tm-shake' : 'tm-scale'} ${durSec}s ease-in-out infinite`
        } else {
          digitsEl.style.animation = ''
        }

        if (wholeSec !== lastTickWhole) {
          lastTickWhole = wholeSec
          if (wholeSec > 0 && wholeSec <= 3) _tickSound()
        }
      }

      if (remaining <= 0) {
        finished = true
        digitsEl.textContent = '00:00'
        digitsEl.style.animation = ''
        if (mode === 'break') {
          ov.style.backgroundColor = '#fef9c3'
          digitsEl.style.color = '#1e293b'
          subEl.textContent = 'หมดเวลาพักเบรคแล้ว'
        } else {
          subEl.textContent = '⏰ หมดเวลา!'
          _playAlarm()
          loadConfetti().then(() => fireConfetti('mid')).catch(() => {})
        }
      }
    }
    rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}
