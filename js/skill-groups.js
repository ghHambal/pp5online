// ค่ากลุ่มทักษะที่ผู้ใช้กรอกได้หลายรูปแบบ แต่ระบบภายในใช้ค่ามาตรฐานเดียวกัน
const LIFE_SKILL_ALIASES = new Set(['ชีวิต', 'ทักษะชีวิต'])

export function normalizeSkillGroup(value) {
  if (value == null) return null
  const normalized = String(value).trim().replace(/\s+/g, ' ')
  if (!normalized) return null
  return LIFE_SKILL_ALIASES.has(normalized) ? 'ชีวิต' : normalized
}

export function isLifeSkillGroup(value) {
  return normalizeSkillGroup(value) === 'ชีวิต'
}
