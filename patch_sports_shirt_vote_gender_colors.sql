-- patch_sports_shirt_vote_gender_colors.sql
-- ต่อยอดจาก patch_sports_shirt_vote.sql: แยกแบบเสื้อตามเพศ (ชาย/หญิง) เพราะสไตล์และชุดสีไม่เหมือนกัน
-- และเพิ่มตารางรูปภาพแยกตามสีบ้านของแต่ละแบบ (4 สี/แบบ/เพศ)
-- Run AFTER patch_sports_shirt_vote.sql in Supabase SQL Editor.

-- 1) เพิ่มคอลัมน์ gender ให้ sports_shirt_designs (แถวเดิมที่เคยสร้างไว้ถือเป็นฝั่ง "ชาย" โดย default
--    เพราะเป็นชุดแบบเดิมที่มีอยู่ก่อน — แอดมินไปอัปโหลดรูปฝั่ง "หญิง" ใหม่ทีหลังได้)
ALTER TABLE public.sports_shirt_designs
  ADD COLUMN IF NOT EXISTS gender TEXT CHECK (gender IN ('ชาย','หญิง'));

UPDATE public.sports_shirt_designs SET gender = 'ชาย' WHERE gender IS NULL;

ALTER TABLE public.sports_shirt_designs
  ALTER COLUMN gender SET NOT NULL;

ALTER TABLE public.sports_shirt_designs
  DROP CONSTRAINT IF EXISTS sports_shirt_designs_event_id_design_no_key;

ALTER TABLE public.sports_shirt_designs
  ADD CONSTRAINT sports_shirt_designs_event_gender_design_no_key UNIQUE (event_id, gender, design_no);

-- สร้างชุดแบบฝั่ง "หญิง" คู่กับฝั่งชายที่มีอยู่แล้ว (เปล่า รอแอดมินอัปโหลด)
INSERT INTO public.sports_shirt_designs(event_id, design_no, name, display_order, gender)
SELECT event_id, design_no, 'แบบที่ ' || design_no, display_order, 'หญิง'
FROM public.sports_shirt_designs
WHERE gender = 'ชาย'
ON CONFLICT (event_id, gender, design_no) DO NOTHING;

-- 2) ตารางรูปภาพแยกตามสีบ้านของแต่ละแบบ (4 สี ต่อ 1 แบบ)
CREATE TABLE IF NOT EXISTS public.sports_shirt_design_colors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  design_id UUID NOT NULL REFERENCES public.sports_shirt_designs(id) ON DELETE CASCADE,
  color_name TEXT NOT NULL,
  image_url TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(design_id, color_name)
);

-- Seed สีตามชุดสีบ้านจริงของโรงเรียน: ชาย = แดง/น้ำเงิน/เขียว/น้ำตาล, หญิง = ส้ม/ฟ้า/ม่วง/เทา
INSERT INTO public.sports_shirt_design_colors(design_id, color_name, display_order)
SELECT d.id, c.color_name, c.ord
FROM public.sports_shirt_designs d
CROSS JOIN (VALUES ('แดง',1),('น้ำเงิน',2),('เขียว',3),('น้ำตาล',4)) AS c(color_name, ord)
WHERE d.gender = 'ชาย'
ON CONFLICT (design_id, color_name) DO NOTHING;

INSERT INTO public.sports_shirt_design_colors(design_id, color_name, display_order)
SELECT d.id, c.color_name, c.ord
FROM public.sports_shirt_designs d
CROSS JOIN (VALUES ('ส้ม',1),('ฟ้า',2),('ม่วง',3),('เทา',4)) AS c(color_name, ord)
WHERE d.gender = 'หญิง'
ON CONFLICT (design_id, color_name) DO NOTHING;

-- 3) แก้ cast_my_shirt_vote ให้เช็คว่านักเรียนโหวตเฉพาะแบบของเพศตัวเองเท่านั้น
CREATE OR REPLACE FUNCTION public.cast_my_shirt_vote(p_event UUID, p_design UUID) RETURNS public.sports_shirt_votes
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE v_student students%ROWTYPE; v_cfg sports_portal_settings%ROWTYPE; v_design sports_shirt_designs%ROWTYPE; v_row sports_shirt_votes%ROWTYPE;
BEGIN
 SELECT * INTO v_student FROM students WHERE profile_id=auth.uid() AND is_active IS TRUE;
 IF v_student.id IS NULL THEN RAISE EXCEPTION 'student profile not found'; END IF;
 SELECT * INTO v_cfg FROM sports_portal_settings WHERE event_id=p_event;
 IF NOT COALESCE(v_cfg.shirt_vote_enabled,false) OR (v_cfg.shirt_vote_opens_at IS NOT NULL AND now()<v_cfg.shirt_vote_opens_at) OR (v_cfg.shirt_vote_closes_at IS NOT NULL AND now()>v_cfg.shirt_vote_closes_at) THEN RAISE EXCEPTION 'shirt vote is closed'; END IF;
 SELECT * INTO v_design FROM sports_shirt_designs WHERE id=p_design AND event_id=p_event;
 IF v_design.id IS NULL THEN RAISE EXCEPTION 'invalid design'; END IF;
 IF v_design.gender IS DISTINCT FROM v_student.gender THEN RAISE EXCEPTION 'design gender mismatch'; END IF;
 INSERT INTO sports_shirt_votes(event_id,student_id,design_id,voted_at,updated_at)
 VALUES(p_event,v_student.id,p_design,now(),now())
 ON CONFLICT(event_id,student_id) DO UPDATE SET design_id=excluded.design_id,updated_at=now()
 RETURNING * INTO v_row; RETURN v_row;
END $$;

-- 4) RLS สำหรับตารางสีใหม่ (อ่านได้ทุกคน เขียนได้เฉพาะ sports admin เหมือน sports_shirt_designs เดิม)
ALTER TABLE public.sports_shirt_design_colors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "shirt_design_colors_read" ON public.sports_shirt_design_colors;
DROP POLICY IF EXISTS "shirt_design_colors_admin" ON public.sports_shirt_design_colors;

CREATE POLICY "shirt_design_colors_read" ON public.sports_shirt_design_colors FOR SELECT TO authenticated USING(true);
CREATE POLICY "shirt_design_colors_admin" ON public.sports_shirt_design_colors FOR ALL TO authenticated USING(public.is_sports_admin()) WITH CHECK(public.is_sports_admin());

GRANT SELECT ON public.sports_shirt_design_colors TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.sports_shirt_design_colors TO authenticated;

-- 5) storage policy เดิมของ bucket shirt-designs ใช้ path ตาม design_id/color_name.png ได้อยู่แล้ว (ไม่ต้องแก้ policy)
