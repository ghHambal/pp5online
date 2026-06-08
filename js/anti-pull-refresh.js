// ป้องกันท่าทางปัดหน้าจอลงเพื่อรีเฟรช (pull-to-refresh) บนมือถือ/แอปที่ติดตั้ง (PWA)
// ใช้ touch event แทน CSS overscroll-behavior เพราะเบราว์เซอร์/อุปกรณ์รองรับไม่เท่ากัน
// (กันคะแนน/ข้อมูลที่กำลังกรอกหายจากการรีเฟรชโดยไม่ตั้งใจ — ใช้ปุ่มรีเฟรชข้างโปรไฟล์แทน)
//
// สำคัญ: ต้องตัดสินใจ "บล็อกหรือไม่" ตั้งแต่ touchstart แล้วเรียก preventDefault()
// ตั้งแต่ touchmove ครั้งแรกที่ปัดลง — ถ้ารอจนกว่าจะขยับลงมาก ๆ ก่อนค่อยเรียก
// เบราว์เซอร์ (โดยเฉพาะ Chrome/Android) อาจ "ตัดสินใจ" คอมมิตท่าทาง pull-to-refresh
// ไปแล้ว ทำให้ touchmove กลายเป็น non-cancelable และ preventDefault() ไม่มีผล
export function blockPullToRefresh() {
  let startY = 0
  let blocking = false

  document.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) { blocking = false; return }
    startY = e.touches[0].clientY
    const scroller = e.target.closest?.('.overflow-y-auto, main, [class*="overflow-y"]')
    blocking = (scroller ? scroller.scrollTop <= 0 : true) && window.scrollY <= 0
  }, { passive: true })

  document.addEventListener('touchmove', e => {
    if (!blocking || e.touches.length !== 1) return
    if (e.touches[0].clientY - startY > 0) e.preventDefault()
  }, { passive: false })
}
