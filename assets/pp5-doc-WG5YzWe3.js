import{getSystemConfig as It,getClassSessionDOWs as At,getClassStudents as qt,getClassAttendanceAll as Yt,getScoreColumns as Kt,getStudentScores as Jt,getDepartments as Xt,getHomeroomTeachers as Qt,getTeacherById as Zt,getCourseDocPage2 as te,getCourseDocLangSettings as ee,getSchoolHolidays as se,getLifeSkillColumns as Mt,getClassScoreRounding as ae,getLifeSkillScores as oe,getReadingScoreColumns as ne,getReadingScores as le}from"./api-CWYJTdOa.js";import{i as ie,s as ce,d as re,c as kt,f as lt,r as $t}from"./score-display-CQ4dUIPx.js";import{a as vt,g as de}from"./ui-MMtcTwtt.js";import{s as yt}from"./supabase-BV-W2lsh.js";import{o as Ht}from"./print-overlay-BVfxEd6n.js";import{applyReadingGradesFromConfig as me,_readingGrade as pe}from"./teacher-views-utils-bZoYj54P.js";import{i as ge}from"./skill-groups-BY1NTbf4.js";function a(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function zt(t){if(!t)return null;const[l,s,i]=String(t).split("-").map(Number);return!l||!s||!i?null:new Date(l,s-1,i)}function nt(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Ot(t){if(!t)return"";const[l,s,i]=String(t).split("-").map(Number);if(!l)return t;const o=(l+543)%100;return`${String(i).padStart(2,"0")}/${String(s).padStart(2,"0")}/${String(o).padStart(2,"0")}`}function he(t,l,s=null,i=!1){const o=i&&s&&s.length?s.length:Math.max(1,Math.round((l??1)*2)),e=o*20;let n=s&&s.length?[...s]:null,H=!1;if(n&&n.length<o){H=!0;const f={};for(const m of n)f[m]=(f[m]||0)+1;const g=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(m=>t[m]).filter(Boolean).map(m=>zt(m)).filter(Boolean).sort((m,h)=>m-h),r={};g.forEach(m=>{const h=m.getDay();r[h]=(r[h]||0)+1});const c=Object.entries(r).sort(([,m],[,h])=>h-m||Number(m)-Number(h));for(const[m]of c){if(n.length>=o)break;const h=Number(m);for(;(f[h]||0)<Math.min(r[h],2)&&n.length<o;)n.push(h),f[h]=(f[h]||0)+1}for(let m=1;m<=5&&n.length<o;m++)(f[m]||0)<2&&(n.push(m),f[m]=(f[m]||0)+1);n.sort((m,h)=>m-h)}else n&&n.length>o&&(n=n.slice(0,o));const v=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(f=>t[f]).filter(Boolean).map(f=>zt(f)).filter(Boolean).sort((f,g)=>f-g);if(!v.length)return[];if(H&&n){const g=[];let r=0,c=0;for(;r<v.length&&g.length<e;){const m=new Date(v[r]);m.setDate(m.getDate()-m.getDay()),m.setHours(0,0,0,0);const h=m.getTime();c=h;const u=[];for(;r<v.length&&v[r].getTime()>=h&&v[r].getTime()<h+6048e5;)u.push(v[r++]);const w={};for(const _ of u){const R=_.getDay();w[R]=(w[R]||0)+1}for(const _ of u){if(g.length>=e)break;g.push({n:g.length+1,date:new Date(_),ds:nt(_)})}const A=o-u.length;if(A>0){const _={};n.forEach(O=>{_[O]=(_[O]||0)+1});const R=[];for(const[O,N]of Object.entries(_).sort()){const G=Number(O),T=w[G]||0;for(let L=0;L<N-T&&R.length<A;L++)R.push(G)}for(const O of R){if(g.length>=e)break;const N=new Date(m);N.setDate(N.getDate()+O),g.push({n:g.length+1,date:N,ds:nt(N)})}}}if(g.length<e){const m=new Date(c);let h=1;for(;g.length<e;){for(const u of n){if(g.length>=e)break;const w=new Date(m);w.setDate(w.getDate()+h*7+u),g.push({n:g.length+1,date:w,ds:nt(w)})}h++}}return g}if(!n||!n.length){const g={},r=v.filter(_=>{const R=new Date(_);R.setDate(R.getDate()-R.getDay()),R.setHours(0,0,0,0);const O=R.getTime();return g[O]=(g[O]||0)+1,g[O]<=o}),c=[];for(const _ of r){if(c.length>=e)break;c.push({n:c.length+1,date:new Date(_),ds:nt(_)})}if(c.length>=e)return c;const m=r[r.length-1],h=new Date(m);h.setDate(h.getDate()-h.getDay()),h.setHours(0,0,0,0);const u=h.getTime(),w=r.filter(_=>_.getTime()>=u&&_.getTime()<u+6048e5);let A=1;for(;c.length<e;){for(const _ of w){if(c.length>=e)break;const R=new Date(_);R.setDate(R.getDate()+A*7),c.push({n:c.length+1,date:R,ds:nt(R)})}A++}return c}const p={},b=[];for(const f of v){if(b.length>=e)break;const g=new Date(f);g.setDate(g.getDate()-g.getDay()),g.setHours(0,0,0,0);const r=g.getTime();p[r]=(p[r]||0)+1,p[r]<=o&&b.push({n:b.length+1,date:new Date(f),ds:nt(f)})}if(b.length>=e)return b;const y=v[v.length-1],x=new Date(y);x.setDate(x.getDate()-x.getDay()),x.setHours(0,0,0,0);const $=x.getTime(),S=7*24*60*60*1e3,z={};for(const f of v)if(f.getTime()>=$&&f.getTime()<$+S){const g=f.getDay();z[g]=(z[g]||0)+1}const j={};for(const f of n)j[f]=(j[f]||0)+1;const k=[];for(const[f,g]of Object.entries(j)){const r=g-(z[Number(f)]||0);for(let c=0;c<r;c++)k.push(Number(f))}k.sort((f,g)=>f-g);for(const f of k){if(b.length>=e)break;const g=new Date(x);g.setDate(g.getDate()+f),b.push({n:b.length+1,date:g,ds:nt(g)})}let C=1;for(;b.length<e;){for(const f of n){if(b.length>=e)break;const g=new Date(x);g.setDate(g.getDate()+C*7+f),b.push({n:b.length+1,date:g,ds:nt(g)})}C++}return b}function fe(t){return t==="ACDMVOC"?"porwor":"samai"}function tt(t){return String(t??"").split(" ")[0]}function Lt(t,l){const s={};for(const e of t){const n=e[l];n&&(s[n]=(s[n]??0)+1)}let i=null,o=0;for(const[e,n]of Object.entries(s))n>o&&(o=n,i=e);return i}function ve(t){return Lt(t,"religion_room")}function ue(t){return Lt(t,"main_room")}function ut(t){return t>=80?4:t>=75?3.5:t>=70?3:t>=65?2.5:t>=60?2:t>=55?1.5:t>=50?1:0}function Tt(t){return t>=3.5?"ดีเยี่ยม":t>=2.5?"ดี":t>=1?"ผ่าน":"ไม่ผ่าน"}async function be(t){var ot,ht;const l=await It();me(l);const s=parseInt(l.academicYear??l.academic_year??2568),i=parseInt(l.semester??1),{data:o,error:e}=await yt.from("classes").select(`
      id, course_id, class_name, skill_group, google_sheet_id,
      head_student_id, source_class_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( id, subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id, learning_area ),
      students:students!fk_head_student ( full_name, student_code )
    `).eq("id",t).single();if(e||!o)throw new Error("โหลดข้อมูลห้องเรียนไม่สำเร็จ");const n=o.master_subjects??{},H=n.credit??1,v=fe(n.subject_group);let p=o.source_class_id??null,b=H;if(!p){const{data:d}=await yt.from("classes").select("source_class_id").eq("id",t).single();p=(d==null?void 0:d.source_class_id)??null}let y=[];if(p){const{data:d}=await yt.from("classes").select("id, master_subjects(credit)").eq("id",p).single();(ot=d==null?void 0:d.master_subjects)!=null&&ot.credit&&(b=d.master_subjects.credit),y=await At(p).catch(()=>[])}const x=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),[$,S,z,j,k,C]=await Promise.all([qt(t),Yt(p??t),Kt(p??t),Jt(p??t),Xt(),Qt(s,i).catch(()=>[])]),f=n.teacher_id?await Zt(n.teacher_id).catch(()=>null):null,g=["AGM","AGMVOC"].includes(n.subject_group)?"ศาสนา":["ACDMVOC"].includes(n.subject_group)?"สามัญปวช":"สามัญ",r=k.find(d=>d.dept_code===n.dept&&d.category===g)??k.find(d=>d.dept_code===n.dept)??k.find(d=>d.dept_name===n.dept)??null,[c,m,h,u]=await Promise.all([n.id?te(n.id).catch(()=>null):Promise.resolve(null),ee().catch(()=>[]),At(o.id).catch(()=>[]),se(s,i).catch(()=>[])]),w=new Set(u),A=((ht=m.find(d=>d.lang_key==="th"))==null?void 0:ht.settings)??{},_=Array.isArray(A.colsBasic)&&A.colsBasic.length?A.colsBasic:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],R=Array.isArray(A.colsExtra)&&A.colsExtra.length?A.colsExtra:["ผลการเรียนรู้"],O=A.rowHeader||"ข้อ",N=n.subject_group==="ACDMVOC",G=he(o,H,h.length?h:null,N),T={};if(p){const d=N&&h.length?h.length:Math.max(1,Math.round(H*2)),q=N&&y.length?y.length:Math.max(1,Math.round(b*2)),D=G.length;for(let U=1;U<=D;U++){const I=Math.floor((U-1)/d),ct=(U-1)%d,pt=I*q+ct+1;for(const Z of S)Z.session_number===pt&&(T[Z.student_id]||(T[Z.student_id]={}),T[Z.student_id][U]=Z.status)}}else for(const d of S)T[d.student_id]||(T[d.student_id]={}),T[d.student_id][d.session_number]=d.status;const L=(p?z.filter(d=>!x.has(d.assignment_name)):z).filter(d=>d.column_type!=="override"&&!ie(d)),K=["AGM","AGMVOC"].includes(n.subject_group)?["คะแนนมาเรียน","คะแนนละหมาด"]:ge(o.skill_group)?(await Mt(s,i,"สามัญ").catch(()=>[])).slice(0,3).map(d=>d.name):[],Y=ce(L,K),B={};for(const d of j)B[d.student_id]||(B[d.student_id]={}),B[d.student_id][d.score_column_id]=d.score;for(const d of $)d.special_result&&(B[d.id]||(B[d.id]={}),B[d.id].__force=d.special_result);let W="";const F=await ae(t).catch(()=>(W="โหลดค่าปัดเลขร่วมไม่สำเร็จ คะแนนที่แสดงใช้รูปแบบเริ่มต้น กรุณาติดตั้ง SQL หรือตรวจการเชื่อมต่อก่อนใช้เอกสารจริง",null));for(const d of Object.values(B)){const q={...d};for(const D of Y)(D.column_type==="derived"||q[D.id]!=null&&D.bonus_formula)&&(d[D.id]=re(z,D,U=>q[U]))}const M=["AGM","AGMVOC"].includes(n.subject_group),V=tt(o.class_name),P=ue($),J=ve($);let X,Q;M?(Q=C.find(d=>d.category==="ศาสนา"&&d.main_room===o.class_name)??(J?C.find(d=>d.category==="ศาสนา"&&d.main_room===J):null)??null,X=P?C.find(d=>d.category!=="ศาสนา"&&d.main_room===P)??null:null):(X=C.find(d=>d.category!=="ศาสนา"&&d.main_room===V)??(P?C.find(d=>d.category!=="ศาสนา"&&d.main_room===P):null)??null,Q=J?C.find(d=>d.category==="ศาสนา"&&d.main_room===J)??null:null);const et=(r==null?void 0:r.dept_name)??n.dept??"",st=n.learning_area&&n.learning_area.trim()||(r==null?void 0:r.head_name)||"";let at={},dt=0,it="";if(n.subject_group==="ACDMVOC")try{const q=(await Mt(s,i,"สามัญ")).find(D=>(D.name??"").includes("ความสะอาด"));if(q){dt=q.max_score??0,it=q.name;const D=await oe([q.id]);at=Object.fromEntries(D.map(U=>[U.student_id,U.score]))}}catch{}let mt={};const E=[];W&&E.push(W);try{const d=await ne(s,i);if(d.length){const q=await le(d.map(I=>I.id),$.map(I=>I.id)),D=d.reduce((I,ct)=>I+(ct.max_score??0),0),U={};for(const I of q)I.score!=null&&(U[I.student_id]=(U[I.student_id]??0)+(parseFloat(I.score)||0));if(D>0)for(const[I,ct]of Object.entries(U))mt[I]=pe(ct/D*100).label;q.length||E.push(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนในห้องนี้ (ภาค ${i}/${s})`)}else E.push(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ (ภาค ${i}/${s})`)}catch(d){throw console.error("[pp5-doc] load reading evaluation failed",d),new Error(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${(d==null?void 0:d.message)??"ไม่ทราบสาเหตุ"}`)}return{cls:o,ms:n,credit:H,prefix:v,cfg:l,students:$,attMap:T,scoreColumns:Y,scoreMap:B,roundSettings:F,teacher:f,dept:r,deptNameTH:et,deptHeadName:st,courseDoc:c,thColHeaders:_,thColsExtra:R,thRowHeader:O,sessions:G,hrSamai:X,hrReligion:Q,academicYear:s,semester:i,holidaySet:w,moralScores:at,moralMax:dt,moralColName:it,readingEvalMap:mt,docWarnings:E}}function Nt(){return`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Sarabun', sans-serif; font-size: 10pt; color: #000; background: #fff; }

    .page {
      width: 210mm;
      min-height: 297mm;
      padding: 12mm 12mm 12mm 18mm;
      page-break-after: always;
      position: relative;
    }
    .page-tight {
      width: 210mm;
      min-height: 297mm;
      padding: 8mm 8mm 8mm 8mm;
      page-break-after: always;
      position: relative;
    }
    .page:last-child, .page-tight:last-child, .score-wrap:last-child { page-break-after: avoid; }

    @media print {
      @page { size: A4 portrait; margin: 0; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .no-print { display: none !important; }
    }

    table { border-collapse: collapse; width: 100%; }
    td, th { border: 1px solid #000; padding: 2px 3px; vertical-align: middle; }
    th { font-weight: 600; text-align: center; }

    .text-center { text-align: center; }
    .text-right  { text-align: right; }
    .font-bold   { font-weight: 700; }

    /* ── Page 1 — absolute mm layout (ported from reference HTML) ── */
    .page-p1 {
      position: relative; width: 210mm; height: 297mm;
      padding: 0; page-break-after: always; overflow: hidden;
    }
    .page-p1 .doc-code {
      position: absolute; top: 24.5mm; right: 31.5mm;
      font-size: 12pt; font-weight: 400;
    }
    .page-p1 .logo-wrap {
      position: absolute; top: 17.6mm; left: 50%;
      transform: translateX(-50%);
      width: 18.5mm; height: 18.5mm;
      border-radius: 50%; overflow: hidden;
      background: #fff;
      display: flex; align-items: center; justify-content: center;
    }
    .page-p1 .logo-wrap img {
      width: 110%; height: 110%; margin: -5%; object-fit: contain; display: block;
    }
    .page-p1 .p1-title {
      position: absolute; top: 40.1mm; left: 0; width: 100%; margin: 0;
      text-align: center; font-size: 15.7pt; font-weight: 700; line-height: 1.05;
    }
    .page-p1 .level-row {
      position: absolute; top: 48.9mm; left: 0; width: 100%;
      font-size: 10.1pt; font-weight: 600;
    }
    .page-p1 .level-row .lbl {
      position: absolute; top: 0; text-align: left; white-space: nowrap;
    }
    .page-p1 .checks {
      position: absolute; top: -.15mm;
      display: grid; gap: .9mm; font-size: 9.4pt; font-weight: 600;
    }
    .page-p1 .check-line { display: flex; align-items: center; gap: 2.3mm; white-space: nowrap; }
    .page-p1 .box {
      position: relative; display: inline-block;
      width: 4.5mm; height: 4.5mm;
      border: .52mm solid #111; border-radius: .6mm;
      vertical-align: middle; flex: 0 0 auto;
    }
    .page-p1 .box.checked { background: #111; }
    .page-p1 .box.checked::after {
      content: ""; position: absolute;
      left: 3px; top: .2mm; width: 1.5mm; height: 2.8mm;
      border: solid #fff; border-width: 0 .52mm .52mm 0; transform: rotate(45deg);
    }
    .page-p1 .school {
      position: absolute; top: 72mm; left: 0; width: 100%; margin: 0;
      text-align: center; font-size: 24pt; line-height: 1.15; font-weight: 700;
    }
    .page-p1 .school-sub {
      position: absolute; top: 84.2mm; left: 0; width: 100%; margin: 0;
      text-align: center; font-size: 20pt; line-height: 1.15; font-weight: 700;
    }
    .page-p1 .info {
      position: absolute; top: 94.6mm; left: 17.7mm; width: 174.7mm;
      font-size: 10.5pt; font-weight: 600;
    }
    .page-p1 .info-line {
      display: flex; align-items: flex-end; gap: 2.6mm;
      margin-bottom: 1.45mm; white-space: nowrap;
    }
    .page-p1 .info-row-one {
      display: grid; grid-template-columns: 32mm 1fr;
      align-items: end; margin-bottom: 1.45mm;
    }
    .page-p1 .uline {
      display: inline-block; min-height: 5.2mm;
      border-bottom: .35mm dotted #777;
      text-align: center; line-height: 5mm;
      padding: 0 1.5mm; font-weight: 600; white-space: nowrap;
    }
    .page-p1 .uline-xl { display: block; min-height: 5.2mm; border-bottom: .35mm dotted #777; text-align: left; padding-left: 4mm; line-height: 5mm; font-weight: 600; }
    .page-p1 .w-xs  { width: 17mm; } .page-p1 .w-sm  { width: 24mm; }
    .page-p1 .w-md  { width: 33mm; } .page-p1 .w-lg  { width: 48mm; }
    .page-p1 .w-yr  { width: 35mm; } .page-p1 .w-cd  { width: 25mm; }

    .page-p1 .summary-box {
      position: absolute; top: 139.9mm; left: 17.7mm; width: 174.7mm;
      border: .75mm solid #111;
    }
    .page-p1 .summary-box table { width: 100%; border-collapse: collapse; table-layout: fixed; }
    .page-p1 .summary-box th, .page-p1 .summary-box td {
      border: 1.5px solid #111; padding: .8mm 1mm;
      text-align: center; vertical-align: middle; font-size: 10.5pt; font-weight: 600;
    }
    .page-p1 .summary-box tr:first-child th { border-top: 0; }
    .page-p1 .summary-box tr > *:first-child { border-left: 0; }
    .page-p1 .summary-box tr > *:last-child  { border-right: 0; }
    .page-p1 .summary-box tr:last-child td,
    .page-p1 .summary-box tr:last-child th   { border-bottom: 0; }
    .page-p1 .col-tot { width: 18.8mm; } .page-p1 .col-g   { width: 10.65mm; }
    .page-p1 .col-gs  { width: 14.5mm; } .page-p1 .col-note{ width: 39mm; }
    .page-p1 .col-elbl{ width: 46.5mm; }
    .page-p1 .grade-table th, .page-p1 .grade-table td { height: 6.25mm; }
    .page-p1 .grade-table tr:first-child th { height: 7.1mm; }
    .page-p1 .stitle  { font-size: 10.2pt; }
    .page-p1 .evspc   { height: 6.35mm; border-left: 0 !important; border-right: 0 !important; }
    .page-p1 .eval-table tr:first-child th { border-top: 1.5px solid #111; }
    .page-p1 .eval-table th, .page-p1 .eval-table td { height: 9.35mm; }

    .page-p1 .approval {
      position: absolute; top: 208.1mm; left: 17.7mm;
      width: 174.7mm; height: 72.7mm;
      border: .75mm solid #111; padding: 3.8mm 5.5mm 3.5mm;
      font-size: 10.4pt; font-weight: 600;
    }
    .page-p1 .apl-title { margin-bottom: 3mm; font-size: 10.6pt; font-weight: 700; }
    .page-p1 .sig-row {
      display: grid; grid-template-columns: 13mm 1fr 52mm;
      align-items: end; gap: 1.4mm; margin-bottom: .55mm;
    }
    .page-p1 .sig-line {
      display: block; border-bottom: .35mm dotted #777;
      text-align: center; line-height: 5mm; min-height: 5.2mm; font-weight: 700;
    }
    .page-p1 .consider { margin-top: 3.2mm; font-weight: 700; }
    .page-p1 .ctr-block { margin: 1.8mm auto 0; width: 66%; text-align: center; }
    .page-p1 .ctr-sig {
      display: grid; grid-template-columns: 12mm 1fr;
      align-items: end; gap: 5px; margin: 0 auto; width: 100%;
    }
    .page-p1 .p1-role { margin-top: .6mm; }
    .page-p1 .decision {
      display: flex; justify-content: center; gap: 12mm;
      align-items: center; margin-top: 2mm; font-size: 11.5pt;
    }
    .page-p1 .decision .box { width: 5.8mm; height: 5.8mm; border-color: #888; border-width: .65mm; }
    .page-p1 .decision .box.checked { background: #888; }
    .page-p1 .director { margin-top: 2mm; }

    /* ── Page 2 ── */
    .p2-wrap { width: 210mm; min-height: 297mm; padding: 10mm 14mm 10mm 14mm; page-break-after: always; display: flex; flex-direction: column; }
    .p2-logo-wrap { width: 18mm; height: 18mm; border-radius: 50%; overflow: hidden; background: #fff; margin: 0 auto 2mm; display: flex; align-items: center; justify-content: center; }
    .p2-logo-wrap img { width: 110%; height: 110%; margin: -5%; object-fit: contain; display: block; }
    .p2-title { text-align: center; font-size: 13pt; font-weight: 700; margin-bottom: 2mm; }
    .p2-hdr { font-size: 9.5pt; margin-bottom: 2mm; display: grid; grid-template-columns: 1fr 1fr; gap: 0 5mm; }
    .p2-hdr-col { display: flex; flex-direction: column; gap: 1.2mm; }
    .p2-hdr-row { display: flex; align-items: baseline; gap: 1mm; }
    .p2-label { flex-shrink: 0; white-space: nowrap; }
    .p2-uline { display: inline-block; border-bottom: .3mm dashed #555; min-width: 8mm; text-align: center; padding: 0 1mm; font-weight: 600; flex-shrink: 0; }
    .p2-uline-fill { flex: 1; min-width: 15mm; }
    .std-table { width: 100%; border-collapse: collapse; flex: 1; height: 0; }
    .std-table th { font-size: 10pt; padding: 1.5mm 2mm; border: .4mm solid #000; text-align: center; font-weight: 700; }
    .std-table td { border: .4mm solid #000; padding: 0 2mm; vertical-align: top; font-size: 9.5pt; }
    .std-table:not([style*="table-layout"]) td:first-child { width: 50mm; }
    .std-table td.std-row { height: 7mm; }
    .std-fill-row { height: 100%; }
    .std-fill-row td {
      border: .4mm solid #000;
      background-image: repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent calc(7mm - .4mm),
        #000 calc(7mm - .4mm),
        #000 7mm
      );
      background-size: 100% 7mm;
      background-origin: border-box;
    }
    .p2-footer { display: flex; gap: 6mm; margin-top: 3mm; font-size: 9pt; }
    .p2-obj { flex: 0 0 auto; width: 60mm; }
    .p2-obj p { margin-bottom: 1mm; }
    .p2-obj u { min-width: 18mm; display: inline-block; text-align: center; text-decoration: none; border-bottom: .3mm dashed #555; }
    .p2-char { flex: 1; }
    .p2-char-title { font-weight: 700; margin-bottom: 1mm; }
    .p2-char-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 2mm; font-size: 8.5pt; }
    .p2-sig { text-align: right; margin-top: 3mm; font-size: 9.5pt; }

    /* ── Page 3 attendance ── */
    .att-top   { display: flex; align-items: flex-start; gap: 3mm; margin-bottom: 2mm; }
    .att-logo  { width: 18mm; height: 18mm; flex-shrink: 0; border-radius: 50%; overflow: hidden; background: #fff; display: flex; align-items: center; justify-content: center; }
    .att-logo img { width: 110%; height: 110%; margin: -5%; object-fit: contain; }
    .att-info  { flex: 1; font-size: 9pt; }
    .att-title { font-weight: 700; font-size: 10pt; text-align: center; margin-bottom: 1.5mm; }
    .att-hdr-row { display: flex; align-items: baseline; gap: 1.5mm; margin-bottom: 1mm; }
    .att-hdr-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0 5mm; margin-bottom: 1mm; }
    .att-hdr-col { display: flex; align-items: baseline; gap: 1mm; }
    .att-label { flex-shrink: 0; white-space: nowrap; }
    .att-uline { display: inline-block; border-bottom: .3mm dashed #555; min-width: 8mm; text-align: center; padding: 0 1mm; font-weight: 600; flex-shrink: 0; }
    .att-uline-fill { flex: 1; min-width: 15mm; }
    .att-table  { table-layout: fixed; font-size: 6.5pt; width: 100%; border-collapse: collapse; }
    .att-table th { padding: 1px 2px; font-size: 6.5pt; border: .4mm solid #000; }
    .att-table td { padding: 0; font-size: 6.5pt; text-align: center; border: .3mm solid #000; height: var(--att-row-h, 5.5mm); }
    .att-name  { text-align: left !important; font-size: 7pt; padding-left: 1mm !important; white-space: nowrap; overflow: hidden; }
    .att-code  { font-size: 6.5pt; }
    .att-desc  { font-size: 6pt; font-weight: normal; line-height: 1.3; }
    .att-absent { color: #c00; font-weight: 700; }
    .att-leave  { color: #00c; font-weight: 700; }
    .att-sick   { color: #c60; font-weight: 700; }

    /* ── Page 4 scores ── */
    .score-wrap { width: 210mm; min-height: 297mm; padding: 16mm 10mm 12mm; page-break-after: always; }
    .score-top-info { display: grid; grid-template-columns: 1.25fr .95fr .75fr .75fr .9fr; gap: 5mm; align-items: end; font-size: 10px; font-weight: 700; line-height: 1; margin-bottom: 2mm; }
    .sc-field { display: flex; align-items: end; white-space: nowrap; gap: 2mm; }
    .sc-field .sc-lbl { flex: 0 0 auto; }
    .sc-field .sc-val { flex: 1 1 auto; min-width: 18mm; text-align: center; border-bottom: 1px dotted #000; padding: 0 1mm 1px; font-weight: 700; }
    .grade-sheet { width: 100%; border-collapse: collapse; table-layout: fixed; border: 2px solid #000; font-size: 10px; line-height: 1.05; }
    .grade-sheet th, .grade-sheet td { border: 1px solid #000; padding: 1px 2px; text-align: center; vertical-align: middle; height: var(--row-h, 5.8mm); overflow: hidden; }
    .grade-sheet th { font-weight: 700; }
    .grade-sheet .gs-name { text-align: left; padding-left: 2mm; }
    .grade-sheet .grade-attr { white-space: nowrap; }
    .grade-sheet .v { height: 25mm !important; padding: 0; overflow: visible; }
    .grade-sheet .v > span { writing-mode: vertical-rl; transform: rotate(180deg); display: inline-block; white-space: nowrap; line-height: 1; font-size: 9px; overflow: visible; }
    .grade-sheet .gs-small { font-size: 9px; }
    .grade-sheet .score-full { font-size: 10px; height: 4.5mm !important; }
    .grade-sheet .blank-head { background: #fff; }
    /* signature */
    .score-sig { width: 100%; margin-top: 3.5mm; padding-left: 42mm; padding-right: 4mm; font-size: 11px; font-weight: 700; line-height: 1; }
    .score-sig-row { display: grid; grid-template-columns: 16mm 1fr 44mm; column-gap: 2mm; align-items: end; height: 6.7mm; margin-bottom: .5mm; }
    .score-sig-lbl { text-align: left; padding-bottom: .7mm; }
    .score-sig-line { border-bottom: 1px dotted #000; min-height: 4mm; text-align: center; padding-bottom: .6mm; font-weight: 600; }
    .score-sig-role { text-align: left; padding-bottom: .7mm; white-space: nowrap; }

    /* ── Page 5 ── */
    .date-table { width:100%; border-collapse:collapse; border:1.5px solid #000; table-layout:fixed; }
    .date-table th, .date-table td { font-size: 8.5pt; padding: 0 3px; text-align: center; border: 1px solid #000; height: 5mm; }
    .date-table th { font-weight:700; }
    .date-table .wk { width:12mm; }
    .date-table .ep { width:11mm; }
    .date-table .dt { width:20mm; }

    /* ── ACDMVOC (สามัญปวช.) — เทมเพลตแยก ดัดแปลงจากไฟล์อ้างอิงจริงของวิทยาลัย (files.html) ── */
    .voc-page { width: 210mm; height: 297mm; margin: 0; background: #fff; position: relative; overflow: hidden; page-break-after: always; }
    .voc-page:last-child { page-break-after: auto; }
    .voc-page-inner { width: 100%; height: 100%; font-family: 'Sarabun', sans-serif; }
    .voc-page-inner table { border-collapse: collapse; width: 100%; table-layout: fixed; }
    .voc-page-inner th, .voc-page-inner td { border: .35mm solid #111; padding: 0; vertical-align: middle; }
    .voc-center { text-align: center; } .voc-left { text-align: left; } .voc-right { text-align: right; }
    .voc-bold { font-weight: 700; } .voc-small { font-size: 13px; } .voc-tiny { font-size: 10.5px; }
    .voc-line-fill { display: inline-block; min-width: 34mm; line-height: 1.6; padding-bottom: .5mm; border-bottom: .3mm dotted #333; vertical-align: baseline; }
    .voc-line-fill.voc-short { min-width: 16mm; } .voc-line-fill.voc-medium { min-width: 26mm; }
    .voc-line-fill.voc-long { min-width: 75mm; } .voc-line-fill.voc-xlong { min-width: 120mm; }
    .voc-vtext { writing-mode: vertical-rl; transform: rotate(180deg); white-space: nowrap; text-align: center; display: inline-block; }
    .voc-sig-line { display: inline-block; border-bottom: .3mm dotted #222; min-width: 55mm; height: 1em; }
    .voc-check-box { display: inline-block; width: 5mm; height: 5mm; border: .5mm solid #777; border-radius: .5mm; vertical-align: -1mm; margin: 0 1.5mm 0 4mm; }

    /* Page 1 */
    .voc-p1 { padding: 14mm 18mm 10mm; font-size: 16px; }
    .voc-p1 .voc-logo-frame { display: flex; align-items: center; justify-content: center; width: 22mm; height: 22mm; border: .25mm solid #111; border-radius: 50%; margin: 0 auto 1.5mm; overflow: hidden; }
    .voc-p1 .voc-logo { display: block; width: 110%; height: 110%; margin: -5%; object-fit: cover; }
    .voc-p1 .voc-title1 { font-size: 21px; font-weight: 700; text-align: center; margin: 0 0 3mm; }
    .voc-p1 .voc-title2 { font-size: 20px; font-weight: 700; text-align: center; margin: 0 0 3mm; }
    .voc-p1 .voc-title3 { font-size: 19px; font-weight: 700; text-align: center; margin: 0 0 5mm; }
    .voc-p1 .voc-info { margin-top: .5mm; font-size: 16px; }
    .voc-p1 .voc-info-row { display: flex; align-items: flex-end; gap: 3mm; margin: 2.1mm 0; white-space: nowrap; }
    .voc-p1 .voc-info-row .voc-item { display: inline-flex; align-items: flex-end; gap: 1.2mm; }
    .voc-p1 .voc-grade-table { margin-top: 2.5mm; font-size: 14.5px; }
    .voc-p1 .voc-grade-table th { height: 10mm; font-weight: 400; }
    .voc-p1 .voc-grade-table td { height: 7.5mm; text-align: center; }
    .voc-p1 .voc-grade-table td.voc-remark { text-align: left; padding-left: 2mm; }
    .voc-p1 .voc-consider { margin: 2mm 0 5mm; font-weight: 700; font-size: 15px; }
    .voc-p1 .voc-sign-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7mm 18mm; margin: 0 5mm; font-size: 14px; }
    .voc-p1 .voc-sign-block { text-align: center; min-height: 17mm; white-space: nowrap; font-size: 13px; }
    .voc-p1 .voc-sign-block .voc-sig-line { min-width: 38mm !important; }
    .voc-p1 .voc-sign-wide .voc-sig-line { min-width: 45mm !important; }
    .voc-p1 .voc-sign-wide { grid-column: 1 / -1; margin: 0 auto; width: 78%; }
    .voc-p1 .voc-approve { margin-top: 5mm; text-align: center; font-size: 14.5px; }
    .voc-p1 .voc-director { margin-top: 6mm; text-align: center; font-size: 14px; }

    /* Page 2 — บันทึกการไม่มาเรียน */
    .voc-p2 { padding: 15mm 6mm 10mm; }
    .voc-p2-title { font-size: 16px; font-weight: 700; text-align: center; margin-bottom: 1mm; }
    .voc-attendance { font-size: 9.5px; }
    .voc-attendance th { font-weight: 400; }
    .voc-attendance .voc-h-main { height: 18mm; }
    .voc-attendance .voc-h-sub { height: 7mm; }
    .voc-attendance .voc-h-num { height: 6mm; }
    .voc-attendance tbody td { height: var(--att-row-h, 4.55mm); }
    .voc-attendance .voc-student-no { text-align: center; }
    .voc-attendance .voc-student-id { text-align: center; }
    .voc-attendance .voc-student-name { padding-left: 1mm; }
    .voc-attendance .voc-att { text-align: center; }
    .voc-attendance .voc-score { text-align: center; }
    .voc-attendance .voc-sched-week { text-align: center; }
    .voc-attendance .voc-sched-period { text-align: center; }
    .voc-attendance .voc-sched-date { text-align: center; }
    .voc-attendance .voc-instruction { padding: .6mm 1mm; line-height: 1.1; text-align: left; }
    .voc-attendance .voc-blue { color: #005bbb; font-weight: 700; }
    .voc-attendance .voc-red { color: #d00; font-weight: 700; }
    .voc-att-flex { display: flex; align-items: flex-start; }
    .voc-att-flex table.voc-attendance { width: auto; }
    .voc-attendance .voc-orange { color: #e67e00; font-weight: 700; }

    /* Page 3 — แบบประเมินผลการเรียน */
    .voc-p3 { padding: 14mm 6mm 10mm; }
    .voc-p3-title { font-size: 20px; font-weight: 700; text-align: center; margin-bottom: 3mm; }
    .voc-eval { font-size: 10.5px; }
    .voc-eval th { font-weight: 400; line-height: 1.25; text-align: center; }
    .voc-eval .voc-h-top { height: 10mm; }
    .voc-eval .voc-h-vertical { height: 14mm; }
    .voc-eval .voc-h-score { height: 5mm; }
    .voc-eval .voc-vtext { line-height: 1.35; }
    .voc-eval tbody td { height: 4.8mm; }
    .voc-eval .voc-c-no { width: 5mm; text-align: center; }
    .voc-eval .voc-c-id { width: 19.5mm; text-align: center; }
    .voc-eval .voc-c-name { width: 43.5mm; padding-left: 1mm; }
    .voc-eval .voc-c-obj { width: 7mm; text-align: center; word-break: break-word; }
    .voc-eval .voc-c-sum80 { width: 9.5mm; text-align: center; }
    .voc-eval .voc-c-moral { width: 9.5mm; text-align: center; }
    .voc-eval .voc-c-total { width: 9.5mm; text-align: center; }
    .voc-eval .voc-c-grade { width: 12.5mm; text-align: center; }
    .voc-eval .voc-c-note { width: 12.5mm; text-align: center; }
    .voc-p3 .voc-footer-sigs { display: grid; grid-template-columns: 1fr 1fr; gap: 18mm; margin: 7mm 18mm 0; font-size: 13px; }
    .voc-p3 .voc-footer-sigs > div { text-align: center; white-space: nowrap; }
    .voc-p3 .voc-footer-sigs .voc-sig-line { min-width: 38mm !important; }

    /* Page 4 — จุดประสงค์/กำหนดการสอน */
    .voc-p4 { padding: 20mm 16mm 10mm; font-size: 16px; }
    .voc-p4 .voc-course-title { text-align: center; font-size: 17px; margin-bottom: 2mm; }
    .voc-p4 .voc-course-code { text-align: center; font-size: 16px; margin-bottom: 2mm; }
    .voc-p4 .voc-objective-table { font-size: 14px; }
    .voc-p4 .voc-objective-table th { height: 8mm; font-weight: 400; }
    .voc-p4 .voc-objective-table td { height: 7mm; }
    .voc-p4 .voc-schedule-title { text-align: center; font-size: 18px; margin: 5.5mm 0 2mm; }
    .voc-p4 .voc-schedule-table { font-size: 14px; }
    .voc-p4 .voc-schedule-table th { height: 7mm; font-weight: 400; }
    .voc-p4 .voc-schedule-table td { height: 5.45mm; }
    .voc-p4 .voc-sign-bottom { text-align: center; margin-top: 2mm; font-size: 14px; white-space: nowrap; }
  `}function Et(t){var ht,d,q;const{cls:l,ms:s,credit:i,prefix:o,cfg:e,students:n,scoreColumns:H,scoreMap:v,teacher:p,dept:b,deptNameTH:y,deptHeadName:x,hrSamai:$,hrReligion:S,academicYear:z,semester:j,sessions:k,readingEvalMap:C,roundSettings:f}=t,g=a(e[`${o}SchoolName`]??e.samaiSchoolName??""),r=a(e[`${o}SchoolAddress`]??e.samaiSchoolAddress??""),c=e[`${o}LogoBwUrl`]||e[`${o}LogoUrl`]||e.samaiLogoBwUrl||e.samaiLogoUrl||"",m=a(e[`${o}DirectorName`]??"");e[`${o}DirectorSignUrl`];const h=a(e[`${o}DirectorTitle`]||"ผู้อำนวยการ"),u=["AGM","AGMVOC"].includes(s.subject_group),w=a(u?e.agmAcademicHeadName??e[`${o}AcademicHeadName`]??"":e[`${o}AcademicHeadName`]??"");u?e.agmAcademicHeadSignUrl??e[`${o}AcademicHeadSignUrl`]:e[`${o}AcademicHeadSignUrl`];const A=a((u?e.agmAcademicHeadTitle:e[`${o}AcademicHeadTitle`])||"หัวหน้าฝ่ายบริหารวิชาการ"),_=a(u?e.agmRegistrarName??e[`${o}RegistrarName`]??"":e[`${o}RegistrarName`]??"");u?e.agmRegistrarSignUrl??e[`${o}RegistrarSignUrl`]:e[`${o}RegistrarSignUrl`];const R=a((u?e.agmRegistrarTitle:e[`${o}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล"),O=a(x);b==null||b.head_sign_url;const N=l.class_name??"",G=!u&&(["4","5","6"].some(D=>(s.grade_level??"").includes(D))||["ACDMVOC"].includes(s.subject_group)),T=u?N.startsWith("PR")?"PR":N.startsWith("อก")?"อก":N.startsWith("อป")?"อป":"":"",L=k!=null&&k.length?Math.round(k.length/20):i*2,K=(k==null?void 0:k.length)??i*2*20,Y=!!window._pp5HideScores;f==null||f.forcedGradeColor;const B=H.reduce((D,U)=>D+(U.max_score??0),0),W={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},F={ร:0,มส:0},M={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0},V={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0};if(!Y)for(const D of n){const U=v[D.id]??{},I=H.reduce((gt,ft)=>gt+(U[ft.id]??0),0),ct=kt(f,I),pt=(ht=v[D.id])==null?void 0:ht.__force,Z=pt!=null&&String(pt).trim()!=="",St=Z?Number(pt):NaN;if(Z&&!Number.isFinite(St)){const gt=String(pt).trim().replace(/\s+/g,"").replace(/\./g,"");gt==="ร"&&F.ร++,gt==="มส"&&F.มส++;const ft=C==null?void 0:C[D.id];ft&&ft in M&&M[ft]++,V.ไม่ผ่าน++;continue}let bt=Z?St:0;if(!Z&&B>0){const gt=ct/B*100;bt=ut(gt)}const jt=String(bt);jt in W&&W[jt]++;const wt=C==null?void 0:C[D.id];wt&&wt in M&&M[wt]++;const Ct=Tt(bt);Ct in V&&V[Ct]++}const P=D=>`<span class="box${D?" checked":""}"></span>`,J=u?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",X=u?"76mm":"83mm",Q=u?"115mm":"117.4mm",et=u?`
    <div class="check-line">${P(T==="PR")}<span>ตอนต้น (PR)</span></div>
    <div class="check-line">${P(T==="อก")}<span>ตอนกลาง (อก.)</span></div>
    <div class="check-line">${P(T==="อป")}<span>ตอนปลาย (อป.)</span></div>
  `:`
    <div class="check-line">${P(!G)}<span>ตอนต้น (ม.1-ม.3)</span></div>
    <div class="check-line">${P(G)}<span>ตอนปลาย (ม.4-ม.6)</span></div>
  `,st=y.length>15?`<span class="uline w-md" style="white-space:normal;line-height:4.5mm;min-height:9mm;vertical-align:bottom;">${a(y)}</span>`:`<span class="uline w-md">${a(y)}</span>`,at=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",dt=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",it=u?`
    <div class="info-line">
      <span>${at}</span>${st}
      <span>รหัสวิชา</span><span class="uline w-cd">${a(s.subject_code??"")}</span>
    </div>`:`
    <div class="info-line">
      <span>${at}</span>${st}
      <span>รายวิชา</span><span class="uline w-lg">${a(s.subject_name??"")}</span>
      <span>รหัสวิชา</span><span class="uline w-cd">${a(s.subject_code??"")}</span>
    </div>`,mt=[...[4,"3.5",3,"2.5",2,"1.5",1,0].map(D=>W[String(D)]||"-"),F.ร||"-",F.มส||"-"].map(D=>`<td>${D}</td>`).join(""),E=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(D=>`<td>${M[D]||"-"}</td>`).join(""),ot=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(D=>`<td>${V[D]||"-"}</td>`).join("");return`
  <div class="page-p1">
    <div class="doc-code">ปพ5</div>
    ${c?`<div class="logo-wrap"><img src="${a(c)}" alt="ตราโรงเรียน" /></div>`:""}

    <h1 class="p1-title">แบบบันทึกผลการพัฒนาคุณภาพผู้เรียน</h1>

    <section class="level-row">
      <div class="lbl" style="left:${X};">${J}</div>
      <div class="checks" style="left:${Q};">${et}</div>
    </section>

    <div class="school">${g}</div>
    <div class="school-sub">${r}</div>

    <section class="info">
      <div class="info-line">
        <span>${J}</span><span class="uline w-sm">${a(tt(l.class_name))}</span>
        <span>ภาคเรียนที่</span><span class="uline w-md">${j}</span>
        <span>ปีการศึกษา</span><span class="uline w-yr">${z}</span>
      </div>
      ${it}
      <div class="info-line">
        <span>จำนวน</span><span class="uline w-xs">${i}</span>
        <span>หน่วยกิต</span>
        <span>เวลาเรียน</span><span class="uline w-xs">${L}</span>
        <span>ชั่วโมง/สัปดาห์</span>
        <span>รวมเวลาเรียน</span><span class="uline w-xs">${K}</span>
        <span>ชั่วโมง/ภาค</span>
      </div>
      <div class="info-row-one"><span>ครูผู้สอน</span><span class="uline-xl">${a((p==null?void 0:p.full_name)??"")}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาสามัญ</span><span class="uline-xl">${a(((d=$==null?void 0:$.teachers)==null?void 0:d.full_name)??"")}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาศาสนา</span><span class="uline-xl">${a(((q=S==null?void 0:S.teachers)==null?void 0:q.full_name)??"")}</span></div>
    </section>

    <section class="summary-box">
      <table class="grade-table">
        <colgroup>
          <col class="col-tot"/>
          <col span="8" class="col-g"/>
          <col span="2" class="col-gs"/>
          <col class="col-note"/>
        </colgroup>
        <tr>
          <th rowspan="3">จำนวน<br>นักเรียน<br>ทั้งหมด</th>
          <th colspan="10">สรุปผลการเรียน</th>
          <th>หมายเหตุ</th>
        </tr>
        <tr>
          <th colspan="10" class="stitle">จำนวนนักเรียนที่ได้รับผลการเรียน</th>
          <td rowspan="2"></td>
        </tr>
        <tr>
          <th>4</th><th>3.5</th><th>3</th><th>2.5</th>
          <th>2</th><th>1.5</th><th>1</th><th>0</th>
          <th>ร</th><th>มส</th>
        </tr>
        <tr>
          <td>${n.length}</td>${mt}<td></td><td></td><td></td>
        </tr>
        <tr><td colspan="12" class="evspc"></td></tr>
      </table>
      <table class="eval-table">
        <colgroup>
          <col class="col-elbl"/><col/><col/><col/><col/><col class="col-note"/>
        </colgroup>
        <tr>
          <th>สรุปผลการประเมิน</th>
          <th>ดีเยี่ยม</th><th>ดี</th><th>ผ่าน</th><th>ไม่ผ่าน</th><th>หมายเหตุ</th>
        </tr>
        <tr>
          <td>การประเมินการอ่าน คิด<br>วิเคราะห์และเขียนสื่อความ</td>
          ${E}<td></td>
        </tr>
        <tr>
          <td>การประเมินคุณลักษณะ<br>อันพึงประสงค์</td>
          ${ot}<td></td>
        </tr>
      </table>
    </section>

    <section class="approval">
      <div class="apl-title">การอนุมัติผลการพัฒนาคุณภาพผู้เรียน</div>

      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${a((p==null?void 0:p.full_name)??"")}</span>
        <span>ครูผู้สอน</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${O}</span>
        <span>${dt}</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${_}</span>
        <span>${R}</span>
      </div>

      <div class="consider">เสนอเพื่อพิจารณา</div>

      <div class="ctr-block">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${w}</span>
        </div>
        <div class="p1-role">${A}</div>
      </div>

      <div class="decision">
        <span>${P(!0)}&nbsp; อนุมัติ</span>
        <span>${P(!1)}&nbsp; ไม่อนุมัติ</span>
      </div>

      <div class="ctr-block director">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${m}</span>
        </div>
        <div class="p1-role">${h}</div>
      </div>
    </section>
  </div>`}function Pt(t){const{cls:l,ms:s,credit:i,cfg:o,courseDoc:e,thColHeaders:n,thColsExtra:H,thRowHeader:v,teacher:p,deptNameTH:b,deptHeadName:y,academicYear:x,semester:$,prefix:S,sessions:z}=t,j=(z==null?void 0:z.length)??i*2*20,k=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",C=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",f=o[`${S}LogoBwUrl`]||o[`${S}LogoUrl`]||o.samaiLogoBwUrl||o.samaiLogoUrl||"",g=Array.isArray(e==null?void 0:e.table_rows)?e.table_rows:[],r=(e==null?void 0:e.text_direction)==="rtl"?"rtl":(e==null?void 0:e.text_direction)==="ltr"?"ltr":"auto",m=(Array.isArray(e==null?void 0:e.table_columns)?e.table_columns.length:2)===1,h=m?[H[0]??"ผลการเรียนรู้"]:n??["มาตรฐานการเรียนรู้","ตัวชี้วัด"],u=g,w=(L,K="")=>[Array.isArray(L)&&L.length?L.join(", "):"",(K??"").trim()].filter(Boolean).join(", "),A=w(e==null?void 0:e.between_objective_items,e==null?void 0:e.between_objective_extra),_=w(e==null?void 0:e.midterm_objective_items,e==null?void 0:e.midterm_objective_extra),R=w(e==null?void 0:e.final_objective_items,e==null?void 0:e.final_objective_extra),O=["AGM","AGMVOC"].includes(s.subject_group),N=["1 รักชาติ ศาสน์ กษัตริย์","2 ซื่อสัตย์สุจริต","3 มีวินัย","4 ใฝ่เรียนรู้","5 อยู่อย่างพอเพียง"],G=["6 มุ่งมั่นในการทำงาน","7 รักความเป็นไทย","8 มีจิตสาธารณะ","9 ปฏิบัติศาสนกิจอย่างสม่ำเสมอ"],T=O?"ระดับชั้นอิสลามศึกษา":"ระดับชั้น";return`
  <div class="p2-wrap">
    <!-- Logo + Title -->
    ${f?`<div class="p2-logo-wrap"><img src="${a(f)}" alt="โลโก้"/></div>`:'<div style="height:5mm;"></div>'}
    <div class="p2-title">มาตรฐานการเรียนรู้และตัวชี้วัด/รายภาค</div>

    <!-- Header -->
    <div class="p2-hdr">
      <!-- คอลัมน์ซ้าย -->
      <div class="p2-hdr-col">
        <div class="p2-hdr-row">
          <span class="p2-label">รายวิชา</span>
          <span class="p2-uline p2-uline-fill">${a(s.subject_name??"")}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">${T}</span>
          <span class="p2-uline p2-uline-fill">${a(tt(l.class_name??""))}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ครูผู้สอน</span>
          <span class="p2-uline p2-uline-fill">${a((p==null?void 0:p.full_name)??"")}</span>
        </div>
      </div>
      <!-- คอลัมน์ขวา -->
      <div class="p2-hdr-col">
        <div class="p2-hdr-row">
          <span class="p2-label">รหัสวิชา</span>
          <span class="p2-uline">${a(s.subject_code??"")}</span>
          <span class="p2-label">${k}</span>
          <span class="p2-uline p2-uline-fill">${a(b)}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ภาคเรียนที่</span>
          <span class="p2-uline">${a(String($))}</span>
          <span class="p2-label">ปีการศึกษา</span>
          <span class="p2-uline">${a(String(x))}</span>
          <span class="p2-label">เวลา</span>
          <span class="p2-uline p2-uline-fill">${a(String(j))}</span>
          <span class="p2-label">ชั่วโมง</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">จำนวน</span>
          <span class="p2-uline">${a(String(i))}</span>
          <span class="p2-label">หน่วยกิต</span>
        </div>
      </div>
    </div>

    <!-- Standards Table -->
    ${m?`
    <table class="std-table" style="table-layout:fixed;">
      <thead>
        <tr>
          <th style="width:100%;" dir="ltr">${a(h[0])}</th>
        </tr>
      </thead>
      <tbody>
        ${u.map((L,K)=>{const Y=a(Array.isArray(L)?L[0]??"":""),B=K+1;return`<tr><td class="std-row" dir="${r}" style="padding:1.5mm 2.5mm;">
            <span style="display:inline-flex;gap:5px;align-items:flex-start;width:100%;">
              <b style="flex-shrink:0;min-width:16px;text-align:center;">${B}.</b>
              <span style="flex:1;">${Y}</span>
            </span>
          </td></tr>`}).join("")}
        <tr class="std-fill-row"><td></td></tr>
      </tbody>
    </table>`:`
    <table class="std-table" dir="${r}">
      <thead>
        <tr>
          <th style="width:50mm;">${a(h[0]??"มาตรฐานการเรียนรู้")}</th>
          <th>${a(h[1]??"ตัวชี้วัด")}</th>
        </tr>
      </thead>
      <tbody>
        ${u.map(L=>`<tr>
          <td class="std-row">${a(Array.isArray(L)?L[0]??"":"")}</td>
          <td class="std-row">${a(Array.isArray(L)?L[1]??"":"")}</td>
        </tr>`).join("")}
        <tr class="std-fill-row"><td></td><td></td></tr>
      </tbody>
    </table>`}

    <!-- Footer: Objectives + คุณลักษณะ -->
    <div class="p2-footer">
      <div class="p2-obj">
        <p>จุดประสงค์วัดผลรายจุดประสงค์ ข้อที่ <u>${A}</u></p>
        <p>จุดประสงค์วัดผลกลางภาค ข้อที่ <u>${_}</u></p>
        <p>จุดประสงค์วัดผลปลายภาค ข้อที่ <u>${R}</u></p>
      </div>
      <div class="p2-char">
        <div class="p2-char-title">คุณลักษณะอันพึงประสงค์</div>
        <div class="p2-char-grid">
          <div>${N.map(L=>`<div>${a(L)}</div>`).join("")}</div>
          <div>${G.map(L=>`<div>${a(L)}</div>`).join("")}</div>
        </div>
      </div>
    </div>

    <!-- Signature -->
    <div class="p2-sig">
      ลงชื่อ <span style="display:inline-block;border-bottom:.3mm dashed #555;min-width:60mm;text-align:center;padding:0 2mm;">
        ${a(y)}
      </span> ${C}
    </div>
  </div>`}const Rt=50;function Wt(t){const{cls:l,ms:s,credit:i,cfg:o,students:e,attMap:n,sessions:H,academicYear:v,semester:p,teacher:b}=t,y=[];for(let x=0;x<e.length;x+=Rt){const $=e.slice(x,x+Rt);y.push(we(t,$,x+1))}return y.join("")}function we(t,l,s){const{cls:i,ms:o,teacher:e,academicYear:n,semester:H,cfg:v,prefix:p}=t,b=(v==null?void 0:v[`${p}LogoBwUrl`])||(v==null?void 0:v[`${p}LogoUrl`])||(v==null?void 0:v.samaiLogoBwUrl)||(v==null?void 0:v.samaiLogoUrl)||"",y=40,x=l.length+1,$=Math.max(3.5,Math.min(5.5,Math.floor(241/x*10)/10)).toFixed(1),S="3.2mm",z=l.map((C,f)=>{const g=t.attMap[C.id]??{},r=[];for(const[h,u]of Object.entries(g))u!=="present"&&r.push({n:parseInt(h),status:u});r.sort((h,u)=>h.n-u.n);const c=r.length,m=Array.from({length:y},(h,u)=>{const w=r[u];return w?`<td class="${w.status==="absent"?"att-absent":w.status==="leave"?"att-leave":w.status==="sick"?"att-sick":"att-absent"}">${w.n}</td>`:"<td></td>"});return`<tr>
      <td class="text-center">${s+f}</td>
      <td class="att-code text-center">${a(C.student_code??"")}</td>
      <td class="att-name">${a(C.full_name??"")}</td>
      ${m.join("")}
      <td class="text-center font-bold">${c||""}</td>
    </tr>`}),j=Array.from({length:y},(C,f)=>`<th>${f+1}</th>`).join(""),k=3+y+1;return`
  <div class="page-tight">
    <div class="att-top">
      ${b?`<div class="att-logo"><img src="${a(b)}" alt="โลโก้" /></div>`:'<div style="width:18mm;flex-shrink:0;"></div>'}
      <div class="att-info">
        <div class="att-title">บันทึกการไม่มาเรียนของนักเรียนชั้น ${a(tt(i.class_name))}</div>
        <div class="att-hdr-row">
          <span class="att-label">ปีการศึกษา</span>
          <span class="att-uline">${a(String(n))}</span>
          <span class="att-label" style="margin-left:4mm;">ภาคเรียนที่</span>
          <span class="att-uline">${a(String(H))}</span>
        </div>
        <div class="att-hdr-row2">
          <div class="att-hdr-col">
            <span class="att-label">รายวิชา</span>
            <span class="att-uline att-uline-fill">${a(o.subject_name??"")}</span>
          </div>
          <div class="att-hdr-col">
            <span class="att-label">รหัสวิชา</span>
            <span class="att-uline att-uline-fill">${a(o.subject_code??"")}</span>
          </div>
        </div>
        <div class="att-hdr-row">
          <span class="att-label">ครูผู้สอน</span>
          <span class="att-uline att-uline-fill">${a((e==null?void 0:e.full_name)??"")}</span>
        </div>
      </div>
    </div>
    <table class="att-table" style="--att-row-h:${$}mm">
      <colgroup>
        <col style="width:6mm;"/>
        <col style="width:13mm;"/>
        <col style="width:36mm;"/>
        ${Array.from({length:y},()=>`<col style="width:${S};"/>`).join("")}
        <col style="width:10mm;"/>
      </colgroup>
      <thead>
        <tr>
          <th colspan="${k}" style="text-align:left;font-weight:normal;padding:0.8mm 1mm;border-bottom:none;">
            บันทึกคาบที่สอนที่นักเรียนไม่ได้มาเรียน:&ensp;
            <span style="color:#c00;font-weight:700;">ขาด</span>&ensp;
            <span style="color:#00c;font-weight:700;">ลา</span>&ensp;
            <span style="color:#c60;font-weight:700;">ป่วย</span>
          </th>
        </tr>
        <tr>
          <th rowspan="2" style="font-size:7pt;">เลขที่</th>
          <th rowspan="2" style="font-size:7pt;">เลขประจำตัว</th>
          <th rowspan="2" style="font-size:7pt;">ชื่อ - สกุล</th>
          <th colspan="${y}" style="font-size:7pt;">บันทึกการไม่มาเรียน</th>
          <th rowspan="2" style="font-size:7pt;">รวมเวลา<br/>ไม่มาเรียน</th>
        </tr>
        <tr>${j}</tr>
      </thead>
      <tbody>
        ${z.join("")}
        <tr><td></td><td></td><td></td>${Array.from({length:y},()=>"<td></td>").join("")}<td></td></tr>
      </tbody>
    </table>
  </div>`}const Dt=50;function Gt(t){const{students:l}=t,s=[];for(let i=0;i<l.length;i+=Dt)s.push(ye(t,l.slice(i,i+Dt),i+1));return s.join("")}function ye(t,l,s){var W,F;const{cls:i,ms:o,teacher:e,deptHeadName:n,academicYear:H,semester:v,scoreColumns:p,scoreMap:b,readingEvalMap:y,roundSettings:x}=t,$=(x==null?void 0:x.forcedGradeColor)==="black"?"black":"red",S=o.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้าหมวดวิชา",z=M=>M.assignment_type==="ปลายภาค"||M.assignment_type==="final",j=M=>M.assignment_type==="คะแนนพิเศษ",k=p.filter(M=>!z(M)&&!j(M));p.filter(M=>j(M));const C=p.filter(M=>z(M)),f=5,g=5,r={id:null,assignment_name:"",max_score:""},c=[...k,...Array(Math.max(0,f-k.length)).fill(r)],m=[...C,...Array(Math.max(0,g-C.length)).fill(r)],h=k.reduce((M,V)=>M+(V.max_score??0),0),u=C.reduce((M,V)=>M+(V.max_score??0),0),w=c.length+1,A=m.length+2,_=w+A,O=3+_+3,N=l.length+1,G=Math.max(3.8,Math.min(5.8,Math.floor(160/N*10)/10)).toFixed(1),T=!!window._pp5HideScores,L=l.map((M,V)=>{if(T)return`<tr>
        <td>${s+V}</td>
        <td>${a(M.student_code??"")}</td>
        <td class="gs-name" style="border-right:2.0px solid #000;">${a(M.full_name??"")}</td>
        ${c.map(()=>"<td></td>").join("")}
        <td></td>
        ${m.map(()=>"<td></td>").join("")}
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
      </tr>`;const P=b[M.id]??{},J=c.map(E=>E.id?lt(t.roundSettings,$t(E),P[E.id],E.column_type==="derived"?2:1):""),X=m.map(E=>E.id?lt(t.roundSettings,$t(E),P[E.id],E.column_type==="derived"?2:1):""),Q=k.reduce((E,ot)=>E+Number(P[ot.id]??0),0),et=C.reduce((E,ot)=>E+(P[ot.id]??0),0),st=Q+et,at=!!P.__force,dt=kt(t.roundSettings,st),it=P.__force||ut(h+u>0?dt/(h+u)*100:0),mt=Tt(it);return`<tr>
      <td>${s+V}</td>
      <td>${a(M.student_code??"")}</td>
      <td class="gs-name" style="border-right:2.0px solid #000;">${a(M.full_name??"")}</td>
      ${J.map(E=>`<td>${E}</td>`).join("")}
      <td style="font-weight:700;">${lt(t.roundSettings,"mid_subtotal",Q)}</td>
      ${X.map(E=>`<td>${E}</td>`).join("")}
      <td style="font-weight:700;">${lt(t.roundSettings,"fin_subtotal",et)}</td>
      <td style="font-weight:700;border-right:2.0px solid #000;">${lt(t.roundSettings,"total",st)}</td>
      <td>${a((y==null?void 0:y[M.id])??"")}</td>
      <td class="grade-attr" style="border-right:2.0px solid #000;">${a(mt)}</td>
      <td style="font-weight:700;${at?`color:${$==="red"?"#c00":"#000"};`:""}">${it}</td>
    </tr>`}),K=`<tr>${Array(O).fill("<td></td>").join("")}</tr>`,Y=k.length>6?"5mm":"5.8mm",B=C.length>5?"5mm":"5.5mm";return`
  <div class="score-wrap">
    <div class="score-top-info">
      <div class="sc-field"><span class="sc-lbl">รายวิชา</span><span class="sc-val">${a(o.subject_name??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">รหัสวิชา</span><span class="sc-val">${a(o.subject_code??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">ชั้น</span><span class="sc-val">${a(tt(i.class_name))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ภาคเรียนที่</span><span class="sc-val">${a(String(v))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ปีการศึกษา</span><span class="sc-val">${a(String(H))}</span></div>
    </div>
    <table class="grade-sheet" style="--row-h:${G}mm">
      <colgroup>
        <col style="width:5mm;"/>
        <col style="width:12mm;"/>
        <col style="width:45mm;"/>
        ${c.map(()=>`<col style="width:${Y};"/>`).join("")}
        <col style="width:7mm;"/>
        ${m.map(()=>`<col style="width:${B};"/>`).join("")}
        <col style="width:7mm;"/>
        <col style="width:8mm;"/>
        <col style="width:8.5mm;"/>
        <col style="width:11mm;"/>
        <col style="width:6mm;"/>
      </colgroup>
      <thead>
        <!-- Row 1: ผู้เรียน คลุม 3 คอลัมน์ + section header + result cols rs5 -->
        <tr>
          <th colspan="3" style="border-right:2.5px solid #000;">ผู้เรียน</th>
          <th colspan="${_}" style="border-right:2.0px solid #000;">วัดผลระหว่างภาค / ปลายภาค</th>
          <th rowspan="5" class="v"><span style="font-size:7px;">ประเมินการอ่านคิดวิเคราะห์และเขียน</span></th>
          <th rowspan="5" class="v grade-attr" style="border-right:2.0px solid #000;"><span style="font-size:7px;">ประเมินคุณลักษณะอันพึงประสงค์</span></th>
          <th rowspan="5" class="v"><span>ระดับการเรียน</span></th>
        </tr>
        <!-- Row 2: เลขที่(v,rs4) | เลขประจำตัว(v,rs4) | ชื่อ-สกุล(rs4) | อัตราส่วน -->
        <tr>
          <th rowspan="4" class="v"><span>เลขที่</span></th>
          <th rowspan="4" class="v"><span>เลขประจำตัว</span></th>
          <th rowspan="4" style="border-right:2.0px solid #000;">ชื่อ - สกุล</th>
          <th colspan="${_}" style="font-size:7px;padding:1px;border-right:2.0px solid #000;">อัตราส่วนคะแนนระหว่างเรียน:วัดผลระหว่างภาค/ปลายภาค = ${h} / ${u}</th>
        </tr>
        <!-- Row 3: between/final section headers (3 student cols covered by rs4) -->
        <tr>
          <th colspan="${c.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนระหว่างเรียน/กลางภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนระหว่างภาค</span></th>
          <th colspan="${m.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนปลายภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนปลายภาค</span></th>
          <th rowspan="2" class="v" style="border-right:2.0px solid #000;"><span>รวมคะแนน 100</span></th>
        </tr>
        <!-- Row 4: column name verticals (3 student cols covered by rs4) -->
        <tr>
          ${c.map(M=>`<th class="v" style="overflow:visible;"><span>${a(M.assignment_name??"")}</span></th>`).join("")}
          ${m.map(M=>`<th class="v" style="overflow:visible;"><span>${a(M.assignment_name??"")}</span></th>`).join("")}
        </tr>
        <!-- Row 5: score-full (3 student cols still covered by rs4) -->
        <tr>
          ${c.map(M=>`<th class="score-full">${M.max_score??""}</th>`).join("")}
          <th class="score-full">${h||""}</th>
          ${m.map(M=>`<th class="score-full">${M.max_score??""}</th>`).join("")}
          <th class="score-full">${u||""}</th>
          <th class="score-full" style="border-right:2.0px solid #000;">${h||u?h+u:""}</th>
        </tr>
      </thead>
      <tbody>
        ${L.join("")}
        ${K}
      </tbody>
    </table>
    <div class="score-sig">
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${a((e==null?void 0:e.full_name)??"")}</div>
        <div class="score-sig-role">ครูผู้สอน</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${a(n)}</div>
        <div class="score-sig-role">${S}</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${a(["AGM","AGMVOC"].includes((W=t.ms)==null?void 0:W.subject_group)?t.cfg.agmRegistrarName??t.cfg[`${t.prefix}RegistrarName`]??"":t.cfg[`${t.prefix}RegistrarName`]??"")}</div>
        <div class="score-sig-role">${a((["AGM","AGMVOC"].includes((F=t.ms)==null?void 0:F.subject_group)?t.cfg.agmRegistrarTitle??t.cfg[`${t.prefix}RegistrarTitle`]:t.cfg[`${t.prefix}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล")}</div>
      </div>
    </div>
  </div>`}function Bt(t){const{cls:l,ms:s,credit:i,teacher:o,deptNameTH:e,academicYear:n,semester:H,sessions:v,cfg:p,prefix:b,holidaySet:y}=t,x=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",$=["AGM","AGMVOC"].includes(s.subject_group)?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",S=40,z=3,j=v!=null&&v.length?Math.round(v.length/20):Math.max(1,Math.round(i*2)),k=(p==null?void 0:p[`${b}LogoBwUrl`])||(p==null?void 0:p[`${b}LogoUrl`])||(p==null?void 0:p.samaiLogoBwUrl)||(p==null?void 0:p.samaiLogoUrl)||"",C=Array.from({length:z},(h,u)=>Array.from({length:S},(w,A)=>{const _=v[u*S+A];return _?{sess:_,week:Math.ceil(_.n/j)}:null})),f=C.map(h=>h.map((u,w)=>{var _,R;if(!u)return null;if(w>0&&((_=h[w-1])==null?void 0:_.week)===u.week)return 0;let A=1;for(let O=w+1;O<S&&((R=h[O])==null?void 0:R.week)===u.week;O++)A++;return A})),g="border-right:1.5px solid #000;",r=Array.from({length:S},(h,u)=>`<tr>${Array.from({length:z},(A,_)=>{const R=C[_][u],O=f[_][u],N=_<z-1?g:"";if(!R)return`<td></td><td></td><td style="${N}"></td>`;const G=O===0?"":`<td class="wk" rowspan="${O}">${R.week}</td>`,T=y==null?void 0:y.has(R.sess.ds),L=N+(T?"color:#c00;font-weight:700;":"");return`${G}<td class="ep">${R.sess.n}</td><td class="dt" style="${L}">${Ot(R.sess.ds)}</td>`}).join("")}</tr>`),c=(h,u="",w=!1)=>`<span style="${w?"flex:1;border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;":`display:inline-block;min-width:${h};border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;`}">${a(String(u))}</span>`,m=h=>`<div style="display:flex;align-items:baseline;gap:2mm;font-size:9pt;margin-bottom:1.5mm;">${h}</div>`;return`
  <div class="page" style="padding:12mm 10mm 8mm;">
    ${k?`<div style="text-align:center;margin-bottom:2mm;"><div style="width:16mm;height:16mm;border-radius:50%;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;"><img src="${a(k)}" style="width:110%;height:110%;margin:-5%;object-fit:contain;display:block;" alt="โลโก้"/></div></div>`:""}
    <div style="text-align:center;font-weight:700;font-size:12pt;margin-bottom:3mm;">รายละเอียดสัปดาห์/คาบ/วันที่สอน</div>
    ${m(`<span>รายวิชา</span>${c("40mm",s.subject_name??"")}
           <span>&emsp;รหัสวิชา</span>${c("22mm",s.subject_code??"")}
           <span>&emsp;${x}</span>${c("",e,!0)}`)}
    ${m(`<span>${$}</span>${c("16mm",tt(l.class_name))}
           <span>&emsp;ภาคเรียนที่</span>${c("10mm",H)}
           <span>&emsp;ปีการศึกษา</span>${c("18mm",n)}
           <span>&emsp;เวลา</span>${c("12mm")}
           <span>ชั่วโมง&emsp;จำนวน</span>${c("",i,!0)}
           <span>หน่วยกิต</span>`)}
    ${m(`<span>ครูผู้สอน</span>${c("80mm",(o==null?void 0:o.full_name)??"")}`)}
    <table class="date-table">
      <colgroup>
        <col class="wk"/><col class="ep"/><col class="dt" style="border-right:2.5px solid #000;"/>
        <col class="wk"/><col class="ep"/><col class="dt" style="border-right:2.5px solid #000;"/>
        <col class="wk"/><col class="ep"/><col class="dt"/>
      </colgroup>
      <thead>
        <tr>
          <th colspan="9" style="font-size:10pt;">สัปดาห์/คาบ/วันที่สอน</th>
        </tr>
        <tr>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt" style="${g}">วันที่/เดือน/ปี</th>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt" style="${g}">วันที่/เดือน/ปี</th>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt">วันที่/เดือน/ปี</th>
        </tr>
      </thead>
      <tbody>${r.join("")}</tbody>
    </table>
  </div>`}const Vt=["ข.ร.","ข.ส.","ม.ส.","ข.ป."];function Ut(t){return String(t??"").trim().replace(/\s+/g,"").replace(/\./g,"")==="มส"?"ม.ส.":String(t??"").trim()}function xe(t){var Y,B;const{cls:l,ms:s,credit:i,prefix:o,cfg:e,students:n,scoreColumns:H,scoreMap:v,teacher:p,deptNameTH:b,deptHeadName:y,hrSamai:x,hrReligion:$,academicYear:S,semester:z,sessions:j,moralScores:k,moralMax:C}=t,f=a(e[`${o}SchoolName`]??e.samaiSchoolName??""),g=e[`${o}LogoUrl`]||e[`${o}LogoBwUrl`]||e.samaiLogoUrl||e.samaiLogoBwUrl||"",r=a(e[`${o}DirectorName`]??""),c=a(e[`${o}DirectorTitle`]||"ผู้อำนวยการ"),m=a(e[`${o}RegistrarName`]??""),h=a(e[`${o}RegistrarTitle`]||"ผู้ช่วยผู้อำนวยการฝ่ายทะเบียนวัดผลและประเมินผล"),u=a(y),w=j!=null&&j.length?Math.round(j.length/20):i*2,A=(j==null?void 0:j.length)??i*2*20,_=!!window._pp5HideScores,R=H.reduce((W,F)=>W+(F.max_score??0),0)+(C||0),O={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},N={"ข.ร.":0,"ข.ส.":0,"ม.ส.":0,"ข.ป.":0};let G=0,T=0,L=0;if(!_)for(const W of n){const F=Ut(W.special_result);if(F&&Vt.includes(F)){N[F]++;continue}const M=v[W.id]??{},V=H.some(P=>M[P.id]!=null);if(V&&L++,R>0){const J=(H.reduce((st,at)=>st+(M[at.id]??0),0)+(Number(k==null?void 0:k[W.id])||0))/R*100,X=W.special_result,Q=X&&/^[0-9]+(?:\.5)?$/.test(String(X))?Number(X):ut(J),et=String(Q);et in O&&O[et]++,V&&(Q>0?G++:T++)}}const K=[[4,"80 - 100","จำนวนนักเรียนเข้าเรียน",n.length],["3.5","75 - 79","จำนวนนักเรียนเข้าสอบ",L],[3,"70 - 74","จำนวนนักเรียนไม่มีสิทธิ์สอบ (ข.ร.)",N["ข.ร."]],["2.5","65 - 69","จำนวนนักเรียนขาดสอบ (ข.ส.)",N["ข.ส."]],[2,"60 - 64","จำนวนนักเรียนไม่สมบูรณ์ (ม.ส.)",N["ม.ส."]],["1.5","55 - 59","จำนวนนักเรียนขาดการปฏิบัติงาน (ข.ป.)",N["ข.ป."]],[1,"50 - 54","จำนวนนักเรียนผ่าน (ผ)",G],[0,"0 - 49","จำนวนนักเรียนไม่ผ่าน (ม.ผ.)",T]].map(([W,F,M,V])=>`
    <tr>
      <td>${W}</td><td>${F}</td><td>${O[String(W)]||"-"}</td>
      <td class="voc-remark">${M}</td><td>${V||"-"}</td>
    </tr>`).join("");return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p1">
      ${g?`<div class="voc-logo-frame"><img class="voc-logo" src="${a(g)}" alt="ตราสถานศึกษา" /></div>`:""}
      <div class="voc-title1">${f}</div>
      <div class="voc-title2">แบบบันทึกเวลาเรียนและประเมินผลการเรียน</div>
      <div class="voc-title3">หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.)</div>

      <div class="voc-info">
        <div class="voc-info-row">
          <span class="voc-item">ชั้น <span class="voc-line-fill voc-short">${a(tt(l.class_name))}</span></span>
          <span class="voc-item">ภาคเรียนที่ <span class="voc-line-fill voc-short">${z}</span></span>
          <span class="voc-item">ปีการศึกษา <span class="voc-line-fill voc-short">${S}</span></span>
          <span class="voc-item" style="margin-left:auto">แผนกวิชา <span class="voc-line-fill voc-medium">${a(b)}</span></span>
        </div>
        <div class="voc-info-row">
          <span class="voc-item" style="flex:1">รายวิชา <span class="voc-line-fill voc-long" style="flex:1">${a(s.subject_name??"")}</span></span>
          <span class="voc-item">รหัสวิชา <span class="voc-line-fill voc-medium">${a(s.subject_code??"")}</span></span>
        </div>
        <div class="voc-info-row voc-center" style="justify-content:center; gap:10mm">
          <span class="voc-item"><span class="voc-line-fill voc-short">${i}</span> หน่วยกิต</span>
          <span class="voc-item">เวลาเรียน <span class="voc-line-fill voc-short">${w}</span> ชั่วโมง/สัปดาห์</span>
          <span class="voc-item">รวมเวลาเรียน <span class="voc-line-fill voc-short">${A}</span> ชั่วโมง/ภาค</span>
        </div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูผู้สอน <span class="voc-line-fill voc-xlong" style="flex:1">${a((p==null?void 0:p.full_name)??"")}</span></span></div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูที่ปรึกษาสามัญ <span class="voc-line-fill voc-xlong" style="flex:1">${a(((Y=x==null?void 0:x.teachers)==null?void 0:Y.full_name)??"")}</span></span></div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูที่ปรึกษาศาสนา <span class="voc-line-fill voc-xlong" style="flex:1">${a(((B=$==null?void 0:$.teachers)==null?void 0:B.full_name)??"")}</span></span></div>
      </div>

      <table class="voc-grade-table">
        <colgroup>
          <col style="width:17%"><col style="width:12%"><col style="width:15%"><col style="width:36%"><col style="width:20%">
        </colgroup>
        <thead>
          <tr>
            <th>ระดับผลการเรียน</th><th>ช่วงคะแนน</th><th></th><th>หมายเหตุ</th><th>จำนวนนักเรียน<br>(คน)</th>
          </tr>
        </thead>
        <tbody>${K}</tbody>
      </table>

      <div class="voc-consider">พิจารณาผลการให้ระดับคะแนนเห็นว่าเหมาะสมและถูกต้องแล้ว</div>

      <div class="voc-sign-grid">
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${a((p==null?void 0:p.full_name)??"")} )</div>
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนกวิชา<br><br>( ${u} )</div>
        <div class="voc-sign-block voc-sign-wide">ลงชื่อ <span class="voc-sig-line"></span> ${h}<br><br>( ${m} )</div>
      </div>

      <div class="voc-approve">อนุมัติผลการเรียน <span class="voc-check-box"></span>อนุมัติ <span class="voc-check-box"></span>ไม่อนุมัติ</div>
      <div class="voc-director">ลงชื่อ <span class="voc-sig-line"></span><br><br>( ${r} )<br>${c}${f}</div>
    </div>
  </section>`}const rt=2;function $e(t,l){const s=Math.ceil(((t==null?void 0:t.length)||0)/rt),i=Array.from({length:rt},(e,n)=>Array.from({length:s},(H,v)=>{const p=t[n*s+v];return p?{sess:p,week:Math.ceil(p.n/l)}:null})),o=i.map(e=>e.map((n,H)=>{var p,b;if(!n)return null;if(H>0&&((p=e[H-1])==null?void 0:p.week)===n.week)return 0;let v=1;for(let y=H+1;y<s&&((b=e[y])==null?void 0:b.week)===n.week;y++)v++;return v}));return{N:s,colData:i,colRS:o}}const Ft=233;function _e(t){const l=Math.max(6,...(t??[]).map(s=>(s.full_name??"").length));return Math.min(50,Math.max(30,l*2.3))}function ke(t,l,s){const o=Math.max(l.length+3,15),e=Math.max(3,Math.min(7,Ft/o)),n=e<3.6?7.5:e<4.4?8.5:e<5.4?9.5:e<6.2?10.5:11.5,H=Array.from({length:o},(p,b)=>{const y=l[b];if(!y)return`<tr>
        <td class="voc-student-no"></td><td class="voc-student-id"></td><td class="voc-student-name"></td>
        ${Array.from({length:20},()=>"<td></td>").join("")}
        <td class="voc-score"></td>
      </tr>`;const x=t.attMap[y.id]??{},$=[];for(const[z,j]of Object.entries(x))j!=="present"&&$.push({n:parseInt(z),status:j});$.sort((z,j)=>z.n-j.n);const S=Array.from({length:20},(z,j)=>{const k=$[j];return k?`<td style="color:${k.status==="absent"?"#d00":k.status==="leave"?"#005bbb":"#e67e00"};font-weight:700;">${k.n}</td>`:"<td></td>"});return`<tr>
      <td class="voc-student-no voc-center">${b+1}</td>
      <td class="voc-student-id voc-center">${a(y.student_code??"")}</td>
      <td class="voc-student-name">${a(y.full_name??"")}</td>
      ${S.join("")}
      <td class="voc-score voc-center">-</td>
    </tr>`}),v=Array.from({length:20},(p,b)=>`<th class="voc-att">${b+1}</th>`).join("");return`
  <table class="voc-attendance voc-student-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${n}px">
    <colgroup>
      <col style="width:4.3mm"><col style="width:19mm"><col style="width:${s}mm">
      ${Array.from({length:20},()=>'<col style="width:2.7mm">').join("")}
      <col style="width:10mm">
    </colgroup>
    <thead>
      <tr class="voc-h-main">
        <th rowspan="3" class="voc-student-no"><div class="voc-vtext">เลขที่</div></th>
        <th rowspan="3" class="voc-student-id">เลข<br>ประจำตัว</th>
        <th rowspan="3" class="voc-student-name">ชื่อ - สกุล</th>
        <th colspan="20" class="voc-instruction">
          บันทึกคาบที่สอนนักเรียนที่ไม่มาเรียนในช่องครั้งที่ไม่มาเรียน<br>
          ตั้งแต่ครั้งที่ 1 และต่อไปตามลำดับ เช่น นักเรียนที่ขาดเช็คด้วยสี<span class="voc-red">แดง</span>
          นักเรียนที่ลากิจใช้ตัวเลข<span class="voc-blue">สีน้ำเงิน</span> และนักเรียนที่ป่วยใช้ตัวเลข<span class="voc-orange">สีส้ม</span>
        </th>
        <th rowspan="2" class="voc-score">สรุปคะแนน<br>มาเรียน</th>
      </tr>
      <tr class="voc-h-sub">
        <th colspan="20">บันทึกการไม่มาเรียน</th>
      </tr>
      <tr class="voc-h-num">
        ${v}
        <th class="voc-score">10</th>
      </tr>
    </thead>
    <tbody>${H.join("")}</tbody>
  </table>`}function Se(t,l){const{N:s,colData:i,colRS:o}=t,e=Math.max(1.6,Math.min(4.55,Ft/Math.max(1,s))),n=e<2.4?6:e<3.2?7:e<4?8:9.5,H=Array.from({length:s},(v,p)=>`<tr>${Array.from({length:rt},(y,x)=>{const $=i[x][p],S=o[x][p];if(!$)return'<td class="voc-sched-week"></td><td class="voc-sched-period"></td><td class="voc-sched-date"></td>';const z=S===0?"":`<td class="voc-sched-week voc-center" rowspan="${S}">${$.week}</td>`,j=l==null?void 0:l.has($.sess.ds);return`${z}<td class="voc-sched-period voc-center">${$.sess.n}</td><td class="voc-sched-date voc-center" style="${j?"color:#c00;font-weight:700;":""}">${Ot($.sess.ds)}</td>`}).join("")}</tr>`);return`
  <table class="voc-attendance voc-schedule-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${n}px">
    <colgroup>
      ${Array.from({length:rt},()=>'<col style="width:6mm"><col style="width:6.5mm"><col style="width:15mm">').join("")}
    </colgroup>
    <thead>
      <tr class="voc-h-main">
        <th colspan="${rt*3}">สัปดาห์ที่/คาบ/วันที่สอน</th>
      </tr>
      <tr class="voc-h-sub">
        ${Array.from({length:rt},()=>'<th colspan="3"></th>').join("")}
      </tr>
      <tr class="voc-h-num">
        ${Array.from({length:rt},()=>`
          <th class="voc-sched-week"><div class="voc-vtext">สัปดาห์ที่</div></th>
          <th class="voc-sched-period"><div class="voc-vtext">คาบ</div></th>
          <th class="voc-sched-date"><div class="voc-vtext">ว/ด/ป</div></th>`).join("")}
      </tr>
    </thead>
    <tbody>${H.join("")}</tbody>
  </table>`}function je(t){const{students:l,sessions:s}=t,i=s!=null&&s.length?Math.round(s.length/20):1,o=$e(s,i),e=_e(l);return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p2">
      <div class="voc-p2-title">แบบบันทึกการไม่มาเรียน</div>
      <div class="voc-att-flex">
        ${ke(t,l,e)}
        ${Se(o,t.holidaySet)}
      </div>
    </div>
  </section>`}const _t=31;function Ce(t,l=8){const s=a(t??"");if(s.length<=l)return s;const i=Math.ceil(s.length/2);let o=s.lastIndexOf(" ",i);return o<=0&&(o=s.indexOf(" ",i)),o<=0?s:`${s.slice(0,o)}<br>${s.slice(o+1)}`}function Ae(t,l,s){const{cls:i,teacher:o,deptHeadName:e,scoreColumns:n,scoreMap:H,moralScores:v,moralMax:p,moralColName:b,roundSettings:y}=t,x=(y==null?void 0:y.forcedGradeColor)==="black"?"black":"red",$=c=>c.assignment_type==="คะแนนพิเศษ",S=n.filter(c=>!$(c));n.filter(c=>$(c));const z=S.reduce((c,m)=>c+(m.max_score??0),0),j=z+(p||0),k=!!window._pp5HideScores,C=l.map((c,m)=>{if(k)return`<tr>
        <td class="voc-center">${s+m}</td><td class="voc-c-id"></td><td class="voc-c-name"></td>
        ${Array(S.length).fill("<td></td>").join("")}<td></td>
        <td></td><td></td><td></td><td></td>
      </tr>`;const h=H[c.id]??{},u=S.map(T=>lt(t.roundSettings,$t(T),h[T.id],T.column_type==="derived"?2:1)),w=S.reduce((T,L)=>T+(h[L.id]??0),0),A=(v==null?void 0:v[c.id])??"",_=w+(Number(A)||0),R=Ut(c.special_result),O=!!(R&&Vt.includes(R)),N=kt(t.roundSettings,_),G=O?R:ut(j?N/j*100:0);return`<tr>
      <td class="voc-center">${s+m}</td>
      <td class="voc-c-id voc-center">${a(c.student_code??"")}</td>
      <td class="voc-c-name">${a(c.full_name??"")}</td>
      ${u.map(T=>`<td class="voc-center">${T}</td>`).join("")}
      <td class="voc-center voc-bold">${lt(t.roundSettings,"mid_subtotal",w)}</td>
      <td class="voc-center">${A}</td>
      <td class="voc-center voc-bold">${lt(t.roundSettings,"total",_)}</td>
      <td class="voc-center voc-bold" style="${O?`color:${x==="red"?"#c00":"#000"};`:""}">${G}</td>
      <td></td>
    </tr>`}),f=S.length+1+4,g=`<tr><td class="voc-center"></td><td></td><td></td>${Array(f).fill("<td></td>").join("")}</tr>`,r=C.concat(Array(Math.max(0,_t-C.length)).fill(g));return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p3">
      <div class="voc-p3-title">แบบประเมินผลการเรียน</div>
      <table class="voc-eval">
        <colgroup>
          <col style="width:5mm"><col style="width:19.5mm"><col style="width:43.5mm">
          ${S.map(()=>'<col style="width:7mm">').join("")}
          <col style="width:9.5mm"><col style="width:9.5mm"><col style="width:9.5mm">
          <col style="width:12.5mm"><col style="width:12.5mm">
        </colgroup>
        <thead>
          <tr class="voc-h-top">
            <th rowspan="3" class="voc-c-no"><div class="voc-vtext">เลขที่</div></th>
            <th rowspan="3" class="voc-c-id">เลข<br>ประจำตัว</th>
            <th rowspan="3" class="voc-c-name">ชื่อ - สกุล</th>
            <th colspan="${S.length+1}">คะแนนเก็บ (เต็ม ${z})</th>
            <th rowspan="2" class="voc-c-moral"><div class="voc-vtext">คะแนนคุณธรรม${b?`<br>(${a(b)})`:""}</div></th>
            <th rowspan="2" class="voc-c-total"><div class="voc-vtext">รวม</div></th>
            <th rowspan="3" class="voc-c-grade"><div class="voc-vtext">ระดับผล<br>การเรียน</div></th>
            <th rowspan="3" class="voc-c-note"><div class="voc-vtext">หมายเหตุ/<br>การสอบแก้ตัว</div></th>
          </tr>
          <tr class="voc-h-vertical">
            ${S.map(c=>`<th class="voc-c-obj"><div class="voc-vtext">${Ce(c.assignment_name??"")}</div></th>`).join("")}
            <th class="voc-c-sum80"><div class="voc-vtext">รวม<br>คะแนนเก็บ</div></th>
          </tr>
          <tr class="voc-h-score">
            ${S.map(c=>`<th>${c.max_score??""}</th>`).join("")}<th>${z||""}</th>
            <th>${p||""}</th><th>${j||""}</th>
          </tr>
        </thead>
        <tbody>${r.join("")}</tbody>
      </table>
      <div class="voc-footer-sigs">
        <div>ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${a((o==null?void 0:o.full_name)??"")} )</div>
        <div>ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนก<br><br>( ${a(e)} )</div>
      </div>
    </div>
  </section>`}function Me(t){const{students:l}=t,s=[];for(let i=0;i<l.length;i+=_t)s.push(Ae(t,l.slice(i,i+_t),i+1));return s.join("")}const He=46,ze=5.3,Re=5.45;function De(t){const l=Math.max(1,Math.ceil((t.content??"").length/He));return Math.max(Re,l*ze)}function Oe(t){const{ms:l,teacher:s,courseDoc:i}=t,o=Array.isArray(i==null?void 0:i.voc_objectives)?i.voc_objectives:[],e=Array.isArray(i==null?void 0:i.voc_schedule)?i.voc_schedule:[],n=o.concat(Array.from({length:Math.max(0,10-o.length)},()=>({objective:"",competency:""}))),H=e.concat(Array.from({length:Math.max(0,20-e.length)},()=>({week:"",content:"",note:""}))),v=297,p=30,b=10,y=9.5,x=10,$=8,S=7,z=7,j=$+n.length*S,k=v-p-b-y-x-j-z,C=v-p-y-z,f=[];let g=[],r=0,c=k;for(const w of H){const A=De(w);g.length&&r+A>c&&(f.push(g),g=[],r=0,c=C),g.push(w),r+=A}f.push(g);const m=`
      <div class="voc-course-title">จุดประสงค์การเรียนรู้และสมรรถนะรายวิชา ${a(l.subject_name??"")}</div>
      <div class="voc-course-code">รหัสวิชา ${a(l.subject_code??"")}</div>
      <table class="voc-objective-table">
        <thead><tr><th>จุดประสงค์การเรียนรู้</th><th>สมรรถนะรายวิชา</th></tr></thead>
        <tbody>${n.map(w=>`<tr><td>${a(w.objective)||"&nbsp;"}</td><td>${a(w.competency)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,h=(w,A)=>`
      <div class="voc-schedule-title">กำหนดการสอน${A?"":" (ต่อ)"}</div>
      <table class="voc-schedule-table">
        <colgroup><col style="width:13%"><col style="width:69%"><col style="width:18%"></colgroup>
        <thead><tr><th>สัปดาห์ที่</th><th>เนื้อหาที่สอน</th><th>หมายเหตุ</th></tr></thead>
        <tbody>${w.map(_=>`<tr><td>${a(_.week)||"&nbsp;"}</td><td>${a(_.content)||"&nbsp;"}</td><td>${a(_.note)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,u=`<div class="voc-sign-bottom">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอนประจำวิชา<br><br>( ${a((s==null?void 0:s.full_name)??"")} )</div>`;return f.map((w,A)=>`
  <section class="voc-page">
    <div class="voc-page-inner voc-p4">
      ${A===0?m:""}
      ${h(w,A===0)}
      ${A===f.length-1?u:""}
    </div>
  </section>`).join("")}function xt(t,l,s=null){const i=s??[Et(t),Pt(t),Wt(t),Gt(t),Bt(t)];return`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8"/>
  <title>${a(l)}</title>
  <style>${Nt()}</style>
</head>
<body>
  ${i.join(`
`)}
</body>
</html>`}function Le(t){return`<!DOCTYPE html>
<html lang="th"><head>
<meta charset="UTF-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>${Nt()}
body{background:#fff;margin:0;}
@media print{@page{size:A4 portrait;margin:0;}.no-print{display:none!important;}}
</style></head>
<body>${t}</body></html>`}function Te(t){var C,f,g;(C=document.getElementById("pp5-viewer"))==null||C.remove();const l=((f=t.ms)==null?void 0:f.subject_group)==="ACDMVOC",s=l?[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>xe(t)},{label:"ไม่มาเรียน/วันที่สอน",fn:()=>je(t)},{label:"คะแนน",fn:()=>Me(t)},{label:"จุดประสงค์/กำหนดการสอน",fn:()=>Oe(t)}]:[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>Et(t)},{label:"มาตรฐาน/ตัวชี้วัด",fn:()=>Pt(t)},{label:"บันทึกการไม่มาเรียน",fn:()=>Wt(t)},{label:"คะแนน",fn:()=>Gt(t)},{label:"วันที่สอน",fn:()=>Bt(t)}],i=s.slice(1).map((r,c)=>c+1),o=!!((g=t.cfg)!=null&&g.pp5PreviewEditEnabled),e={},n=document.createElement("div");n.id="pp5-viewer",n.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;background:#374151;";const H=r=>"border:none;border-radius:6px;padding:6px 14px;cursor:pointer;font-family:Sarabun,sans-serif;font-size:13px;font-weight:600;white-space:nowrap;"+(r?"background:#2563eb;color:#fff;":"background:#4b5563;color:#d1d5db;");n.innerHTML=`
    <div style="background:#111827;padding:8px 12px;display:flex;align-items:center;gap:6px;flex-shrink:0;overflow-x:auto;">
      <button id="pp5-v-close" style="${H(!1)}background:#dc2626;color:#fff;">✕ ปิด</button>
      <button id="pp5-v-print" style="${H(!1)}background:#059669;color:#fff;">🖨️ พิมพ์หน้านี้</button>
      <button id="pp5-v-printall" style="${H(!1)}background:#7c3aed;color:#fff;">🖨️ พิมพ์ทั้งหมด</button>
      ${o?`<button id="pp5-v-edit" style="${H(!1)}background:#f59e0b;color:#fff;">✏️ แก้ไขข้อความ</button>`:""}
      <div style="width:1px;height:24px;background:#374151;flex-shrink:0;margin:0 2px;"></div>
      ${s.map((r,c)=>`
        <button class="pp5-vtab" data-i="${c}" style="${H(c===0)}">${r.label}</button>
      `).join("")}
      ${o?'<span id="pp5-v-edit-hint" style="display:none;color:#fbbf24;font-size:12px;margin-left:8px;white-space:nowrap;">กำลังแก้ไข — คลิกข้อความในหน้าเพื่อพิมพ์ทับได้เลย (ไม่กระทบข้อมูลจริงในระบบ)</span>':""}
    </div>
    <div style="flex:1;overflow:auto;display:flex;justify-content:center;align-items:flex-start;padding:20px;">
      <iframe id="pp5-iframe" style="border:none;box-shadow:0 4px 32px rgba(0,0,0,.5);background:#fff;width:210mm;height:297mm;" scrolling="no"></iframe>
    </div>`,document.body.appendChild(n);const v=n.querySelector("#pp5-iframe"),p=[...n.querySelectorAll(".pp5-vtab")],b=n.querySelector("#pp5-v-edit"),y=n.querySelector("#pp5-v-edit-hint");let x=null,$=!1;function S(r){return e[r]??s[r].fn()}function z(){var r;if(!(x==null||s[x].all))try{const c=(r=v.contentDocument)==null?void 0:r.body;c&&(e[x]=c.innerHTML)}catch{}}function j(r){var c;if($=r&&o&&x!=null&&!s[x].all,b){const m=x!=null&&s[x].all;b.style.background=$?"#16a34a":"#f59e0b",b.textContent=$?"✅ เสร็จแล้ว":"✏️ แก้ไขข้อความ",b.title=m?'กดเพื่อไปหน้าปกแล้วเริ่มแก้ไข (แท็บ "ดูทั้งหมด" แก้ไขตรงๆ ไม่ได้)':"",b.style.opacity=m?"0.7":"1"}y&&(y.style.display=$?"inline":"none");try{const m=(c=v.contentDocument)==null?void 0:c.body;m&&(m.contentEditable=$?"true":"false",m.style.outline=$?"2px dashed #f59e0b":"none",m.style.outlineOffset=$?"-2px":"0")}catch{}}function k(r){z(),x=r,p.forEach((w,A)=>{A===r?(w.style.background="#2563eb",w.style.color="#fff"):(w.style.background="#4b5563",w.style.color="#d1d5db")});const c=s[r];let m,h;c.all?(m=xt(t,"",i.map(S)),h="3000mm"):(m=Le(S(r)),h=(l?[2,3]:[3,4]).includes(r)?"900mm":"297mm"),v.style.height=h;const u=v.contentDocument;u.open(),u.write(m),u.close(),j(!1)}k(0),p.forEach((r,c)=>r.addEventListener("click",()=>k(c))),n.querySelector("#pp5-v-close").addEventListener("click",()=>n.remove()),b==null||b.addEventListener("click",()=>{var r;if((r=s[x])!=null&&r.all){k(1),j(!0);return}j(!$)}),n.querySelector("#pp5-v-print").addEventListener("click",()=>{if(z(),s[x].all){const r=`ปพ5_${t.ms.subject_code??""}_${tt(t.cls.class_name)}`;Ht(xt(t,r,i.map(S)),{autoprint:!0});return}v.contentWindow.focus(),v.contentWindow.print()}),n.querySelector("#pp5-v-printall").addEventListener("click",()=>{z();const r=`ปพ5_${t.ms.subject_code??""}_${tt(t.cls.class_name)}`,c=xt(t,r,i.map(S));Ht(c,{autoprint:!0})})}async function Ne(t){vt("กำลังโหลดข้อมูลเอกสาร...","info");try{const l=await be(t);Te(l);for(const s of l.docWarnings??[])vt(s,"warning")}catch(l){console.error("[pp5-doc]",l),vt("โหลดเอกสารไม่สำเร็จ: "+de(l),"error")}}function Fe(t){var s;(s=document.getElementById("pp5-course-modal"))==null||s.remove();const l=document.createElement("div");l.id="pp5-course-modal",l.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",l.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-1 text-base">📄 เปิด ปพ.5</h3>
      <p class="text-xs text-gray-400 mb-4">เลือกห้องที่ต้องการดู</p>
      <div class="space-y-2 mb-5">
        ${t.map(i=>`
        <label class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input type="radio" name="pp5-cls" class="w-4 h-4 accent-indigo-600" value="${i.id}" />
          <span class="text-sm text-gray-700">${a(tt(i.class_name))}</span>
        </label>`).join("")}
      </div>
      <div class="flex gap-2">
        <button id="pp5-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="pp5-open-btn" class="flex-1 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700">เปิด</button>
      </div>
    </div>`,document.body.appendChild(l),l.querySelector("#pp5-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#pp5-open-btn").addEventListener("click",async()=>{const i=l.querySelector('input[name="pp5-cls"]:checked');if(!i){vt("กรุณาเลือกห้อง","warning");return}l.remove(),await Ne(parseInt(i.value))}),l.addEventListener("click",i=>{i.target===l&&l.remove()})}export{Ne as a,Fe as o};
