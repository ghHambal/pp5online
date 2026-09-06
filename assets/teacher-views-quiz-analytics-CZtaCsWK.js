import{getClassStudents as H}from"./api-1xsyVspL.js";import{q as O,g as Q}from"./quiz-api-DaBneRGn.js";import{_htmlEsc as x}from"./teacher-views-utils-B2Iz3UWp.js";import"./supabase-BV-W2lsh.js";import"./ui-Dh03k4iX.js";const f=[{min:80,label:"80-100%",color:"#10b981"},{min:60,label:"60-79%",color:"#34d399"},{min:40,label:"40-59%",color:"#fbbf24"},{min:20,label:"20-39%",color:"#fb923c"},{min:0,label:"0-19%",color:"#ef4444"}];async function N(i){var k;(k=document.getElementById("quiz-analytics-modal"))==null||k.remove();const d=document.createElement("div");d.id="quiz-analytics-modal",d.className="fixed inset-0 z-[95] flex flex-col bg-gray-50",d.innerHTML=`
    <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="qa-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800 truncate">📊 สถิติ: ${x(i.title)}</h2>
      </div>
      <button id="qa-export" class="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold flex-shrink-0">⬇️ Export CSV</button>
    </div>
    <div class="flex-1 overflow-y-auto p-4" id="qa-body">
      <div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>
    </div>
  `,document.body.appendChild(d),d.querySelector("#qa-close").addEventListener("click",()=>d.remove());const[{attempts:r,violations:j},b,S]=await Promise.all([O(i.id),Q(i.bank_id),H(i.class_id).catch(()=>[])]),m=Object.fromEntries(S.map(t=>[t.id,t]));Object.fromEntries(b.map(t=>[t.id,t]));const p=r.map(t=>t.score_pct).filter(t=>t!=null),h=p.length?p.reduce((t,e)=>t+e,0)/p.length:null,y=f.map(t=>({...t,count:p.filter(e=>{var l;return e>=t.min&&(((l=f[f.indexOf(t)-1])==null?void 0:l.min)??101)>e}).length})),C=Math.max(1,...y.map(t=>t.count)),u={};r.forEach(t=>{t.score_pct!=null&&(u[t.student_id]==null||t.score_pct>u[t.student_id])&&(u[t.student_id]=t.score_pct)});const q=Object.entries(u).map(([t,e])=>({student:m[t],pct:e})).sort((t,e)=>e.pct-t.pct);let v=null,$=0;const w=q.map((t,e)=>(t.pct!==v&&($=e+1,v=t.pct),{...t,rank:$})),A={1:"🥇",2:"🥈",3:"🥉"},B=r.map(t=>Array.isArray(t.question_order)?new Set(t.question_order):new Set),I=b.map(t=>{let e=0,l=0;const a=new Array(t.choices.length).fill(0);r.forEach((M,L)=>{var E;if(!B[L].has(t.id))return;const c=(E=M.answers)==null?void 0:E[t.id];c!=null&&(e++,c===t.correct_choice_index&&l++,c>=0&&c<a.length&&a[c]++)});const s=e>0?Math.round(l/e*100):null,n=s==null?null:s<30?"hard":s>90?"easy":null;return{question:t,attempted:e,correct:l,pctCorrect:s,choiceCounts:a,flag:n}}),o={};j.forEach(t=>{var e;(o[e=t.attempt_id]??(o[e]=[])).push(t)});const g=r.filter(t=>(o[t.id]??[]).length>0).map(t=>({student:m[t.student_id],count:o[t.id].length,events:o[t.id]})),_=document.getElementById("qa-body");_&&(_.innerHTML=`
    <div class="max-w-3xl mx-auto space-y-5">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${r.length}</p>
          <p class="text-xs text-gray-400 mt-0.5">จำนวนครั้งที่ทำเสร็จ</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${h!=null?h.toFixed(1)+"%":"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5">คะแนนเฉลี่ย</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${g.length}</p>
          <p class="text-xs text-gray-400 mt-0.5">คนที่ถูกล็อก/ออกนอกหน้าสอบ</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">การกระจายคะแนน</h3>
        <div class="space-y-1.5">
          ${y.map(t=>`
            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-500 w-16 flex-shrink-0">${t.label}</span>
              <div class="flex-1 bg-gray-50 rounded-full h-4 overflow-hidden">
                <div class="h-full rounded-full" style="width:${t.count/C*100}%;background:${t.color}"></div>
              </div>
              <span class="text-xs font-bold text-gray-600 w-6 text-right flex-shrink-0">${t.count}</span>
            </div>
          `).join("")}
        </div>
      </div>

      ${w.length>0?`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">🏆 อันดับคะแนน</h3>
        <div class="space-y-1.5">
          ${w.map(t=>{var e;return`
            <div class="flex items-center gap-3 py-1.5 ${t.rank<=3?"bg-amber-50/50 -mx-2 px-2 rounded-lg":""}">
              <span class="w-7 text-center text-sm font-bold ${t.rank<=3?"":"text-gray-400"} flex-shrink-0">${A[t.rank]??t.rank}</span>
              <span class="text-sm text-gray-700 flex-1 truncate">${x(((e=t.student)==null?void 0:e.full_name)??"ไม่ทราบชื่อ")}</span>
              <span class="text-sm font-bold text-gray-800 flex-shrink-0">${t.pct.toFixed(1)}%</span>
            </div>
          `}).join("")}
        </div>
      </div>`:""}

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">วิเคราะห์รายข้อ</h3>
        <div class="space-y-3">
          ${I.map((t,e)=>`
            <div class="border border-gray-100 rounded-xl p-3">
              <div class="flex items-start justify-between gap-2 mb-1">
                <p class="text-sm font-semibold text-gray-800 flex-1">ข้อ ${e+1}: ${x(t.question.question_text)}</p>
                ${t.flag==="hard"?'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 flex-shrink-0">⚠️ ยากผิดปกติ</span>':""}
                ${t.flag==="easy"?'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 flex-shrink-0">⚠️ ง่ายเกินไป</span>':""}
              </div>
              <p class="text-xs text-gray-400 mb-2">${t.pctCorrect!=null?`ตอบถูก ${t.pctCorrect}% (${t.correct}/${t.attempted})`:"ยังไม่มีใครตอบ"}</p>
              ${t.attempted>0?`<div class="space-y-1">
                ${t.question.choices.map((l,a)=>{const s=Math.round((t.choiceCounts[a]??0)/t.attempted*100),n=a===t.question.correct_choice_index;return`<div class="flex items-center gap-2">
                    <span class="text-xs w-4 flex-shrink-0">${n?"✓":"○"}</span>
                    <span class="text-xs text-gray-600 flex-1 truncate">${x(l)}</span>
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

      ${g.length>0?`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 class="font-bold text-gray-700 text-sm mb-3">บันทึกการออกนอกหน้าสอบ</h3>
        <div class="space-y-2">
          ${g.map(t=>{var e;return`
            <div class="flex items-center justify-between gap-2 text-xs">
              <span class="text-gray-700 font-medium">${x(((e=t.student)==null?void 0:e.full_name)??"ไม่ทราบชื่อ")}</span>
              <span class="text-red-500 font-bold">${t.count} ครั้ง</span>
            </div>
          `}).join("")}
        </div>
      </div>`:""}
    </div>
  `,document.getElementById("qa-export").addEventListener("click",()=>{const t=[["รหัสนักเรียน","ชื่อ-สกุล","สถานะ","คะแนน(%)","จำนวนครั้งออกนอกหน้าสอบ"]];r.forEach(s=>{const n=m[s.student_id];t.push([(n==null?void 0:n.student_code)??"",(n==null?void 0:n.full_name)??"",s.status,s.score_pct??"",s.violation_count??0])});const e=t.map(s=>s.map(n=>`"${String(n).replace(/"/g,'""')}"`).join(",")).join(`
`),l=encodeURI("data:text/csv;charset=utf-8,"+e),a=document.createElement("a");a.href=l,a.download=`quiz_${i.title}_analytics.csv`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}))}export{N as openQuizAnalytics};
