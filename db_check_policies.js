import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  try {
    const email = 'temp_tester_1782330459693@example.com'
    const password = 'Password123!'
    await supabase.auth.signInWithPassword({ email, password })

    try {
      const { data, error } = await supabase.rpc('get_policies', { table_name: 'students' })
      if (error) throw error
      console.log('get_policies result:', data)
    } catch (err) {
      console.log('get_policies RPC failed or not found:', err.message)
    }
  } catch (e) {
    console.error(e)
  }
}

run()
