-- patch_reading_score.sql
-- ระบบคะแนนการอ่านคิดวิเคราะห์และเขียน (ครูภาษาไทย)
-- รัน 1 ครั้งใน Supabase SQL Editor

CREATE TABLE IF NOT EXISTS reading_score_columns (
  id            SERIAL   PRIMARY KEY,
  name          TEXT     NOT NULL,
  max_score     SMALLINT DEFAULT 20,
  sheet_col     TEXT,
  sort_order    SMALLINT DEFAULT 0,
  academic_year INT      NOT NULL,
  semester      SMALLINT NOT NULL,
  UNIQUE(name, academic_year, semester)
);

CREATE TABLE IF NOT EXISTS reading_scores (
  id            SERIAL   PRIMARY KEY,
  student_id    INT      NOT NULL REFERENCES students(id)              ON DELETE CASCADE,
  column_id     INT      NOT NULL REFERENCES reading_score_columns(id) ON DELETE CASCADE,
  score         NUMERIC(5,2),
  updated_by    INT      REFERENCES teachers(id) ON DELETE SET NULL,
  updated_at    TIMESTAMPTZ DEFAULT now(),
  UNIQUE(student_id, column_id)
);

ALTER TABLE reading_score_columns ENABLE ROW LEVEL SECURITY;
ALTER TABLE reading_scores        ENABLE ROW LEVEL SECURITY;

CREATE POLICY "rs_col_read"  ON reading_score_columns FOR SELECT TO authenticated USING (true);
CREATE POLICY "rs_col_admin" ON reading_score_columns FOR ALL    TO authenticated USING (get_user_role() = 'admin');

CREATE POLICY "rs_score_read"    ON reading_scores FOR SELECT TO authenticated USING (true);
CREATE POLICY "rs_score_teacher" ON reading_scores FOR ALL    TO authenticated
  USING (updated_by IN (SELECT id FROM teachers WHERE profile_id = auth.uid())
         OR get_user_role() = 'admin')
  WITH CHECK (updated_by IN (SELECT id FROM teachers WHERE profile_id = auth.uid())
              OR get_user_role() = 'admin');

-- system_config key สำหรับ Sheet ID
INSERT INTO system_config (key, value) VALUES ('readingScoreSheetId', '')
ON CONFLICT (key) DO NOTHING;
