import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  try {
    const email = 'temp_tester_1782330459693@example.com'
    const password = 'Password123!'
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) throw authError
    
    console.log('Logged in as:', authData.user.email)
    
    const { data: profiles, error: pErr } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', authData.user.id)
    if (pErr) throw pErr
    console.log('Logged in user profile:', profiles)

    const { data: teachers, error: tErr } = await supabase
      .from('teachers')
      .select('id, full_name, teacher_code, login_email')
    
    if (tErr) throw tErr
    console.log('Total teachers in DB:', teachers.length)
    
    const { data: subjects, error: sErr } = await supabase
      .from('master_subjects')
      .select('id, subject_code, subject_name, teacher_id')
      
    if (sErr) throw sErr
    console.log('Total master_subjects in DB:', subjects.length)
    
    const { data: classes, error: cErr } = await supabase
      .from('classes')
      .select('id, course_id, class_name')
      
    if (cErr) throw cErr
    console.log('Total classes in DB:', classes.length)
    
    // Count class_students
    const { data: classStudents, error: csErr } = await supabase
      .from('class_students')
      .select('class_id, student_id')
      
    if (csErr) {
      console.log('Error fetching class_students:', csErr.message)
    } else {
      console.log('Total class_students records in DB:', classStudents.length)
    }
    
    // Let's find subjects without class_students or classes without students
    console.log('\nSample subjects with teacher:');
    subjects.slice(0, 10).forEach(sub => {
      const teacher = teachers.find(t => t.id === sub.teacher_id);
      const subClasses = classes.filter(c => c.course_id === sub.id);
      console.log(`- ${sub.subject_code} ${sub.subject_name} (Teacher: ${teacher ? teacher.full_name : 'None'}) -> Classes: ${subClasses.map(c => c.class_name).join(', ') || 'None'}`);
    });
    
  } catch (err) {
    console.error('Error:', err)
  }
}

run()
