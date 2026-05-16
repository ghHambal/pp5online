# Design Decisions

## Architecture
- **Vanilla JS only** — ไม่ใช้ React/Vue เพราะ deploy บน GitHub Pages ง่ายกว่า
- **ES Modules** — import/export จริง ไม่ใช้ bundle
- **Tailwind CDN** — ไม่ใช้ JIT build → dynamic class ต้องใช้ inline style แทน

## Database
- `departments.category` = 'สามัญ' | 'ศาสนา' — เพิ่มเพื่อ filter กลุ่มสาระ
- `profiles.is_also_admin` boolean — สำหรับ dual-role user (ไม่เปลี่ยน primary role)
- `payment_requests.slip_url` — บังคับ upload slip ก่อน approve

## Donation System
- Config format `donationStickerTiers`: `amount|emoji|title|note|#hexcolor`
- Config format `donationSpecialFeatures`: `icon|text|minTier`
- `donationStickerImg1-5` ใน system_config — URL จาก Supabase Storage
- **ไม่บีบ PNG ผ่าน canvas** — canvas.toBlob ทำ transparent → white, upload raw แทน
- Tier index 1-based (1-5) เทียบกับ feature minTier

## ปพ.5 Document
- ใช้ HTML+CSS print แทน PDF library
- Page 2 header: CSS Grid 2 columns + Flex rows + `flex: 1` underlines
- Page 2 table: `flex: 1; height: 0` + `std-fill-row` ยืดเต็ม A4
- Fill row ใช้ `repeating-linear-gradient` แสดงเส้นทุก 7mm
- เส้นประ: `.3mm dashed #555`

## Supabase
- Storage bucket: `system-assets` สำหรับ logo/sign/stickers
- Storage bucket: `teacher-photos`, `payment-slips`
- RLS เปิดทุกตาราง ยกเว้น `system_config` (ยังไม่ได้เปิด — แจ้งผู้ใช้แล้ว)
