// ป้องกันท่าทางปัดหน้าจอลงเพื่อรีเฟรช (pull-to-refresh) บนมือถือ
// ใช้ touch event แทน CSS overscroll-behavior เพราะเบราว์เซอร์/อุปกรณ์รองรับไม่เท่ากัน
// (กันคะแนน/ข้อมูลที่กำลังกรอกหายจากการรีเฟรชโดยไม่ตั้งใจ — ใช้ปุ่มรีเฟรชข้างโปรไฟล์แทน)
export function blockPullToRefresh() {
  let startY = 0

  document.addEventListener('touchstart', e => {
    startY = e.touches[0]?.clientY ?? 0
  }, { passive: true })

  document.addEventListener('touchmove', e => {
    const y = e.touches[0]?.clientY ?? 0
    if (y <= startY) return // ปัดขึ้น/ไม่ขยับ — ปล่อยผ่าน

    const scroller = e.target.closest?.('.overflow-y-auto, main, [class*="overflow-y"]')
    const atTop = (scroller ? scroller.scrollTop <= 0 : true) && window.scrollY <= 0
    if (atTop) e.preventDefault()
  }, { passive: false })
}
