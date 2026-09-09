# ระบบ Auto-scale ของ PP5_Online — เอกสารส่งต่องาน

**เขียนเมื่อ:** 9 กันยายน 2569 (ค่ำ) โดย Claude (Sonnet 5)
**สำหรับ:** AI agent ตัวถัดไป (หรือคนที่มาช่วยดูต่อ) ที่ยังไม่มีบริบทของเรื่องนี้มาก่อนเลย
**สถานะ ณ ตอนเขียน:** ✅ **ระบบทำงานสมบูรณ์แล้ว ปัญหาที่เคยค้างได้รับการแก้ไขเรียบร้อยด้วยการย้าย scheduler ไปใช้ `pg_cron` ของ Supabase เอง (เลิกพึ่ง GitHub Actions schedule)**

---

## 1. บริบท — ทำไมถึงมีระบบนี้

วันที่ 9 กันยายน 2569 ระบบ ปพ.5 Online (แอปจัดการโรงเรียน — เกรด/เช็คชื่อ/ข้อมูลนักเรียน) ล่มช่วงที่คุณครูจำนวนมากเข้าเคลียร์คะแนนสอบสามัญพร้อมกัน สาเหตุคือเซิร์ฟเวอร์ฐานข้อมูล (Supabase, compute tier "Micro") รับโหลดพร้อมกันไม่ไหว — ยืนยันจาก log จริง: `canceling statement due to statement timeout`, `Timed out acquiring connection from connection pool` (PGRST003), CPU แตะ 93-100% ต่อเนื่องหลายชั่วโมง ช่วงหนักสุดถึงขั้น Database/PostgREST/Auth/Storage รายงาน Unhealthy พร้อมกันทั้งหมด

แก้ปัญหาเฉพาะหน้าด้วยการอัปเกรดเป็น compute tier "Medium" ผ่าน Dashboard ก่อน จากนั้นสร้างระบบ **auto-scale อัตโนมัติ** ขึ้นมาเพื่อไม่ให้ต้องมานั่งเฝ้า/อัปเกรดมือทุกครั้งที่เกิดเหตุการณ์แบบนี้อีก (เช่น ช่วงกีฬาสีที่กำลังจะมาต่อ)

ลองสร้างด้วย GitHub Actions (`cron` schedule) ก่อน แต่เจอปัญหา GitHub ไม่ยอมรันเองสม่ำเสมอ (ดูหัวข้อ 4) จึงย้ายมาใช้ **`pg_cron` ของ Supabase เอง** แทนในที่สุด — ตอนนี้ทำงานเสถียรแล้ว

## 2. สถาปัตยกรรมปัจจุบัน (ใช้งานจริง) — pg_cron + Edge Function

**ไม่พึ่ง GitHub Actions schedule อีกต่อไป** ทุกอย่างรันอยู่ภายใน Supabase project เอง:

```
pg_cron (ทุก 5 นาที)
  → pg_net.http_post → Edge Function "autoscale-tick"
      → Supabase Management API (health check + resize)
      → ตาราง system_config (เก็บ state)
      → ตาราง announcements (ประกาศในแอป)
      → Edge Function "send-push" (Web Push จริง)
```

**Logic** (`supabase/functions/autoscale-tick/index.ts`, พอร์ตมาจาก `scripts/db-autoscale.mjs` เดิม ตรรกะเดียวกันทุกจุด):
- ตรวจสถานะ PostgREST/Database ทุก 5 นาที ผ่าน Supabase Management API (`GET /v1/projects/{ref}/health?services=rest,db`)
- ไม่ปกติต่อเนื่อง → อัปเกรด compute เป็น **Medium** อัตโนมัติทันที (เพดานสูงสุดที่ตกลงกับผู้ใช้ไว้ ไม่ auto-upgrade เกินนี้โดยไม่ถามก่อน)
- ปกติต่อเนื่อง 18 ครั้งติดกัน (90 นาที) → ลดกลับ **Micro** อัตโนมัติ (กันเด้งขึ้น-ลงถี่เกินไป เพราะ resize แต่ละครั้งมี downtime สั้นๆ ~15-30 วินาที — โค้ดหน่วง 15 วินาทีหลัง resize ก่อนค่อยแจ้งเตือน กัน HTTP 520 ตอนเครื่องกำลัง restart)
- ทุกครั้งที่ปรับ compute จะแจ้งเตือน 2 ทางไปหา **แอดมิน (is_also_admin=true) + หัวหน้าวิชาการทุกสาย (academic_samai/religion/pvch) + ผู้บริหาร (executive)** — คำนวณรายชื่อสดทุกครั้งจาก `teachers.position(s)` และ `profiles.is_also_admin`:
  1. ประกาศป๊อบอัพเข้าตาราง `announcements` (ann_type='system') — ดูได้จากหน้าแอดมิน **"ประวัติปรับกำลังเครื่อง"** (เมนูใน `dashboard.html`, ฟังก์ชัน `renderAutoscaleHistory` ใน `js/views.js`)
  2. Web Push จริง (เด้งแจ้งเตือนระดับเครื่อง ไม่ว่าจะเปิดแอปอยู่หรือไม่) ผ่าน edge function `send-push` (ตัวเดียวกับที่ใช้แจ้งตอนนักเรียนขอทำบัตร QR Code ใหม่ — เพิ่ม "trusted service_role caller" mode ให้เรียกจากระบบอัตโนมัติได้โดยไม่มี user JWT จริง)

**State** (ตัวนับ + action ล่าสุด) เก็บใน `system_config` (key=`autoscaleState`, คอลัมน์ `value` เป็น **text ไม่ใช่ jsonb** — ต้อง `JSON.stringify`/`JSON.parse` เอง ดูหัวข้อ 5)

**pg_cron job**: `jobname='autoscale-tick'`, `schedule='*/5 * * * *'`, เรียก `net.http_post` ไปที่ URL edge function พร้อม publishable key เป็น Authorization (ดู `patch_setup_autoscale_pg_cron.sql`)

**Edge Function secret ที่ต้องตั้ง** (Supabase Dashboard → Edge Functions → Secrets):
| ชื่อ | ค่า | หมายเหตุสำคัญ |
|---|---|---|
| `MANAGEMENT_ACCESS_TOKEN` | Supabase Personal Access Token | **ชื่อ secret ห้ามขึ้นต้นด้วย `SUPABASE_`** (Supabase สงวน prefix นี้ไว้ ตั้งไม่ผ่าน จะเจอ error "Name must not start with the SUPABASE_ prefix") — สร้าง PAT จาก Account → Access Tokens, scope แบบ Custom: Project→Project Settings=Read, Infrastructure and delivery→Add-ons=Read-write เท่านั้น |

`SUPABASE_URL` และ `SUPABASE_SERVICE_ROLE_KEY` เป็นค่าที่ Supabase inject ให้ทุก edge function อัตโนมัติอยู่แล้ว ไม่ต้องตั้งเอง

**ยืนยันด้วยตัวเลขจริงจาก production run (2026-09-09):**
- อัปเกรด Micro→Medium: ทำงานจริง สำเร็จ (ผ่านระบบเดิม GitHub Actions ก่อนย้าย)
- ลดกลับ Medium→Micro: ทำงานจริง สำเร็จ
- Push notification: ส่งสำเร็จ 8/8 อุปกรณ์ในกลุ่มเป้าหมาย
- ประกาศในแอป: โพสต์สำเร็จ เข้าคนถูกกลุ่ม (teacher_id [52, 236, 85])
- **pg_cron + edge function**: ยืนยันแล้วว่า pg_cron เรียกฟังก์ชันเองอัตโนมัติจริง (เห็น log การเรียกที่ไม่ได้มาจากการสั่งมือ) + health check/tier read/state read-write ทำงานถูกต้องหลังแก้บั๊ก 2 ตัว (ดูหัวข้อ 5)

## 3. ระบบเดิม (GitHub Actions) — เก็บไว้เป็น manual override เท่านั้น

`.github/workflows/db-autoscale.yml` **ปิด `schedule:` trigger แล้ว** เหลือแค่ `workflow_dispatch` (กดรันมือได้เสมอ ใช้ debug/ทดสอบ หรือกรณีฉุกเฉินที่ pg_cron มีปัญหา) โค้ด `scripts/db-autoscale.mjs` เดิมยังอยู่ครบ ใช้งานได้ปกติถ้ารันมือ

**เหตุผลที่ปิด**: ตั้ง `cron: '*/5 * * * *'` ไว้แต่ GitHub ไม่รันเองสม่ำเสมอ (รันเองอัตโนมัติได้แค่ 1 ครั้งใน ~5 ชั่วโมงแรกหลังติดตั้ง ทั้งที่ตรวจสอบ config ทุกจุดแล้วถูกต้องหมด — ดู [community discussions ที่เจอปัญหาคล้ายกัน](https://github.com/orgs/community/discussions/185355)) ลอง push commit resync แล้วก็ไม่ช่วย จึงตัดสินใจย้ายไป pg_cron แทนทั้งระบบ

## 4. สถานะล่าสุด ณ ตอนเขียนเอกสาร (ค่ำวันที่ 9 ก.ย. 2569)

- Compute: **Micro** (ปกติ ไม่มีค่าใช้จ่ายส่วนเกิน)
- Health: ACTIVE_HEALTHY ต่อเนื่อง
- pg_cron job active, เรียก edge function สำเร็จ, ทุกฟังก์ชันย่อยทดสอบผ่านหมดแล้ว
- **ไม่มีปัญหาค้างที่ต้องตามต่อ** — ระบบพร้อมทำงานอัตโนมัติเต็มรูปแบบ ไม่ต้องมีคนหรือ AI มาคอยสั่งอีก

## 5. บทเรียนทางเทคนิคที่เจอระหว่างทาง (กันเสียเวลาสืบซ้ำ)

- `GET /v1/projects/{ref}/health` (Management API) **ปฏิเสธ query param `timeout_ms`** ถ้าส่งผ่าน query string (เพราะกลายเป็น string ไม่ใช่ number) → error 400 "expected number, received string" — อย่าใส่ query param นี้เลยง่ายสุด
- `GET /v1/projects/{ref}/billing/addons` คืนค่า tier ปัจจุบันที่ **`selected_addons[].variant.id`** (ไม่ใช่ `.identifier`)
- Supabase **ปฏิเสธ resize ถ้าโปรเจกต์ unhealthy หนักเกินไป** ด้วย error "Project is not in a healthy state" — ต้องมี retry logic (ปล่อยรอบถัดไปลองใหม่) ไม่ใช่ throw error ทิ้งทั้ง job
- **resize สำเร็จ (API คืน 200) แค่แปลว่าคำสั่งเข้าคิวแล้ว ไม่ใช่ restart เสร็จจริง** — ยิง query อื่นทันทีหลัง resize สำเร็จเสี่ยงเจอ HTTP 520 ต้องหน่วงเวลาก่อน (ใช้ 15 วินาที)
- Edge function ที่มี env var `SUPABASE_SERVICE_ROLE_KEY` **platform inject ให้เป็นรูปแบบใหม่ (`sb_secret_...`)** ไม่ตรงกับ "Legacy" service_role key (JWT `eyJ...`) ที่ copy จากหน้า Legacy tab — ต้องใช้ค่าจากแท็บ "Publishable and secret API keys"
- **Custom edge function secret ชื่อห้ามขึ้นต้นด้วย `SUPABASE_`** (สงวนไว้เฉพาะค่าที่ platform inject เท่านั้น) — ตั้งชื่ออื่นแทน เช่น `MANAGEMENT_ACCESS_TOKEN`
- **ตาราง `system_config` คอลัมน์ `value` เป็น `text` ไม่ใช่ `jsonb`** (เช็คด้วย `select pg_typeof(value) from system_config` เพื่อยืนยัน) — โค้ดที่เขียนลง/อ่านจากตารางนี้ต้อง `JSON.stringify`/`JSON.parse` เองเสมอ ถ้าปล่อยให้ supabase-js ส่ง object ตรงๆ จะได้ string กลับมาตอนอ่าน ไม่ใช่ object (เจอ `TypeError: Cannot create property ... on string` ตอน parse ผิดจุดนี้)
- GitHub Actions `schedule` trigger **ไม่น่าเชื่อถือพอสำหรับงานที่ต้องรันสม่ำเสมอจริงจัง** แม้ config จะถูกทุกจุด — ถ้าโปรเจกต์อยู่บน Supabase อยู่แล้ว ใช้ `pg_cron` + edge function เชื่อถือได้กว่ามากและตัด external dependency ออกไปได้เลย

## 6. ไฟล์ที่เกี่ยวข้องทั้งหมด

| ไฟล์ | หน้าที่ |
|---|---|
| `supabase/functions/autoscale-tick/index.ts` | **โค้ดหลักของระบบ auto-scale ปัจจุบัน** (Deno edge function ที่ pg_cron เรียก) |
| `patch_setup_autoscale_pg_cron.sql` | SQL สร้าง pg_cron job (reference — job มีอยู่แล้วบน production ไม่ต้องรันซ้ำ) |
| `scripts/db-autoscale.mjs` | โค้ดเดิม (GitHub Actions) — ยังใช้งานได้ผ่าน `workflow_dispatch` มือเป็น fallback |
| `.github/workflows/db-autoscale.yml` | workflow เดิม — **ปิด schedule แล้ว** เหลือ workflow_dispatch อย่างเดียว |
| `js/views.js` (`renderAutoscaleHistory`) | หน้าแอดมินดูประวัติการปรับ compute |
| `js/dashboard.js` | route (`'autoscale-history'`) + import ของหน้าประวัติ |
| `dashboard.html` | เมนูฝั่งซ้าย "ประวัติปรับกำลังเครื่อง" (`data-nav="autoscale-history"`) |
| Supabase Edge Function `send-push` | ไม่ได้อยู่ในไฟล์ repo (deploy ผ่าน Dashboard/Management API เท่านั้น) — มี "trusted service_role caller" mode ให้เรียกจากระบบอัตโนมัติได้ ถ้าจะแก้ต่อต้องดึงโค้ดปัจจุบันจาก Dashboard → Edge Functions → send-push ก่อน |
| pg_cron job `autoscale-tick` (jobid=4 ณ ตอนสร้าง) | เช็คสถานะ/แก้ไขผ่าน `select * from cron.job` / `select cron.alter_job(...)` / `select cron.unschedule('autoscale-tick')` |
| ตาราง `system_config` key=`autoscaleState` | state ปัจจุบัน — column `value` เป็น text ต้อง parse เอง |
| git branch `autoscale-state` | **เลิกใช้แล้ว** (เหลือไว้เป็นประวัติของระบบเดิม ไม่ต้องยุ่งอีก) |

---

*เอกสารนี้เขียนโดย Claude (Sonnet 5) ให้ AI ตัวถัดไปหรือใครก็ตามที่มาช่วยดูแลระบบนี้ต่อ อ้างอิงจากการทำงานร่วมกับครูฮัมบาลีย์ วาจิ ในวันที่ 9 กันยายน 2569 — ทุกอย่างในเอกสารนี้ยืนยันด้วยข้อมูลจริงจาก production ไม่ใช่การเดา*
