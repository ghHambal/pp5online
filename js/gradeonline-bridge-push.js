// js/gradeonline-bridge-push.js — โหลดผ่านบุ๊กมาร์กตอนอยู่ในหน้า
// azizstan.net/regist/GradeOnline/Evaluate เพื่อดึงคะแนนรวม(เต็ม 100)+เกรดที่ครูส่งออก
// จาก pp5-online มากรอกให้อัตโนมัติ (ทิศทางเดียวกับ studentcare-bridge-push.js ฝั่งเช็คชื่อ)
//
// ตรรกะการหาแถว/กรอกช่องคะแนน/กรอก select เกรด/ป้องกัน rate-limit ทั้งหมดยกมาจากสคริปต์
// Tampermonkey เดิมของผู้ใช้ "Azizstan Auto-Score ByKruHambal v5.0" ที่ผ่านการใช้งานจริงกับ
// หน้านี้มาแล้ว — ต่างกันแค่จุดเดียวคือแหล่งข้อมูล: ของเดิมอ่านจาก Google Sheet (gviz API),
// เวอร์ชันนี้อ่านจาก pp5_grade_export ใน Supabase แทน โดยใช้ "รหัสอ้างอิง" (share_code) สุ่ม
// 6 ตัวที่ครูคัดลอกมาจาก pp5 แทนการเดา selector ห้อง/วันที่บนหน้านี้ (หน้านี้ไม่มีตัวกรองแบบ
// นั้นให้ script อ่านเองได้เหมือนหน้าระบบดูแล)
//
// เหมือนสคริปต์เดิมทุกประการในเรื่องความปลอดภัย: ไม่กดปุ่มบันทึกของ GradeOnline ให้อัตโนมัติ
// เด็ดขาด ครูต้องตรวจทานแล้วกดบันทึกเอง เพื่อป้องกันการกรอกพร้อมกันทั้งห้องแบบไม่ผ่านตา
// (ไฟล์นี้เป็น classic script ไม่ใช่ ES module ห้ามใช้ import/export)
;(function () {
  'use strict'

  const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
  const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
  const FIXED_DELAY_MS = 1000

  const SAFE_MODE = {
    EVENT_GAP_MS: 220,
    VERIFY_WAIT_MS: 450,
    AFTER_SCORE_WAIT_MS: 1000,
    EVERY_N_ROWS_COOLDOWN: 5,
    COOLDOWN_MS: 2000,
    LONG_COOLDOWN_EVERY: 15,
    LONG_COOLDOWN_MS: 3000,
    MAX_CONSECUTIVE_FAILS: 3,
  }

  let stopRequested = false
  let rateLimited = false

  /* ==================== toast (ไม่พึ่ง CDN ภายนอก) ==================== */
  function toast(msg, type) {
    const existing = document.getElementById('pp5gol-toast')
    if (existing) existing.remove()
    const div = document.createElement('div')
    div.id = 'pp5gol-toast'
    div.textContent = msg
    Object.assign(div.style, {
      position: 'fixed', right: '16px', top: '16px', zIndex: 2147483647,
      padding: '12px 16px', borderRadius: '10px', fontFamily: 'system-ui,sans-serif',
      fontSize: '13px', color: '#fff', maxWidth: '360px', lineHeight: '1.5',
      boxShadow: '0 8px 20px rgba(0,0,0,.25)',
      background: type === 'error' ? '#ef4444' : type === 'success' ? '#16a34a' : '#7c3aed',
    })
    document.body.appendChild(div)
    setTimeout(() => div.remove(), 6000)
  }

  /* =================== กันโดน rate-limit (ยกมาจากสคริปต์เดิม) =================== */
  function installRateLimitWatcher() {
    if (window.__PP5GOL_RATE_LIMIT_WATCHER__) return
    window.__PP5GOL_RATE_LIMIT_WATCHER__ = true
    const originalFetch = window.fetch
    window.fetch = async function (...args) {
      const res = await originalFetch.apply(this, args)
      try { if (res && res.status === 429) rateLimited = true } catch (_) {}
      return res
    }
    if (window.XMLHttpRequest) {
      const open = XMLHttpRequest.prototype.open
      const send = XMLHttpRequest.prototype.send
      XMLHttpRequest.prototype.open = function (...args) { this.__pp5gol_url = args[1]; return open.apply(this, args) }
      XMLHttpRequest.prototype.send = function (...args) {
        this.addEventListener('load', function () { try { if (this.status === 429) rateLimited = true } catch (_) {} })
        return send.apply(this, args)
      }
    }
  }
  installRateLimitWatcher()

  function detectTooManyRequestsInDOM() {
    const text = (document.body?.innerText || '').toLowerCase()
    return text.includes('too many requests') || text.includes('429')
  }
  function shouldAbortNow() { return stopRequested || rateLimited || detectTooManyRequestsInDOM() }
  const sleep = (ms) => new Promise(r => setTimeout(r, ms))

  /* ============ หาแถว/ช่องกรอกในตาราง (ยกมาจากสคริปต์เดิมทั้งหมด) ============ */
  function getTableMeta() {
    const table = document.querySelector('table')
    if (!table) return null
    const headRow = table.querySelector('thead tr') || table.querySelector('tr')
    const headers = headRow ? Array.from(headRow.querySelectorAll('th,td')).map(th => (th.textContent || '').trim()) : []
    const findIdx = (reList) => {
      for (let i = 0; i < headers.length; i++) if (reList.some(re => re.test(headers[i]))) return i
      return -1
    }
    const idCol = findIdx([/รหัสนักเรียน/i, /\bID\b/i, /student/i])
    const totalCol = findIdx([/คะแนนรวม/i, /total/i, /score/i])
    const gradeCol = findIdx([/^เกรด$/i, /grade/i])
    const bodyRows = Array.from(table.querySelectorAll('tbody tr'))
    const rows = bodyRows.length ? bodyRows : Array.from(table.querySelectorAll('tr')).slice(1)
    return { table, headers, rows, idCol, totalCol, gradeCol }
  }

  function findRowByIdExact(meta, sid) {
    sid = String(sid)
    for (const tr of meta.rows) {
      const tds = tr.querySelectorAll('td,th')
      const idCell = tds[meta.idCol]
      if (!idCell) continue
      const idText = (idCell.textContent || '').replace(/\D/g, '')
      if (idText === sid) return tr
    }
    return null
  }

  function pickScoreInput(meta, tr) {
    if (meta.totalCol >= 0) {
      const cell = tr.querySelectorAll('td,th')[meta.totalCol]
      if (cell) return cell.querySelector('input[type="number"],input[type="text"],input')
    }
    return tr.querySelector('input[type="number"],input[type="text"],input')
  }

  function pickGradeSelect(meta, tr) {
    if (meta.gradeCol >= 0) {
      const cell = tr.querySelectorAll('td,th')[meta.gradeCol]
      if (cell) return cell.querySelector('select')
    }
    return tr.querySelector('select')
  }

  function getCurrentGradeText(meta, tr) {
    const sel = pickGradeSelect(meta, tr)
    if (!sel) return ''
    const opt = sel.options[sel.selectedIndex]
    if (!opt) return String(sel.value || '').trim()
    return String(opt.textContent || sel.value || '').trim()
  }

  function normalizeGrade(v) {
    return String(v || '').trim().replace(/\s+/g, '')
      .replace(/^0\.0$/, '0').replace(/^1\.0$/, '1').replace(/^2\.0$/, '2')
      .replace(/^3\.0$/, '3').replace(/^4\.0$/, '4')
  }
  function isGradeMatch(current, expected) { return normalizeGrade(current) === normalizeGrade(expected) }

  async function safeSetInputValue(inp, value) {
    inp.focus()
    inp.value = value
    inp.dispatchEvent(new Event('input', { bubbles: true }))
    await sleep(SAFE_MODE.EVENT_GAP_MS)
    inp.dispatchEvent(new Event('change', { bubbles: true }))
    await sleep(SAFE_MODE.VERIFY_WAIT_MS)
    return String(inp.value).trim() === String(value).trim()
  }

  async function safeSetSelectValue(sel, wantText) {
    const want = String(wantText).trim()
    const opts = Array.from(sel.options)
    let found = opts.find(o => String(o.value).trim() === want || String(o.textContent).trim() === want)
    if (!found) found = opts.find(o => String(o.textContent).includes(want))
    if (!found) return false
    sel.focus()
    sel.value = found.value
    sel.dispatchEvent(new Event('input', { bubbles: true }))
    await sleep(SAFE_MODE.EVENT_GAP_MS)
    sel.dispatchEvent(new Event('change', { bubbles: true }))
    await sleep(SAFE_MODE.VERIFY_WAIT_MS)
    const selectedOpt = sel.options[sel.selectedIndex]
    const current = String(selectedOpt ? selectedOpt.textContent : sel.value).trim()
    return isGradeMatch(current, want)
  }

  /* ======================== แผงควบคุม ======================== */
  document.getElementById('pp5gol-panel')?.remove()
  const panel = document.createElement('div')
  panel.id = 'pp5gol-panel'
  panel.style.cssText = `
    position: fixed; right: 16px; bottom: 16px; z-index: 2147483000;
    width: 380px; max-width: 95vw; background: #fff; border: 2px solid #7c3aed;
    border-radius: 12px; box-shadow: 0 8px 24px rgba(124,58,237,.25);
    font-family: system-ui, sans-serif; overflow: hidden`
  panel.innerHTML = `
    <div style="background:linear-gradient(180deg,#a78bfa,#7c3aed);color:#fff;padding:12px 14px;font-weight:800;display:flex;justify-content:space-between;align-items:center">
      <span>pp5 → GradeOnline</span>
      <button id="pp5gol-close" style="background:none;border:0;color:#fff;font-size:16px;cursor:pointer">✕</button>
    </div>
    <div style="padding:14px;display:grid;gap:10px">
      <label style="font-size:12px;color:#374151">รหัสอ้างอิงจาก pp5-online
        <input id="pp5gol-code" style="width:100%;padding:10px;border:1px solid #ddd6fe;border-radius:10px;font-family:ui-monospace,monospace;font-weight:700;letter-spacing:2px;text-transform:uppercase" placeholder="เช่น A1B2C3">
      </label>
      <div style="display:flex;gap:8px">
        <button id="pp5gol-fetch" style="flex:1;padding:10px;border:0;border-radius:10px;background:#2563eb;color:#fff;font-weight:700;cursor:pointer">ดึงข้อมูล</button>
        <button id="pp5gol-run" style="flex:1;padding:10px;border:0;border-radius:10px;background:#10b981;color:#fff;font-weight:700;cursor:pointer" disabled>เติมคะแนน+เกรด</button>
      </div>
      <button id="pp5gol-stop" style="padding:8px;border:0;border-radius:10px;background:#f3f4f6;color:#991b1b;font-weight:700;cursor:pointer">หยุด</button>
      <div id="pp5gol-status" style="font-size:12px;color:#6b7280;min-height:16px"></div>
      <div style="font-size:11px;color:#991b1b;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:8px">
        สคริปต์นี้ไม่กดปุ่มบันทึกของ GradeOnline ให้อัตโนมัติ — ตรวจสอบให้ครบแล้วกดบันทึกเองเสมอ
      </div>
    </div>`
  document.body.appendChild(panel)
  panel.querySelector('#pp5gol-close').onclick = () => panel.remove()
  panel.querySelector('#pp5gol-stop').onclick = () => { stopRequested = true; toast('สั่งหยุดแล้ว จะหยุดเมื่อจบแถวปัจจุบัน', 'info') }

  const statusEl = panel.querySelector('#pp5gol-status')
  const setStatus = (t) => { statusEl.textContent = t }

  let pendingRows = []

  panel.querySelector('#pp5gol-fetch').onclick = async () => {
    const code = (panel.querySelector('#pp5gol-code').value || '').trim().toUpperCase()
    if (!code) { toast('กรุณาใส่รหัสอ้างอิงจาก pp5-online ก่อน', 'error'); return }
    setStatus('กำลังดึงข้อมูลจาก pp5-online...')
    try {
      const url = `${SUPABASE_URL}/rest/v1/pp5_grade_export?share_code=eq.${encodeURIComponent(code)}&select=student_code,student_name,total,grade&order=exported_at.asc`
      const res = await fetch(url, { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } })
      if (!res.ok) throw new Error(String(res.status))
      const rows = await res.json()
      if (!rows.length) {
        setStatus('')
        toast('ไม่พบข้อมูลของรหัสนี้ — ตรวจสอบรหัสอ้างอิง หรือกดส่งจาก pp5-online ใหม่อีกครั้ง', 'error')
        pendingRows = []
        panel.querySelector('#pp5gol-run').disabled = true
        return
      }
      pendingRows = rows
      panel.querySelector('#pp5gol-run').disabled = false
      setStatus(`พร้อมกรอก ${rows.length} คน — ตรวจสอบว่าอยู่หน้าวิชา/ห้องที่ถูกต้องแล้วกด "เติมคะแนน+เกรด"`)
      toast(`ดึงข้อมูลสำเร็จ ${rows.length} คน`, 'success')
    } catch (err) {
      setStatus('')
      toast('ดึงข้อมูลไม่สำเร็จ: ' + (err && err.message || ''), 'error')
    }
  }

  panel.querySelector('#pp5gol-run').onclick = async () => {
    if (!pendingRows.length) return
    stopRequested = false
    rateLimited = false
    const meta = getTableMeta()
    if (!meta || meta.idCol < 0) { toast('ไม่พบหัวคอลัมน์รหัสนักเรียนในตารางของหน้านี้', 'error'); return }

    const runBtn = panel.querySelector('#pp5gol-run')
    const fetchBtn = panel.querySelector('#pp5gol-fetch')
    runBtn.disabled = true; fetchBtn.disabled = true

    let okScore = 0, okGrade = 0, gradeAlready = 0, miss = 0, processed = 0, consecutiveFails = 0, aborted = false
    const missing = [], failScore = [], failGrade = []

    for (const r of pendingRows) {
      if (shouldAbortNow()) { aborted = true; break }
      processed++
      setStatus(`กำลังทำงาน... แถว ${processed}/${pendingRows.length}`)

      const tr = findRowByIdExact(meta, r.student_code)
      const info = { id: r.student_code, name: r.student_name }
      if (!tr) { miss++; missing.push(info); continue }

      let rowFailed = false
      const inp = pickScoreInput(meta, tr)
      if (inp && r.total !== '' && r.total != null) {
        const ok = await safeSetInputValue(inp, r.total)
        if (ok) okScore++
        else { rowFailed = true; failScore.push({ ...info, total: r.total }) }
      }

      if (shouldAbortNow()) { aborted = true; break }
      await sleep(SAFE_MODE.AFTER_SCORE_WAIT_MS)

      const expectedGrade = String(r.grade || '').trim()
      if (expectedGrade) {
        const currentGrade = getCurrentGradeText(meta, tr)
        if (isGradeMatch(currentGrade, expectedGrade)) {
          gradeAlready++
        } else {
          const sel = pickGradeSelect(meta, tr)
          if (sel) {
            const okG = await safeSetSelectValue(sel, expectedGrade)
            if (okG) okGrade++
            else { rowFailed = true; failGrade.push({ ...info, grade: expectedGrade, current: currentGrade }) }
          } else {
            rowFailed = true; failGrade.push({ ...info, grade: expectedGrade, current: currentGrade })
          }
        }
      }

      if (rowFailed) consecutiveFails++
      else consecutiveFails = 0
      if (consecutiveFails >= SAFE_MODE.MAX_CONSECUTIVE_FAILS) {
        aborted = true
        toast('พบความผิดปกติต่อเนื่องหลายแถว ระบบหยุดเพื่อป้องกันปัญหา', 'error')
        break
      }

      await sleep(FIXED_DELAY_MS)
      if (processed % SAFE_MODE.EVERY_N_ROWS_COOLDOWN === 0) {
        setStatus(`พักระบบ ${SAFE_MODE.COOLDOWN_MS / 1000} วินาที...`)
        await sleep(SAFE_MODE.COOLDOWN_MS)
      }
      if (processed % SAFE_MODE.LONG_COOLDOWN_EVERY === 0) {
        setStatus(`พักยาว ${SAFE_MODE.LONG_COOLDOWN_MS / 1000} วินาที...`)
        await sleep(SAFE_MODE.LONG_COOLDOWN_MS)
      }
    }

    runBtn.disabled = false; fetchBtn.disabled = false

    if (rateLimited || detectTooManyRequestsInDOM()) {
      toast('ตรวจพบ Too Many Requests — ระบบหยุดให้แล้ว', 'error')
    } else if (stopRequested) {
      toast('หยุดการทำงานตามคำสั่งแล้ว', 'info')
    } else {
      toast(`✅ เสร็จสิ้น — คะแนนสำเร็จ ${okScore} คน, แก้เกรด ${okGrade} คน, เกรดตรงอยู่แล้ว ${gradeAlready} คน${miss ? `, หาไม่เจอ ${miss} คน` : ''} — ตรวจสอบให้ดีแล้วกดปุ่มบันทึกของ GradeOnline เอง`, 'success')
    }
    setStatus(missing.length || failScore.length || failGrade.length
      ? `ปัญหา: หาไม่เจอ ${missing.map(m=>m.id).join(', ') || '-'}${failScore.length ? ` | คะแนนไม่สำเร็จ ${failScore.map(m=>m.id).join(', ')}` : ''}${failGrade.length ? ` | เกรดไม่สำเร็จ ${failGrade.map(m=>m.id).join(', ')}` : ''}`
      : `เสร็จสิ้น ${processed} แถว — ${aborted ? 'หยุดก่อนจบ' : 'ครบทุกคน'}`)
  }
})()
