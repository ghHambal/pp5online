import { supabase } from '../js/supabase.js'

async function check() {
  try {
    const { data: start, error: err1 } = await supabase
      .from('system_config')
      .select('*')
      .eq('key', 'semester_start')
      .maybeSingle()
    
    const { data: end, error: err2 } = await supabase
      .from('system_config')
      .select('*')
      .eq('key', 'semester_end')
      .maybeSingle()

    console.log('semester_start:', start)
    console.log('semester_end:', end)
  } catch (err) {
    console.error(err)
  }
}

check()
