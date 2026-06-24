import { supabase } from '../js/supabase.js'

async function find() {
  try {
    const { data: students, error } = await supabase
      .from('students')
      .select('id, student_code, full_name, main_room, religion_room')
      .or('main_room.like.ม.6%,main_room.like.ปวช%')
      .eq('is_active', true)
      .limit(20)
    
    if (error) throw error
    console.log('Sample M6 and PVCH students:')
    console.log(students)

    // Count by religion_room
    const rooms = {}
    students.forEach(s => {
      const r = s.religion_room || 'No Room'
      rooms[r] = (rooms[r] || 0) + 1
    })
    console.log('Rooms count:', rooms)

  } catch (err) {
    console.error(err)
  }
}

find()
