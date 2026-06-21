import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  const { data: students, error } = await supabase
    .from('students')
    .select('*')
    .limit(10)

  if (error) {
    console.error('Error fetching students:', error)
  } else {
    console.log('All students (first 10):', students)
  }
}

run()
