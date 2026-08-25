-- ฟีเจอร์ "แจ้งขอทำบัตร QR Code" — ต่อยอดจากระบบ Feedback เดิม (app_feedback) แทนที่จะสร้างตาราง/
-- หน้าใหม่แยกต่างหาก (ตามที่ผู้ใช้ยืนยันให้เด้งเข้าหน้า "แสดงความคิดเห็น" เดิม 2026-08-23)
-- เพิ่ม category ใหม่ 'qr_card_request' ในโค้ดฝั่ง JS (js/ui.js, js/views.js) และ 3 คอลัมน์สถานะ
-- เฉพาะทางที่ category นี้ต้องใช้ (พิมพ์เสร็จ/นักเรียนมารับ/ชำระค่าปรับ) ที่ category อื่นไม่ต้องใช้

alter table app_feedback add column if not exists qr_printed_at timestamptz;
alter table app_feedback add column if not exists qr_picked_up_at timestamptz;
alter table app_feedback add column if not exists qr_fine_paid_at timestamptz;

comment on column app_feedback.qr_printed_at is 'แอดมินพิมพ์บัตร QR Code ให้นักเรียนคนนี้เสร็จแล้วเมื่อไหร่ (เฉพาะ category=qr_card_request)';
comment on column app_feedback.qr_picked_up_at is 'นักเรียนมารับบัตรที่พิมพ์แล้วเมื่อไหร่';
comment on column app_feedback.qr_fine_paid_at is 'นักเรียนชำระค่าปรับ (ถ้ามี) เมื่อไหร่';

-- ใช้ส่ง push notification แจ้งแอดมินทุกคนตอนมีการแจ้งขอทำบัตร QR ใหม่ (js/api.js: notifyAdminsNewFeedback)
-- คืนแค่ uuid ของโปรไฟล์แอดมิน ไม่รั่วไหลข้อมูลอื่น ปลอดภัยให้ authenticated ทุก role เรียกได้
create or replace function public.get_admin_profile_ids()
returns uuid[]
language sql
security definer
set search_path to 'public'
stable
as $$
  select coalesce(array_agg(id), '{}'::uuid[])
  from profiles
  where role = 'admin' or is_also_admin = true;
$$;
