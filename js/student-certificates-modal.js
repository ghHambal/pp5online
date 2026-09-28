// js/student-certificates-modal.js — "เกียรติบัตรของฉัน" รวบรวมเกียรติบัตรของนักเรียนจากทุกแหล่งมาไว้ที่เดียว
// แหล่งที่ 1 (ระบบกลาง) ครอบคลุมทุกใบที่ครูออกผ่านระบบเกียรติบัตรกลาง รวมถึงกิจกรรมสภานักเรียนที่ย้าย
// เข้ามาแล้ว ส่วนหัวหน้าห้อง/สิทธิ์กีฬาสี/ฟุตซอลยังเป็น adapter จากระบบเดิม ขณะที่ใบเหรียญกีฬาสี
// ใช้เอนจินเทมเพลตกลางสร้างในเครื่องนักเรียนและไม่อัปโหลดไฟล์กลับเซิร์ฟเวอร์
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
      <h2 class="text-sm font-bold text-gray-800 flex-1">เกียรติบัตรของฉัน</h2>
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

  // 3. กีฬาสี — เกียรติบัตรเหรียญและนักกีฬาดีเด่นสร้างจากข้อมูลผลรางวัลบนเครื่องนักเรียนเอง
  // ส่วนสิทธิ์เข้าร่วมกีฬาสียังคงแสดงจากข้อมูลสิทธิ์เดิม
  try {
    const { data: event } = await supabase.from('events').select('id, status').order('academic_year', { ascending: false }).order('created_at', { ascending: false }).limit(1).maybeSingle()
    if (event) {
      const [eligibility, sportsCertificates] = await Promise.all([
        supabase.rpc('get_my_sports_eligibility', { p_event: event.id }).then(r => (r.error ? null : r.data)).catch(() => null),
        supabase.rpc('get_my_sports_certificates', { p_event: event.id }).then(r => (r.error ? [] : r.data ?? [])).catch(() => []),
      ])
      const normalizedSportsCertificates = Array.isArray(sportsCertificates) ? sportsCertificates : []
      normalizedSportsCertificates.forEach(cert => {
        const isOutstanding = cert.certificate_kind === 'outstanding'
        cards.push({
          key: `sports-${cert.certificate_kind || 'medal'}-${cert.id}`, emoji: isOutstanding ? '🏆' : '🏅',
          title: cert.title || `เกียรติบัตร${cert.medal_label ? ` · ${cert.medal_label}` : ''}`,
          sub: isOutstanding
            ? `นักกีฬาดีเด่น · ${cert.sport_name || 'กีฬาสี'}`
            : `${cert.sport_name || 'รายการแข่งขัน'} · สี${cert.color || ''}`,
          onOpen: () => openCertificatePrint({
            layout: cert.layout,
            variables: {
              name: student.full_name,
              date: new Date(cert.awarded_at || Date.now()).toLocaleDateString('th-TH', { dateStyle: 'long' }),
              no: cert.certificate_no,
              ...(cert.variables || {}),
            },
            docTitle: cert.title,
          }, showToast),
        })
      })
      if (eligibility?.eligible && eligibility?.certificate_url) {
        cards.push({
          key: 'sports-color', emoji: '🎖️', title: 'เกียรติบัตรกีฬาสี',
          sub: `ทีมสี${student.house_color ?? ''}`,
          onOpen: () => window.open(eligibility.certificate_url, '_blank'),
        })
      }
    }
  } catch (_) { /* ไม่มีสิทธิ์เข้าถึง RPC หรือยังไม่มีข้อมูลงานกีฬาสี — ข้ามไปเงียบๆ */ }

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
          ${c.onOpen ? '<p class="text-[10px] text-indigo-600 mt-2 font-bold">กดเพื่อเปิด / บันทึก PDF</p>' : ''}
        </div>`).join('')}
    </div>
  ` : `<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีเกียรติบัตร</p>`

  cards.forEach(c => {
    if (!c.onOpen) return
    body.querySelector(`[data-key="${CSS.escape(c.key)}"]`)?.addEventListener('click', c.onOpen)
  })
}
