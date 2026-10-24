import { supabase } from './supabase.js'

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const genderLabel = { M: 'นักเรียนชาย', W: 'นักเรียนหญิง' }

function candidateCard(candidate) {
  const policies = Array.isArray(candidate.policies) ? candidate.policies : []
  const experience = Array.isArray(candidate.experience) ? candidate.experience : []
  return `<article class="overflow-hidden rounded-2xl border border-white/20 bg-white/95 text-slate-800 shadow-xl">
    <div class="relative aspect-[4/5] bg-emerald-50">
      ${candidate.image_url ? `<img src="${esc(candidate.image_url)}" alt="${esc(candidate.full_name)}" class="h-full w-full object-cover">` : `<div class="grid h-full place-items-center text-6xl font-black text-emerald-700">${esc((candidate.full_name || '?').charAt(0))}</div>`}
      <div class="absolute left-3 top-3 grid h-14 min-w-14 place-items-center rounded-full bg-white px-2 text-2xl font-black text-emerald-800 shadow-lg">${candidate.ballot_number}</div>
    </div>
    <div class="space-y-2 p-4"><div><h3 class="text-lg font-black">หมายเลข ${candidate.ballot_number} · ${esc(candidate.full_name)}</h3><p class="text-xs text-slate-500">${esc(candidate.main_room || '')}</p></div>
      ${candidate.slogan ? `<p class="font-bold text-emerald-800">“${esc(candidate.slogan)}”</p>` : ''}
      ${candidate.vision || candidate.campaign_statement ? `<p class="text-sm leading-relaxed">${esc(candidate.vision || candidate.campaign_statement)}</p>` : ''}
      ${policies.length ? `<div><p class="text-xs font-bold text-slate-500">นโยบาย</p><ul class="mt-1 list-inside list-disc text-sm">${policies.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>` : ''}
      ${experience.length ? `<details class="text-sm"><summary class="cursor-pointer font-bold text-emerald-800">ประสบการณ์และผลงาน</summary><ul class="mt-1 list-inside list-disc">${experience.map(item => `<li>${esc(item)}</li>`).join('')}</ul></details>` : ''}
      ${candidate.intro_video_url ? `<a href="${esc(candidate.intro_video_url)}" target="_blank" rel="noopener" class="inline-block text-sm font-bold text-emerald-700 underline">ดูวิดีโอแนะนำตัว</a>` : ''}
    </div>
  </article>`
}

export async function initCouncilCampaignPopup() {
  if (document.getElementById('council-campaign-launcher')) return
  const { data, error } = await supabase.rpc('get_council_campaign_bundle')
  if (error || !data?.elections?.length) return
  const elections = data.elections.filter(item => item.candidates?.length)
  if (!elections.length) return
  let activeGender = elections[0].gender

  const launcher = document.createElement('button')
  launcher.id = 'council-campaign-launcher'
  launcher.type = 'button'
  launcher.className = 'fixed bottom-24 right-4 z-[89] rounded-full bg-emerald-700 px-4 py-3 text-sm font-black text-white shadow-2xl hover:bg-emerald-800'
  launcher.textContent = '🗳️ ผู้สมัครประธานสภา'
  document.body.appendChild(launcher)

  const open = () => {
    document.getElementById('council-campaign-modal')?.remove()
    const election = elections.find(item => item.gender === activeGender) || elections[0]
    const modal = document.createElement('div')
    modal.id = 'council-campaign-modal'
    modal.className = 'fixed inset-0 z-[500] overflow-y-auto bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 text-white'
    modal.innerHTML = `<div class="mx-auto min-h-screen max-w-6xl px-4 py-6 sm:px-8">
      <div class="mb-5 flex items-start justify-between gap-4"><div><p class="text-sm font-bold text-emerald-200">ประชาสัมพันธ์ก่อนวันเลือกตั้ง</p><h1 class="text-2xl font-black sm:text-4xl">รู้จักผู้สมัครประธานสภานักเรียน</h1><p class="mt-1 text-sm text-emerald-100">${esc(election.term_label)} · สำหรับ${genderLabel[election.gender]}</p></div><button id="council-campaign-close" class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 text-2xl" aria-label="ปิด">✕</button></div>
      ${elections.length > 1 ? `<div class="mb-5 flex gap-2">${elections.map(item => `<button class="council-campaign-gender flex-1 rounded-full px-4 py-3 text-sm font-black ${item.gender === activeGender ? 'bg-white text-emerald-900' : 'bg-white/15 text-white'}" data-gender="${item.gender}">${genderLabel[item.gender]}</button>`).join('')}</div>` : ''}
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">${election.candidates.map(candidateCard).join('')}</div>
      <div class="mt-6 flex flex-col items-center gap-3 pb-8"><p class="text-center text-sm text-emerald-100">ศึกษานโยบายให้ครบก่อนตัดสินใจ และใช้สิทธิ์ภายในเวลาที่โรงเรียนกำหนด</p><a href="council.html?view=candidates&term=${election.term_id}" class="rounded-full bg-white px-6 py-3 text-sm font-black text-emerald-900">เปิดหน้าการเลือกตั้ง</a></div>
    </div>`
    document.body.appendChild(modal)
    document.body.style.overflow = 'hidden'
    modal.querySelector('#council-campaign-close').addEventListener('click', () => { modal.remove(); document.body.style.overflow = '' })
    modal.querySelectorAll('.council-campaign-gender').forEach(button => button.addEventListener('click', () => { activeGender = button.dataset.gender; open() }))
  }
  launcher.addEventListener('click', open)
  open()

  const lastClose = Math.max(...elections.map(item => new Date(item.closes_at).getTime()).filter(Number.isFinite))
  if (Number.isFinite(lastClose)) setTimeout(() => { launcher.remove(); document.getElementById('council-campaign-modal')?.remove(); document.body.style.overflow = '' }, Math.min(Math.max(lastClose - Date.now(), 0), 2147483647))
}
