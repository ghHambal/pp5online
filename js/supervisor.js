// ─── Supervisor Dashboard ──────────────────────────────────────────────────────
import {
  getSupervisorProgress, getDepartments,
  getSupervisorComments, addSupervisorComment, deleteSupervisorComment,
  addSupervisorCommentWithNotify,
  getAttendanceSummaryByClass, getScoreSummaryByClass,
  getClassStudentsAndScores, getClassAttendanceFull,
  assignTeacherToDept,
} from './api.js'
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
  dept_head:         'หัวหน้ากลุ่มสาระ',
  registrar_samai:   'หัวหน้าฝ่ายทะเบียน (สามัญ)',
  registrar_religion:'หัวหน้าฝ่ายทะเบียน (ศาสนา)',
  registrar_pvch:    'หัวหน้าฝ่ายทะเบียน (ปวช)',
  academic_samai:    'หัวหน้าวิชาการสามัญ',
  academic_religion: 'หัวหน้าวิชาการศาสนา',
  academic_pvch:     'หัวหน้าวิชาการปวช',
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
  const p = teacher.position
  if (p === 'dept_head')
    return metrics.filter(m => m.dept === teacher.dept)
  if (p === 'academic_samai' || p === 'registrar_samai')
    return metrics.filter(m => !['AGM','AGMVOC','ACDMVOC'].includes(m.subject_group))
  if (p === 'academic_religion' || p === 'registrar_religion')
    return metrics.filter(m => ['AGM','AGMVOC'].includes(m.subject_group))
  if (p === 'academic_pvch' || p === 'registrar_pvch')
    return metrics.filter(m => m.subject_group === 'ACDMVOC')
  return metrics
}

// ── dept tab key ──────────────────────────────────────────────────────────────
function _deptKey(m) { return m.dept ?? '—' }

// ─── Main render ──────────────────────────────────────────────────────────────
let _allMetrics = []
let _selfTeacher = null
let _depts = []
let _svContainer = null  // main container reference for back navigation

export async function renderSupervisorDashboard(container, teacher) {
  _selfTeacher = teacher
  _svContainer = container  // store for back navigation
  container.innerHTML = `<div id="sv-root" style="padding:20px;max-width:1100px;margin:0 auto;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      <div>
        <h2 style="font-size:18px;font-weight:700;margin:0;">Dashboard ติดตามความคืบหน้า</h2>
        <p style="color:#6b7280;font-size:13px;margin:2px 0 0;">${POS_LABEL[teacher.position]??'หัวหน้า'}${teacher.dept?' — '+teacher.dept:''}<span style="color:#9ca3af;"> — ${teacher.full_name}</span></p>
      </div>
    </div>
    <div id="sv-loading" style="text-align:center;padding:40px;color:#6b7280;">⏳ กำลังโหลดข้อมูล...</div>
    <div id="sv-dash" style="display:none;"></div>
  </div>`

  try {
    ;[_allMetrics, _depts] = await Promise.all([getSupervisorProgress(), getDepartments()])
    const metrics = _filterByRole(_allMetrics, teacher)
    document.getElementById('sv-loading').style.display = 'none'
    _renderDashboard(document.getElementById('sv-dash'), metrics, teacher)
  } catch(e) {
    document.getElementById('sv-loading').innerHTML = `<div style="color:#dc2626;">โหลดไม่สำเร็จ: ${e.message}</div>`
  }
}

function _renderDashboard(el, metrics, teacher) {
  const n = metrics.length
  const pP = n ? Math.round(metrics.filter(m=>m.profileStatus==='ok').length/n*100) : 0
  const pA = n ? Math.round(metrics.filter(m=>m.attStatus==='ok').length/n*100) : 0
  const pS = n ? Math.round(metrics.filter(m=>m.scoreStatus==='ok').length/n*100) : 0

  const showTabs = teacher.position !== 'dept_head'
  const deptKeys = [...new Set(metrics.map(_deptKey))].sort()

  el.style.display = ''
  el.innerHTML = `
    <!-- Donuts -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px;">
      ${['#6366f1','#0ea5e9','#10b981'].map((c,i)=>`
        <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;padding:16px;display:flex;justify-content:center;">
          ${_donut([pP,pA,pS][i],c,['โปรไฟล์ครู','เช็คชื่อ (ทันปัจจุบัน)','ลงคะแนน'][i],
            `${metrics.filter(m=>[m.profileStatus,m.attStatus,m.scoreStatus][i]==='ok').length}/${n} คน`)}
        </div>`).join('')}
    </div>
    <!-- Dept tabs + add member button -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:16px;">
      ${showTabs?`<div style="display:flex;gap:8px;flex-wrap:wrap;" id="sv-tabs">
        <button class="sv-tab-btn active" data-dept="">ทั้งหมด (${n})</button>
        ${deptKeys.map(d=>`<button class="sv-tab-btn" data-dept="${d}">${d} (${metrics.filter(m=>_deptKey(m)===d).length})</button>`).join('')}
      </div>`:'<div></div>'}
      ${teacher.position==='dept_head'?`
        <button id="sv-add-member"
          style="margin-left:auto;padding:6px 14px;border:1.5px dashed #6366f1;border-radius:20px;background:#f5f3ff;color:#6366f1;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap;">
          + เพิ่มสมาชิกกลุ่ม
        </button>`:''}
    </div>
    <!-- Table -->
    <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;" id="sv-tbl">
      ${_table(metrics)}
    </div>`

  // tab events
  el.querySelectorAll('.sv-tab-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      el.querySelectorAll('.sv-tab-btn').forEach(x=>x.classList.remove('active'))
      b.classList.add('active')
      const d = b.dataset.dept
      const f = d ? metrics.filter(m=>_deptKey(m)===d) : metrics
      document.getElementById('sv-tbl').innerHTML = _table(f)
      _bindTable(el, metrics)
    })
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
      } catch(e) { btn.disabled = false; btn.textContent = '+ เพิ่ม'; alert(e.message) }
    }
  })
}

function _table(rows) {
  if (!rows.length) return `<div style="text-align:center;padding:24px;color:#9ca3af;">ไม่มีข้อมูลครู</div>`
  return `<table style="width:100%;border-collapse:collapse;">
    <thead><tr style="background:#f9fafb;border-bottom:2px solid #e5e7eb;">
      <th style="padding:10px 12px;text-align:left;font-size:13px;">ครูผู้สอน</th>
      <th style="padding:10px 12px;text-align:center;font-size:12px;">โปรไฟล์</th>
      <th style="padding:10px 12px;text-align:center;font-size:12px;">วันสอน</th>
      <th style="padding:10px 12px;text-align:center;font-size:12px;">เช็คชื่อ</th>
      <th style="padding:10px 12px;text-align:center;font-size:12px;">คะแนน</th>
      <th style="padding:10px;"></th>
    </tr></thead>
    <tbody>${rows.map(m=>{
      const attTxt = m.attStatus==='na'?'–': m.lastAtt?`${m.daysSinceAtt}ว.ที่แล้ว`:'ยังไม่บันทึก'
      const attCol = m.daysSinceAtt<=7?'#059669':m.daysSinceAtt<=14?'#d97706':'#dc2626'
      const regBadge = !m.isRegistered
        ? `<span style="display:inline-block;padding:1px 6px;border-radius:10px;font-size:10px;background:#fef3c7;color:#92400e;margin-left:4px;">ยังไม่ลงทะเบียน</span>` : ''
      return `<tr class="sv-row" data-tid="${m.id}" style="border-bottom:1px solid #f3f4f6;cursor:pointer;${!m.isRegistered?'background:#fffbeb;':''}">
        <td style="padding:10px 12px;">
          <div style="font-weight:600;font-size:13px;">${m.full_name??'—'}${regBadge}</div>
          <div style="font-size:11px;color:#6b7280;">${m.dept??'—'} · ${m.category??'—'}</div>
        </td>
        <td style="padding:10px 12px;text-align:center;">${m.isRegistered?_badge(m.profileStatus):'<span style="color:#9ca3af;font-size:12px;">–</span>'}</td>
        <td style="padding:10px 12px;text-align:center;">
          ${m.isRegistered?`<span style="font-size:12px;font-weight:600;color:${m.datesOk===m.classCount&&m.classCount>0?'#059669':'#dc2626'};">${m.datesOk}/${m.classCount}</span>`:'<span style="color:#9ca3af;">–</span>'}</td>
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
      <div style="font-weight:700;font-size:14px;color:#374151;margin-bottom:10px;">
        📚 รายวิชาที่รับผิดชอบ (${m.classCount} ห้อง)
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
            ${['general:ทั่วไป','profile:โปรไฟล์','dates:วันสอน','attendance:เช็คชื่อ','scores:คะแนน'].map(s=>{
              const [val,label] = s.split(':')
              return `<div class="sv-cat-row" data-cat="${val}"
                style="display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;border:1.5px solid #e5e7eb;cursor:pointer;transition:all .15s;">
                <div class="sv-cat-label" style="min-width:80px;font-size:13px;font-weight:600;color:#374151;padding-top:2px;">${label}</div>
                <textarea class="sv-cat-textarea" data-cat="${val}" rows="2" maxlength="300"
                  placeholder="พิมพ์ความคิดเห็นสำหรับ ${label}..."
                  style="display:none;flex:1;border:1px solid #d1d5db;border-radius:8px;padding:6px 8px;font-size:12px;font-family:inherit;resize:none;"></textarea>
              </div>`
            }).join('')}
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

  document.getElementById('sv-back').onclick = () => renderSupervisorDashboard(_svContainer, _selfTeacher)

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

  // ปพ.5 buttons
  document.querySelectorAll('.sv-pp5-cls').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      openPP5Doc(parseInt(btn.dataset.cid))
    })
  })

  // Comment UI — vertical multi-select
  document.getElementById('sv-open-comment-ui').onclick = () => {
    document.getElementById('sv-comment-ui').style.display = ''
    document.getElementById('sv-open-comment-ui').style.display = 'none'
  }
  const greenGlow = 'box-shadow:0 0 0 2px #059669,0 0 8px rgba(5,150,105,.3);border-color:#059669;background:#f0fdf4;'
  document.querySelectorAll('.sv-cat-row').forEach(row => {
    row.onclick = e => {
      if (e.target.tagName === 'TEXTAREA') return
      const ta = row.querySelector('textarea')
      const isSelected = row.dataset.selected === '1'
      if (isSelected) {
        row.dataset.selected = '0'
        row.style.cssText = 'display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;border:1.5px solid #e5e7eb;cursor:pointer;transition:all .15s;'
        ta.style.display = 'none'
      } else {
        row.dataset.selected = '1'
        row.style.cssText = `display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;transition:all .15s;${greenGlow}`
        ta.style.display = ''
        ta.focus()
      }
    }
  })
  document.getElementById('sv-save-comment').onclick = async () => {
    const notify = document.getElementById('sv-notify-chk').checked
    const selected = [...document.querySelectorAll('.sv-cat-row[data-selected="1"]')]
    const toSave = selected.map(row => ({
      cat: row.dataset.cat,
      txt: row.querySelector('textarea').value.trim()
    })).filter(x => x.txt)
    if (!toSave.length) { alert('กรุณาพิมพ์ความคิดเห็นอย่างน้อย 1 หัวข้อ'); return }
    const saveBtn = document.getElementById('sv-save-comment')
    saveBtn.disabled = true; saveBtn.textContent = '⏳ กำลังบันทึก...'
    try {
      for (const { cat, txt } of toSave) {
        await addSupervisorCommentWithNotify(_selfTeacher.id, m.id, cat, txt, notify)
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
    } catch(e) { alert(e.message) } finally { saveBtn.disabled = false; saveBtn.textContent = 'บันทึกทั้งหมด' }
  }

  _loadPastComments(m.id)
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

function _showTeacherProfile(m) {
  const overlay = _makeOverlay()
  const glow = v => v ? '' : 'box-shadow:0 0 0 2px #ef4444,0 0 8px rgba(239,68,68,.4);border-radius:8px;'
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
        ['🏫 กลุ่มสาระ', m.dept],
        ['👤 ประเภท', m.category],
        ['📚 กลุ่มวิชา', m.subject_group],
        ['📧 อีเมลเข้าสู่ระบบ', m.login_email],
        ['🔑 รหัสครู', m.teacher_code],
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
  // floating back + navigate to teacher's class view
  document.getElementById('sv-fab-back')?.remove()
  const fab = document.createElement('button')
  fab.id = 'sv-fab-back'
  fab.style.cssText = `position:fixed;top:12px;left:12px;z-index:9100;
    background:#1d4ed8;color:#fff;border:none;border-radius:24px;
    padding:8px 16px;font-size:13px;font-weight:600;cursor:pointer;
    box-shadow:0 4px 12px rgba(0,0,0,.25);font-family:inherit;`
  fab.textContent = '← กลับ'
  const main = document.getElementById('main-content') ?? document.querySelector('main')
  fab.onclick = () => { fab.remove(); _showDetail(m) }
  document.body.appendChild(fab)

  // เก็บ supervisor flag เพื่อให้ teacher view ซ่อน elements ที่ไม่ต้องการ
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
    } catch(e) { alert(e.message) } finally { sendBtn.disabled = false }
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
