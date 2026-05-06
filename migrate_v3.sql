-- ============================================================
--  ปพ.5 ออนไลน์ — MIGRATION → Schema v3
--  รันไฟล์นี้แทน schema.sql เมื่อมีข้อมูลอยู่แล้ว
--  จะ backup ข้อมูลเดิม → สร้าง schema ใหม่ → restore กลับ
-- ============================================================

BEGIN;

-- ══════════════════════════════════════════════════════════════
--  PHASE 1 — BACKUP ข้อมูลสำคัญลง TEMP TABLE
-- ══════════════════════════════════════════════════════════════

-- ── 1.1 profiles ──────────────────────────────────────────────
CREATE TEMP TABLE _bk_profiles (
  id        UUID,
  role      TEXT,
  user_code TEXT
);

DO $$ BEGIN
  INSERT INTO _bk_profiles (id, role)
  SELECT id, role FROM profiles;
EXCEPTION WHEN OTHERS THEN
  RAISE NOTICE 'backup profiles: %', SQLERRM;
END $$;


-- ── 1.2 students (รองรับทั้ง column เก่าและใหม่) ────────────
CREATE TEMP TABLE _bk_students (
  student_code TEXT,
  full_name    TEXT,
  main_room    TEXT,
  image_url    TEXT
);

DO $$
DECLARE
  has_class     BOOLEAN;
  has_photo_url BOOLEAN;
  has_level     BOOLEAN;
BEGIN
  SELECT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='students' AND column_name='class')
    INTO has_class;

  SELECT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='students' AND column_name='photo_url')
    INTO has_photo_url;

  SELECT EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='students' AND column_name='level')
    INTO has_level;

  IF has_class AND has_photo_url THEN
    -- schema ที่แก้แล้ว (class + photo_url)
    INSERT INTO _bk_students
      SELECT student_code, full_name, class, photo_url FROM students;

  ELSIF has_class THEN
    INSERT INTO _bk_students
      SELECT student_code, full_name, class, NULL FROM students;

  ELSIF has_level THEN
    -- schema เดิม (level + room)
    INSERT INTO _bk_students
      SELECT student_code, full_name,
             NULLIF(TRIM(BOTH '/' FROM CONCAT(level,'/',room)), '/'),
             NULL
      FROM students;

  ELSE
    -- image_url ชื่อใหม่
    INSERT INTO _bk_students
      SELECT student_code, full_name, main_room, image_url FROM students;
  END IF;

EXCEPTION WHEN OTHERS THEN
  RAISE NOTICE 'backup students: %', SQLERRM;
END $$;


-- ── 1.3 master_subjects ──────────────────────────────────────
CREATE TEMP TABLE _bk_subjects (
  subject_code TEXT,
  subject_name TEXT,
  credit       NUMERIC(3,1),
  grade_level  TEXT
);

DO $$ BEGIN
  -- รองรับทั้ง schema เก่า (code, name_th, credits, level)
  -- และ schema ใหม่ (subject_code, subject_name, credit, grade_level)
  IF EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='master_subjects' AND column_name='name_th')
  THEN
    INSERT INTO _bk_subjects
      SELECT code, name_th, credits, level FROM master_subjects;
  ELSE
    INSERT INTO _bk_subjects
      SELECT subject_code, subject_name, credit, grade_level FROM master_subjects;
  END IF;
EXCEPTION WHEN OTHERS THEN
  RAISE NOTICE 'backup master_subjects: %', SQLERRM;
END $$;


-- ══════════════════════════════════════════════════════════════
--  PHASE 2 — DROP ทุกตาราง
-- ══════════════════════════════════════════════════════════════

DROP TABLE IF EXISTS exam_requests       CASCADE;
DROP TABLE IF EXISTS teacher_schedules   CASCADE;
DROP TABLE IF EXISTS attendances         CASCADE;
DROP TABLE IF EXISTS student_scores      CASCADE;
DROP TABLE IF EXISTS class_score_columns CASCADE;
DROP TABLE IF EXISTS class_students      CASCADE;
DROP TABLE IF EXISTS students            CASCADE;
DROP TABLE IF EXISTS classes             CASCADE;
DROP TABLE IF EXISTS master_subjects     CASCADE;
DROP TABLE IF EXISTS teachers_quota      CASCADE;
DROP TABLE IF EXISTS teachers            CASCADE;
DROP TABLE IF EXISTS profiles            CASCADE;
DROP TABLE IF EXISTS school_periods      CASCADE;
DROP TABLE IF EXISTS academic_registry   CASCADE;
DROP TABLE IF EXISTS system_config       CASCADE;

DROP FUNCTION IF EXISTS public.get_user_role()    CASCADE;
DROP FUNCTION IF EXISTS public.handle_new_user()  CASCADE;


-- ══════════════════════════════════════════════════════════════
--  PHASE 3 — สร้าง SCHEMA ใหม่ทั้งหมด
-- ══════════════════════════════════════════════════════════════

-- 1. SYSTEM_CONFIG (key-value)
CREATE TABLE system_config (
  id         SERIAL      PRIMARY KEY,
  key        TEXT        UNIQUE NOT NULL,
  value      TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
INSERT INTO system_config (key, value) VALUES
  ('schoolName','ระบุชื่อโรงเรียน'),('schoolNameEn','School Name'),
  ('schoolNameArabic',''),('schoolAddress','ที่อยู่โรงเรียน'),
  ('schoolPhone',''),('logoUrl',''),
  ('primaryColor','#007bff'),('secondaryColor','#6c757d'),
  ('appName','ปพ.5 ออนไลน์'),('coverIconType','emoji'),
  ('coverIconEmoji','📘'),('coverImageUrl',''),
  ('currentTerm','1/2568'),('termsPerYear','2'),
  ('term1MonthsThai','พ.ค., มิ.ย., ก.ค., ส.ค., ก.ย., ต.ค.'),
  ('term2MonthsThai','พ.ย., ธ.ค., ม.ค., ก.พ., มี.ค., เม.ย.'),
  ('term1MonthsArabic',''),('term2MonthsArabic',''),
  ('reportTitle','แบบบันทึกผลการเรียน'),('reportTitleArabic',''),
  ('programSubtitle',''),('footerText',''),
  ('uploadFolderId',''),('hadithThai',''),
  ('hadithArabic',''),('hadithEnglish','')
ON CONFLICT (key) DO NOTHING;


-- 1b. ACADEMIC_REGISTRY (ทะเบียน)
CREATE TABLE academic_registry (
  id                  SERIAL PRIMARY KEY,
  semester            INT    NOT NULL,
  academic_year       INT    NOT NULL,
  dept_code           TEXT   NOT NULL,
  dept_name           TEXT,
  head_name           TEXT,
  registrar_name      TEXT,
  academic_head_name  TEXT,
  director_name       TEXT,
  UNIQUE (semester, academic_year, dept_code)
);


-- 1c. DEPARTMENTS
CREATE TABLE departments (
  id             SERIAL PRIMARY KEY,
  dept_code      TEXT   UNIQUE NOT NULL,
  dept_name      TEXT   NOT NULL,
  head_name      TEXT,
  head_photo_url TEXT,
  head_sign_url  TEXT,
  teacher_id     INT    REFERENCES teachers(id) ON DELETE SET NULL
);

-- 2. SCHOOL_PERIODS
CREATE TABLE school_periods (
  id         SERIAL PRIMARY KEY,
  period_no  INT    NOT NULL,
  start_time TIME   NOT NULL,
  end_time   TIME   NOT NULL
);
INSERT INTO school_periods (period_no, start_time, end_time) VALUES
  (1,'08:30','09:20'),(2,'09:20','10:10'),(3,'10:10','11:00'),
  (4,'11:00','11:50'),(5,'12:40','13:30'),(6,'13:30','14:20'),
  (7,'14:20','15:10'),(8,'15:10','16:00');


-- 3. PROFILES
CREATE TABLE profiles (
  id        UUID  PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role      TEXT  CHECK (role IN ('admin','teacher','student')),
  user_code TEXT  UNIQUE
);

CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS TEXT LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, role)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'role', 'teacher'))
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- 4. TEACHERS
CREATE TABLE teachers (
  id           SERIAL PRIMARY KEY,
  teacher_code TEXT   UNIQUE,
  username     TEXT,
  login_email  TEXT,
  full_name    TEXT   NOT NULL,
  personnel_type TEXT   DEFAULT 'ครู' CHECK (personnel_type IN ('ครู','บุคลากร')),
  category     TEXT   CHECK (category IN ('สามัญ','ศาสนา')),
  dept           TEXT,
  skill_group    TEXT,
  subject_group  TEXT,
  phone        TEXT,
  image_url    TEXT,
  profile_id   UUID   REFERENCES profiles(id) ON DELETE SET NULL
);

CREATE UNIQUE INDEX teachers_username_lower_uidx
  ON teachers (lower(username))
  WHERE username IS NOT NULL AND trim(username) <> '';

CREATE UNIQUE INDEX teachers_login_email_lower_uidx
  ON teachers (lower(login_email))
  WHERE login_email IS NOT NULL AND trim(login_email) <> '';

-- 5. TEACHERS_QUOTA
CREATE TABLE teachers_quota (
  id                    SERIAL  PRIMARY KEY,
  teacher_id            INT     UNIQUE REFERENCES teachers(id) ON DELETE CASCADE,
  total_classes_created INT     DEFAULT 0,
  is_paid               BOOLEAN DEFAULT false
);


-- 6. MASTER_SUBJECTS
CREATE TABLE master_subjects (
  id            SERIAL       PRIMARY KEY,
  teacher_id    INT          REFERENCES teachers(id) ON DELETE SET NULL,
  dept          TEXT,
  skill_group   TEXT,
  subject_group TEXT,
  learning_area TEXT,
  subject_code  TEXT,
  subject_name  TEXT         NOT NULL,
  credit        NUMERIC(3,1),
  grade_level   TEXT
);


-- 7. CLASSES
CREATE TABLE classes (
  id               SERIAL PRIMARY KEY,
  course_id        INT    REFERENCES master_subjects(id) ON DELETE CASCADE,
  class_name       TEXT   NOT NULL,
  skill_group      TEXT,
  google_sheet_id  TEXT,
  head_student_id  INT,
  day1_date DATE, day2_date DATE, day3_date DATE,
  day4_date DATE, day5_date DATE, day6_date DATE
);


-- 8. STUDENTS
CREATE TABLE students (
  id           SERIAL PRIMARY KEY,
  student_code TEXT   UNIQUE NOT NULL,
  full_name    TEXT   NOT NULL,
  gender       TEXT   CHECK (gender IN ('ชาย','หญิง')),
  main_room    TEXT,
  religion_room TEXT,
  image_url    TEXT,
  profile_id   UUID   REFERENCES profiles(id) ON DELETE SET NULL
);

ALTER TABLE classes
  ADD CONSTRAINT fk_head_student
  FOREIGN KEY (head_student_id) REFERENCES students(id) ON DELETE SET NULL;


-- 9. CLASS_STUDENTS
CREATE TABLE class_students (
  id         SERIAL PRIMARY KEY,
  class_id   INT    REFERENCES classes(id)  ON DELETE CASCADE,
  student_id INT    REFERENCES students(id) ON DELETE CASCADE,
  UNIQUE (class_id, student_id)
);


-- 10. CLASS_SCORE_COLUMNS
CREATE TABLE class_score_columns (
  id               SERIAL PRIMARY KEY,
  class_id         INT    REFERENCES classes(id) ON DELETE CASCADE,
  assignment_name  TEXT   NOT NULL,
  assignment_type  TEXT,
  sheet_column     TEXT   NOT NULL,
  max_score        INT
);


-- 11. STUDENT_SCORES
CREATE TABLE student_scores (
  id             SERIAL       PRIMARY KEY,
  assignment_id  INT          REFERENCES class_score_columns(id) ON DELETE CASCADE,
  student_id     INT          REFERENCES students(id)            ON DELETE CASCADE,
  original_score NUMERIC(5,2) DEFAULT 0,
  retake_score   NUMERIC(5,2),
  final_score    NUMERIC(5,2) DEFAULT 0,
  UNIQUE (assignment_id, student_id)
);


-- 12. ATTENDANCES
CREATE TABLE attendances (
  id         SERIAL PRIMARY KEY,
  class_id   INT    REFERENCES classes(id)  ON DELETE CASCADE,
  student_id INT    REFERENCES students(id) ON DELETE CASCADE,
  check_date DATE   NOT NULL,
  period_no  INT,
  status     TEXT   CHECK (status IN ('present','absent','leave','sick'))
);


-- 13. TEACHER_SCHEDULES
CREATE TABLE teacher_schedules (
  id          SERIAL  PRIMARY KEY,
  teacher_id  INT     REFERENCES teachers(id) ON DELETE CASCADE,
  day_of_week INT     CHECK (day_of_week BETWEEN 1 AND 7),
  period_no   INT,
  is_free     BOOLEAN DEFAULT true,
  class_id    INT     REFERENCES classes(id) ON DELETE SET NULL
);


-- 14. EXAM_REQUESTS
CREATE TABLE exam_requests (
  id                  SERIAL PRIMARY KEY,
  student_id          INT    REFERENCES students(id)            ON DELETE CASCADE,
  class_id            INT    REFERENCES classes(id)             ON DELETE CASCADE,
  assignment_id       INT    REFERENCES class_score_columns(id) ON DELETE SET NULL,
  request_type        TEXT,
  requested_date      DATE   NOT NULL,
  requested_period_no INT,
  reason              TEXT,
  attachment_url      TEXT,
  status              TEXT   DEFAULT 'pending'
                             CHECK (status IN ('pending','approved','rejected')),
  teacher_comment     TEXT
);


-- ══════════════════════════════════════════════════════════════
--  PHASE 4 — RESTORE ข้อมูลกลับ
-- ══════════════════════════════════════════════════════════════

-- 4.1 profiles (เฉพาะที่ยังมี auth.users อยู่)
INSERT INTO profiles (id, role, user_code)
SELECT b.id, COALESCE(b.role, 'teacher'), b.user_code
FROM _bk_profiles b
WHERE EXISTS (SELECT 1 FROM auth.users u WHERE u.id = b.id)
ON CONFLICT (id) DO NOTHING;


-- 4.2 students
INSERT INTO students (student_code, full_name, main_room, image_url)
SELECT student_code, full_name, main_room, image_url
FROM _bk_students
WHERE student_code IS NOT NULL AND full_name IS NOT NULL
ON CONFLICT (student_code) DO UPDATE
  SET full_name  = EXCLUDED.full_name,
      main_room  = COALESCE(EXCLUDED.main_room, students.main_room),
      image_url  = COALESCE(EXCLUDED.image_url, students.image_url);


-- 4.3 master_subjects
INSERT INTO master_subjects (subject_code, subject_name, credit, grade_level)
SELECT subject_code, subject_name, credit, grade_level
FROM _bk_subjects
WHERE subject_name IS NOT NULL;


-- ══════════════════════════════════════════════════════════════
--  PHASE 5 — ROW LEVEL SECURITY
-- ══════════════════════════════════════════════════════════════

ALTER TABLE system_config        ENABLE ROW LEVEL SECURITY;
ALTER TABLE academic_registry    ENABLE ROW LEVEL SECURITY;
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

CREATE POLICY "config_read"     ON system_config      FOR SELECT TO authenticated USING (true);
CREATE POLICY "config_admin"    ON system_config      FOR ALL    TO authenticated USING (get_user_role()='admin');
CREATE POLICY "registry_read"   ON academic_registry  FOR SELECT TO authenticated USING (true);
CREATE POLICY "registry_admin"  ON academic_registry  FOR ALL    TO authenticated USING (get_user_role()='admin');
CREATE POLICY "periods_read"    ON school_periods     FOR SELECT TO authenticated USING (true);
CREATE POLICY "periods_admin"   ON school_periods     FOR ALL    TO authenticated USING (get_user_role()='admin');
CREATE POLICY "profiles_read"   ON profiles           FOR SELECT TO authenticated USING (true);
CREATE POLICY "profiles_own"    ON profiles           FOR UPDATE TO authenticated USING (id=auth.uid());
CREATE POLICY "profiles_admin"  ON profiles           FOR ALL    TO authenticated USING (get_user_role()='admin');
CREATE POLICY "teachers_read"   ON teachers           FOR SELECT TO authenticated USING (true);
CREATE POLICY "teachers_admin"  ON teachers           FOR ALL    TO authenticated USING (get_user_role()='admin');

CREATE OR REPLACE FUNCTION public.resolve_teacher_login_email(p_identifier TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_identifier TEXT := trim(coalesce(p_identifier, ''));
  v_username TEXT := lower(trim(coalesce(p_identifier, '')));
  v_legacy_code TEXT;
  v_email TEXT;
BEGIN
  IF v_identifier = '' THEN
    RETURN NULL;
  END IF;

  IF position('@' IN v_identifier) > 0 THEN
    RETURN v_identifier;
  END IF;

  IF v_identifier ~ '^[12][0-9]{2}$' THEN
    v_legacy_code := substring(v_identifier FROM 1 FOR 1) || lpad(substring(v_identifier FROM 2), 3, '0');
  END IF;

  SELECT t.login_email
  INTO v_email
  FROM public.teachers t
  WHERE (v_username ~ '^[a-z0-9._-]{3,32}$' AND lower(t.username) = v_username)
     OR t.teacher_code = v_identifier
     OR (v_legacy_code IS NOT NULL AND t.teacher_code = v_legacy_code)
  ORDER BY
    CASE
      WHEN t.teacher_code = v_identifier THEN 0
      WHEN v_legacy_code IS NOT NULL AND t.teacher_code = v_legacy_code THEN 1
      ELSE 2
    END
  LIMIT 1;

  RETURN v_email;
END;
$$;

GRANT EXECUTE ON FUNCTION public.resolve_teacher_login_email(TEXT) TO anon, authenticated;

CREATE POLICY "quota_own"       ON teachers_quota     FOR SELECT TO authenticated
  USING (teacher_id IN (SELECT id FROM teachers WHERE profile_id=auth.uid()));
CREATE POLICY "quota_admin"     ON teachers_quota     FOR ALL    TO authenticated USING (get_user_role()='admin');
CREATE POLICY "subjects_read"   ON master_subjects    FOR SELECT TO authenticated USING (true);
CREATE POLICY "subjects_admin"  ON master_subjects    FOR ALL    TO authenticated USING (get_user_role()='admin');
CREATE POLICY "classes_read"    ON classes            FOR SELECT TO authenticated USING (true);
CREATE POLICY "classes_admin"   ON classes            FOR ALL    TO authenticated USING (get_user_role()='admin');
CREATE POLICY "students_read"   ON students           FOR SELECT TO authenticated USING (true);
CREATE POLICY "students_admin"  ON students           FOR ALL    TO authenticated USING (get_user_role()='admin');
CREATE POLICY "cs_all"          ON class_students      FOR ALL TO authenticated USING (true);
CREATE POLICY "sc_cols_all"     ON class_score_columns FOR ALL TO authenticated USING (true);
CREATE POLICY "scores_all"      ON student_scores      FOR ALL TO authenticated USING (true);
CREATE POLICY "attend_all"      ON attendances         FOR ALL TO authenticated USING (true);
CREATE POLICY "sched_all"       ON teacher_schedules   FOR ALL TO authenticated USING (true);
CREATE POLICY "exam_all"        ON exam_requests       FOR ALL TO authenticated USING (true);


COMMIT;

-- ══════════════════════════════════════════════════════════════
--  หลัง COMMIT แล้ว — restore admin user
--  แทนที่ <YOUR-UUID> ด้วย UUID จาก Authentication → Users
-- ══════════════════════════════════════════════════════════════
--
-- INSERT INTO profiles (id, role, user_code)
-- VALUES ('<YOUR-UUID>', 'admin', 'ADMIN001')
-- ON CONFLICT (id) DO UPDATE SET role = 'admin';
