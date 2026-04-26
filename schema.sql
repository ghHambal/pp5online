-- ============================================================
--  ปพ.5 ออนไลน์ — Database Schema v3 (Supabase / PostgreSQL)
--  รันไฟล์นี้ใน Supabase → SQL Editor ทีเดียวจบ
-- ============================================================

-- ─── DROP ตารางเดิมทั้งหมด ────────────────────────────────────
DROP TABLE IF EXISTS exam_requests      CASCADE;
DROP TABLE IF EXISTS teacher_schedules  CASCADE;
DROP TABLE IF EXISTS attendances        CASCADE;
DROP TABLE IF EXISTS student_scores     CASCADE;
DROP TABLE IF EXISTS class_score_columns CASCADE;
DROP TABLE IF EXISTS class_students     CASCADE;
DROP TABLE IF EXISTS students           CASCADE;
DROP TABLE IF EXISTS classes            CASCADE;
DROP TABLE IF EXISTS master_subjects    CASCADE;
DROP TABLE IF EXISTS teachers_quota     CASCADE;
DROP TABLE IF EXISTS teachers           CASCADE;
DROP TABLE IF EXISTS profiles           CASCADE;
DROP TABLE IF EXISTS school_periods     CASCADE;
DROP TABLE IF EXISTS system_config      CASCADE;

-- DROP functions เดิม
DROP FUNCTION IF EXISTS public.get_user_role()   CASCADE;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;


-- ─── 1. SYSTEM_CONFIG (key-value) ────────────────────────────
-- ตัวอย่าง key: schoolName, logoUrl, primaryColor, currentTerm, schoolAddress ฯลฯ
CREATE TABLE system_config (
  id         SERIAL       PRIMARY KEY,
  key        TEXT         UNIQUE NOT NULL,
  value      TEXT,
  updated_at TIMESTAMPTZ  DEFAULT NOW()
);

-- ข้อมูลเริ่มต้น (Admin แก้ได้ในหน้าตั้งค่าระบบ)
INSERT INTO system_config (key, value) VALUES
  -- ── ทั่วไป ──────────────────────────────────────────────
  ('appColor',                    '#007bff'),
  ('semester',                    '1'),
  ('academicYear',                '2568'),
  -- ── โรงเรียนสามัญ ───────────────────────────────────────
  ('samaiSchoolName',             ''),
  ('samaiLogoUrl',                ''),   -- อัปโหลดได้
  ('samaiRegistrarName',          ''),
  ('samaiRegistrarSignUrl',       ''),   -- อัปโหลดได้
  ('samaiAcademicHeadName',       ''),
  ('samaiAcademicHeadSignUrl',    ''),   -- อัปโหลดได้
  ('samaiDirectorName',           ''),
  ('samaiDirectorSignUrl',        ''),   -- อัปโหลดได้
  -- ── วิทยาลัยปวช ─────────────────────────────────────────
  ('porworCollegeName',           ''),
  ('porworLogoUrl',               ''),   -- อัปโหลดได้
  ('porworRegistrarName',         ''),
  ('porworRegistrarSignUrl',      ''),   -- อัปโหลดได้
  ('porworAcademicHeadName',      ''),
  ('porworAcademicHeadSignUrl',   ''),   -- อัปโหลดได้
  ('porworDirectorName',          ''),
  ('porworDirectorSignUrl',       '')    -- อัปโหลดได้
ON CONFLICT (key) DO NOTHING;


-- ─── 1b. ACADEMIC_REGISTRY (ทะเบียน) ────────────────────────
-- 1 แถว ต่อ (ภาคเรียน + ปีการศึกษา + กลุ่มสาระ)
-- ใช้สำหรับพิมพ์ลายเซ็นบน ปพ.5
CREATE TABLE academic_registry (
  id                  SERIAL  PRIMARY KEY,
  semester            INT     NOT NULL,  -- ภาคเรียนที่ 1 หรือ 2
  academic_year       INT     NOT NULL,  -- ปีการศึกษา เช่น 2567
  dept_code           TEXT    NOT NULL,  -- รหัสกลุ่มสาระ เช่น MATH, THAI, SC
  dept_name           TEXT,              -- ชื่อกลุ่มสาระ เช่น คณิตศาสตร์
  head_name           TEXT,              -- ชื่อ-สกุลหัวหน้ากลุ่มสาระ
  registrar_name      TEXT,              -- ชื่อ-สกุลหัวหน้าฝ่ายทะเบียน
  academic_head_name  TEXT,              -- ชื่อ-สกุลหัวหน้าฝ่ายวิชาการ
  director_name       TEXT,              -- ชื่อ-สกุลผู้อำนวยการโรงเรียน
  UNIQUE (semester, academic_year, dept_code)
);

ALTER TABLE academic_registry ENABLE ROW LEVEL SECURITY;
CREATE POLICY "registry_read"  ON academic_registry FOR SELECT TO authenticated USING (true);
CREATE POLICY "registry_admin" ON academic_registry FOR ALL    TO authenticated USING (get_user_role() = 'admin');


-- ─── 1c. DEPARTMENTS (กลุ่มสาระการเรียนรู้) ─────────────────
-- Master data กลุ่มสาระ — เพิ่มได้ในอนาคต ไม่ผูกกับภาคเรียน
CREATE TABLE departments (
  id             SERIAL  PRIMARY KEY,
  dept_code      TEXT    UNIQUE NOT NULL,  -- เช่น MATH, THAI, SC
  dept_name      TEXT    NOT NULL,         -- เช่น คณิตศาสตร์
  head_name      TEXT,                     -- ชื่อ-สกุลหัวหน้ากลุ่มสาระ
  head_photo_url TEXT,                     -- รูปโปรไฟล์หัวหน้า
  head_sign_url  TEXT,                     -- รูปลายเซ็นหัวหน้า
  teacher_id     INT     REFERENCES teachers(id) ON DELETE SET NULL  -- ครูที่เป็นหัวหน้า
);

ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "dept_read"  ON departments FOR SELECT TO authenticated USING (true);
CREATE POLICY "dept_admin" ON departments FOR ALL    TO authenticated USING (get_user_role() = 'admin');
-- หัวหน้ากลุ่มสาระแก้ได้เฉพาะแถวของตัวเอง (photo + sign)
CREATE POLICY "dept_head_update" ON departments FOR UPDATE TO authenticated
  USING (teacher_id IN (SELECT id FROM teachers WHERE profile_id = auth.uid()));


-- ─── 2. SCHOOL_PERIODS ───────────────────────────────────────
CREATE TABLE school_periods (
  id         SERIAL  PRIMARY KEY,
  period_no  INT     NOT NULL,
  start_time TIME    NOT NULL,
  end_time   TIME    NOT NULL
);

-- ข้อมูลตัวอย่างคาบเรียน (ปรับตามโรงเรียนได้)
INSERT INTO school_periods (period_no, start_time, end_time) VALUES
  (1, '08:30', '09:20'),
  (2, '09:20', '10:10'),
  (3, '10:10', '11:00'),
  (4, '11:00', '11:50'),
  (5, '12:40', '13:30'),
  (6, '13:30', '14:20'),
  (7, '14:20', '15:10'),
  (8, '15:10', '16:00');


-- ─── 3. PROFILES (Auth) ──────────────────────────────────────
-- เชื่อมกับ Supabase Auth — สร้างอัตโนมัติเมื่อ login ครั้งแรก
CREATE TABLE profiles (
  id        UUID  PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role      TEXT  CHECK (role IN ('admin', 'teacher', 'student')),
  user_code TEXT  UNIQUE  -- รหัสครู หรือ รหัสนักเรียน (ผูกทีหลัง)
);

-- Helper: ดึง role ปัจจุบัน (ป้องกัน RLS infinite recursion)
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS TEXT LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

-- Trigger: สร้าง profile อัตโนมัติเมื่อสมัคร / ครั้งแรกที่ login
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'role', 'teacher')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- ─── 4. TEACHERS ─────────────────────────────────────────────
-- Master data ครู — import ก่อนได้โดยไม่ต้องมี Auth account
CREATE TABLE teachers (
  id           SERIAL  PRIMARY KEY,
  teacher_code TEXT    UNIQUE,
  full_name    TEXT    NOT NULL,
  category     TEXT    CHECK (category IN ('สามัญ', 'ศาสนา')),
  phone        TEXT,
  image_url    TEXT,   -- URL รูปโปรไฟล์ครู
  profile_id   UUID    REFERENCES profiles(id) ON DELETE SET NULL
);


-- ─── 5. TEACHERS_QUOTA ───────────────────────────────────────
CREATE TABLE teachers_quota (
  id                    SERIAL   PRIMARY KEY,
  teacher_id            INT      UNIQUE REFERENCES teachers(id) ON DELETE CASCADE,
  total_classes_created INT      DEFAULT 0,
  is_paid               BOOLEAN  DEFAULT false
);


-- ─── 6. MASTER_SUBJECTS ──────────────────────────────────────
CREATE TABLE master_subjects (
  id            SERIAL       PRIMARY KEY,
  teacher_id    INT          REFERENCES teachers(id) ON DELETE SET NULL,
  dept          TEXT,        -- กลุ่มสาระการเรียนรู้ (link → academic_registry.dept)
  subject_group TEXT,
  learning_area TEXT,
  subject_code  TEXT,
  subject_name  TEXT         NOT NULL,
  credit        NUMERIC(3,1),
  grade_level   TEXT
);


-- ─── 7. CLASSES ──────────────────────────────────────────────
CREATE TABLE classes (
  id               SERIAL  PRIMARY KEY,
  course_id        INT     REFERENCES master_subjects(id) ON DELETE CASCADE,
  class_name       TEXT    NOT NULL,  -- เช่น ม.4/1
  skill_group      TEXT,
  google_sheet_id  TEXT,
  head_student_id  INT,               -- FK เพิ่มทีหลังหลังสร้าง students แล้ว
  day1_date        DATE,
  day2_date        DATE,
  day3_date        DATE,
  day4_date        DATE,
  day5_date        DATE,
  day6_date        DATE
);


-- ─── 8. STUDENTS ─────────────────────────────────────────────
-- Master data นักเรียน — import ก่อนได้โดยไม่ต้องมี Auth account
CREATE TABLE students (
  id           SERIAL  PRIMARY KEY,
  student_code TEXT    UNIQUE NOT NULL,
  full_name    TEXT    NOT NULL,
  main_room    TEXT,   -- ห้องประจำ เช่น ม.4/1
  image_url    TEXT,
  profile_id   UUID    REFERENCES profiles(id) ON DELETE SET NULL  -- ผูกเมื่อนักเรียน login
);

-- FK head_student_id → students (เพิ่มหลัง students ถูกสร้าง)
ALTER TABLE classes
  ADD CONSTRAINT fk_head_student
  FOREIGN KEY (head_student_id) REFERENCES students(id) ON DELETE SET NULL;


-- ─── 9. CLASS_STUDENTS ───────────────────────────────────────
CREATE TABLE class_students (
  id         SERIAL  PRIMARY KEY,
  class_id   INT     REFERENCES classes(id)  ON DELETE CASCADE,
  student_id INT     REFERENCES students(id) ON DELETE CASCADE,
  UNIQUE (class_id, student_id)
);


-- ─── 10. CLASS_SCORE_COLUMNS ─────────────────────────────────
CREATE TABLE class_score_columns (
  id               SERIAL  PRIMARY KEY,
  class_id         INT     REFERENCES classes(id) ON DELETE CASCADE,
  assignment_name  TEXT    NOT NULL,
  assignment_type  TEXT,   -- 'ระหว่างเรียน' | 'กลางภาค' | 'ปลายภาค' | 'คะแนนพิเศษ'
  sheet_column     TEXT    NOT NULL,  -- เช่น 'EK', 'EX'
  max_score        INT
);


-- ─── 11. STUDENT_SCORES ──────────────────────────────────────
CREATE TABLE student_scores (
  id             SERIAL       PRIMARY KEY,
  assignment_id  INT          REFERENCES class_score_columns(id) ON DELETE CASCADE,
  student_id     INT          REFERENCES students(id) ON DELETE CASCADE,
  original_score NUMERIC(5,2) DEFAULT 0,
  retake_score   NUMERIC(5,2),           -- คะแนนสอบปรับ
  final_score    NUMERIC(5,2) DEFAULT 0, -- คะแนนสุทธิ
  UNIQUE (assignment_id, student_id)
);


-- ─── 12. ATTENDANCES ─────────────────────────────────────────
CREATE TABLE attendances (
  id         SERIAL  PRIMARY KEY,
  class_id   INT     REFERENCES classes(id)  ON DELETE CASCADE,
  student_id INT     REFERENCES students(id) ON DELETE CASCADE,
  check_date DATE    NOT NULL,
  period_no  INT,
  status     TEXT    CHECK (status IN ('present', 'absent', 'leave', 'sick'))
);


-- ─── 13. TEACHER_SCHEDULES ───────────────────────────────────
CREATE TABLE teacher_schedules (
  id          SERIAL   PRIMARY KEY,
  teacher_id  INT      REFERENCES teachers(id) ON DELETE CASCADE,
  day_of_week INT      CHECK (day_of_week BETWEEN 1 AND 7),  -- 1=จันทร์ ... 7=อาทิตย์
  period_no   INT,
  is_free     BOOLEAN  DEFAULT true,
  class_id    INT      REFERENCES classes(id) ON DELETE SET NULL
);


-- ─── 14. EXAM_REQUESTS ───────────────────────────────────────
CREATE TABLE exam_requests (
  id                  SERIAL  PRIMARY KEY,
  student_id          INT     REFERENCES students(id)           ON DELETE CASCADE,
  class_id            INT     REFERENCES classes(id)            ON DELETE CASCADE,
  assignment_id       INT     REFERENCES class_score_columns(id) ON DELETE SET NULL,
  request_type        TEXT,   -- 'สอบย้อนหลัง' | 'สอบปรับคะแนน'
  requested_date      DATE    NOT NULL,
  requested_period_no INT,
  reason              TEXT,
  attachment_url      TEXT,
  status              TEXT    DEFAULT 'pending'
                              CHECK (status IN ('pending', 'approved', 'rejected')),
  teacher_comment     TEXT
);


-- ─── ROW LEVEL SECURITY ──────────────────────────────────────
ALTER TABLE system_config        ENABLE ROW LEVEL SECURITY;
ALTER TABLE school_periods       ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles             ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers             ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers_quota       ENABLE ROW LEVEL SECURITY;
ALTER TABLE master_subjects      ENABLE ROW LEVEL SECURITY;
ALTER TABLE classes              ENABLE ROW LEVEL SECURITY;
ALTER TABLE students             ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_students       ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_score_columns  ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_scores       ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendances          ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_schedules    ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_requests        ENABLE ROW LEVEL SECURITY;

-- system_config, school_periods: อ่านได้ทุกคน แก้ได้เฉพาะ admin
CREATE POLICY "config_read"   ON system_config   FOR SELECT TO authenticated USING (true);
CREATE POLICY "config_admin"  ON system_config   FOR ALL    TO authenticated USING (get_user_role() = 'admin');
CREATE POLICY "periods_read"  ON school_periods  FOR SELECT TO authenticated USING (true);
CREATE POLICY "periods_admin" ON school_periods  FOR ALL    TO authenticated USING (get_user_role() = 'admin');

-- profiles: อ่านได้ทุกคน แก้เฉพาะตัวเอง admin ทำได้ทั้งหมด
CREATE POLICY "profiles_read"        ON profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "profiles_update_own"  ON profiles FOR UPDATE TO authenticated USING (id = auth.uid());
CREATE POLICY "profiles_admin"       ON profiles FOR ALL    TO authenticated USING (get_user_role() = 'admin');

-- teachers, students: อ่านได้ทุกคน แก้ได้เฉพาะ admin
CREATE POLICY "teachers_read"  ON teachers FOR SELECT TO authenticated USING (true);
CREATE POLICY "teachers_admin" ON teachers FOR ALL    TO authenticated USING (get_user_role() = 'admin');
CREATE POLICY "students_read"  ON students FOR SELECT TO authenticated USING (true);
CREATE POLICY "students_admin" ON students FOR ALL    TO authenticated USING (get_user_role() = 'admin');

-- teachers_quota: ครูดูของตัวเอง admin ดูทั้งหมด
CREATE POLICY "quota_own"   ON teachers_quota FOR SELECT TO authenticated
  USING (teacher_id IN (SELECT id FROM teachers WHERE profile_id = auth.uid()));
CREATE POLICY "quota_admin" ON teachers_quota FOR ALL TO authenticated USING (get_user_role() = 'admin');

-- master_subjects, classes: authenticated อ่านได้ admin แก้ได้
CREATE POLICY "subjects_read"  ON master_subjects FOR SELECT TO authenticated USING (true);
CREATE POLICY "subjects_admin" ON master_subjects FOR ALL    TO authenticated USING (get_user_role() = 'admin');
CREATE POLICY "classes_read"   ON classes         FOR SELECT TO authenticated USING (true);
CREATE POLICY "classes_admin"  ON classes         FOR ALL    TO authenticated USING (get_user_role() = 'admin');

-- class_students, score_columns, scores, attendances, schedules, exam_requests
CREATE POLICY "cs_all"       ON class_students      FOR ALL TO authenticated USING (true);
CREATE POLICY "sc_cols_all"  ON class_score_columns FOR ALL TO authenticated USING (true);
CREATE POLICY "scores_all"   ON student_scores      FOR ALL TO authenticated USING (true);
CREATE POLICY "attend_all"   ON attendances         FOR ALL TO authenticated USING (true);
CREATE POLICY "sched_all"    ON teacher_schedules   FOR ALL TO authenticated USING (true);
CREATE POLICY "exam_all"     ON exam_requests       FOR ALL TO authenticated USING (true);


-- ─── RESTORE ADMIN (รันแยกหลัง schema เสร็จ) ─────────────────
-- 1. ไปที่ Authentication → Users → copy UUID ของ admin
-- 2. รัน SQL นี้ (แทนที่ <YOUR-UUID> และชื่อ):
--
-- INSERT INTO profiles (id, role, user_code)
-- VALUES ('<YOUR-UUID>', 'admin', 'ADMIN001')
-- ON CONFLICT (id) DO UPDATE SET role = 'admin';
