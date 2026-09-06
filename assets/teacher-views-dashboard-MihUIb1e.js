import{getMyClasses as X,getClassAttendanceSummary as Y,getClassStudents as K,getClassScoreSummary as Z}from"./api-1xsyVspL.js";import"./supabase-BV-W2lsh.js";const g=s=>String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),J=[{label:"4",min:80,color:"#10b981"},{label:"3.5",min:75,color:"#34d399"},{label:"3",min:70,color:"#6ee7b7"},{label:"2.5",min:65,color:"#fbbf24"},{label:"2",min:60,color:"#fb923c"},{label:"1.5",min:55,color:"#f87171"},{label:"1",min:50,color:"#ef4444"},{label:"0",min:0,color:"#dc2626"}],V=s=>{var r;return((r=J.find(d=>s>=d.min))==null?void 0:r.label)??"0"},Q={present:{label:"มาเรียน",bg:"bg-emerald-50",txt:"text-emerald-700",pill:"bg-emerald-100 text-emerald-700"},late:{label:"มาสาย",bg:"bg-amber-50",txt:"text-amber-700",pill:"bg-amber-100 text-amber-700"},sick:{label:"ลาป่วย",bg:"bg-indigo-50",txt:"text-indigo-700",pill:"bg-indigo-100 text-indigo-700"},excused:{label:"ลากิจ",bg:"bg-violet-50",txt:"text-violet-700",pill:"bg-violet-100 text-violet-700"},absent:{label:"ขาดเรียน",bg:"bg-red-50",txt:"text-red-600",pill:"bg-red-100 text-red-700"}};function W(s,r="w-9",d="h-12",a="rounded-xl"){const p=g(((s==null?void 0:s.full_name)??"?").charAt(0));return s!=null&&s.image_url?`<img src="${g(s.image_url)}" class="${r} ${d} ${a} object-cover flex-shrink-0 shadow-sm" />`:`<div class="${r} ${d} ${a} flex-shrink-0 bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 shadow-sm">${p}</div>`}function tt(s){return new Date(s).toLocaleDateString("th-TH",{weekday:"short",day:"numeric",month:"short",year:"2-digit"})}function et(s){var r;return((r=String((s==null?void 0:s.donationSpecialFeatures)??"").split(`
`).map(d=>{const a=d.split("|");return{text:a[1]??"",minTier:parseInt(a[2])||1}}).find(d=>d.text.includes("Dashboard")))==null?void 0:r.minTier)??2}function U(s,r,d,a){var q;const p=(r??[]).filter(c=>c.student_id===s.id).sort((c,h)=>h.check_date.localeCompare(c.check_date));(q=document.getElementById("std-detail-modal"))==null||q.remove();const x=document.createElement("div");x.id="std-detail-modal",x.className="fixed inset-0 z-[95] flex flex-col bg-gray-50",x.innerHTML=`
    <div class="flex items-center gap-4 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="std-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none flex-shrink-0">←</button>
      ${W(s,"w-12","h-16","rounded-2xl")}
      <div class="min-w-0 flex-1">
        <h2 class="font-bold text-gray-800 truncate text-base">${g(s.full_name??"—")}</h2>
        <p class="text-xs text-gray-400 mt-0.5">เลขที่ ${s.seat??"—"} · รหัส ${g(s.student_code??"—")}</p>
        <p class="text-xs text-gray-400">ห้อง ${g(s.main_room??a??"—")}</p>
      </div>
    </div>
    <div class="flex bg-white border-b border-gray-200 flex-shrink-0">
      <button class="std-tab flex-1 py-3 text-sm font-semibold transition border-b-2" data-tab="att">✅ การเข้าเรียน</button>
      <button class="std-tab flex-1 py-3 text-sm font-semibold transition border-b-2" data-tab="scores">📝 คะแนนรายหัวข้อ</button>
    </div>
    <div id="std-body" class="flex-1 overflow-y-auto"></div>`,document.body.appendChild(x),x.querySelector("#std-close").addEventListener("click",()=>x.remove());const u=x.querySelector("#std-body"),_=[...x.querySelectorAll(".std-tab")],b=c=>{_.forEach(h=>{const w=h.dataset.tab===c;h.className=`std-tab flex-1 py-3 text-sm font-semibold transition border-b-2 ${w?"border-emerald-500 text-emerald-700":"border-transparent text-gray-400 hover:text-gray-600"}`}),c==="att"?o():C()};_.forEach(c=>c.addEventListener("click",()=>b(c.dataset.tab)));function o(){if(!p.length){u.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีข้อมูลการเข้าเรียน</div>';return}const c={present:0,late:0,sick:0,excused:0,absent:0};p.forEach($=>{$.status in c&&c[$.status]++});const h=p.length,w=c.present+c.late,f=h?Math.round(w/h*100):0,L=f>=80?"#10b981":f>=60?"#f59e0b":"#ef4444";u.innerHTML=`
      <div class="p-4 space-y-4 max-w-2xl mx-auto pb-8">
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div class="flex items-end gap-3 mb-3">
            <span class="text-4xl font-extrabold" style="color:${L}">${f}%</span>
            <span class="text-sm text-gray-400 pb-1">เข้าเรียน จาก ${h} ครั้ง</span>
          </div>
          <div class="h-2.5 rounded-full bg-gray-100 overflow-hidden mb-3">
            <div class="h-full rounded-full" style="width:${f}%;background:${L}"></div>
          </div>
          <div class="grid grid-cols-5 gap-1.5 text-center">
            ${Object.entries(Q).map(([$,m])=>`
            <div class="rounded-xl p-2 ${m.bg}">
              <p class="text-lg font-extrabold ${m.txt}">${c[$]??0}</p>
              <p class="text-[10px] ${m.txt} leading-tight mt-0.5">${m.label}</p>
            </div>`).join("")}
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <p class="text-[11px] text-gray-400 px-4 pt-4 pb-2 font-semibold uppercase tracking-widest">ประวัติรายครั้ง</p>
          <div class="divide-y divide-gray-50">
            ${p.map($=>{const m=Q[$.status]??{label:$.status,pill:"bg-gray-100 text-gray-600"};return`<div class="flex items-center justify-between px-4 py-3">
                <span class="text-sm text-gray-700">${tt($.check_date)}</span>
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${m.pill}">${m.label}</span>
              </div>`}).join("")}
          </div>
        </div>
      </div>`}function C(){const c=(d==null?void 0:d.columns)??[],h=(d==null?void 0:d.scores)??[];if(!c.length){u.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีข้อมูลคะแนน</div>';return}const w=c.reduce((n,T)=>n+(T.max_score??0),0),f=Object.fromEntries(h.filter(n=>n.student_id===s.id).map(n=>[n.assignment_id,n.final_score??0]));let L=0;const $=c.map(n=>{const T=f[n.id]??0;L+=T;const I=n.max_score?Math.min(100,Math.round(T/n.max_score*100)):0,P=I>=80?"#10b981":I>=50?"#f59e0b":"#ef4444",F={ระหว่างเรียน:"bg-sky-50 text-sky-700",กลางภาค:"bg-violet-50 text-violet-700",ปลายภาค:"bg-amber-50 text-amber-700",midterm:"bg-violet-50 text-violet-700",final:"bg-amber-50 text-amber-700"}[n.assignment_type]??"bg-gray-100 text-gray-500";return{col:n,got:T,pct:I,barColor:P,typeCls:F}}),m=w?Math.min(100,Math.round(L/w*100)):0,G=m>=80?"#10b981":m>=50?"#f59e0b":"#ef4444",A=V(m),y=J.find(n=>n.label===A),k=n=>n%1===0?n:Number(n.toFixed(1));u.innerHTML=`
      <div class="p-4 space-y-4 max-w-2xl mx-auto pb-8">
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-[11px] text-gray-400 mb-1 font-semibold uppercase tracking-widest">คะแนนรวม</p>
              <p class="text-4xl font-extrabold" style="color:${G}">${k(L)}<span class="text-lg text-gray-400 font-normal">/${w}</span></p>
              <p class="text-sm text-gray-400 mt-0.5">${m}%</p>
            </div>
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                 style="background:${(y==null?void 0:y.color)??"#dc2626"}22;border:2px solid ${(y==null?void 0:y.color)??"#dc2626"}">
              <span class="text-2xl font-extrabold" style="color:${(y==null?void 0:y.color)??"#dc2626"}">${A}</span>
            </div>
          </div>
          <div class="mt-3 h-2.5 rounded-full bg-gray-100 overflow-hidden">
            <div class="h-full rounded-full" style="width:${m}%;background:${G}"></div>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <p class="text-[11px] text-gray-400 px-4 pt-4 pb-2 font-semibold uppercase tracking-widest">รายละเอียดคะแนน</p>
          <div class="divide-y divide-gray-50">
            ${$.map(({col:n,got:T,pct:I,barColor:P,typeCls:F})=>`
            <div class="px-4 py-3">
              <div class="flex items-center justify-between mb-1.5 gap-2">
                <div class="flex items-center gap-2 min-w-0">
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${F}">${n.assignment_type??""}</span>
                  <span class="text-sm text-gray-700 truncate">${g(n.assignment_name)}</span>
                </div>
                <span class="text-sm font-bold text-gray-700 flex-shrink-0">${k(T)}/${n.max_score??"?"}</span>
              </div>
              <div class="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div class="h-full rounded-full" style="width:${I}%;background:${P}"></div>
              </div>
            </div>`).join("")}
          </div>
        </div>
      </div>`}b("att")}async function lt(s,r=0,d={}){var p,x;(p=document.getElementById("dash-picker-modal"))==null||p.remove();const a=document.createElement("div");a.id="dash-picker-modal",a.className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4",a.innerHTML=`
    <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl shadow-2xl flex flex-col max-h-[80vh]">
      <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="dp-close" class="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        <h3 class="font-bold text-gray-800">📈 เลือกห้องเรียน</h3>
      </div>
      <div id="dp-list" class="overflow-y-auto flex-1 p-3">
        <p class="text-center text-gray-400 text-sm py-8">กำลังโหลด...</p>
      </div>
    </div>`,document.body.appendChild(a),a.querySelector("#dp-close").addEventListener("click",()=>a.remove()),a.addEventListener("click",u=>{u.target===a&&a.remove()});try{const u=(x=window._classesFlat)!=null&&x.length?window._classesFlat:await X(s==null?void 0:s.id),_=a.querySelector("#dp-list");if(!u.length){_.innerHTML='<p class="text-center text-gray-400 text-sm py-8">ยังไม่มีห้องเรียน</p>';return}_.innerHTML=u.map(b=>{const o=b.master_subjects??{};return`<button class="dp-item w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition" data-id="${b.id}">
        <div class="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-lg flex-shrink-0">🏫</div>
        <div class="min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${g(o.subject_name??"—")}</p>
          <p class="text-xs text-gray-400">ห้อง ${g(b.class_name??"—")} · ${g(o.subject_code??"—")}</p>
        </div>
      </button>`}).join(""),_.querySelectorAll(".dp-item").forEach(b=>{b.addEventListener("click",()=>{const o=u.find(C=>C.id===parseInt(b.dataset.id));a.remove(),o&&st(o.id,o,r,d)})})}catch{a.querySelector("#dp-list").innerHTML='<p class="text-center text-rose-400 text-sm py-8">โหลดห้องเรียนไม่สำเร็จ</p>'}}async function st(s,r,d=0,a={}){var P,F;const p=et(a);(P=document.getElementById("class-dashboard-modal"))==null||P.remove();const x=(r==null?void 0:r.master_subjects)??{},u=x.subject_name??"—",_=x.subject_code??"—",b=(r==null?void 0:r.class_name)??"—",o=document.createElement("div");o.id="class-dashboard-modal",o.className="fixed inset-0 z-[90] flex flex-col bg-gray-50";const C=a.freeDashboardLimit;let q=0;if(C!==void 0&&C!==""){const i=parseInt(C,10);Number.isFinite(i)&&(q=i)}const c=((F=r==null?void 0:r.master_subjects)==null?void 0:F.teacher_id)||0;let h=!1,w=null;if(d<p&&q>0&&c&&(w=at(c,q),w.allowed&&(h=!0,rt(c,w.weekMonday))),d<p&&!h){o.innerHTML=`
      <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
        <button id="dash-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 truncate">📈 Dashboard: ${g(u)}</h2>
          <p class="text-xs text-gray-400">ห้อง ${g(b)}</p>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center p-8 text-center gap-4">
        <div class="text-6xl">🔒</div>
        <p class="font-bold text-gray-700 text-lg">ฟีเจอร์สำหรับผู้สนับสนุนระดับ ${p}+</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs">Dashboard วิเคราะห์ภาพรวมห้องเรียน<br>เปิดให้ใช้งานเมื่อสนับสนุนโครงการถึงระดับที่กำหนด</p>
        <button id="dash-upgrade" class="mt-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg"
          style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดระดับ</button>
      </div>`,document.body.appendChild(o),o.querySelector("#dash-close").addEventListener("click",()=>o.remove()),o.querySelector("#dash-upgrade").addEventListener("click",()=>{var i;o.remove(),(i=document.getElementById("btn-donate-float"))==null||i.click()});return}o.innerHTML=`
    <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="dash-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800 truncate">📈 ${g(u)}</h2>
        <p class="text-xs text-gray-400">ห้อง <strong class="text-gray-600">${g(b)}</strong> · ${g(_)}</p>
        ${w?`<span class="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 animate-pulse">✨ ทดลองใช้งานฟรีสัปดาห์นี้ (ครั้งที่ ${w.count+1}/${q})</span>`:""}
      </div>
    </div>
    <div class="flex bg-white border-b border-gray-200 flex-shrink-0">
      <button class="dash-tab flex-1 py-3 text-sm font-semibold transition border-b-2" data-tab="attendance">✅ การเข้าเรียน</button>
      <button class="dash-tab flex-1 py-3 text-sm font-semibold transition border-b-2" data-tab="grades">📝 ผลสัมฤทธิ์</button>
    </div>
    <div id="dash-body" class="flex-1 overflow-y-auto"></div>`,document.body.appendChild(o),o.querySelector("#dash-close").addEventListener("click",()=>o.remove());const f=o.querySelector("#dash-body"),L=[...o.querySelectorAll(".dash-tab")],$=i=>{L.forEach(D=>{const S=D.dataset.tab===i;D.className=`dash-tab flex-1 py-3 text-sm font-semibold transition border-b-2 ${S?"border-emerald-500 text-emerald-700":"border-transparent text-gray-400 hover:text-gray-600"}`}),i==="attendance"?T():I()};L.forEach(i=>i.addEventListener("click",()=>$(i.dataset.tab)));const m=()=>{f.innerHTML='<div class="flex justify-center py-16 text-gray-400 text-sm">กำลังโหลดข้อมูล...</div>'},G=()=>{f.innerHTML='<div class="flex justify-center py-16 text-rose-400 text-sm">โหลดข้อมูลไม่สำเร็จ กรุณาลองใหม่</div>'};let A=null,y=null,k=null;function n(){return Object.fromEntries((k??[]).map((i,D)=>[i.id,{...i,seat:D+1}]))}async function T(){m();try{if(!A||!k){const[e,t]=await Promise.all([Y(s),K(s).catch(()=>[])]);A=e,k=t}const i=A,D=n(),S=i.length,H={present:0,late:0,sick:0,excused:0,absent:0};i.forEach(e=>{e.status in H&&H[e.status]++});const M=S?Math.round((H.present+H.late)/S*100):0,N=M>=80?"#10b981":M>=60?"#f59e0b":"#ef4444",B=M>=80?"text-emerald-600":M>=60?"text-amber-500":"text-red-500",j={};i.forEach(e=>{e.status==="absent"&&(j[e.student_id]=(j[e.student_id]??0)+1)});const z=Object.entries(j).sort((e,t)=>t[1]-e[1]).slice(0,5).map(([e,t])=>({s:D[parseInt(e)],cnt:t,sid:parseInt(e)})),E={};i.forEach(e=>{const t=new Date(e.check_date),l=t.getDay(),O=new Date(t);O.setDate(t.getDate()-(l===0?6:l-1));const v=O.toISOString().slice(0,10);E[v]||(E[v]={t:0,a:0}),E[v].t++,(e.status==="present"||e.status==="late")&&E[v].a++});const R=Object.keys(E).sort().slice(-6);f.innerHTML=`
        <div class="p-4 space-y-4 max-w-2xl mx-auto pb-8">
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-2 font-semibold uppercase tracking-widest">ภาพรวมการเข้าเรียน</p>
            <div class="flex items-end gap-3">
              <span class="text-5xl font-extrabold ${B}">${M}%</span>
              <span class="text-sm text-gray-400 pb-1.5">จาก ${S.toLocaleString()} ครั้งที่บันทึก</span>
            </div>
            <div class="mt-3 h-3 rounded-full bg-gray-100 overflow-hidden">
              <div class="h-full rounded-full" style="width:${M}%;background:${N}"></div>
            </div>
          </div>
          <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
            ${Object.entries(Q).map(([e,t])=>`
            <div class="rounded-xl p-3 text-center ${t.bg}">
              <p class="text-xl font-extrabold ${t.txt}">${H[e].toLocaleString()}</p>
              <p class="text-[11px] ${t.txt} mt-0.5">${t.label}</p>
              <p class="text-[10px] text-gray-400 mt-0.5">${S?Math.round(H[e]/S*100):0}%</p>
            </div>`).join("")}
          </div>
          ${R.length?`
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-3 font-semibold uppercase tracking-widest">แนวโน้มรายสัปดาห์ (ล่าสุด ${R.length} สัปดาห์)</p>
            <div class="flex items-end gap-1.5 h-28">
              ${R.map(e=>{const t=E[e].t?Math.round(E[e].a/E[e].t*100):0,l=new Date(e);return`<div class="flex-1 flex flex-col items-center gap-1">
                  <span class="text-[9px] text-gray-400">${t}%</span>
                  <div class="w-full rounded-t-lg" style="height:${Math.max(4,Math.round(t*96/100))}px;background:${t>=80?"#10b981":t>=60?"#f59e0b":"#ef4444"}"></div>
                  <span class="text-[9px] text-gray-400">${l.getDate()}/${l.getMonth()+1}</span>
                </div>`}).join("")}
            </div>
          </div>`:""}
          ${z.length?`
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-3 font-semibold uppercase tracking-widest">⚠️ ขาดเรียนมากที่สุด (Top 5)</p>
            <div class="divide-y divide-gray-50" id="top5-list">
              ${z.map(({s:e,cnt:t,sid:l})=>`
              <div class="flex items-center justify-between py-2.5 -mx-1 px-2 rounded-xl cursor-pointer hover:bg-gray-50 transition std-row" data-sid="${l}">
                <div class="flex items-center gap-2.5">
                  ${W(e,"w-9","h-12","rounded-xl")}
                  <div>
                    <p class="text-sm text-gray-700 font-medium">${g((e==null?void 0:e.full_name)??`รหัส ${(e==null?void 0:e.student_code)??"?"}`)}</p>
                    <p class="text-[10px] text-gray-400">เลขที่ ${(e==null?void 0:e.seat)??"—"}</p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-sm font-bold text-red-500">${t} ครั้ง</span>
                  <span class="text-gray-300 text-sm">›</span>
                </div>
              </div>`).join("")}
            </div>
          </div>`:`
          <div class="bg-emerald-50 rounded-2xl p-5 text-center border border-emerald-100">
            <p class="text-3xl mb-2">🎉</p>
            <p class="text-emerald-700 text-sm font-semibold">ไม่มีข้อมูลการขาดเรียน</p>
          </div>`}
        </div>`,f.querySelectorAll(".std-row[data-sid]").forEach(e=>{e.addEventListener("click",()=>{const t=n()[parseInt(e.dataset.sid)];t&&U(t,i,y,b)})})}catch{G()}}async function I(){m();try{if(!y||!k){const[t,l]=await Promise.all([Z(s),k?Promise.resolve(k):K(s).catch(()=>[])]);y=t,k||(k=l)}const{columns:i,scores:D}=y;if(!i.length){f.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">ยังไม่มีข้อมูลคะแนนในห้องนี้</div>';return}const S=i.reduce((t,l)=>t+(l.max_score??0),0);if(!S){f.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">คอลัมน์คะแนนยังไม่ได้กำหนดคะแนนเต็ม</div>';return}const H=n(),M={};D.forEach(t=>{M[t.student_id]=(M[t.student_id]??0)+(t.final_score??0)}),(k??[]).forEach(t=>{M[t.id]===void 0&&(M[t.id]=0)});const N=Object.entries(M).map(([t,l])=>({sid:parseInt(t),tot:l,pct:Math.min(100,Math.round(l/S*100))})),B=Object.fromEntries(J.map(t=>[t.label,0]));N.forEach(({pct:t})=>{B[V(t)]++});const j=N.length,z=j?Math.round(N.reduce((t,l)=>t+l.pct,0)/j):0,E=j?Math.round(N.filter(t=>t.pct>=50).length/j*100):0,R=N.filter(t=>t.pct<50).sort((t,l)=>t.pct-l.pct).slice(0,5),e=t=>t>=80?"text-emerald-600":t>=60?"text-amber-500":"text-red-500";f.innerHTML=`
        <div class="p-4 space-y-4 max-w-2xl mx-auto pb-8">
          <div class="grid grid-cols-3 gap-3">
            <div class="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p class="text-3xl font-extrabold ${e(z)}">${z}%</p>
              <p class="text-[11px] text-gray-400 mt-0.5">คะแนนเฉลี่ย</p>
            </div>
            <div class="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p class="text-3xl font-extrabold ${e(E)}">${E}%</p>
              <p class="text-[11px] text-gray-400 mt-0.5">ผ่าน (≥50%)</p>
            </div>
            <div class="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
              <p class="text-3xl font-extrabold text-gray-700">${j}</p>
              <p class="text-[11px] text-gray-400 mt-0.5">นักเรียนทั้งหมด</p>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-3 font-semibold uppercase tracking-widest">การกระจายเกรด</p>
            <div class="space-y-2.5">
              ${J.map(t=>{const l=B[t.label]??0,O=j?Math.round(l/j*100):0;return`<div class="flex items-center gap-3">
                  <span class="w-7 text-xs font-bold text-right" style="color:${t.color}">${t.label}</span>
                  <div class="flex-1 h-7 bg-gray-100 rounded-full overflow-hidden flex items-center">
                    <div class="h-full rounded-full flex items-center pl-2 min-w-0"
                         style="width:${Math.max(O,0)}%;background:${t.color}">
                      ${l>0?`<span class="text-[10px] text-white font-bold whitespace-nowrap">${l}</span>`:""}
                    </div>
                  </div>
                  <span class="w-8 text-xs text-gray-400 text-right">${O}%</span>
                </div>`}).join("")}
            </div>
          </div>
          ${R.length?`
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p class="text-[11px] text-gray-400 mb-3 font-semibold uppercase tracking-widest">⚠️ นักเรียนเสี่ยงตก (คะแนน &lt; 50%)</p>
            <div class="divide-y divide-gray-50">
              ${R.map(({sid:t,pct:l,tot:O})=>{const v=H[t];return`<div class="flex items-center justify-between py-2.5 -mx-1 px-2 rounded-xl cursor-pointer hover:bg-gray-50 transition std-row" data-sid="${t}">
                  <div class="flex items-center gap-2.5">
                    ${W(v,"w-9","h-12","rounded-xl")}
                    <div>
                      <p class="text-sm text-gray-700 font-medium">${g((v==null?void 0:v.full_name)??`รหัส ${(v==null?void 0:v.student_code)??t}`)}</p>
                      <p class="text-[10px] text-gray-400">เลขที่ ${(v==null?void 0:v.seat)??"—"}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="text-right leading-tight">
                      <span class="text-sm font-bold text-red-500">${l}%</span>
                      <span class="text-[10px] text-gray-400 block">${Math.round(O)}/${S}</span>
                    </div>
                    <span class="text-gray-300 text-sm">›</span>
                  </div>
                </div>`}).join("")}
            </div>
          </div>`:`
          <div class="bg-emerald-50 rounded-2xl p-5 text-center border border-emerald-100">
            <p class="text-3xl mb-2">🎉</p>
            <p class="text-emerald-700 text-sm font-semibold">ไม่มีนักเรียนเสี่ยงตกในขณะนี้</p>
          </div>`}
        </div>`,f.querySelectorAll(".std-row[data-sid]").forEach(t=>{t.addEventListener("click",()=>{const l=n()[parseInt(t.dataset.sid)];l&&U(l,A,y,b)})})}catch(i){console.error(i),G()}}$("attendance")}function at(s,r){if(r<=0)return{allowed:!1,count:0};const d=new Date,a=d.getDay(),p=d.getDate()-a+(a===0?-6:1),x=new Date(d.setDate(p)).toISOString().slice(0,10),u=`pp5_free_dash_week_${s}`;let _={weekMonday:x,count:0};try{const b=localStorage.getItem(u);if(b){const o=JSON.parse(b);o.weekMonday===x&&(_=o)}}catch{}return{allowed:_.count<r,count:_.count,weekMonday:x}}function rt(s,r){const d=`pp5_free_dash_week_${s}`;let a=0;try{const p=localStorage.getItem(d);if(p){const x=JSON.parse(p);x.weekMonday===r&&(a=x.count)}}catch{}localStorage.setItem(d,JSON.stringify({weekMonday:r,count:a+1}))}export{st as openClassDashboard,lt as openDashboardRoomPicker};
