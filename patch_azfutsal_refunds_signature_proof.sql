-- ลายเซ็นผู้รับเงิน + หลักฐานคืนเงิน (สลิปโอน/รูปเงินสด) แนบกับใบเสร็จคืนเงินค่าประกันทีม
alter table azfutsal_refunds
  add column recipient_signature_url text,
  add column payment_method text check (payment_method in ('transfer','cash')),
  add column proof_url text;

comment on column azfutsal_refunds.recipient_signature_url is 'ลายเซ็นหัวหน้าทีม/ผู้รับเงินที่วาดผ่าน canvas ตอนยืนยันคืนเงิน';
comment on column azfutsal_refunds.payment_method is 'วิธีคืนเงิน: transfer=โอน (ต้องมีสลิปใน proof_url), cash=เงินสด (ต้องมีรูปนักเรียนถือเงิน+ใบเสร็จใน proof_url)';
comment on column azfutsal_refunds.proof_url is 'หลักฐานคืนเงิน: สลิปโอน (transfer) หรือรูปถ่ายหลักฐานรับเงินสด (cash, อัปโหลดทีหลังได้หลังพิมพ์ใบเสร็จ)';
