-- ลิงก์วิดีโอแนบประกาศ (YouTube/TikTok/Google Drive) — ฝังเล่นในป๊อบอัพประกาศได้เลย
-- ถ้าจับรูปแบบลิงก์ได้ (ดู videoEmbedHtml ใน js/ui.js), แพลตฟอร์มอื่นที่จับไม่ได้จะ fallback เป็นลิงก์เปิดแท็บใหม่
alter table announcements add column video_url text;
comment on column announcements.video_url is 'ลิงก์วิดีโอแนบประกาศ (YouTube/TikTok/Google Drive) — ฝังเล่นในป๊อบอัพได้ถ้าจับรูปแบบลิงก์ได้ (js/ui.js videoEmbedHtml)';
