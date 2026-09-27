const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const AUTH_STORAGE_KEY = 'sb-isupghduywzqbmnjgtip-auth-token'
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

const resultModal = (element) => {
  const modal = element?.closest?.('.fixed')
  if (!modal) return null
  const form = element.closest?.('form')
  const scoreInputs = form?.querySelectorAll?.('input[type="number"]') || []
  return form && scoreInputs.length === 2 && form.querySelector('textarea') ? modal : null
}

const showPublishChoice = (sportName) => new Promise((resolve) => {
  const root = document.createElement('div')
  root.className = 'az-result-publish-overlay'
  root.innerHTML = `
    <div class="az-result-publish-dialog" role="dialog" aria-modal="true" aria-labelledby="az-result-publish-title">
      <div class="az-result-publish-kicker">ขั้นตอนยืนยันก่อนบันทึก</div>
      <h2 id="az-result-publish-title">ส่งผลการแข่งขันเข้าศูนย์มอบเหรียญหรือไม่?</h2>
      <p>รายการ ${sportName || 'นี้'} จะถูกบันทึกเป็นผลการแข่งขันก่อนเสมอ หากเลือกส่ง ระบบจะส่งข้อมูลเหรียญที่มีอยู่ตอนนี้เข้าศูนย์มอบเหรียญ แม้อันดับเหรียญยังไม่ครบ และสามารถอัปเดตภายหลังได้</p>
      <div class="az-result-publish-actions">
        <button type="button" data-publish="no">บันทึกผลอย่างเดียว</button>
        <button type="button" data-publish="yes">ส่งเข้าศูนย์มอบเหรียญ</button>
      </div>
    </div>`
  const finish = (value) => {
    root.remove()
    resolve(value)
  }
  root.querySelector('[data-publish="no"]').addEventListener('click', () => finish(false))
  root.querySelector('[data-publish="yes"]').addEventListener('click', () => finish(true))
  document.body.append(root)
  root.querySelector('[data-publish="yes"]').focus()
})

const showPublishToast = (message, error = false) => {
  const toast = document.createElement('div')
  toast.className = `az-result-publish-toast${error ? ' is-error' : ''}`
  toast.textContent = message
  document.body.append(toast)
  window.setTimeout(() => toast.remove(), 4200)
}

const installStyles = () => {
  const style = document.createElement('style')
  style.textContent = `
    .az-result-publish-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(2,6,23,.78);backdrop-filter:blur(5px)}
    .az-result-publish-dialog{width:min(100%,520px);border:1px solid rgba(236,72,153,.6);border-radius:22px;background:#0f172a;color:#e2e8f0;padding:24px;box-shadow:0 24px 80px rgba(0,0,0,.45);font-family:inherit}
    .az-result-publish-kicker{color:#f472b6;font-size:11px;font-weight:800;letter-spacing:.08em;margin-bottom:7px}
    .az-result-publish-dialog h2{font-size:18px;line-height:1.35;margin:0 0 10px;font-weight:800}
    .az-result-publish-dialog p{color:#cbd5e1;font-size:13px;line-height:1.7;margin:0}
    .az-result-publish-actions{display:flex;gap:10px;margin-top:20px;justify-content:flex-end;flex-wrap:wrap}
    .az-result-publish-actions button{border:0;border-radius:12px;padding:11px 15px;font-weight:800;cursor:pointer;color:#fff}
    .az-result-publish-actions button[data-publish="no"]{background:#334155}
    .az-result-publish-actions button[data-publish="yes"]{background:#db2777}
    .az-result-publish-toast{position:fixed;right:18px;bottom:18px;z-index:10000;max-width:min(90vw,460px);padding:12px 16px;border:1px solid rgba(16,185,129,.45);border-radius:12px;background:#064e3b;color:#d1fae5;font-size:13px;font-weight:800;box-shadow:0 12px 35px rgba(0,0,0,.3)}
    .az-result-publish-toast.is-error{border-color:rgba(251,146,60,.5);background:#7c2d12;color:#ffedd5}
  `
  document.head.append(style)
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
    decision: null,
    officialToken: null,
    pending: new Map(),
    replayButton: null,
    lastModalText: '',
  }

  installStyles()

  document.addEventListener('click', async (event) => {
    const button = event.target.closest?.('button')
    if (!button || state.replayButton === button) {
      if (state.replayButton === button) state.replayButton = null
      return
    }
    const modal = resultModal(button)
    if (!modal || button.type !== 'submit') return
    const modalText = modal.textContent || ''
    if (!/บันทึก|ยืนยัน/.test(button.textContent || '')) return

    event.preventDefault()
    event.stopImmediatePropagation()
    state.lastModalText = modalText
    state.decision = await showPublishChoice(
      modal.querySelector('h3,h4')?.textContent?.trim() || 'รายการแข่งขัน',
    )
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
    if (response.ok && state.decision !== null && matchId) {
      const publish = state.decision
      state.decision = null
      if (publish) {
        state.pending.set(matchId, { token: state.officialToken })
        window.setTimeout(() => publishMatch(matchId), isFinalizeRpc ? 80 : 500)
      }
      window.setTimeout(() => {
        keepSavedResultVisible(state.lastModalText)
        showPublishToast(publish
          ? 'บันทึกผลการแข่งขันแล้ว กำลังส่งข้อมูลไปยังศูนย์มอบเหรียญ'
          : 'บันทึกผลการแข่งขันแล้ว — ยังไม่ได้ส่งเข้าศูนย์มอบเหรียญ')
      }, 300)
    }
    return response
  }

  const publishMatch = async (matchId) => {
    const pending = state.pending.get(matchId)
    if (!pending) return
    state.pending.delete(matchId)
    try {
      const result = await rpc('sports_awards_publish_match', {
        p_match_id: matchId,
        p_session_token: pending.token || null,
      })
      showPublishToast(result?.ready
        ? 'ส่งข้อมูลเหรียญเข้าศูนย์มอบเหรียญเรียบร้อย'
        : 'ส่งข้อมูลที่มีอยู่เข้าศูนย์มอบเหรียญแล้ว — เหรียญยังไม่ครบ อัปเดตภายหลังได้')
    } catch (error) {
      showPublishToast(`บันทึกผลแล้ว แต่ส่งเข้าศูนย์มอบเหรียญไม่สำเร็จ: ${error?.message || 'กรุณาลองส่งใหม่'}`, true)
    }
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install, { once: true })
else install()
