import { supabase } from './supabase.js'
import { showToast } from './ui.js'

// ─── CSV Parser ───────────────────────────────────────────────────────────────
export function parseCSV(text) {
  const lines = text.trim().split('\n')
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''))
  return lines.slice(1).map(line => {
    const cols = line.match(/(".*?"|[^,]+|(?<=,)(?=,)|^(?=,)|(?<=,)$)/g) ?? []
    const row = {}
    headers.forEach((h, i) => {
      row[h] = (cols[i] ?? '').replace(/^"|"$/g, '').trim()
    })
    return row
  }).filter(r => Object.values(r).some(v => v !== ''))
}

// ─── Map CSV row → teachers table ────────────────────────────────────────────
function mapTeacher(row) {
  return {
    teacher_code: row['teacher_code'] || row['รหัสครู'] || null,
    full_name:    row['teacher_name'] || row['full_name'] || row['ชื่อ-สกุล'] || '',
    phone:        row['phone'] || row['เบอร์โทร'] || null,
    category:     row['category'] || row['ประเภท'] || null,
  }
}

// ─── Map CSV row → students table ────────────────────────────────────────────
function mapStudent(row) {
  return {
    student_code:  String(row['student_id'] || row['student_code'] || row['รหัสนักเรียน'] || ''),
    full_name:     row['student_name'] || row['full_name'] || row['ชื่อ-สกุล'] || '',
    main_room:     row['grade_general'] || row['main_room'] || row['ห้องสามัญ'] || row['ห้อง'] || null,
    religion_room: row['grade_religion'] || row['religion_room'] || row['ห้องศาสนา'] || null,
    gender:        row['gender'] || row['เพศ'] || null,
    image_url:     row['photo_url'] || row['image_url'] || null,
  }
}

// ─── Batch Import ─────────────────────────────────────────────────────────────
export async function importTeachers(rows, onProgress) {
  const records = rows.map(mapTeacher).filter(r => r.full_name)
  const CHUNK   = 50
  let done = 0

  for (let i = 0; i < records.length; i += CHUNK) {
    const chunk = records.slice(i, i + CHUNK)
    const { error } = await supabase
      .from('teachers')
      .upsert(chunk, { onConflict: 'teacher_code', ignoreDuplicates: false })
    if (error) throw error
    done += chunk.length
    onProgress?.(done, records.length)
  }
  return done
}

export async function importStudents(rows, onProgress) {
  const records = rows.map(mapStudent).filter(r => r.student_code && r.full_name)
  const CHUNK   = 100
  let done = 0

  for (let i = 0; i < records.length; i += CHUNK) {
    const chunk = records.slice(i, i + CHUNK)
    const { error } = await supabase
      .from('students')
      .upsert(chunk, { onConflict: 'student_code', ignoreDuplicates: false })
    if (error) throw error
    done += chunk.length
    onProgress?.(done, records.length)
  }
  return done
}

// ─── Preview HTML ─────────────────────────────────────────────────────────────
export function buildPreviewHTML(rows, type) {
  if (!rows.length) return `<p class="text-center text-gray-400 py-8">ไม่พบข้อมูล</p>`

  const mapped  = type === 'teachers' ? rows.map(mapTeacher) : rows.map(mapStudent)
  const headers = Object.keys(mapped[0])
  const preview = mapped.slice(0, 10)

  return `
    <div class="overflow-x-auto rounded-xl border border-gray-100">
      <table class="w-full text-xs">
        <thead class="bg-gray-50 text-gray-500 uppercase tracking-wide">
          <tr>${headers.map(h => `<th class="px-4 py-2 text-left">${h}</th>`).join('')}</tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${preview.map(r => `
            <tr class="hover:bg-gray-50">
              ${headers.map(h => `<td class="px-4 py-2 text-gray-700">${r[h] ?? '—'}</td>`).join('')}
            </tr>`).join('')}
        </tbody>
      </table>
      ${rows.length > 10
        ? `<p class="text-center text-xs text-gray-400 py-2">แสดง 10 จาก ${rows.length} แถว</p>`
        : ''}
    </div>`
}
