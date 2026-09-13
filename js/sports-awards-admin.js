import { supabase } from './supabase.js'
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
export async function renderAwardsStaff(root, eventId) {
  const section = document.createElement('section')
  section.className = 'bg-white border rounded-2xl p-5'
  section.innerHTML = '<h2 class="font-bold">🏅 ทีมศูนย์มอบเหรียญ</h2><p class="text-sm text-slate-500 my-2">ครูที่ได้รับมอบหมายจะเห็นกลุ่มศูนย์มอบเหรียญใน ปพ.5 และเข้าได้โดยไม่ต้องใส่รหัสผ่าน</p><a href="sports-awards.html" target="_blank" rel="noopener" class="underline">เปิดศูนย์มอบเหรียญ ↗</a><div role="status" class="text-sm my-2"></div><label class="block my-3">ค้นหาครู<input class="block w-full border rounded-xl p-2 mt-1" type="search"></label><div data-staff-list class="max-h-80 overflow-auto"></div>'
  root.appendChild(section)
  const status = section.querySelector('[role=status]')
  let teachers = []
  function render() {
    const query = section.querySelector('input').value.toLowerCase()
    section.querySelector('[data-staff-list]').innerHTML = teachers.filter(t => t.name.toLowerCase().includes(query)).map(t => `<div class="flex items-center gap-3 border-b py-3"><span class="flex-1">${esc(t.name)}<small class="block text-slate-500">${t.assigned ? 'ได้รับมอบหมายแล้ว' : 'ยังไม่ได้รับมอบหมาย'}</small></span><button data-profile="${esc(t.profile_id)}" class="border rounded-xl px-3 py-2 text-sm ${t.assigned ? 'text-red-700' : 'text-emerald-700'}">${t.assigned ? 'ถอนการมอบหมาย' : 'มอบหมาย'}</button></div>`).join('') || '<p>ไม่พบครู</p>'
    section.querySelectorAll('[data-profile]').forEach(btn => btn.onclick = async () => {
      btn.disabled = true
      const teacher = teachers.find(t => t.profile_id === btn.dataset.profile)
      const { data, error } = await supabase.rpc('sports_awards_staff', { p_event: eventId, p_profile: teacher.profile_id, p_enabled: !teacher.assigned })
      if (error) { status.textContent = error.message; btn.disabled = false; return }
      teachers = data; status.textContent = 'บันทึกการมอบหมายแล้ว'; render()
    })
  }
  const { data, error } = await supabase.rpc('sports_awards_staff', { p_event: eventId })
  if (error) { status.textContent = `ยังเปิดการมอบหมายไม่ได้: ${error.message}`; return }
  teachers = data || []; section.querySelector('input').oninput = render; render()
}
