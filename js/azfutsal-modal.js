import { APP_VERSION } from './version.js'

const AZFUTSAL_PATH = 'azfutsal.html'

const getAzfutsalUrl = () => {
  const url = new URL(AZFUTSAL_PATH, window.location.href)
  url.searchParams.set('v', APP_VERSION)
  return url.href
}

export function openAzfutsalModal() {
  document.getElementById('azfutsal-modal')?.remove()

  const url = getAzfutsalUrl()
  const previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'

  const modal = document.createElement('div')
  modal.id = 'azfutsal-modal'
  modal.className = 'fixed inset-0 z-[320] bg-slate-950 flex flex-col'
  modal.innerHTML = `
    <div class="h-12 flex items-center gap-2 px-3 sm:px-4 border-b border-slate-800 bg-slate-950 text-slate-100 shadow-lg">
      <div class="min-w-0 flex-1">
        <div class="text-sm font-extrabold truncate">⚽ AZFUTSALCUP</div>
      </div>
      <a href="${url}" target="_blank" rel="noopener"
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
        title="เปิดในบราวเซอร์/แท็บใหม่">
        ↗
      </a>
      <button type="button" data-azfutsal-close
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-red-600/80 hover:border-red-500 transition"
        title="ปิด">
        ✕
      </button>
    </div>
    <iframe src="${url}" class="flex-1 w-full border-0 bg-white" title="AZFUTSALCUP2025"></iframe>
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
  modal.querySelector('[data-azfutsal-close]')?.addEventListener('click', close)
}
