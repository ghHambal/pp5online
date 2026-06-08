// ป้องกันท่าทางปัดหน้าจอลงเพื่อรีเฟรช (pull-to-refresh) บนมือถือ/แอปที่ติดตั้ง (PWA)
// ใช้ touch event แทน CSS overscroll-behavior เพราะเบราว์เซอร์/อุปกรณ์รองรับไม่เท่ากัน
// (กันคะแนน/ข้อมูลที่กำลังกรอกหายจากการรีเฟรชโดยไม่ตั้งใจ — ใช้ปุ่มรีเฟรชข้างโปรไฟล์แทน)
//
// หาตัว scroll container จริงด้วย "computed style" แทนการเดาจากชื่อ class —
// เพราะในแอปมีทั้ง overflow-y-auto, overflow-auto, overflow-y-scroll ปะปนกัน
// (เช่น #modal-body ใช้ overflow-auto) การ match แค่ชื่อ class ทำให้หลุดในบางหน้า
function findScrollableAncestor(el) {
  while (el && el !== document.body && el !== document.documentElement) {
    const cs = getComputedStyle(el)
    if ((cs.overflowY === 'auto' || cs.overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
      return el
    }
    el = el.parentElement
  }
  return null
}

export function blockPullToRefresh() {
  let lastY = 0
  let scroller = null

  document.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) { scroller = null; return }
    lastY = e.touches[0].clientY
    scroller = findScrollableAncestor(e.target)
  }, { passive: true })

  document.addEventListener('touchmove', e => {
    if (e.touches.length !== 1) return
    const y = e.touches[0].clientY
    const movingDown = y > lastY
    lastY = y
    if (!movingDown) return

    // เช็คตำแหน่ง scroll สดทุกครั้ง — กันกรณีปัดขึ้นแล้วลากกลับลงในการแตะเดียวกัน
    const atTop = scroller ? scroller.scrollTop <= 0 : window.scrollY <= 0
    if (atTop) e.preventDefault()
  }, { passive: false })
}
