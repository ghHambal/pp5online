import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  const { data: students, error } = await supabase
    .from('students')
    .select('id, student_code, full_name, can_scan_prayer')
    .eq('can_scan_prayer', true)

  if (error) {
    console.error('Error:', error)
    return
  }

  console.log('Students with can_scan_prayer = true:')
  console.log(students)
}

run()
