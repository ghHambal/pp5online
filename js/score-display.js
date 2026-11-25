import { evalFormula, assignBonusVars } from './score-formula.js'

export const isBonus = c => c.column_type === 'bonus' || c.assignment_type === 'คะแนนพิเศษ'
export const isGradeColumn = c => !isBonus(c) && c.column_type !== 'override'
export const isFinal = c => ['final', 'ปลายภาค'].includes(c.assignment_type)
export const roundKey = c => c.column_type === 'derived' ? `derived_${c.id}` : String(c.id)
export function sortScoreColumns(columns, priorityNames = []) {
  const priority = new Map(priorityNames.map((name, index) => [name, index]))
  return [...(columns ?? [])].sort((a, b) => {
    const ai = priority.get(a.assignment_name)
    const bi = priority.get(b.assignment_name)
    if (ai !== undefined || bi !== undefined) {
      if (ai === undefined) return 1
      if (bi === undefined) return -1
      if (ai !== bi) return ai - bi
    }
    const ao = a.sort_order == null ? Number.POSITIVE_INFINITY : Number(a.sort_order)
    const bo = b.sort_order == null ? Number.POSITIVE_INFINITY : Number(b.sort_order)
    return ao - bo || (a.id ?? 0) - (b.id ?? 0)
  })
}
export function normalizeRounding(settings) {
  const normalized = {
    total: true,
    ...Object.fromEntries(Object.entries(settings ?? {}).filter(([, v]) => typeof v === 'boolean')),
  }
  const forcedGradeColor = settings && typeof settings === 'object' ? settings.forcedGradeColor : undefined
  normalized.forcedGradeColor = forcedGradeColor === 'black' ? 'black' : 'red'
  return normalized
}

// คะแนนรวมที่ใช้ตัดสินเกรดต้องเป็นค่าเดียวกับที่แสดงในช่อง "คะแนนรวมทั้งหมด"
// เมื่อเปิดการปัดคะแนนรวม ให้ปัดค่าที่นำไปคำนวณจริงด้วย ไม่ใช่ปัดเฉพาะหน้าจอ
export function scoreForGrade(settings, value) {
  const n = Number(value)
  if (!Number.isFinite(n)) return 0
  return normalizeRounding(settings).total ? Math.round(n) : n
}

export function displayScore(settings, key, value, decimals = 1) {
  if (value == null || value === '') return value ?? ''
  const n = Number(value)
  if (!Number.isFinite(n)) return ''
  return normalizeRounding(settings)[key] ? Math.round(n) : Number(n.toFixed(decimals))
}

// Raw values stay unchanged. Standalone bonuses and override helpers never enter totals.
export function effectiveScore(columns, col, raw, cellRecord = null) {
  if (col.column_type === 'derived') {
    const refs = col.formula_refs ?? []
    const values = refs.map(ref => raw(ref.col_id))
    if (refs.length && values.every(value => value == null || value === '')) return null
    const vars = Object.fromEntries(refs.map((ref, index) => [ref.var, Number(values[index]) || 0]))
    return evalFormula(col.formula, vars) ?? 0
  }
  if (cellRecord?.score_formula) {
    // Cross-student references are evaluated in the teacher grade grid and stored
    // in final_score. A student's own score payload cannot see other students' rows.
    if ((cellRecord.score_formula_refs ?? []).some(ref => ref.student_id != null)) {
      if (cellRecord.final_score == null) return null
      const stored = Number(cellRecord.final_score)
      if (!Number.isFinite(stored)) return 0
      return col.max_score ? Math.max(0, Math.min(stored, Number(col.max_score))) : Math.max(0, stored)
    }
    const refs = cellRecord.score_formula_refs ?? []
    const values = refs.map(ref => raw(ref.col_id))
    if (refs.length && values.every(value => value == null || value === '')) return null
    const vars = Object.fromEntries(refs.map((ref, index) => [ref.var, Number(values[index]) || 0]))
    const result = evalFormula(cellRecord.score_formula, vars)
    if (result == null) return 0
    return col.max_score ? Math.max(0, Math.min(result, Number(col.max_score))) : Math.max(0, result)
  }
  const stored = raw(col.id)
  const hasValue = stored != null && stored !== ''
  const value = Number(stored) || 0
  if (!col.bonus_formula || isBonus(col) || col.column_type === 'override') return hasValue ? value : null
  const bonusCols = assignBonusVars(columns.filter(isBonus))
  if (!hasValue && bonusCols.every(c => {
    const bonusValue = raw(c.id)
    return bonusValue == null || bonusValue === ''
  })) return null
  const vars = Object.fromEntries(bonusCols.map(c => [c.var, Number(raw(c.id)) || 0]))
  const result = value + (evalFormula(col.bonus_formula, vars) ?? 0)
  return col.max_score ? Math.min(result, col.max_score) : result
}
