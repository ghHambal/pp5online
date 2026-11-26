// js/print-overlay.js — แสดงเอกสารพิมพ์/พรีวิวในหน้าเดิมด้วย overlay + iframe แทน window.open('', '_blank')
// เหตุผล: บนอุปกรณ์ที่ติดตั้งแอปเป็น PWA (Add to Home Screen) window.open แบบไม่มี URL จริง
// มักไม่เปิดหน้าต่างใหม่จริง กลับเขียนทับ (document.write) หน้าแอปเดิมทั้งหมด ทำให้ JS state
// ของแอปหายหมด กด "ปิด" (window.close ใช้ไม่ได้ในบริบทนี้) เลยเหมือนแอปโหลดใหม่ ย้อนกลับไป
// หน้าเริ่มต้นแทนที่จะกลับไปหน้า/ระบบที่เปิดมา — overlay อยู่ในหน้าเดิมเสมอ ปิดแล้วกลับไปหน้า/
// ระบบที่เปิดมาถูกต้องทุกครั้ง ไม่ว่าอุปกรณ์ไหน
export function openHtmlPrintOverlay(html, { autoprint = false } = {}) {
  document.getElementById('html-print-overlay')?.remove()
  const overlay = document.createElement('div')
  overlay.id = 'html-print-overlay'
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#e5e7eb;display:flex;flex-direction:column;'
  overlay.innerHTML = `
    <div style="flex-shrink:0;display:flex;gap:8px;justify-content:center;padding:10px;background:#fff;border-bottom:1px solid #ddd;">
      <button id="html-print-close-btn" style="padding:8px 24px;font-size:13px;font-family:Sarabun,sans-serif;border-radius:8px;border:1px solid #999;background:#fff;cursor:pointer;">← ปิด</button>
      <button id="html-print-go-btn" style="padding:8px 24px;font-size:13px;font-family:Sarabun,sans-serif;border-radius:8px;border:1px solid #999;background:#fff;cursor:pointer;">🖨️ พิมพ์ / บันทึกเป็น PDF</button>
    </div>
    <iframe id="html-print-iframe" style="flex:1;border:0;width:100%;background:#e5e7eb;"></iframe>`
  document.body.appendChild(overlay)
  const iframe = overlay.querySelector('#html-print-iframe')
  const doPrint = () => { iframe.contentWindow?.focus(); iframe.contentWindow?.print() }
  overlay.querySelector('#html-print-close-btn').addEventListener('click', () => overlay.remove())
  overlay.querySelector('#html-print-go-btn').addEventListener('click', doPrint)
  if (autoprint) iframe.addEventListener('load', () => setTimeout(doPrint, 300), { once: true })
  iframe.srcdoc = html
  return overlay
}
