import { supabase } from '../js/supabase.js'

async function run() {
  const { data, error } = await supabase
    .from('system_config')
    .select('*')
  
  if (error) {
    console.error(error)
    return
  }

  console.log('=== SEMESTER / ACADEMIC KEYS ===')
  for (const row of data) {
    if (row.key.toLowerCase().includes('semester') || row.key.toLowerCase().includes('academic') || row.key.toLowerCase().includes('start') || row.key.toLowerCase().includes('end')) {
      console.log(row.key, '->', row.value)
    }
    if (row.semester_start || row.semester_end) {
      console.log(`Row id ${row.id} has semester_start: ${row.semester_start}, semester_end: ${row.semester_end}`)
    }
  }
}

run()
