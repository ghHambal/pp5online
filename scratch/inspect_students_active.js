// scratch/inspect_students_active.js
import { createClient } from '@supabase/supabase-js'

async function checkDb(name, url, key) {
  try {
    const supabase = createClient(url, key)
    
    // Count in students table
    const { count: totalStudents } = await supabase
      .from('students')
      .select('*', { count: 'exact', head: true })
    
    const { count: activeStudents } = await supabase
      .from('students')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true)

    const { count: inactiveStudents } = await supabase
      .from('students')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', false)

    // Count in class_students table
    const { count: totalEnrollments } = await supabase
      .from('class_students')
      .select('*', { count: 'exact', head: true })
    
    const { count: activeEnrollments } = await supabase
      .from('class_students')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true)

    const { count: inactiveEnrollments } = await supabase
      .from('class_students')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', false)

    console.log(`--- DB: ${name} (${url}) ---`)
    console.log('Students Table:')
    console.log(`  Total: ${totalStudents}`)
    console.log(`  Active (is_active = true): ${activeStudents}`)
    console.log(`  Inactive (is_active = false): ${inactiveStudents}`)
    console.log('Class Enrollments (class_students):')
    console.log(`  Total: ${totalEnrollments}`)
    console.log(`  Active (is_active = true): ${activeEnrollments}`)
    console.log(`  Inactive (is_active = false): ${inactiveEnrollments}`)
  } catch (err) {
    console.error(`Error checking DB ${name}:`, err.message)
  }
}

async function run() {
  await checkDb(
    'Hardcoded supabase.js',
    'https://isupghduywzqbmnjgtip.supabase.co',
    'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
  )
  
  await checkDb(
    '.env config',
    'https://tuxpdrujjtntwtxdtyml.supabase.co',
    'sb_publishable_IXzeW3WazTznwmkPd27ErA_Cs8nN91u'
  )
}

run()
