# ติดตั้งระบบตารางกำลังเครื่อง

การ push เผยแพร่เฉพาะเว็บผ่าน GitHub Pages ไม่ได้ deploy Supabase Function/SQL

1. รัน `patch_autoscale_schedule.sql` ใน SQL Editor ด้วยบัญชีผู้ดูแล (ไม่รีเซ็ตค่าที่มีอยู่)
2. Deploy โฟลเดอร์ `supabase/functions/autoscale-tick` รวม `schedule.js`:
   `supabase functions deploy autoscale-tick --project-ref isupghduywzqbmnjgtip`
   คงค่าการตรวจ token ของ trigger เดิม และ secret `MANAGEMENT_ACCESS_TOKEN` เดิมไว้
3. รอรอบ cron ถัดไป แล้วตรวจ `system_config` key `autoscaleState` ต้องมี `mode: "schedule"`
4. แอดมิน → **ตั้งค่ากำลังเครื่อง** → เพิ่มช่วงวันที่/เวลา → บันทึก → เปิดใช้งาน

ค่าเริ่มต้นปิดใช้งาน: backend รุ่นใหม่หยุดระบบ health-based เดิม และคงเครื่องระดับเดิม
ปิดใช้งานไม่ได้ปิดฐานข้อมูล ไม่ยกเลิกคำสั่ง resize ที่ส่งไปแล้ว
ห้ามเปิดหน้าเว็บใช้ตั้งเวลาโดยยังไม่ deploy backend: หน้าจะเตือนและไม่ให้เปิดใช้งาน

ในช่วงวัน/เวลาไทยใช้ Medium นอกช่วงใช้ Micro เวลา end เป็นขอบไม่รวม
ทุกวันตั้งเวลาแยกได้ ช่วงซ้อนใช้ Medium ถ้าตรงอย่างน้อยหนึ่งช่วง ไม่รองรับข้ามเที่ยงคืน
รอบตรวจเดิมทุก 5 นาทีคงไว้; ไม่ต้องเพิ่ม cron ใหม่
เว้นคำสั่งอย่างน้อย 15 นาที ตรวจ tier + health ยืนยันในรอบถัดไปก่อนแจ้งว่าสำเร็จ
หากยังยืนยันคำสั่งไม่ได้เกิน 30 นาที ระบบหยุดส่งซ้ำและแสดง needs_attention
ผู้ดูแลต้องตรวจสถานะ resize จริงใน Supabase ก่อนแก้ pending state ด้วย service_role
ห้ามล้าง pending โดยยังไม่ยืนยันว่าคำสั่งเดิมจบแล้ว

ค่าใช้จ่ายเป็นประมาณ gross Compute USD ตามตารางเมื่อเปิดใช้งาน ไม่ใช่บิลจริง
Micro $0.01344/hr, Medium $0.0822/hr ตรวจ 2026-09-13
https://supabase.com/docs/guides/platform/compute-and-disk
ไม่หักเครดิต ไม่รวมแพ็กเกจ/ภาษี/ดิสก์/ทราฟฟิก/ความคลาดเคลื่อนจาก resize และ cooldown

ตรวจสอบ:

```sh
node scripts/test-autoscale-schedule.mjs
node scripts/test-autoscale-runtime.mjs # Node 24 (stripTypeScriptTypes)
npx --yes deno check --node-modules-dir=none supabase/functions/autoscale-tick/index.ts
```

UI fixture ข้อมูลจำลองเท่านั้น: `/scripts/autoscale-ui-fixture.html` ผ่าน Vite dev server
fixture ไม่อยู่ใน entrypoints ของ production build และแทนที่ data access ไม่เขียนข้อมูลจริง
