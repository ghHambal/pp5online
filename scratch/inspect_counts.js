import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  const { count: studentCount } = await supabase.from('students').select('*', { count: 'exact', head: true })
  const { count: profileCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true })
  const { count: configCount } = await supabase.from('system_config').select('*', { count: 'exact', head: true })
  
  console.log('Students count:', studentCount)
  console.log('Profiles count:', profileCount)
  console.log('Config count:', configCount)
}

run()
