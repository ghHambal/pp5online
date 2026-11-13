import{getClassStudents as U}from"./api-BQaMiX9s.js";import{v as V,c as G}from"./quiz-api-CcBTN73s.js";import{_htmlEsc as g}from"./teacher-views-utils-DMDc0a8I.js";import"./supabase-BV-W2lsh.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";import"./ui-C-ZO4RB5.js";const k=[{min:80,label:"80-100%",color:"#10b981"},{min:60,label:"60-79%",color:"#34d399"},{min:40,label:"40-59%",color:"#fbbf24"},{min:20,label:"20-39%",color:"#fb923c"},{min:0,label:"0-19%",color:"#ef4444"}];async function lt(u){var L;(L=document.getElementById("quiz-analytics-modal"))==null||L.remove();const p=document.createElement("div");p.id="quiz-analytics-modal",p.className="fixed inset-0 z-[95] flex flex-col bg-gray-50",p.innerHTML=`
    <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="qa-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800 truncate">📊 สถิติ: ${g(u.title)}</h2>
      </div>
      <button id="qa-export" class="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold flex-shrink-0">⬇️ Export CSV</button>
    </div>
    <div class="flex-1 overflow-y-auto p-4" id="qa-body">
      <div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>
    </div>
  `,document.body.appendChild(p),p.querySelector("#qa-close").addEventListener("click",()=>p.remove());const[{attempts:d,violations:R},S,z]=await Promise.all([V(u.id),G(u.bank_id),U(u.class_id).catch(()=>[])]),v=Object.fromEntries(z.map(t=>[t.id,t])),h=Object.fromEntries(S.map(t=>[t.id,t])),f=d.map(t=>t.score_pct).filter(t=>t!=null),I=f.length?f.reduce((t,e)=>t+e,0)/f.length:null,E=k.map(t=>({...t,count:f.filter(e=>{var o;return e>=t.min&&(((o=k[k.indexOf(t)-1])==null?void 0:o.min)??101)>e}).length})),F=Math.max(1,...E.map(t=>t.count)),b={};d.forEach(t=>{t.score_pct!=null&&(b[t.student_id]==null||t.score_pct>b[t.student_id])&&(b[t.student_id]=t.score_pct)});const H=Object.entries(b).map(([t,e])=>({student:v[t],pct:e})).sort((t,e)=>e.pct-t.pct);let q=null,j=0;const C=H.map((t,e)=>(t.pct!==q&&(j=e+1,q=t.pct),{...t,rank:j})),O={1:"🥇",2:"🥈",3:"🥉"},A=d.map(t=>Array.isArray(t.question_order)?new Set(t.question_order):new Set),M=S.map(t=>{let e=0,o=0;const l=new Array(t.choices.length).fill(0);d.forEach((i,c)=>{var N;if(!A[c].has(t.id))return;e++;const a=(N=i.answers)==null?void 0:N[t.id];a===t.correct_choice_index&&o++,Number.isInteger(a)&&a>=0&&a<l.length&&l[a]++});const s=e>0?Math.round(o/e*100):null,n=s==null?null:s<30?"hard":s>90?"easy":null;return{question:t,attempted:e,correct:o,pctCorrect:s,choiceCounts:l,flag:n}}),$=new Map;d.forEach(t=>{const e=$.get(t.student_id);(!e||t.attempt_number>e.attempt_number)&&$.set(t.student_id,t)});const T=new Map(d.map((t,e)=>[t.id,e])),r=[...$.values()].map(t=>{const e=T.get(t.id),o=[...A[e]??[]].filter(s=>h[s]),l=o.filter(s=>{var n;return((n=t.answers)==null?void 0:n[s])===h[s].correct_choice_index}).length;return{attempt:t,itemIds:o,pct:o.length?l/o.length:0}}).filter(t=>t.itemIds.length),w=[...r].sort((t,e)=>e.pct-t.pct),B=Math.max(1,Math.ceil(w.length*.27)),K=new Set(w.slice(0,B).map(t=>t.attempt.id)),P=new Set(w.slice(-B).map(t=>t.attempt.id));M.forEach(t=>{const e=r.filter(n=>n.itemIds.includes(t.question.id)),o=n=>{const i=e.filter(c=>n.has(c.attempt.id));return i.length?i.filter(c=>{var a;return((a=c.attempt.answers)==null?void 0:a[t.question.id])===t.question.correct_choice_index}).length/i.length:null},l=r.length>=4?o(K):null,s=r.length>=4?o(P):null;t.discrimination=l==null||s==null?null:l-s,t.discriminationN=e.length});const Q=t=>[...t.itemIds].sort().join("|"),m=r.length>=2&&r.every(t=>Q(t)===Q(r[0]))?r[0].itemIds:[];let y=null;if(m.length>=2&&r.length>=2){const t=r.map(s=>m.filter(n=>{var i;return((i=s.attempt.answers)==null?void 0:i[n])===h[n].correct_choice_index}).length),e=t.reduce((s,n)=>s+n,0)/t.length,o=t.reduce((s,n)=>s+(n-e)**2,0)/(t.length-1),l=m.reduce((s,n)=>{const i=r.filter(c=>{var a;return((a=c.attempt.answers)==null?void 0:a[n])===h[n].correct_choice_index}).length/r.length;return s+i*(1-i)},0);o>0&&(y=m.length/(m.length-1)*(1-l/o))}const x={};R.forEach(t=>{var e;(x[e=t.attempt_id]??(x[e]=[])).push(t)});const _=d.filter(t=>(x[t.id]??[]).length>0).map(t=>({student:v[t.student_id],count:x[t.id].length,events:x[t.id]})),D=document.getElementById("qa-body");D&&(D.innerHTML=`
    <div class="max-w-3xl mx-auto space-y-5">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${d.length}</p>
          <p class="text-xs text-gray-400 mt-0.5">จำนวนครั้งที่ทำเสร็จ</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${I!=null?I.toFixed(1)+"%":"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5">คะแนนเฉลี่ย</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${_.length}</p>
          <p class="text-xs text-gray-400 mt-0.5">คนที่ถูกล็อก/ออกนอกหน้าสอบ</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">การกระจายคะแนน</h3>
        <div class="space-y-1.5">
          ${E.map(t=>`
            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-500 w-16 flex-shrink-0">${t.label}</span>
              <div class="flex-1 bg-gray-50 rounded-full h-4 overflow-hidden">
                <div class="h-full rounded-full" style="width:${t.count/F*100}%;background:${t.color}"></div>
              </div>
              <span class="text-xs font-bold text-gray-600 w-6 text-right flex-shrink-0">${t.count}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm p-4">
        <h3 class="font-bold text-indigo-900 text-sm mb-2">📐 คุณภาพข้อสอบ</h3>
        <p class="text-sm text-indigo-900">ความเที่ยง KR-20: <strong>${y==null?"ยังคำนวณไม่ได้":y.toFixed(2)}</strong></p>
        <p class="text-[11px] text-indigo-700 mt-1">${y==null?"ต้องมีผู้เข้าสอบที่ทำข้อสอบชุดเดียวกันอย่างน้อย 2 คน และมีอย่างน้อย 2 ข้อ หากสุ่มคนละชุดระบบจะไม่แสดงค่าเพื่อป้องกันการตีความคลาดเคลื่อน":`คำนวณจากผู้เรียน ${r.length} คน (ใช้รอบล่าสุดต่อคน) ที่ทำชุดเดียวกัน ${m.length} ข้อ; ควรตีความร่วมกับจำนวนผู้เข้าสอบและบริบทของข้อสอบ`}</p>
        <p class="text-[11px] text-indigo-700 mt-1">D = อัตราตอบถูกของกลุ่มคะแนนสูง 27% ลบกลุ่มคะแนนต่ำ 27%; ค่าใกล้ศูนย์หรือติดลบควรกลับไปทบทวนข้อและเฉลย ${r.length<4?"ต้องมีผู้สอบอย่างน้อย 4 คนจึงจะแสดงค่า D":""}</p>
      </div>

      ${C.length>0?`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">🏆 อันดับคะแนน</h3>
        <div class="space-y-1.5">
          ${C.map(t=>{var e;return`
            <div class="flex items-center gap-3 py-1.5 ${t.rank<=3?"bg-amber-50/50 -mx-2 px-2 rounded-lg":""}">
              <span class="w-7 text-center text-sm font-bold ${t.rank<=3?"":"text-gray-400"} flex-shrink-0">${O[t.rank]??t.rank}</span>
              <span class="text-sm text-gray-700 flex-1 truncate">${g(((e=t.student)==null?void 0:e.full_name)??"ไม่ทราบชื่อ")}</span>
              <span class="text-sm font-bold text-gray-800 flex-shrink-0">${t.pct.toFixed(1)}%</span>
            </div>
          `}).join("")}
        </div>
      </div>`:""}

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">วิเคราะห์รายข้อ</h3>
        <div class="space-y-3">
          ${M.map((t,e)=>`
            <div class="border border-gray-100 rounded-xl p-3">
              <div class="flex items-start justify-between gap-2 mb-1">
                <p class="text-sm font-semibold text-gray-800 flex-1">ข้อ ${e+1}: ${g(t.question.question_text)}</p>
                ${t.flag==="hard"?'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 flex-shrink-0">⚠️ ยากผิดปกติ</span>':""}
                ${t.flag==="easy"?'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 flex-shrink-0">⚠️ ง่ายเกินไป</span>':""}
              </div>
              <p class="text-xs text-gray-400 mb-2">${t.pctCorrect!=null?`ตอบถูก ${t.pctCorrect}% (${t.correct}/${t.attempted})`:"ยังไม่มีใครตอบ"} · อำนาจจำแนก D: ${t.discrimination==null?"—":`${t.discrimination>=0?"+":""}${t.discrimination.toFixed(2)}`} (${t.discriminationN} คน)</p>
              ${t.attempted>0?`<div class="space-y-1">
                ${t.question.choices.map((o,l)=>{const s=Math.round((t.choiceCounts[l]??0)/t.attempted*100),n=l===t.question.correct_choice_index;return`<div class="flex items-center gap-2">
                    <span class="text-xs w-4 flex-shrink-0">${n?"✓":"○"}</span>
                    <span class="text-xs text-gray-600 flex-1 truncate">${g(o)}</span>
                    <div class="w-20 bg-gray-50 rounded-full h-2 overflow-hidden flex-shrink-0">
                      <div class="h-full rounded-full ${n?"bg-emerald-500":"bg-gray-300"}" style="width:${s}%"></div>
                    </div>
                    <span class="text-xs text-gray-400 w-8 text-right flex-shrink-0">${s}%</span>
                  </div>`}).join("")}
              </div>`:""}
            </div>
          `).join("")}
        </div>
      </div>

      ${_.length>0?`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">บันทึกการออกนอกหน้าสอบ</h3>
        <div class="space-y-2">
          ${_.map(t=>{var e;return`
            <div class="flex items-center justify-between gap-2 text-xs">
              <span class="text-gray-700 font-medium">${g(((e=t.student)==null?void 0:e.full_name)??"ไม่ทราบชื่อ")}</span>
              <span class="text-red-500 font-bold">${t.count} ครั้ง</span>
            </div>
          `}).join("")}
        </div>
      </div>`:""}
    </div>
  `,document.getElementById("qa-export").addEventListener("click",()=>{const t=[["รหัสนักเรียน","ชื่อ-สกุล","สถานะ","คะแนน(%)","จำนวนครั้งออกนอกหน้าสอบ"]];d.forEach(s=>{const n=v[s.student_id];t.push([(n==null?void 0:n.student_code)??"",(n==null?void 0:n.full_name)??"",s.status,s.score_pct??"",s.violation_count??0])});const e=t.map(s=>s.map(n=>`"${String(n).replace(/"/g,'""')}"`).join(",")).join(`
`),o=encodeURI("data:text/csv;charset=utf-8,"+e),l=document.createElement("a");l.href=o,l.download=`quiz_${u.title}_analytics.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l)}))}export{lt as openQuizAnalytics};
