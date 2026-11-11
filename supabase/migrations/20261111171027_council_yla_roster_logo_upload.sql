-- Allow staff to upload common raster logo formats for YLA registration rosters.
-- Existing bucket access policies still limit writes to council staff.
update storage.buckets
set file_size_limit = 3145728,
    allowed_mime_types = array['image/png', 'image/jpeg', 'image/webp']::text[]
where id = 'council-election-assets';
