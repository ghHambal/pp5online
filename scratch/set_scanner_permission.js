import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  // Find students that have a linked profile_id
  const { data: students, error: fetchError } = await supabase
    .from('students')
    .select('id, student_code, full_name, profile_id, can_scan_prayer')
    .not('profile_id', 'is', null)

  if (fetchError) {
    console.error('Error fetching students:', fetchError)
    return
  }

  console.log('Students linked to user profiles:', students)

  if (students.length === 0) {
    console.log('No students are currently linked to user profiles.')
    return
  }

  // Update all of them (or the first one) to can_scan_prayer = true
  const ids = students.map(s => s.id)
  const { data: updated, error: updateError } = await supabase
    .from('students')
    .update({ can_scan_prayer: true })
    .in('id', ids)
    .select('id, full_name, student_code, can_scan_prayer')

  if (updateError) {
    console.error('Error updating students:', updateError)
    return
  }

  console.log('Successfully updated students:', updated)
}

run()
