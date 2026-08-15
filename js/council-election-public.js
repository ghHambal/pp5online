import { supabase } from './supabase.js'
import { esc, toast } from './sports-portals.js'

// ─── โหวตเลือกตั้งสภานักเรียน — หน้าแยกสำหรับจุดลงคะแนนที่มีครู/เจ้าหน้าที่คุมเท่านั้น ──────
// ไม่ใช้ session ล็อกอินเลย (anon key + RPC ฝั่ง server ทำหน้าที่ตรวจสอบ+กันโหวตซ้ำแทน)
// mirror pattern เดียวกับ js/shirt-vote-public.js

const app = document.getElementById('council-election-app')

function studentCard(s) {
  return `
    <div class="flex items-center gap-3 p-3 bg-[#fbf7f7] rounded-2xl border">
      ${s.image_url
        ? `<img src="${esc(s.image_url)}" class="w-14 h-16 object-cover rounded-xl border">`
        : `<div class="w-14 h-16 rounded-xl bg-[#cfe3d8] text-[#edf4f0]0 grid place-items-center font-bold">${esc((s.full_name || '?').charAt(0))}</div>`}
      <div class="min-w-0 flex-1">
        <p class="font-bold text-[#1d1519] text-sm truncate">${esc(s.full_name)}</p>
        <p class="text-xs text-[#90828a]">ห้อง ${esc(s.main_room || '—')}</p>
      </div>
    </div>`
}

function renderLanding() {
  app.innerHTML = `
    <div class="bg-white rounded-2xl border p-6">
      <label class="block text-xs font-bold text-[#6e5f65] uppercase tracking-wider mb-2">กรอกรหัสนักเรียนของคุณ</label>
      <input id="student-code-input" inputmode="numeric" placeholder="เช่น 608001"
        class="w-full border border-[#e8dcdd] rounded-xl px-4 py-3 text-lg font-bold text-center tracking-widest focus:outline-none focus:border-[#edf4f0]0" />
      <p id="student-code-error" class="hidden text-xs text-[#a63a2c] mt-2 text-center"></p>
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
      <button id="btn-enter-vote" class="w-full mt-3 py-3 rounded-2xl bg-[#14563b] hover:bg-[#0d3a28] text-white font-bold text-sm">🗳️ ใช่ฉันเอง — เข้าหน้าโหวต</button>
      <button id="btn-not-me" class="w-full mt-2 py-2 text-xs text-[#90828a] hover:text-[#4a3b41]">ไม่ใช่ฉัน กรอกรหัสใหม่</button>
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
      <div class="bg-white rounded-2xl border p-6 text-center text-[#90828a] text-sm">ยังไม่มีการเลือกตั้งสำหรับสภาของคุณในขณะนี้</div>`
    app.querySelector('#btn-back').addEventListener('click', renderLanding)
    return
  }

  const alreadyVoted = bundle.already_voted_candidate_id
  const picked = alreadyVoted ? bundle.candidates.find(c => c.id === alreadyVoted) : null

  if (alreadyVoted) {
    app.innerHTML = `
      <div class="bg-white rounded-2xl border p-6 text-center space-y-3">
        <p class="text-3xl">✅</p>
        <p class="font-bold text-[#1d1519]">คุณลงคะแนนแล้ว ขอบคุณที่ใช้สิทธิ์!</p>
        ${picked ? `<div class="mt-2">${studentCard({ full_name: picked.full_name, image_url: picked.image_url, main_room: picked.main_room })}</div>` : ''}
        <p class="text-xs text-[#90828a] mt-2">${esc(bundle.thank_you_message || 'ผลการเลือกตั้งจะประกาศผ่านระบบ ปพ.5 เมื่อครูที่ปรึกษายืนยันแล้ว')}</p>
        <button id="btn-restart" class="w-full mt-2 py-3 rounded-2xl bg-[#f2ecec] hover:bg-[#e8dcdd] text-[#4a3b41] font-bold text-sm">เสร็จสิ้น — คนต่อไปกรอกรหัสใหม่</button>
      </div>`
    app.querySelector('#btn-restart').addEventListener('click', renderLanding)
    return
  }

  if (!bundle.is_open) {
    app.innerHTML = `
      <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
      <div class="bg-white rounded-2xl border p-6 text-center text-[#90828a] text-sm">ขณะนี้ยังไม่เปิดโหวต หรือปิดโหวตแล้ว</div>`
    app.querySelector('#btn-back').addEventListener('click', renderLanding)
    return
  }

  let selected = null
  app.innerHTML = `
    <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
    <div class="bg-white rounded-2xl border p-5 space-y-3">
      <p class="text-sm font-bold text-[#4a3b41] text-center mb-1">เลือกผู้สมัครที่ต้องการเลือกตั้ง</p>
      <div id="candidate-list" class="space-y-2"></div>
      <div id="vote-confirm-area"></div>
    </div>`
  app.querySelector('#btn-back').addEventListener('click', renderLanding)
  const list = app.querySelector('#candidate-list')
  const confirmArea = app.querySelector('#vote-confirm-area')

  if (!bundle.candidates.length) {
    list.innerHTML = `<p class="text-sm text-[#90828a] text-center py-8">ยังไม่มีผู้สมัครในการเลือกตั้งนี้</p>`
    return
  }

  const renderList = () => {
    list.innerHTML = bundle.candidates.map(c => `
      <button data-candidate="${c.id}" class="w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${selected === c.id ? 'border-[#edf4f0]0 bg-[#edf4f0]' : 'border-[#f1e9e9] hover:border-[#b9d6c7]'}">
        <div class="w-8 h-8 rounded-full bg-[#cfe3d8] text-[#0d3a28] grid place-items-center font-bold text-sm flex-shrink-0">${c.ballot_number}</div>
        ${c.image_url
          ? `<img src="${esc(c.image_url)}" class="w-10 h-12 object-cover rounded-[10px] border flex-shrink-0">`
          : `<div class="w-10 h-12 rounded-[10px] bg-[#edf4f0] text-[#edf4f0]0 grid place-items-center font-bold flex-shrink-0 border">${esc((c.full_name || '?').charAt(0))}</div>`}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[#1d1519] truncate">${esc(c.full_name)}</p>
          <p class="text-xs text-[#6e5f65]">${esc(c.main_room || '')}</p>
        </div>
      </button>`).join('')
    list.querySelectorAll('[data-candidate]').forEach(btn => {
      btn.addEventListener('click', () => { selected = Number(btn.dataset.candidate); renderList(); renderConfirm() })
    })
  }

  const renderConfirm = () => {
    if (!selected) { confirmArea.innerHTML = ''; return }
    const c = bundle.candidates.find(x => x.id === selected)
    confirmArea.innerHTML = `
      <div class="border-t border-[#f1e9e9] pt-3 mt-1 space-y-2">
        <p class="text-xs text-[#6e5f65] text-center">แน่ใจนะว่าจะเลือก <span class="font-bold text-[#4a3b41]">${esc(c.full_name)}</span>?</p>
        <button id="btn-confirm-vote" class="w-full py-3 rounded-2xl bg-[#14563b] hover:bg-[#0d3a28] text-white font-bold text-sm">✅ ยืนยันลงคะแนน</button>
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
