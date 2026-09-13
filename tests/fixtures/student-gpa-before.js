// Frozen getStudentGPA before H1; copied from the accepted Phase 1 worktree.
import { supabase } from '../../js/supabase.js'

export async function getStudentGPA(studentId) {
  const { data: enrollment } = await supabase
    .from('class_students')
    .select(`
      class_id,
      classes(id, subject_group_override, master_subjects(
        subject_name, subject_code, credit, subject_group,
        teachers(full_name, category)
      ))
    `)
    .eq('student_id', studentId)
  if (!enrollment?.length) return { samai: [], sasana: [] }

  const results = await Promise.all(enrollment.map(async e => {
    const cls = e.classes
    const ms  = cls?.master_subjects
    if (!ms) return null
    const { data: cols } = await supabase
      .from('class_score_columns')
      .select('id, assignment_type, max_score')
      .eq('class_id', e.class_id)
      .not('assignment_type', 'eq', 'คะแนนพิเศษ')
    if (!cols?.length) return {
      classId: cls.id, subjectName: ms.subject_name, subjectCode: ms.subject_code,
      credit: ms.credit ?? 1, grade: null, score: null, maxScore: null, scoredCount: 0, totalCols: 0,
      hasRetake: false, group: ms.subject_group, teacherCategory: ms.teachers?.category ?? '',
      groupOverride: cls.subject_group_override ?? null,
      teacherName: ms.teachers?.full_name ?? '—'
    }
    const { data: scores } = await supabase
      .from('student_scores')
      .select('assignment_id, original_score, retake_score, final_score')
      .eq('student_id', studentId)
      .in('assignment_id', cols.map(c => c.id))
    const scoreMap = Object.fromEntries((scores ?? []).map(s => [s.assignment_id, s]))
    // ยังคิดเกรดไม่ได้จนกว่าครูจะกรอกคะแนนครบทุกช่อง — ถ้านับช่องที่ยังไม่กรอกเป็น 0 ไปก่อน
    // นักเรียนจะเห็นเกรดเฉลี่ยต่ำผิดปกติ/ไม่ผ่าน ทั้งที่ครูแค่ยังตรวจไม่เสร็จ (เจอบั๊กจริง 2026-09-08)
    const scoredCount = cols.filter(c => {
      const sc = scoreMap[c.id]
      return sc && (sc.final_score != null || sc.original_score != null)
    }).length
    const isComplete = scoredCount === cols.length
    const maxTotal = cols.reduce((s, c) => s + (c.max_score || 0), 0)
    const total = cols.reduce((s, c) => {
      const sc = scoreMap[c.id]
      return s + (parseFloat(sc?.final_score ?? sc?.original_score ?? 0) || 0)
    }, 0)
    const hasRetake = (scores ?? []).some(s => s.retake_score != null)
    const pct   = (isComplete && maxTotal > 0) ? total / maxTotal * 100 : null
    const grade = pct != null
      ? (pct >= 80 ? 4 : pct >= 75 ? 3.5 : pct >= 70 ? 3 : pct >= 65 ? 2.5
        : pct >= 60 ? 2 : pct >= 55 ? 1.5 : pct >= 50 ? 1 : 0)
      : null
    return {
      classId: cls.id, subjectName: ms.subject_name, subjectCode: ms.subject_code,
      credit: ms.credit ?? 1, grade, score: pct != null ? Math.round(total) : null,
      maxScore: maxTotal, hasRetake, pct: pct != null ? Math.round(pct) : null,
      scoredCount, totalCols: cols.length,
      group: ms.subject_group, teacherCategory: ms.teachers?.category ?? '',
      groupOverride: cls.subject_group_override ?? null,
      teacherName: ms.teachers?.full_name ?? '—'
    }
  }))

  const valid = results.filter(Boolean)
  const _isSasana = r => r.groupOverride
    ? r.groupOverride === 'sasana'
    : (r.teacherCategory === 'ศาสนา' || ['AGM','AGMVOC'].includes(r.group))
  const samai  = valid.filter(r => !_isSasana(r))
  const sasana = valid.filter(r =>  _isSasana(r))
  return { samai, sasana }
}
