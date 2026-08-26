-- ตาราง azfutsal_refunds ขาด GRANT SELECT ให้ anon/authenticated มาตั้งแต่สร้างตาราง
-- (มีแค่ insert/update/delete — RLS policy "azfutsal_refunds_public_read" (qual=true) มีอยู่แล้วแต่ไม่มีผล
-- เพราะ Postgres เช็ค table-level GRANT ก่อน RLS เสมอ) ทำให้ query จากแอป (ผ่าน anon key) ได้ error
-- "permission denied for table azfutsal_refunds" เงียบๆ ทุกครั้ง (โค้ดเดิมไม่เช็ค error จาก query นี้)
-- ผลคือ S.refunds ว่างเปล่าตลอด แม้ insert ยืนยันคืนเงินจะสำเร็จจริงในฐานข้อมูลก็ตาม
-- (สถานะ "ยืนยันแล้ว" ไม่เคยขึ้น, ยอดคืนไปแล้วไม่เคยนับ, เปิดใบเสร็จไม่ได้ — พบจริง 2026-08-26)
grant select on azfutsal_refunds to anon, authenticated;
