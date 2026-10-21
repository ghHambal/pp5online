// Pure donation helpers. Views must not import the teacher page entry point.
export const _toPositiveInt = (value, fallback) => {
  const n = parseInt(value, 10)
  return Number.isFinite(n) && n > 0 ? n : fallback
}

// คืน tier index (1-4) ของ approved donation — 0 = ไม่มี
export const _getDonorTierIndex = (cfg, tiers, amount) => {
  if (!amount) return 0
  const idx = [...tiers].map((t,i) => ({t,i})).reverse().find(({t}) => amount >= t.amount)?.i
  return idx !== undefined ? idx + 1 : 0
}

export const _parseDonationStickers = (cfg, minAmount, stepAmount) => {
  const raw = String(cfg.donationStickerTiers ?? '').trim()
  const defaults = [
    [49,  '🌱', 'ครูผู้จุดประกาย',     'คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝',    '#22C55E'],
    [99,  '☕', 'ครูผู้ร่วมฝัน',       'คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭',          '#A855F7'],
    [149, '🏅', 'ครูผู้ร่วมสร้าง',     'คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱','#F59E0B'],
    [199, '🐘', 'ครูผู้ร่วมขับเคลื่อน','คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊',   '#3B82F6'],
    [249, '👑', 'ครูผู้ก่อตั้งร่วม',   'คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️',  '#D4A017'],
  ]
  const rows = raw ? raw.split('\n').map(line => line.trim()).filter(Boolean).map(line => {
    const [amount, sticker, title, note, color] = line.split('|').map(s => s.trim())
    return {
      amount: _toPositiveInt(amount, 0),
      sticker: sticker || '🏅',
      title: title || `ผู้สนับสนุน ${amount || ''} บาท`,
      note: note || 'ขอบคุณที่ช่วยสนับสนุนการพัฒนาระบบครับ',
      color: color || '',
    }
  }) : defaults.map(([amount, sticker, title, note, color]) => ({ amount, sticker, title, note, color }))
  const sorted = rows.filter(t => t.amount > 0).sort((a, b) => a.amount - b.amount)
  // auto-link donationStickerImgN → tier N (override emoji ถ้ามีรูป upload)
  return sorted.map((t, i) => {
    const imgUrl = cfg[`donationStickerImg${i+1}`] ?? ''
    if (imgUrl && /^https?:\/\//.test(imgUrl)) return { ...t, sticker: imgUrl }
    return t
  })
}

