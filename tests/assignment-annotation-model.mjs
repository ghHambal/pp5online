import assert from 'node:assert/strict'
import { sanitizeReviewStrokes, isCurrentReview } from '../js/assignment-annotation-model.js'
import { renderStudentImageReviews } from '../js/assignment-review-view.js'
const strokes = sanitizeReviewStrokes([
 {type:'pen',points:[[.1,.2],[-1,0],[NaN,.1],[.5,.6]],color:'bad',width:Infinity},
 {type:'text',x:.3,y:.4,text:'ตรวจแล้ว',color:'#00ff00',width:.004},
 {type:'text',x:2,y:0,text:'invalid'},
])
assert.equal(strokes.length,2)
assert.equal(strokes[0].points.length,2)
assert.equal(strokes[0].color,'#dc2626')
assert.ok(strokes[0].width<=.05)
const sub={submitted_at:'2026-10-22T01:00:00Z',file_urls:[{url:'https://example.com/new.png'}]}
assert.ok(isCurrentReview({source_url:sub.file_urls[0].url,source_submitted_at:sub.submitted_at},sub,sub.file_urls[0]))
assert.ok(!isCurrentReview({source_url:sub.file_urls[0].url,source_submitted_at:'2026-10-21T01:00:00Z'},sub,sub.file_urls[0]))
assert.equal(renderStudentImageReviews(sub),'')
const html=renderStudentImageReviews({...sub,image_reviews:[{source_url:'https://example.com/old.png',source_submitted_at:'2026-10-21T01:00:00Z',image_url:'https://example.com/review.png?a="bad"'}]})
assert.ok(html.includes('ผลตรวจงานรอบก่อน'))
assert.ok(html.includes('&quot;bad&quot;'))
console.log('Stroke validation, exact submission revision matching, and student review rendering passed')
