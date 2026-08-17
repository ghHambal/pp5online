import { APP_VERSION } from './version.js?v=10.22.451'

const AZIZGAMES_PATH = 'azizgames.html'

// เดิม iframe src ไม่มี cache-busting เลย ทำให้ GitHub Pages (cache-control: max-age=600)
// เสิร์ฟ azizgames.html เวอร์ชันเก่าค้างได้นานถึง 10 นาทีหลัง deploy แม้ asset จริงจะอัปเดตแล้ว
const getAzizGamesUrl = (tab = '', stdid = '') => {
  const url = new URL(AZIZGAMES_PATH, window.location.href)
  url.searchParams.set('v', APP_VERSION)
  if (tab) url.searchParams.set('tab', tab)
  if (stdid) url.searchParams.set('stdid', stdid)
  return url.href
}

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

export function openAzizGamesModal({ admin = false, manage = false, teacherName = '', teacherCode = '', tab = '', stdid = '' } = {}) {
  document.getElementById('azizgames-modal')?.remove()

  if (admin) {
    localStorage.setItem('aziz_is_logged_in', 'true')
    localStorage.setItem('aziz_sports_admin_allowed', 'true')
    localStorage.setItem('aziz_current_user', JSON.stringify({
      username: teacherCode || 'admin',
      displayName: teacherName || 'ผู้ดูแลระบบ',
    }))
  } else {
    localStorage.removeItem('aziz_is_logged_in')
    if (manage) localStorage.setItem('aziz_sports_admin_allowed', 'true')
    else localStorage.removeItem('aziz_sports_admin_allowed')
  }

  const url = getAzizGamesUrl(tab, stdid)
  const previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'

  const modal = document.createElement('div')
  modal.id = 'azizgames-modal'
  modal.className = 'fixed inset-0 z-[400] bg-slate-950 flex flex-col'
  const canManageSports = admin || manage
  modal.innerHTML = `
    <div class="h-12 flex items-center gap-2 px-3 sm:px-4 border-b border-slate-800 bg-slate-950 text-slate-100 shadow-lg">
      <div class="min-w-0 flex-1">
        <div class="text-sm font-extrabold truncate">🏆 AZIZGAMES กีฬาสีออนไลน์</div>
        <div class="text-[10px] text-slate-400 truncate">เปิดในหน้าต่างเต็มจอของระบบ ปพ5</div>
      </div>
      ${canManageSports ? `
      <button type="button" data-azizgames-shirt-summary
        class="h-8 inline-flex items-center justify-center gap-1 rounded-lg border border-pink-500/50 bg-pink-600/15 px-2.5 text-[11px] font-bold text-pink-100 hover:bg-pink-600/30 hover:text-white transition"
        title="ตั้งค่าและสรุปเสื้อกีฬาสี">
        <span>👕</span><span class="hidden sm:inline">ตั้งค่า/สรุปเสื้อ</span>
      </button>
      <button type="button" data-azizgames-shirt-vote-settings
        class="h-8 inline-flex items-center justify-center gap-1 rounded-lg border border-indigo-500/50 bg-indigo-600/15 px-2.5 text-[11px] font-bold text-indigo-100 hover:bg-indigo-600/30 hover:text-white transition"
        title="ตั้งค่าโหวตแบบเสื้อกีฬาสี">
        <span>🗳️</span><span class="hidden sm:inline">ตั้งค่าโหวตเสื้อ</span>
      </button>` : ''}
      ${canManageSports ? `
      <button type="button" data-azizgames-shirt-vote-dashboard
        class="h-8 inline-flex items-center justify-center gap-1 rounded-lg border border-violet-500/50 bg-violet-600/15 px-2.5 text-[11px] font-bold text-violet-100 hover:bg-violet-600/30 hover:text-white transition"
        title="ดูผลโหวตแบบเสื้อกีฬาสี">
        <span>📊</span><span class="hidden sm:inline">ผลโหวตเสื้อ</span>
      </button>` : ''}
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
  modal.querySelector('[data-azizgames-shirt-summary]')?.addEventListener('click', () => {
    close()
    window.dispatchEvent(new CustomEvent('pp5:open-sports-shirt-summary'))
  })
  modal.querySelector('[data-azizgames-shirt-vote-settings]')?.addEventListener('click', () => {
    close()
    window.dispatchEvent(new CustomEvent('pp5:open-shirt-vote-settings'))
  })
  modal.querySelector('[data-azizgames-shirt-vote-dashboard]')?.addEventListener('click', () => {
    close()
    window.dispatchEvent(new CustomEvent('pp5:open-shirt-vote-dashboard'))
  })
  modal.querySelector('[data-azizgames-share]')?.addEventListener('click', () => {
    shareAzizGames(url, modal.querySelector('[data-azizgames-share-status]'))
  })
}
