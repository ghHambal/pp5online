import { supabase } from '../js/supabase.js'

async function inspect() {
  try {
    // 1. Fetch some homeroom_teachers to see category and main_room values
    const { data: homerooms, error: hrErr } = await supabase
      .from('homeroom_teachers')
      .select('*')
      .limit(10)
    
    if (hrErr) throw hrErr
    console.log('=== HOMEROOM TEACHERS ===')
    console.log(JSON.stringify(homerooms, null, 2))

    // 2. Fetch some prayer_records
    const { data: records, error: recErr } = await supabase
      .from('prayer_records')
      .select('*')
      .limit(5)
    
    if (recErr) throw recErr
    console.log('=== PRAYER RECORDS ===')
    console.log(JSON.stringify(records, null, 2))

  } catch (err) {
    console.error(err)
  }
}

inspect()
