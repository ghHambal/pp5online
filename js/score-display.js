import { evalFormula, assignBonusVars } from './score-formula.js'

export const isBonus = c => c.column_type === 'bonus' || (!c.column_type && c.assignment_type === 'คะแนนพิเศษ')
export const isFinal = c => ['final', 'ปลายภาค'].includes(c.assignment_type)
export const roundKey = c => c.column_type === 'derived' ? `derived_${c.id}` : String(c.id)
export const normalizeRounding = settings => ({ total: true, ...Object.fromEntries(Object.entries(settings ?? {}).filter(([,v]) => typeof v === 'boolean')) })
export function displayScore(settings, key, value, decimals = 1) {
  if (value == null || value === '') return value ?? ''
  const n = Number(value)
  if (!Number.isFinite(n)) return ''
  return normalizeRounding(settings)[key] ? Math.round(n) : Number(n.toFixed(decimals))
}

// Raw values stay unchanged. Standalone bonuses and override helpers never enter totals.
export function effectiveScore(columns, col, raw) {
  if (col.column_type === 'derived') {
    const vars = Object.fromEntries((col.formula_refs ?? []).map(ref => [ref.var, Number(raw(ref.col_id)) || 0]))
    return evalFormula(col.formula, vars) ?? 0
  }
  const value = Number(raw(col.id)) || 0
  if (!col.bonus_formula || isBonus(col) || col.column_type === 'override') return value
  const vars = Object.fromEntries(assignBonusVars(columns.filter(isBonus)).map(c => [c.var, Number(raw(c.id)) || 0]))
  const result = value + (evalFormula(col.bonus_formula, vars) ?? 0)
  return col.max_score ? Math.min(result, col.max_score) : result
}
