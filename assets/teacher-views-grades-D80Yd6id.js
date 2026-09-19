import{getScoreColumns as ge,getClassStudents as Wt,getStudentScores as nt,getSheetColumnOptionsForTypes as Xt,getSystemConfig as Zt,getMyClasses as Dt,createScoreColumn as Ce,fillLifeSkillScoresForClass as en,fillPrayerScoresForReligionClass as tn,syncAutoAttendanceScoreColumns as nn,getReadingScoreColumns as sn,getReadingScores as rn,getClassScoreRounding as on,detectAssignmentKind as an,updateScoreColumn as Ie,exportClassGradesToGradeOnline as ln,saveClassScoreRounding as dn,updateColumnSortOrders as cn,setColumnAutoAttendanceSync as mn,deleteScoreColumn as Pe,saveStudentScore as dt,applyScoreOverride as un,updateClassStudentSpecialResult as xn,getTeacherExamRequests as pn,reviewExamRequest as Lt,updateExamResult as It}from"./api-CnonnVVn.js";import{i as jt,a as bn,e as st,n as Mt}from"./score-display-BIDpG83o.js";import{g as gn,K as fn}from"./regrade-api-JnlABjxU.js";import{a as g,g as D}from"./ui-CHdefT5i.js";import{s as yn}from"./supabase-BV-W2lsh.js";import{openScoreScanner as Nt}from"./score-qr-scanner-mLvI4Vrc.js";import{setActiveNav as ct,setTitle as mt,setContent as Ue,applyReadingGradesFromConfig as hn,_readingGrade as vn,_htmlEsc as J}from"./teacher-views-utils-B68DuafG.js";const it="pp5:gradebook-updated",Tt="pp5_gradebook_update",wn="pp5-gradebook-sync-v1";let Se=null;try{Se=new BroadcastChannel(wn)}catch{}function $n(_){const b={..._,eventId:`${Date.now()}-${Math.random().toString(36).slice(2)}`,updatedAt:new Date().toISOString()};window.dispatchEvent(new CustomEvent(it,{detail:b}));try{Se==null||Se.postMessage(b)}catch{}try{localStorage.setItem(Tt,JSON.stringify(b))}catch{}return b}function _n(_){const b=new Set,B=j=>{!(j!=null&&j.eventId)||b.has(j.eventId)||(b.add(j.eventId),b.size>100&&b.delete(b.values().next().value),_(j))},N=j=>B(j.detail),F=j=>B(j.data),A=j=>{if(!(j.key!==Tt||!j.newValue))try{B(JSON.parse(j.newValue))}catch{}};return window.addEventListener(it,N),Se==null||Se.addEventListener("message",F),window.addEventListener("storage",A),()=>{window.removeEventListener(it,N),Se==null||Se.removeEventListener("message",F),window.removeEventListener("storage",A)}}function kn(){ct("grades"),mt("บันทึกคะแนน","scores"),Ue(`<div class="text-center py-20 text-gray-400">
    <p class="text-5xl mb-4">📝</p>
    <p class="font-medium text-gray-600">เลือกห้องเรียนจากเมนู "ห้องเรียนของฉัน"</p>
    <p class="text-sm mt-2">แล้วกดปุ่ม 📝 คะแนน ที่การ์ดห้องเรียน</p>
  </div>`)}let Je=null;function En(_){return _>=80?4:_>=75?3.5:_>=70?3:_>=65?2.5:_>=60?2:_>=55?1.5:_>=50?1:0}function Sn(_){return _>=3.5?{label:"ดีเยี่ยม",cls:"text-emerald-600"}:_>=2.5?{label:"ดี",cls:"text-blue-600"}:_>=1?{label:"ผ่าน",cls:"text-amber-500"}:{label:"ไม่ผ่าน",cls:"text-red-600"}}function qn(_,b,B){if(B)return{allowed:!0,claimedRoom:null};let N=null;try{N=localStorage.getItem(`pp5_gradeonline_room_${_}`)}catch{}return!N||N===b?{allowed:!0,claimedRoom:N}:{allowed:!1,claimedRoom:N}}function Cn(_,b){try{localStorage.setItem(`pp5_gradeonline_room_${_}`,b)}catch{}}function Ln(_,b){var N;(N=document.getElementById("gol-room-paywall"))==null||N.remove();const B=document.createElement("div");B.id="gol-room-paywall",B.className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60",B.innerHTML=`
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative">
      <button id="gol-pw-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
      <div class="text-6xl mt-4">🔒</div>
      <p class="font-bold text-gray-800 text-lg">ใช้ครบโควต้าห้องฟรีแล้ว</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        ฟีเจอร์ส่งคะแนนเข้า GradeOnline ใช้ได้ฟรี <b>1 ห้องเรียน</b> ต่อครู 1 คน — ตอนนี้ผูกกับห้อง <b>${J(_)}</b> ไว้แล้ว
        ${b?`<br><br>ต้องการใช้กับห้อง <b>${J(b)}</b> เพิ่ม`:""}<br><br>
        ร่วมสนับสนุนระบบระดับ 2 ขึ้นไปเพื่อใช้ได้ไม่จำกัดจำนวนห้องครับ (สรุปเกรดเข้าระบบแก้ค้างเก่ายังส่งได้ตามปกติ)
      </p>
      <button id="gol-pw-donate" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
    </div>`,document.body.appendChild(B),B.querySelector("#gol-pw-close").addEventListener("click",()=>B.remove()),B.querySelector("#gol-pw-donate").addEventListener("click",()=>{var F;B.remove(),(F=document.getElementById("btn-donate-float"))==null||F.click()})}function In(_,b){var F;(F=document.getElementById("gol-result-modal"))==null||F.remove();const B=document.createElement("div");B.id="gol-result-modal",B.className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4",B.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col">
      <div class="px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-sm">📤 ส่งคะแนนเข้า GradeOnline</h3>
        <button id="gol-result-close" class="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>
      <div class="overflow-y-auto flex-1 px-4 py-4 space-y-4 text-sm text-gray-600">
        <p class="text-xs text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">เตรียมคะแนนไว้แล้ว ${b} คน — ใช้รหัสด้านล่างตอนกดปุ่มบุ๊กมาร์กในหน้า GradeOnline</p>
        <div class="text-center bg-gray-50 rounded-xl py-3">
          <p class="text-[11px] text-gray-400 mb-1">รหัสอ้างอิง</p>
          <p class="text-2xl font-mono font-bold tracking-widest text-indigo-700">${J(_)}</p>
        </div>
        <div class="text-center space-y-2">
          <p class="text-xs">ยังไม่เคยติดตั้ง? <b>ลากปุ่มนี้</b> ไปวางที่แถบบุ๊กมาร์กของเบราว์เซอร์ (ทำครั้งเดียว)</p>
          <a
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold shadow-lg"
            style="cursor:grab"
            href="javascript:(function(){var s=document.createElement('script');s.src='https://ghhambal.github.io/pp5online/js/gradeonline-bridge-push.js?v='+Date.now();document.body.appendChild(s);})();"
            onclick="alert('อย่ากดปุ่มนี้ตรงๆ นะครับ — ให้ลาก (drag) ปุ่มนี้ไปวางที่แถบบุ๊กมาร์กด้านบนของเบราว์เซอร์แทน'); return false;"
          >📥 ดึงคะแนนเข้า GradeOnline</a>
        </div>
        <ol class="space-y-1.5 text-xs list-decimal list-inside">
          <li>เปิดหน้า GradeOnline (azizstan.net) ไปที่วิชา/ห้องที่ต้องการกรอกคะแนน</li>
          <li>กดปุ่มบุ๊กมาร์กที่ลากไว้ แล้ววางรหัสอ้างอิงด้านบนตอนที่ระบบถาม</li>
          <li>สคริปต์จะกรอกคะแนนรวม+เกรดให้ทีละคนแบบไม่รีบ — <b>ตรวจสอบให้ดีก่อนกดปุ่มบันทึกของ GradeOnline เอง</b> (ไม่บันทึกให้อัตโนมัติ)</li>
        </ol>
        <p class="text-[11px] text-gray-400 text-center">ไม่เห็นแถบบุ๊กมาร์ก? กด ⌘/Ctrl+Shift+B เพื่อเปิดก่อน</p>
      </div>
    </div>`,document.body.appendChild(B);const N=()=>B.remove();B.querySelector("#gol-result-close").onclick=N,B.onclick=A=>{A.target===B&&N()}}async function Ee(_,b){var N,F,A,j;Je==null||Je(),Je=null,window._currentGradeTeacher=_,ct("grades"),mt("บันทึกคะแนน","scores");const B=b.master_subjects;Ue(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...</div>`);try{const K=b.source_class_id??b.id,V=ge(K),[H,ce,fe,[M,ne,$e],u,p,E]=await Promise.all([Wt(b.id),V,V.then(t=>nt(K,t)),Xt(b.id,["กลางภาค","ปลายภาค","ระหว่างเรียน"]),Zt().catch(()=>({})),_?Dt(_.id).catch(()=>[]):Promise.resolve([]),gn().catch(()=>({}))]),k=!!E.live_submit_open_date&&new Date().toISOString().slice(0,10)>=E.live_submit_open_date;hn(u),b.course_id&&ce.length===0&&setTimeout(async()=>{var t;try{const n=p.filter(l=>l.id!==b.id&&l.course_id===b.course_id),c=(await Promise.all(n.map(async l=>{const v=await ge(l.id).catch(()=>[]);return v.length?{...l,cols:v}:null}))).filter(Boolean);if(!c.length)return;(t=document.getElementById("grade-same-subj-popup"))==null||t.remove();const x=document.createElement("div");x.id="grade-same-subj-popup",x.className="fixed inset-0 z-[190] flex items-center justify-center p-6",x.style.background="rgba(0,0,0,0.45)",x.innerHTML=`
            <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
              <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
                <div class="text-3xl mb-2">📋</div>
                <h3 class="text-white font-bold text-base">พบวิชาเดียวกันในอีกห้อง</h3>
                <p class="text-indigo-100 text-xs mt-1">ยังไม่มีคอลัมน์คะแนน — ต้องการคัดลอกจากห้องที่มีอยู่แล้วไหม?</p>
              </div>
              <div class="p-5 space-y-2 max-h-60 overflow-y-auto">
                ${c.map(l=>`
                <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-gray-800 truncate">${l.class_name}</p>
                    <p class="text-xs text-gray-400">${l.cols.length} คอลัมน์</p>
                  </div>
                  <button class="grade-copy-cols flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
                    data-src="${l.id}">
                    คัดลอก
                  </button>
                </div>`).join("")}
              </div>
              <div class="px-5 pb-5">
                <button id="grade-ssp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
              </div>
            </div>`,document.body.appendChild(x),x.querySelector("#grade-ssp-close").addEventListener("click",()=>x.remove()),x.querySelectorAll(".grade-copy-cols").forEach(l=>{l.addEventListener("click",async()=>{const v=c.find($=>$.id===parseInt(l.dataset.src));l.disabled=!0,l.textContent="⏳";try{for(const $ of v.cols)await Ce({class_id:b.id,assignment_name:$.assignment_name,assignment_type:$.assignment_type,sheet_column:$.sheet_column??"",max_score:$.max_score});g(`คัดลอก ${v.cols.length} คอลัมน์จาก ${v.class_name} ✅`,"success"),x.remove(),Ee(_,b)}catch($){g("คัดลอกไม่สำเร็จ: "+D($),"error"),l.disabled=!1,l.textContent="คัดลอก"}})})}catch{}},600);const O=parseInt(u.academicYear??2568),f=parseInt(u.semester??1),Q=(B==null?void 0:B.subject_group)??"",Z=(b==null?void 0:b.skill_group)==="ชีวิต",se=["AGM","AGMVOC"].includes(Q);let ye=fe,me=[];Z?(me=(await en(b.id,O,f)).columnNames??[],ye=await nt(b.id)):se&&(me=(await tn(b.id,{semesterStart:u.semester_start,semesterEnd:u.semester_end,attendanceScoreMode:u.attendanceScoreMode??"recorded"})).columnNames??["คะแนนมาเรียน","คะแนนละหมาด"],ye=await nt(b.id));try{const t=await nn(b.id,{attendanceScoreMode:u.attendanceScoreMode??"recorded"});t.columns>0&&(ye=await nt(b.id),t.skipped>0&&g(`ดึงคะแนนมาเรียนอัตโนมัติแล้ว (ข้าม ${t.skipped} รายการที่เคยแก้คะแนนด้วยมือ)`,"success"))}catch(t){console.error("syncAutoAttendanceScoreColumns failed",t)}let W=[],ae=[];try{W=await sn(O,f),ae=W.length?await rn(W.map(t=>t.id),H.map(t=>t.id)):[],W.length?ae.length||g(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนห้องนี้ ภาค ${f}/${O}`,"warning"):g(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ ภาค ${f}/${O}`,"warning")}catch(t){console.error("load reading evaluation failed",t),g(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${D(t)}`,"error")}const ue={};for(const t of ae)ue[t.student_id]=(ue[t.student_id]??0)+(parseFloat(t.score)||0);const qe={},Be=W.reduce((t,n)=>t+(parseFloat(n.max_score)||0),0);for(const[t,n]of Object.entries(ue)){const c=Be>0?n/Be*100:0,x=vn(c);qe[parseInt(t)]={score100:c,label:x.label,cls:x.cls}}let ee=me.length?await ge(b.id):ce;if(ee.length===0){const t=(n,c)=>Ce({class_id:b.id,assignment_name:`คะแนนที่ ${c}`,max_score:20,assignment_type:n,sheet_column:""});for(let n=1;n<=5;n++)await t("midterm",n);for(let n=1;n<=5;n++)await t("final",n);ee=await ge(b.id)}me.length&&(ee=[...ee].sort((t,n)=>{const c=me.indexOf(t.assignment_name),x=me.indexOf(n.assignment_name);return c>=0||x>=0?c<0?1:x<0?-1:c-x:(t.id??0)-(n.id??0)}));const We=new Set(me.length?ee.filter(t=>me.includes(t.assignment_name)).map(t=>t.id):[]),q=t=>{const n=typeof t=="object"?t==null?void 0:t.id:t;return We.has(n)},ie=t=>t.assignment_name==="คะแนนละหมาด"?`คะแนนระบบกลาง (แก้ไขไม่ได้)
คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา
หากคะแนนว่าง = ครูที่ปรึกษาศาสนายังไม่ได้บันทึกในสัปดาห์นั้น`:"คะแนนระบบกลาง: แก้ไขไม่ได้",Y=ee.filter(jt),le=ee.filter(t=>t.column_type==="derived"),te=ee.filter(t=>t.column_type==="override"),Ke=ee.filter(t=>(t.column_type??"regular")==="regular"&&!jt(t)),he=Object.fromEntries(ee.map(t=>[t.id,t])),T=Ke.filter(t=>t.assignment_type!=="final"&&t.assignment_type!=="ปลายภาค"),G=Ke.filter(t=>t.assignment_type==="final"||t.assignment_type==="ปลายภาค"),je=bn(Y),ut=`gradeToggles_${(_==null?void 0:_.id)??"guest"}_${b.id}`,Te=(()=>{try{return JSON.parse(localStorage.getItem(ut)??"{}")}catch{return{}}})(),rt=()=>{try{localStorage.setItem(ut,JSON.stringify({columnRoundSettings:Ve,toggleForceGrade:Fe,toggleKhuna:Ne,toggleRead:He,showBonusCols:re}))}catch{}};let re=Te.showBonusCols??!1,Ae=!1;const R={};for(const t of ye)R[t.student_id]||(R[t.student_id]={}),R[t.student_id][t.score_column_id]={orig:t.original_score,retake:t.retake_score,final:t.final_score??t.original_score,history:t.score_history??[]};for(const t of H)t.special_result&&(R[t.id]||(R[t.id]={}),R[t.id].__force=t.special_result);const _e=(t,n)=>{var c,x,l,v;return((x=(c=R[t])==null?void 0:c[n])==null?void 0:x.final)??((v=(l=R[t])==null?void 0:l[n])==null?void 0:v.orig)??null},Xe=(t,n)=>{var c,x,l;return(((l=(x=(c=R[t])==null?void 0:c[n])==null?void 0:x.history)==null?void 0:l.length)??0)>1},Nn=(t,n)=>n.reduce((c,x)=>c+(parseFloat(_e(t,x.id))||0),0),Re=t=>t.reduce((n,c)=>n+(parseFloat(c.max_score)||0),0),At=(t,n)=>{const c=parseFloat(_e(t,n.id))||0;if(!n.bonus_formula)return c;const x=Object.fromEntries(je.map(v=>[v.var,parseFloat(_e(t,v.id))||0])),l=st(n.bonus_formula,x)??0;return n.max_score?Math.min(c+l,n.max_score):c+l},xt=(t,n)=>n.reduce((c,x)=>c+At(t,x),0),pt=(t,n)=>{if(!t.formula)return 0;const c={};for(const x of t.formula_refs??[])c[x.var]=parseFloat(_e(n,x.col_id))||0;return st(t.formula,c)??0};let ot=!1;const Rt=await on(b.id).catch(()=>(ot=!0,null));let Ve=Mt(Rt??Te.columnRoundSettings??{total:Te.toggleRound??!0});const Ze=t=>!!Ve[t],Me=(t,n)=>{if(n===""||n==null)return n??"";if(!Ze(t))return n;const c=parseFloat(n);return Number.isFinite(c)?Math.round(c):n},xe=(t,n,c=1)=>Ze(t)?Math.round(n):Number(n.toFixed(c));let Fe=Te.toggleForceGrade??!1,Ne=Te.toggleKhuna??!0,He=Te.toggleRead??!0;const Ft=["0","ร","มส","มผ"],Ht=u.forceGradeOptions?String(u.forceGradeOptions).split(",").map(t=>t.trim()).filter(Boolean):Ft,Le=t=>{const n=Re(T),c=Re(G),x=le.reduce((o,m)=>o+(parseFloat(m.max_score)||0),0),l=xt(t,T),v=xt(t,G),$=le.reduce((o,m)=>o+(pt(m,t)||0),0),y=n+c+x,e=l+v+$,r=xe("total",e,1),w=y>0?e/y*100:0,h=En(w),I=Sn(h);return{midRaw:l,finRaw:v,pct:w,total:r,grade:h,khuna:I}},bt="sticky left-0 z-20 bg-white border border-gray-200",De="sticky z-20 bg-white border border-gray-200",U="border border-gray-200 text-center text-xs",gt=160,P=76,Qe=(t,n,c,x="bg-emerald-500 text-white shadow-sm",l="bg-gray-100 text-gray-500 hover:bg-gray-200")=>`<button class="grade-toggle text-[11px] px-3 py-1.5 rounded-lg font-semibold transition-all select-none whitespace-nowrap ${c?x:l}"
        data-toggle="${t}">${n}</button>`,Gt=(t,n)=>{if(q(n)){g("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}const c=[...T,...G].find(s=>s.id===n),x=(c==null?void 0:c.assignment_type)==="final",l=an((c==null?void 0:c.assignment_name)||""),v=l==="กลางภาค"||l==="ปลายภาค"||l==="สอบปรับ";let $;v&&x?$=ne:v&&!x?$=M:$=$e.cols.length>0?$e:x?ne:M;const y=$.cols,e=$.isFixed;if(document.querySelectorAll(".sheet-col-popup").forEach(s=>s.remove()),e&&y.length===1){const s=y[0];if(t.textContent.trim()!==s){Ie(n,{sheet_column:s}).catch(()=>{}),t.textContent=s;const a=[...T,...G].find(i=>i.id===n);a&&(a.sheet_column=s)}return}const r=t.getBoundingClientRect(),w=t.textContent.trim(),h=document.createElement("div");h.className="sheet-col-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",h.style.cssText=`top:${r.bottom+4}px;left:${Math.max(4,r.left-20)}px;min-width:${y.length>0?220:180}px`;const I=(c==null?void 0:c.assignment_name)||(x?"ปลายภาค":"กลางภาค");h.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-2">Sheet → <span class="font-medium text-gray-700">${I}</span>
          ${e?'<span class="ml-1 text-amber-500 text-[9px]">🔒 กำหนดโดยแอดมิน</span>':""}</p>
        ${y.length>0?`
        <div class="grid grid-cols-5 gap-1 mb-2 max-h-32 overflow-y-auto">
          ${y.map(s=>`<button class="scp-opt text-[11px] font-mono py-1.5 rounded-lg border transition-all
            ${s===w?"border-blue-500 bg-blue-50 text-blue-700 font-bold":"border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50"}"
            data-val="${s}" >${s}</button>`).join("")}
        </div>`:""}
        ${e?`<input id="scp-inp" type="hidden" value="${y[0]||w}"/>`:`<input id="scp-inp" type="text" value="${w==="—"?"":w}" placeholder="${y.length>0?"หรือพิมพ์เอง...":"เช่น EK"}" maxlength="6"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-mono uppercase text-center focus:outline-none focus:border-blue-400"/>`}
        <div class="flex gap-2 mt-2">
          <button id="scp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="scp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild(h);const o=h.querySelector("#scp-inp");o.focus(),o.select(),o.addEventListener("input",s=>{s.target.value=s.target.value.toUpperCase()}),h.querySelectorAll(".scp-opt").forEach(s=>{s.addEventListener("click",()=>{o.value=s.dataset.val,h.querySelectorAll(".scp-opt").forEach(a=>{a.className=a.className.replace("border-blue-500 bg-blue-50 text-blue-700 font-bold","border-gray-200 text-gray-600")}),s.className=s.className.replace("border-gray-200 text-gray-600","border-blue-500 bg-blue-50 text-blue-700 font-bold")})});const m=async()=>{const s=o.value.trim().toUpperCase()||null;try{await Ie(n,{sheet_column:s}),t.textContent=s||"—";const a=[...T,...G].find(i=>i.id===n);a&&(a.sheet_column=s),h.remove()}catch{g("บันทึกไม่สำเร็จ","error")}};o.addEventListener("keydown",s=>{s.key==="Enter"&&m()}),h.querySelector("#scp-save").addEventListener("click",m),h.querySelector("#scp-cancel").addEventListener("click",()=>h.remove()),setTimeout(()=>{const s=a=>{!h.contains(a.target)&&a.target!==t&&(h.remove(),document.removeEventListener("click",s))};document.addEventListener("click",s)},100)},Ot=(t,n)=>{if(q(n)){g("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}document.querySelectorAll(".max-score-popup").forEach(y=>y.remove());const c=[...T,...G].find(y=>y.id===n),x=t.getBoundingClientRect(),l=document.createElement("div");l.className="max-score-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3",l.style.cssText=`top:${x.bottom+4}px;left:${Math.max(4,x.left-20)}px;min-width:160px`,l.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-1.5">คะแนนเต็มของคอลัมน์นี้</p>
        <input id="msp-inp" type="number" value="${(c==null?void 0:c.max_score)||0}" min="1" max="9999"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-center focus:outline-none focus:border-blue-400"/>
        <div class="flex gap-2 mt-2">
          <button id="msp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="msp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`,document.body.appendChild(l);const v=l.querySelector("#msp-inp");v.focus(),v.select();const $=async()=>{const y=Math.max(1,parseFloat(v.value)||1);try{await Ie(n,{max_score:y}),c&&(c.max_score=y),l.remove(),pe()}catch{g("บันทึกไม่สำเร็จ","error")}};v.addEventListener("keydown",y=>{y.key==="Enter"&&$()}),l.querySelector("#msp-save").addEventListener("click",$),l.querySelector("#msp-cancel").addEventListener("click",()=>l.remove()),setTimeout(()=>{const y=e=>{!l.contains(e.target)&&e.target!==t&&(l.remove(),document.removeEventListener("click",y))};document.addEventListener("click",y)},100)},zt=(t,n,c)=>{var I;(I=document.getElementById("sg-detail-modal"))==null||I.remove();const{midRaw:x,finRaw:l,total:v,grade:$,khuna:y}=c,e=Re(T),r=Re(G),w=o=>{var a,i;const m=((a=n[o.id])==null?void 0:a.final)??((i=n[o.id])==null?void 0:i.orig)??null,s=m!=null&&o.max_score>0?(m/o.max_score*100).toFixed(0):"—";return`<tr class="border-b border-gray-50">
          <td class="py-1.5 px-3 text-gray-700 text-xs">${o.assignment_name||"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs font-mono text-blue-600">${m??"—"}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-400">/${o.max_score||0}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-500">${s}%</td>
        </tr>`},h=document.createElement("div");h.id="sg-detail-modal",h.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4",h.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
        <div class="flex items-center gap-3 p-4 border-b flex-shrink-0">
          ${t.image_url?`<img src="${t.image_url}" class="w-9 h-11 rounded-lg object-cover border border-gray-200 shadow-sm"/>`:'<div class="w-9 h-11 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-lg">👤</div>'}
          <div class="flex-1 min-w-0">
            <p class="font-bold text-gray-800 truncate">${t.full_name}</p>
            <p class="text-xs text-gray-400">${t.student_code}</p>
          </div>
          <div class="text-right mr-2">
            <p class="text-2xl font-bold text-purple-700">${$>0?$.toFixed(1):"0"}</p>
            <p class="text-xs font-medium ${y.cls}">${y.label}</p>
          </div>
          <button id="sg-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-4 space-y-4">
          ${T.length>0?`<div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-blue-100">
              <thead><tr class="bg-blue-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${T.map(w).join("")}</tbody>
              <tfoot><tr class="bg-blue-50 font-bold">
                <td class="py-1.5 px-3 text-blue-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${xe("mid_subtotal",x,1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${e}</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${e>0?(x/e*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          ${G.length>0?`<div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-purple-100">
              <thead><tr class="bg-purple-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${G.map(w).join("")}</tbody>
              <tfoot><tr class="bg-purple-50 font-bold">
                <td class="py-1.5 px-3 text-purple-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${xe("fin_subtotal",l,1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${r}</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${r>0?(l/r*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:""}
          <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-5 text-center border border-amber-100">
            <p class="text-xs text-gray-500 mb-2">คะแนนรวมทั้งภาค (50:50)</p>
            <p class="text-4xl font-extrabold text-amber-700 mb-1">${v>0?v:"—"}<span class="text-base font-normal text-gray-400">/100</span></p>
            <p class="text-2xl font-bold text-purple-700">เกรด ${$>0?$.toFixed(1):"0"}
              <span class="text-sm font-semibold ${y.cls}"> — ${y.label}</span></p>
          </div>
        </div>
      </div>`,document.body.appendChild(h),h.querySelector("#sg-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",o=>{o.target===h&&h.remove()})},et=()=>{var n,c,x;const t=document.getElementById("grade-togglebar");t&&(t.innerHTML=`
        <div class="flex items-center gap-1.5 px-3 py-2 ml-auto flex-wrap justify-end">
          <button id="btn-round-settings" type="button" class="text-[11px] px-3 py-1.5 rounded-lg font-semibold transition bg-gray-100 text-gray-500 hover:bg-gray-200">🔢 ปัดเลข</button>
          ${Qe("khuna","คุณลักษณะ",Ne)}
          ${Qe("read","การอ่าน",He)}
          <div class="w-px h-5 bg-gray-200 mx-1 self-center"></div>
          ${Qe("forceGrade","บังคับเกรด",Fe,"bg-rose-500 text-white shadow-sm","bg-gray-100 text-gray-500 hover:bg-gray-200")}
          ${Qe("bonus","⭐ คะแนนเก็บ/พิเศษ",re,"bg-amber-500 text-white shadow-sm","bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100")}
          ${re&&Y.length?Qe("formula-link","🔗 เชื่อมสูตร",Ae,"bg-violet-500 text-white shadow-sm","bg-violet-50 text-violet-600 border border-violet-200 hover:bg-violet-100"):""}
          ${k?`
          <div class="w-px h-5 bg-gray-200 mx-1 self-center"></div>
          <button id="btn-submit-regrade" type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-pink-600 text-white shadow-sm hover:bg-pink-700 transition">
            📤 ส่งสรุปเกรดเข้าระบบแก้ค้างเก่า
          </button>
          <button id="btn-export-gradeonline" type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 text-white shadow-sm hover:bg-purple-700 transition">
            📤 ส่งคะแนนเข้า GradeOnline
          </button>`:""}
        </div>`,(n=document.getElementById("btn-submit-regrade"))==null||n.addEventListener("click",async()=>{const l=document.getElementById("btn-submit-regrade"),v=H.map($=>{var w;const{grade:y}=Le($.id),r=(((w=R[$.id])==null?void 0:w.__force)??"")||(y===0?"0":"");return r?{student_id:$.id,grade_failed_at:r}:null}).filter(Boolean);if(!v.length){g("ไม่มีนักเรียนติดในห้องนี้ตอนนี้","info");return}if(confirm(`พบนักเรียนติด ${v.length} คนในห้องนี้ ยืนยันส่งเข้าระบบแก้ค้างเก่าเลยไหม? (รายชื่อที่เคยส่งไปแล้วจะไม่ถูกส่งซ้ำ)`)){l.disabled=!0,l.textContent="กำลังส่ง...";try{const $=await fn(b.id,v);g(`ส่งสำเร็จ ✅ พบติด ${$.total_failing} คน — เพิ่มเข้าระบบใหม่ ${$.submitted} คน (ที่เหลือมีอยู่แล้ว)`,"success")}catch($){g("ส่งไม่สำเร็จ: "+D($),"error")}finally{l.disabled=!1,l.textContent="📤 ส่งสรุปเกรดเข้าระบบแก้ค้างเก่า"}}}),(c=document.getElementById("btn-export-gradeonline"))==null||c.addEventListener("click",async()=>{const l=document.getElementById("btn-export-gradeonline"),v=(window._pp5DonorTierIndex??0)>=2,$=qn(_==null?void 0:_.id,b.class_name,v);if(!$.allowed){Ln($.claimedRoom,b.class_name);return}const y=H.map(e=>{var I;const{pct:r,grade:w}=Le(e.id),h=((I=R[e.id])==null?void 0:I.__force)||"";return{studentCode:e.student_code,studentName:e.full_name,total:Math.round(r*10)/10,grade:h||(w>0?String(w):"0")}});if(confirm(`เตรียมส่งคะแนนรวม(เต็ม 100)+เกรดของนักเรียน ${y.length} คนในห้องนี้ไปรอที่ GradeOnline ยืนยันไหม?`)){l.disabled=!0,l.textContent="กำลังเตรียมข้อมูล...";try{const e=await ln(b.id,_==null?void 0:_.id,B==null?void 0:B.subject_name,b.class_name,y);!v&&!$.claimedRoom&&Cn(_==null?void 0:_.id,b.class_name),In(e,y.length)}catch(e){g("เตรียมข้อมูลไม่สำเร็จ: "+D(e),"error")}finally{l.disabled=!1,l.textContent="📤 ส่งคะแนนเข้า GradeOnline"}}}),(x=document.getElementById("btn-round-settings"))==null||x.addEventListener("click",ft),t.querySelectorAll(".grade-toggle").forEach(l=>{l.addEventListener("click",()=>{const v=l.dataset.toggle;v==="forceGrade"&&(Fe=!Fe),v==="khuna"&&(Ne=!Ne),v==="read"&&(He=!He),v==="bonus"&&(re=!re,re||(Ae=!1),re&&Y.length===0&&g('ยังไม่มีคอลัมน์พิเศษ — กด "จัดการคอลัมน์" เพื่อเพิ่ม',"info")),v==="formula-link"&&(Ae=!Ae),rt(),et(),pe()})}))},ft=()=>{var x;(x=document.getElementById("round-settings-popup"))==null||x.remove();const t=document.createElement("div");t.id="round-settings-popup",t.className="fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4";const n=(l,v,$)=>`
        <div class="flex items-center justify-between gap-2 py-2 border-b border-gray-50 last:border-0">
          <span class="text-xs text-gray-700 truncate">${J(v??"")}${$!=null?` <span class="text-gray-400">(เต็ม ${$})</span>`:""}</span>
          <button type="button" class="round-set-toggle flex-shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition ${Ze(l)?"bg-emerald-500 text-white":"bg-gray-100 text-gray-500"}"
            data-key="${l}">${Ze(l)?"จำนวนเต็ม":"ทศนิยม"}</button>
        </div>`;t.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[85vh] flex flex-col overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-100 flex-shrink-0">
            <h3 class="font-bold text-gray-800 text-sm">🔢 ตั้งค่าการปัดเลขคะแนน</h3>
            <p class="text-[11px] text-gray-500 mt-0.5">ปัดเฉพาะการแสดงผล ไม่แก้คะแนนต้นฉบับหรือเกรด กดบันทึกใช้ร่วมกันเพื่อใช้ในหน้าครู นักเรียน และ ปพ.5</p>
            ${ot?'<p class="text-xs text-red-600 mt-1">ยังโหลดค่าร่วมไม่ได้ กรุณาตรวจการติดตั้ง SQL และการเชื่อมต่อ</p>':""}
          </div>
          <div class="overflow-y-auto flex-1 px-4 py-2">
            <p class="text-[11px] font-bold text-amber-600 uppercase tracking-wide mt-2 mb-1">ผลรวม</p>
            ${n("mid_subtotal","รวมกลางภาค")}
            ${n("fin_subtotal","รวมปลายภาค")}
            ${n("total","คะแนนรวมทั้งหมด")}
            ${T.length?`<p class="text-[11px] font-bold text-blue-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์กลางภาค</p>${T.map(l=>n(l.id,l.assignment_name,l.max_score)).join("")}`:""}
            ${G.length?`<p class="text-[11px] font-bold text-purple-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์ปลายภาค</p>${G.map(l=>n(l.id,l.assignment_name,l.max_score)).join("")}`:""}
            ${te.length?`<p class="text-[11px] font-bold text-teal-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์อื่นๆ</p>${te.map(l=>n(l.id,l.assignment_name,l.max_score)).join("")}`:""}
            ${le.length?`<p class="text-[11px] font-bold text-indigo-600 uppercase tracking-wide mt-3 mb-1">คอลัมน์คำนวณสูตร</p>${le.map(l=>n(`derived_${l.id}`,l.assignment_name,l.max_score)).join("")}`:""}
            ${re&&Y.length?`<p class="text-[11px] font-bold text-amber-500 uppercase tracking-wide mt-3 mb-1">คะแนนเก็บ/พิเศษ</p>${Y.map(l=>n(l.id,l.assignment_name,l.max_score)).join("")}`:""}
          </div>
          <div class="px-4 py-3 border-t border-gray-100 flex-shrink-0">
            <button id="round-settings-save" class="w-full mb-2 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold">บันทึกใช้ร่วมกัน</button>
            <button id="round-settings-close" class="w-full py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200">ปิด</button>
          </div>
        </div>`,document.body.appendChild(t);const c=()=>t.remove();t.querySelector("#round-settings-save").addEventListener("click",async l=>{const v=l.currentTarget;v.disabled=!0,v.textContent="กำลังบันทึก…",t.querySelectorAll(".round-set-toggle").forEach($=>{$.disabled=!0});try{await dn(b.id,Mt(Ve)),ot=!1,rt(),g("บันทึกค่าปัดเลขร่วมสำหรับครู นักเรียน และ ปพ.5 แล้ว","success"),c()}catch($){g("บันทึกค่าร่วมไม่สำเร็จ กรุณาตรวจการติดตั้ง SQL: "+D($),"error"),v.disabled=!1,v.textContent="บันทึกใช้ร่วมกัน",t.querySelectorAll(".round-set-toggle").forEach(y=>{y.disabled=!1})}}),t.querySelector("#round-settings-close").addEventListener("click",c),t.addEventListener("click",l=>{l.target===t&&c()}),t.querySelectorAll(".round-set-toggle").forEach(l=>{l.addEventListener("click",()=>{const v=l.dataset.key;Ve[v]=!Ve[v],rt(),pe(),ft()})})},Pt=t=>{var x,l,v;(x=document.getElementById("formula-link-popup"))==null||x.remove();const n=document.createElement("div");n.id="formula-link-popup",n.className="fixed inset-0 z-[650] flex items-center justify-center bg-black/40 p-4";const c=je.length?je.map($=>`<span class="font-mono font-bold text-violet-700">${$.var}</span> = "${$.assignment_name}"`).join("  |  "):'<span class="text-gray-400">ยังไม่มีคอลัมน์พิเศษ</span>';n.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-gradient-to-br from-violet-500 to-purple-600 px-5 py-4">
            <h3 class="text-white font-bold text-sm">🔗 เชื่อมสูตรจากคะแนนพิเศษ</h3>
            <p class="text-violet-100 text-xs mt-0.5">คอลัมน์: <span class="font-semibold">${J(t.assignment_name)}</span> (เต็ม ${t.max_score??"?"})</p>
            <p class="text-violet-200 text-[10px] mt-1">สูตรจะบวกเพิ่มเข้าคะแนนที่กรอก ไม่เกินคะแนนเต็ม</p>
          </div>
          <div class="p-4 space-y-3">
            <div class="bg-violet-50 rounded-xl p-3 text-xs text-violet-800">
              <p class="font-semibold mb-1">ตัวแปรที่ใช้ได้:</p>
              <p id="flp-vars">${c}</p>
              <p class="mt-1 text-violet-500">ฟังก์ชัน: MIN, MAX, IF, ROUND, SUM, AVG, CLAMP</p>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">สูตร <span class="text-red-400">*</span></label>
              <div class="flex gap-2">
                <input id="flp-formula" type="text" value="${J(t.bonus_formula??"")}"
                  placeholder="เช่น MIN(A,5)  หรือ  A*0.5+B"
                  class="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm font-mono focus:outline-none focus:border-violet-400"/>
                <button id="flp-test" class="px-3 py-2 rounded-xl bg-violet-100 text-violet-700 text-xs font-medium hover:bg-violet-200 whitespace-nowrap">ทดสอบ</button>
              </div>
              <p id="flp-result" class="text-xs mt-1 hidden"></p>
            </div>
            <div class="flex gap-2">
              ${t.bonus_formula?'<button id="flp-clear" class="flex-1 py-2.5 rounded-xl border border-red-200 text-red-500 text-xs hover:bg-red-50 transition">ลบสูตร</button>':""}
              <button id="flp-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="flp-save" class="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold transition">บันทึก</button>
            </div>
          </div>
        </div>`,document.body.appendChild(n),n.querySelector("#flp-cancel").addEventListener("click",()=>n.remove()),(l=n.querySelector("#flp-test"))==null||l.addEventListener("click",()=>{const $=n.querySelector("#flp-formula").value.trim(),y=n.querySelector("#flp-result");if(!$){y.classList.add("hidden");return}const e=Object.fromEntries(je.map(w=>[w.var,5])),r=st($,e);if(y.classList.remove("hidden"),r===null)y.className="text-xs mt-1 text-red-500",y.textContent="⚠️ สูตรไม่ถูกต้อง";else{y.className="text-xs mt-1 text-emerald-600";const w=je.map(I=>`${I.var}=5`).join(", "),h=t.max_score?Math.min(0+r,t.max_score):r;y.textContent=`✅ ตัวอย่าง (${w||"ไม่มี"}) → bonus=${r} → คะแนนจริง MIN(0+${r},${t.max_score??"∞"}) = ${h}`}}),(v=n.querySelector("#flp-clear"))==null||v.addEventListener("click",async()=>{try{await Ie(t.id,{bonus_formula:null,bonus_formula_refs:[]}),t.bonus_formula=null,t.bonus_formula_refs=[],g("ลบสูตรแล้ว ✅","success"),n.remove(),et(),pe()}catch{g("บันทึกไม่สำเร็จ","error")}}),n.querySelector("#flp-save").addEventListener("click",async()=>{const $=n.querySelector("#flp-formula").value.trim();if(!$){g("กรุณากรอกสูตร","warning");return}if(st($,Object.fromEntries(je.map(r=>[r.var,5])))===null){g("สูตรไม่ถูกต้อง","warning");return}const y=je.map(r=>({var:r.var,col_id:r.id})),e=n.querySelector("#flp-save");e.disabled=!0,e.textContent="⏳";try{await Ie(t.id,{bonus_formula:$,bonus_formula_refs:y}),t.bonus_formula=$,t.bonus_formula_refs=y,g("บันทึกสูตรแล้ว ✅","success"),n.remove(),et(),pe()}catch{g("บันทึกไม่สำเร็จ","error"),e.disabled=!1,e.textContent="บันทึก"}})},yt=(()=>{var c;const t={};for(const x of ee)q(x)&&(t[c=x.assignment_name]??(t[c]=[])).push(x);const n=new Set;for(const x of Object.values(t))if(!(x.length<=1)){x.sort((l,v)=>l.id-v.id);for(const l of x.slice(1))n.add(l.id)}return n})(),Ut=()=>{var r,w,h,I;(r=document.getElementById("manage-cols-modal"))==null||r.remove();const t=document.createElement("div");t.id="manage-cols-modal",t.className="fixed inset-0 z-[600] flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4";const n=(o,m=[])=>{const s=q(o),a=s&&yt.has(o.id),i=s&&!a,d=m.findIndex(C=>C.id===o.id),S=!s&&d>0&&!q(m[d-1]),L=!s&&d>=0&&d<m.length-1;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border ${i?"border-emerald-100 bg-emerald-50/70":a?"border-amber-200 bg-amber-50/70":"border-gray-100 hover:border-gray-200 bg-gray-50/60"}">
          ${i?'<span class="w-4 text-emerald-500 text-xs flex-shrink-0">🔒</span>':a?`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-amber-500 flex-shrink-0" data-colid="${o.id}" title="คอลัมน์ซ้ำ (ระบบสร้างผิดพลาด)" />`:`<input type="checkbox" class="mcm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-colid="${o.id}" />`}
          <div class="flex flex-col gap-0.5 flex-shrink-0">
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${S?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${o.id}" data-dir="up" ${S?"":"disabled"}>▲</button>
            <button class="mcm-move text-[10px] leading-none px-1 rounded ${L?"text-gray-400 hover:bg-gray-200":"text-gray-200 cursor-default"}"
              data-colid="${o.id}" data-dir="down" ${L?"":"disabled"}>▼</button>
          </div>
          <span class="flex-1 text-xs text-gray-700 truncate">${o.assignment_name||"—"}${a?' <span class="text-amber-600 font-semibold">(ซ้ำ)</span>':""}</span>
          <span class="text-[11px] text-gray-400">/${o.max_score||0}</span>
          ${s?"":`
          <button class="mcm-sync-toggle text-[10px] font-semibold px-1.5 py-0.5 rounded-lg flex-shrink-0 ${o.auto_attendance_sync?"bg-emerald-50 text-emerald-700":"text-gray-300 hover:bg-gray-100 hover:text-gray-500"}"
            data-colid="${o.id}"
            title="${o.auto_attendance_sync?"ปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ":"เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติ — sync ทุกครั้งที่เปิดหน้าบันทึกคะแนน ข้ามคนที่เคยแก้คะแนนด้วยมือ"}">🔄</button>`}
          ${i?'<span class="text-[10px] text-emerald-700 font-semibold">ล็อก</span>':`<button class="mcm-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50"
                data-colid="${o.id}" title="ลบคอลัมน์${a?"ซ้ำ":""}">🗑</button>`}
        </div>`},c=o=>`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-amber-100 bg-amber-50/40">
          <input type="text" class="mcm-bonus-name flex-1 text-xs text-amber-800 bg-transparent border-b border-transparent focus:border-amber-300 focus:outline-none px-0.5 min-w-0"
            value="${(o.assignment_name||"").replace(/"/g,"&quot;")}" data-bonusid="${o.id}" />
          <span class="text-[11px] text-amber-400 flex-shrink-0">${o.max_score?"/"+o.max_score:"∞"}</span>
          <button class="mcm-bonus-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${o.id}" title="ลบคอลัมน์">🗑</button>
        </div>`,x=o=>{var m,s;return`
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-teal-100 bg-teal-50/40">
          <span class="flex-1 text-xs text-teal-800 truncate">${J(o.assignment_name||"—")}</span>
          <span class="text-[10px] text-teal-500 flex-shrink-0 truncate max-w-[90px]" title="เชื่อมกับ: ${J(((m=he[o.link_column_id])==null?void 0:m.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗 ${J(((s=he[o.link_column_id])==null?void 0:s.assignment_name)??"—")}</span>
          <button class="mcm-override-del text-gray-300 hover:text-red-400 text-lg transition-colors px-1 rounded hover:bg-red-50 flex-shrink-0"
            data-colid="${o.id}" title="ลบคอลัมน์">🗑</button>
        </div>`};t.innerHTML=`<div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[80vh] flex flex-col">
        <div class="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ จัดการคอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">ลบหรือเพิ่มคอลัมน์คะแนน</p>
          </div>
          <button id="mcm-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-5 space-y-4">
          ${T.length<5||G.length<5?`
          <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-3 flex items-center gap-3">
            <span class="text-xl">✨</span>
            <div class="flex-1">
              <p class="text-xs font-medium text-indigo-800">เติมคอลัมน์เริ่มต้นครบ 5+5</p>
              <p class="text-[11px] text-indigo-400">สร้างคอลัมน์เปล่าจนครบกลางภาค 5 + ปลายภาค 5</p>
            </div>
            <button id="mcm-fill-default" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition flex-shrink-0">เติมให้ครบ</button>
          </div>`:""}
          <!-- bulk bar -->
          <div id="mcm-bulk-bar" class="hidden flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            <p id="mcm-bulk-count" class="text-xs font-semibold text-red-700">เลือก 0 รายการ</p>
            <button id="mcm-bulk-del" class="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition">🗑️ ลบที่เลือก</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-blue-700 text-sm">📘 กลางภาค <span class="font-normal text-gray-400">(${T.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${T.map(o=>n(o,T)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition-colors" data-type="midterm">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-purple-700 text-sm">📙 ปลายภาค <span class="font-normal text-gray-400">(${G.length} คอลัมน์)</span></h4>
            </div>
            <div class="mcm-col-list space-y-1.5">${G.map(o=>n(o,G)).join("")}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition-colors" data-type="final">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-amber-600 text-sm">⭐ คะแนนพิเศษ (Bonus) <span class="font-normal text-gray-400">(${Y.length} คอลัมน์)</span></h4>
            </div>
            <div id="mcm-bonus-list" class="space-y-1.5">${Y.map(c).join("")}</div>
            <button id="mcm-add-bonus" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-amber-200 text-amber-500 hover:border-amber-400 hover:bg-amber-50 text-sm transition-colors">＋ เพิ่มคอลัมน์พิเศษ</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-teal-700 text-sm">🔄 ปรับคะแนน <span class="font-normal text-gray-400">(${te.length} คอลัมน์)</span></h4>
            </div>
            <p class="text-[11px] text-gray-400 mb-1.5">ไม่นับใน 100 · นักเรียนไม่เห็น · ไม่ลงเอกสาร ปพ.5</p>
            <div id="mcm-override-list" class="space-y-1.5">${te.map(x).join("")}</div>
            <button id="mcm-add-override" class="mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-teal-200 text-teal-600 hover:border-teal-400 hover:bg-teal-50 text-sm transition-colors">＋ เพิ่มคอลัมน์ปรับคะแนน</button>
          </div>
        </div>
      </div>`,document.body.appendChild(t),t.querySelector("#mcm-close").addEventListener("click",()=>t.remove());const l=(o,m)=>{var a;(a=document.getElementById("mcm-del-confirm"))==null||a.remove();const s=document.createElement("div");s.id="mcm-del-confirm",s.className="fixed inset-0 z-[700] flex items-center justify-center p-6",s.style.background="rgba(0,0,0,0.5)",s.innerHTML=`
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">🗑️</div>
            <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">${o}</p>
            <div class="flex gap-3">
              <button id="mcm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">ยกเลิก</button>
              <button id="mcm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition">ลบเลย</button>
            </div>
          </div>`,document.body.appendChild(s),s.querySelector("#mcm-conf-no").addEventListener("click",()=>s.remove()),s.querySelector("#mcm-conf-yes").addEventListener("click",()=>{s.remove(),m()})},v=()=>{t.querySelectorAll(".mcm-col-list").forEach((o,m)=>{const s=m===0?T:G;o.innerHTML=s.map(a=>n(a,s)).join("")}),$()},$=()=>{var m;t.querySelectorAll(".mcm-move").forEach(s=>{s.addEventListener("click",async()=>{if(s.disabled)return;const a=parseInt(s.dataset.colid),i=s.dataset.dir,d=T.findIndex(oe=>oe.id===a)!==-1?T:G,S=d.findIndex(oe=>oe.id===a),L=i==="up"?S-1:S+1;if(L<0||L>=d.length||q(d[L]))return;const C=d[S],z=d[L];d[S]=z,d[L]=C;const de=C.sort_order??(S+1)*10,X=z.sort_order??(L+1)*10;C.sort_order=X,z.sort_order=de,await cn([{id:C.id,sort_order:X},{id:z.id,sort_order:de}]),pe(),v()})}),t.querySelectorAll(".mcm-sync-toggle").forEach(s=>{s.addEventListener("click",()=>{const a=parseInt(s.dataset.colid),i=[...T,...G].find(L=>L.id===a);if(!i)return;const d=!i.auto_attendance_sync,S=async()=>{try{await mn(a,d),i.auto_attendance_sync=d,g(d?"เปิดใช้งานแล้ว — คะแนนจะดึงจากเช็คชื่อให้อัตโนมัติทุกครั้งที่เปิดหน้านี้ ✅":"ปิดใช้งานแล้ว","success"),v()}catch{g("บันทึกไม่สำเร็จ","error")}};d?l(`เปิดใช้งานดึงคะแนนจากเช็คชื่ออัตโนมัติให้คอลัมน์ <span class="font-semibold">"${i.assignment_name}"</span>?<br/><span class="text-xs text-gray-500">ระบบจะคำนวณ %มาเรียนใส่ให้ทุกครั้งที่เปิดหน้าบันทึกคะแนน — คนที่เคยแก้คะแนนด้วยมือไว้ก่อนจะไม่ถูกทับ</span>`,S):S()})}),t.querySelectorAll(".mcm-del").forEach(s=>{s.addEventListener("click",()=>{const a=parseInt(s.dataset.colid),i=[...T,...G].find(S=>S.id===a),d=yt.has(a);if(q(a)&&!d){g("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถลบได้","warning");return}l(d?`คอลัมน์นี้เป็น <span class="font-semibold">คอลัมน์ซ้ำ</span> ของ "${(i==null?void 0:i.assignment_name)||""}" (เกิดจากระบบสร้างคอลัมน์ซ้ำผิดพลาด)<br/><span class="text-xs text-gray-500">คะแนนของคอลัมน์นี้เป็นค่าที่ระบบเติมอัตโนมัติ ลบได้อย่างปลอดภัย — ระบบจะเติมคะแนนกลับให้ถูกต้องในคอลัมน์ที่เหลือของรอบถัดไป</span>`:`ต้องการลบ <span class="font-semibold">"${(i==null?void 0:i.assignment_name)||"คอลัมน์นี้"}"</span> ใช่ไหม?<br/><span class="text-xs text-red-500">คะแนนทั้งหมดของคอลัมน์นี้จะถูกลบด้วย</span>`,async()=>{var S,L;try{await Pe(a);const C=T.findIndex(X=>X.id===a),z=G.findIndex(X=>X.id===a);C!==-1&&T.splice(C,1),z!==-1&&G.splice(z,1),g("ลบคอลัมน์แล้ว ✅","success"),pe();const de=t.querySelector(".overflow-auto");de&&((L=(S=de.querySelector(".space-y-1\\.5"))==null?void 0:S.remove)==null||L.call(S),t.querySelectorAll(".mcm-col-list").forEach((X,oe)=>{const ve=oe===0?T:G;X.innerHTML=ve.map(we=>n(we,ve)).join("")}),$())}catch{g("ลบไม่สำเร็จ","error")}})})});const o=()=>{const s=[...t.querySelectorAll(".mcm-cb:checked")],a=t.querySelector("#mcm-bulk-bar");if(a){a.classList.toggle("hidden",s.length===0);const i=a.querySelector("#mcm-bulk-count");i&&(i.textContent=`เลือก ${s.length} รายการ`)}};t.querySelectorAll(".mcm-cb").forEach(s=>s.addEventListener("change",o)),(m=t.querySelector("#mcm-bulk-del"))==null||m.addEventListener("click",()=>{const s=[...t.querySelectorAll(".mcm-cb:checked")];if(!s.length)return;const a=s.map(i=>{const d=[...T,...G].find(S=>S.id===parseInt(i.dataset.colid));return(d==null?void 0:d.assignment_name)??`ID ${i.dataset.colid}`}).join(", ");l(`ลบ ${s.length} คอลัมน์:<br/><span class="font-semibold text-sm">${a}</span>`,async()=>{try{for(const i of s){const d=parseInt(i.dataset.colid);await Pe(d);const S=T.findIndex(C=>C.id===d),L=G.findIndex(C=>C.id===d);S!==-1&&T.splice(S,1),L!==-1&&G.splice(L,1)}g(`ลบ ${s.length} คอลัมน์แล้ว ✅`,"success"),pe(),t.querySelectorAll(".mcm-col-list").forEach((i,d)=>{i.innerHTML=(d===0?T:G).map(n).join("")}),$()}catch{g("ลบไม่สำเร็จ","error")}})})};$();const y=()=>{t.querySelectorAll(".mcm-bonus-name").forEach(o=>{o.addEventListener("blur",async()=>{const m=parseInt(o.dataset.bonusid),s=o.value.trim();if(s)try{await Ie(m,{assignment_name:s});const a=Y.find(i=>i.id===m);a&&(a.assignment_name=s),pe()}catch{g("บันทึกไม่สำเร็จ","error")}}),o.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),o.blur())})}),t.querySelectorAll(".mcm-bonus-del").forEach(o=>{o.addEventListener("click",()=>{const m=parseInt(o.dataset.colid),s=Y.find(a=>a.id===m);l(`ลบคอลัมน์พิเศษ <span class="font-semibold">"${(s==null?void 0:s.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย</span>`,async()=>{try{await Pe(m);const a=Y.findIndex(d=>d.id===m);a!==-1&&Y.splice(a,1),g("ลบคอลัมน์พิเศษแล้ว ✅","success"),pe();const i=t.querySelector("#mcm-bonus-list");i&&(i.innerHTML=Y.map(c).join(""),y())}catch{g("ลบไม่สำเร็จ","error")}})})})};y();const e=()=>{t.querySelectorAll(".mcm-override-del").forEach(o=>{o.addEventListener("click",()=>{const m=parseInt(o.dataset.colid),s=te.find(a=>a.id===m);l(`ลบคอลัมน์ปรับคะแนน <span class="font-semibold">"${(s==null?void 0:s.assignment_name)||"คอลัมน์นี้"}"</span>?<br/><span class="text-xs text-red-500">คะแนนที่บันทึกไว้จะถูกลบด้วย (คะแนนในคอลัมน์หลักที่เคยปรับไปแล้วจะไม่ถูกย้อนกลับ)</span>`,async()=>{try{await Pe(m);const a=te.findIndex(d=>d.id===m);a!==-1&&te.splice(a,1),g("ลบคอลัมน์ปรับคะแนนแล้ว ✅","success"),pe();const i=t.querySelector("#mcm-override-list");i&&(i.innerHTML=te.map(x).join(""),e())}catch{g("ลบไม่สำเร็จ","error")}})})})};e(),(w=t.querySelector("#mcm-add-override"))==null||w.addEventListener("click",()=>{var s;(s=document.getElementById("quick-add-override-mcm"))==null||s.remove();const o=Ke,m=document.createElement("div");m.id="quick-add-override-mcm",m.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",m.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-teal-700">🔄 เพิ่มคอลัมน์ปรับคะแนน</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qom-name" type="text" placeholder="เช่น คะแนนสอบปรับ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-200"/>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">เชื่อมกับคอลัมน์หลัก <span class="text-red-400">*</span></label>
              <select id="qom-link" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-200">
                <option value="">— เลือกคอลัมน์ —</option>
                ${o.map(a=>`<option value="${a.id}">${J(a.assignment_name)} (${J(a.assignment_type??"—")} · เต็ม ${a.max_score??"—"})</option>`).join("")}
              </select>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">วิธีปรับคะแนน</label>
              <select id="qom-mode" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-200">
                <option value="max">ใช้คะแนนที่มากกว่า (เขียนทับเฉพาะตอนคะแนนใหม่สูงกว่า)</option>
                <option value="add">บวกเพิ่มจากคะแนนตั้งต้น (คะแนนใหม่ = คะแนนตั้งต้น + คอลัมน์นี้เสมอ)</option>
              </select>
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qom-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qom-save" class="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`,document.body.appendChild(m),m.querySelector("#qom-cancel").addEventListener("click",()=>m.remove()),m.querySelector("#qom-name").focus(),m.querySelector("#qom-save").addEventListener("click",async()=>{const a=m.querySelector("#qom-name").value.trim(),i=Number(m.querySelector("#qom-link").value)||null,d=m.querySelector("#qom-mode").value==="add"?"add":"max";if(!a){g("กรุณากรอกชื่อคอลัมน์","warning");return}if(!i){g("กรุณาเลือกคอลัมน์ที่จะเชื่อม","warning");return}const S=o.find(C=>C.id===i),L=m.querySelector("#qom-save");L.disabled=!0,L.textContent="⏳";try{await Ce({class_id:b.id,assignment_name:a,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:(S==null?void 0:S.max_score)??null,column_type:"override",link_column_id:i,override_mode:d}),m.remove(),t.remove(),Ee(_,b),g(`เพิ่ม "${a}" แล้ว ✅`,"success")}catch(C){g("เพิ่มไม่สำเร็จ: "+D(C),"error"),L.disabled=!1,L.textContent="เพิ่ม"}})}),(h=t.querySelector("#mcm-add-bonus"))==null||h.addEventListener("click",()=>{var m;(m=document.getElementById("quick-add-bonus-mcm"))==null||m.remove();const o=document.createElement("div");o.id="quick-add-bonus-mcm",o.className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 p-4",o.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-amber-700">⭐ เพิ่มคอลัมน์พิเศษ</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qbm-name" type="text" placeholder="เช่น ส่งการบ้าน, ความตั้งใจ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"/>
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">คะแนนเต็ม <span class="text-gray-400 font-normal">(ไม่บังคับ)</span></label>
              <input id="qbm-max" type="number" min="0" placeholder="ไม่จำกัด"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200"/>
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qbm-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qbm-save" class="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`,document.body.appendChild(o),o.querySelector("#qbm-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#qbm-name").focus(),o.querySelector("#qbm-save").addEventListener("click",async()=>{const s=o.querySelector("#qbm-name").value.trim(),a=o.querySelector("#qbm-max").value?parseFloat(o.querySelector("#qbm-max").value):null;if(!s){g("กรุณากรอกชื่อคอลัมน์","warning");return}const i=o.querySelector("#qbm-save");i.disabled=!0,i.textContent="⏳";try{const d=await Ce({class_id:b.id,assignment_name:s,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:a,column_type:"bonus",formula:null,formula_refs:[]});o.remove(),t.remove(),Ee(_,b),g(`เพิ่ม "${s}" แล้ว ✅`,"success")}catch(d){g("เพิ่มไม่สำเร็จ: "+D(d),"error"),i.disabled=!1,i.textContent="เพิ่ม"}})}),t.querySelectorAll(".mcm-add").forEach(o=>{o.addEventListener("click",()=>{t.remove(),Bt(b,o.dataset.type,()=>Ee(_,b))})}),(I=t.querySelector("#mcm-fill-default"))==null||I.addEventListener("click",async()=>{const o=t.querySelector("#mcm-fill-default");o.disabled=!0,o.textContent="กำลังสร้าง...";try{const m=Math.max(0,5-T.length),s=Math.max(0,5-G.length),a=(i,d)=>Ce({class_id:b.id,assignment_name:`คะแนนที่ ${d}`,max_score:20,assignment_type:i,sheet_column:""});for(let i=1;i<=m;i++)await a("midterm",T.length+i);for(let i=1;i<=s;i++)await a("final",G.length+i);t.remove(),Ee(_,b)}catch{g("สร้างคอลัมน์ไม่สำเร็จ","error"),o.disabled=!1,o.textContent="เติมให้ครบ"}})},Kt=t=>{if(!He)return'<td class="border border-sky-100 text-center text-gray-300 text-[10px]">—</td>';const n=qe[t];return n?'<td class="border border-sky-100 text-center bg-sky-50/40 text-[11px] font-semibold '+n.cls+'" id="gread-'+t+'">'+n.label+"</td>":'<td class="border border-sky-100 text-center text-gray-300 text-[10px]" id="gread-'+t+'">—</td>'},Vt=t=>{const n=new Date(t);return`${n.getDate()}/${n.getMonth()+1} ${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}`},Qt=(t,n,c,x)=>{var e;if((e=document.getElementById("score-hist-popup"))==null||e.remove(),!(x!=null&&x.length))return;let l="",v=0;x.forEach((r,w)=>{v+=r.d,w===0?l+=String(r.d):l+=r.d>=0?` + ${r.d}`:` − ${Math.abs(r.d)}`}),l+=` = ${Math.round(v*1e3)/1e3}`;const $=H.find(r=>r.id===t),y=document.createElement("div");y.id="score-hist-popup",y.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",y.style.background="rgba(0,0,0,0.4)",y.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div class="bg-indigo-50 px-5 py-3 border-b border-indigo-100">
            <p class="font-bold text-indigo-700 text-sm">ประวัติคะแนน — ${J(c)}</p>
            <p class="text-xs text-indigo-400">${J(($==null?void 0:$.full_name)??"")}</p>
          </div>
          <div class="p-4">
            <div class="space-y-1 mb-3 max-h-44 overflow-y-auto">
              ${x.map(r=>`
                <div class="flex justify-between items-center text-xs py-1 border-b border-gray-50">
                  <span class="text-gray-400">${Vt(r.at)}</span>
                  <span class="font-semibold ${r.d>=0?"text-emerald-600":"text-rose-600"}">${r.d>=0?"+":""}${r.d}</span>
                </div>`).join("")}
            </div>
            <div class="bg-indigo-50 rounded-xl px-3 py-2 text-xs font-mono text-indigo-700 text-center">${l}</div>
          </div>
          <div class="px-5 pb-4 flex gap-2">
            <button id="hist-reset" class="flex-1 py-2 rounded-xl border border-rose-200 text-rose-600 text-xs hover:bg-rose-50 transition">รีเซ็ตประวัติ</button>
            <button id="hist-close" class="flex-1 py-2 rounded-xl border border-gray-200 text-gray-500 text-xs hover:bg-gray-50 transition">ปิด</button>
          </div>
        </div>`,document.body.appendChild(y),y.querySelector("#hist-close").addEventListener("click",()=>y.remove()),y.querySelector("#hist-reset").addEventListener("click",async()=>{var w,h,I,o,m;const r=(h=(w=R[t])==null?void 0:w[n])==null?void 0:h.final;if(r==null){y.remove();return}try{const s=await dt(b.id,t,n,r,{});if(s){R[t]||(R[t]={}),R[t][n]={orig:((I=s.history[0])==null?void 0:I.d)??s.final,retake:null,final:s.final,history:s.history};const a=document.getElementById("grade-grid-wrap"),i=a==null?void 0:a.querySelector(`.grade-input[data-sid="${t}"][data-col="${n}"]`);i&&(i.value=s.final!==null?String(s.final):""),(m=(o=i==null?void 0:i.closest("td"))==null?void 0:o.querySelector(".hist-indicator"))==null||m.remove(),g("รีเซ็ตประวัติแล้ว","success"),await _applyOverrideIfNeeded(t,n)}}catch{g("ไม่สำเร็จ","error")}y.remove()}),y.addEventListener("click",r=>{r.target===y&&y.remove()})},Jt=(t,n,c)=>{var $;($=document.getElementById("mass-score-popup"))==null||$.remove();const x=document.createElement("div");x.id="mass-score-popup",x.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-4",x.style.background="rgba(0,0,0,0.4)",x.innerHTML=`
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
          <div class="bg-blue-50 px-5 py-3 border-b border-blue-100">
            <p class="font-bold text-blue-700 text-sm">ตั้งคะแนนทั้งห้อง</p>
            <p class="text-xs text-blue-400">${J(n)}${c?" (เต็ม "+c+")":""}</p>
          </div>
          <div class="p-4 space-y-2">
            <p class="text-xs text-gray-500">ใส่ตัวเลข หรือ +/- สำหรับสะสม</p>
            <input type="text" id="mass-inp" inputmode="decimal" autocomplete="off"
              class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="+5 / 10 / -2"/>
            <p id="mass-preview" class="text-xs text-center text-gray-400 h-4"></p>
          </div>
          <div class="px-5 pb-5 flex gap-2">
            <button id="mass-cancel" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ยกเลิก</button>
            <button id="mass-confirm" class="flex-1 py-2.5 rounded-2xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition">ตั้งค่า</button>
          </div>
        </div>`,document.body.appendChild(x);const l=x.querySelector("#mass-inp"),v=x.querySelector("#mass-preview");l.addEventListener("input",()=>{const y=l.value.trim();if(!y){v.textContent="";return}const e=parseFloat(y);if(isNaN(e)){v.textContent="";return}v.textContent=/^[+-]/.test(y)?`บวก/ลบ ${e>=0?"+":""}${e} ใน ${H.length} คน`:`ตั้งเป็น ${e} ใน ${H.length} คน`}),x.querySelector("#mass-cancel").addEventListener("click",()=>x.remove()),x.querySelector("#mass-confirm").addEventListener("click",async()=>{var I,o,m,s;const y=l.value.trim();if(!y){x.remove();return}const e=x.querySelector("#mass-confirm");e.disabled=!0,e.textContent="⏳";let r=0,w=0,h=0;for(const a of H){const i=((o=(I=R[a.id])==null?void 0:I[t])==null?void 0:o.history)??[];try{const d=await dt(b.id,a.id,t,y,{currentHistory:i,max:c??null});if(d){d.clamped&&h++,R[a.id]||(R[a.id]={}),R[a.id][t]={orig:((m=d.history[0])==null?void 0:m.d)??d.final,retake:null,final:d.final,history:d.history};const S=document.getElementById("grade-grid-wrap"),L=S==null?void 0:S.querySelector(`.grade-input[data-sid="${a.id}"][data-col="${t}"]`);L&&(L.value=d.final!==null?String(d.final):"",L.style.boxShadow="0 0 0 2px #059669",setTimeout(()=>L.style.boxShadow="",700));const C=L==null?void 0:L.closest("td");if(d.history.length>1){if(!(C!=null&&C.querySelector(".hist-indicator"))){const z=document.createElement("span");z.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl",z.textContent="Δ",z.dataset.sid=a.id,z.dataset.col=t,C==null||C.appendChild(z)}}else(s=C==null?void 0:C.querySelector(".hist-indicator"))==null||s.remove();r++,await _applyOverrideIfNeeded(a.id,t)}}catch{w++}}H.forEach(a=>{var ke;const{midRaw:i,finRaw:d,total:S,grade:L,khuna:C}=Le(a.id),z=((ke=R[a.id])==null?void 0:ke.__force)??"",de=document.getElementById(`gmid-${a.id}`),X=document.getElementById(`gfin-${a.id}`);de&&(de.textContent=i>0?xe("mid_subtotal",i,1):"—"),X&&(X.textContent=d>0?xe("fin_subtotal",d,1):"—");const oe=document.getElementById(`gtotal-${a.id}`),ve=document.getElementById(`ggrade-${a.id}`),we=document.getElementById(`gkhuna-${a.id}`);oe&&(oe.textContent=S>0?S:"—"),ve&&(ve.textContent=z||(L>0?L.toFixed(1):"0")),we&&(we.textContent=C.label,we.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${C.cls}`)}),g(`ตั้งคะแนนสำเร็จ ${r}/${H.length} คน${h?" (ปรับ "+h+" คนที่เกินคะแนนเต็มอัตโนมัติ)":""}${w?" (ล้มเหลว "+w+")":""}`,r>0?"success":"error"),x.remove()}),x.addEventListener("click",y=>{y.target===x&&x.remove()}),setTimeout(()=>l.focus(),60)},pe=()=>{var y;const t=Re(T),n=Re(G),c=document.getElementById("grade-grid-wrap");if(!c)return;const x=`
        <tr style="position:sticky;top:0;z-index:31">
          <th class="${bt} bg-gray-100 text-gray-500 text-xs" style="width:28px" rowspan="3">#</th>
          <th class="${De} bg-gray-100 text-gray-500 text-xs" style="left:28px;width:64px" rowspan="3">รหัส</th>
          <th class="${De} bg-gray-100 text-gray-500 text-xs text-left px-2" style="left:92px;min-width:${gt}px" rowspan="3">ชื่อ-นามสกุล</th>
          <th colspan="${T.length+1}" class="${U} bg-blue-600 text-white font-semibold py-1.5">
            📘 กลางภาค${t>0?" (เต็ม "+t+")":""}</th>
          <th colspan="${G.length+1}" class="${U} bg-purple-600 text-white font-semibold py-1.5">
            📙 ปลายภาค${n>0?" (เต็ม "+n+")":""}</th>
          ${le.length?`<th colspan="${le.length}" class="${U} bg-indigo-600 text-white font-semibold py-1.5">🧮 อ้างอิงสูตร</th>`:""}
          ${te.length?`<th colspan="${te.length}" class="${U} bg-teal-600 text-white font-semibold py-1.5">🔄 ปรับคะแนน</th>`:""}
          ${re?`<th colspan="${Y.length+1}" class="${U} bg-amber-500 text-white font-semibold py-1.5">⭐ คะแนนเก็บ/พิเศษ</th>`:""}
          <th class="${U} bg-amber-50 font-semibold text-amber-700 text-xs" style="min-width:58px" rowspan="3">รวม<div class="text-[9px] font-normal text-amber-400">/${t+n+le.reduce((e,r)=>e+(parseFloat(r.max_score)||0),0)||"?"}</div></th>
          <th class="${U} bg-purple-50 font-semibold text-purple-700 text-xs" style="min-width:50px" rowspan="3">เกรด</th>
          ${Fe?`<th class="${U} bg-rose-50 text-rose-600 text-xs" style="min-width:32px;width:32px" rowspan="3"><div class="text-[9px] font-semibold leading-tight">บัง<br/>คับ</div></th>`:""}
          <th class="${U} bg-emerald-50 font-medium text-emerald-700 text-xs" style="min-width:72px" rowspan="3">คุณลักษณะ${Ne?"":'<div class="text-[9px] font-normal text-emerald-300">ปิดอยู่</div>'}</th>
          <th class="${U} bg-sky-50 font-medium text-sky-600 text-xs" style="min-width:82px" rowspan="3">การอ่านฯ<div class="text-[9px] font-normal text-sky-400">${He?"ผลประเมิน":"ปิดอยู่"}</div></th>
        </tr>
        <tr style="position:sticky;top:24px;z-index:30">
          ${T.map(e=>`<th class="${U} bg-blue-50" style="width:${P}px;min-width:${P}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${q(e)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-blue-600 cursor-pointer hover:bg-blue-100"}"
                data-colid="${e.id}" title="${q(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${e.sheet_column||"—"}</span>
              <button class="btn-mass-score text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${J(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${q(e)?"":`<button class="btn-scan-col text-blue-300 hover:text-blue-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${Ae?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${e.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${e.id}" title="${e.bonus_formula?"🔗 = "+e.bonus_formula:"เชื่อมสูตรจากคะแนนพิเศษ"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${U} bg-blue-50" style="width:30px">
            <button class="btn-add-col text-blue-500 hover:bg-blue-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="midterm">＋</button></th>
          ${G.map(e=>`<th class="${U} bg-purple-50" style="width:${P}px;min-width:${P}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="col-sheet-ref font-mono text-[11px] flex-1 text-center rounded px-0.5 py-0.5 ${q(e)?"text-emerald-700 bg-emerald-50 cursor-not-allowed":"text-purple-600 cursor-pointer hover:bg-purple-100"}"
                data-colid="${e.id}" title="${q(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อเลือกคอลัมน์ Sheet"}">${e.sheet_column||"—"}</span>
              <button class="btn-mass-score text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${J(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${q(e)?"":`<button class="btn-scan-col text-purple-300 hover:text-purple-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
              ${Ae?`<button class="btn-formula-link text-[10px] leading-none flex-shrink-0 ${e.bonus_formula?"text-violet-500":"text-gray-300 hover:text-violet-400"}" data-colid="${e.id}" title="${e.bonus_formula?"🔗 = "+e.bonus_formula:"เชื่อมสูตรจากคะแนนพิเศษ"}">🔗</button>`:""}
            </div>
          </th>`).join("")}
          <th class="${U} bg-purple-50" style="width:30px">
            <button class="btn-add-col text-purple-500 hover:bg-purple-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="final">＋</button></th>
          ${le.map(e=>`<th class="${U} bg-indigo-50" style="width:${P}px;min-width:${P}px">
            <span class="text-[10px] text-indigo-400 font-mono block text-center truncate" title="${e.formula??""}">${e.formula??"—"}</span>
          </th>`).join("")}
          ${te.map(e=>{var r;return`<th class="${U} bg-teal-50" style="width:${P}px;min-width:${P}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[10px] text-teal-500 flex-1 text-center truncate" title="เชื่อมกับ: ${J(((r=he[e.link_column_id])==null?void 0:r.assignment_name)??"ยังไม่ได้เชื่อม")}">🔗</span>
              <button class="btn-mass-score text-teal-300 hover:text-teal-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${J(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
            </div>
          </th>`}).join("")}
          ${re?Y.map(e=>`<th class="${U} bg-amber-50" style="width:${P}px;min-width:${P}px">
            <div class="flex items-center justify-between gap-0.5 px-0.5">
              <span class="text-[11px] text-amber-500 flex-1 text-center">${e.sheet_column||"—"}</span>
              <button class="btn-mass-score text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" data-colname="${J(e.assignment_name)}" data-max="${e.max_score??""}" title="ตั้งคะแนนทั้งห้อง">🌐</button>
              ${q(e)?"":`<button class="btn-scan-col text-amber-300 hover:text-amber-600 text-[10px] leading-none flex-shrink-0" data-colid="${e.id}" title="สแกน QR บันทึกคะแนนคอลัมน์นี้">📷</button>`}
            </div>
          </th>`).join(""):""}
          ${re?`<th class="${U} bg-amber-50" style="width:30px">
            <button class="btn-add-bonus text-amber-500 hover:bg-amber-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block">＋</button></th>`:""}
        </tr>
        <tr style="position:sticky;top:48px;z-index:30">
          ${T.map(e=>`<th class="${U} bg-blue-50" style="width:${P}px;min-width:${P}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${q(e)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-blue-50"}"
              contenteditable="${q(e)?"false":"true"}" data-colid="${e.id}" data-field="assignment_name" title="${q(e)?ie(e):""}">${e.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${q(e)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-blue-500 hover:underline"}"
              data-colid="${e.id}" title="${q(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${e.max_score||0}</span></span>
            ${e.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${U} bg-blue-50" style="width:30px"></th>
          ${G.map(e=>`<th class="${U} bg-purple-50" style="width:${P}px;min-width:${P}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${q(e)?"text-emerald-800 cursor-not-allowed":"text-gray-700 cursor-text hover:bg-purple-50"}"
              contenteditable="${q(e)?"false":"true"}" data-colid="${e.id}" data-field="assignment_name" title="${q(e)?ie(e):""}">${e.assignment_name||"—"}</span>
            <span class="col-max text-[10px] select-none ${q(e)?"text-emerald-700 cursor-not-allowed":"text-gray-400 cursor-pointer hover:text-purple-500 hover:underline"}"
              data-colid="${e.id}" title="${q(e)?"คะแนนระบบกลาง: แก้ไขไม่ได้":"คลิกเพื่อแก้คะแนนเต็ม"}">/<span class="font-medium">${e.max_score||0}</span></span>
            ${e.assignment_name==="คะแนนละหมาด"?'<span class="block text-[8px] text-teal-500 leading-tight mt-0.5 whitespace-nowrap overflow-hidden" title="คะแนนนี้มาจากการบันทึกของครูที่ปรึกษาศาสนา ถ้าคะแนนว่าง แสดงว่าครูยังไม่ได้บันทึก">📋 ครูที่ปรึกษาศาสนา</span>':""}</th>`).join("")}
          <th class="${U} bg-purple-50" style="width:30px"></th>
          ${le.map(e=>`<th class="${U} bg-indigo-50" style="width:${P}px;min-width:${P}px">
            <span class="text-[11px] text-indigo-700 font-medium block text-center truncate">${e.assignment_name}</span>
            <span class="text-[10px] text-indigo-400">/${e.max_score??"?"}</span>
          </th>`).join("")}
          ${te.map(e=>`<th class="${U} bg-teal-50" style="width:${P}px;min-width:${P}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-teal-700 cursor-text hover:bg-teal-100"
              contenteditable="true" data-colid="${e.id}" data-field="assignment_name">${e.assignment_name||"—"}</span>
            <span class="text-[10px] text-teal-400">/${e.max_score??"?"}</span>
          </th>`).join("")}
          ${re?Y.map(e=>`<th class="${U} bg-amber-50" style="width:${P}px;min-width:${P}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate text-amber-700 cursor-text hover:bg-amber-100"
              contenteditable="true" data-colid="${e.id}" data-field="assignment_name">${e.assignment_name||"—"}</span>
            <span class="text-[10px] text-amber-400">${e.max_score?"/"+e.max_score:"(ไม่จำกัด)"}</span>
          </th>`).join(""):""}
          ${re?`<th class="${U} bg-amber-50" style="width:30px"></th>`:""}
        </tr>`,l=H.map((e,r)=>{var i;const{midRaw:w,finRaw:h,total:I,grade:o,khuna:m}=Le(e.id),s=((i=R[e.id])==null?void 0:i.__force)??"",a=s||(o>0?o.toFixed(1):"0");return`<tr class="hover:bg-gray-50 transition" data-sid="${e.id}">
          <td class="${bt} text-center text-gray-400" style="width:28px">${r+1}</td>
          <td class="${De} text-center font-mono text-gray-600" style="left:28px;width:64px">${e.student_code}</td>
          <td class="${De} px-2 student-name-cell cursor-pointer hover:bg-indigo-50" style="left:92px;min-width:${gt}px" data-idx="${r}">
            <div class="flex items-center gap-1.5 py-1">
              ${e.image_url?`<img src="${e.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
              <span class="text-gray-800 text-xs truncate max-w-[100px]">${e.full_name}</span>
            </div>
          </td>
          ${T.map(d=>{const S=_e(e.id,d.id)??"",L=Xe(e.id,d.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${P}px;min-width:${P}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs ${q(d)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${Me(d.id,S)}" placeholder="—"
              data-sid="${e.id}" data-col="${d.id}" data-max="${d.max_score}" ${q(d)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${L?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${d.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gmid-${e.id}" class="border border-gray-50 bg-blue-50/40 text-center text-[10px] text-blue-600 font-medium" style="width:34px">${w>0?xe("mid_subtotal",w,1):"—"}</td>
          ${G.map(d=>{const S=_e(e.id,d.id)??"",L=Xe(e.id,d.id);return`<td class="border border-gray-100 text-center p-0 relative"
            style="width:${P}px;min-width:${P}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs ${q(d)?"bg-emerald-50/60 text-emerald-800 cursor-not-allowed":"bg-transparent focus:bg-purple-50 focus:outline-none focus:ring-1 focus:ring-purple-300 focus:rounded"}"
              type="text" inputmode="decimal" value="${Me(d.id,S)}" placeholder="—"
              data-sid="${e.id}" data-col="${d.id}" data-max="${d.max_score}" ${q(d)?'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"':""}/>
            ${L?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${d.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          <td id="gfin-${e.id}" class="border border-gray-50 bg-purple-50/40 text-center text-[10px] text-purple-600 font-medium" style="width:34px">${h>0?xe("fin_subtotal",h,1):"—"}</td>
          ${le.map(d=>{const S=pt(d,e.id),L=S!==null&&S!==0?xe(`derived_${d.id}`,S,2):"—";return`<td class="border border-indigo-100 bg-indigo-50/40 text-center text-xs text-indigo-700 font-medium grade-derived-td" style="width:${P}px;min-width:${P}px;height:30px" title="คำนวณจาก: ${d.formula??""}">${L}</td>`}).join("")}
          ${te.map(d=>{const S=_e(e.id,d.id)??"",L=Xe(e.id,d.id);return`<td class="border border-teal-100 text-center p-0 relative" style="width:${P}px;min-width:${P}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-teal-50 focus:outline-none focus:ring-1 focus:ring-teal-300 focus:rounded"
              type="text" inputmode="decimal" value="${Me(d.id,S)}" placeholder="—"
              data-sid="${e.id}" data-col="${d.id}" data-max="${d.max_score??9999}"/>
            ${L?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${d.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join("")}
          ${re?Y.map(d=>{const S=_e(e.id,d.id)??"",L=Xe(e.id,d.id);return`<td class="border border-amber-100 text-center p-0 relative" style="width:${P}px;min-width:${P}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs bg-transparent focus:bg-amber-50 focus:outline-none focus:ring-1 focus:ring-amber-300 focus:rounded"
              type="text" inputmode="decimal" value="${Me(d.id,S)}" placeholder="—"
              data-sid="${e.id}" data-col="${d.id}" data-max="${d.max_score??9999}"/>
            ${L?`<span class="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none" data-sid="${e.id}" data-col="${d.id}" title="ดูประวัติคะแนน">Δ</span>`:""}
            </td>`}).join(""):""}
          ${re?'<td class="border border-amber-50 bg-amber-50/30" style="width:30px;height:30px"></td>':""}
          <td class="border border-amber-100 text-center bg-amber-50 font-bold text-amber-700" id="gtotal-${e.id}" style="min-width:58px">${I>0?I:"—"}</td>
          <td class="border border-purple-100 text-center bg-purple-50 font-bold text-purple-700" id="ggrade-${e.id}" style="min-width:50px">${a}</td>
          ${Fe?`<td class="border border-rose-100 text-center bg-rose-50 cursor-pointer hover:bg-rose-100 transition force-cell" style="min-width:32px;height:30px" data-sid="${e.id}">
            <span class="text-xs font-bold ${s?"text-rose-600":"text-rose-200"}">${s||"+"}</span></td>`:""}
          <td class="border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${Ne?m.cls:"text-gray-300"}" id="gkhuna-${e.id}">${Ne?m.label:"—"}</td>
          ${Kt(e.id)}
        </tr>`}).join("");c.innerHTML=`<table class="border-collapse text-xs" style="min-width:max-content">
        <thead>${x}</thead><tbody>${l}</tbody></table>`;const v=c.querySelector("table"),$=async(e,r)=>{var we,ke,Oe,tt,be;const w=he[r];if(!w||w.column_type!=="override"||!w.link_column_id)return;const h=(ke=(we=R[e])==null?void 0:we[r])==null?void 0:ke.final;if(h==null)return;const I=w.link_column_id,o=(Oe=he[I])==null?void 0:Oe.max_score,m=await un({studentId:e,mainColumnId:I,overrideValue:h,overrideMode:w.override_mode,mainMaxScore:typeof o=="number"?o:null});if(!m.applied)return;R[e][I]={orig:((tt=m.history[0])==null?void 0:tt.d)??m.score,retake:null,final:m.score,history:m.history};const s=c.querySelector(`.grade-input[data-sid="${e}"][data-col="${I}"]`);s&&(s.value=m.score!==null?String(Me(I,m.score)):"",s.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",s.style.background="#f0fdf4",setTimeout(()=>{s.style.boxShadow="",s.style.background=""},900));const{midRaw:a,finRaw:i,total:d,grade:S,khuna:L}=Le(e),C=((be=R[e])==null?void 0:be.__force)??"",z=document.getElementById(`gmid-${e}`),de=document.getElementById(`gfin-${e}`);z&&(z.textContent=a>0?xe("mid_subtotal",a,1):"—"),de&&(de.textContent=i>0?xe("fin_subtotal",i,1):"—");const X=document.getElementById(`gtotal-${e}`),oe=document.getElementById(`ggrade-${e}`),ve=document.getElementById(`gkhuna-${e}`);X&&(X.textContent=d>0?d:"—"),oe&&(oe.textContent=C||(S>0?S.toFixed(1):"0")),ve&&(ve.textContent=L.label,ve.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${L.cls}`),g(`ปรับคะแนนอัตโนมัติ → ${m.score} (จากคอลัมน์ปรับคะแนน) ✅`,"success")};v.addEventListener("focusin",e=>{const r=e.target.closest(".grade-input");if(!r)return;const w=_e(Number(r.dataset.sid),Number(r.dataset.col));r.value=w==null?"":String(w)}),v.addEventListener("focusout",e=>{const r=e.target.closest(".grade-input");r&&(r.value=Me(r.dataset.col,r.value))}),v.addEventListener("change",async e=>{var h,I,o,m,s,a,i,d,S,L;const r=e.target.closest(".grade-input"),w=e.target.closest(".force-input");if(r){const C=parseInt(r.dataset.sid),z=parseInt(r.dataset.col),de=parseFloat(r.dataset.max);if(q(z)){g("คะแนนนี้มาจากระบบกลาง ครูไม่สามารถแก้ไขได้","warning"),r.value=((I=(h=R[C])==null?void 0:h[z])==null?void 0:I.final)??"";return}let X=r.value.trim();const oe=_e(C,z);if(X===""&&oe==null||X!==""&&oe!=null&&Number(X)===Number(oe))return;const ve=((m=(o=R[C])==null?void 0:o[z])==null?void 0:m.history)??[];R[C]||(R[C]={}),r.style.outline="2px solid #6366f1",r.style.outlineOffset="1px",(s=document.getElementById("grade-saving"))==null||s.classList.remove("hidden");try{const we=await dt(b.id,C,z,X===""?null:X,{currentHistory:ve,max:isNaN(de)?null:de});if(!we){r.value=((a=R[C][z])==null?void 0:a.final)??"";return}const{final:ke,history:Oe,clamped:tt}=we;R[C][z]={orig:((i=Oe[0])==null?void 0:i.d)??ke,retake:null,final:ke,history:Oe},r.value=Me(z,ke),r.title="",tt&&g(`คะแนนเกินคะแนนเต็ม ปรับให้เป็น ${ke} อัตโนมัติ`,"warning");const be=r.closest("td");if(Oe.length>1){if(!(be!=null&&be.querySelector(".hist-indicator"))){const ze=document.createElement("span");ze.className="hist-indicator absolute top-0 right-0 text-[7px] text-indigo-400 leading-none cursor-pointer px-0.5 bg-white/80 rounded-bl select-none",ze.textContent="Δ",ze.dataset.sid=C,ze.dataset.col=z,ze.title="ดูประวัติคะแนน",be==null||be.appendChild(ze)}}else(d=be==null?void 0:be.querySelector(".hist-indicator"))==null||d.remove();r.style.outline="",r.style.boxShadow="0 0 0 2px #059669,0 0 10px rgba(5,150,105,.45)",r.style.background="#f0fdf4",setTimeout(()=>{r.style.boxShadow="",r.style.background=""},900);const{midRaw:vt,finRaw:wt,total:$t,grade:_t,khuna:kt}=Le(C),Yt=((S=R[C])==null?void 0:S.__force)??"",Et=document.getElementById(`gmid-${C}`),St=document.getElementById(`gfin-${C}`);Et&&(Et.textContent=vt>0?xe("mid_subtotal",vt,1):"—"),St&&(St.textContent=wt>0?xe("fin_subtotal",wt,1):"—");const qt=document.getElementById(`gtotal-${C}`),Ct=document.getElementById(`ggrade-${C}`),lt=document.getElementById(`gkhuna-${C}`);qt&&(qt.textContent=$t>0?$t:"—"),Ct&&(Ct.textContent=Yt||(_t>0?_t.toFixed(1):"0")),lt&&(lt.textContent=kt.label,lt.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${kt.cls}`),await $(C,z)}catch{g("บันทึกไม่สำเร็จ","error")}finally{(L=document.getElementById("grade-saving"))==null||L.classList.add("hidden")}}}),v.addEventListener("input",e=>{var a,i;const r=e.target.closest(".grade-input");if(!r)return;const w=r.value.trim();if(!/^[+-]/.test(w)){r.title="";return}const h=parseInt(r.dataset.sid),I=parseInt(r.dataset.col),o=((i=(a=R[h])==null?void 0:a[I])==null?void 0:i.final)??0,m=parseFloat(w);if(isNaN(m)){r.title="";return}const s=Math.round((o+m)*1e3)/1e3;r.title=`${o} ${m>=0?"+":"−"} ${Math.abs(m)} = ${s}`}),v.addEventListener("click",e=>{var I,o;const r=e.target.closest(".hist-indicator");if(r){const m=parseInt(r.dataset.sid),s=parseInt(r.dataset.col),a=((o=(I=R[m])==null?void 0:I[s])==null?void 0:o.history)??[],i=[...T,...G,...Y].find(d=>d.id===s);Qt(m,s,(i==null?void 0:i.assignment_name)??"",a);return}const w=e.target.closest(".btn-mass-score");if(w){Jt(parseInt(w.dataset.colid),w.dataset.colname,w.dataset.max?parseFloat(w.dataset.max):null);return}const h=e.target.closest(".btn-scan-col");if(h){Nt({classId:b.id,className:b.class_name,initialColumnId:parseInt(h.dataset.colid)});return}}),v.addEventListener("click",e=>{var m,s;const r=e.target.closest(".force-cell");if(!r)return;const w=parseInt(r.dataset.sid);(m=document.getElementById("force-grade-popup"))==null||m.remove();const h=((s=R[w])==null?void 0:s.__force)??"",I=document.createElement("div");I.id="force-grade-popup",I.className="fixed inset-0 z-[400] flex items-end sm:items-center justify-center p-4",I.style.background="rgba(0,0,0,0.4)";const o=H.find(a=>a.id===w);I.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
            <div class="bg-rose-50 px-5 py-3 border-b border-rose-100">
              <p class="font-bold text-rose-700 text-sm">บังคับเกรด</p>
              <p class="text-xs text-rose-400">${(o==null?void 0:o.full_name)??""}</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-4 gap-2 mb-3">
                ${Ht.map(a=>`
                  <button class="force-pick py-2.5 rounded-xl text-sm font-bold border transition
                    ${a===h?"bg-rose-500 text-white border-rose-500":"bg-white text-rose-600 border-rose-200 hover:bg-rose-50"}"
                    data-grade="${a}">${a}</button>`).join("")}
                <button class="force-pick py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-400 hover:bg-gray-50 col-span-4"
                  data-grade="">ล้างค่า (ใช้เกรดปกติ)</button>
              </div>
            </div>
          </div>`,document.body.appendChild(I),I.addEventListener("click",async a=>{const i=a.target.closest(".force-pick");if(!i&&a.target===I){I.remove();return}if(!i)return;const d=i.dataset.grade;i.disabled=!0;try{await xn(o==null?void 0:o.enrollment_id,d)}catch(z){g("บันทึกบังคับเกรดไม่สำเร็จ: "+D(z),"error"),i.disabled=!1;return}R[w]||(R[w]={}),R[w].__force=d,o&&(o.special_result=d||null);const{grade:S}=Le(w),L=document.getElementById(`ggrade-${w}`);L&&(L.textContent=d||(S>0?S.toFixed(1):"0"));const C=r.querySelector("span");C&&(C.textContent=d||"+",C.className=`text-xs font-bold ${d?"text-rose-600":"text-rose-200"}`),I.remove()})}),v.addEventListener("keydown",e=>{var L,C;const r=e.target.closest(".grade-input");if(!r||!["Tab","Enter","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key))return;e.preventDefault();const h=[...c.querySelectorAll(".grade-input")],I=[...new Set(h.map(z=>z.dataset.sid))],m=[...new Set(h.map(z=>z.dataset.col))].length,s=h.indexOf(r),a=Math.floor(s/m),i=s%m;let d=a,S=i;switch(e.key){case"Enter":case"ArrowDown":d=a<I.length-1?a+1:a;break;case"ArrowUp":d=a>0?a-1:0;break;case"Tab":(L=h[s+(e.shiftKey?-1:1)])==null||L.focus();return;case"ArrowRight":S=i<m-1?i+1:i;break;case"ArrowLeft":S=i>0?i-1:0;break}(C=h[d*m+S])==null||C.focus()}),c.querySelectorAll(".col-edit").forEach(e=>{e.addEventListener("blur",async()=>{const r=parseInt(e.dataset.colid),w=e.textContent.trim();if(!q(r))try{await Ie(r,{assignment_name:w||null});const h=[...T,...G,...Y].find(I=>I.id===r);h&&(h.assignment_name=w)}catch{g("บันทึกไม่สำเร็จ","error")}}),e.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),e.blur())})}),c.querySelectorAll(".col-sheet-ref").forEach(e=>{e.addEventListener("click",()=>{const r=parseInt(e.dataset.colid);if(q(r)){g("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้","warning");return}Gt(e,r)})}),c.querySelectorAll(".col-max").forEach(e=>{e.addEventListener("click",()=>{const r=parseInt(e.dataset.colid);if(q(r)){g("คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้","warning");return}Ot(e,r)})}),c.querySelectorAll(".btn-add-col").forEach(e=>{e.addEventListener("click",()=>Bt(b,e.dataset.type,()=>Ee(_,b)))}),(y=c.querySelector(".btn-add-bonus"))==null||y.addEventListener("click",()=>{var w;(w=document.getElementById("quick-add-bonus"))==null||w.remove();const e=document.createElement("div");e.id="quick-add-bonus",e.className="fixed inset-0 z-[600] flex items-center justify-center bg-black/40 p-4",e.innerHTML=`
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 space-y-3">
            <h3 class="font-bold text-amber-700">⭐ เพิ่มคอลัมน์พิเศษ</h3>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">ชื่อคอลัมน์ <span class="text-red-400">*</span></label>
              <input id="qb-name" type="text" placeholder="เช่น ส่งการบ้าน, ความตั้งใจ"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div>
              <label class="text-xs font-medium text-gray-600 mb-1 block">คะแนนเต็ม <span class="text-gray-400 font-normal">(ไม่บังคับ)</span></label>
              <input id="qb-max" type="number" min="0" placeholder="ไม่จำกัด"
                class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
            </div>
            <div class="flex gap-3 pt-1">
              <button id="qb-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="qb-add" class="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold">เพิ่ม</button>
            </div>
          </div>`,document.body.appendChild(e),e.querySelector("#qb-cancel").addEventListener("click",()=>e.remove()),e.addEventListener("click",h=>{h.target===e&&e.remove()});const r=e.querySelector("#qb-name");r.focus(),e.querySelector("#qb-add").addEventListener("click",async()=>{const h=r.value.trim(),I=e.querySelector("#qb-max").value?parseFloat(e.querySelector("#qb-max").value):null;if(!h){g("กรุณากรอกชื่อคอลัมน์","warning");return}const o=e.querySelector("#qb-add");o.disabled=!0,o.textContent="⏳";try{await Ce({class_id:b.id,assignment_name:h,assignment_type:"คะแนนพิเศษ",sheet_column:"",max_score:I,column_type:"bonus",formula:null,formula_refs:[]}),g(`เพิ่ม "${h}" แล้ว ✅`,"success"),e.remove(),Ee(_,b)}catch(m){g("เพิ่มไม่สำเร็จ: "+D(m),"error"),o.disabled=!1,o.textContent="เพิ่ม"}})}),c.querySelectorAll(".btn-formula-link").forEach(e=>{e.addEventListener("click",()=>{const r=parseInt(e.dataset.colid),w=[...T,...G].find(h=>h.id===r);w&&Pt(w)})}),c.querySelectorAll(".student-name-cell").forEach(e=>{e.addEventListener("click",()=>{const r=H[parseInt(e.dataset.idx)];zt(r,R[r.id]??{},Le(r.id))})})};Ue(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0">
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800">📝 บันทึกคะแนน</h2>
          <p class="text-xs text-gray-400">${(B==null?void 0:B.subject_name)??"—"} · ${b.class_name} · ${H.length} คน</p>
        </div>
        <div id="grade-saving" class="hidden bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
        <button id="btn-scan-score" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-sky-200 text-sm text-sky-600 hover:bg-sky-50 transition flex-shrink-0">
          📷 <span class="hidden sm:inline text-xs">สแกนคะแนน</span>
        </button>
        <button id="btn-copy-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-indigo-200 text-sm text-indigo-600 hover:bg-indigo-50 transition flex-shrink-0">
          📋 <span class="hidden sm:inline text-xs">สำเนาคอลัมน์</span>
        </button>
        <button id="btn-manage-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          ⚙️ <span class="hidden sm:inline text-xs">จัดการคอลัมน์</span>
        </button>
        <button id="btn-hide-scores" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          👁 <span class="hidden sm:inline text-xs">ซ่อนคะแนน</span>
        </button>
      </div>
      <div id="grade-togglebar" class="flex border-b border-gray-100 bg-white flex-shrink-0 overflow-x-auto min-h-[42px]"></div>
      <div class="flex-1 overflow-auto" id="grade-grid-wrap"></div>
    </div>`),(N=document.getElementById("btn-manage-cols"))==null||N.addEventListener("click",Ut),(F=document.getElementById("btn-copy-cols"))==null||F.addEventListener("click",()=>jn(b,p)),(A=document.getElementById("btn-scan-score"))==null||A.addEventListener("click",()=>{Nt({classId:b.id,className:b.class_name})});let at=!1,Ge=null;(j=document.getElementById("btn-hide-scores"))==null||j.addEventListener("click",function(){at=!at;const t=document.getElementById("grade-grid-wrap");t&&(at?(Ge=[],t.querySelectorAll(".grade-input").forEach(n=>{Ge.push({el:n,type:"input",val:n.value}),n.value=""}),t.querySelectorAll('[id^="gmid-"],[id^="gfin-"],[id^="gtotal-"],[id^="ggrade-"],[id^="gkhuna-"],[id^="gread-"],.grade-derived-td').forEach(n=>{Ge.push({el:n,type:"text",val:n.innerHTML}),n.innerHTML="—"}),window._pp5HideScores=!0,this.innerHTML='👁 <span class="hidden sm:inline text-xs">แสดงคะแนน</span>',this.classList.add("bg-amber-50","border-amber-300","text-amber-700"),this.classList.remove("text-gray-500","border-gray-200")):(window._pp5HideScores=!1,Ge&&(Ge.forEach(({el:n,type:c,val:x})=>{c==="input"?n.value=x:n.innerHTML=x}),Ge=null),this.innerHTML='👁 <span class="hidden sm:inline text-xs">ซ่อนคะแนน</span>',this.classList.remove("bg-amber-50","border-amber-300","text-amber-700"),this.classList.add("text-gray-500","border-gray-200")))}),et(),pe();let ht=null;Je=_n(t=>{!ee.some(c=>Number(c.id)===Number(t.columnId))&&Number(t.classId)!==Number(K)||document.getElementById("grade-grid-wrap")&&(clearTimeout(ht),ht=setTimeout(()=>Ee(_,b),120))})}catch(K){g("โหลดข้อมูลไม่สำเร็จ: "+D(K),"error")}}async function jn(_,b){var F;g("กำลังโหลด...","info");const B=(await Promise.all((b??[]).filter(A=>A.id!==_.id).map(async A=>{const j=await ge(A.id).catch(()=>[]);return j.length?{...A,cols:j}:null}))).filter(Boolean);if(!B.length){g("ไม่พบห้องอื่นที่มีคอลัมน์คะแนน","info");return}(F=document.getElementById("copy-cols-popup"))==null||F.remove();const N=document.createElement("div");N.id="copy-cols-popup",N.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-6",N.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-5 text-center">
        <div class="text-3xl mb-2">📋</div>
        <h3 class="text-white font-bold text-base">สำเนาคอลัมน์คะแนน</h3>
        <p class="text-indigo-100 text-xs mt-1">เลือกห้องที่ต้องการคัดลอกคอลัมน์จาก</p>
      </div>
      <div class="p-5 space-y-2 max-h-72 overflow-y-auto">
        ${B.map(A=>{var j;return`
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
          <div class="min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${A.class_name}</p>
            <p class="text-xs text-gray-400">${((j=A.master_subjects)==null?void 0:j.subject_name)??""} · ${A.cols.length} คอลัมน์</p>
          </div>
          <button class="ccp-btn flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition"
            data-src="${A.id}">คัดลอก</button>
        </div>`}).join("")}
      </div>
      <div class="px-5 pb-5">
        <button id="ccp-close" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">ปิด</button>
      </div>
    </div>`,document.body.appendChild(N),N.querySelector("#ccp-close").addEventListener("click",()=>N.remove()),N.querySelectorAll(".ccp-btn").forEach(A=>{A.addEventListener("click",async()=>{var V;const j=B.find(H=>H.id===parseInt(A.dataset.src));(V=document.getElementById("ccp-confirm"))==null||V.remove();const K=document.createElement("div");K.id="ccp-confirm",K.className="fixed inset-0 z-[300] flex items-center justify-center p-6",K.style.background="rgba(0,0,0,0.5)",K.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">📋</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการ Mirror</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">
          คอลัมน์ของห้องนี้จะถูกทำให้เหมือน<br/>
          <span class="font-semibold text-indigo-700">${j.class_name}</span><br/>
          <span class="text-xs text-red-500">คอลัมน์ที่ต่างออกไปจะถูกลบหรือเพิ่ม/แก้ไข</span>
        </p>
        <div class="flex gap-3">
          <button id="ccp-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccp-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700">ยืนยัน</button>
        </div>
      </div>`,document.body.appendChild(K),K.querySelector("#ccp-conf-no").addEventListener("click",()=>K.remove()),K.querySelector("#ccp-conf-yes").addEventListener("click",async()=>{K.remove(),A.disabled=!0,A.textContent="⏳";try{const H=await ge(_.id).catch(()=>[]),ce=Object.fromEntries(j.cols.map(M=>[M.assignment_name,M])),fe=Object.fromEntries(H.map(M=>[M.assignment_name,M]));for(const M of H)ce[M.assignment_name]||await Pe(M.id).catch(()=>{});for(const M of j.cols)fe[M.assignment_name]?await Ie(fe[M.assignment_name].id,{assignment_type:M.assignment_type,sheet_column:M.sheet_column??"",max_score:M.max_score,assignment_name:M.assignment_name}).catch(()=>{}):await Ce({class_id:_.id,assignment_name:M.assignment_name,assignment_type:M.assignment_type,sheet_column:M.sheet_column??"",max_score:M.max_score});g(`Mirror จาก ${j.class_name} สำเร็จ ✅`,"success"),N.remove(),Ee(window._currentGradeTeacher,_)}catch(H){g("Mirror ไม่สำเร็จ: "+D(H),"error"),A.disabled=!1,A.textContent="คัดลอก"}})})})}async function Mn(_,b,B){var fe;const N=B.filter(M=>M.course_id===_);if(!N.length){g("ยังไม่มีห้องเรียนในคอร์สนี้","warning");return}g("กำลังโหลด...","info");const F=N[0];let A=await ge(F.id).catch(()=>[]);const j=()=>A.filter(M=>M.assignment_type==="midterm"||M.assignment_type==="กลางภาค"),K=()=>A.filter(M=>M.assignment_type==="final"||M.assignment_type==="ปลายภาค");(fe=document.getElementById("course-cols-modal"))==null||fe.remove();const V=document.createElement("div");V.id="course-cols-modal",V.className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4";const H=M=>`
    <div class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-100 hover:border-gray-200 bg-gray-50/60">
      <input type="checkbox" class="ccm-cb w-4 h-4 rounded accent-red-500 flex-shrink-0" data-name="${J(M.assignment_name)}" />
      <span class="flex-1 text-xs text-gray-700 truncate">${M.assignment_name}</span>
      <span class="text-[11px] text-gray-400">/${M.max_score||0}</span>
      <button class="ccm-del text-gray-300 hover:text-red-400 text-lg px-1 rounded hover:bg-red-50 transition" data-name="${J(M.assignment_name)}">🗑</button>
    </div>`,ce=()=>{var u;V.innerHTML=`
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>
        <div class="px-5 py-4 border-b flex items-start justify-between gap-3 flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ คอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">${b} · sync ${N.length} ห้อง</p>
          </div>
          <button id="ccm-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none flex-shrink-0">×</button>
        </div>

        <div class="overflow-auto flex-1 p-5 space-y-4">
          <!-- bulk bar -->
          <div id="ccm-bulk-bar" class="hidden flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            <p id="ccm-bulk-count" class="text-xs font-semibold text-red-700">เลือก 0 รายการ</p>
            <button id="ccm-bulk-del" class="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition">🗑️ ลบที่เลือก</button>
          </div>

          <div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค <span class="font-normal text-gray-400">(${j().length})</span></h4>
            <div class="space-y-1.5">${j().map(H).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition" data-type="กลางภาค">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค <span class="font-normal text-gray-400">(${K().length})</span></h4>
            <div class="space-y-1.5">${K().map(H).join("")||'<p class="text-xs text-gray-300 py-2 text-center">ยังไม่มี</p>'}</div>
            <button class="ccm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition" data-type="ปลายภาค">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
        </div>
      </div>`;const M=(p,E)=>{var O;(O=document.getElementById("ccm-confirm"))==null||O.remove();const k=document.createElement("div");k.id="ccm-confirm",k.className="fixed inset-0 z-[300] flex items-center justify-center p-6",k.style.background="rgba(0,0,0,0.5)",k.innerHTML=`<div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
        <div class="text-3xl mb-3">🗑️</div>
        <h4 class="font-bold text-gray-800 mb-2">ยืนยันการลบ</h4>
        <p class="text-sm text-gray-500 leading-relaxed mb-5">${p}</p>
        <div class="flex gap-3">
          <button id="ccm-conf-no" class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50">ยกเลิก</button>
          <button id="ccm-conf-yes" class="flex-1 py-2.5 rounded-2xl bg-red-500 text-white text-sm font-bold hover:bg-red-600">ลบเลย</button>
        </div>
      </div>`,document.body.appendChild(k),k.querySelector("#ccm-conf-no").addEventListener("click",()=>k.remove()),k.querySelector("#ccm-conf-yes").addEventListener("click",()=>{k.remove(),E()})},ne=async p=>{for(const E of N){const k=await ge(E.id).catch(()=>[]);for(const O of p){const f=k.find(Q=>Q.assignment_name===O);f&&await Pe(f.id).catch(()=>{})}}A=await ge(F.id).catch(()=>[]),g(`ลบสำเร็จ — sync ทุก ${N.length} ห้องแล้ว ✅`,"success"),ce()},$e=()=>{const p=[...V.querySelectorAll(".ccm-cb:checked")],E=V.querySelector("#ccm-bulk-bar");if(E){E.classList.toggle("hidden",!p.length);const k=E.querySelector("#ccm-bulk-count");k&&(k.textContent=`เลือก ${p.length} รายการ`)}};V.querySelector("#ccm-close").addEventListener("click",()=>V.remove()),V.querySelectorAll(".ccm-cb").forEach(p=>p.addEventListener("change",$e)),(u=V.querySelector("#ccm-bulk-del"))==null||u.addEventListener("click",()=>{const E=[...V.querySelectorAll(".ccm-cb:checked")].map(k=>k.dataset.name);M(`ลบ ${E.length} คอลัมน์จากทุกห้อง?<br/><span class="font-semibold text-sm">${E.join(", ")}</span>`,()=>ne(E))}),V.querySelectorAll(".ccm-del").forEach(p=>{p.addEventListener("click",()=>{M(`ลบ <span class="font-semibold">"${p.dataset.name}"</span> จากทุก ${N.length} ห้อง?`,()=>ne([p.dataset.name]))})}),V.querySelectorAll(".ccm-add").forEach(p=>{p.addEventListener("click",()=>{var Q,Z;const E=p.dataset.type;(Q=document.getElementById("add-col-modal"))==null||Q.remove();const k=!!(F!=null&&F.google_sheet_id),O=E==="ปลายภาค"?"purple":"blue",f=document.createElement("div");f.id="add-col-modal",f.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",f.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${E}</h3>
          <p class="text-xs text-gray-400 mb-4">จะเพิ่มใน <b>ทุก ${N.length} ห้อง</b> ของ ${b}</p>
          <div class="space-y-3">
            <div><label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
              <input id="acol2-name" type="text" placeholder="เช่น คะแนนเก็บ 1"
                class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${O}-400"/></div>
            <div class="grid grid-cols-2 gap-3">
              <div><label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
                <input id="acol2-max" type="number" min="1" value="20"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${O}-400"/></div>
              ${k?`<div><label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
                <input id="acol2-sheet" type="text" placeholder="EH"
                  class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${O}-400"/></div>`:'<input id="acol2-sheet" type="hidden" value=""/>'}
            </div>
            <div id="acol2-msg" class="hidden text-xs text-red-500"></div>
            <div class="flex gap-3 pt-1">
              <button id="acol2-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="acol2-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มทุกห้อง</button>
            </div>
          </div>
        </div>`,document.body.appendChild(f),(Z=f.querySelector("#acol2-sheet"))==null||Z.addEventListener("input",se=>{se.target.value=se.target.value.toUpperCase()}),f.querySelector("#acol2-cancel").addEventListener("click",()=>f.remove()),f.querySelector("#acol2-save").addEventListener("click",async()=>{var ue;const se=f.querySelector("#acol2-name").value.trim(),ye=parseFloat(f.querySelector("#acol2-max").value)||20,me=(((ue=f.querySelector("#acol2-sheet"))==null?void 0:ue.value)??"").trim().toUpperCase()||null,W=f.querySelector("#acol2-msg");if(!se){W.textContent="กรุณาระบุชื่องาน",W.classList.remove("hidden");return}const ae=f.querySelector("#acol2-save");ae.disabled=!0,ae.textContent="⏳ กำลังเพิ่ม...";try{for(const qe of N)(await ge(qe.id).catch(()=>[])).some(ee=>ee.assignment_name===se)||await Ce({class_id:qe.id,assignment_name:se,assignment_type:E,sheet_column:me??"",max_score:ye});f.remove(),g(`เพิ่ม "${se}" ใน ${N.length} ห้องแล้ว ✅`,"success"),A=await ge(F.id).catch(()=>[]),ce()}catch(qe){W.textContent="เกิดข้อผิดพลาด: "+D(qe),W.classList.remove("hidden"),ae.disabled=!1,ae.textContent="เพิ่มทุกห้อง"}})})})};document.body.appendChild(V),ce()}function Bt(_,b,B){var K,V;(K=document.getElementById("add-col-modal"))==null||K.remove();const N=b==="final"?"ปลายภาค":"กลางภาค",F=b==="final"?"purple":"blue",A=!!(_!=null&&_.google_sheet_id),j=document.createElement("div");j.id="add-col-modal",j.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4",j.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
    <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${N}</h3>
    <p class="text-xs text-gray-400 mb-4">คอลัมน์สำหรับ <b>${N}</b></p>
    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
        <input id="acol-name" type="text" placeholder="เช่น งานที่ 1"
          class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${F}-400"/>
        <button type="button" id="acol-quick-adj" class="mt-1 text-xs text-teal-600 hover:text-teal-800 underline">⚡ ปรับคะแนนเก็บ (คะแนนเต็มกำหนดเอง)</button>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
          <input id="acol-max" type="number" min="1" value="20"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${F}-400"/>
        </div>
        ${A?`
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
          <input id="acol-sheet" type="text" placeholder="EH"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${F}-400"/>
        </div>`:'<input id="acol-sheet" type="hidden" value=""/>'}
      </div>
      <div id="acol-msg" class="hidden text-xs text-red-500"></div>
      <div class="flex gap-3 pt-1">
        <button id="acol-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="acol-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มคอลัมน์</button>
      </div>
    </div>
  </div>`,document.body.appendChild(j),(V=j.querySelector("#acol-sheet"))==null||V.addEventListener("input",H=>{H.target.value=H.target.value.toUpperCase()}),j.querySelector("#acol-quick-adj").addEventListener("click",()=>{j.querySelector("#acol-name").value=`ปรับคะแนนเก็บ (${N})`;const H=j.querySelector("#acol-max");H.focus(),H.select()}),j.querySelector("#acol-cancel").addEventListener("click",()=>j.remove()),j.querySelector("#acol-save").addEventListener("click",async()=>{var $e;const H=j.querySelector("#acol-name").value.trim(),ce=parseFloat(j.querySelector("#acol-max").value)||20,fe=((($e=j.querySelector("#acol-sheet"))==null?void 0:$e.value)??"").trim().toUpperCase()||null,M=j.querySelector("#acol-msg");if(!H){M.textContent="กรุณาระบุชื่องาน",M.classList.remove("hidden");return}const ne=j.querySelector("#acol-save");ne.disabled=!0,ne.textContent="กำลังเพิ่ม...";try{await Ce({class_id:_.id,assignment_name:H,max_score:ce,sheet_column:fe??"",assignment_type:b}),j.remove(),g(`เพิ่มคอลัมน์ "${H}" แล้ว`,"success"),B()}catch(u){M.textContent="เกิดข้อผิดพลาด: "+D(u),M.classList.remove("hidden"),ne.disabled=!1,ne.textContent="เพิ่มคอลัมน์"}})}async function Ye(_){if(ct("requests"),mt("คำร้องนักเรียน"),!_){Ue('<div class="text-center py-20 text-gray-400"><p class="text-5xl mb-4">🔔</p><p>กรุณาเข้าสู่ระบบ</p></div>');return}Ue(`<div class="flex justify-center py-16 text-gray-300">
    <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const b=await pn(_.id).catch(()=>[]),B=[{key:"pending",label:"รอดำเนินการ",cls:"text-amber-600"},{key:"approved",label:"อนุมัติแล้ว",cls:"text-emerald-600"},{key:"attended",label:"มาสอบแล้ว",cls:"text-blue-600"},{key:"absent",label:"ขาดสอบ/ผิดนัด",cls:"text-red-600"},{key:"rejected",label:"ปฏิเสธ",cls:"text-red-500"},{key:"all",label:"ทั้งหมด",cls:"text-gray-600"}];let N="pending",F=null,A=null;const j=(u,p)=>p==="all"?!0:p==="attended"?u.status==="approved"&&u.exam_attended===!0:p==="absent"?u.status==="approved"&&u.exam_attended===!1:u.status===p,K=u=>b.filter(p=>j(p,u)).length,V=u=>{const p=new Map;return u.forEach(E=>{E.request_type&&p.set(E.request_type,(p.get(E.request_type)||0)+1)}),[...p.entries()].map(([E,k])=>({type:E,count:k})).sort((E,k)=>k.count-E.count)},H=u=>{const p=new Map;return u.forEach(E=>{const k=E.class_score_columns;k&&(p.has(k.id)||p.set(k.id,{id:k.id,name:k.assignment_name,count:0}),p.get(k.id).count++)}),[...p.values()].sort((E,k)=>k.count-E.count)},ce=u=>{if(!u)return"—";const p=new Date(u);return`${p.getDate()}/${p.getMonth()+1}/${p.getFullYear()+543}`},fe=u=>{var se;const p=u.students,E=u.classes,k=u.class_score_columns,O=u.status==="approved"&&u.exam_attended==null,f=u.status==="approved"&&u.exam_attended===!0,Q=u.status==="pending"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">⏳ รอดำเนินการ</span>':u.status==="approved"?'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">✅ อนุมัติ</span>':'<span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">✕ ปฏิเสธ</span>',Z=u.exam_attended===!0?`<span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">📝 มาสอบแล้ว${u.exam_score!=null?" · <b>"+u.exam_score+"</b> คะแนน":" (ยังไม่ได้ใส่คะแนน)"}</span>`:u.exam_attended===!1?'<span class="text-[11px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">❌ ขาดสอบ/ผิดนัด</span>':"";return`<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4" id="req-card-${u.id}">
      <!-- Header -->
      <div class="flex items-start gap-3 mb-3">
        <div class="w-9 h-11 rounded-lg overflow-hidden flex-shrink-0 border border-white/40 shadow-sm bg-gradient-to-tr from-indigo-300 to-purple-300
                    flex items-center justify-center text-white text-sm font-bold">
          ${p!=null&&p.image_url?`<img src="${p.image_url}" class="w-full h-full object-cover"/>`:((p==null?void 0:p.full_name)??"น").charAt(0)}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-800 text-sm truncate">${(p==null?void 0:p.full_name)??"—"}</p>
          <p class="text-xs text-gray-400">${(p==null?void 0:p.student_code)??""} · ${(p==null?void 0:p.main_room)??""}</p>
        </div>
        ${Q}
      </div>
      <!-- Info -->
      <div class="bg-gray-50 rounded-xl p-3 space-y-1.5 text-xs text-gray-600 mb-3">
        <div class="flex gap-2"><span class="text-gray-400 w-16">วิชา</span><span class="font-medium text-gray-800">${((se=E==null?void 0:E.master_subjects)==null?void 0:se.subject_name)??"—"} (${(E==null?void 0:E.class_name)??""})</span></div>
        <div class="flex gap-2"><span class="text-gray-400 w-16">ประเภท</span><span>${u.request_type}</span></div>
        ${k?`<div class="flex gap-2"><span class="text-gray-400 w-16">หัวข้อ</span><span>${k.assignment_name} (เต็ม ${k.max_score})</span></div>`:""}
        <div class="flex gap-2"><span class="text-gray-400 w-16">วันที่</span><span>${ce(u.requested_date)}${u.requested_period_no?" · คาบ "+u.requested_period_no:""}</span></div>
        ${u.reason?`<div class="flex gap-2"><span class="text-gray-400 w-16">เหตุผล</span><span>${u.reason}</span></div>`:""}
        ${u.teacher_comment?`<div class="flex gap-2"><span class="text-gray-400 w-16">หมายเหตุ</span><span class="${u.status==="rejected"?"text-red-600":"text-emerald-600"} font-medium">${u.teacher_comment}</span></div>`:""}
        ${Z?`<div class="mt-1">${Z}</div>`:""}
      </div>
      <!-- Actions -->
      ${u.status==="pending"?`
      <div class="flex gap-2">
        <button onclick="window._approveRequest(${u.id})"
          class="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition">
          ✅ อนุมัติ
        </button>
        <button onclick="window._rejectRequest(${u.id})"
          class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold hover:bg-red-100 transition">
          ✕ ปฏิเสธ
        </button>
      </div>`:""}
      ${O?`
      <div class="border-t border-gray-100 pt-3">
        <p class="text-xs text-gray-500 mb-2 font-medium">📋 บันทึกผลการสอบ</p>
        <div class="flex gap-2">
          <button onclick="window._markAttended(${u.id})"
            class="flex-1 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition">
            📝 มาสอบแล้ว + ใส่คะแนน
          </button>
          <button onclick="window._markAbsent(${u.id}, ${(p==null?void 0:p.id)??"null"})"
            class="flex-1 py-2 rounded-xl bg-red-50 text-red-600 border border-red-100 text-xs font-semibold hover:bg-red-100 transition">
            ❌ ขาดสอบ/ผิดนัด
          </button>
        </div>
      </div>`:""}
      ${f?`
      <div class="border-t border-gray-100 pt-3 flex items-center justify-between">
        <p class="text-xs text-blue-600 font-medium">📝 มาสอบแล้ว${u.exam_score!=null?" · คะแนน "+u.exam_score:""}</p>
        <button onclick="window._markAttended(${u.id})"
          class="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition font-medium">
          ✏️ แก้ไขคะแนน
        </button>
      </div>`:""}
    </div>`},M=()=>{const u=b.filter(f=>j(f,N)),p=V(u);F&&!p.some(f=>f.type===F)&&(F=null);const E=F?u.filter(f=>f.request_type===F):u,k=H(E);A&&!k.some(f=>f.id===A)&&(A=null);const O=A?E.filter(f=>{var Q;return((Q=f.class_score_columns)==null?void 0:Q.id)===A}):E;document.getElementById("req-type-filter").innerHTML=p.length>1?`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${F?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-purple-600 text-white border-purple-600"}"
        data-type="">ทุกประเภทการสอบ</button>
      ${p.map(f=>`
      <button class="req-type-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${F===f.type?"bg-purple-600 text-white border-purple-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-type="${f.type}">${f.type} (${f.count})</button>`).join("")}`:"",document.querySelectorAll(".req-type-tab").forEach(f=>{f.addEventListener("click",()=>{F=f.dataset.type||null,M()})}),document.getElementById("req-col-filter").innerHTML=k.length>1?`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${A?"bg-white text-gray-500 border-gray-200 hover:text-gray-700":"bg-indigo-600 text-white border-indigo-600"}"
        data-col="">ทุกช่องคะแนน</button>
      ${k.map(f=>`
      <button class="req-col-tab px-3 py-1.5 rounded-lg text-xs font-medium border transition
        ${A===f.id?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-500 border-gray-200 hover:text-gray-700"}"
        data-col="${f.id}">${f.name} (${f.count})</button>`).join("")}`:"",document.querySelectorAll(".req-col-tab").forEach(f=>{f.addEventListener("click",()=>{A=f.dataset.col?Number(f.dataset.col):null,M()})}),document.getElementById("req-content").innerHTML=O.length?`<div class="space-y-3">${O.map(fe).join("")}</div>`:`<div class="text-center py-16 text-gray-300">
          <p class="text-4xl mb-3">📭</p>
          <p class="text-sm">ไม่มีคำร้อง${N!=="all"?"ในสถานะนี้":""}${F?"ในประเภทนี้":""}${A?"ในช่องคะแนนนี้":""}</p>
        </div>`,document.querySelectorAll(".req-tab").forEach(f=>{const Q=f.dataset.filter===N;f.className=`req-tab flex-1 py-2 text-xs font-medium rounded-lg transition
        ${Q?"bg-white shadow text-indigo-700":"text-gray-500 hover:text-gray-700"}`})};Ue(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xs text-gray-400">${b.length} รายการ</span>
    </div>
    <!-- Filter tabs -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 bg-gray-100 rounded-xl p-1 mb-4">
      ${B.map(u=>`
      <button class="req-tab flex-1 py-2 text-xs font-medium rounded-lg transition text-gray-500 hover:text-gray-700"
        data-filter="${u.key}">
        ${u.label}${K(u.key)>0||u.key==="all"?` (${K(u.key)})`:""}
      </button>`).join("")}
    </div>
    <!-- Filter by ประเภทการสอบ -->
    <div id="req-type-filter" class="flex flex-wrap gap-1.5 mb-3"></div>
    <!-- Filter by ช่องคะแนน -->
    <div id="req-col-filter" class="flex flex-wrap gap-1.5 mb-4"></div>
    <div id="req-content"></div>
  </div>`),document.querySelectorAll(".req-tab").forEach(u=>{u.addEventListener("click",()=>{N=u.dataset.filter,M()})}),M();const ne=({title:u,body:p,confirmLabel:E,confirmCls:k="bg-emerald-600 hover:bg-emerald-700",onConfirm:O})=>{var Q;(Q=document.getElementById("req-modal"))==null||Q.remove();const f=document.createElement("div");f.id="req-modal",f.className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 p-4",f.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
        <div class="px-5 py-4 border-b border-gray-100">
          <h3 class="font-bold text-gray-800">${u}</h3>
        </div>
        <div class="px-5 py-4">${p}</div>
        <div class="px-5 pb-5 flex gap-2">
          <button id="req-modal-cancel"
            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="req-modal-confirm"
            class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold ${k}">
            ${E}
          </button>
        </div>
      </div>`,document.body.appendChild(f),f.querySelector("#req-modal-cancel").addEventListener("click",()=>f.remove()),f.addEventListener("click",Z=>{Z.target===f&&f.remove()}),f.querySelector("#req-modal-confirm").addEventListener("click",()=>{O(f)})},$e=async(u,p,E)=>{var O,f,Q;const k=(O=u==null?void 0:u.students)==null?void 0:O.profile_id;if(k)try{const Z=((Q=(f=u==null?void 0:u.classes)==null?void 0:f.master_subjects)==null?void 0:Q.subject_name)??"วิชา";await yn.functions.invoke("send-push",{body:{title:`📋 คำร้องขอสอบ: ${p}`,body:`${Z}${E?" — "+E:""}`,url:"student.html",profileIds:[k]}})}catch{}};window._approveRequest=u=>{ne({title:"✅ อนุมัติคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">หมายเหตุถึงนักเรียน <span class="text-gray-400">(ไม่บังคับ)</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="เช่น นัดสอบวันอังคาร คาบ 3 ห้องครู..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"></textarea>`,confirmLabel:"ยืนยันอนุมัติ",onConfirm:async p=>{const E=p.querySelector("#req-modal-comment").value.trim()||null;p.remove();try{await Lt(u,{status:"approved",teacher_comment:E}),g("อนุมัติคำร้องแล้ว ✅","success");const k=b.find(O=>O.id===u);k&&$e(k,"อนุมัติแล้ว ✅",E),Ye(_)}catch(k){g("ไม่สำเร็จ: "+D(k),"error")}}})},window._rejectRequest=u=>{ne({title:"✕ ปฏิเสธคำร้อง",body:`<label class="block text-sm text-gray-600 mb-1.5">เหตุผลที่ปฏิเสธ <span class="text-red-500">*</span></label>
             <textarea id="req-modal-comment" rows="3" placeholder="กรุณาระบุเหตุผล..."
               class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"></textarea>
             <p class="text-xs text-red-400 mt-1">บังคับกรอกทุกครั้งที่ปฏิเสธ</p>`,confirmLabel:"ยืนยันปฏิเสธ",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async p=>{const E=p.querySelector("#req-modal-comment").value.trim();if(!E){g("กรุณาระบุเหตุผลก่อนปฏิเสธ","warning");return}p.remove();try{await Lt(u,{status:"rejected",teacher_comment:E}),g("บันทึกการปฏิเสธแล้ว","success");const k=b.find(O=>O.id===u);k&&$e(k,"ถูกปฏิเสธ ✕",E),Ye(_)}catch(k){g("ไม่สำเร็จ: "+D(k),"error")}}})},window._markAttended=async u=>{var Be,ee,We;const p=b.find(q=>Number(q.id)===Number(u)),E=(Be=p==null?void 0:p.students)==null?void 0:Be.id,k=(ee=p==null?void 0:p.classes)==null?void 0:ee.id,O=p==null?void 0:p.exam_score,f=O!=null;if(!E||!k){g("ไม่พบข้อมูลนักเรียนหรือห้องเรียนของคำร้องนี้","error");return}const Q=String((p==null?void 0:p.request_type)??"").includes("ปรับคะแนน");let Z;try{Z=(await ge(k)).filter(q=>["regular","override"].includes(q.column_type??"regular"))}catch(q){g("โหลดคอลัมน์คะแนนไม่สำเร็จ: "+D(q),"error");return}if(!Z.length){g("วิชานี้ยังไม่มีคอลัมน์คะแนนที่สามารถบันทึกได้","warning");return}const se=Number((We=p==null?void 0:p.class_score_columns)==null?void 0:We.id);if(!Q){const q=Z.find(ie=>Number(ie.id)===se);q&&(Z=[q])}const ye=Z.find(q=>Number(q.id)===se)??Z[0],me=Z.map(q=>`
      <option value="${q.id}" data-max="${Number(q.max_score??100)}"
        ${Number(q.id)===Number(ye.id)?"selected":""}>
        ${q.column_type==="override"?"🔄 ปรับคะแนน — ":""}${J(q.assignment_name)} (เต็ม ${Number(q.max_score??100)})
      </option>`).join("");ne({title:f?"✏️ แก้ไขคะแนน":"📝 บันทึกผลการสอบ — มาสอบ",body:`<label class="block text-sm text-gray-600 mb-1.5">บันทึกลงคอลัมน์ <span class="text-red-500">*</span></label>
             <select id="req-modal-column" ${Q?"":"disabled"}
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4">
               ${me}
             </select>
             ${Q?'<p class="text-xs text-blue-600 -mt-2 mb-4">เลือกคอลัมน์ที่จะรับคะแนนสอบปรับคะแนนครั้งนี้</p>':""}
             <label class="block text-sm text-gray-600 mb-1.5">คะแนนที่สอบได้ <span class="text-red-500">*</span> <span id="req-modal-max-label" class="text-gray-400">(เต็ม ${Number(ye.max_score??100)})</span></label>
             <input id="req-modal-score" type="number" min="0" max="${Number(ye.max_score??100)}" step="0.5"
               value="${f?O:""}"
               placeholder="0 – ${Number(ye.max_score??100)}"
               class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300" />`,confirmLabel:f?"บันทึกการแก้ไข":"บันทึกคะแนน",confirmCls:"bg-blue-600 hover:bg-blue-700",onConfirm:async q=>{const ie=q.querySelector("#req-modal-column"),Y=Number(ie.value),le=ie.options[ie.selectedIndex],te=Number((le==null?void 0:le.dataset.max)??100),Ke=q.querySelector("#req-modal-score").value,he=parseFloat(Ke);if(isNaN(he)||he<0||he>te){g(`คะแนนต้องอยู่ระหว่าง 0 – ${te}`,"warning");return}q.remove();try{const T=await It(u,{exam_attended:!0,exam_score:he,studentId:E,assignmentId:Y});$n({classId:k,columnId:Y,studentId:E,score:he}),g(T!=null&&T.linkedColumnId?"บันทึกคะแนนปรับและอัปเดตคอลัมน์หลักแล้ว ✅":f?"แก้ไขคะแนนแล้ว ✅":"บันทึกผลสอบและคะแนนแล้ว ✅","success"),Ye(_)}catch(T){g("ไม่สำเร็จ: "+D(T),"error")}}});const W=document.getElementById("req-modal"),ae=W==null?void 0:W.querySelector("#req-modal-column"),ue=W==null?void 0:W.querySelector("#req-modal-score"),qe=W==null?void 0:W.querySelector("#req-modal-max-label");ae==null||ae.addEventListener("change",()=>{const q=ae.options[ae.selectedIndex],ie=Number((q==null?void 0:q.dataset.max)??100);ue.max=String(ie),ue.placeholder=`0 – ${ie}`,qe.textContent=`(เต็ม ${ie})`,ue.value!==""&&Number(ue.value)>ie&&(ue.value="")})},window._markAbsent=(u,p)=>{const E=b.filter(k=>{var O;return((O=k.students)==null?void 0:O.id)===p&&k.exam_attended===!1}).length;ne({title:"❌ ขาดสอบ / ผิดนัด",body:`<p class="text-sm text-gray-600 mb-2">ยืนยันว่านักเรียนไม่มาสอบตามนัด?</p>
             ${E>=1?`<div class="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 font-medium">
                    ⚠️ นักเรียนผิดนัดมาแล้ว <b>${E}</b> ครั้ง
                    ${E+1>=2?"<br/>หากยืนยัน จะครบ 2 ครั้ง — <b>นักเรียนจะไม่สามารถยื่นคำร้องได้อีก</b>":""}
                  </div>`:""}`,confirmLabel:"ยืนยัน — ขาดสอบ/ผิดนัด",confirmCls:"bg-red-500 hover:bg-red-600",onConfirm:async k=>{k.remove();try{await It(u,{exam_attended:!1,exam_score:null}),g("บันทึกว่าขาดสอบ/ผิดนัดแล้ว","success"),Ye(_)}catch(O){g("ไม่สำเร็จ: "+D(O),"error")}}})}}const On=Object.freeze(Object.defineProperty({__proto__:null,_openCourseColsModal:Mn,renderGrades:kn,renderGradesGrid:Ee,renderRequests:Ye},Symbol.toStringTag,{value:"Module"}));export{Mn as _,Ee as a,Ye as b,$n as p,kn as r,On as t};
