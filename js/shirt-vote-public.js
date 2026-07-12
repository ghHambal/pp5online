import { supabase } from './supabase.js'
import { esc, toast, _colorSwatchHex, open3dShirtViewer, openImageLightbox, openConfirmVoteModal } from './sports-portals.js'

const app = document.getElementById('shirt-vote-public-app')

async function init() {
  app.innerHTML = '<div class="text-center text-gray-400 py-16">กำลังโหลด...</div>'
  const { data: cfg, error } = await supabase.rpc('get_public_shirt_vote_config')
  if (error) {
    app.innerHTML = `<div class="bg-white rounded-2xl border border-red-100 p-6 text-sm text-red-600">โหลดข้อมูลไม่สำเร็จ: ${esc(error.message)}</div>`
    return
  }
  if (!cfg?.enabled) {
    app.innerHTML = '<div class="bg-white rounded-2xl border p-8 text-center text-gray-400">ขณะนี้ยังไม่เปิดโหมดโหวตแบบไม่ล็อกอิน กรุณาเข้าโหวตผ่านระบบ ปพ.5 แทน</div>'
    return
  }
  renderLanding(cfg)
}

function renderLanding(cfg) {
  app.innerHTML = `
    <div class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${cfg.tutorial_url ? `<a href="${esc(cfg.tutorial_url)}" target="_blank" rel="noopener" class="py-3 rounded-2xl border border-violet-200 bg-violet-50 text-violet-700 text-sm font-bold text-center hover:bg-violet-100 transition">🎬 คลิปคู่มือการเริ่มใช้งาน</a>` : ''}
        ${cfg.intro_url ? `<a href="${esc(cfg.intro_url)}" target="_blank" rel="noopener" class="py-3 rounded-2xl border border-indigo-200 bg-indigo-50 text-indigo-700 text-sm font-bold text-center hover:bg-indigo-100 transition">📘 แนะนำ ปพ.5</a>` : ''}
      </div>
      <div class="bg-white rounded-2xl border p-6">
        <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">กรอกรหัสนักเรียนของคุณ</label>
        <input id="student-code-input" inputmode="numeric" placeholder="เช่น 608001"
          class="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg font-bold text-center tracking-widest focus:outline-none focus:border-indigo-500" />
        <p id="student-code-error" class="hidden text-xs text-red-500 mt-2 text-center"></p>
        <div id="student-confirm-card" class="hidden mt-4"></div>
      </div>
    </div>
  `

  const input = app.querySelector('#student-code-input')
  const errorEl = app.querySelector('#student-code-error')
  const cardEl = app.querySelector('#student-confirm-card')

  const lookup = async () => {
    const code = input.value.trim()
    errorEl.classList.add('hidden')
    cardEl.classList.add('hidden')
    cardEl.innerHTML = ''
    if (!code) return
    const { data: bundle, error } = await supabase.rpc('get_public_shirt_vote_bundle', { p_code: code })
    if (error || bundle?.error) {
      errorEl.textContent = bundle?.error === 'student_not_found'
        ? 'ไม่พบรหัสนักเรียนนี้ กรุณาตรวจสอบอีกครั้ง'
        : 'เกิดข้อผิดพลาด กรุณาลองใหม่'
      errorEl.classList.remove('hidden')
      return
    }
    renderConfirmCard(bundle, code)
  }
  input.addEventListener('blur', lookup)
  input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); input.blur() } })

  function renderConfirmCard(bundle, code) {
    const s = bundle.student
    cardEl.innerHTML = `
      <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border">
        ${s.image_url
          ? `<img src="${esc(s.image_url)}" class="w-14 h-16 object-cover rounded-xl border">`
          : `<div class="w-14 h-16 rounded-xl bg-gray-200 grid place-items-center font-bold text-gray-500">${esc((s.full_name || '?').charAt(0))}</div>`}
        <div class="min-w-0 flex-1">
          <p class="font-bold text-gray-800 text-sm truncate">${esc(s.full_name)}</p>
          <p class="text-xs text-gray-400">ห้อง ${esc(s.main_room || '—')}</p>
        </div>
      </div>
      <button id="btn-enter-vote" class="w-full mt-3 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">🗳️ เข้าหน้าโหวต</button>
    `
    cardEl.classList.remove('hidden')
    cardEl.querySelector('#btn-enter-vote').addEventListener('click', () => renderVotePage(bundle, code, cfg))
  }
}

function renderVotePage(bundle, code, cfg) {
  const designs = bundle.designs || []
  let selectedDesignId = bundle.my_design_id || null
  let activeIdx = Math.max(0, designs.findIndex(d => d.id === selectedDesignId))
  const activeColorByDesign = {}
  designs.forEach(d => {
    const colors = d.sports_shirt_design_colors || []
    activeColorByDesign[d.id] = colors.find(c => c.image_url)?.id || colors[0]?.id || null
  })
  const open = bundle.vote_enabled
    && (!bundle.vote_opens_at || new Date(bundle.vote_opens_at) <= new Date())
    && (!bundle.vote_closes_at || new Date(bundle.vote_closes_at) >= new Date())
  const cfgLike = { shirt_vote_closes_at: bundle.vote_closes_at }

  app.innerHTML = `
    <button id="btn-vote-back" class="text-xs font-bold text-gray-500 hover:text-indigo-600 mb-3">← กลับไปกรอกรหัสใหม่</button>
    <div class="bg-white rounded-2xl border overflow-hidden">
      <div id="shirt-vote-tabs" class="flex border-b border-gray-100 overflow-x-auto"></div>
      <div id="shirt-vote-body" class="flex flex-col items-center p-5"></div>
    </div>
  `
  app.querySelector('#btn-vote-back').addEventListener('click', () => renderLanding(cfg))
  const tabsEl = app.querySelector('#shirt-vote-tabs')
  const body = app.querySelector('#shirt-vote-body')

  if (!designs.length) {
    body.innerHTML = '<p class="text-sm text-gray-400 text-center py-8">ยังไม่มีแบบเสื้อของเพศคุณ</p>'
    return
  }

  const renderTabs = () => {
    tabsEl.innerHTML = designs.map((d, i) => `<button data-shirt-tab="${i}" class="flex-shrink-0 px-5 py-3 text-sm font-bold border-b-2 transition ${i === activeIdx ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-transparent hover:text-gray-600'}">${esc(d.name || `แบบที่ ${d.design_no}`)}${selectedDesignId === d.id ? ' ✓' : ''}</button>`).join('')
    tabsEl.querySelectorAll('[data-shirt-tab]').forEach(b => b.addEventListener('click', () => { activeIdx = parseInt(b.dataset.shirtTab, 10); renderTabs(); renderBody() }))
  }

  const renderBody = () => {
    const d = designs[activeIdx]
    const colors = d.sports_shirt_design_colors || []
    const activeColor = colors.find(c => c.id === activeColorByDesign[d.id])
    body.innerHTML = `
      ${!open ? '<div class="w-full max-w-sm rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-xs text-gray-500 mb-4 text-center">ขณะนี้ยังไม่เปิดโหวต หรือปิดโหวตแล้ว</div>' : ''}
      <div class="w-full max-w-sm">
        <div class="relative">
          ${activeColor?.image_url ? `<img src="${esc(activeColor.image_url)}" class="w-full aspect-square object-contain bg-gray-50 rounded-3xl border">` : '<div class="w-full aspect-square bg-gray-50 rounded-3xl border grid place-items-center text-gray-300 text-6xl">👕</div>'}
          ${activeColor?.image_url ? `<button data-shirt-expand class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 shadow border flex items-center justify-center text-gray-600 hover:text-indigo-600" title="ขยายดูเต็มจอ">⤢</button>` : ''}
        </div>
        <p class="text-base font-bold text-gray-800 text-center mt-4">${esc(d.name || `แบบที่ ${d.design_no}`)}</p>
        ${colors.length ? `<div class="flex justify-center gap-2 mt-3">${colors.map(c => `<button data-shirt-color-btn="${c.id}" class="w-8 h-8 rounded-full border-2 ${activeColorByDesign[d.id] === c.id ? 'border-indigo-500 scale-110' : 'border-gray-200'} transition" style="background:${_colorSwatchHex(c.color_name)}" title="สี${esc(c.color_name)}"></button>`).join('')}</div>` : ''}
        ${d.html_url ? `<button data-shirt-3d="${esc(d.html_url)}" class="w-full mt-4 py-2 rounded-xl border text-xs font-bold text-violet-600 border-violet-200 hover:bg-violet-50">🧊 ดูแบบ 3 มิติ</button>` : ''}
        <button data-shirt-vote ${open ? '' : 'disabled'} class="w-full mt-3 py-3 rounded-2xl text-sm font-bold transition ${selectedDesignId === d.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-indigo-50'} ${open ? '' : 'opacity-50 cursor-not-allowed'}">${selectedDesignId === d.id ? '✓ โหวตแบบนี้แล้ว' : 'เลือกโหวตแบบนี้'}</button>
      </div>
    `
    body.querySelector('[data-shirt-expand]')?.addEventListener('click', () => openImageLightbox(activeColor.image_url))
    body.querySelectorAll('[data-shirt-color-btn]').forEach(b => b.addEventListener('click', () => { activeColorByDesign[d.id] = b.dataset.shirtColorBtn; renderBody() }))
    body.querySelector('[data-shirt-3d]')?.addEventListener('click', e => open3dShirtViewer(e.currentTarget.dataset.shirt3d))
    body.querySelector('[data-shirt-vote]')?.addEventListener('click', () => {
      if (!open || selectedDesignId === d.id) return
      openConfirmVoteModal(d, cfgLike, async () => {
        const { error } = await supabase.rpc('cast_public_shirt_vote', { p_code: code, p_design: d.id })
        if (error) { toast(error.message, 'error'); return }
        selectedDesignId = d.id
        toast('บันทึกโหวตแล้ว')
        renderTabs(); renderBody()
      })
    })
  }

  renderTabs()
  renderBody()
}

init().catch(err => {
  app.innerHTML = `<div class="bg-white rounded-2xl border border-red-100 p-6 text-sm text-red-600">โหลดไม่สำเร็จ: ${String(err?.message || err)}</div>`
})
