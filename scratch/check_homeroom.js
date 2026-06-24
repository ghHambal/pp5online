import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  // We can select from homeroom_teachers if there is a public read or if we bypass it.
  // Wait, let's see if we can read it.
  const { data, error } = await supabase
    .from('homeroom_teachers')
    .select('*')
  
  if (error) {
    console.error(error)
  } else {
    console.log('homeroom_teachers records:', data)
  }
}

run()
