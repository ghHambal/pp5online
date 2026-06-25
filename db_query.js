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

    const students = await fetchAll('students', 'id, student_code, full_name, main_room, religion_room, is_active, gender', q => q.eq('is_active', true))
    // Sort all active students by student_code as getStudents() does
    students.sort((a, b) => (a.student_code || '').localeCompare(b.student_code || ''))

    console.log('Total active students:', students.length)

    // Let's see how many active students we get if we slice to 1000
    const sliced1000 = students.slice(0, 1000)
    console.log('Sliced to 1000 active students. Let\'s see counts for ม.1:')

    const studentM1Rooms = [...new Set(students.map(s => s.main_room).filter(r => r && r.startsWith('ม.1')))].sort((a,b)=>a.localeCompare(b,'th'))
    
    studentM1Rooms.forEach(room => {
      const fullCount = students.filter(s => s.main_room === room).length
      const slicedCount = sliced1000.filter(s => s.main_room === room).length
      console.log(`Room: "${room}" -> Full count: ${fullCount}, Sliced count: ${slicedCount}`)
    })

  } catch (e) {
    console.error('Exception in run:', e)
  }
}

run()
