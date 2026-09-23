import { supabase } from './supabase.js'

const APP_BASE = location.pathname.startsWith('/pp5online/') ? '/pp5online/' : '/'
const DEFAULT_LOGO = `${APP_BASE}pp5-form-logo.png`
const EVENT_ID = new URLSearchParams(location.search).get('event')
const POLL_MS = 20000

const state = {
  event: null,
  colors: [],
  sports: [],
  matches: [],
  totals: [],
  loading: true,
  error: '',
  connection: 'กำลังเชื่อมต่อ',
  lastUpdated: null,
  refreshTimer: null,
  channel: null,
  refreshQueued: false,
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

function teamById(id) {
  return state.colors.find(color => color.id === id) || null
}

function sportById(id) {
  return state.sports.find(sport => sport.id === id) || null
}

function eventName() {
  return state.event?.name || 'กีฬาสี 2569'
}

function totalsForGender(gender) {
  const source = state.colors.filter(color => color.gender === gender)
  return source.map(color => {
    const total = state.totals.find(row => row.team_color_id === color.id)
    return { ...color, ...(total || {}), grand_total: Number(total?.grand_total || 0) }
  }).sort((a, b) => Number(b.grand_total) - Number(a.grand_total) || Number(a.display_order) - Number(b.display_order))
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
  const rows = totalsForGender(gender)
  const title = `ตารางอันดับ${genderLabel(gender)}`
  const tone = gender === 'M' ? 'male' : 'female'
  return `<section class="panel ranking-panel ${tone}" aria-label="${title}">
    <div class="panel-heading">
      <span class="heading-icon" aria-hidden="true">🏆</span>
      <h2>${title}</h2>
    </div>
    <div class="ranking-head"><span>อันดับ</span><span>สี</span><span>ทีม</span><span>คะแนนรวม</span></div>
    <div class="ranking-list">
      ${rows.length ? rows.map((row, index) => `<div class="ranking-row">
        <strong class="rank-number">${index + 1}</strong>
        <span class="rank-color" style="--team-color:${esc(row.hex_color || '#64748b')}">${logo(row.logo_url, `โลโก้สี${row.name}`, 'rank-logo')}</span>
        <span class="team-name">สี${esc(row.name)}</span>
        <strong class="rank-points">${number(row.grand_total)}</strong>
      </div>`).join('') : '<div class="empty-state">ยังไม่มีคะแนน</div>'}
    </div>
    <div class="ranking-foot">คะแนนรวมจากผลการแข่งขันและคะแนนกิจกรรม</div>
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
        <span class="team-chip" style="--team-color:${esc(teamA?.hex_color || '#475569')}">${logo(teamA?.logo_url, `โลโก้สี${teamA?.name || ''}`, 'match-logo')}<b>สี${esc(teamA?.name || '—')}</b></span>
        ${score || '<span class="versus">VS</span>'}
        <span class="team-chip" style="--team-color:${esc(teamB?.hex_color || '#475569')}">${logo(teamB?.logo_url, `โลโก้สี${teamB?.name || ''}`, 'match-logo')}<b>สี${esc(teamB?.name || '—')}</b></span>
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
  return `<section class="panel competition-panel ${tone}" aria-label="${title}">
    <div class="panel-heading"><span class="heading-icon" aria-hidden="true">🏃</span><h2>${title}</h2></div>
    <div class="competition-list">${cards.length ? cards.map(match => renderMatchCard(match, gender)).join('') : '<div class="empty-state">ยังไม่มีรายการแข่งขัน</div>'}</div>
  </section>`
}

function renderHeader() {
  const logoUrl = state.event?.cover_image_url || DEFAULT_LOGO
  const liveClass = state.connection === 'SUBSCRIBED' || state.connection === 'เชื่อมต่อแล้ว' ? 'connected' : ''
  return `<header class="live-header">
    <div class="brand-lockup">${logo(logoUrl, 'โลโก้กีฬาสี', 'event-logo')}<div><div class="brand-title">AZIZGAMES <em>LIVE</em></div><div class="route-label">/azizgames-live</div></div></div>
    <div class="event-title"><h1>${esc(eventName())}</h1><p>กีฬาสีออนไลน์ · หน้าจอถ่ายทอดสด</p></div>
    <div class="header-actions"><span class="connection ${liveClass}"><i></i>${esc(state.connection)}</span><a href="${asset('azizgames.html')}" target="_blank" rel="noopener">ระบบกีฬาสีหลัก ↗</a><a href="${asset('azizgames.html?tab=gallery')}" target="_blank" rel="noopener" class="gallery-link">📸 แกลเลอรี ↗</a></div>
  </header>`
}

function renderFooter() {
  return `<footer class="live-footer"><span><i class="footer-dot"></i>กำลังแสดงข้อมูลล่าสุด</span><span>อัปเดต ${formatUpdated(state.lastUpdated)} น. · ${esc(state.connection)}</span><span>${esc(eventName())}</span></footer>`
}

function render() {
  if (!root) return
  if (state.loading) {
    root.innerHTML = '<div class="loading-screen"><div class="loading-spinner"></div><p>กำลังเชื่อมต่อข้อมูลกีฬาสี...</p></div>'
    return
  }
  if (state.error) {
    root.innerHTML = `<div class="error-screen"><div class="error-card"><h1>AZIZGAMES LIVE</h1><p>${esc(state.error)}</p><button type="button" id="retry-load">ลองเชื่อมต่อใหม่</button></div></div>`
    root.querySelector('#retry-load')?.addEventListener('click', loadData)
    return
  }
  root.innerHTML = `${renderHeader()}<div class="live-grid">${renderRanking('M')}${renderCompetition('M')}${renderCompetition('W')}${renderRanking('W')}</div>${renderFooter()}`
}

async function queryData() {
  let eventQuery = supabase.from('events').select('id,name,academic_year,start_date,end_date,status,cover_image_url,description,updated_at').order('academic_year', { ascending: false }).order('created_at', { ascending: false }).limit(1)
  if (EVENT_ID) eventQuery = supabase.from('events').select('id,name,academic_year,start_date,end_date,status,cover_image_url,description,updated_at').eq('id', EVENT_ID).limit(1)
  const { data: events, error: eventError } = await eventQuery
  if (eventError) throw eventError
  const event = events?.[0]
  if (!event) throw new Error('ยังไม่พบกิจกรรมกีฬาสีที่เปิดใช้งาน')
  const [colors, sports, matches, totals] = await Promise.all([
    supabase.from('team_colors').select('id,event_id,name,gender,hex_color,text_color,logo_url,display_order').eq('event_id', event.id).order('display_order'),
    supabase.from('sports').select('id,event_id,code,name,category,gender,venue,is_active,display_order').eq('event_id', event.id).order('display_order').order('name'),
    supabase.from('matches').select('id,event_id,sport_id,round,round_name,team_a_color_id,team_b_color_id,score_a,score_b,winner_team_color_id,scheduled_date,scheduled_time,venue,note,status,updated_at').eq('event_id', event.id).order('scheduled_date').order('scheduled_time'),
    supabase.from('color_totals').select('*').eq('event_id', event.id),
  ])
  for (const result of [colors, sports, matches, totals]) if (result.error) throw result.error
  state.event = event
  state.colors = colors.data || []
  state.sports = sports.data || []
  state.matches = matches.data || []
  state.totals = totals.data || []
  state.lastUpdated = new Date().toISOString()
}

async function loadData() {
  state.loading = true
  state.error = ''
  render()
  try {
    await queryData()
  } catch (error) {
    console.error('AZIZGAMES LIVE load failed:', error)
    state.error = 'โหลดข้อมูลกีฬาสีไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อแล้วลองใหม่'
  } finally {
    state.loading = false
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
  const tables = ['events', 'team_colors', 'sports', 'matches', 'color_scores', 'medal_awards']
  tables.forEach(table => {
    const filter = table === 'events' ? `id=eq.${eventId}` : `event_id=eq.${eventId}`
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

async function init() {
  await loadData()
  if (!state.error) {
    subscribeRealtime()
    startPolling()
  }
}

window.addEventListener('beforeunload', () => {
  window.clearInterval(state.refreshTimer)
  if (state.channel) supabase.removeChannel(state.channel)
})

init()
