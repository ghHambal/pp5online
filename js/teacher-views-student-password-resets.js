import {
  getAdvisorStudentPasswordResetRequests,
  reviewStudentPasswordResetRequest,
} from './student-password-reset-api.js'

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]))

const roomOf = student => student?.main_room || student?.religion_room || '—'
const toast = (message, isError = false) => {
  const element = document.createElement('div')
  element.className = `fixed left-1/2 top-4 z-[10000] -translate-x-1/2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg ${isError ? 'bg-red-600' : 'bg-emerald-600'}`
  element.textContent = message
  document.body.appendChild(element)
  setTimeout(() => element.remove(), 3200)
}

export async function renderAdvisorStudentPasswordResets(container) {
  let activeFilter = 'pending'

  const render = async () => {
    container.innerHTML = '<div class="py-12 text-center text-gray-400">กำลังโหลดคำขอรีเซ็ตรหัสผ่าน...</div>'
    try {
      const requests = await getAdvisorStudentPasswordResetRequests()
      const shown = requests.filter(request => activeFilter === 'all' || request.status === activeFilter)
      container.innerHTML = `
        <div class="space-y-3">
          <p class="rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">
            🔒 ก่อนยืนยัน ต้องพบนักเรียนเจ้าของบัญชีและตรวจสอบความยินยอมด้วยตนเอง แม้เพื่อนจะเป็นผู้ส่งคำขอแทน
          </p>
          <div class="grid grid-cols-2 gap-1 rounded-xl bg-gray-100 p-1 sm:grid-cols-4">
            ${[['pending','รอตรวจ'],['approved','ยืนยันแล้ว'],['rejected','ไม่อนุมัติ'],['all','ทั้งหมด']].map(([key,label]) =>
              `<button type="button" data-reset-filter="${key}" class="rounded-lg px-2 py-2 text-xs font-semibold ${activeFilter === key ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-500'}">${label} (${requests.filter(r => key === 'all' || r.status === key).length})</button>`
            ).join('')}
          </div>
          <div class="space-y-3">
            ${shown.length ? shown.map(request => {
              const target = request.target ?? {}
              const requester = request.requester
              const photo = target.image_url || target.photo_url
              const requesterPhoto = requester?.image_url || requester?.photo_url
              const status = request.status === 'pending' ? ['รอตรวจ', 'bg-amber-50 text-amber-700 border-amber-200']
                : request.status === 'approved' ? ['ยืนยันแล้ว', 'bg-emerald-50 text-emerald-700 border-emerald-200']
                  : ['ไม่อนุมัติ', 'bg-red-50 text-red-700 border-red-200']
              return `<article class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm" data-password-reset-request="${request.id}">
                <header class="flex items-start justify-between gap-3">
                  <div class="flex min-w-0 items-center gap-3">
                    ${photo ? `<img src="${esc(photo)}" alt="รูป ${esc(target.full_name)}" class="h-14 w-12 flex-shrink-0 rounded-xl border border-gray-200 object-cover" loading="lazy">` : `<div class="grid h-14 w-12 flex-shrink-0 place-items-center rounded-xl border border-gray-200 bg-indigo-50 font-bold text-indigo-500">${esc((target.full_name || '?').charAt(0))}</div>`}
                    <div class="min-w-0"><h3 class="truncate font-bold text-gray-800">${esc(target.full_name || 'ไม่พบชื่อนักเรียน')}</h3><p class="mt-0.5 text-xs text-gray-500">รหัส ${esc(target.student_code)} · ${esc(roomOf(target))}</p></div>
                  </div>
                  <span class="shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${status[1]}">${status[0]}</span>
                </header>
                <div class="mt-3 rounded-xl bg-gray-50 p-3 text-sm text-gray-600">
                  <p class="font-semibold text-gray-800">${request.request_kind === 'friend' ? '👥 แจ้งขอแทนเพื่อน' : '🙋 ขอรีเซ็ตรหัสของตนเอง'}</p>
                  ${request.request_kind === 'friend' ? `<div class="mt-2 flex items-center gap-2"><span class="grid h-9 w-8 flex-shrink-0 place-items-center overflow-hidden rounded-lg border border-gray-200 bg-white">${requesterPhoto ? `<img src="${esc(requesterPhoto)}" alt="" class="h-full w-full object-cover">` : esc((requester?.full_name || '?').charAt(0))}</span><p class="min-w-0">ผู้แจ้ง: ${esc(requester?.full_name || 'ไม่พบข้อมูลผู้แจ้ง')} · ${esc(requester?.student_code || '—')} · ${esc(roomOf(requester))}</p></div>` : ''}
                  <p class="mt-1 text-xs text-gray-400">ส่งคำขอ ${new Date(request.created_at).toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' })}</p>
                </div>
                ${request.status === 'pending' ? `<div class="mt-3 flex flex-wrap justify-end gap-2"><button type="button" data-reset-reject="${request.id}" class="rounded-xl border border-red-200 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50">ไม่อนุมัติ</button><button type="button" data-reset-approve="${request.id}" class="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">ยืนยันตัวตนและรีเซ็ตรหัส</button></div>` : ''}
              </article>`
            }).join('') : '<div class="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-sm text-gray-400">ไม่มีคำขอในรายการนี้</div>'}
          </div>
        </div>`

      container.querySelectorAll('[data-reset-filter]').forEach(button => button.addEventListener('click', () => {
        activeFilter = button.dataset.resetFilter
        render()
      }))
      container.querySelectorAll('[data-reset-approve]').forEach(button => button.addEventListener('click', () => {
        openConfirm(button.dataset.resetApprove)
      }))
      container.querySelectorAll('[data-reset-reject]').forEach(button => button.addEventListener('click', () => {
        submitReview(button.dataset.resetReject, false)
      }))
    } catch (error) {
      container.innerHTML = `<div class="rounded-2xl border border-red-100 bg-white p-5 text-sm text-red-600">โหลดคำขอไม่สำเร็จ: ${esc(error.message || 'เกิดข้อผิดพลาด')}</div>`
    }
  }

  const submitReview = async (requestId, approve) => {
    try {
      const result = await reviewStudentPasswordResetRequest(requestId, approve)
      await render()
      if (approve) {
        const modal = document.createElement('div')
        modal.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4'
        modal.innerHTML = `<div class="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">
          <div class="text-4xl">✅</div><h3 class="mt-2 text-lg font-bold text-gray-800">รีเซ็ตรหัสผ่านสำเร็จ</h3>
          <p class="mt-2 text-sm text-gray-600">${esc(result.student_name)} · ${esc(result.student_code)}</p>
          <p class="mt-4 text-xs text-gray-500">แจ้งรหัสชั่วคราวนี้กับเจ้าของบัญชีเป็นการส่วนตัว</p>
          <div class="mt-2 rounded-xl bg-emerald-50 px-4 py-3 font-mono text-2xl font-bold tracking-widest text-emerald-800">${esc(result.temporary_password)}</div>
          <p class="mt-2 text-xs text-gray-500">ให้นักเรียนเปลี่ยนรหัสผ่านหลังเข้าสู่ระบบ</p>
          <button type="button" class="mt-5 w-full rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white">รับทราบ</button>
        </div>`
        document.body.appendChild(modal)
        modal.querySelector('button').addEventListener('click', () => modal.remove())
      } else {
        toast('บันทึกผลการตรวจคำขอแล้ว')
      }
    } catch (error) {
      toast(`ดำเนินการไม่สำเร็จ: ${error.message || 'เกิดข้อผิดพลาด'}`, true)
    }
  }

  const openConfirm = requestId => {
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 p-4'
    modal.innerHTML = `<div class="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
      <h3 class="text-lg font-bold text-gray-800">ยืนยันตัวตนนักเรียน</h3>
      <p class="mt-2 text-sm leading-relaxed text-gray-600">โปรดยืนยันว่าได้พบนักเรียนเจ้าของบัญชี ตรวจสอบตัวตน และได้รับความยินยอมให้รีเซ็ตรหัสผ่านแล้ว</p>
      <label class="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900"><input type="checkbox" class="mt-0.5" data-reset-consent><span>ยืนยันว่าตรวจสอบนักเรียนต่อหน้าแล้ว</span></label>
      <div class="mt-5 flex gap-2"><button type="button" data-reset-cancel class="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-600">กลับ</button><button type="button" data-reset-confirm disabled class="flex-1 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white opacity-50">ยืนยันและรีเซ็ต</button></div>
    </div>`
    document.body.appendChild(modal)
    const confirm = modal.querySelector('[data-reset-confirm]')
    modal.querySelector('[data-reset-consent]').addEventListener('change', event => {
      confirm.disabled = !event.currentTarget.checked
      confirm.classList.toggle('opacity-50', confirm.disabled)
    })
    modal.querySelector('[data-reset-cancel]').addEventListener('click', () => modal.remove())
    confirm.addEventListener('click', () => {
      if (confirm.disabled) return
      confirm.disabled = true
      confirm.textContent = 'กำลังรีเซ็ต...'
      submitReview(requestId, true).finally(() => modal.remove())
    })
  }

  await render()
}
