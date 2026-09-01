-- ประเภทภาพกิจกรรมกีฬาสีที่แอดมินเพิ่ม/แก้ไขได้เอง
-- รันใน Supabase SQL Editor ได้ซ้ำโดยไม่ทำให้ข้อมูลเดิมหาย

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.sports_gallery_upload_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  name TEXT NOT NULL CHECK (length(trim(name)) > 0),
  event_date DATE,
  legacy_key TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid(),
  updated_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(event_id, legacy_key)
);

CREATE INDEX IF NOT EXISTS idx_sports_gallery_upload_types_event
  ON public.sports_gallery_upload_types(event_id, is_active, event_date, display_order);

ALTER TABLE public.sports_gallery_upload_types ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.can_manage_sports_gallery_upload_types()
RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT public.is_sports_admin() OR EXISTS (
    SELECT 1
    FROM public.teachers t
    WHERE t.profile_id=auth.uid()
      AND (
        'house_color_admin'=ANY(COALESCE(t.positions, ARRAY[t.position]))
        OR t.staff_type='แอดมิน'
      )
  );
$$;

DROP POLICY IF EXISTS "gallery_upload_types_read" ON public.sports_gallery_upload_types;
DROP POLICY IF EXISTS "gallery_upload_types_admin_insert" ON public.sports_gallery_upload_types;
DROP POLICY IF EXISTS "gallery_upload_types_admin_update" ON public.sports_gallery_upload_types;
DROP POLICY IF EXISTS "gallery_upload_types_admin_delete" ON public.sports_gallery_upload_types;

CREATE POLICY "gallery_upload_types_read"
  ON public.sports_gallery_upload_types FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "gallery_upload_types_admin_insert"
  ON public.sports_gallery_upload_types FOR INSERT TO authenticated
  WITH CHECK (public.can_manage_sports_gallery_upload_types());

CREATE POLICY "gallery_upload_types_admin_update"
  ON public.sports_gallery_upload_types FOR UPDATE TO authenticated
  USING (public.can_manage_sports_gallery_upload_types())
  WITH CHECK (public.can_manage_sports_gallery_upload_types());

CREATE POLICY "gallery_upload_types_admin_delete"
  ON public.sports_gallery_upload_types FOR DELETE TO authenticated
  USING (public.can_manage_sports_gallery_upload_types());

GRANT SELECT, INSERT, UPDATE, DELETE ON public.sports_gallery_upload_types TO authenticated;
GRANT EXECUTE ON FUNCTION public.can_manage_sports_gallery_upload_types() TO authenticated;

-- ย้ายรายการพิเศษเดิมที่เคยฝังในโค้ดมาเป็นข้อมูลที่แอดมินแก้ไขได้
INSERT INTO public.sports_gallery_upload_types
  (event_id, name, legacy_key, display_order, is_active)
SELECT e.id, seed.name, seed.legacy_key, seed.display_order, true
FROM public.events e
CROSS JOIN (
  VALUES
    ('พิธีเปิด', 'opening_ceremony', 10),
    ('พิธีปิด', 'closing_ceremony', 20)
) AS seed(name, legacy_key, display_order)
ON CONFLICT(event_id, legacy_key) DO NOTHING;
