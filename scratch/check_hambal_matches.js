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

    // Kru Hambal's Class IDs
    const hambalClassIds = [24, 31, 32, 34, 88, 1652, 1653]

    // Fetch Kru Hambal's classes
    const { data: classes, error: cErr } = await supabase
      .from('classes')
      .select('*')
      .in('id', hambalClassIds)
    if (cErr) throw cErr

    console.log('Kru Hambal\'s classes loaded:', classes.length)

    // For each class, fetch active students whose main_room or religion_room matches class_name
    for (const c of classes) {
      console.log(`\nChecking Class ID: ${c.id}, Name: "${c.class_name}"`)
      
      // Let's query students whose main_room or religion_room is equal to class_name
      const { data: mainMatch, error: mErr } = await supabase
        .from('students')
        .select('id, student_code, full_name, main_room, religion_room, is_active')
        .eq('main_room', c.class_name)
        .eq('is_active', true)
      if (mErr) throw mErr

      const { data: relMatch, error: rErr } = await supabase
        .from('students')
        .select('id, student_code, full_name, main_room, religion_room, is_active')
        .eq('religion_room', c.class_name)
        .eq('is_active', true)
      if (rErr) throw rErr

      console.log(`- Students matching main_room: ${mainMatch.length}`)
      console.log(`- Students matching religion_room: ${relMatch.length}`)

      // Print some matching student names
      if (mainMatch.length > 0) {
        console.log(`  Sample main_room match: ${mainMatch.slice(0, 3).map(s => `${s.student_code} ${s.full_name}`).join(', ')}`)
      }
      if (relMatch.length > 0) {
        console.log(`  Sample religion_room match: ${relMatch.slice(0, 3).map(s => `${s.student_code} ${s.full_name}`).join(', ')}`)
      }
    }

  } catch (err) {
    console.error('Error:', err)
  }
}

run()
