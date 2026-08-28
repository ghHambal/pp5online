import { supabase } from './supabase.js'

// ─── Image Compressor (Canvas API) ───────────────────────────────────────────
// maxWidth: px สูงสุด, quality: 0–1 (JPEG)
export function compressImage(file, { maxWidth = 800, quality = 0.82, background = null } = {}) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload  = e => {
      const img = new Image()
      img.onerror = reject
      img.onload  = () => {
        // คำนวณขนาดใหม่ (รักษาสัดส่วน)
        let w = img.naturalWidth
        let h = img.naturalHeight
        if (w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth }

        const canvas = document.createElement('canvas')
        canvas.width  = w
        canvas.height = h
        const context = canvas.getContext('2d')
        if (background) {
          context.fillStyle = background
          context.fillRect(0, 0, w, h)
        }
        context.drawImage(img, 0, 0, w, h)

        canvas.toBlob(
          blob => blob ? resolve(blob) : reject(new Error('compress failed')),
          'image/jpeg',
          quality
        )
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}

// ─── Upload helpers ───────────────────────────────────────────────────────────
async function uploadFile(bucket, path, fileOrBlob, contentType = 'image/jpeg') {
  const { error } = await supabase.storage
    .from(bucket)
    .upload(path, fileOrBlob, { upsert: true, contentType })
  if (error) throw error
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

// รูปลายเซ็น/โลโก้ใน system_config → บีบ max 1200px (ต้องชัด), quality 0.88
export async function uploadSystemAsset(key, file) {
  const blob = await compressImage(file, { maxWidth: 1200, quality: 0.88 })
  return uploadFile('system-assets', `${key}.jpg`, blob)
}

// รูปสติกเกอร์ PNG — upload ตรงโดยไม่ผ่าน canvas เพื่อรักษา transparency 100%
// (canvas.toBlob บางบราวเซอร์ไม่ preserve alpha channel ทำให้พื้นกลายเป็นขาว)
export async function uploadStickerPng(key, file) {
  return uploadFile('system-assets', `${key}.png`, file, 'image/png')
}

// รูปโปรไฟล์ครู → บีบ max 400px (thumbnail), quality 0.80
export async function uploadTeacherPhoto(teacherId, file) {
  const blob = await compressImage(file, { maxWidth: 400, quality: 0.80 })
  return uploadFile('teacher-photos', `${teacherId}/profile.jpg`, blob)
}

// รูปหัวหน้ากลุ่มสาระ (photo/sign) → บีบ max 600px
export async function uploadDeptAsset(deptCode, type, file) {
  // type: 'photo' | 'sign'
  const blob = await compressImage(file, { maxWidth: 600, quality: 0.85 })
  return uploadFile('system-assets', `dept/${deptCode}/${type}.jpg`, blob)
}

// รูปพื้นหลังดีไซน์เสื้อกีฬาสี แยกตามสีบ้าน (PNG) — upload ตรงโดยไม่ผ่าน canvas เพื่อรักษา transparency
// ใช้ colorId (UUID) แทนชื่อสีภาษาไทยในพาธ เพราะ Supabase Storage ปฏิเสธ object key ที่มีตัวอักษรนอก ASCII
export async function uploadShirtDesignColorImage(designId, colorId, file) {
  return uploadFile('shirt-designs', `${designId}/${colorId}.png`, file, 'image/png')
}

// ไฟล์ HTML แสดงดีไซน์เสื้อแบบ 3 มิติ (ออปชัน)
export async function uploadShirtDesignHtml(designId, file) {
  return uploadFile('shirt-designs', `${designId}.html`, file, 'text/html')
}

// รูปนักกีฬาฟุตซอลที่หัวหน้าทีมถ่ายเอง → บีบ max 480px (thumbnail การ์ดรายชื่อทีม), quality 0.80
export async function uploadAzfutsalPlayerPhoto(teamId, playerId, file) {
  const blob = await compressImage(file, { maxWidth: 480, quality: 0.80 })
  return uploadFile('azfutsal-assets', `players/${teamId}/${playerId}.jpg`, blob)
}

// รูปแนบใบสมัครสภานักเรียน → บีบ max 600px (thumbnail การ์ดผู้สมัคร), quality 0.82
export async function uploadCouncilApplicationPhoto(studentId, file) {
  const blob = await compressImage(file, { maxWidth: 600, quality: 0.82 })
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  return uploadFile('system-assets', `council/applications/${studentId}/${key}.jpg`, blob)
}

// ลายเซ็น/รูปประจำตัวครูที่ปรึกษาสภา, หัวหน้าฝ่ายกิจการนักเรียน, ผู้อำนวยการ (ระบบสภานักเรียน)
// — ใช้ตอนลงนามอนุมัติเอกสารโครงการ รองรับทั้งไฟล์ภาพและ Blob จาก canvas (วาดลายเซ็นเอง)
export async function uploadCouncilTeacherSignature(teacherId, fileOrBlob) {
  const blob = await compressImage(fileOrBlob, { maxWidth: 1000, quality: 0.9, background: '#fff' })
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  return uploadFile('system-assets', `council/signatures/${teacherId}/${key}.jpg`, blob)
}

// รูปพื้นหลังเทมเพลตเกียรติบัตร — ระบบกลาง (ครูคนใดก็ได้ ไม่ผูกเฉพาะสภาอีกต่อไป)
// ใช้ compressImage แปลงเป็น JPEG เสมอ — เหมาะกับพื้นหลังเต็มใบที่มักทึบอยู่แล้ว ไม่ต้องการ alpha
export async function uploadCertificateTemplateImage(file) {
  const blob = await compressImage(file, { maxWidth: 1600, quality: 0.9 })
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  return uploadFile('system-assets', `certificates/templates/${key}.jpg`, blob)
}

// รูปโลโก้/ตราสัญลักษณ์วางบนเทมเพลตเกียรติบัตร — อัปโหลดไฟล์ต้นฉบับตรงๆ ไม่ผ่าน canvas บีบอัดเลย
// (ต่างจากพื้นหลังด้านบน) เพราะโลโก้มักเป็น PNG พื้นหลังโปร่งใส ถ้าบีบอัดผ่าน canvas แล้วแปลงเป็น JPEG
// (ไม่มี alpha channel) ส่วนโปร่งใสจะถูกเติมเป็นสีดำอัตโนมัติ — ตรงปัญหาที่เคยเจอกับรูปสติกเกอร์มาก่อน
export async function uploadCertificateLogoImage(file) {
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const ext = file.type === 'image/png' ? 'png' : file.type === 'image/svg+xml' ? 'svg' : 'jpg'
  return uploadFile('system-assets', `certificates/logos/${key}.${ext}`, file, file.type || 'image/png')
}

// เกียรติบัตร/รางวัลแนบตอนสมัครสภานักเรียน — รับได้ทั้งรูปภาพ (บีบอัด) และ PDF (เก็บไฟล์ต้นฉบับตรงๆ ไม่ผ่าน canvas)
export async function uploadCouncilCertificate(studentId, file) {
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  if (file.type === 'application/pdf') {
    return uploadFile('system-assets', `council/certificates/${studentId}/${key}.pdf`, file, 'application/pdf')
  }
  const blob = await compressImage(file, { maxWidth: 1200, quality: 0.85 })
  return uploadFile('system-assets', `council/certificates/${studentId}/${key}.jpg`, blob)
}

export async function uploadCouncilTeacherPhoto(teacherId, file) {
  const blob = await compressImage(file, { maxWidth: 600, quality: 0.85 })
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  return uploadFile('system-assets', `council/teachers/${teacherId}/${key}.jpg`, blob)
}

// ลายเซ็นระบบค่าย TERANGGANU — รองรับทั้งไฟล์ภาพและ Blob จาก canvas
export async function uploadTerangganuSignature(profileId, fileOrBlob) {
  const blob = await compressImage(fileOrBlob, { maxWidth: 1000, quality: 0.9, background: '#fff' })
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  return uploadFile('terangganu-assets', `signatures/${profileId}/${key}.jpg`, blob)
}

export async function uploadTerangganuDirectorSignature(fileOrBlob) {
  const blob = await compressImage(fileOrBlob, { maxWidth: 1000, quality: 0.9, background: '#fff' })
  return uploadFile('terangganu-assets', 'director-signature.jpg', blob)
}

export async function uploadTerangganuReceiptLogo(fileOrBlob) {
  const blob = await compressImage(fileOrBlob, { maxWidth: 1000, quality: 0.92, background: '#fff' })
  return uploadFile('terangganu-assets', 'receipt-logo.jpg', blob)
}

// ลายเซ็นผู้ออกให้บัตร QR Code ใหม่ (พิมพ์ลงใบเสร็จ "ผู้ออกให้" อัตโนมัติ แทนเซ็นสดทุกใบ) —
// ลายเซ็นเดียวใช้ร่วมกันทั้งระบบ ไม่แยกต่อครู รองรับทั้งไฟล์ภาพและ Blob จาก canvas
export async function uploadQrIssuerSignature(fileOrBlob) {
  const blob = await compressImage(fileOrBlob, { maxWidth: 1000, quality: 0.9, background: '#fff' })
  return uploadFile('system-assets', 'qr-issuer-signature.jpg', blob)
}

// รูปแนบประกาศ (เช่น อินโฟกราฟิก) → บีบ max 1600px คุณภาพสูงเพราะเป็นภาพนำเสนอ
export async function uploadAnnouncementImage(file) {
  const blob = await compressImage(file, { maxWidth: 1600, quality: 0.88 })
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  return uploadFile('system-assets', `announcements/${key}.jpg`, blob)
}

// ภาพประมวลกีฬาสี (บรรยากาศ/การแข่งขัน) → บีบ max 1600px คุณภาพสูงเพราะเปิดดูเต็มจอ+ดาวน์โหลดได้
export async function uploadGalleryPhoto(eventId, colorId, file) {
  const blob = await compressImage(file, { maxWidth: 1600, quality: 0.85 })
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  return uploadFile('sports-gallery', `${eventId}/${colorId}/${key}.jpg`, blob)
}

// รูปแนบในแชทครูผู้สนับสนุน → บีบ max 1200px quality 0.85 (พอชัดในแชท ไม่หนักเกิน)
export async function uploadChatImage(roomId, file) {
  const blob = await compressImage(file, { maxWidth: 1200, quality: 0.85 })
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  return uploadFile('chat-images', `room_${roomId}/${key}.jpg`, blob)
}

// ไฟล์งานที่มอบหมาย/ไฟล์ที่นักเรียนส่ง — เก็บไฟล์ต้นฉบับตรงๆ ไม่บีบ (รองรับ PDF/Word/PPT/รูป ฯลฯ)
export async function uploadAssignmentFile(file, prefix) {
  const ext = file.name.split('.').pop()
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const path = `${prefix}/${key}.${ext}`
  const { error } = await supabase.storage
    .from('assignment-files')
    .upload(path, file, { upsert: true })
  if (error) throw error
  const { data } = supabase.storage.from('assignment-files').getPublicUrl(path)
  return { url: data.publicUrl, name: file.name }
}
