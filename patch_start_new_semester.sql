-- ปุ่ม "ขึ้นภาคเรียนใหม่" (แอดมิน, หน้าตั้งค่าระบบ)
-- รันจริงบน production แล้วเมื่อ 2026-09-06 ผ่าน Supabase MCP — ไฟล์นี้เก็บไว้เป็นหลักฐาน/อ้างอิงใน repo เท่านั้น
-- ต้องรัน patch_classes_semester_scoping.sql ก่อน (เพิ่มคอลัมน์ classes.academic_year/semester)

-- RPC หลัก: เปลี่ยนปี/เทอมกลางใน system_config เท่านั้น
-- ภาคเรียนใหม่เริ่มเป็นพื้นที่ว่าง ครูผู้สอนเป็นผู้สร้างคอร์สและห้องเรียนเอง
-- ไม่ clone ห้องเรียน ไม่ cloneคอร์ส และไม่ลงทะเบียนนักเรียนอัตโนมัติ
create or replace function public.admin_start_new_semester(p_new_academic_year integer, p_new_semester integer)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_old_year integer;
  v_old_sem integer;
begin
  if get_user_role() <> 'admin' then
    raise exception 'not authorized';
  end if;

  if p_new_academic_year is null or p_new_academic_year <= 0 then
    raise exception 'ปีการศึกษาไม่ถูกต้อง';
  end if;

  if p_new_semester not in (1, 2) then
    raise exception 'ภาคเรียนต้องเป็น 1 หรือ 2';
  end if;

  select value::integer into v_old_year from public.system_config where key = 'academicYear';
  select value::integer into v_old_sem  from public.system_config where key = 'semester';

  if v_old_year = p_new_academic_year and v_old_sem = p_new_semester then
    raise exception 'ปี/เทอมใหม่เหมือนกับปัจจุบัน ไม่มีอะไรต้องทำ';
  end if;

  update public.system_config set value = p_new_academic_year::text, updated_at = now() where key = 'academicYear';
  update public.system_config set value = p_new_semester::text, updated_at = now() where key = 'semester';

  return json_build_object(
    'ok', true,
    'old_academic_year', v_old_year,
    'old_semester', v_old_sem,
    'new_academic_year', p_new_academic_year,
    'new_semester', p_new_semester,
    'courses_created', 0,
    'classes_created', 0,
    'students_enrolled', 0,
    'workspace', 'empty'
  );
end;
$function$;

-- จำกัดสิทธิ์การเรียกให้เฉพาะผู้ใช้ที่ล็อกอินแล้วผ่าน RPC
revoke all on function public.admin_start_new_semester(integer, integer) from public;
grant execute on function public.admin_start_new_semester(integer, integer) to authenticated;

-- ฝั่ง JS ที่ต้องแก้คู่กัน (ทำแล้วในคอมมิตเดียวกับ patch นี้):
--   - js/api.js: เพิ่ม startNewSemester(newAcademicYear, newSemester) เรียก RPC นี้
--   - js/views.js renderSettings(): เพิ่มปุ่ม "🔄 ขึ้นภาคเรียนใหม่" ในแท็บ "general"
--     คำนวณเทอมถัดไปอัตโนมัติ (1→2 ปีเดิม, 2→1 ปี+1) ไม่ให้แอดมินพิมพ์เลขเองกันพลาด
--     มี confirm() เตือนก่อนเสมอ เพราะเป็นการเปลี่ยนแปลงทั้งโรงเรียน
--   - js/teacher-views-classes.js renderMyClasses(): เพิ่ม opts.showAllTerms —
--     ค่าเริ่มต้น (false) จะซ่อนห้องเรียนที่ academic_year/semester ไม่ตรงกับเทอมปัจจุบันออกจาก
--     รายการ "ห้องเรียนของฉัน" (ไม่ได้ลบ/บล็อกการเข้าถึง แค่ไม่โชว์) มีปุ่ม toggle ให้ดูย้อนหลังได้
--
-- หมายเหตุ:
--   - ข้อมูลภาคเรียนเก่าไม่ถูกลบ ยังคงเก็บเป็นประวัติผ่าน academic_year/semester
--   - ข้อมูลรายภาคเรียนใหม่จะเริ่มว่างเพราะไม่มีการสร้างคอร์ส/ห้องเรียน/การลงทะเบียนอัตโนมัติ
--   - ปพ.5 (js/pp5-doc.js) ยังอ่านเทอม/ปีจาก system_config แบบ live ไม่ผูกกับ class_id จริง
