const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-BzTMalao.js","assets/ui-Dh03k4iX.js","assets/api-1xsyVspL.js","assets/supabase-BV-W2lsh.js","assets/sports-portals.js_v_10.22-BrIjazIR.js","assets/impersonation-C66q0Y-O.js","assets/storage-D6nkcVz6.js","assets/browser-JP79f-a9.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/teacher-views-grades-DyBe1K7u.js","assets/regrade-api-C8s-TuM0.js","assets/score-qr-scanner-SDrghEsT.js","assets/teacher-views-classes-s_CI5F_w.js","assets/pp5-doc-CVTwqJKw.js","assets/teacher-views-attendance-C31WiJPz.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js"])))=>i.map(i=>d[i]);
import{_ as H}from"./ui-Dh03k4iX.js";import{getSupervisorProgress as K,getDepartments as Q,getReligionGroups as X,getReligionGroupMembers as J,assignTeacherToDept as U,getSystemConfig as O,getWorkCalendarEvents as Z,addSupervisorCommentWithNotify as ee,getCommentPhrases as te,getSupervisorComments as oe,deleteSupervisorComment as ne}from"./api-1xsyVspL.js";import{a as ie}from"./pp5-doc-CVTwqJKw.js";import"./supabase-BV-W2lsh.js";import"./storage-D6nkcVz6.js";import"./teacher-views-utils-B2Iz3UWp.js";let k={};async function se(t){if(k[t])return k[t];const o=await te(t).catch(()=>[]);return k[t]=o.map(e=>e.phrase),k[t]}(()=>{if(document.getElementById("sv-styles"))return;const t=document.createElement("style");t.id="sv-styles",t.textContent=`
    .sv-tab-btn{padding:6px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;font-size:12px;cursor:pointer;font-family:inherit;}
    .sv-tab-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8;}
    .sv-tab-btn:hover:not(.active){background:#f3f4f6;}
    @media(min-width:640px){.sv-donuts{grid-template-columns:repeat(4,1fr)!important;}}
    .sv-metric-card{border-radius:12px;padding:14px 16px;cursor:pointer;transition:box-shadow .15s;border:1.5px solid transparent;}
    .sv-metric-card:hover{box-shadow:0 4px 12px rgba(0,0,0,.12);border-color:#6366f1;}
    .sv-row:hover{background:#f9fafb;}
    .sv-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9000;display:flex;align-items:center;justify-content:center;}
    .sv-popup{background:#fff;border-radius:16px;width:min(560px,96vw);max-height:80vh;overflow-y:auto;padding:24px;position:relative;}
    .sv-cls-row{display:flex;justify-content:space-between;align-items:center;padding:8px 10px;border-radius:8px;margin-bottom:4px;background:#f9fafb;font-size:13px;}
    .sv-cls-row:hover{background:#e0f2fe;cursor:pointer;}
  `,document.head.appendChild(t)})();const re={dept_head:"หัวหน้ากลุ่มสาระ",religion_group_head:"หัวหน้ากลุ่ม (ศาสนา)",religion_subgroup_head:"หัวหน้ากลุ่มย่อย (ศาสนา)",registrar_samai:"หัวหน้าฝ่ายทะเบียน (สามัญ)",registrar_religion:"หัวหน้าฝ่ายทะเบียน (ศาสนา)",registrar_pvch:"หัวหน้าฝ่ายทะเบียน (ปวช)",academic_samai:"หัวหน้าวิชาการสามัญ",academic_religion:"หัวหน้าวิชาการศาสนา",academic_pvch:"หัวหน้าวิชาการปวช",house_color_admin:"ผู้รับผิดชอบสีนักเรียน",classroom_leaders_admin:"ผู้ดูแลหัวหน้า/รองหัวหน้า"};function M(t){const o={ok:["#d1fae5","#065f46","✓"],warn:["#fef3c7","#92400e","⚠"],none:["#fee2e2","#991b1b","✗"],na:["#f3f4f6","#6b7280","–"]},[e,i,n]=o[t]??o.na;return`<span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:700;background:${e};color:${i};">${n}</span>`}function de(t,o,e,i){const a=2*Math.PI*36,r=t/100*a;return`<div style="text-align:center;">
    <svg width="88" height="88" viewBox="0 0 88 88">
      <circle cx="44" cy="44" r="36" fill="none" stroke="#e5e7eb" stroke-width="10"/>
      <circle cx="44" cy="44" r="36" fill="none" stroke="${o}" stroke-width="10"
        stroke-dasharray="${r.toFixed(1)} ${a.toFixed(1)}"
        stroke-dashoffset="${(a/4).toFixed(1)}"
        stroke-linecap="round" transform="rotate(-90 44 44)"/>
      <text x="44" y="44" text-anchor="middle" dominant-baseline="middle"
        style="font-size:14px;font-weight:700;fill:#111;">${t}%</text>
    </svg>
    <div style="font-size:12px;font-weight:600;color:#374151;margin-top:2px;">${e}</div>
    <div style="font-size:11px;color:#6b7280;">${i}</div>
  </div>`}function ae(t,o,e={}){var r;const i=(r=o.positions)!=null&&r.length?o.positions:[o.position].filter(Boolean);if(!i.length)return t;let n=[],s=!1;for(const d of i)if(d==="dept_head")s=!0,n.push(...t.filter(l=>l.dept===o.dept));else if(d==="religion_group_head")s=!0,n.push(...t.filter(l=>["AGM","AGMVOC"].includes(l.subject_group)));else if(d==="religion_subgroup_head"){s=!0;const l=e.religionGroupMemberIds??[];n.push(...t.filter(c=>l.includes(c.id)))}else d==="academic_samai"||d==="registrar_samai"?(s=!0,n.push(...t.filter(l=>!["AGM","AGMVOC","ACDMVOC"].includes(l.subject_group)))):d==="academic_religion"||d==="registrar_religion"?(s=!0,n.push(...t.filter(l=>["AGM","AGMVOC"].includes(l.subject_group)))):(d==="academic_pvch"||d==="registrar_pvch")&&(s=!0,n.push(...t.filter(l=>l.subject_group==="ACDMVOC")));if(!s)return t;const a=new Set;return n.filter(d=>a.has(d.id)?!1:(a.add(d.id),!0))}function $(t){return t.dept??"—"}function G(t,o){var i;if(!t||t==="—")return"—";const e=B.filter(n=>n.dept_code===t);if(!e.length)return t;if(e.length===1)return`${e[0].dept_name} (${t})`;if(o){const s=((i=o.filter(r=>$(r)===t)[0])==null?void 0:i.category)??null,a=e.find(r=>r.category===s);if(a)return`${a.dept_name} (${t})`}return`${e[0].dept_name} (${t})`}let y=null,h=1,L="",w=[],u=null,B=[],j=null,V=!1;async function le(t,o,e=!1){var a;if(!o){t.innerHTML='<div style="padding:40px;text-align:center;color:#dc2626;">โหลดข้อมูลครูไม่สำเร็จ กรุณาปิดหน้าต่างนี้แล้วลองใหม่</div>';return}u=o,j=t,V=e;const i=(a=o==null?void 0:o.positions)!=null&&a.length?o.positions:[o==null?void 0:o.position].filter(Boolean),n=i.map(r=>re[r]??"หัวหน้า").join(", "),s=e?"แอดมิน (ดูทั้งหมด)":n||"หัวหน้า";t.innerHTML=`<div id="sv-root" style="padding:20px;max-width:1100px;margin:0 auto;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      <div>
        <h2 style="font-size:18px;font-weight:700;margin:0;">Dashboard ติดตามความคืบหน้า</h2>
        <p style="color:#6b7280;font-size:13px;margin:2px 0 0;">${s}${o.dept&&!e?" — "+o.dept:""}<span style="color:#9ca3af;"> — ${o.full_name}</span></p>
      </div>
    </div>
    <div id="sv-loading" style="text-align:center;padding:40px;color:#6b7280;">⏳ กำลังโหลดข้อมูล...</div>
    <div id="sv-dash" style="display:none;"></div>
  </div>`;try{[w,B]=await Promise.all([K(),Q()]);const r={};if(!e&&i.includes("religion_subgroup_head"))try{const c=(await X()).find(g=>g.leader_id===o.id),f=c?await J(c.id):[];r.religionGroupMemberIds=f.map(g=>g.teacher_id)}catch{r.religionGroupMemberIds=[]}const d=e?w:ae(w,o,r);document.getElementById("sv-loading").style.display="none",ce(document.getElementById("sv-dash"),d,o)}catch(r){document.getElementById("sv-loading").innerHTML=`<div style="color:#dc2626;">โหลดไม่สำเร็จ: ${r.message}</div>`}}function ce(t,o,e){var P,q,R;const i=o.length,n=i?Math.round(o.filter(p=>p.profileStatus==="ok").length/i*100):0,s=i?Math.round(o.filter(p=>p.attStatus==="ok").length/i*100):0,a=i?Math.round(o.filter(p=>p.scoreStatus==="ok").length/i*100):0,r=i?Math.round(o.filter(p=>p.scheduleStatus==="ok").length/i*100):0,d=(P=e.positions)!=null&&P.length?e.positions:[e.position].filter(Boolean),l=d.includes("dept_head"),c=d.some(p=>p!=="dept_head"),f=!d.includes("religion_subgroup_head")&&(!l||c),g=[...new Set(o.map($))].sort();t.style.display="",t.innerHTML=`
    <!-- Donuts -->
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:24px;" class="sv-donuts">
      ${["#6366f1","#f59e0b","#0ea5e9","#10b981"].map((p,x)=>`
        <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;padding:16px;display:flex;justify-content:center;">
          ${de([n,r,s,a][x],p,["โปรไฟล์ครู","ตารางสอน","เช็คชื่อ (ทันปัจจุบัน)","ลงคะแนน"][x],`${o.filter(v=>[v.profileStatus,v.scheduleStatus,v.attStatus,v.scoreStatus][x]==="ok").length}/${i} คน`)}
        </div>`).join("")}
    </div>
    <!-- Dept tabs + add member button -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px;">
      ${f?`<div style="display:flex;gap:6px;flex-wrap:wrap;" id="sv-tabs">
        <button class="sv-tab-btn active" data-dept="">ทั้งหมด (${i})</button>
        ${g.map(p=>`<button class="sv-tab-btn" data-dept="${p}">${G(p,o)} (${o.filter(x=>$(x)===p).length})</button>`).join("")}
      </div>`:"<div></div>"}
      ${l?`
        <button id="sv-add-member"
          style="margin-left:auto;padding:6px 14px;border:1.5px dashed #6366f1;border-radius:20px;background:#f5f3ff;color:#6366f1;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap;">
          + เพิ่มสมาชิกกลุ่ม
        </button>`:""}
    </div>
    <!-- Search -->
    <div style="margin-bottom:12px;">
      <input id="sv-search" type="text" placeholder="🔍 ค้นหาชื่อ รหัส กลุ่มสาระ สถานะ..."
        value="${L}"
        style="width:100%;box-sizing:border-box;padding:8px 14px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:13px;font-family:inherit;outline:none;transition:border-color .15s;"
        onfocus="this.style.borderColor='#6366f1'" onblur="this.style.borderColor='#e5e7eb'"/>
    </div>
    <!-- Table -->
    <div style="background:#fff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;" id="sv-tbl">
      ${z(_(o))}
    </div>`;let b="";t.querySelectorAll(".sv-tab-btn").forEach(p=>{p.addEventListener("click",()=>{t.querySelectorAll(".sv-tab-btn").forEach(x=>x.classList.remove("active")),p.classList.add("active"),b=p.dataset.dept,document.getElementById("sv-tbl").innerHTML=z(_(b?o.filter(x=>$(x)===b):o)),C(t,o)})}),(q=t.querySelector("#sv-search"))==null||q.addEventListener("input",p=>{L=p.target.value;const x=b?o.filter(v=>$(v)===b):o;document.getElementById("sv-tbl").innerHTML=z(_(x)),C(t,o)}),C(t,o),(R=t.querySelector("#sv-add-member"))==null||R.addEventListener("click",()=>pe(e))}async function pe(t){const o=A();o.innerHTML=`<div class="sv-popup">
    <button style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;" onclick="this.closest('.sv-overlay').remove()">✕</button>
    <h3 style="font-size:15px;font-weight:700;margin-bottom:4px;">+ เพิ่มสมาชิกกลุ่ม${t.dept?" "+t.dept:""}</h3>
    <p style="font-size:12px;color:#6b7280;margin-bottom:12px;">เลือกครูที่ยังไม่ได้ระบุกลุ่มสาระเพื่อเพิ่มเข้ากลุ่ม</p>
    <div id="sv-unassigned-list">⏳ กำลังโหลด...</div>
  </div>`,document.body.appendChild(o),o.addEventListener("click",n=>{n.target===o&&o.remove()});const e=w.filter(n=>!n.dept&&n.id!==(u==null?void 0:u.id)),i=o.querySelector("#sv-unassigned-list");if(!e.length){i.innerHTML='<div style="color:#9ca3af;font-size:13px;">ไม่มีครูที่รอกำหนดกลุ่มสาระ</div>';return}i.innerHTML=e.map(n=>`
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;border-bottom:1px solid #f3f4f6;font-size:13px;">
      <div>
        <span style="font-weight:600;">${n.full_name}</span>
        ${n.isRegistered?"":'<span style="color:#d97706;font-size:11px;margin-left:6px;">ยังไม่ลงทะเบียน</span>'}
        <div style="font-size:11px;color:#6b7280;">${n.category??"—"}</div>
      </div>
      <button class="sv-assign-btn" data-tid="${n.id}" data-name="${n.full_name}"
        style="padding:4px 12px;border:1px solid #6366f1;border-radius:8px;color:#6366f1;background:#f5f3ff;font-size:11px;cursor:pointer;font-family:inherit;">
        + เพิ่ม
      </button>
    </div>`).join(""),i.querySelectorAll(".sv-assign-btn").forEach(n=>{n.onclick=async()=>{if(await ve(`เพิ่ม "${n.dataset.name}" เข้ากลุ่ม ${t.dept}?`)){n.disabled=!0,n.textContent="⏳";try{await U(parseInt(n.dataset.tid),t.dept);const a=w.find(r=>r.id===parseInt(n.dataset.tid));a&&(a.dept=t.dept),n.textContent="✓ เพิ่มแล้ว",n.style.background="#d1fae5",n.style.color="#065f46"}catch(a){n.disabled=!1,n.textContent="+ เพิ่ม",S({icon:"❌",title:"เพิ่มสมาชิกไม่สำเร็จ",body:a.message??"",type:"error"})}}}})}function _(t){let o=t;if(L.trim()){const e=L.trim().toLowerCase();o=o.filter(i=>(i.full_name??"").toLowerCase().includes(e)||(i.dept??"").toLowerCase().includes(e)||(i.category??"").toLowerCase().includes(e)||(G(i.dept)??"").toLowerCase().includes(e))}return y?[...o].sort((e,i)=>{let n,s;switch(y){case"name":n=e.full_name??"",s=i.full_name??"";break;case"dept":n=e.dept??"",s=i.dept??"";break;case"profile":n=e.profileStatus==="ok"?1:0,s=i.profileStatus==="ok"?1:0;break;case"dates":n=e.datesOk??0,s=i.datesOk??0;break;case"att":n=e.daysSinceAtt??999,s=i.daysSinceAtt??999;break;case"score":n=e.scorePct??-1,s=i.scorePct??-1;break;case"schedule":n=e.scheduleCount??-1,s=i.scheduleCount??-1;break}return n<s?-h:n>s?h:0}):[...o].sort((e,i)=>D(e)-D(i))}function D(t){if(!t.isRegistered)return-1;const o={ok:2,warn:1,none:0},e=[t.profileStatus,t.scheduleStatus,t.attStatus,t.scoreStatus].map(i=>o[i]).filter(i=>i!==void 0);return e.length?e.reduce((i,n)=>i+n,0)/e.length:2}function m(t,o){const e=y===t;return`<th class="sv-th-sort" data-col="${t}"
    style="padding:10px 12px;text-align:center;font-size:12px;cursor:pointer;user-select:none;white-space:nowrap;
      ${e?"color:#6366f1;":"color:#374151;"}">
    ${o}<span style="opacity:.5;">${e?h===1?" ↑":" ↓":" ↕"}</span></th>`}function z(t){if(!t.length)return'<div style="text-align:center;padding:24px;color:#9ca3af;">ไม่พบข้อมูลครู</div>';const o=(e,i)=>e.isRegistered?`class="sv-cell" data-tid="${e.id}" data-pop="${i}" style="padding:10px 12px;text-align:center;cursor:pointer;"`:'style="padding:10px 12px;text-align:center;"';return`<table style="width:100%;border-collapse:collapse;">
    <thead><tr style="background:#f9fafb;border-bottom:2px solid #e5e7eb;">
      <th class="sv-th-sort" data-col="name" style="padding:10px 12px;text-align:left;font-size:13px;cursor:pointer;user-select:none;">
        ครูผู้สอน${y==="name"?h===1?" ↑":" ↓":'<span style="opacity:.4;"> ↕</span>'}
      </th>
      ${m("profile","โปรไฟล์")}
      ${m("dates","วันสอน")}
      ${m("schedule","ตารางสอน")}
      ${m("att","เช็คชื่อ")}
      ${m("score","คะแนน")}
      <th style="padding:10px;"></th>
    </tr></thead>
    <tbody>${t.map(e=>{const i=e.attStatus==="na"?"–":e.lastAtt?`${e.daysSinceAtt}ว.ที่แล้ว`:"ยังไม่บันทึก",n=e.daysSinceAtt<=7?"#059669":e.daysSinceAtt<=14?"#d97706":"#dc2626",s=e.isRegistered?"":'<span style="display:inline-block;padding:1px 6px;border-radius:10px;font-size:10px;background:#fef3c7;color:#92400e;margin-left:4px;">ยังไม่ลงทะเบียน</span>',a=e.image_url?`<img src="${e.image_url}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;flex-shrink:0;">`:'<div style="width:34px;height:34px;border-radius:50%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">👤</div>';return`<tr class="sv-row" data-tid="${e.id}" style="border-bottom:1px solid #f3f4f6;${e.isRegistered?"":"background:#fffbeb;"}">
        <td style="padding:8px 12px;">
          <div style="display:flex;align-items:center;gap:10px;">
            ${a}
            <div>
              <div style="font-weight:600;font-size:13px;">${e.full_name??"—"}${s}</div>
              <div style="font-size:11px;color:#6b7280;">${e.dept??"—"} · ${e.category??"—"}</div>
            </div>
          </div>
        </td>
        <td ${o(e,"profile")}>${e.isRegistered?M(e.profileStatus):'<span style="color:#9ca3af;font-size:12px;">–</span>'}</td>
        <td ${o(e,"dates")}>
          ${e.isRegistered?`<span style="font-size:12px;font-weight:600;color:${e.datesOk===e.classCount&&e.classCount>0?"#059669":"#dc2626"};">${e.datesOk}/${e.classCount}</span>`:'<span style="color:#9ca3af;">–</span>'}</td>
        <td ${o(e,"schedule")}>
          ${e.isRegistered?`${M(e.scheduleStatus)}<div style="font-size:10px;color:${e.scheduleCount>0?"#059669":"#dc2626"};margin-top:2px;">${e.scheduleCount??0} คาบ</div>`:'<span style="color:#9ca3af;">–</span>'}
        </td>
        <td ${o(e,"att")}>
          ${e.isRegistered?`${M(e.attStatus)}<div style="font-size:10px;color:${n};margin-top:2px;">${i}</div>`:'<span style="color:#9ca3af;">–</span>'}
        </td>
        <td ${o(e,"score")}>
          ${e.isRegistered?`<span style="font-weight:700;color:${e.scorePct===null?"#9ca3af":e.scorePct>=80?"#059669":e.scorePct>=40?"#d97706":"#dc2626"};">${e.scorePct!==null?e.scorePct+"%":"–"}</span>`:'<span style="color:#9ca3af;">–</span>'}
        </td>
        <td style="padding:10px 12px;text-align:center;white-space:nowrap;">
          <div style="display:flex;gap:6px;justify-content:center;">
            <button class="sv-comment-btn" data-tid="${e.id}" title="แสดงความคิดเห็น"
              style="padding:4px 10px;border:1px solid #d1d5db;border-radius:6px;background:#f9fafb;font-size:13px;cursor:pointer;">💬</button>
            <button class="sv-detail-btn" data-tid="${e.id}"
              style="padding:4px 12px;border:1px solid #d1d5db;border-radius:6px;background:#f9fafb;font-size:12px;cursor:pointer;">ดู →</button>
          </div>
        </td>
      </tr>`}).join("")}
    </tbody>
  </table>`}function C(t,o){t.querySelectorAll(".sv-detail-btn").forEach(e=>{e.addEventListener("click",i=>{i.stopPropagation();const n=o.find(s=>s.id===parseInt(e.dataset.tid));n&&I(n)})}),t.querySelectorAll(".sv-comment-btn").forEach(e=>{e.addEventListener("click",i=>{i.stopPropagation();const n=o.find(s=>s.id===parseInt(e.dataset.tid));n&&xe(n)})}),t.querySelectorAll(".sv-cell[data-pop]").forEach(e=>{e.addEventListener("click",i=>{i.stopPropagation();const n=o.find(s=>s.id===parseInt(e.dataset.tid));n&&fe(e,n,e.dataset.pop)})}),t.querySelectorAll(".sv-th-sort").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.col;y===i?h*=-1:(y=i,h=1),document.getElementById("sv-tbl").innerHTML=z(_(o)),C(t,o)})})}function fe(t,o,e){var c;const i=document.getElementById("sv-cell-popup"),n=(i==null?void 0:i.dataset.anchor)===`${o.id}-${e}`;if(i&&(i.remove(),document.removeEventListener("click",E),n))return;const s=document.createElement("div");s.id="sv-cell-popup",s.dataset.anchor=`${o.id}-${e}`,s.style.cssText="position:fixed;z-index:9200;background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.18);padding:14px;width:min(280px,90vw);max-height:min(400px,70vh);overflow-y:auto;font-size:12px;line-height:1.6;",s.innerHTML=ue(o,e),document.body.appendChild(s);const a=t.getBoundingClientRect(),r=s.getBoundingClientRect();let d=a.left+a.width/2-r.width/2;d=Math.max(8,Math.min(d,window.innerWidth-r.width-8));let l=a.bottom+6;l+r.height>window.innerHeight-8&&(l=Math.max(8,a.top-r.height-6)),s.style.left=`${d}px`,s.style.top=`${l}px`,(c=s.querySelector(".sv-pop-action"))==null||c.addEventListener("click",()=>{s.remove(),document.removeEventListener("click",E),e==="profile"?Y(o):e==="schedule"?W(o):I(o)}),setTimeout(()=>document.addEventListener("click",E),0)}function E(t){const o=document.getElementById("sv-cell-popup");o&&!o.contains(t.target)&&(o.remove(),document.removeEventListener("click",E))}function ue(t,o){const e=s=>{var a;return`${s.class_name}${(a=s.master_subjects)!=null&&a.subject_code?" ("+s.master_subjects.subject_code+")":""}`},i=s=>`<button class="sv-pop-action"
    style="margin-top:10px;width:100%;padding:6px;border:1px solid #6366f1;border-radius:8px;background:#f5f3ff;color:#6366f1;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;">${s}</button>`,n=(s,a,r)=>`<div style="display:flex;justify-content:space-between;gap:10px;padding:2px 0;">
    <span style="color:#6b7280;">${s}</span><span style="font-weight:600;color:${r};">${a}</span>
  </div>`;if(o==="profile")return`<div style="font-weight:700;margin-bottom:6px;">👤 โปรไฟล์</div>
      ${n("📱 เบอร์โทร",t.phone||"✗ ยังไม่ระบุ",t.phone?"#059669":"#dc2626")}
      ${n("📷 รูปโปรไฟล์",t.image_url?"มีแล้ว":"✗ ยังไม่ระบุ",t.image_url?"#059669":"#dc2626")}
      ${i("ดูโปรไฟล์เต็ม →")}`;if(o==="dates"){const s=t.myClasses.filter(a=>!a.hasDate);return`<div style="font-weight:700;margin-bottom:6px;">📅 วันสอน — ${t.datesOk}/${t.classCount} ห้อง</div>
      ${s.length?s.map(a=>`<div style="padding:2px 0;color:#dc2626;">✗ ${e(a)}</div>`).join(""):'<div style="color:#059669;">✓ ครบทุกห้องแล้ว</div>'}
      ${i("ดูรายห้อง →")}`}if(o==="schedule")return`<div style="font-weight:700;margin-bottom:6px;">🗓 ตารางสอน</div>
      <div>${t.scheduleCount>0?`ตั้งตารางสอนแล้ว <strong style="color:#059669;">${t.scheduleCount}</strong> คาบ/สัปดาห์`:'<span style="color:#dc2626;">✗ ยังไม่ได้ตั้งตารางสอน</span>'}</div>
      ${i("ดูตารางสอน →")}`;if(o==="att")return`<div style="font-weight:700;margin-bottom:6px;">✅ เช็คชื่อ</div>
      ${[...t.myClasses].sort((a,r)=>(r.daysSinceAtt??9999)-(a.daysSinceAtt??9999)).map(a=>{const r=a.attChecked?`${a.daysSinceAtt} วันที่แล้ว`:"ยังไม่บันทึก",d=a.attChecked?a.daysSinceAtt<=7?"#059669":a.daysSinceAtt<=14?"#d97706":"#dc2626":"#dc2626";return n(e(a),r,d)}).join("")}
      ${i("ดูรายห้อง →")}`;if(o==="score"){const s=[...t.myClasses].sort((a,r)=>(a.scorePct??-1)-(r.scorePct??-1));return`<div style="font-weight:700;margin-bottom:6px;">📝 คะแนน — รวม ${t.scorePct!==null?t.scorePct+"%":"–"}</div>
      ${s.map(a=>{const r=a.scorePct,d=r===null?"#9ca3af":r>=80?"#059669":r>=40?"#d97706":"#dc2626";return n(e(a),r!==null?r+"%":"–",d)}).join("")}
      ${i("ดูรายห้อง →")}`}return""}function xe(t){const o=A();o.innerHTML=`<div class="sv-popup">
    <button id="sv-pop-close" style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;">✕</button>
    <h3 style="font-size:15px;font-weight:700;margin-bottom:12px;">💬 ความคิดเห็น — ${t.full_name}</h3>
    ${F()}
  </div>`,document.body.appendChild(o),o.querySelector("#sv-pop-close").onclick=()=>o.remove(),o.addEventListener("click",e=>{e.target===o&&o.remove()}),N(t)}function I(t){var a;const o=j;if(!o)return;const e=r=>r?"":"box-shadow:0 0 0 2px #ef4444,0 0 8px rgba(239,68,68,.4);",i=(r,d,l)=>`<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:20px;font-size:12px;border:1.5px solid ${l?"#d1d5db":"#ef4444"};color:${l?"#374151":"#ef4444"};${l?"":"box-shadow:0 0 6px rgba(239,68,68,.25);"}">
      ${r} ${l||d+" (ยังไม่ระบุ)"}
    </span>`,n=t.myClasses.map(r=>{const d=r.master_subjects??{},l=r.day1_date;return`<div class="sv-class-card" data-cid="${r.id}" style="background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:14px 16px;margin-bottom:10px;cursor:pointer;transition:box-shadow .15s;">
      <div style="display:flex;justify-content:space-between;align-items:start;">
        <div style="flex:1;">
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-bottom:6px;">
            <span style="background:#e0f2fe;color:#0369a1;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">${d.subject_code??""}</span>
            ${l?"":'<span style="background:#fee2e2;color:#dc2626;border-radius:6px;padding:2px 8px;font-size:11px;">✗ ยังไม่ระบุวันสอน</span>'}
          </div>
          <div style="font-weight:700;font-size:14px;margin-bottom:2px;">${d.subject_name??""}</div>
          <div style="font-size:12px;color:#6b7280;">🏫 ${r.class_name}</div>
        </div>
        <div style="display:flex;gap:6px;margin-left:8px;">
          <button class="sv-pp5-cls" data-cid="${r.id}"
            style="padding:4px 10px;background:#6366f1;color:#fff;border:none;border-radius:8px;font-size:11px;cursor:pointer;white-space:nowrap;">
            📋 ดูภาพรวม ปพ.5
          </button>
        </div>
      </div>
    </div>`}).join("")||`<div style="color:#9ca3af;font-size:13px;padding:16px 0;">ยังไม่มีห้องเรียน${t.isRegistered?"":" (ครูยังไม่ได้ลงทะเบียน)"}</div>`;o.innerHTML=`
    <div style="max-width:860px;margin:0 auto;padding:20px;">
      <button id="sv-back" style="border:none;background:none;color:#6b7280;font-size:13px;cursor:pointer;margin-bottom:16px;display:flex;align-items:center;gap:4px;">← กลับ Dashboard</button>

      <!-- Profile card — คลิกได้ -->
      <div id="sv-profile-area" style="background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:16px;margin-bottom:16px;cursor:pointer;transition:box-shadow .15s;"
        title="คลิกเพื่อดูโปรไฟล์เต็ม">
        <div style="display:flex;gap:14px;align-items:start;">
          <div style="width:56px;height:56px;border-radius:50%;overflow:hidden;flex-shrink:0;${e(t.image_url)}">
            ${t.image_url?`<img src="${t.image_url}" style="width:100%;height:100%;object-fit:cover;">`:'<div style="width:100%;height:100%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;font-size:22px;">👤</div>'}
          </div>
          <div style="flex:1;">
            <div style="font-size:16px;font-weight:700;margin-bottom:6px;">${t.full_name??"—"}
              ${t.isRegistered?"":'<span style="background:#fef3c7;color:#92400e;border-radius:8px;padding:1px 8px;font-size:11px;margin-left:6px;">ยังไม่ลงทะเบียน</span>'}
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">
              ${i("📱","เบอร์โทร",t.phone)}
              ${i("🏫","กลุ่มสาระ",t.dept)}
              ${i("👤","ประเภท",t.category)}
              ${i("📧","อีเมล",t.login_email)}
            </div>
          </div>
          <span style="font-size:11px;color:#6b7280;flex-shrink:0;margin-top:4px;">ดูโปรไฟล์ →</span>
        </div>
      </div>

      <!-- Class cards -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-weight:700;font-size:14px;color:#374151;">
          📚 รายวิชาที่รับผิดชอบ (${t.classCount} ห้อง)
        </div>
        <button id="sv-view-schedule"
          style="padding:5px 14px;background:${t.scheduleCount>0?"#f59e0b":"#e5e7eb"};color:${t.scheduleCount>0?"#fff":"#9ca3af"};border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:5px;font-family:inherit;">
          🗓 ตารางสอน${t.scheduleCount>0?" ("+t.scheduleCount+" คาบ)":" (ยังไม่มี)"}
        </button>
      </div>
      <div id="sv-class-list">${n}</div>

      <!-- Comment section -->
      ${F()}
    </div>`,document.getElementById("sv-back").onclick=()=>le(j,u,V);const s=document.getElementById("sv-profile-area");s.addEventListener("mouseenter",()=>s.style.boxShadow="0 4px 12px rgba(0,0,0,.1)"),s.addEventListener("mouseleave",()=>s.style.boxShadow=""),s.onclick=()=>Y(t),document.querySelectorAll(".sv-class-card").forEach(r=>{r.addEventListener("mouseenter",()=>r.style.boxShadow="0 4px 12px rgba(0,0,0,.1)"),r.addEventListener("mouseleave",()=>r.style.boxShadow=""),r.addEventListener("click",()=>{const d=t.myClasses.find(l=>l.id===parseInt(r.dataset.cid));d&&be(t,d)})}),(a=document.getElementById("sv-view-schedule"))==null||a.addEventListener("click",async()=>{const r=document.getElementById("sv-view-schedule");r.disabled=!0,r.textContent="⏳ กำลังโหลด...";try{await W(t)}finally{r.disabled=!1,r.innerHTML=`🗓 ตารางสอน${t.scheduleCount>0?" ("+t.scheduleCount+" คาบ)":" (ยังไม่มี)"}`}}),document.querySelectorAll(".sv-pp5-cls").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation(),ie(parseInt(r.dataset.cid))})}),N(t)}function S({icon:t="✅",title:o="",body:e="",type:i="success"}){const n=document.getElementById("sv-popup-overlay");n&&n.remove();const s={success:{bg:"#f0fdf4",border:"#bbf7d0",title:"#15803d",icon:"#22c55e"},error:{bg:"#fef2f2",border:"#fecaca",title:"#b91c1c",icon:"#ef4444"},warning:{bg:"#fffbeb",border:"#fde68a",title:"#92400e",icon:"#f59e0b"}},a=s[i]??s.success,r=document.createElement("div");r.id="sv-popup-overlay",r.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.45);backdrop-filter:blur(4px);",r.innerHTML=`
    <div style="background:#fff;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.25);padding:32px 28px;width:min(360px,90vw);text-align:center;animation:sv-pop-in .2s cubic-bezier(.34,1.56,.64,1);">
      <style>@keyframes sv-pop-in{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}</style>
      <div style="width:56px;height:56px;border-radius:50%;background:${a.bg};border:2px solid ${a.border};display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 16px;">${t}</div>
      ${o?`<div style="font-size:16px;font-weight:700;color:${a.title};margin-bottom:8px;">${o}</div>`:""}
      ${e?`<div style="font-size:13px;color:#6b7280;line-height:1.6;margin-bottom:20px;">${e}</div>`:""}
      <button id="sv-popup-ok"
        style="padding:10px 32px;border:none;border-radius:12px;background:${a.icon};color:#fff;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:opacity .15s;"
        onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">ตกลง</button>
    </div>`,document.body.appendChild(r);const d=()=>r.remove();return document.getElementById("sv-popup-ok").onclick=d,r.addEventListener("click",l=>{l.target===r&&d()}),r}async function T(t){const o=document.getElementById("sv-past-comments");if(!o)return;const e={general:"ทั่วไป",profile:"โปรไฟล์",dates:"วันสอน",attendance:"เช็คชื่อ",scores:"คะแนน"};try{const i=await oe(t);o.innerHTML=i.length?i.map(n=>`
      <div style="background:#f9fafb;border-radius:8px;padding:8px 12px;margin-bottom:6px;font-size:12px;display:flex;justify-content:space-between;align-items:start;">
        <div>
          <span style="background:#e0e7ff;color:#3730a3;border-radius:6px;padding:1px 6px;font-size:10px;margin-right:6px;">${e[n.metric]??n.metric}</span>
          ${n.notify_teacher?'<span style="color:#6366f1;font-size:10px;">🔔 </span>':""}
          <strong>${(u==null?void 0:u.id)===n.supervisor_id?"ฉัน":"หัวหน้า"}</strong>: ${n.comment}
          <div style="color:#9ca3af;font-size:10px;margin-top:2px;">${new Date(n.created_at).toLocaleString("th")}</div>
        </div>
        ${n.supervisor_id===(u==null?void 0:u.id)?`<button data-cid="${n.id}" class="sv-del-c"
          style="border:none;background:none;color:#dc2626;cursor:pointer;font-size:14px;flex-shrink:0;">✕</button>`:""}
      </div>`).join(""):'<div style="color:#9ca3af;font-size:12px;">ยังไม่มีความเห็น</div>',o.querySelectorAll(".sv-del-c").forEach(n=>{n.onclick=async()=>{await ne(parseInt(n.dataset.cid)),await T(t)}})}catch{}}function F(){return`
  <div style="background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:16px;margin-top:16px;">
    <div style="font-weight:700;font-size:14px;margin-bottom:10px;">💬 ความคิดเห็น / บันทึก</div>
    <div id="sv-past-comments" style="margin-bottom:12px;max-height:200px;overflow-y:auto;"></div>
    <button id="sv-open-comment-ui"
      style="width:100%;padding:10px;border:1.5px dashed #6366f1;border-radius:10px;background:#f5f3ff;color:#6366f1;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
      + แสดงความคิดเห็น
    </button>
    <div id="sv-comment-ui" style="display:none;margin-top:12px;">
      <div style="font-size:12px;color:#374151;font-weight:600;margin-bottom:8px;">เลือกหัวข้อ (เลือกได้หลายข้อ):</div>
      <div id="sv-cat-rows" style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px;">
        ${["general:ทั่วไป","profile:โปรไฟล์","schedule:ตารางสอน","dates:วันสอน","attendance:เช็คชื่อ","scores:คะแนน"].map(t=>{const[o,e]=t.split(":");return`<div class="sv-cat-row" data-cat="${o}"
            style="display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;border:1.5px solid #e5e7eb;cursor:pointer;transition:all .15s;">
            <div class="sv-cat-label" style="min-width:80px;font-size:13px;font-weight:600;color:#374151;padding-top:6px;">${e}</div>
            <div class="sv-cat-right" style="display:none;flex:1;flex-direction:column;gap:6px;">
              <div class="sv-phrase-chips" style="display:flex;flex-wrap:wrap;gap:5px;min-height:10px;"></div>
              <textarea class="sv-cat-textarea" data-cat="${o}" rows="2" maxlength="500"
                placeholder="พิมพ์ความคิดเห็นสำหรับ ${e}..."
                style="border:1px solid #d1d5db;border-radius:8px;padding:6px 8px;font-size:12px;font-family:inherit;resize:none;width:100%;box-sizing:border-box;"></textarea>
            </div>
          </div>`}).join("")}
      </div>
      <div style="margin-bottom:10px;">
        <label style="display:block;font-size:12px;color:#374151;font-weight:600;margin-bottom:5px;">📅 อ้างอิงกิจกรรม (ปฏิทินปฏิบัติงาน)</label>
        <select id="sv-round-select"
          style="width:100%;border:1.5px solid #e5e7eb;border-radius:10px;padding:7px 10px;font-size:12px;font-family:inherit;color:#374151;background:#f9fafb;">
          <option value="">— ไม่อ้างอิงกิจกรรม —</option>
        </select>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px;">
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer;">
          <input id="sv-notify-chk" type="checkbox" checked/>
          🔔 แจ้งเตือนครู
        </label>
        <button id="sv-save-comment"
          style="padding:7px 18px;background:#059669;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
          บันทึกทั้งหมด
        </button>
      </div>
    </div>
  </div>`}function N(t){document.getElementById("sv-open-comment-ui").onclick=async()=>{document.getElementById("sv-comment-ui").style.display="",document.getElementById("sv-open-comment-ui").style.display="none";const e=document.getElementById("sv-round-select");if(e&&e.options.length<=1)try{const i=await O(),n=(i==null?void 0:i.academic_year)??new Date().getFullYear()+543,s=(i==null?void 0:i.semester)??1,a=await Z(n,s),r={inspection:"🔍",deadline:"⏰",meeting:"📅",other:"📌"};a.forEach(d=>{const l=document.createElement("option");l.value=d.id;const c=d.event_type==="inspection"&&d.round_number?` ครั้งที่ ${d.round_number}`:"",f=new Date(d.event_date+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short"});l.textContent=`${r[d.event_type]??"📌"}${c} ${d.label} (${f})`,e.appendChild(l)})}catch{}};const o="box-shadow:0 0 0 2px #059669,0 0 8px rgba(5,150,105,.3);border-color:#059669;background:#f0fdf4;";document.querySelectorAll(".sv-cat-row").forEach(e=>{e.onclick=async i=>{if(i.target.tagName==="TEXTAREA"||i.target.closest(".sv-phrase-chips"))return;const n=e.querySelector(".sv-cat-right"),s=e.querySelector("textarea");if(e.dataset.selected==="1")e.dataset.selected="0",e.style.cssText="display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;border:1.5px solid #e5e7eb;cursor:pointer;transition:all .15s;",n.style.display="none";else{e.dataset.selected="1",e.style.cssText=`display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;transition:all .15s;${o}`,n.style.display="flex",s.focus();const r=e.dataset.cat,d=e.querySelector(".sv-phrase-chips");if(!d.children.length){const l=await se(r);d.innerHTML=l.map(c=>`<span class="sv-phrase-chip"
              style="padding:3px 10px;border-radius:20px;border:1px solid #d1d5db;background:#f9fafb;font-size:11px;cursor:pointer;color:#374151;transition:all .1s;"
              onmouseover="this.style.background='#e0f2fe';this.style.borderColor='#0ea5e9'"
              onmouseout="this.style.background='#f9fafb';this.style.borderColor='#d1d5db'">
              ${c}
            </span>`).join(""),d.querySelectorAll(".sv-phrase-chip").forEach((c,f)=>{c.addEventListener("click",g=>{g.stopPropagation();const b=s.value.trim();s.value=b?b+" "+l[f]:l[f],s.focus(),c.style.background="#d1fae5",c.style.borderColor="#059669",setTimeout(()=>{c.style.background="#f9fafb",c.style.borderColor="#d1d5db"},400)})})}}}}),document.getElementById("sv-save-comment").onclick=async()=>{var r;const e=document.getElementById("sv-notify-chk").checked,i=parseInt((r=document.getElementById("sv-round-select"))==null?void 0:r.value)||null,s=[...document.querySelectorAll('.sv-cat-row[data-selected="1"]')].map(d=>({cat:d.dataset.cat,txt:d.querySelector("textarea").value.trim()})).filter(d=>d.txt);if(!s.length){S({icon:"⚠️",title:"กรุณากรอกความคิดเห็น",body:"เลือกหัวข้อและพิมพ์ความคิดเห็นอย่างน้อย 1 หัวข้อก่อนบันทึก",type:"warning"});return}const a=document.getElementById("sv-save-comment");a.disabled=!0,a.textContent="⏳ กำลังบันทึก...";try{for(const{cat:d,txt:l}of s)await ee(u.id,t.id,d,l,e,i);document.getElementById("sv-comment-ui").style.display="none",document.getElementById("sv-open-comment-ui").style.display="",document.querySelectorAll(".sv-cat-row").forEach(d=>{d.dataset.selected="0",d.style.cssText="display:flex;align-items:flex-start;gap:10px;padding:8px 10px;border-radius:10px;border:1.5px solid #e5e7eb;cursor:pointer;transition:all .15s;",d.querySelector("textarea").style.display="none",d.querySelector("textarea").value=""}),await T(t.id),S({icon:"✅",title:"บันทึกสำเร็จ",body:`บันทึกความคิดเห็น ${s.length} หัวข้อเรียบร้อยแล้ว${e?" · แจ้งเตือนครูแล้ว 🔔":""}`,type:"success"})}catch(d){S({icon:"❌",title:"บันทึกไม่สำเร็จ",body:d.message??"เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",type:"error"})}finally{a.disabled=!1,a.textContent="บันทึกทั้งหมด"}},T(t.id)}async function W(t){var r,d,l;(r=document.getElementById("sv-sched-overlay"))==null||r.remove();const o=document.createElement("div");o.id="sv-sched-overlay",o.style.cssText="position:fixed;inset:0;z-index:9500;background:#f9fafb;display:flex;flex-direction:column;overflow:hidden;",o.innerHTML=`
    <div style="background:#fff;border-bottom:1px solid #e5e7eb;padding:0 20px;height:56px;display:flex;align-items:center;gap:12px;flex-shrink:0;box-shadow:0 1px 3px rgba(0,0,0,.08);">
      <button id="sv-sched-back" style="border:none;background:none;color:#6b7280;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:5px;padding:6px 0;font-family:inherit;font-weight:600;">← กลับ</button>
      <div style="width:1px;height:20px;background:#e5e7eb;flex-shrink:0;"></div>
      <div>
        <div style="font-size:13px;font-weight:700;color:#111827;">🗓 ตารางสอน — ${t.full_name}</div>
        <div style="font-size:11px;color:#6b7280;margin-top:1px;">
          ${t.scheduleCount>0?`สอน <strong style="color:#059669;">${t.scheduleCount}</strong> คาบ/สัปดาห์`:"ยังไม่ได้ตั้งตารางสอน"}
        </div>
      </div>
    </div>
    <div id="sv-sched-scroll" style="flex:1;overflow-y:auto;">
      <div id="sv-sched-content"></div>
    </div>`,document.body.appendChild(o),o.querySelector("#sv-sched-back").addEventListener("click",()=>o.remove());const e=document.getElementById("sv-sched-content"),{renderScheduleGrid:i}=await H(async()=>{const{renderScheduleGrid:c}=await import("./teacher-views-BzTMalao.js");return{renderScheduleGrid:c}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),{setMainContentRef:n,getMainContentRef:s}=await H(async()=>{const{setMainContentRef:c,getMainContentRef:f}=await import("./teacher-views-utils-B2Iz3UWp.js");return{setMainContentRef:c,getMainContentRef:f}},__vite__mapDeps([8,1])),a=s();n(e);try{const c=await O().catch(()=>({})),f=parseInt(c.academicYear??2568),g=parseInt(c.semester??1);await i({id:t.id,full_name:t.full_name},f,g,c),(d=e.querySelector("#btn-clear-schedule"))==null||d.remove(),(l=e.querySelector("#btn-upload-schedule"))==null||l.remove(),e.style.pointerEvents="none"}finally{n(a)}}function ge(t){const o=t.dept;if(!o)return null;const e=B.filter(n=>n.dept_code===o);return e.length?e.length===1?e[0].dept_name:(e.find(n=>n.category===t.category)??e[0]).dept_name:o}function Y(t){const o=A(),e=n=>n?"":"box-shadow:0 0 0 2px #ef4444,0 0 8px rgba(239,68,68,.4);border-radius:8px;",i=ge(t);o.innerHTML=`<div class="sv-popup" style="width:min(480px,96vw);">
    <button id="sv-pop-close" style="position:absolute;top:12px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#6b7280;">✕</button>
    <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;">👤 โปรไฟล์ครู</h3>
    <div style="display:flex;gap:14px;align-items:center;margin-bottom:20px;">
      <div style="width:72px;height:72px;border-radius:50%;overflow:hidden;flex-shrink:0;${e(t.image_url)}">
        ${t.image_url?`<img src="${t.image_url}" style="width:100%;height:100%;object-fit:cover;">`:'<div style="width:100%;height:100%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;font-size:28px;">📷</div>'}
      </div>
      <div>
        <div style="font-size:18px;font-weight:700;">${t.full_name??"—"}</div>
        <div style="font-size:12px;color:#6b7280;">${t.isRegistered?t.login_email??"":"⚠ ยังไม่ลงทะเบียน"}</div>
      </div>
    </div>
    <div style="display:grid;gap:10px;">
      ${[["📱 เบอร์โทรศัพท์",t.phone],["🏫 กลุ่มสาระ",i],["👤 ประเภท",t.category],["📚 กลุ่มวิชา",t.subject_group],["📧 อีเมลเข้าสู่ระบบ",t.login_email]].map(([n,s])=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 12px;border-radius:8px;${e(s)}background:${s?"#f9fafb":"#fff5f5"};">
          <span style="font-size:13px;color:#374151;">${n}</span>
          <span style="font-size:13px;font-weight:600;color:${s?"#059669":"#dc2626"};">${s||"✗ ยังไม่ระบุ"}</span>
        </div>`).join("")}
    </div>
  </div>`,document.body.appendChild(o),o.querySelector("#sv-pop-close").onclick=()=>o.remove(),o.addEventListener("click",n=>{n.target===o&&o.remove()})}function be(t,o){var i;(i=document.getElementById("sv-fab-back"))==null||i.remove();const e=document.createElement("button");e.id="sv-fab-back",e.style.cssText=`position:fixed;top:12px;left:12px;z-index:9100;
    background:#1d4ed8;color:#fff;border:none;border-radius:24px;
    padding:8px 16px;font-size:13px;font-weight:600;cursor:pointer;
    box-shadow:0 4px 12px rgba(0,0,0,.25);font-family:inherit;`,e.textContent="← กลับ",e.onclick=()=>{e.remove(),I(t)},document.body.appendChild(e),window._svBackToDetail=()=>{var n;(n=document.getElementById("sv-fab-back"))==null||n.remove(),I(t),window._svBackToDetail=null},window._supervisorClassView=!0,window.dispatchEvent(new CustomEvent("teacher-nav",{detail:{view:"class-detail-sv",classId:o.id}}))}function A(){const t=document.createElement("div");return t.className="sv-overlay",t}function ve(t,o="ตกลง",e="ยกเลิก"){return new Promise(i=>{const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:99999;display:flex;align-items:center;justify-content:center;",n.innerHTML=`<div style="background:#fff;border-radius:16px;padding:24px 28px;width:min(360px,90vw);text-align:center;box-shadow:0 8px 32px rgba(0,0,0,.2);">
      <div style="font-size:14px;font-weight:600;color:#111827;line-height:1.6;margin-bottom:20px;">${t}</div>
      <div style="display:flex;gap:10px;justify-content:center;">
        <button id="sv-cfm-cancel"
          style="flex:1;max-width:120px;padding:9px 0;border:1.5px solid #d1d5db;border-radius:10px;background:#fff;color:#374151;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
          ${e}
        </button>
        <button id="sv-cfm-ok"
          style="flex:1;max-width:120px;padding:9px 0;border:none;border-radius:10px;background:#1d4ed8;color:#fff;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;">
          ${o}
        </button>
      </div>
    </div>`,document.body.appendChild(n),n.querySelector("#sv-cfm-ok").onclick=()=>{n.remove(),i(!0)},n.querySelector("#sv-cfm-cancel").onclick=()=>{n.remove(),i(!1)},n.addEventListener("click",s=>{s.target===n&&(n.remove(),i(!1))})})}export{le as renderSupervisorDashboard};
