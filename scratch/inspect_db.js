import { supabase } from '../js/supabase.js'

async function check() {
  try {
    const { data: teachers, error } = await supabase
      .from('teachers')
      .select('*')
      .eq('teacher_code', '1087')
    
    if (error) {
      console.error('Error fetching teacher 1087:', error)
    } else {
      console.log('Teacher 1087 details:', JSON.stringify(teachers, null, 2))
    }

    // Let's also check all teachers who have religion_group_head in position or positions
    const { data: allReg, error: regError } = await supabase
      .from('teachers')
      .select('id, full_name, position, positions')
    
    if (regError) {
      console.error('Error fetching all teachers:', regError)
    } else {
      const heads = allReg.filter(t => 
        t.position === 'religion_group_head' || 
        (t.positions && t.positions.includes('religion_group_head'))
      )
      console.log('Teachers with religion_group_head:', JSON.stringify(heads, null, 2))
    }
  } catch (err) {
    console.error(err)
  }
}

check()
