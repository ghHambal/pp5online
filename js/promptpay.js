import QRCode from 'qrcode'

// CRC16/CCITT for EMVCo PromptPay
function crc16(str) {
  let crc = 0xFFFF
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1)
    }
  }
  return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0')
}

function pad(value) {
  return String(value).padStart(2, '0')
}

// สร้าง PromptPay EMVCo payload สำหรับเบอร์มือถือ
export function promptpayPayload(mobile, amount) {
  // แปลงเบอร์ไทย 0XXXXXXXXX → 00669XXXXXXXX
  const intl = '0066' + mobile.replace(/^0/, '')
  const accountInfo = '0016A000000677010111' + '0113' + intl
  const tag29 = '29' + pad(accountInfo.length) + accountInfo

  const amountStr = typeof amount === 'number' && amount > 0
    ? '54' + pad(amount.toFixed(2).length) + amount.toFixed(2)
    : ''

  const body = ['000201', '010212', tag29, '5802TH', '5303764', amountStr, '6304'].join('')
  return body + crc16(body)
}

// Render QR Code เป็น canvas element
export async function renderPromptPayQR(mobile, amount, canvasEl) {
  const payload = promptpayPayload(mobile, amount)
  await QRCode.toCanvas(canvasEl, payload, {
    width: 220,
    margin: 2,
    color: { dark: '#1a1a1a', light: '#ffffff' },
  })
  return payload
}

// Render QR Code เป็น data URL (สำหรับใส่ใน <img>)
export async function promptpayQRDataURL(mobile, amount) {
  const payload = promptpayPayload(mobile, amount)
  return QRCode.toDataURL(payload, {
    width: 260,
    margin: 2,
    color: { dark: '#1a1a1a', light: '#ffffff' },
  })
}
