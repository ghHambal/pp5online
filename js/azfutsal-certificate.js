// js/azfutsal-certificate.js — สร้าง HTML เกียรติบัตรฟุตซอล AZFUTSALCUP
// แยกออกมาจาก azfutsal.js (ไฟล์หลักใหญ่มากแล้ว) ตามแนวทางเดียวกับ council-certificate.js
// วางข้อความ "ชื่อ-สกุล" กับ "ข้อความรางวัล" ทับพื้นหลังที่แอดมินอัปโหลด (เว้นช่องว่าง 2 จุดไว้ในรูปแล้ว)
// ตำแหน่ง % วัดจากไฟล์เทมเพลตจริงที่ใช้งาน (ขนาด 2000x1414px, สัดส่วน A4 แนวนอน 1.414:1)
import { openHtmlPrintOverlay } from './print-overlay.js'

const _esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export function buildFutsalCertificateHtml({ name, award, templateUrl }) {
  const safeName = _esc(name)
  const safeAward = _esc(award)
  return `<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>เกียรติบัตร ${safeName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'Sarabun', sans-serif; margin: 0; background: #fff; }
      .cert { position: relative; width: 100%; max-width: 1000px; margin: 0 auto; aspect-ratio: 2000 / 1414; background: url('${_esc(templateUrl)}') center/contain no-repeat; }
      .field-name { position: absolute; left: 8%; right: 8%; top: 41.4%; height: 12.0%; display: flex; align-items: center; justify-content: center; }
      .field-name span { font-family: 'Charmonman', cursive; font-size: 40px; font-weight: 700; color: #1b3a2b; line-height: 1; overflow-wrap: anywhere; }
      .field-award { position: absolute; left: 11%; right: 11%; top: 54.0%; height: 8.5%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
      .field-award span { font-family: 'Charmonman', cursive; font-size: 22px; font-weight: 700; color: #1b3a2b; line-height: 1.3; }
      @media print { body { margin: 0 } }
    </style></head>
    <body>
      <div class="cert">
        <div class="field-name"><span>${safeName}</span></div>
        <div class="field-award"><span>${safeAward}</span></div>
      </div>
    </body></html>`
}

// ใช้ฝัง preview เกียรติบัตรจริงตรงในการ์ด (ไม่ต้องเปิดป๊อปอัพพิมพ์ถึงจะเห็น) — ใช้ container query
// units (cqw) แทน vw เพื่อให้สัดส่วนตัวอักษรอิงตามความกว้างของการ์ดเอง ไม่ใช่ viewport ทั้งหน้า
// ต้องมี Charmonman โหลดไว้แล้วในหน้าเพจ (azfutsal.html โหลด Google Fonts ไว้ที่ <head>)
export function buildFutsalCertificateFragment({ name, award, templateUrl }) {
  const safeName = _esc(name)
  const safeAward = _esc(award)
  return `<div style="container-type:inline-size;position:relative;width:100%;aspect-ratio:2000/1414;border-radius:10px;overflow:hidden;background:#fff url('${_esc(templateUrl)}') center/contain no-repeat">
    <div style="position:absolute;left:8%;right:8%;top:41.4%;height:12.0%;display:flex;align-items:center;justify-content:center">
      <span style="font-family:'Charmonman',cursive;font-size:4cqw;font-weight:700;color:#1b3a2b;line-height:1;overflow-wrap:anywhere;text-align:center">${safeName}</span>
    </div>
    <div style="position:absolute;left:11%;right:11%;top:54.0%;height:8.5%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
      <span style="font-family:'Charmonman',cursive;font-size:2.2cqw;font-weight:700;color:#1b3a2b;line-height:1.3">${safeAward}</span>
    </div>
  </div>`
}

export function openFutsalCertificatePrint({ name, award, templateUrl }, showToast) {
  if (!templateUrl) { showToast?.('ยังไม่ได้อัปโหลดพื้นหลังเกียรติบัตร กรุณาแจ้งแอดมิน'); return }
  openHtmlPrintOverlay(buildFutsalCertificateHtml({ name, award, templateUrl }))
}
