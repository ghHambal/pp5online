import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  const { data, error } = await supabase
    .from('prayer_records')
    .select('*')
    .limit(1)

  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Sample record of prayer_records:', data)
  }
}

run()
