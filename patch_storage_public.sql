-- patch_storage_public.sql
-- ทำให้ bucket system-assets และ teacher-photos เป็น public
-- เพื่อให้ URL รูปโลโก้/ลายเซ็นโหลดได้โดยไม่ต้องมี auth

-- เปิด public access สำหรับ system-assets (โลโก้, ลายเซ็น, QR code)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'system-assets',
  'system-assets',
  true,
  5242880,  -- 5MB
  ARRAY['image/jpeg','image/png','image/webp','image/gif']
)
ON CONFLICT (id) DO UPDATE SET public = true;

-- เปิด public access สำหรับ teacher-photos (รูปโปรไฟล์ครู)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'teacher-photos',
  'teacher-photos',
  true,
  3145728,  -- 3MB
  ARRAY['image/jpeg','image/png','image/webp']
)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Policy: ให้ทุกคนอ่าน (GET) ได้ — จำเป็นสำหรับรูปที่ฝังในหน้าเว็บ
DROP POLICY IF EXISTS "system-assets public read" ON storage.objects;
CREATE POLICY "system-assets public read"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'system-assets');

DROP POLICY IF EXISTS "teacher-photos public read" ON storage.objects;
CREATE POLICY "teacher-photos public read"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'teacher-photos');

-- Policy: ให้ authenticated user upload ได้
DROP POLICY IF EXISTS "system-assets authenticated upload" ON storage.objects;
CREATE POLICY "system-assets authenticated upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'system-assets');

DROP POLICY IF EXISTS "system-assets authenticated update" ON storage.objects;
CREATE POLICY "system-assets authenticated update"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'system-assets');

DROP POLICY IF EXISTS "teacher-photos authenticated upload" ON storage.objects;
CREATE POLICY "teacher-photos authenticated upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'teacher-photos');

DROP POLICY IF EXISTS "teacher-photos authenticated update" ON storage.objects;
CREATE POLICY "teacher-photos authenticated update"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'teacher-photos');
