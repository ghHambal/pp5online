import { supabase } from './supabase.js'

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const labels = { M: 'ประธานสภานักเรียนชาย', W: 'ประธานสภานักเรียนหญิง' }

function publicRoom(value) {
  return String(value || '').replace(/^(.*\d+)\/\d+(.*)$/, '$1$2').trim()
}

function resultCard(candidate, index, baseVotes) {
  const votes = Number(candidate.votes) || 0
  const percent = baseVotes ? votes * 100 / baseVotes : 0
  const name = candidate.full_name || 'ผู้สมัคร'
  const photo = /^https?:\/\//i.test(candidate.image_url || '') ? esc(candidate.image_url) : ''
  return `<article class="overflow-hidden rounded-2xl border ${index === 0 ? 'border-amber-300 bg-gradient-to-br from-amber-50 via-white to-emerald-50 shadow-md' : 'border-slate-200 bg-white'} p-4">
    <div class="flex items-center gap-4">
      <div class="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-emerald-50 ring-1 ring-black/5 sm:h-24 sm:w-24"><span class="absolute inset-0 grid place-items-center text-3xl font-black text-emerald-800">${esc(name.trim().slice(0, 1))}</span>${photo ? `<img src="${photo}" alt="รูป${esc(name)}" loading="lazy" class="relative h-full w-full object-cover" onerror="this.remove()">` : ''}</div>
      <div class="min-w-0 flex-1"><div class="flex flex-wrap items-center gap-2"><span class="rounded-full ${index === 0 ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-600'} px-2.5 py-1 text-xs font-extrabold">${index === 0 ? '🏆 อันดับ 1' : `อันดับ ${index + 1}`}</span><span class="text-xs font-bold text-slate-500">หมายเลข ${esc(candidate.ballot_number)}</span></div><h3 class="mt-2 text-base font-black text-slate-900 sm:text-lg">${esc(name)}</h3><p class="mt-0.5 text-xs text-slate-500">${esc(publicRoom(candidate.room))}</p></div>
      <div class="shrink-0 text-right"><b class="text-2xl font-black text-emerald-900 sm:text-3xl">${votes.toLocaleString('th-TH')}</b><span class="block text-xs font-semibold text-slate-500">คะแนน</span></div>
    </div>
    <div class="mt-4"><div class="mb-1 flex justify-between text-xs font-bold"><span class="text-slate-500">สัดส่วนคะแนน</span><span class="text-emerald-900">${percent.toFixed(1)}%</span></div><div class="h-2.5 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full ${index === 0 ? 'bg-gradient-to-r from-amber-400 to-emerald-600' : 'bg-emerald-600'}" style="width:${percent.toFixed(1)}%"></div></div></div>
  </article>`
}

export async function initCouncilElectionResultsPopup({ role, gender } = {}) {
  if (!['student', 'teacher'].includes(role) || document.getElementById('council-election-results-launcher')) return
  const { data, error } = await supabase.rpc('get_council_election_results')
  if (error || data?.visible !== true || !Array.isArray(data.results)) return

  document.getElementById('council-campaign-modal')?.remove()
  document.getElementById('council-campaign-launcher')?.remove()
  document.body.style.overflow = ''

  const studentGender = gender === 'ชาย' || gender === 'M' ? 'M' : gender === 'หญิง' || gender === 'W' ? 'W' : null
  const allowedGenders = role === 'teacher' ? ['M', 'W'] : studentGender ? [studentGender] : []
  if (!allowedGenders.length) return
  let activeGender = allowedGenders[0]
  const launcher = document.createElement('button')
  launcher.id = 'council-election-results-launcher'
  launcher.type = 'button'
  launcher.className = 'fixed bottom-24 right-4 z-[89] rounded-full bg-emerald-800 px-4 py-3 text-sm font-black text-white shadow-2xl hover:bg-emerald-900'
  launcher.textContent = '📊 ผลการเลือกตั้ง'
  document.body.appendChild(launcher)

  const open = () => {
    document.getElementById('council-election-results-modal')?.remove()
    const ballot = data.results.find(item => item.gender === activeGender)
    const candidates = [...(Array.isArray(ballot?.candidates) ? ballot.candidates : [])]
      .sort((a, b) => (Number(b.votes) || 0) - (Number(a.votes) || 0) || (Number(a.ballot_number) || 0) - (Number(b.ballot_number) || 0))
    const validVotes = candidates.reduce((sum, candidate) => sum + (Number(candidate.votes) || 0), 0)
    const totalBallots = Number(ballot?.vote_total) || 0
    const abstentions = Number(ballot?.abstentions) || 0
    const modal = document.createElement('div')
    modal.id = 'council-election-results-modal'
    modal.className = 'fixed inset-0 z-[500] overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6'
    modal.innerHTML = `<section class="mx-auto my-2 max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl sm:my-6">
      <header class="flex items-start justify-between gap-4 bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-800 p-5 text-white sm:p-7"><div><p class="text-xs font-bold uppercase tracking-[.16em] text-emerald-200">ผลการเลือกตั้ง</p><h1 class="mt-1 text-xl font-black sm:text-3xl">ผลการเลือกตั้งประธานสภานักเรียน วาระ 2/69 - 1/70</h1><p class="mt-1 text-sm text-emerald-100/80">คะแนนรวมหลังปิดหีบ · คิดสัดส่วนจากคะแนนเลือกผู้สมัคร ไม่รวมงดออกเสียง</p></div><button id="council-election-results-close" type="button" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 text-2xl" aria-label="ปิด">×</button></header>
      <div class="space-y-5 p-4 sm:p-6">
        ${allowedGenders.length > 1 ? `<div class="grid grid-cols-2 gap-2">${allowedGenders.map(key => `<button type="button" data-result-gender="${key}" class="rounded-xl border px-3 py-3 text-sm font-extrabold transition ${activeGender === key ? 'border-emerald-800 bg-emerald-800 text-white shadow' : 'border-slate-200 bg-white text-slate-700'}">${labels[key]}</button>`).join('')}</div>` : ''}
        ${ballot ? `<div class="grid grid-cols-1 gap-3 sm:grid-cols-3"><div class="rounded-2xl bg-slate-50 p-4"><span class="text-xs font-semibold text-slate-500">บัตรที่ลงคะแนน</span><b class="mt-1 block text-2xl font-black text-slate-900">${totalBallots.toLocaleString('th-TH')}</b></div><div class="rounded-2xl bg-emerald-50 p-4"><span class="text-xs font-semibold text-emerald-800">เลือกผู้สมัคร</span><b class="mt-1 block text-2xl font-black text-emerald-950">${validVotes.toLocaleString('th-TH')}</b></div><div class="rounded-2xl bg-amber-50 p-4"><span class="text-xs font-semibold text-amber-800">งดออกเสียง</span><b class="mt-1 block text-2xl font-black text-amber-950">${abstentions.toLocaleString('th-TH')}</b></div></div><div class="space-y-3">${candidates.map((candidate, index) => resultCard(candidate, index, validVotes)).join('') || '<p class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500">ยังไม่มีผลคะแนน</p>'}</div>` : '<p class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500">ไม่พบผลของบัตรเลือกตั้งนี้</p>'}
      </div>
    </section>`
    document.body.appendChild(modal)
    document.body.style.overflow = 'hidden'
    modal.querySelector('#council-election-results-close').addEventListener('click', () => { modal.remove(); document.body.style.overflow = '' })
    modal.querySelectorAll('[data-result-gender]').forEach(button => button.addEventListener('click', () => { activeGender = button.dataset.resultGender; open() }))
  }

  launcher.addEventListener('click', open)
  open()
}
