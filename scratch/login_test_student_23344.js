import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  try {
    const studentCode = '23344'
    const studentId = 2738
    const email = `stu${studentCode}@student.pp5.local`
    
    // Try logging in with Password123!
    const { data: loginData, error: loginErr } = await supabase.auth.signInWithPassword({
      email,
      password: 'Password123!'
    })
    
    if (loginErr) {
      console.log('Login failed with Password123!:', loginErr.message)
      return
    }

    console.log('Logged in successfully as student 23344!')
    
    // Query enrolled classes
    const { data: classStudents, error: csErr } = await supabase
      .from('class_students')
      .select('*')
      .eq('student_id', studentId)
    
    if (csErr) throw csErr
    console.log('Student 23344 class_students rows count:', classStudents.length)
    console.log('Rows:', classStudents)

  } catch (err) {
    console.error('Error:', err)
  }
}

run()
