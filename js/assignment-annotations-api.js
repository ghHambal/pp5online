import { supabase } from './supabase.js'

export async function getAssignmentImageReviews(submissionIds) {
  const ids = [...new Set(submissionIds.filter(Boolean))]
  if (!ids.length) return []
  const { data, error } = await supabase.rpc('get_assignment_image_reviews', { p_submission_ids: ids })
  if (error) throw error
  return data ?? []
}

export async function getReviewImageUrl(path) {
  const { data, error } = await supabase.storage.from('assignment-reviews').createSignedUrl(path, 3600)
  if (error) throw error
  return data.signedUrl
}

export async function saveAssignmentImageReview({ submission, file, strokes, version, image }) {
  let path = null
  if (image) {
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError) throw authError
    if (!user) throw new Error('กรุณาเข้าสู่ระบบก่อนส่งผลตรวจ')
    path = `${user.id}/${submission.id}/${crypto.randomUUID()}.png`
    const { error } = await supabase.storage.from('assignment-reviews').upload(path, image, { contentType: 'image/png', upsert: false })
    if (error) throw error
  }
  // Never delete an upload on an ambiguous RPC error: the server may have committed it.
  const { data, error } = await supabase.rpc('save_assignment_image_review', {
    p_submission_id: submission.id, p_source_url: file.url,
    p_source_submitted_at: submission.submitted_at, p_strokes: strokes,
    p_expected_version: version, p_published_path: path,
  })
  if (error) throw error
  const saved = Array.isArray(data) ? data[0] : data
  if (!saved?.version) throw new Error('ไม่พบผลยืนยันการบันทึก กรุณาเปิดงานใหม่เพื่อตรวจสอบ')
  return saved
}
