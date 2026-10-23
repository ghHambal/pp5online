const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
}
const reply = (body, status = 200) => new Response(JSON.stringify(body), { status, headers })
const gasUrlPattern = /^https:\/\/script\.google\.com\/macros\/s\/[a-zA-Z0-9_-]+\/exec$/
const redirectHosts = new Set(['script.google.com', 'script.googleusercontent.com'])

export function validateGasUrl(value, redirect = false) {
  const url = new URL(String(value))
  if (url.protocol !== 'https:' || url.username || url.password || url.port || (redirect ? !redirectHosts.has(url.hostname) : !gasUrlPattern.test(url.toString()))) {
    throw new Error('Central GAS URL ต้องเป็น https://script.google.com/macros/s/.../exec')
  }
  return url
}

export async function callGas(gasUrl, payload, fetchImpl = fetch) {
  let url = validateGasUrl(gasUrl)
  for (let attempt = 0; attempt <= 5; attempt++) {
    const response = await fetchImpl(url.toString(), {
      method: 'POST',
      redirect: 'manual',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get('location')
      if (!location) throw new Error('GAS ส่ง redirect ที่ไม่ครบ')
      url = validateGasUrl(new URL(location, url).toString(), true)
      continue
    }
    if (!response.ok) throw new Error('GAS ตอบ HTTP ' + response.status)
    const result = await response.json()
    if (!result || typeof result !== 'object') throw new Error('GAS ตอบกลับไม่ใช่ JSON')
    return result
  }
  throw new Error('GAS ส่ง redirect มากเกินไป')
}

function decodeBase64(value) {
  const raw = String(value ?? '').trim()
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(raw) || raw.length < 16) throw new Error('ข้อมูล PDF ไม่ถูกต้อง')
  const bytes = Uint8Array.from(atob(raw), char => char.charCodeAt(0))
  if (bytes.length < 4 || String.fromCharCode(...bytes.slice(0, 4)) !== '%PDF') throw new Error('ไฟล์ที่ส่งมาต้องเป็น PDF')
  return bytes
}

async function sha256(bytes) {
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map(value => value.toString(16).padStart(2, '0')).join('')
}

export function createLessonPlanDriveHandler({ createClient, fetchImpl = fetch, env }) {
  return async req => {
    if (req.method === 'OPTIONS') return new Response('ok', { headers })
    if (req.method !== 'POST') return reply({ ok: false, error: 'method not allowed' }, 405)
    let stage = 'auth'
    try {
      const authorization = req.headers.get('authorization') || ''
      const token = authorization.match(/^Bearer\s+(.+)$/i)?.[1]
      if (!token) return reply({ ok: false, error: 'กรุณาเข้าสู่ระบบใหม่' }, 401)
      const caller = createClient(env.url, env.anonKey, { global: { headers: { Authorization: authorization } }, auth: { persistSession: false, autoRefreshToken: false } })
      const { data: { user }, error: authError } = await caller.auth.getUser(token)
      if (authError || !user) return reply({ ok: false, error: 'กรุณาเข้าสู่ระบบใหม่' }, 401)
      const admin = createClient(env.url, env.serviceKey, { auth: { persistSession: false, autoRefreshToken: false } })
      const [{ data: profile }, { data: teacher }] = await Promise.all([
        admin.from('profiles').select('role,is_also_admin').eq('id', user.id).maybeSingle(),
        admin.from('teachers').select('id,profile_id,full_name,dept').eq('profile_id', user.id).maybeSingle(),
      ])
      const isAdmin = profile?.role === 'admin' || profile?.is_also_admin === true
      if (!teacher && !isAdmin) return reply({ ok: false, error: 'ไม่พบสิทธิ์ครูผู้สอน' }, 403)
      stage = 'validate'
      const body = await req.json()
      const courseId = Number(body.courseId), academicYear = Number(body.academicYear), semester = Number(body.semester), weekNo = Number(body.weekNo)
      const fileName = String(body.fileName || '').trim()
      if (!Number.isInteger(courseId) || courseId < 1 || !Number.isInteger(academicYear) || ![1, 2].includes(semester) || !Number.isInteger(weekNo) || weekNo < 1 || weekNo > 60 || !/^[^\\/]{1,180}\.pdf$/i.test(fileName)) throw new Error('ข้อมูลคอร์ส/ภาคเรียน/สัปดาห์/ชื่อไฟล์ไม่ถูกต้อง')
      const bytes = decodeBase64(body.pdfBase64)
      if (bytes.byteLength > 12 * 1024 * 1024) throw new Error('ไฟล์ PDF ใหญ่เกิน 12 MB')
      const { data: course, error: courseError } = await admin.from('master_subjects').select('id,teacher_id,dept,subject_code,subject_name').eq('id', courseId).maybeSingle()
      if (courseError || !course) throw new Error('ไม่พบรายวิชา')
      if (!isAdmin && Number(course.teacher_id) !== Number(teacher.id)) return reply({ ok: false, error: 'ไม่มีสิทธิ์จัดเก็บรายวิชานี้' }, 403)
      stage = 'config'
      const [{ data: configs, error: configError }, { data: ownerTeacher, error: ownerError }] = await Promise.all([
        admin.from('system_config').select('key,value').eq('key', 'centralGasUrl').maybeSingle(),
        admin.from('teachers').select('id,full_name,dept').eq('id', course.teacher_id).maybeSingle(),
      ])
      if (configError) throw configError
      if (ownerError) throw ownerError
      const cfg = configs ? { [configs.key]: configs.value } : {}
      if (!cfg.centralGasUrl) throw new Error('ยังไม่ได้ตั้งค่า Central GAS URL')
      const archiveTeacherId = Number(course.teacher_id)
      const { data: driveSettings, error: settingsError } = await admin
        .from('teacher_lesson_plan_drive_settings')
        .select('dept_code,root_folder_id,create_folders,replace_mode,enabled')
        .eq('teacher_id', archiveTeacherId)
        .eq('academic_year', academicYear)
        .eq('semester', semester)
        .maybeSingle()
      if (settingsError) throw settingsError
      if (!driveSettings?.enabled || !driveSettings.root_folder_id) throw new Error('ยังไม่ได้ตั้งค่าโฟลเดอร์ Drive ส่วนตัวของคุณสำหรับภาคเรียนนี้')
      if (driveSettings.dept_code && String(course.dept || '').trim().toUpperCase() !== String(driveSettings.dept_code).trim().toUpperCase()) throw new Error('คอร์สนี้อยู่กลุ่มสาระ ' + (course.dept || 'ไม่ระบุ') + ' ไม่ตรงกับโฟลเดอร์ส่วนตัวที่ตั้งไว้ (' + driveSettings.dept_code + ')')
      const checksum = await sha256(bytes)
      stage = 'capabilities'
      const capability = await callGas(cfg.centralGasUrl, { action: 'lesson_plan_archive_capabilities' }, fetchImpl)
      if (capability.ok !== true || Number(capability.lessonPlanArchiveVersion) !== 1) throw new Error('Central GAS ยังไม่รองรับการจัดเก็บแผนรายสัปดาห์ กรุณา Deploy เวอร์ชันล่าสุดของ gas/pp5-sync.gs')
      stage = 'archive'
      const result = await callGas(cfg.centralGasUrl, { action: 'archive_lesson_plan_pdf', rootFolderId: driveSettings.root_folder_id, teacherName: ownerTeacher?.full_name || teacher?.full_name || 'ผู้สอน', weekNo, fileName, pdfBase64: body.pdfBase64, createFolders: driveSettings.create_folders !== false, replaceMode: driveSettings.replace_mode === 'version' ? 'version' : 'replace' }, fetchImpl)
      if (result.ok !== true || !result.driveFileId) throw new Error(result.error || 'Central GAS บันทึกไฟล์ไม่สำเร็จ')
      const { data: archive, error: archiveError } = await admin.from('lesson_plan_archives').upsert({ course_id: courseId, teacher_id: archiveTeacherId, academic_year: academicYear, semester, week_no: weekNo, status: 'completed', drive_root_folder_id: driveSettings.root_folder_id, drive_week_folder_id: result.driveWeekFolderId || null, drive_teacher_folder_id: result.driveTeacherFolderId || null, drive_file_id: result.driveFileId, drive_url: result.driveUrl || null, file_name: fileName, checksum_sha256: checksum, plan_count: Number(body.planCount) || 0, room_count: Number(body.roomCount) || 0, file_size_bytes: bytes.byteLength, replaced_file_id: result.replacedFileId || null, error_message: null, created_by: user.id, updated_at: new Date().toISOString() }, { onConflict: 'course_id,academic_year,semester,week_no' }).select().single()
      if (archiveError) throw archiveError
      return reply({ ok: true, archive, driveUrl: result.driveUrl, driveFileId: result.driveFileId })
    } catch (error) {
      return reply({ ok: false, stage, error: error?.message || 'จัดเก็บแผนไม่สำเร็จ' }, 400)
    }
  }
}
