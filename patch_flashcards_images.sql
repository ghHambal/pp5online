-- patch_flashcards_images.sql
-- เพิ่ม column รูปภาพให้ตาราง flashcards
-- รัน patch นี้ใน Supabase Dashboard → SQL Editor

-- Step 1: เพิ่ม column รูปภาพให้ตาราง flashcards
ALTER TABLE public.flashcards
  ADD COLUMN IF NOT EXISTS front_image_url TEXT,
  ADD COLUMN IF NOT EXISTS back_image_url  TEXT;

-- Step 2: สร้าง Storage Bucket สำหรับ flashcard images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'flashcard-images',
  'flashcard-images',
  true,
  204800,   -- 200 KB limit (หลังบีบอัด client-side แล้วควรอยู่ในช่วงนี้)
  ARRAY['image/jpeg','image/png','image/webp']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 204800;

-- Step 3: Public read policy
DROP POLICY IF EXISTS "flashcard-images public read" ON storage.objects;
CREATE POLICY "flashcard-images public read"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'flashcard-images');

-- Step 4: Authenticated INSERT (อัปโหลดได้เฉพาะ path ของตัวเอง)
DROP POLICY IF EXISTS "flashcard-images teacher upload" ON storage.objects;
CREATE POLICY "flashcard-images teacher upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'flashcard-images'
  AND name LIKE ('teacher_' || (
    SELECT t.id::text
    FROM public.teachers t
    WHERE t.profile_id = auth.uid()
    LIMIT 1
  ) || '/%')
);

-- Step 5: Authenticated DELETE (ลบได้เฉพาะ path ของตัวเอง)
DROP POLICY IF EXISTS "flashcard-images teacher delete" ON storage.objects;
CREATE POLICY "flashcard-images teacher delete"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'flashcard-images'
  AND name LIKE ('teacher_' || (
    SELECT t.id::text
    FROM public.teachers t
    WHERE t.profile_id = auth.uid()
    LIMIT 1
  ) || '/%')
);
