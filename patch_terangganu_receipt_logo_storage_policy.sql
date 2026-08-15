-- อนุญาตผู้รับผิดชอบที่มีสิทธิ์ตั้งค่าอัปโหลด/แทนที่โลโก้ใบเสร็จ
-- แยกเป็น policy เฉพาะไฟล์เพื่อไม่ขยายสิทธิ์ไปยังไฟล์อื่นใน bucket

drop policy if exists terangganu_receipt_logo_insert on storage.objects;
create policy terangganu_receipt_logo_insert on storage.objects
for insert to authenticated
with check (
  bucket_id = 'terangganu-assets'
  and name = 'receipt-logo.jpg'
  and public.terangganu_can(
    (select id from public.terangganu_camp_events where slug = 'terangganu-2026'),
    'settings'
  )
);

drop policy if exists terangganu_receipt_logo_select on storage.objects;
create policy terangganu_receipt_logo_select on storage.objects
for select to authenticated
using (
  bucket_id = 'terangganu-assets'
  and name = 'receipt-logo.jpg'
  and public.terangganu_can(
    (select id from public.terangganu_camp_events where slug = 'terangganu-2026'),
    'settings'
  )
);

drop policy if exists terangganu_receipt_logo_update on storage.objects;
create policy terangganu_receipt_logo_update on storage.objects
for update to authenticated
using (
  bucket_id = 'terangganu-assets'
  and name = 'receipt-logo.jpg'
  and public.terangganu_can(
    (select id from public.terangganu_camp_events where slug = 'terangganu-2026'),
    'settings'
  )
)
with check (
  bucket_id = 'terangganu-assets'
  and name = 'receipt-logo.jpg'
  and public.terangganu_can(
    (select id from public.terangganu_camp_events where slug = 'terangganu-2026'),
    'settings'
  )
);
