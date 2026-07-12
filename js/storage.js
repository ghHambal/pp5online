import { supabase } from './supabase.js'

// ─── Image Compressor (Canvas API) ───────────────────────────────────────────
// maxWidth: px สูงสุด, quality: 0–1 (JPEG)
export function compressImage(file, { maxWidth = 800, quality = 0.82 } = {}) {
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
        canvas.getContext('2d').drawImage(img, 0, 0, w, h)

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

// รูปพื้นหลังดีไซน์เสื้อกีฬาสี (PNG) — upload ตรงโดยไม่ผ่าน canvas เพื่อรักษา transparency
export async function uploadShirtDesignImage(designId, file) {
  return uploadFile('shirt-designs', `${designId}.png`, file, 'image/png')
}

// ไฟล์ HTML แสดงดีไซน์เสื้อแบบ 3 มิติ (ออปชัน)
export async function uploadShirtDesignHtml(designId, file) {
  return uploadFile('shirt-designs', `${designId}.html`, file, 'text/html')
}
