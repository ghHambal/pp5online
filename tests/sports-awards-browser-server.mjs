// Local UI fixture only. Replaces Supabase at module-load time; no production network calls.
// node tests/sports-awards-browser-server.mjs
import { createServer } from 'vite'
const mock = `
const mode = new URL(location.href).searchParams.get('fixture') || 'guest';
const account = mode === 'teacher' || mode === 'admin';
let row = {id:'sport-1',name:'วิ่ง 100 เมตร',gender:'M',level:'ม.ต้น',ready:true,fingerprint:'v1',revision:0,delivered_at:null,recorder:null,changed:false,photos:[],history:[],result:[{medal:'gold',color_id:'red',color:'แดง',recipients:[{name:'นักเรียนทดสอบ ก',room:'ม.1/1'}]},{medal:'silver',color:'ฟ้า',recipients:[{name:'นักเรียนทดสอบ ข',room:'ม.1/2'}]},{medal:'bronze',color:'เหลือง',recipients:[{name:'นักเรียนทดสอบ ค',room:'ม.1/3'}]}]};
let staff = [{profile_id:'teacher-1',name:'ครูทดสอบ',assigned:false}];
let photoAttempts = 0;
export const supabase = {
 rpc: async (fn,p={}) => {
  if(fn==='sports_awards_access') return {data:{event_id:'event-1',allowed:account,admin:mode==='admin'}};
  if(fn==='sports_awards_staff') {if(p.p_profile) staff[0].assigned=p.p_enabled; return {data:structuredClone(staff)}};
  if(!account && p.p_password!=='awards-test-only') return {error:{message:'ไม่มีสิทธิ์หรือรหัสผ่านไม่ถูกต้อง'}};
  if(fn==='sports_awards_list') return {data:{account,admin:mode==='admin',colors:[{id:'red',name:'แดง',logo_url:location.origin+'/awards-test-logo.svg'}],rows:[structuredClone(row)]}};
  if(fn==='sports_awards_save') {row.delivered_at=p.p_delivered?new Date().toISOString():null;row.recorder=account?'ครูทดสอบ':p.p_name;row.revision++;row.history.push({at:new Date().toISOString(),name:row.recorder,action:p.p_delivered?'มอบแล้ว':'ย้อนเป็นยังไม่ได้มอบ',reason:p.p_reason});return {data:null}};
  if(fn==='sports_awards_photo') {
   if(!p.p_path) return {data:'awards/test.jpg'};
   if(mode==='retry' && photoAttempts++===0) return {error:{message:'ทดสอบเครือข่ายขัดข้อง กดอัปโหลดซ้ำเพื่อลองใหม่'}};
   if(!row.photos.length)row.photos.push({id:'photo-1',url:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180"><rect width="300" height="180" fill="orange"/></svg>'});
   return {data:'photo-1'};
  }
  return {error:{message:'Unknown mock RPC '+fn}};
 },
 storage:{from:()=>({upload:async()=>({data:{path:'awards/test.jpg'}})})}
};`
const server = await createServer({server:{host:'127.0.0.1',port:4176,strictPort:true},plugins:[{name:'awards-test-fixture',enforce:'pre',configureServer(server){server.middlewares.use((req,res,next)=>{if(req.url==='/awards-test-logo.svg'){res.setHeader('Content-Type','image/svg+xml');res.end('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="30" fill="#b91c1c"/><text x="32" y="41" text-anchor="middle" font-size="28" fill="white">R</text></svg>')}else next()})},load(id){if(id.endsWith('/js/supabase.js'))return mock}}]})
await server.listen()
console.log('Fixture: http://127.0.0.1:4176/pp5online/sports-awards.html?fixture=guest (teacher/admin/retry also available)')
