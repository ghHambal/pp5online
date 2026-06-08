// ป้องกันท่าทางปัดหน้าจอลงเพื่อรีเฟรช (pull-to-refresh) บนมือถือ/แอปที่ติดตั้ง (PWA)
// ใช้ touch event แทน CSS overscroll-behavior เพราะเบราว์เซอร์/อุปกรณ์รองรับไม่เท่ากัน
// (กันคะแนน/ข้อมูลที่กำลังกรอกหายจากการรีเฟรชโดยไม่ตั้งใจ — ใช้ปุ่มรีเฟรชข้างโปรไฟล์แทน)
//
// สำคัญ: ต้องเช็ค "อยู่บนสุดหรือไม่" สดใหม่ทุกครั้งที่ลากนิ้ว (ไม่ใช่เช็คครั้งเดียวตอนแตะ)
// เพราะผู้ใช้มักปัดขึ้นก่อน (ดูเนื้อหา) แล้วลากนิ้วกลับลงทันทีในการแตะครั้งเดียวกัน —
// ถ้าตัดสินใจค้างไว้ตั้งแต่ touchstart จะหลุดผ่านกรณีนี้ไปกระตุ้น native pull-to-refresh ได้
// และต้องเรียก preventDefault() ตั้งแต่จังหวะแรกที่ตรวจพบว่าลากลงขณะอยู่บนสุด —
// ถ้าปล่อยให้ลากลงไปก่อนหลายจังหวะ เบราว์เซอร์ (โดยเฉพาะ Chrome/Android) อาจ
// "คอมมิต" ท่าทาง pull-to-refresh ไปแล้ว ทำให้ touchmove กลายเป็น non-cancelable
export function blockPullToRefresh() {
  let lastY = 0

  document.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return
    lastY = e.touches[0].clientY
  }, { passive: true })

  document.addEventListener('touchmove', e => {
    if (e.touches.length !== 1) return
    const y = e.touches[0].clientY
    const movingDown = y > lastY
    lastY = y
    if (!movingDown) return

    const scroller = e.target.closest?.('.overflow-y-auto, main, [class*="overflow-y"]')
    const atTop = (scroller ? scroller.scrollTop <= 0 : true) && window.scrollY <= 0
    if (atTop) e.preventDefault()
  }, { passive: false })
}
