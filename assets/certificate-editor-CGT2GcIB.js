import{d as ge,U as xe,v as V,w as ie,x as ye}from"./certificate-engine-Ciw2pKHx.js";import{f as fe,t as de}from"./storage-D6nkcVz6.js";import{a as B}from"./ui-Dh03k4iX.js";const m=S=>String(S??"").replace(/[&<>"']/g,u=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[u]),f=(S,u,X)=>Math.min(X,Math.max(u,S)),H=S=>`${S}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`,le=S=>String(S||"").replace(/[^A-Za-z0-9 _-]/g,"").trim();function W(S){const u=le(S);if(!u)return;const X=`cert-font-${u.toLowerCase().replace(/\s+/g,"-")}`;if(document.getElementById(X))return;const z=document.createElement("link");z.id=X,z.rel="stylesheet",z.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(u).replace(/%20/g,"+")}:wght@400;600;700&display=swap`,document.head.appendChild(z)}function we(S){var re,ae,ne;const{template:u,previewVariables:X,placeholderTokens:z=[],onSave:ce}=S;(re=document.getElementById("cce-overlay"))==null||re.remove();let c=JSON.parse(JSON.stringify((ae=u==null?void 0:u.layout)!=null&&ae.elements?u.layout:ge((u==null?void 0:u.type)==="custom"?"custom":(u==null?void 0:u.preset_key)??"gold_classic")));((ne=c.background)==null?void 0:ne.type)==="image"&&!c.background.imageUrl&&(u!=null&&u.background_image_url)&&(c.background.imageUrl=u.background_image_url),c.orientation||(c.orientation="landscape"),Array.isArray(c.customFonts)||(c.customFonts=[]);let p=new Set,Y=null;const Z=new Map;[...xe,...z].forEach(e=>Z.set(e.token,e));const se=[...Z.values()],ue={name:"เด็กชาย ตัวอย่าง นักเรียน",student_code:"25944",date:new Date().toLocaleDateString("th-TH",{dateStyle:"long"}),no:"CERT-2569-000001",...X};[...V,...c.customFonts,...(c.elements??[]).map(e=>e.fontFamily)].filter(Boolean).forEach(W);const be=document.body.style.overflow;document.body.style.overflow="hidden";const g=document.createElement("div");g.id="cce-overlay",g.className="fixed inset-0 z-[9999] bg-white flex flex-col",g.innerHTML=`
    <div class="flex items-center gap-2 px-3 sm:px-5 py-2.5 border-b border-gray-200 flex-shrink-0 shadow-sm overflow-x-auto">
      <h3 class="mr-auto min-w-[180px] font-bold text-sm text-gray-800 truncate">🎨 ${m((u==null?void 0:u.name)??"เทมเพลตเกียรติบัตร")}</h3>
      <button id="cce-add-el" type="button" title="เพิ่มข้อความ" class="h-9 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold whitespace-nowrap">✚ ข้อความ</button>
      <label id="cce-add-logo" title="เพิ่มโลโก้หรือรูป" class="h-9 px-3 inline-flex items-center rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold cursor-pointer whitespace-nowrap">🖼️ รูป<input type="file" id="cce-add-logo-file" accept="image/*" class="hidden" /></label>
      <label title="เพิ่มกราฟิกมุมบน ระบบจะสะท้อนไปอีกฝั่งอัตโนมัติ" class="h-9 px-3 inline-flex items-center rounded-lg border border-amber-200 bg-amber-50 text-amber-700 text-xs font-bold cursor-pointer whitespace-nowrap">⌜ มุมบน<input type="file" id="cce-add-corner-top" accept="image/*" class="hidden" /></label>
      <label title="เพิ่มกราฟิกมุมล่าง ระบบจะสะท้อนไปอีกฝั่งอัตโนมัติ" class="h-9 px-3 inline-flex items-center rounded-lg border border-amber-200 bg-amber-50 text-amber-700 text-xs font-bold cursor-pointer whitespace-nowrap">⌞ มุมล่าง<input type="file" id="cce-add-corner-bottom" accept="image/*" class="hidden" /></label>
      <button id="cce-select-all" type="button" title="เลือกทุกองค์ประกอบ" class="h-9 px-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 text-xs font-bold whitespace-nowrap">☑ เลือกทั้งหมด</button>
      <button id="cce-duplicate" type="button" title="คัดลอกองค์ประกอบที่เลือกพร้อมค่าทั้งหมด" disabled class="h-9 w-9 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-30 text-base">⧉</button>
      <button id="cce-save" type="button" class="h-9 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold whitespace-nowrap">💾 บันทึก</button>
      <button id="cce-close" type="button" title="ปิด" class="h-9 w-9 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 text-xl">×</button>
    </div>
    <div class="flex-1 min-h-0 flex flex-col lg:flex-row overflow-y-auto">
      <div class="flex-1 min-w-0 p-4 sm:p-6 flex flex-col gap-3 overflow-auto bg-slate-50">
        <div id="cce-canvas-wrap" class="relative w-full max-w-3xl mx-auto select-none drop-shadow-xl"></div>
        <p class="text-[11px] text-gray-400 text-center">ลากเพื่อจัดตำแหน่ง • กดองค์ประกอบเพื่อแก้ไข • Shift/Ctrl + คลิก หรือลากคลุมพื้นที่ว่าง เพื่อเลือกหลายรายการ • Ctrl/⌘ + D เพื่อคัดลอก</p>
        <div class="max-w-3xl w-full mx-auto grid sm:grid-cols-2 gap-3">
          <div class="bg-white border border-gray-200 rounded-xl p-3">
            <p class="text-[11px] font-bold text-gray-700 mb-2">📐 แนวกระดาษ</p>
            <div class="flex gap-2">
              <button type="button" id="cce-orient-landscape" title="แนวนอน" class="cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold">▭ แนวนอน</button>
              <button type="button" id="cce-orient-portrait" title="แนวตั้ง" class="cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold">▯ แนวตั้ง</button>
            </div>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-3">
            <p class="text-[11px] font-bold text-gray-700 mb-2">🖼️ พื้นหลัง</p>
            <div class="flex flex-wrap items-center gap-2">
              <label class="px-2.5 py-1.5 rounded-lg border border-gray-300 text-xs font-bold cursor-pointer bg-white">📤 อัปโหลด<input type="file" id="cce-bg-file" accept="image/*" class="hidden" /></label>
              ${Object.entries(ie).map(([e,t])=>`<button type="button" class="cce-bg-preset w-7 h-7 rounded-full border-2 border-white shadow" style="background:${t.bg}" data-preset="${e}" title="${m(e)}"></button>`).join("")}
            </div>
          </div>
        </div>
      </div>
      <div id="cce-panel" class="lg:w-[25rem] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white p-4 sm:p-5 overflow-y-auto"></div>
    </div>`,document.body.appendChild(g);const G=g.querySelector("#cce-canvas-wrap"),i=g.querySelector("#cce-panel"),Q=g.querySelector("#cce-duplicate"),q=e=>`<p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">${e}</p>`,v=({id:e,label:t,value:a,min:d,max:r,step:l=1,suffix:s=""})=>`
    <label class="block text-[11px] text-gray-500">
      <span class="flex items-center justify-between gap-2"><span>${t}</span><output data-range-value="${e}" class="min-w-[3.25rem] rounded-md bg-indigo-50 px-2 py-0.5 text-right font-bold text-indigo-700">${a}${s}</output></span>
      <input id="${e}" type="range" min="${d}" max="${r}" step="${l}" value="${a}" class="mt-1.5 w-full accent-indigo-600 cursor-pointer" />
    </label>`,h=(e,t,a,d="")=>{const r=e.querySelector(`#${t}`);if(!r)return;const l=e.querySelector(`[data-range-value="${t}"]`);r.addEventListener("input",s=>{l&&(l.textContent=`${s.target.value}${d}`),a(s)})};function ee(){return(c.elements??[]).filter(e=>p.has(e.id))}function y(){const e=c.orientation==="portrait";G.style.maxWidth=e?"26rem":"48rem",G.innerHTML=ye({layout:c,variables:ue});const t=G.querySelector(".cert-canvas");t==null||t.addEventListener("pointerdown",r=>{if(r.target.closest("[data-cert-el-id]"))return;r.preventDefault();const l=r.shiftKey||r.ctrlKey||r.metaKey,s=l?new Set(p):new Set,o=t.getBoundingClientRect(),b=r.clientX,w=r.clientY,F=[...t.querySelectorAll("[data-cert-el-id]")].map(n=>({id:n.dataset.certElId,rect:n.getBoundingClientRect()}));let T=!1;const k=document.createElement("div");k.style.cssText="position:absolute;border:1.5px dashed #6366f1;background:rgba(99,102,241,0.12);pointer-events:none;z-index:60;display:none;",t.appendChild(k);const x=n=>{const N=n.clientX-b,O=n.clientY-w;if(!T&&Math.hypot(N,O)<4)return;T=!0;const A=Math.min(b,n.clientX),D=Math.max(b,n.clientX),U=Math.min(w,n.clientY),M=Math.max(w,n.clientY);k.style.display="block",k.style.left=A-o.left+"px",k.style.top=U-o.top+"px",k.style.width=D-A+"px",k.style.height=M-U+"px";const P=F.filter($=>$.rect.left<D&&$.rect.right>A&&$.rect.top<M&&$.rect.bottom>U).map($=>$.id);p=new Set([...s,...P]),t.querySelectorAll("[data-cert-el-id]").forEach($=>{$.style.outline=p.has($.dataset.certElId)?"2px dashed #0ea5e9":"none"})},L=()=>{window.removeEventListener("pointermove",x),window.removeEventListener("pointerup",L),k.remove(),!T&&!l&&p.clear(),y(),E()};window.addEventListener("pointermove",x),window.addEventListener("pointerup",L)}),G.querySelectorAll("[data-cert-el-id]").forEach(r=>{const l=r.dataset.certElId,s=c.elements.find(o=>o.id===l);r.style.cursor=(s==null?void 0:s.type)==="cornerGraphic"?"pointer":"move",r.style.outline=p.has(l)?"2px dashed #0ea5e9":"none",r.style.outlineOffset="3px",r.addEventListener("pointerdown",o=>{if(o.shiftKey||o.ctrlKey||o.metaKey){o.preventDefault(),p.has(l)?p.delete(l):p.add(l),y(),E();return}if((s==null?void 0:s.type)==="cornerGraphic"){o.preventDefault(),p=new Set([l]),y(),E();return}pe(o,l)})}),Q.disabled=!p.size;const a="bg-indigo-600 text-white border-indigo-600",d="bg-white text-gray-700 border-gray-300";g.querySelector("#cce-orient-landscape").className=`cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold ${e?d:a}`,g.querySelector("#cce-orient-portrait").className=`cce-orient-btn flex-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold ${e?a:d}`}function _(){if(!p.size)return;const e=p.size;c.elements=c.elements.filter(t=>!p.has(t.id)),p.clear(),y(),E(),e>1&&B(`ลบ ${e} รายการแล้ว`,"success")}function j(){const e=ee();if(!e.length)return;const t=e.map(a=>{const d=JSON.parse(JSON.stringify(a));return d.id=H(a.type==="image"||a.type==="cornerGraphic"?"img":"el"),d.x!=null&&(d.x=f(Number(d.x)+3,0,100)),d.y!=null&&(d.y=f(Number(d.y)+3,0,100)),d.type==="cornerGraphic"&&(d.insetY=f(Number(d.insetY||2)+3,0,45)),d});c.elements.push(...t),p=new Set(t.map(a=>a.id)),y(),E(),B(t.length>1?`คัดลอก ${t.length} รายการพร้อมรูปแบบและเอฟเฟกต์แล้ว`:"คัดลอกพร้อมรูปแบบและเอฟเฟกต์แล้ว","success")}function R(e){var d;const t=e.type==="cornerGraphic";i.innerHTML=`
      <div class="space-y-5">
        <div>
          ${q(t?"กราฟิกมุมแบบสะท้อนอัตโนมัติ":"โลโก้ / รูปภาพ")}
          <div class="rounded-xl border border-gray-200 bg-gray-50 p-3 flex items-center justify-center"><img src="${m(e.imageUrl)}" class="max-h-28 object-contain" /></div>
          <label class="mt-2.5 block w-full text-center px-2.5 py-2 rounded-lg border border-gray-300 text-xs font-bold cursor-pointer bg-white">📤 เปลี่ยนรูป<input type="file" id="cce-f-image-replace" accept="image/*" class="hidden" /></label>
        </div>
        ${t?`
          <div class="pt-4 border-t border-gray-200">
            ${q("ตำแหน่งคู่สะท้อน")}
            <div class="grid grid-cols-2 gap-2">
              <button type="button" data-corner-pos="top" class="cce-corner-pos px-3 py-2 rounded-lg border text-xs font-bold ${e.position!=="bottom"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-300"}">⌜ ด้านบน</button>
              <button type="button" data-corner-pos="bottom" class="cce-corner-pos px-3 py-2 rounded-lg border text-xs font-bold ${e.position==="bottom"?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-300"}">⌞ ด้านล่าง</button>
            </div>
            <div class="space-y-3 mt-3">
              ${v({id:"cce-f-inset-x",label:"ระยะขอบซ้าย-ขวา",value:e.insetX??2,min:0,max:45,suffix:"%"})}
              ${v({id:"cce-f-inset-y",label:"ระยะขอบบน-ล่าง",value:e.insetY??2,min:0,max:45,suffix:"%"})}
            </div>
          </div>`:""}
        <div class="pt-4 border-t border-gray-200">
          ${q("ขนาดและความโปร่งใส")}
          <div class="space-y-3">
            ${v({id:"cce-f-width",label:"ความกว้าง",value:e.width??20,min:2,max:t?45:100,suffix:"%"})}
            ${v({id:"cce-f-opacity",label:"ความทึบ",value:Math.round((e.opacity??1)*100),min:0,max:100,suffix:"%"})}
          </div>
          ${t?'<p class="text-[10px] text-amber-600 mt-2">✨ รูปฝั่งขวาจะสะท้อนจากฝั่งซ้ายอัตโนมัติ</p>':`<button type="button" id="cce-f-flip" title="สะท้อนรูปแนวนอน" class="mt-3 w-full py-2 rounded-lg border text-xs font-bold ${e.flipX?"bg-indigo-600 border-indigo-600 text-white":"border-gray-300 text-gray-600"}">⇆ สะท้อนแนวนอน</button>`}
        </div>
        <div class="pt-4 border-t border-gray-200 grid grid-cols-2 gap-2">
          <button id="cce-f-duplicate" type="button" class="py-2 rounded-lg border border-indigo-300 text-indigo-600 text-xs font-bold hover:bg-indigo-50">⧉ คัดลอก</button>
          <button id="cce-f-delete" type="button" class="py-2 rounded-lg border border-red-300 text-red-500 text-xs font-bold hover:bg-red-50">🗑️ ลบ</button>
        </div>
      </div>`;const a=r=>{Object.assign(e,r),y()};h(i,"cce-f-width",r=>a({width:f(Number(r.target.value)||14,2,t?45:100)}),"%"),h(i,"cce-f-opacity",r=>a({opacity:f(Number(r.target.value)||0,0,100)/100}),"%"),(d=i.querySelector("#cce-f-flip"))==null||d.addEventListener("click",()=>{a({flipX:!e.flipX}),R(e)}),i.querySelectorAll(".cce-corner-pos").forEach(r=>r.addEventListener("click",()=>{a({position:r.dataset.cornerPos}),R(e)})),h(i,"cce-f-inset-x",r=>a({insetX:f(Number(r.target.value)||0,0,45)}),"%"),h(i,"cce-f-inset-y",r=>a({insetY:f(Number(r.target.value)||0,0,45)}),"%"),i.querySelector("#cce-f-image-replace").addEventListener("change",async r=>{var s;const l=(s=r.target.files)==null?void 0:s[0];if(l){r.target.disabled=!0;try{const o=await de(l);a({imageUrl:o}),R(e)}catch(o){B("อัปโหลดไม่สำเร็จ: "+(o.message??""),"error"),r.target.disabled=!1}}}),i.querySelector("#cce-f-duplicate").addEventListener("click",j),i.querySelector("#cce-f-delete").addEventListener("click",_)}function C(e){var l,s;const t=[...new Set([...V,...c.customFonts,e.fontFamily].filter(Boolean))],a={enabled:!1,color:"#000000",offsetX:2,offsetY:2,blur:3,...e.shadow??{}},d={enabled:!1,color:"#ffffff",width:1,...e.stroke??{}};i.innerHTML=`
      <div class="space-y-5">
        <div>
          ${q("ข้อความและข้อมูลอัตโนมัติ")}
          <textarea id="cce-f-text" rows="3" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white leading-relaxed">${m(e.text)}</textarea>
          <div class="grid grid-cols-2 gap-1.5 mt-2">
            ${se.map(o=>`<button type="button" title="แทรก ${m(o.token)}" class="cce-insert-token flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold hover:bg-indigo-100 text-left" data-token="${m(o.token)}"><span>⚡</span><span class="truncate">${m(o.label)}</span></button>`).join("")}
          </div>
        </div>
        <div class="pt-4 border-t border-gray-200">
          ${q("ฟอนต์")}
          <select id="cce-f-font" class="w-full border border-gray-300 rounded-lg px-2.5 py-2 text-sm bg-white">
            ${t.map(o=>`<option value="${m(o)}" style="font-family:'${m(o)}',sans-serif" ${o===(e.fontFamily||"Sarabun")?"selected":""}>${m(o)} — ตัวอย่างภาษาไทย</option>`).join("")}
          </select>
          <div class="flex gap-2 mt-2">
            <input id="cce-google-font-name" type="text" placeholder="Google Font เช่น IBM Plex Sans Thai" class="min-w-0 flex-1 border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs" />
            <button id="cce-add-google-font" type="button" title="เพิ่ม Google Font" class="w-9 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold">+</button>
          </div>
        </div>
        <div class="pt-4 border-t border-gray-200">
          ${q("รูปแบบตัวอักษร")}
          <div class="flex gap-1.5 mb-3">
            <button type="button" id="cce-f-bold" title="ตัวหนา" class="h-9 w-9 rounded-lg border font-black ${e.bold?"bg-indigo-600 text-white border-indigo-600":"border-gray-300 text-gray-600"}">B</button>
            ${[["left","≡","ชิดซ้าย"],["center","≣","กึ่งกลาง"],["right","≡","ชิดขวา"]].map(([o,b,w])=>`<button type="button" data-align="${o}" title="${w}" class="cce-align h-9 w-9 rounded-lg border font-bold ${e.align===o?"bg-indigo-600 text-white border-indigo-600":"border-gray-300 text-gray-600"}" style="${o==="right"?"transform:scaleX(-1)":""}">${b}</button>`).join("")}
          </div>
          <label class="text-[11px] text-gray-500 block mb-3">สี<input id="cce-f-color" type="color" value="${m(e.color)}" class="mt-1 w-full h-9 border border-gray-300 rounded-lg cursor-pointer" /></label>
          <div class="space-y-3">
            ${v({id:"cce-f-size",label:"ขนาดตัวอักษร",value:e.fontSize,min:6,max:120,suffix:" px"})}
            ${v({id:"cce-f-letter",label:"ระยะห่างตัวอักษร",value:e.letterSpacing??0,min:-5,max:20,step:.5,suffix:" px"})}
            ${v({id:"cce-f-opacity",label:"ความทึบ",value:Math.round((e.opacity??1)*100),min:0,max:100,suffix:"%"})}
          </div>
        </div>
        <div class="pt-4 border-t border-gray-200">
          ${q("เอฟเฟกต์")}
          <div class="grid grid-cols-2 gap-2">
            <button type="button" id="cce-toggle-shadow" title="${a.enabled?"กดเพื่อปิดเงา":"กดเพื่อเปิดเงา"}" class="px-3 py-2 rounded-lg border text-xs font-bold ${a.enabled?"bg-indigo-600 text-white border-indigo-600":"border-gray-300 text-gray-600"}">◒ เงา: ${a.enabled?"เปิด":"ปิด"}</button>
            <button type="button" id="cce-toggle-stroke" title="${d.enabled?"กดเพื่อปิดสโตรก":"กดเพื่อเปิดสโตรก"}" class="px-3 py-2 rounded-lg border text-xs font-bold ${d.enabled?"bg-indigo-600 text-white border-indigo-600":"border-gray-300 text-gray-600"}">◎ สโตรก: ${d.enabled?"เปิด":"ปิด"}</button>
          </div>
          ${a.enabled?`<div class="mt-3 p-3 rounded-xl border border-indigo-100 bg-indigo-50/50 space-y-3">
            <p class="text-[10px] font-bold text-gray-500">ค่าเงา</p>
            <label class="text-[11px] text-gray-500 block">สีเงา<input id="cce-shadow-color" type="color" value="${m(a.color)}" class="mt-1 w-full h-8 rounded border cursor-pointer" /></label>
            ${v({id:"cce-shadow-x",label:"เยื้องแนวนอน",value:a.offsetX,min:-20,max:20,suffix:" px"})}
            ${v({id:"cce-shadow-y",label:"เยื้องแนวตั้ง",value:a.offsetY,min:-20,max:20,suffix:" px"})}
            ${v({id:"cce-shadow-blur",label:"ความเบลอ",value:a.blur,min:0,max:30,suffix:" px"})}
          </div>`:""}
          ${d.enabled?`<div class="mt-3 p-3 rounded-xl border border-indigo-100 bg-indigo-50/50 space-y-3">
            <p class="text-[10px] font-bold text-gray-500">ค่าสโตรก</p>
            <label class="text-[11px] text-gray-500 block">สีสโตรก<input id="cce-stroke-color" type="color" value="${m(d.color)}" class="mt-1 w-full h-8 rounded border cursor-pointer" /></label>
            ${v({id:"cce-stroke-width",label:"ความหนาสโตรก",value:d.width,min:0,max:10,step:.5,suffix:" px"})}
          </div>`:""}
        </div>
        <div class="pt-4 border-t border-gray-200">
          ${q("ตัวเลือกเพิ่มเติม")}
          <button type="button" id="cce-f-bordertop" title="เส้นคั่นสำหรับช่องลงนาม" class="w-full py-2 rounded-lg border text-xs font-bold ${e.borderTop?"bg-indigo-600 text-white border-indigo-600":"border-gray-300 text-gray-600"}">— เส้นคั่นด้านบน</button>
          <button type="button" id="cce-toggle-maxwidth" class="mt-2 w-full py-2 rounded-lg border text-xs font-bold ${e.maxWidth!=null?"bg-indigo-600 text-white border-indigo-600":"border-gray-300 text-gray-600"}">↩ ตัดบรรทัด: ${e.maxWidth!=null?"เปิด":"ปิด"}</button>
          ${e.maxWidth!=null?`<div class="mt-3 rounded-xl border border-indigo-100 bg-indigo-50/50 p-3">${v({id:"cce-f-maxwidth",label:"ความกว้างตัดบรรทัด",value:e.maxWidth,min:10,max:100,suffix:"%"})}</div>`:""}
        </div>
        <div class="pt-4 border-t border-gray-200 grid grid-cols-2 gap-2">
          <button id="cce-f-duplicate" type="button" class="py-2 rounded-lg border border-indigo-300 text-indigo-600 text-xs font-bold hover:bg-indigo-50">⧉ คัดลอกทั้งหมด</button>
          <button id="cce-f-delete" type="button" class="py-2 rounded-lg border border-red-300 text-red-500 text-xs font-bold hover:bg-red-50">🗑️ ลบ</button>
        </div>
      </div>`;const r=o=>{Object.assign(e,o),y()};i.querySelector("#cce-f-text").addEventListener("input",o=>r({text:o.target.value})),i.querySelectorAll(".cce-insert-token").forEach(o=>o.addEventListener("click",()=>{const b=i.querySelector("#cce-f-text"),w=b.selectionStart??b.value.length;b.value=b.value.slice(0,w)+o.dataset.token+b.value.slice(w),r({text:b.value}),b.focus()})),i.querySelector("#cce-f-font").addEventListener("change",o=>{W(o.target.value),r({fontFamily:o.target.value})}),i.querySelector("#cce-add-google-font").addEventListener("click",()=>{const o=i.querySelector("#cce-google-font-name"),b=le(o.value);if(!b){B("กรุณาพิมพ์ชื่อฟอนต์จาก Google Fonts","warning");return}c.customFonts.includes(b)||c.customFonts.push(b),W(b),r({fontFamily:b}),C(e)}),i.querySelector("#cce-f-bold").addEventListener("click",()=>{r({bold:!e.bold}),C(e)}),i.querySelectorAll(".cce-align").forEach(o=>o.addEventListener("click",()=>{r({align:o.dataset.align}),C(e)})),h(i,"cce-f-size",o=>r({fontSize:f(Number(o.target.value)||12,6,120)})," px"),i.querySelector("#cce-f-color").addEventListener("input",o=>r({color:o.target.value})),h(i,"cce-f-letter",o=>r({letterSpacing:f(Number(o.target.value)||0,-5,20)})," px"),h(i,"cce-f-opacity",o=>r({opacity:f(Number(o.target.value)||0,0,100)/100}),"%"),i.querySelector("#cce-toggle-shadow").addEventListener("click",()=>{r({shadow:{...a,enabled:!a.enabled}}),C(e)}),i.querySelector("#cce-toggle-stroke").addEventListener("click",()=>{r({stroke:{...d,enabled:!d.enabled}}),C(e)}),(l=i.querySelector("#cce-shadow-color"))==null||l.addEventListener("input",o=>r({shadow:{...e.shadow,color:o.target.value}})),h(i,"cce-shadow-x",o=>r({shadow:{...e.shadow,offsetX:Number(o.target.value)||0}})," px"),h(i,"cce-shadow-y",o=>r({shadow:{...e.shadow,offsetY:Number(o.target.value)||0}})," px"),h(i,"cce-shadow-blur",o=>r({shadow:{...e.shadow,blur:Number(o.target.value)||0}})," px"),(s=i.querySelector("#cce-stroke-color"))==null||s.addEventListener("input",o=>r({stroke:{...e.stroke,color:o.target.value}})),h(i,"cce-stroke-width",o=>r({stroke:{...e.stroke,width:Number(o.target.value)||0}})," px"),i.querySelector("#cce-f-bordertop").addEventListener("click",()=>{r({borderTop:!e.borderTop}),C(e)}),i.querySelector("#cce-toggle-maxwidth").addEventListener("click",()=>{r({maxWidth:e.maxWidth==null?80:null}),C(e)}),h(i,"cce-f-maxwidth",o=>r({maxWidth:f(Number(o.target.value),10,100)}),"%"),i.querySelector("#cce-f-duplicate").addEventListener("click",j),i.querySelector("#cce-f-delete").addEventListener("click",_)}function E(){const e=ee();if(!e.length){i.innerHTML='<div class="text-center py-12"><div class="text-4xl mb-3">👆</div><p class="text-sm font-bold text-gray-600">เลือกองค์ประกอบบนเกียรติบัตร</p><p class="text-xs text-gray-400 mt-1">แล้วตั้งค่าจากแผงนี้ • กด Shift/Ctrl ค้างแล้วคลิก หรือลากคลุมพื้นที่ว่างเพื่อเลือกหลายรายการ</p></div>';return}if(e.length>1){I(e);return}const t=e[0];t.type==="image"||t.type==="cornerGraphic"?R(t):C(t)}function I(e){var s,o,b,w,F,T,k,x,L;const t=e.filter(n=>n.type!=="image"&&n.type!=="cornerGraphic"),a=e[0],d=[...new Set([...V,...c.customFonts])];i.innerHTML=`
      <div class="space-y-5">
        <div class="rounded-xl bg-indigo-50 border border-indigo-100 px-3 py-2.5 flex items-center justify-between gap-2">
          <p class="text-xs font-bold text-indigo-700">✓ เลือกไว้ ${e.length} รายการ</p>
          <button id="cce-bulk-clear" type="button" class="text-[11px] font-bold text-indigo-500 hover:text-indigo-700 whitespace-nowrap">ยกเลิกเลือก</button>
        </div>
        ${t.length?`
        <div>
          ${q(`ปรับข้อความพร้อมกัน (${t.length} รายการ)`)}
          <select id="cce-bulk-font" class="w-full border border-gray-300 rounded-lg px-2.5 py-2 text-sm bg-white">
            <option value="">— ไม่เปลี่ยนฟอนต์ —</option>
            ${d.map(n=>`<option value="${m(n)}" style="font-family:'${m(n)}',sans-serif">${m(n)} — ตัวอย่างภาษาไทย</option>`).join("")}
          </select>
          <div class="flex gap-1.5 mt-2.5 mb-3">
            <button type="button" id="cce-bulk-bold" title="ตัวหนา" class="h-9 w-9 rounded-lg border font-black ${a.bold?"bg-indigo-600 text-white border-indigo-600":"border-gray-300 text-gray-600"}">B</button>
            ${[["left","≡","ชิดซ้าย"],["center","≣","กึ่งกลาง"],["right","≡","ชิดขวา"]].map(([n,N,O])=>`<button type="button" data-align="${n}" title="${O}" class="cce-bulk-align h-9 w-9 rounded-lg border font-bold ${a.align===n?"bg-indigo-600 text-white border-indigo-600":"border-gray-300 text-gray-600"}" style="${n==="right"?"transform:scaleX(-1)":""}">${N}</button>`).join("")}
          </div>
          <label class="text-[11px] text-gray-500 block mb-3">สี<input id="cce-bulk-color" type="color" value="${m(a.color||"#1d1519")}" class="mt-1 w-full h-9 border border-gray-300 rounded-lg cursor-pointer" /></label>
          <div class="space-y-3">
            ${v({id:"cce-bulk-size",label:"ขนาดตัวอักษร",value:a.fontSize??16,min:6,max:120,suffix:" px"})}
            ${v({id:"cce-bulk-letter",label:"ระยะห่างตัวอักษร",value:a.letterSpacing??0,min:-5,max:20,step:.5,suffix:" px"})}
          </div>
          <div class="grid grid-cols-2 gap-2 mt-3">
            <button type="button" id="cce-bulk-shadow" class="px-3 py-2 rounded-lg border text-xs font-bold ${(s=a.shadow)!=null&&s.enabled?"bg-indigo-600 text-white border-indigo-600":"border-gray-300 text-gray-600"}">◒ เงา: ${(o=a.shadow)!=null&&o.enabled?"เปิด":"ปิด"}</button>
            <button type="button" id="cce-bulk-stroke" class="px-3 py-2 rounded-lg border text-xs font-bold ${(b=a.stroke)!=null&&b.enabled?"bg-indigo-600 text-white border-indigo-600":"border-gray-300 text-gray-600"}">◎ สโตรก: ${(w=a.stroke)!=null&&w.enabled?"เปิด":"ปิด"}</button>
          </div>
        </div>`:""}
        <div class="pt-4 border-t border-gray-200">
          ${q("ความทึบ (ทุกรายการที่เลือก)")}
          ${v({id:"cce-bulk-opacity",label:"ความทึบ",value:Math.round((a.opacity??1)*100),min:0,max:100,suffix:"%"})}
        </div>
        <div class="pt-4 border-t border-gray-200 grid grid-cols-2 gap-2">
          <button id="cce-bulk-duplicate" type="button" class="py-2 rounded-lg border border-indigo-300 text-indigo-600 text-xs font-bold hover:bg-indigo-50">⧉ คัดลอกทั้งหมด</button>
          <button id="cce-bulk-delete" type="button" class="py-2 rounded-lg border border-red-300 text-red-500 text-xs font-bold hover:bg-red-50">🗑️ ลบทั้งหมด</button>
        </div>
      </div>`;const r=n=>{e.forEach(N=>Object.assign(N,n)),y()},l=n=>{t.forEach(N=>Object.assign(N,n)),y()};i.querySelector("#cce-bulk-clear").addEventListener("click",()=>{p.clear(),y(),E()}),(F=i.querySelector("#cce-bulk-font"))==null||F.addEventListener("change",n=>{n.target.value&&(W(n.target.value),l({fontFamily:n.target.value}))}),(T=i.querySelector("#cce-bulk-bold"))==null||T.addEventListener("click",()=>{l({bold:!a.bold}),I(e)}),i.querySelectorAll(".cce-bulk-align").forEach(n=>n.addEventListener("click",()=>{l({align:n.dataset.align}),I(e)})),(k=i.querySelector("#cce-bulk-color"))==null||k.addEventListener("input",n=>l({color:n.target.value})),h(i,"cce-bulk-size",n=>l({fontSize:f(Number(n.target.value)||12,6,120)})," px"),h(i,"cce-bulk-letter",n=>l({letterSpacing:f(Number(n.target.value)||0,-5,20)})," px"),(x=i.querySelector("#cce-bulk-shadow"))==null||x.addEventListener("click",()=>{var n;l({shadow:{...a.shadow??{},enabled:!((n=a.shadow)!=null&&n.enabled)}}),I(e)}),(L=i.querySelector("#cce-bulk-stroke"))==null||L.addEventListener("click",()=>{var n;l({stroke:{...a.stroke??{},enabled:!((n=a.stroke)!=null&&n.enabled)}}),I(e)}),h(i,"cce-bulk-opacity",n=>r({opacity:f(Number(n.target.value)||0,0,100)/100}),"%"),i.querySelector("#cce-bulk-duplicate").addEventListener("click",j),i.querySelector("#cce-bulk-delete").addEventListener("click",_)}const te=1.2;function pe(e,t){e.preventDefault();const a=p.has(t)&&p.size>1;a||(p=new Set([t])),y(),E();const d=G.querySelector(".cert-canvas"),r=d.getBoundingClientRect(),l=c.elements.find(x=>x.id===t),s=a?c.elements.filter(x=>p.has(x.id)&&x.x!=null&&x.y!=null):[l],o=new Map(s.map(x=>[x.id,{x:x.x,y:x.y}])),b=new Map(s.map(x=>[x.id,d.querySelector(`[data-cert-el-id="${x.id}"]`)])),w=document.createElement("div");w.style.cssText="position:absolute;top:0;bottom:0;left:50%;border-left:1.5px dashed #ec4899;pointer-events:none;z-index:50;display:none;";const F=document.createElement("div");F.style.cssText="position:absolute;left:0;right:0;top:50%;border-top:1.5px dashed #ec4899;pointer-events:none;z-index:50;display:none;",d.append(w,F);const T=x=>{let L=f((x.clientX-r.left)/r.width*100,0,100),n=f((x.clientY-r.top)/r.height*100,0,100);const N=Math.abs(L-50)<te,O=Math.abs(n-50)<te;N&&(L=50),O&&(n=50),w.style.display=N?"block":"none",F.style.display=O?"block":"none",L=Math.round(L*10)/10,n=Math.round(n*10)/10;const A=o.get(l.id),D=L-A.x,U=n-A.y;s.forEach(M=>{const P=o.get(M.id);M.x=f(Math.round((P.x+D)*10)/10,0,100),M.y=f(Math.round((P.y+U)*10)/10,0,100);const $=b.get(M.id);$&&($.style.left=M.x+"%",$.style.top=M.y+"%")})},k=()=>{window.removeEventListener("pointermove",T),window.removeEventListener("pointerup",k),y()};window.addEventListener("pointermove",T),window.addEventListener("pointerup",k)}async function K(e,t=null){if(e)try{const a=await de(e),d=t?{id:H("corner"),type:"cornerGraphic",imageUrl:a,position:t,width:14,insetX:2,insetY:2,opacity:1}:{id:H("img"),type:"image",imageUrl:a,x:50,y:15,width:15,opacity:1};c.elements.push(d),p=new Set([d.id]),y(),E()}catch(a){B("อัปโหลดไม่สำเร็จ: "+(a.message??""),"error")}}g.querySelector("#cce-add-el").addEventListener("click",()=>{const e={id:H("el"),text:"ข้อความใหม่",x:50,y:50,fontSize:16,color:"#1d1519",fontFamily:"Sarabun",align:"center",bold:!1,opacity:1};c.elements.push(e),p=new Set([e.id]),y(),E()}),g.querySelector("#cce-select-all").addEventListener("click",()=>{p=new Set(c.elements.map(e=>e.id)),y(),E()}),g.querySelector("#cce-add-logo-file").addEventListener("change",e=>{var t;K((t=e.target.files)==null?void 0:t[0]),e.target.value=""}),g.querySelector("#cce-add-corner-top").addEventListener("change",e=>{var t;K((t=e.target.files)==null?void 0:t[0],"top"),e.target.value=""}),g.querySelector("#cce-add-corner-bottom").addEventListener("change",e=>{var t;K((t=e.target.files)==null?void 0:t[0],"bottom"),e.target.value=""}),Q.addEventListener("click",j),g.querySelector("#cce-orient-landscape").addEventListener("click",()=>{c.orientation="landscape",y()}),g.querySelector("#cce-orient-portrait").addEventListener("click",()=>{c.orientation="portrait",y()}),g.querySelector("#cce-bg-file").addEventListener("change",e=>{var a;const t=(a=e.target.files)==null?void 0:a[0];t&&(Y=t,c.background={type:"image",imageUrl:URL.createObjectURL(t)},y())}),g.querySelectorAll(".cce-bg-preset").forEach(e=>e.addEventListener("click",()=>{const t=ie[e.dataset.preset];Y=null,c.background={type:"flat",color:t.bg,cardColor:t.cardBg,borderColor:t.border,borderWidth:t.borderWidth,borderStyle:t.borderStyle},y()}));const J=()=>{document.removeEventListener("keydown",oe),document.body.style.overflow=be,g.remove()},oe=e=>{var a;const t=["INPUT","TEXTAREA","SELECT"].includes((a=e.target)==null?void 0:a.tagName);e.key==="Escape"&&J(),!t&&(e.key==="Delete"||e.key==="Backspace")&&_(),!t&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="d"&&(e.preventDefault(),j())};document.addEventListener("keydown",oe),g.querySelector("#cce-close").addEventListener("click",J),g.querySelector("#cce-save").addEventListener("click",async()=>{const e=g.querySelector("#cce-save");e.disabled=!0,e.textContent="กำลังบันทึก...";try{let t;Y&&(t=await fe(Y)),t&&(c.background={type:"image",imageUrl:t}),await ce(c,t),J()}catch(t){B("บันทึกไม่สำเร็จ: "+(t.message??""),"error"),e.disabled=!1,e.textContent="💾 บันทึก"}}),y(),E()}export{we as o};
