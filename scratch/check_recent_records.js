import { supabase } from '../js/supabase.js'

async function check() {
  const { data: records, error } = await supabase
    .from('prayer_records')
    .select('id, student_id, check_date, status, created_at, teacher_id')
    .order('created_at', { ascending: false })
    .limit(20)
  
  if (error) {
    console.error(error)
    return
  }
  
  console.log('Recent 20 records:')
  console.log(records)
}

check()
