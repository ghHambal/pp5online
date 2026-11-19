const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const AUTH_STORAGE_KEY = 'sb-isupghduywzqbmnjgtip-auth-token'
const CONTEXT_STORAGE_KEY = '__azizgamesAwardCenterContext'
const PATCH_STATE = '__azizgamesResultPublishPatch'

const getSupabaseToken = () => {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    return parsed?.access_token || parsed?.currentSession?.access_token || null
  } catch {
    return null
  }
}

const apiHeaders = (token = getSupabaseToken()) => ({
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${token || SUPABASE_KEY}`,
  'Content-Type': 'application/json',
})

const rpc = async (name, payload) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: 'POST',
    headers: apiHeaders(),
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error((await response.text()) || `RPC ${name} failed`)
  return response.json()
}

const restJson = async (path) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: apiHeaders(),
  })
  if (!response.ok) throw new Error((await response.text()) || `REST ${path} failed`)
  return response.json()
}

const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const resultModal = (element) => {
  const modal = element?.closest?.('.fixed')
  if (!modal) return null
  const form = element.closest?.('form')
  const scoreInputs = form?.querySelectorAll?.('input[type="number"]') || []
  return form && scoreInputs.length === 2 && form.querySelector('textarea') ? modal : null
}

const showPublishToast = (message, error = false) => {
  const toast = document.createElement('div')
  toast.className = `az-result-publish-toast${error ? ' is-error' : ''}`
  toast.textContent = message
  document.body.append(toast)
  window.setTimeout(() => toast.remove(), 5200)
}

const installStyles = () => {
  const style = document.createElement('style')
  style.id = 'azizgames-result-publish-style'
  style.textContent = `
    .az-award-center-panel{margin-top:14px;padding:14px 16px;border:1px solid rgba(236,72,153,.38);border-radius:16px;background:linear-gradient(135deg,rgba(30,41,59,.88),rgba(15,23,42,.72));text-align:left;box-shadow:0 10px 28px rgba(0,0,0,.18)}
    .az-award-center-panel__head{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
    .az-award-center-panel__title{font-size:13px;font-weight:800;color:#f8fafc}
    .az-award-center-panel__status{font-size:11px;font-weight:800;border-radius:999px;padding:5px 9px;background:rgba(100,116,139,.2);color:#cbd5e1}
    .az-award-center-panel__status.is-sent{background:rgba(16,185,129,.16);color:#6ee7b7}
    .az-award-center-panel__status.is-warning{background:rgba(245,158,11,.16);color:#fcd34d}
    .az-award-center-panel__detail{margin:8px 0 11px;font-size:11px;line-height:1.6;color:#cbd5e1}
    .az-award-center-panel__button{border:0;border-radius:10px;padding:9px 13px;background:#db2777;color:#fff;font:inherit;font-size:11px;font-weight:800;cursor:pointer;box-shadow:0 7px 18px rgba(219,39,119,.22)}
    .az-award-center-panel__button:hover{background:#be185d}
    .az-award-center-panel__button:disabled{opacity:.55;cursor:wait}
    .az-result-publish-toast{position:fixed;right:18px;bottom:18px;z-index:10000;max-width:min(90vw,460px);padding:12px 16px;border:1px solid rgba(16,185,129,.45);border-radius:12px;background:#064e3b;color:#d1fae5;font-size:13px;font-weight:800;box-shadow:0 12px 35px rgba(0,0,0,.3)}
    .az-result-publish-toast.is-error{border-color:rgba(251,146,60,.5);background:#7c2d12;color:#ffedd5}
  `
  document.head.append(style)
}

const findSummaryHeading = (sportName = '') => {
  if (sportName && !document.body.textContent?.includes(sportName)) return null
  return [...document.querySelectorAll('h1,h2,h3,h4')].find((heading) => {
    const text = heading.textContent || ''
    return /แท่นโพเดียมสรุปเหรียญ|สรุปเหรียญรางวัล|สรุปอันดับเหรียญ/.test(text)
  }) || null
}

const persistContext = (context) => {
  try {
    sessionStorage.setItem(CONTEXT_STORAGE_KEY, JSON.stringify({
      matchId: context.matchId,
      sportId: context.sportId,
      sportName: context.sportName,
      officialToken: context.officialToken || null,
    }))
  } catch {
    // Storage can be unavailable in private browsing; the current page still works.
  }
}

const readPersistedContext = () => {
  try {
    const raw = sessionStorage.getItem(CONTEXT_STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const keepSavedResultVisible = (modalText) => {
  const terms = [...new Set((modalText.match(/สี[^\s·,]+/g) || []).slice(0, 2))]
  const button = [...document.querySelectorAll('button')].find((candidate) => {
    if (!/แก้ไขผล/.test(candidate.textContent || '')) return false
    let card = candidate
    for (let index = 0; index < 6 && card; index += 1) card = card.parentElement
    const cardText = card?.textContent || ''
    return terms.length < 2 || terms.every((term) => cardText.includes(term))
  })
  button?.click()
}

const install = () => {
  if (window[PATCH_STATE]) return
  const state = window[PATCH_STATE] = {
    officialToken: null,
    pendingSave: null,
    replayButton: null,
    currentContext: null,
  }

  installStyles()

  const renderAwardCenterPanel = () => {
    const context = state.currentContext
    if (!context) return
    const heading = findSummaryHeading(context.sportName)
    if (!heading) return

    let panel = document.querySelector('[data-az-award-center-panel]')
    if (!panel) {
      panel = document.createElement('section')
      panel.className = 'az-award-center-panel'
      panel.dataset.azAwardCenterPanel = 'true'
      const header = heading.parentElement || heading
      header.insertAdjacentElement('afterend', panel)
    }

    const sent = Boolean(context.ceremony)
    const hasNewerResult = sent && context.ceremony.changed
    const statusClass = context.syncing ? '' : sent && !hasNewerResult ? 'is-sent' : 'is-warning'
    const statusText = context.syncing
      ? 'กำลังตรวจสอบสถานะ...'
      : hasNewerResult
        ? '⚠️ มีผลล่าสุดรอส่งเข้าศูนย์'
      : sent
        ? `✅ ส่งแล้ว · ครั้งที่ ${context.ceremony.revision || 1}`
        : '⏳ ยังไม่ได้ส่งเข้าศูนย์'
    const detail = context.syncing
      ? 'กำลังอ่านสรุปเหรียญและสถานะการส่งจากศูนย์มอบเหรียญ'
      : `${context.medalTypes || 0}/3 อันดับเหรียญ${context.ready
        ? hasNewerResult ? ' · ผลการแข่งขันเปลี่ยนแปลง รอส่งข้อมูลล่าสุด' : ' · ผลเหรียญครบ ระบบส่งอัตโนมัติแล้ว'
        : ' · เหรียญยังไม่ครบ สามารถส่งข้อมูลที่มีอยู่ได้'}`
        + (context.ceremony?.delivered_at ? ' · ยืนยันมอบเหรียญแล้ว' : '')

    panel.innerHTML = `
      <div class="az-award-center-panel__head">
        <span class="az-award-center-panel__title">🏅 ศูนย์มอบเหรียญ</span>
        <span class="az-award-center-panel__status ${statusClass}">${escapeHtml(statusText)}</span>
      </div>
      <p class="az-award-center-panel__detail">${escapeHtml(detail)}</p>
      <button type="button" class="az-award-center-panel__button" data-az-award-center-send ${context.syncing ? 'disabled' : ''}>
        ${sent ? '↻ ส่งข้อมูลล่าสุดอีกครั้ง' : '📤 ส่งเข้าศูนย์มอบเหรียญ'}
      </button>`

    panel.querySelector('[data-az-award-center-send]')?.addEventListener('click', async (event) => {
      const button = event.currentTarget
      if (!state.currentContext?.matchId || button.disabled) return
      button.disabled = true
      state.currentContext.syncing = true
      renderAwardCenterPanel()
      try {
        await publishMatch(state.currentContext.matchId, state.currentContext)
        await syncCenterForMatch(state.currentContext.matchId, { silent: true, autoPublish: false })
      } catch (error) {
        showPublishToast(`ส่งเข้าศูนย์มอบเหรียญไม่สำเร็จ: ${error?.message || 'กรุณาลองใหม่'}`, true)
        state.currentContext.syncing = false
        renderAwardCenterPanel()
      }
    }, { once: true })
  }

  const loadAwardContext = async (matchId, base = {}) => {
    const matches = await restJson(`matches?id=eq.${encodeURIComponent(matchId)}&select=id,event_id,sport_id`)
    const match = matches?.[0]
    if (!match) throw new Error('ไม่พบคู่แข่งขันหลังบันทึกผล')
    const [sports, awards, status] = await Promise.all([
      restJson(`sports?id=eq.${encodeURIComponent(match.sport_id)}&select=id,name`),
      restJson(`medal_awards?sport_id=eq.${encodeURIComponent(match.sport_id)}&select=medal_type,team_color_id`),
      rpc('sports_awards_result_status', {
        p_match_id: matchId,
        p_session_token: base.officialToken || state.officialToken || null,
      }),
    ])
    const medalTypes = new Set((awards || []).map((award) => award.medal_type).filter(Boolean)).size
    const awardFingerprint = JSON.stringify((awards || [])
      .map((award) => `${award.medal_type}:${award.team_color_id}`)
      .sort())
    const ceremony = status?.sent
      ? {
        delivered_at: status.delivered_at || null,
        revision: status.revision || 1,
        changed: Boolean(status.changed),
      }
      : null
    return {
      ...base,
      matchId,
      eventId: match.event_id,
      sportId: match.sport_id,
      sportName: sports?.[0]?.name || base.sportName || '',
      medalTypes,
      ready: medalTypes === 3,
      ceremony,
      syncing: false,
    }
  }

  const publishMatch = async (matchId, context = state.currentContext) => {
    const result = await rpc('sports_awards_publish_match', {
      p_match_id: matchId,
      p_session_token: context?.officialToken || state.officialToken || null,
    })
    showPublishToast(result?.ready
      ? 'ส่งข้อมูลเหรียญเข้าศูนย์มอบเหรียญเรียบร้อย'
      : 'ส่งข้อมูลที่มีอยู่เข้าศูนย์มอบเหรียญแล้ว — เหรียญยังไม่ครบ อัปเดตภายหลังได้')
    return result
  }

  const syncCenterForMatch = async (matchId, { silent = false, autoPublish = true } = {}) => {
    state.currentContext = {
      ...(state.currentContext || {}),
      matchId,
      officialToken: state.officialToken || state.currentContext?.officialToken || null,
      syncing: true,
    }
    renderAwardCenterPanel()
    try {
      const context = await loadAwardContext(matchId, state.currentContext)
      state.currentContext = context
      persistContext(context)
      renderAwardCenterPanel()

      const needsPublish = context.ready
        && autoPublish
        && (!context.ceremony || context.ceremony.changed)
      if (needsPublish) {
        await publishMatch(matchId, context)
        const refreshed = await loadAwardContext(matchId, context)
        state.currentContext = refreshed
        persistContext(refreshed)
        renderAwardCenterPanel()
      } else if (!silent) {
        showPublishToast(`บันทึกผลแล้ว — เหรียญมี ${context.medalTypes}/3 อันดับ สามารถกดส่งข้อมูลที่มีอยู่ได้`)
      }
    } catch (error) {
      state.currentContext = { ...(state.currentContext || {}), syncing: false }
      renderAwardCenterPanel()
      if (!silent) showPublishToast(`ตรวจสถานะศูนย์มอบเหรียญไม่สำเร็จ: ${error?.message || 'กรุณารีเฟรชหน้า'}`, true)
    }
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest?.('button')
    if (!button || state.replayButton === button) {
      if (state.replayButton === button) state.replayButton = null
      return
    }
    const modal = resultModal(button)
    if (!modal || button.type !== 'submit') return
    if (!/บันทึก|ยืนยัน/.test(button.textContent || '')) return

    event.preventDefault()
    event.stopImmediatePropagation()
    state.pendingSave = { modalText: modal.textContent || '' }
    state.replayButton = button
    button.click()
  }, true)

  const originalFetch = window.fetch.bind(window)
  window.fetch = async (input, init = {}) => {
    const url = typeof input === 'string' ? input : input?.url || ''
    const method = String(init.method || input?.method || 'GET').toUpperCase()
    let body = null
    try {
      body = typeof init.body === 'string' ? JSON.parse(init.body) : null
    } catch {
      body = null
    }

    const isFinalizeRpc = /\/rest\/v1\/rpc\/(sports_official_write|sports_central_write)$/.test(url)
      && body?.p_action === 'finalizeMatch'
    const isMatchDonePatch = /\/rest\/v1\/matches\?id=eq-[0-9a-f-]+/i.test(url)
      && method === 'PATCH'
      && (body?.status === 'done' || body?.status === 'เสร็จสิ้น')
    const matchId = isFinalizeRpc
      ? body?.p_payload?.matchId || body?.p_payload?.id
      : isMatchDonePatch ? url.match(/id=eq-([^&]+)/i)?.[1] : null
    if (isFinalizeRpc && body?.p_session_token) state.officialToken = body.p_session_token

    const response = await originalFetch(input, init)
    if (response.ok && state.pendingSave && matchId) {
      const save = state.pendingSave
      state.pendingSave = null
      setTimeout(() => keepSavedResultVisible(save.modalText), 300)
      setTimeout(() => syncCenterForMatch(matchId), 450)
    } else if (!response.ok && state.pendingSave && matchId) {
      state.pendingSave = null
    }
    return response
  }

  const observer = new MutationObserver(() => {
    if (state.currentContext && !document.querySelector('[data-az-award-center-panel]')) {
      renderAwardCenterPanel()
    }
  })
  observer.observe(document.body, { childList: true, subtree: true })

  const persisted = readPersistedContext()
  if (persisted?.officialToken) state.officialToken = persisted.officialToken
  if (persisted?.matchId) syncCenterForMatch(persisted.matchId, { silent: true, autoPublish: false })
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install, { once: true })
else install()
