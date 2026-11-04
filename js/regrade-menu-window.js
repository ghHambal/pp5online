export function regradeMenuDeadlineMs(config) {
  const value = String(config?.regrade_menu_end_at ?? '').trim()
  if (!value) return null
  const timestamp = new Date(value).getTime()
  return Number.isFinite(timestamp) ? timestamp : null
}

export function regradeCountdownDeadlineMs(config, audience) {
  const operationalEnd = audience === 'teacher'
    ? config?.response_window_end
    : audience === 'student' ? config?.intent_window_end : null
  const raw = String(operationalEnd ?? '').trim()
  if (raw) {
    const timestamp = new Date(raw).getTime()
    if (Number.isFinite(timestamp)) return timestamp
  }
  return regradeMenuDeadlineMs(config)
}

export function isRegradeMenuOpen(config, audience, now = Date.now()) {
  if (!['teacher', 'student'].includes(audience)) return false
  if (config?.visibility?.[`${audience}_menu`] !== true) return false
  const deadline = regradeMenuDeadlineMs(config)
  return deadline === null || deadline > now
}

function countdownText(deadline, now = Date.now()) {
  const remaining = deadline - now
  if (remaining <= 0) return 'หมดเขตแล้ว'
  const minutes = Math.floor(remaining / 60_000)
  const days = Math.floor(minutes / 1_440)
  const hours = Math.floor((minutes % 1_440) / 60)
  const restMinutes = minutes % 60
  return `เหลือ ${days} วัน ${hours} ชั่วโมง ${restMinutes} นาที`
}

export function renderRegradeMenuCta(config, audience, { description = 'ดูรายวิชาค้าง งานแก้ และกำหนดส่ง', badge = 0, forceOpen = false } = {}) {
  const menuDeadline = regradeMenuDeadlineMs(config)
  const deadline = regradeCountdownDeadlineMs(config, audience)
  if (typeof window !== 'undefined') window._regradeMenuCloseAt = menuDeadline
  const visibilityAllowed = forceOpen || config?.visibility?.[`${audience}_menu`] === true
  if (!['teacher', 'student'].includes(audience) || !visibilityAllowed || (menuDeadline !== null && menuDeadline <= Date.now())) return ''
  return `
    <a href="regrade.html" data-regrade-window-cta data-menu-close-at="${menuDeadline ?? ''}" class="flex w-full items-center justify-between gap-3 rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-700 via-pink-700 to-rose-800 px-4 py-4 text-white shadow-lg transition hover:brightness-105 active:scale-[.99]">
      <span class="flex min-w-0 items-center gap-3">
        <span class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/15 text-2xl">📋</span>
        <span class="min-w-0 text-left">
          <span class="block text-sm font-extrabold">เข้าระบบแก้ค้างเก่า</span>
          <span class="mt-0.5 block truncate text-[11px] text-white/85">${description}</span>
          <span data-regrade-countdown data-deadline-ms="${deadline ?? ''}" class="mt-1 block text-xs font-bold text-amber-100">${deadline === null ? 'ยังไม่ได้กำหนดเวลาปิด' : countdownText(deadline)}</span>
        </span>
      </span>
      <span class="flex flex-shrink-0 flex-col items-end gap-1">
        ${Number(badge) > 0 ? `<span class="rounded-full bg-amber-300 px-2 py-0.5 text-[10px] font-extrabold text-rose-950">${Number(badge)} รายการ</span>` : ''}
        <span class="rounded-xl bg-white px-3 py-2 text-xs font-extrabold text-rose-800">เปิดระบบ →</span>
      </span>
    </a>`
}

export function startRegradeMenuCountdowns() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (window._regradeMenuCountdownTimer) clearInterval(window._regradeMenuCountdownTimer)
  const update = () => {
    const now = Date.now()
    document.querySelectorAll('[data-regrade-countdown]').forEach(node => {
      const rawDeadline = node.dataset.deadlineMs
      if (!rawDeadline) return
      const deadline = Number(rawDeadline)
      if (!Number.isFinite(deadline)) return
      node.textContent = countdownText(deadline, now)
    })
    document.querySelectorAll('[data-regrade-window-cta]').forEach(node => {
      const menuDeadline = Number(node.dataset.menuCloseAt)
      if (Number.isFinite(menuDeadline) && menuDeadline > 0 && menuDeadline <= now) node.hidden = true
    })
    const menuDeadline = Number(window._regradeMenuCloseAt)
    if (Number.isFinite(menuDeadline) && menuDeadline > 0 && menuDeadline <= now) document.getElementById('menu-regrade')?.classList.add('hidden')
  }
  update()
  window._regradeMenuCountdownTimer = setInterval(update, 30_000)
}
