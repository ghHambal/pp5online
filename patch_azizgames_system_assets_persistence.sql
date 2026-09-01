-- ทำให้โลโก้/ไอคอนที่อัปโหลดจากหน้า Settings ของ AZIZGAMES คงอยู่หลังรีเฟรช
-- AZIZGAMES ใช้ Supabase anon client โดยตั้งใจ จึงเปิดสิทธิ์เฉพาะ settings key และ storage path นี้เท่านั้น
-- รันซ้ำได้โดยไม่ลบไฟล์หรือค่าที่บันทึกไว้เดิม

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'system-assets',
  'system-assets',
  true,
  5242880,
  ARRAY['image/jpeg','image/png','image/webp','image/gif']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS "azizgames_system_assets_read" ON public.settings;
DROP POLICY IF EXISTS "azizgames_system_assets_insert" ON public.settings;
DROP POLICY IF EXISTS "azizgames_system_assets_update" ON public.settings;

CREATE POLICY "azizgames_system_assets_read"
  ON public.settings FOR SELECT TO anon
  USING (key = 'azizgames_system_assets');

CREATE POLICY "azizgames_system_assets_insert"
  ON public.settings FOR INSERT TO anon
  WITH CHECK (key = 'azizgames_system_assets');

CREATE POLICY "azizgames_system_assets_update"
  ON public.settings FOR UPDATE TO anon
  USING (key = 'azizgames_system_assets')
  WITH CHECK (key = 'azizgames_system_assets');

GRANT SELECT, INSERT, UPDATE ON public.settings TO anon;

DROP POLICY IF EXISTS "azizgames system assets anon insert" ON storage.objects;
DROP POLICY IF EXISTS "azizgames system assets anon update" ON storage.objects;

CREATE POLICY "azizgames system assets anon insert"
  ON storage.objects FOR INSERT TO anon
  WITH CHECK (
    bucket_id = 'system-assets'
    AND (storage.foldername(name))[1] = 'azizgames'
  );

CREATE POLICY "azizgames system assets anon update"
  ON storage.objects FOR UPDATE TO anon
  USING (
    bucket_id = 'system-assets'
    AND (storage.foldername(name))[1] = 'azizgames'
  )
  WITH CHECK (
    bucket_id = 'system-assets'
    AND (storage.foldername(name))[1] = 'azizgames'
  );
