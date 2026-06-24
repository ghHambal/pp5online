import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  const { data: teacher, error } = await supabase
    .from('teachers')
    .select('*')
    .eq('full_name', 'นายฮัมบาลีย์ วาจิ')
    .maybeSingle()
  
  if (error) {
    console.error(error)
  } else {
    console.log('Kru Hambal teacher record:')
    console.log(teacher)
  }
}

run()
