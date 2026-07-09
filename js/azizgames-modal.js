const AZIZGAMES_PATH = 'azizgames.html'

const getAzizGamesUrl = () => new URL(AZIZGAMES_PATH, window.location.href).href

const shareAzizGames = async (url, statusEl) => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: 'AZIZGAMES กีฬาสีออนไลน์',
        text: 'ระบบจัดการกิจกรรมกีฬาสีออนไลน์ AZIZGAMES',
        url,
      })
      return
    }
    await navigator.clipboard.writeText(url)
    if (statusEl) {
      statusEl.textContent = 'คัดลอกลิงก์แล้ว'
      setTimeout(() => { statusEl.textContent = '' }, 1800)
    }
  } catch {
    if (statusEl) {
      statusEl.textContent = 'แชร์ลิงก์ไม่สำเร็จ'
      setTimeout(() => { statusEl.textContent = '' }, 1800)
    }
  }
}

export function openAzizGamesModal({ admin = false, manage = false } = {}) {
  document.getElementById('azizgames-modal')?.remove()

  if (admin) {
    localStorage.setItem('aziz_is_logged_in', 'true')
    localStorage.setItem('aziz_sports_admin_allowed', 'true')
  } else {
    localStorage.removeItem('aziz_is_logged_in')
    if (manage) localStorage.setItem('aziz_sports_admin_allowed', 'true')
    else localStorage.removeItem('aziz_sports_admin_allowed')
  }

  const url = getAzizGamesUrl()
  const previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'

  const modal = document.createElement('div')
  modal.id = 'azizgames-modal'
  modal.className = 'fixed inset-0 z-[320] bg-slate-950 flex flex-col'
  modal.innerHTML = `
    <div class="h-12 flex items-center gap-2 px-3 sm:px-4 border-b border-slate-800 bg-slate-950 text-slate-100 shadow-lg">
      <div class="min-w-0 flex-1">
        <div class="text-sm font-extrabold truncate">🏆 AZIZGAMES กีฬาสีออนไลน์</div>
        <div class="text-[10px] text-slate-400 truncate">เปิดในหน้าต่างเต็มจอของระบบ ปพ5</div>
      </div>
      <span data-azizgames-share-status class="hidden sm:inline text-[10px] text-emerald-300 min-w-[72px] text-right"></span>
      <button type="button" data-azizgames-share
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
        title="แชร์ลิงก์">
        🔗
      </button>
      <a href="${url}" target="_blank" rel="noopener"
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
        title="เปิดในบราวเซอร์/แท็บใหม่">
        ↗
      </a>
      <button type="button" data-azizgames-close
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-red-600/80 hover:border-red-500 transition"
        title="ปิด">
        ✕
      </button>
    </div>
    <iframe src="${url}" class="flex-1 w-full border-0 bg-white" title="AZIZGAMES กีฬาสีออนไลน์"></iframe>
  `

  const close = () => {
    document.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = previousOverflow
    modal.remove()
  }
  const onKeydown = (event) => {
    if (event.key === 'Escape') close()
  }

  document.addEventListener('keydown', onKeydown)
  document.body.appendChild(modal)
  modal.querySelector('[data-azizgames-close]')?.addEventListener('click', close)
  modal.querySelector('[data-azizgames-share]')?.addEventListener('click', () => {
    shareAzizGames(url, modal.querySelector('[data-azizgames-share-status]'))
  })
}
