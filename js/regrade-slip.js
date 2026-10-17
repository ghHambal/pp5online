import { getRegradeConfig } from './regrade-api.js'
import { getCertificateTemplate } from './certificates-api.js'
import { openCertificatePrint } from './certificate-engine.js'
import { showToast } from './ui.js'

const TH_MONTHS = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
function duePickerValue(value) {
  const raw = String(value || '').trim()
  if (!raw) return { date: '', time: '' }
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/)
  if (iso) return { date: `${iso[1]}-${iso[2]}-${iso[3]}`, time: iso[4] ? `${iso[4]}:${iso[5]}` : '' }
  const thai = raw.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})(?:\s+(\d{1,2}):(\d{2}))?/)
  if (!thai) return { date: '', time: '' }
  let year = Number(thai[3])
  if (year < 100) year += 2500
  if (year > 2400) year -= 543
  const month = String(Number(thai[2])).padStart(2, '0')
  const day = String(Number(thai[1])).padStart(2, '0')
  return { date: `${year}-${month}-${day}`, time: thai[4] ? `${String(Number(thai[4])).padStart(2, '0')}:${thai[5]}` : '' }
}

function formatRegradeDue(value) {
  const picked = duePickerValue(value)
  if (!picked.date) return String(value || '-')
  const [year, month, day] = picked.date.split('-').map(Number)
  const dateText = `${day} ${TH_MONTHS[month - 1]} ${year + 543}`
  return picked.time ? `${dateText} เวลา ${picked.time} น.` : dateText
}


export async function openRegradeSlip(row, teacherNameOverride, config) {
  const cfg = config || await getRegradeConfig()
  const category = row.category === 'ศาสนา' ? 'ศาสนา' : 'สามัญ'
  const templateId = Number(cfg?.regrade_slip_template_ids?.[category])
  if (!templateId) { showToast(`ยังไม่ได้ตั้งค่าเทมเพลตใบสั้นสำหรับหมวด "${category}" — ไปตั้งค่าที่แท็บ "เอกสาร" ก่อนครับ`, 'warning'); return }
  const template = await getCertificateTemplate(templateId).catch(() => null)
  if (!template) { showToast('ไม่พบเทมเพลตที่ตั้งค่าไว้ อาจถูกลบไปแล้ว', 'error'); return }
  const room = row.students?.main_room || row.students?.religion_room || ''
  openCertificatePrint({
    layout: template.layout,
    variables: {
      student_name: row.students?.full_name ?? '', student_code: row.students?.student_code ?? '', room,
      class_level: row.class_level ?? '', category: row.category ?? '',
      subject_name: row.subject_name ?? '', subject_code: row.subject_code ?? '', semester: row.semester ?? '',
      grade_failed_at: row.grade_failed_at ?? '',
      teacher_name: teacherNameOverride ?? row.teachers?.full_name ?? row.teacher_name_raw ?? '',
      response_method: row.method ?? '', due_date: formatRegradeDue(row.due_text), file_url: row.file_url ?? '',
    },
    docTitle: `ใบแก้ค้างเก่า ${row.students?.full_name ?? ''}`,
  }, showToast)
}

