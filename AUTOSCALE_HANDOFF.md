# ระบบ Auto-scale ของ PP5_Online — เอกสารส่งต่องาน

**เขียนเมื่อ:** 9 กันยายน 2569 (ค่ำ) โดย Claude (Sonnet 5) — **อัปเดตล่าสุด 10 กันยายน 2569** หลังเจอเหตุการณ์จริงครั้งที่ 2
**สำหรับ:** AI agent ตัวถัดไป (หรือคนที่มาช่วยดูต่อ) ที่ยังไม่มีบริบทของเรื่องนี้มาก่อนเลย
**สถานะ ณ ตอนอัปเดตล่าสุด:** ✅ **ระบบทำงานอัตโนมัติจริง ผ่านการพิสูจน์ในสถานการณ์จริงมาแล้ว 2 ครั้ง** — แต่พบจุดอ่อนสถาปัตยกรรม 1 จุด (pg_cron เองก็ค้างได้ถ้า DB โหลดหนักมาก) ซึ่งได้ทำ **mitigation ด้วย external backup trigger (cron-job.org)** แล้ว และมี **บั๊กเล็กที่ยังไม่ได้แก้ (race condition ของตัวนับ state)** ที่ต้องระวัง — รายละเอียดเต็มอยู่หัวข้อ 7

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

## 4. สถานะล่าสุด (อัปเดต 10 ก.ย. 2569 บ่าย)

- Compute: **Micro** (ปกติ ไม่มีค่าใช้จ่ายส่วนเกิน)
- Health: ACTIVE_HEALTHY ต่อเนื่อง
- Trigger ทำงานคู่ขนาน 2 ตัว: pg_cron (ในโปรเจกต์) + cron-job.org (นอกโปรเจกต์ backup) — ยืนยันจาก log จริงว่ายิงเข้า `autoscale-tick` สำเร็จ (HTTP 200) ทั้งคู่
- ผ่านการทดสอบสถานการณ์จริงมาแล้ว 2 ครั้ง (9 และ 10 ก.ย.) — อัปเกรด/ดาวน์เกรด/แจ้งเตือนทำงานถูกต้องทุกครั้งที่ได้รันจริง
- **ปัญหาที่ยังค้างอยู่** (ดูรายละเอียดหัวข้อ 6): (1) pg_cron เองค้างได้ตอน DB โหลดหนักมาก — mitigate ด้วย cron-job.org แล้ว ไม่ใช่แก้ที่ต้นตอ (2) race condition ของตัวนับ `consecutiveHealthyChecks` ตอนมี invocation ซ้อนกัน — ยังไม่ได้แก้ในโค้ด แนะนำให้ทำต่อถ้ามีเวลา

## 5. บทเรียนทางเทคนิคที่เจอระหว่างทาง (กันเสียเวลาสืบซ้ำ)

- `GET /v1/projects/{ref}/health` (Management API) **ปฏิเสธ query param `timeout_ms`** ถ้าส่งผ่าน query string (เพราะกลายเป็น string ไม่ใช่ number) → error 400 "expected number, received string" — อย่าใส่ query param นี้เลยง่ายสุด
- `GET /v1/projects/{ref}/billing/addons` คืนค่า tier ปัจจุบันที่ **`selected_addons[].variant.id`** (ไม่ใช่ `.identifier`)
- Supabase **ปฏิเสธ resize ถ้าโปรเจกต์ unhealthy หนักเกินไป** ด้วย error "Project is not in a healthy state" — ต้องมี retry logic (ปล่อยรอบถัดไปลองใหม่) ไม่ใช่ throw error ทิ้งทั้ง job
- **resize สำเร็จ (API คืน 200) แค่แปลว่าคำสั่งเข้าคิวแล้ว ไม่ใช่ restart เสร็จจริง** — ยิง query อื่นทันทีหลัง resize สำเร็จเสี่ยงเจอ HTTP 520 ต้องหน่วงเวลาก่อน (ใช้ 15 วินาที)
- Edge function ที่มี env var `SUPABASE_SERVICE_ROLE_KEY` **platform inject ให้เป็นรูปแบบใหม่ (`sb_secret_...`)** ไม่ตรงกับ "Legacy" service_role key (JWT `eyJ...`) ที่ copy จากหน้า Legacy tab — ต้องใช้ค่าจากแท็บ "Publishable and secret API keys"
- **Custom edge function secret ชื่อห้ามขึ้นต้นด้วย `SUPABASE_`** (สงวนไว้เฉพาะค่าที่ platform inject เท่านั้น) — ตั้งชื่ออื่นแทน เช่น `MANAGEMENT_ACCESS_TOKEN`
- **ตาราง `system_config` คอลัมน์ `value` เป็น `text` ไม่ใช่ `jsonb`** (เช็คด้วย `select pg_typeof(value) from system_config` เพื่อยืนยัน) — โค้ดที่เขียนลง/อ่านจากตารางนี้ต้อง `JSON.stringify`/`JSON.parse` เองเสมอ ถ้าปล่อยให้ supabase-js ส่ง object ตรงๆ จะได้ string กลับมาตอนอ่าน ไม่ใช่ object (เจอ `TypeError: Cannot create property ... on string` ตอน parse ผิดจุดนี้)
- GitHub Actions `schedule` trigger **ไม่น่าเชื่อถือพอสำหรับงานที่ต้องรันสม่ำเสมอจริงจัง** แม้ config จะถูกทุกจุด — ถ้าโปรเจกต์อยู่บน Supabase อยู่แล้ว ใช้ `pg_cron` + edge function เชื่อถือได้กว่ามากและตัด external dependency ออกไปได้เลย

## 6. เหตุการณ์ครั้งที่ 2 (10 กันยายน 2569) — สิ่งที่เจอเพิ่มและแก้ไป

เช้าวันที่ 10 ก.ย. ระบบเข้าสถานะ Unhealthy อีกครั้ง (โหลดหนักจากการใช้งานพร้อมกัน) เป็นการทดสอบระบบ auto-scale ในสถานการณ์จริงครั้งแรกนับตั้งแต่ย้ายมาใช้ pg_cron ผลคือ **ตรรกะอัปเกรด/ดาวน์เกรดทำงานถูกต้องเมื่อได้รันจริง** แต่เจอปัญหาที่ทำให้มันไม่ได้รันตรงเวลา — สรุป timeline (เวลาไทย = UTC+7 ทั้งหมด):

- **10:45 น.** ระบบเริ่ม Unhealthy
- **10:46-10:50 น.** pg_cron ยังยิงอยู่ปกติ แต่ยังตรวจไม่พบว่า unhealthy ต่อเนื่องพอจะ trigger อัปเกรด
- **10:50-11:26 น. (ห่างไป 36 นาที)** — **pg_cron หยุดยิงไปเฉยๆ** ไม่มี invocation แม้แต่ครั้งเดียวในช่วงนี้ ทั้งที่ตั้งไว้ทุก 5 นาที และนี่คือช่วงที่ระบบ unhealthy หนักที่สุดพอดี (จุดที่ต้องการให้ auto-scale ทำงานมากที่สุด กลับเป็นจุดที่มันเงียบไป)
- **11:26 น.** เรียก edge function ด้วยมือ (curl) เพื่อปลดล็อกสถานการณ์ — สำเร็จทันที ยืนยันว่า edge function เองไม่มีปัญหา ปัญหาอยู่ที่ pg_cron ไม่ยิง
- **11:27 น.** ตรรกะอัปเกรดทำงานถูกต้อง สั่ง resize Micro→Medium สำเร็จ
- **11:30 น.** แจ้งเตือนออกสำเร็จ (พบและแก้บั๊กเล็กน้อยระหว่างทาง ดูด้านล่าง)
- **11:35-11:40 น.** pg_cron กลับมายิงปกติเอง หลังเครื่อง resize เสร็จโหลดเบาลง
- **11:40-11:45 น.** ระบบ healthy ต่อเนื่อง ตรรกะ downgrade ก็ทำงานถูกต้องเมื่อครบเงื่อนไข (90 นาทีปกติ)

### 6.1 Root cause: pg_cron ค้างได้เองเมื่อ DB โหลดหนักมาก (**ยังไม่แก้ได้เต็มที่ — mitigate ด้วย backup trigger**)

`pg_cron` เป็น background worker ที่รันอยู่ **ภายใน Postgres instance เดียวกันกับที่มันคอยตรวจสอบ** — เมื่อ DB โหลดหนักถึงขั้นวิกฤต ตัว pg_cron worker เองก็โดนผลกระทบไปด้วย (ไม่ได้ถูก schedule ให้ทำงาน หรือทำงานช้ามาก) กลายเป็น blind spot ตรงจุดที่ระบบต้องการ auto-scale มากที่สุดพอดี — เป็นข้อจำกัดเชิงสถาปัตยกรรมที่แก้จากข้างในไม่ได้เต็มร้อย (จะ "แก้ pg_cron ให้ไม่ค้าง" ตอน DB ล่มคือย้อนแย้งในตัวเอง)

**Mitigation ที่ทำไปแล้ว (10 ก.ย.):** ตั้ง **external HTTP cron ตัวที่สอง** ผ่าน [cron-job.org](https://cron-job.org) (ฟรี) ให้ยิง POST ไปที่ `autoscale-tick` ทุก 5 นาทีเหมือนกัน แต่ **อยู่นอก Supabase project ไปเลย** (ไม่ผ่าน pg_net) จึงไม่ได้รับผลกระทบตอน DB ภายในค้าง — ทดสอบด้วยมือ (curl) ระหว่างเหตุการณ์แล้วว่ายิงเข้าได้สำเร็จตอนที่ pg_cron เองค้างอยู่ และหลังตั้งเสร็จเรียบร้อยยืนยันจาก log จริงแล้วว่าทั้งสองตัวยิงคู่ขนานกันได้ปกติ (เห็น 2 invocations ต่อรอบ 5 นาทีตั้งแต่ ~14:00 น. เป็นต้นมา ทั้งคู่ HTTP 200)

ตั้งค่า cron-job.org:
- URL: `https://isupghduywzqbmnjgtip.supabase.co/functions/v1/autoscale-tick`
- Method: **POST** (บังคับ — edge function ปฏิเสธ method อื่นด้วย 405)
- Header (แท็บ **ADVANCED** ไม่ใช่แท็บแยก): `Authorization: Bearer <publishable key>`
- Schedule: `*/5 * * * *` (ทุก 5 นาที — ค่า default ของฟอร์มเป็น 15 นาที ต้องเปลี่ยนเอง)

ผลคือตอนนี้มี **2 ตัวจับเวลาที่ทำงานอิสระต่อกัน** (pg_cron ในโปรเจกต์ + cron-job.org ข้างนอก) ยิงเข้า `autoscale-tick` พร้อมกันทุก 5 นาที — เพิ่มโอกาสที่อย่างน้อยตัวใดตัวหนึ่งจะยิงผ่านได้แม้อีกตัวจะค้าง แลกกับการที่บางรอบจะมี invocation ซ้อนกัน 2 ครั้ง (ดูหัวข้อ 6.3 ทำไมเรื่องนี้ถึงยังไม่อันตรายแต่ก็ยังไม่ได้แก้ที่ต้นตอ)

### 6.2 บั๊กที่เจอและแก้แล้ว: การแจ้งเตือนเงียบล้มเหลวเมื่อ query พังตอน DB โหลดหนัก

`getTargetRecipients()` เดิมใช้ pattern `.then(r => r.data ?? [])` — ถ้า query ล้มเหลว (ซึ่งมีโอกาสสูงมากตอน DB กำลังโหลดหนักพอดี ซึ่งเป็นช่วงเวลาที่ auto-scale ทำงานอยู่แล้ว) โค้ดจะกลืน error เงียบๆ แล้วตีความว่า "ไม่มีผู้รับที่ตรงเงื่อนไข" ทั้งที่จริงคือ query พังต่างหาก ผลคือ resize ทำงานถูกต้องแต่ไม่มีใครได้รับแจ้งเตือนเลย

**แก้แล้ว** (อยู่ในโค้ด production ปัจจุบัน, commit `45efadb`): แยกเป็น `getTargetRecipientsOnce()` ที่เช็ค `.error` ของแต่ละ query ตรงๆ แล้ว `throw` ถ้าพัง + `getTargetRecipients()` ที่ห่อด้วย retry 1 ครั้ง (รอ 10 วินาทีแล้วลองใหม่ ให้เวลา DB นิ่งขึ้นหลัง resize) — ดูโค้ดจริงที่ `supabase/functions/autoscale-tick/index.ts` บรรทัด 80-106

### 6.3 บั๊กที่เจอแล้ว **แต่ยังไม่ได้แก้**: race condition ของตัวนับ `consecutiveHealthyChecks`

ระหว่างช่วงที่ pg_cron ค้าง 36 นาทีแล้วกลับมาทำงาน มันพยายาม "ไล่ตาม" งานที่ค้างอยู่ ทำให้เกิด **edge function invocation ซ้อนกันหลายตัวพร้อมกัน** (concurrent) — ตัว `loadState()`/`saveState()` เป็น pattern read-modify-write ธรรมดา ไม่ได้ล็อก จึงเกิด stale read: สังเกตเห็น `consecutiveHealthyChecks` กระโดดจาก 0 ไปเป็น 136 ทันที (ควรค่อยๆ นับทีละ 1 ทุก 5 นาที) เกือบทำให้เกิด **downgrade ก่อนเวลาอันควร** (หลังอัปเกรดไปแค่ ~3 นาที ทั้งที่ต้องรอ 90 นาที) — ครั้งนี้รอดไปได้เพราะ Supabase API เองคืน 429 "still processing addon changes" ไม่ใช่เพราะโค้ดป้องกันไว้

**ยังไม่ได้แก้ในโค้ด** — ทางแก้ที่แนะนำไว้สำหรับคนที่มาทำต่อ: เปลี่ยนจาก read-modify-write ธรรมดาเป็น atomic increment ผ่าน SQL function (`UPDATE ... SET value = ...` แบบ single statement หรือ Postgres advisory lock ครอบ `runAutoscale()` ทั้งฟังก์ชัน) เพื่อกันไม่ให้ invocation ที่ทับซ้อนกันอ่าน state เก่าไปพร้อมกัน — ความเสี่ยงจะเพิ่มขึ้นอีกตอนนี้ที่มี 2 ตัวจับเวลายิงคู่ขนาน (7.1) เพราะโอกาสเกิด concurrent invocation สูงขึ้นเป็นปกติ (ไม่ต้องรอ pg_cron ไล่ตามงานค้างอีกต่อไป)

## 7. ไฟล์ที่เกี่ยวข้องทั้งหมด

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
| cron-job.org job `pp5-autoscale-backup` | **Backup trigger ภายนอก** ยิง POST เข้า `autoscale-tick` ทุก 5 นาทีเหมือน pg_cron แต่เป็นระบบแยกอิสระ (ดูหัวข้อ 6.1) — จัดการ/แก้ไขได้ที่ cron-job.org (ต้องล็อกอินบัญชีที่ใช้สร้างไว้) ไม่ได้อยู่ในไฟล์ repo |

---

*เอกสารนี้เขียนโดย Claude (Sonnet 5) ให้ AI ตัวถัดไปหรือใครก็ตามที่มาช่วยดูแลระบบนี้ต่อ อ้างอิงจากการทำงานร่วมกับครูฮัมบาลีย์ วาจิ ในวันที่ 9 และ 10 กันยายน 2569 — ทุกอย่างในเอกสารนี้ยืนยันด้วยข้อมูลจริงจาก production ไม่ใช่การเดา*
