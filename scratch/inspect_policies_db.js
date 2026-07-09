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

    // Hambal's rooms:
    const rooms = [
      "ม.6/6 Ash-Shafi'i",
      "ม.5/6 Ash-Shafi'i",
      "ม.5/2 Delima",
      "ม.6/2 Delima",
      "ม.6/9 Mutiara"
    ]

    const { data: stds, error: sErr } = await supabase
      .from('students')
      .select('*')
      .in('main_room', rooms)
      .is('profile_id', null)
      .eq('is_active', true)
      .limit(10)
    
    if (sErr) throw sErr
    console.log(`Unregistered students in Hambal's rooms (${stds.length}):`)
    stds.forEach(s => {
      console.log(`- ID: ${s.id}, Code: ${s.student_code}, Name: ${s.full_name}, Room: ${s.main_room}`)
    })

  } catch (err) {
    console.error('Error:', err)
  }
}

run()
