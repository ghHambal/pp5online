import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const STUDENT_QUERY_RANGE = [0, 9999]
const STUDENT_QUERY_PAGE_SIZE = 1000

async function _fetchAllStudents(selectColumns, configure = q => q, orderColumn = null) {
  const rows = []
  for (let from = STUDENT_QUERY_RANGE[0]; from <= STUDENT_QUERY_RANGE[1]; from += STUDENT_QUERY_PAGE_SIZE) {
    const to = Math.min(from + STUDENT_QUERY_PAGE_SIZE - 1, STUDENT_QUERY_RANGE[1])
    let q = supabase.from('students').select(selectColumns)
    q = configure(q)
    if (orderColumn) q = q.order(orderColumn)
    const { data, error } = await q.range(from, to)
    if (error) throw error
    rows.push(...(data ?? []))
    console.log(`Fetched page from=${from} to=${to}, got ${data?.length} rows. Total rows so far: ${rows.length}`)
    if (!data || data.length < STUDENT_QUERY_PAGE_SIZE) break
  }
  return rows
}

async function run() {
  try {
    const email = 'temp_tester_1782330459693@example.com'
    const password = 'Password123!'
    await supabase.auth.signInWithPassword({ email, password })

    console.log('Running simulated getStudents()...')
    const students = await _fetchAllStudents(
      'id, student_code, full_name, main_room, religion_room, gender, image_url, house_color, sports_shirt_size',
      q => q.eq('is_active', true),
      'student_code'
    )
    console.log('Result length:', students.length)

    // Log the counts of ม.1 in the returned list
    const roomCounts = {}
    students.forEach(s => {
      if (s.main_room && s.main_room.startsWith('ม.1')) {
        roomCounts[s.main_room] = (roomCounts[s.main_room] || 0) + 1
      }
    })
    console.log('\nCounts for ม.1 rooms in retrieved students list:')
    Object.keys(roomCounts).sort((a,b)=>a.localeCompare(b,'th')).forEach(room => {
      console.log(`Room: "${room}" -> ${roomCounts[room]} students`)
    })

  } catch (e) {
    console.error('Error running simulation:', e)
  }
}

run()
