// ─── Toast Notification ───────────────────────────────────────────────────────
export function showToast(message, type = 'info') {
  const colors = {
    success: 'bg-green-500',
    error:   'bg-red-500',
    warning: 'bg-yellow-500',
    info:    'bg-blue-500',
  }

  const toast = document.createElement('div')
  toast.className = `fixed top-5 right-5 z-50 px-5 py-3 rounded-xl text-white shadow-lg text-sm
                     flex items-center gap-2 transition-all duration-300 translate-x-full
                     ${colors[type] ?? colors.info}`

  const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' }
  toast.innerHTML = `<span class="font-bold text-base">${icons[type] ?? icons.info}</span><span>${message}</span>`

  document.body.appendChild(toast)
  requestAnimationFrame(() => toast.classList.remove('translate-x-full'))

  setTimeout(() => {
    toast.classList.add('translate-x-full', 'opacity-0')
    toast.addEventListener('transitionend', () => toast.remove())
  }, 3500)
}

// ─── Button Loading State ─────────────────────────────────────────────────────
export function setButtonLoading(btn, loading, originalText = '') {
  if (loading) {
    btn.disabled = true
    btn.dataset.originalText = btn.innerHTML
    btn.innerHTML = `<svg class="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>`
  } else {
    btn.disabled = false
    btn.innerHTML = btn.dataset.originalText || originalText
  }
}

// ─── Page Loading Overlay ─────────────────────────────────────────────────────
export function showPageLoader(show) {
  let loader = document.getElementById('page-loader')
  if (!loader) {
    loader = document.createElement('div')
    loader.id = 'page-loader'
    loader.className = `fixed inset-0 z-[100] bg-white/80 backdrop-blur-sm
                        flex items-center justify-center`
    loader.innerHTML = `<div class="flex flex-col items-center gap-3">
      <svg class="animate-spin h-10 w-10 text-indigo-600" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
      <p class="text-indigo-600 font-medium">กำลังโหลด...</p>
    </div>`
    document.body.appendChild(loader)
  }
  loader.style.display = show ? 'flex' : 'none'
}
