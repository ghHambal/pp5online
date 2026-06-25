import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  try {
    const email = 'temp_tester_1782330459693@example.com'
    const password = 'Password123!'
    await supabase.auth.signInWithPassword({ email, password })

    const columns = 'id, student_code, full_name, main_room, religion_room, gender, image_url, house_color, sports_shirt_size'
    
    // Page 1: 0 to 999
    const { data: page1, error: e1 } = await supabase
      .from('students')
      .select(columns)
      .eq('is_active', true)
      .order('student_code')
      .range(0, 999)
    if (e1) throw e1
    console.log('Page 1 count:', page1?.length)

    // Page 2: 1000 to 1999
    const { data: page2, error: e2 } = await supabase
      .from('students')
      .select(columns)
      .eq('is_active', true)
      .order('student_code')
      .range(1000, 1999)
    if (e2) throw e2
    console.log('Page 2 count:', page2?.length)

    // Page 3: 2000 to 2999
    const { data: page3, error: e3 } = await supabase
      .from('students')
      .select(columns)
      .eq('is_active', true)
      .order('student_code')
      .range(2000, 2999)
    if (e3) throw e3
    console.log('Page 3 count:', page3?.length)

  } catch (e) {
    console.error(e)
  }
}

run()
