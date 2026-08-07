// js/studentcare-bridge-push.js — โหลดผ่าน bookmarklet ตอนอยู่ในหน้าระบบดูแล (azizstan.net/StudentCareV4)
// ทิศทางย้อนกลับของ studentcare-bridge.js: ดึงเช็คชื่อที่ครูส่งออกจาก pp5-online มาแล้ว มาติ๊กปุ่ม
// มา/สาย/ลา/ขาด ในหน้าระบบดูแลให้อัตโนมัติ — ปุ่ม "บันทึกข้อมูล" ให้ครูกดยืนยันเองเสมอ ไม่ auto-submit
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
      background: type === 'error' ? '#ef4444' : type === 'success' ? '#16a34a' : '#7c3aed',
    })
    document.body.appendChild(div)
    setTimeout(() => div.remove(), 6000)
  }

  function findMainRoom() {
    const selects = document.querySelectorAll('select')
    for (const sel of selects) {
      const opt = sel.options[sel.selectedIndex]
      const txt = (opt ? opt.textContent : '').trim()
      if (/^ม\.\d+\/\d+/.test(txt) || /^ปวช\.\d+\/\d+/.test(txt)) return txt
    }
    return ''
  }

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
    if (!thead) return { idIndex: -1 }
    const ths = thead.querySelectorAll('tr th')
    let idIndex = -1
    ths.forEach((th, idx) => {
      const norm = normalizeHeader(th.textContent)
      if (norm.includes('รหัสนักเรียน')) idIndex = idx
    })
    return { idIndex }
  }

  // pp5-online เก็บสถานะเป็นคีย์อังกฤษ (present/absent/late/excused/sick) — แปลงเป็นข้อความปุ่มของระบบดูแล
  // ระบบดูแลมีปุ่มแค่ 4 แบบ (มา/สาย/ลา/ขาด) ไม่แยกลากิจ/ลาป่วย จึงรวม excused+sick เป็น "ลา" เหมือนกัน
  function statusKeyToLabel(status) {
    switch (status) {
      case 'present': return 'มา'
      case 'late': return 'สาย'
      case 'excused': return 'ลา'
      case 'sick': return 'ลา'
      case 'absent': return 'ขาด'
      default: return ''
    }
  }

  // ติ๊กปุ่มสถานะในแถว tr ให้ตรงกับ label ที่ต้องการ — หา label/button ที่ข้อความตรงกันแล้วคลิก
  // (วิธีนี้ผ่านการใช้งานจริงมาแล้วจากสคริปต์เดิมที่เชื่อม ระบบดูแล ↔ ปพ.5 ผ่าน Google ชีท)
  function applyStatusToRow(tr, label) {
    if (!label) return false
    const targetRegex = new RegExp(label.replace(/\s+/g, ''), 'i')
    const candidates = tr.querySelectorAll('label, button')
    for (const el of candidates) {
      const txt = (el.textContent || '').replace(/\s+/g, '')
      if (targetRegex.test(txt)) { el.click(); return true }
    }
    return false
  }

  async function run() {
    const mainRoom = findMainRoom()
    const checkDate = findCheckDateISO()
    if (!mainRoom) { toast('หาห้องเรียนที่เลือกอยู่ไม่เจอ — ตรวจสอบว่าเลือกห้องเรียนไว้แล้ว', 'error'); return }
    if (!checkDate) { toast('หาวันที่บันทึกไม่เจอ — ตรวจสอบว่าเลือกวันที่ไว้แล้ว', 'error'); return }

    toast(`กำลังดึงเช็คชื่อจาก pp5-online (ห้อง ${mainRoom} · ${checkDate})...`, 'info')

    let rows
    try {
      const url = `${SUPABASE_URL}/rest/v1/pp5_attendance_export?main_room=eq.${encodeURIComponent(mainRoom)}&check_date=eq.${checkDate}&select=student_code,status`
      const res = await fetch(url, {
        headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
      })
      if (!res.ok) throw new Error(`${res.status}`)
      rows = await res.json()
    } catch (err) {
      console.error('[pp5-studentcare-bridge-push]', err)
      toast('ดึงข้อมูลจาก pp5-online ไม่สำเร็จ: ' + (err && err.message || ''), 'error')
      return
    }

    if (!rows.length) {
      toast(`ยังไม่มีเช็คชื่อที่ส่งมาจาก pp5-online สำหรับห้อง ${mainRoom} วันที่ ${checkDate} — ไปกดปุ่ม "ส่งไประบบดูแล" ในหน้าเช็คชื่อ pp5-online ก่อน`, 'error')
      return
    }

    const table = findStudentTable()
    if (!table) { toast('ไม่พบตารางรายชื่อนักเรียนในหน้านี้', 'error'); return }
    const { idIndex } = getHeaderIndexes(table)
    const byCode = Object.fromEntries(rows.map(r => [r.student_code, r.status]))

    let affected = 0
    table.querySelectorAll('tbody tr').forEach(tr => {
      const tds = tr.querySelectorAll('td')
      if (!tds.length) return
      let studentCode = ''
      if (idIndex >= 0 && idIndex < tds.length) {
        const raw = (tds[idIndex].textContent || '').replace(/\s+/g, '').trim()
        if (/^\d{4,}$/.test(raw)) studentCode = raw
      }
      if (!studentCode) {
        for (const td of tds) {
          const txt = (td.textContent || '').replace(/\s+/g, '').trim()
          if (/^\d{4,}$/.test(txt)) { studentCode = txt; break }
        }
      }
      if (!studentCode || !byCode[studentCode]) return
      const label = statusKeyToLabel(byCode[studentCode])
      if (applyStatusToRow(tr, label)) affected++
    })

    if (!affected) {
      toast('ดึงข้อมูลมาได้ แต่ไม่พบรหัสนักเรียนที่ตรงกันในตารางเลยสักคน', 'error')
      return
    }
    toast(`✅ ติ๊กสถานะให้แล้ว ${affected} คน — ตรวจสอบให้ดีแล้วกดปุ่ม "บันทึกข้อมูล" ของระบบดูแลเองนะครับ (สคริปต์นี้ไม่กดบันทึกให้อัตโนมัติ)`, 'success')
  }

  run()
})()
