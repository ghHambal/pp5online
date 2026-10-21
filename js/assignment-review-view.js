const esc = text => String(text ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))

export function renderStudentImageReviews(submission) {
  if (!submission) return ''
  if (submission.image_review_error) return '<p class="text-xs text-amber-700 mt-2">เปิดผลตรวจแบบเขียนไม่สำเร็จ กรุณาโหลดหน้าใหม่เพื่อลองอีกครั้ง</p>'
  const reviews = submission.image_reviews ?? []
  if (!reviews.length) return ''
  return `<div class="mt-3 rounded-xl border border-indigo-100 bg-indigo-50 p-3"><p class="text-xs font-bold text-indigo-700 mb-2">✍️ งานที่ครูตรวจแล้ว</p>${reviews.map(review => {
    const current = new Date(review.source_submitted_at).getTime() === new Date(submission.submitted_at).getTime()
      && (submission.file_urls ?? []).some(file => file.url === review.source_url)
    return `<div class="mb-3 last:mb-0"><p class="text-xs text-indigo-700 mb-1">${current ? 'ผลตรวจงานรอบปัจจุบัน' : 'ผลตรวจงานรอบก่อน'} · ${esc(new Date(review.source_submitted_at).toLocaleString('th-TH', {day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}))}</p><a href="${esc(review.image_url)}" target="_blank" rel="noopener" class="block"><img src="${esc(review.image_url)}" alt="งานที่ครูเขียนตรวจแล้ว" loading="lazy" class="max-h-64 w-full object-contain rounded-lg bg-white"><span class="block text-xs font-bold text-indigo-700 mt-1">เปิดดูฉบับตรวจ ↗</span></a></div>`
  }).join('')}</div>`
}
