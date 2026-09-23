import { supabase } from './supabase.js'

const APP_BASE = location.pathname.startsWith('/pp5online/') ? '/pp5online/' : '/'
const EVENT_ID = new URLSearchParams(location.search).get('event')
const POLL_MS = 20000
const RANKING_SLIDE_MS = 8000
const RANKING_CATEGORY_DEFS = [
  { key: 'sports_total', label: 'คะแนนกีฬา (สากล + กรีฑา)', icon: '🏃' },
  { key: 'folk_skill_total', label: 'กีฬาพื้นบ้าน / ทักษะ', icon: '🎯' },
  { key: 'parade_total', label: 'พาเหรด (สวนสนาม)', icon: '🕌' },
  { key: 'page_total', label: 'เพจ Facebook', icon: '📣' },
  { key: 'ibadat_total', label: 'คะแนนอีบาดัต', icon: '🕋' },
  { key: 'grand_total', label: 'คะแนนรวมทั้งหมด', icon: '🏆' },
]

const state = {
  event: null,
  colors: [],
  sports: [],
  matches: [],
  totals: [],
  eventLogo: '',
  loading: true,
  error: '',
  connection: 'กำลังเชื่อมต่อ',
  lastUpdated: null,
  refreshTimer: null,
  channel: null,
  refreshQueued: false,
  domReady: false,
  rankingCategoryIndex: RANKING_CATEGORY_DEFS.length - 1,
  rankingSlideTimer: null,
}

const root = document.getElementById('azizgames-live')

const esc = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

const asset = path => `${APP_BASE}${String(path).replace(/^\//, '')}`
const number = value => {
  const rounded = Math.round(Number(value || 0) * 100) / 100
  return rounded.toLocaleString('th-TH', { maximumFractionDigits: 2 })
}
const genderLabel = gender => gender === 'W' ? 'หญิง' : 'ชาย'
const categoryLabel = category => ({
  sport: 'กีฬาสากล',
  academic: 'วิชาการ',
  parade: 'ขบวนพาเหรด',
  page: 'เชียร์และแปรอักษร',
  other: 'อื่น ๆ',
})[category] || category || 'การแข่งขัน'

function formatTime(value) {
  if (!value) return '—'
  const match = String(value).match(/(\d{1,2}):(\d{2})/)
  return match ? `${match[1].padStart(2, '0')}:${match[2]}` : String(value).slice(0, 5)
}

function formatUpdated(value) {
  if (!value) return 'ยังไม่มีข้อมูลล่าสุด'
  return new Date(value).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
}

function logo(url, alt, className = 'team-logo') {
  if (!url) return ''
  return `<img class="${className}" src="${esc(url)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">`
}

function teamLogo(team, className = 'team-logo') {
  if (!team) return ''
  if (team?.logo_url) return logo(team.logo_url, `โลโก้สี${team.name || ''}`, className)
  return `<span class="${className} logo-fallback">${esc(String(team?.name || 'สี').slice(0, 1))}</span>`
}

function teamById(id) {
  return state.colors.find(color => color.id === id) || null
}

function sportById(id) {
  return state.sports.find(sport => sport.id === id) || null
}

function eventName() {
  return state.event?.name || 'กีฬาสี 2569'
}

function rankingRowsForGender(gender, categoryKey) {
  const source = state.colors.filter(color => color.gender === gender)
  return source.map(color => {
    const total = state.totals.find(row => row.team_color_id === color.id)
    return { ...color, ...(total || {}), grand_total: Number(total?.grand_total || 0) }
  }).sort((a, b) => Number(b[categoryKey] || 0) - Number(a[categoryKey] || 0) || Number(a.display_order) - Number(b.display_order))
}

function matchesForGender(gender) {
  const matches = state.matches.filter(match => {
    const sport = sportById(match.sport_id)
    return sport && (sport.gender === gender || sport.gender === 'Coed' || !sport.gender)
  })
  return [...matches].sort((a, b) => {
    const rank = { live: 0, pending: 1, done: 2, cancelled: 3 }
    return (rank[a.status] ?? 4) - (rank[b.status] ?? 4)
      || `${a.scheduled_date || ''} ${a.scheduled_time || ''}`.localeCompare(`${b.scheduled_date || ''} ${b.scheduled_time || ''}`)
  })
}

function sportsWithoutMatches(gender) {
  return state.sports.filter(sport => sport.is_active !== false && (sport.gender === gender || sport.gender === 'Coed' || !sport.gender))
    .slice(0, 3)
    .map(sport => ({ id: sport.id, sport_id: sport.id, status: 'pending', note: 'รอผล/ตารางแข่งขัน' }))
}

function statusMeta(status) {
  if (status === 'live') return { label: 'กำลังแข่งขัน', className: 'status-live', icon: '●' }
  if (status === 'done') return { label: 'ผลล่าสุด', className: 'status-done', icon: '▮' }
  if (status === 'cancelled') return { label: 'ยกเลิก', className: 'status-cancelled', icon: '×' }
  return { label: 'รายการถัดไป', className: 'status-next', icon: '◷' }
}

function renderRanking(gender) {
  const category = RANKING_CATEGORY_DEFS[state.rankingCategoryIndex] || RANKING_CATEGORY_DEFS.at(-1)
  const rows = rankingRowsForGender(gender, category.key)
  const title = `ตารางอันดับ${genderLabel(gender)}`
  const tone = gender === 'M' ? 'male' : 'female'
  return `<section class="panel ranking-panel ${tone}" data-ranking-gender="${gender}" aria-label="${title} ${category.label}">
    <div class="panel-heading">
      <span class="heading-icon" aria-hidden="true">🏆</span>
      <div><h2>${title}</h2><p class="ranking-category"><span>${category.icon}</span>${esc(category.label)} <small>หมวด ${state.rankingCategoryIndex + 1}/${RANKING_CATEGORY_DEFS.length}</small></p></div>
    </div>
    <div class="ranking-head"><span>อันดับ</span><span>สี</span><span>ทีม</span><span>คะแนน</span></div>
    <div class="ranking-list">
      ${rows.length ? rows.map((row, index) => `<div class="ranking-row">
        <strong class="rank-number">${index + 1}</strong>
        <span class="rank-color" style="--team-color:${esc(row.hex_color || '#64748b')}">${teamLogo(row, 'rank-logo')}</span>
        <span class="team-name">สี${esc(row.name)}</span>
        <strong class="rank-points">${number(row[category.key])}</strong>
      </div>`).join('') : '<div class="empty-state">ยังไม่มีคะแนน</div>'}
    </div>
    <div class="ranking-dots" aria-label="หมวดคะแนน">${RANKING_CATEGORY_DEFS.map((item, index) => `<i class="${index === state.rankingCategoryIndex ? 'active' : ''}" title="${esc(item.label)}"></i>`).join('')}</div>
    <div class="ranking-foot">อันดับตามหมวดคะแนนที่กำลังแสดง</div>
  </section>`
}

function renderMatchCard(match, gender) {
  const sport = sportById(match.sport_id) || {}
  const meta = statusMeta(match.status)
  const teamA = teamById(match.team_a_color_id)
  const teamB = teamById(match.team_b_color_id)
  const venue = match.venue || sport.venue || 'ยังไม่ระบุสนาม'
  const isDone = match.status === 'done'
  const score = isDone && (match.score_a != null || match.score_b != null)
    ? `<span class="match-score">${esc(match.score_a ?? '—')} : ${esc(match.score_b ?? '—')}</span>`
    : ''
  const teams = teamA || teamB
    ? `<div class="match-teams">
        <span class="team-chip" style="--team-color:${esc(teamA?.hex_color || '#475569')}">${teamLogo(teamA, 'match-logo')}<b>สี${esc(teamA?.name || '—')}</b></span>
        ${score || '<span class="versus">VS</span>'}
        <span class="team-chip" style="--team-color:${esc(teamB?.hex_color || '#475569')}">${teamLogo(teamB, 'match-logo')}<b>สี${esc(teamB?.name || '—')}</b></span>
      </div>`
    : '<div class="no-team">รอประกาศคู่แข่งขัน</div>'
  return `<article class="match-card ${meta.className}">
    <div class="match-topline"><span class="status-badge"><i>${meta.icon}</i>${meta.label}</span><span class="venue">📍 ${esc(venue)}</span></div>
    <div class="match-title"><span class="sport-icon">${sport.category === 'academic' ? '📚' : sport.category === 'parade' ? '🎉' : '🏃'}</span><div><h3>${esc(sport.name || 'รายการแข่งขัน')}</h3><p>${esc(categoryLabel(sport.category))} · ${genderLabel(gender)}</p></div></div>
    ${teams}
    <div class="match-time">${match.scheduled_time ? `เวลา ${formatTime(match.scheduled_time)}` : meta.label}</div>
  </article>`
}

function renderCompetition(gender) {
  const title = `รายการแข่งขัน${genderLabel(gender)}`
  const tone = gender === 'M' ? 'male' : 'female'
  const matches = matchesForGender(gender)
  const cards = matches.length ? matches.slice(0, 3) : sportsWithoutMatches(gender)
  return `<section class="panel competition-panel ${tone}" data-competition-gender="${gender}" aria-label="${title}">
    <div class="panel-heading"><span class="heading-icon" aria-hidden="true">🏃</span><h2>${title}</h2></div>
    <div class="competition-list">${cards.length ? cards.map(match => renderMatchCard(match, gender)).join('') : '<div class="empty-state">ยังไม่มีรายการแข่งขัน</div>'}</div>
  </section>`
}

function renderHeader() {
  const liveClass = state.connection === 'SUBSCRIBED' || state.connection === 'เชื่อมต่อแล้ว' ? 'connected' : ''
  const eventLogo = state.eventLogo
    ? logo(state.eventLogo, 'โลโก้ประจำงาน AZIZGAMES', 'event-logo')
    : '<span class="event-logo event-logo-fallback" aria-label="โลโก้ประจำงาน">🏆</span>'
  return `<header class="live-header">
    <div class="brand-lockup">${eventLogo}<div><div class="brand-title">AZIZGAMES <em>LIVE</em></div><div class="route-label">/azizgames-live</div></div></div>
    <div class="event-title"><h1>${esc(eventName())}</h1><p>กีฬาสีออนไลน์ · หน้าจอถ่ายทอดสด</p></div>
    <div class="header-actions"><span class="connection ${liveClass}"><i></i>${esc(state.connection)}</span><a href="${asset('azizgames.html')}" target="_blank" rel="noopener">ระบบกีฬาสีหลัก ↗</a><a href="${asset('azizgames.html?tab=gallery')}" target="_blank" rel="noopener" class="gallery-link">📸 แกลเลอรี ↗</a></div>
  </header>`
}

function renderFooter() {
  return `<footer class="live-footer"><span><i class="footer-dot"></i>กำลังแสดงข้อมูลล่าสุด</span><span>อัปเดต ${formatUpdated(state.lastUpdated)} น. · ${esc(state.connection)}</span><span>${esc(eventName())}</span></footer>`
}

function renderLiveShell() {
  root.innerHTML = `${renderHeader()}<div class="live-grid" data-live-grid>${renderRanking('M')}${renderCompetition('M')}${renderCompetition('W')}${renderRanking('W')}</div>${renderFooter()}`
  state.domReady = true
}

function fragmentFrom(html) {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = html
  return wrapper.firstElementChild
}

function updateLiveDom({ animateRanking = false } = {}) {
  if (!root || !state.domReady) return
  const nextHeader = fragmentFrom(renderHeader())
  const currentHeader = root.querySelector('.live-header')
  if (nextHeader && currentHeader) currentHeader.innerHTML = nextHeader.innerHTML

  for (const gender of ['M', 'W']) {
    const currentRanking = root.querySelector(`[data-ranking-gender="${gender}"]`)
    const nextRanking = fragmentFrom(renderRanking(gender))
    if (currentRanking && nextRanking) {
      currentRanking.innerHTML = nextRanking.innerHTML
      currentRanking.classList.toggle('category-slide', animateRanking)
      if (animateRanking) window.setTimeout(() => currentRanking.classList.remove('category-slide'), 550)
    }

    const currentCompetition = root.querySelector(`[data-competition-gender="${gender}"]`)
    const nextCompetition = fragmentFrom(renderCompetition(gender))
    if (currentCompetition && nextCompetition) {
      const nextList = nextCompetition.querySelector('.competition-list')
      const currentList = currentCompetition.querySelector('.competition-list')
      if (nextList && currentList) currentList.innerHTML = nextList.innerHTML
    }
  }

  const nextFooter = fragmentFrom(renderFooter())
  const currentFooter = root.querySelector('.live-footer')
  if (nextFooter && currentFooter) currentFooter.innerHTML = nextFooter.innerHTML
}

function render() {
  if (!root) return
  if (state.loading && !state.domReady) {
    root.innerHTML = '<div class="loading-screen"><div class="loading-spinner"></div><p>กำลังเชื่อมต่อข้อมูลกีฬาสี...</p></div>'
    return
  }
  if (state.error && !state.domReady) {
    root.innerHTML = `<div class="error-screen"><div class="error-card"><h1>AZIZGAMES LIVE</h1><p>${esc(state.error)}</p><button type="button" id="retry-load">ลองเชื่อมต่อใหม่</button></div></div>`
    root.querySelector('#retry-load')?.addEventListener('click', loadData)
    return
  }
  if (!state.domReady) renderLiveShell()
  else updateLiveDom()
}

async function queryData() {
  let eventQuery = supabase.from('events').select('id,name,academic_year,start_date,end_date,status,description,updated_at').order('academic_year', { ascending: false }).order('created_at', { ascending: false }).limit(1)
  if (EVENT_ID) eventQuery = supabase.from('events').select('id,name,academic_year,start_date,end_date,status,description,updated_at').eq('id', EVENT_ID).limit(1)
  const { data: events, error: eventError } = await eventQuery
  if (eventError) throw eventError
  const event = events?.[0]
  if (!event) throw new Error('ยังไม่พบกิจกรรมกีฬาสีที่เปิดใช้งาน')
  const [colors, sports, matches, totals, assets] = await Promise.all([
    supabase.from('team_colors').select('id,event_id,name,gender,hex_color,text_color,logo_url,display_order').eq('event_id', event.id).order('display_order'),
    supabase.from('sports').select('id,event_id,code,name,category,gender,venue,is_active,display_order').eq('event_id', event.id).order('display_order').order('name'),
    supabase.from('matches').select('id,event_id,sport_id,round,round_name,team_a_color_id,team_b_color_id,score_a,score_b,winner_team_color_id,scheduled_date,scheduled_time,venue,note,status,updated_at').eq('event_id', event.id).order('scheduled_date').order('scheduled_time'),
    supabase.from('color_totals').select('*').eq('event_id', event.id),
    supabase.from('settings').select('value').eq('key', 'azizgames_system_assets').maybeSingle(),
  ])
  for (const result of [colors, sports, matches, totals, assets]) if (result.error) throw result.error
  state.event = event
  state.colors = colors.data || []
  state.sports = sports.data || []
  state.matches = matches.data || []
  state.totals = totals.data || []
  state.eventLogo = assets.data?.value?.logos?.main || ''
  state.lastUpdated = new Date().toISOString()
}

async function loadData() {
  const firstLoad = !state.domReady && !state.event
  if (firstLoad) {
    state.loading = true
    state.error = ''
    render()
  }
  try {
    await queryData()
    state.error = ''
  } catch (error) {
    console.error('AZIZGAMES LIVE load failed:', error)
    if (firstLoad) state.error = 'โหลดข้อมูลกีฬาสีไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อแล้วลองใหม่'
  } finally {
    if (firstLoad) state.loading = false
    render()
  }
}

function queueRealtimeRefresh() {
  if (state.refreshQueued) return
  state.refreshQueued = true
  window.setTimeout(async () => {
    state.refreshQueued = false
    await loadData()
  }, 350)
}

function subscribeRealtime() {
  if (!state.event?.id) return
  const eventId = state.event.id
  const channel = supabase.channel(`azizgames-live-${eventId}`)
  const tables = ['events', 'team_colors', 'sports', 'matches', 'color_scores', 'medal_awards', 'settings']
  tables.forEach(table => {
    const filter = table === 'events'
      ? `id=eq.${eventId}`
      : table === 'settings'
        ? 'key=eq.azizgames_system_assets'
        : `event_id=eq.${eventId}`
    channel.on('postgres_changes', { event: '*', schema: 'public', table, filter }, queueRealtimeRefresh)
  })
  state.channel = channel
  channel.subscribe(status => {
    state.connection = status
    render()
  })
}

function startPolling() {
  window.clearInterval(state.refreshTimer)
  state.refreshTimer = window.setInterval(() => {
    if (!document.hidden) loadData()
  }, POLL_MS)
}

function startRankingSlideshow() {
  window.clearInterval(state.rankingSlideTimer)
  state.rankingSlideTimer = window.setInterval(() => {
    if (document.hidden || !state.domReady) return
    state.rankingCategoryIndex = (state.rankingCategoryIndex + 1) % RANKING_CATEGORY_DEFS.length
    updateLiveDom({ animateRanking: true })
  }, RANKING_SLIDE_MS)
}

async function init() {
  await loadData()
  if (!state.error) {
    subscribeRealtime()
    startPolling()
    startRankingSlideshow()
  }
}

window.addEventListener('beforeunload', () => {
  window.clearInterval(state.refreshTimer)
  window.clearInterval(state.rankingSlideTimer)
  if (state.channel) supabase.removeChannel(state.channel)
})

init()
