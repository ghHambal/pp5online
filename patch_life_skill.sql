-- patch_life_skill.sql
-- ระบบคะแนนทักษะชีวิต
-- รัน 1 ครั้งใน Supabase SQL Editor

-- 1. คอลัมน์คะแนน (admin กำหนด)
CREATE TABLE IF NOT EXISTS life_skill_columns (
  id            SERIAL  PRIMARY KEY,
  name          TEXT    NOT NULL,
  max_score     SMALLINT DEFAULT 20,
  sheet_col     TEXT,               -- คอลัมน์ Google Sheet เช่น EH
  sort_order    SMALLINT DEFAULT 0,
  category      TEXT    DEFAULT 'สามัญ' CHECK (category IN ('สามัญ','ศาสนา')),
  academic_year INT     NOT NULL,
  semester      SMALLINT NOT NULL,
  UNIQUE(name, academic_year, semester, category)
);

-- 2. คะแนนนักเรียนรายคน
CREATE TABLE IF NOT EXISTS life_skill_scores (
  id            SERIAL  PRIMARY KEY,
  student_id    INT     NOT NULL REFERENCES students(id)           ON DELETE CASCADE,
  column_id     INT     NOT NULL REFERENCES life_skill_columns(id) ON DELETE CASCADE,
  score         NUMERIC(5,2),
  updated_by    INT     REFERENCES teachers(id) ON DELETE SET NULL,
  updated_at    TIMESTAMPTZ DEFAULT now(),
  UNIQUE(student_id, column_id)
);

-- 3. RLS
ALTER TABLE life_skill_columns ENABLE ROW LEVEL SECURITY;
ALTER TABLE life_skill_scores  ENABLE ROW LEVEL SECURITY;

CREATE POLICY "ls_col_read"  ON life_skill_columns FOR SELECT TO authenticated USING (true);
CREATE POLICY "ls_col_admin" ON life_skill_columns FOR ALL    TO authenticated USING (get_user_role() = 'admin');

CREATE POLICY "ls_score_read"    ON life_skill_scores FOR SELECT TO authenticated USING (true);
CREATE POLICY "ls_score_teacher" ON life_skill_scores FOR ALL    TO authenticated
  USING (updated_by IN (SELECT id FROM teachers WHERE profile_id = auth.uid())
         OR get_user_role() = 'admin')
  WITH CHECK (updated_by IN (SELECT id FROM teachers WHERE profile_id = auth.uid())
              OR get_user_role() = 'admin');
