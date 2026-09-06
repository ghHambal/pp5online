import{s as r}from"./supabase-BV-W2lsh.js";function o(e){const a=e.trim().split(`
`),c=a[0].split(",").map(n=>n.trim().replace(/^"|"$/g,""));return a.slice(1).map(n=>{const l=n.match(new RegExp('(".*?"|[^,]+|(?<=,)(?=,)|^(?=,)|(?<=,)$)',"g"))??[],t={};return c.forEach((s,i)=>{t[s]=(l[i]??"").replace(/^"|"$/g,"").trim()}),t}).filter(n=>Object.values(n).some(l=>l!==""))}function u(e){return{teacher_code:e.teacher_code||e.รหัสครู||null,full_name:e.teacher_name||e.full_name||e["ชื่อ-สกุล"]||"",phone:e.phone||e.เบอร์โทร||null,category:e.category||e.ประเภท||null}}function d(e){return{student_code:String(e.student_id||e.student_code||e.รหัสนักเรียน||""),full_name:e.student_name||e.full_name||e["ชื่อ-สกุล"]||"",main_room:e.grade_general||e.main_room||e.ห้องสามัญ||e.ห้อง||null,religion_room:e.grade_religion||e.religion_room||e.ห้องศาสนา||null,gender:e.gender||e.เพศ||null,image_url:e.photo_url||e.image_url||null,house_color:e.house_color||e.สี||e.ประจำสี||e.สีกีฬา||null,sports_shirt_size:e.sports_shirt_size||e.shirt_size||e.ไซด์เสื้อกีฬาสี||e.ไซซ์เสื้อกีฬาสี||null}}async function m(e,a){const c=e.map(u).filter(t=>t.full_name),n=50;let l=0;for(let t=0;t<c.length;t+=n){const s=c.slice(t,t+n),{error:i}=await r.from("teachers").upsert(s,{onConflict:"teacher_code",ignoreDuplicates:!1});if(i)throw i;l+=s.length,a==null||a(l,c.length)}return l}async function h(e,a){const c=e.map(d).filter(t=>t.student_code&&t.full_name),n=100;let l=0;for(let t=0;t<c.length;t+=n){const s=c.slice(t,t+n),{error:i}=await r.from("students").upsert(s,{onConflict:"student_code",ignoreDuplicates:!1});if(i)throw i;l+=s.length,a==null||a(l,c.length)}return l}function _(e,a){if(!e.length)return'<p class="text-center text-gray-400 py-8">ไม่พบข้อมูล</p>';const c=a==="teachers"?e.map(u):e.map(d),n=Object.keys(c[0]),l=c.slice(0,10);return`
    <div class="overflow-x-auto rounded-xl border border-gray-100">
      <table class="w-full text-xs">
        <thead class="bg-gray-50 text-gray-500 uppercase tracking-wide">
          <tr>${n.map(t=>`<th class="px-4 py-2 text-left">${t}</th>`).join("")}</tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${l.map(t=>`
            <tr class="hover:bg-gray-50">
              ${n.map(s=>`<td class="px-4 py-2 text-gray-700">${t[s]??"—"}</td>`).join("")}
            </tr>`).join("")}
        </tbody>
      </table>
      ${e.length>10?`<p class="text-center text-xs text-gray-400 py-2">แสดง 10 จาก ${e.length} แถว</p>`:""}
    </div>`}export{h as a,_ as b,m as i,o as p};
