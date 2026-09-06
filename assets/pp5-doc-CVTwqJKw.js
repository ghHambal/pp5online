import{getSystemConfig as Rt,getClassSessionDOWs as ut,getClassStudents as Ot,getClassAttendanceAll as Lt,getScoreColumns as Tt,getStudentScores as Et,getDepartments as Nt,getHomeroomTeachers as Pt,getTeacherById as Wt,getCourseDocPage2 as Bt,getCourseDocLangSettings as Ut,getSchoolHolidays as Vt,getLifeSkillColumns as Gt,getLifeSkillScores as It,getReadingScoreColumns as Ft,getReadingScores as qt}from"./api-1xsyVspL.js";import{a as dt}from"./ui-Dh03k4iX.js";import{s as gt}from"./supabase-BV-W2lsh.js";import{o as bt}from"./storage-D6nkcVz6.js";import{applyReadingGradesFromConfig as Yt,_readingGrade as Kt}from"./teacher-views-utils-B2Iz3UWp.js";function n(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function wt(t){if(!t)return null;const[i,s,c]=String(t).split("-").map(Number);return!i||!s||!c?null:new Date(i,s-1,c)}function st(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function $t(t){if(!t)return"";const[i,s,c]=String(t).split("-").map(Number);if(!i)return t;const o=(i+543)%100;return`${String(c).padStart(2,"0")}/${String(s).padStart(2,"0")}/${String(o).padStart(2,"0")}`}function Jt(t,i,s=null,c=!1){const o=c&&s&&s.length?s.length:Math.max(1,Math.round((i??1)*2)),e=o*20;let l=s&&s.length?[...s]:null,M=!1;if(l&&l.length<o){M=!0;const f={};for(const p of l)f[p]=(f[p]||0)+1;const m=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(p=>t[p]).filter(Boolean).map(p=>wt(p)).filter(Boolean).sort((p,r)=>p-r),a={};m.forEach(p=>{const r=p.getDay();a[r]=(a[r]||0)+1});const g=Object.entries(a).sort(([,p],[,r])=>r-p||Number(p)-Number(r));for(const[p]of g){if(l.length>=o)break;const r=Number(p);for(;(f[r]||0)<Math.min(a[r],2)&&l.length<o;)l.push(r),f[r]=(f[r]||0)+1}for(let p=1;p<=5&&l.length<o;p++)(f[p]||0)<2&&(l.push(p),f[p]=(f[p]||0)+1);l.sort((p,r)=>p-r)}else l&&l.length>o&&(l=l.slice(0,o));const v=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(f=>t[f]).filter(Boolean).map(f=>wt(f)).filter(Boolean).sort((f,m)=>f-m);if(!v.length)return[];if(M&&l){const m=[];let a=0,g=0;for(;a<v.length&&m.length<e;){const p=new Date(v[a]);p.setDate(p.getDate()-p.getDay()),p.setHours(0,0,0,0);const r=p.getTime();g=r;const $=[];for(;a<v.length&&v[a].getTime()>=r&&v[a].getTime()<r+6048e5;)$.push(v[a++]);const w={};for(const A of $){const S=A.getDay();w[S]=(w[S]||0)+1}for(const A of $){if(m.length>=e)break;m.push({n:m.length+1,date:new Date(A),ds:st(A)})}const j=o-$.length;if(j>0){const A={};l.forEach(R=>{A[R]=(A[R]||0)+1});const S=[];for(const[R,T]of Object.entries(A).sort()){const B=Number(R),P=w[B]||0;for(let O=0;O<T-P&&S.length<j;O++)S.push(B)}for(const R of S){if(m.length>=e)break;const T=new Date(p);T.setDate(T.getDate()+R),m.push({n:m.length+1,date:T,ds:st(T)})}}}if(m.length<e){const p=new Date(g);let r=1;for(;m.length<e;){for(const $ of l){if(m.length>=e)break;const w=new Date(p);w.setDate(w.getDate()+r*7+$),m.push({n:m.length+1,date:w,ds:st(w)})}r++}}return m}if(!l||!l.length){const m={},a=v.filter(A=>{const S=new Date(A);S.setDate(S.getDate()-S.getDay()),S.setHours(0,0,0,0);const R=S.getTime();return m[R]=(m[R]||0)+1,m[R]<=o}),g=[];for(const A of a){if(g.length>=e)break;g.push({n:g.length+1,date:new Date(A),ds:st(A)})}if(g.length>=e)return g;const p=a[a.length-1],r=new Date(p);r.setDate(r.getDate()-r.getDay()),r.setHours(0,0,0,0);const $=r.getTime(),w=a.filter(A=>A.getTime()>=$&&A.getTime()<$+6048e5);let j=1;for(;g.length<e;){for(const A of w){if(g.length>=e)break;const S=new Date(A);S.setDate(S.getDate()+j*7),g.push({n:g.length+1,date:S,ds:st(S)})}j++}return g}const d={},b=[];for(const f of v){if(b.length>=e)break;const m=new Date(f);m.setDate(m.getDate()-m.getDay()),m.setHours(0,0,0,0);const a=m.getTime();d[a]=(d[a]||0)+1,d[a]<=o&&b.push({n:b.length+1,date:new Date(f),ds:st(f)})}if(b.length>=e)return b;const y=v[v.length-1],u=new Date(y);u.setDate(u.getDate()-u.getDay()),u.setHours(0,0,0,0);const x=u.getTime(),z=7*24*60*60*1e3,C={};for(const f of v)if(f.getTime()>=x&&f.getTime()<x+z){const m=f.getDay();C[m]=(C[m]||0)+1}const H={};for(const f of l)H[f]=(H[f]||0)+1;const _=[];for(const[f,m]of Object.entries(H)){const a=m-(C[Number(f)]||0);for(let g=0;g<a;g++)_.push(Number(f))}_.sort((f,m)=>f-m);for(const f of _){if(b.length>=e)break;const m=new Date(u);m.setDate(m.getDate()+f),b.push({n:b.length+1,date:m,ds:st(m)})}let D=1;for(;b.length<e;){for(const f of l){if(b.length>=e)break;const m=new Date(u);m.setDate(m.getDate()+D*7+f),b.push({n:b.length+1,date:m,ds:st(m)})}D++}return b}function Xt(t){return t==="ACDMVOC"?"porwor":"samai"}function Z(t){return String(t??"").split(" ")[0]}function _t(t,i){const s={};for(const e of t){const l=e[i];l&&(s[l]=(s[l]??0)+1)}let c=null,o=0;for(const[e,l]of Object.entries(s))l>o&&(o=l,c=e);return c}function Qt(t){return _t(t,"religion_room")}function Zt(t){return _t(t,"main_room")}function mt(t){return t>=80?4:t>=75?3.5:t>=70?3:t>=65?2.5:t>=60?2:t>=55?1.5:t>=50?1:0}function kt(t){return t>=3.5?"ดีเยี่ยม":t>=2.5?"ดี":t>=1?"ผ่าน":"ไม่ผ่าน"}async function te(t){var W,Q;const i=await Rt();Yt(i);const s=parseInt(i.academicYear??i.academic_year??2568),c=parseInt(i.semester??1),{data:o,error:e}=await gt.from("classes").select(`
      id, course_id, class_name, skill_group, google_sheet_id,
      head_student_id, source_class_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( id, subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id, learning_area ),
      students:students!fk_head_student ( full_name, student_code )
    `).eq("id",t).single();if(e||!o)throw new Error("โหลดข้อมูลห้องเรียนไม่สำเร็จ");const l=o.master_subjects??{},M=l.credit??1,v=Xt(l.subject_group);let d=o.source_class_id??null,b=M;if(!d){const{data:h}=await gt.from("classes").select("source_class_id").eq("id",t).single();d=(h==null?void 0:h.source_class_id)??null}let y=[];if(d){const{data:h}=await gt.from("classes").select("id, master_subjects(credit)").eq("id",d).single();(W=h==null?void 0:h.master_subjects)!=null&&W.credit&&(b=h.master_subjects.credit),y=await ut(d).catch(()=>[])}const u=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),[x,z,C,H,_,D]=await Promise.all([Ot(t),Lt(d??t),Tt(d??t),Et(d??t),Nt(),Pt(s,c).catch(()=>[])]),f=l.teacher_id?await Wt(l.teacher_id).catch(()=>null):null,m=["AGM","AGMVOC"].includes(l.subject_group)?"ศาสนา":["ACDMVOC"].includes(l.subject_group)?"สามัญปวช":"สามัญ",a=_.find(h=>h.dept_code===l.dept&&h.category===m)??_.find(h=>h.dept_code===l.dept)??_.find(h=>h.dept_name===l.dept)??null,[g,p,r,$]=await Promise.all([l.id?Bt(l.id).catch(()=>null):Promise.resolve(null),Ut().catch(()=>[]),ut(o.id).catch(()=>[]),Vt(s,c).catch(()=>[])]),w=new Set($),j=((Q=p.find(h=>h.lang_key==="th"))==null?void 0:Q.settings)??{},A=Array.isArray(j.colsBasic)&&j.colsBasic.length?j.colsBasic:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],S=Array.isArray(j.colsExtra)&&j.colsExtra.length?j.colsExtra:["ผลการเรียนรู้"],R=j.rowHeader||"ข้อ",T=l.subject_group==="ACDMVOC",B=Jt(o,M,r.length?r:null,T),P={};if(d){const h=T&&r.length?r.length:Math.max(1,Math.round(M*2)),q=T&&y.length?y.length:Math.max(1,Math.round(b*2)),Y=B.length;for(let L=1;L<=Y;L++){const U=Math.floor((L-1)/h),lt=(L-1)%h,ct=U*q+lt+1;for(const tt of z)tt.session_number===ct&&(P[tt.student_id]||(P[tt.student_id]={}),P[tt.student_id][L]=tt.status)}}else for(const h of z)P[h.student_id]||(P[h.student_id]={}),P[h.student_id][h.session_number]=h.status;const O=(d?C.filter(h=>!u.has(h.assignment_name)):C).filter(h=>h.column_type!=="override"),G={};for(const h of H)G[h.student_id]||(G[h.student_id]={}),G[h.student_id][h.score_column_id]=h.score;const F=["AGM","AGMVOC"].includes(l.subject_group),I=Z(o.class_name),N=Zt(x),k=Qt(x);let E,V;F?(V=D.find(h=>h.category==="ศาสนา"&&h.main_room===o.class_name)??(k?D.find(h=>h.category==="ศาสนา"&&h.main_room===k):null)??null,E=N?D.find(h=>h.category!=="ศาสนา"&&h.main_room===N)??null:null):(E=D.find(h=>h.category!=="ศาสนา"&&h.main_room===I)??(N?D.find(h=>h.category!=="ศาสนา"&&h.main_room===N):null)??null,V=k?D.find(h=>h.category==="ศาสนา"&&h.main_room===k)??null:null);const at=(a==null?void 0:a.dept_name)??l.dept??"",et=l.learning_area&&l.learning_area.trim()||(a==null?void 0:a.head_name)||"";let K={},J=0,X="";if(l.subject_group==="ACDMVOC")try{const q=(await Gt(s,c,"สามัญ")).find(Y=>(Y.name??"").includes("ความสะอาด"));if(q){J=q.max_score??0,X=q.name;const Y=await It([q.id]);K=Object.fromEntries(Y.map(L=>[L.student_id,L.score]))}}catch{}let nt={};const ot=[];try{const h=await Ft(s,c);if(h.length){const q=await qt(h.map(U=>U.id),x.map(U=>U.id)),Y=h.reduce((U,lt)=>U+(lt.max_score??0),0),L={};for(const U of q)U.score!=null&&(L[U.student_id]=(L[U.student_id]??0)+(parseFloat(U.score)||0));if(Y>0)for(const[U,lt]of Object.entries(L))nt[U]=Kt(lt/Y*100).label;q.length||ot.push(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนในห้องนี้ (ภาค ${c}/${s})`)}else ot.push(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ (ภาค ${c}/${s})`)}catch(h){throw console.error("[pp5-doc] load reading evaluation failed",h),new Error(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${(h==null?void 0:h.message)??"ไม่ทราบสาเหตุ"}`)}return{cls:o,ms:l,credit:M,prefix:v,cfg:i,students:x,attMap:P,scoreColumns:O,scoreMap:G,teacher:f,dept:a,deptNameTH:at,deptHeadName:et,courseDoc:g,thColHeaders:A,thColsExtra:S,thRowHeader:R,sessions:B,hrSamai:E,hrReligion:V,academicYear:s,semester:c,holidaySet:w,moralScores:K,moralMax:J,moralColName:X,readingEvalMap:nt,docWarnings:ot}}function jt(){return`
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
  `}function St(t){var q,Y;const{cls:i,ms:s,credit:c,prefix:o,cfg:e,students:l,scoreColumns:M,scoreMap:v,teacher:d,dept:b,deptNameTH:y,deptHeadName:u,hrSamai:x,hrReligion:z,academicYear:C,semester:H,sessions:_,readingEvalMap:D}=t,f=n(e[`${o}SchoolName`]??e.samaiSchoolName??""),m=n(e[`${o}SchoolAddress`]??e.samaiSchoolAddress??""),a=e[`${o}LogoBwUrl`]||e[`${o}LogoUrl`]||e.samaiLogoBwUrl||e.samaiLogoUrl||"",g=n(e[`${o}DirectorName`]??"");e[`${o}DirectorSignUrl`];const p=n(e[`${o}DirectorTitle`]||"ผู้อำนวยการ"),r=["AGM","AGMVOC"].includes(s.subject_group),$=n(r?e.agmAcademicHeadName??e[`${o}AcademicHeadName`]??"":e[`${o}AcademicHeadName`]??"");r?e.agmAcademicHeadSignUrl??e[`${o}AcademicHeadSignUrl`]:e[`${o}AcademicHeadSignUrl`];const w=n((r?e.agmAcademicHeadTitle:e[`${o}AcademicHeadTitle`])||"หัวหน้าฝ่ายบริหารวิชาการ"),j=n(r?e.agmRegistrarName??e[`${o}RegistrarName`]??"":e[`${o}RegistrarName`]??"");r?e.agmRegistrarSignUrl??e[`${o}RegistrarSignUrl`]:e[`${o}RegistrarSignUrl`];const A=n((r?e.agmRegistrarTitle:e[`${o}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล"),S=n(u);b==null||b.head_sign_url;const R=i.class_name??"",T=!r&&(["4","5","6"].some(L=>(s.grade_level??"").includes(L))||["ACDMVOC"].includes(s.subject_group)),B=r?R.startsWith("PR")?"PR":R.startsWith("อก")?"อก":R.startsWith("อป")?"อป":"":"",P=_!=null&&_.length?Math.round(_.length/20):c*2,O=(_==null?void 0:_.length)??c*2*20,G=!!window._pp5HideScores,F=M.reduce((L,U)=>L+(U.max_score??0),0),I={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},N={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0},k={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0};if(!G)for(const L of l){const U=v[L.id]??{},lt=M.reduce((pt,rt)=>pt+(U[rt.id]??0),0);let ct=0;if(F>0){const pt=lt/F*100;ct=mt(pt);const rt=String(ct);rt in I&&I[rt]++}const tt=D==null?void 0:D[L.id];tt&&tt in N&&N[tt]++;const vt=kt(ct);vt in k&&k[vt]++}const E=L=>`<span class="box${L?" checked":""}"></span>`,V=r?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",at=r?"76mm":"83mm",et=r?"115mm":"117.4mm",K=r?`
    <div class="check-line">${E(B==="PR")}<span>ตอนต้น (PR)</span></div>
    <div class="check-line">${E(B==="อก")}<span>ตอนกลาง (อก.)</span></div>
    <div class="check-line">${E(B==="อป")}<span>ตอนปลาย (อป.)</span></div>
  `:`
    <div class="check-line">${E(!T)}<span>ตอนต้น (ม.1-ม.3)</span></div>
    <div class="check-line">${E(T)}<span>ตอนปลาย (ม.4-ม.6)</span></div>
  `,J=y.length>15?`<span class="uline w-md" style="white-space:normal;line-height:4.5mm;min-height:9mm;vertical-align:bottom;">${n(y)}</span>`:`<span class="uline w-md">${n(y)}</span>`,X=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",nt=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",ot=r?`
    <div class="info-line">
      <span>${X}</span>${J}
      <span>รหัสวิชา</span><span class="uline w-cd">${n(s.subject_code??"")}</span>
    </div>`:`
    <div class="info-line">
      <span>${X}</span>${J}
      <span>รายวิชา</span><span class="uline w-lg">${n(s.subject_name??"")}</span>
      <span>รหัสวิชา</span><span class="uline w-cd">${n(s.subject_code??"")}</span>
    </div>`,W=[4,"3.5",3,"2.5",2,"1.5",1,0].map(L=>`<td>${I[String(L)]||""}</td>`).join(""),Q=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(L=>`<td>${N[L]||""}</td>`).join(""),h=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(L=>`<td>${k[L]||""}</td>`).join("");return`
  <div class="page-p1">
    <div class="doc-code">ปพ5</div>
    ${a?`<div class="logo-wrap"><img src="${n(a)}" alt="ตราโรงเรียน" /></div>`:""}

    <h1 class="p1-title">แบบบันทึกผลการพัฒนาคุณภาพผู้เรียน</h1>

    <section class="level-row">
      <div class="lbl" style="left:${at};">${V}</div>
      <div class="checks" style="left:${et};">${K}</div>
    </section>

    <div class="school">${f}</div>
    <div class="school-sub">${m}</div>

    <section class="info">
      <div class="info-line">
        <span>${V}</span><span class="uline w-sm">${n(Z(i.class_name))}</span>
        <span>ภาคเรียนที่</span><span class="uline w-md">${H}</span>
        <span>ปีการศึกษา</span><span class="uline w-yr">${C}</span>
      </div>
      ${ot}
      <div class="info-line">
        <span>จำนวน</span><span class="uline w-xs">${c}</span>
        <span>หน่วยกิต</span>
        <span>เวลาเรียน</span><span class="uline w-xs">${P}</span>
        <span>ชั่วโมง/สัปดาห์</span>
        <span>รวมเวลาเรียน</span><span class="uline w-xs">${O}</span>
        <span>ชั่วโมง/ภาค</span>
      </div>
      <div class="info-row-one"><span>ครูผู้สอน</span><span class="uline-xl">${n((d==null?void 0:d.full_name)??"")}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาสามัญ</span><span class="uline-xl">${n(((q=x==null?void 0:x.teachers)==null?void 0:q.full_name)??"")}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาศาสนา</span><span class="uline-xl">${n(((Y=z==null?void 0:z.teachers)==null?void 0:Y.full_name)??"")}</span></div>
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
          <td>${l.length}</td>${W}<td></td><td></td><td></td>
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
          ${Q}<td></td>
        </tr>
        <tr>
          <td>การประเมินคุณลักษณะ<br>อันพึงประสงค์</td>
          ${h}<td></td>
        </tr>
      </table>
    </section>

    <section class="approval">
      <div class="apl-title">การอนุมัติผลการพัฒนาคุณภาพผู้เรียน</div>

      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${n((d==null?void 0:d.full_name)??"")}</span>
        <span>ครูผู้สอน</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${S}</span>
        <span>${nt}</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${j}</span>
        <span>${A}</span>
      </div>

      <div class="consider">เสนอเพื่อพิจารณา</div>

      <div class="ctr-block">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${$}</span>
        </div>
        <div class="p1-role">${w}</div>
      </div>

      <div class="decision">
        <span>${E(!0)}&nbsp; อนุมัติ</span>
        <span>${E(!1)}&nbsp; ไม่อนุมัติ</span>
      </div>

      <div class="ctr-block director">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${g}</span>
        </div>
        <div class="p1-role">${p}</div>
      </div>
    </section>
  </div>`}function Ct(t){const{cls:i,ms:s,credit:c,cfg:o,courseDoc:e,thColHeaders:l,thColsExtra:M,thRowHeader:v,teacher:d,deptNameTH:b,deptHeadName:y,academicYear:u,semester:x,prefix:z,sessions:C}=t,H=(C==null?void 0:C.length)??c*2*20,_=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",D=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",f=o[`${z}LogoBwUrl`]||o[`${z}LogoUrl`]||o.samaiLogoBwUrl||o.samaiLogoUrl||"",m=Array.isArray(e==null?void 0:e.table_rows)?e.table_rows:[],a=(e==null?void 0:e.text_direction)==="rtl"?"rtl":(e==null?void 0:e.text_direction)==="ltr"?"ltr":"auto",p=(Array.isArray(e==null?void 0:e.table_columns)?e.table_columns.length:2)===1,r=p?[M[0]??"ผลการเรียนรู้"]:l??["มาตรฐานการเรียนรู้","ตัวชี้วัด"],$=m,w=(O,G="")=>[Array.isArray(O)&&O.length?O.join(", "):"",(G??"").trim()].filter(Boolean).join(", "),j=w(e==null?void 0:e.between_objective_items,e==null?void 0:e.between_objective_extra),A=w(e==null?void 0:e.midterm_objective_items,e==null?void 0:e.midterm_objective_extra),S=w(e==null?void 0:e.final_objective_items,e==null?void 0:e.final_objective_extra),R=["AGM","AGMVOC"].includes(s.subject_group),T=["1 รักชาติ ศาสน์ กษัตริย์","2 ซื่อสัตย์สุจริต","3 มีวินัย","4 ใฝ่เรียนรู้","5 อยู่อย่างพอเพียง"],B=["6 มุ่งมั่นในการทำงาน","7 รักความเป็นไทย","8 มีจิตสาธารณะ","9 ปฏิบัติศาสนกิจอย่างสม่ำเสมอ"],P=R?"ระดับชั้นอิสลามศึกษา":"ระดับชั้น";return`
  <div class="p2-wrap">
    <!-- Logo + Title -->
    ${f?`<div class="p2-logo-wrap"><img src="${n(f)}" alt="โลโก้"/></div>`:'<div style="height:5mm;"></div>'}
    <div class="p2-title">มาตรฐานการเรียนรู้และตัวชี้วัด/รายภาค</div>

    <!-- Header -->
    <div class="p2-hdr">
      <!-- คอลัมน์ซ้าย -->
      <div class="p2-hdr-col">
        <div class="p2-hdr-row">
          <span class="p2-label">รายวิชา</span>
          <span class="p2-uline p2-uline-fill">${n(s.subject_name??"")}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">${P}</span>
          <span class="p2-uline p2-uline-fill">${n(Z(i.class_name??""))}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ครูผู้สอน</span>
          <span class="p2-uline p2-uline-fill">${n((d==null?void 0:d.full_name)??"")}</span>
        </div>
      </div>
      <!-- คอลัมน์ขวา -->
      <div class="p2-hdr-col">
        <div class="p2-hdr-row">
          <span class="p2-label">รหัสวิชา</span>
          <span class="p2-uline">${n(s.subject_code??"")}</span>
          <span class="p2-label">${_}</span>
          <span class="p2-uline p2-uline-fill">${n(b)}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ภาคเรียนที่</span>
          <span class="p2-uline">${n(String(x))}</span>
          <span class="p2-label">ปีการศึกษา</span>
          <span class="p2-uline">${n(String(u))}</span>
          <span class="p2-label">เวลา</span>
          <span class="p2-uline p2-uline-fill">${n(String(H))}</span>
          <span class="p2-label">ชั่วโมง</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">จำนวน</span>
          <span class="p2-uline">${n(String(c))}</span>
          <span class="p2-label">หน่วยกิต</span>
        </div>
      </div>
    </div>

    <!-- Standards Table -->
    ${p?`
    <table class="std-table" style="table-layout:fixed;">
      <thead>
        <tr>
          <th style="width:100%;" dir="ltr">${n(r[0])}</th>
        </tr>
      </thead>
      <tbody>
        ${$.map((O,G)=>{const F=n(Array.isArray(O)?O[0]??"":""),I=G+1;return`<tr><td class="std-row" dir="${a}" style="padding:1.5mm 2.5mm;">
            <span style="display:inline-flex;gap:5px;align-items:flex-start;width:100%;">
              <b style="flex-shrink:0;min-width:16px;text-align:center;">${I}.</b>
              <span style="flex:1;">${F}</span>
            </span>
          </td></tr>`}).join("")}
        <tr class="std-fill-row"><td></td></tr>
      </tbody>
    </table>`:`
    <table class="std-table" dir="${a}">
      <thead>
        <tr>
          <th style="width:50mm;">${n(r[0]??"มาตรฐานการเรียนรู้")}</th>
          <th>${n(r[1]??"ตัวชี้วัด")}</th>
        </tr>
      </thead>
      <tbody>
        ${$.map(O=>`<tr>
          <td class="std-row">${n(Array.isArray(O)?O[0]??"":"")}</td>
          <td class="std-row">${n(Array.isArray(O)?O[1]??"":"")}</td>
        </tr>`).join("")}
        <tr class="std-fill-row"><td></td><td></td></tr>
      </tbody>
    </table>`}

    <!-- Footer: Objectives + คุณลักษณะ -->
    <div class="p2-footer">
      <div class="p2-obj">
        <p>จุดประสงค์วัดผลรายจุดประสงค์ ข้อที่ <u>${j}</u></p>
        <p>จุดประสงค์วัดผลกลางภาค ข้อที่ <u>${A}</u></p>
        <p>จุดประสงค์วัดผลปลายภาค ข้อที่ <u>${S}</u></p>
      </div>
      <div class="p2-char">
        <div class="p2-char-title">คุณลักษณะอันพึงประสงค์</div>
        <div class="p2-char-grid">
          <div>${T.map(O=>`<div>${n(O)}</div>`).join("")}</div>
          <div>${B.map(O=>`<div>${n(O)}</div>`).join("")}</div>
        </div>
      </div>
    </div>

    <!-- Signature -->
    <div class="p2-sig">
      ลงชื่อ <span style="display:inline-block;border-bottom:.3mm dashed #555;min-width:60mm;text-align:center;padding:0 2mm;">
        ${n(y)}
      </span> ${D}
    </div>
  </div>`}const yt=50;function At(t){const{cls:i,ms:s,credit:c,cfg:o,students:e,attMap:l,sessions:M,academicYear:v,semester:d,teacher:b}=t,y=[];for(let u=0;u<e.length;u+=yt){const x=e.slice(u,u+yt);y.push(ee(t,x,u+1))}return y.join("")}function ee(t,i,s){const{cls:c,ms:o,teacher:e,academicYear:l,semester:M,cfg:v,prefix:d}=t,b=(v==null?void 0:v[`${d}LogoBwUrl`])||(v==null?void 0:v[`${d}LogoUrl`])||(v==null?void 0:v.samaiLogoBwUrl)||(v==null?void 0:v.samaiLogoUrl)||"",y=40,u=i.length+1,x=Math.max(3.5,Math.min(5.5,Math.floor(241/u*10)/10)).toFixed(1),z="3.2mm",C=i.map((D,f)=>{const m=t.attMap[D.id]??{},a=[];for(const[r,$]of Object.entries(m))$!=="present"&&a.push({n:parseInt(r),status:$});a.sort((r,$)=>r.n-$.n);const g=a.length,p=Array.from({length:y},(r,$)=>{const w=a[$];return w?`<td class="${w.status==="absent"?"att-absent":w.status==="leave"?"att-leave":w.status==="sick"?"att-sick":"att-absent"}">${w.n}</td>`:"<td></td>"});return`<tr>
      <td class="text-center">${s+f}</td>
      <td class="att-code text-center">${n(D.student_code??"")}</td>
      <td class="att-name">${n(D.full_name??"")}</td>
      ${p.join("")}
      <td class="text-center font-bold">${g||""}</td>
    </tr>`}),H=Array.from({length:y},(D,f)=>`<th>${f+1}</th>`).join(""),_=3+y+1;return`
  <div class="page-tight">
    <div class="att-top">
      ${b?`<div class="att-logo"><img src="${n(b)}" alt="โลโก้" /></div>`:'<div style="width:18mm;flex-shrink:0;"></div>'}
      <div class="att-info">
        <div class="att-title">บันทึกการไม่มาเรียนของนักเรียนชั้น ${n(Z(c.class_name))}</div>
        <div class="att-hdr-row">
          <span class="att-label">ปีการศึกษา</span>
          <span class="att-uline">${n(String(l))}</span>
          <span class="att-label" style="margin-left:4mm;">ภาคเรียนที่</span>
          <span class="att-uline">${n(String(M))}</span>
        </div>
        <div class="att-hdr-row2">
          <div class="att-hdr-col">
            <span class="att-label">รายวิชา</span>
            <span class="att-uline att-uline-fill">${n(o.subject_name??"")}</span>
          </div>
          <div class="att-hdr-col">
            <span class="att-label">รหัสวิชา</span>
            <span class="att-uline att-uline-fill">${n(o.subject_code??"")}</span>
          </div>
        </div>
        <div class="att-hdr-row">
          <span class="att-label">ครูผู้สอน</span>
          <span class="att-uline att-uline-fill">${n((e==null?void 0:e.full_name)??"")}</span>
        </div>
      </div>
    </div>
    <table class="att-table" style="--att-row-h:${x}mm">
      <colgroup>
        <col style="width:6mm;"/>
        <col style="width:13mm;"/>
        <col style="width:36mm;"/>
        ${Array.from({length:y},()=>`<col style="width:${z};"/>`).join("")}
        <col style="width:10mm;"/>
      </colgroup>
      <thead>
        <tr>
          <th colspan="${_}" style="text-align:left;font-weight:normal;padding:0.8mm 1mm;border-bottom:none;">
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
        <tr>${H}</tr>
      </thead>
      <tbody>
        ${C.join("")}
        <tr><td></td><td></td><td></td>${Array.from({length:y},()=>"<td></td>").join("")}<td></td></tr>
      </tbody>
    </table>
  </div>`}const xt=50;function Mt(t){const{students:i}=t,s=[];for(let c=0;c<i.length;c+=xt)s.push(se(t,i.slice(c,c+xt),c+1));return s.join("")}function se(t,i,s){var I,N;const{cls:c,ms:o,teacher:e,deptHeadName:l,academicYear:M,semester:v,scoreColumns:d,scoreMap:b,readingEvalMap:y}=t,u=o.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้าหมวดวิชา",x=k=>k.assignment_type==="ปลายภาค"||k.assignment_type==="final",z=k=>k.assignment_type==="คะแนนพิเศษ",C=d.filter(k=>!x(k)&&!z(k)),H=d.filter(k=>z(k)),_=d.filter(k=>x(k)),D=5,f=5,m={id:null,assignment_name:"",max_score:""},a=[...C,...Array(Math.max(0,D-C.length)).fill(m)],g=[..._,...Array(Math.max(0,f-_.length)).fill(m)],p=C.reduce((k,E)=>k+(E.max_score??0),0),r=_.reduce((k,E)=>k+(E.max_score??0),0),$=a.length+1,w=g.length+2,j=$+w,S=3+j+3,R=i.length+1,T=Math.max(3.8,Math.min(5.8,Math.floor(160/R*10)/10)).toFixed(1),B=!!window._pp5HideScores,P=i.map((k,E)=>{if(B)return`<tr>
        <td>${s+E}</td>
        <td>${n(k.student_code??"")}</td>
        <td class="gs-name" style="border-right:2.0px solid #000;">${n(k.full_name??"")}</td>
        ${a.map(()=>"<td></td>").join("")}
        <td></td>
        ${g.map(()=>"<td></td>").join("")}
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
      </tr>`;const V=b[k.id]??{},at=a.map(W=>W.id?V[W.id]??"":""),et=g.map(W=>W.id?V[W.id]??"":""),K=C.reduce((W,Q)=>W+(V[Q.id]??0),0)+H.reduce((W,Q)=>W+(V[Q.id]??0),0),J=_.reduce((W,Q)=>W+(V[Q.id]??0),0),X=K+J,nt=mt(X),ot=kt(nt);return`<tr>
      <td>${s+E}</td>
      <td>${n(k.student_code??"")}</td>
      <td class="gs-name" style="border-right:2.0px solid #000;">${n(k.full_name??"")}</td>
      ${at.map(W=>`<td>${W}</td>`).join("")}
      <td style="font-weight:700;">${K||""}</td>
      ${et.map(W=>`<td>${W}</td>`).join("")}
      <td style="font-weight:700;">${J||""}</td>
      <td style="font-weight:700;border-right:2.0px solid #000;">${X||""}</td>
      <td>${n((y==null?void 0:y[k.id])??"")}</td>
      <td style="border-right:2.0px solid #000;">${n(ot)}</td>
      <td style="font-weight:700;">${nt}</td>
    </tr>`}),O=`<tr>${Array(S).fill("<td></td>").join("")}</tr>`,G=C.length>6?"5mm":"5.8mm",F=_.length>5?"5mm":"5.5mm";return`
  <div class="score-wrap">
    <div class="score-top-info">
      <div class="sc-field"><span class="sc-lbl">รายวิชา</span><span class="sc-val">${n(o.subject_name??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">รหัสวิชา</span><span class="sc-val">${n(o.subject_code??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">ชั้น</span><span class="sc-val">${n(Z(c.class_name))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ภาคเรียนที่</span><span class="sc-val">${n(String(v))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ปีการศึกษา</span><span class="sc-val">${n(String(M))}</span></div>
    </div>
    <table class="grade-sheet" style="--row-h:${T}mm">
      <colgroup>
        <col style="width:5mm;"/>
        <col style="width:12mm;"/>
        <col style="width:45mm;"/>
        ${a.map(()=>`<col style="width:${G};"/>`).join("")}
        <col style="width:7mm;"/>
        ${g.map(()=>`<col style="width:${F};"/>`).join("")}
        <col style="width:7mm;"/>
        <col style="width:8mm;"/>
        <col style="width:8.5mm;"/>
        <col style="width:8.5mm;"/>
        <col style="width:8.5mm;"/>
      </colgroup>
      <thead>
        <!-- Row 1: ผู้เรียน คลุม 3 คอลัมน์ + section header + result cols rs5 -->
        <tr>
          <th colspan="3" style="border-right:2.5px solid #000;">ผู้เรียน</th>
          <th colspan="${j}" style="border-right:2.0px solid #000;">วัดผลระหว่างภาค / ปลายภาค</th>
          <th rowspan="5" class="v"><span style="font-size:7px;">ประเมินการอ่านคิดวิเคราะห์และเขียน</span></th>
          <th rowspan="5" class="v" style="border-right:2.0px solid #000;"><span style="font-size:7px;">ประเมินคุณลักษณะอันพึงประสงค์</span></th>
          <th rowspan="5" class="v"><span>ระดับการเรียน</span></th>
        </tr>
        <!-- Row 2: เลขที่(v,rs4) | เลขประจำตัว(v,rs4) | ชื่อ-สกุล(rs4) | อัตราส่วน -->
        <tr>
          <th rowspan="4" class="v"><span>เลขที่</span></th>
          <th rowspan="4" class="v"><span>เลขประจำตัว</span></th>
          <th rowspan="4" style="border-right:2.0px solid #000;">ชื่อ - สกุล</th>
          <th colspan="${j}" style="font-size:7px;padding:1px;border-right:2.0px solid #000;">อัตราส่วนคะแนนระหว่างเรียน:วัดผลระหว่างภาค/ปลายภาค = ${p} / ${r}</th>
        </tr>
        <!-- Row 3: between/final section headers (3 student cols covered by rs4) -->
        <tr>
          <th colspan="${a.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนระหว่างเรียน/กลางภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนระหว่างภาค</span></th>
          <th colspan="${g.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนปลายภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนปลายภาค</span></th>
          <th rowspan="2" class="v" style="border-right:2.0px solid #000;"><span>รวมคะแนน 100</span></th>
        </tr>
        <!-- Row 4: column name verticals (3 student cols covered by rs4) -->
        <tr>
          ${a.map(k=>`<th class="v" style="overflow:visible;"><span>${n(k.assignment_name??"")}</span></th>`).join("")}
          ${g.map(k=>`<th class="v" style="overflow:visible;"><span>${n(k.assignment_name??"")}</span></th>`).join("")}
        </tr>
        <!-- Row 5: score-full (3 student cols still covered by rs4) -->
        <tr>
          ${a.map(k=>`<th class="score-full">${k.max_score??""}</th>`).join("")}
          <th class="score-full">${p||""}</th>
          ${g.map(k=>`<th class="score-full">${k.max_score??""}</th>`).join("")}
          <th class="score-full">${r||""}</th>
          <th class="score-full" style="border-right:2.0px solid #000;">${p||r?p+r:""}</th>
        </tr>
      </thead>
      <tbody>
        ${P.join("")}
        ${O}
      </tbody>
    </table>
    <div class="score-sig">
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${n((e==null?void 0:e.full_name)??"")}</div>
        <div class="score-sig-role">ครูผู้สอน</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${n(l)}</div>
        <div class="score-sig-role">${u}</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${n(["AGM","AGMVOC"].includes((I=t.ms)==null?void 0:I.subject_group)?t.cfg.agmRegistrarName??t.cfg[`${t.prefix}RegistrarName`]??"":t.cfg[`${t.prefix}RegistrarName`]??"")}</div>
        <div class="score-sig-role">${n((["AGM","AGMVOC"].includes((N=t.ms)==null?void 0:N.subject_group)?t.cfg.agmRegistrarTitle??t.cfg[`${t.prefix}RegistrarTitle`]:t.cfg[`${t.prefix}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล")}</div>
      </div>
    </div>
  </div>`}function Ht(t){const{cls:i,ms:s,credit:c,teacher:o,deptNameTH:e,academicYear:l,semester:M,sessions:v,cfg:d,prefix:b,holidaySet:y}=t,u=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",x=["AGM","AGMVOC"].includes(s.subject_group)?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",z=40,C=3,H=v!=null&&v.length?Math.round(v.length/20):Math.max(1,Math.round(c*2)),_=(d==null?void 0:d[`${b}LogoBwUrl`])||(d==null?void 0:d[`${b}LogoUrl`])||(d==null?void 0:d.samaiLogoBwUrl)||(d==null?void 0:d.samaiLogoUrl)||"",D=Array.from({length:C},(r,$)=>Array.from({length:z},(w,j)=>{const A=v[$*z+j];return A?{sess:A,week:Math.ceil(A.n/H)}:null})),f=D.map(r=>r.map(($,w)=>{var A,S;if(!$)return null;if(w>0&&((A=r[w-1])==null?void 0:A.week)===$.week)return 0;let j=1;for(let R=w+1;R<z&&((S=r[R])==null?void 0:S.week)===$.week;R++)j++;return j})),m="border-right:1.5px solid #000;",a=Array.from({length:z},(r,$)=>`<tr>${Array.from({length:C},(j,A)=>{const S=D[A][$],R=f[A][$],T=A<C-1?m:"";if(!S)return`<td></td><td></td><td style="${T}"></td>`;const B=R===0?"":`<td class="wk" rowspan="${R}">${S.week}</td>`,P=y==null?void 0:y.has(S.sess.ds),O=T+(P?"color:#c00;font-weight:700;":"");return`${B}<td class="ep">${S.sess.n}</td><td class="dt" style="${O}">${$t(S.sess.ds)}</td>`}).join("")}</tr>`),g=(r,$="",w=!1)=>`<span style="${w?"flex:1;border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;":`display:inline-block;min-width:${r};border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;`}">${n(String($))}</span>`,p=r=>`<div style="display:flex;align-items:baseline;gap:2mm;font-size:9pt;margin-bottom:1.5mm;">${r}</div>`;return`
  <div class="page" style="padding:12mm 10mm 8mm;">
    ${_?`<div style="text-align:center;margin-bottom:2mm;"><div style="width:16mm;height:16mm;border-radius:50%;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;"><img src="${n(_)}" style="width:110%;height:110%;margin:-5%;object-fit:contain;display:block;" alt="โลโก้"/></div></div>`:""}
    <div style="text-align:center;font-weight:700;font-size:12pt;margin-bottom:3mm;">รายละเอียดสัปดาห์/คาบ/วันที่สอน</div>
    ${p(`<span>รายวิชา</span>${g("40mm",s.subject_name??"")}
           <span>&emsp;รหัสวิชา</span>${g("22mm",s.subject_code??"")}
           <span>&emsp;${u}</span>${g("",e,!0)}`)}
    ${p(`<span>${x}</span>${g("16mm",Z(i.class_name))}
           <span>&emsp;ภาคเรียนที่</span>${g("10mm",M)}
           <span>&emsp;ปีการศึกษา</span>${g("18mm",l)}
           <span>&emsp;เวลา</span>${g("12mm")}
           <span>ชั่วโมง&emsp;จำนวน</span>${g("",c,!0)}
           <span>หน่วยกิต</span>`)}
    ${p(`<span>ครูผู้สอน</span>${g("80mm",(o==null?void 0:o.full_name)??"")}`)}
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
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt" style="${m}">วันที่/เดือน/ปี</th>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt" style="${m}">วันที่/เดือน/ปี</th>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt">วันที่/เดือน/ปี</th>
        </tr>
      </thead>
      <tbody>${a.join("")}</tbody>
    </table>
  </div>`}const zt=["ข.ร.","ข.ส.","ม.ส.","ข.ป."];function ae(t){var F,I;const{cls:i,ms:s,credit:c,prefix:o,cfg:e,students:l,scoreColumns:M,scoreMap:v,teacher:d,deptNameTH:b,deptHeadName:y,hrSamai:u,hrReligion:x,academicYear:z,semester:C,sessions:H,moralScores:_,moralMax:D}=t,f=n(e[`${o}SchoolName`]??e.samaiSchoolName??""),m=e[`${o}LogoUrl`]||e[`${o}LogoBwUrl`]||e.samaiLogoUrl||e.samaiLogoBwUrl||"",a=n(e[`${o}DirectorName`]??""),g=n(e[`${o}DirectorTitle`]||"ผู้อำนวยการ"),p=n(e[`${o}RegistrarName`]??""),r=n(e[`${o}RegistrarTitle`]||"ผู้ช่วยผู้อำนวยการฝ่ายทะเบียนวัดผลและประเมินผล"),$=n(y),w=H!=null&&H.length?Math.round(H.length/20):c*2,j=(H==null?void 0:H.length)??c*2*20,A=!!window._pp5HideScores,S=M.reduce((N,k)=>N+(k.max_score??0),0)+(D||0),R={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},T={"ข.ร.":0,"ข.ส.":0,"ม.ส.":0,"ข.ป.":0};let B=0,P=0,O=0;if(!A)for(const N of l){if(N.special_result&&zt.includes(N.special_result)){T[N.special_result]++;continue}const k=v[N.id]??{},E=M.some(V=>k[V.id]!=null);if(E&&O++,S>0){const at=(M.reduce((J,X)=>J+(k[X.id]??0),0)+(Number(_==null?void 0:_[N.id])||0))/S*100,et=mt(at),K=String(et);K in R&&R[K]++,E&&(et>0?B++:P++)}}const G=[[4,"80 - 100","จำนวนนักเรียนเข้าเรียน",l.length],["3.5","75 - 79","จำนวนนักเรียนเข้าสอบ",O],[3,"70 - 74","จำนวนนักเรียนไม่มีสิทธิ์สอบ (ข.ร.)",T["ข.ร."]],["2.5","65 - 69","จำนวนนักเรียนขาดสอบ (ข.ส.)",T["ข.ส."]],[2,"60 - 64","จำนวนนักเรียนไม่สมบูรณ์ (ม.ส.)",T["ม.ส."]],["1.5","55 - 59","จำนวนนักเรียนขาดการปฏิบัติงาน (ข.ป.)",T["ข.ป."]],[1,"50 - 54","จำนวนนักเรียนผ่าน (ผ)",B],[0,"0 - 49","จำนวนนักเรียนไม่ผ่าน (ม.ผ.)",P]].map(([N,k,E,V])=>`
    <tr>
      <td>${N}</td><td>${k}</td><td>${R[String(N)]||""}</td>
      <td class="voc-remark">${E}</td><td>${V||""}</td>
    </tr>`).join("");return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p1">
      ${m?`<div class="voc-logo-frame"><img class="voc-logo" src="${n(m)}" alt="ตราสถานศึกษา" /></div>`:""}
      <div class="voc-title1">${f}</div>
      <div class="voc-title2">แบบบันทึกเวลาเรียนและประเมินผลการเรียน</div>
      <div class="voc-title3">หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.)</div>

      <div class="voc-info">
        <div class="voc-info-row">
          <span class="voc-item">ชั้น <span class="voc-line-fill voc-short">${n(Z(i.class_name))}</span></span>
          <span class="voc-item">ภาคเรียนที่ <span class="voc-line-fill voc-short">${C}</span></span>
          <span class="voc-item">ปีการศึกษา <span class="voc-line-fill voc-short">${z}</span></span>
          <span class="voc-item" style="margin-left:auto">แผนกวิชา <span class="voc-line-fill voc-medium">${n(b)}</span></span>
        </div>
        <div class="voc-info-row">
          <span class="voc-item" style="flex:1">รายวิชา <span class="voc-line-fill voc-long" style="flex:1">${n(s.subject_name??"")}</span></span>
          <span class="voc-item">รหัสวิชา <span class="voc-line-fill voc-medium">${n(s.subject_code??"")}</span></span>
        </div>
        <div class="voc-info-row voc-center" style="justify-content:center; gap:10mm">
          <span class="voc-item"><span class="voc-line-fill voc-short">${c}</span> หน่วยกิต</span>
          <span class="voc-item">เวลาเรียน <span class="voc-line-fill voc-short">${w}</span> ชั่วโมง/สัปดาห์</span>
          <span class="voc-item">รวมเวลาเรียน <span class="voc-line-fill voc-short">${j}</span> ชั่วโมง/ภาค</span>
        </div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูผู้สอน <span class="voc-line-fill voc-xlong" style="flex:1">${n((d==null?void 0:d.full_name)??"")}</span></span></div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูที่ปรึกษาสามัญ <span class="voc-line-fill voc-xlong" style="flex:1">${n(((F=u==null?void 0:u.teachers)==null?void 0:F.full_name)??"")}</span></span></div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูที่ปรึกษาศาสนา <span class="voc-line-fill voc-xlong" style="flex:1">${n(((I=x==null?void 0:x.teachers)==null?void 0:I.full_name)??"")}</span></span></div>
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
        <tbody>${G}</tbody>
      </table>

      <div class="voc-consider">พิจารณาผลการให้ระดับคะแนนเห็นว่าเหมาะสมและถูกต้องแล้ว</div>

      <div class="voc-sign-grid">
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${n((d==null?void 0:d.full_name)??"")} )</div>
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนกวิชา<br><br>( ${$} )</div>
        <div class="voc-sign-block voc-sign-wide">ลงชื่อ <span class="voc-sig-line"></span> ${r}<br><br>( ${p} )</div>
      </div>

      <div class="voc-approve">อนุมัติผลการเรียน <span class="voc-check-box"></span>อนุมัติ <span class="voc-check-box"></span>ไม่อนุมัติ</div>
      <div class="voc-director">ลงชื่อ <span class="voc-sig-line"></span><br><br>( ${a} )<br>${g}${f}</div>
    </div>
  </section>`}const it=2;function ne(t,i){const s=Math.ceil(((t==null?void 0:t.length)||0)/it),c=Array.from({length:it},(e,l)=>Array.from({length:s},(M,v)=>{const d=t[l*s+v];return d?{sess:d,week:Math.ceil(d.n/i)}:null})),o=c.map(e=>e.map((l,M)=>{var d,b;if(!l)return null;if(M>0&&((d=e[M-1])==null?void 0:d.week)===l.week)return 0;let v=1;for(let y=M+1;y<s&&((b=e[y])==null?void 0:b.week)===l.week;y++)v++;return v}));return{N:s,colData:c,colRS:o}}const Dt=233;function oe(t){const i=Math.max(6,...(t??[]).map(s=>(s.full_name??"").length));return Math.min(50,Math.max(30,i*2.3))}function le(t,i,s){const o=Math.max(i.length+3,15),e=Math.max(3,Math.min(7,Dt/o)),l=e<3.6?7.5:e<4.4?8.5:e<5.4?9.5:e<6.2?10.5:11.5,M=Array.from({length:o},(d,b)=>{const y=i[b];if(!y)return`<tr>
        <td class="voc-student-no"></td><td class="voc-student-id"></td><td class="voc-student-name"></td>
        ${Array.from({length:20},()=>"<td></td>").join("")}
        <td class="voc-score"></td>
      </tr>`;const u=t.attMap[y.id]??{},x=[];for(const[C,H]of Object.entries(u))H!=="present"&&x.push({n:parseInt(C),status:H});x.sort((C,H)=>C.n-H.n);const z=Array.from({length:20},(C,H)=>{const _=x[H];return _?`<td style="color:${_.status==="absent"?"#d00":_.status==="leave"?"#005bbb":"#e67e00"};font-weight:700;">${_.n}</td>`:"<td></td>"});return`<tr>
      <td class="voc-student-no voc-center">${b+1}</td>
      <td class="voc-student-id voc-center">${n(y.student_code??"")}</td>
      <td class="voc-student-name">${n(y.full_name??"")}</td>
      ${z.join("")}
      <td class="voc-score voc-center">-</td>
    </tr>`}),v=Array.from({length:20},(d,b)=>`<th class="voc-att">${b+1}</th>`).join("");return`
  <table class="voc-attendance voc-student-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${l}px">
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
    <tbody>${M.join("")}</tbody>
  </table>`}function ie(t,i){const{N:s,colData:c,colRS:o}=t,e=Math.max(1.6,Math.min(4.55,Dt/Math.max(1,s))),l=e<2.4?6:e<3.2?7:e<4?8:9.5,M=Array.from({length:s},(v,d)=>`<tr>${Array.from({length:it},(y,u)=>{const x=c[u][d],z=o[u][d];if(!x)return'<td class="voc-sched-week"></td><td class="voc-sched-period"></td><td class="voc-sched-date"></td>';const C=z===0?"":`<td class="voc-sched-week voc-center" rowspan="${z}">${x.week}</td>`,H=i==null?void 0:i.has(x.sess.ds);return`${C}<td class="voc-sched-period voc-center">${x.sess.n}</td><td class="voc-sched-date voc-center" style="${H?"color:#c00;font-weight:700;":""}">${$t(x.sess.ds)}</td>`}).join("")}</tr>`);return`
  <table class="voc-attendance voc-schedule-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${l}px">
    <colgroup>
      ${Array.from({length:it},()=>'<col style="width:6mm"><col style="width:6.5mm"><col style="width:15mm">').join("")}
    </colgroup>
    <thead>
      <tr class="voc-h-main">
        <th colspan="${it*3}">สัปดาห์ที่/คาบ/วันที่สอน</th>
      </tr>
      <tr class="voc-h-sub">
        ${Array.from({length:it},()=>'<th colspan="3"></th>').join("")}
      </tr>
      <tr class="voc-h-num">
        ${Array.from({length:it},()=>`
          <th class="voc-sched-week"><div class="voc-vtext">สัปดาห์ที่</div></th>
          <th class="voc-sched-period"><div class="voc-vtext">คาบ</div></th>
          <th class="voc-sched-date"><div class="voc-vtext">ว/ด/ป</div></th>`).join("")}
      </tr>
    </thead>
    <tbody>${M.join("")}</tbody>
  </table>`}function ce(t){const{students:i,sessions:s}=t,c=s!=null&&s.length?Math.round(s.length/20):1,o=ne(s,c),e=oe(i);return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p2">
      <div class="voc-p2-title">แบบบันทึกการไม่มาเรียน</div>
      <div class="voc-att-flex">
        ${le(t,i,e)}
        ${ie(o,t.holidaySet)}
      </div>
    </div>
  </section>`}const ft=31;function re(t,i=8){const s=n(t??"");if(s.length<=i)return s;const c=Math.ceil(s.length/2);let o=s.lastIndexOf(" ",c);return o<=0&&(o=s.indexOf(" ",c)),o<=0?s:`${s.slice(0,o)}<br>${s.slice(o+1)}`}function de(t,i,s){const{cls:c,teacher:o,deptHeadName:e,scoreColumns:l,scoreMap:M,moralScores:v,moralMax:d,moralColName:b}=t,y=a=>a.assignment_type==="คะแนนพิเศษ",u=l.filter(a=>!y(a)),x=l.filter(a=>y(a)),z=u.reduce((a,g)=>a+(g.max_score??0),0),C=z+(d||0),H=!!window._pp5HideScores,_=i.map((a,g)=>{if(H)return`<tr>
        <td class="voc-center">${s+g}</td><td class="voc-c-id"></td><td class="voc-c-name"></td>
        ${Array(u.length).fill("<td></td>").join("")}<td></td>
        <td></td><td></td><td></td><td></td>
      </tr>`;const p=M[a.id]??{},r=u.map(S=>p[S.id]??""),$=u.reduce((S,R)=>S+(p[R.id]??0),0)+x.reduce((S,R)=>S+(p[R.id]??0),0),w=(v==null?void 0:v[a.id])??"",j=$+(Number(w)||0),A=a.special_result&&zt.includes(a.special_result)?a.special_result:mt(C?j/C*100:0);return`<tr>
      <td class="voc-center">${s+g}</td>
      <td class="voc-c-id voc-center">${n(a.student_code??"")}</td>
      <td class="voc-c-name">${n(a.full_name??"")}</td>
      ${r.map(S=>`<td class="voc-center">${S}</td>`).join("")}
      <td class="voc-center voc-bold">${$||""}</td>
      <td class="voc-center">${w}</td>
      <td class="voc-center voc-bold">${j||""}</td>
      <td class="voc-center voc-bold">${A}</td>
      <td></td>
    </tr>`}),D=u.length+1+4,f=`<tr><td class="voc-center"></td><td></td><td></td>${Array(D).fill("<td></td>").join("")}</tr>`,m=_.concat(Array(Math.max(0,ft-_.length)).fill(f));return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p3">
      <div class="voc-p3-title">แบบประเมินผลการเรียน</div>
      <table class="voc-eval">
        <colgroup>
          <col style="width:5mm"><col style="width:19.5mm"><col style="width:43.5mm">
          ${u.map(()=>'<col style="width:7mm">').join("")}
          <col style="width:9.5mm"><col style="width:9.5mm"><col style="width:9.5mm">
          <col style="width:12.5mm"><col style="width:12.5mm">
        </colgroup>
        <thead>
          <tr class="voc-h-top">
            <th rowspan="3" class="voc-c-no"><div class="voc-vtext">เลขที่</div></th>
            <th rowspan="3" class="voc-c-id">เลข<br>ประจำตัว</th>
            <th rowspan="3" class="voc-c-name">ชื่อ - สกุล</th>
            <th colspan="${u.length+1}">คะแนนเก็บ (เต็ม ${z})</th>
            <th rowspan="2" class="voc-c-moral"><div class="voc-vtext">คะแนนคุณธรรม${b?`<br>(${n(b)})`:""}</div></th>
            <th rowspan="2" class="voc-c-total"><div class="voc-vtext">รวม</div></th>
            <th rowspan="3" class="voc-c-grade"><div class="voc-vtext">ระดับผล<br>การเรียน</div></th>
            <th rowspan="3" class="voc-c-note"><div class="voc-vtext">หมายเหตุ/<br>การสอบแก้ตัว</div></th>
          </tr>
          <tr class="voc-h-vertical">
            ${u.map(a=>`<th class="voc-c-obj"><div class="voc-vtext">${re(a.assignment_name??"")}</div></th>`).join("")}
            <th class="voc-c-sum80"><div class="voc-vtext">รวม<br>คะแนนเก็บ</div></th>
          </tr>
          <tr class="voc-h-score">
            ${u.map(a=>`<th>${a.max_score??""}</th>`).join("")}<th>${z||""}</th>
            <th>${d||""}</th><th>${C||""}</th>
          </tr>
        </thead>
        <tbody>${m.join("")}</tbody>
      </table>
      <div class="voc-footer-sigs">
        <div>ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${n((o==null?void 0:o.full_name)??"")} )</div>
        <div>ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนก<br><br>( ${n(e)} )</div>
      </div>
    </div>
  </section>`}function me(t){const{students:i}=t,s=[];for(let c=0;c<i.length;c+=ft)s.push(de(t,i.slice(c,c+ft),c+1));return s.join("")}const pe=46,ge=5.3,he=5.45;function fe(t){const i=Math.max(1,Math.ceil((t.content??"").length/pe));return Math.max(he,i*ge)}function ve(t){const{ms:i,teacher:s,courseDoc:c}=t,o=Array.isArray(c==null?void 0:c.voc_objectives)?c.voc_objectives:[],e=Array.isArray(c==null?void 0:c.voc_schedule)?c.voc_schedule:[],l=o.concat(Array.from({length:Math.max(0,10-o.length)},()=>({objective:"",competency:""}))),M=e.concat(Array.from({length:Math.max(0,20-e.length)},()=>({week:"",content:"",note:""}))),v=297,d=30,b=10,y=9.5,u=10,x=8,z=7,C=7,H=x+l.length*z,_=v-d-b-y-u-H-C,D=v-d-y-C,f=[];let m=[],a=0,g=_;for(const w of M){const j=fe(w);m.length&&a+j>g&&(f.push(m),m=[],a=0,g=D),m.push(w),a+=j}f.push(m);const p=`
      <div class="voc-course-title">จุดประสงค์การเรียนรู้และสมรรถนะรายวิชา ${n(i.subject_name??"")}</div>
      <div class="voc-course-code">รหัสวิชา ${n(i.subject_code??"")}</div>
      <table class="voc-objective-table">
        <thead><tr><th>จุดประสงค์การเรียนรู้</th><th>สมรรถนะรายวิชา</th></tr></thead>
        <tbody>${l.map(w=>`<tr><td>${n(w.objective)||"&nbsp;"}</td><td>${n(w.competency)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,r=(w,j)=>`
      <div class="voc-schedule-title">กำหนดการสอน${j?"":" (ต่อ)"}</div>
      <table class="voc-schedule-table">
        <colgroup><col style="width:13%"><col style="width:69%"><col style="width:18%"></colgroup>
        <thead><tr><th>สัปดาห์ที่</th><th>เนื้อหาที่สอน</th><th>หมายเหตุ</th></tr></thead>
        <tbody>${w.map(A=>`<tr><td>${n(A.week)||"&nbsp;"}</td><td>${n(A.content)||"&nbsp;"}</td><td>${n(A.note)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,$=`<div class="voc-sign-bottom">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอนประจำวิชา<br><br>( ${n((s==null?void 0:s.full_name)??"")} )</div>`;return f.map((w,j)=>`
  <section class="voc-page">
    <div class="voc-page-inner voc-p4">
      ${j===0?p:""}
      ${r(w,j===0)}
      ${j===f.length-1?$:""}
    </div>
  </section>`).join("")}function ht(t,i,s=null){const c=s??[St(t),Ct(t),At(t),Mt(t),Ht(t)];return`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8"/>
  <title>${n(i)}</title>
  <style>${jt()}</style>
</head>
<body>
  ${c.join(`
`)}
</body>
</html>`}function ue(t){return`<!DOCTYPE html>
<html lang="th"><head>
<meta charset="UTF-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>${jt()}
body{background:#fff;margin:0;}
@media print{@page{size:A4 portrait;margin:0;}.no-print{display:none!important;}}
</style></head>
<body>${t}</body></html>`}function be(t){var D,f,m;(D=document.getElementById("pp5-viewer"))==null||D.remove();const i=((f=t.ms)==null?void 0:f.subject_group)==="ACDMVOC",s=i?[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>ae(t)},{label:"ไม่มาเรียน/วันที่สอน",fn:()=>ce(t)},{label:"คะแนน",fn:()=>me(t)},{label:"จุดประสงค์/กำหนดการสอน",fn:()=>ve(t)}]:[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>St(t)},{label:"มาตรฐาน/ตัวชี้วัด",fn:()=>Ct(t)},{label:"บันทึกการไม่มาเรียน",fn:()=>At(t)},{label:"คะแนน",fn:()=>Mt(t)},{label:"วันที่สอน",fn:()=>Ht(t)}],c=s.slice(1).map((a,g)=>g+1),o=!!((m=t.cfg)!=null&&m.pp5PreviewEditEnabled),e={},l=document.createElement("div");l.id="pp5-viewer",l.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;background:#374151;";const M=a=>"border:none;border-radius:6px;padding:6px 14px;cursor:pointer;font-family:Sarabun,sans-serif;font-size:13px;font-weight:600;white-space:nowrap;"+(a?"background:#2563eb;color:#fff;":"background:#4b5563;color:#d1d5db;");l.innerHTML=`
    <div style="background:#111827;padding:8px 12px;display:flex;align-items:center;gap:6px;flex-shrink:0;overflow-x:auto;">
      <button id="pp5-v-close" style="${M(!1)}background:#dc2626;color:#fff;">✕ ปิด</button>
      <button id="pp5-v-print" style="${M(!1)}background:#059669;color:#fff;">🖨️ พิมพ์หน้านี้</button>
      <button id="pp5-v-printall" style="${M(!1)}background:#7c3aed;color:#fff;">🖨️ พิมพ์ทั้งหมด</button>
      ${o?`<button id="pp5-v-edit" style="${M(!1)}background:#f59e0b;color:#fff;">✏️ แก้ไขข้อความ</button>`:""}
      <div style="width:1px;height:24px;background:#374151;flex-shrink:0;margin:0 2px;"></div>
      ${s.map((a,g)=>`
        <button class="pp5-vtab" data-i="${g}" style="${M(g===0)}">${a.label}</button>
      `).join("")}
      ${o?'<span id="pp5-v-edit-hint" style="display:none;color:#fbbf24;font-size:12px;margin-left:8px;white-space:nowrap;">กำลังแก้ไข — คลิกข้อความในหน้าเพื่อพิมพ์ทับได้เลย (ไม่กระทบข้อมูลจริงในระบบ)</span>':""}
    </div>
    <div style="flex:1;overflow:auto;display:flex;justify-content:center;align-items:flex-start;padding:20px;">
      <iframe id="pp5-iframe" style="border:none;box-shadow:0 4px 32px rgba(0,0,0,.5);background:#fff;width:210mm;height:297mm;" scrolling="no"></iframe>
    </div>`,document.body.appendChild(l);const v=l.querySelector("#pp5-iframe"),d=[...l.querySelectorAll(".pp5-vtab")],b=l.querySelector("#pp5-v-edit"),y=l.querySelector("#pp5-v-edit-hint");let u=null,x=!1;function z(a){return e[a]??s[a].fn()}function C(){var a;if(!(u==null||s[u].all))try{const g=(a=v.contentDocument)==null?void 0:a.body;g&&(e[u]=g.innerHTML)}catch{}}function H(a){var g;if(x=a&&o&&u!=null&&!s[u].all,b){const p=u!=null&&s[u].all;b.style.background=x?"#16a34a":"#f59e0b",b.textContent=x?"✅ เสร็จแล้ว":"✏️ แก้ไขข้อความ",b.title=p?'กดเพื่อไปหน้าปกแล้วเริ่มแก้ไข (แท็บ "ดูทั้งหมด" แก้ไขตรงๆ ไม่ได้)':"",b.style.opacity=p?"0.7":"1"}y&&(y.style.display=x?"inline":"none");try{const p=(g=v.contentDocument)==null?void 0:g.body;p&&(p.contentEditable=x?"true":"false",p.style.outline=x?"2px dashed #f59e0b":"none",p.style.outlineOffset=x?"-2px":"0")}catch{}}function _(a){C(),u=a,d.forEach((w,j)=>{j===a?(w.style.background="#2563eb",w.style.color="#fff"):(w.style.background="#4b5563",w.style.color="#d1d5db")});const g=s[a];let p,r;g.all?(p=ht(t,"",c.map(z)),r="3000mm"):(p=ue(z(a)),r=(i?[2,3]:[3,4]).includes(a)?"900mm":"297mm"),v.style.height=r;const $=v.contentDocument;$.open(),$.write(p),$.close(),H(!1)}_(0),d.forEach((a,g)=>a.addEventListener("click",()=>_(g))),l.querySelector("#pp5-v-close").addEventListener("click",()=>l.remove()),b==null||b.addEventListener("click",()=>{var a;if((a=s[u])!=null&&a.all){_(1),H(!0);return}H(!x)}),l.querySelector("#pp5-v-print").addEventListener("click",()=>{if(C(),s[u].all){const a=`ปพ5_${t.ms.subject_code??""}_${Z(t.cls.class_name)}`;bt(ht(t,a,c.map(z)),{autoprint:!0});return}v.contentWindow.focus(),v.contentWindow.print()}),l.querySelector("#pp5-v-printall").addEventListener("click",()=>{C();const a=`ปพ5_${t.ms.subject_code??""}_${Z(t.cls.class_name)}`,g=ht(t,a,c.map(z));bt(g,{autoprint:!0})})}async function we(t){dt("กำลังโหลดข้อมูลเอกสาร...","info");try{const i=await te(t);be(i);for(const s of i.docWarnings??[])dt(s,"warning")}catch(i){console.error("[pp5-doc]",i),dt("โหลดเอกสารไม่สำเร็จ: "+(i.message??""),"error")}}function je(t){var s;(s=document.getElementById("pp5-course-modal"))==null||s.remove();const i=document.createElement("div");i.id="pp5-course-modal",i.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-1 text-base">📄 เปิด ปพ.5</h3>
      <p class="text-xs text-gray-400 mb-4">เลือกห้องที่ต้องการดู</p>
      <div class="space-y-2 mb-5">
        ${t.map(c=>`
        <label class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input type="radio" name="pp5-cls" class="w-4 h-4 accent-indigo-600" value="${c.id}" />
          <span class="text-sm text-gray-700">${n(Z(c.class_name))}</span>
        </label>`).join("")}
      </div>
      <div class="flex gap-2">
        <button id="pp5-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="pp5-open-btn" class="flex-1 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700">เปิด</button>
      </div>
    </div>`,document.body.appendChild(i),i.querySelector("#pp5-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#pp5-open-btn").addEventListener("click",async()=>{const c=i.querySelector('input[name="pp5-cls"]:checked');if(!c){dt("กรุณาเลือกห้อง","warning");return}i.remove(),await we(parseInt(c.value))}),i.addEventListener("click",c=>{c.target===i&&i.remove()})}export{we as a,je as o};
