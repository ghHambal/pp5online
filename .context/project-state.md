# Project State — ปพ.5 ออนไลน์

อัปเดตล่าสุด: 2026-05-16

## Overview
ระบบ "ปพ.5 ออนไลน์" สมุดคะแนนดิจิทัลสำหรับครูโรงเรียนมัธยม (อิสลาม)

## Stack
- **Frontend**: Vanilla JS (ES Modules) + Tailwind CSS CDN
- **Backend**: Supabase (PostgreSQL + Storage + Auth)
- **Hosting**: GitHub Pages (`ghhambal.github.io/pp5online`)
- **Repo**: `https://github.com/ghHambal/pp5online.git`
- **Supabase project**: `isupghduywzqbmnjgtip`

## หน้าหลัก
| หน้า | ไฟล์ | บทบาท |
|---|---|---|
| Login | `index.html` | ทุกบทบาท |
| Admin | `dashboard.html` | แอดมิน (+ ครูที่มี is_also_admin) |
| Teacher | `teacher.html` | ครูผู้สอน |
| Student | `student.html` | นักเรียน |

## ไฟล์ JS หลัก
- `js/teacher.js` — init หน้าครู, donation flow, promo popup
- `js/teacher-views.js` — render ทุก view ของครู (~8000+ บรรทัด)
- `js/teacher-class-forms.js` — form ลงทะเบียนรายวิชา
- `js/pp5-doc.js` — generate เอกสาร ปพ.5 (PDF 5 หน้า)
- `js/views.js` — Admin views + Settings
- `js/dashboard.js` — Admin init + modals
- `js/api.js` — Supabase data functions
- `js/storage.js` — File upload helpers

## Database Tables สำคัญ
- `profiles` — role (admin/teacher/student), is_also_admin
- `teachers` — ครู (category: สามัญ/ศาสนา)
- `departments` — กลุ่มสาระ (มี category, teacher_code)
- `master_subjects` — รายวิชา
- `classes` — ห้องเรียน (เชื่อม course_id)
- `students` — นักเรียน
- `payment_requests` — การชำระเงิน/donation
- `system_config` — key-value config ทั้งหมด

## Config Keys สำคัญ (system_config)
- `quotaMode`: 'payment' | 'school_sponsored'
- `donationMinAmount`, `donationAmountStep`, `donationQuickCount`
- `donationStickerTiers`: 5 tiers (49|🌱|...|#22C55E format)
- `donationSpecialFeatures`: icon|text|minTier format
- `donationPromoEnabled`: toggle popup โปรโมต
- `donationStickerImg1-5`: URLs รูปสติกเกอร์ PNG
- `donationGeminiKey1-4`: Gemini API keys สำรอง

## Donation System (school_sponsored mode)
5 tiers: 49/99/149/199/249 บาท
- ครูผู้จุดประกาย 🌱 #22C55E
- ครูผู้ร่วมฝัน ☕ #A855F7
- ครูผู้ร่วมสร้าง 🏅 #F59E0B
- ครูผู้ร่วมขับเคลื่อน 🐘 #3B82F6
- ครูผู้ก่อตั้งร่วม 👑 #D4A017

## User พิเศษ
- ครูรหัส 1087 (KruHambalWaji) = แอดมินด้วย (`is_also_admin = true`)
- สามารถสลับระหว่าง teacher.html ↔ dashboard.html โดยไม่ต้อง login ใหม่
