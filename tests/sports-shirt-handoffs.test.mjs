import {test} from 'node:test'
import assert from 'node:assert/strict'
import {handoffState,notePresets,roomPaymentState} from '../js/sports-shirt-handoffs.js'
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
