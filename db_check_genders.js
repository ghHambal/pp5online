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

    const students = await fetchAll('students', 'id, student_code, full_name, main_room, is_active, gender', q => q.eq('is_active', true))

    console.log('--- Gender counts for ม.1 rooms ---')
    const m1Rooms = [...new Set(students.map(s => s.main_room).filter(r => r && r.startsWith('ม.1')))].sort((a,b)=>a.localeCompare(b,'th'))
    m1Rooms.forEach(room => {
      const roomStus = students.filter(s => s.main_room === room)
      const male = roomStus.filter(s => s.gender === 'ชาย').length
      const female = roomStus.filter(s => s.gender === 'หญิง').length
      console.log(`Room: "${room}" -> Total: ${roomStus.length}, Male: ${male}, Female: ${female}`)
    })

    console.log('\n--- Gender counts for ม.2 rooms ---')
    const m2Rooms = [...new Set(students.map(s => s.main_room).filter(r => r && r.startsWith('ม.2')))].sort((a,b)=>a.localeCompare(b,'th'))
    m2Rooms.forEach(room => {
      const roomStus = students.filter(s => s.main_room === room)
      const male = roomStus.filter(s => s.gender === 'ชาย').length
      const female = roomStus.filter(s => s.gender === 'หญิง').length
      console.log(`Room: "${room}" -> Total: ${roomStus.length}, Male: ${male}, Female: ${female}`)
    })

  } catch (e) {
    console.error(e)
  }
}

run()
