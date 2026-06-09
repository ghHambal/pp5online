import {
  getScoreColumns, createScoreColumn, updateScoreColumn, deleteScoreColumn,
  updateColumnSortOrders,
  getStudentScores, saveStudentScore, getSystemConfig, getMyClasses,
  detectAssignmentKind, getSheetColumnOptions,
  getClassStudents, fillLifeSkillScoresForClass, fillPrayerScoresForReligionClass,
  getReadingScoreColumns, getReadingScores,
  getTeacherExamRequests, updateExamResult,
} from './api.js'
import { showToast } from './ui.js'
import { renderScoreColumns, evalFormula, assignBonusVars } from './teacher-score-columns.js'
import {
  setContent, setTitle, setActiveNav, _htmlEsc, _fmtDate, _readingGrade,
} from './teacher-views-utils.js'

export function renderGrades() {
  setActiveNav('grades')
  setTitle('บันทึกคะแนน', 'scores')
  setContent(`<div class="text-center py-20 text-gray-400">
    <p class="text-5xl mb-4">📝</p>
    <p class="font-medium text-gray-600">เลือกห้องเรียนจากเมนู "ห้องเรียนของฉัน"</p>
    <p class="text-sm mt-2">แล้วกดปุ่ม 📝 คะแนน ที่การ์ดห้องเรียน</p>
  </div>`)
}

// ─── Grade Book Grid ──────────────────────────────────────────────────────────
// คำนวณเกรด จากเปอร์เซ็นต์
function _pctToGrade(pct) {
  if (pct >= 80) return 4.0
  if (pct >= 75) return 3.5
  if (pct >= 70) return 3.0
  if (pct >= 65) return 2.5
  if (pct >= 60) return 2.0
  if (pct >= 55) return 1.5
  if (pct >= 50) return 1.0
  return 0
}
// คะแนนคุณลักษณะจากเกรด
function _gradeToKhuna(grade) {
  if (grade >= 3.5) return { label: 'ดีเยี่ยม', cls: 'text-emerald-600' }
  if (grade >= 2.5) return { label: 'ดี',       cls: 'text-blue-600' }
  if (grade >= 1.0) return { label: 'ผ่าน',     cls: 'text-amber-500' }
  return { label: 'ไม่ผ่าน', cls: 'text-red-600' }
}

export async function renderGradesGrid(teacher, classData) {
  window._currentGradeTeacher = teacher
  setActiveNav('grades')
  setTitle('บันทึกคะแนน', 'scores')
  const ms = classData.master_subjects

  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...</div>`)

  try {
    // ถ้า virtual class (มี source_class_id) → ดึง score columns + scores จาก source
    const scoreClassId = classData.source_class_id ?? classData.id
    const [students, rawCols, rawScoreRows, midSheetOpts, finSheetOpts, regularSheetOpts, sysCfg, allMyClasses] = await Promise.all([
      getClassStudents(classData.id),
      getScoreColumns(scoreClassId),
      getStudentScores(scoreClassId),
      getSheetColumnOptions(classData.id, 'กลางภาค'),
      getSheetColumnOptions(classData.id, 'ปลายภาค'),
      getSheetColumnOptions(classData.id, 'ระหว่างเรียน'),
      getSystemConfig().catch(()=>({})),
      teacher ? getMyClasses(teacher.id).catch(()=>[]) : Promise.resolve([]),
    ])

    // ตรวจหาวิชาเดียวกันในห้องอื่น (หน่วงหลัง render)
    if (classData.course_id && rawCols.length === 0) {
      setTimeout(async () => {
        try {
          const sameSubject = allMyClasses.filter(c => c.id !== classData.id && c.course_id === classData.course_id)
          const withCols = (await Promise.all(
            sameSubject.map(async c => {
              const cols = await getScoreColumns(c.id).catch(()=>[])
              return cols.length ? { ...c, cols } : null
            })
          )).filter(Boolean)
          if (!withCols.length) return
          document.getElementById('grade-same-subj-popup')?.remove()
          const popup = document.createElement('div')
          popup.id = 'grade-same-subj-popup'
          popup.className = 'fixed inset-0 z-[190] flex items-center justify-center p-6'
          popup.style.background = 'rgba(0,0,0,0.45)'
          popup.innerHTML = `
            <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
              <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
                <div class="text-3xl mb-2">📋</div>
                <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
                <p class="text-indigo-100 text-xs mt-1">ยังไม่มีคอลัมน์คะแนน — ต้องการคัดลอกจากห้องที่มีอยู่แล้วไหม?</p>
              </div>
              <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
                ${withCols.map(c => `
                <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-gray-800 truncate">${c.class_name}</p>
                    <p class="text-xs text-gray-400">${c.cols.length} คอลัมน์</p>
                  </div>
                  <button class="grade-copy-cols flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
                    data-src="${c.id}">
                    คัดลอก
                  </button>
                </div>`).join('')}
              </div>
              <div class="px-5 pb-5">
                <button id="grade-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
              </div>
            </div>`
          document.body.appendChild(popup)
          popup.querySelector('#grade-ssp-close').addEventListener('click', () => popup.remove())
          popup.querySelectorAll('.grade-copy-cols').forEach(btn => {
            btn.addEventListener('click', async () => {
              const src = withCols.find(c => c.id === parseInt(btn.dataset.src))
              btn.disabled = true; btn.textContent = '⏳'
              try {
                for (const col of src.cols) {
                  await createScoreColumn({ class_id: classData.id, assignment_name: col.assignment_name,
                    assignment_type: col.assignment_type, sheet_column: col.sheet_column ?? '', max_score: col.max_score })
                }
                showToast(`คัดลอก ${src.cols.length} คอลัมน์จาก ${src.class_name} ✅`, 'success')
                popup.remove()
                renderGradesGrid(teacher, classData)
              } catch (err) {
                showToast('คัดลอกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
                btn.disabled = false; btn.textContent = 'คัดลอก'
              }
            })
          })
        } catch {}
      }, 600)
    }

    // โหลดข้อมูลคะแนนอ่านคิดวิเคราะห์ → สร้าง evalMap ต่อ studentId
    const _rsYear = parseInt(sysCfg.academicYear ?? 2568)
    const _rsSem  = parseInt(sysCfg.semester ?? 1)
    const subjectGroup = ms?.subject_group ?? ''
    const isLifeSkillClass = classData?.skill_group === 'ชีวิต'
    const isReligionClass = ['AGM', 'AGMVOC'].includes(subjectGroup)
    let scoreRows = rawScoreRows
    let priorityColumnNames = []

    if (isLifeSkillClass) {
      const result = await fillLifeSkillScoresForClass(classData.id, _rsYear, _rsSem)
      priorityColumnNames = result.columnNames ?? []
      scoreRows = await getStudentScores(classData.id)
    } else if (isReligionClass) {
      const result = await fillPrayerScoresForReligionClass(classData.id, {
        semesterStart: sysCfg.semester_start,
        semesterEnd: sysCfg.semester_end,
        attendanceScoreMode: sysCfg.attendanceScoreMode ?? 'recorded',
      })
      priorityColumnNames = result.columnNames ?? ['คะแนนมาเรียน', 'คะแนนละหมาด']
      scoreRows = await getStudentScores(classData.id)
    }

    const _rsCols = await getReadingScoreColumns(_rsYear, _rsSem).catch(()=>[])
    const _rsRows = _rsCols.length ? await getReadingScores(_rsCols.map(c=>c.id)).catch(()=>[]) : []
    const _rsTotals = {}
    for (const r of _rsRows) {
      _rsTotals[r.student_id] = (_rsTotals[r.student_id] ?? 0) + (parseFloat(r.score) || 0)
    }
    const readingEvalMap = {}
    for (const [sidStr, total] of Object.entries(_rsTotals)) {
      const score100 = total / 2
      const g = _readingGrade(score100)
      readingEvalMap[parseInt(sidStr)] = { score100, label: g.label, cls: g.cls }
    }

    let allCols = priorityColumnNames.length ? await getScoreColumns(classData.id) : rawCols
    if (allCols.length === 0) {
      const mkCol = (type, n) => createScoreColumn({
        class_id: classData.id, assignment_name: `คะแนนที่ ${n}`,
        max_score: 20, assignment_type: type, sheet_column: '',
      })
      for (let i = 1; i <= 5; i++) await mkCol('midterm', i)
      for (let i = 1; i <= 5; i++) await mkCol('final', i)
      allCols = await getScoreColumns(classData.id)
    }
    if (priorityColumnNames.length) {
      allCols = [...allCols].sort((a, b) => {
        const ai = priorityColumnNames.indexOf(a.assignment_name)
        const bi = priorityColumnNames.indexOf(b.assignment_name)
        if (ai >= 0 || bi >= 0) {
          if (ai < 0) return 1
          if (bi < 0) return -1
          return ai - bi
        }
        return (a.id ?? 0) - (b.id ?? 0)
      })
    }
    const lockedScoreColumnIds = new Set(
      priorityColumnNames.length
        ? allCols.filter(c => priorityColumnNames.includes(c.assignment_name)).map(c => c.id)
        : []
    )
    const _isLockedScoreColumn = colOrId => {
      const id = typeof colOrId === 'object' ? colOrId?.id : colOrId
      return lockedScoreColumnIds.has(id)
    }
    const _lockedColTitle = c =>
      c.assignment_name === 'คะแนนละหมาด'
        ? 'คะแนนระบบกลาง (แก้ไขไม่ได้)\nคะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา\nหากคะแนนว่าง = ครูที่ปรึกษาศาสนายังไม่ได้บันทึกในสัปดาห์นั้น'
        : 'คะแนนระบบกลาง: แก้ไขไม่ได้'

    // แยก column_type
    const bonusCols   = allCols.filter(c => c.column_type === 'bonus')
    const derivedCols = allCols.filter(c => c.column_type === 'derived')
    const regularCols = allCols.filter(c => (c.column_type ?? 'regular') === 'regular')
    // midCols/finalCols เฉพาะ regular (ไม่นับ bonus/derived ซ้ำ)
    const midCols   = regularCols.filter(c => c.assignment_type !== 'final' && c.assignment_type !== 'ปลายภาค')
    const finalCols = regularCols.filter(c => c.assignment_type === 'final' || c.assignment_type === 'ปลายภาค')
    const bonusWithVars = assignBonusVars(bonusCols)

    // ── โหลด/บันทึกสถานะ toggle ต่อครู ────────────────────────────────────────
    const _toggleKey    = `gradeToggles_${teacher?.id ?? 'guest'}_${classData.id}`
    const _savedToggles = (() => { try { return JSON.parse(localStorage.getItem(_toggleKey) ?? '{}') } catch { return {} } })()
    const _saveToggles  = () => localStorage.setItem(_toggleKey, JSON.stringify({ toggleRound, toggleForceGrade, toggleKhuna, toggleRead, showBonusCols }))

    let showBonusCols    = _savedToggles.showBonusCols    ?? false
    let showFormulaLink  = false

    const scoreMap = {}
    for (const r of scoreRows) {
      if (!scoreMap[r.student_id]) scoreMap[r.student_id] = {}
      scoreMap[r.student_id][r.score_column_id] = {
        orig: r.original_score, retake: r.retake_score,
        final: r.final_score ?? r.original_score,
        history: r.score_history ?? [],
      }
    }
    const _getScore = (sid, colId) => scoreMap[sid]?.[colId]?.final ?? scoreMap[sid]?.[colId]?.orig ?? null
    const _hasHistory = (sid, colId) => (scoreMap[sid]?.[colId]?.history?.length ?? 0) > 1
    const _groupTotal = (sid, cols) => cols.reduce((s,c) => s + (parseFloat(_getScore(sid,c.id)) || 0), 0)
    const _groupMax   = (cols) => cols.reduce((s,c) => s + (parseFloat(c.max_score)||0), 0)

    // คำนวณคะแนนจริงของคอลัมน์หลัก รวม bonus_formula (บวกเพิ่ม ไม่เกิน max)
    const _effectiveScore = (sid, col) => {
      const raw = parseFloat(_getScore(sid, col.id)) || 0
      if (!col.bonus_formula) return raw
      const bvars = Object.fromEntries(bonusWithVars.map(b => [b.var, parseFloat(_getScore(sid, b.id)) || 0]))
      const bonus = evalFormula(col.bonus_formula, bvars) ?? 0
      return col.max_score ? Math.min(raw + bonus, col.max_score) : raw + bonus
    }
    const _groupTotalEff = (sid, cols) => cols.reduce((s,c) => s + _effectiveScore(sid, c), 0)

    // derived: คำนวณจาก formula + bonus scores
    const _calcDerived = (col, sid) => {
      if (!col.formula) return 0
      const vars = {}
      for (const ref of (col.formula_refs ?? [])) vars[ref.var] = parseFloat(_getScore(sid, ref.col_id)) || 0
      return evalFormula(col.formula, vars) ?? 0
    }

    let toggleRound     = _savedToggles.toggleRound      ?? true
    let toggleForceGrade= _savedToggles.toggleForceGrade ?? false
    let toggleKhuna     = _savedToggles.toggleKhuna      ?? true
    let toggleRead      = _savedToggles.toggleRead       ?? true
    const _defaultForceGrades = ['0','ร','มส','มผ']
    const forceGradeOptions = sysCfg.forceGradeOptions
      ? String(sysCfg.forceGradeOptions).split(',').map(s=>s.trim()).filter(Boolean)
      : _defaultForceGrades

    const _calcGradeRow = (sid) => {
      const midMax = _groupMax(midCols), finMax = _groupMax(finalCols)
      const drvMax = derivedCols.reduce((s,c) => s + (parseFloat(c.max_score)||0), 0)
      const midRaw = _groupTotalEff(sid, midCols), finRaw = _groupTotalEff(sid, finalCols)
      const drvRaw = derivedCols.reduce((s,c) => s + (_calcDerived(c, sid) || 0), 0)
      const allMax = midMax + finMax + drvMax
      const allRaw = midRaw + finRaw + drvRaw
      // รวมตรงๆ — total คือคะแนนดิบรวม, grade คิดจาก allRaw/allMax×100
      const total = toggleRound ? Math.round(allRaw) : Math.round(allRaw * 10) / 10
      const pct   = allMax > 0 ? allRaw / allMax * 100 : 0
      const grade = _pctToGrade(pct)
      const khuna = _gradeToKhuna(grade)
      return { midRaw, finRaw, pct, total, grade, khuna }
    }

    const stickyL = 'sticky left-0 z-20 bg-white border border-gray-200'
    const stickyM = 'sticky z-20 bg-white border border-gray-200'
    const thBase  = 'border border-gray-200 text-center text-xs'
    const nameW = 160, colW = 76

    const _tBtn = (id, label, on, onCls = 'bg-emerald-500 text-white shadow-sm', offCls = 'bg-gray-100 text-gray-500 hover:bg-gray-200') =>
      `<button class="grade-toggle text-[11px] px-3 py-1.5 rounded-lg font-semibold transition-all select-none whitespace-nowrap ${on ? onCls : offCls}"
        data-toggle="${id}">${label}</button>`

    const _showSheetColPopup = (el, colId) => {
      if (_isLockedScoreColumn(colId)) {
        showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้', 'warning')
        return
      }
      const col = [...midCols, ...finalCols].find(c => c.id === colId)
      const isFinal = col?.assignment_type === 'final'

      // ตรวจชื่อคอลัมน์ว่าเป็นประเภทสอบหรือเปล่า
      const kind = detectAssignmentKind(col?.assignment_name || '')
      const isExam = kind === 'กลางภาค' || kind === 'ปลายภาค' || kind === 'สอบปรับ'

      // ถ้าชื่อบ่งบอกว่าเป็นสอบ → ใช้ config กลางภาค/ปลายภาค (อาจ fixed)
      // ถ้าไม่ใช่สอบ → ใช้ config ระหว่างเรียน (เลือกได้อิสระ)
      let cfg
      if (isExam && isFinal) cfg = finSheetOpts
      else if (isExam && !isFinal) cfg = midSheetOpts
      else cfg = regularSheetOpts.cols.length > 0 ? regularSheetOpts : (isFinal ? finSheetOpts : midSheetOpts)

      const opts = cfg.cols
      const isFixed = cfg.isFixed
      document.querySelectorAll('.sheet-col-popup').forEach(p=>p.remove())

      // ถ้า fixed + 1 คอลัมน์ → auto-set เลย ไม่ต้อง popup
      if (isFixed && opts.length === 1) {
        const fixedVal = opts[0]
        if (el.textContent.trim() !== fixedVal) {
          updateScoreColumn(colId, { sheet_column: fixedVal }).catch(()=>{})
          el.textContent = fixedVal
          const col = [...midCols,...finalCols].find(c=>c.id===colId)
          if (col) col.sheet_column = fixedVal
        }
        return
      }

      const rect = el.getBoundingClientRect()
      const cur = el.textContent.trim()
      const popup = document.createElement('div')
      popup.className = 'sheet-col-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3'
      popup.style.cssText = `top:${rect.bottom+4}px;left:${Math.max(4,rect.left-20)}px;min-width:${opts.length>0?220:180}px`
      const colLabel = col?.assignment_name || (isFinal ? 'ปลายภาค' : 'กลางภาค')
      popup.innerHTML = `
        <p class="text-[10px] text-gray-400 mb-2">Sheet → <span class="font-medium text-gray-700">${colLabel}</span>
          ${isFixed?'<span class="ml-1 text-amber-500 text-[9px]">🔒 กำหนดโดยแอดมิน</span>':''}</p>
        ${opts.length > 0 ? `
        <div class="grid grid-cols-5 gap-1 mb-2 max-h-32 overflow-y-auto">
          ${opts.map(opt=>`<button class="scp-opt text-[11px] font-mono py-1.5 rounded-lg border transition-all
            ${opt===cur?'border-blue-500 bg-blue-50 text-blue-700 font-bold':'border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50'}"
            data-val="${opt}" ${isFixed?'':''}>${opt}</button>`).join('')}
        </div>` : ''}
        ${!isFixed?`<input id="scp-inp" type="text" value="${cur==='—'?'':cur}" placeholder="${opts.length>0?'หรือพิมพ์เอง...':'เช่น EK'}" maxlength="6"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-mono uppercase text-center focus:outline-none focus:border-blue-400"/>`
          :`<input id="scp-inp" type="hidden" value="${opts[0]||cur}"/>`}
        <div class="flex gap-2 mt-2">
          <button id="scp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="scp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`
      document.body.appendChild(popup)
      const inp = popup.querySelector('#scp-inp')
      inp.focus(); inp.select()
      inp.addEventListener('input', e=>{e.target.value=e.target.value.toUpperCase()})
      popup.querySelectorAll('.scp-opt').forEach(btn=>{
        btn.addEventListener('click',()=>{
          inp.value = btn.dataset.val
          popup.querySelectorAll('.scp-opt').forEach(b=>{
            b.className = b.className.replace('border-blue-500 bg-blue-50 text-blue-700 font-bold','border-gray-200 text-gray-600')
          })
          btn.className = btn.className.replace('border-gray-200 text-gray-600','border-blue-500 bg-blue-50 text-blue-700 font-bold')
        })
      })
      const doSave = async () => {
        const val = inp.value.trim().toUpperCase()||null
        try {
          await updateScoreColumn(colId,{sheet_column:val})
          el.textContent=val||'—'
          const col=[...midCols,...finalCols].find(c=>c.id===colId)
          if(col)col.sheet_column=val
          popup.remove()
        } catch { showToast('บันทึกไม่สำเร็จ','error') }
      }
      inp.addEventListener('keydown',e=>{if(e.key==='Enter')doSave()})
      popup.querySelector('#scp-save').addEventListener('click',doSave)
      popup.querySelector('#scp-cancel').addEventListener('click',()=>popup.remove())
      setTimeout(()=>{
        const h=e=>{if(!popup.contains(e.target)&&e.target!==el){popup.remove();document.removeEventListener('click',h)}}
        document.addEventListener('click',h)
      },100)
    }

    const _showMaxScorePopup = (el, colId) => {
      if (_isLockedScoreColumn(colId)) {
        showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้', 'warning')
        return
      }
      document.querySelectorAll('.max-score-popup').forEach(p=>p.remove())
      const col=[...midCols,...finalCols].find(c=>c.id===colId)
      const rect=el.getBoundingClientRect()
      const popup=document.createElement('div')
      popup.className='max-score-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3'
      popup.style.cssText=`top:${rect.bottom+4}px;left:${Math.max(4,rect.left-20)}px;min-width:160px`
      popup.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-1.5">คะแนนเต็มของคอลัมน์นี้</p>
        <input id="msp-inp" type="number" value="${col?.max_score||0}" min="1" max="9999"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-center focus:outline-none focus:border-blue-400"/>
        <div class="flex gap-2 mt-2">
          <button id="msp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="msp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`
      document.body.appendChild(popup)
      const inp=popup.querySelector('#msp-inp')
      inp.focus();inp.select()
      const doSave=async()=>{
        const val=Math.max(1,parseFloat(inp.value)||1)
        try{
          await updateScoreColumn(colId,{max_score:val})
          if(col)col.max_score=val
          popup.remove();_renderGrid()
        }catch{showToast('บันทึกไม่สำเร็จ','error')}
      }
      inp.addEventListener('keydown',e=>{if(e.key==='Enter')doSave()})
      popup.querySelector('#msp-save').addEventListener('click',doSave)
      popup.querySelector('#msp-cancel').addEventListener('click',()=>popup.remove())
      setTimeout(()=>{
        const h=e=>{if(!popup.contains(e.target)&&e.target!==el){popup.remove();document.removeEventListener('click',h)}}
        document.addEventListener('click',h)
      },100)
    }

    const _showStudentGradeDetail = (s, sMap, calc) => {
      document.getElementById('sg-detail-modal')?.remove()
      const {midRaw,finRaw,total,grade,khuna}=calc
      const midMax=_groupMax(midCols),finMax=_groupMax(finalCols)
      const scoreRow=col=>{
        const v=sMap[col.id]?.final??sMap[col.id]?.orig??null
        const pct=v!=null&&col.max_score>0?(v/col.max_score*100).toFixed(0):'—'
        return `<tr class="border-b border-gray-50">
          <td class="py-1.5 px-3 text-gray-700 text-xs">${col.assignment_name||'—'}</td>
          <td class="py-1.5 px-3 text-center text-xs font-mono text-blue-600">${v??'—'}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-400">/${col.max_score||0}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-500">${pct}%</td>
        </tr>`
      }
      const modal=document.createElement('div')
      modal.id='sg-detail-modal'
      modal.className='fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'
      modal.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
        <div class="flex items-center gap-3 p-4 border-b flex-shrink-0">
          ${s.image_url?`<img src="${s.image_url}" class="w-10 h-10 rounded-full object-cover"/>`
            :'<div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">👤</div>'}
          <div class="flex-1 min-w-0">
            <p class="font-bold text-gray-800 truncate">${s.full_name}</p>
            <p class="text-xs text-gray-400">${s.student_code}</p>
          </div>
          <div class="text-right mr-2">
            <p class="text-2xl font-bold text-purple-700">${grade>0?grade.toFixed(1):'0'}</p>
            <p class="text-xs font-medium ${khuna.cls}">${khuna.label}</p>
          </div>
          <button id="sg-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-4 space-y-4">
          ${midCols.length>0?`<div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-blue-100">
              <thead><tr class="bg-blue-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${midCols.map(scoreRow).join('')}</tbody>
              <tfoot><tr class="bg-blue-50 font-bold">
                <td class="py-1.5 px-3 text-blue-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${midRaw.toFixed(1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${midMax}</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${midMax>0?(midRaw/midMax*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:''}
          ${finalCols.length>0?`<div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-purple-100">
              <thead><tr class="bg-purple-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${finalCols.map(scoreRow).join('')}</tbody>
              <tfoot><tr class="bg-purple-50 font-bold">
                <td class="py-1.5 px-3 text-purple-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${finRaw.toFixed(1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${finMax}</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${finMax>0?(finRaw/finMax*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:''}
          <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-5 text-center border border-amber-100">
            <p class="text-xs text-gray-500 mb-2">คะแนนรวมทั้งภาค (50:50)</p>
            <p class="text-4xl font-extrabold text-amber-700 mb-1">${total>0?total:'—'}<span class="text-base font-normal text-gray-400">/100</span></p>
            <p class="text-2xl font-bold text-purple-700">เกรด ${grade>0?grade.toFixed(1):'0'}
              <span class="text-sm font-semibold ${khuna.cls}"> — ${khuna.label}</span></p>
          </div>
        </div>
      </div>`
      document.body.appendChild(modal)
      modal.querySelector('#sg-close').addEventListener('click',()=>modal.remove())
      modal.addEventListener('click',e=>{if(e.target===modal)modal.remove()})
    }

    const _renderToggleBar = () => {
      const bar = document.getElementById('grade-togglebar')
      if (!bar) return
      bar.innerHTML = `
        <div class="flex items-center gap-1.5 px-3 py-2 ml-auto flex-wrap justify-end">
          ${_tBtn('round','ปัดเลข',toggleRound)}
          ${_tBtn('khuna','คุณลักษณะ',toggleKhuna)}
          ${_tBtn('read','การอ่าน',toggleRead)}
          <div class="w-px h-5 bg-gray-200 mx-1 self-center"></div>
          ${_tBtn('forceGrade','บังคับเกรด',toggleForceGrade,'bg-rose-500 text-white shadow-sm','bg-gray-100 text-gray-500 hover:bg-gray-200')}
          ${_tBtn('bonus','⭐ คะแนนเก็บ/พิเศษ',showBonusCols,'bg-amber-500 text-white shadow-sm','bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100')}
          ${showBonusCols && bonusCols.length ? _tBtn('formula-link','🔗 เชื่อมสูตร',showFormulaLink,'bg-violet-500 text-white shadow-sm','bg-violet-50 text-violet-600 border border-violet-200 hover:bg-violet-100') : ''}
        </div>`
      bar.querySelectorAll('.grade-toggle').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const t=btn.dataset.toggle
          if(t==='round')toggleRound=!toggleRound
          if(t==='forceGrade')toggleForceGrade=!toggleForceGrade
          if(t==='khuna')toggleKhuna=!toggleKhuna
          if(t==='read')toggleRead=!toggleRead
          if(t==='bonus'){
            showBonusCols=!showBonusCols
            if(!showBonusCols) showFormulaLink=false
            if(showBonusCols && bonusCols.length===0){
              showToast('ยังไม่มีคอลัมน์พิเศษ — กด "จัดการคอลัมน์" เพื่อเพิ่ม','info')
            }
          }
          if(t==='formula-link') showFormulaLink=!showFormulaLink
          _saveToggles(); _renderToggleBar(); _renderGrid()
        })
      })
    }

    const _openFormulaLinkPopup = (col) => {
      document.getElementById('formula-link-popup')?.remove()
      const pop = document.createElement('div')
      pop.id = 'formula-link-popup'
      pop.className = 'fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4'
      const varHint = bonusWithVars.length
        ? bonusWithVars.map(b => `<span class="font-mono font-bold text-violet-700">${b.var}</span> = "${b.assignment_name}"`).join('  |  ')
        : '<span class="text-gray-400">ยังไม่มีคอลัมน์พิเศษ</span>'
      pop.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-gradient-to-br from-violet-500 to-purple-600 px-5 py-4">
            <h3 class="text-white font-bold text-sm">🔗 เชื่อมสูตรจากคะแนนพิเศษ</h3>
            <p class="text-violet-100 text-xs mt-0.5">คอลัมน์: <span class="font-semibold">${_htmlEsc(col.assignment_name)}</span> (เต็ม ${col.max_score??'?'})</p>
            <p class="text-violet-200 text-[10px] mt-1">สูตรจะบวกเพิ่มเข้าคะแนนที่กรอก ไม่เกินคะแนนเต็ม</p>
          </div>
          <div class="p-4 space-y-3">
            <div class="bg-violet-50 rounded-xl p-3 text-xs text-violet-800">
              <p class="font-semibold mb-1">ตัวแปรที่ใช้ได้:</p>
              <p id="flp-vars">${varHint}</p>
              <p class="mt-1 text-violet-500">ฟังก์ชัน: MIN, MAX, IF, ROUND, SUM, AVG, CLAMP</p>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">สูตร <span class="text-red-400">*</span></label>
              <div class="flex gap-2">
                <input id="flp-formula" type="text" value="${_htmlEsc(col.bonus_formula??'')}"
                  placeholder="เช่น MIN(A,5)  หรือ  A*0.5+B"
                  class="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm font-mono focus:outline-none focus:border-violet-400"/>
                <button id="flp-test" class="px-3 py-2 rounded-xl bg-violet-100 text-violet-700 text-xs font-medium hover:bg-violet-200 whitespace-nowrap">ทดสอบ</button>
              </div>
              <p id="flp-result" class="text-xs mt-1 hidden"></p>
            </div>
            <div class="flex gap-2">
              ${col.bonus_formula ? `<button id="flp-clear" class="flex-1 py-2.5 rounded-xl border border-red-200 text-red-500 text-xs hover:bg-red-50 transition">ลบสูตร</button>` : ''}
              <button id="flp-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="flp-save" class="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold transition">บันทึก</button>
            </div>
          </div>
        </div>`
      document.body.appendChild(pop)

      pop.querySelector('#flp-cancel').addEventListener('click', () => pop.remove())

      pop.querySelector('#flp-test')?.addEventListener('click', () => {
        const formula = pop.querySelector('#flp-formula').value.trim()
        const resultEl = pop.querySelector('#flp-result')
        if (!formula) { resultEl.classList.add('hidden'); return }
        const sampleVars = Object.fromEntries(bonusWithVars.map(b => [b.var, 5]))
        const result = evalFormula(formula, sampleVars)
        resultEl.classList.remove('hidden')
        if (result === null) {
          resultEl.className = 'text-xs mt-1 text-red-500'
          resultEl.textContent = '⚠️ สูตรไม่ถูกต้อง'
        } else {
          resultEl.className = 'text-xs mt-1 text-emerald-600'
          const eg = bonusWithVars.map(b=>`${b.var}=5`).join(', ')
          const eff = col.max_score ? Math.min((0 + result), col.max_score) : result
          resultEl.textContent = `✅ ตัวอย่าง (${eg||'ไม่มี'}) → bonus=${result} → คะแนนจริง MIN(0+${result},${col.max_score??'∞'}) = ${eff}`
        }
      })

      pop.querySelector('#flp-clear')?.addEventListener('click', async () => {
        try {
          await updateScoreColumn(col.id, { bonus_formula: null, bonus_formula_refs: [] })
          col.bonus_formula = null; col.bonus_formula_refs = []
          showToast('ลบสูตรแล้ว ✅', 'success')
          pop.remove(); _renderToggleBar(); _renderGrid()
        } catch { showToast('บันทึกไม่สำเร็จ', 'error') }
      })

      pop.querySelector('#flp-save').addEventListener('click', async () => {
        const formula = pop.querySelector('#flp-formula').value.trim()
        if (!formula) { showToast('กรุณากรอกสูตร', 'warning'); return }
        if (evalFormula(formula, Object.fromEntries(bonusWithVars.map(b=>[b.var,5]))) === null) {
          showToast('สูตรไม่ถูกต้อง', 'warning'); return
        }
        const refs = bonusWithVars.map(b => ({ var: b.var, col_id: b.id }))
        const btn = pop.querySelector('#flp-save')
        btn.disabled = true; btn.textContent = '⏳'
        try {
          await updateScoreColumn(col.id, { bonus_formula: formula, bonus_formula_refs: refs })
          col.bonus_formula = formula; col.bonus_formula_refs = refs
          showToast('บันทึกสูตรแล้ว ✅', 'success')
          pop.remove(); _renderToggleBar(); _renderGrid()
        } catch { showToast('บันทึกไม่สำเร็จ', 'error'); btn.disabled=false; btn.textContent='บันทึก' }
      })
    }

    const _openManageColsModal = () => {
      document.getElementById('manage-cols-modal')?.remove()
      const modal = document.createElement('div')
      modal.id = 'manage-cols-modal'
      modal.className = 'fixed inset-0 z-[600] flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4'
      const colRow = (col, group = []) => {
        const locked = _isLockedScoreColumn(col)
        const idx = group.findIndex(c => c.id === col.id)
        const canUp   = !locked && idx > 0 && !_isLockedScoreColumn(group[idx - 1])
        const canDown = !locked && idx >= 0 && idx < group.length - 1
        return `
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border ${locked ? 'border-emerald-100 bg-emerald-50/70' : 'border-gray-100 hover:border-gray-200 bg-gray-50/60'}">
          ${locked
            ? `<span class="w-4 text-emerald-500 text-xs flex-shrink-0">🔒</span>`
            : `<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-colid="${col.id}" />`}
          <div class="flex flex-col gap-0.5 flex-shrink-0">
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${canUp ? 'text-gray-400 hover:bg-gray-200' : 'text-gray-200 cursor-default'}"
              data-colid="${col.id}" data-dir="up" ${canUp ? '' : 'disabled'}>▲</button>
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${canDown ? 'text-gray-400 hover:bg-gray-200' : 'text-gray-200 cursor-default'}"
              data-colid="${col.id}" data-dir="down" ${canDown ? '' : 'disabled'}>▼</button>
          </div>
          <span class="flex-1 text-xs text-gray-700 truncate">${col.assignment_name||'—'}</span>
          <span class="text-[11px] text-gray-400">/${col.max_score||0}</span>
          ${locked
            ? `<span class="text-[10px] text-emerald-700 font-semibold">ล็อก</span>`
            : `<button class="mcm-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50"
                data-colid="${col.id}" title="ลบคอลัมน์">🗑</button>`}
        </div>`
      }
      const bonusColRow = col => `
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-amber-100 bg-amber-50/40">
          <input type="text" class="mcm-bonus-name flex-1 text-xs text-amber-800 bg-transparent border-b border-transparent focus:border-amber-300 focus:outline-none px-0.5 min-w-0"
            value="${(col.assignment_name||'').replace(/"/g,'&quot;')}" data-bonusid="${col.id}" />
          <span class="text-[11px] text-amber-400 flex-shrink-0">${col.max_score ? '/'+col.max_score : '∞'}</span>
          <button class="mcm-bonus-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${col.id}" title="ลบคอลัมน์">🗑</button>
        </div>`
      modal.innerHTML = `<div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[80vh] flex flex-col">
        <div class="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ จัดการคอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">ลบหรือเพิ่มคอลัมน์คะแนน</p>
          </div>
          <button id="mcm-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-5 space-y-4">
          ${(midCols.length < 5 || finalCols.length < 5) ? `
          <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-3 flex items-center gap-3">
            <span class="text-xl">✨</span>
            <div class="flex-1">
              <p class="text-xs font-medium text-indigo-800">เติมคอลัมน์เริ่มต้นครบ 5+5</p>
              <p class="text-[11px] text-indigo-400">สร้างคอลัมน์เปล่าจนครบกลางภาค 5 + ปลายภาค 5</p>
            </div>
            <button id="mcm-fill-default" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition flex-shrink-0">เติมให้ครบ</button>
          </div>` : ''}
          <!-- bulk bar -->
          <div id="mcm-bulk-bar" class="hidden flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            <p id="mcm-bulk-count" class="text-xs font-semibold text-red-700">เลือก 0 รายการ</p>
            <button id="mcm-bulk-del" class="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition">🗑️ ลบที่เลือก</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-blue-700 text-sm">📘 กลางภาค <span class="font-normal text-gray-400">(${midCols.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${midCols.map(c => colRow(c, midCols)).join('')}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition-colors" data-type="midterm">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-purple-700 text-sm">📙 ปลายภาค <span class="font-normal text-gray-400">(${finalCols.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${finalCols.map(c => colRow(c, finalCols)).join('')}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition-colors" data-type="final">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-amber-600 text-sm">⭐ คะแนนพิเศษ (Bonus) <span class="font-normal text-gray-400">(${bonusCols.length} คอลัมน์)</span></h4>
            </div>
            <div id="mcm-bonus-list" class="space-y-1.5">${bonusCols.map(bonusColRow).join('')}</div>
            <button id="mcm-add-bonus" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-amber-200 text-amber-500 hover:border-amber-400 hover:bg-amber-50 text-sm transition-colors">＋ เพิ่มคอลัมน์พิเศษ</button>
          </div>
        </div>
      </div>`
      document.body.appendChild(modal)
      modal.querySelector('#mcm-close').addEventListener('click',()=>modal.remove())
      // ไม่ปิดด้วย backdrop click

      const _mcmConfirm = (message, onConfirm) => {
        document.getElementById('mcm-del-confirm')?.remove()
        const popup = document.createElement('div')
        popup.id = 'mcm-del-confirm'
        popup.className = 'fixed inset-0 z-[300] flex items-center justify-center p-6'
        popup.style.background = 'rgba(0,0,0,0.5)'
        popup.innerHTML = `
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">🗑️</div>
            <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">${message}</p>
            <div class="flex gap-3">
              <button id="mcm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="mcm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition">ลบเลย</button>
            </div>
          </div>`
        document.body.appendChild(popup)
        popup.querySelector('#mcm-conf-no').addEventListener('click', () => popup.remove())
        popup.querySelector('#mcm-conf-yes').addEventListener('click', () => { popup.remove(); onConfirm() })
      }

      const _rerenderColLists = () => {
        modal.querySelectorAll('.mcm-col-list').forEach((el, i) => {
          const grp = i === 0 ? midCols : finalCols
          el.innerHTML = grp.map(c => colRow(c, grp)).join('')
        })
        _rebindModal()
      }

      const _rebindModal = () => {
        // rebind move buttons
        modal.querySelectorAll('.mcm-move').forEach(btn => {
          btn.addEventListener('click', async () => {
            if (btn.disabled) return
            const colId = parseInt(btn.dataset.colid)
            const dir   = btn.dataset.dir
            const grp   = midCols.findIndex(c => c.id === colId) !== -1 ? midCols : finalCols
            const idx   = grp.findIndex(c => c.id === colId)
            const swapIdx = dir === 'up' ? idx - 1 : idx + 1
            if (swapIdx < 0 || swapIdx >= grp.length) return
            if (_isLockedScoreColumn(grp[swapIdx])) return
            // สลับใน array (mutate in-place)
            const a = grp[idx], b = grp[swapIdx]
            grp[idx] = b; grp[swapIdx] = a
            // save sort_order
            const aOrder = a.sort_order ?? (idx + 1) * 10
            const bOrder = b.sort_order ?? (swapIdx + 1) * 10
            a.sort_order = bOrder; b.sort_order = aOrder
            await updateColumnSortOrders([{ id: a.id, sort_order: bOrder }, { id: b.id, sort_order: aOrder }])
            _renderGrid()
            _rerenderColLists()
          })
        })
        // rebind delete buttons after re-render
        modal.querySelectorAll('.mcm-del').forEach(btn => {
          btn.addEventListener('click', () => {
            const colId = parseInt(btn.dataset.colid)
            const col = [...midCols, ...finalCols].find(c => c.id === colId)
            if (_isLockedScoreColumn(colId)) { showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถลบได้', 'warning'); return }
            _mcmConfirm(
              `ต้องการลบ <span class="font-semibold">"${col?.assignment_name || 'คอลัมน์นี้'}"</span> ใช่ไหม?<br/><span class="text-xs text-red-500">คะแนนทั้งหมดของคอลัมน์นี้จะถูกลบด้วย</span>`,
              async () => {
                try {
                  await deleteScoreColumn(colId)
                  const mi = midCols.findIndex(c => c.id === colId)
                  const fi = finalCols.findIndex(c => c.id === colId)
                  if (mi !== -1) midCols.splice(mi, 1)
                  if (fi !== -1) finalCols.splice(fi, 1)
                  showToast('ลบคอลัมน์แล้ว ✅', 'success')
                  _renderGrid()
                  // re-render list inside modal without closing
                  const listArea = modal.querySelector('.overflow-auto')
                  if (listArea) {
                    listArea.querySelector('.space-y-1\\.5')?.remove?.()
                    // re-render mid list
                    modal.querySelectorAll('.mcm-col-list').forEach((el, i) => {
                      const grp = i === 0 ? midCols : finalCols
                      el.innerHTML = grp.map(c => colRow(c, grp)).join('')
                    })
                    _rebindModal()
                  }
                } catch { showToast('ลบไม่สำเร็จ', 'error') }
              }
            )
          })
        })
        // bulk delete bar
        const _updateBulk = () => {
          const checked = [...modal.querySelectorAll('.mcm-cb:checked')]
          const bar = modal.querySelector('#mcm-bulk-bar')
          if (bar) {
            bar.classList.toggle('hidden', checked.length === 0)
            const countEl = bar.querySelector('#mcm-bulk-count')
            if (countEl) countEl.textContent = `เลือก ${checked.length} รายการ`
          }
        }
        modal.querySelectorAll('.mcm-cb').forEach(cb => cb.addEventListener('change', _updateBulk))
        modal.querySelector('#mcm-bulk-del')?.addEventListener('click', () => {
          const checked = [...modal.querySelectorAll('.mcm-cb:checked')]
          if (!checked.length) return
          const names = checked.map(cb => {
            const col = [...midCols, ...finalCols].find(c => c.id === parseInt(cb.dataset.colid))
            return col?.assignment_name ?? `ID ${cb.dataset.colid}`
          }).join(', ')
          _mcmConfirm(
            `ลบ ${checked.length} คอลัมน์:<br/><span class="font-semibold text-sm">${names}</span>`,
            async () => {
              try {
                for (const cb of checked) {
                  const colId = parseInt(cb.dataset.colid)
                  await deleteScoreColumn(colId)
                  const mi = midCols.findIndex(c => c.id === colId)
                  const fi = finalCols.findIndex(c => c.id === colId)
                  if (mi !== -1) midCols.splice(mi, 1)
                  if (fi !== -1) finalCols.splice(fi, 1)
                }
                showToast(`ลบ ${checked.length} คอลัมน์แล้ว ✅`, 'success')
                _renderGrid()
                modal.querySelectorAll('.mcm-col-list').forEach((el, i) => {
                  el.innerHTML = (i === 0 ? midCols : finalCols).map(colRow).join('')
                })
                _rebindModal()
              } catch { showToast('ลบไม่สำเร็จ', 'error') }
            }
          )
        })
      }
      _rebindModal()

      // ── Bonus section: rename on blur ──
      const _bindBonusSection = () => {
        modal.querySelectorAll('.mcm-bonus-name').forEach(inp => {
          inp.addEventListener('blur', async () => {
            const colId = parseInt(inp.dataset.bonusid)
            const newName = inp.value.trim()
            if (!newName) return
            try {
              await updateScoreColumn(colId, { assignment_name: newName })
              const bc = bonusCols.find(c => c.id === colId)
              if (bc) bc.assignment_name = newName
              _renderGrid()
            } catch { showToast('บันทึกไม่สำเร็จ', 'error') }
          })
          inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); inp.blur() } })
        })
        modal.querySelectorAll('.mcm-bonus-del').forEach(btn => {
          btn.addEventListener('click', () => {
            const colId = parseInt(btn.dataset.colid)
            const col = bonusCols.find(c => c.id === colId)
            _mcmConfirm(
              `ลบคอลัมน์พิเศษ <span class="font-semibold">"${col?.assignment_name||'คอลัมน์นี้'}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,
              async () => {
                try {
                  await deleteScoreColumn(colId)
                  const bi = bonusCols.findIndex(c => c.id === colId)
                  if (bi !== -1) bonusCols.splice(bi, 1)
                  showToast('ลบคอลัมน์พิเศษแล้ว ✅', 'success')
                  _renderGrid()
                  const listEl = modal.querySelector('#mcm-bonus-list')
                  if (listEl) { listEl.innerHTML = bonusCols.map(bonusColRow).join(''); _bindBonusSection() }
                } catch { showToast('ลบไม่สำเร็จ', 'error') }
              }
            )
          })
        })
      }
      _bindBonusSection()

      // ── Add bonus column ──
      modal.querySelector('#mcm-add-bonus')?.addEventListener('click', () => {
        document.getElementById('quick-add-bonus-mcm')?.remove()
        const pop = document.createElement('div')
        pop.id = 'quick-add-bonus-mcm'
        pop.className = 'fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4'
        pop.innerHTML = `
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-amber-700">⭐ เพิ่มคอลัมน์พิเศษ</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qbm-name" type="text" placeholder="เช่น ส่งการบ้าน, ความตั้งใจ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"/>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">คะแนนเต็ม <span class="text-gray-400 font-normal">(ไม่บังคับ)</span></label>
              <input id="qbm-max" type="number" min="0" placeholder="ไม่จำกัด"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"/>
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qbm-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qbm-save" class="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`
        document.body.appendChild(pop)
        pop.querySelector('#qbm-cancel').addEventListener('click', () => pop.remove())
        pop.querySelector('#qbm-name').focus()
        pop.querySelector('#qbm-save').addEventListener('click', async () => {
          const name = pop.querySelector('#qbm-name').value.trim()
          const max  = pop.querySelector('#qbm-max').value ? parseFloat(pop.querySelector('#qbm-max').value) : null
          if (!name) { showToast('กรุณากรอกชื่อคอลัมน์', 'warning'); return }
          const btn = pop.querySelector('#qbm-save')
          btn.disabled = true; btn.textContent = '⏳'
          try {
            const newCol = await createScoreColumn({ class_id: classData.id, assignment_name: name,
              assignment_type: 'คะแนนพิเศษ', sheet_column: '', max_score: max, column_type: 'bonus',
              formula: null, formula_refs: [] })
            pop.remove()
            // reload grid + reopen modal
            modal.remove()
            renderGradesGrid(teacher, classData)
            showToast(`เพิ่ม "${name}" แล้ว ✅`, 'success')
          } catch (err) {
            showToast('เพิ่มไม่สำเร็จ: ' + (err.message ?? ''), 'error')
            btn.disabled = false; btn.textContent = 'เพิ่ม'
          }
        })
      })

      modal.querySelectorAll('.mcm-add').forEach(btn=>{
        btn.addEventListener('click',()=>{
          modal.remove()
          _openAddColumnModal(classData,btn.dataset.type,()=>renderGradesGrid(teacher,classData))
        })
      })
      modal.querySelector('#mcm-fill-default')?.addEventListener('click',async()=>{
        const btn=modal.querySelector('#mcm-fill-default')
        btn.disabled=true;btn.textContent='กำลังสร้าง...'
        try{
          const needMid=Math.max(0,5-midCols.length)
          const needFin=Math.max(0,5-finalCols.length)
          const mkCol2 = (type, n) => createScoreColumn({
            class_id: classData.id, assignment_name: `คะแนนที่ ${n}`,
            max_score: 20, assignment_type: type, sheet_column: '',
          })
          for (let i = 1; i <= needMid; i++) await mkCol2('midterm', midCols.length + i)
          for (let i = 1; i <= needFin; i++) await mkCol2('final', finalCols.length + i)
          modal.remove()
          renderGradesGrid(teacher,classData)
        }catch{showToast('สร้างคอลัมน์ไม่สำเร็จ','error');btn.disabled=false;btn.textContent='เติมให้ครบ'}
      })
    }

    const _readCell = (sid) => {
      if (!toggleRead) return '<td class="border border-sky-100 text-center text-gray-300 text-[10px]">—</td>'
      const re = readingEvalMap[sid]
      return re
        ? '<td class="border border-sky-100 text-center bg-sky-50/40 text-[11px] font-semibold ' + re.cls + '" id="gread-' + sid + '">' + re.label + '</td>'
        : '<td class="border border-sky-100 text-center text-gray-300 text-[10px]" id="gread-' + sid + '">—</td>'
    }

    const _fmtDate = iso => { const d=new Date(iso); return `${d.getDate()}/${d.getMonth()+1} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}` }

    const _showHistoryPopup = (sid, colId, colName, history) => {
      document.getElementById('score-hist-popup')?.remove()
      if (!history?.length) return
      let calc = '', running = 0
      history.forEach((e, i) => {
        running += e.d
        if (i === 0) calc += String(e.d)
        else calc += (e.d >= 0 ? ` + ${e.d}` : ` − ${Math.abs(e.d)}`)
      })
      calc += ` = ${Math.round(running * 1000) / 1000}`
      const student = students.find(s => s.id === sid)
      const pop = document.createElement('div')
      pop.id = 'score-hist-popup'
      pop.className = 'fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4'
      pop.style.background = 'rgba(0,0,0,0.4)'
      pop.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-indigo-50 px-5 py-3 border-b border-indigo-100">
            <p class="font-bold text-indigo-700 text-sm">ประวัติคะแนน — ${_htmlEsc(colName)}</p>
            <p class="text-xs text-indigo-400">${_htmlEsc(student?.full_name ?? '')}</p>
          </div>
          <div class="p-4">
            <div class="space-y-1 mb-3 max-h-44 overflow-y-auto">
              ${history.map(e => `
                <div class="flex justify-between items-center text-xs py-1 border-b border-gray-50">
                  <span class="text-gray-400">${_fmtDate(e.at)}</span>
                  <span class="font-semibold ${e.d >= 0 ? 'text-emerald-600' : 'text-rose-600'}">${e.d >= 0 ? '+' : ''}${e.d}</span>
                </div>`).join('')}
            </div>
            <div class="bg-indigo-50 rounded-xl px-3 py-2 text-xs font-mono text-indigo-700 text-center">${calc}</div>
          </div>
          <div class="px-5 pb-4 flex gap-2">
            <button id="hist-reset" class="flex-1 py-2 rounded-xl border border-rose-200 text-rose-600 text-xs hover:bg-rose-50 transition">รีเซ็ตประวัติ</button>
            <button id="hist-close" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ปิด</button>
          </div>
        </div>`
      document.body.appendChild(pop)
      pop.querySelector('#hist-close').addEventListener('click', () => pop.remove())
      pop.querySelector('#hist-reset').addEventListener('click', async () => {
        const current = scoreMap[sid]?.[colId]?.final
        if (current == null) { pop.remove(); return }
        try {
          const result = await saveStudentScore(classData.id, sid, colId, current, {})
          if (result) {
            if (!scoreMap[sid]) scoreMap[sid] = {}
            scoreMap[sid][colId] = { orig: result.history[0]?.d ?? result.final, retake: null, final: result.final, history: result.history }
            const grWrap = document.getElementById('grade-grid-wrap')
            const inp = grWrap?.querySelector(`.grade-input[data-sid="${sid}"][data-col="${colId}"]`)
            if (inp) inp.value = result.final !== null ? String(result.final) : ''
            inp?.closest('td')?.querySelector('.hist-indicator')?.remove()
            showToast('รีเซ็ตประวัติแล้ว', 'success')
          }
        } catch { showToast('ไม่สำเร็จ', 'error') }
        pop.remove()
      })
      pop.addEventListener('click', e => { if (e.target === pop) pop.remove() })
    }

    const _showMassScorePopup = (colId, colName, maxScore) => {
      document.getElementById('mass-score-popup')?.remove()
      const pop = document.createElement('div')
      pop.id = 'mass-score-popup'
      pop.className = 'fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4'
      pop.style.background = 'rgba(0,0,0,0.4)'
      pop.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div class="bg-blue-50 px-5 py-3 border-b border-blue-100">
            <p class="font-bold text-blue-700 text-sm">ตั้งคะแนนทั้งห้อง</p>
            <p class="text-xs text-blue-400">${_htmlEsc(colName)}${maxScore ? ' (เต็ม ' + maxScore + ')' : ''}</p>
          </div>
          <div class="p-4 space-y-2">
            <p class="text-xs text-gray-500">ใส่ตัวเลข หรือ +/- สำหรับสะสม</p>
            <input type="text" id="mass-inp" inputmode="decimal" autocomplete="off"
              class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="+5 / 10 / -2"/>
            <p id="mass-preview" class="text-xs text-center text-gray-400 h-4"></p>
          </div>
          <div class="px-5 pb-5 flex gap-2">
            <button id="mass-cancel" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ยกเลิก</button>
            <button id="mass-confirm" class="flex-1 py-2.5 rounded-2xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition">ตั้งค่า</button>
          </div>
        </div>`
      document.body.appendChild(pop)
      const inp = pop.querySelector('#mass-inp')
      const preview = pop.querySelector('#mass-preview')
      inp.addEventListener('input', () => {
        const v = inp.value.trim(); if (!v) { preview.textContent = ''; return }
        const num = parseFloat(v); if (isNaN(num)) { preview.textContent = ''; return }
        preview.textContent = /^[+-]/.test(v) ? `บวก/ลบ ${num >= 0 ? '+' : ''}${num} ใน ${students.length} คน` : `ตั้งเป็น ${num} ใน ${students.length} คน`
      })
      pop.querySelector('#mass-cancel').addEventListener('click', () => pop.remove())
      pop.querySelector('#mass-confirm').addEventListener('click', async () => {
        const v = inp.value.trim(); if (!v) { pop.remove(); return }
        const btn = pop.querySelector('#mass-confirm')
        btn.disabled = true; btn.textContent = '⏳'
        let saved = 0, failed = 0
        for (const s of students) {
          const currentHist = scoreMap[s.id]?.[colId]?.history ?? []
          try {
            const result = await saveStudentScore(classData.id, s.id, colId, v, { currentHistory: currentHist })
            if (result) {
              if (!scoreMap[s.id]) scoreMap[s.id] = {}
              scoreMap[s.id][colId] = { orig: result.history[0]?.d ?? result.final, retake: null, final: result.final, history: result.history }
              const grWrap = document.getElementById('grade-grid-wrap')
              const el = grWrap?.querySelector(`.grade-input[data-sid="${s.id}"][data-col="${colId}"]`)
              if (el) { el.value = result.final !== null ? String(result.final) : ''; el.style.boxShadow = '0 0 0 2px #059669'; setTimeout(() => el.style.boxShadow = '', 700) }
              const cell = el?.closest('td')
              if (result.history.length > 1) {
                if (!cell?.querySelector('.hist-indicator')) {
                  const ind = document.createElement('span')
                  ind.className = 'hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl'
                  ind.textContent = 'Δ'; ind.dataset.sid = s.id; ind.dataset.col = colId
                  cell?.appendChild(ind)
                }
              } else { cell?.querySelector('.hist-indicator')?.remove() }
              saved++
            }
          } catch { failed++ }
        }
        students.forEach(s => {
          const { midRaw: mRaw, finRaw: fRaw, total, grade, khuna } = _calcGradeRow(s.id)
          const fg = scoreMap[s.id]?.['__force'] ?? ''
          const midEl = document.getElementById(`gmid-${s.id}`), finEl = document.getElementById(`gfin-${s.id}`)
          if (midEl) midEl.textContent = mRaw > 0 ? mRaw.toFixed(1) : '—'
          if (finEl) finEl.textContent = fRaw > 0 ? fRaw.toFixed(1) : '—'
          const tEl = document.getElementById(`gtotal-${s.id}`), gEl = document.getElementById(`ggrade-${s.id}`), kEl = document.getElementById(`gkhuna-${s.id}`)
          if (tEl) tEl.textContent = total > 0 ? total : '—'
          if (gEl) gEl.textContent = fg || (grade > 0 ? grade.toFixed(1) : '0')
          if (kEl) { kEl.textContent = khuna.label; kEl.className = `border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${khuna.cls}` }
        })
        showToast(`ตั้งคะแนนสำเร็จ ${saved}/${students.length} คน${failed ? ' (ล้มเหลว ' + failed + ')' : ''}`, saved > 0 ? 'success' : 'error')
        pop.remove()
      })
      pop.addEventListener('click', e => { if (e.target === pop) pop.remove() })
      setTimeout(() => inp.focus(), 60)
    }

    const _renderGrid = () => {
      const midMax = _groupMax(midCols), finMax = _groupMax(finalCols)
      const wrap = document.getElementById('grade-grid-wrap')
      if (!wrap) return

      const head = `
        <tr style="position:sticky;top:0;z-index:31">
          <th class="${stickyL} bg-gray-100 text-gray-500 text-xs" style="width:28px" rowspan="3">#</th>
          <th class="${stickyM} bg-gray-100 text-gray-500 text-xs" style="left:28px;width:64px" rowspan="3">รหัส</th>
          <th class="${stickyM} bg-gray-100 text-gray-500 text-xs text-left px-2" style="left:92px;min-width:${nameW}px" rowspan="3">ชื่อ-นามสกุล</th>
          <th colspan="${midCols.length+1}" class="${thBase} bg-blue-600 text-white font-semibold py-1.5">
            📘 กลางภาค${midMax>0?' (เต็ม '+midMax+')':''}</th>
          <th colspan="${finalCols.length+1}" class="${thBase} bg-purple-600 text-white font-semibold py-1.5">
            📙 ปลายภาค${finMax>0?' (เต็ม '+finMax+')':''}</th>
          ${derivedCols.length ? `<th colspan="${derivedCols.length}" class="${thBase} bg-indigo-600 text-white font-semibold py-1.5">🧮 อ้างอิงสูตร</th>` : ''}
          ${showBonusCols ? `<th colspan="${bonusCols.length+1}" class="${thBase} bg-amber-500 text-white font-semibold py-1.5">⭐ คะแนนเก็บ/พิเศษ</th>` : ''}
          <th class="${thBase} bg-amber-50 font-semibold text-amber-700 text-xs" style="min-width:58px" rowspan="3">รวม<div class="text-[9px] font-normal text-amber-400">/${midMax+finMax+(derivedCols.reduce((s,c)=>s+(parseFloat(c.max_score)||0),0))||'?'}</div></th>
          <th class="${thBase} bg-purple-50 font-semibold text-purple-700 text-xs" style="min-width:50px" rowspan="3">เกรด</th>
          ${toggleForceGrade?`<th class="${thBase} bg-rose-50 text-rose-600 text-xs" style="min-width:32px;width:32px" rowspan="3"><div class="text-[9px] font-semibold leading-tight">บัง<br/>คับ</div></th>`:''}
          <th class="${thBase} bg-emerald-50 font-medium text-emerald-700 text-xs" style="min-width:72px" rowspan="3">คุณลักษณะ${!toggleKhuna?`<div class="text-[9px] font-normal text-emerald-300">ปิดอยู่</div>`:''}</th>
          <th class="${thBase} bg-sky-50 font-medium text-sky-600 text-xs" style="min-width:82px" rowspan="3">การอ่านฯ<div class="text-[9px] font-normal text-sky-400">${toggleRead?'ผลประเมิน':'ปิดอยู่'}</div></th>
        </tr>
        <tr style="position:sticky;top:24px;z-index:30">
          ${midCols.map(c=>`<th class="${thBase} bg-blue-50" style="width:${colW}px;min-width:${colW}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${_isLockedScoreColumn(c) ? 'text-emerald-700 bg-emerald-50 cursor-not-allowed' : 'text-blue-600 cursor-pointer hover:bg-blue-100'}"
                data-colid="${c.id}" title="${_isLockedScoreColumn(c) ? 'คะแนนระบบกลาง: แก้ไขไม่ได้' : 'คลิกเพื่อเลือกคอลัมน์ Sheet'}">${c.sheet_column||'—'}</span>
              <button class="btn-mass-score text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${c.id}" data-colname="${_htmlEsc(c.assignment_name)}" data-max="${c.max_score??''}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${showFormulaLink ? `<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${c.bonus_formula ? 'text-violet-500' : 'text-gray-300 hover:text-violet-400'}" data-colid="${c.id}" title="${c.bonus_formula ? '🔗 = '+c.bonus_formula : 'เชื่อมสูตรจากคะแนนพิเศษ'}">🔗</button>` : ''}
            </div>
          </th>`).join('')}
          <th class="${thBase} bg-blue-50" style="width:30px">
            <button class="btn-add-col text-blue-500 hover:bg-blue-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="midterm">＋</button></th>
          ${finalCols.map(c=>`<th class="${thBase} bg-purple-50" style="width:${colW}px;min-width:${colW}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${_isLockedScoreColumn(c) ? 'text-emerald-700 bg-emerald-50 cursor-not-allowed' : 'text-purple-600 cursor-pointer hover:bg-purple-100'}"
                data-colid="${c.id}" title="${_isLockedScoreColumn(c) ? 'คะแนนระบบกลาง: แก้ไขไม่ได้' : 'คลิกเพื่อเลือกคอลัมน์ Sheet'}">${c.sheet_column||'—'}</span>
              <button class="btn-mass-score text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${c.id}" data-colname="${_htmlEsc(c.assignment_name)}" data-max="${c.max_score??''}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${showFormulaLink ? `<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${c.bonus_formula ? 'text-violet-500' : 'text-gray-300 hover:text-violet-400'}" data-colid="${c.id}" title="${c.bonus_formula ? '🔗 = '+c.bonus_formula : 'เชื่อมสูตรจากคะแนนพิเศษ'}">🔗</button>` : ''}
            </div>
          </th>`).join('')}
          <th class="${thBase} bg-purple-50" style="width:30px">
            <button class="btn-add-col text-purple-500 hover:bg-purple-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="final">＋</button></th>
          ${derivedCols.map(c=>`<th class="${thBase} bg-indigo-50" style="width:${colW}px;min-width:${colW}px">
            <span class="text-[10px] text-indigo-400 font-mono block text-center truncate" title="${c.formula??''}">${c.formula??'—'}</span>
          </th>`).join('')}
          ${showBonusCols ? bonusCols.map(c=>`<th class="${thBase} bg-amber-50" style="width:${colW}px;min-width:${colW}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[11px] text-amber-500 flex-1 text-center">${c.sheet_column||'—'}</span>
              <button class="btn-mass-score text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${c.id}" data-colname="${_htmlEsc(c.assignment_name)}" data-max="${c.max_score??''}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
            </div>
          </th>`).join('') : ''}
          ${showBonusCols ? `<th class="${thBase} bg-amber-50" style="width:30px">
            <button class="btn-add-bonus text-amber-500 hover:bg-amber-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block">＋</button></th>` : ''}
        </tr>
        <tr style="position:sticky;top:48px;z-index:30">
          ${midCols.map(c=>`<th class="${thBase} bg-blue-50" style="width:${colW}px;min-width:${colW}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${_isLockedScoreColumn(c) ? 'text-emerald-800 cursor-not-allowed' : 'text-gray-700 cursor-text hover:bg-blue-50'}"
              contenteditable="${_isLockedScoreColumn(c) ? 'false' : 'true'}" data-colid="${c.id}" data-field="assignment_name" title="${_isLockedScoreColumn(c) ? _lockedColTitle(c) : ''}">${c.assignment_name||'—'}</span>
            <span class="col-max text-[10px] select-none ${_isLockedScoreColumn(c) ? 'text-emerald-700 cursor-not-allowed' : 'text-gray-400 cursor-pointer hover:text-blue-500 hover:underline'}"
              data-colid="${c.id}" title="${_isLockedScoreColumn(c) ? 'คะแนนระบบกลาง: แก้ไขไม่ได้' : 'คลิกเพื่อแก้คะแนนเต็ม'}">/<span class="font-medium">${c.max_score||0}</span></span>
            ${c.assignment_name === 'คะแนนละหมาด' ? `<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>` : ''}</th>`).join('')}
          <th class="${thBase} bg-blue-50" style="width:30px"></th>
          ${finalCols.map(c=>`<th class="${thBase} bg-purple-50" style="width:${colW}px;min-width:${colW}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${_isLockedScoreColumn(c) ? 'text-emerald-800 cursor-not-allowed' : 'text-gray-700 cursor-text hover:bg-purple-50'}"
              contenteditable="${_isLockedScoreColumn(c) ? 'false' : 'true'}" data-colid="${c.id}" data-field="assignment_name" title="${_isLockedScoreColumn(c) ? _lockedColTitle(c) : ''}">${c.assignment_name||'—'}</span>
            <span class="col-max text-[10px] select-none ${_isLockedScoreColumn(c) ? 'text-emerald-700 cursor-not-allowed' : 'text-gray-400 cursor-pointer hover:text-purple-500 hover:underline'}"
              data-colid="${c.id}" title="${_isLockedScoreColumn(c) ? 'คะแนนระบบกลาง: แก้ไขไม่ได้' : 'คลิกเพื่อแก้คะแนนเต็ม'}">/<span class="font-medium">${c.max_score||0}</span></span>
            ${c.assignment_name === 'คะแนนละหมาด' ? `<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>` : ''}</th>`).join('')}
          <th class="${thBase} bg-purple-50" style="width:30px"></th>
          ${derivedCols.map(c=>`<th class="${thBase} bg-indigo-50" style="width:${colW}px;min-width:${colW}px">
            <span class="text-[11px] text-indigo-700 font-medium block text-center truncate">${c.assignment_name}</span>
            <span class="text-[10px] text-indigo-400">/${c.max_score??'?'}</span>
          </th>`).join('')}
          ${showBonusCols ? bonusCols.map(c=>`<th class="${thBase} bg-amber-50" style="width:${colW}px;min-width:${colW}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-amber-700 cursor-text hover:bg-amber-100"
              contenteditable="true" data-colid="${c.id}" data-field="assignment_name">${c.assignment_name||'—'}</span>
            <span class="text-[10px] text-amber-400">${c.max_score ? '/'+c.max_score : '(ไม่จำกัด)'}</span>
          </th>`).join('') : ''}
          ${showBonusCols ? `<th class="${thBase} bg-amber-50" style="width:30px"></th>` : ''}
        </tr>`

      const body = students.map((s,i) => {
        const { midRaw, finRaw, total, grade, khuna } = _calcGradeRow(s.id)
        const fg = scoreMap[s.id]?.['__force'] ?? ''
        const displayGrade = fg || (grade > 0 ? grade.toFixed(1) : '0')
        return `<tr class="hover:bg-gray-50 transition" data-sid="${s.id}">
          <td class="${stickyL} text-center text-gray-400" style="width:28px">${i+1}</td>
          <td class="${stickyM} text-center font-mono text-gray-600" style="left:28px;width:64px">${s.student_code}</td>
          <td class="${stickyM} px-2 student-name-cell cursor-pointer hover:bg-indigo-50" style="left:92px;min-width:${nameW}px" data-idx="${i}">
            <div class="flex items-center gap-1.5 py-1">
              ${s.image_url?`<img src="${s.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
              <span class="text-gray-800 text-xs truncate max-w-[100px]">${s.full_name}</span>
            </div>
          </td>
          ${midCols.map(c=>{const v=_getScore(s.id,c.id)??'';const hh=_hasHistory(s.id,c.id);return `<td class="border border-gray-100 text-center p-0 relative"
            style="width:${colW}px;min-width:${colW}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs ${_isLockedScoreColumn(c) ? 'bg-emerald-50/60 text-emerald-800 cursor-not-allowed' : 'bg-transparent focus:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:rounded'}"
              type="text" inputmode="decimal" value="${v}" placeholder="—"
              data-sid="${s.id}" data-col="${c.id}" data-max="${c.max_score}" ${_isLockedScoreColumn(c) ? 'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"' : ''}/>
            ${hh?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${s.id}" data-col="${c.id}" title="ดูประวัติคะแนน">Δ</span>`:''}
            </td>`}).join('')}
          <td id="gmid-${s.id}" class="border border-gray-50 bg-blue-50/40 text-center text-[10px] text-blue-600 font-medium" style="width:34px">${midRaw>0?midRaw.toFixed(1):'—'}</td>
          ${finalCols.map(c=>{const v=_getScore(s.id,c.id)??'';const hh=_hasHistory(s.id,c.id);return `<td class="border border-gray-100 text-center p-0 relative"
            style="width:${colW}px;min-width:${colW}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs ${_isLockedScoreColumn(c) ? 'bg-emerald-50/60 text-emerald-800 cursor-not-allowed' : 'bg-transparent focus:bg-purple-50 focus:outline-none focus:ring-1 focus:ring-purple-300 focus:rounded'}"
              type="text" inputmode="decimal" value="${v}" placeholder="—"
              data-sid="${s.id}" data-col="${c.id}" data-max="${c.max_score}" ${_isLockedScoreColumn(c) ? 'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"' : ''}/>
            ${hh?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${s.id}" data-col="${c.id}" title="ดูประวัติคะแนน">Δ</span>`:''}
            </td>`}).join('')}
          <td id="gfin-${s.id}" class="border border-gray-50 bg-purple-50/40 text-center text-[10px] text-purple-600 font-medium" style="width:34px">${finRaw>0?finRaw.toFixed(1):'—'}</td>
          ${derivedCols.map(c=>{const dv=_calcDerived(c,s.id);const disp=dv!==null&&dv!==0?Number(dv.toFixed(2)):'—';return `<td class="border border-indigo-100 bg-indigo-50/40 text-center text-xs text-indigo-700 font-medium" style="width:${colW}px;min-width:${colW}px;height:30px" title="คำนวณจาก: ${c.formula??''}">${disp}</td>`}).join('')}
          ${showBonusCols ? bonusCols.map(c=>{const v=_getScore(s.id,c.id)??'';const hh=_hasHistory(s.id,c.id);return `<td class="border border-amber-100 text-center p-0 relative" style="width:${colW}px;min-width:${colW}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-amber-50 focus:outline-none focus:ring-1 focus:ring-amber-300 focus:rounded"
              type="text" inputmode="decimal" value="${v}" placeholder="—"
              data-sid="${s.id}" data-col="${c.id}" data-max="${c.max_score??9999}"/>
            ${hh?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${s.id}" data-col="${c.id}" title="ดูประวัติคะแนน">Δ</span>`:''}
            </td>`}).join('') : ''}
          ${showBonusCols ? `<td class="border border-amber-50 bg-amber-50/30" style="width:30px;height:30px"></td>` : ''}
          <td class="border border-amber-100 text-center bg-amber-50 font-bold text-amber-700" id="gtotal-${s.id}" style="min-width:58px">${total>0?total:'—'}</td>
          <td class="border border-purple-100 text-center bg-purple-50 font-bold text-purple-700" id="ggrade-${s.id}" style="min-width:50px">${displayGrade}</td>
          ${toggleForceGrade?`<td class="border border-rose-100 text-center bg-rose-50 cursor-pointer hover:bg-rose-100 transition force-cell" style="min-width:32px;height:30px" data-sid="${s.id}">
            <span class="text-xs font-bold ${fg?'text-rose-600':'text-rose-200'}">${fg||'+'}</span></td>`:''}
          <td class="border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${toggleKhuna ? khuna.cls : 'text-gray-300'}" id="gkhuna-${s.id}">${toggleKhuna ? khuna.label : '—'}</td>
          ${_readCell(s.id)}
        </tr>`}).join('')

      wrap.innerHTML = `<table class="border-collapse text-xs" style="min-width:max-content">
        <thead>${head}</thead><tbody>${body}</tbody></table>`
      const tbl = wrap.querySelector('table')

      // ── Score input + force grade (single listener on table, not wrap) ──
      tbl.addEventListener('change', async e => {
        const gradeInp=e.target.closest('.grade-input')
        const forceInp=e.target.closest('.force-input')
        if (gradeInp) {
          const sid=parseInt(gradeInp.dataset.sid),colId=parseInt(gradeInp.dataset.col),max=parseFloat(gradeInp.dataset.max)
          if (_isLockedScoreColumn(colId)) {
            showToast('คะแนนนี้มาจากระบบกลาง ครูไม่สามารถแก้ไขได้', 'warning')
            gradeInp.value = scoreMap[sid]?.[colId]?.final ?? ''
            return
          }
          let val=gradeInp.value.trim()
          const isDeltaInput = /^[+-]/.test(val)
          if(!isDeltaInput){
            if(val!==''&&parseFloat(val)>max){gradeInp.value=max;val=String(max)}
            if(val!==''&&parseFloat(val)<0){gradeInp.value=0;val='0'}
          }
          const currentHist = scoreMap[sid]?.[colId]?.history ?? []
          if(!scoreMap[sid])scoreMap[sid]={}
          gradeInp.style.outline='2px solid #6366f1';gradeInp.style.outlineOffset='1px'
          document.getElementById('grade-saving')?.classList.remove('hidden')
          try{
            const result = await saveStudentScore(classData.id,sid,colId,val===''?null:val,{currentHistory:currentHist})
            if(!result){gradeInp.value=scoreMap[sid][colId]?.final??'';return}
            const{final,history}=result
            scoreMap[sid][colId]={orig:history[0]?.d??final,retake:null,final,history}
            gradeInp.value = final!==null ? String(final) : ''
            gradeInp.title = ''
            // update hist indicator
            const cell=gradeInp.closest('td')
            if(history.length>1){
              if(!cell?.querySelector('.hist-indicator')){
                const ind=document.createElement('span')
                ind.className='hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none'
                ind.textContent='Δ';ind.dataset.sid=sid;ind.dataset.col=colId;ind.title='ดูประวัติคะแนน'
                cell?.appendChild(ind)
              }
            }else{cell?.querySelector('.hist-indicator')?.remove()}
            gradeInp.style.outline=''
            gradeInp.style.boxShadow='0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)'
            gradeInp.style.background='#f0fdf4'
            setTimeout(()=>{gradeInp.style.boxShadow='';gradeInp.style.background=''},900)
            const{midRaw:mRaw,finRaw:fRaw,total,grade,khuna}=_calcGradeRow(sid)
            const fg=scoreMap[sid]?.['__force']??''
            const midEl=document.getElementById(`gmid-${sid}`)
            const finEl=document.getElementById(`gfin-${sid}`)
            if(midEl)midEl.textContent=mRaw>0?mRaw.toFixed(1):'—'
            if(finEl)finEl.textContent=fRaw>0?fRaw.toFixed(1):'—'
            const tEl=document.getElementById(`gtotal-${sid}`)
            const gEl=document.getElementById(`ggrade-${sid}`)
            const kEl=document.getElementById(`gkhuna-${sid}`)
            if(tEl)tEl.textContent=total>0?total:'—'
            if(gEl)gEl.textContent=fg||(grade>0?grade.toFixed(1):'0')
            if(kEl){kEl.textContent=khuna.label;kEl.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${khuna.cls}`}
          }catch{showToast('บันทึกไม่สำเร็จ','error')}
          finally{document.getElementById('grade-saving')?.classList.add('hidden')}
        }
      })

      // ── Delta preview on input ──
      tbl.addEventListener('input', e => {
        const inp = e.target.closest('.grade-input'); if (!inp) return
        const v = inp.value.trim()
        if (!/^[+-]/.test(v)) { inp.title = ''; return }
        const sid = parseInt(inp.dataset.sid), colId = parseInt(inp.dataset.col)
        const current = scoreMap[sid]?.[colId]?.final ?? 0
        const delta = parseFloat(v); if (isNaN(delta)) { inp.title = ''; return }
        const next = Math.round((current + delta) * 1000) / 1000
        inp.title = `${current} ${delta >= 0 ? '+' : '−'} ${Math.abs(delta)} = ${next}`
      })

      // ── Hist indicator + mass score popup ──
      tbl.addEventListener('click', e => {
        const histInd = e.target.closest('.hist-indicator')
        if (histInd) {
          const sid = parseInt(histInd.dataset.sid), colId = parseInt(histInd.dataset.col)
          const hist = scoreMap[sid]?.[colId]?.history ?? []
          const col = [...midCols, ...finalCols, ...bonusCols].find(c => c.id === colId)
          _showHistoryPopup(sid, colId, col?.assignment_name ?? '', hist)
          return
        }
        const massBtn = e.target.closest('.btn-mass-score')
        if (massBtn) {
          _showMassScorePopup(parseInt(massBtn.dataset.colid), massBtn.dataset.colname, massBtn.dataset.max ? parseFloat(massBtn.dataset.max) : null)
          return
        }
      })

      // ── Force grade popup (click on force-cell) ──
      tbl.addEventListener('click', e => {
        const cell = e.target.closest('.force-cell')
        if (!cell) return
        const sid = parseInt(cell.dataset.sid)
        document.getElementById('force-grade-popup')?.remove()
        const current = scoreMap[sid]?.['__force'] ?? ''
        const pop = document.createElement('div')
        pop.id = 'force-grade-popup'
        pop.className = 'fixed inset-0 z-[400] flex items-end sm:items-center justify-center p-4'
        pop.style.background = 'rgba(0,0,0,0.4)'
        const st = students.find(s=>s.id===sid)
        pop.innerHTML = `
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
            <div class="bg-rose-50 px-5 py-3 border-b border-rose-100">
              <p class="font-bold text-rose-700 text-sm">บังคับเกรด</p>
              <p class="text-xs text-rose-400">${st?.full_name??''}</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-4 gap-2 mb-3">
                ${forceGradeOptions.map(g=>`
                  <button class="force-pick py-2.5 rounded-xl text-sm font-bold border transition
                    ${g===current ? 'bg-rose-500 text-white border-rose-500' : 'bg-white text-rose-600 border-rose-200 hover:bg-rose-50'}"
                    data-grade="${g}">${g}</button>`).join('')}
                <button class="force-pick py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-400 hover:bg-gray-50 col-span-4"
                  data-grade="">ล้างค่า (ใช้เกรดปกติ)</button>
              </div>
            </div>
          </div>`
        document.body.appendChild(pop)
        pop.addEventListener('click', e2 => {
          const btn = e2.target.closest('.force-pick')
          if (!btn && e2.target === pop) { pop.remove(); return }
          if (!btn) return
          const grade = btn.dataset.grade
          if(!scoreMap[sid])scoreMap[sid]={}
          scoreMap[sid]['__force'] = grade
          const {grade: calcGrade} = _calcGradeRow(sid)
          const gEl = document.getElementById(`ggrade-${sid}`)
          if(gEl) gEl.textContent = grade || (calcGrade>0?calcGrade.toFixed(1):'0')
          // update cell
          const span = cell.querySelector('span')
          if(span){span.textContent=grade||'+';span.className=`text-xs font-bold ${grade?'text-rose-600':'text-rose-200'}`}
          pop.remove()
        })
      })
      // ── Keyboard nav: Arrow + Enter + Tab ──
      tbl.addEventListener('keydown',e=>{
        const inp=e.target.closest('.grade-input');if(!inp)return
        const navKeys=['Tab','Enter','ArrowUp','ArrowDown','ArrowLeft','ArrowRight']
        if(!navKeys.includes(e.key))return
        e.preventDefault()
        const allInputs=[...wrap.querySelectorAll('.grade-input')]
        const sids=[...new Set(allInputs.map(i=>i.dataset.sid))]
        const cols=[...new Set(allInputs.map(i=>i.dataset.col))]
        const nCols=cols.length
        const idx=allInputs.indexOf(inp)
        const row=Math.floor(idx/nCols), col=idx%nCols
        let tr=row, tc=col
        switch(e.key){
          case 'Enter': case 'ArrowDown':  tr=row<sids.length-1?row+1:row; break
          case 'ArrowUp':   tr=row>0?row-1:0; break
          case 'Tab':       allInputs[idx+(e.shiftKey?-1:1)]?.focus(); return
          case 'ArrowRight': tc=col<nCols-1?col+1:col; break
          case 'ArrowLeft':  tc=col>0?col-1:0; break
        }
        allInputs[tr*nCols+tc]?.focus()
      })
      // ── Inline assignment name edit ──
      wrap.querySelectorAll('.col-edit').forEach(el=>{
        el.addEventListener('blur',async()=>{
          const colId=parseInt(el.dataset.colid),newName=el.textContent.trim()
          if (_isLockedScoreColumn(colId)) return
          try{
            await updateScoreColumn(colId,{assignment_name:newName||null})
            const col=[...midCols,...finalCols,...bonusCols].find(c=>c.id===colId)
            if(col)col.assignment_name=newName
          }catch{showToast('บันทึกไม่สำเร็จ','error')}
        })
        el.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();el.blur()}})
      })
      // ── Sheet col ref popup ──
      wrap.querySelectorAll('.col-sheet-ref').forEach(el=>{
        el.addEventListener('click',()=>{
          const colId = parseInt(el.dataset.colid)
          if (_isLockedScoreColumn(colId)) {
            showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้', 'warning')
            return
          }
          _showSheetColPopup(el, colId)
        })
      })
      // ── Max score popup ──
      wrap.querySelectorAll('.col-max').forEach(el=>{
        el.addEventListener('click',()=>{
          const colId = parseInt(el.dataset.colid)
          if (_isLockedScoreColumn(colId)) {
            showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้', 'warning')
            return
          }
          _showMaxScorePopup(el, colId)
        })
      })
      // ── Add col ──
      wrap.querySelectorAll('.btn-add-col').forEach(btn=>{
        btn.addEventListener('click',()=>_openAddColumnModal(classData,btn.dataset.type,()=>renderGradesGrid(teacher,classData)))
      })
      // ── Quick add bonus column ──────────────────────────────────────────────
      wrap.querySelector('.btn-add-bonus')?.addEventListener('click', () => {
        document.getElementById('quick-add-bonus')?.remove()
        const pop = document.createElement('div')
        pop.id = 'quick-add-bonus'
        pop.className = 'fixed inset-0 z-[600] flex items-center justify-center bg-black/40 p-4'
        pop.innerHTML = `
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-amber-700">⭐ เพิ่มคอลัมน์พิเศษ</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qb-name" type="text" placeholder="เช่น ส่งการบ้าน, ความตั้งใจ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">คะแนนเต็ม <span class="text-gray-400 font-normal">(ไม่บังคับ)</span></label>
              <input id="qb-max" type="number" min="0" placeholder="ไม่จำกัด"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qb-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qb-add" class="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`
        document.body.appendChild(pop)
        pop.querySelector('#qb-cancel').addEventListener('click', () => pop.remove())
        pop.addEventListener('click', e => { if (e.target === pop) pop.remove() })
        const nameEl = pop.querySelector('#qb-name')
        nameEl.focus()
        pop.querySelector('#qb-add').addEventListener('click', async () => {
          const name = nameEl.value.trim()
          const max  = pop.querySelector('#qb-max').value ? parseFloat(pop.querySelector('#qb-max').value) : null
          if (!name) { showToast('กรุณากรอกชื่อคอลัมน์', 'warning'); return }
          const btn = pop.querySelector('#qb-add')
          btn.disabled = true; btn.textContent = '⏳'
          try {
            await createScoreColumn({ class_id: classData.id, assignment_name: name,
              assignment_type: 'คะแนนพิเศษ', sheet_column: '',
              max_score: max, column_type: 'bonus', formula: null, formula_refs: [] })
            showToast(`เพิ่ม "${name}" แล้ว ✅`, 'success')
            pop.remove()
            renderGradesGrid(teacher, classData)
          } catch (err) {
            showToast('เพิ่มไม่สำเร็จ: ' + (err.message ?? ''), 'error')
            btn.disabled = false; btn.textContent = 'เพิ่ม'
          }
        })
      })
      // ── Formula link buttons ──
      wrap.querySelectorAll('.btn-formula-link').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const colId=parseInt(btn.dataset.colid)
          const col=[...midCols,...finalCols].find(c=>c.id===colId)
          if(col) _openFormulaLinkPopup(col)
        })
      })
      // ── Student grade detail ──
      wrap.querySelectorAll('.student-name-cell').forEach(cell=>{
        cell.addEventListener('click',()=>{
          const s=students[parseInt(cell.dataset.idx)]
          _showStudentGradeDetail(s,scoreMap[s.id]??{},_calcGradeRow(s.id))
        })
      })
    }

    setContent(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800">📝 บันทึกคะแนน</h2>
          <p class="text-xs text-gray-400">${ms?.subject_name??'—'} · ${classData.class_name} · ${students.length} คน</p>
        </div>
        <div id="grade-saving" class="hidden bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
        <button id="btn-copy-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-indigo-200 text-sm text-indigo-600 hover:bg-indigo-50 transition flex-shrink-0">
          📋 <span class="hidden sm:inline text-xs">สำเนาคอลัมน์</span>
        </button>
        <button id="btn-manage-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          ⚙️ <span class="hidden sm:inline text-xs">จัดการคอลัมน์</span>
        </button>
      </div>
      <div id="grade-togglebar" class="flex border-b border-gray-100 bg-white flex-shrink-0 overflow-x-auto min-h-[42px]"></div>
      <div class="flex-1 overflow-auto" id="grade-grid-wrap"></div>
    </div>`)
    document.getElementById('btn-manage-cols')?.addEventListener('click', _openManageColsModal)
    document.getElementById('btn-copy-cols')?.addEventListener('click', () => _openCopyColsPopup(classData, allMyClasses))
    _renderToggleBar()
    _renderGrid()

  } catch (err) {
    showToast('โหลดข้อมูลไม่สำเร็จ: '+(err.message??''), 'error')
  }
}

// ─── Copy Columns Popup ───────────────────────────────────────────────────────
async function _openCopyColsPopup(classData, allMyClasses) {
  showToast('กำลังโหลด...', 'info')
  const others = (await Promise.all(
    (allMyClasses ?? []).filter(c => c.id !== classData.id).map(async c => {
      const cols = await getScoreColumns(c.id).catch(() => [])
      return cols.length ? { ...c, cols } : null
    })
  )).filter(Boolean)

  if (!others.length) { showToast('ไม่พบห้องอื่นที่มีคอลัมน์คะแนน', 'info'); return }

  document.getElementById('copy-cols-popup')?.remove()
  const popup = document.createElement('div')
  popup.id = 'copy-cols-popup'
  popup.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6'
  popup.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
        <div class="text-3xl mb-2">📋</div>
        <h3 class="text-white font-bold text-base">สำเนาคอลัมน์คะแนน</h3>
        <p class="text-indigo-100 text-xs mt-1">เลือกห้องที่ต้องการคัดลอกคอลัมน์จาก</p>
      </div>
      <div class="p-5 space-y-2 max-h-72 overflow-y-auto">
        ${others.map(c => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
          <div class="min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${c.class_name}</p>
            <p class="text-xs text-gray-400">${c.master_subjects?.subject_name ?? ''} · ${c.cols.length} คอลัมน์</p>
          </div>
          <button class="ccp-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
            data-src="${c.id}">คัดลอก</button>
        </div>`).join('')}
      </div>
      <div class="px-5 pb-5">
        <button id="ccp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
      </div>
    </div>`
  document.body.appendChild(popup)
  popup.querySelector('#ccp-close').addEventListener('click', () => popup.remove())
  popup.querySelectorAll('.ccp-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const src = others.find(c => c.id === parseInt(btn.dataset.src))
      // confirm mirror
      document.getElementById('ccp-confirm')?.remove()
      const conf = document.createElement('div')
      conf.id = 'ccp-confirm'
      conf.className = 'fixed inset-0 z-[300] flex items-center justify-center p-6'
      conf.style.background = 'rgba(0,0,0,0.5)'
      conf.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">📋</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการ Mirror</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">
          คอลัมน์ของห้องนี้จะถูกทำให้เหมือน<br/>
          <span class="font-semibold text-indigo-700">${src.class_name}</span><br/>
          <span class="text-xs text-red-500">คอลัมน์ที่ต่างออกไปจะถูกลบหรือเพิ่ม/แก้ไข</span>
        </p>
        <div class="flex gap-3">
          <button id="ccp-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccp-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700">ยืนยัน</button>
        </div>
      </div>`
      document.body.appendChild(conf)
      conf.querySelector('#ccp-conf-no').addEventListener('click', () => conf.remove())
      conf.querySelector('#ccp-conf-yes').addEventListener('click', async () => {
        conf.remove(); btn.disabled = true; btn.textContent = '⏳'
        try {
          const existing = await getScoreColumns(classData.id).catch(() => [])
          const srcMap = Object.fromEntries(src.cols.map(c => [c.assignment_name, c]))
          const curMap = Object.fromEntries(existing.map(c => [c.assignment_name, c]))
          // ลบที่ไม่มีในต้นทาง
          for (const col of existing) {
            if (!srcMap[col.assignment_name]) await deleteScoreColumn(col.id).catch(() => {})
          }
          // เพิ่ม/อัปเดตตามต้นทาง
          for (const col of src.cols) {
            if (curMap[col.assignment_name]) {
              await updateScoreColumn(curMap[col.assignment_name].id, {
                assignment_type: col.assignment_type,
                sheet_column:    col.sheet_column ?? '',
                max_score:       col.max_score,
                assignment_name: col.assignment_name,
              }).catch(() => {})
            } else {
              await createScoreColumn({ class_id: classData.id, assignment_name: col.assignment_name,
                assignment_type: col.assignment_type, sheet_column: col.sheet_column ?? '', max_score: col.max_score })
            }
          }
          showToast(`Mirror จาก ${src.class_name} สำเร็จ ✅`, 'success')
          popup.remove()
          renderGradesGrid(window._currentGradeTeacher, classData)
        } catch (err) {
          showToast('Mirror ไม่สำเร็จ: ' + (err.message ?? ''), 'error')
          btn.disabled = false; btn.textContent = 'คัดลอก'
        }
      })
    })
  })
}

// ─── Course-level Column Modal ────────────────────────────────────────────────
export async function _openCourseColsModal(subjectId, subjectName, allClasses) {
  const courseClasses = allClasses.filter(c => c.course_id === subjectId)
  if (!courseClasses.length) { showToast('ยังไม่มีห้องเรียนในคอร์สนี้', 'warning'); return }

  showToast('กำลังโหลด...', 'info')
  const refClass = courseClasses[0]
  let cols = await getScoreColumns(refClass.id).catch(() => [])

  const TYPE_COLOR_LOCAL = {
    midterm: 'bg-blue-50 text-blue-700', final: 'bg-purple-50 text-purple-700',
    กลางภาค: 'bg-blue-50 text-blue-700', ปลายภาค: 'bg-purple-50 text-purple-700',
  }
  const midCols   = () => cols.filter(c => c.assignment_type === 'midterm' || c.assignment_type === 'กลางภาค')
  const finalCols = () => cols.filter(c => c.assignment_type === 'final'   || c.assignment_type === 'ปลายภาค')

  document.getElementById('course-cols-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'course-cols-modal'
  modal.className = 'fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4'

  const colRow = col => `
    <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 hover:border-gray-200 bg-gray-50/60">
      <input type="checkbox" class="ccm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-name="${_htmlEsc(col.assignment_name)}" />
      <span class="flex-1 text-xs text-gray-700 truncate">${col.assignment_name}</span>
      <span class="text-[11px] text-gray-400">/${col.max_score || 0}</span>
      <button class="ccm-del text-gray-300 hover:text-red-400 text-lg px-1 rounded hover:bg-red-50 transition" data-name="${_htmlEsc(col.assignment_name)}">🗑</button>
    </div>`

  const renderModal = () => {
    modal.innerHTML = `
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>
        <div class="px-5 py-4 border-b flex items-start justify-between gap-3 flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ คอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">${subjectName} · sync ${courseClasses.length} ห้อง</p>
          </div>
          <button id="ccm-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none flex-shrink-0">×</button>
        </div>

        <div class="overflow-auto flex-1 p-5 space-y-4">
          <!-- bulk bar -->
          <div id="ccm-bulk-bar" class="hidden flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            <p id="ccm-bulk-count" class="text-xs font-semibold text-red-700">เลือก 0 รายการ</p>
            <button id="ccm-bulk-del" class="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition">🗑️ ลบที่เลือก</button>
          </div>

          <div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค <span class="font-normal text-gray-400">(${midCols().length})</span></h4>
            <div class="space-y-1.5">${midCols().map(colRow).join('') || '<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition" data-type="กลางภาค">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค <span class="font-normal text-gray-400">(${finalCols().length})</span></h4>
            <div class="space-y-1.5">${finalCols().map(colRow).join('') || '<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition" data-type="ปลายภาค">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
        </div>
      </div>`

    const _ccmConfirm = (msg, onConfirm) => {
      document.getElementById('ccm-confirm')?.remove()
      const p = document.createElement('div')
      p.id = 'ccm-confirm'
      p.className = 'fixed inset-0 z-[300] flex items-center justify-center p-6'
      p.style.background = 'rgba(0,0,0,0.5)'
      p.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">🗑️</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">${msg}</p>
        <div class="flex gap-3">
          <button id="ccm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบเลย</button>
        </div>
      </div>`
      document.body.appendChild(p)
      p.querySelector('#ccm-conf-no').addEventListener('click', () => p.remove())
      p.querySelector('#ccm-conf-yes').addEventListener('click', () => { p.remove(); onConfirm() })
    }

    const _deleteByName = async (names) => {
      // ลบใน refClass แล้ว propagate ไปทุกห้อง
      for (const cls of courseClasses) {
        const clsCols = await getScoreColumns(cls.id).catch(() => [])
        for (const name of names) {
          const found = clsCols.find(c => c.assignment_name === name)
          if (found) await deleteScoreColumn(found.id).catch(() => {})
        }
      }
      cols = await getScoreColumns(refClass.id).catch(() => [])
      showToast(`ลบสำเร็จ — sync ทุก ${courseClasses.length} ห้องแล้ว ✅`, 'success')
      renderModal()
    }

    const _updateBulk = () => {
      const checked = [...modal.querySelectorAll('.ccm-cb:checked')]
      const bar = modal.querySelector('#ccm-bulk-bar')
      if (bar) {
        bar.classList.toggle('hidden', !checked.length)
        const el = bar.querySelector('#ccm-bulk-count')
        if (el) el.textContent = `เลือก ${checked.length} รายการ`
      }
    }

    modal.querySelector('#ccm-close').addEventListener('click', () => modal.remove())
    modal.querySelectorAll('.ccm-cb').forEach(cb => cb.addEventListener('change', _updateBulk))
    modal.querySelector('#ccm-bulk-del')?.addEventListener('click', () => {
      const checked = [...modal.querySelectorAll('.ccm-cb:checked')]
      const names = checked.map(cb => cb.dataset.name)
      _ccmConfirm(`ลบ ${names.length} คอลัมน์จากทุกห้อง?<br/><span class="font-semibold text-sm">${names.join(', ')}</span>`, () => _deleteByName(names))
    })

    modal.querySelectorAll('.ccm-del').forEach(btn => {
      btn.addEventListener('click', () => {
        _ccmConfirm(`ลบ <span class="font-semibold">"${btn.dataset.name}"</span> จากทุก ${courseClasses.length} ห้อง?`, () => _deleteByName([btn.dataset.name]))
      })
    })

    modal.querySelectorAll('.ccm-add').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.type
        // reuse add col modal but propagate to all classes
        document.getElementById('add-col-modal')?.remove()
        const hasSheet = !!(refClass?.google_sheet_id)
        const clr = type === 'ปลายภาค' ? 'purple' : 'blue'
        const addModal = document.createElement('div')
        addModal.id = 'add-col-modal'
        addModal.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4'
        addModal.innerHTML = `<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${type}</h3>
          <p class="text-xs text-gray-400 mb-4">จะเพิ่มใน <b>ทุก ${courseClasses.length} ห้อง</b> ของ ${subjectName}</p>
          <div class="space-y-3">
            <div><label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
              <input id="acol2-name" type="text" placeholder="เช่น คะแนนเก็บ 1"
                class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${clr}-400"/></div>
            <div class="grid grid-cols-2 gap-3">
              <div><label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
                <input id="acol2-max" type="number" min="1" value="20"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${clr}-400"/></div>
              ${hasSheet ? `<div><label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
                <input id="acol2-sheet" type="text" placeholder="EH"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${clr}-400"/></div>`
              : `<input id="acol2-sheet" type="hidden" value=""/>`}
            </div>
            <div id="acol2-msg" class="hidden text-xs text-red-500"></div>
            <div class="flex gap-3 pt-1">
              <button id="acol2-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="acol2-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มทุกห้อง</button>
            </div>
          </div>
        </div>`
        document.body.appendChild(addModal)
        addModal.querySelector('#acol2-sheet')?.addEventListener('input', e => { e.target.value = e.target.value.toUpperCase() })
        addModal.querySelector('#acol2-cancel').addEventListener('click', () => addModal.remove())
        addModal.querySelector('#acol2-save').addEventListener('click', async () => {
          const name  = addModal.querySelector('#acol2-name').value.trim()
          const max   = parseFloat(addModal.querySelector('#acol2-max').value) || 20
          const sheet = (addModal.querySelector('#acol2-sheet')?.value ?? '').trim().toUpperCase() || null
          const msg   = addModal.querySelector('#acol2-msg')
          if (!name) { msg.textContent = 'กรุณาระบุชื่องาน'; msg.classList.remove('hidden'); return }
          const saveBtn = addModal.querySelector('#acol2-save')
          saveBtn.disabled = true; saveBtn.textContent = '⏳ กำลังเพิ่ม...'
          try {
            for (const cls of courseClasses) {
              const clsCols = await getScoreColumns(cls.id).catch(() => [])
              if (clsCols.some(c => c.assignment_name === name)) continue
              await createScoreColumn({ class_id: cls.id, assignment_name: name,
                assignment_type: type, sheet_column: sheet ?? '', max_score: max })
            }
            addModal.remove()
            showToast(`เพิ่ม "${name}" ใน ${courseClasses.length} ห้องแล้ว ✅`, 'success')
            cols = await getScoreColumns(refClass.id).catch(() => [])
            renderModal()
          } catch (err) {
            msg.textContent = 'เกิดข้อผิดพลาด: ' + (err.message ?? ''); msg.classList.remove('hidden')
            saveBtn.disabled = false; saveBtn.textContent = 'เพิ่มทุกห้อง'
          }
        })
      })
    })
  }

  document.body.appendChild(modal)
  renderModal()
}

// ─── Add Column Modal ─────────────────────────────────────────────────────────
function _openAddColumnModal(classData, type, onDone) {
  document.getElementById('add-col-modal')?.remove()
  const label    = type === 'final' ? 'ปลายภาค' : 'กลางภาค'
  const clr      = type === 'final' ? 'purple' : 'blue'
  const hasSheet = !!(classData?.google_sheet_id)
  const modal    = document.createElement('div')
  modal.id = 'add-col-modal'
  modal.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
    <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${label}</h3>
    <p class="text-xs text-gray-400 mb-4">คอลัมน์สำหรับ <b>${label}</b></p>
    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
        <input id="acol-name" type="text" placeholder="เช่น งานที่ 1"
          class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${clr}-400"/>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
          <input id="acol-max" type="number" min="1" value="20"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${clr}-400"/>
        </div>
        ${hasSheet ? `
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
          <input id="acol-sheet" type="text" placeholder="EH"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${clr}-400"/>
        </div>` : `<input id="acol-sheet" type="hidden" value=""/>`}
      </div>
      <div id="acol-msg" class="hidden text-xs text-red-500"></div>
      <div class="flex gap-3 pt-1">
        <button id="acol-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="acol-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มคอลัมน์</button>
      </div>
    </div>
  </div>`
  document.body.appendChild(modal)
  modal.querySelector('#acol-sheet')?.addEventListener('input', e => { e.target.value = e.target.value.toUpperCase() })
  modal.querySelector('#acol-cancel').addEventListener('click', () => modal.remove())
  // ไม่ปิดด้วย backdrop click
  modal.querySelector('#acol-save').addEventListener('click', async () => {
    const name  = modal.querySelector('#acol-name').value.trim()
    const max   = parseFloat(modal.querySelector('#acol-max').value) || 20
    const sheet = (modal.querySelector('#acol-sheet')?.value ?? '').trim().toUpperCase() || null
    const msg   = modal.querySelector('#acol-msg')
    if (!name) { msg.textContent = 'กรุณาระบุชื่องาน'; msg.classList.remove('hidden'); return }
    const btn = modal.querySelector('#acol-save')
    btn.disabled = true; btn.textContent = 'กำลังเพิ่ม...'
    try {
      await createScoreColumn({ class_id: classData.id, assignment_name: name, max_score: max, sheet_column: sheet ?? '', assignment_type: type })
      modal.remove(); showToast(`เพิ่มคอลัมน์ "${name}" แล้ว`, 'success'); onDone()
    } catch (err) {
      msg.textContent = 'เกิดข้อผิดพลาด: ' + (err.message ?? ''); msg.classList.remove('hidden')
      btn.disabled = false; btn.textContent = 'เพิ่มคอลัมน์'
    }
  })
}


export async function renderRequests(teacher) {
  setActiveNav('requests')
  setTitle('คำร้องนักเรียน')

  if (!teacher) {
    setContent(`<div class="text-center py-20 text-gray-400"><p class="text-5xl mb-4">🔔</p><p>กรุณาเข้าสู่ระบบ</p></div>`)
    return
  }

  setContent(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const all = await getTeacherExamRequests(teacher.id).catch(()=>[])

  const FILTER_TABS = [
    { key: 'pending',  label: 'รอดำเนินการ', cls: 'text-amber-600'  },
    { key: 'approved', label: 'อนุมัติแล้ว',  cls: 'text-emerald-600'},
    { key: 'rejected', label: 'ปฏิเสธ',       cls: 'text-red-500'   },
    { key: 'all',      label: 'ทั้งหมด',      cls: 'text-gray-600'  },
  ]

  let _curFilter = 'pending'

  const _fmtDate = (d) => {
    if (!d) return '—'
    const dt = new Date(d)
    return `${dt.getDate()}/${dt.getMonth()+1}/${dt.getFullYear()+543}`
  }

  const _isExamDatePast = (dateStr) => {
    if (!dateStr) return false
    const d = new Date(dateStr); d.setHours(23,59,59,0)
    return d < new Date()
  }

  const _requestCard = (r) => {
    const stu  = r.students
    const cls  = r.classes
    const col  = r.class_score_columns
    // แสดงปุ่มผลสอบทันทีที่อนุมัติ (ไม่ต้องรอวันผ่าน)
    const canResult   = r.status === 'approved' && r.exam_attended == null
    const canEditScore= r.status === 'approved' && r.exam_attended === true

    const statusBadge = r.status === 'pending'
      ? `<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">⏳ รอดำเนินการ</span>`
      : r.status === 'approved'
        ? `<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ อนุมัติ</span>`
        : `<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">✕ ปฏิเสธ</span>`

    const attendanceBadge = r.exam_attended === true
      ? `<span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">📝 มาสอบแล้ว${r.exam_score != null ? ' · <b>'+r.exam_score+'</b> คะแนน' : ' (ยังไม่ได้ใส่คะแนน)'}</span>`
      : r.exam_attended === false
        ? `<span class="text-[11px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">❌ ขาดสอบ/ผิดนัด</span>`
        : ''

    return `<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4" id="req-card-${r.id}">
      <!-- Header -->
      <div class="flex items-start gap-3 mb-3">
        <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-tr from-indigo-300 to-purple-300
                    flex items-center justify-center text-white text-sm font-bold">
          ${stu?.image_url ? `<img src="${stu.image_url}" class="w-full h-full object-cover"/>` : (stu?.full_name??'น').charAt(0)}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${stu?.full_name ?? '—'}</p>
          <p class="text-xs text-gray-400">${stu?.student_code ?? ''} · ${stu?.main_room ?? ''}</p>
        </div>
        ${statusBadge}
      </div>
      <!-- Info -->
      <div class="bg-gray-50 rounded-xl p-3 space-y-1.5 text-xs text-gray-600 mb-3">
        <div class="flex gap-2"><span class="text-gray-400 w-16">วิชา</span><span class="font-medium text-gray-800">${cls?.master_subjects?.subject_name ?? '—'} (${cls?.class_name ?? ''})</span></div>
        <div class="flex gap-2"><span class="text-gray-400 w-16">ประเภท</span><span>${r.request_type}</span></div>
        ${col ? `<div class="flex gap-2"><span class="text-gray-400 w-16">หัวข้อ</span><span>${col.assignment_name} (เต็ม ${col.max_score})</span></div>` : ''}
        <div class="flex gap-2"><span class="text-gray-400 w-16">วันที่</span><span>${_fmtDate(r.requested_date)}${r.requested_period_no ? ' · คาบ '+r.requested_period_no : ''}</span></div>
        ${r.reason ? `<div class="flex gap-2"><span class="text-gray-400 w-16">เหตุผล</span><span>${r.reason}</span></div>` : ''}
        ${r.teacher_comment ? `<div class="flex gap-2"><span class="text-gray-400 w-16">หมายเหตุ</span><span class="${r.status==='rejected'?'text-red-600':'text-emerald-600'} font-medium">${r.teacher_comment}</span></div>` : ''}
        ${attendanceBadge ? `<div class="mt-1">${attendanceBadge}</div>` : ''}
      </div>
      <!-- Actions -->
      ${r.status === 'pending' ? `
      <div class="flex gap-2">
        <button onclick="window._approveRequest(${r.id})"
          class="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition">
          ✅ อนุมัติ
        </button>
        <button onclick="window._rejectRequest(${r.id})"
          class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold hover:bg-red-100 transition">
          ✕ ปฏิเสธ
        </button>
      </div>` : ''}
      ${canResult ? `
      <div class="border-t border-gray-100 pt-3">
        <p class="text-xs text-gray-500 mb-2 font-medium">📋 บันทึกผลการสอบ</p>
        <div class="flex gap-2">
          <button onclick="window._markAttended(${r.id}, ${stu?.id ?? 'null'}, ${col?.id ?? 'null'}, ${col?.max_score ?? 100}, null)"
            class="flex-1 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition">
            📝 มาสอบแล้ว + ใส่คะแนน
          </button>
          <button onclick="window._markAbsent(${r.id}, ${stu?.id ?? 'null'})"
            class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 text-xs font-semibold hover:bg-red-100 transition">
            ❌ ขาดสอบ/ผิดนัด
          </button>
        </div>
      </div>` : ''}
      ${canEditScore ? `
      <div class="border-t border-gray-100 pt-3 flex items-center justify-between">
        <p class="text-xs text-blue-600 font-medium">📝 มาสอบแล้ว${r.exam_score != null ? ' · คะแนน '+r.exam_score : ''}</p>
        <button onclick="window._markAttended(${r.id}, ${stu?.id ?? 'null'}, ${col?.id ?? 'null'}, ${col?.max_score ?? 100}, ${r.exam_score ?? 'null'})"
          class="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition font-medium">
          ✏️ แก้ไขคะแนน
        </button>
      </div>` : ''}
    </div>`
  }

  const _render = () => {
    const list = _curFilter === 'all' ? all : all.filter(r => r.status === _curFilter)
    const counts = Object.fromEntries(FILTER_TABS.map(t => [t.key, t.key === 'all' ? all.length : all.filter(r => r.status === t.key).length]))

    document.getElementById('req-content').innerHTML = list.length
      ? `<div class="space-y-3">${list.map(_requestCard).join('')}</div>`
      : `<div class="text-center py-16 text-gray-300">
          <p class="text-4xl mb-3">📭</p>
          <p class="text-sm">ไม่มีคำร้อง${_curFilter !== 'all' ? 'ในสถานะนี้' : ''}</p>
        </div>`

    // update tab active styles
    document.querySelectorAll('.req-tab').forEach(btn => {
      const active = btn.dataset.filter === _curFilter
      btn.className = `req-tab flex-1 py-2 text-xs font-medium rounded-lg transition
        ${active ? 'bg-white shadow text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`
    })
  }

  setContent(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs text-gray-400">${all.length} รายการ</span>
    </div>
    <!-- Filter tabs -->
    <div class="flex gap-1 bg-gray-100 rounded-xl p-1 mb-4">
      ${FILTER_TABS.map(t => `
      <button class="req-tab flex-1 py-2 text-xs font-medium rounded-lg transition text-gray-500 hover:text-gray-700"
        data-filter="${t.key}">
        ${t.label}${all.filter(r => t.key !== 'all' && r.status === t.key).length > 0 ? ` (${all.filter(r => r.status === t.key).length})` : t.key === 'all' ? ` (${all.length})` : ''}
      </button>`).join('')}
    </div>
    <div id="req-content"></div>
  </div>`)

  document.querySelectorAll('.req-tab').forEach(btn => {
    btn.addEventListener('click', () => { _curFilter = btn.dataset.filter; _render() })
  })
  _render()

  // ── Custom modal helper ───────────────────────────────────────────────────────
  const _showModal = ({ title, body, confirmLabel, confirmCls = 'bg-emerald-600 hover:bg-emerald-700', onConfirm }) => {
    document.getElementById('req-modal')?.remove()
    const m = document.createElement('div')
    m.id = 'req-modal'
    m.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4'
    m.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
        <div class="px-5 py-4 border-b border-gray-100">
          <h3 class="font-bold text-gray-800">${title}</h3>
        </div>
        <div class="px-5 py-4">${body}</div>
        <div class="px-5 pb-5 flex gap-2">
          <button id="req-modal-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="req-modal-confirm"
            class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold ${confirmCls}">
            ${confirmLabel}
          </button>
        </div>
      </div>`
    document.body.appendChild(m)
    m.querySelector('#req-modal-cancel').addEventListener('click', () => m.remove())
    m.addEventListener('click', e => { if (e.target === m) m.remove() })
    m.querySelector('#req-modal-confirm').addEventListener('click', () => {
      onConfirm(m)
    })
  }

  // ── Action handlers ──────────────────────────────────────────────────────────
  window._approveRequest = (id) => {
    _showModal({
      title: '✅ อนุมัติคำร้อง',
      body: `<label class="block text-sm text-gray-600 mb-1.5">หมายเหตุถึงนักเรียน <span class="text-gray-400">(ไม่บังคับ)</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="เช่น นัดสอบวันอังคาร คาบ 3 ห้องครู..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"></textarea>`,
      confirmLabel: 'ยืนยันอนุมัติ',
      onConfirm: async (m) => {
        const comment = m.querySelector('#req-modal-comment').value.trim() || null
        m.remove()
        try {
          await reviewExamRequest(id, { status: 'approved', teacher_comment: comment })
          showToast('อนุมัติคำร้องแล้ว ✅', 'success')
          renderRequests(teacher)
        } catch (err) { showToast('ไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
      }
    })
  }

  window._rejectRequest = (id) => {
    _showModal({
      title: '✕ ปฏิเสธคำร้อง',
      body: `<label class="block text-sm text-gray-600 mb-1.5">เหตุผลที่ปฏิเสธ <span class="text-red-500">*</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="กรุณาระบุเหตุผล..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"></textarea>
             <p class="text-xs text-red-400 mt-1">บังคับกรอกทุกครั้งที่ปฏิเสธ</p>`,
      confirmLabel: 'ยืนยันปฏิเสธ',
      confirmCls: 'bg-red-500 hover:bg-red-600',
      onConfirm: async (m) => {
        const comment = m.querySelector('#req-modal-comment').value.trim()
        if (!comment) { showToast('กรุณาระบุเหตุผลก่อนปฏิเสธ', 'warning'); return }
        m.remove()
        try {
          await reviewExamRequest(id, { status: 'rejected', teacher_comment: comment })
          showToast('บันทึกการปฏิเสธแล้ว', 'success')
          renderRequests(teacher)
        } catch (err) { showToast('ไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
      }
    })
  }

  window._markAttended = (id, studentId, assignmentId, maxScore, currentScore) => {
    const isEdit = currentScore != null
    _showModal({
      title: isEdit ? '✏️ แก้ไขคะแนน' : '📝 บันทึกผลการสอบ — มาสอบ',
      body: `<label class="block text-sm text-gray-600 mb-1.5">คะแนนที่สอบได้ <span class="text-red-500">*</span> <span class="text-gray-400">(เต็ม ${maxScore})</span></label>
             <input id="req-modal-score" type="number" min="0" max="${maxScore}" step="0.5"
               value="${isEdit ? currentScore : ''}"
               placeholder="0 – ${maxScore}"
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300" />`,
      confirmLabel: isEdit ? 'บันทึกการแก้ไข' : 'บันทึกคะแนน',
      confirmCls: 'bg-blue-600 hover:bg-blue-700',
      onConfirm: async (m) => {
        const scoreStr = m.querySelector('#req-modal-score').value
        const score = parseFloat(scoreStr)
        if (isNaN(score) || score < 0 || score > maxScore) {
          showToast(`คะแนนต้องอยู่ระหว่าง 0 – ${maxScore}`, 'warning'); return
        }
        m.remove()
        try {
          await updateExamResult(id, { exam_attended: true, exam_score: score, studentId, assignmentId })
          showToast(isEdit ? 'แก้ไขคะแนนแล้ว ✅' : 'บันทึกผลสอบและคะแนนแล้ว ✅', 'success')
          renderRequests(teacher)
        } catch (err) { showToast('ไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
      }
    })
  }

  window._markAbsent = (id, studentId) => {
    // ตรวจสอบจำนวนครั้งที่ผิดนัดก่อน
    const missedCount = all.filter(r =>
      r.students?.id === studentId && r.exam_attended === false
    ).length

    _showModal({
      title: '❌ ขาดสอบ / ผิดนัด',
      body: `<p class="text-sm text-gray-600 mb-2">ยืนยันว่านักเรียนไม่มาสอบตามนัด?</p>
             ${missedCount >= 1
               ? `<div class="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 font-medium">
                    ⚠️ นักเรียนผิดนัดมาแล้ว <b>${missedCount}</b> ครั้ง
                    ${missedCount + 1 >= 2 ? '<br/>หากยืนยัน จะครบ 2 ครั้ง — <b>นักเรียนจะไม่สามารถยื่นคำร้องได้อีก</b>' : ''}
                  </div>`
               : ''}`,
      confirmLabel: 'ยืนยัน — ขาดสอบ/ผิดนัด',
      confirmCls: 'bg-red-500 hover:bg-red-600',
      onConfirm: async (m) => {
        m.remove()
        try {
          await updateExamResult(id, { exam_attended: false, exam_score: null })
          showToast('บันทึกว่าขาดสอบ/ผิดนัดแล้ว', 'success')
          renderRequests(teacher)
        } catch (err) { showToast('ไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
      }
    })
  }
}

