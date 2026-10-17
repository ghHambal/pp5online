import { supabase } from './supabase.js'
import { showToast } from './ui.js'
import { safeRegradeUrl, regradeRecordId, regradeChanges } from './regrade-notification-model.js'

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
const buttonStyle = 'display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:12px 16px;border-radius:12px;border:1px solid #cbd5e1;font:inherit;font-weight:700;text-decoration:none;cursor:pointer;background:#fff;color:#0f172a;'
const trackers = new Map()

export function regradeDetailUrl(id, action) {
  const url = new URL('regrade.html', window.location.href)
  url.searchParams.set('subject', String(regradeRecordId(id)))
  if (action) url.searchParams.set('action', action)
  return url.href
}

function personHtml(person, label) {
  const photo = safeRegradeUrl(person?.photo_url || person?.image_url)
  const name = person?.full_name || 'ยังไม่ระบุ'
  return `<div style="display:flex;align-items:center;gap:14px;padding:14px;background:#f8fafc;border-radius:14px;min-width:0"><div style="width:64px;height:78px;border-radius:12px;background:#e2e8f0;flex-shrink:0;overflow:hidden;display:grid;place-items:center;color:#475569;font-size:24px">${photo ? `<img src="${esc(photo)}" alt="${esc(name)}" style="width:100%;height:100%;object-fit:cover" data-person-photo>` : esc(name.slice(0,1))}</div><div style="min-width:0"><div style="font-size:12px;color:#64748b">${label}</div><div style="font-weight:700;overflow-wrap:anywhere">${esc(name)}</div><div style="font-size:12px;color:#64748b">${esc(person?.student_code || '')}${person?.main_room || person?.religion_room ? ` · ${esc(person.main_room || person.religion_room)}` : ''}</div></div></div>`
}

export async function openRegradeNotification(ids, { onRespond } = {}) {
  const recordIds = [...new Set((Array.isArray(ids) ? ids : [ids]).map(regradeRecordId).filter(Boolean))]
  if (!recordIds.length) return
  const existing = document.getElementById('regrade-detail-dialog')
  existing?.close()
  existing?.remove()
  const previousFocus = document.activeElement
  const dialog = document.createElement('dialog')
  dialog.id = 'regrade-detail-dialog'
  dialog.setAttribute('aria-label', 'รายละเอียดแก้ค้างเก่า')
  dialog.style.cssText = 'border:0;border-radius:22px;padding:0;width:calc(100% - 24px);max-width:560px;max-height:90dvh;color:#0f172a;background:white;box-shadow:0 24px 80px #0005;'
  dialog.innerHTML = '<div style="padding:28px">กำลังโหลดรายละเอียด…</div>'
  document.body.append(dialog)
  dialog.showModal()
  dialog.addEventListener('close', () => { dialog.remove(); previousFocus?.focus?.() }, { once: true })
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close() } })
  let generation = 0
  const render = async index => {
    const request = ++generation
    try {
      const { data: row, error } = await supabase.from('regrade_subjects')
        .select('*, students(full_name, student_code, main_room, religion_room, photo_url, image_url, profile_id), teachers(full_name, image_url, profile_id)')
        .eq('id', recordIds[index]).maybeSingle()
      if (error) throw error
      if (!dialog.open || request !== generation) return
      if (!row) throw new Error('ไม่พบรายการ หรือบัญชีนี้ไม่มีสิทธิ์เปิดดู')
      const { data: { session } } = await supabase.auth.getSession()
      const isStudent = row.students?.profile_id === session?.user?.id
      const isTeacher = row.teachers?.profile_id === session?.user?.id
      const work = safeRegradeUrl(row.file_url)
      const slip = safeRegradeUrl(row.slip_url)
      const hasSlip = !!slip || !!row.method && ['กำลังดำเนินการปรับแก้', 'ปรับแก้สำเร็จ'].includes(row.status)
      const [term, year] = String(row.semester || '').split('/')
      const fields = [['รายวิชา', `${row.subject_name} (${row.subject_code})`], ['ภาคเรียน / ปีการศึกษา', `${term || '-'} / ${year || '-'}`], ['สถานะ', row.status], ['วิธีแก้', row.method], ['กำหนดส่ง / วันนัด', row.due_text]]
      dialog.innerHTML = `<header style="padding:20px 22px;background:#0f766e;color:#fff;display:flex;align-items:center;gap:12px"><div style="flex:1"><div style="font-size:12px;opacity:.85">ระบบแก้ค้างเก่า</div><h2 style="font-size:20px;font-weight:800;margin:3px 0">${isStudent ? 'รายละเอียดงานแก้ของฉัน' : 'รายละเอียดคำร้องนักเรียน'}</h2></div><button data-close aria-label="ปิดรายละเอียด" style="${buttonStyle}padding:8px 12px">✕</button></header><div style="padding:22px;overflow-wrap:anywhere"><div style="display:grid;gap:10px">${isStudent ? personHtml(row.teachers || {full_name:row.teacher_name_raw}, 'ครูผู้สอน') : personHtml(row.students, 'นักเรียนผู้ขอแก้')}${isStudent ? '' : `<p style="margin:0;color:#64748b;font-size:12px">ครูผู้สอน: ${esc(row.teachers?.full_name || row.teacher_name_raw || '-')}</p>`}</div><dl style="margin:18px 0">${fields.filter(([,value]) => value).map(([label,value]) => `<div style="padding:10px 0;border-bottom:1px solid #e2e8f0"><dt style="font-size:12px;color:#64748b">${label}</dt><dd style="margin:4px 0 0;font-weight:600;white-space:pre-wrap">${esc(value)}</dd></div>`).join('')}</dl><div style="display:flex;flex-wrap:wrap;gap:10px">${work ? `<a href="${esc(work)}" target="_blank" rel="noopener noreferrer" style="${buttonStyle}background:#0f766e;color:white;border-color:#0f766e">📎 เปิดไฟล์ / ดูงานแก้</a>` : '<p style="font-size:13px;color:#64748b;width:100%;margin:0">ยังไม่มีไฟล์งานแนบ</p>'}${hasSlip ? (slip ? `<a href="${esc(slip)}" target="_blank" rel="noopener noreferrer" style="${buttonStyle}">📄 เปิดใบสั้น</a>` : `<button data-slip style="${buttonStyle}">📄 ดู / พิมพ์ใบสั้น</button>`) : '<p style="font-size:13px;color:#64748b;width:100%;margin:0">ใบสั้นจะเปิดได้เมื่อครูตอบรับและกำหนดวิธีแก้แล้ว</p>'}${isTeacher && row.status === 'จำนงแล้ว' ? `<button data-respond style="${buttonStyle}background:#0f766e;color:white;border-color:#0f766e">ตอบรับ / มอบหมายงาน</button>` : ''}<a href="${esc(regradeDetailUrl(row.id, 'view'))}" style="${buttonStyle}">ไปยังรายการในระบบแก้ค้างเก่า →</a></div>${recordIds.length > 1 ? `<nav aria-label="รายการแจ้งเตือน" style="display:flex;align-items:center;justify-content:space-between;margin-top:20px"><button data-prev ${index === 0 ? 'disabled' : ''} style="${buttonStyle}">← ก่อนหน้า</button><span>${index+1} / ${recordIds.length}</span><button data-next ${index === recordIds.length-1 ? 'disabled' : ''} style="${buttonStyle}">ถัดไป →</button></nav>` : ''}</div>`
      dialog.querySelector('[data-close]').onclick = () => dialog.close()
      dialog.querySelectorAll('[data-person-photo]').forEach(img => img.addEventListener('error', () => { img.replaceWith(document.createTextNode('👤')) }, { once: true }))
      dialog.querySelector('[data-slip]')?.addEventListener('click', async event => {
        const button = event.currentTarget
        button.disabled = true
        dialog.close()
        try { const { openRegradeSlip } = await import('./regrade-slip.js'); await openRegradeSlip(row) } catch { showToast('เปิดใบสั้นไม่สำเร็จ กรุณาลองใหม่', 'error') }
        finally { button.disabled = false }
      })
      dialog.querySelector('[data-respond]')?.addEventListener('click', () => {
        dialog.close()
        if (onRespond) onRespond(row)
        else window.location.href = regradeDetailUrl(row.id, 'respond')
      })
      dialog.querySelector('[data-prev]')?.addEventListener('click', () => render(index-1))
      dialog.querySelector('[data-next]')?.addEventListener('click', () => render(index+1))
    } catch {
      if (!dialog.open || request !== generation) return
      dialog.innerHTML = `<div style="padding:24px"><p>ไม่พบรายการ หรือไม่สามารถโหลดรายละเอียดได้ กรุณาตรวจสอบบัญชีและลองใหม่</p><button data-retry style="${buttonStyle}">ลองใหม่</button> <button data-close style="${buttonStyle}">ปิด</button></div>`
      dialog.querySelector('[data-close]').onclick = () => dialog.close()
      dialog.querySelector('[data-retry]').onclick = () => render(index)
    }
  }
  await render(0)
}

export function showRegradeNotice(rows, role) {
  if (!rows.length) return
  const notice = document.createElement('button')
  notice.type = 'button'
  notice.style.cssText = 'position:fixed;right:16px;top:20px;z-index:99999;max-width:calc(100% - 32px);width:370px;text-align:left;background:#0f766e;color:white;border:0;border-radius:16px;padding:16px 20px;box-shadow:0 8px 32px #0003;cursor:pointer;font:inherit;'
  notice.textContent = `${role === 'teacher' ? '🔔 นักเรียนแจ้งจำนงขอแก้' : '🔔 ครูอัปเดตงานแก้ค้างเก่า'} ${rows.length} รายการ · แตะดูรายละเอียด`
  notice.onclick = () => { notice.remove(); openRegradeNotification(rows.map(row => row.id)) }
  document.querySelector('[data-regrade-notice]')?.remove()
  notice.dataset.regradeNotice = ''
  document.body.append(notice)
  setTimeout(() => notice.remove(), 15000)
}

export async function pollRegradeEvents(role, ownerId) {
  const key = `${role}:${ownerId}`
  const state = trackers.get(key) || { rows: null, busy: false, count: 0 }
  trackers.set(key, state)
  if (state.busy) return state.count
  state.busy = true
  try {
    const data = []
    for (let offset = 0; ; offset += 500) {
      let query = supabase.from('regrade_subjects')
        .select('id,status,declared_at,assigned_at,method,due_text,file_url')
        .eq(role === 'teacher' ? 'teacher_id' : 'student_id', ownerId)
      if (role === 'teacher') query = query.eq('status', 'จำนงแล้ว')
      const { data: batch, error } = await query.order('id').range(offset, offset + 499)
      if (error) throw error
      data.push(...(batch || []))
      if (!batch || batch.length < 500) break
    }
    showRegradeNotice(regradeChanges(state.rows, data || [], role), role)
    state.rows = new Map((data || []).map(row => [row.id,row]))
    state.count = (data || []).filter(row => row.status === (role === 'teacher' ? 'จำนงแล้ว' : 'กำลังดำเนินการปรับแก้')).length
    return state.count
  } finally { state.busy = false }
}
