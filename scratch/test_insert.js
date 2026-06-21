import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  // Test insert with different possible location fields to see if any are in the schema
  const { data, error } = await supabase
    .from('prayer_records')
    .insert({
      student_id: 1, // dummy
      main_room: 'ม.1/1',
      check_date: '2026-06-18',
      status: 'pray',
      week_number: 1,
      scan_location: 'test_loc' // test column
    })

  console.log('Error for scan_location:', error?.message)
}

run()
