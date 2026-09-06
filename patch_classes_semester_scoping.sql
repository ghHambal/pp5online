-- เพิ่มการผูก "ภาคเรียน/ปีการศึกษา" ให้ตาราง classes (เตรียมรองรับขึ้นภาคเรียนที่ 2)
-- รันจริงบน production แล้วเมื่อ 2026-09-06 ผ่าน Supabase MCP — ไฟล์นี้เก็บไว้เป็นหลักฐาน/อ้างอิงใน repo เท่านั้น
--
-- บริบท: ก่อนหน้านี้ classes/class_students/class_score_columns/student_scores/attendances
-- ไม่มีคอลัมน์ผูกเทอมเลย ทำให้ RPC auto_enroll_students_by_room() จับคู่นักเรียนเข้าห้องแค่จาก
-- ชื่อห้อง (main_room/religion_room) โดยไม่สนใจว่าห้องนั้นเป็นของเทอมไหน — เจอบั๊กจริงคือมีห้องเรียน
-- ซ้ำกัน 4 คู่ (course_id+class_name เดียวกัน) พร้อมนักเรียนกลุ่มเดียวกันถูกลงทะเบียนซ้ำเข้าไปทั้ง 2 ห้อง
-- (แก้ข้อมูลที่ผิดไปแล้วแยกต่างหาก ไม่ได้อยู่ใน patch นี้) งานนี้แก้ต้นเหตุเชิงโครงสร้าง

-- 1) เพิ่มคอลัมน์
alter table public.classes
  add column if not exists academic_year integer,
  add column if not exists semester integer;

-- 2) backfill ห้องเรียนเดิมทั้งหมดด้วยค่าเทอมปัจจุบันจาก system_config
update public.classes
set
  academic_year = coalesce(academic_year, (select value::integer from public.system_config where key = 'academicYear')),
  semester      = coalesce(semester, (select value::integer from public.system_config where key = 'semester'))
where academic_year is null or semester is null;

-- 3) trigger: ห้องเรียนใหม่ทุกห้อง (ไม่ว่าจะสร้างจากทางไหน) จะถูกประทับปี/เทอมปัจจุบันอัตโนมัติ
--    ถ้าไม่ได้ระบุมาตอน insert (createClass() ฝั่ง JS ไม่เคยส่งค่านี้อยู่แล้ว — ปล่อยให้ trigger จัดการ)
create or replace function public._trg_classes_stamp_semester()
returns trigger
language plpgsql
security definer
set search_path to 'public'
as $$
begin
  if new.academic_year is null then
    select value::integer into new.academic_year from public.system_config where key = 'academicYear';
  end if;
  if new.semester is null then
    select value::integer into new.semester from public.system_config where key = 'semester';
  end if;
  return new;
end;
$$;

drop trigger if exists classes_stamp_semester on public.classes;
create trigger classes_stamp_semester
before insert on public.classes
for each row execute function public._trg_classes_stamp_semester();

-- 4) แก้ต้นเหตุบั๊กห้องซ้ำ: auto_enroll_students_by_room() ต้องจับคู่ห้อง "เฉพาะเทอมปัจจุบัน" เท่านั้น
--    ไม่งั้นห้องชื่อเดียวกันจากเทอมก่อน (ที่ยังไม่ได้ลบ) จะโดนดึงนักเรียนเข้าไปซ้ำทุกสัปดาห์
create or replace function public.auto_enroll_students_by_room()
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  enrolled_count integer := 0;
  v_year integer;
  v_sem integer;
begin
  select value::integer into v_year from public.system_config where key = 'academicYear';
  select value::integer into v_sem  from public.system_config where key = 'semester';

  insert into public.class_students (class_id, student_id, is_active)
  select distinct c.id, s.id, true
  from public.classes as c
  join public.students as s
    on s.main_room = c.class_name or s.religion_room = c.class_name
  where s.is_active = true
    and c.academic_year = v_year and c.semester = v_sem
    and not exists (
      select 1
      from public.class_student_exclusions as x
      where x.class_id = c.id and x.student_id = s.id
    )
  on conflict (class_id, student_id) do nothing;

  get diagnostics enrolled_count = row_count;
  return json_build_object('ok', true, 'enrolled', enrolled_count, 'deactivated', 0);
end;
$function$;

-- 5) ฝั่ง JS ที่ต้องแก้คู่กัน (ทำแล้วในคอมมิตเดียวกับ patch นี้):
--    - js/api.js getMyClasses() เพิ่ม academic_year, semester เข้า select list
--    - js/teacher-class-forms.js renderClassForm() usedRooms กรองเทียบเฉพาะห้องของเทอม/ปีปัจจุบัน
--      (ห้องชื่อเดียวกันจากเทอมก่อนจะไม่ถูกนับว่า "ถูกใช้แล้ว" ตอนกดทำสำเนาห้องเรียนสำหรับเทอมใหม่)
--
-- ยังไม่ทำ (ต้องทำต่อก่อนขึ้นเทอม 2 จริง):
--    - เครื่องมือ "ขึ้นเทอมใหม่" แบบ bulk (ตอนนี้ยังต้องกด "ทำสำเนาห้องเรียน" เองทีละห้อง)
--    - ตัว export ข้อมูลเทอมเก่าเป็น zip + purge ออกจากฐานจริงหลัง ~2 เดือน (ตามที่ผู้ใช้ตั้งเป้าไว้)
--    - ปรับ ปพ.5 (js/pp5-doc.js) ให้อ่านเทอม/ปีจาก class_id ที่ผูกไว้จริง แทนอ่าน system_config แบบ live
--      (ตอนนี้ยังเสี่ยงพิมพ์หัวเอกสารผิดเทอมถ้า flip semester ก่อนออกเอกสารเทอมเก่าครบ)
