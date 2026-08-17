-- ระบบสภานักเรียน: เกียรติบัตร/รางวัลจากการแข่งขัน/กิจกรรมนอกโรงเรียนแนบตอนสมัคร (ขั้นต่ำ 5 รายการ)
alter table council_applications
  add column if not exists certificates jsonb not null default '[]'::jsonb;

comment on column council_applications.certificates is 'เกียรติบัตร/รางวัลจากการแข่งขัน/กิจกรรมนอกโรงเรียน — array ของ {title, url} ขั้นต่ำ 5 รายการ (บังคับตอนสมัคร ตรวจฝั่ง client)';
