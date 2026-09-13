import { renderAwardsStaff } from './sports-awards-admin.js'
import { supabase } from './supabase.js'
import { compressImage } from './storage.js'

const esc = (s = '') => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const date = s => s ? new Date(s).toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' }) : ''
const gender = s => ({ M: 'ชาย', W: 'หญิง', Coed: 'ผสม' }[s] || s || '')
const root = document.getElementById('awards-root')
let eventId, password = null, snapshot, activeId = null, busy = false
let tab = new URL(location.href).searchParams.get('tab') === 'done' ? 'done' : 'pending'
let search = ''
const pendingUploads = new Map()
async function rpc(name, args = {}) {
  const { data, error } = await supabase.rpc(name, args)
  if (error) throw new Error(error.message)
  return data
}
function message(text, error = false) {
  const el = document.getElementById('awards-message')
  el.textContent = text
  el.className = `my-3 rounded-xl p-3 ${error ? 'bg-red-50 text-red-800' : 'bg-emerald-50 text-emerald-800'}`
}
function login() {
  root.innerHTML = `<form id="awards-login" class="bg-white rounded-2xl border p-6 max-w-md mx-auto shadow-sm"><h2 class="text-lg font-bold">เข้าสู่ศูนย์มอบเหรียญ</h2><p class="text-sm text-slate-500 my-3">ครูที่ได้รับมอบหมายสามารถเข้าสู่ระบบ ปพ.5 เพื่อใช้สิทธิ์บัญชี หรือใช้รหัสผ่านสำหรับทีมงาน</p><label class="block">รหัสผ่าน<input id="awards-password" type="password" required autocomplete="current-password" class="block w-full border rounded-xl p-3 mt-2"></label><button class="mt-4 rounded-xl bg-amber-700 text-white px-5 py-3">เข้าสู่หน้ามอบเหรียญ</button><a href="teacher.html" class="block mt-4 text-sm underline">เข้าสู่ระบบ ปพ.5</a></form>`
  root.querySelector('form').onsubmit = async e => {
    e.preventDefault()
    const btn = e.currentTarget.querySelector('button'); btn.disabled = true
    password = root.querySelector('input').value
    try { await refresh(); message('เข้าสู่ศูนย์มอบเหรียญแล้ว') } catch (err) { password = null; message(err.message, true); btn.disabled = false }
  }
}
function setTab(value) {
  tab = value
  const url = new URL(location.href); url.searchParams.set('tab', tab); history.replaceState(null, '', url)
}
async function refresh() {
  snapshot = await rpc('sports_awards_list', { p_event: eventId, p_password: password })
  render()
}
function colorLogo(award, small = false) {
  const color = snapshot.colors?.find(c => c.id === award.color_id)
  if (!color?.logo_url || !/^https?:\/\//i.test(color.logo_url)) return ''
  return `<img src="${esc(color.logo_url)}" alt="โลโก้สี${esc(award.color)}" loading="lazy" class="${small ? 'w-8 h-8' : 'w-12 h-12'} object-contain rounded-lg bg-white flex-shrink-0">`
}
function medals(result) {
  return (result || []).map(a => `<div class="rounded-xl bg-slate-50 p-3"><div class="flex items-center gap-3">${colorLogo(a)}<b>${{gold:'🥇 ทอง',silver:'🥈 เงิน',bronze:'🥉 ทองแดง'}[a.medal] || esc(a.medal)} · สี${esc(a.color)}</b></div><ul class="text-sm mt-2 space-y-1">${(a.recipients || []).map(r => `<li>${esc(r.name)} <span class="text-slate-500">${esc(r.room)} ${r.team ? `· ทีม ${esc(r.team)}` : ''}</span></li>`).join('') || '<li>ตรวจรายชื่อจากฝ่ายแข่งขัน</li>'}</ul></div>`).join('')
}
function render() {
  const rows = snapshot.rows || []
  const pending = rows.filter(r => !r.delivered_at)
  const done = rows.filter(r => r.delivered_at)
  const selected = rows.find(r => r.id === activeId)
  root.innerHTML = `<div class="flex flex-wrap gap-3 items-center mb-5"><a href="?tab=pending" data-tab="pending" class="px-5 py-3 rounded-xl ${tab === 'pending' ? 'bg-amber-700 text-white' : 'bg-white border'}">🏅 ยังไม่ได้มอบ (${pending.length})</a><a href="?tab=done" data-tab="done" class="px-5 py-3 rounded-xl ${tab === 'done' ? 'bg-emerald-700 text-white' : 'bg-white border'}">✅ มอบแล้ว (${done.length})</a><button id="awards-refresh" class="bg-white border rounded-xl px-4 py-3">↻ รีเฟรช</button><a class="text-sm underline" href="azizgames.html?tab=gallery" target="_blank" rel="noopener">📸 แกลเลอรี่</a></div><label class="block text-sm mb-4">ค้นหารายการ กีฬา เพศ ระดับชั้น หรือสี<input id="awards-search" value="${esc(search)}" class="block w-full border rounded-xl p-3 mt-1" placeholder="เช่น วิ่ง 100 เมตร"></label><div id="awards-list" class="grid md:grid-cols-2 gap-4"></div><div id="awards-detail"></div>${snapshot.admin ? '<details id="awards-settings" class="mt-6"><summary class="font-bold cursor-pointer">⚙️ ตั้งค่าครูทีมมอบเหรียญ</summary><div id="awards-staff"></div></details>' : ''}`
  root.querySelectorAll('[data-tab]').forEach(a => a.onclick = e => { e.preventDefault(); setTab(a.dataset.tab); activeId = null; render() })
  root.querySelector('#awards-search').oninput = e => { search = e.target.value; renderList() }
  root.querySelector('#awards-refresh').onclick = () => run(refresh)
  root.querySelector('#awards-settings')?.addEventListener('toggle', async e => {
    if (e.currentTarget.open && !e.currentTarget.dataset.loaded) {
      e.currentTarget.dataset.loaded = 'true'
      await renderAwardsStaff(root.querySelector('#awards-staff'), eventId)
    }
  })
  renderList()
  if (selected) detail(selected)
}
function renderList() {
  const rows = (snapshot.rows || []).filter(r => (tab === 'done' ? !!r.delivered_at : !r.delivered_at) && `${r.name} ${gender(r.gender)} ${r.level} ${(r.result || []).map(a => a.color).join(' ')}`.toLowerCase().includes(search.toLowerCase()))
  root.querySelector('#awards-list').innerHTML = rows.map(r => `<button data-open="${esc(r.id)}" class="text-left bg-white border rounded-2xl p-5 shadow-sm hover:border-amber-600"><h2 class="font-bold text-lg">${esc(r.name)}</h2><p class="text-sm text-slate-500">${esc(gender(r.gender))} · ${esc(r.level)}</p><div class="flex flex-wrap gap-3 mt-3">${(r.result || []).map(a => `<span class="flex items-center gap-1 text-sm">${colorLogo(a, true)}${{gold:'🥇',silver:'🥈',bronze:'🥉'}[a.medal] || '🏅'} สี${esc(a.color)}</span>`).join('')}</div><p class="mt-3">${r.delivered_at ? `✅ มอบแล้ว ${esc(date(r.delivered_at))}` : '🏅 รอมอบเหรียญ'}</p>${r.changed ? '<p class="text-red-700 mt-2 font-bold">ผลเปลี่ยนหลังการมอบ — รอผู้ดูแลตรวจสอบ</p>' : ''}${!r.ready ? '<p class="text-red-700">ผลเหรียญยังไม่ครบ</p>' : ''}${r.delivered_at ? `<p class="text-sm mt-2">${r.photos.length ? `📸 ${r.photos.length} รูป` : '📷 รอแนบรูป'}</p>` : ''}</button>`).join('') || '<p class="p-8 text-center text-slate-500">ไม่มีรายการในหน้านี้</p>'
  root.querySelectorAll('[data-open]').forEach(btn => btn.onclick = () => { activeId = btn.dataset.open; detail(snapshot.rows.find(r => r.id === activeId)); root.querySelector('#awards-detail').scrollIntoView({ behavior: 'smooth' }) })
}
function detail(r) {
  const el = root.querySelector('#awards-detail')
  el.innerHTML = `<section class="bg-white border rounded-2xl p-5 mt-6 shadow-sm"><div class="flex justify-between gap-3"><h2 class="text-xl font-bold">${esc(r.name)} · ${esc(gender(r.gender))} · ${esc(r.level)}</h2><button id="awards-close" class="border rounded-lg px-3">ปิด</button></div><div class="grid md:grid-cols-3 gap-3 mt-4">${medals(r.result)}</div>${r.format === 'bracket' ? '<p class="text-sm text-slate-500 mt-2">รายชื่อแสดงจากทะเบียนนักกีฬาตามสี หากสีเดียวมีหลายทีม ให้ตรวจชื่อทีมที่ชนะกับฝ่ายแข่งขัน</p>' : ''}${r.result.some(a => !a.recipients?.length) ? '<p class="text-amber-800 mt-2">บางอันดับยังระบุรายชื่อผู้รับไม่ได้ เช่น ผลเท่ากันหรือข้อมูลไม่ครบ กรุณายืนยันรายชื่อกับฝ่ายแข่งขันก่อนมอบ</p>' : ''}${r.changed ? `<div class="bg-red-50 p-4 rounded-xl my-4"><b>ผลเปลี่ยนหลังการมอบ กรุณาให้ผู้ดูแลตรวจสอบ</b><details class="mt-2"><summary>ผลที่ใช้เมื่อมอบเหรียญ</summary>${medals(r.delivered_result)}</details></div>` : ''}
  ${!r.delivered_at ? `<form id="awards-deliver" class="mt-5">${!snapshot.account ? '<label>ชื่อผู้บันทึก<input id="awards-name" required minlength="2" maxlength="150" class="border p-3 rounded-xl block w-full mt-1 mb-3"></label>' : ''}<button ${!r.ready ? 'disabled' : ''} class="bg-emerald-700 text-white px-5 py-3 rounded-xl disabled:opacity-40">ยืนยันมอบเหรียญแล้ว</button></form>` : `<p class="my-4">✅ มอบแล้ว ${esc(date(r.delivered_at))} · ผู้บันทึก ${esc(r.recorder)}</p><form id="awards-upload"><label class="block">📸 เพิ่มรูปพิธีมอบเหรียญ<input type="file" accept="image/*" multiple required class="block my-3 max-w-full"></label><p class="text-sm text-slate-500 mb-3">รูปจะปรากฏในแกลเลอรี่หมวด “พิธีมอบเหรียญ” ด้วย</p><button class="bg-amber-700 text-white px-5 py-3 rounded-xl">อัปโหลดรูป</button></form><div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">${r.photos.map(p => `<a href="${esc(p.url)}" target="_blank" rel="noopener"><img src="${esc(p.url)}" alt="พิธีมอบเหรียญ ${esc(r.name)}" loading="lazy" class="w-full h-36 object-cover rounded-xl"></a>`).join('')}</div>${snapshot.admin ? '<form id="awards-undo" class="mt-5 border-t pt-4"><label>เหตุผลที่ย้อนสถานะ<input required maxlength="500" class="block border rounded-xl p-3 my-2 w-full"></label><button class="border border-red-300 text-red-700 rounded-xl px-4 py-2">ย้อนเป็นยังไม่ได้มอบ</button></form>' : ''}`}
  <details class="mt-5"><summary>ประวัติการบันทึก (${r.history.length})</summary>${r.history.map(h => `<p class="text-sm mt-2">${esc(date(h.at))} · ${esc(h.name)} · ${esc(h.action)} ${esc(h.reason || '')}</p>`).join('')}</details></section>`
  el.querySelector('#awards-close').onclick = () => { activeId = null; el.innerHTML = '' }
  el.querySelector('#awards-deliver')?.addEventListener('submit', e => { e.preventDefault(); const name = el.querySelector('#awards-name')?.value; run(async () => { await save(r, true, name); setTab('done'); await refresh(); message('บันทึกการมอบแล้ว เพิ่มรูปได้ด้านล่าง') }) })
  el.querySelector('#awards-undo')?.addEventListener('submit', e => { e.preventDefault(); const reason = e.currentTarget.querySelector('input').value; run(async () => { await save(r, false, null, reason); setTab('pending'); await refresh(); message('ย้อนสถานะพร้อมบันทึกประวัติแล้ว') }) })
  el.querySelector('#awards-upload')?.addEventListener('submit', e => { e.preventDefault(); const files = Array.from(e.currentTarget.querySelector('input').files); run(() => upload(r, files)) })
}
async function save(r, delivered, name = null, reason = null) {
  await rpc('sports_awards_save', { p_event: eventId, p_sport: r.id, p_fingerprint: r.fingerprint, p_revision: r.revision, p_delivered: delivered, p_password: password, p_name: name, p_reason: reason })
}
async function upload(r, files) {
  if (files.length > 20) throw new Error('เลือกได้ครั้งละไม่เกิน 20 รูป')
  for (const [i, file] of files.entries()) {
    if (!file.type.startsWith('image/') || file.size > 25 * 1024 * 1024) throw new Error('กรุณาใช้รูปภาพขนาดไม่เกิน 25 MB ต่อรูป')
    const key = `${r.id}:${file.name}:${file.size}:${file.lastModified}`
    let job = pendingUploads.get(key)
    if (!job) {
      const blob = await compressImage(file, { maxWidth: 1600, quality: 0.85 })
      const path = await rpc('sports_awards_photo', { p_event: eventId, p_sport: r.id, p_password: password })
      const { error } = await supabase.storage.from('sports-gallery').upload(path, blob, { contentType: 'image/jpeg', upsert: false })
      if (error) throw new Error(error.message)
      job = { path, linked: false }; pendingUploads.set(key, job)
    }
    if (!job.linked) {
      await rpc('sports_awards_photo', { p_event: eventId, p_sport: r.id, p_password: password, p_path: job.path })
      job.linked = true
    }
    message(`บันทึกรูป ${i + 1}/${files.length} แล้ว`)
  }
  await refresh(); message('บันทึกรูปเข้าแกลเลอรี่หมวดพิธีมอบเหรียญแล้ว')
}
async function run(fn) {
  if (busy) return
  busy = true; root.inert = true
  try { await fn() } catch (err) { message(err.message, true) } finally { busy = false; root.inert = false }
}
async function init() {
  try {
    const access = await rpc('sports_awards_access')
    eventId = access.event_id
    if (!eventId) throw new Error('ยังไม่มีกิจกรรมกีฬาสีที่เปิดใช้งาน')
    if (access.allowed) await refresh(); else login()
  } catch (err) { root.innerHTML = '<p class="p-5">ไม่สามารถเปิดศูนย์มอบเหรียญได้ กรุณาลองใหม่หรือติดต่อผู้ดูแล</p>'; message(err.message, true) }
}
init()
// Refresh the waiting queue without interrupting a ceremony or an upload.
setInterval(() => {
  if (snapshot && !busy && !activeId && !document.hidden && !root.querySelector('#awards-settings[open]') && !root.contains(document.activeElement)) run(refresh)
}, 45000)
