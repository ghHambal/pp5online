// Local fixture; the Supabase module is replaced, so no production data is changed.
import {createServer} from 'vite'
const mock = `
const target=[{id:'a',name:'นักเรียน ก',gender:'M',color:'แดง',size:'M',confirmed:true},{id:'b',name:'นักเรียน ข',gender:'W',color:'ฟ้า',size:'L',confirmed:true},{id:'c',name:'นักเรียน ค',gender:'M',confirmed:false}];
const row={room:'ม.1/1',target,target_hash:'h1',revision:0,receipts:[],issues:[],history:[]};
const snap={shirt_payment_amount_m:200,shirt_payment_amount_w:250,shirt_payments:[{student_id:'a',amount:180,paid_at:'2026-09-13T10:00:00Z'}],handoff_event_id:'e1',handoff_rooms:[row],homeroom_teachers:[{main_room:'ม.1/1',teacher_name:'ครูที่ปรึกษาทดสอบ'}],students:target.map(t=>({id:t.id,main_room:row.room,full_name:t.name,gender:'M'})),shirt_requests:[],team_colors:[]};
const saved=new Set();let failed=false;
export const supabase={rpc:async(fn,p)=>{
 if(p.p_password!=='shirt-test-only')return {error:{message:'รหัสผ่านไม่ถูกต้อง'}};
 if(fn==='get_sports_shirt_handoff_snapshot')return {data:structuredClone(snap)};
 if(fn==='save_sports_shirt_handoff'){
  if(saved.has(p.p_request_id))return {data:{}};
  if(p.p_revision!==row.revision)return {error:{message:'มีการบันทึกโดยทีมงานอื่นแล้ว กรุณารีเฟรช'}};
  const d=p.p_data,at=new Date().toISOString();
  if(p.p_action==='receive'){row.receipts.push({id:p.p_request_id,...d,created_at:at});if(d.has_issue)row.issues.push({id:'issue-'+p.p_request_id,note:d.note,opened_by:d.recorder_name,opened_at:at})}
  if(p.p_action==='issue')row.issues.push({id:p.p_request_id,note:d.note,opened_by:d.recorder_name,opened_at:at});
  if(p.p_action==='resolve'||p.p_action==='reopen'){const i=row.issues.find(i=>i.id===d.issue_id);i.resolved_at=p.p_action==='resolve'?at:null;i.resolution=d.note;i.resolved_by=d.recorder_name}
  if(p.p_action==='cancel'){const r=row.receipts.find(r=>r.id===d.receipt_id);r.cancelled_at=at;r.cancel_reason=d.note}
  row.revision++;row.history.push({action:p.p_action,at,name:d.recorder_name,detail:{note:d.note}});saved.add(p.p_request_id);
  if(new URL(location).searchParams.has('retry')&&!failed){failed=true;return {error:{message:'ทดสอบเครือข่ายขัดข้อง ลองบันทึกซ้ำ'}}}
  return {data:{}};
 }
 return {error:{message:'Unknown RPC'}};
}};`
const server=await createServer({server:{host:'127.0.0.1',port:4177,strictPort:true},plugins:[{name:'shirt-fixture',enforce:'pre',load(id){if(id.endsWith('/js/supabase.js'))return mock}}]})
await server.listen()
console.log('http://127.0.0.1:4177/pp5online/sports-shirt-monitor.html?retry')
