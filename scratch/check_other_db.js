import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://tuxpdrujjtntwtxdtyml.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_IXzeW3WazTznwmkPd27ErA_Cs8nN91u'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  try {
    const { count: stdCount, error: err1 } = await supabase.from('students').select('*', { count: 'exact', head: true })
    if (err1) {
      console.log('Error querying students on other DB:', err1.message)
    } else {
      console.log('Other DB students count:', stdCount)
    }

    const { data: someTeachers, error: err2 } = await supabase.from('teachers').select('*').limit(5)
    if (err2) {
      console.log('Error querying teachers on other DB:', err2.message)
    } else {
      console.log('Other DB teachers:', someTeachers)
    }
  } catch (err) {
    console.error('Error:', err)
  }
}

run()
