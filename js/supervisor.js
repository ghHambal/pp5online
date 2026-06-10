// ─── Supervisor Dashboard ──────────────────────────────────────────────────────
import {
  getSupervisorProgress, getDepartments,
  getSupervisorComments, addSupervisorComment, deleteSupervisorComment,
  addSupervisorCommentWithNotify, getCommentPhrases,
  getAttendanceSummaryByClass, getScoreSummaryByClass,
  getClassStudentsAndScores, getClassAttendanceFull,
  assignTeacherToDept,
  getMySchedule, getPeriods, getSystemConfig,
  getWorkCalendarEvents,
} from './api.js'

let _phrases = {}  // cache: { metric: [phrase, ...] }

async function _loadPhrases(metric) {
  if (_phrases[metric]) return _phrases[metric]
  const list = await getCommentPhrases(metric).catch(() => [])
  _phrases[metric] = list.map(p => p.phrase)
  return _phrases[metric]
}
import { openPP5Doc } from './pp5-doc.js'

// ── inject styles once ────────────────────────────────────────────────────────
;(() => {
  if (document.getElementById('sv-styles')) return
  const s = document.createElement('style')
  s.id = 'sv-styles'
  s.textContent = `
    .sv-tab-btn{padding:6px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;font-size:12px;cursor:pointer;font-family:inherit;}
    .sv-tab-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8;}
    .sv-tab-btn:hover:not(.active){background:#f3f4f6;}
    @media(min-width:640px){.sv-donuts{grid-template-columns:repeat(4,1fr)!important;}}
    .sv-metric-card{border-radius:12px;padding:14px 16px;cursor:pointer;transition:box-shadow .15s;border:1.5px solid transparent;}
    .sv-metric-card:hover{box-shadow:0 4px 12px rgba(0,0,0,.12);border-color:#6366f1;}
    .sv-row:hover{background:#f9fafb;}
    .sv-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9000;display:flex;align-items:center;justify-content:center;}
    .sv-popup{background:#fff;border-radius:16px;width:min(560px,96vw);max-height:80vh;overflow-y:auto;padding:24px;position:relative;}
    .sv-cls-row{display:flex;justify-content:space-between;align-items:center;padding:8px 10px;border-radius:8px;margin-bottom:4px;background:#f9fafb;font-size:13px;}
    .sv-cls-row:hover{background:#e0f2fe;cursor:pointer;}
  `
  document.head.appendChild(s)
})()

// ── helpers ───────────────────────────────────────────────────────────────────
const POS_LABEL = {
  dept_head:           'หัวหน้ากลุ่มสาระ',
  religion_group_head: 'หัวหน้ากลุ่ม (ศาสนา)',
  registrar_samai:     'หัวหน้าฝ่ายทะเบียน (สามัญ)',
  registrar_religion:  'หัวหน้าฝ่ายทะเบียน (ศาสนา)',
  registrar_pvch:      'หัวหน้าฝ่ายทะเบียน (ปวช)',
  academic_samai:      'หัวหน้าวิชาการสามัญ',
  academic_religion:   'หัวหน้าวิชาการศาสนา',
  academic_pvch:       'หัวหน้าวิชาการปวช',
  house_color_admin:   'ผู้รับผิดชอบสีนักเรียน',
}

function _badge(s) {
  const m = { ok:['#d1fae5','#065f46','✓'], warn:['#fef3c7','#92400e','⚠'], none:['#fee2e2','#991b1b','✗'], na:['#f3f4f6','#6b7280','–'] }
  const [bg,fg,ic] = m[s]??m.na
  return `<span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:700;background:${bg};color:${fg};">${ic}</span>`
}
function _donut(pct, color, label, sub) {
  const r=36,c=44,circ=2*Math.PI*r,dash=(pct/100)*circ
  return `<div style="text-align:center;">
    <svg width="88" height="88" viewBox="0 0 88 88">
      <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="#e5e7eb" stroke-width="10"/>
      <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${color}" stroke-width="10"
        stroke-dasharray="${dash.toFixed(1)} ${circ.toFixed(1)}"
        stroke-dashoffset="${(circ/4).toFixed(1)}"
        stroke-linecap="round" transform="rotate(-90 ${c} ${c})"/>
      <text x="${c}" y="${c}" text-anchor="middle" dominant-baseline="middle"
        style="font-size:14px;font-weight:700;fill:#111;">${pct}%</text>
    </svg>
    <div style="font-size:12px;font-weight:600;color:#374151;margin-top:2px;">${label}</div>
    <div style="font-size:11px;color:#6b7280;">${sub}</div>
  </div>`
}

// ── role filter ───────────────────────────────────────────────────────────────
function _filterByRole(metrics, teacher) {
  const positions = teacher.positions?.length ? teacher.positions : [teacher.position].filter(Boolean)
  if (!positions.length) return metrics

  let filteredMetrics = []
  let hasMatchingRole = false

  for (const p of positions) {
    if (p === 'dept_head') {
      hasMatchingRole = true
      filteredMetrics.push(...metrics.filter(m => m.dept === teacher.dept))
    }
    else if (p === 'religion_group_head') {
      hasMatchingRole = true
      filteredMetrics.push(...metrics.filter(m => ['AGM','AGMVOC'].includes(m.subject_group)))
    }
    else if (p === 'academic_samai' || p === 'registrar_samai') {
      hasMatchingRole = true
      filteredMetrics.push(...metrics.filter(m => !['AGM','AGMVOC','ACDMVOC'].includes(m.subject_group)))
    }
    else if (p === 'academic_religion' || p === 'registrar_religion') {
      hasMatchingRole = true
      filteredMetrics.push(...metrics.filter(m => ['AGM','AGMVOC'].includes(m.subject_group)))
    }
    else if (p === 'academic_pvch' || p === 'registrar_pvch') {
      hasMatchingRole = true
      filteredMetrics.push(...metrics.filter(m => m.subject_group === 'ACDMVOC'))
    }
  }

  if (!hasMatchingRole) return metrics

  // ล้างตัวซ้ำด้วย ID ของครู
  const seenIds = new Set()
  return filteredMetrics.filter(m => {
    if (seenIds.has(m.id)) return false
    seenIds.add(m.id)
    return true
  })
}

// ── dept tab key ──────────────────────────────────────────────────────────────
function _deptKey(m) { return m.dept ?? '—' }
function _deptName(code, metricsCtx) {
  if (!code || code === '—') return '—'
  const candidates = _depts.filter(x => x.dept_code === code)
  if (!candidates.length) return code
  if (candidates.length === 1) return `${candidates[0].dept_name} (${code})`
  // หากมีหลาย entry (เช่น SOC ทั้งสามัญและศาสนา) ใช้ category ของครูใน context เป็นตัวตัดสิน
  if (metricsCtx) {
    const ctxTeachers = metricsCtx.filter(m => _deptKey(m) === code)
    const dominantCat = ctxTeachers[0]?.category ?? null
    const match = candidates.find(d => d.category === dominantCat)
    if (match) return `${match.dept_name} (${code})`
  }
  return `${candidates[0].dept_name} (${code})`
}

// ── sort state ────────────────────────────────────────────────────────────────
let _sortCol = null   // 'name' | 'dept' | 'profile' | 'dates' | 'att' | 'score' | 'schedule'
let _sortDir = 1      // 1 = asc, -1 = desc
let _searchQ = ''

// ─── Main render ──────────────────────────────────────────────────────────────
let _allMetrics = []
let _selfTeacher = null
let _depts = []
let _svContainer = null
let _isAdminView = false

export async function renderSupervisorDashboard(container, teacher, isAdmin = false) {
  _selfTeacher = teacher
  _svContainer = container
  _isAdminView = isAdmin
  const activePositions = teacher.positions?.length ? teacher.positions : [teacher.position].filter(Boolean)
  const labels = activePositions.map(p => POS_LABEL[p] ?? 'หัวหน้า').join(', ')
  const roleLabel = isAdmin ? 'แอดมิน (ดูทั้งหมด)' : (labels || 'หัวหน้า')
  container.innerHTML = `<div id="sv-root" style="padding:20px;max-width:1100px;margin:0 auto;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      <div>
        <h2 style="font-size:18px;font-weight:700;margin:0;">Dashboard ติดตามความคืบหน้า</h2>
        <p style="color:#6b7280;font-size:13px;margin:2px 0 0;">${roleLabel}${teacher.dept&&!isAdmin?' — '+teacher.dept:''}<span style="color:#9ca3af;"> — ${teacher.full_name}</span></p>
      </div>
    </div>
    <div id="sv-loading" style="text-align:center;padding:40px;color:#6b7280;">⏳ กำลังโหลดข้อมูล...</div>
    <div id="sv-dash" style="display:none;"></div>
  </div>`

  try {
    ;[_allMetrics, _depts] = await Promise.all([getSupervisorProgress(), getDepartments()])
    const metrics = isAdmin ? _allMetrics : _filterByRole(_allMetrics, teacher)
    document.getElementById('sv-loading').style.display = 'none'
    _renderDashboard(document.getElementById('sv-dash'), metrics, teacher)
  } catch(e) {
    document.getElementById('sv-loading').innerHTML = `<div style="color:#dc2626;">โหลดไม่สำเร็จ: ${e.message}</div>`
  }
}

function _renderDashboard(el, metrics, teacher) {
  const n = metrics.length
  const pP  = n ? Math.round(metrics.filter(m=>m.profileStatus==='ok').length/n*100) : 0
  const pA  = n ? Math.round(metrics.filter(m=>m.attStatus==='ok').length/n*100) : 0
  const pS  = n ? Math.round(metrics.filter(m=>m.scoreStatus==='ok').length/n*100) : 0
  const pSc = n ? Math.round(metrics.filter(m=>m.scheduleStatus==='ok').length/n*100) : 0

  const activePositions = teacher.positions?.length ? teacher.positions : [teacher.position].filter(Boolean)
  const hasDeptHead = activePositions.includes('dept_head')
  const hasOtherRoles = activePositions.some(p => p !== 'dept_head')
  const showTabs = !hasDeptHead || hasOtherRoles
  const deptKeys = [...new Set(metrics.map(_deptKey))].sort()

  el.style.display = ''
  el.innerHTML = `
    <!-- Donuts -->
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:24px;" class="sv-donuts">
      ${['#6366f1','#f59e0b','#0ea5e9','#10b981'].map((c,i)=>`
        <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;padding:16px;display:flex;justify-content:center;">
          ${_donut([pP,pSc,pA,pS][i],c,['โปรไฟล์ครู','ตารางสอน','เช็คชื่อ (ทันปัจจุบัน)','ลงคะแนน'][i],
            `${metrics.filter(m=>[m.profileStatus,m.scheduleStatus,m.attStatus,m.scoreStatus][i]==='ok').length}/${n} คน`)}
        </div>`).join('')}
    </div>
    <!-- Dept tabs + add member button -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px;">
      ${showTabs?`<div style="display:flex;gap:6px;flex-wrap:wrap;" id="sv-tabs">
        <button class="sv-tab-btn active" data-dept="">ทั้งหมด (${n})</button>
        ${deptKeys.map(d=>`<button class="sv-tab-btn" data-dept="${d}">${_deptName(d, metrics)} (${metrics.filter(m=>_deptKey(m)===d).length})</button>`).join('')}
      </div>`:'<div></div>'}
      ${hasDeptHead?`
        <button id="sv-add-member"
          style="margin-left:auto;padding:6px 14px;border:1.5px dashed #6366f1;border-radius:20px;background:#f5f3ff;color:#6366f1;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap;">
          + เพิ่มสมาชิกกลุ่ม
        </button>`:''}
    </div>
    <!-- Search -->
    <div style="margin-bottom:12px;">
      <input id="sv-search" type="text" placeholder="🔍 ค้นหาชื่อ รหัส กลุ่มสาระ สถานะ..."
        value="${_searchQ}"
        style="width:100%;box-sizing:border-box;padding:8px 14px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:13px;font-family:inherit;outline:none;transition:border-color .15s;"
        onfocus="this.style.borderColor='#6366f1'" onblur="this.style.borderColor='#e5e7eb'"/>
    </div>
    <!-- Table -->
    <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;" id="sv-tbl">
      ${_table(_applyFilter(metrics))}
    </div>`

  // tab events
  let _activeDept = ''
  el.querySelectorAll('.sv-tab-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      el.querySelectorAll('.sv-tab-btn').forEach(x=>x.classList.remove('active'))
      b.classList.add('active')
      _activeDept = b.dataset.dept
      document.getElementById('sv-tbl').innerHTML = _table(_applyFilter(_activeDept ? metrics.filter(m=>_deptKey(m)===_activeDept) : metrics))
      _bindTable(el, metrics)
    })
  })

  // search
  el.querySelector('#sv-search')?.addEventListener('input', e => {
    _searchQ = e.target.value
    const base = _activeDept ? metrics.filter(m=>_deptKey(m)===_activeDept) : metrics
    document.getElementById('sv-tbl').innerHTML = _table(_applyFilter(base))
    _bindTable(el, metrics)
  })

  _bindTable(el, metrics)

  // เพิ่มสมาชิกกลุ่ม — เฉพาะ dept_head
  el.querySelector('#sv-add-member')?.addEventListener('click', () => _showAddMemberModal(teacher))
}

async function _showAddMemberModal(teacher) {
  const overlay = _makeOverlay()
  overlay.innerHTML = `<div class="sv-popup">
    <button style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;" onclick="this.closest('.sv-overlay').remove()">✕</button>
    <h3 style="font-size:15px;font-weight:700;margin-bottom:4px;">+ เพิ่มสมาชิกกลุ่ม${teacher.dept?' '+teacher.dept:''}</h3>
    <p style="font-size:12px;color:#6b7280;margin-bottom:12px;">เลือกครูที่ยังไม่ได้ระบุกลุ่มสาระเพื่อเพิ่มเข้ากลุ่ม</p>
    <div id="sv-unassigned-list">⏳ กำลังโหลด...</div>
  </div>`
  document.body.appendChild(overlay)
  overlay.addEventListener('click', e => { if(e.target===overlay) overlay.remove() })

  // โหลดครูที่ยัง dept ว่าง
  const unassigned = _allMetrics.filter(m => !m.dept && m.id !== _selfTeacher?.id)
  const el = overlay.querySelector('#sv-unassigned-list')
  if (!unassigned.length) {
    el.innerHTML = '<div style="color:#9ca3af;font-size:13px;">ไม่มีครูที่รอกำหนดกลุ่มสาระ</div>'
    return
  }
  el.innerHTML = unassigned.map(m => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;border-bottom:1px solid #f3f4f6;font-size:13px;">
      <div>
        <span style="font-weight:600;">${m.full_name}</span>
        ${!m.isRegistered?'<span style="color:#d97706;font-size:11px;margin-left:6px;">ยังไม่ลงทะเบียน</span>':''}
        <div style="font-size:11px;color:#6b7280;">${m.category??'—'}</div>
      </div>
      <button class="sv-assign-btn" data-tid="${m.id}" data-name="${m.full_name}"
        style="padding:4px 12px;border:1px solid #6366f1;border-radius:8px;color:#6366f1;background:#f5f3ff;font-size:11px;cursor:pointer;font-family:inherit;">
        + เพิ่ม
      </button>
    </div>`).join('')

  el.querySelectorAll('.sv-assign-btn').forEach(btn => {
    btn.onclick = async () => {
      const ok = await _customConfirm(`เพิ่ม "${btn.dataset.name}" เข้ากลุ่ม ${teacher.dept}?`); if (!ok) return
      btn.disabled = true; btn.textContent = '⏳'
      try {
        await assignTeacherToDept(parseInt(btn.dataset.tid), teacher.dept)
        // อัปเดต local cache
        const m = _allMetrics.find(x => x.id === parseInt(btn.dataset.tid))
        if (m) m.dept = teacher.dept
        btn.textContent = '✓ เพิ่มแล้ว'; btn.style.background = '#d1fae5'; btn.style.color = '#065f46'
      } catch(e) { btn.disabled = false; btn.textContent = '+ เพิ่ม'; _svPopup({ icon:'❌', title:'เพิ่มสมาชิกไม่สำเร็จ', body: e.message ?? '', type:'error' }) }
    }
  })
}

function _applyFilter(rows) {
  let r = rows
  if (_searchQ.trim()) {
    const q = _searchQ.trim().toLowerCase()
    r = r.filter(m =>
      (m.full_name??'').toLowerCase().includes(q) ||
      (m.dept??'').toLowerCase().includes(q) ||
      (m.category??'').toLowerCase().includes(q) ||
      (_deptName(m.dept)??'').toLowerCase().includes(q)
    )
  }
  if (!_sortCol) return r
  return [...r].sort((a, b) => {
    let av, bv
    switch(_sortCol) {
      case 'name':    av = a.full_name??''; bv = b.full_name??''; break
      case 'dept':    av = a.dept??''; bv = b.dept??''; break
      case 'profile': av = a.profileStatus==='ok'?1:0; bv = b.profileStatus==='ok'?1:0; break
      case 'dates':   av = a.datesOk??0; bv = b.datesOk??0; break
      case 'att':     av = a.daysSinceAtt??999; bv = b.daysSinceAtt??999; break
      case 'score':    av = a.scorePct??-1; bv = b.scorePct??-1; break
      case 'schedule': av = a.scheduleCount??-1; bv = b.scheduleCount??-1; break
    }
    if (av < bv) return -_sortDir
    if (av > bv) return _sortDir
    return 0
  })
}

function _thSort(col, label) {
  const active = _sortCol === col
  const arrow = active ? (_sortDir === 1 ? ' ↑' : ' ↓') : ' ↕'
  return `<th class="sv-th-sort" data-col="${col}"
    style="padding:10px 12px;text-align:center;font-size:12px;cursor:pointer;user-select:none;white-space:nowrap;
      ${active?'color:#6366f1;':'color:#374151;'}">
    ${label}<span style="opacity:.5;">${arrow}</span></th>`
}

function _table(rows) {
  if (!rows.length) return `<div style="text-align:center;padding:24px;color:#9ca3af;">ไม่พบข้อมูลครู</div>`
  return `<table style="width:100%;border-collapse:collapse;">
    <thead><tr style="background:#f9fafb;border-bottom:2px solid #e5e7eb;">
      <th class="sv-th-sort" data-col="name" style="padding:10px 12px;text-align:left;font-size:13px;cursor:pointer;user-select:none;">
        ครูผู้สอน${_sortCol==='name'?(_sortDir===1?' ↑':' ↓'):'<span style="opacity:.4;"> ↕</span>'}
      </th>
      ${_thSort('profile','โปรไฟล์')}
      ${_thSort('dates','วันสอน')}
      ${_thSort('schedule','ตารางสอน')}
      ${_thSort('att','เช็คชื่อ')}
      ${_thSort('score','คะแนน')}
      <th style="padding:10px;"></th>
    </tr></thead>
    <tbody>${rows.map(m=>{
      const attTxt = m.attStatus==='na'?'–': m.lastAtt?`${m.daysSinceAtt}ว.ที่แล้ว`:'ยังไม่บันทึก'
      const attCol = m.daysSinceAtt<=7?'#059669':m.daysSinceAtt<=14?'#d97706':'#dc2626'
      const regBadge = !m.isRegistered
        ? `<span style="display:inline-block;padding:1px 6px;border-radius:10px;font-size:10px;background:#fef3c7;color:#92400e;margin-left:4px;">ยังไม่ลงทะเบียน</span>` : ''
      const avatar = m.image_url
        ? `<img src="${m.image_url}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;flex-shrink:0;">`
        : `<div style="width:34px;height:34px;border-radius:50%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">👤</div>`
      return `<tr class="sv-row" data-tid="${m.id}" style="border-bottom:1px solid #f3f4f6;cursor:pointer;${!m.isRegistered?'background:#fffbeb;':''}">
        <td style="padding:8px 12px;">
          <div style="display:flex;align-items:center;gap:10px;">
            ${avatar}
            <div>
              <div style="font-weight:600;font-size:13px;">${m.full_name??'—'}${regBadge}</div>
              <div style="font-size:11px;color:#6b7280;">${m.dept??'—'} · ${m.category??'—'}</div>
            </div>
          </div>
        </td>
        <td style="padding:10px 12px;text-align:center;">${m.isRegistered?_badge(m.profileStatus):'<span style="color:#9ca3af;font-size:12px;">–</span>'}</td>
        <td style="padding:10px 12px;text-align:center;">
          ${m.isRegistered?`<span style="font-size:12px;font-weight:600;color:${m.datesOk===m.classCount&&m.classCount>0?'#059669':'#dc2626'};">${m.datesOk}/${m.classCount}</span>`:'<span style="color:#9ca3af;">–</span>'}</td>
        <td style="padding:10px 12px;text-align:center;">
          ${m.isRegistered
            ? `${_badge(m.scheduleStatus)}<div style="font-size:10px;color:${m.scheduleCount>0?'#059669':'#dc2626'};margin-top:2px;">${m.scheduleCount??0} คาบ</div>`
            : '<span style="color:#9ca3af;">–</span>'}
        </td>
        <td style="padding:10px 12px;text-align:center;">
          ${m.isRegistered?`${_badge(m.attStatus)}<div style="font-size:10px;color:${attCol};margin-top:2px;">${attTxt}</div>`:'<span style="color:#9ca3af;">–</span>'}
        </td>
        <td style="padding:10px 12px;text-align:center;">
          ${m.isRegistered?`<span style="font-weight:700;color:${m.scorePct===null?'#9ca3af':m.scorePct>=80?'#059669':m.scorePct>=40?'#d97706':'#dc2626'};">${m.scorePct!==null?m.scorePct+'%':'–'}</span>`:'<span style="color:#9ca3af;">–</span>'}
        </td>
        <td style="padding:10px 12px;text-align:center;">
          <button class="sv-detail-btn" data-tid="${m.id}"
            style="padding:4px 12px;border:1px solid #d1d5db;border-radius:6px;background:#f9fafb;font-size:12px;cursor:pointer;">ดู →</button>
        </td>
      </tr>`}).join('')}
    </tbody>
  </table>`
}

function _bindTable(root, metrics) {
  root.querySelectorAll('.sv-detail-btn').forEach(b=>{
    b.addEventListener('click',e=>{
      e.stopPropagation()
      const m = metrics.find(x=>x.id===parseInt(b.dataset.tid))
      if(m) _showDetail(m)
    })
  })
  root.querySelectorAll('.sv-row').forEach(r=>{
    r.addEventListener('click',()=>{
      const m = metrics.find(x=>x.id===parseInt(r.dataset.tid))
      if(m) _showDetail(m)
    })
  })
  // sort headers
  root.querySelectorAll('.sv-th-sort').forEach(th=>{
    th.addEventListener('click',()=>{
      const col = th.dataset.col
      if (_sortCol === col) _sortDir *= -1
      else { _sortCol = col; _sortDir = 1 }
      document.getElementById('sv-tbl').innerHTML = _table(_applyFilter(metrics))
      _bindTable(root, metrics)
    })
  })
}

// ─── Full-screen teacher detail ───────────────────────────────────────────────
function _showDetail(m) {
  const root = _svContainer
  if (!root) return
  const glow = v => v ? '' : 'box-shadow:0 0 0 2px #ef4444,0 0 8px rgba(239,68,68,.4);'
  const fieldBadge = (icon, label, val) =>
    `<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:20px;font-size:12px;border:1.5px solid ${val?'#d1d5db':'#ef4444'};color:${val?'#374151':'#ef4444'};${val?'':'box-shadow:0 0 6px rgba(239,68,68,.25);'}">
      ${icon} ${val||label+' (ยังไม่ระบุ)'}
    </span>`

  const classCards = m.myClasses.map(cls => {
    const subj = cls.master_subjects ?? {}
    const hasDate = cls.day1_date
    return `<div class="sv-class-card" data-cid="${cls.id}" style="background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:14px 16px;margin-bottom:10px;cursor:pointer;transition:box-shadow .15s;">
      <div style="display:flex;justify-content:space-between;align-items:start;">
        <div style="flex:1;">
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-bottom:6px;">
            <span style="background:#e0f2fe;color:#0369a1;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">${subj.subject_code??''}</span>
            ${!hasDate?`<span style="background:#fee2e2;color:#dc2626;border-radius:6px;padding:2px 8px;font-size:11px;">✗ ยังไม่ระบุวันสอน</span>`:''}
          </div>
          <div style="font-weight:700;font-size:14px;margin-bottom:2px;">${subj.subject_name??''}</div>
          <div style="font-size:12px;color:#6b7280;">🏫 ${cls.class_name}</div>
        </div>
        <div style="display:flex;gap:6px;margin-left:8px;">
          <button class="sv-pp5-cls" data-cid="${cls.id}"
            style="padding:4px 10px;background:#6366f1;color:#fff;border:none;border-radius:8px;font-size:11px;cursor:pointer;white-space:nowrap;">
            📋 ดูภาพรวม ปพ.5
          </button>
        </div>
      </div>
    </div>`
  }).join('') || `<div style="color:#9ca3af;font-size:13px;padding:16px 0;">ยังไม่มีห้องเรียน${!m.isRegistered?' (ครูยังไม่ได้ลงทะเบียน)':''}</div>`

  root.innerHTML = `
    <div style="max-width:860px;margin:0 auto;padding:20px;">
      <button id="sv-back" style="border:none;background:none;color:#6b7280;font-size:13px;cursor:pointer;margin-bottom:16px;display:flex;align-items:center;gap:4px;">← กลับ Dashboard</button>

      <!-- Profile card — คลิกได้ -->
      <div id="sv-profile-area" style="background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:16px;margin-bottom:16px;cursor:pointer;transition:box-shadow .15s;"
        title="คลิกเพื่อดูโปรไฟล์เต็ม">
        <div style="display:flex;gap:14px;align-items:start;">
          <div style="width:56px;height:56px;border-radius:50%;overflow:hidden;flex-shrink:0;${glow(m.image_url)}">
            ${m.image_url
              ? `<img src="${m.image_url}" style="width:100%;height:100%;object-fit:cover;">`
              : `<div style="width:100%;height:100%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;font-size:22px;">👤</div>`}
          </div>
          <div style="flex:1;">
            <div style="font-size:16px;font-weight:700;margin-bottom:6px;">${m.full_name??'—'}
              ${!m.isRegistered?`<span style="background:#fef3c7;color:#92400e;border-radius:8px;padding:1px 8px;font-size:11px;margin-left:6px;">ยังไม่ลงทะเบียน</span>`:''}
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">
              ${fieldBadge('📱','เบอร์โทร', m.phone)}
              ${fieldBadge('🏫','กลุ่มสาระ', m.dept)}
              ${fieldBadge('👤','ประเภท', m.category)}
              ${fieldBadge('📧','อีเมล', m.login_email)}
            </div>
          </div>
          <span style="font-size:11px;color:#6b7280;flex-shrink:0;margin-top:4px;">ดูโปรไฟล์ →</span>
        </div>
      </div>

      <!-- Class cards -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-weight:700;font-size:14px;color:#374151;">
          📚 รายวิชาที่รับผิดชอบ (${m.classCount} ห้อง)
        </div>
        <button id="sv-view-schedule"
          style="padding:5px 14px;background:${m.scheduleCount>0?'#f59e0b':'#e5e7eb'};color:${m.scheduleCount>0?'#fff':'#9ca3af'};border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:5px;font-family:inherit;">
          🗓 ตารางสอน${m.scheduleCount>0?' ('+m.scheduleCount+' คาบ)':' (ยังไม่มี)'}
        </button>
      </div>
      <div id="sv-class-list">${classCards}</div>

      <!-- Comment section -->
      <div style="background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:16px;margin-top:16px;">
        <div style="font-weight:700;font-size:14px;margin-bottom:10px;">💬 ความคิดเห็น / บันทึก</div>
        <div id="sv-past-comments" style="margin-bottom:12px;max-height:200px;overflow-y:auto;"></div>
        <button id="sv-open-comment-ui"
          style="width:100%;padding:10px;border:1.5px dashed #6366f1;border-radius:10px;background:#f5f3ff;color:#6366f1;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
          + แสดงความคิดเห็น
        </button>
        <div id="sv-comment-ui" style="display:none;margin-top:12px;">
          <div style="font-size:12px;color:#374151;font-weight:600;margin-bottom:8px;">เลือกหัวข้อ (เลือกได้หลายข้อ):</div>
          <div id="sv-cat-rows" style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px;">
            ${['general:ทั่วไป','profile:โปรไฟล์','schedule:ตารางสอน','dates:วันสอน','attendance:เช็คชื่อ','scores:คะแนน'].map(s=>{
              const [val,label] = s.split(':')
              return `<div class="sv-cat-row" data-cat="${val}"
                style="display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;border:1.5px solid #e5e7eb;cursor:pointer;transition:all .15s;">
                <div class="sv-cat-label" style="min-width:80px;font-size:13px;font-weight:600;color:#374151;padding-top:6px;">${label}</div>
                <div class="sv-cat-right" style="display:none;flex:1;flex-direction:column;gap:6px;">
                  <div class="sv-phrase-chips" style="display:flex;flex-wrap:wrap;gap:5px;min-height:10px;"></div>
                  <textarea class="sv-cat-textarea" data-cat="${val}" rows="2" maxlength="500"
                    placeholder="พิมพ์ความคิดเห็นสำหรับ ${label}..."
                    style="border:1px solid #d1d5db;border-radius:8px;padding:6px 8px;font-size:12px;font-family:inherit;resize:none;width:100%;box-sizing:border-box;"></textarea>
                </div>
              </div>`
            }).join('')}
          </div>
          <div style="margin-bottom:10px;">
            <label style="display:block;font-size:12px;color:#374151;font-weight:600;margin-bottom:5px;">📅 อ้างอิงกิจกรรม (ปฏิทินปฏิบัติงาน)</label>
            <select id="sv-round-select"
              style="width:100%;border:1.5px solid #e5e7eb;border-radius:10px;padding:7px 10px;font-size:12px;font-family:inherit;color:#374151;background:#f9fafb;">
              <option value="">— ไม่อ้างอิงกิจกรรม —</option>
            </select>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px;">
            <label style="display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer;">
              <input id="sv-notify-chk" type="checkbox" checked/>
              🔔 แจ้งเตือนครู
            </label>
            <button id="sv-save-comment"
              style="padding:7px 18px;background:#059669;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
              บันทึกทั้งหมด
            </button>
          </div>
        </div>
      </div>
    </div>`

  document.getElementById('sv-back').onclick = () => renderSupervisorDashboard(_svContainer, _selfTeacher, _isAdminView)

  // Profile hover
  const profileArea = document.getElementById('sv-profile-area')
  profileArea.addEventListener('mouseenter', () => profileArea.style.boxShadow = '0 4px 12px rgba(0,0,0,.1)')
  profileArea.addEventListener('mouseleave', () => profileArea.style.boxShadow = '')
  profileArea.onclick = () => _showTeacherProfile(m)

  // Class card clicks
  document.querySelectorAll('.sv-class-card').forEach(card => {
    card.addEventListener('mouseenter', () => card.style.boxShadow = '0 4px 12px rgba(0,0,0,.1)')
    card.addEventListener('mouseleave', () => card.style.boxShadow = '')
    card.addEventListener('click', () => {
      const cls = m.myClasses.find(c => c.id === parseInt(card.dataset.cid))
      if (cls) _openClassInSupervisor(m, cls)
    })
  })

  // ปุ่มตารางสอน
  document.getElementById('sv-view-schedule')?.addEventListener('click', async () => {
    const btn = document.getElementById('sv-view-schedule')
    btn.disabled = true; btn.textContent = '⏳ กำลังโหลด...'
    try {
      await _showScheduleOverlay(m)
    } finally {
      btn.disabled = false
      btn.innerHTML = `🗓 ตารางสอน${m.scheduleCount>0?' ('+m.scheduleCount+' คาบ)':' (ยังไม่มี)'}`
    }
  })

  // ปพ.5 buttons
  document.querySelectorAll('.sv-pp5-cls').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      openPP5Doc(parseInt(btn.dataset.cid))
    })
  })

  // Comment UI — vertical multi-select
  document.getElementById('sv-open-comment-ui').onclick = async () => {
    document.getElementById('sv-comment-ui').style.display = ''
    document.getElementById('sv-open-comment-ui').style.display = 'none'
    // โหลด calendar events สำหรับ dropdown
    const sel = document.getElementById('sv-round-select')
    if (sel && sel.options.length <= 1) {
      try {
        const cfg = await getSystemConfig()
        const ay = cfg?.academic_year ?? (new Date().getFullYear() + 543)
        const sm = cfg?.semester ?? 1
        const evts = await getWorkCalendarEvents(ay, sm)
        const TYPE_LABEL = { inspection:'🔍', deadline:'⏰', meeting:'📅', other:'📌' }
        evts.forEach(ev => {
          const opt = document.createElement('option')
          opt.value = ev.id
          const rd = ev.event_type === 'inspection' && ev.round_number ? ` ครั้งที่ ${ev.round_number}` : ''
          const d = new Date(ev.event_date + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })
          opt.textContent = `${TYPE_LABEL[ev.event_type]??'📌'}${rd} ${ev.label} (${d})`
          sel.appendChild(opt)
        })
      } catch {}
    }
  }
  const greenGlow = 'box-shadow:0 0 0 2px #059669,0 0 8px rgba(5,150,105,.3);border-color:#059669;background:#f0fdf4;'
  document.querySelectorAll('.sv-cat-row').forEach(row => {
    row.onclick = async e => {
      if (e.target.tagName === 'TEXTAREA' || e.target.closest('.sv-phrase-chips')) return
      const right = row.querySelector('.sv-cat-right')
      const ta = row.querySelector('textarea')
      const isSelected = row.dataset.selected === '1'
      if (isSelected) {
        row.dataset.selected = '0'
        row.style.cssText = 'display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;border:1.5px solid #e5e7eb;cursor:pointer;transition:all .15s;'
        right.style.display = 'none'
      } else {
        row.dataset.selected = '1'
        row.style.cssText = `display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;transition:all .15s;${greenGlow}`
        right.style.display = 'flex'
        ta.focus()
        // โหลด phrases และสร้าง chips
        const metric = row.dataset.cat
        const chipsEl = row.querySelector('.sv-phrase-chips')
        if (!chipsEl.children.length) {
          const phrases = await _loadPhrases(metric)
          chipsEl.innerHTML = phrases.map(p =>
            `<span class="sv-phrase-chip"
              style="padding:3px 10px;border-radius:20px;border:1px solid #d1d5db;background:#f9fafb;font-size:11px;cursor:pointer;color:#374151;transition:all .1s;"
              onmouseover="this.style.background='#e0f2fe';this.style.borderColor='#0ea5e9'"
              onmouseout="this.style.background='#f9fafb';this.style.borderColor='#d1d5db'">
              ${p}
            </span>`
          ).join('')
          chipsEl.querySelectorAll('.sv-phrase-chip').forEach((chip, i) => {
            chip.addEventListener('click', e => {
              e.stopPropagation()
              const cur = ta.value.trim()
              ta.value = cur ? cur + ' ' + phrases[i] : phrases[i]
              ta.focus()
              // flash chip
              chip.style.background = '#d1fae5'; chip.style.borderColor = '#059669'
              setTimeout(() => { chip.style.background = '#f9fafb'; chip.style.borderColor = '#d1d5db' }, 400)
            })
          })
        }
      }
    }
  })
  document.getElementById('sv-save-comment').onclick = async () => {
    const notify = document.getElementById('sv-notify-chk').checked
    const roundId = parseInt(document.getElementById('sv-round-select')?.value) || null
    const selected = [...document.querySelectorAll('.sv-cat-row[data-selected="1"]')]
    const toSave = selected.map(row => ({
      cat: row.dataset.cat,
      txt: row.querySelector('textarea').value.trim()
    })).filter(x => x.txt)
    if (!toSave.length) { _svPopup({ icon:'⚠️', title:'กรุณากรอกความคิดเห็น', body:'เลือกหัวข้อและพิมพ์ความคิดเห็นอย่างน้อย 1 หัวข้อก่อนบันทึก', type:'warning' }); return }
    const saveBtn = document.getElementById('sv-save-comment')
    saveBtn.disabled = true; saveBtn.textContent = '⏳ กำลังบันทึก...'
    try {
      for (const { cat, txt } of toSave) {
        await addSupervisorCommentWithNotify(_selfTeacher.id, m.id, cat, txt, notify, roundId)
      }
      document.getElementById('sv-comment-ui').style.display = 'none'
      document.getElementById('sv-open-comment-ui').style.display = ''
      document.querySelectorAll('.sv-cat-row').forEach(row => {
        row.dataset.selected = '0'
        row.style.cssText = 'display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;border:1.5px solid #e5e7eb;cursor:pointer;transition:all .15s;'
        row.querySelector('textarea').style.display = 'none'
        row.querySelector('textarea').value = ''
      })
      await _loadPastComments(m.id)
      _svPopup({ icon:'✅', title:'บันทึกสำเร็จ', body:`บันทึกความคิดเห็น ${toSave.length} หัวข้อเรียบร้อยแล้ว${notify ? ' · แจ้งเตือนครูแล้ว 🔔' : ''}`, type:'success' })
    } catch(e) {
      _svPopup({ icon:'❌', title:'บันทึกไม่สำเร็จ', body: e.message ?? 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง', type:'error' })
    } finally { saveBtn.disabled = false; saveBtn.textContent = 'บันทึกทั้งหมด' }
  }

  _loadPastComments(m.id)
}

function _svPopup({ icon = '✅', title = '', body = '', type = 'success' }) {
  const existing = document.getElementById('sv-popup-overlay')
  if (existing) existing.remove()
  const colors = {
    success: { bg: '#f0fdf4', border: '#bbf7d0', title: '#15803d', icon: '#22c55e' },
    error:   { bg: '#fef2f2', border: '#fecaca', title: '#b91c1c', icon: '#ef4444' },
    warning: { bg: '#fffbeb', border: '#fde68a', title: '#92400e', icon: '#f59e0b' },
  }
  const c = colors[type] ?? colors.success
  const el = document.createElement('div')
  el.id = 'sv-popup-overlay'
  el.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.45);backdrop-filter:blur(4px);'
  el.innerHTML = `
    <div style="background:#fff;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.25);padding:32px 28px;width:min(360px,90vw);text-align:center;animation:sv-pop-in .2s cubic-bezier(.34,1.56,.64,1);">
      <style>@keyframes sv-pop-in{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}</style>
      <div style="width:56px;height:56px;border-radius:50%;background:${c.bg};border:2px solid ${c.border};display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 16px;">${icon}</div>
      ${title ? `<div style="font-size:16px;font-weight:700;color:${c.title};margin-bottom:8px;">${title}</div>` : ''}
      ${body  ? `<div style="font-size:13px;color:#6b7280;line-height:1.6;margin-bottom:20px;">${body}</div>` : ''}
      <button id="sv-popup-ok"
        style="padding:10px 32px;border:none;border-radius:12px;background:${c.icon};color:#fff;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:opacity .15s;"
        onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">ตกลง</button>
    </div>`
  document.body.appendChild(el)
  const close = () => el.remove()
  document.getElementById('sv-popup-ok').onclick = close
  el.addEventListener('click', e => { if (e.target === el) close() })
  return el
}

async function _loadPastComments(teacherId) {
  const el = document.getElementById('sv-past-comments')
  if (!el) return
  const catLabel = {general:'ทั่วไป',profile:'โปรไฟล์',dates:'วันสอน',attendance:'เช็คชื่อ',scores:'คะแนน'}
  try {
    const list = await getSupervisorComments(teacherId)
    el.innerHTML = list.length ? list.map(c=>`
      <div style="background:#f9fafb;border-radius:8px;padding:8px 12px;margin-bottom:6px;font-size:12px;display:flex;justify-content:space-between;align-items:start;">
        <div>
          <span style="background:#e0e7ff;color:#3730a3;border-radius:6px;padding:1px 6px;font-size:10px;margin-right:6px;">${catLabel[c.metric]??c.metric}</span>
          ${c.notify_teacher?'<span style="color:#6366f1;font-size:10px;">🔔 </span>':''}
          <strong>${_selfTeacher?.id===c.supervisor_id?'ฉัน':'หัวหน้า'}</strong>: ${c.comment}
          <div style="color:#9ca3af;font-size:10px;margin-top:2px;">${new Date(c.created_at).toLocaleString('th')}</div>
        </div>
        ${c.supervisor_id===_selfTeacher?.id?`<button data-cid="${c.id}" class="sv-del-c"
          style="border:none;background:none;color:#dc2626;cursor:pointer;font-size:14px;flex-shrink:0;">✕</button>`:''}
      </div>`).join('')
      : '<div style="color:#9ca3af;font-size:12px;">ยังไม่มีความเห็น</div>'
    el.querySelectorAll('.sv-del-c').forEach(b => {
      b.onclick = async () => {
        await deleteSupervisorComment(parseInt(b.dataset.cid))
        await _loadPastComments(teacherId)
      }
    })
  } catch {}
}

async function _showScheduleOverlay(m) {
  document.getElementById('sv-sched-overlay')?.remove()

  const overlay = document.createElement('div')
  overlay.id = 'sv-sched-overlay'
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9500;background:#f9fafb;display:flex;flex-direction:column;overflow:hidden;'
  overlay.innerHTML = `
    <div style="background:#fff;border-bottom:1px solid #e5e7eb;padding:0 20px;height:56px;display:flex;align-items:center;gap:12px;flex-shrink:0;box-shadow:0 1px 3px rgba(0,0,0,.08);">
      <button id="sv-sched-back" style="border:none;background:none;color:#6b7280;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:5px;padding:6px 0;font-family:inherit;font-weight:600;">← กลับ</button>
      <div style="width:1px;height:20px;background:#e5e7eb;flex-shrink:0;"></div>
      <div>
        <div style="font-size:13px;font-weight:700;color:#111827;">🗓 ตารางสอน — ${m.full_name}</div>
        <div style="font-size:11px;color:#6b7280;margin-top:1px;">
          ${m.scheduleCount > 0
            ? `สอน <strong style="color:#059669;">${m.scheduleCount}</strong> คาบ/สัปดาห์`
            : 'ยังไม่ได้ตั้งตารางสอน'}
        </div>
      </div>
    </div>
    <div id="sv-sched-scroll" style="flex:1;overflow-y:auto;">
      <div id="sv-sched-content"></div>
    </div>`
  document.body.appendChild(overlay)
  overlay.querySelector('#sv-sched-back').addEventListener('click', () => overlay.remove())

  const svContent = document.getElementById('sv-sched-content')

  // ชี้ cache ของ setContent ไปที่ overlay div แทน #main-content เดิม
  const { renderScheduleGrid } = await import('./teacher-views.js')
  const { setMainContentRef, getMainContentRef } = await import('./teacher-views-utils.js')
  const origRef = getMainContentRef()
  setMainContentRef(svContent)

  try {
    const cfg  = await getSystemConfig().catch(() => ({}))
    const year = parseInt(cfg.academicYear ?? 2568)
    const sem  = parseInt(cfg.semester ?? 1)
    await renderScheduleGrid({ id: m.id, full_name: m.full_name }, year, sem, cfg)

    // ลบปุ่ม edit ที่ไม่ต้องการ
    svContent.querySelector('#btn-clear-schedule')?.remove()
    svContent.querySelector('#btn-upload-schedule')?.remove()

    // ปิด click ทุกช่อง (read-only สำหรับผู้ตรวจ)
    svContent.style.pointerEvents = 'none'
  } finally {
    setMainContentRef(origRef)
  }
}

function _deptNameTH(m) {
  const code = m.dept
  if (!code) return null
  // ค้นหาโดยพิจารณา category ด้วย (เช่น SOC มีทั้ง สามัญ และ ศาสนา)
  const candidates = _depts.filter(d => d.dept_code === code)
  if (!candidates.length) return code
  if (candidates.length === 1) return candidates[0].dept_name
  const match = candidates.find(d => d.category === m.category)
  return (match ?? candidates[0]).dept_name
}

function _showTeacherProfile(m) {
  const overlay = _makeOverlay()
  const glow = v => v ? '' : 'box-shadow:0 0 0 2px #ef4444,0 0 8px rgba(239,68,68,.4);border-radius:8px;'
  const deptTH = _deptNameTH(m)
  overlay.innerHTML = `<div class="sv-popup" style="width:min(480px,96vw);">
    <button id="sv-pop-close" style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;">✕</button>
    <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;">👤 โปรไฟล์ครู</h3>
    <div style="display:flex;gap:14px;align-items:center;margin-bottom:20px;">
      <div style="width:72px;height:72px;border-radius:50%;overflow:hidden;flex-shrink:0;${glow(m.image_url)}">
        ${m.image_url?`<img src="${m.image_url}" style="width:100%;height:100%;object-fit:cover;">`
          :`<div style="width:100%;height:100%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;font-size:28px;">📷</div>`}
      </div>
      <div>
        <div style="font-size:18px;font-weight:700;">${m.full_name??'—'}</div>
        <div style="font-size:12px;color:#6b7280;">${m.isRegistered?m.login_email??'':'⚠ ยังไม่ลงทะเบียน'}</div>
      </div>
    </div>
    <div style="display:grid;gap:10px;">
      ${[
        ['📱 เบอร์โทรศัพท์', m.phone],
        ['🏫 กลุ่มสาระ', deptTH],
        ['👤 ประเภท', m.category],
        ['📚 กลุ่มวิชา', m.subject_group],
        ['📧 อีเมลเข้าสู่ระบบ', m.login_email],
      ].map(([label, val]) => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 12px;border-radius:8px;${glow(val)}background:${val?'#f9fafb':'#fff5f5'};">
          <span style="font-size:13px;color:#374151;">${label}</span>
          <span style="font-size:13px;font-weight:600;color:${val?'#059669':'#dc2626'};">${val||'✗ ยังไม่ระบุ'}</span>
        </div>`).join('')}
    </div>
  </div>`
  document.body.appendChild(overlay)
  overlay.querySelector('#sv-pop-close').onclick = () => overlay.remove()
  overlay.addEventListener('click', e => { if(e.target===overlay) overlay.remove() })
}

function _openClassInSupervisor(m, cls) {
  document.getElementById('sv-fab-back')?.remove()
  const fab = document.createElement('button')
  fab.id = 'sv-fab-back'
  fab.style.cssText = `position:fixed;top:12px;left:12px;z-index:9100;
    background:#1d4ed8;color:#fff;border:none;border-radius:24px;
    padding:8px 16px;font-size:13px;font-weight:600;cursor:pointer;
    box-shadow:0 4px 12px rgba(0,0,0,.25);font-family:inherit;`
  fab.textContent = '← กลับ'
  fab.onclick = () => { fab.remove(); _showDetail(m) }
  document.body.appendChild(fab)

  // เก็บ callback ให้ teacher.js ใช้ override _backToClasses
  window._svBackToDetail = () => {
    document.getElementById('sv-fab-back')?.remove()
    _showDetail(m)
    window._svBackToDetail = null
  }

  window._supervisorClassView = true
  window.dispatchEvent(new CustomEvent('teacher-nav', {
    detail: { view: 'class-detail-sv', classId: cls.id }
  }))
}


// ── utils ─────────────────────────────────────────────────────────────────────
// ── mini comment section (ใส่ใน popup ทุกที่) ────────────────────────────────
function _miniCommentHTML(metric) {
  const metricLabel = {general:'ทั่วไป',profile:'โปรไฟล์',dates:'วันสอน',attendance:'เช็คชื่อ',scores:'คะแนน'}[metric]??metric
  return `
  <div class="sv-mini-comment" data-metric="${metric}"
    style="margin-top:14px;border-top:1px solid #e5e7eb;padding-top:12px;">
    <div style="font-size:12px;font-weight:600;color:#374151;margin-bottom:8px;">💬 Comment (${metricLabel})</div>
    <div class="sv-mini-comment-list" style="max-height:120px;overflow-y:auto;margin-bottom:8px;"></div>
    <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
      <input class="sv-mini-comment-input" type="text" placeholder="พิมพ์ความเห็น..." maxlength="200"
        style="flex:1;min-width:120px;border:1px solid #d1d5db;border-radius:8px;padding:5px 10px;font-size:12px;font-family:inherit;"/>
      <label style="display:flex;align-items:center;gap:4px;font-size:11px;cursor:pointer;white-space:nowrap;">
        <input class="sv-mini-notify" type="checkbox"/>🔔แจ้งเตือน
      </label>
      <button class="sv-mini-send"
        style="padding:5px 12px;background:#1d4ed8;color:#fff;border:none;border-radius:8px;font-size:12px;cursor:pointer;font-family:inherit;">
        ส่ง
      </button>
    </div>
  </div>`
}

async function _bindMiniComment(container, teacherId, metric) {
  const section = container.querySelector(`.sv-mini-comment[data-metric="${metric}"]`)
  if (!section) return

  async function reload() {
    const list = section.querySelector('.sv-mini-comment-list')
    try {
      const all = await getSupervisorComments(teacherId)
      const filtered = all.filter(c => c.metric === metric || metric === 'general')
      list.innerHTML = filtered.length ? filtered.map(c=>`
        <div style="font-size:11px;padding:4px 8px;background:#f9fafb;border-radius:6px;margin-bottom:4px;display:flex;justify-content:space-between;align-items:start;">
          <div><strong>${c.supervisor_id===_selfTeacher?.id?(_selfTeacher?.full_name??'หัวหน้า'):'หัวหน้า'}</strong>: ${c.comment}
            ${c.notify_teacher?'<span style="color:#6366f1;font-size:10px;"> 🔔</span>':''}
            <div style="color:#9ca3af;font-size:10px;">${new Date(c.created_at).toLocaleString('th')}</div>
          </div>
          ${c.supervisor_id===_selfTeacher?.id?`<button data-cid="${c.id}" class="sv-mini-del"
            style="border:none;background:none;color:#dc2626;cursor:pointer;font-size:12px;flex-shrink:0;">✕</button>`:''}
        </div>`).join('')
        : '<div style="color:#9ca3af;font-size:11px;">ยังไม่มีความเห็น</div>'
      list.querySelectorAll('.sv-mini-del').forEach(b=>{
        b.onclick = async () => {
          await deleteSupervisorComment(parseInt(b.dataset.cid))
          await reload()
        }
      })
    } catch {}
  }

  const sendBtn = section.querySelector('.sv-mini-send')
  const inp = section.querySelector('.sv-mini-comment-input')
  const notify = section.querySelector('.sv-mini-notify')

  sendBtn.onclick = async () => {
    const txt = inp.value.trim()
    if (!txt) return
    sendBtn.disabled = true
    try {
      await addSupervisorCommentWithNotify(_selfTeacher.id, teacherId, metric, txt, notify.checked)
      inp.value = ''
      notify.checked = false
      await reload()
    } catch(e) { _svPopup({ icon:'❌', title:'บันทึกไม่สำเร็จ', body: e.message ?? '', type:'error' }) } finally { sendBtn.disabled = false }
  }
  inp.addEventListener('keydown', e => { if(e.key==='Enter') sendBtn.click() })
  await reload()
}

function _makeOverlay() {
  const el = document.createElement('div')
  el.className = 'sv-overlay'
  return el
}

// Custom confirm dialog (replaces browser confirm())
function _customConfirm(message, confirmLabel='ตกลง', cancelLabel='ยกเลิก') {
  return new Promise(resolve => {
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:99999;display:flex;align-items:center;justify-content:center;'
    overlay.innerHTML = `<div style="background:#fff;border-radius:16px;padding:24px 28px;width:min(360px,90vw);text-align:center;box-shadow:0 8px 32px rgba(0,0,0,.2);">
      <div style="font-size:14px;font-weight:600;color:#111827;line-height:1.6;margin-bottom:20px;">${message}</div>
      <div style="display:flex;gap:10px;justify-content:center;">
        <button id="sv-cfm-cancel"
          style="flex:1;max-width:120px;padding:9px 0;border:1.5px solid #d1d5db;border-radius:10px;background:#fff;color:#374151;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
          ${cancelLabel}
        </button>
        <button id="sv-cfm-ok"
          style="flex:1;max-width:120px;padding:9px 0;border:none;border-radius:10px;background:#1d4ed8;color:#fff;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
          ${confirmLabel}
        </button>
      </div>
    </div>`
    document.body.appendChild(overlay)
    overlay.querySelector('#sv-cfm-ok').onclick    = () => { overlay.remove(); resolve(true)  }
    overlay.querySelector('#sv-cfm-cancel').onclick = () => { overlay.remove(); resolve(false) }
    overlay.addEventListener('click', e => { if(e.target===overlay){ overlay.remove(); resolve(false) } })
  })
}

function _infoRow(label, val, ok) {
  return `<div style="display:flex;justify-content:space-between;padding:8px 12px;background:#f9fafb;border-radius:8px;">
    <span style="font-size:13px;color:#374151;">${label}</span>
    <span style="font-size:13px;font-weight:600;color:${ok?'#059669':'#dc2626'};">${val}</span>
  </div>`
}
