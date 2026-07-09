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

    // Check system_config
    const { data: configs, error: cErr } = await supabase
      .from('system_config')
      .select('*')
    
    if (cErr) throw cErr
    console.log('System Config Values:')
    configs.forEach(c => {
      if (['semester', 'academicYear'].includes(c.key)) {
        console.log(`- ${c.key}: "${c.value}"`)
      }
    })

  } catch (err) {
    console.error('Error:', err)
  }
}

run()
