import {test} from 'node:test'
import assert from 'node:assert/strict'
import {handoffState,notePresets} from '../js/sports-shirt-handoffs.js'
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
