-- PP5 Online: มอบสิทธิ์ "ประเมินกีฬาสี" ให้ครูจริงในระบบ (ผูกกับ profiles.id ไม่ใช่บัญชีแยกแบบ
-- sports_evaluation_judges เดิมของ AZIZGAMES) ครูที่ถูกมอบหมายจะเห็นเมนู "ประเมินกีฬาสี" เอง
-- คะแนนที่กรอกยัง insert ลง sports_score_entries ตารางเดียวกับ AZIZGAMES (judge_username =
-- 'pp5:'||profile_id) เฉลี่ยรวมกับกรรมการฝั่ง AZIZGAMES ได้ตามปกติ ไม่ต้องแตะฝั่ง AZIZGAMES เลย
-- Re-runnable patch: safe to run again.

CREATE TABLE IF NOT EXISTS public.sports_score_evaluators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  category TEXT NOT NULL CHECK(category IN ('parade','page','color_eval')),
  criteria_id UUID REFERENCES public.sports_score_criteria(id) ON DELETE CASCADE,
  role_label TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- criteria_id เว้นว่างได้ (ประเมินทุกหัวข้อในหมวดนั้น) — ป้องกันมอบหมายซ้ำแม้ criteria_id เป็น NULL
-- (NULL ปกติไม่ชนกันเองใน unique constraint ธรรมดา ต้องใช้ partial/expression index แทน)
CREATE UNIQUE INDEX IF NOT EXISTS uq_sports_score_evaluators
  ON public.sports_score_evaluators (event_id, profile_id, category, COALESCE(criteria_id, '00000000-0000-0000-0000-000000000000'::uuid));

CREATE INDEX IF NOT EXISTS idx_sports_score_evaluators_profile ON public.sports_score_evaluators(profile_id);

ALTER TABLE public.sports_score_evaluators ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "score_evaluators_read" ON public.sports_score_evaluators;
CREATE POLICY "score_evaluators_read" ON public.sports_score_evaluators FOR SELECT TO authenticated
  USING (public.is_sports_overview_admin() OR profile_id = auth.uid());

DROP POLICY IF EXISTS "score_evaluators_admin_write" ON public.sports_score_evaluators;
CREATE POLICY "score_evaluators_admin_write" ON public.sports_score_evaluators FOR ALL TO authenticated
  USING (public.is_sports_overview_admin())
  WITH CHECK (public.is_sports_overview_admin());

GRANT SELECT, INSERT, UPDATE, DELETE ON public.sports_score_evaluators TO authenticated;
