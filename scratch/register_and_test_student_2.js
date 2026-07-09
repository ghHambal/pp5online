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

    console.log('Registering student email:', email)
    
    // 1. Sign up the student
    const { data: signUpData, error: signUpErr } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: 'น.ส.ซูไรนีย์ วันยี', role: 'student', user_code: studentCode }
      }
    })
    
    if (signUpErr) {
      if (signUpErr.message.includes('already registered')) {
        console.log('Student already signed up. Proceeding to login...')
      } else {
        throw signUpErr
      }
    } else {
      console.log('Sign up completed successfully!')
      // Wait for trigger
      await new Promise(r => setTimeout(r, 2000))
    }

    // 2. Link student profile
    console.log('Linking student profile...')
    const { data: linked, error: linkErr } = await supabase.rpc('link_student_profile', {
      p_student_code: studentCode
    })
    if (linkErr) {
      console.log('Link profile error:', linkErr.message)
    } else {
      console.log('Link profile result:', linked)
    }

    // 3. Log in as the student
    console.log('Logging in as student...')
    const { data: loginData, error: loginErr } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (loginErr) throw loginErr
    console.log('Logged in successfully. User ID:', loginData.user.id)

    // 4. Query enrolled classes
    console.log('Querying class_students directly as student...')
    const { data: classStudents, error: csErr } = await supabase
      .from('class_students')
      .select('*')
      .eq('student_id', studentId)
    
    if (csErr) {
      console.error('Error querying class_students:', csErr)
    } else {
      console.log(`class_students entries found (${classStudents.length}):`, classStudents)
    }

    // 5. Query deep embedding format
    console.log('Querying deep embedding format as student...')
    const { data: deepData, error: deepErr } = await supabase
      .from('class_students')
      .select(`
        class_id,
        classes (
          id, class_name, skill_group, google_sheet_id,
          master_subjects (
            id, subject_code, subject_name, dept, grade_level, credit, teacher_id, subject_group,
            teachers!master_subjects_teacher_id_fkey ( id, full_name, phone, image_url, category )
          )
        )
      `)
      .eq('student_id', studentId)

    if (deepErr) {
      console.error('Error querying deep embedding:', deepErr)
    } else {
      console.log('Deep embedding result length:', deepData?.length)
      console.log('Sample deep embedding rows:', JSON.stringify(deepData, null, 2))
    }

  } catch (err) {
    console.error('Error:', err)
  }
}

run()
