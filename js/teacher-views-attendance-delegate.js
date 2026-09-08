// js/teacher-views-attendance-delegate.js — มอบหมายหัวหน้า/รองหัวหน้าห้อง (จาก classroom_leaders
// ของ main_room ห้องนั้น) เช็คชื่อแทนครูได้ระหว่างคาบสอนจริง — โดเนทระดับ 3+ ใช้ได้ไม่จำกัดห้อง,
// ยังไม่ถึงระดับใช้ได้ฟรี 1 ห้อง — mirror pattern "ฟรี 1 ห้อง" เดียวกับ Smart Classroom ทุกประการ
// (resolveSmartClassroomAccess/canUseSmartClassroomForClass/_openFreeClassPickModal ใน
// teacher-views-smart-classroom.js) แยกไฟล์ใหม่เพราะ teacher-views-classes.js ใหญ่มากแล้ว
import { getMyDonationRequests, getSystemConfig, setAttendanceDelegateFreeClass, updateClass, getMyClasses } from './api.js'
import { _toPositiveInt, _parseDonationStickers, _getDonorTierIndex } from './teacher.js'
import { showToast } from './ui.js'
import { _htmlEsc } from './teacher-views-utils.js'

// รูปแบบ system_config.donationSpecialFeatures: "icon|ข้อความ|minTier" ต่อบรรทัด (ตรงกับ
// _parseDonationFeatures ใน teacher.js) — ถ้าแอดมินยังไม่ได้ตั้งค่าบรรทัดที่มีคำนี้ default ระดับ 3
function _attendanceDelegateMinTier(cfg) {
  return String(cfg?.donationSpecialFeatures ?? '').split('\n')
    .map(line => { const p = line.split('|'); return { text: p[1] ?? '', minTier: parseInt(p[2]) || 1 } })
    .find(f => f.text.includes('เช็คชื่อแทนครู'))?.minTier ?? 3
}

// ตรวจสิทธิ์โดยดึงระดับโดเนทสดจาก DB ทุกครั้ง — ตั้งใจไม่พึ่ง window._pp5DonorTierIndex เฉยๆ
// (เคยเจอปัญหาค่า global ยังไม่อัปเดตทันตอนเรียกจากบางจุด) mirror resolveSmartClassroomAccess
export async function resolveAttendanceDelegateAccess(teacher) {
  const cfg = await getSystemConfig().catch(() => window._pp5SystemCfg ?? {})
  const minTier = _attendanceDelegateMinTier(cfg)
  let tierIndex = window._pp5DonorTierIndex ?? 0
  if (teacher?.id) {
    try {
      const donationRequests = await getMyDonationRequests(teacher.id)
      const totalApproved = donationRequests
        .filter(r => r.package_type === 'donation' && r.status === 'approved')
        .reduce((sum, r) => sum + (r.amount ?? 0), 0)
      const minAmt = _toPositiveInt(cfg.donationMinAmount, 49)
      const step   = _toPositiveInt(cfg.donationAmountStep, 50)
      const tiers  = _parseDonationStickers(cfg, minAmt, step)
      tierIndex = _getDonorTierIndex(cfg, tiers, totalApproved)
    } catch { /* query สดล้มเหลว — ใช้ค่า global เดิมเป็น fallback สุดท้าย */ }
  }
  return { cfg, minTier, unlocked: tierIndex >= minTier }
}

export function canUseAttendanceDelegateForClass(unlocked, teacher, classId) {
  if (unlocked) return true
  return teacher?.attendance_delegate_free_class_id === classId
}

// ป๊อบอัพเลือกห้องที่จะใช้ฟรี — เลือกแล้วล็อกถาวร (setAttendanceDelegateFreeClass เช็ค null ก่อนเขียนกันแข่งกันเลือก)
async function _openAttendanceDelegateFreeClassPickModal(teacher, { preselectClassId = null, onPicked } = {}) {
  document.getElementById('ad-pick-modal')?.remove()
  const classes = await getMyClasses(teacher.id).catch(() => [])
  const m = document.createElement('div')
  m.id = 'ad-pick-modal'
  m.className = 'fixed inset-0 z-[96] flex items-center justify-center bg-black/60 p-4'
  m.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
      <div class="px-6 pt-6 pb-4 flex-shrink-0 text-center" style="background:linear-gradient(135deg,#0d6b4f,#34a37c)">
        <div class="text-4xl mb-1">🙋</div>
        <h3 class="text-white font-extrabold text-base">มอบหมายเช็คชื่อแทนครูฟรี 1 ห้องเรียน</h3>
        <p class="text-white/80 text-[11px] mt-1 leading-relaxed">เลือกแล้วจะล็อกใช้ได้เฉพาะห้องนี้ตลอด<br>หากต้องการเปลี่ยนห้องภายหลังต้องติดต่อแอดมิน</p>
      </div>
      <div class="overflow-y-auto flex-1 p-4 space-y-2">
        ${!classes.length ? `<p class="text-center text-gray-400 text-sm py-8">ยังไม่มีห้องเรียน</p>` : classes.map(c => `
          <label class="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition hover:border-emerald-300 ${c.id === preselectClassId ? 'border-emerald-400 bg-emerald-50' : 'border-gray-200'}">
            <input type="radio" name="ad-pick-class" value="${c.id}" class="w-4 h-4" ${c.id === preselectClassId ? 'checked' : ''} />
            <span class="text-sm font-semibold text-gray-700">${_htmlEsc(c.class_name)}</span>
          </label>`).join('')}
      </div>
      <div class="p-4 flex-shrink-0 border-t border-gray-100">
        <button id="ad-pick-confirm" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#0d6b4f,#34a37c)" ${!classes.length ? 'disabled' : ''}>✅ ยืนยันใช้ห้องนี้</button>
        <button id="ad-pick-cancel" class="w-full py-2 mt-1.5 text-xs text-gray-400 hover:text-gray-600">ยกเลิก</button>
      </div>
    </div>`
  document.body.appendChild(m)
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
  m.querySelector('#ad-pick-cancel').addEventListener('click', () => m.remove())
  m.querySelector('#ad-pick-confirm').addEventListener('click', async () => {
    const picked = m.querySelector('input[name="ad-pick-class"]:checked')
    if (!picked) { showToast('กรุณาเลือกห้องเรียน', 'warning'); return }
    const classId = parseInt(picked.value)
    const btn = m.querySelector('#ad-pick-confirm')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const result = await setAttendanceDelegateFreeClass(teacher.id, classId)
      if (!result) { showToast('มีการเลือกห้องไปแล้วก่อนหน้านี้ กรุณาลองใหม่', 'error'); m.remove(); return }
      teacher.attendance_delegate_free_class_id = classId
      try {
        await updateClass(classId, { attendance_delegate_enabled: true })
      } catch (e) {
        showToast('เลือกห้องฟรีสำเร็จ แต่เปิดสิทธิ์เช็คชื่อแทนไม่สำเร็จ: ' + (e.message ?? ''), 'error')
      }
      m.remove()
      showToast('เลือกห้องฟรีสำเร็จ ✅', 'success')
      onPicked?.(classId)
    } catch (e) {
      showToast('บันทึกไม่สำเร็จ: ' + (e.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = '✅ ยืนยันใช้ห้องนี้'
    }
  })
}

// จุดเดียวที่ UI ฝั่งครูเรียกใช้ — เปิด/ปิดสิทธิ์เช็คชื่อแทนของห้องหนึ่งๆ พร้อม gate ตามระดับโดเนทให้ครบ
// onDone(nextEnabled) เรียกเมื่อสำเร็จ ให้ผู้เรียกอัปเดต UI เอง
export async function toggleAttendanceDelegateForClass(teacher, classId, nextValue, onDone) {
  if (!nextValue) {
    try {
      await updateClass(classId, { attendance_delegate_enabled: false })
      onDone?.(false)
    } catch (e) {
      showToast('ปิดสิทธิ์ไม่สำเร็จ: ' + (e.message ?? ''), 'error')
    }
    return
  }
  const { unlocked, minTier } = await resolveAttendanceDelegateAccess(teacher)
  if (canUseAttendanceDelegateForClass(unlocked, teacher, classId)) {
    try {
      await updateClass(classId, { attendance_delegate_enabled: true })
      onDone?.(true)
    } catch (e) {
      showToast('เปิดสิทธิ์ไม่สำเร็จ: ' + (e.message ?? ''), 'error')
    }
    return
  }
  if (!teacher?.attendance_delegate_free_class_id) {
    await _openAttendanceDelegateFreeClassPickModal(teacher, { preselectClassId: classId, onPicked: () => onDone?.(true) })
    return
  }
  showToast(`ใช้สิทธิ์ฟรีไปแล้วกับอีกห้องหนึ่ง — สนับสนุนระดับ ${minTier} ขึ้นไปเพื่อมอบหมายเช็คชื่อแทนได้ไม่จำกัดห้อง`, 'warning')
}
