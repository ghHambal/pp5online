import{getHomeroomTeachers as q,getStudents as C}from"./api-Bf4Tf4Cp.js";import{o as z}from"./print-overlay-BVfxEd6n.js";import{g as A,a as F}from"./ui-Dw34xP85.js";import{setActiveNav as H,setTitle as M,setContent as v,_htmlEsc as i}from"./teacher-views-utils-CcIxYoIw.js";import"./supabase-BV-W2lsh.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";const f=2569,w=1,N="https://lh3.googleusercontent.com/d/13-Alij9nU0nZmRzDB4i1XuFlpWyetLoT";let n={teacher:null,assignments:[],students:[],category:"สามัญ"};const B=()=>{const a=new Date;return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`},I=a=>{if(!a)return"—";const o=new Date(`${a}T00:00:00`);return Number.isNaN(o.getTime())?"—":`${o.toLocaleDateString("th-TH",{day:"numeric",month:"long"})} พ.ศ.${o.getFullYear()+543}`},y=a=>{const o=a==="ศาสนา"?"religion_room":"main_room",d=n.students.map(s=>s[o]).filter(Boolean),e=n.assignments.filter(s=>s.category===a).map(s=>s.main_room).filter(Boolean);return[...new Set([...e,...d])].sort((s,l)=>String(s).localeCompare(String(l),"th",{numeric:!0}))},b=(a,o)=>n.assignments.find(d=>d.category===a&&d.main_room===o)||null,L=(a,o)=>{const d=a==="ศาสนา"?"religion_room":"main_room";return n.students.filter(e=>e[d]===o).sort((e,s)=>String(e.student_code||"").localeCompare(String(s.student_code||""),"th",{numeric:!0}))},O=a=>a.map((o,d)=>`
  <tr>
    <td>${d+1}</td>
    <td>${i(o.student_code||"")}</td>
    <td class="student-name">${i(o.full_name||"")}</td>
    <td></td><td></td><td></td><td></td><td></td>
  </tr>`).join("")||'<tr><td colspan="8" class="empty-row">ไม่พบรายชื่อนักเรียนในห้องนี้</td></tr>',k=a=>`
  <table class="grade-day-table">
    <thead><tr>
      <th>ลำดับ<br>ที่</th>
      <th>เลข<br>ประจำตัว</th>
      <th>ชื่อ - สกุล<br>(นักเรียน)</th>
      <th>ชื่อ - สกุล<br>(ผู้รับเกรด)</th>
      <th>เกี่ยวข้องกับ<br>นักเรียน</th>
      <th>นักเรียนไม่ได้อาศัย<br>อยู่กับบิดา / มารดา<br>โปรดระบุ........</th>
      <th>เบอร์โทรศัพท์</th>
      <th>หมายเหตุ</th>
    </tr></thead>
    <tbody>${O(a)}</tbody>
  </table>`,P=({category:a,room:o,advisor:d,date:e,students:s})=>`<!doctype html>
<html lang="th"><head><meta charset="utf-8"><title>เอกสารตารางวันรับเกรด</title>
<style>
  @page { size: A4 landscape; margin: 9mm; }
  * { box-sizing: border-box; }
  body { margin: 0; color: #111; font-family: "Sarabun", "TH Sarabun New", Arial, sans-serif; }
  .paper { width: 100%; }
  .heading { text-align: center; margin-bottom: 4px; }
  .heading img { width: 66px; height: 66px; object-fit: contain; margin-bottom: 2px; }
  .heading h1 { margin: 0; font-size: 21px; font-weight: 700; }
  .heading p { margin: 3px 0 8px; font-size: 16px; font-weight: 700; }
  .meta { display: grid; grid-template-columns: 1fr 1fr 1fr; margin: 0 0 3px; font-size: 15px; }
  .meta span { min-height: 28px; padding: 3px 8px; }
  .meta .teacher { grid-column: 2; text-align: center; border-bottom: 1px dotted #555; }
  .meta .room { grid-column: 3; text-align: center; border-bottom: 1px dotted #555; }
  .instruction { margin: 2px 0 8px; font-size: 15px; font-weight: 700; text-decoration: underline; }
  .grade-day-table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 11px; }
  .grade-day-table th, .grade-day-table td { border: 1px solid #222; padding: 5px 4px; text-align: center; vertical-align: middle; }
  .grade-day-table th { height: 47px; line-height: 1.25; }
  .grade-day-table td { height: 39px; }
  .grade-day-table th:nth-child(1) { width: 6%; } .grade-day-table th:nth-child(2) { width: 8%; }
  .grade-day-table th:nth-child(3) { width: 17%; } .grade-day-table th:nth-child(4) { width: 17%; }
  .grade-day-table th:nth-child(5) { width: 10%; } .grade-day-table th:nth-child(6) { width: 18%; }
  .grade-day-table th:nth-child(7) { width: 13%; } .grade-day-table th:nth-child(8) { width: 11%; }
  .grade-day-table .student-name { text-align: left; padding-left: 8px; }
  .empty-row { height: 42px; color: #777; }
</style></head><body><main class="paper">
  <div class="heading"><img src="${N}" alt=""><h1>ตารางข้อมูลนักเรียนสำหรับครูที่ปรึกษาในวันรายงานเกรดผู้ปกครองเทอม ${w}/${f}</h1>
    <p>วันที่ ${i(I(e))}</p>
  </div>
  <div class="meta"><span class="teacher">ชื่อ-สกุล(ครูปรึกษา): <b>${i(d)}</b></span><span class="room">ชั้น ${i(o)}</span></div>
  <div class="instruction">ขอให้ครูเขียนชื่อนักเรียนตามลำดับในรายชื่อให้เรียบร้อย</div>
  ${k(s)}
</main></body></html>`;function Y(){var S,_;(S=document.getElementById("grade-day-modal"))==null||S.remove();const a=y(n.category),o=a[0]||"",d=b(n.category,o),e=document.createElement("div");e.id="grade-day-modal",e.className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-3 sm:p-6",e.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[94vh] overflow-y-auto">
    <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-100 bg-white px-5 py-4 sm:px-7">
      <div><p class="text-xs font-bold uppercase tracking-wider text-indigo-600">School document · ภาคเรียนที่ 1/2569</p><h2 class="mt-1 text-lg font-extrabold text-gray-800">สร้างเอกสารตารางวันรับเกรด</h2><p class="mt-1 text-xs text-gray-500">ระบบเติมเฉพาะข้อมูลนักเรียน ส่วนข้อมูลผู้รับเกรดเว้นว่างสำหรับเขียนเอง</p></div>
      <button id="grade-day-close" class="rounded-xl border border-gray-200 px-3 py-1.5 text-xl text-gray-500 hover:bg-gray-50" aria-label="ปิดหน้าต่าง">×</button>
    </div>
    <div class="space-y-4 p-5 sm:p-7">
      <div>
        <div class="flex flex-wrap items-end justify-between gap-2">
          <div><p class="text-xs font-bold text-gray-700">เลือกกลุ่มครูที่ปรึกษา</p><p class="mt-1 text-xs text-gray-500">สลับเพื่อโหลดห้องเรียนและครูที่ปรึกษาของแต่ละสายโดยตรง</p></div>
          <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">ข้อมูลภาคเรียนที่ 1/2569</span>
        </div>
        <div class="mt-2 grid grid-cols-2 gap-2" role="group" aria-label="เลือกสายการเรียน">
          <button type="button" data-grade-day-category="สามัญ" aria-pressed="${n.category==="สามัญ"?"true":"false"}" class="grade-day-category-btn rounded-xl border px-4 py-3 text-left transition ${n.category==="สามัญ"?"border-indigo-600 bg-indigo-600 text-white shadow-md":"border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50"}"><span class="block text-sm font-extrabold">🏫 สามัญ</span><span data-grade-day-category-subtitle class="mt-1 block text-[11px] ${n.category==="สามัญ"?"text-indigo-100":"text-gray-500"}">ครูที่ปรึกษาภาคสามัญ</span></button>
          <button type="button" data-grade-day-category="ศาสนา" aria-pressed="${n.category==="ศาสนา"?"true":"false"}" class="grade-day-category-btn rounded-xl border px-4 py-3 text-left transition ${n.category==="ศาสนา"?"border-amber-600 bg-amber-500 text-white shadow-md":"border-gray-200 bg-white text-gray-700 hover:border-amber-300 hover:bg-amber-50"}"><span class="block text-sm font-extrabold">🕌 ศาสนา</span><span data-grade-day-category-subtitle class="mt-1 block text-[11px] ${n.category==="ศาสนา"?"text-amber-100":"text-gray-500"}">ครูที่ปรึกษาภาคศาสนา</span></button>
        </div>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <label class="block text-xs font-bold text-gray-600">ห้องเรียน <span class="font-normal text-gray-400">เลือกจากฐานข้อมูล</span>
          <select id="grade-day-room" class="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400">${a.map(t=>`<option value="${i(t)}">${i(t)}</option>`).join("")||'<option value="">ไม่พบห้อง</option>'}</select>
        </label>
        <label class="block text-xs font-bold text-gray-600">ห้องที่พิมพ์ในเอกสาร <span class="font-normal text-emerald-600">แก้ไขได้</span>
          <input id="grade-day-room-edit" value="${i(o)}" class="mt-1.5 w-full rounded-xl border border-emerald-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-400">
        </label>
        <label class="block text-xs font-bold text-gray-600">ชื่อครูที่ปรึกษา <span class="font-normal text-emerald-600">แก้ไขได้</span>
          <input id="grade-day-advisor" value="${i(((_=d==null?void 0:d.teachers)==null?void 0:_.full_name)||"")}" class="mt-1.5 w-full rounded-xl border border-emerald-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-400" placeholder="ชื่อ-สกุลครูที่ปรึกษา">
        </label>
      </div>
      <label class="block max-w-xs text-xs font-bold text-gray-600">วันที่จัดทำเอกสาร
        <input id="grade-day-date" type="date" value="${B()}" class="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400">
      </label>
      <div id="grade-day-status" class="rounded-xl bg-indigo-50 px-4 py-3 text-xs leading-6 text-indigo-700"></div>
      <div class="overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-3"><div id="grade-day-preview"></div></div>
      <div class="flex flex-wrap justify-end gap-2"><button id="grade-day-cancel" class="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50">ยกเลิก</button><button id="grade-day-print" class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">🖨️ พิมพ์ / บันทึก PDF</button></div>
    </div>
  </div>`,document.body.appendChild(e);const s=[...e.querySelectorAll("[data-grade-day-category]")];let l=n.category;const m=e.querySelector("#grade-day-room"),x=e.querySelector("#grade-day-room-edit"),u=e.querySelector("#grade-day-advisor"),T=e.querySelector("#grade-day-date"),j=e.querySelector("#grade-day-preview"),D=e.querySelector("#grade-day-status"),$=()=>{s.forEach(t=>{const r=t.dataset.gradeDayCategory===l;t.setAttribute("aria-pressed",String(r)),t.classList.toggle("shadow-md",r),t.classList.toggle("border-indigo-600",r&&l==="สามัญ"),t.classList.toggle("bg-indigo-600",r&&l==="สามัญ"),t.classList.toggle("border-amber-600",r&&l==="ศาสนา"),t.classList.toggle("bg-amber-500",r&&l==="ศาสนา"),t.classList.toggle("text-white",r),t.classList.toggle("border-gray-200",!r),t.classList.toggle("bg-white",!r),t.classList.toggle("text-gray-700",!r);const g=t.querySelector("[data-grade-day-category-subtitle]");g&&(["text-indigo-100","text-amber-100","text-gray-500"].forEach(c=>g.classList.remove(c)),g.classList.add(r?l==="สามัญ"?"text-indigo-100":"text-amber-100":"text-gray-500"))})},h=()=>{var c,p;const t=l,r=m.value,g=L(t,r);j.innerHTML=k(g),D.innerHTML=`พบข้อมูลนักเรียน <strong>${g.length}</strong> คน · ครูที่ปรึกษาจากฐานข้อมูล: <strong>${i(((p=(c=b(t,r))==null?void 0:c.teachers)==null?void 0:p.full_name)||"ยังไม่มีการมอบหมาย")}</strong> · ข้อมูลผู้รับเกรดทุกช่องเว้นว่าง`},R=()=>{var c,p;const t=l,r=y(t);m.innerHTML=r.map(E=>`<option value="${i(E)}">${i(E)}</option>`).join("")||'<option value="">ไม่พบห้อง</option>';const g=r[0]||"";x.value=g,u.value=((p=(c=b(t,g))==null?void 0:c.teachers)==null?void 0:p.full_name)||"",h()};s.forEach(t=>t.addEventListener("click",()=>{l=t.dataset.gradeDayCategory,$(),R()})),m.addEventListener("change",()=>{var t,r;x.value=m.value,u.value=((r=(t=b(l,m.value))==null?void 0:t.teachers)==null?void 0:r.full_name)||"",h()}),e.querySelector("#grade-day-close").addEventListener("click",()=>e.remove()),e.querySelector("#grade-day-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#grade-day-print").addEventListener("click",()=>{const t=l,r=x.value.trim(),g=u.value.trim(),c=L(t,m.value);if(!r||!g){F("กรุณาตรวจสอบห้องเรียนและชื่อครูที่ปรึกษา","error");return}z(P({category:t,room:r,advisor:g,date:T.value,students:c}),{autoprint:!1})}),$(),h()}async function V(a){var o;H("grade-day"),M("เอกสารตารางวันรับเกรด","grade-day"),v('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูลนักเรียนและครูที่ปรึกษา...</div>');try{const[d,e]=await Promise.all([q(f,w),C()]),s=d.filter(x=>Number(x.academic_year)===f&&Number(x.semester)===w);n={teacher:a,assignments:s,students:e,category:"สามัญ"};const l=y("สามัญ").length,m=y("ศาสนา").length;v(`<div class="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p class="text-xs font-bold uppercase tracking-wider text-indigo-600">School document</p><h1 class="mt-1 text-2xl font-extrabold text-gray-800">เอกสารตารางวันรับเกรด</h1><p class="mt-1 max-w-2xl text-sm text-gray-500">ข้อมูลภาคเรียนที่ 1/2569 จากฐานข้อมูลนักเรียนและครูที่ปรึกษา รองรับทั้งสายสามัญและศาสนา</p></div><button id="grade-day-create" class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">＋ สร้างเอกสาร</button></div>
      <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"><div class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="font-bold text-gray-800">ข้อมูลพร้อมใช้งาน</h2><p class="mt-1 text-xs text-gray-500">เลือกห้องแล้วระบบจะเติมรายชื่อนักเรียนและชื่อครูที่ปรึกษาให้ทันที</p></div><span class="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">ภาคเรียนที่ 1/2569</span></div><div class="mt-5 grid gap-3 sm:grid-cols-2"><div class="rounded-xl bg-emerald-50 p-4"><div class="text-xs text-emerald-700">ห้องสายสามัญ</div><strong class="mt-1 block text-2xl text-emerald-800">${l}</strong></div><div class="rounded-xl bg-amber-50 p-4"><div class="text-xs text-amber-700">ห้องสายศาสนา</div><strong class="mt-1 block text-2xl text-amber-800">${m}</strong></div></div><div class="mt-5 rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-xs leading-6 text-indigo-800">ระบบจะเติมเฉพาะลำดับที่ เลขประจำตัว และชื่อ-สกุลนักเรียน ส่วนชื่อผู้รับเกรด ความเกี่ยวข้อง ที่พักอาศัย เบอร์โทรศัพท์ และหมายเหตุจะเว้นว่างให้เขียนเอง</div></section>`),(o=document.getElementById("grade-day-create"))==null||o.addEventListener("click",Y)}catch(d){console.error(d),v(`<div class="rounded-2xl border border-red-100 bg-white p-8 text-center text-red-500">โหลดข้อมูลเอกสารไม่สำเร็จ: ${i(A(d))}</div>`)}}export{V as renderGradeDayDocuments};
