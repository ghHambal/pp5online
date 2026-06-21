import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  const { data: students, error } = await supabase
    .from('students')
    .select('id, student_code, full_name, is_active')
    .eq('is_active', true)
    .limit(10)

  if (error) {
    console.error('Error:', error)
    return
  }

  console.log('Active students:')
  console.log(students)
}

run()
