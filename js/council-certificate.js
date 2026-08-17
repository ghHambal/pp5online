// js/council-certificate.js — สร้าง HTML เกียรติบัตรกิจกรรมสภานักเรียน
// แยกออกมาเป็นไฟล์กลาง (ไม่ใช่ฟังก์ชันในตัว council.js) เพราะต้องใช้ร่วมกัน 2 ที่:
// council.js (หน้าจัดการเกียรติบัตร) และ student-views.js (การ์ดเกียรติบัตรในหน้าของนักเรียนเอง)
// — council.js เป็น page-controller ของ council.html มี state/DOM query ทั้งไฟล์ ไม่ควร import
// ข้ามไปใช้ในหน้าอื่น จึงแยกเฉพาะส่วนที่เป็น "สร้าง HTML" ล้วนๆ ออกมาที่นี่แทน
const _esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export const CERT_PRESETS = {
  gold_classic: { bg: '#fdfaf3', cardBg: '#fffdf8', border: '6px double #b5892b', accent: '#8a6a1f', accentSoft: '#f6ecd4', icon: '🏛️' },
  blue_modern: { bg: '#f0f6fb', cardBg: '#ffffff', border: '4px solid #2563eb', accent: '#1d4ed8', accentSoft: '#dbeafe', icon: '🎓' },
  green_nature: { bg: '#f2f8f2', cardBg: '#ffffff', border: '4px solid #15803d', accent: '#166534', accentSoft: '#dcfce7', icon: '🌿' },
}
export const CERT_PRESET_LABELS = { gold_classic: '🏛️ ทองคลาสสิก', blue_modern: '🎓 น้ำเงินโมเดิร์น', green_nature: '🌿 เขียวธรรมชาติ' }

export function buildActivityCertificateHtml({ student, activity, template, certRow, cfg }) {
  const name = _esc(student?.full_name ?? '—')
  const activityTitle = _esc(activity?.title ?? '—')
  const councilName = _esc(cfg?.council_name || 'ระบบสภานักเรียน')
  const no = _esc(certRow?.certificate_no || '')
  const issuedAt = new Date(certRow?.issued_at || Date.now()).toLocaleDateString('th-TH', { dateStyle: 'long' })

  if (template?.type === 'custom' && template.background_image_url) {
    return `<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>เกียรติบัตร ${name}</title>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; }
        body { font-family: 'Sarabun', sans-serif; margin: 0; }
        .cert { position: relative; width: 100%; max-width: 1000px; margin: 0 auto; aspect-ratio: 1.414 / 1; background: url('${_esc(template.background_image_url)}') center/cover no-repeat; }
        .overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 0 60px; }
        .name { font-size: 32px; font-weight: 700; color: #1d1519; margin-bottom: 10px; text-shadow: 0 1px 4px rgba(255,255,255,0.85); }
        .detail { font-size: 16px; color: #333; max-width: 640px; text-shadow: 0 1px 4px rgba(255,255,255,0.85); }
        .meta { position: absolute; bottom: 28px; right: 40px; font-size: 12px; color: #555; }
        @media print { body { margin: 0; } }
      </style></head>
      <body>
        <div class="cert">
          <div class="overlay">
            <p class="name">${name}</p>
            <p class="detail">ได้เข้าร่วมกิจกรรม <b>${activityTitle}</b> ของ${councilName} จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติ</p>
          </div>
          <div class="meta">${issuedAt}${no ? ' · เลขที่ ' + no : ''}</div>
        </div>
        <div style="text-align:center;margin-top:20px;"><button onclick="window.print()" style="padding:8px 24px;font-size:13px;font-family:Sarabun,sans-serif;border-radius:8px;border:1px solid #999;background:#fff;cursor:pointer;">🖨️ พิมพ์ / บันทึกเป็น PDF</button></div>
      </body></html>`
  }

  const preset = CERT_PRESETS[template?.preset_key] ?? CERT_PRESETS.gold_classic
  return `<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>เกียรติบัตร ${name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'Sarabun', sans-serif; background: ${preset.bg}; padding: 40px; }
      .cert { max-width: 900px; margin: 0 auto; border: ${preset.border}; padding: 50px 40px; text-align: center; background: ${preset.cardBg}; }
      .badge { width: 74px; height: 74px; border-radius: 50%; border: 2px solid ${preset.accentSoft}; background: ${preset.accentSoft}; display: grid; place-items: center; margin: 0 auto 14px; font-size: 24px; color: ${preset.accent}; font-weight: 700; }
      h1 { color: ${preset.accent}; font-size: 34px; margin: 6px 0 18px; }
      .name { font-size: 26px; font-weight: 700; border-bottom: 1px solid ${preset.accentSoft}; display: inline-block; padding: 0 24px 8px; margin: 10px 0 18px; color: #1d1519; }
      .sign { display: flex; justify-content: space-around; margin-top: 60px; }
      .sign div { width: 220px; border-top: 1px solid #999; padding-top: 6px; font-size: 13px; color: #555; }
      @media print { body { background: #fff; padding: 0; } .cert { border-width: 4px; } }
    </style></head>
    <body>
      <div class="cert">
        <div class="badge">${preset.icon}</div>
        <p style="color:#6e5f65;font-size:13px;letter-spacing:1px;">${councilName}</p>
        <h1>เกียรติบัตร</h1>
        <p style="color:#333;">มอบเพื่อแสดงว่า</p>
        <p class="name">${name}</p>
        <p style="color:#1d1519;line-height:1.9;max-width:560px;margin:0 auto;">ได้เข้าร่วมกิจกรรม <b>${activityTitle}</b> ของ${councilName} จนสำเร็จตามเกณฑ์ที่กำหนด จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติสืบไป</p>
        <p style="color:#8a8188;font-size:12px;margin-top:16px;">ให้ไว้ ณ วันที่ ${issuedAt} ${no ? '· เลขที่ ' + no : ''}</p>
        <div class="sign">
          <div>ครูที่ปรึกษาสภานักเรียน</div>
          <div>ผู้อำนวยการโรงเรียน</div>
        </div>
      </div>
      <div style="text-align:center;margin-top:20px;"><button onclick="window.print()" style="padding:8px 24px;font-size:13px;font-family:Sarabun,sans-serif;border-radius:8px;border:1px solid ${preset.accent};background:#fff;color:${preset.accent};cursor:pointer;">🖨️ พิมพ์ / บันทึกเป็น PDF</button></div>
    </body></html>`
}

export function openActivityCertificatePrint({ student, activity, template, certRow, cfg }, showToast) {
  const win = window.open('', '_blank', 'width=900,height=700')
  if (!win) { showToast?.('กรุณาอนุญาต Popup ในเบราว์เซอร์', 'warning'); return }
  win.document.open(); win.document.write(buildActivityCertificateHtml({ student, activity, template, certRow, cfg })); win.document.close()
}
