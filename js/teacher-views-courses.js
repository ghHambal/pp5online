import {
  getMySubjects, getMyClasses, getDepartments, getTeachers, getMasterSubjects,
  updateMyProfile, updateSubject, deleteSubject,
  getCourseDocPage2, saveCourseDocPage2, findCurriculumStandards,
  getCourseDocLangSettings, saveCourseDocLangSettings, saveCourseDocLangEditors,
  getTeacherPackageAccess, getSystemConfig, getRoomsByGrade,
  getUniqueRooms, getUniqueReligionRooms, getSubjectCoTeachers,
} from './api.js'
import { supabase } from './supabase.js'
import { uploadTeacherPhoto } from './storage.js'
import { openPP5CourseModal } from './pp5-doc.js'
import { showToast } from './ui.js'
import { _openCourseColsModal } from './teacher-views-grades.js'
import { _openLessonPlanApproval } from './teacher-views.js'
import {
  setContent, setTitle, setActiveNav, _htmlEsc, formatPhone,
  SELECT_CLS, INPUT_CLS, GRADE_OPTS, CREDIT_OPTS,
} from './teacher-views-utils.js'

export async function renderMyCourses(teacher) {
  setActiveNav('my-courses')
  setTitle('คอร์สวิชาของฉัน', 'courses')
  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)
  try {
    const [subjects, allClasses] = await Promise.all([
      teacher ? getMySubjects(teacher.id) : getMasterSubjects().catch(()=>[]),
      teacher ? getMyClasses(teacher.id).catch(()=>[]) : Promise.resolve([]),
    ])
    const subjects_orig = subjects // keep for compat
    setContent(`<div class="animate-fade">
      <div class="flex justify-end mb-4">
        <button onclick="window._openCourseForm()"
          class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
          <span>＋</span> เปิดคอร์สใหม่
        </button>
      </div>
      ${!subjects.length ? `
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคอร์สวิชา</p>
        <p class="text-xs mt-1">กดปุ่ม "เปิดคอร์สใหม่" เพื่อเริ่มต้น</p>
      </div>` : `
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
            <tr>
              <th class="px-4 py-3 text-left">รหัส / ชื่อวิชา</th>
              <th class="px-4 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
              <th class="px-4 py-3 text-center hidden md:table-cell">ชั้น</th>
              <th class="px-4 py-3 text-center hidden md:table-cell">กิต</th>
              <th class="px-4 py-3 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${subjects.map(s=>`
            <tr class="hover:bg-gray-50 transition">
              <td class="px-4 py-3">
                <p class="font-semibold text-gray-800">${s.subject_name}</p>
                <p class="text-xs font-mono text-indigo-500">${s.subject_code??'—'}</p>
              </td>
              <td class="px-4 py-3 hidden sm:table-cell">
                ${s.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-emerald-50 text-emerald-700">${s.dept}</span>`:'—'}
              </td>
              <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.grade_level??'—'}</td>
              <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.credit??'—'}</td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end gap-1 flex-wrap">
                  <button onclick="window._openRegisterClass(${s.id})"
                    class="text-xs bg-emerald-600 text-white px-2 py-1.5 rounded-lg hover:bg-emerald-700">
                    ＋ห้อง
                  </button>
                  <button class="ccm-open-btn text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2 py-1.5 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition"
                    data-sid="${s.id}" data-sname="${_htmlEsc(s.subject_name)}">
                    ⚙️ คอลัมน์
                  </button>
                  <button onclick="window._openCourseDocPage2(${s.id})"
                    class="text-xs text-emerald-700 hover:text-emerald-900 font-medium px-2 py-1.5 border border-emerald-200 rounded-lg hover:bg-emerald-50">
                    คำอธิบายฯ
                  </button>
                  <button class="lesson-plan-btn text-xs text-sky-700 hover:text-sky-900 font-medium px-2 py-1.5 border border-sky-200 rounded-lg hover:bg-sky-50 transition"
                    data-sid="${s.id}">
                    📋 ใบขออนุญาต
                  </button>
                  <button class="pp5-course-btn text-xs text-violet-700 hover:text-violet-900 font-medium px-2 py-1.5 border border-violet-200 rounded-lg hover:bg-violet-50 transition"
                    data-sid="${s.id}">
                    💾 ปพ.5
                  </button>
                  <button onclick="window._editCourse(${s.id})"
                    class="text-xs text-gray-500 hover:text-gray-700 font-medium px-2 py-1.5 border border-gray-200 rounded-lg">
                    แก้ไข
                  </button>
                  <button class="cd2-del-course-btn text-xs text-red-400 hover:text-red-600 font-medium px-2 py-1.5 border border-red-100 rounded-lg"
                    data-id="${s.id}" data-name="${_htmlEsc(s.subject_name)}">
                    ลบ
                  </button>
                </div>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>`}
    </div>`)

    // ผูก event ลบคอร์ส
    document.querySelectorAll('.cd2-del-course-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        window._deleteCourse(Number(btn.dataset.id), btn.dataset.name)
      })
    })

    // ผูก event ปุ่มจัดการคอลัมน์คะแนนระดับคอร์ส
    document.querySelectorAll('.ccm-open-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        _openCourseColsModal(parseInt(btn.dataset.sid), btn.dataset.sname, allClasses)
      })
    })

    // ผูก event ปุ่มใบขออนุญาตใช้แผน
    document.querySelectorAll('.lesson-plan-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const sid = parseInt(btn.dataset.sid)
        const subj = subjects.find(s => s.id === sid)
        if (!subj) return
        const courseClasses = allClasses.filter(c => c.course_id === sid || c.master_subjects?.id === sid)
        const { getSystemConfig: _cfg, getDepartments: _depts } = await import('./api.js')
        const [cfg, depts] = await Promise.all([_cfg().catch(()=>({})), _depts().catch(()=>[])])
        _openLessonPlanApproval(subj, courseClasses, teacher, cfg, depts)
      })
    })

    // ผูก event ปุ่ม ปพ.5 ระดับคอร์ส
    document.querySelectorAll('.pp5-course-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = parseInt(btn.dataset.sid)
        const courseClasses = allClasses.filter(c => c.course_id === sid || c.master_subjects?.id === sid)
        if (courseClasses.length === 1) {
          openPP5Doc(courseClasses[0].id)
        } else {
          openPP5CourseModal(courseClasses)
        }
      })
    })

  } catch { showToast('โหลดข้อมูลไม่สำเร็จ','error') }

}

const COURSE_DOC_LANGS = {
  th: {
    key: 'th', dir: 'ltr', aiLang: 'ภาษาไทยที่เป็นทางการ',
    label: 'ภาษาไทย', title: 'คำอธิบายฯ', close: 'ปิด', save: 'บันทึก', saving: 'กำลังบันทึก...',
    helpTitle: 'ช่วยเติมข้อมูล', helpSub: 'ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล',
    topicLabel: 'บท / เรื่องที่สอน (เพิ่มได้หลายบท)', topicPlaceholder: 'เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ', addTopic: 'เพิ่มบท',
    btnCurriculum: 'ค้นหลักสูตร', btnCurriculumSub: 'ฐานข้อมูลแกนกลาง', btnCurriculumLoading: 'กำลังค้น...',
    btnAI: 'ให้ AI ร่าง', btnAISub: 'Gemini + บทที่ระบุ', btnAILoading: 'AI กำลังร่าง...',
    btnImg: 'อ่านจากรูป', btnImgSub: 'AI อ่านภาพถ่าย', btnImgLoading: 'กำลังอ่าน...',
    descLabel: 'คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม', descPlaceholder: 'พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ',
    dirLabel: 'ทิศทางข้อความ', dirAuto: 'อัตโนมัติ', dirRTL: 'ขวาไปซ้าย (Arabic)', dirLTR: 'ซ้ายไปขวา',
    signerLabel: 'ผู้ลงนาม', signerPlaceholder: 'หัวหน้ากลุ่มสาระ', signerHint: 'ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร',
    tableTitle: 'มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้', tableHint: 'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',
    tplBasic: 'พื้นฐาน 2 คอลัมน์', tplExtra: 'เพิ่มเติม 1 คอลัมน์', addCol: '+ คอลัมน์', addRow: '+ แถว', rowHeader: 'ข้อ', delRow: 'ลบ',
    objTitle: 'จุดประสงค์วัดผล', objHint: '(คลิกเพื่อเลือกข้อ)', between: 'ระหว่างภาค ข้อที่', mid: 'กลางภาค ข้อที่', final: 'ปลายภาค ข้อที่',
    noOpts: 'ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน', notSelected: 'ยังไม่เลือก',
    colsBasic: ['มาตรฐานการเรียนรู้', 'ตัวชี้วัด'], colsExtra: ['ผลการเรียนรู้'], colNew: n => `คอลัมน์ ${n}`,
    pickerTitles: { mid: 'เลือกข้อกลางภาค', between: 'เลือกข้อระหว่างภาค', final: 'เลือกข้อปลายภาค' },
    pickerCancel: 'ยกเลิก', pickerOk: 'ตกลง',
    confirmOverwrite: 'ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?',
    confirmAIOverwrite: 'ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?',
    confirmImgOverwrite: 'เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?',
    confirmColChange: 'เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่',
    toastSaved: 'บันทึกคำอธิบายฯ สำเร็จ',
    toastSearchOk: n => `พบ ${n} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,
    toastSearchEmpty: 'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',
    toastAIDone: 'AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก',
    toastImgDone: 'AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก',
  },
  jawi: {
    key: 'jawi', dir: 'rtl', aiLang: 'bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.',
    label: 'يَاوِي', title: 'كتراڠن مات ڤلاجارن', close: 'توتوڤ', save: 'سيمڤن', saving: 'سداڠ سيمڤن...',
    helpTitle: 'بنتو ايسي ماكلومت', helpSub: 'نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت',
    topicLabel: 'باب / توڤيك ڤنڬاجارن', topicPlaceholder: 'چونتوه: قواعد اللغة، فهم المقروء', addTopic: 'تمبه باب',
    btnCurriculum: 'چاري كوريكولوم', btnCurriculumSub: 'ڤاڠكالن داتا', btnCurriculumLoading: 'سداڠ چاري...',
    btnAI: 'AI رنچاڠ', btnAISub: 'Gemini + باب', btnAILoading: 'AI سداڠ رنچاڠ...',
    btnImg: 'باچا ڬمبر', btnImgSub: 'AI باچا ڬمبر', btnImgLoading: 'سداڠ باچا...',
    descLabel: 'كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن', descPlaceholder: 'تايڤ دالم توليسن ياوي',
    dirLabel: 'اراه تيكس', dirAuto: 'اوتوماتيك', dirRTL: 'كانن ك كيري', dirLTR: 'كيري ك كانن',
    signerLabel: 'ڤناندا تاڠن', signerPlaceholder: 'كتوا كومڤولن مات ڤلاجارن', signerHint: 'ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن',
    tableTitle: 'ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن', tableHint: 'نومبور باريس يڠ برتوليس اكن جادي ڤيليهن',
    tplBasic: '٢ لاجور اساس', tplExtra: '١ لاجور تمبهن', addCol: '+ لاجور', addRow: '+ باريس', rowHeader: 'بل', delRow: 'ڤادم',
    objTitle: 'اوبجيكتيف ڤنيلاين', objHint: '(كليك اونتوق ڤيليه)', between: 'سيماس ڤڠڬل', mid: 'ڤرتڠهن ڤڠڬل', final: 'اخير ڤڠڬل',
    noOpts: 'بيلوم ادا ڤيليهن', notSelected: 'بيلوم ڤيليه',
    colsBasic: ['ڤياوايان ڤمبلاجارن', 'ڤتوك'], colsExtra: ['حاصيل ڤمبلاجارن'], colNew: n => `لاجور ${n}`,
    pickerTitles: { mid: 'ڤيليه ڤرتڠهن', between: 'ڤيليه سيماس', final: 'ڤيليه اخير' },
    pickerCancel: 'بتل', pickerOk: 'اوك',
  },
  ar: {
    key: 'ar', dir: 'rtl', aiLang: 'اللغة العربية الفصحى',
    label: 'العربية', title: 'وصف المادة الدراسية', close: 'إغلاق', save: 'حفظ', saving: 'جار الحفظ...',
    helpTitle: 'مساعدة في إدخال البيانات', helpSub: 'حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال',
    topicLabel: 'الفصل / الموضوع', topicPlaceholder: 'مثال: النحو، القراءة، الفقه', addTopic: 'إضافة فصل',
    btnCurriculum: 'بحث المنهج', btnCurriculumSub: 'قاعدة البيانات', btnCurriculumLoading: 'جار البحث...',
    btnAI: 'صياغة AI', btnAISub: 'Gemini + الفصل', btnAILoading: 'جار الصياغة...',
    btnImg: 'قراءة الصورة', btnImgSub: 'AI يقرأ الصورة', btnImgLoading: 'جار القراءة...',
    descLabel: 'وصف المادة / نتائج التعلم العامة', descPlaceholder: 'اكتب باللغة العربية أو أي لغة أخرى',
    dirLabel: 'اتجاه النص', dirAuto: 'تلقائي', dirRTL: 'يمين إلى يسار', dirLTR: 'يسار إلى يمين',
    signerLabel: 'الموقع', signerPlaceholder: 'رئيس القسم', signerHint: 'يستخدم منصب رئيس القسم في الوثيقة',
    tableTitle: 'المعايير / المؤشرات / نتائج التعلم', tableHint: 'أرقام الصفوف التي تحتوي نصا تصبح اختيارات',
    tplBasic: 'عمودان أساسيان', tplExtra: 'عمود واحد', addCol: '+ عمود', addRow: '+ صف', rowHeader: 'رقم', delRow: 'حذف',
    objTitle: 'أهداف التقييم', objHint: '(انقر للاختيار)', between: 'أثناء الفصل', mid: 'منتصف الفصل', final: 'نهاية الفصل',
    noOpts: 'لا توجد بنود للاختيار', notSelected: 'لم يتم الاختيار',
    colsBasic: ['معايير التعلم', 'المؤشرات'], colsExtra: ['نتائج التعلم'], colNew: n => `عمود ${n}`,
    pickerTitles: { mid: 'اختر منتصف الفصل', between: 'اختر أثناء الفصل', final: 'اختر نهاية الفصل' },
    pickerCancel: 'إلغاء', pickerOk: 'موافق',
  },
  rumi: {
    key: 'rumi', dir: 'ltr', aiLang: 'Bahasa Melayu tulisan Rumi/Latin',
    label: 'Rumi', title: 'Keterangan Mata Pelajaran', close: 'Tutup', save: 'Simpan', saving: 'Menyimpan...',
    helpTitle: 'Bantu isi maklumat', helpSub: 'Nyatakan bab / topik di bawah, kemudian pilih cara mengisi',
    topicLabel: 'Bab / Topik pengajaran', topicPlaceholder: 'Contoh: Tatabahasa, Kefahaman Membaca', addTopic: 'Tambah bab',
    btnCurriculum: 'Cari kurikulum', btnCurriculumSub: 'Pangkalan data', btnCurriculumLoading: 'Mencari...',
    btnAI: 'Rangka AI', btnAISub: 'Gemini + bab', btnAILoading: 'AI merangka...',
    btnImg: 'Baca gambar', btnImgSub: 'AI baca gambar', btnImgLoading: 'Membaca...',
    descLabel: 'Keterangan mata pelajaran / hasil pembelajaran umum', descPlaceholder: 'Taip dalam Bahasa Melayu atau bahasa lain',
    dirLabel: 'Arah teks', dirAuto: 'Automatik', dirRTL: 'Kanan ke kiri', dirLTR: 'Kiri ke kanan',
    signerLabel: 'Penandatangan', signerPlaceholder: 'Ketua kumpulan mata pelajaran', signerHint: 'Gunakan jawatan ketua kumpulan dalam dokumen',
    tableTitle: 'Piawaian / Petunjuk / Hasil pembelajaran', tableHint: 'Nombor baris yang berisi teks menjadi pilihan item',
    tplBasic: '2 lajur asas', tplExtra: '1 lajur tambahan', addCol: '+ Lajur', addRow: '+ Baris', rowHeader: 'Item', delRow: 'Padam',
    objTitle: 'Objektif penilaian', objHint: '(klik untuk pilih)', between: 'Semasa penggal', mid: 'Pertengahan penggal', final: 'Akhir penggal',
    noOpts: 'Tiada item untuk dipilih', notSelected: 'Belum dipilih',
    colsBasic: ['Piawaian pembelajaran', 'Petunjuk'], colsExtra: ['Hasil pembelajaran'], colNew: n => `Lajur ${n}`,
    pickerTitles: { mid: 'Pilih pertengahan', between: 'Pilih semasa', final: 'Pilih akhir' },
    pickerCancel: 'Batal', pickerOk: 'OK',
  },
}

// cache lang settings ใน session เพื่อไม่ต้อง fetch ซ้ำทุกครั้งที่เปิด modal
let _cachedLangSettings = null
async function _getLangSettings() {
  if (_cachedLangSettings) return _cachedLangSettings
  const rows = await getCourseDocLangSettings().catch(() => [])
  _cachedLangSettings = Object.fromEntries(rows.map(r => [r.lang_key, r.settings ?? {}]))
  return _cachedLangSettings
}

export async function openCourseDocPage2Modal(teacher, course) {
  const [existing, langSettingsMap] = await Promise.all([
    getCourseDocPage2(course.id).catch(err => {
      showToast('โหลดคำอธิบายฯ ไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      return null
    }),
    _getLangSettings(),
  ])

  const normalizeColumns = value => {
    const cols = Array.isArray(value) ? value : ['มาตรฐานการเรียนรู้', 'ตัวชี้วัด']
    return cols.length ? cols.map(c => String(c ?? '')) : ['มาตรฐานการเรียนรู้', 'ตัวชี้วัด']
  }
  const normalizeRows = (value, colCount) => {
    const rows = Array.isArray(value) ? value : []
    const fixed = rows.map(row => {
      const cells = Array.isArray(row) ? row : Object.values(row ?? {})
      return Array.from({ length: colCount }, (_, i) => String(cells[i] ?? ''))
    })
    return fixed.length ? fixed : Array.from({ length: 12 }, () => Array.from({ length: colCount }, () => ''))
  }
  const uniqueInts = value => [...new Set((Array.isArray(value) ? value : [])
    .map(n => parseInt(n, 10)).filter(n => Number.isFinite(n) && n > 0))]

  // สามัญปวช. (ACDMVOC): เอกสารหน้า 4 ต้องการ "จุดประสงค์การเรียนรู้/สมรรถนะรายวิชา" + "กำหนดการสอน"
  // ซึ่งเป็นโครงตารางคนละแบบกับ table_columns/table_rows เดิม (ใช้กับหน้า 2 ของสามัญเท่านั้น)
  const isVOC = course.subject_group === 'ACDMVOC'
  const normalizeVocRows = (value, fields, minCount) => {
    const arr = Array.isArray(value) ? value : []
    const fixed = arr.map(row => Object.fromEntries(fields.map(f => [f, String(row?.[f] ?? '')])))
    while (fixed.length < minCount) fixed.push(Object.fromEntries(fields.map(f => [f, ''])))
    return fixed
  }

  let columns = normalizeColumns(existing?.table_columns)
  let rows = normalizeRows(existing?.table_rows, columns.length)
  let midItems     = uniqueInts(existing?.midterm_objective_items)
  let betweenItems = uniqueInts(existing?.between_objective_items)
  let finalItems   = uniqueInts(existing?.final_objective_items)
  let betweenExtra = existing?.between_objective_extra ?? ''
  let midExtra     = existing?.midterm_objective_extra ?? ''
  let finalExtra   = existing?.final_objective_extra   ?? ''
  let textDir      = ['auto', 'rtl', 'ltr'].includes(existing?.text_direction) ? existing.text_direction : 'auto'
  let description  = existing?.description || ''
  let signerName   = existing?.signer_name || course.learning_area || ''
  let topicList    = existing?.topic_list?.length ? existing.topic_list : ['']  // หลายบท
  let vocObjectives = normalizeVocRows(existing?.voc_objectives, ['objective', 'competency'], 10)
  let vocSchedule    = normalizeVocRows(existing?.voc_schedule, ['week', 'content', 'note'], 20)
  let aiStatusText = ''
  let lang = 'th'
  // DB settings override hardcoded defaults (pickerTitles merges separately)
  const i18n = () => {
    const base = { ...COURSE_DOC_LANGS.th, ...COURSE_DOC_LANGS[lang] }
    const dbOverride = langSettingsMap?.[lang] ?? {}
    const merged = { ...base, ...dbOverride }
    if (dbOverride.pickerTitles) merged.pickerTitles = { ...base.pickerTitles, ...dbOverride.pickerTitles }
    return merged
  }
  const ensureRTLFont = () => {
    if (document.getElementById('cd2-rtl-font')) return
    const link = document.createElement('link')
    link.id = 'cd2-rtl-font'
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap'
    document.head.appendChild(link)
  }
  const [cfg, depts] = await Promise.all([
    getSystemConfig().catch(() => ({})),
    getDepartments().catch(() => []),
  ])
  // แปลง dept_code (THAI/MATH/...) → dept_name ภาษาไทย สำหรับค้นหลักสูตรแกนกลาง
  const deptRec   = depts.find(d => d.dept_code === course.dept)
  const deptThai  = deptRec?.dept_name ?? course.dept ?? ''

  document.getElementById('course-doc-page2-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'course-doc-page2-modal'
  modal.className = 'fixed inset-0 z-[160] bg-white flex flex-col'
  document.body.appendChild(modal)

  const dirAttr = () => textDir === 'auto' ? 'auto' : textDir
  const selectedText = (items, extra = '') => {
    const nums = items.length ? [...items].sort((a, b) => a - b).join(', ') : ''
    const parts = [nums, extra.trim()].filter(Boolean)
    return parts.length ? parts.join(', ') : i18n().notSelected
  }
  const objectiveOptions = () => {
    const max = rows.length
    return Array.from({ length: max }, (_, i) => i + 1)
      .filter(n => rows[n - 1]?.some(cell => String(cell ?? '').trim()))
  }

  const render = () => {
    const L = i18n()
    const opts = objectiveOptions()
    const isRTL = L.dir === 'rtl'
    if (isRTL) ensureRTLFont()
    const dir = textDir === 'auto' ? L.dir : textDir
    const textAlign = dir === 'rtl' ? 'text-right' : 'text-left'
    const rtlStyle = isRTL ? 'font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;' : ''
    modal.innerHTML = `
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${dir}" style="${rtlStyle}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${L.title}</h2>
          <p class="text-xs text-gray-400 truncate">${_htmlEsc(course.subject_name)} · ${_htmlEsc(course.subject_code || '—')} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${L.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${L.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${dir}" style="${rtlStyle}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(COURSE_DOC_LANGS).map(l => `
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${lang === l.key ? 'bg-emerald-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}"
            data-lang="${l.key}">${langSettingsMap?.[l.key]?.label || l.label}</button>
        `).join('')}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${dir}" style="${rtlStyle}">
        <div class="max-w-6xl mx-auto p-4 sm:p-6 space-y-4">
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 sm:p-5">
            <div>
              <h3 class="font-bold text-gray-800">${L.helpTitle}</h3>
              <p class="text-xs text-gray-400 mt-0.5">${L.helpSub}</p>
            </div>

            <!-- topic list -->
            <div class="mt-4 space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-semibold text-gray-500">${L.topicLabel}</span>
                <span class="text-xs text-gray-400">${_htmlEsc(course.grade_level || '')} · ${_htmlEsc(deptThai || '')}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${topicList.map((t, i) => `
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${INPUT_CLS} flex-1" value="${_htmlEsc(t)}"
                      placeholder="${_htmlEsc(L.topicPlaceholder)}" dir="${dir}" data-idx="${i}" />
                    ${topicList.length > 1 ? `<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${i}">✕</button>` : ''}
                  </div>`).join('')}
              </div>
              <button id="cd2-add-topic" type="button"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 mt-1">
                <span class="text-base leading-none">＋</span> ${L.addTopic}
              </button>
            </div>

            <!-- 3 action buttons grid -->
            <div class="grid grid-cols-3 gap-2 mt-4">
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-search-curriculum"
                  class="w-full py-2.5 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 disabled:opacity-50 flex items-center justify-center gap-1">
                  🔍 ${L.btnCurriculum}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${L.btnCurriculumSub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-auto-fill"
                  class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 disabled:opacity-50 flex items-center justify-center gap-1">
                  ✨ ${L.btnAI}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${L.btnAISub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <label class="cursor-pointer w-full">
                  <span id="cd2-img-btn"
                    class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 flex items-center justify-center gap-1">
                    📷 ${L.btnImg}
                  </span>
                  <input type="file" id="cd2-img-input" accept="image/*" class="hidden" />
                </label>
                <span class="text-[10px] text-gray-400 text-center">${L.btnImgSub}</span>
              </div>
            </div>

            ${aiStatusText ? `<p class="text-xs mt-3 ${aiStatusText.startsWith('✅') ? 'text-emerald-600' : 'text-amber-600'}">${_htmlEsc(aiStatusText)}</p>` : ''}
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${L.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${dir}"
                  class="${INPUT_CLS} ${textAlign} min-h-[132px] leading-7"
                  placeholder="${_htmlEsc(L.descPlaceholder)}">${_htmlEsc(description)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${L.dirLabel}</span>
                  <select id="cd2-dir" class="${SELECT_CLS}">
                    <option value="auto" ${textDir === 'auto' ? 'selected' : ''}>${L.dirAuto}</option>
                    <option value="rtl" ${textDir === 'rtl' ? 'selected' : ''}>${L.dirRTL}</option>
                    <option value="ltr" ${textDir === 'ltr' ? 'selected' : ''}>${L.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${L.signerLabel}</span>
                  <input id="cd2-signer" class="${INPUT_CLS} ${textAlign}" value="${_htmlEsc(signerName)}" placeholder="${_htmlEsc(L.signerPlaceholder)}" dir="${dir}" />
                  <p class="text-xs text-gray-400 mt-1">${L.signerHint}</p>
                </label>
              </div>
            </div>
          </div>

          ${isVOC ? `
          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="flex items-center justify-between gap-3 flex-wrap mb-3">
              <div>
                <h3 class="font-bold text-gray-800">จุดประสงค์การเรียนรู้และสมรรถนะรายวิชา</h3>
                <p class="text-xs text-gray-400 mt-0.5">แสดงในเอกสาร ปพ.5 หน้า 4</p>
              </div>
              <button id="cd2-voc-obj-add-row" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">+ เพิ่มแถว</button>
            </div>
            <div class="overflow-auto">
              <table class="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-10 px-2 py-2 border border-gray-100 text-gray-500">#</th>
                    <th class="px-2 py-2 border border-gray-100">จุดประสงค์การเรียนรู้</th>
                    <th class="px-2 py-2 border border-gray-100">สมรรถนะรายวิชา</th>
                    <th class="w-14 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${vocObjectives.map((row, r) => `
                    <tr>
                      <td class="px-2 py-2 border border-gray-100 text-center text-gray-500">${r + 1}</td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${r}" data-voc-obj-field="objective" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${_htmlEsc(row.objective)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100 align-top">
                        <textarea data-voc-obj-row="${r}" data-voc-obj-field="competency" rows="2"
                          class="cd2-voc-obj-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${_htmlEsc(row.competency)}</textarea>
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-obj-del-row="${r}" class="cd2-voc-obj-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
                      </td>
                    </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <div class="flex items-center justify-between gap-3 flex-wrap mb-3">
              <div>
                <h3 class="font-bold text-gray-800">กำหนดการสอน</h3>
                <p class="text-xs text-gray-400 mt-0.5">แสดงในเอกสาร ปพ.5 หน้า 4</p>
              </div>
              <button id="cd2-voc-sch-add-row" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">+ เพิ่มแถว</button>
            </div>
            <div class="overflow-auto">
              <table class="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-20 px-2 py-2 border border-gray-100">สัปดาห์ที่</th>
                    <th class="px-2 py-2 border border-gray-100">เนื้อหาที่สอน</th>
                    <th class="w-40 px-2 py-2 border border-gray-100">หมายเหตุ</th>
                    <th class="w-14 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${vocSchedule.map((row, r) => `
                    <tr>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${r}" data-voc-sch-field="week"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm text-center focus:border-emerald-300 focus:outline-none" value="${_htmlEsc(row.week)}" />
                      </td>
                      <td class="p-1 border border-gray-100">
                        <textarea data-voc-sch-row="${r}" data-voc-sch-field="content" rows="1"
                          class="cd2-voc-sch-cell w-full resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${_htmlEsc(row.content)}</textarea>
                      </td>
                      <td class="p-1 border border-gray-100">
                        <input data-voc-sch-row="${r}" data-voc-sch-field="note"
                          class="cd2-voc-sch-cell w-full rounded-lg border border-transparent px-2 py-2 text-sm focus:border-emerald-300 focus:outline-none" value="${_htmlEsc(row.note)}" />
                      </td>
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-voc-sch-del-row="${r}" class="cd2-voc-sch-del-row text-xs text-red-400 hover:text-red-600">ลบ</button>
                      </td>
                    </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>
          ` : `
          <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
            <div class="px-4 sm:px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 class="font-bold text-gray-800">${L.tableTitle}</h3>
                <p class="text-xs text-gray-400 mt-0.5">${L.tableHint}</p>
              </div>
              <div class="flex gap-2">
                <button id="cd2-template-basic" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50">${L.tplBasic}</button>
                <button id="cd2-template-extra" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50">${L.tplExtra}</button>
                <button id="cd2-add-col" class="px-3 py-2 rounded-xl border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-emerald-50">${L.addCol}</button>
                <button id="cd2-add-row" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">${L.addRow}</button>
              </div>
            </div>
            <div class="overflow-auto">
              <table class="w-full min-w-[780px] border-collapse text-sm" dir="${dir}">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-14 px-3 py-2 border border-gray-100 text-gray-500">${L.rowHeader}</th>
                    ${columns.map((c, i) => `
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${i}" class="cd2-col ${INPUT_CLS} ${textAlign} py-2 font-semibold" value="${_htmlEsc(c)}" dir="${dir}" />
                          ${columns.length > 1 ? `<button data-del-col="${i}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>` : ''}
                        </div>
                      </th>`).join('')}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${rows.map((row, r) => `
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${r + 1}</td>
                      ${columns.map((_, c) => `
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${r}" data-cell="${c}" rows="2" dir="${dir}"
                            class="cd2-cell ${textAlign} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${_htmlEsc(row[c] || '')}</textarea>
                        </td>`).join('')}
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-del-row="${r}" class="cd2-del-row text-xs text-red-400 hover:text-red-600">${L.delRow}</button>
                      </td>
                    </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sm:p-5">
            <h3 class="font-bold text-gray-800 mb-3">${L.objTitle} <span class="text-xs font-normal text-gray-400">${L.objHint}</span></h3>
            <div class="grid sm:grid-cols-3 gap-3">
              <button id="cd2-pick-between" class="${textAlign} rounded-2xl border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${L.between}</p>
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${_htmlEsc(selectedText(betweenItems, betweenExtra))}</p>
              </button>
              <button id="cd2-pick-mid" class="${textAlign} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${L.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${_htmlEsc(selectedText(midItems, midExtra))}</p>
              </button>
              <button id="cd2-pick-final" class="${textAlign} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${L.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${_htmlEsc(selectedText(finalItems, finalExtra))}</p>
              </button>
            </div>
            ${opts.length ? '' : `<p class="text-xs text-amber-600 mt-3">${L.noOpts}</p>`}
          </div>
          `}
        </div>
      </div>`

    wireEvents()
  }

  const syncFromDom = () => {
    topicList = [...modal.querySelectorAll('.cd2-topic-input')].map(el => el.value.trim()).filter(Boolean)
    if (!topicList.length) topicList = ['']
    description = modal.querySelector('#cd2-description')?.value ?? ''
    signerName = modal.querySelector('#cd2-signer')?.value ?? ''
    textDir = modal.querySelector('#cd2-dir')?.value ?? textDir
    modal.querySelectorAll('.cd2-col').forEach(input => {
      columns[Number(input.dataset.col)] = input.value
    })
    modal.querySelectorAll('.cd2-cell').forEach(input => {
      const r = Number(input.dataset.row)
      const c = Number(input.dataset.cell)
      if (!rows[r]) rows[r] = Array.from({ length: columns.length }, () => '')
      rows[r][c] = input.value
    })
    modal.querySelectorAll('.cd2-voc-obj-cell').forEach(input => {
      const r = Number(input.dataset.vocObjRow)
      const f = input.dataset.vocObjField
      if (!vocObjectives[r]) vocObjectives[r] = { objective: '', competency: '' }
      vocObjectives[r][f] = input.value
    })
    modal.querySelectorAll('.cd2-voc-sch-cell').forEach(input => {
      const r = Number(input.dataset.vocSchRow)
      const f = input.dataset.vocSchField
      if (!vocSchedule[r]) vocSchedule[r] = { week: '', content: '', note: '' }
      vocSchedule[r][f] = input.value
    })
    return { desc: description, signer: signerName }
  }

  const applyGeneratedDoc = result => {
    const nextColumns = Array.isArray(result?.columns) && result.columns.length
      ? result.columns.map(c => String(c ?? '').trim()).filter(Boolean)
      : i18n().colsExtra
    const nextRows = Array.isArray(result?.rows)
      ? result.rows.map(row => {
          const cells = Array.isArray(row) ? row : Object.values(row ?? {})
          return Array.from({ length: nextColumns.length }, (_, i) => String(cells[i] ?? '').trim())
        }).filter(row => row.some(Boolean))
      : []
    columns = nextColumns
    rows = nextRows.length ? nextRows : Array.from({ length: 12 }, () => Array.from({ length: columns.length }, () => ''))
    if (result?.description) description = String(result.description)
    midItems     = uniqueInts(result?.midterm_items ?? result?.midtermObjectiveItems)
    betweenItems = uniqueInts(result?.between_items ?? result?.betweenObjectiveItems)
    finalItems   = uniqueInts(result?.final_items   ?? result?.finalObjectiveItems)
    const opts = objectiveOptions()
    const half = Math.ceil(opts.length / 2)
    if (!midItems.length)     midItems     = opts.slice(0, Math.min(3, half))
    if (!betweenItems.length) betweenItems = opts.slice(0, Math.min(4, opts.length))
    if (!finalItems.length)   finalItems   = opts.slice(-Math.min(3, opts.length))
  }

  const buildDocFromCurriculum = records => {
    const hasOutcome = records.some(r => String(r.learning_outcome_text ?? '').trim())
    if (hasOutcome) {
      return {
        source: 'curriculum',
        columns: ['ผลการเรียนรู้'],
        rows: records.map((r, i) => [`${r.item_no ?? i + 1}.${r.learning_outcome_text ?? r.indicator_text ?? r.standard_text ?? ''}`]),
        description,
        midterm_items: records.slice(0, Math.ceil(records.length / 2)).map((_, i) => i + 1),
        final_items: records.slice(Math.ceil(records.length / 2)).map((_, i) => i + 1 + Math.ceil(records.length / 2)),
      }
    }
    return {
      source: 'curriculum',
      columns: ['มาตรฐานการเรียนรู้', 'ตัวชี้วัด'],
      rows: records.map((r, i) => [
        `${r.item_no ?? i + 1}.) ${r.standard_code || r.standard_text || ''}`.trim(),
        r.indicator_text || r.learning_outcome_text || '',
      ]),
      description,
      midterm_items: records.slice(0, Math.ceil(records.length / 2)).map((_, i) => i + 1),
      final_items: records.slice(Math.ceil(records.length / 2)).map((_, i) => i + 1 + Math.ceil(records.length / 2)),
    }
  }

  const generateDocWithGemini = async () => {
    // key อยู่ใน Edge Function — ไม่ต้องส่ง key จาก browser
    const L = i18n()
    const isExtra = columns.length === 1 || (course.subject_group && !['ACDM', 'AGM'].includes(course.subject_group))
    const colNames = isExtra ? L.colsExtra : L.colsBasic
    const tableMode = isExtra
      ? `single column named "${colNames[0]}"`
      : `two columns named "${colNames[0]}" and "${colNames[1]}"`
    const prompt = `You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${L.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${course.subject_name || ''}
- รหัสวิชา: ${course.subject_code || ''}
- ชั้น: ${course.grade_level || ''}
- กลุ่มสาระ: ${deptThai || course.dept || ''}
- หน่วยกิต: ${course.credit || ''}
- เรื่อง/บทที่สอน: ${topicList.filter(Boolean).join(', ') || 'ไม่ระบุ'}

งาน:
1. ร่างคำอธิบายรายวิชาสั้น กระชับ เป็นทางการ ในภาษาเป้าหมาย
2. สร้างรายการในตารางตามรูปแบบนี้: ${tableMode}
3. สร้างประมาณ 5-8 ข้อที่ใช้เป็นตัวเลือกข้อจุดประสงค์วัดผล
4. เลือกข้อสำหรับกลางภาคและปลายภาคอย่างเหมาะสม

Return JSON object เท่านั้น:
{
  "description": "...",
  "columns": ["..."],
  "rows": [["..."], ["..."]],
  "midterm_items": [1,2],
  "final_items": [3,4,5]
}`

    const { data: json, error: fnErr } = await supabase.functions.invoke('gemini-proxy', {
      body: { keyType: 'schedule', dept: teacher.dept ?? '', prompt },
    })
    if (fnErr) throw new Error(fnErr.message ?? 'Edge Function error')
    if (json?.error) throw new Error(`Gemini: ${json.error.message ?? json.error.status}`)
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
    const match = text.match(/```json\s*([\s\S]*?)```/) || text.match(/(\{[\s\S]*\})/)
    const jsonStr = match ? (match[1] ?? match[0]) : null
    if (!jsonStr) throw new Error('AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง')
    return JSON.parse(jsonStr)
  }

  const openPicker = kind => {
    syncFromDom()
    const current = kind === 'mid' ? midItems : kind === 'between' ? betweenItems : finalItems
    const currentExtra = kind === 'mid' ? midExtra : kind === 'between' ? betweenExtra : finalExtra
    const opts = objectiveOptions()
    if (!opts.length) { showToast('กรุณาพิมพ์รายการในตารางก่อน', 'warning'); return }
    document.getElementById('cd2-picker')?.remove()
    const L = i18n()
    const accents = { mid:'accent-emerald-600', between:'accent-blue-600', final:'accent-purple-600' }
    const okCls   = { mid:'bg-emerald-600 hover:bg-emerald-700', between:'bg-blue-600 hover:bg-blue-700', final:'bg-purple-600 hover:bg-purple-700' }
    // preview: ข้อความแรกสุดที่ไม่ว่างของแถวนั้น ตัดที่ 30 ตัวอักษร
    const rowPreview = n => {
      const cell = (rows[n - 1] ?? []).find(c => String(c ?? '').trim())
      const txt = String(cell ?? '').trim()
      return txt.length > 30 ? txt.slice(0, 30) + '…' : txt
    }
    const picker = document.createElement('div')
    picker.id = 'cd2-picker'
    picker.className = 'fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4'
    picker.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${L.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${L.pickerTitles[kind]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${opts.map(n => `
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${accents[kind]} w-4 h-4 flex-shrink-0" value="${n}" ${current.includes(n) ? 'checked' : ''}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${n}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${_htmlEsc(rowPreview(n))}</span>
            </label>`).join('')}
        </div>
        <div class="px-4 pt-3 pb-2 border-t border-gray-100">
          <p class="text-xs font-semibold text-gray-500 mb-1.5">พิมพ์เพิ่มเติม <span class="font-normal text-gray-400">(เช่น 4, 5 หรือข้อความอิสระ)</span></p>
          <textarea id="cd2-picker-extra" rows="2"
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="พิมพ์ข้อที่เพิ่มเติม หรือข้อความอื่น…">${_htmlEsc(currentExtra)}</textarea>
        </div>
        <div class="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
          <button id="cd2-picker-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">${L.pickerCancel}</button>
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${okCls[kind]} text-white text-sm font-semibold">${L.pickerOk}</button>
        </div>
      </div>`
    document.body.appendChild(picker)
    const close = () => picker.remove()
    picker.querySelector('#cd2-picker-close').addEventListener('click', close)
    picker.querySelector('#cd2-picker-cancel').addEventListener('click', close)
    picker.querySelector('#cd2-picker-ok').addEventListener('click', () => {
      const picked = [...picker.querySelectorAll('.cd2-choice:checked')].map(el => Number(el.value))
      const extra  = picker.querySelector('#cd2-picker-extra').value.trim()
      if (kind === 'mid')     { midItems = picked;     midExtra = extra }
      else if (kind === 'between') { betweenItems = picked; betweenExtra = extra }
      else                   { finalItems = picked;   finalExtra = extra }
      close(); render()
    })
  }

  const wireEvents = () => {
    const L = i18n()
    modal.querySelectorAll('.cd2-lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        syncFromDom()
        lang = btn.dataset.lang || 'th'
        textDir = COURSE_DOC_LANGS[lang]?.dir || 'ltr'
        render()
      })
    })
    modal.querySelector('#cd2-close').addEventListener('click', () => modal.remove())
    modal.querySelector('#cd2-dir').addEventListener('change', e => {
      syncFromDom()
      textDir = e.target.value
      render()
    })
    // ── ค้นหลักสูตรแกนกลาง (DB เท่านั้น) ─────────────────────────────────────
    modal.querySelector('#cd2-search-curriculum').addEventListener('click', async () => {
      syncFromDom()
      const hasContent = rows.some(row => row.some(cell => String(cell ?? '').trim())) || description.trim()
      if (hasContent && !confirm(L.confirmOverwrite)) return
      const btn = modal.querySelector('#cd2-search-curriculum')
      btn.disabled = true; btn.innerHTML = `⏳ ${L.btnCurriculumLoading}`
      try {
        const records = await findCurriculumStandards({
          subjectName: course.subject_name,
          subjectCode: course.subject_code,
          gradeLevel: course.grade_level,
          dept: deptThai,
          topic: topicList.filter(Boolean).join(' '),
        })
        if (records.length) {
          applyGeneratedDoc(buildDocFromCurriculum(records))
          aiStatusText = L.toastSearchOk(records.length)
        } else {
          aiStatusText = L.toastSearchEmpty
        }
        render()
      } catch (err) {
        showToast('ค้นหลักสูตรไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        btn.disabled = false; btn.innerHTML = `🔍 ${L.btnCurriculum}`
      }
    })

    // ── ให้ AI ร่าง (Gemini เท่านั้น) ─────────────────────────────────────────
    modal.querySelector('#cd2-auto-fill').addEventListener('click', async () => {
      syncFromDom()
      const hasContent = rows.some(row => row.some(cell => String(cell ?? '').trim())) || description.trim()
      if (hasContent && !confirm(L.confirmAIOverwrite)) return
      const btn = modal.querySelector('#cd2-auto-fill')
      btn.disabled = true; btn.innerHTML = `⏳ ${L.btnAILoading}`
      try {
        const generated = await generateDocWithGemini()
        applyGeneratedDoc(generated)
        aiStatusText = L.toastAIDone
        render()
      } catch (err) {
        showToast('AI ร่างไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        btn.disabled = false; btn.innerHTML = `✨ ${L.btnAI}`
      }
    })
    // ── อัปโหลดรูป → Gemini Vision อ่านตาราง ────────────────────────────────
    modal.querySelector('#cd2-img-input').addEventListener('change', async e => {
      const file = e.target.files?.[0]; if (!file) return
      // key อยู่ใน Edge Function

      const hasContent = rows.some(row => row.some(cell => String(cell ?? '').trim())) || description.trim()
      if (hasContent && !confirm(L.confirmImgOverwrite)) {
        e.target.value = ''; return
      }

      const btn = modal.querySelector('#cd2-img-btn')
      btn.textContent = `⏳ ${L.btnImgLoading}`

      try {
        // แปลงรูปเป็น base64
        const base64 = await new Promise((res, rej) => {
          const reader = new FileReader()
          reader.onload = () => res(reader.result.split(',')[1])
          reader.onerror = rej
          reader.readAsDataURL(file)
        })

        const isExtra = columns.length === 1 || (course.subject_group && !['ACDM', 'AGM'].includes(course.subject_group))
        const colNames = isExtra ? L.colsExtra : L.colsBasic
        const tableMode = isExtra
          ? `single column named "${colNames[0]}"`
          : `two columns named "${colNames[0]}" and "${colNames[1]}"`

        const prompt = `You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${L.aiLang}
ข้อมูลรายวิชา: "${course.subject_name ?? ''}" รหัส ${course.subject_code ?? ''} ชั้น ${course.grade_level ?? ''} กลุ่มสาระ ${deptThai}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${tableMode})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบเป็น JSON เท่านั้น (ไม่มีข้อความอื่น):
{
  "description": "...",
  "columns": ${JSON.stringify(colNames)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`

        const { data: json, error: fnErr } = await supabase.functions.invoke('gemini-proxy', {
          body: { keyType: 'schedule', dept: teacher.dept ?? '', prompt, imageBase64: base64, imageMimeType: file.type || 'image/jpeg' },
        })
        if (fnErr) throw new Error(fnErr.message ?? 'Edge Function error')
        if (json?.error) throw new Error(`Gemini: ${json.error.message ?? json.error.status}`)
        const text = json.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
        const match = text.match(/```json\s*([\s\S]*?)```/) || text.match(/(\{[\s\S]*\})/)
        const jsonStr = match ? (match[1] ?? match[0]) : null
        if (!jsonStr) throw new Error('AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง')
        applyGeneratedDoc(JSON.parse(jsonStr))
        aiStatusText = L.toastImgDone
        render()
      } catch (err) {
        showToast('อ่านรูปไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        btn.textContent = `📷 ${L.btnImg}`
        e.target.value = ''
      }
    })

    const applyTemplate = nextColumns => {
      syncFromDom()
      const hasContent = rows.some(row => row.some(cell => String(cell ?? '').trim()))
      if (hasContent && !confirm(L.confirmColChange)) return
      const oldRows = rows
      columns = nextColumns
      rows = oldRows.map(row => {
        if (nextColumns.length === 1) return [row.filter(Boolean).join(' ').trim()]
        return Array.from({ length: nextColumns.length }, (_, i) => row[i] ?? '')
      })
      if (!rows.length) rows = Array.from({ length: 12 }, () => Array.from({ length: columns.length }, () => ''))
      render()
    }
    modal.querySelector('#cd2-template-basic')?.addEventListener('click', () => {
      applyTemplate(L.colsBasic)
    })
    modal.querySelector('#cd2-template-extra')?.addEventListener('click', () => {
      applyTemplate(L.colsExtra)
    })
    modal.querySelector('#cd2-add-col')?.addEventListener('click', () => {
      syncFromDom()
      columns.push(L.colNew(columns.length + 1))
      rows = rows.map(row => [...row, ''])
      render()
    })
    modal.querySelector('#cd2-add-row')?.addEventListener('click', () => {
      syncFromDom()
      rows.push(Array.from({ length: columns.length }, () => ''))
      render()
    })
    modal.querySelectorAll('.cd2-del-col').forEach(btn => btn.addEventListener('click', () => {
      syncFromDom()
      const idx = Number(btn.dataset.delCol)
      columns.splice(idx, 1)
      rows = rows.map(row => row.filter((_, i) => i !== idx))
      render()
    }))
    modal.querySelectorAll('.cd2-del-row').forEach(btn => btn.addEventListener('click', () => {
      syncFromDom()
      const idx = Number(btn.dataset.delRow)
      rows.splice(idx, 1)
      const adj = items => items.filter(n => n !== idx + 1).map(n => n > idx + 1 ? n - 1 : n)
      midItems = adj(midItems); betweenItems = adj(betweenItems); finalItems = adj(finalItems)
      render()
    }))
    modal.querySelector('#cd2-pick-mid')?.addEventListener('click',     () => openPicker('mid'))
    modal.querySelector('#cd2-pick-between')?.addEventListener('click', () => openPicker('between'))
    modal.querySelector('#cd2-pick-final')?.addEventListener('click',   () => openPicker('final'))

    // ── สามัญปวช.: จุดประสงค์/สมรรถนะ + กำหนดการสอน เพิ่ม/ลบแถว ─────────────────
    modal.querySelector('#cd2-voc-obj-add-row')?.addEventListener('click', () => {
      syncFromDom()
      vocObjectives.push({ objective: '', competency: '' })
      render()
    })
    modal.querySelectorAll('.cd2-voc-obj-del-row').forEach(btn => btn.addEventListener('click', () => {
      syncFromDom()
      vocObjectives.splice(Number(btn.dataset.vocObjDelRow), 1)
      render()
    }))
    modal.querySelector('#cd2-voc-sch-add-row')?.addEventListener('click', () => {
      syncFromDom()
      vocSchedule.push({ week: String(vocSchedule.length + 1), content: '', note: '' })
      render()
    })
    modal.querySelectorAll('.cd2-voc-sch-del-row').forEach(btn => btn.addEventListener('click', () => {
      syncFromDom()
      vocSchedule.splice(Number(btn.dataset.vocSchDelRow), 1)
      render()
    }))

    // ── topic เพิ่ม/ลบ ─────────────────────────────────────────────────────
    modal.querySelector('#cd2-add-topic').addEventListener('click', () => {
      syncFromDom()
      topicList.push('')
      render()
    })
    modal.querySelectorAll('.cd2-topic-del').forEach(btn => {
      btn.addEventListener('click', () => {
        syncFromDom()
        topicList.splice(Number(btn.dataset.idx), 1)
        if (!topicList.length) topicList = ['']
        render()
      })
    })

    modal.querySelector('#cd2-save').addEventListener('click', async () => {
      const { desc, signer } = syncFromDom()
      const btn = modal.querySelector('#cd2-save')
      btn.disabled = true
      btn.textContent = L.saving
      try {
        await saveCourseDocPage2(course.id, {
          description: desc,
          table_columns: columns.map((c, i) => c.trim() || L.colNew(i + 1)),
          table_rows: rows.map(row => row.slice(0, columns.length)),
          topic_list: topicList.filter(Boolean),
          midterm_objective_items: midItems,
          between_objective_items: betweenItems,
          final_objective_items: finalItems,
          midterm_objective_extra: midExtra,
          between_objective_extra: betweenExtra,
          final_objective_extra: finalExtra,
          voc_objectives: vocObjectives,
          voc_schedule: vocSchedule,
          signer_name: signer.trim() || null,
          text_direction: textDir,
          updated_by: teacher?.id ?? null,
        })
        showToast(L.toastSaved, 'success')
        modal.remove()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
        btn.textContent = L.save
      }
    })
  }

  render()
}

// ─── Course Registration Form (2.1) ──────────────────────────────────────────

export async function renderCourseForm(teacher, onSave, editData = null) {
  setActiveNav('my-courses')
  setTitle(editData ? 'แก้ไขคอร์สวิชา' : 'ลงทะเบียนเปิดคอร์ส')

  const [depts, teachers, coTeachers] = await Promise.all([
    getDepartments().catch(()=>[]),
    getTeachers().catch(()=>[]),
    editData ? getSubjectCoTeachers(editData.id).catch(()=>[]) : Promise.resolve([]),
  ])
  let _selectedCoTeachers = coTeachers ?? []

  // unique dept rows — deduplicate by id (ไม่ใช้ dept_code เพราะ SOC มี 2 แถว: สังคมฯ + อิญติมาอียะห์)
  const uniqueDepts = [...new Map(depts.map(d=>[d.id,d])).values()]

  // filter กลุ่มวิชา options by teacher.category
  const teacherCat = teacher?.category ?? ''  // 'สามัญ' | 'ศาสนา' | ''
  const ALL_SUBGROUPS = [
    { value: 'ACDM',    label: 'สามัญมัธยม (ACDM)',   cat: 'สามัญ' },
    { value: 'AGM',     label: 'ศาสนามัธยม (AGM)',    cat: 'ศาสนา' },
    { value: 'ACDMVOC', label: 'สามัญปวช (ACDMVOC)',  cat: 'สามัญ' },
    { value: 'AGMVOC',  label: 'ศาสนาปวช (AGMVOC)',  cat: 'ศาสนา' },
  ]
  const visibleSubgroups = teacherCat
    ? ALL_SUBGROUPS.filter(s => s.cat === teacherCat)
    : ALL_SUBGROUPS

  // map subject_group → dept category
  const _sgToCategory = sg =>
    sg === 'ACDM'    ? 'สามัญ' :
    sg === 'ACDMVOC' ? 'สามัญปวช' :
    (sg === 'AGM' || sg === 'AGMVOC') ? 'ศาสนา' : null

  const _isVoc     = sg => sg === 'ACDMVOC'
  const _deptLabel = sg => _isVoc(sg) ? 'สาขาวิชา' : 'กลุ่มสาระการเรียนรู้'
  const _headLabel = sg => _isVoc(sg) ? 'หัวหน้าสาขาวิชา' : 'หัวหน้ากลุ่มสาระ'
  const _deptPH    = sg => _isVoc(sg) ? '— เลือกสาขาวิชา —' : '— เลือกกลุ่มสาระ —'
  const _headHint  = sg => _isVoc(sg) ? 'เติมอัตโนมัติตามสาขาวิชา — แก้ไขได้' : 'เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้'

  const _initSg = editData?.subject_group ?? ''

  // filter depts by subject_group (graceful: if no category set, show all)
  const _filterDepts = sg => {
    const cat = _sgToCategory(sg)
    if (!cat) return uniqueDepts
    const filtered = uniqueDepts.filter(d => d.category === cat)
    return filtered.length ? filtered : uniqueDepts
  }

  // สร้าง <option> จาก dept list
  const _deptOptions = (list, selectedCode='') =>
    `<option value="">— เลือกกลุ่มสาระ —</option>` +
    list.map(d=>`<option value="${d.dept_code}" ${d.dept_code===selectedCode?'selected':''}>${d.dept_name}</option>`).join('')

  // all unique dept heads (for typeahead)
  const allHeads = [...new Set(depts.map(d=>d.head_name).filter(Boolean))]

  setContent(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${editData ? 'แก้ไขคอร์สวิชา' : 'ลงทะเบียนเปิดคอร์สวิชา'}</h2>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <form id="course-form" novalidate class="space-y-5">
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            กลุ่มวิชา <span class="text-red-400">*</span>
          </label>
          <select id="cf-subg" class="${SELECT_CLS}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            ${visibleSubgroups.map(s=>`<option value="${s.value}" ${editData?.subject_group===s.value?'selected':''}>${s.label}</option>`).join('')}
          </select>
        </div>
        <!-- กลุ่มสาระ / สาขาวิชา -->
        <div>
          <label id="cf-dept-label" class="block text-sm font-semibold text-gray-700 mb-1">
            ${_deptLabel(_initSg)} <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${SELECT_CLS}">
            ${_deptOptions(editData?.subject_group ? _filterDepts(editData.subject_group) : (teacherCat ? uniqueDepts.filter(d=>d.category===teacherCat) : uniqueDepts), editData?.dept??'')}
          </select>
        </div>
        <!-- ชื่อวิชา + รหัสวิชา -->
        <div class="grid grid-cols-2 gap-3">
          <div class="col-span-2 sm:col-span-1">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชื่อวิชา <span class="text-red-400">*</span>
            </label>
            <input id="cf-name" type="text" placeholder="เช่น คณิตศาสตร์พื้นฐาน" class="${INPUT_CLS}" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">รหัสวิชา</label>
            <input id="cf-code" type="text" placeholder="เช่น ค32110" class="${INPUT_CLS}" />
            <p id="cf-code-hint" class="text-xs text-gray-400 mt-1"></p>
          </div>
        </div>
        <!-- หน่วยกิต + ชั้นปี -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">หน่วยกิต</label>
            <select id="cf-credit" class="${SELECT_CLS}">
              ${CREDIT_OPTS.map(c=>`<option value="${c}">${c}</option>`).join('')}
            </select>
          </div>
          <div id="cf-grade-single-wrapper">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชั้นปี <span class="text-red-400">*</span>
            </label>
            <select id="cf-grade" class="${SELECT_CLS}">
              <option value="">— เลือกกลุ่มวิชาก่อน —</option>
            </select>
          </div>
        </div>

        <!-- โหมดสอนร่วม & คละระดับชั้น -->
        <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <h4 class="text-sm font-bold text-indigo-900">โหมดสอนร่วม & คละระดับชั้น (Co-teaching & Multi-grade)</h4>
            <p class="text-xs text-indigo-700 mt-0.5">เปิดเพื่อเลือกคละหลายระดับชั้น หรือกำหนดผู้ร่วมสอนวิชานี้</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="cf-toggle-coteach" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <!-- ชั้นปีแบบคละระดับชั้น (แสดงเมื่อเปิดโหมด) -->
        <div id="cf-grade-multi-container" class="hidden bg-gray-50 border border-gray-100 rounded-2xl p-4 space-y-2">
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            เลือกระดับชั้นเรียน (คละระดับชั้นได้) <span class="text-red-400">*</span>
          </label>
          <div id="cf-grade-checkboxes" class="grid grid-cols-3 gap-2">
            <!-- เรนเดอร์ Checkbox อัตโนมัติทาง JS -->
          </div>
        </div>

        <!-- ครูผู้สอน -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">ครูผู้สอน</label>
          <div class="flex gap-2">
            <div class="w-1/3">
              <p class="text-xs text-gray-400 mb-1">รหัสครู</p>
              <input id="cf-teacher-code" type="text" placeholder="เช่น 101"
                class="${INPUT_CLS}" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุล</p>
              <input id="cf-teacher-search" type="text" placeholder="พิมพ์เพื่อค้นหา..."
                class="${INPUT_CLS}" autocomplete="off" />
              <div id="cf-teacher-dropdown"
                class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                       rounded-xl shadow-lg overflow-y-auto" style="max-height:200px"></div>
            </div>
          </div>
          <div id="cf-teacher-selected"
            class="hidden mt-2 flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-xl text-sm text-emerald-700">
            <span class="text-emerald-400">✓</span>
            <span id="cf-teacher-name" class="font-medium"></span>
            <button type="button" id="cf-teacher-clear" class="ml-auto text-gray-400 hover:text-red-400 text-xs">✕</button>
          </div>
          <input type="hidden" id="cf-teacher-id" />
        </div>
        <!-- เบอร์ติดต่อ -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">เบอร์ติดต่อครู</label>
          <input id="cf-phone" type="tel" inputmode="numeric" placeholder="0XX XXX XXXX"
            maxlength="12" class="${INPUT_CLS}" />
          <p class="text-xs text-gray-400 mt-1">เบอร์จะถูกเติมอัตโนมัติเมื่อเลือกครูผู้สอน</p>
        </div>

        <!-- ครูผู้สอนร่วม (Co-teachers) -->
        <div id="cf-coteach-section" class="hidden border border-indigo-100 bg-indigo-50/30 rounded-2xl p-5 space-y-4">
          <div>
            <label class="block text-sm font-semibold text-indigo-900 mb-1">ครูผู้ร่วมสอน</label>
            <p class="text-xs text-indigo-700">ระบุรหัสครู หรือค้นหาชื่อเพื่อเพิ่มผู้ร่วมสอนร่วมจัดการห้องเรียน</p>
          </div>
          <div class="flex gap-2">
            <div class="w-1/3">
              <p class="text-xs text-gray-400 mb-1">รหัสครูผู้ร่วมสอน</p>
              <input id="cf-coteach-code" type="text" placeholder="เช่น 102"
                class="${INPUT_CLS} bg-white" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุลครูผู้ร่วมสอน</p>
              <input id="cf-coteach-search" type="text" placeholder="พิมพ์เพื่อค้นหาครูผู้ร่วมสอน..."
                class="${INPUT_CLS} bg-white" autocomplete="off" />
              <div id="cf-coteach-dropdown"
                class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                       rounded-xl shadow-lg overflow-y-auto" style="max-height:200px"></div>
            </div>
          </div>
          <div id="cf-coteach-selected-list" class="flex flex-wrap gap-2 pt-1">
            <!-- เรนเดอร์ป้ายชื่อครูผู้ร่วมสอน (Tags) ที่นี่ -->
          </div>
        </div>

        <!-- หัวหน้ากลุ่มสาระ / หัวหน้าสาขาวิชา (typeahead) -->
        <div class="bg-gray-50 rounded-xl p-4">
          <label id="cf-head-label" class="block text-sm font-semibold text-gray-700 mb-1">${_headLabel(_initSg)}</label>
          <div class="relative">
            <input id="cf-dept-head" type="text" placeholder="พิมพ์เพื่อค้นหา หรือระบบเติมอัตโนมัติ"
              class="${INPUT_CLS} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p id="cf-head-hint" class="text-xs text-gray-400 mt-1">${_headHint(_initSg)}</p>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cf-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            ${editData ? 'บันทึกการแก้ไข' : 'บันทึกคอร์สวิชา'}
          </button>
        </div>
      </form>
    </div>
  </div>`)

  // ─── Bind logic ──────────────────────────────────────────────────────────

  // 0. Helpers สำหรับโหมดสอนร่วม & คละชั้น
  const _isMultiGradeOrCoTaught = editData && (
    (editData.grade_level && editData.grade_level.includes(',')) ||
    (_selectedCoTeachers.length > 0)
  )

  function _renderCoTeachersTags() {
    const listEl = document.getElementById('cf-coteach-selected-list')
    if (!listEl) return
    listEl.innerHTML = _selectedCoTeachers.map(t => `
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-700 shadow-sm animate-fade">
        <span>${t.full_name} (${t.teacher_code || '—'})</span>
        <button type="button" class="text-indigo-400 hover:text-red-500 font-bold transition ml-0.5 remove-coteacher-btn" data-id="${t.id}">✕</button>
      </span>
    `).join('')

    listEl.querySelectorAll('.remove-coteacher-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.id)
        _selectedCoTeachers = _selectedCoTeachers.filter(t => t.id !== id)
        _renderCoTeachersTags()
      })
    })
  }

  function _showCoTeachingExplanationModal(onConfirm, onCancel) {
    document.getElementById('coteach-explain-modal')?.remove()
    const m = document.createElement('div')
    m.id = 'coteach-explain-modal'
    m.className = 'fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade'
    m.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md p-7 border border-indigo-50">
        <div class="text-center mb-6">
          <div class="text-5xl mb-4">👥</div>
          <h3 class="font-bold text-gray-800 text-lg mb-2">โหมดสอนร่วม & คละระดับชั้น</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            เมื่อเปิดใช้งานโหมดนี้ ท่านจะสามารถเลือก **คละระดับชั้นได้หลายระดับชั้น** ในคอร์สเดียว และสามารถระบุ **ครูผู้ร่วมสอน** เพื่อร่วมจัดการห้องเรียน (กรอกคะแนน เช็คชื่อ บันทึก ปพ.5) ได้พร้อมกัน
          </p>
          <div class="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-2xl text-left text-xs text-amber-800 flex gap-2">
            <span class="text-base leading-none">⚠️</span>
            <span>หากต้องการปิดโหมดนี้ภายหลัง ข้อมูลระดับชั้นจะเหลือเพียงระดับชั้นเดียว และรายชื่อผู้ร่วมสอนจะถูกล้างออกทั้งหมด</span>
          </div>
        </div>
        <div class="flex gap-3">
          <button id="cf-explain-cancel"
            class="flex-1 py-3 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">
            ยกเลิก
          </button>
          <button id="cf-explain-confirm"
            class="flex-1 py-3 rounded-2xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-md transition">
            ยืนยันเปิดโหมด
          </button>
        </div>
      </div>`
    document.body.appendChild(m)
    m.querySelector('#cf-explain-cancel').addEventListener('click', () => {
      m.remove()
      onCancel()
    })
    m.querySelector('#cf-explain-confirm').addEventListener('click', () => {
      m.remove()
      onConfirm()
    })
  }

  function _showCoTeachingTurnOffConfirm(onConfirm, onCancel) {
    document.getElementById('coteach-confirm-modal')?.remove()
    const m = document.createElement('div')
    m.id = 'coteach-confirm-modal'
    m.className = 'fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade'
    m.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 border border-red-50 text-center">
        <div class="text-4xl mb-3">⚠️</div>
        <h3 class="font-bold text-gray-800 text-base mb-1">ปิดโหมดสอนร่วม & คละชั้น?</h3>
        <p class="text-xs text-gray-500 mb-5 leading-relaxed">
          หากปิดโหมดนี้ ข้อมูลครูผู้ร่วมสอนและระดับชั้นคละจะถูกรีเซ็ตกลับเป็นปกติ คุณต้องการดำเนินการต่อใช่หรือไม่?
        </p>
        <div class="flex gap-3">
          <button id="cf-off-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">
            ยกเลิก
          </button>
          <button id="cf-off-confirm"
            class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition">
            ยืนยันปิดโหมด
          </button>
        </div>
      </div>`
    document.body.appendChild(m)
    m.querySelector('#cf-off-cancel').addEventListener('click', () => {
      m.remove()
      onCancel()
    })
    m.querySelector('#cf-off-confirm').addEventListener('click', () => {
      m.remove()
      onConfirm()
    })
  }

  function _renderGradeCheckboxes(sg, checkedStr = '') {
    const list = GRADE_OPTS[sg] ?? []
    const container = document.getElementById('cf-grade-checkboxes')
    if (!container) return
    const checkedList = checkedStr ? checkedStr.split(',').map(s => s.trim()) : []
    
    container.innerHTML = list.map(g => `
      <label class="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition">
        <input type="checkbox" class="cf-grade-cb w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" value="${g}" ${checkedList.includes(g) ? 'checked' : ''} />
        <span class="text-sm font-medium text-gray-700">${g}</span>
      </label>
    `).join('')
  }

  const HINTS = {
    ACDM: 'มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)',
    AGM: 'ศาสนา: อิสระ เช่น ฮ21101',
    ACDMVOC: 'ปวช: อิสระ',
    AGMVOC: 'ศาสนาปวช: อิสระ',
  }

  // 1. กลุ่มวิชา → กรองกลุ่มสาระ/สาขาวิชา + อัปเดต labels + grade options + hint
  document.getElementById('cf-subg').addEventListener('change', e => {
    const sg = e.target.value
    // อัปเดต labels กลุ่มสาระ / สาขาวิชา
    document.getElementById('cf-dept-label').firstChild.textContent = _deptLabel(sg) + ' '
    document.getElementById('cf-head-label').textContent = _headLabel(sg)
    document.getElementById('cf-head-hint').textContent  = _headHint(sg)
    // อัปเดต dept dropdown
    const deptEl = document.getElementById('cf-dept')
    const prevVal = deptEl.value
    deptEl.innerHTML = _deptOptions(_filterDepts(sg))
    deptEl.options[0].textContent = _deptPH(sg)
    if (prevVal) deptEl.value = prevVal
    // อัปเดต grade
    const gradeEl = document.getElementById('cf-grade')
    const opts = GRADE_OPTS[sg] ?? []
    gradeEl.innerHTML = opts.length
      ? ['<option value="">— เลือกชั้นปี —</option>',
         ...opts.map(g=>`<option value="${g}">${g}</option>`)].join('')
      : '<option value="">— เลือกกลุ่มวิชาก่อน —</option>'
    document.getElementById('cf-code-hint').textContent = HINTS[sg] ?? ''
    
    // อัปเดต checkboxes คละระดับชั้นด้วย
    _renderGradeCheckboxes(sg)
  })

  // 2. กลุ่มสาระ → auto-fill หัวหน้าหมวด (เฉพาะถ้ายังไม่ได้พิมพ์เอง)
  document.getElementById('cf-dept').addEventListener('change', e => {
    const code = e.target.value
    const heads = depts.filter(x => x.dept_code === code && x.head_name).map(x => x.head_name)
    const headEl = document.getElementById('cf-dept-head')
    if (heads.length === 1) {
      headEl.value = heads[0]
    } else if (heads.length > 1) {
      headEl.value = ''
      _renderHeadDrop(heads)
    } else {
      headEl.value = ''
    }
  })

  // 3. หัวหน้ากลุ่มสาระ — typeahead
  const headEl   = document.getElementById('cf-dept-head')
  const headDrop = document.getElementById('cf-head-dropdown')

  function _renderHeadDrop(list) {
    headDrop.innerHTML = list.map(h=>
      `<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${h}">${h}</div>`
    ).join('')
    headDrop.querySelectorAll('.head-opt').forEach(el =>
      el.addEventListener('mousedown', ev => {
        ev.preventDefault()
        headEl.value = el.dataset.val
        headDrop.classList.add('hidden')
      })
    )
    headDrop.classList.toggle('hidden', !list.length)
  }

  headEl.addEventListener('input', () => {
    const q = headEl.value.toLowerCase()
    const filtered = allHeads.filter(h => h.toLowerCase().includes(q))
    _renderHeadDrop(q ? filtered : allHeads)
  })
  headEl.addEventListener('focus', () => {
    const q = headEl.value.toLowerCase()
    _renderHeadDrop(q ? allHeads.filter(h=>h.toLowerCase().includes(q)) : allHeads)
  })
  headEl.addEventListener('blur', () => setTimeout(()=>headDrop.classList.add('hidden'),150))

  // 4. Teacher search (dual-input pattern)
  const codeEl   = document.getElementById('cf-teacher-code')
  const nameEl   = document.getElementById('cf-teacher-search')
  const dropEl   = document.getElementById('cf-teacher-dropdown')
  const selEl    = document.getElementById('cf-teacher-selected')
  const selName  = document.getElementById('cf-teacher-name')
  const clearBtn = document.getElementById('cf-teacher-clear')
  const idEl     = document.getElementById('cf-teacher-id')
  const phoneEl  = document.getElementById('cf-phone')

  function _pickTeacher(t) {
    if (!t) {
      idEl.value = ''; codeEl.value = ''; nameEl.value = ''
      selEl.classList.add('hidden'); selEl.classList.remove('flex')
      phoneEl.value = ''
      return
    }
    idEl.value   = t.id
    codeEl.value = t.teacher_code ?? ''
    nameEl.value = t.full_name    ?? ''
    selName.textContent = `${t.full_name}${t.teacher_code ? ` (${t.teacher_code})` : ''}`
    selEl.classList.remove('hidden'); selEl.classList.add('flex')
    phoneEl.value = formatPhone(t.phone ?? '')
    dropEl.classList.add('hidden')
  }
  function _renderDrop(list) {
    dropEl.innerHTML = !list.length
      ? `<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>`
      : list.map(t=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${t.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${t.teacher_code??''}</span>
            <span class="font-medium">${t.full_name}</span>
          </div>`).join('')
    dropEl.querySelectorAll('.t-opt').forEach(el =>
      el.addEventListener('mousedown', e => {
        e.preventDefault()
        _pickTeacher(teachers.find(x=>String(x.id)===el.dataset.id))
      })
    )
    dropEl.classList.remove('hidden')
  }

  // pre-fill ครูปัจจุบัน
  if (teacher && !editData) {
    const me = teachers.find(t => t.id === teacher.id)
    if (me) _pickTeacher(me)
  }

  codeEl.oninput = () => {
    const q = codeEl.value.trim().toLowerCase()
    if (!q) { _pickTeacher(null); return }
    const exact = teachers.find(t=>(t.teacher_code??'').toLowerCase()===q)
    if (exact) _pickTeacher(exact)
    else {
      const f = teachers.filter(t=>(t.teacher_code??'').toLowerCase().startsWith(q))
      if (f.length) _renderDrop(f)
    }
  }
  nameEl.onfocus = () => _renderDrop(teachers)
  nameEl.oninput = () => {
    const q = nameEl.value.toLowerCase()
    _renderDrop(q ? teachers.filter(t=>t.full_name.toLowerCase().includes(q)||(t.teacher_code??'').toLowerCase().includes(q)) : teachers)
  }
  nameEl.onblur = () => setTimeout(()=>dropEl.classList.add('hidden'),150)
  clearBtn.addEventListener('click', ()=>_pickTeacher(null))

  // Bind co-teaching toggle & sections
  const toggleEl = document.getElementById('cf-toggle-coteach')
  const singleGradeWrapper = document.getElementById('cf-grade-single-wrapper')
  const multiGradeContainer = document.getElementById('cf-grade-multi-container')
  const coteachSection = document.getElementById('cf-coteach-section')

  toggleEl.addEventListener('change', e => {
    const isChecked = e.target.checked
    if (isChecked) {
      toggleEl.checked = false
      _showCoTeachingExplanationModal(
        // Confirm
        () => {
          toggleEl.checked = true
          singleGradeWrapper.classList.add('hidden')
          multiGradeContainer.classList.remove('hidden')
          coteachSection.classList.remove('hidden')
          
          const sg = document.getElementById('cf-subg').value
          _renderGradeCheckboxes(sg)
          _renderCoTeachersTags()
        },
        // Cancel
        () => {
          toggleEl.checked = false
        }
      )
    } else {
      _showCoTeachingTurnOffConfirm(
        // Confirm
        () => {
          toggleEl.checked = false
          singleGradeWrapper.classList.remove('hidden')
          multiGradeContainer.classList.add('hidden')
          coteachSection.classList.add('hidden')
          _selectedCoTeachers = []
        },
        // Cancel
        () => {
          toggleEl.checked = true
        }
      )
    }
  })

  // Co-teacher search input binding
  const coCodeEl   = document.getElementById('cf-coteach-code')
  const coNameEl   = document.getElementById('cf-coteach-search')
  const coDropEl   = document.getElementById('cf-coteach-dropdown')

  function _pickCoTeacher(t) {
    if (!t) return
    if (_selectedCoTeachers.some(x => x.id === t.id)) {
      showToast('ครูท่านนี้ถูกเลือกเป็นผู้ร่วมสอนแล้ว', 'warning')
      coCodeEl.value = ''; coNameEl.value = ''
      return
    }
    const mainTid = Number(idEl.value)
    if (t.id === mainTid) {
      showToast('ไม่สามารถเลือกครูผู้สอนหลักเป็นครูผู้ร่วมสอนได้', 'warning')
      coCodeEl.value = ''; coNameEl.value = ''
      return
    }

    _selectedCoTeachers.push(t)
    _renderCoTeachersTags()
    coCodeEl.value = ''; coNameEl.value = ''
    coDropEl.classList.add('hidden')
  }

  function _renderCoDrop(list) {
    coDropEl.innerHTML = !list.length
      ? `<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>`
      : list.map(t=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 co-t-opt" data-id="${t.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${t.teacher_code??''}</span>
            <span class="font-medium">${t.full_name}</span>
          </div>`).join('')
    coDropEl.querySelectorAll('.co-t-opt').forEach(el =>
      el.addEventListener('mousedown', e => {
        e.preventDefault()
        _pickCoTeacher(teachers.find(x=>String(x.id)===el.dataset.id))
      })
    )
    coDropEl.classList.remove('hidden')
  }

  coCodeEl.oninput = () => {
    const q = coCodeEl.value.trim().toLowerCase()
    if (!q) return
    const exact = teachers.find(t=>(t.teacher_code??'').toLowerCase()===q)
    if (exact) _pickCoTeacher(exact)
    else {
      const f = teachers.filter(t=>(t.teacher_code??'').toLowerCase().startsWith(q))
      if (f.length) _renderCoDrop(f)
    }
  }
  coNameEl.onfocus = () => _renderCoDrop(teachers)
  coNameEl.oninput = () => {
    const q = coNameEl.value.toLowerCase()
    _renderCoDrop(q ? teachers.filter(t=>t.full_name.toLowerCase().includes(q)||(t.teacher_code??'').toLowerCase().includes(q)) : teachers)
  }
  coNameEl.onblur = () => setTimeout(()=>coDropEl.classList.add('hidden'),150)

  // 5. Phone formatting
  phoneEl.addEventListener('input', e => { e.target.value = formatPhone(e.target.value) })

  // 6. Pre-fill ถ้าเป็นโหมดแก้ไข
  if (editData) {
    document.getElementById('cf-name').value  = editData.subject_name ?? ''
    document.getElementById('cf-code').value  = editData.subject_code ?? ''
    if (editData.credit) document.getElementById('cf-credit').value = String(editData.credit)

    // กลุ่มวิชา → filter dept → update grade
    if (editData.subject_group) {
      const subgEl = document.getElementById('cf-subg')
      subgEl.value = editData.subject_group
      // กรองกลุ่มสาระ
      document.getElementById('cf-dept').innerHTML = _deptOptions(_filterDepts(editData.subject_group))
      // grade options
      const gradeEl = document.getElementById('cf-grade')
      const opts = GRADE_OPTS[editData.subject_group] ?? []
      gradeEl.innerHTML = ['<option value="">— เลือกชั้นปี —</option>',
        ...opts.map(g=>`<option value="${g}">${g}</option>`)].join('')
      if (editData.grade_level) gradeEl.value = editData.grade_level
      document.getElementById('cf-code-hint').textContent = HINTS[editData.subject_group] ?? ''
    }

    // กลุ่มสาระ
    if (editData.dept) document.getElementById('cf-dept').value = editData.dept

    // หัวหน้ากลุ่มสาระ: ใช้จาก editData.learning_area ก่อน, ถ้าไม่มี auto-fill จาก dept
    if (editData.learning_area) {
      headEl.value = editData.learning_area
    } else if (editData.dept) {
      const d = depts.find(x => x.dept_code === editData.dept && x.head_name)
      headEl.value = d?.head_name ?? ''
    }

    // ครูผู้สอน → phone มาจาก teacher record
    if (editData.teacher_id) {
      const t = teachers.find(x => x.id === editData.teacher_id)
      if (t) _pickTeacher(t)
    } else {
      // ไม่มี teacher_id → pre-fill ครูปัจจุบัน
      if (teacher) {
        const me = teachers.find(t => t.id === teacher.id)
        if (me) _pickTeacher(me)
      }
    }

    // เปิดโหมดร่วมสอน/คละระดับชั้นตามข้อมูลเดิมที่มี
    if (_isMultiGradeOrCoTaught) {
      toggleEl.checked = true
      singleGradeWrapper.classList.add('hidden')
      multiGradeContainer.classList.remove('hidden')
      coteachSection.classList.remove('hidden')
      
      const sg = editData.subject_group
      _renderGradeCheckboxes(sg, editData.grade_level)
      _renderCoTeachersTags()
    }
  }

  // 7. Form submit
  document.getElementById('course-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('cf-submit')
    const subg   = document.getElementById('cf-subg').value
    const dept   = document.getElementById('cf-dept').value
    const name   = document.getElementById('cf-name').value.trim()
    const code   = document.getElementById('cf-code').value.trim()
    const credit = parseFloat(document.getElementById('cf-credit').value) || null
    
    let grade = ''
    if (toggleEl.checked) {
      const checkedBoxes = Array.from(document.querySelectorAll('.cf-grade-cb:checked'))
      if (!checkedBoxes.length) {
        showToast('กรุณาเลือกอย่างน้อยหนึ่งระดับชั้นเรียน', 'warning'); return
      }
      grade = checkedBoxes.map(cb => cb.value).join(', ')
    } else {
      grade = document.getElementById('cf-grade').value
    }
    
    const tid    = idEl.value
    const phone  = phoneEl.value.trim()
    const head   = headEl.value.trim()
    if (!subg || !name || !grade) {
      showToast('กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี','warning'); return
    }
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const resolvedTeacherId = tid ? Number(tid) : (teacher?.id ?? null)
      const coTeacherIds = toggleEl.checked ? _selectedCoTeachers.map(t => t.id) : []
      
      await onSave({
        subject_group: subg,
        dept:          dept || null,
        subject_name:  name,
        subject_code:  code || null,
        credit,
        grade_level:   grade,
        teacher_id:    resolvedTeacherId,
        learning_area: head || null,
      }, coTeacherIds)
      
      // บันทึก phone ลง teachers table ถ้ากรอก (เฉพาะกรณีเป็นครูคนเดียวกัน)
      if (phone && resolvedTeacherId && resolvedTeacherId === teacher?.id) {
        await updateMyProfile(teacher.id, { phone }).catch(()=>{})
      }
      showToast('บันทึกคอร์สวิชาสำเร็จ','success')
      window._goBack()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''),'error')
    } finally {
      btn.disabled = false; btn.textContent = editData ? 'บันทึกการแก้ไข' : 'บันทึกคอร์สวิชา'
    }
  })

}

// ─── View: First-time Profile Setup (หลัง register) ──────────────────────────

export async function renderProfileSetup(teacher, homeroomRooms = [], onComplete) {
  setActiveNav('setup')
  setTitle('ตั้งค่าโปรไฟล์', 'registration')
  const [depts, allRooms, religionRooms, cfg] = await Promise.all([
    getDepartments().catch(()=>[]),
    getUniqueRooms().catch(()=>[]),
    getUniqueReligionRooms().catch(()=>[]),
    getSystemConfig().catch(()=>({})),
  ])
  const curYear = parseInt(cfg.academicYear ?? 2568)
  const curSem  = parseInt(cfg.semester ?? 1)
  const uniqueDepts = [...new Map(depts.map(d=>[d.dept_code,d])).values()]

  // helper: กรอง dept ตาม category ครู
  const _deptOptsForCat = (cat, selectedCode='') => {
    const list = cat ? uniqueDepts.filter(d => !d.category || d.category === cat) : uniqueDepts
    return `<option value="">— เลือกกลุ่มสาระ —</option>` +
      list.map(d=>`<option value="${d.dept_code}" ${d.dept_code===selectedCode?'selected':''}>${d.dept_name}</option>`).join('')
  }

  // ห้องสามัญ = main_room ที่ขึ้นต้นด้วย ม.
  const samaiRooms   = allRooms.filter(r => /^ม\./.test(r))

  // ห้องศาสนา = religion_room column ของนักเรียน
  const sadsanaRooms = religionRooms
  setContent(`<div class="max-w-lg mx-auto animate-fade">
    <!-- Header -->
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-gradient-to-tr from-emerald-400 to-teal-400 text-white
                  text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
        🎉
      </div>
      <h2 class="text-2xl font-bold text-gray-800">ยินดีต้อนรับ!</h2>
      <p class="text-gray-500 text-sm mt-1">กรุณากรอกข้อมูลเพิ่มเติม เพื่อให้ระบบทำงานได้ถูกต้อง</p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7 space-y-5">
      ${teacher ? `
      <!-- ข้อมูลจาก teachers table -->
      <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-3">
        <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400
                    text-white font-bold text-lg flex items-center justify-center overflow-hidden flex-shrink-0">
          ${teacher.image_url ? `<img src="${teacher.image_url}" class="w-full h-full object-cover" />` : teacher.full_name.charAt(0)}
        </div>
        <div>
          <p class="font-bold text-emerald-900">${teacher.full_name}</p>
          <p class="text-xs text-emerald-600">รหัสครู: ${teacher.teacher_code ?? '—'}</p>
        </div>
      </div>` : `
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-700">
        ⚠️ ไม่พบข้อมูลครูในระบบ — ติดต่อผู้ดูแลระบบเพื่อเชื่อมบัญชี
      </div>`}
      <form id="setup-form" class="space-y-4" ${!teacher ? 'style="opacity:0.5;pointer-events:none"' : ''}>
        <!-- เบอร์โทร -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="setup-phone" type="tel" inputmode="numeric" maxlength="12"
            value="${teacher?.phone??''}" placeholder="0XX XXX XXXX"
            class="${INPUT_CLS}" />
        </div>
        <!-- กลุ่มสาระ (กรองตาม ประเภทครู) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</label>
          <select id="setup-dept" class="${SELECT_CLS}">
            ${_deptOptsForCat(teacher?.category, teacher?.dept ?? '')}
          </select>
        </div>
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มวิชา</label>
          <select id="setup-subg" class="${SELECT_CLS}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${teacher?.subject_group==='ACDM'?'selected':''}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${teacher?.subject_group==='AGM'?'selected':''}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${teacher?.subject_group==='ACDMVOC'?'selected':''}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${teacher?.subject_group==='AGMVOC'?'selected':''}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        <!-- ประเภทครู -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">ประเภทครู</label>
          <div class="flex gap-3">
            ${['สามัญ','ศาสนา'].map(cat => `
            <label class="flex-1 flex items-center gap-2 border rounded-xl px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition
              ${teacher?.category===cat?'border-emerald-400 bg-emerald-50':'border-gray-200'}">
              <input type="radio" name="setup-category" value="${cat}" ${teacher?.category===cat?'checked':''}
                class="text-emerald-600" />
              <span class="text-sm font-medium text-gray-700">${cat}</span>
            </label>`).join('')}
          </div>
        </div>
        <!-- ห้องที่ปรึกษาสามัญ -->
        <div id="setup-room-samai-wrap">
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            ห้องที่ปรึกษา <span class="font-normal text-gray-400">(สามัญ)</span>
            <span class="text-xs text-gray-400 ml-1">— เลือกได้มากกว่า 1 ห้อง</span>
          </label>
          <div class="border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-36 overflow-y-auto">
            ${samaiRooms.length ? samaiRooms.map(r=>`
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
              <input type="checkbox" name="setup-room-samai" value="${r}" ${homeroomRooms.find(h=>h.main_room===r&&h.category==='สามัญ')?'checked':''} class="text-emerald-600 rounded" />
              <span>${r}</span>
            </label>`).join('') : `<p class="text-xs text-gray-400">ยังไม่มีห้องสามัญ</p>`}
          </div>
        </div>
        <!-- ห้องที่ปรึกษาศาสนา -->
        <div id="setup-room-sadsana-wrap">
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            ห้องที่ปรึกษา <span class="font-normal text-gray-400">(ศาสนา)</span>
            <span class="text-xs text-gray-400 ml-1">— เลือกได้มากกว่า 1 ห้อง</span>
          </label>
          <div class="border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-36 overflow-y-auto">
            ${sadsanaRooms.length ? sadsanaRooms.map(r=>`
            <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
              <input type="checkbox" name="setup-room-sadsana" value="${r}" ${homeroomRooms.find(h=>h.main_room===r&&h.category==='ศาสนา')?'checked':''} class="text-emerald-600 rounded" />
              <span>${r}</span>
            </label>`).join('') : `<p class="text-xs text-gray-400">ยังไม่มีห้องศาสนา</p>`}
          </div>
        </div>
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`)
  if (!teacher) return

  // ─── Toggle ห้องที่ปรึกษาตามประเภทครู ───────────────────────────────────
  const _updateRoomVisibility = () => {
    const cat      = document.querySelector('input[name="setup-category"]:checked')?.value
    const wrapSamai   = document.getElementById('setup-room-samai-wrap')
    const wrapSadsana = document.getElementById('setup-room-sadsana-wrap')
    const selSamai    = document.getElementById('setup-room-samai')
    const selSadsana  = document.getElementById('setup-room-sadsana')
    if (cat === 'สามัญ') {
      wrapSamai?.classList.remove('hidden')
      wrapSadsana?.classList.add('hidden')
      if (selSadsana) selSadsana.value = ''
    } else if (cat === 'ศาสนา') {
      wrapSadsana?.classList.remove('hidden')
      wrapSamai?.classList.add('hidden')
      if (selSamai) selSamai.value = ''
    } else {
      wrapSamai?.classList.remove('hidden')
      wrapSadsana?.classList.remove('hidden')
    }
  }
  _updateRoomVisibility()  // set initial state
  document.querySelectorAll('input[name="setup-category"]').forEach(r =>
    r.addEventListener('change', () => {
      _updateRoomVisibility()
      // อัปเดต กลุ่มสาระ dropdown ตามประเภทครูที่เลือก
      const cat = document.querySelector('input[name="setup-category"]:checked')?.value
      const deptSel = document.getElementById('setup-dept')
      const curVal  = deptSel?.value
      if (deptSel) deptSel.innerHTML = _deptOptsForCat(cat, curVal)
    })
  )

  // phone format
  document.getElementById('setup-phone').addEventListener('input', e => {
    const d = e.target.value.replace(/\D/g,'').slice(0,10)
    e.target.value = d.length<=3?d:d.length<=6?`${d.slice(0,3)} ${d.slice(3)}`:`${d.slice(0,3)} ${d.slice(3,6)} ${d.slice(6)}`
  })
  document.getElementById('setup-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('setup-save')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const dept    = document.getElementById('setup-dept').value || null
      const subg    = document.getElementById('setup-subg').value || null
      const cat     = document.querySelector('input[name="setup-category"]:checked')?.value || null
      const phone   = document.getElementById('setup-phone').value.trim() || null
      const roomsSamai   = [...document.querySelectorAll('input[name="setup-room-samai"]:checked')].map(el=>el.value)
      const roomsSadsana = [...document.querySelectorAll('input[name="setup-room-sadsana"]:checked')].map(el=>el.value)

      // อัปเดต teachers
      await updateMyProfile(teacher.id, { dept, subject_group: subg, category: cat, phone })

      // sync ห้องที่ปรึกษา (delete ที่ไม่เลือก + upsert ที่เลือก)
      const { upsertHomeroomTeacher, deleteHomeroomTeacher } = await import('./api.js')
      const _syncRooms = async (category, selectedRooms) => {
        const existing = homeroomRooms.filter(h => h.category === category)
        await Promise.all(existing.filter(h => !selectedRooms.includes(h.main_room)).map(h => deleteHomeroomTeacher(h.id).catch(()=>{})))
        await Promise.all(selectedRooms.map(room => upsertHomeroomTeacher({ teacher_id: teacher.id, main_room: room, category, academic_year: curYear, semester: curSem })))
      }
      await Promise.all([_syncRooms('สามัญ', roomsSamai), _syncRooms('ศาสนา', roomsSadsana)])
      showToast('บันทึกโปรไฟล์สำเร็จ ✅', 'success')
      if (onComplete) await onComplete(teacher.profile_id)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''), 'error')
    } finally {
      btn.disabled = false; btn.textContent = 'บันทึกและเริ่มใช้งาน →'
    }
  })

}

// ─── View: Profile Edit ───────────────────────────────────────────────────────

export async function renderProfile(teacher, homeroomRooms = [], onRefresh) {
  setActiveNav('profile')
  setTitle('โปรไฟล์ของฉัน', 'registration')

  // โหลด departments + ห้องทั้งหมด
  const [depts, allSamaiRooms, allReligionRooms] = await Promise.all([
    getDepartments().catch(()=>[]),
    getUniqueRooms().catch(()=>[]),
    getUniqueReligionRooms().catch(()=>[]),
  ])

  // filter ก่อน dedup — เพื่อกัน SOC ของศาสนาไม่ให้ทับ SOC ของสามัญ (dept_code ซ้ำกัน)
  const teacherCat = teacher?.category
  const filtered = teacherCat
    ? depts.filter(d => !d.category || d.category === teacherCat)
    : depts
  const filteredDepts = [...new Map(filtered.map(d=>[d.dept_code,d])).values()]

  const phoneDisplay = formatPhone(teacher?.phone ?? '')

  setContent(`<div class="max-w-lg mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">แก้ไขโปรไฟล์</h2>
    </div>
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7">
      <!-- รูปโปรไฟล์ -->
      <div class="flex flex-col items-center mb-6">
        <div id="prof-avatar"
          class="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400
                 text-white text-3xl font-bold flex items-center justify-center
                 overflow-hidden border-4 border-white shadow-md">
          ${teacher?.image_url
            ? `<img src="${teacher.image_url}" class="w-full h-full object-cover" />`
            : (teacher?.full_name ?? 'ค').charAt(0).toUpperCase()}
        </div>
        <label class="mt-3 cursor-pointer">
          <span class="text-sm text-emerald-600 hover:text-emerald-800 font-medium">📷 เปลี่ยนรูปโปรไฟล์</span>
          <input id="prof-photo-file" type="file" accept="image/*" class="hidden" />
        </label>
      </div>
      ${!teacher ? `
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm text-amber-700">
        ⚠️ บัญชีนี้ยังไม่ได้เชื่อมกับข้อมูลครู กรุณาติดต่อผู้ดูแลระบบ
      </div>` : ''}
      <form id="prof-form" class="space-y-4" ${!teacher ? 'style="opacity:0.5;pointer-events:none"' : ''}>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">รหัสครู</label>
            <input type="text" value="${teacher?.teacher_code??''}"
              class="${INPUT_CLS} bg-gray-50" readonly />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <input type="text" value="${teacher?.category??'—'}"
              class="${INPUT_CLS} bg-gray-50" readonly />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
          <input id="prof-name" type="text" value="${teacher?.full_name??''}" class="${INPUT_CLS}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมลติดต่อ</label>
          <input id="prof-email" type="email" value="${teacher?.login_email || teacher?.auth_email || ''}" class="${INPUT_CLS}" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้เป็นค่าเริ่มต้นตอนแชร์ไฟล์ Google Sheet และสำหรับการแจ้งเตือนในอนาคต (บันทึกได้ทันที)</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยูเซอร์เนมส่วนตัว</label>
          <input id="prof-username" type="text" value="${teacher?.username??''}" placeholder="เช่น hambal.waji"
            class="${INPUT_CLS} font-mono lowercase" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร เพื่อใช้ล็อกอินแทนอีเมลได้</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="prof-phone" type="tel" inputmode="numeric" value="${phoneDisplay}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${INPUT_CLS}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${filteredDepts.length > 0
            ? `<select id="prof-dept" class="${SELECT_CLS} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${filteredDepts.map(d=>`<option value="${d.dept_code}" ${d.dept_code===teacher?.dept?'selected':''}>${d.dept_name} (${d.dept_code})</option>`).join('')}
               </select>`
            : `<input type="hidden" id="prof-dept" value="" />`}
          <input type="text" id="prof-dept-txt" value="${teacher?.dept??''}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${INPUT_CLS} font-mono uppercase" />
          <p class="text-[11px] text-gray-400 mt-1">ปุ่มบันทึกคะแนนอ่านฯ จะโชว์เมื่อรหัส = <b>THAI</b></p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มวิชา (subject_group)</label>
          <select id="prof-subg" class="${SELECT_CLS}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${teacher?.subject_group==='ACDM'   ?'selected':''}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${teacher?.subject_group==='AGM'    ?'selected':''}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${teacher?.subject_group==='ACDMVOC'?'selected':''}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${teacher?.subject_group==='AGMVOC' ?'selected':''}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        <!-- ห้องที่ปรึกษา -->
        <div class="border-t border-gray-100 pt-4">
          <label class="block text-sm font-semibold text-gray-700 mb-3">🏠 ห้องที่ปรึกษา</label>
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ห้องสามัญ — เลือกได้มากกว่า 1 ห้อง</label>
              <div class="border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-36 overflow-y-auto">
                ${allSamaiRooms.length ? allSamaiRooms.map(r=>`
                <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
                  <input type="checkbox" name="prof-room-samai" value="${r}" ${homeroomRooms.find(h=>h.main_room===r&&h.category==='สามัญ')?'checked':''} class="text-emerald-600 rounded" />
                  <span>${r}</span>
                </label>`).join('') : `<p class="text-xs text-gray-400">ยังไม่มีห้องสามัญ</p>`}
              </div>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ห้องศาสนา — เลือกได้มากกว่า 1 ห้อง</label>
              <div class="border border-gray-200 rounded-xl p-3 space-y-1.5 max-h-36 overflow-y-auto">
                ${allReligionRooms.length ? allReligionRooms.map(r=>`
                <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-emerald-700">
                  <input type="checkbox" name="prof-room-religion" value="${r}" ${homeroomRooms.find(h=>h.main_room===r&&h.category==='ศาสนา')?'checked':''} class="text-emerald-600 rounded" />
                  <span>${r}</span>
                </label>`).join('') : `<p class="text-xs text-gray-400">ยังไม่มีห้องศาสนา</p>`}
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._navTo('overview')"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="prof-save" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            บันทึก
          </button>
        </div>
      </form>
    </div>

    <!-- เปลี่ยนรหัสผ่าน -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-7 mt-4">
      <h3 class="font-bold text-gray-800 mb-4">🔒 เปลี่ยนรหัสผ่าน</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">รหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-new" type="password" placeholder="อย่างน้อย 6 ตัวอักษร" class="${INPUT_CLS}" autocomplete="new-password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-confirm" type="password" placeholder="พิมพ์ซ้ำอีกครั้ง" class="${INPUT_CLS}" autocomplete="new-password" />
        </div>
        <button id="prof-pw-save"
          class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
          บันทึกรหัสผ่านใหม่
        </button>
      </div>
    </div>
  </div>`)
  if (!teacher) return

  // phone format
  document.getElementById('prof-phone').addEventListener('input', e => {
    e.target.value = formatPhone(e.target.value)
  })

  // photo preview
  document.getElementById('prof-photo-file').addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return
    document.getElementById('prof-avatar').innerHTML =
      `<img src="${URL.createObjectURL(f)}" class="w-full h-full object-cover" />`
  })

  // save
  document.getElementById('prof-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('prof-save')
    const name = document.getElementById('prof-name').value.trim()
    if (!name) { showToast('กรุณากรอกชื่อ-นามสกุล','warning'); return }
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const deptSel = document.getElementById('prof-dept')
      const deptTxt = document.getElementById('prof-dept-txt')
      const subgEl  = document.getElementById('prof-subg')
      // text input override select (ถ้ากรอกตรงให้ใช้ก่อน)
      const deptVal = (deptTxt?.value.trim().toUpperCase() || deptSel?.value || '').trim() || null
      const username = document.getElementById('prof-username').value.trim().toLowerCase()
      const email = document.getElementById('prof-email').value.trim()
      if (username && !/^[a-z0-9._-]{3,32}$/.test(username)) {
        showToast('ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร', 'warning')
        btn.disabled = false; btn.textContent = 'บันทึก'
        return
      }
      const payload = {
        full_name:     name,
        phone:         document.getElementById('prof-phone').value.trim() || null,
        dept:          deptVal,
        subject_group: subgEl?.value || null,
        username:      username || null,
        login_email:   email || null,
      }
      const photoFile = document.getElementById('prof-photo-file').files?.[0]
      if (photoFile) payload.image_url = await uploadTeacherPhoto(teacher.id, photoFile)
      await updateMyProfile(teacher.id, payload)

      // sync ห้องที่ปรึกษา (delete ที่ไม่เลือก + upsert ที่เลือก)
      const { upsertHomeroomTeacher, deleteHomeroomTeacher, getSystemConfig: _cfg } = await import('./api.js')
      const cfg = await _cfg().catch(()=>({}))
      const curYear = parseInt(cfg.academicYear ?? new Date().getFullYear() + 543)
      const curSem  = parseInt(cfg.semester ?? 1)
      const roomsSamai    = [...document.querySelectorAll('input[name="prof-room-samai"]:checked')].map(el=>el.value)
      const roomsReligion = [...document.querySelectorAll('input[name="prof-room-religion"]:checked')].map(el=>el.value)
      const _syncRooms = async (category, selectedRooms) => {
        const existing = homeroomRooms.filter(h => h.category === category)
        await Promise.all(existing.filter(h => !selectedRooms.includes(h.main_room)).map(h => deleteHomeroomTeacher(h.id).catch(()=>{})))
        await Promise.all(selectedRooms.map(room => upsertHomeroomTeacher({ teacher_id: teacher.id, main_room: room, category, academic_year: curYear, semester: curSem })))
      }
      await Promise.all([_syncRooms('สามัญ', roomsSamai), _syncRooms('ศาสนา', roomsReligion)])

      showToast('บันทึกโปรไฟล์สำเร็จ','success')
      if (onRefresh) await onRefresh(teacher.profile_id)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''),'error')
    } finally {
      btn.disabled = false; btn.textContent = 'บันทึก'
    }
  })

  // เปลี่ยนรหัสผ่าน
  document.getElementById('prof-pw-save')?.addEventListener('click', async () => {
    const newPw  = document.getElementById('prof-pw-new').value
    const confPw = document.getElementById('prof-pw-confirm').value
    if (!newPw) { showToast('กรุณากรอกรหัสผ่านใหม่', 'warning'); return }
    if (newPw.length < 6) { showToast('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร', 'warning'); return }
    if (newPw !== confPw) { showToast('รหัสผ่านไม่ตรงกัน', 'warning'); return }
    const btn = document.getElementById('prof-pw-save')
    btn.disabled = true; btn.textContent = '⏳ กำลังบันทึก...'
    try {
      const { error } = await supabase.auth.updateUser({ password: newPw })
      if (error) throw error
      showToast('เปลี่ยนรหัสผ่านสำเร็จ ✅', 'success')
      document.getElementById('prof-pw-new').value    = ''
      document.getElementById('prof-pw-confirm').value = ''
    } catch (err) {
      showToast('เปลี่ยนรหัสผ่านไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    } finally {
      btn.disabled = false; btn.textContent = 'บันทึกรหัสผ่านใหม่'
    }
  })
}

// ─── View: Class Registration Form (2.2) ──────────────────────────────────────

const _sheetUrl = sheetId => `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/edit`
const _sheetCopyUrl = sheetId => `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/copy`
const _extractSheetId = value => {
  const raw = String(value ?? '').trim()
  if (!raw) return ''
  const match = raw.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/) || raw.match(/^[a-zA-Z0-9_-]{20,}$/)
  return Array.isArray(match) ? (match[1] || match[0]) : ''
}

