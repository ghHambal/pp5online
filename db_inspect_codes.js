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

    console.log('Total students:', students.length)

    // Analyze the distribution of main_room in the first 1000 students
    const first1000 = students.slice(0, 1000)
    const second1000 = students.slice(1000, 2000)
    const remaining = students.slice(2000)

    console.log('First 1000 rooms breakdown:')
    printBreakdown(first1000)

    console.log('\nSecond 1000 rooms breakdown:')
    printBreakdown(second1000)

    console.log('\nRemaining rooms breakdown:')
    printBreakdown(remaining)

  } catch (e) {
    console.error(e)
  }
}

function printBreakdown(list) {
  const counts = {}
  list.forEach(s => {
    if (s.main_room) {
      counts[s.main_room] = (counts[s.main_room] || 0) + 1
    }
  })
  Object.keys(counts).sort((a,b)=>a.localeCompare(b,'th')).forEach(room => {
    console.log(`- ${room}: ${counts[room]}`)
  })
}

run()
