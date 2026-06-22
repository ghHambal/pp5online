// js/teacher-views-flashcards.js
import {
  getFlashcardDecks, createFlashcardDeck, updateFlashcardDeck, deleteFlashcardDeck,
  getFlashcards, saveFlashcards, getTeacherPackageAccess,
  uploadFlashcardImage, deleteFlashcardImage,
  getClassStudents, getScoreColumns, saveStudentScore, getMyClasses
} from './api.js'
import { showToast, showDangerConfirm, showPageLoader, setButtonLoading } from './ui.js'
import { setContent, setTitle, setActiveNav, _htmlEsc } from './teacher-views-utils.js'
import { supabase } from './supabase.js'

// Keep track of module variables for play mode
let activeAutoplayInterval = null;
let activeGlobalKeydownHandler = null;
let activeFullscreenChangeHandler = null;
let activeRandomInterval = null;

export function cleanupPlayMode() {
  if (activeAutoplayInterval) {
    clearInterval(activeAutoplayInterval);
    activeAutoplayInterval = null;
  }
  if (activeGlobalKeydownHandler) {
    document.removeEventListener('keydown', activeGlobalKeydownHandler);
    activeGlobalKeydownHandler = null;
  }
  if (activeFullscreenChangeHandler) {
    document.removeEventListener('fullscreenchange', activeFullscreenChangeHandler);
    document.removeEventListener('webkitfullscreenchange', activeFullscreenChangeHandler);
    document.removeEventListener('mozfullscreenchange', activeFullscreenChangeHandler);
    document.removeEventListener('MSFullscreenChange', activeFullscreenChangeHandler);
    activeFullscreenChangeHandler = null;
  }
  if (activeRandomInterval) {
    clearInterval(activeRandomInterval);
    activeRandomInterval = null;
  }

  // Exit native fullscreen if active
  if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
    try {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } catch (e) {}
  }

  const wrapper = document.getElementById('flashcard-play-wrapper');
  if (wrapper && wrapper.classList.contains('fc-fs-wrapper')) {
    wrapper.classList.remove('fc-fs-wrapper');
    document.body.style.overflow = '';
  }
}

// Function to load KaTeX
const loadKaTeX = () => {
  return new Promise((resolve) => {
    if (window.renderMathInElement) {
      resolve();
      return;
    }
    // Load CSS
    if (!document.getElementById('katex-css')) {
      const link = document.createElement('link');
      link.id = 'katex-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css';
      document.head.appendChild(link);
    }

    // Load JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js';
    script.onload = () => {
      // Load auto-render extension
      const scriptAuto = document.createElement('script');
      scriptAuto.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js';
      scriptAuto.onload = () => {
        resolve();
      };
      document.head.appendChild(scriptAuto);
    };
    document.head.appendChild(script);
  });
};

// ─── Image Compression (Client-side) ─────────────────────────────────────────
/**
 * Compress an image File/Blob to max 600×600px and ≤ 100KB using Canvas API.
 * @param {File|Blob} file - The source image file.
 * @returns {Promise<Blob>} - Compressed WebP blob.
 */
const _compressImage = (file) => new Promise((resolve, reject) => {
  const MAX_DIM  = 600
  const MAX_SIZE = 100 * 1024 // 100 KB
  const img = new Image()
  const url = URL.createObjectURL(file)

  img.onload = () => {
    URL.revokeObjectURL(url)
    const canvas = document.createElement('canvas')

    // Scale down to fit within MAX_DIM × MAX_DIM
    let { width, height } = img
    if (width > MAX_DIM || height > MAX_DIM) {
      const ratio = Math.min(MAX_DIM / width, MAX_DIM / height)
      width  = Math.round(width  * ratio)
      height = Math.round(height * ratio)
    }
    canvas.width  = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, width, height)

    // Try WebP first, then JPEG — reduce quality until ≤ 100 KB
    const tryCompress = (quality) => {
      canvas.toBlob((blob) => {
        if (!blob) return reject(new Error('Canvas compression failed'))
        if (blob.size <= MAX_SIZE || quality <= 0.3) {
          resolve(blob)
        } else {
          tryCompress(Math.round((quality - 0.1) * 10) / 10)
        }
      }, 'image/webp', quality)
    }
    tryCompress(0.80)
  }

  img.onerror = () => reject(new Error('ไม่สามารถโหลดไฟล์รูปภาพได้'))
  img.src = url
})

// ─── Card Color Themes ────────────────────────────────────────────────────────

const FC_THEMES = [
  {
    id: 'teal',
    label: 'ทีล (ค่าเริ่มต้น)',
    dot: 'linear-gradient(135deg, #0f766e, #115e59)',
    front: 'linear-gradient(135deg, #0f766e, #115e59, #0f766e)',
    frontColor: 'white',
    back: 'linear-gradient(135deg, #ffffff, #f8fafc)',
    backColor: '#0f172a',
    backBorder: '#cbd5e1',
    fsFront: 'linear-gradient(135deg, #1e1b4b, #311042, #1e1b4b)',
    fsFrontGlow: 'rgba(99,102,241,0.3)',
    fsBack: 'linear-gradient(135deg, #0f172a, #1e293b)',
    fsBackColor: '#f8fafc',
    blob1: '#0d9488',
    blob2: '#6366f1',
    timerBar: '#0d9488'
  },
  {
    id: 'ocean',
    label: 'มหาสมุทร',
    dot: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
    front: 'linear-gradient(135deg, #1d4ed8, #1e40af, #2563eb)',
    frontColor: 'white',
    back: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    backColor: '#1e3a8a',
    backBorder: '#93c5fd',
    fsFront: 'linear-gradient(135deg, #1e3a8a, #1d4ed8, #1e3a8a)',
    fsFrontGlow: 'rgba(59,130,246,0.35)',
    fsBack: 'linear-gradient(135deg, #0f172a, #1e293b)',
    fsBackColor: '#bfdbfe',
    blob1: '#3b82f6',
    blob2: '#0ea5e9',
    timerBar: '#3b82f6'
  },
  {
    id: 'sunset',
    label: 'พระอาทิตย์ตก',
    dot: 'linear-gradient(135deg, #dc2626, #ea580c)',
    front: 'linear-gradient(135deg, #dc2626, #ea580c, #f97316)',
    frontColor: 'white',
    back: 'linear-gradient(135deg, #fff7ed, #fef3c7)',
    backColor: '#7c2d12',
    backBorder: '#fca5a5',
    fsFront: 'linear-gradient(135deg, #7c2d12, #991b1b, #b45309)',
    fsFrontGlow: 'rgba(251,146,60,0.3)',
    fsBack: 'linear-gradient(135deg, #1c1208, #2c1a04)',
    fsBackColor: '#fed7aa',
    blob1: '#f97316',
    blob2: '#dc2626',
    timerBar: '#f97316'
  },
  {
    id: 'violet',
    label: 'ม่วงมายา',
    dot: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    front: 'linear-gradient(135deg, #7c3aed, #6d28d9, #8b5cf6)',
    frontColor: 'white',
    back: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    backColor: '#4c1d95',
    backBorder: '#c4b5fd',
    fsFront: 'linear-gradient(135deg, #2e1065, #4c1d95, #2e1065)',
    fsFrontGlow: 'rgba(139,92,246,0.35)',
    fsBack: 'linear-gradient(135deg, #0d0b1a, #1a1033)',
    fsBackColor: '#e9d5ff',
    blob1: '#8b5cf6',
    blob2: '#ec4899',
    timerBar: '#8b5cf6'
  },
  {
    id: 'emerald',
    label: 'มรกต',
    dot: 'linear-gradient(135deg, #059669, #065f46)',
    front: 'linear-gradient(135deg, #059669, #065f46, #10b981)',
    frontColor: 'white',
    back: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
    backColor: '#064e3b',
    backBorder: '#6ee7b7',
    fsFront: 'linear-gradient(135deg, #064e3b, #065f46, #064e3b)',
    fsFrontGlow: 'rgba(16,185,129,0.3)',
    fsBack: 'linear-gradient(135deg, #020c07, #031a0f)',
    fsBackColor: '#a7f3d0',
    blob1: '#10b981',
    blob2: '#0d9488',
    timerBar: '#10b981'
  },
  {
    id: 'rose',
    label: 'กุหลาบ',
    dot: 'linear-gradient(135deg, #e11d48, #be185d)',
    front: 'linear-gradient(135deg, #e11d48, #be185d, #f43f5e)',
    frontColor: 'white',
    back: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    backColor: '#881337',
    backBorder: '#fda4af',
    fsFront: 'linear-gradient(135deg, #881337, #9f1239, #881337)',
    fsFrontGlow: 'rgba(244,63,94,0.3)',
    fsBack: 'linear-gradient(135deg, #180a0d, #200d12)',
    fsBackColor: '#fecdd3',
    blob1: '#f43f5e',
    blob2: '#c026d3',
    timerBar: '#f43f5e'
  },
  {
    id: 'amber',
    label: 'ทองคำ',
    dot: 'linear-gradient(135deg, #d97706, #b45309)',
    front: 'linear-gradient(135deg, #d97706, #b45309, #f59e0b)',
    frontColor: 'white',
    back: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    backColor: '#78350f',
    backBorder: '#fcd34d',
    fsFront: 'linear-gradient(135deg, #78350f, #92400e, #78350f)',
    fsFrontGlow: 'rgba(245,158,11,0.3)',
    fsBack: 'linear-gradient(135deg, #1a1204, #241a06)',
    fsBackColor: '#fde68a',
    blob1: '#f59e0b',
    blob2: '#d97706',
    timerBar: '#f59e0b'
  },
  {
    id: 'slate',
    label: 'กาแล็กซี',
    dot: 'linear-gradient(135deg, #334155, #1e293b)',
    front: 'linear-gradient(135deg, #334155, #1e293b, #475569)',
    frontColor: 'white',
    back: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
    backColor: '#0f172a',
    backBorder: '#94a3b8',
    fsFront: 'linear-gradient(135deg, #0f172a, #1e293b, #0f172a)',
    fsFrontGlow: 'rgba(148,163,184,0.2)',
    fsBack: 'linear-gradient(135deg, #04070f, #0a1020)',
    fsBackColor: '#e2e8f0',
    blob1: '#64748b',
    blob2: '#475569',
    timerBar: '#64748b'
  }
]

const getTheme = (id) => FC_THEMES.find(t => t.id === id) || FC_THEMES[0]

const injectStyles = () => {
  if (document.getElementById('flashcard-styles')) return
  const style = document.createElement('style')
  style.id = 'flashcard-styles'
  style.textContent = `
    .fc-perspective {
      perspective: 1600px;
    }
    .fc-card {
      width: 100%;
      height: 320px;
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      transform-style: preserve-3d;
      cursor: pointer;
    }
    .fc-card.flipped {
      transform: rotateY(180deg);
    }
    .fc-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2.5rem;
      border-radius: 2rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    .fc-front {
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .fc-back {
      transform: rotateY(180deg);
      border-width: 3px;
      border-style: solid;
    }
    
    /* Fullscreen Mode Specifics */
    .fc-fs-wrapper,
    #flashcard-play-wrapper:fullscreen {
      position: fixed !important;
      inset: 0 !important;
      z-index: 9999 !important;
      background: #090d16 !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      padding: 2rem !important;
      overflow: hidden !important;
      width: 100vw !important;
      height: 100vh !important;
      max-width: none !important;
      margin: 0 !important;
    }
    .fc-fs-wrapper .fc-card,
    #flashcard-play-wrapper:fullscreen .fc-card {
      height: 420px;
      max-width: 600px;
    }
    .fc-fs-wrapper .fc-front,
    #flashcard-play-wrapper:fullscreen .fc-front {
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .fc-fs-wrapper .fc-back,
    #flashcard-play-wrapper:fullscreen .fc-back {
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    /* Ambient animations */
    .fc-ambient-blob {
      position: absolute;
      width: 450px;
      height: 450px;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.15;
      z-index: 0;
      pointer-events: none;
      animation: fc-float 15s infinite alternate ease-in-out;
    }
    .fc-ambient-1 {
      top: -10%;
      left: -10%;
    }
    .fc-ambient-2 {
      bottom: -10%;
      right: -10%;
      animation-delay: -5s;
    }
    
    @keyframes fc-float {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(50px, 40px) scale(1.1); }
      100% { transform: translate(-30px, -50px) scale(0.9); }
    }
    
    /* AutoPlay Timer Progress */
    .fc-timer-bar {
      height: 3px;
      width: 0%;
      transition: width 0.1s linear;
    }

    /* Theme Picker */
    .fc-theme-dot {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid transparent;
      transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
    .fc-theme-dot:hover {
      transform: scale(1.15);
    }
    .fc-theme-dot.selected {
      border-color: white;
      box-shadow: 0 0 0 3px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.3);
      transform: scale(1.2);
    }
    
    @keyframes fc-scaleUp {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-scaleUp {
      animation: fc-scaleUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
  `
  document.head.appendChild(style)
}

// ─── Main View: List Decks ───────────────────────────────────────────────────
export async function renderFlashcardDecks(teacher) {
  if (!teacher) return
  cleanupPlayMode()
  injectStyles()
  setActiveNav('flashcards')
  setTitle('ระบบบัตรคำ (Flash Cards)')

  setContent(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดข้อมูล...
    </div>
  `)

  try {
    const [decks, packageAccess] = await Promise.all([
      getFlashcardDecks(teacher.id),
      getTeacherPackageAccess(teacher.id).catch(() => ({ hasSemester: false }))
    ])

    const donorTier = window._pp5DonorTierIndex ?? 0
    const isPremium = donorTier >= 2 || packageAccess.hasSemester

    let deckCardsHtml = ''
    if (decks.length === 0) {
      deckCardsHtml = `
        <div class="col-span-full bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
          <div class="text-5xl mb-4">🃏</div>
          <h3 class="font-bold text-gray-700 text-base mb-1">ยังไม่มีชุดบัตรคำศัพท์</h3>
          <p class="text-sm text-gray-400 mb-6">คุณครูสามารถสร้างชุดบัตรคำ เพื่อให้นักเรียนฝึกฝน ทบทวน หรือเล่นทายคำศัพท์ได้ครับ</p>
          <button id="btn-create-deck-empty" class="px-5 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-lg shadow-teal-100 transition">
            ＋ สร้างชุดบัตรคำแรก
          </button>
        </div>
      `
    } else {
      // Load card counts for each deck in parallel
      const decksWithCounts = await Promise.all(
        decks.map(async (d) => {
          const cards = await getFlashcards(d.id).catch(() => [])
          return { ...d, cardCount: cards.length }
        })
      )

      deckCardsHtml = decksWithCounts.map(d => `
        <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-3 mb-2">
              <span class="px-2.5 py-1 bg-teal-50 text-teal-700 font-bold text-xs rounded-lg">${d.cardCount} บัตรคำ</span>
            </div>
            <h4 class="font-bold text-gray-800 text-base line-clamp-1 mb-1">${_htmlEsc(d.title)}</h4>
            <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">${_htmlEsc(d.description || 'ไม่มีคำอธิบาย')}</p>
          </div>
          <div class="flex gap-2 border-t border-gray-50 pt-3">
            <button class="btn-play flex-1 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm" data-id="${d.id}">
              <span>🚀</span> เล่น
            </button>
            <button class="btn-edit px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold transition" data-id="${d.id}" title="แก้ไข">
              ✏️ แก้ไข
            </button>
            <button class="btn-delete px-3 py-2 rounded-xl border border-red-100 text-red-500 hover:bg-red-50 text-xs font-semibold transition" data-id="${d.id}" title="ลบ">
              🗑️
            </button>
          </div>
        </div>
      `).join('')
    }

    setContent(`
      <div class="space-y-6">
        <!-- Banner Header -->
        <div class="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
          <div class="absolute right-0 bottom-0 translate-y-6 translate-x-4 opacity-10 text-8xl">🃏</div>
          <h2 class="font-bold text-lg leading-tight mb-1">ระบบบัตรคำ (Flash Cards)</h2>
          <p class="text-xs text-teal-100 leading-relaxed max-w-md">ตัวช่วยคุณครูในการสร้างเครื่องมือช่วยท่องจำ คำศัพท์ ควิซทบทวนบทเรียน ทั้งแบบเพิ่มเอง อัปโหลดไฟล์ หรือสร้างด้วย Gemini AI</p>
          
          ${!isPremium ? `
            <div class="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-2xl text-xs">
              <span>💡</span>
              <span>สมาชิกทั่วไปสร้างได้ <strong>1 ชุด</strong> (ปัจจุบันมี <strong>${decks.length}/1 ชุด</strong>)</span>
            </div>
          ` : `
            <div class="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-2xl text-xs font-semibold">
              <span>⭐</span>
              <span>ใช้งานโหมดผู้สนับสนุน: สร้างได้ไม่จำกัดวิชา</span>
            </div>
          `}
        </div>

        <!-- Toolbar -->
        ${decks.length > 0 ? `
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-gray-700 text-sm">รายการชุดบัตรคำของคุณ</h3>
            <button id="btn-create-deck" class="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition">
              ＋ สร้างชุดใหม่
            </button>
          </div>
        ` : ''}

        <!-- Decks Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          ${deckCardsHtml}
        </div>
      </div>
    `)

    // Action handlers helper
    const handleCreateClick = () => {
      if (decks.length >= 1 && !isPremium) {
        // Show Upgrade Modal
        document.getElementById('btn-donate-float')?.click()
        showToast('กรุณาสนับสนุนผู้พัฒนาระดับ 2 เพื่อใช้งานชุดการ์ดไม่จำกัดครับ 🙏', 'warning')
        return
      }
      _renderDeckForm(teacher, null)
    }

    document.getElementById('btn-create-deck-empty')?.addEventListener('click', handleCreateClick)
    document.getElementById('btn-create-deck')?.addEventListener('click', handleCreateClick)

    document.querySelectorAll('.btn-play').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id
        const d = decks.find(x => x.id === id)
        renderFlashcardPlay(teacher, d)
      })
    })

    document.querySelectorAll('.btn-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id
        const d = decks.find(x => x.id === id)
        _renderDeckForm(teacher, d)
      })
    })

    document.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id
        const d = decks.find(x => x.id === id)
        const confirm = await showDangerConfirm({
          title: 'ยืนยันลบชุดบัตรคำ',
          message: `คุณแน่ใจว่าต้องการลบชุด "${d.title}" ใช่หรือไม่?`,
          detail: 'ข้อมูลบัตรคำย่อยทั้งหมดในชุดนี้จะถูกลบอย่างถาวรและไม่สามารถย้อนกลับได้',
          confirmText: 'ลบเลย'
        })
        if (!confirm) return
        showPageLoader(true)
        try {
          await deleteFlashcardDeck(id)
          showToast('ลบชุดบัตรคำเรียบร้อยแล้ว', 'success')
          renderFlashcardDecks(teacher)
        } catch (err) {
          showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        } finally {
          showPageLoader(false)
        }
      })
    })

  } catch (err) {
    showToast('โหลดข้อมูลล้มเหลว: ' + (err.message ?? ''), 'error')
    setContent(`<div class="text-center py-12 text-rose-500 font-semibold">โหลดข้อมูลไม่สำเร็จ</div>`)
  }
}

// ─── Play Mode View ──────────────────────────────────────────────────────────
export async function renderFlashcardPlay(teacher, deck, classId = null) {
  cleanupPlayMode() // Clean up any stale sessions
  injectStyles()
  
  setActiveNav('flashcards')
  setTitle(`${deck.title}`)

  setContent(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดชุดบัตรคำ และประมวลผลระบบสมการ...
    </div>
  `)

  try {
    // Parallel load cards and KaTeX from CDN, plus class students & score columns if classId is provided
    let cards, _
    let classStudents = []
    let classScoreColumns = []
    let className = ''

    if (classId) {
      const [cardsRes, _katexRes, studentsRes, scoreColsRes, classesRes] = await Promise.all([
        getFlashcards(deck.id),
        loadKaTeX().catch(err => console.warn('KaTeX load failed, falling back to plain text:', err)),
        getClassStudents(classId).catch(() => []),
        getScoreColumns(classId).catch(() => []),
        window._classCache?.[classId] ? Promise.resolve(null) : getMyClasses(teacher.id).catch(() => [])
      ])
      cards = cardsRes
      classStudents = studentsRes
      classScoreColumns = scoreColsRes
      
      const cachedClass = window._classCache?.[classId]
      if (cachedClass) {
        className = cachedClass.class_name || ''
      } else if (classesRes) {
        const cls = classesRes.find(c => c.id === classId)
        if (cls) {
          className = cls.class_name || ''
        }
      }
    } else {
      const [cardsRes, _katexRes] = await Promise.all([
        getFlashcards(deck.id),
        loadKaTeX().catch(err => console.warn('KaTeX load failed, falling back to plain text:', err))
      ])
      cards = cardsRes
    }

    if (cards.length === 0) {
      setContent(`
        <div class="max-w-md mx-auto bg-white rounded-3xl border border-gray-100 p-8 text-center shadow-sm space-y-4">
          <div class="text-5xl">📭</div>
          <h3 class="font-bold text-gray-700 text-base">ชุดบัตรคำยังไม่มีข้อมูล</h3>
          <p class="text-sm text-gray-400">ชุดบัตรคำ "${_htmlEsc(deck.title)}" ยังไม่มีคำศัพท์บันทึกอยู่เลยครับ คุณครูสามารถเข้าไปป้อนคำศัพท์ก่อนได้</p>
          <div class="flex gap-2">
            <button id="play-back" class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition">← กลับ</button>
            <button id="play-edit" class="flex-1 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold transition">✏️ เพิ่มคำศัพท์</button>
          </div>
        </div>
      `)
      document.getElementById('play-back').addEventListener('click', () => {
        if (classId) {
          import('./teacher-views-classes.js').then(m => m.renderClassDetail(teacher, classId))
        } else {
          renderFlashcardDecks(teacher)
        }
      })
      document.getElementById('play-edit').addEventListener('click', () => _renderDeckForm(teacher, deck))
      return
    }

    // Play State variables
    let originalCards = [...cards]
    let activeCards = [...cards]
    let currentIndex = 0
    let isFlipped = false
    let isShuffled = false
    let isAutoplay = false
    let isDrawerOpen = false
    
    // Load theme from localStorage (deck-specific)
    const savedThemeId = localStorage.getItem(`fc_theme_${deck.id}`) || 'teal'
    let activeTheme = getTheme(savedThemeId)
    
    // Autoplay Timer Tracker
    let autoplayDuration = 5000 // Total duration per side (5 seconds)
    let autoplayElapsed = 0
    const timerStep = 100 // 100ms interval ticks
    let flippedThisCard = false

    // Function to render the drawer list
    const _renderDrawerList = () => {
      const drawerList = document.getElementById('drawer-card-list')
      if (!drawerList) return
      
      drawerList.innerHTML = activeCards.map((c, i) => {
        const isCurrent = i === currentIndex
        return `
          <button class="w-full text-left p-3 rounded-xl transition text-xs flex items-center justify-between gap-2
            ${isCurrent 
              ? 'bg-indigo-600 text-white font-bold border border-indigo-400' 
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-transparent'}"
            data-idx="${i}">
            <span class="line-clamp-1 flex-1">${_htmlEsc(c.front_text)}</span>
            <span class="text-[10px] text-slate-400">${isCurrent ? '● เล่นอยู่' : `#${i+1}`}</span>
          </button>
        `
      }).join('')

      // Bind click on drawer items
      drawerList.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          currentIndex = parseInt(btn.dataset.idx)
          isFlipped = false
          flippedThisCard = false
          autoplayElapsed = 0
          _renderCardState()
          _renderDrawerList()
        })
      })
    }

    const _applyTheme = (thm) => {
      const wrapper = document.getElementById('flashcard-play-wrapper')
      const blob1 = wrapper?.querySelector('.fc-ambient-1')
      const blob2 = wrapper?.querySelector('.fc-ambient-2')
      const timerBar = document.getElementById('autoplay-timer-bar')
      if (blob1) blob1.style.background = thm.blob1
      if (blob2) blob2.style.background = thm.blob2
      if (timerBar) timerBar.style.background = thm.timerBar
    }

    const _applyCardThemeColors = (thm) => {
      const isFs = document.getElementById('flashcard-play-wrapper')?.classList.contains('fc-fs-wrapper')
      const front = document.querySelector('.fc-front')
      const back = document.querySelector('.fc-back')
      if (front) {
        front.style.background = isFs ? thm.fsFront : thm.front
        front.style.color = thm.frontColor
        if (isFs) front.style.boxShadow = `0 0 40px ${thm.fsFrontGlow}`
        else front.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.25)'
      }
      if (back) {
        back.style.background = isFs ? thm.fsBack : thm.back
        back.style.color = isFs ? thm.fsBackColor : thm.backColor
        back.style.borderColor = isFs ? 'rgba(255,255,255,0.1)' : thm.backBorder
        if (isFs) back.style.boxShadow = '0 0 40px rgba(255,255,255,0.05)'
        else back.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.25)'
      }
    }

    const _renderCardState = () => {
      const card = activeCards[currentIndex]
      const cardContainer = document.getElementById('play-card-container')
      if (!cardContainer) return

      // Determine size depending on fullscreen mode
      const isFs = document.getElementById('flashcard-play-wrapper')?.classList.contains('fc-fs-wrapper')
      const textCls = isFs ? 'text-3xl md:text-5xl font-extrabold' : 'text-2xl font-bold'

      const frontHasImg = !!card.front_image_url
      const backHasImg  = !!card.back_image_url

      // Build card face content: image on top if present, text below
      const buildFaceContent = (imgUrl, text, textCls, hasImg) => {
        if (hasImg) {
          return `
            <div class="w-full flex-1 flex flex-col items-center gap-3 min-h-0">
              <div class="flex-1 flex items-center justify-center w-full min-h-0">
                <img
                  src="${imgUrl}"
                  alt="card image"
                  class="max-w-full rounded-xl object-contain shadow-lg"
                  style="max-height: ${isFs ? '260px' : '160px'};"
                  onerror="this.style.display='none'"
                />
              </div>
              ${text ? `<p class="${isFs ? 'text-xl font-bold' : 'text-base font-semibold'} text-center leading-snug break-words w-full px-2 opacity-95">${_htmlEsc(text)}</p>` : ''}
            </div>
          `
        }
        return `
          <div class="flex-1 flex items-center justify-center w-full">
            <p class="${textCls} text-center leading-relaxed break-words w-full px-2">${_htmlEsc(text)}</p>
          </div>
        `
      }

      cardContainer.innerHTML = `
        <div class="fc-perspective w-full max-w-xl mx-auto px-4">
          <div id="play-card" class="fc-card ${isFlipped ? 'flipped' : ''}">
            <!-- Front Face -->
            <div class="fc-face fc-front">
              <span class="text-xs uppercase tracking-widest mb-3 opacity-80 flex-shrink-0">ด้านหน้า (โจทย์/ศัพท์)</span>
              ${buildFaceContent(card.front_image_url, card.front_text, textCls, frontHasImg)}
              <span class="text-[11px] opacity-70 mt-3 bg-black/20 px-3 py-1.5 rounded-full border border-white/10 flex-shrink-0">💡 แตะเพื่อเฉลย หรือกด Spacebar</span>
            </div>
            <!-- Back Face -->
            <div class="fc-face fc-back">
              <span class="text-xs uppercase tracking-widest mb-3 opacity-60 flex-shrink-0">ด้านหลัง (เฉลย/คำอธิบาย)</span>
              ${buildFaceContent(card.back_image_url, card.back_text, textCls, backHasImg)}
              <span class="text-[11px] opacity-60 mt-3 bg-black/5 px-3 py-1.5 rounded-full border border-black/10 flex-shrink-0">💡 แตะเพื่อกลับ หรือกด Spacebar</span>
            </div>
          </div>
        </div>
      `      // Apply color theme
      _applyCardThemeColors(activeTheme)

      // Auto-render KaTeX if available
      if (window.renderMathInElement) {
        try {
          window.renderMathInElement(cardContainer, {
            delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false},
              {left: '\\(', right: '\\)', display: false},
              {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError: false
          })
        } catch (mathErr) {
          console.error('Math rendering failed:', mathErr)
        }
      }

      // Add click flip event
      const playCard = document.getElementById('play-card')
      if (playCard) {
        playCard.addEventListener('click', () => {
          _flipCard()
        })
      }

      // Update counters & buttons
      const playCounter = document.getElementById('play-counter')
      if (playCounter) playCounter.textContent = `การ์ดที่ ${currentIndex + 1} จากทั้งหมด ${activeCards.length}`
      const playProgress = document.getElementById('play-progress')
      if (playProgress) playProgress.style.width = `${((currentIndex + 1) / activeCards.length) * 100}%`

      const btnPrev = document.getElementById('play-prev')
      if (btnPrev) {
        btnPrev.disabled = currentIndex === 0
        btnPrev.classList.toggle('opacity-50', currentIndex === 0)
      }
      const btnNext = document.getElementById('play-next')
      if (btnNext) {
        btnNext.disabled = currentIndex === activeCards.length - 1
        btnNext.classList.toggle('opacity-50', currentIndex === activeCards.length - 1)
      }
      
      // Update drawer selection
      _renderDrawerList()
    }

    const _flipCard = () => {
      isFlipped = !isFlipped
      const playCard = document.getElementById('play-card')
      if (playCard) {
        playCard.classList.toggle('flipped', isFlipped)
      }
      autoplayElapsed = 0 // Reset timer on manual flip
    }

    const _nextCard = () => {
      if (currentIndex < activeCards.length - 1) {
        currentIndex++
        isFlipped = false
        flippedThisCard = false
        autoplayElapsed = 0
        _renderCardState()
      } else if (isAutoplay) {
        // Loop back to start if Autoplay reaches end
        currentIndex = 0
        isFlipped = false
        flippedThisCard = false
        autoplayElapsed = 0
        _renderCardState()
      }
    }

    const _prevCard = () => {
      if (currentIndex > 0) {
        currentIndex--
        isFlipped = false
        flippedThisCard = false
        autoplayElapsed = 0
        _renderCardState()
      }
    }

    let isCssFsFallback = false

    const _syncFullscreenState = () => {
      const wrapper = document.getElementById('flashcard-play-wrapper')
      if (!wrapper) return
      const isNativeFs = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      )
      const btn = document.getElementById('btn-toggle-fs')
      const ambientBlobs = wrapper.querySelectorAll('.fc-ambient-blob')

      if (isNativeFs || isCssFsFallback) {
        wrapper.classList.add('fc-fs-wrapper')
        if (btn) {
          btn.innerHTML = '✕ ออกจากเต็มจอ'
          btn.classList.replace('text-gray-600', 'text-white')
          btn.classList.replace('bg-white', 'bg-white/10')
          btn.classList.replace('border-gray-200', 'border-white/15')
        }
        
        // Show ambient blobs
        ambientBlobs.forEach(b => b.classList.remove('hidden'))
        
        // Disable body scroll
        document.body.style.overflow = 'hidden'
      } else {
        wrapper.classList.remove('fc-fs-wrapper')
        if (btn) {
          btn.innerHTML = '🖥️ เต็มจอ'
          btn.classList.replace('text-white', 'text-gray-600')
          btn.classList.replace('bg-white/10', 'bg-white')
          btn.classList.replace('border-white/15', 'border-gray-200')
        }
        
        // Hide ambient blobs
        ambientBlobs.forEach(b => b.classList.add('hidden'))
        
        // Restore body scroll
        document.body.style.overflow = ''
        
        // Hide drawer
        if (isDrawerOpen) _toggleDrawer()
      }
      
      _renderCardState() // Rerender to adjust font sizes + theme
    }

    const _toggleFullscreen = () => {
      const wrapper = document.getElementById('flashcard-play-wrapper')
      if (!wrapper) return

      const isNativeFs = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      )

      if (!isNativeFs && !isCssFsFallback) {
        // Try HTML5 requestFullscreen
        if (wrapper.requestFullscreen) {
          wrapper.requestFullscreen().catch((err) => {
            console.warn('HTML5 requestFullscreen failed, using CSS fallback:', err)
            isCssFsFallback = true
            _syncFullscreenState()
          })
        } else if (wrapper.webkitRequestFullscreen) { /* Safari */
          wrapper.webkitRequestFullscreen()
        } else if (wrapper.msRequestFullscreen) { /* IE11 */
          wrapper.msRequestFullscreen()
        } else {
          isCssFsFallback = true
          _syncFullscreenState()
        }
      } else {
        // Exit Fullscreen
        if (isCssFsFallback) {
          isCssFsFallback = false
          _syncFullscreenState()
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {})
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        }
      }
    }

    // Set up native fullscreen change event listeners
    activeFullscreenChangeHandler = _syncFullscreenState
    document.addEventListener('fullscreenchange', _syncFullscreenState)
    document.addEventListener('webkitfullscreenchange', _syncFullscreenState)
    document.addEventListener('mozfullscreenchange', _syncFullscreenState)
    document.addEventListener('MSFullscreenChange', _syncFullscreenState)

    const _toggleDrawer = () => {
      const drawer = document.getElementById('play-drawer')
      if (!drawer) return
      isDrawerOpen = !isDrawerOpen
      if (isDrawerOpen) {
        drawer.classList.remove('hidden')
        setTimeout(() => drawer.classList.remove('translate-x-full'), 10)
      } else {
        drawer.classList.add('translate-x-full')
        setTimeout(() => drawer.classList.add('hidden'), 300)
      }
    }

    const _toggleShuffle = () => {
      isShuffled = !isShuffled
      const btn = document.getElementById('play-shuffle')
      if (isShuffled) {
        // Shuffle array
        activeCards = [...activeCards].sort(() => Math.random() - 0.5)
        btn.innerHTML = '✅ สลับการ์ดอยู่'
        btn.classList.replace('text-gray-600', 'text-teal-600')
        btn.classList.add('bg-teal-50', 'border-teal-200')
      } else {
        activeCards = [...originalCards]
        btn.innerHTML = '🔀 สลับการ์ด'
        btn.classList.replace('text-teal-600', 'text-gray-600')
        btn.classList.remove('bg-teal-50', 'border-teal-200')
      }
      currentIndex = 0
      isFlipped = false
      flippedThisCard = false
      autoplayElapsed = 0
      _renderCardState()
      showToast(isShuffled ? 'สลับลำดับการ์ดเรียบร้อย' : 'กลับสู่ลำดับเดิม', 'info')
    }

    const _toggleAutoplay = () => {
      isAutoplay = !isAutoplay
      const btn = document.getElementById('play-autoplay')
      const timerContainer = document.getElementById('autoplay-timer-container')
      
      if (isAutoplay) {
        btn.innerHTML = '⏸️ หยุดเล่นออโต้'
        btn.classList.replace('text-gray-600', 'text-amber-600')
        btn.classList.add('bg-amber-50', 'border-amber-200')
        timerContainer.classList.remove('hidden')
        autoplayElapsed = 0
        flippedThisCard = isFlipped
      } else {
        btn.innerHTML = '⏱️ เล่นอัตโนมัติ'
        btn.classList.replace('text-amber-600', 'text-gray-600')
        btn.classList.remove('bg-amber-50', 'border-amber-200')
        timerContainer.classList.add('hidden')
      }
      showToast(isAutoplay ? 'เริ่มเล่นอัตโนมัติ' : 'หยุดเล่นอัตโนมัติ', 'info')
    }

    // Set content and layouts
    setContent(`
      <div id="flashcard-play-wrapper" class="max-w-xl mx-auto space-y-6 relative transition-all duration-300">
        
        <!-- Ambient background blobs -->
        <div class="fc-ambient-blob fc-ambient-1 hidden"></div>
        <div class="fc-ambient-blob fc-ambient-2 hidden"></div>

        <!-- Top bar -->
        <div class="flex items-center justify-between z-10 relative">
          <button id="btn-play-exit" class="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-600 transition flex items-center gap-1.5 shadow-sm">
            ← ออกจากหน้านี้
          </button>
          <div class="flex items-center gap-2">
            <button id="btn-toggle-drawer" class="px-3 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-600 transition flex items-center gap-1 shadow-sm" title="แสดงรายการบัตรคำทั้งหมด">
              📋 รายการคำ
            </button>
            <button id="btn-toggle-fs" class="px-3 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-600 transition flex items-center gap-1 shadow-sm" title="สลับโหมดเต็มจอ">
              🖥️ เต็มจอ
            </button>
            <span id="play-counter" class="text-xs font-bold text-gray-500 bg-white border border-gray-100 px-3 py-2 rounded-xl shadow-sm">การ์ดที่ 1 จาก 1</span>
          </div>
        </div>

        ${classId ? `
        <!-- Class & Score Column Panel -->
        <div id="class-integration-panel" class="bg-indigo-50/75 backdrop-blur-md border border-indigo-100 rounded-2xl p-4 shadow-sm z-10 relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-scaleUp">
          <div class="flex items-center gap-2">
            <span class="text-lg">🏫</span>
            <div>
              <p class="text-xs font-bold text-indigo-900 leading-none">ห้องเรียน ${className ? _htmlEsc(className) : 'ทั่วไป'}</p>
              <p class="text-[10px] text-indigo-500/80 mt-0.5">เลือกช่องคะแนนที่ต้องการบันทึก</p>
            </div>
          </div>
          <div class="w-full sm:w-auto">
            <select id="class-score-column-select" class="w-full sm:w-56 border border-indigo-200 rounded-xl px-3 py-1.5 text-xs text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
              <option value="">-- ไม่เก็บบันทึกคะแนน (สุ่มเพื่อความสนุก) --</option>
              ${classScoreColumns.length === 0 ? `
                <option value="" disabled>-- ไม่มีช่องกรอกคะแนนในระบบ --</option>
              ` : classScoreColumns.map(col => `
                <option value="${col.id}">${_htmlEsc(col.column_name)} (${col.max_score} คะแนน) ${col.assignment_type ? `[${_htmlEsc(col.assignment_type)}]` : ''}</option>
              `).join('')}
            </select>
          </div>
        </div>
        ` : ''}

        <!-- Progress bar -->
        <div class="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden z-10 relative">
          <div id="play-progress" class="bg-teal-500 h-full transition-all duration-300" style="width:0%"></div>
        </div>

        <!-- Play card slot -->
        <div id="play-card-container" class="py-4 z-10 relative"></div>

        <!-- AutoPlay Timer Bar -->
        <div id="autoplay-timer-container" class="w-full bg-gray-100 h-1 overflow-hidden hidden z-10 relative rounded-full">
          <div id="autoplay-timer-bar" class="fc-timer-bar"></div>
        </div>

        <!-- Picked Student Container -->
        <div id="picked-student-container" class="hidden z-10 relative max-w-sm mx-auto w-full transition-all duration-300">
          <!-- Dynamically filled with student card and grading buttons -->
        </div>

        <!-- Controls -->
        <div class="flex flex-col items-center gap-4 z-10 relative">
          ${classId ? `
          <button id="btn-random-student" class="w-full max-w-sm py-3 px-4 rounded-2xl text-white font-bold text-sm shadow-md hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            style="background: linear-gradient(135deg, #f59e0b, #ec4899);">
            🎲 สุ่มรายชื่อนักเรียนตอบคำถาม
          </button>
          ` : ''}
          <div class="flex items-center justify-between gap-3 w-full max-w-sm">
            <button id="play-prev" class="flex-1 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-semibold text-gray-600 transition shadow-sm">
              ◀️ ก่อนหน้า
            </button>
            <button id="play-flip" class="py-3 px-5 rounded-xl bg-teal-100 hover:bg-teal-200 text-teal-700 text-sm font-bold transition shadow-sm">
              🔄 กลับการ์ด
            </button>
            <button id="play-next" class="flex-1 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-semibold text-gray-600 transition shadow-sm">
              ถัดไป ▶️
            </button>
          </div>

          <!-- Extra controls (Shuffle, Autoplay, Keyboard Help) -->
          <div class="flex items-center gap-2 justify-center mt-1">
            <button id="play-shuffle" class="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-600 transition flex items-center gap-1 shadow-sm">
              🔀 สลับการ์ด
            </button>
            <button id="play-autoplay" class="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-600 transition flex items-center gap-1 shadow-sm">
              ⏱️ เล่นอัตโนมัติ
            </button>
            <button id="play-kb-help" class="w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-505 transition flex items-center justify-center shadow-sm" title="ตัวช่วยแป้นพิมพ์">
              ⌨️
            </button>
          </div>
        </div>

        <!-- Collapsible Card List Drawer -->
        <div id="play-drawer" class="hidden fixed right-0 top-0 bottom-0 w-80 bg-slate-950/95 backdrop-blur-md border-l border-slate-800 z-[1000] p-5 flex flex-col justify-between text-white shadow-2xl transition-all duration-300 translate-x-full">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h4 class="font-bold text-sm text-slate-300">รายการบัตรคำในชุดนี้</h4>
              <button id="btn-close-drawer" class="text-slate-400 hover:text-white text-lg">✕</button>
            </div>
            <div id="drawer-card-list" class="space-y-2 overflow-y-auto max-h-[75vh] pr-1 scrollbar-thin">
              <!-- Card items will be listed here -->
            </div>
          </div>
          <div class="text-[11px] text-slate-500 text-center border-t border-slate-900 pt-3">
            คลิกเพื่อเปลี่ยนไปยังการ์ดนั้นๆ
          </div>
        </div>

      </div>
    `)

    _renderCardState()

    // Add button listeners
    document.getElementById('btn-play-exit').addEventListener('click', () => {
      cleanupPlayMode()
      if (classId) {
        import('./teacher-views-classes.js').then(m => m.renderClassDetail(teacher, classId))
      } else {
        renderFlashcardDecks(teacher)
      }
    })
    
    document.getElementById('btn-toggle-fs').addEventListener('click', _toggleFullscreen)
    document.getElementById('btn-toggle-drawer').addEventListener('click', _toggleDrawer)
    document.getElementById('btn-close-drawer').addEventListener('click', _toggleDrawer)
    document.getElementById('play-prev').addEventListener('click', _prevCard)
    document.getElementById('play-next').addEventListener('click', _nextCard)
    document.getElementById('play-flip').addEventListener('click', _flipCard)
    document.getElementById('play-shuffle').addEventListener('click', _toggleShuffle)
    document.getElementById('play-autoplay').addEventListener('click', _toggleAutoplay)
    
    // Keyboard Help Tooltip click
    document.getElementById('play-kb-help').addEventListener('click', () => {
      showToast('⌨️ ตัวช่วยแป้นพิมพ์:\n• Spacebar: กลับการ์ด\n• ArrowRight / D: ถัดไป\n• ArrowLeft / A: ก่อนหน้า\n• F: สลับโหมดเต็มจอ\n• P: เล่นออโต้\n• S: สลับสุ่มการ์ด', 'info', 6000)
    })

    // If launched from classroom detail, initialize class student picker and grading logic
    if (classId) {
      const rosterWithSeats = classStudents.map((s, i) => ({ ...s, seat_no: i + 1 }))
      const pickedContainer = document.getElementById('picked-student-container')
      const btnRandom = document.getElementById('btn-random-student')

      btnRandom.addEventListener('click', () => {
        if (!rosterWithSeats.length) {
          showToast('ไม่มีรายชื่อนักเรียนในห้องเรียนนี้', 'warning')
          return
        }

        // Disable button during animation
        btnRandom.disabled = true
        btnRandom.textContent = '🎲 กำลังสุ่ม...'
        btnRandom.style.opacity = '0.7'

        // Show container in loading/shuffling state
        pickedContainer.classList.remove('hidden')
        
        let elapsed = 0
        const duration = 1200
        const intervalTime = 80

        if (activeRandomInterval) {
          clearInterval(activeRandomInterval)
        }

        activeRandomInterval = setInterval(() => {
          elapsed += intervalTime
          const tempIdx = Math.floor(Math.random() * rosterWithSeats.length)
          const tempStudent = rosterWithSeats[tempIdx]
          
          pickedContainer.innerHTML = `
            <div class="bg-gradient-to-r from-teal-500/10 to-indigo-500/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 shadow-lg flex items-center justify-center space-y-4 animate-pulse">
              <div class="flex items-center gap-3 w-full justify-center">
                <div class="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg animate-spin shrink-0">
                  🎲
                </div>
                <div class="text-left min-w-0">
                  <p class="text-sm font-bold text-gray-800 truncate">${_htmlEsc(tempStudent.full_name)}</p>
                  <p class="text-xs text-gray-500">เลขที่: ${tempStudent.seat_no}</p>
                </div>
              </div>
            </div>
          `

          if (elapsed >= duration) {
            clearInterval(activeRandomInterval)
            activeRandomInterval = null
            
            // Pick final student
            const finalIdx = Math.floor(Math.random() * rosterWithSeats.length)
            const student = rosterWithSeats[finalIdx]

            // Render final card
            pickedContainer.innerHTML = `
              <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 shadow-lg flex flex-col items-center text-center space-y-4 animate-scaleUp">
                <div class="flex items-center gap-3 w-full">
                  <div class="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0 border border-white/20 overflow-hidden">
                    ${student.image_url ? `<img src="${student.image_url}" class="w-full h-full object-cover" />` : `<span class="uppercase">${_htmlEsc((student.full_name || '').charAt(0))}</span>`}
                  </div>
                  <div class="text-left flex-1 min-w-0">
                    <p class="text-sm font-bold text-gray-800 truncate">${_htmlEsc(student.full_name)}</p>
                    <p class="text-xs text-gray-500">เลขประจำตัว: ${_htmlEsc(student.student_code || '-')} | เลขที่: ${student.seat_no || '-'}</p>
                  </div>
                  <button id="btn-close-student-card" class="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 text-xs transition">✕</button>
                </div>
                
                <div class="w-full pt-3 border-t border-gray-100/50">
                  <p class="text-[10px] font-semibold text-indigo-500/80 uppercase tracking-wider mb-2">บันทึกคะแนนผู้ตอบคำถาม</p>
                  <div class="grid grid-cols-3 gap-2">
                    <button id="score-right" class="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-xs shadow-sm transition flex flex-col items-center justify-center gap-0.5">
                      <span>👍 ถูก</span>
                      <span class="text-[9px] font-normal opacity-90">(+1 คะแนน)</span>
                    </button>
                    <button id="score-wrong" class="py-2.5 px-3 rounded-xl bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-bold text-xs shadow-sm transition flex flex-col items-center justify-center gap-0.5">
                      <span>👎 ผิด</span>
                      <span class="text-[9px] font-normal opacity-90">(0 คะแนน)</span>
                    </button>
                    <button id="score-custom" class="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-xs shadow-sm transition flex flex-col items-center justify-center gap-0.5">
                      <span>✏️ ระบุเอง</span>
                      <span class="text-[9px] font-normal opacity-90">(กำหนดเอง)</span>
                    </button>
                  </div>
                </div>
              </div>
            `

            // Re-enable button
            btnRandom.disabled = false
            btnRandom.textContent = '🎲 สุ่มรายชื่อนักเรียนตอบคำถาม'
            btnRandom.style.opacity = '1'

            // Bind handlers on new elements
            document.getElementById('btn-close-student-card').addEventListener('click', () => {
              pickedContainer.classList.add('hidden')
              pickedContainer.innerHTML = ''
            })

            const saveScore = async (score) => {
              const colSelect = document.getElementById('class-score-column-select')
              const columnId = colSelect ? colSelect.value : null
              if (!columnId) {
                showToast('กรุณาเลือกช่องบันทึกคะแนนใน "ห้องเรียน" ด้านบนก่อนให้คะแนนสะสม', 'warning')
                return
              }
              const saveBtn = document.activeElement
              if (saveBtn) {
                saveBtn.disabled = true
                saveBtn.style.opacity = '0.5'
              }
              try {
                // Fetch current score history for delta mode
                let currentHistory = []
                const { data: scoreRec } = await supabase
                  .from('student_scores')
                  .select('score_history')
                  .eq('student_id', student.id)
                  .eq('assignment_id', parseInt(columnId))
                  .maybeSingle()
                if (scoreRec && Array.isArray(scoreRec.score_history)) {
                  currentHistory = scoreRec.score_history
                }

                const currentTotal = currentHistory.reduce((s, e) => s + e.d, 0)
                const newTotal = currentTotal + score

                const selectedCol = classScoreColumns.find(c => c.id == columnId)
                const maxScore = selectedCol ? selectedCol.max_score : 100
                if (newTotal > maxScore) {
                  showToast(`คะแนนรวมใหม่ (${newTotal}) จะเกินคะแนนเต็มสูงสุด (${maxScore})`, 'error')
                  return
                }

                // Save score as delta
                const res = await saveStudentScore(classId, student.id, parseInt(columnId), score, {
                  delta: true,
                  currentHistory: currentHistory
                })
                
                const finalScore = res?.final ?? newTotal
                showToast(`บันทึกคะแนนให้ ${student.full_name} เรียบร้อยแล้ว (คะแนนรวมใหม่: ${finalScore}/${maxScore})`, 'success')
                pickedContainer.classList.add('hidden')
                pickedContainer.innerHTML = ''
              } catch (err) {
                showToast('บันทึกคะแนนไม่สำเร็จ: ' + (err.message ?? ''), 'error')
              } finally {
                if (saveBtn) {
                  saveBtn.disabled = false
                  saveBtn.style.opacity = '1'
                }
              }
            }

            document.getElementById('score-right').addEventListener('click', () => saveScore(1))
            document.getElementById('score-wrong').addEventListener('click', () => saveScore(0))
            document.getElementById('score-custom').addEventListener('click', async () => {
              const colSelect = document.getElementById('class-score-column-select')
              const columnId = colSelect ? colSelect.value : null
              if (!columnId) {
                showToast('กรุณาเลือกช่องบันทึกคะแนนใน "ห้องเรียน" ด้านบนก่อนให้คะแนนสะสม', 'warning')
                return
              }
              const selectedCol = classScoreColumns.find(c => c.id == columnId)
              const maxScore = selectedCol ? selectedCol.max_score : 100

              // Load current score to show in the prompt
              let currentTotal = 0
              try {
                const { data: scoreRec } = await supabase
                  .from('student_scores')
                  .select('score_history')
                  .eq('student_id', student.id)
                  .eq('assignment_id', parseInt(columnId))
                  .maybeSingle()
                if (scoreRec && Array.isArray(scoreRec.score_history)) {
                  currentTotal = scoreRec.score_history.reduce((s, e) => s + e.d, 0)
                }
              } catch (err) {
                console.warn(err)
              }

              const input = prompt(`คะแนนปัจจุบันของ ${student.full_name} คือ ${currentTotal}/${maxScore}\nระบุคะแนนที่ต้องการบวกเพิ่ม (เช่น 1.5, 2, -1):`, '1')
              if (input === null) return
              const scoreVal = parseFloat(input)
              if (isNaN(scoreVal)) {
                showToast(`กรุณากรอกตัวเลขคะแนนที่ถูกต้อง`, 'error')
                return
              }
              await saveScore(scoreVal)
            })
          }
        }, intervalTime)
      })
    }

    // Setup self-monitoring interval (Ticks every 100ms)
    activeAutoplayInterval = setInterval(() => {
      // Self-destruct if the container was removed from DOM (e.g. navigated away via sidebar)
      const container = document.getElementById('play-card-container')
      if (!container) {
        cleanupPlayMode()
        return
      }

      // Autoplay ticking logic
      if (isAutoplay) {
        autoplayElapsed += timerStep
        const pct = Math.min((autoplayElapsed / autoplayDuration) * 100, 100)
        const timerBar = document.getElementById('autoplay-timer-bar')
        if (timerBar) {
          timerBar.style.width = `${pct}%`
        }

        if (autoplayElapsed >= autoplayDuration) {
          autoplayElapsed = 0
          if (!flippedThisCard) {
            // Step 1: Flip to show back
            _flipCard()
            flippedThisCard = true
          } else {
            // Step 2: Next card and flip back to front
            _nextCard()
          }
        }
      }
    }, timerStep)

    // Keyboard Shortcuts Listener
    const handleGlobalKeydown = (e) => {
      // Check if we navigated away
      if (!document.getElementById('play-card-container')) {
        cleanupPlayMode()
        return
      }

      // Avoid firing hotkeys when typing in search or inputs
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return

      const key = e.key.toLowerCase()
      
      if (e.code === 'Space' || key === 'spacebar') {
        e.preventDefault()
        _flipCard()
      } else if (key === 'arrowright' || key === 'd') {
        e.preventDefault()
        _nextCard()
      } else if (key === 'arrowleft' || key === 'a') {
        e.preventDefault()
        _prevCard()
      } else if (key === 'f') {
        e.preventDefault()
        _toggleFullscreen()
      } else if (key === 'p') {
        e.preventDefault()
        _toggleAutoplay()
      } else if (key === 's') {
        e.preventDefault()
        _toggleShuffle()
      } else if (key === 'm') {
        e.preventDefault()
        _toggleDrawer()
      } else if (e.key === 'Escape' && document.getElementById('flashcard-play-wrapper')?.classList.contains('fc-fs-wrapper')) {
        e.preventDefault()
        _toggleFullscreen()
      }
    }

    document.addEventListener('keydown', handleGlobalKeydown)
    activeGlobalKeydownHandler = handleGlobalKeydown // Save for cleanups

  } catch (err) {
    showToast('โหลดข้อมูลล้มเหลว: ' + (err.message ?? ''), 'error')
    renderFlashcardDecks(teacher)
  }
}

// ─── Edit Deck Form (Creates / Modifies Deck and Cards) ──────────────────────
async function _renderDeckForm(teacher, deck = null) {
  cleanupPlayMode()
  setActiveNav('flashcards')
  setTitle(deck ? `แก้ไขชุดบัตรคำ` : `สร้างชุดบัตรคำใหม่`)

  setContent(`
    <div class="max-w-3xl mx-auto space-y-6">
      <!-- Title input group -->
      <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm space-y-4">
        <h3 class="font-bold text-gray-800 text-sm">ข้อมูลทั่วไปของชุดบัตรคำ</h3>
        <div class="space-y-3">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">หัวข้อ/วิชา <span class="text-red-500">*</span></label>
            <input id="form-deck-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500" placeholder="เช่น คำศัพท์ภาษาอังกฤษ ป.5" value="${deck ? _htmlEsc(deck.title) : ''}" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">คำอธิบาย (ไม่บังคับ)</label>
            <textarea id="form-deck-desc" rows="2" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none focus:border-teal-500" placeholder="เช่น ใช้ทบทวนคำแปลในบทที่ 1-3">${deck ? _htmlEsc(deck.description ?? '') : ''}</textarea>
          </div>
        </div>
      </div>

      <!-- Generator tools row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- AI Generator -->
        <div class="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-3xl border border-indigo-100 p-5 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">✨</span>
            <div>
              <h4 class="font-bold text-indigo-900 text-sm">สร้างด้วย Gemini AI</h4>
              <p class="text-[10px] text-indigo-500 leading-tight">ระบุหัวข้อแล้วปล่อยให้ปัญญาประดิษฐ์เขียนหัวข้อและคำเฉลยให้</p>
            </div>
          </div>

          <!-- Language Selector -->
          <div>
            <p class="text-[10px] font-semibold text-indigo-700 mb-1.5">🌐 ภาษาที่ต้องการ</p>
            <div id="ai-lang-picker" class="flex flex-wrap gap-1.5">
              <button type="button" data-lang="thai" class="ai-lang-btn selected px-3 py-1.5 rounded-full text-[11px] font-bold border transition">🇹🇭 ภาษาไทย</button>
              <button type="button" data-lang="english" class="ai-lang-btn px-3 py-1.5 rounded-full text-[11px] font-bold border transition">🇬🇧 English</button>
              <button type="button" data-lang="yawi" class="ai-lang-btn px-3 py-1.5 rounded-full text-[11px] font-bold border transition">🌙 ยาวี</button>
              <button type="button" data-lang="arabic" class="ai-lang-btn px-3 py-1.5 rounded-full text-[11px] font-bold border transition">🕌 Arabic</button>
              <button type="button" data-lang="mixed" class="ai-lang-btn px-3 py-1.5 rounded-full text-[11px] font-bold border transition">🔀 ผสม</button>
            </div>
          </div>

          <div class="flex gap-2">
            <input id="ai-topic" type="text" class="flex-1 border border-indigo-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-400 bg-white" placeholder="เช่น ศัพท์สิ่งของในบ้าน, สูตรคูณ, หลักธรรม..." />
            <button id="btn-ai-gen" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs whitespace-nowrap shadow-sm transition">
              ร่างโดย AI
            </button>
          </div>
        </div>

        <!-- CSV Import -->
        <div class="bg-gray-50 rounded-3xl border border-gray-200 p-5 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">📎</span>
            <div>
              <h4 class="font-bold text-gray-800 text-sm">นำเข้าจาก CSV</h4>
              <p class="text-[10px] text-gray-400 leading-tight">เลือกไฟล์ CSV ที่เขียนขึ้นเองเพื่อเพิ่มบัตรคำอย่างรวดเร็ว</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <label class="px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-xs font-bold text-gray-600 cursor-pointer shadow-sm">
              เลือกไฟล์ CSV...
              <input type="file" id="csv-file-input" accept=".csv" class="sr-only" />
            </label>
            <button id="btn-download-csv" class="text-xs text-indigo-600 hover:underline">
              ⬇️ ดาวน์โหลดตัวอย่าง CSV
            </button>
          </div>
        </div>
      </div>

      <!-- Card Color Theme Picker -->
      <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">🎨 ธีมสีของการ์ด</h3>
            <p class="text-[10px] text-gray-400 mt-0.5">เลือกสีที่ต้องการ — ใช้ในโหมดเล่นและบันทึกเป็นค่าเริ่มต้นของชุดนี้</p>
          </div>
          <span id="theme-label-display" class="text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100"></span>
        </div>
        <div id="deck-theme-picker" class="flex flex-wrap gap-2.5">
          ${FC_THEMES.map(t => `
            <button type="button"
              class="fc-theme-dot-btn"
              data-theme-id="${t.id}"
              title="${t.label}"
              style="width:32px;height:32px;border-radius:50%;background:${t.dot};border:2px solid transparent;transition:transform 0.15s,box-shadow 0.15s;box-shadow:0 2px 6px rgba(0,0,0,0.15);cursor:pointer;"
            ></button>
          `).join('')}
        </div>
      </div>

      <!-- Card list builder -->
      <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">รายการบัตรคำศัพท์</h3>
          <button id="btn-add-card-row" class="px-3.5 py-1.5 rounded-xl border border-teal-200 text-teal-600 hover:bg-teal-50 text-xs font-bold transition">
            ＋ เพิ่มแถว
          </button>
        </div>

        <!-- Cards items list -->
        <div id="cards-rows-list" class="space-y-3 divide-y divide-gray-100 max-h-[400px] overflow-y-auto pr-1">
          <!-- Rows will be injected here -->
        </div>

        <div id="cards-empty-notice" class="hidden text-center text-xs text-gray-400 py-6">
          ยังไม่มีบัตรคำ กดปุ่ม "เพิ่มแถว" ด้านบน หรือใช้ระบบนำเข้าด้านบนได้เลยครับ
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex gap-3">
        <button id="form-cancel" class="flex-1 py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 text-sm font-bold transition">
          ยกเลิก
        </button>
        <button id="form-save" class="flex-1 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-lg transition">
          💾 บันทึกข้อมูล
        </button>
      </div>
    </div>
  `)

  let initialCards = []
  if (deck) {
    showPageLoader(true)
    try {
      initialCards = await getFlashcards(deck.id)
    } catch (err) {
      showToast('ไม่สามารถดึงข้อมูลบัตรคำย่อยได้', 'error')
    } finally {
      showPageLoader(false)
    }
  }

  const rowsList = document.getElementById('cards-rows-list')
  const emptyNotice = document.getElementById('cards-empty-notice')

  const _checkEmpty = () => {
    const rows = rowsList.querySelectorAll('.card-row-item')
    emptyNotice.classList.toggle('hidden', rows.length > 0)
  }

  // Helper to add card row HTML — supports optional pre-existing image URLs
  const addCardRow = (front = '', back = '', frontImgUrl = '', backImgUrl = '') => {
    const rowId = `row_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`
    const div = document.createElement('div')
    div.className = 'card-row-item flex items-start gap-3 pt-3 first:pt-0'
    div.dataset.frontImg = frontImgUrl || ''
    div.dataset.backImg  = backImgUrl  || ''

    const thumbStyle = (url) => url
      ? `<img src="${url}" class="w-12 h-12 object-cover rounded-lg border border-gray-200 shadow-sm" />`
      : `<span class="w-12 h-12 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300 text-xl bg-gray-50">🖼️</span>`

    div.innerHTML = `
      <div class="flex-1 space-y-2">
        <!-- Front row -->
        <div class="flex items-center gap-2">
          <label class="card-img-front-thumb cursor-pointer flex-shrink-0" title="เพิ่มรูปด้านหน้า">
            ${thumbStyle(frontImgUrl)}
            <input type="file" class="card-img-front-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />
          </label>
          <input type="text" class="card-input-front w-full border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-teal-500" placeholder="ด้านหน้า (โจทย์/คำ)" value="${_htmlEsc(front)}" />
        </div>
        <!-- Back row -->
        <div class="flex items-center gap-2">
          <label class="card-img-back-thumb cursor-pointer flex-shrink-0" title="เพิ่มรูปด้านหลัง">
            ${thumbStyle(backImgUrl)}
            <input type="file" class="card-img-back-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />
          </label>
          <input type="text" class="card-input-back w-full border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-teal-500" placeholder="ด้านหลัง (คำแปล/เฉลย)" value="${_htmlEsc(back)}" />
        </div>
        <p class="text-[10px] text-gray-400 pl-14">📷 คลิกไอคอนรูปเพื่ออัปโหลด (บีบอัดอัตโนมัติ ≤100 KB)</p>
      </div>
      <button type="button" class="btn-remove-row text-gray-300 hover:text-red-500 text-xl font-semibold leading-none py-1.5 px-2 rounded-lg hover:bg-red-50 transition flex-shrink-0">
        &times;
      </button>
    `
    rowsList.appendChild(div)
    _checkEmpty()

    // Bind image upload for front
    const frontInput = div.querySelector('.card-img-front-input')
    const frontThumb = div.querySelector('.card-img-front-thumb')
    frontInput.addEventListener('change', async (e) => {
      const file = e.target.files[0]
      if (!file) return
      const loadingHtml = `<span class="w-12 h-12 rounded-lg border border-indigo-200 bg-indigo-50 flex items-center justify-center text-indigo-400 text-[10px] font-semibold animate-pulse">บีบ...</span>`
      frontThumb.innerHTML = loadingHtml + `<input type="file" class="card-img-front-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />`
      try {
        const blob = await _compressImage(file)
        const previewUrl = URL.createObjectURL(blob)
        div.dataset.frontImg = previewUrl
        div.dataset.frontImgBlob = 'pending' // mark as needing upload
        div._frontImgBlob = blob // store blob reference on element
        frontThumb.innerHTML = `<img src="${previewUrl}" class="w-12 h-12 object-cover rounded-lg border-2 border-indigo-400 shadow-sm" /><input type="file" class="card-img-front-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />`
        const sizeKb = Math.round(blob.size / 1024)
        showToast(`บีบอัดรูปด้านหน้าเสร็จแล้ว (${sizeKb} KB) — จะอัปโหลดเมื่อกดบันทึก`, 'info')
      } catch (err) {
        showToast('ไม่สามารถประมวลผลรูปได้: ' + err.message, 'error')
        frontThumb.innerHTML = thumbStyle('') + `<input type="file" class="card-img-front-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />`
      }
      // Re-bind file input
      frontThumb.querySelector('.card-img-front-input').addEventListener('change', frontInput.onchange)
    })

    // Bind image upload for back
    const backInput = div.querySelector('.card-img-back-input')
    const backThumb = div.querySelector('.card-img-back-thumb')
    backInput.addEventListener('change', async (e) => {
      const file = e.target.files[0]
      if (!file) return
      const loadingHtml = `<span class="w-12 h-12 rounded-lg border border-indigo-200 bg-indigo-50 flex items-center justify-center text-indigo-400 text-[10px] font-semibold animate-pulse">บีบ...</span>`
      backThumb.innerHTML = loadingHtml + `<input type="file" class="card-img-back-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />`
      try {
        const blob = await _compressImage(file)
        const previewUrl = URL.createObjectURL(blob)
        div.dataset.backImg = previewUrl
        div.dataset.backImgBlob = 'pending'
        div._backImgBlob = blob
        backThumb.innerHTML = `<img src="${previewUrl}" class="w-12 h-12 object-cover rounded-lg border-2 border-indigo-400 shadow-sm" /><input type="file" class="card-img-back-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />`
        const sizeKb = Math.round(blob.size / 1024)
        showToast(`บีบอัดรูปด้านหลังเสร็จแล้ว (${sizeKb} KB) — จะอัปโหลดเมื่อกดบันทึก`, 'info')
      } catch (err) {
        showToast('ไม่สามารถประมวลผลรูปได้: ' + err.message, 'error')
        backThumb.innerHTML = thumbStyle('') + `<input type="file" class="card-img-back-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />`
      }
      backThumb.querySelector('.card-img-back-input').addEventListener('change', backInput.onchange)
    })

    // Remove row handler
    div.querySelector('.btn-remove-row').addEventListener('click', () => {
      div.remove()
      _checkEmpty()
    })
  }

  // Pre-populate existing cards
  if (initialCards.length > 0) {
    initialCards.forEach(c => addCardRow(c.front_text, c.back_text, c.front_image_url || '', c.back_image_url || ''))
  } else {
    // If empty new deck form, prefill 3 rows
    if (!deck) {
      for (let i = 0; i < 3; i++) addCardRow()
    }
  }

  _checkEmpty()

  // Manual Add Card Button
  document.getElementById('btn-add-card-row').addEventListener('click', () => addCardRow())

  // Cancel button
  // ── Language Picker ──────────────────────────────────────────────────────────
  let selectedLang = 'thai'
  const langBtns = document.querySelectorAll('.ai-lang-btn')
  const _updateLangUI = () => {
    langBtns.forEach(b => {
      const active = b.dataset.lang === selectedLang
      b.style.background    = active ? '#4f46e5' : 'white'
      b.style.color         = active ? 'white'   : '#4338ca'
      b.style.borderColor   = active ? '#4f46e5' : '#c7d2fe'
      b.style.boxShadow     = active ? '0 2px 8px rgba(79,70,229,0.35)' : 'none'
    })
  }
  _updateLangUI()
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedLang = btn.dataset.lang
      _updateLangUI()
    })
  })

  // ── Color Theme Picker ────────────────────────────────────────────────────────
  const savedEditThemeId = localStorage.getItem(`fc_theme_${deck?.id || 'new'}`) || 'teal'
  let selectedThemeId = savedEditThemeId
  const themeDots = document.querySelectorAll('.fc-theme-dot-btn')
  const themeLabel = document.getElementById('theme-label-display')

  const _updateThemeUI = () => {
    themeDots.forEach(dot => {
      const active = dot.dataset.themeId === selectedThemeId
      dot.style.transform  = active ? 'scale(1.25)' : 'scale(1)'
      dot.style.boxShadow  = active ? `0 0 0 3px white, 0 0 0 5px ${getTheme(selectedThemeId).blob1}` : '0 2px 6px rgba(0,0,0,0.15)'
      dot.style.borderColor = active ? 'transparent' : 'transparent'
    })
    themeLabel.textContent = getTheme(selectedThemeId).label
  }
  _updateThemeUI()
  themeDots.forEach(dot => {
    dot.addEventListener('click', () => {
      selectedThemeId = dot.dataset.themeId
      if (deck?.id) localStorage.setItem(`fc_theme_${deck.id}`, selectedThemeId)
      _updateThemeUI()
    })
  })

  // Cancel button
  document.getElementById('form-cancel').addEventListener('click', () => renderFlashcardDecks(teacher))

  // AI Generator Integration
  document.getElementById('btn-ai-gen').addEventListener('click', async () => {
    const topic = document.getElementById('ai-topic').value.trim()
    if (!topic) {
      showToast('กรุณาระบุหัวข้อคำศัพท์ที่ต้องการร่างข้อมูล', 'warning')
      return
    }

    const btn = document.getElementById('btn-ai-gen')
    setButtonLoading(btn, true)
    try {
      // Language-aware prompt builder
      const langMap = {
        thai:    { rule: 'Write BOTH front_text and back_text entirely in Thai (ภาษาไทย). Exception: keep technical terms in original.', frontHint: 'Term, question or prompt in Thai', backHint: 'Answer or explanation in Thai' },
        english: { rule: 'Write BOTH front_text and back_text entirely in English. No Thai.', frontHint: 'Term or question in English', backHint: 'Answer or explanation in English' },
        yawi:    { rule: 'Write BOTH front_text and back_text in Yawi (Pattani Malay, Jawi/Arabic script). Use Rumi Malay as fallback if needed.', frontHint: 'Term in Yawi/Malay', backHint: 'Meaning in Yawi/Malay' },
        arabic:  { rule: 'اكتب كلا الحقلين باللغة العربية الفصحى فقط.', frontHint: 'المصطلح أو السؤال بالعربية', backHint: 'الإجابة أو الشرح بالعربية' },
        mixed:   { rule: 'front_text in English, back_text in Thai. Bilingual vocabulary cards.', frontHint: 'English term', backHint: 'Thai translation' },
      }
      const lang = langMap[selectedLang] || langMap.thai
      const prompt = [
        'Generate flashcard JSON for topic: "' + topic + '". About 10-12 cards.',
        'Reply with a JSON Array ONLY. No markdown, no text outside JSON.',
        '',
        'Language rule: ' + lang.rule,
        '',
        'Each object must have:',
        '1. "front_text" — ' + lang.frontHint,
        '2. "back_text"  — ' + lang.backHint,
        '',
        'Math/Science: use LaTeX in $ signs e.g. $x^2$, $\\\\frac{a}{b}$',
        '',
        'Example: [{"front_text":"...","back_text":"..."}]'
      ].join('\n')

      const { data: json, error: fnErr } = await supabase.functions.invoke('gemini-proxy', {
        body: {
          prompt,
          maxTokens: 4000
        }
      })

      if (fnErr || !json) throw new Error(fnErr?.message ?? 'AI Response is empty')

      // Extract generated text
      let text = ''
      if (json.candidates && json.candidates[0] && json.candidates[0].content && json.candidates[0].content.parts) {
        text = json.candidates[0].content.parts[0].text ?? ''
      } else if (json.text) {
        text = json.text
      }

      // Clean markdown tags if Gemini wrapping it in ```json ... ```
      text = text.trim()
      if (text.startsWith('`' + '`' + '`')) {
        text = text.replace(new RegExp('^`{3}(json)?'), '').replace(new RegExp('`{3}$'), '').trim()
      }

      let generated
      try {
        generated = JSON.parse(text)
      } catch (e) {
        // Try extracting array pattern [ ... ] in case of leading/trailing conversation text
        const match = text.match(/\[\s*\{[\s\S]*\}\s*\]/)
        if (match) {
          try {
            generated = JSON.parse(match[0])
          } catch (e2) {
            throw new Error('AI ตอบกลับในรูปแบบที่ไม่ใช่ JSON อาร์เรย์: ' + e.message)
          }
        } else {
          throw new Error('AI ตอบกลับในรูปแบบที่ไม่ใช่ JSON อาร์เรย์: ' + e.message)
        }
      }
      if (!Array.isArray(generated)) throw new Error('AI Response is not a JSON Array')

      // Clear empty default rows if any
      const existingRows = rowsList.querySelectorAll('.card-row-item')
      let clearedAny = false
      existingRows.forEach(row => {
        const front = row.querySelector('.card-input-front').value.trim()
        const back = row.querySelector('.card-input-back').value.trim()
        if (!front && !back) {
          row.remove()
          clearedAny = true
        }
      })

      // Add to list
      generated.forEach(item => {
        addCardRow(item.front_text, item.back_text)
      })

      showToast(`สร้างข้อมูล AI เรียบร้อย เพิ่มแล้ว ${generated.length} รายการ`, 'success')
      document.getElementById('ai-topic').value = ''

    } catch (err) {
      showToast('AI ไม่สามารถร่างข้อมูลได้: ' + (err.message ?? ''), 'error')
    } finally {
      setButtonLoading(btn, false, 'ร่างโดย AI')
      _checkEmpty()
    }
  })

  // Download template CSV
  document.getElementById('btn-download-csv').addEventListener('click', () => {
    const csvContent = 'data:text/csv;charset=utf-8,front_text,back_text\nHello,สวัสดี\nThank you,ขอบคุณ\nWelcome,ยินดีต้อนรับ\nCat,แมว\nDog,สุนัข'
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'flashcard_template.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })

  // CSV Import file input listener
  document.getElementById('csv-file-input').addEventListener('change', e => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = evt => {
      const text = evt.target.result
      const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
      if (lines.length <= 1) {
        showToast('ไฟล์ CSV ว่างเปล่า หรือไม่มีข้อมูล', 'warning')
        return
      }

      // Detect header index
      let startIndex = 0
      const firstLine = lines[0].toLowerCase()
      if (firstLine.includes('front_text') || firstLine.includes('front') || firstLine.includes('back_text')) {
        startIndex = 1 // Skip header row
      }

      let count = 0
      for (let i = startIndex; i < lines.length; i++) {
        // Simple comma split, but handle quotes later if needed
        const parts = lines[i].split(',').map(s => s.trim().replace(/^["']|["']$/g, ''))
        if (parts.length >= 2) {
          addCardRow(parts[0], parts[1])
          count++
        }
      }

      showToast(`นำเข้าสำเร็จ ${count} รายการ`, 'success')
      e.target.value = '' // Reset file input
    }
    reader.readAsText(file)
  })

  // Save Deck and Cards
  document.getElementById('form-save').addEventListener('click', async () => {
    const title = document.getElementById('form-deck-title').value.trim()
    const description = document.getElementById('form-deck-desc').value.trim()

    if (!title) {
      showToast('กรุณากรอกหัวข้อชุดบัตรคำ', 'warning')
      return
    }

    // Collect card items (pre-scan for pending uploads)
    const rows = [...rowsList.querySelectorAll('.card-row-item')]
    const hasImages = rows.some(r => r.dataset.frontImgBlob === 'pending' || r.dataset.backImgBlob === 'pending')

    const btn = document.getElementById('form-save')
    setButtonLoading(btn, true, hasImages ? '⏫ กำลังอัปโหลดรูป...' : '💾 กำลังบันทึก...')

    try {
      // Step 1: Upload any pending blobs
      for (const row of rows) {
        if (row._frontImgBlob) {
          try {
            const url = await uploadFlashcardImage(teacher.id, row._frontImgBlob, 'front')
            row.dataset.frontImg = url
            delete row._frontImgBlob
            row.dataset.frontImgBlob = ''
          } catch (uploadErr) {
            console.warn('Front image upload failed:', uploadErr)
            row.dataset.frontImg = '' // skip on error
          }
        }
        if (row._backImgBlob) {
          try {
            const url = await uploadFlashcardImage(teacher.id, row._backImgBlob, 'back')
            row.dataset.backImg = url
            delete row._backImgBlob
            row.dataset.backImgBlob = ''
          } catch (uploadErr) {
            console.warn('Back image upload failed:', uploadErr)
            row.dataset.backImg = ''
          }
        }
      }

      // Step 2: Collect card data
      const cardData = []
      rows.forEach(row => {
        const front = row.querySelector('.card-input-front').value.trim()
        const back  = row.querySelector('.card-input-back').value.trim()
        if (front && back) {
          const frontImg = row.dataset.frontImg || ''
          const backImg  = row.dataset.backImg  || ''
          cardData.push({
            front_text:      front,
            back_text:       back,
            front_image_url: frontImg.startsWith('http') ? frontImg : null,
            back_image_url:  backImg.startsWith('http')  ? backImg  : null,
          })
        }
      })

      // Step 3: Save deck metadata
      let savedDeck = deck
      if (deck) {
        savedDeck = await updateFlashcardDeck(deck.id, { title, description })
      } else {
        savedDeck = await createFlashcardDeck({ teacher_id: teacher.id, title, description })
      }

      // Step 4: Save card list items
      await saveFlashcards(savedDeck.id, cardData)

      showToast('บันทึกชุดบัตรคำเรียบร้อยแล้ว', 'success')
      renderFlashcardDecks(teacher)

    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      setButtonLoading(btn, false, '💾 บันทึกข้อมูล')
    }
  })

  // Download template CSV
  document.getElementById('btn-download-csv').addEventListener('click', () => {
    const csvContent = 'data:text/csv;charset=utf-8,front_text,back_text\nHello,สวัสดี\nThank you,ขอบคุณ\nWelcome,ยินดีต้อนรับ\nCat,แมว\nDog,สุนัข'
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'flashcard_template.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })

  // CSV Import file input listener
  document.getElementById('csv-file-input').addEventListener('change', e => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = evt => {
      const text = evt.target.result
      const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
      if (lines.length <= 1) {
        showToast('ไฟล์ CSV ว่างเปล่า หรือไม่มีข้อมูล', 'warning')
        return
      }

      // Detect header index
      let startIndex = 0
      const firstLine = lines[0].toLowerCase()
      if (firstLine.includes('front_text') || firstLine.includes('front') || firstLine.includes('back_text')) {
        startIndex = 1 // Skip header row
      }

      let count = 0
      for (let i = startIndex; i < lines.length; i++) {
        // Simple comma split, but handle quotes later if needed
        const parts = lines[i].split(',').map(s => s.trim().replace(/^["']|["']$/g, ''))
        if (parts.length >= 2) {
          addCardRow(parts[0], parts[1])
          count++
        }
      }

      showToast(`นำเข้าสำเร็จ ${count} รายการ`, 'success')
      e.target.value = '' // Reset file input
    }
    reader.readAsText(file)
  })

  // Save Deck and Cards
  document.getElementById('form-save').addEventListener('click', async () => {
    const title = document.getElementById('form-deck-title').value.trim()
    const description = document.getElementById('form-deck-desc').value.trim()

    if (!title) {
      showToast('กรุณากรอกหัวข้อชุดบัตรคำ', 'warning')
      return
    }

    // Collect card items (pre-scan for pending uploads)
    const rows = [...rowsList.querySelectorAll('.card-row-item')]
    const hasImages = rows.some(r => r.dataset.frontImgBlob === 'pending' || r.dataset.backImgBlob === 'pending')

    const btn = document.getElementById('form-save')
    setButtonLoading(btn, true, hasImages ? '⏫ กำลังอัปโหลดรูป...' : '💾 กำลังบันทึก...')

    try {
      // Step 1: Upload any pending blobs
      for (const row of rows) {
        if (row._frontImgBlob) {
          try {
            const url = await uploadFlashcardImage(teacher.id, row._frontImgBlob, 'front')
            row.dataset.frontImg = url
            delete row._frontImgBlob
            row.dataset.frontImgBlob = ''
          } catch (uploadErr) {
            console.warn('Front image upload failed:', uploadErr)
            row.dataset.frontImg = '' // skip on error
          }
        }
        if (row._backImgBlob) {
          try {
            const url = await uploadFlashcardImage(teacher.id, row._backImgBlob, 'back')
            row.dataset.backImg = url
            delete row._backImgBlob
            row.dataset.backImgBlob = ''
          } catch (uploadErr) {
            console.warn('Back image upload failed:', uploadErr)
            row.dataset.backImg = ''
          }
        }
      }

      // Step 2: Collect card data
      const cardData = []
      rows.forEach(row => {
        const front = row.querySelector('.card-input-front').value.trim()
        const back  = row.querySelector('.card-input-back').value.trim()
        if (front && back) {
          const frontImg = row.dataset.frontImg || ''
          const backImg  = row.dataset.backImg  || ''
          cardData.push({
            front_text:      front,
            back_text:       back,
            front_image_url: frontImg.startsWith('http') ? frontImg : null,
            back_image_url:  backImg.startsWith('http')  ? backImg  : null,
          })
        }
      })

      // Step 3: Save deck metadata
      let savedDeck = deck
      if (deck) {
        savedDeck = await updateFlashcardDeck(deck.id, { title, description })
      } else {
        savedDeck = await createFlashcardDeck({ teacher_id: teacher.id, title, description })
      }

      // Step 4: Save card list items
      await saveFlashcards(savedDeck.id, cardData)

      // Step 5: Persist theme preference for this deck
      localStorage.setItem(`fc_theme_${savedDeck.id}`, selectedThemeId)

      showToast('บันทึกชุดบัตรคำเรียบร้อยแล้ว', 'success')
      renderFlashcardDecks(teacher)

    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      setButtonLoading(btn, false, '💾 บันทึกข้อมูล')
    }
  })
}
