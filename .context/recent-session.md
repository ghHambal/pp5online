# Recent Session — 2026-05-16

## งานที่ทำในวันนี้

### ระบบ Donation (ใหม่ทั้งหมด)
- เพิ่มจาก 4 tier → 5 tier (เริ่มต้นที่ 49 บาท)
- ชื่อ tier ใหม่: จุดประกาย/ร่วมฝัน/ร่วมสร้าง/ร่วมขับเคลื่อน/ก่อตั้งร่วม
- สีตาม tier: green/purple/amber/blue/gold
- Visual feature editor ใน Admin Settings (แทน textarea)
- Feature lock per tier (minTier 1-5 per feature)
- Promo popup สำหรับครูที่ยังไม่โดเนท (14-day suppress)
- Upgrade button ใน sidebar สำหรับ tier 1-4
- Slip upload บังคับก่อน submit
- การ์ดขอบคุณ: สีตาม tier, features locked/unlocked
- Sticker upload: PNG ไม่บีบผ่าน canvas (preserve transparency)
- Admin toggle เปิด/ปิด promo popup

### ปพ.5 Document (page 2 + 3)
- Page 2 header: เปลี่ยนจาก table → CSS Grid+Flex, underline ยืดเต็มคอลัมน์
- Page 2: เส้นประใต้ header, objectives, signature
- Page 2: ตารางยืดเต็มหน้า A4 ด้วย CSS flex (fill row)
- Page 3: header มีเส้นประ + layout 2 คอลัมน์

### Role Switching
- `is_also_admin` column ใน profiles table
- ครู 1087 สามารถสลับ teacher.html ↔ dashboard.html
- ปุ่มใน sidebar ทั้งสองหน้า

### Filters
- กลุ่มวิชา filter ตาม teacher.category (สามัญ/ศาสนา)
- กลุ่มสาระ filter ตาม subject_group ที่เลือก
- departments.category column เพิ่มใน DB

## Commits วันนี้
- 57adfb4 donation promo toggle
- 6df8aff promo popup + upgrade sidebar
- e0f14a6 thank you card tier colors
- 67d8653 slip upload donation
- bd18ef7 remove canvas PNG compression
- 5f09ac6 role switching
- 554d883 page 2 auto-fill table
- d0c3ff5 repeating row lines
- b978c0e page 2 header flex underlines
- 0a2d12f page 3 header dashed underlines
