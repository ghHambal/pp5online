import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://tuxpdrujjtntwtxdtyml.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_IXzeW3WazTznwmkPd27ErA_Cs8nN91u'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  const { count, error } = await supabase
    .from('students')
    .select('*', { count: 'exact', head: true })

  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Total students in database:', count)
  }
  
  // also check profiles
  const { count: profileCount, error: profileErr } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true })
    
  if (profileErr) {
    console.error('Profile error:', profileErr)
  } else {
    console.log('Total profiles in database:', profileCount)
  }

  // print 5 students if any
  if (count > 0) {
    const { data } = await supabase
      .from('students')
      .select('id, student_code, full_name, can_scan_prayer')
      .limit(5)
    console.log('Sample students:', data)
  }
}

run()
