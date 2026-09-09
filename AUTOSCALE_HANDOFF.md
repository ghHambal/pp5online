# ระบบ Auto-scale ของ PP5_Online — เอกสารส่งต่องาน

**เขียนเมื่อ:** 9 กันยายน 2569 (ค่ำ) โดย Claude (Sonnet 5)
**สำหรับ:** AI agent ตัวถัดไป (หรือคนที่มาช่วยดูต่อ) ที่ยังไม่มีบริบทของเรื่องนี้มาก่อนเลย
**สถานะ ณ ตอนเขียน:** ระบบทำงานได้ถูกต้องครบทุกส่วน เหลือปัญหาเดียวที่ยังไม่นิ่ง — GitHub Actions schedule ไม่รันเองสม่ำเสมอ

---

## 1. บริบท — ทำไมถึงมีระบบนี้

วันที่ 9 กันยายน 2569 ระบบ ปพ.5 Online (แอปจัดการโรงเรียน — เกรด/เช็คชื่อ/ข้อมูลนักเรียน) ล่มช่วงที่คุณครูจำนวนมากเข้าเคลียร์คะแนนสอบสามัญพร้อมกัน สาเหตุคือเซิร์ฟเวอร์ฐานข้อมูล (Supabase, compute tier "Micro") รับโหลดพร้อมกันไม่ไหว — ยืนยันจาก log จริง: `canceling statement due to statement timeout`, `Timed out acquiring connection from connection pool` (PGRST003), CPU แตะ 93-100% ต่อเนื่องหลายชั่วโมง ช่วงหนักสุดถึงขั้น Database/PostgREST/Auth/Storage รายงาน Unhealthy พร้อมกันทั้งหมด

แก้ปัญหาเฉพาะหน้าด้วยการอัปเกรดเป็น compute tier "Medium" ผ่าน Dashboard ก่อน จากนั้นสร้างระบบ **auto-scale อัตโนมัติ** ขึ้นมาเพื่อไม่ให้ต้องมานั่งเฝ้า/อัปเกรดมือทุกครั้งที่เกิดเหตุการณ์แบบนี้อีก (เช่น ช่วงกีฬาสีที่กำลังจะมาต่อ)

## 2. ระบบที่สร้างไว้แล้ว — ทำงานถูกต้อง 100% (ทดสอบจริงผ่านหมด)

**Logic หลัก** (`scripts/db-autoscale.mjs`, เรียกจาก `.github/workflows/db-autoscale.yml`):
- ตรวจสถานะ PostgREST/Database ทุก 5 นาที ผ่าน Supabase Management API (`GET /v1/projects/{ref}/health?services=rest,db`)
- ไม่ปกติต่อเนื่อง → อัปเกรด compute เป็น **Medium** อัตโนมัติทันที (เพดานสูงสุดที่ตกลงกับผู้ใช้ไว้ ไม่ auto-upgrade เกินนี้โดยไม่ถามก่อน)
- ปกติต่อเนื่อง 18 ครั้งติดกัน (90 นาที) → ลดกลับ **Micro** อัตโนมัติ (กันเด้งขึ้น-ลงถี่เกินไป เพราะ resize แต่ละครั้งมี downtime สั้นๆ ~15-30 วินาที)
- ทุกครั้งที่ปรับ compute จะแจ้งเตือน 2 ทางไปหา **แอดมิน (is_also_admin=true) + หัวหน้าวิชาการทุกสาย (academic_samai/religion/pvch) + ผู้บริหาร (executive)** — คำนวณรายชื่อสดทุกครั้งจาก `teachers.position(s)` และ `profiles.is_also_admin`:
  1. ประกาศป๊อบอัพเข้าตาราง `announcements` (ann_type='system') — ดูได้จากหน้าแอดมิน **"ประวัติปรับกำลังเครื่อง"** (เมนูใหม่ใน `dashboard.html`, ฟังก์ชัน `renderAutoscaleHistory` ใน `js/views.js`)
  2. Web Push จริง (เด้งแจ้งเตือนระดับเครื่อง ไม่ว่าจะเปิดแอปอยู่หรือไม่) ผ่าน edge function `send-push` ที่มีอยู่แล้วในระบบ (ตัวเดียวกับที่ใช้แจ้งตอนนักเรียนขอทำบัตร QR Code ใหม่)

**State** (ตัวนับ + action ล่าสุด) เก็บเป็นไฟล์ JSON ใน git branch แยก `autoscale-state` (orphan branch, force-push ทับทุกรอบ) — **ตั้งใจไม่แตะ `main`** เพื่อไม่ให้ trigger `deploy.yml` โดยไม่จำเป็น

**Secrets ที่ต้องตั้งใน GitHub (Settings → Secrets and variables → Actions):**
| ชื่อ | ใช้ทำอะไร | หมายเหตุสำคัญ |
|---|---|---|
| `SUPABASE_ACCESS_TOKEN` | Management API (health check, resize) | Personal Access Token จาก Supabase Dashboard → Account → Access Tokens, scope แบบ **Custom**: Project→Project Settings=Read, Infrastructure and delivery→Add-ons=Read-write เท่านั้น (ที่เหลือ None ทั้งหมด — least privilege) |
| `SUPABASE_SERVICE_ROLE_KEY` | REST query หา target audience + โพสต์ประกาศ + เรียก push | **ต้อง copy จากแท็บ "Publishable and secret API keys" (ไม่ใช่ "Legacy anon, service_role API keys")** — เจอบั๊กจริงว่า edge function รับ env var ตัวนี้เป็นรูปแบบใหม่ (`sb_secret_...`) ไม่ใช่ JWT เก่า (`eyJ...`) ถ้าใช้ผิดแท็บจะ 401 ตลอด |
| `NOTIFY_WEBHOOK_URL` | (optional) webhook สำรอง เช่น Slack/Discord | ไม่ตั้งก็ได้ ระบบยังทำงานปกติ |

**ยืนยันด้วยตัวเลขจริงจาก production run:**
- อัปเกรด Micro→Medium: ทำงานจริง สำเร็จ
- ลดกลับ Medium→Micro: ทำงานจริง สำเร็จ
- Push notification: ส่งสำเร็จ 8/8 อุปกรณ์ในกลุ่มเป้าหมาย
- ประกาศในแอป: โพสต์สำเร็จ เข้าคนถูกกลุ่ม (ทดสอบแล้วส่งไปหา teacher_id [52, 236, 85] ตรงตามที่ตั้งใจ)

## 3. ปัญหาเดียวที่ยังไม่นิ่ง — GitHub Actions schedule ไม่รันเองสม่ำเสมอ

ตั้ง `cron: '*/5 * * * *'` ไว้ใน `.github/workflows/db-autoscale.yml` (ควรรันเองทุก 5 นาทีตลอด 24 ชม. โดยไม่ต้องมีใครสั่ง) แต่ในทางปฏิบัติจริง **รันเองอัตโนมัติ (event="schedule") แค่ 1 ครั้งเดียวในช่วง ~5 ชั่วโมงแรกหลังติดตั้ง** ที่เหลือทั้งหมดต้องสั่งมือผ่าน `gh workflow run db-autoscale.yml` (event="workflow_dispatch")

**ตรวจสอบแล้วว่าไม่ใช่ปัญหา config ฝั่งเรา:**
```bash
gh api repos/ghHambal/pp5online/actions/permissions
# {"enabled":true,"allowed_actions":"all","sha_pinning_required":false}
gh api repos/ghHambal/pp5online --jq '.default_branch'
# main — ตรงกับ branch ที่ push workflow ไป
```
cron syntax ถูกต้อง, ไฟล์บน GitHub server ตรงกับที่ตั้งใจ, repo active มาก (ไม่เข้าเงื่อนไข "ไม่มี commit 60 วัน" ที่ทำให้ GitHub ปิด schedule อัตโนมัติ)

**สิ่งที่ลองแล้ว:**
- Push commit แตะไฟล์ `.github/workflows/db-autoscale.yml` (commit `f6c78ff`, ~14:44 UTC 2026-09-09) เพื่อลอง "resync" ให้ GitHub จดจำตาราง cron ใหม่ — เป็นวิธีที่ชุมชนแนะนำกันเวลาเจอปัญหานี้ **ผลลัพธ์ ณ ตอนเขียนเอกสารนี้ยังไม่ทราบ** (มี ScheduleWakeup ตั้งเช็คต่อในเซสชันเดิม แต่ session นั้นอาจหมดอายุไปแล้วตอนอ่านเอกสารนี้)

**ข้อมูลอ้างอิงจากการค้นคว้า** (ดู sources ด้านล่าง):
- GitHub มีรายงาน incident ช่วง 2026-08-26 ที่กระทบ scheduled workflows โดยตรง
- พฤติกรรมที่รู้จักกันทั่วไป: cron ที่เพิ่งสร้าง/แก้ใหม่ อาจใช้เวลา 15 นาทีถึงกว่า 1 ชั่วโมงกว่า GitHub จะเริ่มจดจำ, ช่วงโหลดสูงอาจถูก delay/skip ได้
- Community discussions ที่เจอปัญหาคล้ายกัน: [#185355](https://github.com/orgs/community/discussions/185355), [#202034](https://github.com/orgs/community/discussions/202034), [#158641](https://github.com/orgs/community/discussions/158641)

### ทางเลือกที่แนะนำ (เรียงจากง่าย/เร็ว → ทนทานระยะยาว)

1. **รอเพิ่ม + push แตะไฟล์อีกรอบถ้ายังไม่ขยับ** — บางเคสในชุมชนใช้เวลาหลายชั่วโมงถึงเป็นวันกว่าจะกลับมาปกติเอง ไม่มีค่าใช้จ่าย ลองก่อนได้เสมอ

2. **ติดต่อ GitHub Support** — แจ้งชื่อ repo `ghHambal/pp5online` ขอให้ตรวจสอบ schedule queueing ฝั่งเขาโดยตรง มักเป็นวิธีที่ได้ผลที่สุดถ้าเป็นปัญหาแพลตฟอร์มจริงๆ

3. **ใช้ external cron service ยิง `repository_dispatch` แทน GitHub schedule** — เช่น cron-job.org / EasyCron (ฟรี) ยิง `POST https://api.github.com/repos/ghHambal/pp5online/dispatches` ทุก 5 นาที (ต้องมี PAT สิทธิ์ `repo`/`workflow`, และเพิ่ม `repository_dispatch:` เป็น trigger ในไฟล์ workflow คู่กับ `schedule:` เดิม) — ข้อดี: ไม่ต้องพึ่ง GitHub scheduler เลย ควบคุมจังหวะเองได้แน่นอน

4. **ย้าย scheduling ไปไว้ใน Supabase เอง (แนะนำที่สุดสำหรับระยะยาว)** — โปรเจกต์นี้ใช้ Postgres 17 อยู่แล้ว เปิด extension `pg_cron` แล้วตั้ง job เรียก edge function ทุก 5 นาทีผ่าน `pg_net`/`net.http_post` ได้เลยจากภายใน Supabase ตรงๆ **ตัด dependency กับ GitHub Actions ออกไปทั้งระบบ** ข้อเสียคือต้อง refactor `scripts/db-autoscale.mjs` จาก Node script ให้กลายเป็น Supabase Edge Function (Deno) แทน และย้าย `SUPABASE_ACCESS_TOKEN` ไปเก็บเป็น Supabase Edge Function secret แทน GitHub secret — งานมีแรงเสียดทานตอนย้ายแต่ผลลัพธ์เสถียรกว่ามาก เพราะไม่ต้องพึ่งความน่าเชื่อถือของ scheduler จากแพลตฟอร์มอื่นเลย

**คำแนะนำของ Claude:** ถ้ามีเวลาจำกัด ทำข้อ 3 (external cron → repository_dispatch) เป็นทางลัดให้ระบบใช้งานได้แน่นอนทันที คู่กับข้อ 2 (contact support) เผื่อ GitHub แก้ปัญหาต้นตอให้ แล้วค่อยพิจารณาย้ายไปข้อ 4 (pg_cron) เป็นทางออกถาวรทีหลังเมื่อมีเวลาทำ refactor

## 4. สถานะล่าสุด ณ ตอนเขียนเอกสาร (ค่ำวันที่ 9 ก.ย. 2569)

- Compute: **Micro** (ปกติ ไม่มีค่าใช้จ่ายส่วนเกิน)
- Health: ACTIVE_HEALTHY ต่อเนื่อง
- ทุกฟีเจอร์ของระบบทดสอบผ่านหมดแล้ว **เหลือแค่ความสม่ำเสมอของตัวจับเวลาอัตโนมัติเท่านั้นที่ยังไม่นิ่ง** — ไม่ใช่ระบบพัง แค่ยังต้องมีคนสั่งมือเป็นระยะจนกว่าจะแก้ปัญหาข้อ 3 ได้

## 5. บทเรียนทางเทคนิคที่เจอระหว่างทาง (กันเสียเวลาสืบซ้ำ)

- `GET /v1/projects/{ref}/health` (Management API) **ปฏิเสธ query param `timeout_ms`** ถ้าส่งผ่าน query string (เพราะกลายเป็น string ไม่ใช่ number) → error 400 "expected number, received string" — อย่าใส่ query param นี้เลยง่ายสุด (health check ยังทำงานถูกต้องโดยไม่ต้องมี)
- `GET /v1/projects/{ref}/billing/addons` คืนค่า tier ปัจจุบันที่ **`selected_addons[].variant.id`** (ไม่ใช่ `.identifier` ที่เดาไว้ตอนแรก) — ถ้าอ่านผิด field จะเข้าใจผิดว่าเป็น Micro ตลอดแม้จริงๆ เป็น Medium แล้ว (บั๊กนี้เจอจริงและแก้แล้ว)
- Supabase **ปฏิเสธ resize ถ้าโปรเจกต์ unhealthy หนักเกินไป** (เช่น "Failed to connect to database") ด้วย error "Project is not in a healthy state" — ต้องมี retry logic (ปล่อยรอบถัดไปลองใหม่) ไม่ใช่ throw error ทิ้งทั้ง job
- **resize สำเร็จ (API คืน 200) แค่แปลว่าคำสั่งเข้าคิวแล้ว ไม่ใช่ restart เสร็จจริง** — ยิง query อื่นทันทีหลัง resize สำเร็จเสี่ยงเจอ HTTP 520 (เจอจริง) ต้องหน่วงเวลาก่อน (ใช้ 15 วินาทีในโค้ดปัจจุบัน)
- Edge function ที่มี env var `SUPABASE_SERVICE_ROLE_KEY` **platform inject ให้เป็นรูปแบบใหม่ (`sb_secret_...`)** อาจไม่ตรงกับ "Legacy" service_role key (JWT `eyJ...`) ที่ copy จากหน้า Legacy tab บน Dashboard — ต้องใช้ค่าจากแท็บ "Publishable and secret API keys" (secret key) ให้ตรงกัน

## 6. ไฟล์ที่เกี่ยวข้องทั้งหมด

| ไฟล์ | หน้าที่ |
|---|---|
| `scripts/db-autoscale.mjs` | โค้ดหลักของระบบ auto-scale ทั้งหมด |
| `.github/workflows/db-autoscale.yml` | workflow definition (schedule + workflow_dispatch พร้อม input debug) |
| `js/views.js` (`renderAutoscaleHistory`) | หน้าแอดมินดูประวัติการปรับ compute |
| `js/dashboard.js` | route (`'autoscale-history'`) + import ของหน้าประวัติ |
| `dashboard.html` | เมนูฝั่งซ้าย "ประวัติปรับกำลังเครื่อง" (`data-nav="autoscale-history"`) |
| Supabase Edge Function `send-push` | ไม่ได้อยู่ในไฟล์ repo (deploy ผ่าน Dashboard/Management API เท่านั้น) — เพิ่ม "trusted service_role caller" mode ให้เรียกได้โดยไม่มี user JWT จริง ถ้าจะแก้ต่อต้องดึงโค้ดปัจจุบันจาก Dashboard → Edge Functions → send-push ก่อน |
| git branch `autoscale-state` | เก็บ state (ตัวนับ + action ล่าสุด) เป็น orphan branch แยกจาก `main` — อย่าลบ/merge เข้า main |

---

*เอกสารนี้เขียนโดย Claude (Sonnet 5) ให้ AI ตัวถัดไปหรือใครก็ตามที่มาช่วยดูแลระบบนี้ต่อ อ้างอิงจากการทำงานร่วมกับครูฮัมบาลีย์ วาจิ ในวันที่ 9 กันยายน 2569 — ทุกอย่างในเอกสารนี้ยืนยันด้วยข้อมูลจริงจาก production ไม่ใช่การเดา ยกเว้นส่วน "ทางเลือกที่แนะนำ" ในหัวข้อ 3 ที่เป็นคำแนะนำอิงหลักการทั่วไป ยังไม่ได้ทดสอบจริง*
