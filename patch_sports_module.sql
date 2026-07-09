-- patch_sports_module.sql
-- AZIZGAMES / Sports Day module for the existing PP5_Online Supabase project.
-- Run once in Supabase SQL Editor. This patch creates only sports_* objects
-- and reuses existing students, teachers, house_groups, house_color, and sports_shirt_size data.

CREATE TABLE IF NOT EXISTS public.sports_events (
  id             BIGSERIAL PRIMARY KEY,
  name           TEXT NOT NULL,
  academic_year  INTEGER NOT NULL,
  start_date     DATE,
  end_date       DATE,
  status         TEXT NOT NULL DEFAULT 'draft'
                 CHECK (status IN ('draft', 'active', 'finished', 'archived')),
  cover_image_url TEXT,
  description    TEXT,
  created_by     UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid(),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.sports_competitions (
  id                     BIGSERIAL PRIMARY KEY,
  event_id               BIGINT NOT NULL REFERENCES public.sports_events(id) ON DELETE CASCADE,
  code                   TEXT,
  name                   TEXT NOT NULL,
  category               TEXT NOT NULL DEFAULT 'sport'
                         CHECK (category IN ('sport', 'academic', 'parade', 'page', 'other')),
  gender                 TEXT CHECK (gender IS NULL OR gender IN ('ชาย', 'หญิง', 'รวม')),
  education_level        TEXT,
  max_athletes           INTEGER CHECK (max_athletes IS NULL OR max_athletes >= 0),
  venue                  TEXT,
  rules                  TEXT,
  tsc_score              INTEGER CHECK (tsc_score IS NULL OR tsc_score >= 0),
  responsible_teacher_id INTEGER REFERENCES public.teachers(id) ON DELETE SET NULL,
  is_active              BOOLEAN NOT NULL DEFAULT true,
  display_order          INTEGER NOT NULL DEFAULT 999,
  created_at             TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at             TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (event_id, code)
);

CREATE TABLE IF NOT EXISTS public.sports_registrations (
  id                      BIGSERIAL PRIMARY KEY,
  event_id                BIGINT NOT NULL REFERENCES public.sports_events(id) ON DELETE CASCADE,
  competition_id          BIGINT NOT NULL REFERENCES public.sports_competitions(id) ON DELETE CASCADE,
  student_id              INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  team_color              TEXT,
  jersey_number           TEXT,
  note                    TEXT,
  registered_by_teacher_id INTEGER REFERENCES public.teachers(id) ON DELETE SET NULL,
  updated_by_teacher_id   INTEGER REFERENCES public.teachers(id) ON DELETE SET NULL,
  registered_at           TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (event_id, competition_id, student_id)
);

CREATE TABLE IF NOT EXISTS public.sports_matches (
  id                 BIGSERIAL PRIMARY KEY,
  event_id           BIGINT NOT NULL REFERENCES public.sports_events(id) ON DELETE CASCADE,
  competition_id     BIGINT NOT NULL REFERENCES public.sports_competitions(id) ON DELETE CASCADE,
  round_no           INTEGER NOT NULL DEFAULT 1,
  round_name         TEXT,
  team_a_color       TEXT,
  team_b_color       TEXT,
  score_a            TEXT,
  score_b            TEXT,
  winner_color       TEXT,
  scheduled_date     DATE,
  scheduled_time     TIME,
  venue              TEXT,
  note               TEXT,
  status             TEXT NOT NULL DEFAULT 'pending'
                     CHECK (status IN ('pending', 'live', 'done', 'cancelled')),
  created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.sports_medal_awards (
  id              BIGSERIAL PRIMARY KEY,
  event_id        BIGINT NOT NULL REFERENCES public.sports_events(id) ON DELETE CASCADE,
  competition_id  BIGINT NOT NULL REFERENCES public.sports_competitions(id) ON DELETE CASCADE,
  team_color      TEXT NOT NULL,
  medal_type      TEXT NOT NULL CHECK (medal_type IN ('gold', 'silver', 'bronze')),
  points          INTEGER NOT NULL DEFAULT 0,
  awarded_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by      UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid(),
  UNIQUE (event_id, competition_id, team_color, medal_type)
);

CREATE TABLE IF NOT EXISTS public.sports_score_categories (
  id             BIGSERIAL PRIMARY KEY,
  event_id       BIGINT NOT NULL REFERENCES public.sports_events(id) ON DELETE CASCADE,
  name           TEXT NOT NULL,
  group_name     TEXT,
  icon           TEXT,
  max_score      NUMERIC,
  display_order  INTEGER NOT NULL DEFAULT 999,
  is_active      BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE IF NOT EXISTS public.sports_color_scores (
  id           BIGSERIAL PRIMARY KEY,
  event_id     BIGINT NOT NULL REFERENCES public.sports_events(id) ON DELETE CASCADE,
  category_id  BIGINT NOT NULL REFERENCES public.sports_score_categories(id) ON DELETE CASCADE,
  team_color   TEXT NOT NULL,
  score_date   DATE,
  label        TEXT,
  points       NUMERIC NOT NULL DEFAULT 0,
  note         TEXT,
  recorded_by  UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid(),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.sports_outstanding_athletes (
  id              BIGSERIAL PRIMARY KEY,
  event_id        BIGINT NOT NULL REFERENCES public.sports_events(id) ON DELETE CASCADE,
  competition_id  BIGINT REFERENCES public.sports_competitions(id) ON DELETE SET NULL,
  student_id      INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  note            TEXT,
  certificate_url TEXT,
  awarded_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by      UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid()
);

CREATE INDEX IF NOT EXISTS idx_sports_competitions_event ON public.sports_competitions(event_id);
CREATE INDEX IF NOT EXISTS idx_sports_registrations_event ON public.sports_registrations(event_id);
CREATE INDEX IF NOT EXISTS idx_sports_registrations_student ON public.sports_registrations(student_id);
CREATE INDEX IF NOT EXISTS idx_sports_matches_event ON public.sports_matches(event_id);
CREATE INDEX IF NOT EXISTS idx_sports_matches_schedule ON public.sports_matches(scheduled_date, scheduled_time);
CREATE INDEX IF NOT EXISTS idx_sports_medals_event ON public.sports_medal_awards(event_id);
CREATE INDEX IF NOT EXISTS idx_sports_scores_event ON public.sports_color_scores(event_id);

CREATE OR REPLACE VIEW public.sports_color_totals
WITH (security_invoker = true)
AS
WITH student_counts AS (
  SELECT house_color AS color_name, COUNT(*) AS student_count
  FROM public.students
  WHERE is_active IS TRUE
  GROUP BY house_color
),
registration_counts AS (
  SELECT event_id, team_color AS color_name, COUNT(*) AS registration_count
  FROM public.sports_registrations
  GROUP BY event_id, team_color
),
score_totals AS (
  SELECT event_id, team_color AS color_name, COALESCE(SUM(points), 0) AS rubric_points
  FROM public.sports_color_scores
  GROUP BY event_id, team_color
),
medal_totals AS (
  SELECT
    event_id,
    team_color AS color_name,
    COUNT(*) FILTER (WHERE medal_type = 'gold') AS gold_count,
    COUNT(*) FILTER (WHERE medal_type = 'silver') AS silver_count,
    COUNT(*) FILTER (WHERE medal_type = 'bronze') AS bronze_count,
    COALESCE(SUM(points), 0) AS medal_points
  FROM public.sports_medal_awards
  GROUP BY event_id, team_color
)
SELECT
  e.id AS event_id,
  hg.name AS color_name,
  hg.gender,
  hg.color_hex,
  COALESCE(sc.student_count, 0) AS student_count,
  COALESCE(rc.registration_count, 0) AS registration_count,
  COALESCE(st.rubric_points, 0) AS rubric_points,
  COALESCE(mt.gold_count, 0) AS gold_count,
  COALESCE(mt.silver_count, 0) AS silver_count,
  COALESCE(mt.bronze_count, 0) AS bronze_count,
  COALESCE(mt.medal_points, 0) AS medal_points,
  COALESCE(st.rubric_points, 0) + COALESCE(mt.medal_points, 0) AS grand_total
FROM public.sports_events e
CROSS JOIN public.house_groups hg
LEFT JOIN student_counts sc
  ON sc.color_name = hg.name
LEFT JOIN registration_counts rc
  ON rc.event_id = e.id
 AND rc.color_name = hg.name
LEFT JOIN score_totals st
  ON st.event_id = e.id
 AND st.color_name = hg.name
LEFT JOIN medal_totals mt
  ON mt.event_id = e.id
 AND mt.color_name = hg.name;

ALTER TABLE public.sports_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_competitions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_medal_awards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_score_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_color_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_outstanding_athletes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "sports_events_read_auth" ON public.sports_events;
DROP POLICY IF EXISTS "sports_events_admin_all" ON public.sports_events;
DROP POLICY IF EXISTS "sports_competitions_read_auth" ON public.sports_competitions;
DROP POLICY IF EXISTS "sports_competitions_admin_all" ON public.sports_competitions;
DROP POLICY IF EXISTS "sports_registrations_read_auth" ON public.sports_registrations;
DROP POLICY IF EXISTS "sports_registrations_admin_all" ON public.sports_registrations;
DROP POLICY IF EXISTS "sports_matches_read_auth" ON public.sports_matches;
DROP POLICY IF EXISTS "sports_matches_admin_all" ON public.sports_matches;
DROP POLICY IF EXISTS "sports_medal_awards_read_auth" ON public.sports_medal_awards;
DROP POLICY IF EXISTS "sports_medal_awards_admin_all" ON public.sports_medal_awards;
DROP POLICY IF EXISTS "sports_score_categories_read_auth" ON public.sports_score_categories;
DROP POLICY IF EXISTS "sports_score_categories_admin_all" ON public.sports_score_categories;
DROP POLICY IF EXISTS "sports_color_scores_read_auth" ON public.sports_color_scores;
DROP POLICY IF EXISTS "sports_color_scores_admin_all" ON public.sports_color_scores;
DROP POLICY IF EXISTS "sports_outstanding_read_auth" ON public.sports_outstanding_athletes;
DROP POLICY IF EXISTS "sports_outstanding_admin_all" ON public.sports_outstanding_athletes;

CREATE POLICY "sports_events_read_auth" ON public.sports_events
FOR SELECT TO authenticated USING (true);
CREATE POLICY "sports_competitions_read_auth" ON public.sports_competitions
FOR SELECT TO authenticated USING (true);
CREATE POLICY "sports_registrations_read_auth" ON public.sports_registrations
FOR SELECT TO authenticated USING (true);
CREATE POLICY "sports_matches_read_auth" ON public.sports_matches
FOR SELECT TO authenticated USING (true);
CREATE POLICY "sports_medal_awards_read_auth" ON public.sports_medal_awards
FOR SELECT TO authenticated USING (true);
CREATE POLICY "sports_score_categories_read_auth" ON public.sports_score_categories
FOR SELECT TO authenticated USING (true);
CREATE POLICY "sports_color_scores_read_auth" ON public.sports_color_scores
FOR SELECT TO authenticated USING (true);
CREATE POLICY "sports_outstanding_read_auth" ON public.sports_outstanding_athletes
FOR SELECT TO authenticated USING (true);

CREATE POLICY "sports_events_admin_all" ON public.sports_events
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "sports_competitions_admin_all" ON public.sports_competitions
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "sports_registrations_admin_all" ON public.sports_registrations
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "sports_matches_admin_all" ON public.sports_matches
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "sports_medal_awards_admin_all" ON public.sports_medal_awards
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "sports_score_categories_admin_all" ON public.sports_score_categories
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "sports_color_scores_admin_all" ON public.sports_color_scores
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "sports_outstanding_admin_all" ON public.sports_outstanding_athletes
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

GRANT SELECT ON public.sports_color_totals TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON
  public.sports_events,
  public.sports_competitions,
  public.sports_registrations,
  public.sports_matches,
  public.sports_medal_awards,
  public.sports_score_categories,
  public.sports_color_scores,
  public.sports_outstanding_athletes
TO authenticated;

GRANT USAGE, SELECT ON SEQUENCE public.sports_events_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.sports_competitions_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.sports_registrations_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.sports_matches_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.sports_medal_awards_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.sports_score_categories_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.sports_color_scores_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.sports_outstanding_athletes_id_seq TO authenticated;

DO $$
BEGIN
  IF to_regclass('public.role_permissions') IS NOT NULL THEN
    INSERT INTO public.role_permissions(position, feature, allowed, updated_at)
    VALUES ('house_color_admin', 'menu_sports_admin', true, now())
    ON CONFLICT (position, feature)
    DO UPDATE SET allowed = EXCLUDED.allowed, updated_at = now();
  END IF;
END $$;

-- ---------------------------------------------------------------------------
-- AZIZGAMES legacy full-screen compatibility layer.
-- The original AZIZGAMES React build reads/writes these public table names.
-- Keep this additive so PP5 data remains intact while the full-screen UI works
-- from the same Supabase project.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

ALTER TABLE public.students
  ADD COLUMN IF NOT EXISTS class_name TEXT,
  ADD COLUMN IF NOT EXISTS team_color_id UUID,
  ADD COLUMN IF NOT EXISTS shirt_size TEXT,
  ADD COLUMN IF NOT EXISTS sports_shirt_size TEXT,
  ADD COLUMN IF NOT EXISTS image_url TEXT,
  ADD COLUMN IF NOT EXISTS photo_url TEXT,
  ADD COLUMN IF NOT EXISTS notes TEXT;

CREATE TABLE IF NOT EXISTS public.events (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  academic_year   INTEGER NOT NULL,
  start_date      DATE,
  end_date        DATE,
  status          TEXT NOT NULL DEFAULT 'active'
                  CHECK (status IN ('draft', 'active', 'finished', 'archived')),
  cover_image_url TEXT,
  description     TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.team_colors (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id        UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  name            TEXT NOT NULL,
  gender          TEXT NOT NULL CHECK (gender IN ('M', 'W', 'Coed')),
  hex_color       TEXT NOT NULL DEFAULT '#64748b',
  text_color      TEXT NOT NULL DEFAULT '#ffffff',
  logo_url        TEXT,
  captain_user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  display_order   INTEGER NOT NULL DEFAULT 999,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (event_id, name)
);

CREATE TABLE IF NOT EXISTS public.sports (
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id               UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  code                   TEXT,
  name                   TEXT NOT NULL,
  name_malay             TEXT,
  category               TEXT NOT NULL DEFAULT 'sport'
                         CHECK (category IN ('sport', 'academic', 'parade', 'page', 'other')),
  gender                 TEXT CHECK (gender IS NULL OR gender IN ('M', 'W', 'Coed')),
  education_level        TEXT,
  max_athletes           INTEGER CHECK (max_athletes IS NULL OR max_athletes >= 0),
  venue                  TEXT,
  rules                  TEXT,
  tsc_score              INTEGER CHECK (tsc_score IS NULL OR tsc_score >= 0),
  responsible_teacher_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  is_active              BOOLEAN NOT NULL DEFAULT true,
  display_order          INTEGER NOT NULL DEFAULT 999,
  created_at             TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at             TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (event_id, code)
);

CREATE TABLE IF NOT EXISTS public.registrations (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id       UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  sport_id       UUID NOT NULL REFERENCES public.sports(id) ON DELETE CASCADE,
  student_id     INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  team_color_id  UUID NOT NULL REFERENCES public.team_colors(id) ON DELETE CASCADE,
  jersey_number  TEXT,
  registered_by  UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  updated_by     UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  registered_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (event_id, sport_id, student_id)
);

CREATE TABLE IF NOT EXISTS public.matches (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id             UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  sport_id             UUID NOT NULL REFERENCES public.sports(id) ON DELETE CASCADE,
  round                INTEGER NOT NULL DEFAULT 1,
  round_name           TEXT,
  team_a_color_id      UUID REFERENCES public.team_colors(id) ON DELETE SET NULL,
  team_b_color_id      UUID REFERENCES public.team_colors(id) ON DELETE SET NULL,
  score_a              TEXT,
  score_b              TEXT,
  winner_team_color_id UUID REFERENCES public.team_colors(id) ON DELETE SET NULL,
  scheduled_date       DATE,
  scheduled_time       TIME,
  venue                TEXT,
  note                 TEXT,
  status               TEXT NOT NULL DEFAULT 'pending'
                       CHECK (status IN ('pending', 'live', 'done', 'cancelled')),
  created_at           TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.medal_awards (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id      UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  sport_id      UUID NOT NULL REFERENCES public.sports(id) ON DELETE CASCADE,
  team_color_id UUID NOT NULL REFERENCES public.team_colors(id) ON DELETE CASCADE,
  medal_type    TEXT NOT NULL CHECK (medal_type IN ('gold', 'silver', 'bronze')),
  points        INTEGER NOT NULL DEFAULT 0,
  awarded_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by    UUID REFERENCES public.profiles(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS public.score_categories (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id       UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  name           TEXT NOT NULL,
  group_name     TEXT,
  icon           TEXT,
  max_score      NUMERIC,
  display_order  INTEGER NOT NULL DEFAULT 999,
  is_active      BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE IF NOT EXISTS public.color_scores (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id      UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  team_color_id UUID NOT NULL REFERENCES public.team_colors(id) ON DELETE CASCADE,
  category_id   UUID NOT NULL REFERENCES public.score_categories(id) ON DELETE CASCADE,
  score_date    DATE,
  label         TEXT,
  points        NUMERIC NOT NULL DEFAULT 0,
  note          TEXT,
  recorded_by   UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.outstanding_athletes (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id   UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  sport_id   UUID REFERENCES public.sports(id) ON DELETE SET NULL,
  note       TEXT,
  awarded_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS public.settings (
  key         TEXT PRIMARY KEY,
  value       JSONB NOT NULL,
  description TEXT,
  updated_by  UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO public.settings(key, value, description)
VALUES (
  'public_buttons',
  '{"athlete_size": false, "athlete_registration": false, "athlete_print": true, "athlete_certificate": true}'::jsonb,
  'Controls which athlete-page actions are visible and usable by public visitors.'
)
ON CONFLICT (key) DO NOTHING;

INSERT INTO public.settings(key, value, description)
VALUES (
  'sports_visibility',
  '{"enabled": true, "teacher_menu": true, "student_menu": true, "public_page": true}'::jsonb,
  'Controls AZIZGAMES visibility for PP5, teachers, students, and public visitors.'
)
ON CONFLICT (key) DO NOTHING;

INSERT INTO public.events(id, name, academic_year, status, description)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'AZIZGAMES กีฬาสีออนไลน์',
  2569,
  'active',
  'Default event used by the legacy AZIZGAMES full-screen UI.'
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.team_colors(id, event_id, name, gender, hex_color, text_color, logo_url, display_order)
VALUES
  ('10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'แดง', 'M', '#ef4444', '#ffffff', 'https://lh3.googleusercontent.com/d/1R1tQpmGevbzOjtANcPTz6yqkU03mUxH1', 1),
  ('10000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'น้ำเงิน', 'M', '#2563eb', '#ffffff', 'https://lh3.googleusercontent.com/d/1WMKCQS8GERKHv3UA1R_1v6ujKoQPdxLJ', 2),
  ('10000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'เขียว', 'M', '#16a34a', '#ffffff', 'https://lh3.googleusercontent.com/d/1ZocnY6vUdSD4yvnAGm1kFNPNSLc6QXJ6', 3),
  ('10000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'น้ำตาล', 'M', '#92400e', '#ffffff', 'https://lh3.googleusercontent.com/d/1ME3lo80Ixc0DS3etJbqnO0uyKrMNrYGF', 4),
  ('10000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'ส้ม', 'W', '#f97316', '#ffffff', 'https://lh3.googleusercontent.com/d/1k9eGqa6-AVv_6MT5NDXYsNA2Bv_pPQ4j', 5),
  ('10000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000001', 'ฟ้า', 'W', '#0ea5e9', '#ffffff', 'https://lh3.googleusercontent.com/d/1aqBzjBZC3mF7h-DWGFKlBmh9FXzT0TMT', 6),
  ('10000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000001', 'ม่วง', 'W', '#9333ea', '#ffffff', 'https://lh3.googleusercontent.com/d/1wDrVq5nsbKPHjRdqtaGPgw7J9fsmPJVF', 7),
  ('10000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000001', 'เทา', 'W', '#64748b', '#ffffff', 'https://lh3.googleusercontent.com/d/1Euid66oKF8hvRAFBg20rtr15PeOgxW31', 8)
ON CONFLICT (event_id, name) DO UPDATE
SET gender = EXCLUDED.gender,
    hex_color = EXCLUDED.hex_color,
    text_color = EXCLUDED.text_color,
    logo_url = EXCLUDED.logo_url,
    display_order = EXCLUDED.display_order;

UPDATE public.students s
SET team_color_id = COALESCE(s.team_color_id, tc.id),
    class_name = COALESCE(s.class_name, s.main_room),
    photo_url = COALESCE(s.photo_url, s.image_url),
    shirt_size = COALESCE(s.shirt_size, s.sports_shirt_size)
FROM public.team_colors tc
WHERE tc.event_id = '00000000-0000-0000-0000-000000000001'
  AND tc.name = s.house_color
  AND (
    s.team_color_id IS NULL
    OR s.class_name IS NULL
    OR s.photo_url IS NULL
    OR s.shirt_size IS NULL
  );

CREATE OR REPLACE VIEW public.color_totals
WITH (security_invoker = true)
AS
WITH medal_totals AS (
  SELECT
    event_id,
    team_color_id,
    COUNT(*) FILTER (WHERE medal_type = 'gold') AS gold_count,
    COUNT(*) FILTER (WHERE medal_type = 'silver') AS silver_count,
    COUNT(*) FILTER (WHERE medal_type = 'bronze') AS bronze_count,
    COALESCE(SUM(points), 0) AS medal_points
  FROM public.medal_awards
  GROUP BY event_id, team_color_id
),
score_totals AS (
  SELECT
    cs.event_id,
    cs.team_color_id,
    COALESCE(SUM(cs.points) FILTER (WHERE COALESCE(sc.group_name, sc.name) IN ('parade', 'ขบวนพาเหรด')), 0) AS parade_total,
    COALESCE(SUM(cs.points) FILTER (WHERE COALESCE(sc.group_name, sc.name) IN ('academic', 'วิชาการ')), 0) AS academic_total,
    COALESCE(SUM(cs.points) FILTER (WHERE COALESCE(sc.group_name, sc.name) IN ('sport', 'กีฬา')), 0) AS sport_score_total,
    COALESCE(SUM(cs.points) FILTER (WHERE COALESCE(sc.group_name, sc.name) IN ('page', 'สแตนด์', 'หน้าบ้าน')), 0) AS page_total
  FROM public.color_scores cs
  LEFT JOIN public.score_categories sc ON sc.id = cs.category_id
  GROUP BY cs.event_id, cs.team_color_id
)
SELECT
  tc.id AS team_color_id,
  tc.event_id,
  tc.name AS color_name,
  tc.gender,
  COALESCE(st.parade_total, 0) AS parade_total,
  COALESCE(st.academic_total, 0) AS academic_total,
  COALESCE(st.sport_score_total, 0) AS sport_score_total,
  COALESCE(st.page_total, 0) AS page_total,
  COALESCE(mt.gold_count, 0) AS gold_count,
  COALESCE(mt.silver_count, 0) AS silver_count,
  COALESCE(mt.bronze_count, 0) AS bronze_count,
  COALESCE(mt.medal_points, 0) AS medal_points,
  COALESCE(st.parade_total, 0)
    + COALESCE(st.academic_total, 0)
    + COALESCE(st.sport_score_total, 0)
    + COALESCE(st.page_total, 0)
    + COALESCE(mt.medal_points, 0) AS grand_total
FROM public.team_colors tc
LEFT JOIN medal_totals mt ON mt.event_id = tc.event_id AND mt.team_color_id = tc.id
LEFT JOIN score_totals st ON st.event_id = tc.event_id AND st.team_color_id = tc.id;

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_colors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medal_awards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.score_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.color_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.outstanding_athletes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "azizgames_events_read_auth" ON public.events;
DROP POLICY IF EXISTS "azizgames_events_admin_all" ON public.events;
DROP POLICY IF EXISTS "azizgames_events_read_public" ON public.events;
DROP POLICY IF EXISTS "azizgames_team_colors_read_auth" ON public.team_colors;
DROP POLICY IF EXISTS "azizgames_team_colors_admin_all" ON public.team_colors;
DROP POLICY IF EXISTS "azizgames_team_colors_read_public" ON public.team_colors;
DROP POLICY IF EXISTS "azizgames_sports_read_auth" ON public.sports;
DROP POLICY IF EXISTS "azizgames_sports_admin_all" ON public.sports;
DROP POLICY IF EXISTS "azizgames_sports_staff_write" ON public.sports;
DROP POLICY IF EXISTS "azizgames_sports_read_public" ON public.sports;
DROP POLICY IF EXISTS "azizgames_registrations_read_auth" ON public.registrations;
DROP POLICY IF EXISTS "azizgames_registrations_admin_all" ON public.registrations;
DROP POLICY IF EXISTS "azizgames_registrations_read_public" ON public.registrations;
DROP POLICY IF EXISTS "azizgames_registrations_insert_public" ON public.registrations;
DROP POLICY IF EXISTS "azizgames_matches_read_auth" ON public.matches;
DROP POLICY IF EXISTS "azizgames_matches_admin_all" ON public.matches;
DROP POLICY IF EXISTS "azizgames_matches_read_public" ON public.matches;
DROP POLICY IF EXISTS "azizgames_medals_read_auth" ON public.medal_awards;
DROP POLICY IF EXISTS "azizgames_medals_admin_all" ON public.medal_awards;
DROP POLICY IF EXISTS "azizgames_medals_read_public" ON public.medal_awards;
DROP POLICY IF EXISTS "azizgames_score_categories_read_auth" ON public.score_categories;
DROP POLICY IF EXISTS "azizgames_score_categories_admin_all" ON public.score_categories;
DROP POLICY IF EXISTS "azizgames_score_categories_read_public" ON public.score_categories;
DROP POLICY IF EXISTS "azizgames_color_scores_read_auth" ON public.color_scores;
DROP POLICY IF EXISTS "azizgames_color_scores_admin_all" ON public.color_scores;
DROP POLICY IF EXISTS "azizgames_color_scores_read_public" ON public.color_scores;
DROP POLICY IF EXISTS "azizgames_outstanding_read_auth" ON public.outstanding_athletes;
DROP POLICY IF EXISTS "azizgames_outstanding_admin_all" ON public.outstanding_athletes;
DROP POLICY IF EXISTS "azizgames_outstanding_read_public" ON public.outstanding_athletes;
DROP POLICY IF EXISTS "azizgames_settings_read_auth" ON public.settings;
DROP POLICY IF EXISTS "azizgames_settings_admin_all" ON public.settings;
DROP POLICY IF EXISTS "azizgames_settings_read_public" ON public.settings;
DROP POLICY IF EXISTS "azizgames_students_public_read_active" ON public.students;
DROP POLICY IF EXISTS "azizgames_students_public_update_shirt_size" ON public.students;

CREATE POLICY "azizgames_events_read_auth" ON public.events FOR SELECT TO authenticated USING (true);
CREATE POLICY "azizgames_team_colors_read_auth" ON public.team_colors FOR SELECT TO authenticated USING (true);
CREATE POLICY "azizgames_sports_read_auth" ON public.sports FOR SELECT TO authenticated USING (true);
CREATE POLICY "azizgames_registrations_read_auth" ON public.registrations FOR SELECT TO authenticated USING (true);
CREATE POLICY "azizgames_matches_read_auth" ON public.matches FOR SELECT TO authenticated USING (true);
CREATE POLICY "azizgames_medals_read_auth" ON public.medal_awards FOR SELECT TO authenticated USING (true);
CREATE POLICY "azizgames_score_categories_read_auth" ON public.score_categories FOR SELECT TO authenticated USING (true);
CREATE POLICY "azizgames_color_scores_read_auth" ON public.color_scores FOR SELECT TO authenticated USING (true);
CREATE POLICY "azizgames_outstanding_read_auth" ON public.outstanding_athletes FOR SELECT TO authenticated USING (true);
CREATE POLICY "azizgames_settings_read_auth" ON public.settings FOR SELECT TO authenticated USING (true);

CREATE POLICY "azizgames_events_read_public" ON public.events FOR SELECT TO anon USING (true);
CREATE POLICY "azizgames_team_colors_read_public" ON public.team_colors FOR SELECT TO anon USING (true);
CREATE POLICY "azizgames_sports_read_public" ON public.sports FOR SELECT TO anon USING (is_active IS TRUE);
CREATE POLICY "azizgames_registrations_read_public" ON public.registrations FOR SELECT TO anon USING (true);
CREATE POLICY "azizgames_matches_read_public" ON public.matches FOR SELECT TO anon USING (true);
CREATE POLICY "azizgames_medals_read_public" ON public.medal_awards FOR SELECT TO anon USING (true);
CREATE POLICY "azizgames_score_categories_read_public" ON public.score_categories FOR SELECT TO anon USING (is_active IS TRUE);
CREATE POLICY "azizgames_color_scores_read_public" ON public.color_scores FOR SELECT TO anon USING (true);
CREATE POLICY "azizgames_outstanding_read_public" ON public.outstanding_athletes FOR SELECT TO anon USING (true);
CREATE POLICY "azizgames_settings_read_public" ON public.settings
FOR SELECT TO anon
USING (key IN ('public_buttons', 'sports_visibility', 'school_name', 'school_name_2', 'shirt_sizes', 'start_page'));

CREATE POLICY "azizgames_students_public_read_active" ON public.students
FOR SELECT TO anon
USING (is_active IS TRUE);

CREATE POLICY "azizgames_students_public_update_shirt_size" ON public.students
FOR UPDATE TO anon
USING (
  is_active IS TRUE
  AND COALESCE((SELECT (value ->> 'athlete_size')::boolean FROM public.settings WHERE key = 'public_buttons'), false)
)
WITH CHECK (
  is_active IS TRUE
  AND COALESCE((SELECT (value ->> 'athlete_size')::boolean FROM public.settings WHERE key = 'public_buttons'), false)
);

CREATE POLICY "azizgames_registrations_insert_public" ON public.registrations
FOR INSERT TO anon
WITH CHECK (
  COALESCE((SELECT (value ->> 'athlete_registration')::boolean FROM public.settings WHERE key = 'public_buttons'), false)
);

CREATE POLICY "azizgames_events_admin_all" ON public.events
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "azizgames_team_colors_admin_all" ON public.team_colors
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "azizgames_sports_admin_all" ON public.sports
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "azizgames_sports_staff_write" ON public.sports
FOR ALL TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.role_permissions rp
    JOIN public.teachers t ON rp.position = ANY(COALESCE(t.positions, ARRAY[t.position]))
    WHERE t.profile_id = auth.uid()
      AND rp.feature = 'menu_sports_admin'
      AND rp.allowed IS TRUE
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM public.role_permissions rp
    JOIN public.teachers t ON rp.position = ANY(COALESCE(t.positions, ARRAY[t.position]))
    WHERE t.profile_id = auth.uid()
      AND rp.feature = 'menu_sports_admin'
      AND rp.allowed IS TRUE
  )
);

CREATE POLICY "azizgames_registrations_admin_all" ON public.registrations
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "azizgames_matches_admin_all" ON public.matches
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "azizgames_medals_admin_all" ON public.medal_awards
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "azizgames_score_categories_admin_all" ON public.score_categories
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "azizgames_color_scores_admin_all" ON public.color_scores
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "azizgames_outstanding_admin_all" ON public.outstanding_athletes
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

CREATE POLICY "azizgames_settings_admin_all" ON public.settings
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)))
WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (role = 'admin' OR is_also_admin IS TRUE)));

GRANT USAGE ON SCHEMA public TO anon, authenticated;

GRANT SELECT ON public.color_totals TO anon, authenticated;
GRANT SELECT ON
  public.events,
  public.team_colors,
  public.sports,
  public.registrations,
  public.matches,
  public.medal_awards,
  public.score_categories,
  public.color_scores,
  public.outstanding_athletes,
  public.settings,
  public.students
TO anon;

GRANT UPDATE (shirt_size, sports_shirt_size) ON public.students TO anon;
GRANT INSERT ON public.registrations TO anon;

GRANT SELECT ON public.color_totals TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON
  public.events,
  public.team_colors,
  public.sports,
  public.registrations,
  public.matches,
  public.medal_awards,
  public.score_categories,
  public.color_scores,
  public.outstanding_athletes,
  public.settings
TO authenticated;
