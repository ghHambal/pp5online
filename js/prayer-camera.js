let readerPromise

async function loadPrayerQrReader() {
  if (window.Html5Qrcode) return window.Html5Qrcode
  if (!readerPromise) {
    readerPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'
      script.onload = () => window.Html5Qrcode
        ? resolve(window.Html5Qrcode)
        : reject(new Error('โหลดตัวอ่าน QR Code ไม่สำเร็จ'))
      script.onerror = () => reject(new Error('โหลดตัวอ่าน QR Code ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต'))
      document.head.appendChild(script)
    }).catch(error => {
      readerPromise = null
      throw error
    })
  }
  return readerPromise
}

// Shared camera setup for the noon prayer scanner and Asr tracking.
export async function startPrayerCamera(readerId, onDecoded) {
  const Html5Qrcode = await loadPrayerQrReader()
  const scanner = new Html5Qrcode(readerId)
  await scanner.start(
    { facingMode: 'environment' },
    { fps: 25, aspectRatio: 1.0 },
    onDecoded,
    () => {}
  )
  return scanner
}
