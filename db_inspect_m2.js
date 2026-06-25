import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function fetchAll(table, select, filterFn = q => q) {
  const rows = []
  for (let from = 0; from <= 20000; from += 1000) {
    const to = from + 999
    let q = supabase.from(table).select(select).range(from, to)
    q = filterFn(q)
    const { data, error } = await q
    if (error) throw error
    rows.push(...(data ?? []))
    if (!data || data.length < 1000) break
  }
  return rows
}

async function run() {
  try {
    const email = 'temp_tester_1782330459693@example.com'
    const password = 'Password123!'
    await supabase.auth.signInWithPassword({ email, password })

    const students = await fetchAll('students', 'id, student_code, full_name, main_room, is_active', q => q.eq('is_active', true))
    students.sort((a, b) => (a.student_code || '').localeCompare(b.student_code || ''))

    const m2Rooms = [...new Set(students.map(s => s.main_room).filter(r => r && r.startsWith('ม.2')))].sort((a,b)=>a.localeCompare(b,'th'))
    
    console.log('--- Room ranges of student_code for ม.2 ---')
    m2Rooms.forEach(room => {
      const roomStudents = students.filter(s => s.main_room === room)
      const codes = roomStudents.map(s => s.student_code).sort()
      console.log(`Room: "${room}" -> Count: ${roomStudents.length}, Min code: "${codes[0]}", Max code: "${codes[codes.length-1]}"`)
    })

    // Also let's inspect the exact list of students from index 1800 to 2200
    console.log('\n--- Student details from index 1800 to 1820 ---')
    students.slice(1800, 1820).forEach((s, idx) => {
      console.log(`${idx + 1800}: Code: "${s.student_code}", Name: "${s.full_name}", Room: "${s.main_room}"`)
    })

    console.log('\n--- Student details from index 1990 to 2010 ---')
    students.slice(1990, 2010).forEach((s, idx) => {
      console.log(`${idx + 1990}: Code: "${s.student_code}", Name: "${s.full_name}", Room: "${s.main_room}"`)
    })

  } catch (e) {
    console.error(e)
  }
}

run()
