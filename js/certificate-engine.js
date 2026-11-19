// js/certificate-engine.js — เอนจินเรนเดอร์เกียรติบัตรกลาง ใช้ร่วมกันทุกระบบ (สภานักเรียน/ทั่วไป/ฯลฯ)
// พอร์ตมาจาก council-certificate.js เดิม (ตอนแรกทำเฉพาะสภา) แล้ว generalize ให้ไม่ผูกคำว่า
// "สภา"/"กิจกรรม" ตายตัวอีกต่อไป — ใช้ระบบ placeholder แบบ {{key}} อิสระแทน คนออกแบบเทมเพลตจะพิมพ์
// {{key}} อะไรก็ได้ แล้วผู้เรียก (ระบบไหนก็ตาม) ส่ง variables: {key: value} มาแทนที่ตอนเรนเดอร์จริง
// — 3 คีย์นี้ universal เติมอัตโนมัติเสมอไม่ต้องให้ผู้ออกพิมพ์เอง: {{name}} {{date}} {{no}}
//
// รูปแบบข้อมูล layout (jsonb): { background: {...}, elements: [{ id, text, x, y, fontSize, color, align, bold, maxWidth, borderTop }] }
// x/y เป็น % ตำแหน่งจุดยึด (0-100), text เป็นสตริงดิบที่ผู้ออกแบบพิมพ์เอง อาจมี placeholder token แทรกได้
// ซึ่งจะถูกแทนที่ด้วยข้อมูลจริงตอนเรนเดอร์ — ทำให้แก้ข้อความ/ตำแหน่ง/สไตล์ได้อิสระจากหน้าตั้งค่าล้วนๆ
// ไม่ต้องแตะโค้ดเลย ส่วนเทมเพลตเก่าก่อนมีฟีเจอร์นี้ (layout เป็น null) จะ fallback ไปใช้
// defaultLayoutFor(preset_key/custom) ซึ่งเรนเดอร์ออกมาหน้าตาเดิมเป๊ะ ไม่กระทบเทมเพลตที่มีอยู่แล้ว
import { openHtmlPrintOverlay } from './print-overlay.js'

const _esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export const CERT_PRESETS = {
  gold_classic: { bg: '#fdfaf3', cardBg: '#fffdf8', border: '#b5892b', borderWidth: 6, borderStyle: 'double', accent: '#8a6a1f', accentSoft: '#f6ecd4', icon: '🏛️' },
  blue_modern: { bg: '#f0f6fb', cardBg: '#ffffff', border: '#2563eb', borderWidth: 4, borderStyle: 'solid', accent: '#1d4ed8', accentSoft: '#dbeafe', icon: '🎓' },
  green_nature: { bg: '#f2f8f2', cardBg: '#ffffff', border: '#15803d', borderWidth: 4, borderStyle: 'solid', accent: '#166534', accentSoft: '#dcfce7', icon: '🌿' },
}
export const CERT_PRESET_LABELS = { gold_classic: '🏛️ ทองคลาสสิก', blue_modern: '🎓 น้ำเงินโมเดิร์น', green_nature: '🌿 เขียวธรรมชาติ' }

// ฟอนต์ไทยที่เหมาะกับเกียรติบัตร โหลดจาก Google Fonts เมื่อถูกเลือกใช้ใน layout
export const CERT_GOOGLE_FONTS = [
  'Sarabun', 'Prompt', 'Kanit', 'Mitr', 'Anuphan', 'Mali', 'Charm', 'Itim',
  'Chakra Petch', 'Noto Sans Thai', 'Noto Serif Thai',
]

// ปุ่มแทรกด่วนที่มีให้ใช้เสมอทุกระบบ (ผู้เรียกเพิ่ม token เฉพาะของตัวเองต่อได้ในตัวแก้ไข)
export const UNIVERSAL_PLACEHOLDER_TOKENS = [
  { token: '{{name}}', label: 'ชื่อผู้รับ' },
  { token: '{{date}}', label: 'วันที่ออก' },
  { token: '{{no}}', label: 'เลขที่เกียรติบัตร' },
]

// แทนที่ {{key}} ด้วยค่าจริงจาก variables แบบ generic — key อะไรก็ได้ ไม่จำกัดแค่ชุดคงที่แบบเดิม
function substitutePlaceholders(escapedText, variables) {
  return String(escapedText ?? '').replace(/\{\{(\w+)\}\}/g, (m, key) => (variables[key] != null ? variables[key] : m))
}

// เทมเพลตใหม่ทุกอันเริ่มจากโครงนี้ (แก้ต่อได้ทุกจุดในตัวแก้ไข) — kind: 'gold_classic'|'blue_modern'|'green_nature'|'custom'
export function defaultLayoutFor(kind) {
  const preset = CERT_PRESETS[kind] ?? null
  const accent = preset?.accent ?? '#1d1519'
  const ink = '#1d1519'
  const muted = '#6b7280'
  const icon = preset?.icon ?? '🏅'
  return {
    orientation: 'landscape', // 'landscape' | 'portrait' — เทมเพลตเก่าก่อนมีฟีเจอร์นี้ (ไม่มี field นี้) fallback เป็น landscape เสมอ (ดู renderCertificateCanvasHtml)
    background: preset
      ? { type: 'flat', color: preset.bg, cardColor: preset.cardBg, borderColor: preset.border, borderWidth: preset.borderWidth, borderStyle: preset.borderStyle }
      : { type: 'image', imageUrl: null },
    elements: [
      { id: 'icon', text: icon, x: 50, y: 12, fontSize: 36, color: accent, align: 'center', bold: false },
      { id: 'title', text: 'เกียรติบัตร', x: 50, y: 24, fontSize: 34, color: accent, align: 'center', bold: true },
      { id: 'sub', text: 'มอบเพื่อแสดงว่า', x: 50, y: 34, fontSize: 14, color: muted, align: 'center', bold: false },
      { id: 'name', text: '{{name}}', x: 50, y: 45, fontSize: 26, color: ink, align: 'center', bold: true },
      { id: 'body', text: 'ได้{{reason}}จนสำเร็จตามเกณฑ์ที่กำหนด จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติสืบไป', x: 50, y: 58, fontSize: 15, color: ink, align: 'center', bold: false, maxWidth: 72 },
      { id: 'meta', text: 'ให้ไว้ ณ วันที่ {{date}} เลขที่ {{no}}', x: 50, y: 74, fontSize: 12, color: muted, align: 'center', bold: false },
      { id: 'sign1', text: 'ครูผู้ออกให้', x: 27, y: 90, fontSize: 12, color: muted, align: 'center', bold: false, borderTop: true },
      { id: 'sign2', text: 'ผู้อำนวยการโรงเรียน', x: 73, y: 90, fontSize: 12, color: muted, align: 'center', bold: false, borderTop: true },
    ],
  }
}

export function layoutForTemplate(template) {
  if (template?.layout?.elements) return template.layout
  return defaultLayoutFor(template?.type === 'custom' ? 'custom' : (template?.preset_key ?? 'gold_classic'))
}

const safeFontFamily = value => String(value || 'Sarabun').replace(/[^A-Za-z0-9 _-]/g, '').trim() || 'Sarabun'

function elementStyle(el, baseWidth) {
  const alignTransform = el.align === 'left' ? 'translate(0,-50%)' : el.align === 'right' ? 'translate(-100%,-50%)' : 'translate(-50%,-50%)'
  const fontSize = Math.max(1, Number(el.fontSize) || 16)
  const fontSizeCqw = (fontSize * 100 / baseWidth).toFixed(4)
  const letterSpacing = Number(el.letterSpacing) || 0
  const letterSpacingCqw = (letterSpacing * 100 / baseWidth).toFixed(4)
  const widthRule = el.borderTop ? `width:min(180px,18cqw);` : el.maxWidth ? `width:${el.maxWidth}%;` : 'white-space:nowrap;'
  const borderRule = el.borderTop ? 'border-top:1px solid #999;padding-top:0.6cqw;' : ''
  const shadow = el.shadow?.enabled
    ? `text-shadow:${((Number(el.shadow.offsetX) || 0) * 100 / baseWidth).toFixed(4)}cqw ${((Number(el.shadow.offsetY) || 0) * 100 / baseWidth).toFixed(4)}cqw ${((Number(el.shadow.blur) || 0) * 100 / baseWidth).toFixed(4)}cqw ${_esc(el.shadow.color || '#000000')};`
    : ''
  const stroke = el.stroke?.enabled
    ? `-webkit-text-stroke:${((Number(el.stroke.width) || 1) * 100 / baseWidth).toFixed(4)}cqw ${_esc(el.stroke.color || '#ffffff')};paint-order:stroke fill;`
    : ''
  const opacity = el.opacity == null ? 1 : Math.min(1, Math.max(0, Number(el.opacity)))
  return `position:absolute;left:${el.x}%;top:${el.y}%;transform:${alignTransform};font-size:clamp(6px,${fontSizeCqw}cqw,${fontSize}px);font-weight:${el.bold ? 700 : 400};color:${_esc(el.color)};text-align:${el.align};line-height:1.6;opacity:${opacity};letter-spacing:${letterSpacingCqw}cqw;${widthRule}${borderRule}${shadow}${stroke}font-family:'${safeFontFamily(el.fontFamily)}',sans-serif;`
}

// element ปกติเป็นข้อความ (text, ค่าเริ่มต้นถ้าไม่ระบุ type) — type:'image' คือรูปโลโก้/ตราสัญลักษณ์ที่วาง
// ลงบนการ์ดได้อิสระ (คนละแนวคิดกับพื้นหลังเต็มใบ) width เป็น % ของความกว้างการ์ด สูงปรับตามสัดส่วนรูปเอง
function renderElement(el, escapedVars, baseWidth) {
  if (el.type === 'cornerGraphic') {
    const width = Math.min(45, Math.max(2, Number(el.width) || 14))
    const insetX = Math.min(45, Math.max(0, Number(el.insetX) || 2))
    const insetY = Math.min(45, Math.max(0, Number(el.insetY) || 2))
    const vertical = el.position === 'bottom' ? `bottom:${insetY}%;` : `top:${insetY}%;`
    const opacity = el.opacity == null ? 1 : Math.min(1, Math.max(0, Number(el.opacity)))
    const common = `position:absolute;${vertical}width:${width}%;height:auto;opacity:${opacity};`
    return `<img data-cert-el-id="${_esc(el.id)}" src="${_esc(el.imageUrl)}" style="${common}left:${insetX}%;" /><img src="${_esc(el.imageUrl)}" aria-hidden="true" style="${common}right:${insetX}%;transform:scaleX(-1);" />`
  }
  if (el.type === 'image') {
    const w = el.width ?? 20
    const opacity = el.opacity == null ? 1 : Math.min(1, Math.max(0, Number(el.opacity)))
    return `<img data-cert-el-id="${_esc(el.id)}" src="${_esc(el.imageUrl)}" style="position:absolute;left:${el.x}%;top:${el.y}%;width:${w}%;height:auto;opacity:${opacity};transform:translate(-50%,-50%)${el.flipX ? ' scaleX(-1)' : ''};" />`
  }
  return `<div data-cert-el-id="${_esc(el.id)}" style="${elementStyle(el, baseWidth)}">${substitutePlaceholders(_esc(el.text), escapedVars)}</div>`
}

// variables: { name, date, no, ...customKeys } — ค่าดิบยังไม่ escape (ฟังก์ชันนี้ escape ให้เอง)
// canvasStyleExtra: ให้ตัวแก้ไข (certificate-editor.js) ส่ง style เพิ่มเติมสำหรับ container ได้ (เช่น cursor)
export function renderCertificateCanvasHtml({ layout, variables }, canvasStyleExtra = '') {
  const escapedVars = Object.fromEntries(Object.entries(variables ?? {}).map(([k, v]) => [k, _esc(v)]))
  const bg = layout.background ?? {}
  const baseWidth = layout.orientation === 'portrait' ? 700 : 1000
  const bgStyle = bg.type === 'image' && bg.imageUrl
    ? `background:url('${_esc(bg.imageUrl)}') center/cover no-repeat;`
    : `background:${_esc(bg.color || '#fffdf8')};border:${bg.borderWidth ?? 4}px ${bg.borderStyle || 'solid'} ${_esc(bg.borderColor || '#999')};`
  const elementsHtml = (layout.elements ?? []).map(el => renderElement(el, escapedVars, baseWidth)).join('')
  const aspectRatio = layout.orientation === 'portrait' ? '1/1.414' : '1.414/1'
  return `<div class="cert-canvas" style="position:relative;width:100%;container-type:inline-size;aspect-ratio:${aspectRatio};${bgStyle}${canvasStyleExtra}">${elementsHtml}</div>`
}

export function buildCertificateHtml({ layout, variables, docTitle }) {
  const canvasHtml = renderCertificateCanvasHtml({ layout, variables })
  const title = _esc(docTitle || `เกียรติบัตร ${variables?.name ?? ''}`)
  const isPortrait = layout.orientation === 'portrait'
  const fonts = [...new Set(['Sarabun', ...(layout.elements ?? []).filter(el => !el.type || el.type === 'text').map(el => safeFontFamily(el.fontFamily))])]
  const fontQuery = fonts.map(f => `family=${encodeURIComponent(f).replace(/%20/g, '+')}:wght@400;600;700`).join('&amp;')
  return `<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>${title}</title>
    <link href="https://fonts.googleapis.com/css2?${fontQuery}&amp;display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'Sarabun', sans-serif; background: #e5e7eb; padding: 40px; margin: 0; }
      .cert-canvas { max-width: ${isPortrait ? '700px' : '1000px'}; margin: 0 auto; }
      @page { size: ${isPortrait ? 'portrait' : 'landscape'}; margin: 0; }
      @media print { body { background: #fff; padding: 0; } }
    </style></head>
    <body>
      ${canvasHtml}
    </body></html>`
}

export function openCertificatePrint({ layout, variables, docTitle }) {
  openHtmlPrintOverlay(buildCertificateHtml({ layout, variables, docTitle }))
}

// เปิดพิมพ์หลายใบในเอกสารเดียว — ใช้เอนจินและเทมเพลตเดียวกับการพิมพ์ใบเดียว
// แต่แยกเป็นคนละหน้า A4 เพื่อให้เจ้าหน้าที่สั่งพิมพ์ทั้งหมดได้ในครั้งเดียว
export function buildCertificateBatchHtml(certificates = []) {
  const rows = certificates.filter(c => c?.layout)
  if (!rows.length) return ''
  const firstLayout = rows[0].layout
  const isPortrait = firstLayout.orientation === 'portrait'
  const fonts = [...new Set([
    'Sarabun',
    ...rows.flatMap(c => (c.layout?.elements ?? []).filter(el => !el.type || el.type === 'text').map(el => safeFontFamily(el.fontFamily))),
  ])]
  const fontQuery = fonts.map(f => `family=${encodeURIComponent(f).replace(/%20/g, '+')}:wght@400;600;700`).join('&amp;')
  const pages = rows.map((certificate, index) => `
    <section class="cert-page">
      ${renderCertificateCanvasHtml(certificate)}
    </section>
  `).join('')
  const title = _esc(rows[0].docTitle || 'เกียรติบัตร')
  return `<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>${title}</title>
    <link href="https://fonts.googleapis.com/css2?${fontQuery}&amp;display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'Sarabun', sans-serif; background: #e5e7eb; padding: 40px; margin: 0; }
      .cert-page { max-width: ${isPortrait ? '700px' : '1000px'}; margin: 0 auto; break-after: ${isPortrait ? 'page' : 'page'}; page-break-after: always; }
      .cert-page:last-child { break-after: auto; page-break-after: auto; }
      @page { size: ${isPortrait ? 'portrait' : 'landscape'}; margin: 0; }
      @media print { body { background: #fff; padding: 0; } .cert-page { max-width: none; width: 100%; } }
    </style></head>
    <body>${pages}</body></html>`
}

export function openCertificatesPrint({ certificates = [] }) {
  const html = buildCertificateBatchHtml(certificates)
  if (html) openHtmlPrintOverlay(html)
}
