import { APP_VERSION } from './version.js'

const REGRADE_PATH = 'regrade.html'

const getRegradeUrl = () => {
  const url = new URL(REGRADE_PATH, window.location.href)
  url.searchParams.set('v', APP_VERSION)
  return url.href
}

const flashStatus = (el, text) => {
  if (!el) return
  el.textContent = text
  clearTimeout(el._regradeStatusTimer)
  el._regradeStatusTimer = setTimeout(() => { el.textContent = '' }, 1800)
}

const copyRegradeLink = async (url, statusEl) => {
  try {
    await navigator.clipboard.writeText(url)
    flashStatus(statusEl, 'คัดลอกลิงก์แล้ว')
  } catch {
    flashStatus(statusEl, 'คัดลอกไม่สำเร็จ')
  }
}

const shareRegradeLink = async (url, statusEl) => {
  try {
    if (navigator.share) {
      await navigator.share({ title: 'แก้ค้างเก่า', text: 'ระบบแก้ค้างเก่า — ปพ.5 ออนไลน์', url })
      return
    }
    await navigator.clipboard.writeText(url)
    flashStatus(statusEl, 'คัดลอกลิงก์แล้ว')
  } catch {
    flashStatus(statusEl, 'แชร์ไม่สำเร็จ')
  }
}

export function openRegradeModal() {
  document.getElementById('regrade-modal')?.remove()

  const url = getRegradeUrl()
  const previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'

  const modal = document.createElement('div')
  modal.id = 'regrade-modal'
  modal.className = 'fixed inset-0 z-[400] bg-slate-950 flex flex-col'
  modal.innerHTML = `
    <div class="h-12 flex items-center gap-2 px-3 sm:px-4 border-b border-slate-800 bg-slate-950 text-slate-100 shadow-lg">
      <div class="min-w-0 flex-1">
        <div class="text-sm font-extrabold truncate">📋 แก้ค้างเก่า</div>
        <div class="text-[10px] text-slate-400 truncate">เปิดในหน้าต่างเต็มจอของระบบ ปพ5</div>
      </div>
      <span data-regrade-status class="hidden sm:inline text-[10px] text-emerald-300 min-w-[72px] text-right"></span>
      <button type="button" data-regrade-copy
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
        title="คัดลอกลิงก์ระบบ">
        📋
      </button>
      <button type="button" data-regrade-share
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
        title="แชร์ระบบ">
        🔗
      </button>
      <button type="button" data-regrade-close
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-red-600/80 hover:border-red-500 transition"
        title="ปิด">
        ✕
      </button>
    </div>
    <iframe src="${url}" class="flex-1 w-full border-0 bg-white" title="แก้ค้างเก่า"></iframe>
  `

  const close = () => {
    document.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = previousOverflow
    modal.remove()
    if (window.closeRegradeModal === close) window.closeRegradeModal = null
  }
  const onKeydown = (event) => {
    if (event.key === 'Escape') close()
  }

  document.addEventListener('keydown', onKeydown)
  document.body.appendChild(modal)
  // เปิดให้ regrade.html (ที่รันอยู่ใน iframe นี้) เรียกปิด modal ได้เอง — ใช้ตอนกดปุ่ม "←" ย้อนกลับ
  // ในตัวเพจ แทนที่จะ navigate iframe ไปเป็น teacher.html แล้วเหลือแถบดำของ modal ค้างอยู่
  window.closeRegradeModal = close
  const statusEl = modal.querySelector('[data-regrade-status]')
  modal.querySelector('[data-regrade-close]')?.addEventListener('click', close)
  modal.querySelector('[data-regrade-copy]')?.addEventListener('click', () => copyRegradeLink(url, statusEl))
  modal.querySelector('[data-regrade-share]')?.addEventListener('click', () => shareRegradeLink(url, statusEl))
}
