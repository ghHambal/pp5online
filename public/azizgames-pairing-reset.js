const PAIRING_RESET_STATE = '__azizgamesPairingResetPatch'
const PAIRING_RESET_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const PAIRING_RESET_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'

const pairingHeaders = {
  apikey: PAIRING_RESET_KEY,
  'Content-Type': 'application/json',
}

const normalize = (value) => String(value || '').replace(/\s+/g, '')

const today = () => {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

const timeLabel = (value) => String(value || '').slice(0, 5)

const centralPassword = () => {
  try {
    return sessionStorage.getItem('aziz_central_result_password') || window.prompt('กรอกรหัสผ่านโหมดกองกลาง') || ''
  } catch {
    return ''
  }
}

const callReset = async (password, matchId) => {
  const response = await fetch(`${PAIRING_RESET_URL}/rest/v1/rpc/sports_central_reset_pairing`, {
    method: 'POST',
    headers: {
      ...pairingHeaders,
      Authorization: `Bearer ${PAIRING_RESET_KEY}`,
    },
    body: JSON.stringify({ p_gate_password: password, p_match_id: matchId }),
  })
  if (!response.ok) {
    const raw = await response.text()
    let message = raw
    try { message = JSON.parse(raw)?.message || raw } catch {}
    throw new Error(message || 'รีเซ็ตการประกบคู่ไม่สำเร็จ')
  }
  return response.json()
}

const loadMatches = async () => {
  const query = `scheduled_date=eq.${today()}&select=id,event_id,sport_id,status,round_name,scheduled_time,venue,team_a_color_id,team_b_color_id,score_a,score_b,winner_team_color_id&order=scheduled_time.asc`
  const response = await fetch(`${PAIRING_RESET_URL}/rest/v1/matches?${query}`, { headers: pairingHeaders })
  if (!response.ok) throw new Error('โหลดรายการคู่แข่งขันไม่สำเร็จ')
  const matches = await response.json()
  const sportIds = [...new Set(matches.map((match) => match.sport_id).filter(Boolean))]
  const colorIds = [...new Set(matches.flatMap((match) => [match.team_a_color_id, match.team_b_color_id]).filter(Boolean))]
  const inFilter = (values) => encodeURIComponent(`(${values.join(',')})`)
  const [sportsResponse, colorsResponse] = await Promise.all([
    sportIds.length
      ? fetch(`${PAIRING_RESET_URL}/rest/v1/sports?id=in.${inFilter(sportIds)}&select=id,name`, { headers: pairingHeaders })
      : Promise.resolve({ ok: true, json: async () => [] }),
    colorIds.length
      ? fetch(`${PAIRING_RESET_URL}/rest/v1/team_colors?id=in.${inFilter(colorIds)}&select=id,name`, { headers: pairingHeaders })
      : Promise.resolve({ ok: true, json: async () => [] }),
  ])
  if (!sportsResponse.ok || !colorsResponse.ok) throw new Error('โหลดข้อมูลสีหรือชนิดกีฬาไม่สำเร็จ')
  const sports = await sportsResponse.json()
  const colors = await colorsResponse.json()
  const sportMap = new Map(sports.map((sport) => [sport.id, sport.name]))
  const colorMap = new Map(colors.map((color) => [color.id, color.name]))
  return matches.map((match) => ({
    ...match,
    sport_name: sportMap.get(match.sport_id) || '',
    team_a_name: colorMap.get(match.team_a_color_id) || '',
    team_b_name: colorMap.get(match.team_b_color_id) || '',
  }))
}

const cardMatches = (card, match) => {
  const text = normalize(card.textContent)
  const required = [match.sport_name, match.round_name, timeLabel(match.scheduled_time), match.venue]
    .filter(Boolean)
    .map(normalize)
  const teams = [match.team_a_name, match.team_b_name].filter(Boolean).map(normalize)
  return required.every((value) => text.includes(value)) && teams.every((value) => text.includes(value))
}

const isCentralView = () => {
  try {
    return Boolean(
      sessionStorage.getItem('aziz_central_result_password')
      || sessionStorage.getItem('aziz_central_result_unlocked') === 'true'
      || document.querySelector('button[title*="แก้ไขการประกบคู่"], button[title*="ตั้งวันที่/เวลา/สถานที่"]'),
    )
  } catch {
    return false
  }
}

const installStyles = () => {
  if (document.getElementById('azizgames-pairing-reset-style')) return
  const style = document.createElement('style')
  style.id = 'azizgames-pairing-reset-style'
  style.textContent = `
    [data-aziz-pairing-reset-wrap]{display:flex;gap:8px;margin-top:10px}
    [data-aziz-pairing-reset]{flex:1;border:1px solid rgba(244,63,94,.35);border-radius:10px;background:rgba(127,29,29,.18);color:#fda4af;padding:7px 10px;font-size:11px;font-weight:800;cursor:pointer}
    [data-aziz-pairing-reset]:hover{background:rgba(159,18,57,.35);color:#fff}
    [data-aziz-pairing-reset]:disabled{cursor:wait;opacity:.55}
  `
  document.head.append(style)
}

const install = async () => {
  if (window[PAIRING_RESET_STATE]) return
  const state = window[PAIRING_RESET_STATE] = { matches: [], loaded: false }
  installStyles()

  const addButtons = () => {
    if (!state.loaded || !isCentralView()) return
    const cards = [...document.querySelectorAll('.glass-card')]
    state.matches.forEach((match) => {
      const card = cards.find((candidate) => !candidate.querySelector(`[data-aziz-pairing-reset="${match.id}"]`) && cardMatches(candidate, match))
      if (!card) return
      const wrap = document.createElement('div')
      wrap.dataset.azizPairingResetWrap = 'true'
      const button = document.createElement('button')
      button.type = 'button'
      button.dataset.azizPairingReset = match.id
      button.textContent = '↺ รีเซ็ตการประกบคู่'
      button.title = 'รีเซ็ตคู่นี้กลับเป็นรอแข่ง แล้วเลือกสีใหม่'
      button.addEventListener('click', async (event) => {
        event.preventDefault()
        event.stopPropagation()
        if (!window.confirm(`รีเซ็ตการประกบคู่ของ ${match.sport_name} ${match.round_name} ใช่หรือไม่?\nหลังรีเซ็ตให้เลือกการประกบคู่ใหม่`)) return
        const password = centralPassword()
        if (!password) return
        button.disabled = true
        button.textContent = 'กำลังรีเซ็ต...'
        try {
          await callReset(password, match.id)
          sessionStorage.setItem('aziz_central_result_password', password)
          sessionStorage.setItem('aziz_central_result_unlocked', 'true')
          window.alert('รีเซ็ตการประกบคู่แล้ว ระบบจะเปิดรายการใหม่เพื่อให้เลือกสี A/B ที่ถูกต้อง')
          window.location.reload()
        } catch (error) {
          button.disabled = false
          button.textContent = '↺ รีเซ็ตการประกบคู่'
          window.alert(error?.message || 'รีเซ็ตการประกบคู่ไม่สำเร็จ')
        }
      })
      wrap.append(button)
      card.append(wrap)
    })
  }

  try {
    state.matches = await loadMatches()
    state.loaded = true
    addButtons()
  } catch (error) {
    console.warn('AZIZGAMES pairing reset unavailable', error)
  }

  const observer = new MutationObserver(() => window.setTimeout(addButtons, 0))
  observer.observe(document.body, { childList: true, subtree: true })
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install, { once: true })
else install()
