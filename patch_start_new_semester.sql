-- ปุ่ม "ขึ้นภาคเรียนใหม่" (แอดมิน, หน้าตั้งค่าระบบ)
-- รันจริงบน production แล้วเมื่อ 2026-09-06 ผ่าน Supabase MCP — ไฟล์นี้เก็บไว้เป็นหลักฐาน/อ้างอิงใน repo เท่านั้น
-- ต้องรัน patch_classes_semester_scoping.sql ก่อน (เพิ่มคอลัมน์ classes.academic_year/semester)

-- RPC หลัก: เปลี่ยนปี/เทอมกลางใน system_config + สร้างห้องเรียนใหม่ (เปล่า ไม่มีคะแนน/คอลัมน์เดิม)
-- ให้ทุกวิชาที่มีอยู่ในเทอมเดิม แล้วลงทะเบียนนักเรียนอัตโนมัติผ่าน auto_enroll_students_by_room()
-- (ซึ่งจับคู่ตาม main_room/religion_room ปัจจุบันของนักเรียน เฉพาะห้องของเทอมใหม่เท่านั้น)
create or replace function public.admin_start_new_semester(p_new_academic_year integer, p_new_semester integer)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_old_year integer;
  v_old_sem integer;
  v_classes_created integer := 0;
  v_enroll_result json;
begin
  if get_user_role() <> 'admin' then
    raise exception 'not authorized';
  end if;

  select value::integer into v_old_year from public.system_config where key = 'academicYear';
  select value::integer into v_old_sem  from public.system_config where key = 'semester';

  if v_old_year = p_new_academic_year and v_old_sem = p_new_semester then
    raise exception 'ปี/เทอมใหม่เหมือนกับปัจจุบัน ไม่มีอะไรต้องทำ';
  end if;

  update public.system_config set value = p_new_academic_year::text, updated_at = now() where key = 'academicYear';
  update public.system_config set value = p_new_semester::text, updated_at = now() where key = 'semester';

  -- ห้องใหม่ไม่ copy คอลัมน์คะแนน/งานที่มอบหมายเดิมเลย (ตามที่ผู้ใช้ยืนยัน: "ส่วนอื่นจะเป็นของใหม่ทั้งหมด")
  -- trigger classes_stamp_semester จะประทับ academic_year/semester ใหม่ให้อัตโนมัติเพราะ config ถูกอัปเดตไปแล้วข้างบน
  insert into public.classes (course_id, class_name, skill_group, classroom_id)
  select course_id, class_name, skill_group, classroom_id
  from public.classes
  where academic_year = v_old_year and semester = v_old_sem;

  get diagnostics v_classes_created = row_count;

  select public.auto_enroll_students_by_room() into v_enroll_result;

  return json_build_object(
    'ok', true,
    'old_academic_year', v_old_year,
    'old_semester', v_old_sem,
    'new_academic_year', p_new_academic_year,
    'new_semester', p_new_semester,
    'classes_created', v_classes_created,
    'students_enrolled', (v_enroll_result->>'enrolled')::integer
  );
end;
$function$;

-- ฝั่ง JS ที่ต้องแก้คู่กัน (ทำแล้วในคอมมิตเดียวกับ patch นี้):
--   - js/api.js: เพิ่ม startNewSemester(newAcademicYear, newSemester) เรียก RPC นี้
--   - js/views.js renderSettings(): เพิ่มปุ่ม "🔄 ขึ้นภาคเรียนใหม่" ในแท็บ "general"
--     คำนวณเทอมถัดไปอัตโนมัติ (1→2 ปีเดิม, 2→1 ปี+1) ไม่ให้แอดมินพิมพ์เลขเองกันพลาด
--     มี confirm() เตือนก่อนเสมอ เพราะเป็นการเปลี่ยนแปลงทั้งโรงเรียน
--   - js/teacher-views-classes.js renderMyClasses(): เพิ่ม opts.showAllTerms —
--     ค่าเริ่มต้น (false) จะซ่อนห้องเรียนที่ academic_year/semester ไม่ตรงกับเทอมปัจจุบันออกจาก
--     รายการ "ห้องเรียนของฉัน" (ไม่ได้ลบ/บล็อกการเข้าถึง แค่ไม่โชว์) มีปุ่ม toggle ให้ดูย้อนหลังได้
--
-- ยังไม่ทำ (ดู [[project_semester2_transition]] ในความจำ):
--   - Export ข้อมูลเทอมเก่าเป็น zip + purge ออกจากฐานหลัง ~2 เดือน (เป้าหมายหลักที่ผู้ใช้ตั้งไว้)
--   - ปพ.5 (js/pp5-doc.js) ยังอ่านเทอม/ปีจาก system_config แบบ live ไม่ผูกกับ class_id จริง
