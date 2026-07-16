// js/teacher-views-quiz-analytics.js
import { getClassStudents } from './api.js'
import { getQuizAnalytics, getQuizQuestions } from './quiz-api.js'
import { _htmlEsc } from './teacher-views-utils.js'

const HIST_BANDS = [
  { min: 80, label: '80-100%', color: '#10b981' },
  { min: 60, label: '60-79%', color: '#34d399' },
  { min: 40, label: '40-59%', color: '#fbbf24' },
  { min: 20, label: '20-39%', color: '#fb923c' },
  { min: 0, label: '0-19%', color: '#ef4444' },
]

export async function openQuizAnalytics(quiz) {
  document.getElementById('quiz-analytics-modal')?.remove()
  const m = document.createElement('div')
  m.id = 'quiz-analytics-modal'
  m.className = 'fixed inset-0 z-[95] flex flex-col bg-gray-50'
  m.innerHTML = `
    <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="qa-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800 truncate">📊 สถิติ: ${_htmlEsc(quiz.title)}</h2>
      </div>
      <button id="qa-export" class="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold flex-shrink-0">⬇️ Export CSV</button>
    </div>
    <div class="flex-1 overflow-y-auto p-4" id="qa-body">
      <div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>
    </div>
  `
  document.body.appendChild(m)
  m.querySelector('#qa-close').addEventListener('click', () => m.remove())

  const [{ attempts, violations }, questions, students] = await Promise.all([
    getQuizAnalytics(quiz.id),
    getQuizQuestions(quiz.bank_id),
    getClassStudents(quiz.class_id).catch(() => []),
  ])

  const studentById = Object.fromEntries(students.map(s => [s.id, s]))
  const questionById = Object.fromEntries(questions.map(q => [q.id, q]))

  const scores = attempts.map(a => a.score_pct).filter(v => v != null)
  const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : null
  const histCounts = HIST_BANDS.map(b => ({
    ...b, count: scores.filter(s => s >= b.min && (HIST_BANDS[HIST_BANDS.indexOf(b) - 1]?.min ?? 101) > s).length
  }))
  const maxHistCount = Math.max(1, ...histCounts.map(h => h.count))

  // ── Leaderboard ── best finished score per student, ranked (ties share a rank)
  const bestByStudent = {}
  attempts.forEach(a => {
    if (a.score_pct == null) return
    if (bestByStudent[a.student_id] == null || a.score_pct > bestByStudent[a.student_id]) {
      bestByStudent[a.student_id] = a.score_pct
    }
  })
  const sortedScores = Object.entries(bestByStudent)
    .map(([studentId, pct]) => ({ student: studentById[studentId], pct }))
    .sort((a, b) => b.pct - a.pct)
  let lastPct = null, lastRank = 0
  const leaderboard = sortedScores.map((row, i) => {
    if (row.pct !== lastPct) { lastRank = i + 1; lastPct = row.pct }
    return { ...row, rank: lastRank }
  })
  const MEDALS = { 1: '🥇', 2: '🥈', 3: '🥉' }

  // ── Item analysis ── (precompute a Set per attempt so membership checks are O(1), not O(num_questions))
  const questionSetByAttempt = attempts.map(a => Array.isArray(a.question_order) ? new Set(a.question_order) : new Set())
  const itemStats = questions.map(q => {
    let attempted = 0, correct = 0
    const choiceCounts = new Array(q.choices.length).fill(0)
    attempts.forEach((a, i) => {
      if (!questionSetByAttempt[i].has(q.id)) return
      const chosen = a.answers?.[q.id]
      if (chosen === undefined || chosen === null) return
      attempted++
      if (chosen === q.correct_choice_index) correct++
      if (chosen >= 0 && chosen < choiceCounts.length) choiceCounts[chosen]++
    })
    const pctCorrect = attempted > 0 ? Math.round(correct / attempted * 100) : null
    const flag = pctCorrect == null ? null : pctCorrect < 30 ? 'hard' : pctCorrect > 90 ? 'easy' : null
    return { question: q, attempted, correct, pctCorrect, choiceCounts, flag }
  })

  // ── Violation log ──
  const violationsByAttempt = {}
  violations.forEach(v => { (violationsByAttempt[v.attempt_id] ??= []).push(v) })
  const violationRows = attempts
    .filter(a => (violationsByAttempt[a.id] ?? []).length > 0)
    .map(a => ({ student: studentById[a.student_id], count: violationsByAttempt[a.id].length, events: violationsByAttempt[a.id] }))

  const body = document.getElementById('qa-body')
  if (!body) return // modal was closed while the data was loading
  body.innerHTML = `
    <div class="max-w-3xl mx-auto space-y-5">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${attempts.length}</p>
          <p class="text-xs text-gray-400 mt-0.5">จำนวนครั้งที่ทำเสร็จ</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${avg != null ? avg.toFixed(1) + '%' : '—'}</p>
          <p class="text-xs text-gray-400 mt-0.5">คะแนนเฉลี่ย</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${violationRows.length}</p>
          <p class="text-xs text-gray-400 mt-0.5">คนที่ถูกล็อก/ออกนอกหน้าสอบ</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">การกระจายคะแนน</h3>
        <div class="space-y-1.5">
          ${histCounts.map(h => `
            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-500 w-16 flex-shrink-0">${h.label}</span>
              <div class="flex-1 bg-gray-50 rounded-full h-4 overflow-hidden">
                <div class="h-full rounded-full" style="width:${h.count / maxHistCount * 100}%;background:${h.color}"></div>
              </div>
              <span class="text-xs font-bold text-gray-600 w-6 text-right flex-shrink-0">${h.count}</span>
            </div>
          `).join('')}
        </div>
      </div>

      ${leaderboard.length > 0 ? `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">🏆 อันดับคะแนน</h3>
        <div class="space-y-1.5">
          ${leaderboard.map(row => `
            <div class="flex items-center gap-3 py-1.5 ${row.rank <= 3 ? 'bg-amber-50/50 -mx-2 px-2 rounded-lg' : ''}">
              <span class="w-7 text-center text-sm font-bold ${row.rank <= 3 ? '' : 'text-gray-400'} flex-shrink-0">${MEDALS[row.rank] ?? row.rank}</span>
              <span class="text-sm text-gray-700 flex-1 truncate">${_htmlEsc(row.student?.full_name ?? 'ไม่ทราบชื่อ')}</span>
              <span class="text-sm font-bold text-gray-800 flex-shrink-0">${row.pct.toFixed(1)}%</span>
            </div>
          `).join('')}
        </div>
      </div>` : ''}

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">วิเคราะห์รายข้อ</h3>
        <div class="space-y-3">
          ${itemStats.map((s, i) => `
            <div class="border border-gray-100 rounded-xl p-3">
              <div class="flex items-start justify-between gap-2 mb-1">
                <p class="text-sm font-semibold text-gray-800 flex-1">ข้อ ${i + 1}: ${_htmlEsc(s.question.question_text)}</p>
                ${s.flag === 'hard' ? '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 flex-shrink-0">⚠️ ยากผิดปกติ</span>' : ''}
                ${s.flag === 'easy' ? '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 flex-shrink-0">⚠️ ง่ายเกินไป</span>' : ''}
              </div>
              <p class="text-xs text-gray-400 mb-2">${s.pctCorrect != null ? `ตอบถูก ${s.pctCorrect}% (${s.correct}/${s.attempted})` : 'ยังไม่มีใครตอบ'}</p>
              ${s.attempted > 0 ? `<div class="space-y-1">
                ${s.question.choices.map((c, ci) => {
                  const pct = Math.round((s.choiceCounts[ci] ?? 0) / s.attempted * 100)
                  const isRight = ci === s.question.correct_choice_index
                  return `<div class="flex items-center gap-2">
                    <span class="text-xs w-4 flex-shrink-0">${isRight ? '✓' : '○'}</span>
                    <span class="text-xs text-gray-600 flex-1 truncate">${_htmlEsc(c)}</span>
                    <div class="w-20 bg-gray-50 rounded-full h-2 overflow-hidden flex-shrink-0">
                      <div class="h-full rounded-full ${isRight ? 'bg-emerald-500' : 'bg-gray-300'}" style="width:${pct}%"></div>
                    </div>
                    <span class="text-xs text-gray-400 w-8 text-right flex-shrink-0">${pct}%</span>
                  </div>`
                }).join('')}
              </div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      ${violationRows.length > 0 ? `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">บันทึกการออกนอกหน้าสอบ</h3>
        <div class="space-y-2">
          ${violationRows.map(v => `
            <div class="flex items-center justify-between gap-2 text-xs">
              <span class="text-gray-700 font-medium">${_htmlEsc(v.student?.full_name ?? 'ไม่ทราบชื่อ')}</span>
              <span class="text-red-500 font-bold">${v.count} ครั้ง</span>
            </div>
          `).join('')}
        </div>
      </div>` : ''}
    </div>
  `

  document.getElementById('qa-export').addEventListener('click', () => {
    const rows = [['รหัสนักเรียน', 'ชื่อ-สกุล', 'สถานะ', 'คะแนน(%)', 'จำนวนครั้งออกนอกหน้าสอบ']]
    attempts.forEach(a => {
      const s = studentById[a.student_id]
      rows.push([s?.student_code ?? '', s?.full_name ?? '', a.status, a.score_pct ?? '', a.violation_count ?? 0])
    })
    const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n')
    const uri = encodeURI('data:text/csv;charset=utf-8,' + csv)
    const link = document.createElement('a')
    link.href = uri
    link.download = `quiz_${quiz.title}_analytics.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })
}
