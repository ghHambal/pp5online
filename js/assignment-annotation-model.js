export function sanitizeReviewStrokes(value) {
  if (!Array.isArray(value)) return []
  const finite = n => Number.isFinite(n) && n >= 0 && n <= 1
  const color = c => /^#[0-9a-f]{6}$/i.test(c) ? c : '#dc2626'
  return value.slice(0, 20000).flatMap(item => {
    if (!item || typeof item !== 'object') return []
    if (item.type === 'text' && finite(item.x) && finite(item.y)) return [{ type: 'text', x: item.x, y: item.y, text: String(item.text ?? '').slice(0, 500), color: color(item.color), width: Math.max(.001, Math.min(.05, Number(item.width) || .004)) }]
    if (item.type !== 'pen' || !Array.isArray(item.points)) return []
    const points = item.points.filter(p => Array.isArray(p) && finite(p[0]) && finite(p[1])).slice(0, 20000)
    return points.length ? [{ type: 'pen', points, color: color(item.color), width: Math.max(.001, Math.min(.05, Number(item.width) || .004)) }] : []
  })
}

export function drawReviewStrokes(context, strokes, width, height) {
  context.lineCap = 'round'
  context.lineJoin = 'round'
  for (const stroke of strokes) {
    context.strokeStyle = stroke.color
    context.fillStyle = stroke.color
    context.lineWidth = stroke.width * width
    if (stroke.type === 'text') {
      context.font = `${Math.max(16, stroke.width * width * 6)}px Sarabun, sans-serif`
      context.fillText(stroke.text, stroke.x * width, stroke.y * height)
    } else if (stroke.points.length) {
      context.beginPath()
      stroke.points.forEach(([x, y], i) => i ? context.lineTo(x * width, y * height) : context.moveTo(x * width, y * height))
      if (stroke.points.length === 1) {
        const [x, y] = stroke.points[0]
        context.lineTo(x * width + .1, y * height + .1)
      }
      context.stroke()
    }
  }
}

export function isCurrentReview(review, submission, file) {
  return review.source_url === file.url && new Date(review.source_submitted_at).getTime() === new Date(submission.submitted_at).getTime()
}
