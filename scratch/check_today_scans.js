import { supabase } from '../js/supabase.js'

async function check() {
  try {
    const today = new Date().toISOString().slice(0, 10)
    console.log('Today is:', today)
    
    // Fetch all prayer_records for today
    const { data: records, error } = await supabase
      .from('prayer_records')
      .select('id, student_id, main_room, status, check_date, location, created_at, teacher_id')
      .eq('check_date', today)
    
    if (error) throw error
    console.log(`Found ${records.length} records for today:`)
    console.log(JSON.stringify(records, null, 2))

    // Let's also check if there are students scanned
    if (records.length > 0) {
      const studentIds = records.map(r => r.student_id)
      const { data: students } = await supabase
        .from('students')
        .select('id, student_code, full_name, main_room, religion_room')
        .in('id', studentIds)
      
      console.log('Scanned students details:')
      console.log(students)
    }

  } catch (err) {
    console.error(err)
  }
}

check()
