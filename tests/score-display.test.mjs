import test from 'node:test'
import assert from 'node:assert/strict'
import { isBonus, effectiveScore, displayScore, normalizeRounding, roundKey } from '../js/score-display.js'

test('standalone special scores and overrides do not enter the academic total', () => {
  const cols = [{id:1,max_score:70}, {id:2,max_score:30,assignment_type:'ปลายภาค'}, {id:3,column_type:'bonus'}, {id:4,column_type:'override'}, {id:5,assignment_type:'คะแนนพิเศษ'}]
  const raw = {1:49.4,2:20.2,3:10,4:80,5:5}
  const total = cols.filter(c => !isBonus(c) && c.column_type !== 'override').reduce((s,c) => s + effectiveScore(cols,c,id => raw[id]),0)
  assert.ok(Math.abs(total - 69.6) < 1e-10)
  assert.equal(displayScore({total:true},'total',total),70)
  assert.equal(displayScore({total:false},'total',total),69.6)
  assert.equal(raw[1],49.4)
})

test('column and subtotal rounding are independent and preserve empty and zero scores', () => {
  assert.equal(displayScore({'1':true},'1',7.6),8)
  assert.equal(displayScore({'1':true},'mid_subtotal',7.6),7.6)
  assert.equal(displayScore({},'1',null),'')
  assert.equal(displayScore({},'1',0),0)
  assert.deepEqual(normalizeRounding({total:false,invalid:'true'}),{total:false})
})

test('derived formulas and explicitly linked bonuses match teacher calculation', () => {
  const cols = [{id:1,max_score:10,bonus_formula:'A'}, {id:2,column_type:'bonus'}, {id:3,column_type:'derived',formula:'ROUND(X/2,2)',formula_refs:[{var:'X',col_id:1}]}]
  const raw = id => ({1:9.5,2:5})[id]
  assert.equal(effectiveScore(cols,cols[0],raw),10)
  assert.equal(effectiveScore(cols,cols[1],raw),5)
  assert.equal(effectiveScore(cols,cols[2],raw),4.75)
  assert.equal(roundKey(cols[2]),'derived_3')
})
