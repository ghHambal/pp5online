import { supabase } from '../js/supabase.js'

async function check() {
  try {
    // We want to query homeroom teachers. Since teachers table is readable anonymously, 
    // we can join it or query if we can.
    // Wait, homeroom_teachers is not readable anonymously, but let's check if we can query it or if it returns empty.
    const { data: ht, error } = await supabase
      .from('homeroom_teachers')
      .select('id, main_room, category, teacher_id, teachers(id, full_name, teacher_code)')
      .eq('main_room', 'อก.3/2 An-Najah')
    
    if (error) throw error
    console.log('Homeroom teachers for อก.3/2 An-Najah:', ht)
  } catch (err) {
    console.error(err)
  }
}

check()
