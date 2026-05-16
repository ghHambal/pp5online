// ─── Supervisor Dashboard ──────────────────────────────────────────────────────
import { getSupervisorProgress, getDepartments } from './api.js'
import { showToast } from './ui.js'

// ── SVG Donut Chart ───────────────────────────────────────────────────────────
function _donut(pct, color, label, sub) {
  const r = 36, cx = 44, cy = 44
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ
  return `
  <div style="text-align:center;">
    <svg width="88" height="88" viewBox="0 0 88 88">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#e5e7eb" stroke-width="10"/>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="10"
        stroke-dasharray="${dash.toFixed(1)} ${circ.toFixed(1)}"
        stroke-dashoffset="${(circ / 4).toFixed(1)}"
        stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"/>
      <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle"
        style="font-size:14px;font-weight:700;fill:#111;">${pct}%</text>
    </svg>
    <div style="font-size:12px;font-weight:600;color:#374151;margin-top:2px;">${label}</div>
    <div style="font-size:11px;color:#6b7280;">${sub}</div>
  </div>`
}

// ── Status badge ──────────────────────────────────────────────────────────────
function _badge(status) {
  const map = {
    ok:   ['#d1fae5','#065f46','✓'],
    warn: ['#fef3c7','#92400e','⚠'],
    none: ['#fee2e2','#991b1b','✗'],
    na:   ['#f3f4f6','#6b7280','–'],
  }
  const [bg, fg, icon] = map[status] ?? map.na
  return `<span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:12px;font-weight:700;background:${bg};color:${fg};">${icon}</span>`
}

// ── Color for score % ─────────────────────────────────────────────────────────
function _scoreColor(pct) {
  if (pct === null) return '#9ca3af'
  if (pct >= 80) return '#059669'
  if (pct >= 40) return '#d97706'
  return '#dc2626'
}

// ─── Main render ──────────────────────────────────────────────────────────────
export async function renderSupervisorDashboard(container, teacher) {
  container.innerHTML = `
    <div style="padding:24px;max-width:1100px;margin:0 auto;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
        <div>
          <h2 style="font-size:20px;font-weight:700;margin:0;">Dashboard ติดตามความคืบหน้า</h2>
          <p style="color:#6b7280;font-size:13px;margin:2px 0 0;">
            ${_positionLabel(teacher.position)} — ${teacher.full_name}
          </p>
        </div>
      </div>
      <div id="sv-loading" style="text-align:center;padding:40px;color:#6b7280;">
        <div style="font-size:32px;margin-bottom:8px;">⏳</div>กำลังโหลดข้อมูล...
      </div>
      <div id="sv-body" style="display:none;"></div>
    </div>`

  try {
    const [allMetrics, depts] = await Promise.all([
      getSupervisorProgress(),
      getDepartments(),
    ])

    // กรองตามขอบเขต role
    const metrics = _filterByRole(allMetrics, teacher)

    document.getElementById('sv-loading').style.display = 'none'
    const body = document.getElementById('sv-body')
    body.style.display = ''
    body.innerHTML = _renderBody(metrics, depts, teacher)
    _attachEvents(body, metrics)

  } catch(e) {
    document.getElementById('sv-loading').innerHTML = `<div style="color:#dc2626;">โหลดข้อมูลไม่สำเร็จ: ${e.message}</div>`
  }
}

function _positionLabel(pos) {
  return { dept_head: 'หัวหน้ากลุ่มสาระ', registrar: 'หัวหน้าฝ่ายทะเบียน',
           academic_samai: 'หัวหน้าวิชาการสามัญ', academic_religion: 'หัวหน้าวิชาการศาสนา' }[pos] ?? 'หัวหน้า'
}

function _filterByRole(metrics, teacher) {
  if (teacher.position === 'dept_head') {
    // เห็นเฉพาะครูในกลุ่มสาระตัวเอง (ใช้ dept field จาก teachers)
    const myDept = teacher.dept
    return metrics.filter(m => m.dept === myDept && m.id !== teacher.id)
  }
  if (teacher.position === 'academic_samai') {
    return metrics.filter(m => m.category !== 'ศาสนา' && m.id !== teacher.id)
  }
  if (teacher.position === 'academic_religion') {
    return metrics.filter(m => m.category === 'ศาสนา' && m.id !== teacher.id)
  }
  // registrar = ทุกคน
  return metrics.filter(m => m.id !== teacher.id)
}

function _renderBody(metrics, depts, teacher) {
  // ── คำนวณ aggregate สำหรับ donut charts ──
  const total = metrics.length
  const profileOk  = metrics.filter(m => m.profileStatus === 'ok').length
  const attOk      = metrics.filter(m => m.attStatus === 'ok').length
  const scoreOk    = metrics.filter(m => m.scoreStatus === 'ok').length

  const pProfile = total ? Math.round(profileOk / total * 100) : 0
  const pAtt     = total ? Math.round(attOk    / total * 100) : 0
  const pScore   = total ? Math.round(scoreOk  / total * 100) : 0

  // สร้าง dept tabs ถ้า role กว้างกว่า dept_head
  const showDeptTabs = teacher.position !== 'dept_head'
  const uniqueDepts = [...new Set(metrics.map(m => m.dept).filter(Boolean))].sort()

  return `
    <!-- Donut summary -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px;">
      <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;padding:16px;display:flex;flex-direction:column;align-items:center;">
        ${_donut(pProfile,'#6366f1','โปรไฟล์ครู',`${profileOk}/${total} คน`)}
      </div>
      <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;padding:16px;display:flex;flex-direction:column;align-items:center;">
        ${_donut(pAtt,'#0ea5e9','เช็คชื่อ (ทันปัจจุบัน)',`${attOk}/${total} คน`)}
      </div>
      <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;padding:16px;display:flex;flex-direction:column;align-items:center;">
        ${_donut(pScore,'#10b981','ลงคะแนน',`${scoreOk}/${total} คน`)}
      </div>
    </div>

    <!-- Dept tabs (registrar/academic only) -->
    ${showDeptTabs ? `
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">
      <button class="sv-tab sv-tab-active" data-dept="">ทั้งหมด (${total})</button>
      ${uniqueDepts.map(d => {
        const n = metrics.filter(m => m.dept === d).length
        return `<button class="sv-tab" data-dept="${d}">${d} (${n})</button>`
      }).join('')}
    </div>` : ''}

    <!-- Teacher table -->
    <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;" id="sv-table-wrap">
      ${_renderTable(metrics, metrics)}
    </div>`
}

function _renderTable(all, filtered) {
  const rows = filtered.map(m => {
    const attText = m.attStatus === 'na' ? '–'
      : m.lastAtt ? `${m.daysSinceAtt}ว.ที่แล้ว` : 'ยังไม่บันทึก'
    const attColor = m.daysSinceAtt <= 7 ? '#059669' : m.daysSinceAtt <= 14 ? '#d97706' : '#dc2626'
    const scoreTxt = m.scorePct !== null ? `${m.scorePct}%` : '–'

    return `<tr class="sv-row" data-tid="${m.id}" style="cursor:pointer;border-bottom:1px solid #f3f4f6;transition:background .15s;">
      <td style="padding:10px 12px;">
        <div style="font-weight:600;font-size:13px;">${m.full_name}</div>
        <div style="font-size:11px;color:#6b7280;">${m.dept ?? ''} · ${m.category ?? ''}</div>
      </td>
      <td style="padding:10px 12px;text-align:center;">${_badge(m.profileStatus)}</td>
      <td style="padding:10px 12px;text-align:center;">
        <span style="font-size:12px;font-weight:600;color:${m.datesOk === m.classCount && m.classCount > 0 ? '#059669':'#dc2626'};">
          ${m.datesOk}/${m.classCount}
        </span>
      </td>
      <td style="padding:10px 12px;text-align:center;">
        ${_badge(m.attStatus)}
        <div style="font-size:10px;color:${attColor};margin-top:2px;">${attText}</div>
      </td>
      <td style="padding:10px 12px;text-align:center;">
        <span style="font-size:13px;font-weight:700;color:${_scoreColor(m.scorePct)}">${scoreTxt}</span>
      </td>
      <td style="padding:10px 12px;text-align:center;">
        <button class="sv-view-btn" data-tid="${m.id}"
          style="padding:4px 10px;border:1px solid #d1d5db;border-radius:6px;background:#f9fafb;font-size:12px;cursor:pointer;">
          ดู
        </button>
      </td>
    </tr>`
  }).join('')

  return `<table style="width:100%;border-collapse:collapse;">
    <thead>
      <tr style="background:#f9fafb;border-bottom:2px solid #e5e7eb;">
        <th style="padding:10px 12px;text-align:left;font-size:13px;color:#374151;">ครูผู้สอน</th>
        <th style="padding:10px 12px;text-align:center;font-size:12px;color:#374151;">โปรไฟล์</th>
        <th style="padding:10px 12px;text-align:center;font-size:12px;color:#374151;">วันสอน</th>
        <th style="padding:10px 12px;text-align:center;font-size:12px;color:#374151;">เช็คชื่อ</th>
        <th style="padding:10px 12px;text-align:center;font-size:12px;color:#374151;">คะแนน</th>
        <th style="padding:10px 12px;text-align:center;"></th>
      </tr>
    </thead>
    <tbody id="sv-tbody">${rows || '<tr><td colspan="6" style="text-align:center;padding:24px;color:#9ca3af;">ไม่มีข้อมูลครู</td></tr>'}</tbody>
  </table>`
}

function _attachEvents(body, metrics) {
  // Tab filter
  body.querySelectorAll('.sv-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      body.querySelectorAll('.sv-tab').forEach(b => b.classList.remove('sv-tab-active'))
      btn.classList.add('sv-tab-active')
      const dept = btn.dataset.dept
      const filtered = dept ? metrics.filter(m => m.dept === dept) : metrics
      document.getElementById('sv-table-wrap').innerHTML = _renderTable(metrics, filtered)
      _attachTableEvents(document.getElementById('sv-table-wrap'), metrics)
    })
  })

  _attachTableEvents(body, metrics)
}

function _attachTableEvents(wrap, metrics) {
  wrap.querySelectorAll('.sv-row').forEach(row => {
    row.addEventListener('mouseenter', () => row.style.background = '#f9fafb')
    row.addEventListener('mouseleave', () => row.style.background = '')
  })
  wrap.querySelectorAll('.sv-view-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      const tid = parseInt(btn.dataset.tid)
      const t = metrics.find(m => m.id === tid)
      if (t) showTeacherDetail(t)
    })
  })
}

function showTeacherDetail(t) {
  // Modal แสดง detail ครูรายบุคคล
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center;'
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:16px;width:480px;max-height:80vh;overflow-y:auto;padding:24px;position:relative;">
      <button id="sv-close" style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;">✕</button>
      <div style="display:flex;gap:12px;align-items:center;margin-bottom:16px;">
        ${t.image_url ? `<img src="${t.image_url}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;">` :
          `<div style="width:48px;height:48px;border-radius:50%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;font-size:20px;">👤</div>`}
        <div>
          <div style="font-weight:700;font-size:16px;">${t.full_name}</div>
          <div style="color:#6b7280;font-size:13px;">${t.dept ?? ''} · ${t.category ?? ''}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
        ${_metricCard('👤 โปรไฟล์', t.profileStatus === 'ok' ? 'ครบถ้วน' : t.profileStatus === 'warn' ? 'ไม่ครบ (บางส่วน)' : 'ยังไม่กรอก', t.profileStatus)}
        ${_metricCard('📅 วันสอน', `ระบุแล้ว ${t.datesOk}/${t.classCount} ห้อง`, t.datesOk === t.classCount && t.classCount > 0 ? 'ok' : t.datesOk > 0 ? 'warn' : 'none')}
        ${_metricCard('✅ เช็คชื่อ', t.lastAtt ? `ล่าสุด ${t.daysSinceAtt} วันที่แล้ว` : 'ยังไม่เคยบันทึก', t.attStatus)}
        ${_metricCard('📊 คะแนน', t.scorePct !== null ? `กรอกแล้ว ${t.scorePct}%` : 'ยังไม่มีคอลัมน์คะแนน', t.scoreStatus)}
      </div>
      <div style="font-weight:600;font-size:13px;margin-bottom:8px;color:#374151;">รายวิชาที่รับผิดชอบ (${t.classCount} ห้อง)</div>
      ${t.myClasses.map(c => `
        <div style="display:flex;justify-content:space-between;padding:6px 10px;background:#f9fafb;border-radius:8px;margin-bottom:4px;font-size:12px;">
          <span style="font-weight:600;">${c.class_name}</span>
          <span style="color:#6b7280;">${c.master_subjects?.subject_name ?? ''}</span>
          <span style="${c.day1_date ? 'color:#059669' : 'color:#dc2626'};font-size:11px;">${c.day1_date ? '✓ วันสอน' : '✗ วันสอน'}</span>
        </div>`).join('')}
    </div>`
  document.body.appendChild(overlay)
  overlay.querySelector('#sv-close').onclick = () => overlay.remove()
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
}

function _metricCard(title, desc, status) {
  const colors = { ok: '#d1fae5', warn: '#fef3c7', none: '#fee2e2', na: '#f3f4f6' }
  return `<div style="background:${colors[status]??'#f3f4f6'};border-radius:10px;padding:10px 12px;">
    <div style="font-size:12px;font-weight:600;margin-bottom:2px;">${title}</div>
    <div style="font-size:12px;color:#374151;">${desc}</div>
  </div>`
}

// ── Tab style (inject once) ────────────────────────────────────────────────────
const _style = document.createElement('style')
_style.textContent = `
.sv-tab { padding:6px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;font-size:12px;cursor:pointer;font-family:inherit; }
.sv-tab-active { background:#1d4ed8;color:#fff;border-color:#1d4ed8; }
.sv-tab:hover:not(.sv-tab-active) { background:#f3f4f6; }
`
document.head.appendChild(_style)
