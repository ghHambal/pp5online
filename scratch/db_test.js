import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function test() {
  try {
    // 1. Total counts
    const { count: teacherCount } = await supabase.from('teachers').select('*', { count: 'exact', head: true })
    const { count: classCount } = await supabase.from('classes').select('*', { count: 'exact', head: true })
    const { count: subjectCount } = await supabase.from('master_subjects').select('*', { count: 'exact', head: true })
    const { count: attendanceCount } = await supabase.from('attendances').select('*', { count: 'exact', head: true })
    const { count: scoreCount } = await supabase.from('student_scores').select('*', { count: 'exact', head: true })

    console.log('--- DB Total Counts ---')
    console.log('Teachers:', teacherCount)
    console.log('Classes:', classCount)
    console.log('Subjects:', subjectCount)
    console.log('Attendances:', attendanceCount)
    console.log('Student Scores:', scoreCount)

    // 2. Fetch classes with inner join on master_subjects
    const { data: classesData, error: classesErr } = await supabase.from('classes')
      .select('id, class_name, master_subjects!inner(id, teacher_id, subject_name, subject_code)')
    
    if (classesErr) throw classesErr
    console.log('\nClasses returned from getSupervisorProgress query format:', classesData.length)

    // 3. Let's find teachers with count discrepancies
    const { data: teachers, error: tErr } = await supabase.from('teachers').select('id, full_name')
    if (tErr) throw tErr

    console.log('\n--- Teacher Class Count Breakdown ---')
    const teacherMap = {}
    teachers.forEach(t => {
      teacherMap[t.id] = { name: t.full_name, queryCount: 0, innerCount: 0 }
    })

    // Count via classes query directly (equivalent to master_subjects link)
    const { data: subjectsAll } = await supabase.from('master_subjects').select('id, teacher_id')
    const { data: classesAll } = await supabase.from('classes').select('id, course_id')

    classesAll.forEach(c => {
      const subj = subjectsAll.find(s => s.id === c.course_id)
      if (subj && subj.teacher_id) {
        if (teacherMap[subj.teacher_id]) {
          teacherMap[subj.teacher_id].queryCount++
        }
      }
    })

    // Count returned in inner join query
    classesData.forEach(c => {
      const tid = c.master_subjects?.teacher_id
      if (tid && teacherMap[tid]) {
        teacherMap[tid].innerCount++
      }
    })

    // Print discrepancies
    console.log('Teacher ID | Name | Direct Count | Inner Join Count')
    for (const [tid, info] of Object.entries(teacherMap)) {
      if (info.queryCount !== info.innerCount || info.queryCount > 0) {
        console.log(`${tid} | ${info.name} | ${info.queryCount} | ${info.innerCount}`)
      }
    }

  } catch (e) {
    console.error('Error running test:', e)
  }
}

test()
