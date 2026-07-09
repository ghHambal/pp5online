import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  try {
    const email = 'temp_tester_1782330459693@example.com'
    const password = 'Password123!'
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) throw authError
    
    console.log('Logged in as:', authData.user.email)

    // Check profiles for student 23344
    const { data: profile, error: pErr } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', '997febb4-b7bb-4569-95b6-df335270e39b')
      .maybeSingle()
    
    if (pErr) throw pErr
    console.log('Student 23344 profile in DB:', profile)

  } catch (err) {
    console.error('Error:', err)
  }
}

run()
