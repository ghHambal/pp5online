import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  try {
    const studentCode = '24121'
    const studentId = 2387
    const email = `stu${studentCode}@student.pp5.local`
    const password = 'Password123!'

    // Log in as student
    const { data: loginData, error: loginErr } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (loginErr) throw loginErr
    console.log('Logged in successfully. User ID:', loginData.user.id)

    // Query enrolled classes
    const { data: classStudents, error: csErr } = await supabase
      .from('class_students')
      .select('*')
      .eq('student_id', studentId)
    
    if (csErr) throw csErr
    console.log('Total enrolled class_students rows found:', classStudents.length)
    console.log('Enrolled class_students:', classStudents)

  } catch (err) {
    console.error('Error:', err)
  }
}

run()
