import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://tuxpdrujjtntwtxdtyml.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_IXzeW3WazTznwmkPd27ErA_Cs8nN91u'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function test() {
  try {
    // 1. count students
    const { count: studentCount, error: sErr } = await supabase
      .from('students')
      .select('*', { count: 'exact', head: true })
    
    if (sErr) throw sErr
    console.log('Total students in DB:', studentCount)

    // 2. count classes
    const { count: classCount, error: cErr } = await supabase
      .from('classes')
      .select('*', { count: 'exact', head: true })
    
    if (cErr) throw cErr
    console.log('Total classes in DB:', classCount)

    // 3. fetch a few students without filters
    const { data: students, error: sDataErr } = await supabase
      .from('students')
      .select('id, full_name, is_active, main_room, religion_room')
      .limit(5)
    if (sDataErr) throw sDataErr
    console.log('Sample students:', students)

  } catch (e) {
    console.error('Error running test:', e)
  }
}

test()
