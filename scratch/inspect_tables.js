import { supabase } from '../js/supabase.js'

async function inspect() {
  try {
    const { data: homerooms, error: hrErr } = await supabase
      .from('homeroom_teachers')
      .select('id, main_room, category, teacher_id')
      .limit(10)
    
    if (hrErr) {
      console.error('Error fetching homerooms:', hrErr)
    } else {
      console.log('Homerooms:', homerooms)
    }

    const { data: students, error: stuErr } = await supabase
      .from('students')
      .select('id, student_code, full_name, main_room, religion_room')
      .limit(5)
    
    if (stuErr) {
      console.error('Error fetching students:', stuErr)
    } else {
      console.log('Students:', students)
    }

  } catch (err) {
    console.error(err)
  }
}

inspect()
