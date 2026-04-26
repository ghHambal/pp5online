-- ============================================================
--  PATCH: เพิ่ม/แก้ตารางที่ขาดหาย — รันได้โดยไม่ลบข้อมูลเดิม
--  รันใน Supabase → SQL Editor
-- ============================================================

-- ─── 1. แก้ system_config ให้เป็น key-value ─────────────────
-- ตรวจสอบว่า column 'key' มีอยู่ไหม
DO $$
DECLARE
  has_key_col BOOLEAN;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name   = 'system_config'
      AND column_name  = 'key'
  ) INTO has_key_col;

  IF NOT has_key_col THEN
    -- ตารางเก่า (named columns) → สร้างใหม่ทับ
    DROP TABLE IF EXISTS system_config CASCADE;
    CREATE TABLE system_config (
      id         SERIAL      PRIMARY KEY,
      key        TEXT        UNIQUE NOT NULL,
      value      TEXT,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
    RAISE NOTICE 'system_config recreated as key-value table';
  ELSE
    -- มี key column แล้ว — แค่เพิ่ม updated_at ถ้ายังไม่มี
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name   = 'system_config'
        AND column_name  = 'updated_at'
    ) THEN
      ALTER TABLE system_config ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
    RAISE NOTICE 'system_config already key-value, patched updated_at';
  END IF;
END $$;

-- เติม seed data (ถ้าไม่มีจะ insert, ถ้ามีแล้วไม่แตะ)
INSERT INTO system_config (key, value) VALUES
  ('appColor',                  '#007bff'),
  ('semester',                  '1'),
  ('academicYear',              '2568'),
  ('samaiSchoolName',           ''),
  ('samaiLogoUrl',              ''),
  ('samaiRegistrarName',        ''),
  ('samaiRegistrarSignUrl',     ''),
  ('samaiAcademicHeadName',     ''),
  ('samaiAcademicHeadSignUrl',  ''),
  ('samaiDirectorName',         ''),
  ('samaiDirectorSignUrl',      ''),
  ('porworCollegeName',         ''),
  ('porworLogoUrl',             ''),
  ('porworRegistrarName',       ''),
  ('porworRegistrarSignUrl',    ''),
  ('porworAcademicHeadName',    ''),
  ('porworAcademicHeadSignUrl', ''),
  ('porworDirectorName',        ''),
  ('porworDirectorSignUrl',     '')
ON CONFLICT (key) DO NOTHING;

-- RLS
ALTER TABLE system_config ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "config_read"  ON system_config;
DROP POLICY IF EXISTS "config_admin" ON system_config;
CREATE POLICY "config_read"  ON system_config FOR SELECT TO authenticated USING (true);
CREATE POLICY "config_admin" ON system_config FOR ALL    TO authenticated USING (get_user_role() = 'admin');


-- ─── 2. สร้าง departments ถ้ายังไม่มี ──────────────────────
CREATE TABLE IF NOT EXISTS departments (
  id             SERIAL  PRIMARY KEY,
  dept_code      TEXT    UNIQUE NOT NULL,
  dept_name      TEXT    NOT NULL,
  head_name      TEXT,
  head_photo_url TEXT,
  head_sign_url  TEXT,
  teacher_id     INT     REFERENCES teachers(id) ON DELETE SET NULL
);

ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "dept_read"        ON departments;
DROP POLICY IF EXISTS "dept_admin"       ON departments;
DROP POLICY IF EXISTS "dept_head_update" ON departments;
CREATE POLICY "dept_read"  ON departments FOR SELECT TO authenticated USING (true);
CREATE POLICY "dept_admin" ON departments FOR ALL    TO authenticated USING (get_user_role() = 'admin');
CREATE POLICY "dept_head_update" ON departments FOR UPDATE TO authenticated
  USING (teacher_id IN (SELECT id FROM teachers WHERE profile_id = auth.uid()));


-- ─── 3. เพิ่ม image_url ให้ teachers ถ้ายังไม่มี ────────────
ALTER TABLE teachers ADD COLUMN IF NOT EXISTS image_url TEXT;


-- ─── 4. ตรวจสอบ students ให้มี main_room + image_url ────────
ALTER TABLE students ADD COLUMN IF NOT EXISTS main_room  TEXT;
ALTER TABLE students ADD COLUMN IF NOT EXISTS image_url  TEXT;
-- ถ้ายังมี column เก่าอยู่ให้ย้ายข้อมูลก่อนลบ
DO $$
BEGIN
  -- ย้าย class → main_room
  IF EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='students' AND column_name='class')
  THEN
    UPDATE students SET main_room = class WHERE main_room IS NULL;
    ALTER TABLE students DROP COLUMN class;
  END IF;
  -- ย้าย photo_url → image_url
  IF EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='students' AND column_name='photo_url')
  THEN
    UPDATE students SET image_url = photo_url WHERE image_url IS NULL;
    ALTER TABLE students DROP COLUMN photo_url;
  END IF;
  -- ย้าย level+room → main_room
  IF EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='students' AND column_name='level')
  THEN
    UPDATE students
    SET main_room = NULLIF(TRIM(BOTH '/' FROM CONCAT(level,'/',room)),'/')
    WHERE main_room IS NULL;
    ALTER TABLE students DROP COLUMN IF EXISTS level;
    ALTER TABLE students DROP COLUMN IF EXISTS room;
  END IF;
END $$;


-- ─── 5. master_subjects: ลบ head_of_dept ถ้ายังมี ───────────
ALTER TABLE master_subjects DROP COLUMN IF EXISTS head_of_dept;
ALTER TABLE master_subjects ADD COLUMN IF NOT EXISTS dept          TEXT;
ALTER TABLE master_subjects ADD COLUMN IF NOT EXISTS learning_area TEXT;
ALTER TABLE master_subjects ADD COLUMN IF NOT EXISTS subject_group TEXT;
-- rename columns เก่า → ใหม่ (safe)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='master_subjects' AND column_name='name_th')
  THEN
    ALTER TABLE master_subjects RENAME COLUMN name_th  TO subject_name;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='master_subjects' AND column_name='code')
  THEN
    ALTER TABLE master_subjects RENAME COLUMN code    TO subject_code;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='master_subjects' AND column_name='credits')
  THEN
    ALTER TABLE master_subjects RENAME COLUMN credits TO credit;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='master_subjects' AND column_name='level')
  THEN
    ALTER TABLE master_subjects RENAME COLUMN level   TO grade_level;
  END IF;
END $$;


-- ─── 6. school_periods: เพิ่ม RLS ────────────────────────────
ALTER TABLE school_periods ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "periods_read"  ON school_periods;
DROP POLICY IF EXISTS "periods_admin" ON school_periods;
CREATE POLICY "periods_read"  ON school_periods FOR SELECT TO authenticated USING (true);
CREATE POLICY "periods_admin" ON school_periods FOR ALL    TO authenticated USING (get_user_role() = 'admin');


-- ─── เสร็จแล้ว ───────────────────────────────────────────────
SELECT 'PATCH COMPLETE ✅' AS status;
