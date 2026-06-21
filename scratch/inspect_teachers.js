import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  const { data, error } = await supabase
    .from('teachers')
    .select('*')
    .limit(1)

  if (error) {
    console.error('Error fetching teachers:', error)
  } else {
    console.log('Sample teacher record:', data)
  }
}

run()
