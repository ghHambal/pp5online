// ─── Supervisor Dashboard ──────────────────────────────────────────────────────
import {
  getSupervisorProgress, getDepartments,
  getSupervisorComments, addSupervisorComment, deleteSupervisorComment,
  getAttendanceSummaryByClass, getScoreSummaryByClass,
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
const POS_LABEL = { dept_head:'หัวหน้ากลุ่มสาระ', registrar:'หัวหน้าฝ่ายทะเบียน',
  academic_samai:'หัวหน้าวิชาการสามัญ', academic_religion:'หัวหน้าวิชาการศาสนา',
  academic_pvch:'หัวหน้าวิชาการปวช' }

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
  // รวมตัวเอง — ไม่ exclude
  if (teacher.position === 'dept_head') {
    return metrics.filter(m => m.dept === teacher.dept)
  }
  if (teacher.position === 'academic_samai') {
    return metrics.filter(m => m.category === 'สามัญ' && !['ACDMVOC'].includes(m.subject_group))
  }
  if (teacher.position === 'academic_religion') {
    return metrics.filter(m => m.category === 'ศาสนา')
  }
  if (teacher.position === 'academic_pvch') {
    return metrics.filter(m => m.subject_group === 'ACDMVOC')
  }
  // registrar = ทั้งหมด
  return metrics
}

// ── dept tab key ──────────────────────────────────────────────────────────────
function _deptKey(m) { return m.dept ?? '—' }

// ─── Main render ──────────────────────────────────────────────────────────────
let _allMetrics = []
let _selfTeacher = null
let _depts = []

export async function renderSupervisorDashboard(container, teacher) {
  _selfTeacher = teacher
  container.innerHTML = `<div id="sv-root" style="padding:20px;max-width:1100px;margin:0 auto;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      <div>
        <h2 style="font-size:18px;font-weight:700;margin:0;">Dashboard ติดตามความคืบหน้า</h2>
        <p style="color:#6b7280;font-size:13px;margin:2px 0 0;">${POS_LABEL[teacher.position]??'หัวหน้า'} — ${teacher.full_name}</p>
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
    <!-- Dept tabs -->
    ${showTabs?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;" id="sv-tabs">
      <button class="sv-tab-btn active" data-dept="">ทั้งหมด (${n})</button>
      ${deptKeys.map(d=>`<button class="sv-tab-btn" data-dept="${d}">${d} (${metrics.filter(m=>_deptKey(m)===d).length})</button>`).join('')}
    </div>`:''}
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
  const root = document.getElementById('sv-root')
  root.innerHTML = `
    <div style="max-width:900px;margin:0 auto;padding:20px;">
      <!-- Back -->
      <button id="sv-back" style="border:none;background:none;color:#6b7280;font-size:13px;cursor:pointer;margin-bottom:16px;display:flex;align-items:center;gap:4px;">
        ← กลับ Dashboard
      </button>
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
        ${m.image_url?`<img src="${m.image_url}" style="width:56px;height:56px;border-radius:50%;object-fit:cover;">`
          :`<div style="width:56px;height:56px;border-radius:50%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;font-size:24px;">👤</div>`}
        <div>
          <div style="font-size:18px;font-weight:700;">${m.full_name??'—'}</div>
          <div style="font-size:13px;color:#6b7280;">${m.dept??''} · ${m.category??''}</div>
        </div>
      </div>
      <!-- 4 metric cards -->
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:24px;">
        ${_metricCard('👤','โปรไฟล์',
          m.profileStatus==='ok'?'ครบถ้วน':m.profileStatus==='warn'?'ไม่ครบบางส่วน':'ยังไม่กรอก',
          m.profileStatus, 'profile')}
        ${_metricCard('📅','วันสอน',
          m.classCount?`ระบุแล้ว ${m.datesOk}/${m.classCount} ห้อง`:'ยังไม่มีห้องเรียน',
          m.datesOk===m.classCount&&m.classCount>0?'ok':m.datesOk>0?'warn':'none', 'dates')}
        ${_metricCard('✅','เช็คชื่อ',
          m.lastAtt?`ล่าสุด ${m.daysSinceAtt} วันที่แล้ว`:'ยังไม่เคยบันทึก',
          m.attStatus, 'attendance')}
        ${_metricCard('📊','คะแนน',
          m.scorePct!==null?`กรอกแล้ว ${m.scorePct}%`:'ยังไม่มีคอลัมน์คะแนน',
          m.scoreStatus, 'scores')}
      </div>
      <!-- Class list -->
      <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;padding:16px;margin-bottom:20px;">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px;color:#374151;">
          รายวิชาที่รับผิดชอบ (${m.classCount} ห้อง)
        </div>
        ${m.myClasses.length?m.myClasses.map(c=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-radius:8px;margin-bottom:4px;background:#f9fafb;font-size:13px;">
            <div style="flex:1;cursor:pointer;" class="sv-cls-row" data-cid="${c.id}">
              <span style="font-weight:600;">${c.class_name}</span>
              <span style="color:#6b7280;font-size:12px;margin-left:8px;">${c.master_subjects?.subject_name??''}</span>
              <span style="margin-left:8px;font-size:11px;color:${c.day1_date?'#059669':'#dc2626'};">${c.day1_date?'✓':'✗'} วันสอน</span>
            </div>
            <div style="display:flex;gap:6px;flex-shrink:0;margin-left:8px;">
              <button class="sv-cls-row" data-cid="${c.id}"
                style="padding:3px 8px;border:1px solid #d1d5db;border-radius:6px;background:#fff;font-size:11px;cursor:pointer;">📊 รายละเอียด</button>
              <button class="sv-pp5-btn" data-cid="${c.id}"
                style="padding:3px 8px;border:1px solid #4f46e5;border-radius:6px;background:#eef2ff;color:#4f46e5;font-size:11px;cursor:pointer;">📄 ปพ.5</button>
            </div>
          </div>`).join('')
          :`<div style="color:#9ca3af;font-size:13px;">ยังไม่มีห้องเรียน${!m.isRegistered?' (ครูยังไม่ได้ลงทะเบียนเข้าใช้งาน)':''}</div>`}
      </div>
      <!-- Comments -->
      <div id="sv-comments-section" style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;padding:16px;">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px;">💬 ความคิดเห็น / บันทึก</div>
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <input id="sv-comment-metric" type="hidden" value="general"/>
          <select id="sv-comment-cat" style="border:1px solid #d1d5db;border-radius:8px;padding:6px 10px;font-size:12px;font-family:inherit;">
            <option value="general">ทั่วไป</option>
            <option value="profile">โปรไฟล์</option>
            <option value="dates">วันสอน</option>
            <option value="attendance">เช็คชื่อ</option>
            <option value="scores">คะแนน</option>
          </select>
          <input id="sv-comment-input" type="text" placeholder="พิมพ์ความเห็น..." maxlength="200"
            style="flex:1;border:1px solid #d1d5db;border-radius:8px;padding:6px 10px;font-size:13px;font-family:inherit;"/>
          <button id="sv-comment-send"
            style="padding:6px 14px;background:#1d4ed8;color:#fff;border:none;border-radius:8px;font-size:12px;cursor:pointer;font-family:inherit;">
            บันทึก
          </button>
        </div>
        <div id="sv-comments-list" style="max-height:240px;overflow-y:auto;"></div>
      </div>
    </div>`

  // bind back
  document.getElementById('sv-back').onclick = () => renderSupervisorDashboard(root.parentElement, _selfTeacher)

  // bind metric cards
  root.querySelectorAll('.sv-metric-card').forEach(card=>{
    card.onclick = () => _openMetricPopup(m, card.dataset.metric)
  })

  // bind class rows → class detail popup
  root.querySelectorAll('.sv-cls-row').forEach(row=>{
    row.addEventListener('click', e => {
      e.stopPropagation()
      const cls = m.myClasses.find(c=>c.id===parseInt(row.dataset.cid))
      if(cls) _openClassPopup(m, cls)
    })
  })

  // bind ปพ.5 buttons
  root.querySelectorAll('.sv-pp5-btn').forEach(btn=>{
    btn.addEventListener('click', e => {
      e.stopPropagation()
      openPP5Doc(parseInt(btn.dataset.cid))
    })
  })

  // load and bind comments
  _loadComments(m.id)
  document.getElementById('sv-comment-send').onclick = async () => {
    const inp = document.getElementById('sv-comment-input')
    const cat = document.getElementById('sv-comment-cat').value
    const txt = inp.value.trim()
    if (!txt) return
    try {
      await addSupervisorComment(_selfTeacher.id, m.id, cat, txt)
      inp.value = ''
      await _loadComments(m.id)
    } catch(e) { alert('บันทึกไม่สำเร็จ: ' + e.message) }
  }
}

function _metricCard(icon, title, desc, status, metric) {
  const bg = {ok:'#d1fae5',warn:'#fef3c7',none:'#fee2e2',na:'#f3f4f6'}[status]??'#f3f4f6'
  return `<div class="sv-metric-card" data-metric="${metric}" style="background:${bg};">
    <div style="font-weight:700;font-size:14px;margin-bottom:4px;">${icon} ${title}</div>
    <div style="font-size:12px;color:#374151;">${desc}</div>
    <div style="font-size:11px;color:#6b7280;margin-top:4px;">คลิกเพื่อดูรายละเอียด →</div>
  </div>`
}

// ── comments ──────────────────────────────────────────────────────────────────
async function _loadComments(teacherId) {
  const el = document.getElementById('sv-comments-list')
  if (!el) return
  try {
    const list = await getSupervisorComments(teacherId)
    const catLabel = {general:'ทั่วไป',profile:'โปรไฟล์',dates:'วันสอน',attendance:'เช็คชื่อ',scores:'คะแนน'}
    el.innerHTML = list.length ? list.map(c=>`
      <div style="display:flex;justify-content:space-between;align-items:start;padding:8px 10px;background:#f9fafb;border-radius:8px;margin-bottom:6px;font-size:12px;">
        <div>
          <span style="background:#e0e7ff;color:#3730a3;border-radius:6px;padding:1px 6px;font-size:10px;margin-right:6px;">${catLabel[c.metric]??c.metric}</span>
          <strong>${c.teachers?.full_name??'หัวหน้า'}</strong>: ${c.comment}
          <div style="color:#9ca3af;font-size:10px;margin-top:2px;">${new Date(c.created_at).toLocaleString('th')}</div>
        </div>
        ${c.supervisor_id===_selfTeacher.id?`<button data-cid="${c.id}" class="sv-del-comment"
          style="border:none;background:none;color:#dc2626;cursor:pointer;font-size:14px;">✕</button>`:''}
      </div>`).join('')
      : `<div style="color:#9ca3af;font-size:13px;">ยังไม่มีความเห็น</div>`
    el.querySelectorAll('.sv-del-comment').forEach(b=>{
      b.onclick = async () => {
        if(!confirm('ลบความเห็นนี้?')) return
        await deleteSupervisorComment(parseInt(b.dataset.cid))
        await _loadComments(teacherId)
      }
    })
  } catch {}
}

// ── metric popup ──────────────────────────────────────────────────────────────
async function _openMetricPopup(m, metric) {
  const titles = {profile:'👤 โปรไฟล์', dates:'📅 วันสอน', attendance:'✅ เช็คชื่อ', scores:'📊 คะแนน'}
  const overlay = _makeOverlay()
  overlay.innerHTML = `<div class="sv-popup">
    <button id="sv-pop-close" style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;">✕</button>
    <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;">${titles[metric]??metric} — ${m.full_name}</h3>
    <div id="sv-pop-body">⏳ กำลังโหลด...</div>
  </div>`
  document.body.appendChild(overlay)
  overlay.querySelector('#sv-pop-close').onclick = ()=>overlay.remove()
  overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.remove()})

  const body = overlay.querySelector('#sv-pop-body')
  const classIds = m.myClasses.map(c=>c.id)

  if (metric==='profile') {
    body.innerHTML = `
      <div style="display:grid;gap:8px;">
        ${_infoRow('รูปโปรไฟล์', m.image_url?'✓ มีรูป':'✗ ยังไม่มีรูป', !!m.image_url)}
        ${_infoRow('เบอร์โทร', m.phone||'ยังไม่ระบุ', !!m.phone)}
        ${_infoRow('กลุ่มสาระ', m.dept||'ยังไม่ระบุ', !!m.dept)}
        ${_infoRow('ประเภท', m.category||'ยังไม่ระบุ', !!m.category)}
      </div>`
  } else if (metric==='dates') {
    body.innerHTML = m.myClasses.map(c=>`
      <div class="sv-cls-row" style="cursor:default;">
        <span style="font-weight:600;">${c.class_name}</span>
        <span style="font-size:12px;color:${c.day1_date?'#059669':'#dc2626'};">
          ${c.day1_date?`✓ ${c.day1_date}`:'✗ ยังไม่ระบุ'}</span>
      </div>`).join('') || '<div style="color:#9ca3af;">ไม่มีห้องเรียน</div>'
  } else if (metric==='attendance') {
    const atts = await getAttendanceSummaryByClass(classIds)
    const byClass = {}
    for(const a of atts){ if(!byClass[a.class_id]) byClass[a.class_id]={count:0,last:null}; byClass[a.class_id].count++; if(!byClass[a.class_id].last||a.check_date>byClass[a.class_id].last) byClass[a.class_id].last=a.check_date }
    body.innerHTML = m.myClasses.map(c=>{
      const info = byClass[c.id]
      return `<div class="sv-cls-row">
        <span style="font-weight:600;">${c.class_name}</span>
        <div style="text-align:right;font-size:12px;">
          <div style="color:${info?'#059669':'#dc2626'};">${info?`${info.count} รายการ`:'ยังไม่มี'}</div>
          ${info?`<div style="color:#6b7280;font-size:10px;">ล่าสุด: ${info.last?.slice(0,10)??''}</div>`:''}
        </div>
      </div>`}).join('') || '<div style="color:#9ca3af;">ไม่มีห้องเรียน</div>'
  } else if (metric==='scores') {
    const {cols, scores} = await getScoreSummaryByClass(classIds)
    const filled = new Set(scores.map(s=>s.score_column_id))
    const byClass = {}
    for(const c of cols){ if(!byClass[c.class_id]) byClass[c.class_id]={cols:0,filled:0}; byClass[c.class_id].cols++; if(filled.has(c.id)) byClass[c.class_id].filled++ }
    body.innerHTML = m.myClasses.map(c=>{
      const info = byClass[c.id]
      const pct = info?.cols?Math.round(info.filled/info.cols*100):null
      return `<div class="sv-cls-row">
        <span style="font-weight:600;">${c.class_name}</span>
        <span style="font-size:12px;font-weight:700;color:${pct===null?'#9ca3af':pct>=80?'#059669':pct>=40?'#d97706':'#dc2626'};">
          ${pct!==null?`${pct}% (${info.filled}/${info.cols} คอลัมน์)`:'ยังไม่มีคอลัมน์'}
        </span>
      </div>`}).join('') || '<div style="color:#9ca3af;">ไม่มีห้องเรียน</div>'
  }
}

// ── class detail popup ────────────────────────────────────────────────────────
async function _openClassPopup(m, cls) {
  const overlay = _makeOverlay()
  overlay.innerHTML = `<div class="sv-popup">
    <button id="sv-pop-close" style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;">✕</button>
    <h3 style="font-size:15px;font-weight:700;margin-bottom:4px;">${cls.class_name}</h3>
    <div style="font-size:12px;color:#6b7280;margin-bottom:16px;">${cls.master_subjects?.subject_name??''} — ${m.full_name}</div>
    <!-- mini tabs -->
    <div style="display:flex;gap:8px;margin-bottom:16px;">
      <button class="sv-tab-btn active" data-tab="att">✅ เช็คชื่อ</button>
      <button class="sv-tab-btn" data-tab="score">📊 คะแนน</button>
    </div>
    <div id="sv-cls-body">⏳ กำลังโหลด...</div>
  </div>`
  document.body.appendChild(overlay)
  overlay.querySelector('#sv-pop-close').onclick = ()=>overlay.remove()
  overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.remove()})

  // load data
  const [atts, {cols, scores}] = await Promise.all([
    getAttendanceSummaryByClass([cls.id]),
    getScoreSummaryByClass([cls.id]),
  ])
  const filled = new Set(scores.map(s=>s.score_column_id))

  function renderTab(tab) {
    const body = overlay.querySelector('#sv-cls-body')
    if(tab==='att') {
      const sessions = [...new Map(atts.map(a=>[a.session_number,a])).values()]
        .sort((a,b)=>a.session_number-b.session_number)
      body.innerHTML = sessions.length
        ? `<div style="font-size:12px;color:#6b7280;margin-bottom:8px;">บันทึก ${sessions.length} คาบ</div>`
          + sessions.map(a=>`<div style="display:flex;justify-content:space-between;padding:4px 8px;font-size:12px;border-bottom:1px solid #f3f4f6;">
            <span>คาบที่ ${a.session_number}</span><span style="color:#6b7280;">${a.check_date?.slice(0,10)??''}</span></div>`).join('')
        : '<div style="color:#9ca3af;font-size:13px;">ยังไม่มีการเช็คชื่อ</div>'
    } else {
      body.innerHTML = cols.filter(c=>c.class_id===cls.id).length
        ? cols.filter(c=>c.class_id===cls.id).map(c=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 8px;border-bottom:1px solid #f3f4f6;font-size:12px;">
            <span>${c.assignment_name??'—'} <span style="color:#9ca3af;">(${c.max_score})</span></span>
            <span style="color:${filled.has(c.id)?'#059669':'#dc2626'};font-weight:700;">${filled.has(c.id)?'✓ มีคะแนน':'✗ ยังไม่กรอก'}</span>
          </div>`).join('')
        : '<div style="color:#9ca3af;font-size:13px;">ยังไม่มีคอลัมน์คะแนน</div>'
    }
  }

  overlay.querySelectorAll('.sv-tab-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      overlay.querySelectorAll('.sv-tab-btn').forEach(x=>x.classList.remove('active'))
      b.classList.add('active')
      renderTab(b.dataset.tab)
    })
  })
  renderTab('att')
}

// ── utils ─────────────────────────────────────────────────────────────────────
function _makeOverlay() {
  const el = document.createElement('div')
  el.className = 'sv-overlay'
  return el
}
function _infoRow(label, val, ok) {
  return `<div style="display:flex;justify-content:space-between;padding:8px 12px;background:#f9fafb;border-radius:8px;">
    <span style="font-size:13px;color:#374151;">${label}</span>
    <span style="font-size:13px;font-weight:600;color:${ok?'#059669':'#dc2626'};">${val}</span>
  </div>`
}
