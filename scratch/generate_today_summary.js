import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

// DB 1: Main PP5 Online DB
const PP5_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const PP5_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const pp5Client = createClient(PP5_URL, PP5_ANON_KEY)

// DB 2: WEN Duty System DB
const WEN_URL = 'https://zhjqkylesnhcotpkzoxr.supabase.co'
const WEN_ANON_KEY = 'sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n'
const wenClient = createClient(WEN_URL, WEN_ANON_KEY)

async function run() {
  const today = '2026-07-09'
  console.log(`Generating report summary for: ${today}`)

  try {
    // 1. Fetch WEN reports for today
    const { data: reports, error: rErr } = await wenClient
      .from('reports')
      .select('*')
      .eq('date', today)

    if (rErr) {
      console.error('Error fetching reports:', rErr.message)
      return
    }

    // 2. Fetch WEN duty points
    const { data: points, error: pErr } = await wenClient
      .from('duty_points')
      .select('*')

    if (pErr) {
      console.error('Error fetching duty points:', pErr.message)
      return
    }

    // 3. Fetch teachers from main PP5 DB
    const { data: teachers, error: tErr } = await pp5Client
      .from('teachers')
      .select('id, teacher_code, full_name, dept')

    if (tErr) {
      console.error('Error fetching teachers:', tErr.message)
      return
    }

    // Create maps for lookup
    const pointMap = new Map()
    points.forEach(p => {
      pointMap.set(p.id, p)
    })

    const teacherMap = new Map()
    teachers.forEach(t => {
      teacherMap.set(String(t.teacher_code), t)
    })

    // Process reports
    const processedReports = reports.map(r => {
      const pt = pointMap.get(r.point_id) || {}
      const tch = teacherMap.get(String(r.teacher_id)) || {}
      return {
        id: r.id,
        time: r.time || '-',
        status: r.status,
        is_late: r.is_late,
        result: r.result || '-',
        problem: r.problem || '',
        solution: r.solution || '',
        teacherCode: r.teacher_id,
        teacherName: tch.full_name || `ครูรหัส ${r.teacher_id}`,
        pointName: pt.name || `จุดเวร ID ${r.point_id}`,
        pointTime: pt.time || '-',
        distance: r.distance ? Math.round(r.distance) : null,
      }
    })

    // Helper to determine if a report has an exception (problem, leave, student late, etc.)
    const isException = (r) => {
      if (r.problem && r.problem.trim() !== '') return true
      const resultText = r.result.trim()
      
      const normalTexts = [
        'นักเรียนปฏิบัติตนเรียบร้อยดี ไม่พบปัญหาหรือเหตุผิดปกติ',
        'เรียบร้อยดี',
        'ปกติ',
        'เรียบร้อย',
        'นักเรียนเดินทางมาโรงเรียนตามปกติ ไม่พบเหตุผิดปกติ',
        'บริเวณจุดเวรเรียบร้อยดี นักเรียนให้ความร่วมมือดี ไม่พบเหตุผิดปกติ',
        'นักเรียนปฏิบัติตนเรียบร้อยดี ไม่พบปัญหา',
        'สถานการณ์เรียบร้อยดี ไม่มีนักเรียนกระทำผิดระเบียบ',
        '-'
      ]
      
      if (normalTexts.includes(resultText)) return false
      
      // Keywords that suggest issues
      const issueKeywords = ['ลา', 'สาย', 'ช้า', 'ปัญหา', 'ทำโทษ', 'ผิดปกติ', 'ฉุกเฉิน']
      return issueKeywords.some(keyword => resultText.includes(keyword))
    }

    // Grouping / Stats
    const totalReports = processedReports.length
    const onTimeReports = processedReports.filter(r => !r.is_late)
    const lateReports = processedReports.filter(r => r.is_late)
    const reportsWithProblem = processedReports.filter(isException)

    // Generate Markdown content
    let md = `# รายงานเวรประจำวัน (สรุปข้อมูลวันที่ ${today})\n\n`
    md += `## 📊 สรุปข้อมูลภาพรวม\n`
    md += `- **จำนวนการรายงานทั้งหมด**: ${totalReports} รายการ\n`
    md += `- **ตรงเวลา**: ${onTimeReports.length} รายการ ✅\n`
    md += `- **รายงานล่าช้า (สาย)**: ${lateReports.length} รายการ ❌\n`
    md += `- **พบประเด็นสำคัญ/เหตุการณ์ผิดปกติ/ลาเวร**: ${reportsWithProblem.length} รายการ ⚠️\n\n`

    if (reportsWithProblem.length > 0) {
      md += `## ⚠️ รายการที่พบประเด็นสำคัญ หรือ ลา/สายปฏิบัติหน้าที่\n`
      md += `| เวลารายงาน | ชื่อครู | จุดเวร | รายละเอียด / ผลการปฏิบัติหน้าที่ |\n`
      md += `| --- | --- | --- | --- |\n`
      reportsWithProblem.forEach(r => {
        const details = r.problem ? `**ปัญหา:** ${r.problem} <br> **ผลตรวจ:** ${r.result}` : r.result
        md += `| ${r.time} | ${r.teacherName} (รหัส ${r.teacherCode}) | ${r.pointName} | ${details} |\n`
      })
      md += `\n`
    }

    if (lateReports.length > 0) {
      md += `## ❌ รายการรายงานล่าช้า (สายระบบ)\n`
      md += `| เวลารายงาน | เวลาปฏิบัติหน้าที่ | ชื่อครู | จุดเวร | ผลการตรวจ |\n`
      md += `| --- | --- | --- | --- | --- |\n`
      lateReports.forEach(r => {
        md += `| ${r.time} | ${r.pointTime} | ${r.teacherName} (รหัส ${r.teacherCode}) | ${r.pointName} | ${r.result} |\n`
      })
      md += `\n`
    }

    md += `## 📋 รายการรายงานทั้งหมด (${totalReports} รายการ)\n`
    md += `| ลำดับ | เวลารายงาน | เวลาปฏิบัติหน้าที่ | สถานะ | ระยะทาง | ชื่อครู | จุดเวร | ผลการตรวจ |\n`
    md += `| --- | --- | --- | --- | --- | --- | --- | --- |\n`
    processedReports.forEach((r, idx) => {
      const statusStr = r.is_late ? '❌ สาย' : '✅ ตรงเวลา'
      const distStr = r.distance !== null ? `${r.distance} ม.` : '-'
      // Bold the row if it's an exception
      const prefix = isException(r) ? '**' : ''
      const suffix = isException(r) ? '**' : ''
      md += `| ${idx + 1} | ${prefix}${r.time}${suffix} | ${r.pointTime} | ${statusStr} | ${distStr} | ${prefix}${r.teacherName} (รหัส ${r.teacherCode})${suffix} | ${r.pointName} | ${prefix}${r.result}${suffix} |\n`
    })

    const artifactPath = '/Users/admin/.gemini/antigravity-ide/brain/4b2d44c5-2861-4028-b733-b4b690f13a34/duty_report_summary.md'
    fs.writeFileSync(artifactPath, md)
    console.log(`\nMarkdown summary successfully written to: ${artifactPath}`)

    // Print small summary to console so it's not too long but gives quick info
    console.log('\n--- Quick Console Summary ---')
    console.log(`Total: ${totalReports} | On Time: ${onTimeReports.length} | Late: ${lateReports.length} | Exception Reports: ${reportsWithProblem.length}`)

  } catch (err) {
    console.error('System error:', err)
  }
}

run()
