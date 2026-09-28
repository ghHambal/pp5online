const OVERVIEW_MARK = 'data-azizgames-competition-overview'
const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const AUTH_STORAGE_KEY = 'sb-isupghduywzqbmnjgtip-auth-token'
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]))
const genderLabel = value => ({ M: 'ชาย', W: 'หญิง', Coed: 'ผสม' }[value] || value || 'ไม่ระบุ')
const medalLabel = value => ({ gold: '🥇 ทอง', silver: '🥈 เงิน', bronze: '🥉 ทองแดง' }[value] || value || 'ไม่ระบุ')
const dateLabel = value => value ? new Date(value).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Bangkok' }) : '—'

const state = {
  root: null,
  rows: [],
  gender: 'all',
  search: '',
  filters: {
    result: 'all',
    send: 'all',
    delivery: 'all',
  },
  busy: false,
  previousBodyOverflow: '',
  previousDocumentOverflow: '',
}

const installStyles = () => {
  if (document.getElementById('azizgames-competition-overview-style')) return
  const style = document.createElement('style')
  style.id = 'azizgames-competition-overview-style'
  style.textContent = `
    [data-azizgames-competition-overview-root]{position:fixed!important;inset:0!important;z-index:2147483647!important;display:block!important;width:100vw!important;height:100vh!important;overflow:hidden!important;pointer-events:auto!important}
    [data-azizgames-competition-overview]{position:fixed!important;inset:0!important;z-index:2147483647!important;display:block!important;width:100vw!important;height:100vh!important;max-width:none!important;overflow-y:auto!important;overflow-x:hidden!important;background:rgba(2,6,23,.98)!important;color:#e2e8f0!important;font-family:inherit!important}
    [data-azizgames-competition-overview]>div{box-sizing:border-box;min-height:100%;width:100%;max-width:1500px;margin:0 auto;padding:24px 28px 48px}
    @media(max-width:640px){[data-azizgames-competition-overview]>div{padding:16px 14px 32px}}
  `
  document.head.append(style)
}

const getSupabaseToken = () => {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    return parsed?.access_token || parsed?.currentSession?.access_token || null
  } catch {
    return null
  }
}

const getOfficialToken = () => {
  try {
    const raw = localStorage.getItem('aziz_current_user')
    const currentUser = raw ? JSON.parse(raw) : null
    return currentUser?.role === 'official' ? currentUser.sessionToken || null : null
  } catch {
    return null
  }
}

const rpc = async (name, payload) => {
  const token = getSupabaseToken()
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${token || SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error((await response.text()) || `RPC ${name} failed`)
  return response.json()
}

const showMessage = (root, text, error = false) => {
  root.querySelector('[data-overview-message]').innerHTML = `<div class="rounded-xl border px-4 py-3 text-sm ${error ? 'border-red-400/40 bg-red-950/40 text-red-200' : 'border-emerald-400/40 bg-emerald-950/40 text-emerald-200'}">${esc(text)}</div>`
}

const medalText = row => (row.medals || []).map(medal => `${medalLabel(medal.medal)} สี${medal.color || '—'}`).join(' ')

const openResultPage = row => {
  if (!row.id) return
  const base = location.pathname.startsWith('/pp5online/') ? '/pp5online/' : '/'
  window.open(`${base}azizgames.html?tab=p3&sport_id=${encodeURIComponent(row.id)}`, '_blank', 'noopener')
}

const filterButton = (group, value, label) => `<button type="button" data-filter-group="${group}" data-filter-value="${value}" class="rounded-lg border px-3 py-1.5 text-xs font-bold ${state.filters[group] === value ? 'border-pink-400 bg-pink-600 text-white' : 'border-slate-700 bg-slate-950/60 text-slate-300 hover:bg-slate-800'}">${label}</button>`

const renderRows = () => {
  const root = state.root
  if (!root) return
  const tokens = state.search.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean)
  const rows = state.rows.filter(row => {
    if (state.gender !== 'all' && row.gender !== state.gender) return false
    if (state.filters.result === 'finished' && !row.finished) return false
    if (state.filters.result === 'pending' && row.finished) return false
    if (state.filters.send === 'sent' && !row.sent) return false
    if (state.filters.send === 'pending' && row.sent) return false
    if (state.filters.send === 'changed' && !row.changed_after_send) return false
    if (state.filters.delivery === 'delivered' && !row.delivered_at) return false
    if (state.filters.delivery === 'pending' && row.delivered_at) return false
    const statuses = [
      genderLabel(row.gender), row.name, row.level, medalText(row),
      row.finished ? 'เสร็จสิ้น พร้อมสรุปเหรียญ' : 'ยังไม่เสร็จ ไปบันทึกผล',
      row.sent ? 'ส่งแล้ว ส่งเข้าศูนย์' : 'ยังไม่ได้ส่ง',
      row.delivered_at ? 'มอบแล้ว' : 'ยังไม่ได้มอบ',
      JSON.stringify(row),
    ].join(' ').toLocaleLowerCase()
    return tokens.every(token => statuses.includes(token))
  })

  root.querySelector('[data-overview-count]').textContent = `แสดง ${rows.length} จาก ${state.rows.length} รายการ`
  root.querySelector('[data-overview-list]').innerHTML = rows.map(row => {
    const medalItems = (row.medals || []).map(medal => `
      <span class="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-950/60 px-2 py-1 text-xs">
        ${medal.logo_url ? `<img src="${esc(medal.logo_url)}" alt="สี${esc(medal.color)}" class="h-5 w-5 rounded-full object-cover bg-white">` : ''}
        ${medalLabel(medal.medal)} · สี${esc(medal.color || '—')}
      </span>`).join('') || '<span class="text-xs text-slate-500">ยังไม่มีข้อมูลเหรียญ</span>'
    const resultAction = row.finished
      ? `<button type="button" data-result="${esc(row.id)}" class="rounded-lg border border-sky-400/30 bg-sky-950/30 px-3 py-2 text-xs font-bold text-sky-200 hover:bg-sky-900/50">ดู/แก้ผลการแข่งขัน</button>`
      : `<button type="button" data-result="${esc(row.id)}" class="rounded-lg bg-pink-600 px-3 py-2 text-xs font-bold text-white hover:bg-pink-500">ไปบันทึกผลรายการนี้</button>`
    const sendAction = row.sent
      ? `<span class="rounded-lg border border-emerald-400/30 bg-emerald-950/40 px-3 py-2 text-xs font-bold text-emerald-200">✅ ส่งแล้ว · ครั้งที่ ${esc(row.sent_revision || 1)}</span>${row.changed_after_send ? `<button type="button" data-send="${esc(row.match_id || '')}" class="rounded-lg bg-amber-600 px-3 py-2 text-xs font-bold text-white hover:bg-amber-500" ${row.match_id ? '' : 'disabled'}>↻ ส่งผลล่าสุด</button><span class="text-[11px] font-bold text-amber-300">ผลเปลี่ยน รอส่งล่าสุด</span>` : ''}`
      : row.match_id
        ? `<button type="button" data-send="${esc(row.match_id)}" class="rounded-lg bg-amber-600 px-3 py-2 text-xs font-bold text-white hover:bg-amber-500">📤 ส่งเข้าศูนย์</button>`
        : '<span class="text-xs text-slate-500">ยังไม่มีคู่แข่งขัน</span>'
    const delivery = row.delivered_at
      ? `<div class="text-xs text-emerald-200">✅ มอบแล้ว<br>${esc(dateLabel(row.delivered_at))}</div><div class="mt-2 flex flex-wrap gap-1">${(row.photos || []).map(photo => `<a href="${esc(photo.url)}" target="_blank" rel="noopener"><img src="${esc(photo.url)}" alt="หลักฐาน ${esc(row.name)}" class="h-10 w-10 rounded object-cover ring-1 ring-emerald-300/30"></a>`).join('') || '<span class="text-[11px] text-slate-500">ยังไม่มีรูปหลักฐาน</span>'}</div>`
      : '<span class="text-xs text-slate-500">ยังไม่ได้มอบเหรียญ</span>'
    return `<article class="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div><h3 class="font-bold text-slate-100">${esc(row.name)}</h3><p class="mt-1 text-xs text-slate-400">${esc(genderLabel(row.gender))} · ${esc(row.level || 'ไม่ระบุระดับ')} · ผลแข่ง ${esc(row.match_done || 0)}/${esc(row.match_total || 0)} นัด</p></div>
        <span class="rounded-full px-3 py-1 text-xs font-bold ${row.finished ? 'bg-emerald-950/60 text-emerald-300' : 'bg-amber-950/60 text-amber-300'}">${row.finished ? '✅ แข่งเสร็จสิ้น' : '⏳ ยังไม่เสร็จสิ้น'}</span>
      </div>
      <div class="mt-3 flex flex-wrap gap-2">${medalItems}</div>
      <div class="mt-4 grid gap-3 border-t border-slate-800 pt-3 md:grid-cols-3">
        <div><p class="text-[11px] font-bold uppercase tracking-wide text-slate-500">ผลการแข่งขัน</p><div class="mt-2 flex flex-wrap gap-2">${resultAction}</div></div>
        <div><p class="text-[11px] font-bold uppercase tracking-wide text-slate-500">ส่งเข้าศูนย์มอบเหรียญ</p><div class="mt-2 flex flex-wrap items-center gap-2">${sendAction}</div></div>
        <div><p class="text-[11px] font-bold uppercase tracking-wide text-slate-500">สถานการณ์มอบเหรียญ</p><div class="mt-2">${delivery}</div></div>
      </div>
    </article>`
  }).join('') || '<div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center text-sm text-slate-400">ไม่พบรายการตามตัวกรอง</div>'

  root.querySelectorAll('[data-result]').forEach(button => button.onclick = () => openResultPage(state.rows.find(row => row.id === button.dataset.result)))
  root.querySelectorAll('[data-send]').forEach(button => button.onclick = () => sendRow(button.dataset.send))
}

const render = () => {
  if (!state.root) return
  state.root.innerHTML = `<div class="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/95 text-slate-100" data-azizgames-competition-overview>
    <div class="mx-auto min-h-screen max-w-[1500px] p-4 md:p-8">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4"><div><p class="text-xs font-bold uppercase tracking-[0.18em] text-pink-400">AZIZGAMES · ฝ่ายกองกลาง</p><h1 class="mt-1 text-xl font-extrabold md:text-2xl">📊 ภาพรวมรายการแข่งขันและศูนย์มอบเหรียญ</h1><p class="mt-1 text-xs text-slate-400">ตรวจความครบถ้วนของผล เหรียญ การส่งข้อมูล และหลักฐานการมอบจากจุดเดียว</p></div><div class="flex gap-2"><button type="button" data-overview-refresh class="rounded-xl border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-800">↻ รีเฟรช</button><button type="button" data-overview-close class="rounded-xl bg-pink-600 px-4 py-2 text-sm font-bold hover:bg-pink-500">ปิดหน้านี้</button></div></div>
      <div data-overview-message class="mt-4"></div>
      <div class="mt-5 flex flex-wrap items-center gap-2"><button type="button" data-gender="all" class="rounded-xl px-4 py-2 text-sm font-bold">ทั้งหมด</button><button type="button" data-gender="M" class="rounded-xl px-4 py-2 text-sm font-bold">👦 ชาย</button><button type="button" data-gender="W" class="rounded-xl px-4 py-2 text-sm font-bold">👧 หญิง</button><label class="ml-auto min-w-[250px] flex-1 md:max-w-md"><span class="sr-only">ค้นหารายการแข่งขัน</span><input data-overview-search class="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500" placeholder="ค้นหาชื่อรายการ สี เหรียญ สถานะ..." value="${esc(state.search)}"></label></div>
      <div class="mt-4 grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-3 md:grid-cols-3">
        <div><p class="mb-2 text-[11px] font-bold text-slate-400">กรองผลการแข่งขัน</p><div class="flex flex-wrap gap-2">${filterButton('result', 'all', 'ทั้งหมด')}${filterButton('result', 'finished', '✅ เสร็จสิ้น')}${filterButton('result', 'pending', '⏳ ยังไม่เสร็จ')}</div></div>
        <div><p class="mb-2 text-[11px] font-bold text-slate-400">กรองการส่งเข้าศูนย์</p><div class="flex flex-wrap gap-2">${filterButton('send', 'all', 'ทั้งหมด')}${filterButton('send', 'sent', '✅ ส่งแล้ว')}${filterButton('send', 'pending', '📤 ยังไม่ส่ง')}${filterButton('send', 'changed', '↻ ผลเปลี่ยน')}</div></div>
        <div><p class="mb-2 text-[11px] font-bold text-slate-400">กรองสถานการณ์มอบเหรียญ</p><div class="flex flex-wrap gap-2">${filterButton('delivery', 'all', 'ทั้งหมด')}${filterButton('delivery', 'delivered', '✅ มอบแล้ว')}${filterButton('delivery', 'pending', '⏳ ยังไม่มอบ')}</div></div>
      </div>
      <div class="mt-3 text-xs text-slate-400" data-overview-count></div>
      <div class="mt-3 grid gap-4" data-overview-list></div>
    </div>
  </div>`
  const overlay = state.root.querySelector('[data-azizgames-competition-overview]')
  state.root.querySelector('[data-overview-close]').onclick = close
  state.root.querySelector('[data-overview-refresh]').onclick = () => load(true)
  state.root.querySelector('[data-overview-search]').oninput = event => { state.search = event.target.value; renderRows() }
  state.root.querySelectorAll('[data-gender]').forEach(button => button.onclick = () => { state.gender = button.dataset.gender; render() })
  state.root.querySelectorAll('[data-filter-group]').forEach(button => button.onclick = () => {
    state.filters[button.dataset.filterGroup] = button.dataset.filterValue
    render()
  })
  overlay.onkeydown = event => { if (event.key === 'Escape') close() }
  overlay.tabIndex = -1
  renderRows()
  overlay.focus()
}

const load = async (announce = false) => {
  if (!state.root || state.busy) return
  state.busy = true
  const messageRoot = state.root
  try {
    state.rows = (await rpc('sports_admin_competition_overview', {
      p_event: null,
      p_session_token: getOfficialToken(),
    }))?.rows || []
    renderRows()
    if (announce) showMessage(messageRoot, `รีเฟรชแล้ว ${state.rows.length} รายการ`)
  } catch (error) {
    showMessage(messageRoot, error?.message || 'ไม่สามารถโหลดภาพรวมรายการแข่งขันได้', true)
  } finally {
    state.busy = false
  }
}

const sendRow = async matchId => {
  if (state.busy) return
  state.busy = true
  try {
    await rpc('sports_awards_publish_match', { p_match_id: matchId, p_session_token: getOfficialToken() })
    state.busy = false
    await load(false)
    showMessage(state.root, 'ส่งข้อมูลเข้าศูนย์มอบเหรียญแล้ว')
  } catch (error) {
    showMessage(state.root, error?.message || 'ส่งข้อมูลไม่สำเร็จ', true)
    state.busy = false
  }
}

const close = () => {
  state.root?.remove()
  document.body.style.overflow = state.previousBodyOverflow
  document.documentElement.style.overflow = state.previousDocumentOverflow
  state.root = null
  state.rows = []
}

const open = () => {
  if (state.root) return
  installStyles()
  state.previousBodyOverflow = document.body.style.overflow
  state.previousDocumentOverflow = document.documentElement.style.overflow
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
  state.root = document.createElement('div')
  state.root.setAttribute('data-azizgames-competition-overview-root', 'true')
  state.root.style.cssText = 'position:fixed;inset:0;z-index:2147483647;width:100vw;height:100vh;overflow:hidden;pointer-events:auto;'
  document.body.append(state.root)
  render()
  load()
}

const installNav = () => {
  const settingsButton = [...document.querySelectorAll('aside button')].find(button => /ตั้งค่าระบบ/.test(button.textContent || ''))
  if (!settingsButton) return
  const container = settingsButton.parentElement
  const submenu = [...container.children].find(child => child.tagName === 'DIV')
  const target = submenu || container
  if (target.querySelector(`[${OVERVIEW_MARK}]`)) return
  const button = document.createElement('button')
  button.type = 'button'
  button.setAttribute(OVERVIEW_MARK, 'true')
  button.className = 'w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12.5px] font-prompt text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
  button.textContent = '📊 ภาพรวมรายการแข่งขัน'
  button.onclick = event => { event.preventDefault(); event.stopPropagation(); open() }
  target.append(button)
}

const observer = new MutationObserver(installNav)
observer.observe(document.body, { childList: true, subtree: true })
installNav()
