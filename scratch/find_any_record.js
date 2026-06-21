import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  const { data: students, error: sErr } = await supabase
    .from('students')
    .select('id, full_name')
    .limit(10)
  
  if (sErr) {
    console.error('Students error:', sErr)
    return
  }

  console.log('Students:', students)

  if (students.length > 0) {
    const studentIds = students.map(s => s.id)
    const { data: records, error: rErr } = await supabase
      .from('prayer_records')
      .select('*')
      .in('student_id', studentIds)

    if (rErr) {
      console.error('Records error:', rErr)
    } else {
      console.log('Found records:', records)
    }
  }
}

run()
