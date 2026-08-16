-- Phase 4: ให้คะแนนสัมภาษณ์รายหัวข้อ — เก็บคะแนนย่อยแต่ละเกณฑ์ไว้ใน jsonb เดียว
-- (มิเรอร์ pattern council_evaluations.scores เดิม) ตามสเปคข้อ 8.5 (2026-08-16)
alter table council_interviews add column if not exists scores jsonb;
