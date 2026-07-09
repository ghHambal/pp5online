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

    // Load all classes (since we want to join)
    // Wait, classes table is readable by authenticated user
    const { data: classes, error: cErr } = await supabase
      .from('classes')
      .select('id, class_name')
    if (cErr) throw cErr
    console.log('Total classes loaded:', classes.length)

    // Load all active students
    // Since page size is 1000, let's fetch all active students
    const students = []
    for (let from = 0; from <= 5000; from += 1000) {
      const { data, error } = await supabase
        .from('students')
        .select('id, student_code, full_name, main_room, religion_room, is_active')
        .eq('is_active', true)
        .range(from, from + 999)
      if (error) throw error
      students.push(...(data ?? []))
      if (data.length < 1000) break
    }
    console.log('Total active students loaded:', students.length)

    // Let's count potential matches
    let matchesCount = 0
    const matchedList = []
    
    for (const s of students) {
      for (const c of classes) {
        if (s.main_room === c.class_name || s.religion_room === c.class_name) {
          matchesCount++
          if (matchedList.length < 10) {
            matchedList.push({
              student: s.full_name,
              student_code: s.student_code,
              main_room: s.main_room,
              religion_room: s.religion_room,
              class_name: c.class_name,
              class_id: c.id
            })
          }
        }
      }
    }

    console.log('Total matching join pairs in JS:', matchesCount)
    console.log('Sample matched pairs:', matchedList)

  } catch (err) {
    console.error('Error:', err)
  }
}

run()
