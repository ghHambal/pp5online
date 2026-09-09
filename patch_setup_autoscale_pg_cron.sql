-- patch_setup_autoscale_pg_cron.sql
-- ตั้ง pg_cron job ให้เรียก edge function autoscale-tick ทุก 5 นาที
-- แทนที่ GitHub Actions schedule ที่ไม่นิ่ง (ดู AUTOSCALE_HANDOFF.md)
-- รันแล้วจริงบน production เมื่อ 2026-09-09 (jobid=4) — ไฟล์นี้เก็บไว้เพื่อ
-- reference/reproducibility เท่านั้น ไม่ต้องรันซ้ำถ้า job มีอยู่แล้ว
-- (เช็คก่อนด้วย: select * from cron.job where jobname = 'autoscale-tick';)

select cron.schedule(
  'autoscale-tick',
  '*/5 * * * *',
  $$
  select net.http_post(
    url := 'https://isupghduywzqbmnjgtip.supabase.co/functions/v1/autoscale-tick',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0'
    ),
    body := '{}'::jsonb,
    timeout_milliseconds := 55000
  );
  $$
);

-- ต้องตั้ง edge function secret ชื่อ MANAGEMENT_ACCESS_TOKEN (Supabase Personal
-- Access Token, scope: Project Settings=Read + Add-ons=Read-write) ก่อน job นี้
-- จะทำงานได้จริง — ตั้งผ่าน Dashboard เท่านั้น (ห้ามขึ้นต้นด้วย SUPABASE_)
