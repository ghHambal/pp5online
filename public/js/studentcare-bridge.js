// js/studentcare-bridge.js — โหลดผ่าน bookmarklet ตอนอยู่ในหน้าระบบดูแล (azizstan.net/StudentCareV4)
// อ่านตารางเช็คชื่อบนหน้าจอ (DOM) แล้วส่งเข้า external_attendance_staging ของ pp5-online
// ไม่ใช่ userscript/extension — โหลดผ่าน <script src> ธรรมดา รันครั้งเดียวตอนคลิก bookmark
// (ไฟล์นี้เป็น classic script ไม่ใช่ ES module ห้ามใช้ import/export)
;(function () {
  'use strict'

  const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
  const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'

  function toast(msg, type) {
    const existing = document.getElementById('pp5stc-toast')
    if (existing) existing.remove()
    const div = document.createElement('div')
    div.id = 'pp5stc-toast'
    div.textContent = msg
    Object.assign(div.style, {
      position: 'fixed', right: '16px', bottom: '16px', zIndex: 2147483647,
      padding: '12px 16px', borderRadius: '10px', fontFamily: 'system-ui,sans-serif',
      fontSize: '13px', color: '#fff', maxWidth: '360px', lineHeight: '1.5',
      boxShadow: '0 8px 20px rgba(0,0,0,.25)',
      background: type === 'error' ? '#ef4444' : type === 'success' ? '#16a34a' : '#eb2599',
    })
    document.body.appendChild(div)
    setTimeout(() => div.remove(), 6000)
  }

  // ── หาห้องเรียนที่กำลังเปิดอยู่ ──
  function findMainRoom() {
    const selects = document.querySelectorAll('select')
    for (const sel of selects) {
      const opt = sel.options[sel.selectedIndex]
      const txt = (opt ? opt.textContent : '').trim()
      if (/^ม\.\d+\/\d+/.test(txt) || /^ปวช\.\d+\/\d+/.test(txt)) return txt
    }
    return ''
  }

  // ── หาวันที่บันทึกอยู่ (dd/mm/yyyy ค.ศ. ตามที่หน้าเว็บแสดง) → แปลงเป็น ISO ──
  function findCheckDateISO() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="date"]')
    for (const inp of inputs) {
      const v = (inp.value || '').trim()
      const m = v.match(/^(\d{1,2})[/\-](\d{1,2})[/\-](\d{4})$/)
      if (m) {
        const [, d, mo, y] = m
        return `${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}`
      }
    }
    return ''
  }

  // ── หาตารางรายชื่อนักเรียน ──
  function findStudentTable() {
    const tables = document.querySelectorAll('table')
    for (const t of tables) {
      const headText = (t.querySelector('thead') || t).textContent || ''
      if (/รหัสนักเรียน/.test(headText) && /ชื่อ/.test(headText) && /สกุล/.test(headText)) return t
    }
    return null
  }

  function normalizeHeader(text) {
    return (text || '').replace(/\s+/g, '').replace(/[^฀-๿a-zA-Z0-9]/g, '')
  }

  function getHeaderIndexes(table) {
    const thead = table.querySelector('thead')
    if (!thead) return { idIndex: -1, nameIndex: -1 }
    const ths = thead.querySelectorAll('tr th')
    let idIndex = -1, nameIndex = -1
    ths.forEach((th, idx) => {
      const norm = normalizeHeader(th.textContent)
      if (norm.includes('รหัสนักเรียน')) idIndex = idx
      if (norm.includes('ชื่อสกุล') || norm.includes('ชื่อนักเรียน')) nameIndex = idx
    })
    return { idIndex, nameIndex }
  }

  // มา→present, สาย→late, ลา→excused (ตามที่ตกลงไว้ ถ้าอยากแยกลาป่วยต้องไปแก้เองในระบบดูแล),
  // ขาด→absent — ตรงกับ ATT_STATUS ของ pp5-online เป๊ะ ไม่ต้องแปลงอีกชั้นตอนอ่านฝั่ง pp5-online
  function mapTextToStatusKey(txt) {
    const compact = (txt || '').replace(/\s+/g, '')
    if (/^มา/.test(compact)) return 'present'
    if (/สาย/.test(compact)) return 'late'
    if (/^ลา/.test(compact)) return 'excused'
    if (/ขาด/.test(compact)) return 'absent'
    return ''
  }

  function detectStatusFromRow(tr) {
    let el = tr.querySelector('input[type="radio"]:checked, input[type="checkbox"]:checked')
    if (el) {
      let txt = ''
      if (el.id) {
        const lbl = tr.querySelector(`label[for="${el.id}"]`)
        if (lbl) txt = (lbl.textContent || '').trim()
      }
      if (!txt) { const wrapLbl = el.closest('label'); if (wrapLbl) txt = (wrapLbl.textContent || '').trim() }
      if (!txt) txt = (el.value || '').trim()
      const code = mapTextToStatusKey(txt)
      if (code) return code
    }
    const candidates = tr.querySelectorAll('label.active, button.active, .btn.active, .btn-success, .btn-warning, .btn-info, .btn-danger')
    for (const c of candidates) {
      const code = mapTextToStatusKey(c.textContent || '')
      if (code) return code
    }
    return ''
  }

  function isStatusButtonsCell(raw) {
    const compact = raw.replace(/\s+/g, '')
    return /มา/.test(compact) && /สาย/.test(compact) && /ลา/.test(compact) && /ขาด/.test(compact)
  }

  function collectAttendanceFromPage() {
    const table = findStudentTable()
    if (!table) return []
    const { idIndex, nameIndex } = getHeaderIndexes(table)
    const rows = []
    table.querySelectorAll('tbody tr').forEach(tr => {
      const tds = tr.querySelectorAll('td')
      if (!tds.length) return
      let studentCode = '', name = ''
      if (idIndex >= 0 && idIndex < tds.length) {
        const raw = (tds[idIndex].textContent || '').replace(/\s+/g, '').trim()
        if (/^\d{4,}$/.test(raw)) studentCode = raw
      }
      if (nameIndex >= 0 && nameIndex < tds.length) name = (tds[nameIndex].textContent || '').trim()
      if (!studentCode) {
        for (const td of tds) {
          const txt = (td.textContent || '').replace(/\s+/g, '').trim()
          if (/^\d{4,}$/.test(txt)) { studentCode = txt; break }
        }
      }
      if (!name) {
        for (const td of tds) {
          const raw = (td.textContent || '').trim()
          if (!raw || isStatusButtonsCell(raw)) continue
          if (/[ก-๙]/.test(raw) && !/\d/.test(raw)) { name = raw; break }
        }
      }
      if (!studentCode) return
      const status = detectStatusFromRow(tr)
      rows.push({ studentCode, status, name })
    })
    return rows
  }

  async function run() {
    const mainRoom = findMainRoom()
    const checkDate = findCheckDateISO()
    if (!mainRoom) { toast('หาห้องเรียนที่เลือกอยู่ไม่เจอ — ตรวจสอบว่าเลือกห้องเรียนไว้แล้ว', 'error'); return }
    if (!checkDate) { toast('หาวันที่บันทึกไม่เจอ — ตรวจสอบว่าเลือกวันที่ไว้แล้ว', 'error'); return }

    const rows = collectAttendanceFromPage()
    const withStatus = rows.filter(r => r.status)
    if (!withStatus.length) {
      toast('ยังไม่พบสถานะเช็คชื่อ (มา/สาย/ลา/ขาด) ในตาราง — ติ๊กให้ครบก่อน', 'error')
      return
    }

    toast(`กำลังส่งข้อมูล ${withStatus.length} คน (ห้อง ${mainRoom} · ${checkDate}) เข้า pp5-online...`, 'info')

    const payload = withStatus.map(r => ({
      main_room: mainRoom, check_date: checkDate, student_code: r.studentCode,
      status: r.status, raw_name: r.name, source: 'studentcare_v4',
    }))

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/external_attendance_staging?on_conflict=main_room,check_date,student_code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: 'resolution=merge-duplicates,return=minimal',
        },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(`${res.status} ${text}`.slice(0, 200))
      }
      toast(`✅ ส่งสำเร็จ ${withStatus.length} คน — ไปเปิดหน้าเช็คชื่อวิชาใน pp5-online ห้อง ${mainRoom} วันที่ ${checkDate} เพื่อดึงเข้าได้เลย`, 'success')
    } catch (err) {
      console.error('[pp5-studentcare-bridge]', err)
      toast('ส่งข้อมูลไม่สำเร็จ: ' + (err && err.message || ''), 'error')
    }
  }

  run()
})()
