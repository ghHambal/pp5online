import { getScoreColumns, getSystemConfig, getLifeSkillColumns,
         createScoreColumn, updateScoreColumn, deleteScoreColumn,
         updateColumnSortOrders, getMyClasses, setColumnAutoAttendanceSync } from './api.js'
import { showToast } from './ui.js'

const SELECT_CLS = 'input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400'
const INPUT_CLS  = 'input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm'

function setContent(html) { document.getElementById('main-content').innerHTML = html }
function setTitle(t)      { document.getElementById('page-title').textContent = t }
function setActiveNav(nav) {
  document.querySelectorAll('[data-nav]').forEach(el => {
    const active = el.dataset.nav === nav
    el.classList.toggle('bg-emerald-800', active)
    el.classList.toggle('text-white', active)
    el.classList.toggle('text-emerald-200', !active)
  })
}

const SCORE_TYPES = ['ระหว่างเรียน','กลางภาค','ปลายภาค','คะแนนพิเศษ']
const TYPE_COLOR  = {
  'ระหว่างเรียน': 'bg-blue-50 text-blue-700',
  'กลางภาค':      'bg-amber-50 text-amber-700',
  'ปลายภาค':      'bg-red-50 text-red-700',
  'คะแนนพิเศษ':   'bg-purple-50 text-purple-700',
}
const RELIGION_LOCKED_SCORE_COLUMNS = ['คะแนนมาเรียน', 'คะแนนละหมาด']

// ─── Formula Evaluator (Recursive Descent Parser — no eval) ──────────────────
export function evalFormula(expr, vars = {}) {
  if (!expr?.trim()) return null
  let pos = 0
  const str = expr.replace(/\s+/g, '').toUpperCase()

  const peek  = ()  => str[pos] ?? ''
  const next  = ()  => str[pos++]
  const err   = (m) => { throw new Error(m) }

  // comparison → addSub (op addSub)?
  const parseExpr = () => {
    let left = parseAddSub()
    const twoChar = str.slice(pos, pos + 2)
    const oneChar = str[pos]
    let op = ''
    if (['>=','<=','!=','=='].includes(twoChar)) { op = twoChar; pos += 2 }
    else if (['>','<'].includes(oneChar))        { op = oneChar; pos++ }
    if (!op) return left
    const right = parseAddSub()
    return ({ '>':l=>l>right?1:0,'<':l=>l<right?1:0,'>=':l=>l>=right?1:0,
              '<=':l=>l<=right?1:0,'==':l=>l===right?1:0,'!=':l=>l!==right?1:0 })[op](left)
  }

  const parseAddSub = () => {
    let v = parseMulDiv()
    while (peek() === '+' || peek() === '-') {
      const op = next(); const r = parseMulDiv()
      v = op === '+' ? v + r : v - r
    }
    return v
  }

  const parseMulDiv = () => {
    let v = parseUnary()
    while (peek() === '*' || peek() === '/') {
      const op = next(); const r = parseUnary()
      v = op === '*' ? v * r : (r === 0 ? 0 : v / r)
    }
    return v
  }

  const parseUnary = () => {
    if (peek() === '-') { next(); return -parsePrimary() }
    if (peek() === '+') { next(); return parsePrimary() }
    return parsePrimary()
  }

  const parseArgs = () => {
    const args = []
    if (peek() !== ')') {
      args.push(parseExpr())
      while (peek() === ',') { next(); args.push(parseExpr()) }
    }
    if (next() !== ')') err('Expected )')
    return args
  }

  const parsePrimary = () => {
    // Number
    if (/[0-9.]/.test(peek())) {
      let s = ''; while (/[0-9.]/.test(peek())) s += next()
      return parseFloat(s)
    }
    // Parentheses
    if (peek() === '(') {
      next(); const v = parseExpr()
      if (next() !== ')') err('Expected )')
      return v
    }
    // Identifier
    if (/[A-Z_]/.test(peek())) {
      let name = ''; while (/[A-Z0-9_]/.test(peek())) name += next()
      if (peek() === '(') {
        next()
        const args = parseArgs()
        const n = args.length
        switch (name) {
          case 'MIN':     return n ? Math.min(...args) : 0
          case 'MAX':     return n ? Math.max(...args) : 0
          case 'AVG': case 'AVERAGE': return n ? args.reduce((s,x)=>s+x,0)/n : 0
          case 'SUM':     return args.reduce((s,x)=>s+x, 0)
          case 'ROUND':   return Math.round((args[0]??0) * 10**(args[1]??0)) / 10**(args[1]??0)
          case 'FLOOR':   return Math.floor(args[0]??0)
          case 'CEIL':    return Math.ceil(args[0]??0)
          case 'ABS':     return Math.abs(args[0]??0)
          case 'SQRT':    return Math.sqrt(Math.max(0, args[0]??0))
          case 'POW':     return Math.pow(args[0]??0, args[1]??1)
          case 'IF':      return (args[0] ? (args[1]??0) : (args[2]??0))
          case 'CLAMP':   return Math.min(Math.max(args[0]??0, args[1]??0), args[2]??0)
          default: err(`Unknown function: ${name}`)
        }
      }
      // Variable
      return Number(vars[name] ?? 0)
    }
    err(`Unexpected: "${peek()}"`)
  }

  try {
    const result = parseExpr()
    if (pos < str.length) err(`Unexpected "${str[pos]}"`)
    return isNaN(result) ? null : result
  } catch { return null }
}

// Auto-assign variable names A, B, C, ... to bonus columns in order
export function assignBonusVars(bonusCols) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return bonusCols.map((c, i) => ({ ...c, var: letters[i] ?? `V${i}` }))
}

// ─── Confirm popup ────────────────────────────────────────────────────────────
function _showConfirm(message, onConfirm) {
  document.getElementById('sc-confirm-popup')?.remove()
  const el = document.createElement('div')
  el.id = 'sc-confirm-popup'
  el.className = 'fixed inset-0 z-[200] flex items-center justify-center p-6'
  el.style.background = 'rgba(0,0,0,0.45)'
  el.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
      <div class="text-3xl mb-3">🗑️</div>
      <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">${message}</p>
      <div class="flex gap-3">
        <button id="sc-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
        <button id="sc-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold">ลบเลย</button>
      </div>
    </div>`
  document.body.appendChild(el)
  el.querySelector('#sc-conf-no').addEventListener('click', () => el.remove())
  el.querySelector('#sc-conf-yes').addEventListener('click', () => { el.remove(); onConfirm() })
}

// ─── Same-subject popup ───────────────────────────────────────────────────────
async function _checkSameSubjectCols(teacher, classId, classData) {
  if (!teacher?.id || !classData?.course_id) return
  try {
    const allClasses = await getMyClasses(teacher.id).catch(() => [])
    const sameSubject = allClasses.filter(c => c.id !== classId && c.course_id === classData.course_id)
    if (!sameSubject.length) return
    const withCols = (await Promise.all(sameSubject.map(async c => {
      const cols = await getScoreColumns(c.id).catch(() => [])
      return cols.length ? { ...c, cols } : null
    }))).filter(Boolean)
    if (!withCols.length) return
    document.getElementById('sc-same-subj-popup')?.remove()
    const el = document.createElement('div')
    el.id = 'sc-same-subj-popup'
    el.className = 'fixed inset-0 z-[190] flex items-center justify-center p-6'
    el.style.background = 'rgba(0,0,0,0.45)'
    el.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
          <div class="text-3xl mb-2">📋</div>
          <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
          <p class="text-indigo-100 text-xs mt-1">ต้องการคัดลอกคอลัมน์คะแนนจากห้องที่มีอยู่แล้วไหม?</p>
        </div>
        <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
          ${withCols.map(c => `
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
            <div class="min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${c.class_name}</p>
              <p class="text-xs text-gray-400">${c.cols.length} คอลัมน์</p>
            </div>
            <button class="copy-cols-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold" data-src="${c.id}">คัดลอก</button>
          </div>`).join('')}
        </div>
        <div class="px-5 pb-5">
          <button id="sc-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50">ปิด</button>
        </div>
      </div>`
    document.body.appendChild(el)
    el.querySelector('#sc-ssp-close').addEventListener('click', () => el.remove())
    el.querySelectorAll('.copy-cols-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const srcId = parseInt(btn.dataset.src)
        const src   = withCols.find(c => c.id === srcId)
        btn.disabled = true; btn.textContent = '⏳'
        try {
          const existing = await getScoreColumns(classId).catch(() => [])
          const existingNames = new Set(existing.map(c => c.assignment_name))
          let added = 0
          for (const col of src.cols) {
            if (existingNames.has(col.assignment_name)) continue
            await createScoreColumn({
              class_id: classId, assignment_name: col.assignment_name,
              assignment_type: col.assignment_type, sheet_column: col.sheet_column ?? '',
              max_score: col.max_score, column_type: col.column_type ?? 'regular',
              formula: col.formula ?? null, formula_refs: col.formula_refs ?? [],
            })
            added++
          }
          showToast(`คัดลอก ${added} คอลัมน์จาก ${src.class_name} ✅`, 'success')
          el.remove(); window._scReload?.()
        } catch (err) {
          showToast('คัดลอกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
          btn.disabled = false; btn.textContent = 'คัดลอก'
        }
      })
    })
  } catch {}
}

// ─── Main export ──────────────────────────────────────────────────────────────
export async function renderScoreColumns(teacher, classId, className, classData = null) {
  setActiveNav('my-classes')
  setTitle(`คอลัมน์คะแนน — ${className}`)

  const isLifeSkill = (classData?.skill_group ?? classData?.master_subjects?.skill_group ?? '') === 'ชีวิต'
  const isReligion  = ['AGM', 'AGMVOC'].includes(classData?.master_subjects?.subject_group)
  const hasSheet    = !!(classData?.google_sheet_id)
  let lockedScoreColumnIds = new Set()
  let checkedIds           = new Set()
  let showBonus            = false

  const _reload = async () => {
    const cols = await getScoreColumns(classId)
    const cfg  = await getSystemConfig().catch(() => ({}))
    const year = parseInt(cfg.academicYear ?? 2568)
    const sem  = parseInt(cfg.semester ?? 1)
    const lockedNames = isLifeSkill
      ? (await getLifeSkillColumns(year, sem, 'สามัญ').catch(() => [])).slice(0, 3).map(c => c.name)
      : isReligion ? RELIGION_LOCKED_SCORE_COLUMNS : []
    lockedScoreColumnIds = new Set()
    for (const name of lockedNames) {
      const matches = cols.filter(c => c.assignment_name === name)
      if (matches.length > 0) lockedScoreColumnIds.add(matches[0].id)
    }
    window._scoreColCache = Object.fromEntries(cols.map(c => [c.id, c]))
    checkedIds = new Set()

    const regular  = cols.filter(c => (c.column_type ?? 'regular') === 'regular')
    const bonus    = cols.filter(c => c.column_type === 'bonus')
    const derived  = cols.filter(c => c.column_type === 'derived')
    const override = cols.filter(c => c.column_type === 'override')
    const bonusWithVars = assignBonusVars(bonus)

    const totalRegular = regular.reduce((s,c) => s + (Number(c.max_score)||0), 0)
    const totalDerived = derived.reduce((s,c) => s + (Number(c.max_score)||0), 0)
    const grandTotal   = totalRegular + totalDerived

    const renderColRow = (c, extra = '', groupItems = []) => {
      const locked = lockedScoreColumnIds.has(c.id)
      const ctype  = c.column_type ?? 'regular'
      const idx    = groupItems.findIndex(x => x.id === c.id)
      const canUp  = !locked && idx > 0 && !lockedScoreColumnIds.has(groupItems[idx - 1]?.id)
      const canDown = !locked && idx >= 0 && idx < groupItems.length - 1
      return `
      <tr class="${locked ? 'bg-emerald-50/35' : 'hover:bg-gray-50'}">
        <td class="px-3 py-2.5 text-center">
          ${locked
            ? `<span class="text-emerald-500 text-xs">🔒</span>`
            : `<input type="checkbox" class="sc-row-cb w-4 h-4 rounded accent-red-500" data-id="${c.id}" />`}
        </td>
        <td class="px-3 py-2.5 text-center whitespace-nowrap">
          <button onclick="window._moveScoreCol(${c.id},'up')" ${canUp ? '' : 'disabled'}
            class="px-1.5 py-0.5 rounded text-xs ${canUp ? 'text-gray-500 hover:bg-gray-100' : 'text-gray-200 cursor-default'}">▲</button>
          <button onclick="window._moveScoreCol(${c.id},'down')" ${canDown ? '' : 'disabled'}
            class="px-1.5 py-0.5 rounded text-xs ${canDown ? 'text-gray-500 hover:bg-gray-100' : 'text-gray-200 cursor-default'}">▼</button>
        </td>
        <td class="px-4 py-2.5 font-medium text-gray-800">
          ${c.assignment_name}
          ${ctype === 'derived' && c.formula
            ? `<span class="ml-1 text-[10px] text-indigo-400 font-mono">= ${c.formula}</span>` : ''}
          ${extra}
        </td>
        ${hasSheet ? `<td class="px-4 py-2.5 text-center font-mono text-indigo-600 text-xs">${c.sheet_column ?? ''}</td>` : ''}
        <td class="px-4 py-2.5 text-center text-gray-600">${c.max_score ?? '—'}</td>
        <td class="px-4 py-2.5 text-right whitespace-nowrap">
          ${locked
            ? `<span class="text-xs text-emerald-700 font-medium">ระบบล็อก</span>`
            : `${ctype === 'regular' ? `
               <button onclick="window._toggleAutoSync(${c.id})"
                 title="${c.auto_attendance_sync ? 'ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ' : 'เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ'}"
                 class="text-xs font-medium mr-2 px-2 py-1 rounded-lg ${c.auto_attendance_sync ? 'bg-emerald-50 text-emerald-700' : 'text-gray-400 hover:bg-gray-100'}">
                 ${c.auto_attendance_sync ? '🔄 ดึงจากเช็คชื่ออัตโนมัติ' : '🔄 ดึงจากเช็คชื่อ'}
               </button>` : ''}
               <button onclick="window._editScoreCol(${c.id})" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
               <button onclick="window._deleteScoreCol(${c.id})" class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`}
        </td>
      </tr>`
    }

    const renderTable = (items, extraFn = null) => {
      if (!items.length) return `<p class="text-center py-6 text-gray-300 text-sm">ยังไม่มีคอลัมน์</p>`
      return `<table class="w-full text-sm">
        <thead class="bg-gray-50 text-xs text-gray-400 uppercase">
          <tr>
            <th class="px-3 py-2 text-center w-8">เลือก</th>
            <th class="px-3 py-2 text-center w-14">เรียง</th>
            <th class="px-4 py-2 text-left">ชื่อ</th>
            ${hasSheet ? `<th class="px-4 py-2 text-center">Sheet Col</th>` : ''}
            <th class="px-4 py-2 text-center">คะแนนเต็ม</th>
            <th class="px-4 py-2 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${items.map(c => renderColRow(c, extraFn?.(c) ?? '', items)).join('')}
        </tbody>
      </table>`
    }

    // ── grouped regular ──
    const grouped = SCORE_TYPES.map(t => ({ type: t, items: regular.filter(c => c.assignment_type === t) }))

    document.getElementById('sc-content').innerHTML = `
      <!-- Summary -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-gray-400">รวมคะแนน (นับใน 100)</p>
            <p class="text-2xl font-bold ${grandTotal > 100 ? 'text-red-600' : 'text-indigo-700'}">${grandTotal} คะแนน
              ${grandTotal > 100 ? `<span class="text-sm font-normal text-red-500 ml-1">⚠️ เกิน 100</span>` : ''}
            </p>
          </div>
          <div class="text-xs text-gray-400 text-right">
            <p>คอลัมน์หลัก: ${regular.length} | อ้างอิง: ${derived.length} | พิเศษ: ${bonus.length} | ปรับคะแนน: ${override.length}</p>
            <p class="mt-1">กลางภาค: ${regular.filter(c=>c.assignment_type==='กลางภาค').reduce((s,c)=>s+(Number(c.max_score)||0),0)} |
               ปลายภาค: ${regular.filter(c=>c.assignment_type==='ปลายภาค').reduce((s,c)=>s+(Number(c.max_score)||0),0)}</p>
          </div>
        </div>
      </div>

      <!-- Bulk delete bar -->
      <div id="sc-bulk-bar" class="hidden mb-3 flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
        <p id="sc-bulk-count" class="text-sm font-semibold text-red-700">เลือก 0 รายการ</p>
        <button id="sc-bulk-delete" class="px-4 py-1.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold">🗑️ ลบที่เลือก</button>
      </div>

      <!-- Regular columns (grouped by type) -->
      ${grouped.map(g => `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${TYPE_COLOR[g.type]??''}">${g.type}</span>
            <span class="text-xs text-gray-400">รวม ${g.items.reduce((s,c)=>s+(Number(c.max_score)||0),0)} คะแนน</span>
          </div>
          <button onclick="window._addScoreCol('${g.type}')" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${renderTable(g.items)}
      </div>`).join('')}

      <!-- Derived columns -->
      <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-indigo-50 bg-indigo-50/50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">🧮 คอลัมน์อ้างอิงสูตร</span>
            <span class="text-xs text-gray-400">นับใน 100 · คำนวณจากคอลัมน์พิเศษ</span>
          </div>
          <button onclick="window._addDerivedCol()" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${renderTable(derived)}
      </div>

      <!-- Override columns (ปรับคะแนนกลางภาค) -->
      <div class="bg-white rounded-2xl border border-teal-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-teal-50 bg-teal-50/50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-700">🔄 คอลัมน์ปรับคะแนนกลางภาค</span>
            <span class="text-xs text-gray-400">ไม่นับใน 100 · นักเรียนไม่เห็น · ไม่ลงเอกสาร ปพ.5</span>
          </div>
          <button onclick="window._addOverrideCol()" class="text-xs text-teal-600 hover:text-teal-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${renderTable(override, c => c.link_column_id
          ? ` <span class="ml-1 text-[10px] text-teal-500">🔗 → ${window._scoreColCache?.[c.link_column_id]?.assignment_name ?? '—'}</span>`
          : ` <span class="ml-1 text-[10px] text-red-400">⚠️ ยังไม่ได้เชื่อมคอลัมน์</span>`)}
      </div>

      <!-- Bonus columns (toggle) -->
      <div class="mb-4">
        <button id="sc-toggle-bonus"
          class="w-full flex items-center justify-between px-5 py-3 bg-white rounded-2xl border border-amber-100 shadow-sm hover:bg-amber-50/30 transition">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">⭐ คอลัมน์พิเศษ (Bonus)</span>
            <span class="text-xs text-gray-400">ไม่นับใน 100 · นักเรียนเห็นได้</span>
            ${bonus.length ? `<span class="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">${bonus.length}</span>` : ''}
          </div>
          <span class="text-gray-400 text-sm">${showBonus ? '▲ ซ่อน' : '▼ แสดง'}</span>
        </button>
        <div id="sc-bonus-section" class="${showBonus ? '' : 'hidden'} mt-2 bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          <div class="flex items-center justify-between px-5 py-3 border-b border-amber-50 bg-amber-50/30">
            <div class="text-xs text-gray-500">
              ${bonusWithVars.length
                ? bonusWithVars.map(c => `<span class="font-mono font-bold text-amber-700">${c.var}</span> = ${c.assignment_name}`).join(' &nbsp;|&nbsp; ')
                : 'ยังไม่มีคอลัมน์พิเศษ'}
            </div>
            <button onclick="window._addBonusCol()" class="text-xs text-amber-600 hover:text-amber-800 font-medium flex-shrink-0">＋ เพิ่ม</button>
          </div>
          ${renderTable(bonus)}
        </div>
      </div>

      <!-- Form เพิ่ม/แก้ไข (regular) -->
      <div id="sc-form-wrap" class="hidden bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
        <h4 id="sc-form-title" class="font-semibold text-gray-700 mb-4">เพิ่มคอลัมน์คะแนน</h4>
        <form id="sc-form" class="grid grid-cols-2 gap-3">
          <input type="hidden" id="sc-edit-id" />
          <input type="hidden" id="sc-edit-ctype" value="regular" />
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อรายการ <span class="text-red-400">*</span></label>
            <input id="sc-name" type="text" placeholder="เช่น คะแนนเก็บ 1" class="${INPUT_CLS}" />
          </div>
          <div id="sc-type-wrap">
            <label class="block text-xs font-medium text-gray-600 mb-1">หมวด <span class="text-red-400">*</span></label>
            <select id="sc-type" class="${SELECT_CLS}">
              ${SCORE_TYPES.map(t=>`<option value="${t}">${t}</option>`).join('')}
            </select>
          </div>
          ${hasSheet ? `
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">คอลัมน์ Sheet</label>
            <input id="sc-col" type="text" placeholder="EK" class="${INPUT_CLS} font-mono uppercase" maxlength="4" />
          </div>` : `<input id="sc-col" type="hidden" value="" />`}
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1" id="sc-max-label">คะแนนเต็ม</label>
            <input id="sc-max" type="number" min="0" placeholder="20" class="${INPUT_CLS}" />
          </div>
          <!-- Link column section (shown only for override) -->
          <div id="sc-link-wrap" class="col-span-2 hidden">
            <label class="block text-xs font-medium text-gray-600 mb-1">เชื่อมกับคอลัมน์กลางภาคหลัก <span class="text-red-400">*</span></label>
            <select id="sc-link-col" class="${SELECT_CLS}">
              <option value="">— เลือกคอลัมน์ —</option>
            </select>
            <p class="text-[11px] text-gray-400 mt-1">ถ้าคะแนนในคอลัมน์นี้สูงกว่าคอลัมน์ที่เลือก ระบบจะเขียนทับคะแนนจริงในคอลัมน์หลักให้อัตโนมัติทันที</p>
          </div>
          <!-- Formula section (shown only for derived) -->
          <div id="sc-formula-section" class="col-span-2 hidden">
            <div class="bg-indigo-50 rounded-xl p-3 mb-3 text-xs text-indigo-700">
              <p class="font-semibold mb-1">ตัวแปรที่ใช้ได้ (จากคอลัมน์พิเศษ):</p>
              <p id="sc-vars-hint" class="font-mono">—</p>
              <p class="mt-1 text-indigo-500">ฟังก์ชัน: MIN, MAX, AVG, SUM, ROUND, FLOOR, CEIL, ABS, SQRT, POW, IF, CLAMP</p>
              <p class="text-indigo-500">เปรียบเทียบ: &gt; &lt; &gt;= &lt;= == !=</p>
            </div>
            <label class="block text-xs font-medium text-gray-600 mb-1">สูตรคำนวณ <span class="text-red-400">*</span></label>
            <div class="flex gap-2">
              <input id="sc-formula" type="text" placeholder="เช่น MIN(A*2,10)+B หรือ IF(A>5,A,0)" class="${INPUT_CLS} font-mono flex-1" />
              <button type="button" id="sc-test-formula" class="px-3 py-2 rounded-xl bg-indigo-100 text-indigo-700 text-xs font-medium hover:bg-indigo-200 whitespace-nowrap">ทดสอบ</button>
            </div>
            <p id="sc-formula-result" class="text-xs mt-1 hidden"></p>
          </div>
          <div class="col-span-2 flex gap-3 pt-1">
            <button type="button" id="sc-form-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="sc-save" type="submit" class="btn-primary flex-1 py-2 rounded-xl text-white text-sm font-semibold">บันทึก</button>
          </div>
        </form>
      </div>`

    // ─── bind events ──────────────────────────────────────────────────────────
    const bulkBar   = document.getElementById('sc-bulk-bar')
    const bulkCount = document.getElementById('sc-bulk-count')
    const _updateBulkBar = () => {
      const n = checkedIds.size
      bulkBar.classList.toggle('hidden', n === 0)
      bulkCount.textContent = `เลือก ${n} รายการ`
    }
    document.querySelectorAll('.sc-row-cb').forEach(cb => {
      cb.addEventListener('change', () => {
        const id = parseInt(cb.dataset.id)
        cb.checked ? checkedIds.add(id) : checkedIds.delete(id)
        _updateBulkBar()
      })
    })
    document.getElementById('sc-bulk-delete')?.addEventListener('click', () => {
      const names = [...checkedIds].map(id => window._scoreColCache?.[id]?.assignment_name ?? `ID ${id}`).join(', ')
      _showConfirm(`ลบ ${checkedIds.size} คอลัมน์:<br/><span class="font-semibold">${names}</span>`, async () => {
        try {
          await Promise.all([...checkedIds].map(id => deleteScoreColumn(id)))
          showToast(`ลบ ${checkedIds.size} คอลัมน์แล้ว ✅`, 'success')
          checkedIds = new Set(); await _reload()
        } catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
      })
    })

    // toggle bonus
    document.getElementById('sc-toggle-bonus')?.addEventListener('click', () => {
      showBonus = !showBonus
      document.getElementById('sc-bonus-section').classList.toggle('hidden', !showBonus)
      document.getElementById('sc-toggle-bonus').querySelector('span:last-child').textContent = showBonus ? '▲ ซ่อน' : '▼ แสดง'
    })

    // Test formula
    document.getElementById('sc-test-formula')?.addEventListener('click', () => {
      const formula = document.getElementById('sc-formula').value.trim()
      const resultEl = document.getElementById('sc-formula-result')
      if (!formula) { resultEl.classList.add('hidden'); return }
      // Build sample vars (all = 5)
      const sampleVars = Object.fromEntries(bonusWithVars.map(c => [c.var, 5]))
      const result = evalFormula(formula, sampleVars)
      resultEl.classList.remove('hidden')
      if (result === null) {
        resultEl.className = 'text-xs mt-1 text-red-500'
        resultEl.textContent = '⚠️ สูตรไม่ถูกต้อง'
      } else {
        resultEl.className = 'text-xs mt-1 text-emerald-600'
        resultEl.textContent = `✅ ทดสอบด้วย ${bonusWithVars.map(c=>`${c.var}=5`).join(', ')} → ผลลัพธ์ = ${result}`
      }
    })

    // ─── CRUD windows ──────────────────────────────────────────────────────────
    const _openForm = (ctype, title, initialType = SCORE_TYPES[0]) => {
      document.getElementById('sc-edit-id').value = ''
      document.getElementById('sc-edit-ctype').value = ctype
      document.getElementById('sc-name').value = ''
      document.getElementById('sc-col').value = ''
      document.getElementById('sc-max').value = ''
      if (document.getElementById('sc-type')) document.getElementById('sc-type').value = initialType
      document.getElementById('sc-form-title').textContent = title
      const isBonus    = ctype === 'bonus'
      const isDerived  = ctype === 'derived'
      const isOverride = ctype === 'override'
      document.getElementById('sc-type-wrap').classList.toggle('hidden', isBonus || isDerived || isOverride)
      document.getElementById('sc-formula-section').classList.toggle('hidden', !isDerived)
      document.getElementById('sc-link-wrap').classList.toggle('hidden', !isOverride)
      document.getElementById('sc-max-label').textContent = isBonus ? 'คะแนนเต็ม (ไม่บังคับ)' : isOverride ? 'คะแนนเต็ม (auto ตามคอลัมน์ที่เชื่อม)' : 'คะแนนเต็ม'
      document.getElementById('sc-max').readOnly = isOverride
      if (isDerived) {
        document.getElementById('sc-formula').value = ''
        document.getElementById('sc-formula-result').classList.add('hidden')
        document.getElementById('sc-vars-hint').textContent = bonusWithVars.length
          ? bonusWithVars.map(c => `${c.var} = "${c.assignment_name}"`).join('  |  ')
          : 'ยังไม่มีคอลัมน์พิเศษ — เพิ่มก่อน'
      }
      if (isOverride) {
        const linkSelect = document.getElementById('sc-link-col')
        const midtermCols = regular.filter(c => c.assignment_type === 'กลางภาค' || c.assignment_type === 'midterm')
        linkSelect.innerHTML = '<option value="">— เลือกคอลัมน์ —</option>' +
          midtermCols.map(c => `<option value="${c.id}">${c.assignment_name} (เต็ม ${c.max_score ?? '—'})</option>`).join('')
        linkSelect.value = ''
      }
      document.getElementById('sc-form-wrap').classList.remove('hidden')
      document.getElementById('sc-name').focus()
    }

    window._addScoreCol = (type) => _openForm('regular', `เพิ่มคอลัมน์หลัก — ${type}`, type)
    window._addBonusCol = ()     => _openForm('bonus',   'เพิ่มคอลัมน์พิเศษ (Bonus)')
    window._addDerivedCol = ()   => _openForm('derived', 'เพิ่มคอลัมน์อ้างอิงสูตร')
    window._addOverrideCol = () => _openForm('override', 'เพิ่มคอลัมน์ปรับคะแนนกลางภาค')

    document.getElementById('sc-link-col')?.addEventListener('change', e => {
      const linkedId = Number(e.target.value)
      const linked = regular.find(c => c.id === linkedId)
      document.getElementById('sc-max').value = linked?.max_score ?? ''
    })

    window._editScoreCol = (id) => {
      const c = window._scoreColCache?.[id]
      if (!c) return
      if (lockedScoreColumnIds.has(id)) { showToast('คอลัมน์ระบบกลาง แก้ไขไม่ได้', 'warning'); return }
      const ctype = c.column_type ?? 'regular'
      _openForm(ctype, 'แก้ไขคอลัมน์', c.assignment_type)
      document.getElementById('sc-edit-id').value = id
      document.getElementById('sc-name').value = c.assignment_name
      document.getElementById('sc-col').value  = c.sheet_column ?? ''
      document.getElementById('sc-max').value  = c.max_score ?? ''
      if (ctype === 'derived' && c.formula) {
        document.getElementById('sc-formula').value = c.formula
      }
      if (ctype === 'override' && c.link_column_id) {
        document.getElementById('sc-link-col').value = String(c.link_column_id)
      }
    }

    window._moveScoreCol = async (id, direction) => {
      const cols = await getScoreColumns(classId)
      const col  = cols.find(c => c.id === id)
      if (!col) return
      // หา group เดียวกัน (assignment_type + column_type)
      const group = cols.filter(c => c.assignment_type === col.assignment_type && (c.column_type ?? 'regular') === (col.column_type ?? 'regular'))
      const idx = group.findIndex(c => c.id === id)
      const swapIdx = direction === 'up' ? idx - 1 : idx + 1
      if (swapIdx < 0 || swapIdx >= group.length) return
      if (lockedScoreColumnIds.has(group[swapIdx].id)) return
      // สลับ sort_order
      const a = group[idx], b = group[swapIdx]
      const aOrder = a.sort_order ?? (idx + 1) * 10
      const bOrder = b.sort_order ?? (swapIdx + 1) * 10
      await updateColumnSortOrders([{ id: a.id, sort_order: bOrder }, { id: b.id, sort_order: aOrder }])
      await _reload()
    }

    window._deleteScoreCol = (id) => {
      if (lockedScoreColumnIds.has(id)) { showToast('คอลัมน์ระบบกลาง ลบไม่ได้', 'warning'); return }
      const name = window._scoreColCache?.[id]?.assignment_name ?? 'คอลัมน์นี้'
      _showConfirm(`ต้องการลบ <span class="font-semibold">"${name}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`, async () => {
        try {
          await deleteScoreColumn(id); showToast('ลบแล้ว ✅', 'success'); await _reload()
        } catch { showToast('ลบไม่สำเร็จ', 'error') }
      })
    }

    window._toggleAutoSync = async (id) => {
      const col = window._scoreColCache?.[id]
      if (!col) return
      const next = !col.auto_attendance_sync
      const doToggle = async () => {
        try {
          await setColumnAutoAttendanceSync(id, next)
          showToast(next
            ? 'เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้าบันทึกคะแนน ✅'
            : 'ปิดใช้งานแล้ว', 'success')
          await _reload()
        } catch { showToast('บันทึกไม่สำเร็จ', 'error') }
      }
      if (next) {
        _showConfirm(
          `เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${col.assignment_name}"</span>?<br/>` +
          `<span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้านี้ — ถ้าเคยแก้คะแนนคนไหนด้วยมือไว้ก่อน จะไม่ถูกทับ</span>`,
          doToggle,
        )
      } else {
        await doToggle()
      }
    }

    document.getElementById('sc-form-cancel')?.addEventListener('click', () => {
      document.getElementById('sc-form-wrap').classList.add('hidden')
    })

    document.getElementById('sc-form')?.addEventListener('submit', async e => {
      e.preventDefault()
      const btn    = document.getElementById('sc-save')
      const id     = document.getElementById('sc-edit-id').value
      const ctype  = document.getElementById('sc-edit-ctype').value
      const name   = document.getElementById('sc-name').value.trim()
      const col    = (document.getElementById('sc-col')?.value ?? '').trim().toUpperCase()
      const type   = document.getElementById('sc-type')?.value ?? 'ระหว่างเรียน'
      const maxVal = document.getElementById('sc-max').value
      const max    = maxVal ? (parseFloat(maxVal) || null) : null
      const formula = ctype === 'derived' ? (document.getElementById('sc-formula').value.trim() || null) : null
      const linkColumnId = ctype === 'override' ? (Number(document.getElementById('sc-link-col')?.value) || null) : null

      if (!name) { showToast('กรุณากรอกชื่อรายการ', 'warning'); return }
      if (ctype === 'derived' && !max) { showToast('คอลัมน์อ้างอิงสูตรต้องระบุคะแนนเต็ม', 'warning'); return }
      if (ctype === 'derived' && !formula) { showToast('กรุณากรอกสูตรคำนวณ', 'warning'); return }
      if (ctype === 'override' && !linkColumnId) { showToast('กรุณาเลือกคอลัมน์กลางภาคที่จะเชื่อม', 'warning'); return }

      // Build formula_refs from bonusWithVars
      const formulaRefs = ctype === 'derived'
        ? bonusWithVars.map(c => ({ var: c.var, col_id: c.id }))
        : []

      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        const payload = {
          assignment_name: name,
          assignment_type: (ctype === 'bonus' || ctype === 'derived' || ctype === 'override') ? 'คะแนนพิเศษ' : type,
          sheet_column: col, max_score: max,
          column_type: ctype, formula, formula_refs: formulaRefs,
          link_column_id: linkColumnId,
        }
        if (id) await updateScoreColumn(Number(id), payload)
        else    await createScoreColumn({ ...payload, class_id: classId })
        showToast('บันทึกสำเร็จ', 'success')
        document.getElementById('sc-form-wrap').classList.add('hidden')
        if (ctype === 'bonus' || ctype === 'derived') showBonus = true
        await _reload()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        btn.disabled = false; btn.textContent = 'บันทึก'
      }
    })
  }

  window._scReload = _reload

  setContent(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-5 flex-wrap">
      <button onclick="window._navTo?.('my-classes') || history.back()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <div class="flex-1 min-w-0">
        <p class="text-xs text-gray-400">${className}</p>
      </div>
      ${isLifeSkill ? `<button id="btn-fill-lifeskill" class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 flex-shrink-0">🌱 เติมทักษะชีวิต</button>` : ''}
    </div>
    <div id="sc-content">
      <div class="flex justify-center py-8 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-amber-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`)

  await _reload()

  document.getElementById('btn-fill-lifeskill')?.addEventListener('click', async () => {
    const btn = document.getElementById('btn-fill-lifeskill')
    btn.disabled = true; btn.textContent = '⏳'
    try {
      const cfg    = await getSystemConfig().catch(() => ({}))
      const year   = parseInt(cfg.academicYear ?? 2568)
      const sem    = parseInt(cfg.semester ?? 1)
      const lsCols = await getLifeSkillColumns(year, sem, 'สามัญ').catch(() => [])
      if (!lsCols.length) { showToast('ยังไม่มีหัวข้อทักษะชีวิต — แอดมินเพิ่มก่อน', 'warning'); return }
      const existing     = await getScoreColumns(classId)
      const existingNames = new Set(existing.map(c => c.assignment_name))
      let added = 0
      for (const col of lsCols) {
        if (existingNames.has(col.name)) continue
        await createScoreColumn({ class_id: classId, assignment_name: col.name,
          assignment_type: 'กลางภาค', sheet_column: col.sheet_col ?? '', max_score: col.max_score ?? 20 })
        added++
      }
      showToast(added > 0 ? `เพิ่ม ${added} คอลัมน์ ✅` : 'มีคอลัมน์ทักษะชีวิตอยู่แล้ว', added > 0 ? 'success' : 'info')
      await _reload()
    } catch (err) {
      showToast('เติมไม่สำเร็จ', 'error')
    } finally {
      const b = document.getElementById('btn-fill-lifeskill')
      if (b) { b.disabled = false; b.textContent = '🌱 เติมทักษะชีวิต' }
    }
  })

  setTimeout(() => _checkSameSubjectCols(teacher, classId, classData), 500)
}
