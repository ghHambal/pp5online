// js/student-certificates-modal.js — "บัตรของฉัน" รวบรวมเกียรติบัตรของนักเรียนจากทุกแหล่งมาไว้ที่เดียว
// แหล่งที่ 1 (ระบบกลาง) ครอบคลุมทุกใบที่ครูออกผ่านระบบเกียรติบัตรกลาง รวมถึงกิจกรรมสภานักเรียนที่ย้าย
// เข้ามาแล้ว ส่วนอีก 3 แหล่ง (หัวหน้าห้อง/กีฬาสี/ฟุตซอล) ยังเป็นระบบเดิมที่ไม่ได้ย้ายเข้าระบบกลาง
// (ลิงก์ไฟล์ตรงๆ ไม่มีเอนจินเทมเพลต) จึงรวมแบบ adapter อ่านอย่างเดียวไว้ก่อน
import { getMyCertificates } from './certificates-api.js'
import { openCertificatePrint } from './certificate-engine.js'
import { getStudentClassroomRole } from './student-api.js'
import { openAzfutsalModal } from './azfutsal-modal.js'
import { supabase } from './supabase.js'
import { showToast } from './ui.js'

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export async function openMyCertificatesModal(student) {
  document.getElementById('my-certificates-modal')?.remove()
  const previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'

  const modal = document.createElement('div')
  modal.id = 'my-certificates-modal'
  modal.className = 'fixed inset-0 z-[300] bg-white flex flex-col animate-fade'
  modal.innerHTML = `
    <div class="h-14 flex items-center gap-3 px-4 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
      <span class="text-xl">🎖️</span>
      <h2 class="text-sm font-bold text-gray-800 flex-1">บัตรของฉัน</h2>
      <button type="button" data-mycert-close class="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-lg">✕</button>
    </div>
    <div id="my-certificates-body" class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
      <p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>
    </div>`

  const close = () => {
    document.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = previousOverflow
    modal.remove()
  }
  const onKeydown = e => { if (e.key === 'Escape') close() }
  document.addEventListener('keydown', onKeydown)
  document.body.appendChild(modal)
  modal.querySelector('[data-mycert-close]').addEventListener('click', close)

  const body = modal.querySelector('#my-certificates-body')
  const cards = []

  // 1. ระบบกลาง — ทุกใบที่ครูคนใดก็ตามออกให้ผ่านระบบเกียรติบัตรกลาง (รวมกิจกรรมสภาที่ย้ายมาแล้ว)
  const central = await getMyCertificates(student.id).catch(() => [])
  central.forEach(c => cards.push({
    key: `central-${c.id}`, emoji: '🏅',
    title: c.title || 'เกียรติบัตร',
    sub: new Date(c.issued_at).toLocaleDateString('th-TH', { dateStyle: 'long' }),
    onOpen: () => openCertificatePrint({
      layout: c.layout_snapshot,
      variables: { name: student.full_name, date: new Date(c.issued_at).toLocaleDateString('th-TH', { dateStyle: 'long' }), no: c.certificate_no, ...c.variables },
      docTitle: c.title,
    }, showToast),
  }))

  // 2. หัวหน้า/รองหัวหน้าห้องเรียน — ลิงก์ไฟล์ตรงที่แอดมินแปะไว้ ไม่มีเอนจินเทมเพลต
  const classroomRole = await getStudentClassroomRole(student.main_room).catch(() => null)
  const isHead = classroomRole && Number(classroomRole.head_student_id) === Number(student.id)
  const isVice = classroomRole && Number(classroomRole.vice_head_student_id) === Number(student.id)
  const leaderCertUrl = isHead ? classroomRole?.head_cert_url : (isVice ? classroomRole?.vice_head_cert_url : null)
  if (leaderCertUrl) cards.push({
    key: 'classroom-leader', emoji: '👑',
    title: `เกียรติบัตรแต่งตั้ง${isHead ? 'หัวหน้าห้อง' : 'รองหัวหน้าห้อง'}`,
    sub: 'ประจำชั้นปีการศึกษานี้',
    onOpen: () => window.open(leaderCertUrl, '_blank'),
  })

  // 3. กีฬาสี — สิทธิ์คำนวณอัตโนมัติจาก RPC (ครูอัปโหลดไฟล์เองหลังผ่านเกณฑ์) + รางวัลนักกีฬาดีเด่น (ข้อความล้วน ไม่มีไฟล์)
  try {
    const { data: event } = await supabase.from('events').select('id').eq('status', 'active').order('academic_year', { ascending: false }).limit(1).maybeSingle()
    if (event) {
      const [{ data: eligibility }, { data: awards }] = await Promise.all([
        supabase.rpc('get_my_sports_eligibility', { p_event: event.id }).then(r => (r.error ? null : r.data)).catch(() => null),
        supabase.from('outstanding_athletes').select('id, note, sports(name)').eq('event_id', event.id).eq('student_id', student.id).then(r => r.data ?? []).catch(() => []),
      ])
      if (eligibility?.eligible && eligibility?.certificate_url) {
        cards.push({
          key: 'sports-color', emoji: '🎖️', title: 'เกียรติบัตรกีฬาสี',
          sub: `ทีมสี${student.house_color ?? ''}`,
          onOpen: () => window.open(eligibility.certificate_url, '_blank'),
        })
      }
      awards.forEach(a => cards.push({
        key: `sports-award-${a.id}`, emoji: '🏆',
        title: a.sports?.name || 'รางวัลนักกีฬาดีเด่น', sub: a.note || '', onOpen: null,
      }))
    }
  } catch (_) { /* ไม่มีสิทธิ์เข้าถึง RPC หรือยังไม่มีงานกีฬาสีที่ active — ข้ามไปเงียบๆ */ }

  // 4. AZFUTSAL — คำนวณแชมป์/รางวัลสดจากผลการแข่งขันในระบบฟุตซอลเอง (คนละเอนจิน ไม่ join ตรงๆ ที่นี่)
  cards.push({
    key: 'azfutsal', emoji: '⚽', title: 'เกียรติบัตรฟุตซอล AZFUTSALCUP', sub: 'เปิดดูในระบบฟุตซอล (ถ้ามี)',
    onOpen: () => openAzfutsalModal(student.student_code),
  })

  body.innerHTML = cards.length ? `
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${cards.map(c => `
        <div data-key="${esc(c.key)}" class="bg-white border border-amber-200 rounded-2xl p-4 shadow-sm ${c.onOpen ? 'cursor-pointer hover:shadow-md hover:border-amber-300 active:scale-[0.98] transition' : ''}">
          <div class="text-3xl mb-2">${c.emoji}</div>
          <p class="text-xs font-bold text-gray-800 leading-snug">${esc(c.title)}</p>
          <p class="text-[10px] text-gray-500 mt-1">${esc(c.sub || '')}</p>
        </div>`).join('')}
    </div>
  ` : `<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>`

  cards.forEach(c => {
    if (!c.onOpen) return
    body.querySelector(`[data-key="${CSS.escape(c.key)}"]`)?.addEventListener('click', c.onOpen)
  })
}
