import {test} from 'node:test'
import assert from 'node:assert/strict'
import {handoffState,notePresets,roomPaymentState,roomColorSizes} from '../js/sports-shirt-handoffs.js'
test('whole-room totals, independent issue tags, cancellation and roster changes',()=>{
 const room={target:[{confirmed:true,color:'red'},{confirmed:true,color:'blue'},{confirmed:false}],receipts:[],issues:[]}
 assert.equal(handoffState(room).status,'pending')
 room.receipts.push({quantity:1});assert.equal(handoffState(room).status,'partial')
 room.receipts.push({quantity:1});room.issues.push({note:'exchange'})
 assert.equal(handoffState(room).status,'complete');assert.equal(handoffState(room).issues,1)
 assert.equal(handoffState(room).unconfirmed,1)
 room.receipts[0].cancelled_at='2026-09-14';assert.equal(handoffState(room).remaining,1)
 room.target=[];assert.equal(handoffState(room).changed,true)
 assert.equal(notePresets.length,6)
})

test('payment summary uses recorded payments and gender prices across the whole room',()=>{
 const row={target:[{id:'a',gender:'M',confirmed:true},{id:'b',gender:'W',confirmed:true},{id:'c',gender:'M',confirmed:false},{id:'d',gender:null}]}
 const snapshot={shirt_payment_amount_m:200,shirt_payment_amount_w:250,shirt_payments:[{student_id:'a',amount:180,paid_at:'2026-09-14'},{student_id:'outside',amount:999}]}
 const state=roomPaymentState(row,snapshot)
 assert.equal(state.paid,1);assert.equal(state.paidAmount,180)
 assert.equal(state.unpaid,2);assert.equal(state.dueAmount,450)
 assert.equal(state.waiting,1);assert.equal(state.students[0].dueAmount,0)
 assert.equal(state.students[2].status,'unpaid') // Includes unconfirmed size.
 const waiting=roomPaymentState(row,{...snapshot,shirt_payment_amount_m:0,shirt_payment_amount_w:null})
 assert.equal(waiting.paid,1);assert.equal(waiting.waiting,3);assert.equal(waiting.dueAmount,0)
 assert.equal(roomPaymentState({target:[]},{}).students.length,0)
})

test('color cards count only confirmed sizes and keep pending/color identity intact',()=>{
 const snapshot={allowed_sizes:['S','M','L','XL','2XL'],team_colors:[{id:'red',name:'แดง',hex_color:'#ef4444'},{id:'blue',name:'ฟ้า',hex_color:'invalid'}]}
 const row={target:[{color_id:'red',size:'L',confirmed:true},{color_id:'red',size:'S',confirmed:true},{color_id:'red',size:'L',confirmed:true},{color_id:'red',size:'XL',confirmed:false},{color_id:'blue',size:'2XL',confirmed:true},{color:'เขียว',size:'M',confirmed:false},{confirmed:false}]}
 const groups=roomColorSizes(row,snapshot)
 assert.deepEqual(groups[0].sizes,[['S',1],['L',2]])
 assert.equal(groups[0].confirmed,3);assert.equal(groups[0].pending,1)
 assert.equal(groups[1].hex,'#64748b')
 assert.equal(groups.find(g=>g.name==='เขียว').pending,1)
 assert.equal(groups.find(g=>g.name==='ไม่ระบุสี').pending,1)
 assert.equal(groups.reduce((n,g)=>n+g.confirmed,0),handoffState(row).target)
 assert.deepEqual(roomColorSizes({target:[]},snapshot),[])
 const changed={...row,target:[...row.target,{color_id:'red',size:'M',confirmed:true}]}
 assert.deepEqual(roomColorSizes(changed,snapshot)[0].sizes,[['S',1],['M',1],['L',2]])
 assert.equal(roomColorSizes(row,snapshot)[0].confirmed,3)
})
