import {
  getTutorialCategories, getTutorialVideos, getTutorialByPage,
  createTutorialCategory, updateTutorialCategory, deleteTutorialCategory,
  createTutorialVideo, updateTutorialVideo, deleteTutorialVideo,
  incrementTutorialView, incrementTutorialLike,
} from './api.js'
import { setContent, setTitle, setActiveNav } from './teacher-views-utils.js'
import { showToast } from './ui.js'

// ─── Page keys ────────────────────────────────────────────────────────────────
export const PAGE_KEYS = [
  { key: 'registration',   label: 'ลงทะเบียนเข้าใช้งาน' },
  { key: 'profile',        label: 'โปรไฟล์ของฉัน' },
  { key: 'schedule',       label: 'ตารางสอน' },
  { key: 'courses',        label: 'คอร์สวิชาของฉัน' },
  { key: 'classes',        label: 'ห้องเรียนของฉัน' },
  { key: 'class-students', label: 'จัดการนักเรียนในห้อง' },
  { key: 'attendance',     label: 'เช็คชื่อ' },
  { key: 'scores',         label: 'บันทึกคะแนน' },
  { key: 'pp5',            label: 'ปพ.5 / เอกสาร' },
  { key: 'announcement',   label: 'ประกาศ' },
]

// ─── Global popup helper (เรียกจากทุกหน้า) ───────────────────────────────────
export async function openPageTutorial(pageKey) {
  const videos = await getTutorialByPage(pageKey).catch(() => [])
  if (!videos.length) {
    showToast('ยังไม่มีคู่มือสำหรับหน้านี้', 'info')
    return
  }
  // ถ้ามีวิดีโอเดียว → เล่นทันที; ถ้ามีหลาย → แสดง list
  if (videos.length === 1) {
    _playVideo(videos[0].youtube_url, videos[0].title)
    return
  }
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[600] bg-black/60 flex items-center justify-center p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">📖 คู่มือหน้านี้</h3>
        <button id="tut-list-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="px-4 py-3 space-y-2 max-h-80 overflow-y-auto">
        ${videos.map(v => `
        <button class="tut-play-btn w-full text-left flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition"
          data-url="${_esc(v.youtube_url)}" data-title="${_esc(v.title)}">
          <div class="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-red-500 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${_esc(v.title)}</p>
            ${v.duration ? `<p class="text-xs text-gray-400 mt-0.5">${_esc(v.duration)}</p>` : ''}
          </div>
        </button>`).join('')}
      </div>
    </div>`
  document.body.appendChild(modal)
  modal.querySelector('#tut-list-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
  modal.querySelectorAll('.tut-play-btn').forEach(btn => {
    btn.addEventListener('click', () => { modal.remove(); _playVideo(btn.dataset.url, btn.dataset.title) })
  })
}

function _playVideo(youtubeUrl, title) {
  const embedUrl = _youtubeEmbedUrl(youtubeUrl)
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[700] bg-black/80 flex items-center justify-center p-4'
  modal.innerHTML = `
    <div class="bg-black rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl">
      <div class="flex items-center justify-between px-4 py-3 bg-gray-900">
        <p class="text-white text-sm font-semibold truncate">${_esc(title)}</p>
        <button id="vid-close" class="text-gray-400 hover:text-white text-xl ml-3 flex-shrink-0">✕</button>
      </div>
      <div style="padding-top:56.25%;position:relative">
        <iframe src="${_esc(embedUrl)}" class="absolute inset-0 w-full h-full"
          frameborder="0" allow="autoplay;encrypted-media;fullscreen" allowfullscreen></iframe>
      </div>
    </div>`
  document.body.appendChild(modal)
  modal.querySelector('#vid-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
}

// expose globally for onclick attributes
window._openPageTutorial = openPageTutorial

// ─── แปลง YouTube URL → embed URL ────────────────────────────────────────────
function _youtubeEmbedUrl(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([A-Za-z0-9_-]{11})/)
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : url
}

// แปลง YouTube URL → thumbnail
function _youtubeThumbnail(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([A-Za-z0-9_-]{11})/)
  return match ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg` : ''
}

function _esc(v) { return String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }

export async function renderTutorial() {
  setActiveNav('tutorial')
  setTitle('คู่มือการใช้งาน')

  setContent(`<div class="animate-fade">
    <!-- Hero header -->
    <div class="relative overflow-hidden rounded-2xl mb-8 px-6 py-8 text-white"
      style="background:linear-gradient(135deg,#312e81 0%,#4f46e5 60%,#7c3aed 100%)">
      <div class="absolute inset-0 opacity-10"
        style="background-image:radial-gradient(circle at 20% 80%,#fff 1px,transparent 1px),radial-gradient(circle at 80% 20%,#fff 1px,transparent 1px);background-size:32px 32px"></div>
      <div class="relative">
        <p class="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-1">ปพ.5 ออนไลน์</p>
        <h2 class="text-2xl font-extrabold mb-1">📖 คู่มือการใช้งาน</h2>
        <p class="text-indigo-200 text-sm">วิดีโอสั้นแนะนำการใช้งาน กดเพื่อเล่นได้เลย</p>
      </div>
    </div>
    <div id="tutorial-body" class="flex justify-center py-16 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  </div>`)

  try {
    const [cats, videos] = await Promise.all([
      getTutorialCategories(),
      getTutorialVideos(),
    ])

    const activeVideos = videos.filter(v => v.is_active)
    const uncategorized = activeVideos.filter(v => !v.category_id)
    const sections = [
      ...cats.map(c => ({ id: c.id, name: `${c.icon} ${c.name}`, items: activeVideos.filter(v => v.category_id === c.id) })),
      ...(uncategorized.length ? [{ id: 'other', name: '📁 อื่นๆ', items: uncategorized }] : []),
    ].filter(s => s.items.length)

    const body = document.getElementById('tutorial-body')
    if (!body) return

    if (!sections.length) {
      body.innerHTML = `<div class="text-center py-16 text-gray-400">
        <p class="text-4xl mb-3">📖</p><p class="font-medium">ยังไม่มีคู่มือ</p>
        <p class="text-xs mt-1">แอดมินสามารถเพิ่มวิดีโอคู่มือได้จากเมนู "คู่มือการใช้งาน" ในหน้าแอดมิน</p>
      </div>`
      return
    }

    // liked videos stored in localStorage
    const LIKED_KEY = 'tut_liked_v'
    const likedSet  = new Set(JSON.parse(localStorage.getItem(LIKED_KEY) ?? '[]'))

    const _fmtNum = n => n >= 1000 ? (n/1000).toFixed(1)+'K' : String(n ?? 0)

    const _videoCard = (v) => {
      const thumb   = _youtubeThumbnail(v.youtube_url)
      const embedId = (v.youtube_url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([A-Za-z0-9_-]{11})/) || [])[1] ?? ''
      const liked   = likedSet.has(v.id)
      return `
      <div class="tutorial-card bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden
        hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
        data-vid-id="${v.id}" data-embed-id="${embedId}" data-title="${_esc(v.title)}">
        <!-- thumbnail / player -->
        <div class="tutorial-thumb relative bg-gray-950 cursor-pointer" style="padding-top:56.25%">
          ${thumb ? `<img src="${_esc(thumb)}" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"/>` : ''}
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-14 h-14 rounded-full bg-white/90 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          ${v.duration ? `<span class="absolute bottom-2 left-2 bg-black/75 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-md font-mono">${_esc(v.duration)}</span>` : ''}
          <span class="absolute bottom-2 right-2 bg-black/75 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1">
            👁 <span class="tut-views">${_fmtNum(v.view_count)}</span>
          </span>
        </div>
        <!-- iframe slot -->
        <div class="tutorial-player hidden" style="padding-top:56.25%;position:relative">
          <iframe class="absolute inset-0 w-full h-full" frameborder="0"
            allow="autoplay;encrypted-media;picture-in-picture;fullscreen" allowfullscreen></iframe>
        </div>
        <!-- info + like -->
        <div class="p-4">
          <p class="text-sm font-bold text-gray-800 leading-snug pr-12">${_esc(v.title)}</p>
          ${v.description ? `<p class="text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">${_esc(v.description)}</p>` : ''}
          <div class="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
            <span class="text-[11px] text-gray-400 flex items-center gap-1">👁 <span class="tut-views-ft">${_fmtNum(v.view_count)}</span> ครั้ง</span>
            <button class="tut-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150
              ${liked ? 'bg-red-500 text-white shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500'}"
              data-liked="${liked}" data-vid-id="${v.id}">
              ❤️ <span class="tut-likes">${_fmtNum(v.like_count)}</span>
            </button>
          </div>
        </div>
      </div>`
    }

    // ── tabs ──────────────────────────────────────────────────────────────────
    let activeTab = sections[0].id
    const _TAB_ACTIVE = 'tab-tut px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white shadow-sm'
    const _TAB_IDLE   = 'tab-tut px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition'

    const _renderGrid = () => {
      const sec = sections.find(s => String(s.id) === String(activeTab)) ?? sections[0]
      document.getElementById('tut-grid').innerHTML =
        `<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${sec.items.map(_videoCard).join('')}</div>`
      _bindCards()
    }

    body.innerHTML = `
      <!-- tabs -->
      <div class="flex gap-2 flex-wrap bg-gray-50 rounded-2xl p-2 mb-6 border border-gray-100">
        ${sections.map(s => `<button class="${s.id === activeTab ? _TAB_ACTIVE : _TAB_IDLE}" data-tab-id="${s.id}">${_esc(s.name)}</button>`).join('')}
      </div>
      <div id="tut-grid"></div>`

    _renderGrid()

    body.querySelectorAll('.tab-tut').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.dataset.tabId
        body.querySelectorAll('.tab-tut').forEach(b => b.className = b.dataset.tabId === activeTab ? _TAB_ACTIVE : _TAB_IDLE)
        _renderGrid()
      })
    })

    function _bindCards() {
      // play
      document.querySelectorAll('.tutorial-card').forEach(card => {
        const thumbEl  = card.querySelector('.tutorial-thumb')
        const playerEl = card.querySelector('.tutorial-player')
        const iframe   = card.querySelector('iframe')
        thumbEl?.addEventListener('click', () => {
          const id = card.dataset.embedId; if (!id) return
          const vidId = Number(card.dataset.vidId)
          iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
          thumbEl.classList.add('hidden')
          playerEl.classList.remove('hidden')
          playerEl.style.paddingTop = '56.25%'
          // increment view
          incrementTutorialView(vidId)
          card.querySelectorAll('.tut-views,.tut-views-ft').forEach(el => {
            const cur = parseInt(el.textContent.replace('K','000')) || 0
            el.textContent = _fmtNum(cur + 1)
          })
        })
      })
      // like
      document.querySelectorAll('.tut-like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const vidId = Number(btn.dataset.vidId)
          const isLiked = btn.dataset.liked === 'true'
          const delta = isLiked ? -1 : 1
          incrementTutorialLike(vidId, delta)
          const likeEl = btn.querySelector('.tut-likes')
          const cur = parseInt(likeEl.textContent.replace('K','000')) || 0
          likeEl.textContent = _fmtNum(Math.max(0, cur + delta))
          if (isLiked) {
            likedSet.delete(vidId); btn.dataset.liked = 'false'
            btn.className = btn.className.replace('bg-red-500 text-white shadow-sm','bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500')
          } else {
            likedSet.add(vidId); btn.dataset.liked = 'true'
            btn.className = btn.className.replace('bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500','bg-red-500 text-white shadow-sm')
          }
          localStorage.setItem(LIKED_KEY, JSON.stringify([...likedSet]))
        })
      })
    }
  } catch (err) {
    const body = document.getElementById('tutorial-body')
    if (body) body.innerHTML = `<p class="text-sm text-red-500 text-center py-8">โหลดไม่สำเร็จ: ${err.message}</p>`
  }
}

// ─── Admin: จัดการคู่มือ ──────────────────────────────────────────────────────
export async function renderTutorialAdmin() {
  setContent(`<div class="animate-fade max-w-3xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-xl font-bold text-gray-800">📖 จัดการคู่มือการใช้งาน</h2>
        <p class="text-sm text-gray-400 mt-1">เพิ่ม แก้ไข จัดหมวดหมู่วิดีโอคู่มือ</p>
      </div>
    </div>
    <div id="ta-body" class="flex justify-center py-12 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  </div>`)

  const _reload = async () => {
    const [cats, videos] = await Promise.all([getTutorialCategories(), getTutorialVideos()])
    const body = document.getElementById('ta-body')
    if (!body) return

    body.innerHTML = `
    <!-- หมวดหมู่ -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-gray-700">📁 หมวดหมู่</h3>
        <button id="ta-add-cat" class="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-lg font-semibold hover:bg-indigo-700 transition">+ เพิ่มหมวด</button>
      </div>
      ${cats.length ? `<div class="space-y-2">${cats.map(c => `
        <div class="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:bg-gray-50">
          <span class="text-lg">${_esc(c.icon)}</span>
          <span class="flex-1 text-sm font-medium text-gray-700">${_esc(c.name)}</span>
          <button class="ta-edit-cat text-xs text-indigo-500 hover:text-indigo-700 font-medium" data-id="${c.id}" data-name="${_esc(c.name)}" data-icon="${_esc(c.icon)}">แก้ไข</button>
          <button class="ta-del-cat text-xs text-red-400 hover:text-red-600" data-id="${c.id}">ลบ</button>
        </div>`).join('')}</div>` :
        `<p class="text-xs text-gray-400 text-center py-4">ยังไม่มีหมวดหมู่</p>`}
    </div>

    <!-- วิดีโอ -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-gray-700">🎬 วิดีโอ (${videos.length})</h3>
        <button id="ta-add-vid" class="px-3 py-1.5 bg-emerald-600 text-white text-xs rounded-lg font-semibold hover:bg-emerald-700 transition">+ เพิ่มวิดีโอ</button>
      </div>
      ${videos.length ? `<div class="space-y-2">${videos.map(v => {
        const cat = cats.find(c => c.id === v.category_id)
        return `<div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              ${cat ? `<span class="text-[10px] px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full">${_esc(cat.icon)} ${_esc(cat.name)}</span>` : ''}
              ${!v.is_active ? `<span class="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">ซ่อน</span>` : ''}
              ${v.duration ? `<span class="text-[10px] text-gray-400">${_esc(v.duration)}</span>` : ''}
            </div>
            <p class="text-sm font-semibold text-gray-800 mt-1">${_esc(v.title)}</p>
            <p class="text-[11px] text-gray-400 truncate mt-0.5">${_esc(v.youtube_url)}</p>
          </div>
          <div class="flex gap-2 flex-shrink-0">
            <button class="ta-edit-vid text-xs text-indigo-500 hover:text-indigo-700 font-medium"
              data-id="${v.id}" data-title="${_esc(v.title)}" data-desc="${_esc(v.description??'')}"
              data-url="${_esc(v.youtube_url)}" data-dur="${_esc(v.duration??'')}"
              data-cat="${v.category_id??''}" data-active="${v.is_active}">แก้ไข</button>
            <button class="ta-del-vid text-xs text-red-400 hover:text-red-600" data-id="${v.id}">ลบ</button>
          </div>
        </div>`}).join('')}</div>` :
        `<p class="text-xs text-gray-400 text-center py-4">ยังไม่มีวิดีโอ</p>`}
    </div>`

    // ── event listeners ──
    document.getElementById('ta-add-cat')?.addEventListener('click', () => _catForm())
    document.getElementById('ta-add-vid')?.addEventListener('click', () => _vidForm(null, cats))
    document.querySelectorAll('.ta-edit-cat').forEach(btn =>
      btn.addEventListener('click', () => _catForm({ id: Number(btn.dataset.id), name: btn.dataset.name, icon: btn.dataset.icon })))
    document.querySelectorAll('.ta-del-cat').forEach(btn =>
      btn.addEventListener('click', async () => {
        if (!confirm('ลบหมวดหมู่นี้?')) return
        await deleteTutorialCategory(Number(btn.dataset.id)).catch(() => {})
        showToast('ลบแล้ว', 'success'); _reload()
      }))
    document.querySelectorAll('.ta-edit-vid').forEach(btn =>
      btn.addEventListener('click', () => _vidForm({
        id: Number(btn.dataset.id), title: btn.dataset.title,
        description: btn.dataset.desc, youtube_url: btn.dataset.url,
        duration: btn.dataset.dur, category_id: btn.dataset.cat ? Number(btn.dataset.cat) : null,
        is_active: btn.dataset.active === 'true'
      }, cats)))
    document.querySelectorAll('.ta-del-vid').forEach(btn =>
      btn.addEventListener('click', async () => {
        if (!confirm('ลบวิดีโอนี้?')) return
        await deleteTutorialVideo(Number(btn.dataset.id)).catch(() => {})
        showToast('ลบแล้ว', 'success'); _reload()
      }))
  }

  const INP = 'w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200'

  const _catForm = (existing = null) => {
    const wrap = document.createElement('div')
    wrap.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4'
    wrap.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
      <h3 class="font-bold text-gray-800">${existing ? 'แก้ไขหมวดหมู่' : 'เพิ่มหมวดหมู่'}</h3>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ไอคอน (emoji)</label>
        <input id="cat-icon" type="text" value="${_esc(existing?.icon ?? '📁')}" class="${INP}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อหมวดหมู่ <span class="text-red-400">*</span></label>
        <input id="cat-name" type="text" value="${_esc(existing?.name ?? '')}" placeholder="เช่น เริ่มต้นใช้งาน" class="${INP}" />
      </div>
      <div class="flex gap-3 pt-2">
        <button id="cat-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="cat-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
      </div>
    </div>`
    document.body.appendChild(wrap)
    wrap.querySelector('#cat-cancel').addEventListener('click', () => wrap.remove())
    wrap.querySelector('#cat-save').addEventListener('click', async () => {
      const name = wrap.querySelector('#cat-name').value.trim()
      const icon = wrap.querySelector('#cat-icon').value.trim() || '📁'
      if (!name) { showToast('กรุณาระบุชื่อ', 'warning'); return }
      const btn = wrap.querySelector('#cat-save'); btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        if (existing) await updateTutorialCategory(existing.id, { name, icon })
        else await createTutorialCategory({ name, icon })
        wrap.remove(); showToast('บันทึกแล้ว ✅', 'success'); _reload()
      } catch (err) { showToast('ผิดพลาด: '+err.message, 'error'); btn.disabled=false; btn.textContent='บันทึก' }
    })
  }

  const _vidForm = (existing = null, cats = []) => {
    const catOpts = cats.map(c =>
      `<option value="${c.id}" ${existing?.category_id===c.id?'selected':''}>${_esc(c.icon)} ${_esc(c.name)}</option>`).join('')
    const wrap = document.createElement('div')
    wrap.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4'
    wrap.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col">
      <div class="px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">${existing ? 'แก้ไขวิดีโอ' : 'เพิ่มวิดีโอ'}</h3>
      </div>
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หมวดหมู่</label>
          <select id="vid-cat" class="${INP}">
            <option value="">— ไม่ระบุ —</option>${catOpts}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อวิดีโอ <span class="text-red-400">*</span></label>
          <input id="vid-title" type="text" value="${_esc(existing?.title??'')}" placeholder="เช่น วิธีเช็คชื่อนักเรียน" class="${INP}" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">คำอธิบาย</label>
          <textarea id="vid-desc" rows="2" class="${INP} resize-none">${_esc(existing?.description??'')}</textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">YouTube URL <span class="text-red-400">*</span></label>
          <input id="vid-url" type="url" value="${_esc(existing?.youtube_url??'')}" placeholder="https://youtu.be/..." class="${INP}" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ความยาว (เช่น 1:45)</label>
          <input id="vid-dur" type="text" value="${_esc(existing?.duration??'')}" placeholder="1:45" class="${INP}" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">แสดงปุ่มคู่มือในหน้า</label>
          <select id="vid-pagekey" class="${INP}">
            <option value="">— ไม่ระบุ (แสดงในคู่มือทั่วไปเท่านั้น) —</option>
            ${PAGE_KEYS.map(p => `<option value="${p.key}" ${existing?.page_key===p.key?'selected':''}>${p.label}</option>`).join('')}
          </select>
        </div>
        <div class="flex items-center gap-2">
          <input id="vid-active" type="checkbox" ${!existing||existing.is_active?'checked':''} class="rounded text-indigo-600" />
          <label class="text-sm text-gray-700">เผยแพร่ (ครูเห็น)</label>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="vid-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="vid-save" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">บันทึก</button>
      </div>
    </div>`
    document.body.appendChild(wrap)
    wrap.querySelector('#vid-cancel').addEventListener('click', () => wrap.remove())
    wrap.querySelector('#vid-save').addEventListener('click', async () => {
      const title = wrap.querySelector('#vid-title').value.trim()
      const url   = wrap.querySelector('#vid-url').value.trim()
      const catId = wrap.querySelector('#vid-cat').value || null
      if (!title || !url) { showToast('กรุณากรอกชื่อและ URL', 'warning'); return }
      const payload = {
        title, youtube_url: url,
        description: wrap.querySelector('#vid-desc').value.trim() || null,
        duration:    wrap.querySelector('#vid-dur').value.trim() || null,
        category_id: catId ? Number(catId) : null,
        page_key:    wrap.querySelector('#vid-pagekey').value || null,
        is_active:   wrap.querySelector('#vid-active').checked,
      }
      const btn = wrap.querySelector('#vid-save'); btn.disabled=true; btn.textContent='กำลังบันทึก...'
      try {
        if (existing) await updateTutorialVideo(existing.id, payload)
        else await createTutorialVideo(payload)
        wrap.remove(); showToast('บันทึกแล้ว ✅', 'success'); _reload()
      } catch (err) { showToast('ผิดพลาด: '+err.message, 'error'); btn.disabled=false; btn.textContent='บันทึก' }
    })
  }

  _reload()
}
