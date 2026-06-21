import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  const { data: students, error } = await supabase
    .from('students')
    .select('id, student_code, full_name, is_active, main_room')
    .or('full_name.ilike.%ขวัญข้าว%,full_name.ilike.%เพชรแท้%')

  if (error) {
    console.error('Error fetching:', error)
  } else {
    console.log('Test students by name:', students)
  }
}

run()
