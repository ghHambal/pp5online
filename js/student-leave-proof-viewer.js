import { getStudentLeaveProofUrl } from './student-leave-api.js'

export async function openStudentLeaveProofPreview(path) {
  if (!path) throw new Error('ไม่พบไฟล์หลักฐานใบลา')

  const overlay = document.createElement('div')
  overlay.className = 'fixed inset-0 z-[220] flex items-center justify-center bg-slate-950/75 p-2 sm:p-5'
  overlay.setAttribute('role', 'presentation')
  overlay.innerHTML = `<section role="dialog" aria-modal="true" aria-labelledby="student-leave-proof-title" class="flex h-[96dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:h-[92dvh] sm:rounded-3xl">
    <header class="flex shrink-0 items-center justify-between gap-3 border-b px-4 py-3 sm:px-6 sm:py-4">
      <h2 id="student-leave-proof-title" class="text-base font-bold text-slate-800 sm:text-lg">หลักฐานใบลา</h2>
      <div class="flex items-center gap-2">
        <a data-proof-open-link class="hidden rounded-xl border border-indigo-200 px-3 py-2 text-xs font-semibold text-indigo-700" target="_blank" rel="noopener noreferrer">เปิดไฟล์แยก</a>
        <button type="button" data-proof-close aria-label="ปิดหลักฐานใบลา" class="grid h-10 w-10 shrink-0 place-items-center rounded-xl border text-xl text-slate-500 hover:bg-slate-50">×</button>
      </div>
    </header>
    <div data-proof-content class="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-slate-100 p-2 sm:p-4">
      <p class="text-sm text-slate-500">กำลังเปิดหลักฐานใบลา…</p>
    </div>
  </section>`

  const closeButton = overlay.querySelector('[data-proof-close]')
  const close = () => {
    overlay.remove()
    document.removeEventListener('keydown', onKeydown)
  }
  const onKeydown = event => { if (event.key === 'Escape') close() }
  closeButton.addEventListener('click', close)
  overlay.addEventListener('click', event => { if (event.target === overlay) close() })
  document.addEventListener('keydown', onKeydown)
  document.body.appendChild(overlay)
  closeButton.focus()

  try {
    const url = await getStudentLeaveProofUrl(path)
    if (!url) throw new Error('ไม่พบลิงก์ไฟล์หลักฐานใบลา')
    if (!overlay.isConnected) return

    const openLink = overlay.querySelector('[data-proof-open-link]')
    openLink.href = url
    openLink.classList.remove('hidden')

    const content = overlay.querySelector('[data-proof-content]')
    content.replaceChildren()
    if (/\.pdf(?:$|[?#])/i.test(path)) {
      const frame = document.createElement('iframe')
      frame.src = url
      frame.title = 'ตัวอย่างเอกสารหลักฐานใบลา'
      frame.className = 'h-full min-h-[65vh] w-full rounded-xl bg-white sm:min-h-0'
      content.append(frame)
    } else {
      const image = document.createElement('img')
      image.src = url
      image.alt = 'ภาพหลักฐานใบลา'
      image.className = 'max-h-full max-w-full rounded-lg object-contain'
      image.addEventListener('error', () => {
        content.innerHTML = '<p class="text-center text-sm text-red-600">แสดงตัวอย่างไฟล์นี้ไม่ได้ กรุณากด “เปิดไฟล์แยก”</p>'
      }, { once: true })
      content.append(image)
    }
  } catch (error) {
    close()
    throw error
  }
}
