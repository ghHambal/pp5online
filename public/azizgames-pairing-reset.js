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

const callUpdatePairing = async (password, matchId, teamA, teamB) => {
  const response = await fetch(`${PAIRING_RESET_URL}/rest/v1/rpc/sports_central_update_pairing`, {
    method: 'POST',
    headers: {
      ...pairingHeaders,
      Authorization: `Bearer ${PAIRING_RESET_KEY}`,
    },
    body: JSON.stringify({
      p_gate_password: password,
      p_match_id: matchId,
      p_team_a_color_id: teamA,
      p_team_b_color_id: teamB,
    }),
  })
  if (!response.ok) {
    const raw = await response.text()
    let message = raw
    try { message = JSON.parse(raw)?.message || raw } catch {}
    throw new Error(message || 'บันทึกคู่แข่งขันใหม่ไม่สำเร็จ')
  }
  return response.json()
}

const loadMatches = async () => {
  const query = `scheduled_date=eq.${today()}&select=id,event_id,sport_id,status,round_name,scheduled_time,venue,team_a_color_id,team_b_color_id,score_a,score_b,winner_team_color_id&order=scheduled_time.asc`
  const response = await fetch(`${PAIRING_RESET_URL}/rest/v1/matches?${query}`, { headers: pairingHeaders })
  if (!response.ok) throw new Error('โหลดรายการคู่แข่งขันไม่สำเร็จ')
  const matches = await response.json()
  const sportIds = [...new Set(matches.map((match) => match.sport_id).filter(Boolean))]
  const eventIds = [...new Set(matches.map((match) => match.event_id).filter(Boolean))]
  const inFilter = (values) => encodeURIComponent(`(${values.join(',')})`)
  const [sportsResponse, colorsResponse] = await Promise.all([
    sportIds.length
      ? fetch(`${PAIRING_RESET_URL}/rest/v1/sports?id=in.${inFilter(sportIds)}&select=id,name,gender`, { headers: pairingHeaders })
      : Promise.resolve({ ok: true, json: async () => [] }),
    eventIds.length
      ? fetch(`${PAIRING_RESET_URL}/rest/v1/team_colors?event_id=in.${inFilter(eventIds)}&select=id,event_id,name,gender&order=name.asc`, { headers: pairingHeaders })
      : Promise.resolve({ ok: true, json: async () => [] }),
  ])
  if (!sportsResponse.ok || !colorsResponse.ok) throw new Error('โหลดข้อมูลสีหรือชนิดกีฬาไม่สำเร็จ')
  const sports = await sportsResponse.json()
  const colors = await colorsResponse.json()
  const sportMap = new Map(sports.map((sport) => [sport.id, sport]))
  const colorMap = new Map(colors.map((color) => [color.id, color]))
  return matches.map((match) => ({
    ...match,
    sport_name: sportMap.get(match.sport_id)?.name || '',
    sport_gender: sportMap.get(match.sport_id)?.gender || '',
    team_a_name: colorMap.get(match.team_a_color_id)?.name || '',
    team_b_name: colorMap.get(match.team_b_color_id)?.name || '',
    available_colors: colors.filter((color) => color.event_id === match.event_id
      && (!sportMap.get(match.sport_id)?.gender
        || sportMap.get(match.sport_id).gender === 'Coed'
        || color.gender === sportMap.get(match.sport_id).gender)),
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

const canEditPairing = (match) => !['live', 'done', 'กำลังแข่ง', 'เสร็จสิ้น'].includes(match.status)
  && match.score_a == null
  && match.score_b == null
  && match.winner_team_color_id == null

const isCentralView = () => {
  try {
    if (!/\/azizgames\.html$/.test(window.location.pathname)) return false
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
    [data-aziz-pairing-reset-wrap]{display:grid;gap:8px;margin-top:10px;padding:10px;border:1px solid rgba(99,102,241,.2);border-radius:12px;background:rgba(15,23,42,.55)}
    [data-aziz-pairing-editor] summary{color:#c7d2fe;font-size:11px;font-weight:800;cursor:pointer}
    [data-aziz-pairing-editor] [data-aziz-pairing-hint]{display:block;margin:8px 0}
    [data-aziz-pairing-controls]{display:grid;grid-template-columns:1fr 1fr auto;gap:8px;align-items:center}
    [data-aziz-pairing-controls] select{min-width:0;width:100%;border:1px solid rgba(148,163,184,.25);border-radius:9px;background:#080f22;color:#e2e8f0;padding:8px;font-size:11px;font-weight:700}
    [data-aziz-pairing-save],[data-aziz-pairing-reset]{border:1px solid rgba(99,102,241,.3);border-radius:9px;background:rgba(67,56,202,.25);color:#c7d2fe;padding:8px 10px;font-size:11px;font-weight:800;cursor:pointer}
    [data-aziz-pairing-reset]{border-color:rgba(244,63,94,.35);background:rgba(127,29,29,.18);color:#fda4af}
    [data-aziz-pairing-save]:hover,[data-aziz-pairing-reset]:hover{filter:brightness(1.2)}
    [data-aziz-pairing-save]:disabled,[data-aziz-pairing-reset]:disabled{cursor:wait;opacity:.55}
    [data-aziz-pairing-hint]{color:#94a3b8;font-size:10px;font-weight:700}
    @media(max-width:520px){[data-aziz-pairing-controls]{grid-template-columns:1fr 1fr}[data-aziz-pairing-save]{grid-column:1/-1}}
  `
  document.head.append(style)
}

const install = async () => {
  if (window[PAIRING_RESET_STATE]) return
  const state = window[PAIRING_RESET_STATE] = { matches: [], loaded: false }
  installStyles()

  const addButtons = () => {
    if (!state.loaded || !isCentralView()) return
    const cards = [...document.querySelectorAll('.glass-card, .glass-panel')]
    state.matches.forEach((match) => {
      if (!canEditPairing(match)) return
      const card = cards
        .filter((candidate) => !candidate.dataset.azizMatchCard
          && !candidate.querySelector('[data-aziz-match-card]')
          && cardMatches(candidate, match))
        .sort((left, right) => left.textContent.length - right.textContent.length)[0]
      if (!card) return
      card.dataset.azizMatchCard = match.id
      const wrap = document.createElement('div')
      wrap.dataset.azizPairingResetWrap = 'true'
      const editor = document.createElement('details')
      editor.dataset.azizPairingEditor = 'true'
      editor.open = !match.team_a_color_id || !match.team_b_color_id
      const editorLabel = document.createElement('summary')
      editorLabel.textContent = '🛠️ จับคู่ใหม่ / แก้ไขคู่'
      editor.append(editorLabel)
      const controls = document.createElement('div')
      controls.dataset.azizPairingControls = 'true'
      const makeSelect = (label, selectedId) => {
        const select = document.createElement('select')
        select.setAttribute('aria-label', label)
        const placeholder = document.createElement('option')
        placeholder.value = ''
        placeholder.textContent = label
        select.append(placeholder)
        match.available_colors.forEach((color) => {
          const option = document.createElement('option')
          option.value = color.id
          option.textContent = color.name
          option.selected = color.id === selectedId
          select.append(option)
        })
        return select
      }
      const teamASelect = makeSelect('เลือกทีม A', match.team_a_color_id)
      const teamBSelect = makeSelect('เลือกทีม B', match.team_b_color_id)
      const saveButton = document.createElement('button')
      saveButton.type = 'button'
      saveButton.dataset.azizPairingSave = match.id
      saveButton.textContent = 'บันทึกคู่ใหม่'
      saveButton.disabled = !teamASelect.value || !teamBSelect.value || teamASelect.value === teamBSelect.value
      const updateSaveState = () => {
        saveButton.disabled = !teamASelect.value || !teamBSelect.value || teamASelect.value === teamBSelect.value
      }
      teamASelect.addEventListener('change', updateSaveState)
      teamBSelect.addEventListener('change', updateSaveState)
      saveButton.addEventListener('click', async (event) => {
        event.preventDefault()
        event.stopPropagation()
        if (!teamASelect.value || !teamBSelect.value || teamASelect.value === teamBSelect.value) return
        const password = centralPassword()
        if (!password) return
        saveButton.disabled = true
        saveButton.textContent = 'กำลังบันทึก...'
        try {
          await callUpdatePairing(password, match.id, teamASelect.value, teamBSelect.value)
          sessionStorage.setItem('aziz_central_result_password', password)
          sessionStorage.setItem('aziz_central_result_unlocked', 'true')
          window.location.reload()
        } catch (error) {
          saveButton.disabled = false
          saveButton.textContent = 'บันทึกคู่ใหม่'
          window.alert(error?.message || 'บันทึกคู่แข่งขันใหม่ไม่สำเร็จ')
        }
      })
      const hint = document.createElement('span')
      hint.dataset.azizPairingHint = 'true'
      hint.textContent = match.available_colors.length
        ? 'เลือกสีทีม A และ B แล้วบันทึกคู่ใหม่'
        : 'ไม่พบสีทีมที่ตรงกับรายการนี้'
      if (!match.available_colors.length) {
        teamASelect.disabled = true
        teamBSelect.disabled = true
      }
      controls.append(teamASelect, teamBSelect, saveButton)
      editor.append(hint, controls)
      const button = document.createElement('button')
      button.type = 'button'
      button.dataset.azizPairingReset = match.id
      button.textContent = '↺ รีเซ็ตการประกบคู่'
      button.title = 'รีเซ็ตคู่นี้กลับเป็นรอแข่ง แล้วเลือกสีใหม่'
      button.hidden = !match.team_a_color_id && !match.team_b_color_id
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
      wrap.append(editor, button)
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

  let addButtonsScheduled = false
  const scheduleAddButtons = () => {
    if (addButtonsScheduled) return
    addButtonsScheduled = true
    window.setTimeout(() => {
      addButtonsScheduled = false
      addButtons()
    }, 0)
  }
  const observer = new MutationObserver(scheduleAddButtons)
  observer.observe(document.body, { childList: true, subtree: true })
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install, { once: true })
else install()
