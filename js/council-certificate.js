// js/council-certificate.js — สร้าง HTML เกียรติบัตรกิจกรรมสภานักเรียน
// แยกออกมาเป็นไฟล์กลาง (ไม่ใช่ฟังก์ชันในตัว council.js) เพราะต้องใช้ร่วมกัน 3 ที่:
// council.js (หน้าจัดการ+ตัวแก้ไขเทมเพลต), student-views.js (การ์ดเกียรติบัตรในหน้าของนักเรียนเอง)
// และ council-certificate-editor.js (ตัวแก้ไขลากวาง ใช้เอนจินเรนเดอร์เดียวกันเพื่อพรีวิวให้ตรงของจริง)
// — council.js เป็น page-controller ของ council.html มี state/DOM query ทั้งไฟล์ ไม่ควร import
// ข้ามไปใช้ในหน้าอื่น จึงแยกเฉพาะส่วนที่เป็น "สร้าง HTML" ล้วนๆ ออกมาที่นี่แทน
//
// รูปแบบข้อมูล layout (jsonb): { background: {...}, elements: [{ id, text, x, y, fontSize, color, align, bold, maxWidth, borderTop }] }
// x/y เป็น % ตำแหน่งจุดยึด (0-100), text เป็นสตริงดิบที่แอดมินพิมพ์เอง อาจมี placeholder token แทรกได้
// (เช่น {{ชื่อ}}) ซึ่งจะถูกแทนที่ด้วยข้อมูลจริงตอนเรนเดอร์ — ทำให้แก้ข้อความ/ตำแหน่ง/สไตล์ได้อิสระ
// จากหน้าตั้งค่าล้วนๆ ไม่ต้องแตะโค้ดเลย ส่วนเทมเพลตเก่าก่อนมีฟีเจอร์นี้ (layout เป็น null) จะ fallback
// ไปใช้ defaultLayoutFor(preset_key/custom) ซึ่งเรนเดอร์ออกมาหน้าตาเดิมเป๊ะ ไม่กระทบเทมเพลตที่มีอยู่แล้ว
const _esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export const CERT_PRESETS = {
  gold_classic: { bg: '#fdfaf3', cardBg: '#fffdf8', border: '#b5892b', borderWidth: 6, borderStyle: 'double', accent: '#8a6a1f', accentSoft: '#f6ecd4', icon: '🏛️' },
  blue_modern: { bg: '#f0f6fb', cardBg: '#ffffff', border: '#2563eb', borderWidth: 4, borderStyle: 'solid', accent: '#1d4ed8', accentSoft: '#dbeafe', icon: '🎓' },
  green_nature: { bg: '#f2f8f2', cardBg: '#ffffff', border: '#15803d', borderWidth: 4, borderStyle: 'solid', accent: '#166534', accentSoft: '#dcfce7', icon: '🌿' },
}
export const CERT_PRESET_LABELS = { gold_classic: '🏛️ ทองคลาสสิก', blue_modern: '🎓 น้ำเงินโมเดิร์น', green_nature: '🌿 เขียวธรรมชาติ' }

// ปุ่มแทรกด่วนในตัวแก้ไข — แทนที่ด้วยข้อมูลจริงตอนเรนเดอร์ (ดู substitutePlaceholders)
export const CERT_PLACEHOLDER_TOKENS = [
  { token: '{{ชื่อ}}', label: 'ชื่อนักเรียน' },
  { token: '{{กิจกรรม}}', label: 'ชื่อกิจกรรม' },
  { token: '{{สภา}}', label: 'ชื่อสภานักเรียน' },
  { token: '{{วันที่}}', label: 'วันที่ออก' },
  { token: '{{เลขที่}}', label: 'เลขที่เกียรติบัตร' },
]

function substitutePlaceholders(escapedText, ctx) {
  return String(escapedText ?? '')
    .replaceAll('{{ชื่อ}}', ctx.name)
    .replaceAll('{{กิจกรรม}}', ctx.activityTitle)
    .replaceAll('{{สภา}}', ctx.councilName)
    .replaceAll('{{วันที่}}', ctx.issuedAt)
    .replaceAll('{{เลขที่}}', ctx.no ? 'เลขที่ ' + ctx.no : '')
}

// เทมเพลตใหม่ทุกอันเริ่มจากโครงนี้ (แก้ต่อได้ทุกจุดในตัวแก้ไข) — kind: 'gold_classic'|'blue_modern'|'green_nature'|'custom'
export function defaultLayoutFor(kind) {
  const preset = CERT_PRESETS[kind] ?? null
  const accent = preset?.accent ?? '#1d1519'
  const ink = '#1d1519'
  const muted = '#6b7280'
  const icon = preset?.icon ?? '🏅'
  return {
    background: preset
      ? { type: 'flat', color: preset.bg, cardColor: preset.cardBg, borderColor: preset.border, borderWidth: preset.borderWidth, borderStyle: preset.borderStyle }
      : { type: 'image', imageUrl: null },
    elements: [
      { id: 'icon', text: icon, x: 50, y: 12, fontSize: 36, color: accent, align: 'center', bold: false },
      { id: 'title', text: 'เกียรติบัตร', x: 50, y: 24, fontSize: 34, color: accent, align: 'center', bold: true },
      { id: 'sub', text: 'มอบเพื่อแสดงว่า', x: 50, y: 34, fontSize: 14, color: muted, align: 'center', bold: false },
      { id: 'name', text: '{{ชื่อ}}', x: 50, y: 45, fontSize: 26, color: ink, align: 'center', bold: true },
      { id: 'body', text: 'ได้เข้าร่วมกิจกรรม {{กิจกรรม}} ของ{{สภา}} จนสำเร็จตามเกณฑ์ที่กำหนด จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติสืบไป', x: 50, y: 58, fontSize: 15, color: ink, align: 'center', bold: false, maxWidth: 72 },
      { id: 'meta', text: 'ให้ไว้ ณ วันที่ {{วันที่}} {{เลขที่}}', x: 50, y: 74, fontSize: 12, color: muted, align: 'center', bold: false },
      { id: 'sign1', text: 'ครูที่ปรึกษาสภานักเรียน', x: 27, y: 90, fontSize: 12, color: muted, align: 'center', bold: false, borderTop: true },
      { id: 'sign2', text: 'ผู้อำนวยการโรงเรียน', x: 73, y: 90, fontSize: 12, color: muted, align: 'center', bold: false, borderTop: true },
    ],
  }
}

export function layoutForTemplate(template) {
  if (template?.layout?.elements) return template.layout
  return defaultLayoutFor(template?.type === 'custom' ? 'custom' : (template?.preset_key ?? 'gold_classic'))
}

function elementStyle(el) {
  const alignTransform = el.align === 'left' ? 'translate(0,-50%)' : el.align === 'right' ? 'translate(-100%,-50%)' : 'translate(-50%,-50%)'
  const widthRule = el.borderTop ? 'width:180px;' : el.maxWidth ? `width:${el.maxWidth}%;` : 'white-space:nowrap;'
  const borderRule = el.borderTop ? 'border-top:1px solid #999;padding-top:6px;' : ''
  return `position:absolute;left:${el.x}%;top:${el.y}%;transform:${alignTransform};font-size:${el.fontSize}px;font-weight:${el.bold ? 700 : 400};color:${_esc(el.color)};text-align:${el.align};line-height:1.6;${widthRule}${borderRule}font-family:'Sarabun',sans-serif;`
}

// canvasStyle: ให้ตัวแก้ไข (council-certificate-editor.js) ส่ง style เพิ่มเติมสำหรับ container ได้ (เช่น cursor)
export function renderCertificateCanvasHtml({ layout, name, activityTitle, councilName, issuedAt, no }, canvasStyleExtra = '') {
  const ctx = { name: _esc(name), activityTitle: _esc(activityTitle), councilName: _esc(councilName), issuedAt: _esc(issuedAt), no: _esc(no) }
  const bg = layout.background ?? {}
  const bgStyle = bg.type === 'image' && bg.imageUrl
    ? `background:url('${_esc(bg.imageUrl)}') center/cover no-repeat;`
    : `background:${_esc(bg.color || '#fffdf8')};border:${bg.borderWidth ?? 4}px ${bg.borderStyle || 'solid'} ${_esc(bg.borderColor || '#999')};`
  const elementsHtml = (layout.elements ?? []).map(el =>
    `<div data-cert-el-id="${_esc(el.id)}" style="${elementStyle(el)}">${substitutePlaceholders(_esc(el.text), ctx)}</div>`
  ).join('')
  return `<div class="cert-canvas" style="position:relative;width:100%;aspect-ratio:1.414/1;${bgStyle}${canvasStyleExtra}">${elementsHtml}</div>`
}

export function buildActivityCertificateHtml({ student, activity, template, certRow, cfg }) {
  const layout = layoutForTemplate(template)
  const canvasHtml = renderCertificateCanvasHtml({
    layout,
    name: student?.full_name ?? '—',
    activityTitle: activity?.title ?? '—',
    councilName: cfg?.council_name || 'ระบบสภานักเรียน',
    issuedAt: new Date(certRow?.issued_at || Date.now()).toLocaleDateString('th-TH', { dateStyle: 'long' }),
    no: certRow?.certificate_no || '',
  })
  const name = _esc(student?.full_name ?? '—')
  return `<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>เกียรติบัตร ${name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'Sarabun', sans-serif; background: #e5e7eb; padding: 40px; margin: 0; }
      .cert-canvas { max-width: 1000px; margin: 0 auto; }
      @media print { body { background: #fff; padding: 0; } }
    </style></head>
    <body>
      ${canvasHtml}
      <div style="text-align:center;margin-top:20px;" class="no-print"><button onclick="window.print()" style="padding:8px 24px;font-size:13px;font-family:Sarabun,sans-serif;border-radius:8px;border:1px solid #999;background:#fff;cursor:pointer;">🖨️ พิมพ์ / บันทึกเป็น PDF</button></div>
      <style>@media print { .no-print { display:none } }</style>
    </body></html>`
}

export function openActivityCertificatePrint({ student, activity, template, certRow, cfg }, showToast) {
  const win = window.open('', '_blank', 'width=900,height=700')
  if (!win) { showToast?.('กรุณาอนุญาต Popup ในเบราว์เซอร์', 'warning'); return }
  win.document.open(); win.document.write(buildActivityCertificateHtml({ student, activity, template, certRow, cfg })); win.document.close()
}
