import { supabase } from './supabase.js'
import { esc, toast } from './sports-portals.js'

// ─── โหวตเลือกตั้งสภานักเรียน — หน้าแยกสำหรับจุดลงคะแนนที่มีครู/เจ้าหน้าที่คุมเท่านั้น ──────
// ไม่ใช้ session ล็อกอินเลย (anon key + RPC ฝั่ง server ทำหน้าที่ตรวจสอบ+กันโหวตซ้ำแทน)
// mirror pattern เดียวกับ js/shirt-vote-public.js

const app = document.getElementById('council-election-app')

function studentCard(s) {
  return `
    <div class="flex items-center gap-3 p-3 bg-[var(--surface-2)] rounded-2xl border">
      ${s.image_url
        ? `<img src="${esc(s.image_url)}" class="w-14 h-16 object-cover rounded-xl border">`
        : `<div class="w-14 h-16 rounded-xl bg-[var(--primary-soft-line)] text-[var(--primary-70)] grid place-items-center font-bold">${esc((s.full_name || '?').charAt(0))}</div>`}
      <div class="min-w-0 flex-1">
        <p class="font-bold text-[var(--ink)] text-sm truncate">${esc(s.full_name)}</p>
        <p class="text-xs text-[var(--muted-2)]">ห้อง ${esc(s.main_room || '—')}</p>
      </div>
    </div>`
}

function renderLanding() {
  app.innerHTML = `
    <div class="bg-white rounded-2xl border p-6">
      <label class="block text-xs font-bold text-[var(--muted)] uppercase tracking-wider mb-2">กรอกรหัสนักเรียนของคุณ</label>
      <input id="student-code-input" inputmode="numeric" placeholder="เช่น 608001"
        class="w-full border border-[var(--line)] rounded-xl px-4 py-3 text-lg font-bold text-center tracking-widest focus:outline-none focus:border-[var(--primary-70)]" />
      <p id="student-code-error" class="hidden text-xs text-[var(--bad)] mt-2 text-center"></p>
      <div id="student-confirm-card" class="hidden mt-4"></div>
    </div>
    <p class="text-xs text-white/70 text-center mt-4">📢 หน้านี้ใช้ที่จุดลงคะแนนที่โรงเรียนจัดไว้เท่านั้น กรอกรหัสตัวเองแล้วดูรูปให้ตรงก่อนกดเข้าโหวต</p>
  `

  const input = app.querySelector('#student-code-input')
  const errorEl = app.querySelector('#student-code-error')
  const cardEl = app.querySelector('#student-confirm-card')
  input.focus()

  const lookup = async () => {
    const code = input.value.trim()
    errorEl.classList.add('hidden')
    cardEl.classList.add('hidden')
    cardEl.innerHTML = ''
    if (!code) return
    const { data: bundle, error } = await supabase.rpc('get_public_council_election_bundle', { p_code: code })
    if (error) { errorEl.textContent = 'เกิดข้อผิดพลาด กรุณาลองใหม่'; errorEl.classList.remove('hidden'); return }
    if (bundle?.error === 'student_not_found') { errorEl.textContent = 'ไม่พบรหัสนักเรียนนี้ กรุณาตรวจสอบอีกครั้ง'; errorEl.classList.remove('hidden'); return }
    if (bundle?.error === 'gender_unknown') { errorEl.textContent = 'ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบ'; errorEl.classList.remove('hidden'); return }
    renderConfirmCard(bundle, code)
  }
  input.addEventListener('blur', lookup)
  input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); input.blur() } })

  function renderConfirmCard(bundle, code) {
    const s = bundle.student
    cardEl.innerHTML = `
      ${studentCard(s)}
      <button id="btn-enter-vote" class="w-full mt-3 py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm">🗳️ ใช่ฉันเอง — เข้าหน้าโหวต</button>
      <button id="btn-not-me" class="w-full mt-2 py-2 text-xs text-[var(--muted-2)] hover:text-[var(--ink-2)]">ไม่ใช่ฉัน กรอกรหัสใหม่</button>
    `
    cardEl.classList.remove('hidden')
    cardEl.querySelector('#btn-enter-vote').addEventListener('click', () => renderVotePage(bundle, code))
    cardEl.querySelector('#btn-not-me').addEventListener('click', () => { input.value = ''; cardEl.classList.add('hidden'); input.focus() })
  }
}

function renderVotePage(bundle, code) {
  if (bundle.error === 'election_not_found') {
    app.innerHTML = `
      <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
      <div class="bg-white rounded-2xl border p-6 text-center text-[var(--muted-2)] text-sm">ยังไม่มีการเลือกตั้งสำหรับสภาของคุณในขณะนี้</div>`
    app.querySelector('#btn-back').addEventListener('click', renderLanding)
    return
  }

  const alreadyVoted = bundle.already_voted_candidate_id
  const picked = alreadyVoted ? bundle.candidates.find(c => c.id === alreadyVoted) : null

  if (alreadyVoted) {
    app.innerHTML = `
      <div class="bg-white rounded-2xl border p-6 text-center space-y-3">
        <p class="text-3xl">✅</p>
        <p class="font-bold text-[var(--ink)]">คุณลงคะแนนแล้ว ขอบคุณที่ใช้สิทธิ์!</p>
        ${picked ? `<div class="mt-2">${studentCard({ full_name: picked.full_name, image_url: picked.image_url, main_room: picked.main_room })}</div>` : ''}
        <p class="text-xs text-[var(--muted-2)] mt-2">${esc(bundle.thank_you_message || 'ผลการเลือกตั้งจะประกาศผ่านระบบ ปพ.5 เมื่อครูที่ปรึกษายืนยันแล้ว')}</p>
        <button id="btn-restart" class="w-full mt-2 py-3 rounded-2xl bg-[var(--bg-2)] hover:bg-[var(--line)] text-[var(--ink-2)] font-bold text-sm">เสร็จสิ้น — คนต่อไปกรอกรหัสใหม่</button>
      </div>`
    app.querySelector('#btn-restart').addEventListener('click', renderLanding)
    return
  }

  if (!bundle.is_open) {
    app.innerHTML = `
      <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
      <div class="bg-white rounded-2xl border p-6 text-center text-[var(--muted-2)] text-sm">ขณะนี้ยังไม่เปิดโหวต หรือปิดโหวตแล้ว</div>`
    app.querySelector('#btn-back').addEventListener('click', renderLanding)
    return
  }

  let selected = null
  app.innerHTML = `
    <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
    <div class="bg-white rounded-2xl border p-5 space-y-3">
      <p class="text-sm font-bold text-[var(--ink-2)] text-center mb-1">เลือกผู้สมัครที่ต้องการเลือกตั้ง</p>
      <div id="candidate-list" class="space-y-2"></div>
      <div id="vote-confirm-area"></div>
    </div>`
  app.querySelector('#btn-back').addEventListener('click', renderLanding)
  const list = app.querySelector('#candidate-list')
  const confirmArea = app.querySelector('#vote-confirm-area')

  if (!bundle.candidates.length) {
    list.innerHTML = `<p class="text-sm text-[var(--muted-2)] text-center py-8">ยังไม่มีผู้สมัครในการเลือกตั้งนี้</p>`
    return
  }

  // โปรไฟล์เต็มของผู้สมัคร (สเปคข้อ 8.11) — ปุ่ม "ดูรายละเอียด" แยกจากปุ่มเลือก และเลือก
  // จากในโปรไฟล์ได้เลย (append ไป document.body ตรงๆ เพราะหน้านี้ standalone ไม่มีระบบ modal อื่น)
  const renderProfileModal = c => {
    const policies = Array.isArray(c.policies) ? c.policies : []
    const experience = Array.isArray(c.experience) ? c.experience : []
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'
    modal.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto">
        <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
          ${c.image_url
            ? `<img src="${esc(c.image_url)}" class="w-full h-full object-cover">`
            : `<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${esc((c.full_name || '?').charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 grid place-items-center font-extrabold text-[var(--primary-dark)] shadow">${c.ballot_number}</div>
          <button id="profile-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${esc(c.full_name)}</p>
            <p class="text-xs text-[var(--muted)]">${esc(c.main_room || '')}${(c.gpa_general != null || c.gpa_religious != null) ? ` · เกรดสามัญ ${esc(c.gpa_general ?? '—')} · ศาสนา ${esc(c.gpa_religious ?? '—')}` : ''}</p>
          </div>
          ${c.slogan ? `<p class="text-sm font-bold text-[var(--primary-dark)]">"${esc(c.slogan)}"</p>` : ''}
          ${c.vision ? `<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${esc(c.vision)}</p></div>` : ''}
          ${policies.length ? `<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${policies.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>` : ''}
          ${experience.length ? `<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${experience.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>` : ''}
          ${!c.slogan && !c.vision && !policies.length && !experience.length ? `<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>` : ''}
          <button id="profile-modal-select" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm mt-2">เลือกคนนี้</button>
        </div>
      </div>`
    document.body.appendChild(modal)
    const close = () => modal.remove()
    modal.addEventListener('click', e => { if (e.target === modal) close() })
    modal.querySelector('#profile-modal-close').addEventListener('click', close)
    modal.querySelector('#profile-modal-select').addEventListener('click', () => {
      close(); selected = c.id; renderList(); renderConfirm()
    })
  }

  const renderList = () => {
    list.innerHTML = bundle.candidates.map(c => `
      <div class="rounded-xl border p-3 transition ${selected === c.id ? 'border-[var(--primary-70)] bg-[var(--primary-soft)]' : 'border-[var(--line-soft)]'}">
        <button data-candidate="${c.id}" class="w-full flex items-center gap-3 text-left">
          <div class="w-8 h-8 rounded-full bg-[var(--primary-soft-line)] text-[var(--primary-dark)] grid place-items-center font-bold text-sm flex-shrink-0">${c.ballot_number}</div>
          ${c.image_url
            ? `<img src="${esc(c.image_url)}" class="w-10 h-12 object-cover rounded-[10px] border flex-shrink-0">`
            : `<div class="w-10 h-12 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border">${esc((c.full_name || '?').charAt(0))}</div>`}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(c.full_name)}</p>
            <p class="text-xs text-[var(--muted)]">${esc(c.main_room || '')}</p>
            ${c.slogan ? `<p class="text-xs text-[var(--primary-dark)] font-semibold truncate mt-0.5">"${esc(c.slogan)}"</p>` : ''}
          </div>
        </button>
        <button data-detail="${c.id}" class="w-full mt-2 pt-2 border-t border-[var(--line-soft)] text-xs font-bold text-[var(--primary)]">ℹ️ ดูรายละเอียด</button>
      </div>`).join('')
    list.querySelectorAll('[data-candidate]').forEach(btn => {
      btn.addEventListener('click', () => { selected = Number(btn.dataset.candidate); renderList(); renderConfirm() })
    })
    list.querySelectorAll('[data-detail]').forEach(btn => {
      btn.addEventListener('click', () => {
        const c = bundle.candidates.find(x => x.id === Number(btn.dataset.detail))
        if (c) renderProfileModal(c)
      })
    })
  }

  const renderConfirm = () => {
    if (!selected) { confirmArea.innerHTML = ''; return }
    const c = bundle.candidates.find(x => x.id === selected)
    confirmArea.innerHTML = `
      <div class="border-t border-[var(--line-soft)] pt-3 mt-1 space-y-2">
        <p class="text-xs text-[var(--muted)] text-center">แน่ใจนะว่าจะเลือก <span class="font-bold text-[var(--ink-2)]">${esc(c.full_name)}</span>?</p>
        <button id="btn-confirm-vote" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm">✅ ยืนยันลงคะแนน</button>
      </div>`
    confirmArea.querySelector('#btn-confirm-vote').addEventListener('click', async () => {
      const btn = confirmArea.querySelector('#btn-confirm-vote')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      const { data, error } = await supabase.rpc('cast_public_council_vote', { p_code: code, p_candidate_id: selected })
      if (error || data?.error) {
        const msg = data?.error === 'already_voted' ? 'รหัสนี้ลงคะแนนไปแล้ว' : data?.error === 'election_not_open' ? 'ปิดโหวตแล้ว' : 'บันทึกไม่สำเร็จ กรุณาลองใหม่'
        toast(msg, 'error')
        btn.disabled = false; btn.textContent = '✅ ยืนยันลงคะแนน'
        return
      }
      toast('บันทึกคะแนนแล้ว ขอบคุณที่ใช้สิทธิ์!')
      bundle.already_voted_candidate_id = selected
      renderVotePage(bundle, code)
    })
  }

  renderList()
}

renderLanding()
