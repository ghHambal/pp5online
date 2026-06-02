import {
  getTutorialCategories, getTutorialVideos,
  createTutorialCategory, updateTutorialCategory, deleteTutorialCategory,
  createTutorialVideo, updateTutorialVideo, deleteTutorialVideo,
} from './api.js'
import { setContent } from './teacher-views-utils.js'
import { showToast } from './ui.js'

// แปลง YouTube URL → embed URL
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
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.toggle('bg-emerald-900', el.dataset.nav === 'tutorial')
    el.classList.toggle('text-white',      el.dataset.nav === 'tutorial')
  })
  document.getElementById('page-title')?.setAttribute('textContent', 'คู่มือการใช้งาน') ||
    (document.title = 'คู่มือการใช้งาน')

  setContent(`<div class="animate-fade max-w-3xl mx-auto">
    <div class="mb-6">
      <h2 class="text-xl font-bold text-gray-800">📖 คู่มือการใช้งาน</h2>
      <p class="text-sm text-gray-400 mt-1">วิดีโอสั้นแนะนำการใช้งานระบบ ปพ.5 ออนไลน์</p>
    </div>
    <div id="tutorial-body" class="flex justify-center py-12 text-gray-300">
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
      ...cats.map(c => ({
        name: `${c.icon} ${c.name}`,
        items: activeVideos.filter(v => v.category_id === c.id),
      })),
      ...(uncategorized.length ? [{ name: '📁 อื่นๆ', items: uncategorized }] : []),
    ].filter(s => s.items.length)

    const body = document.getElementById('tutorial-body')
    if (!body) return

    if (!sections.length) {
      body.innerHTML = `<div class="text-center py-16 text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคู่มือ</p>
        <p class="text-xs mt-1">แอดมินสามารถเพิ่มวิดีโอคู่มือได้จากเมนู "คู่มือการใช้งาน" ในหน้าแอดมิน</p>
      </div>`
      return
    }

    body.innerHTML = sections.map(sec => `
      <div class="mb-8">
        <h3 class="font-bold text-gray-700 text-base mb-3">${_esc(sec.name)}</h3>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${sec.items.map(v => {
            const thumb = _youtubeThumbnail(v.youtube_url)
            return `
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer tutorial-card"
              data-url="${_esc(v.youtube_url)}" data-title="${_esc(v.title)}">
              <div class="relative bg-gray-900" style="padding-top:56.25%">
                ${thumb ? `<img src="${_esc(thumb)}" class="absolute inset-0 w-full h-full object-cover opacity-90"/>` : ''}
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                ${v.duration ? `<span class="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">${_esc(v.duration)}</span>` : ''}
              </div>
              <div class="p-3">
                <p class="text-sm font-semibold text-gray-800 leading-tight">${_esc(v.title)}</p>
                ${v.description ? `<p class="text-xs text-gray-400 mt-1 line-clamp-2">${_esc(v.description)}</p>` : ''}
              </div>
            </div>`
          }).join('')}
        </div>
      </div>`).join('')

    // click → embed modal
    document.querySelectorAll('.tutorial-card').forEach(card => {
      card.addEventListener('click', () => {
        const embedUrl = _youtubeEmbedUrl(card.dataset.url)
        const title    = card.dataset.title
        const modal = document.createElement('div')
        modal.className = 'fixed inset-0 z-[500] bg-black/80 flex items-center justify-center p-4'
        modal.innerHTML = `
          <div class="bg-black rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl">
            <div class="flex items-center justify-between px-4 py-3 bg-gray-900">
              <p class="text-white text-sm font-semibold truncate">${_esc(title)}</p>
              <button id="tt-close" class="text-gray-400 hover:text-white text-xl ml-3 flex-shrink-0">✕</button>
            </div>
            <div style="padding-top:56.25%;position:relative">
              <iframe src="${_esc(embedUrl)}" class="absolute inset-0 w-full h-full"
                frameborder="0" allow="autoplay;encrypted-media;fullscreen" allowfullscreen></iframe>
            </div>
          </div>`
        document.body.appendChild(modal)
        modal.querySelector('#tt-close').addEventListener('click', () => modal.remove())
        modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
      })
    })
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
