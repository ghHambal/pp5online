import{s as Wn}from"./supabase-BV-W2lsh.js";import{b as tn}from"./browser-JP79f-a9.js";import{p as Gn}from"./promptpay-CIuxvxIA.js";import{o as Ge,c as Rt,b as Yn}from"./storage-D6nkcVz6.js";import{l as Qn,f as Xn}from"./confetti-loader-BAN5Lv-C.js";const ke=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Jn({name:e,award:t,templateUrl:n}){const i=ke(e),o=ke(t);return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>เกียรติบัตร ${i}</title>
    <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'Sarabun', sans-serif; margin: 0; background: #fff; }
      .cert { position: relative; width: 100%; max-width: 1000px; margin: 0 auto; aspect-ratio: 2000 / 1414; background: url('${ke(n)}') center/contain no-repeat; }
      .field-name { position: absolute; left: 8%; right: 8%; top: 41.4%; height: 12.0%; display: flex; align-items: center; justify-content: center; }
      .field-name span { font-family: 'Charmonman', cursive; font-size: 40px; font-weight: 700; color: #1b3a2b; line-height: 1; overflow-wrap: anywhere; }
      .field-award { position: absolute; left: 11%; right: 11%; top: 54.0%; height: 8.5%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
      .field-award span { font-family: 'Charmonman', cursive; font-size: 22px; font-weight: 700; color: #1b3a2b; line-height: 1.3; }
      @media print { body { margin: 0 } }
    </style></head>
    <body>
      <div class="cert">
        <div class="field-name"><span>${i}</span></div>
        <div class="field-award"><span>${o}</span></div>
      </div>
    </body></html>`}function Kn({name:e,award:t,templateUrl:n}){const i=ke(e),o=ke(t);return`<div style="container-type:inline-size;position:relative;width:100%;aspect-ratio:2000/1414;border-radius:10px;overflow:hidden;background:#fff url('${ke(n)}') center/contain no-repeat">
    <div style="position:absolute;left:8%;right:8%;top:41.4%;height:12.0%;display:flex;align-items:center;justify-content:center">
      <span style="font-family:'Charmonman',cursive;font-size:4cqw;font-weight:700;color:#1b3a2b;line-height:1;overflow-wrap:anywhere;text-align:center">${i}</span>
    </div>
    <div style="position:absolute;left:11%;right:11%;top:54.0%;height:8.5%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
      <span style="font-family:'Charmonman',cursive;font-size:2.2cqw;font-weight:700;color:#1b3a2b;line-height:1.3">${o}</span>
    </div>
  </div>`}function Zn({name:e,award:t,templateUrl:n},i){if(!n){i==null||i("ยังไม่ได้อัปโหลดพื้นหลังเกียรติบัตร กรุณาแจ้งแอดมิน");return}Ge(Jn({name:e,award:t,templateUrl:n}))}const Ve={champion:"ได้รับรางวัลชนะเลิศ การแข่งขัน{event}",runner_up:"ได้รับรางวัลรองชนะเลิศอันดับที่ 1 การแข่งขัน{event}",third:"ได้รับรางวัลรองชนะเลิศอันดับที่ 2 การแข่งขัน{event}",mvp:"ได้รับรางวัลผู้เล่นยอดเยี่ยม (MVP) การแข่งขัน{event}",top_scorer:"ได้รับรางวัลดาวซัลโว การแข่งขัน{event}",best_gk:"ได้รับรางวัลผู้รักษาประตูยอดเยี่ยม การแข่งขัน{event}",participant:"เข้าร่วมการแข่งขัน{event}"},ei={champion:"แชมป์",runner_up:"รองแชมป์",third:"อันดับ 3",mvp:"MVP",top_scorer:"ดาวซัลโว",best_gk:"ผู้รักษาประตูยอดเยี่ยม",participant:"ผู้เข้าร่วม (ค่าเริ่มต้น)"},S={MS:{label:"ม.ต้น",accent:"#db2777",base:"#ec4899",soft:"#fdf2f8",border:"#f9d4e6"},HS:{label:"ม.ปลาย",accent:"#16a34a",base:"#22c55e",soft:"#f0fdf4",border:"#bbf0cf"}};function ae(e,t,n){const i=e.replace("#",""),o=parseInt(i.length===3?i.split("").map(d=>d+d).join(""):i,16);return"#"+[o>>16&255,o>>8&255,o&255].map(d=>Math.round(d+(t-d)*n)).map(d=>Math.max(0,Math.min(255,d)).toString(16).padStart(2,"0")).join("")}function nn(){const e=/^#[0-9a-fA-F]{6}$/.test(y("COLOR_MS",""))?y("COLOR_MS"):"#ec4899",t=/^#[0-9a-fA-F]{6}$/.test(y("COLOR_HS",""))?y("COLOR_HS"):"#22c55e";if(r.theme==="dark"){S.MS.base=e,S.MS.accent=ae(e,255,.18),S.MS.soft=ae(e,15,.82),S.MS.border=ae(e,100,.58),S.HS.base=t,S.HS.accent=ae(t,255,.18),S.HS.soft=ae(t,15,.82),S.HS.border=ae(t,100,.58);return}S.MS.base=e,S.MS.accent=ae(e,0,.15),S.MS.soft=ae(e,255,.94),S.MS.border=ae(e,255,.78),S.HS.base=t,S.HS.accent=ae(t,0,.15),S.HS.soft=ae(t,255,.94),S.HS.border=ae(t,255,.78)}const on="azfutsal.standalone.admin@pp5online.internal",ti="8112d7c9-ab32-4e63-9026-ab2367401d4c",ni=[{code:"M1",round:"รอบแรก"},{code:"M2",round:"รอบแรก"},{code:"M3",round:"รอบแรก"},{code:"M4",round:"รอบแรก"},{code:"M5",round:"รอบแรก"},{code:"M6",round:"รอบแรก"},{code:"M7",round:"รอบแก้ตัว",refA:"L_M1",refB:"L_M2"},{code:"M8",round:"รอบแก้ตัว",refA:"L_M3",refB:"L_M4"},{code:"M9",round:"รอบแก้ตัว",refA:"L_M5",refB:"L_M6"},{code:"M10",round:"ก่อนรองฯ",refA:"W_M1",refB:"W_M2"},{code:"M11",round:"ก่อนรองฯ",refA:"W_M3",refB:"W_M4"},{code:"M12",round:"ก่อนรองฯ",refA:"W_M5",refB:"REC_1"},{code:"M13",round:"ก่อนรองฯ",refA:"W_M6",refB:"REC_2"},{code:"M14",round:"รองฯ",refA:"W_M10",refB:"W_M11"},{code:"M15",round:"รองฯ",refA:"W_M12",refB:"W_M13"},{code:"M16",round:"ชิงที่ 3",refA:"L_M14",refB:"L_M15"},{code:"M17",round:"ชิงที่ 1",refA:"W_M14",refB:"W_M15"}],ii=[{code:"M1",round:"รอบแรก"},{code:"M2",round:"รอบแรก"},{code:"M3",round:"รอบแรก"},{code:"M4",round:"รอบแรก"},{code:"M5",round:"รอบแรก"},{code:"M6",round:"รอบแรก"},{code:"M7",round:"รอบแก้ตัว",refA:"L_M1",refB:"L_M2"},{code:"M8",round:"รอบแก้ตัว",refA:"L_M3",refB:"L_M4"},{code:"M9",round:"รอบแก้ตัว",refA:"L_M5",refB:"L_M6"},{code:"M10",round:"รอบ 10 ทีม",refA:"FIRST_ROUND_BYE",refB:"W_M1"},{code:"M11",round:"รอบ 10 ทีม",refA:"W_M2",refB:"W_M3"},{code:"M12",round:"รอบ 10 ทีม",refA:"W_M4",refB:"W_M5"},{code:"M13",round:"รอบ 10 ทีม",refA:"W_M6",refB:"W_M7"},{code:"M14",round:"รอบ 10 ทีม",refA:"W_M8",refB:"W_M9"},{code:"M15",round:"รอบ 6 ทีม",refA:"W_M10",refB:"W_M11"},{code:"M16",round:"รอบ 6 ทีม",refA:"W_M12",refB:"W_M13"},{code:"M17",round:"รอบ 6 ทีม",refA:"W_M14",refB:"LOTTERY_1"},{code:"M18",round:"รองฯ",refA:"W_M15",refB:"W_M16"},{code:"M19",round:"รองฯ",refA:"W_M17",refB:"LOTTERY_2"},{code:"M20",round:"ชิงที่ 1",refA:"W_M18",refB:"W_M19"}],an=[{code:"M1",round:"รอบแรก"},{code:"M2",round:"รอบแรก"},{code:"M3",round:"รอบแรก"},{code:"M4",round:"รอบแรก"},{code:"M5",round:"รอบแรก"},{code:"M6",round:"รอบแรก"},{code:"M7",round:"รอบแรก"},{code:"M8",round:"รอบแรก"},{code:"M9",round:"รอบแก้ตัว",refA:"L_M1",refB:"L_M2"},{code:"M10",round:"รอบแก้ตัว",refA:"L_M3",refB:"L_M4"},{code:"M11",round:"รอบแก้ตัว",refA:"L_M5",refB:"L_M6"},{code:"M12",round:"รอบแก้ตัว",refA:"L_M7",refB:"L_M8"},{code:"M13",round:"รอบ 12 ทีม",pool:"R3"},{code:"M14",round:"รอบ 12 ทีม",pool:"R3"},{code:"M15",round:"รอบ 12 ทีม",pool:"R3"},{code:"M16",round:"รอบ 12 ทีม",pool:"R3"},{code:"M17",round:"รอบ 12 ทีม",pool:"R3"},{code:"M18",round:"รอบ 12 ทีม",pool:"R3"},{code:"M19",round:"รอบ 6 ทีม",pool:"R4"},{code:"M20",round:"รอบ 6 ทีม",pool:"R4"},{code:"M21",round:"รอบ 6 ทีม",pool:"R4"},{code:"M22",round:"รองฯ",refA:"W_M19",refB:"LOTTERY_1"},{code:"M23",round:"รองฯ",refA:"W_M20",refB:"W_M21"},{code:"M24",round:"ชิงที่ 3",refA:"L_M22",refB:"L_M23"},{code:"M25",round:"ชิงที่ 1",refA:"W_M22",refB:"W_M23"}],oi=an,ai=an,re=()=>y("MS_TEAM_FORMAT","12")==="16"?"16":"12",H={get MS(){return re()==="16"?oi:se()?ii:ni},HS:ai},ri={get MS(){return re()==="16"?"M25":se()?"M20":"M17"},HS:"M25"},di={get MS(){return re()==="16"?"M24":se()?null:"M16"},HS:"M24"},Lt={MS:["M7","M8","M9"]},It={},Ct={R3:["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12"],R4:["M13","M14","M15","M16","M17","M18"]},Ye={HS:Ct,MS:Ct},Nt=["M19","M20","M21"],si={HS:Nt,MS:Nt},Me=["M19","M20","M21"];function lt(e,t){if(e==="MS"&&se()){if(t==="LOTTERY_1")return["M10","M11","M12","M13","M14"];if(t==="LOTTERY_2")return["M15","M16","M17"]}return t==="LOTTERY_1"?si[e]||[]:[]}const p=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),W=e=>Number(e||0).toLocaleString("th-TH"),Le=e=>e?new Date(e).toLocaleString("th-TH",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):"";let h=null,ie=null,r={theme:typeof localStorage<"u"&&localStorage.getItem("az_theme")==="light"?"light":"dark",tab:"schedule",scheduleMode:"timeline",scheduleDay:1,bracketLevel:"MS",filterLevel:"ALL",filterTeam:"",filterTime:"",statsLevel:"MS",teamStatusLevel:"MS",teamStatusExpanded:null,adminSection:"general",newTeamName:"",newTeamLevel:"MS",rosterLookupCode:"",rosterLookupResult:null,rosterJersey:"",editingJerseyId:null,editJerseyValue:"",editingTeamName:!1,editTeamNameValue:"",myTeamMatchesOpen:!1,expandedPlayerId:null,teamCodeInput:typeof localStorage<"u"&&localStorage.getItem("az_team_code")||"",teamCodeLookupResult:null,myTeamTab:"roster",adminManageTeamId:null,adminCreatingTeam:!1,refundConfirmSign:null,refundConfirmDone:null,refundPayerSettingsOpen:!1,capLookupCode:"",capLookupResult:null,adminLoginOpen:!1,adminLoginUsername:"",adminLoginError:"",confirmRegOpen:!1,confirmRegTeamId:null,confirmRegQR:null,paymentUploading:!1,teamCreating:!1,rejectPaymentId:null,rejectReasonText:"",pendingConfirm:null,viewProofOpen:!1,viewProofUrl:null,liveDraw:null,certModalOpen:!1,certInput:"",certResults:null,certFullscreenIndex:null,knownStudentCode:null,editMatch:null,eventPicker:null,eventPickerFilter:"",adminTeamLevel:"MS",adminAthleteLevel:"MS",adminAthleteSearch:"",adminPaymentsLevel:"MS",adminRefundLevel:"MS",staffList:null,identity:{session:null,profile:null,isAdmin:!1,scopes:[],student:null,teacher:null},staffScopeEdit:null,manualPoolAssign:null,config:{},teams:[],players:[],matches:{MS:[],HS:[]},matchEvents:[],checkins:[],eventCheckins:[],eventCheckinDay:null,eventCheckinIncompleteLevel:"ALL",staffNames:{},awards:[],payments:[],refunds:[],loading:!0};function y(e,t=""){return r.config[e]??t}function rn(e){return y(`CERT_TEXT_${e}`,Ve[e]||Ve.participant).replaceAll("{event}",y("EVENT_NAME","AZFUTSALCUP2026"))}function jt(e){const t=[...r.players.map(s=>s.students)].find(s=>(s==null?void 0:s.student_code)===e);if(!t)return null;const n=r.players.find(s=>s.student_id===t.id),i=r.teams.find(s=>s.id===n.team_id),o=i.level,a=fn(o),d=[];return a.champion===i.name&&d.push({awardType:"champion",award:"ทีมชนะเลิศ"}),a.runnerUp===i.name&&d.push({awardType:"runner_up",award:"ทีมรองชนะเลิศ"}),(a.third===i.name||a.third2===i.name)&&d.push({awardType:"third",award:a.thirdLabel==="อันดับ 3 ร่วม"?"ทีมอันดับที่ 3 ร่วม":"ทีมอันดับที่ 3"}),a.mvp===t.full_name&&d.push({awardType:"mvp",award:"รางวัล MVP"}),a.topScorer===t.full_name&&d.push({awardType:"top_scorer",award:"รางวัลดาวซัลโว"}),a.bestGK===t.full_name&&d.push({awardType:"best_gk",award:"รางวัลผู้รักษาประตูยอดเยี่ยม"}),d.length||d.push({awardType:"participant",award:"ผู้เข้าร่วมการแข่งขัน"}),d.map(s=>({name:t.full_name,team:i.name,level:o,...s}))}function se(){return re()==="12"&&r.teams.filter(e=>e.level==="MS").length===13}function dn(e,t=null){return!t&&e==="MS"&&se()}const at="20_MATCHES_2026_V1",Bt="MS_M11_HS_M14_DAY2_ALTERNATE_0830_V1";async function li(){if(!r.identity.isAdmin||!se()||y("MS_BRACKET_REVISION")===at||r.matches.MS.filter(c=>Number(String(c.match_code).replace(/^M/,""))>=10).some(c=>c.clock_status!=="not_started"||c.score_a!==null||c.score_b!==null||c.winner_team_id||c.loser_team_id))return!1;const i=[["M10","รอบ 10 ทีม","FIRST_ROUND_BYE","W_M1","16:40","16:45"],["M11","รอบ 10 ทีม","W_M2","W_M3","16:55","17:00"],["M12","รอบ 10 ทีม","W_M4","W_M5","17:10","17:15"],["M13","รอบ 10 ทีม","W_M6","W_M7","17:25","17:30"],["M14","รอบ 10 ทีม","W_M8","W_M9","17:40","17:45"],["M15","รอบ 6 ทีม","W_M10","W_M11","08:25","08:30"],["M16","รอบ 6 ทีม","W_M12","W_M13","08:55","09:00"],["M17","รอบ 6 ทีม","W_M14","LOTTERY_1","09:25","09:30"],["M18","รองฯ","W_M15","W_M16","09:55","10:00"],["M19","รองฯ","W_M17","LOTTERY_2","10:25","10:30"],["M20","ชิงที่ 1","W_M18","W_M19","12:25","12:30"]].map(([c,l,f,u,b,m])=>({level:"MS",match_code:c,round:l,order_no:Number(c.slice(1)),team_a_id:null,team_b_id:null,ref_a:f,ref_b:u,ready_time:b,kickoff_time:m,duration_min:14,break_min:1,score_a:null,score_b:null,yellow_a:0,red_a:0,yellow_b:0,red_b:0,winner_team_id:null,loser_team_id:null,is_locked:!1,clock_status:"not_started",clock_half:null,clock_started_at:null,clock_elapsed_before:0,clock_half_started_elapsed:0,is_penalty_shootout:!1,penalty_score_a:null,penalty_score_b:null})),{error:o}=await h.from("azfutsal_matches").upsert(i,{onConflict:"level,match_code"});if(o)return!1;for(const[c,l,f]of[["M13","16:25","16:30"],["M24","12:10","12:15"],["M25","12:40","12:45"]]){const{error:u}=await h.from("azfutsal_matches").update({ready_time:l,kickoff_time:f}).eq("level","HS").eq("match_code",c).eq("clock_status","not_started");if(u)return!1}const{error:a}=await h.from("azfutsal_config").upsert({key:"MS_BRACKET_REVISION",value:at});if(a)return!1;const[{data:d},{data:s}]=await Promise.all([h.from("azfutsal_matches").select("*").eq("level","MS"),h.from("azfutsal_matches").select("*").eq("level","HS")]);return r.matches={MS:d||r.matches.MS,HS:s||r.matches.HS},r.config.MS_BRACKET_REVISION=at,!0}function ci(e,t){const n=String(e||"").slice(0,10);return n?`${n}T${t}`:""}async function pi(){if(!r.identity.isAdmin||y("TWO_DAY_SCHEDULE_REVISION")===Bt)return!1;const e=mn(y("START_TIME","")),t=ci(y("SECOND_DAY_START_TIME",e),"08:30");if(!t)return!1;const n=14,i=1;let o=new Date(t);const a=Se(2).map(([l,f])=>{const u=o.toTimeString().slice(0,5),b=new Date(o.getTime()-10*6e4).toTimeString().slice(0,5);return o=new Date(o.getTime()+(n+i)*6e4),{level:l,match_code:f,kickoff_time:u,ready_time:b,duration_min:n,break_min:i}}),{error:d}=await h.from("azfutsal_matches").upsert(a,{onConflict:"level,match_code"});if(d)return!1;const s=[{key:"SECOND_DAY_START_TIME",value:t},{key:"MATCH_MIN",value:String(n)},{key:"BREAK_MIN",value:String(i)},{key:"TWO_DAY_SCHEDULE_REVISION",value:Bt}],{error:c}=await h.from("azfutsal_config").upsert(s);return c?!1:(a.forEach(l=>{const f=ee(l.level,l.match_code);f?Object.assign(f,l):r.matches[l.level].push(l)}),s.forEach(l=>{r.config[l.key]=l.value}),!0)}async function sn(){const{data:{session:e}}=await h.auth.getSession();let t=null,n=!1,i=[],o=null,a=null;if(e){const{data:_}=await h.from("profiles").select("id, role, user_code, is_also_admin").eq("id",e.user.id).maybeSingle();if(t=_||null,t){const{data:C}=await h.from("azfutsal_admins").select("id, scopes").eq("profile_id",t.id).maybeSingle();i=(C==null?void 0:C.scopes)||[],n=i.includes("full");const{data:L}=await h.from("students").select("id, student_code, full_name, class_name, main_room").eq("profile_id",t.id).maybeSingle();o=L||null;const{data:j}=await h.from("teachers").select("id, full_name, teacher_code").eq("profile_id",t.id).maybeSingle();a=j||null}}r.identity={session:e,profile:t,isAdmin:n,scopes:i,student:o,teacher:a};const[{data:d},{data:s},{data:c},{data:l},{data:f},{data:u},{data:b},{data:m},{data:w}]=await Promise.all([h.from("azfutsal_config").select("key, value"),h.from("azfutsal_teams").select("id, level, name, captain_student_id, vice_captain_student_id, payment_method, team_code, is_reserve, is_organizer, created_at, captain:students!azfutsal_teams_captain_student_id_fkey(full_name), vice_captain:students!azfutsal_teams_vice_captain_student_id_fkey(full_name)"),h.from("azfutsal_players").select("id, team_id, student_id, jersey_number, photo_url, registered_at, students(id, full_name, student_code, class_name, image_url, photo_url)"),h.from("azfutsal_matches").select("*").eq("level","MS"),h.from("azfutsal_matches").select("*").eq("level","HS"),h.from("azfutsal_awards").select("id, level, award_type, student_id, students(id, full_name)"),h.from("azfutsal_match_events").select("id, level, match_code, team_id, player_id, event_type, minute, is_penalty, created_at").order("created_at"),h.from("azfutsal_checkins").select("id, level, match_code, team_id, player_id, checked_in_by, checked_in_at"),h.from("azfutsal_event_checkins").select("id, day, team_id, player_id, checked_in_by, method, checked_in_at, parent_permission_confirmed, attire_confirmed, confirmed")]);r.config=Object.fromEntries((d||[]).map(_=>[_.key,_.value])),nn(),r.teams=s||[],r.players=c||[],r.matches={MS:l||[],HS:f||[]},await li(),await pi(),r.awards=u||[],r.matchEvents=b||[],r.checkins=m||[],r.eventCheckins=w||[];const z=[...new Set([...r.checkins.map(_=>_.checked_in_by),...r.eventCheckins.map(_=>_.checked_in_by)].filter(Boolean))];if(z.length){const[{data:_},{data:C}]=await Promise.all([h.from("teachers").select("profile_id, full_name").in("profile_id",z),h.from("students").select("profile_id, full_name").in("profile_id",z)]);r.staffNames={},(_||[]).forEach(L=>{r.staffNames[L.profile_id]=L.full_name}),(C||[]).forEach(L=>{r.staffNames[L.profile_id]||(r.staffNames[L.profile_id]=L.full_name)})}else r.staffNames={};const[{data:A,error:E},{data:M,error:v}]=await Promise.all([h.from("azfutsal_payments").select("*").order("created_at",{ascending:!1}),h.from("azfutsal_refunds").select("id, team_id, receipt_no, deposit_amount, operation_fee, yellow_count, yellow_rate, yellow_deduction, red_count, red_rate, red_deduction, refund_amount, deduction_snapshot, logo_url, recipient_signature_url, payment_method, proof_url, confirmed_at, created_at").order("confirmed_at",{ascending:!1})]);E&&g("โหลดข้อมูลชำระเงินไม่สำเร็จ: "+E.message),v&&g("โหลดข้อมูลคืนเงินไม่สำเร็จ: "+v.message),r.payments=A||[],r.refunds=M||[],r.loading=!1}function O(e){var t;return((t=r.teams.find(n=>n.id===e))==null?void 0:t.name)||""}function ee(e,t){return r.matches[e].find(n=>n.match_code===t)}function G(e,t,n=new Set){const i=ee(e,t);if(!i)return{teamA:"",teamB:"",teamAId:null,teamBId:null,winnerId:null,loserId:null};if(n.has(t))return{teamA:"",teamB:"",teamAId:null,teamBId:null,winnerId:null,loserId:null};n.add(t);const o=H[e].find(f=>f.code===t)||{};let a=i.team_a_id,d=i.team_b_id;const s=y(`PAIRING_HIDDEN_${e}_${t}`,"0")==="1";!s&&!a&&o.refA&&(a=Pt(e,o.refA,n)),!s&&!d&&o.refB&&(d=Pt(e,o.refB,n));let c=i.winner_team_id,l=i.loser_team_id;return!c&&a&&d&&(ln(i)&&i.penalty_score_a!==i.penalty_score_b?(c=i.penalty_score_a>i.penalty_score_b?a:d,l=i.penalty_score_a>i.penalty_score_b?d:a):i.score_a!==null&&i.score_b!==null&&i.score_a!==i.score_b&&(c=i.score_a>i.score_b?a:d,l=i.score_a>i.score_b?d:a)),{teamA:O(a),teamB:O(d),teamAId:a,teamBId:d,winnerId:c,loserId:l,match:i}}function Pt(e,t,n){return t?t.startsWith("W_M")?G(e,t.slice(2),n).winnerId:t.startsWith("L_M")?G(e,t.slice(2),n).loserId:t==="FIRST_ROUND_BYE"&&y(`FIRST_ROUND_BYE_${e}`,"")||null:null}function Te(e,t){return t.map(n=>G(e,n).winnerId).filter(Boolean)}function Ae(e,t){return t.map(n=>G(e,n).loserId).filter(Boolean)}function bt(e){return[...new Set([...Te(e,Me),...Ae(e,Me)])]}function fi(e){return Fe(e)&&Me.every(t=>G(e,t).winnerId&&G(e,t).loserId)}function Qe(e){return fi(e)&&["M22","M23"].every(t=>{const n=ee(e,t);return n&&n.clock_status==="not_started"&&n.score_a===null&&n.score_b===null&&!n.winner_team_id&&!n.loser_team_id&&!r.matchEvents.some(i=>i.level===e&&i.match_code===t)&&!r.checkins.some(i=>i.level===e&&i.match_code===t)})}function ct(e,t){return["M22","M23"].includes(t)&&y(`PAIRING_HIDDEN_${e}_${t}`,"0")==="1"}function Dt(e,t,n){const i=[];for(const o of["M22","M23"]){const a=ee(e,o);a&&(a.team_a_id&&!(o===t&&n==="a")&&i.push(a.team_a_id),a.team_b_id&&!(o===t&&n==="b")&&i.push(a.team_b_id))}return i}function Ot(e,t,n,i){const o=[];return H[e].filter(a=>a.pool===t).forEach(a=>{const d=ee(e,a.code);d&&(d.team_a_id&&!(a.code===n&&i==="a")&&o.push(d.team_a_id),d.team_b_id&&!(a.code===n&&i==="b")&&o.push(d.team_b_id))}),o}function We(e,t,n){const i=r.matchEvents.filter(o=>o.level===e&&o.match_code===t&&o.team_id===n);return{goal:i.filter(o=>o.event_type==="goal").length,yellow:i.filter(o=>o.event_type==="yellow").length,red:i.filter(o=>o.event_type==="red").length}}function ln(e){return!!(e!=null&&e.is_penalty_shootout)&&e.penalty_score_a!==null&&e.penalty_score_a!==void 0&&e.penalty_score_b!==null&&e.penalty_score_b!==void 0}function yt(e,t,n){if(!e)return{aWins:!1,bWins:!1};if(e.winner_team_id)return{aWins:!!t&&String(e.winner_team_id)===String(t),bWins:!!n&&String(e.winner_team_id)===String(n)};const i=e.score_a!==null&&e.score_a!==void 0&&e.score_b!==null&&e.score_b!==void 0;return{aWins:i&&Number(e.score_a)>Number(e.score_b),bWins:i&&Number(e.score_b)>Number(e.score_a)}}function vt(e){return ln(e)?`<div style="margin-top:3px;font-size:9.5px;font-weight:800;color:#7c3aed;white-space:nowrap">จุดโทษ ${p(e.penalty_score_a)}-${p(e.penalty_score_b)}</div>`:""}function pt(e){if(!e||!e.clock_status||e.clock_status==="not_started")return null;let t=e.clock_elapsed_before||0;return e.clock_status==="running"&&e.clock_started_at&&(t+=Math.max(0,Math.floor((Date.now()-new Date(e.clock_started_at).getTime())/1e3))),t}function ui(e){const t=pt(e);return t===null?null:Math.floor(t/60)+1}function xi(e,t){const n=e>=t,i=n?e-t:e,o=String(Math.floor(i/60)).padStart(2,"0"),a=String(i%60).padStart(2,"0");return`${n?"+":""}${o}:${a}`}function ht(e,t={}){const n=(e==null?void 0:e.clock_status)||"not_started";if(n==="not_started")return"";const i=Number(y("HALF_DURATION_MINUTES",7)),o=e.clock_half||1,a=n==="running",d=!!t.onDark,s=t.countdown?"countdown":"elapsed",c=o===2?"ครึ่งหลัง":"ครึ่งแรก",l=n==="paused"?`หยุดเวลา · ${c}`:n==="half_break"?"พักครึ่ง":n==="ended"?"หมดเวลา":`กำลังแข่ง · ${c}`,f=t.compact?d?"26px":"13px":"clamp(44px,12vw,64px)";return`<span style="display:inline-flex;align-items:center;justify-content:center;gap:${t.compact?"6px":"2px"};${t.compact?"":"width:100%;box-sizing:border-box;flex-direction:column;padding:10px 14px;background:#111827;border-radius:14px;"}">
    <span class="az-clock-live" data-clock-mode="${s}" data-clock-status="${n}" data-clock-half="${o}" data-clock-started-at="${e.clock_started_at||""}" data-clock-elapsed-before="${e.clock_elapsed_before||0}" data-clock-half-started-elapsed="${e.clock_half_started_elapsed||0}" data-clock-half-minutes="${i}" style="font-variant-numeric:tabular-nums;font-weight:900;font-size:${f};letter-spacing:${t.compact?"0":"1.5px"};line-height:1;color:${d||!t.compact?"#fff":"#111827"}">--:--</span>
    <span style="font-size:${t.compact?d?"12px":"10px":"12px"};font-weight:800;color:${a?"#22c55e":n==="paused"?"#f59e0b":d||!t.compact?"#9ca3af":"#6b7280"}">${l}</span>
  </span>`}function cn(){document.querySelectorAll(".az-clock-live").forEach(e=>{const t=e.dataset.clockStatus,n=e.dataset.clockStartedAt,i=Number(e.dataset.clockElapsedBefore||0),o=Number(e.dataset.clockHalfStartedElapsed||0),a=Number(e.dataset.clockHalfMinutes||7),d=Number(e.dataset.clockHalf||1),s=e.dataset.clockMode||"elapsed";let c=i;t==="running"&&n&&(c+=Math.max(0,Math.floor((Date.now()-new Date(n).getTime())/1e3)));const l=a*60,f=Math.max(0,c-o);if(s==="countdown"){const m=Math.max(0,l-f),w=String(Math.floor(m/60)).padStart(2,"0"),z=String(m%60).padStart(2,"0");e.textContent=`${w}:${z}`;return}const u=(d===2?l:0)+f,b=d===2?l*2:l;e.textContent=xi(u,b)})}if(typeof window<"u"&&!window._azClockTickerStarted){window._azClockTickerStarted=!0,setInterval(cn,1e3);const e=document.createElement("style");e.textContent="@keyframes azLivePulse{0%,100%{opacity:1}50%{opacity:.25}}",document.head.appendChild(e)}function gi(e,t,n){const i=(n==null?void 0:n.clock_status)||"not_started",o=(n==null?void 0:n.clock_half)||1,a="width:100%;padding:14px;border:none;border-radius:11px;color:#fff;font-weight:900;font-size:15px;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.18)",d="width:100%;padding:8px;border:1px solid #64748b;border-radius:9px;background:transparent;color:#cbd5e1;font-weight:700;font-size:11.5px;cursor:pointer";return i==="not_started"?`<button data-act="startMatchClock" data-level="${e}" data-code="${t}" style="${a};background:#16a34a">▶️ เริ่มการแข่งขัน</button>`:i==="running"||i==="paused"?`<div style="width:100%;display:flex;flex-direction:column;gap:7px"><button data-act="${i==="running"?"pauseMatchClock":"resumeMatchClock"}" data-level="${e}" data-code="${t}" style="${a};background:${i==="running"?"#f59e0b":"#16a34a"}">${i==="running"?"⏸ หยุดเวลา":"▶️ เล่นต่อ"}</button><button data-act="${o===1?"endHalfClock":"endMatchClock"}" data-level="${e}" data-code="${t}" style="${d}">⏹ ${o===1?"จบครึ่งแรก":"จบการแข่งขัน"}</button></div>`:i==="half_break"?`<button data-act="startSecondHalfClock" data-level="${e}" data-code="${t}" style="${a};background:#16a34a">▶️ เริ่มครึ่งหลัง</button>`:'<div style="width:100%;text-align:center;font-size:12px;font-weight:700;color:#94a3b8;padding:9px">หมดเวลาการแข่งขันแล้ว</div>'}const pn="az_offline_queue";function ue(){try{return JSON.parse(localStorage.getItem(pn)||"[]")}catch{return[]}}function ye(e){localStorage.setItem(pn,JSON.stringify(e))}function Re(){return"local_"+Date.now()+"_"+Math.random().toString(36).slice(2,9)}function Ie(e,t,n){const i=ee(e,t);i&&Object.assign(i,n);const o={level:e,match_code:t,clock_status:(i==null?void 0:i.clock_status)||n.clock_status||"not_started",clock_half:(i==null?void 0:i.clock_half)??n.clock_half??null,clock_started_at:(i==null?void 0:i.clock_started_at)??n.clock_started_at??null,clock_elapsed_before:(i==null?void 0:i.clock_elapsed_before)??n.clock_elapsed_before??0,clock_half_started_elapsed:(i==null?void 0:i.clock_half_started_elapsed)??n.clock_half_started_elapsed??0};let a=ue().filter(d=>!(d.type==="clockUpdate"&&d.payload.level===e&&d.payload.match_code===t));a.push({localId:Re(),type:"clockUpdate",payload:o}),ye(a),xe()}async function mi(e){if(e.type==="insertEvent"){const{data:t,error:n}=await h.from("azfutsal_match_events").insert(e.payload).select().single();if(n)throw n;const i=r.matchEvents.findIndex(o=>o.id===e.localEventId);i!==-1&&(r.matchEvents[i]=t)}else if(e.type==="deleteEvent"){const{error:t}=await h.from("azfutsal_match_events").delete().eq("id",e.payload.id);if(t)throw t}else if(e.type==="togglePenalty"){const{error:t}=await h.from("azfutsal_match_events").update({is_penalty:e.payload.is_penalty}).eq("id",e.payload.id);if(t)throw t}else if(e.type==="saveMatch"||e.type==="clockUpdate"){const{error:t}=await h.from("azfutsal_matches").upsert(e.payload,{onConflict:"level,match_code"});if(t)throw t}}async function xe(){if(r._azSyncing)return;let e=ue();if(!e.length)return;r._azSyncing=!0,$();let t=0;for(const n of e)try{await mi(n),t++}catch{break}if(r._azSyncing=!1,t>0&&(e=e.slice(t),ye(e),e.length===0)){g("✅ ซิงก์ข้อมูลออฟไลน์ครบแล้ว"),await I();return}$()}typeof window<"u"&&!window._azSyncStarted&&(window._azSyncStarted=!0,setInterval(xe,6e3),window.addEventListener("online",xe));function Ht(){const e=ue().length;return r._azSyncing?'<span style="display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:700;color:#d97706">🔄 กำลังซิงก์...</span>':e>0?`<span style="display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:700;color:#d97706">📡 ค้างซิงก์ ${e} รายการ (ออฟไลน์)</span>`:""}function Pe(e){const t=new Map,n=i=>{i&&(t.has(i)||t.set(i,{id:i,team:O(i),gp:0,w:0,d:0,l:0,gf:0,ga:0,y:0,r:0}))};return r.matches[e].forEach(i=>{const o=G(e,i.match_code);if(!o.teamAId||!o.teamBId||i.score_a===null||i.score_b===null)return;n(o.teamAId),n(o.teamBId);const a=t.get(o.teamAId),d=t.get(o.teamBId);a.gp++,d.gp++,a.gf+=i.score_a,a.ga+=i.score_b,d.gf+=i.score_b,d.ga+=i.score_a,i.score_a>i.score_b?(a.w++,d.l++):i.score_a<i.score_b?(d.w++,a.l++):(a.d++,d.d++)}),r.matchEvents.filter(i=>i.level===e&&i.event_type!=="goal").forEach(i=>{const o=t.get(i.team_id);o&&(i.event_type==="yellow"?o.y++:i.event_type==="red"&&o.r++)}),Array.from(t.values()).map(i=>({...i,gd:i.gf-i.ga})).sort((i,o)=>o.w-i.w||o.gd-i.gd||o.gf-i.gf||i.r-o.r||i.y-o.y||i.team.localeCompare(o.team,"th"))}function bi(e){return r.matchEvents.filter(t=>t.event_type==="goal"&&t.player_id===e).length}function wt(e,t=20){const n=new Map;r.matchEvents.filter(o=>o.event_type==="goal"&&o.level===e).forEach(o=>{n.set(o.player_id,(n.get(o.player_id)||0)+1)});const i=Array.from(n.entries()).map(([o,a])=>{var s;const d=r.players.find(c=>c.id===o);return d?{name:((s=d.students)==null?void 0:s.full_name)||"",team:O(d.team_id),goals:a,studentId:d.student_id,photoUrl:Z(d)}:null}).filter(Boolean).sort((o,a)=>a.goals-o.goals||o.name.localeCompare(a.name,"th"));return Number.isFinite(t)?i.slice(0,t):i}function yi(e){const t=new Map;return r.matchEvents.filter(n=>(n.event_type==="yellow"||n.event_type==="red")&&n.level===e).forEach(n=>{t.has(n.player_id)||t.set(n.player_id,{yellow:0,red:0}),t.get(n.player_id)[n.event_type]++}),Array.from(t.entries()).map(([n,i])=>{var a;const o=r.players.find(d=>d.id===n);return o?{name:((a=o.students)==null?void 0:a.full_name)||"",team:O(o.team_id),yellow:i.yellow,red:i.red,photoUrl:Z(o)}:null}).filter(Boolean).sort((n,i)=>i.red-n.red||i.yellow-n.yellow||n.name.localeCompare(i.name,"th")).slice(0,20)}function Ut(e,t){const n=new Map;return r.matchEvents.filter(i=>i.event_type===t&&i.level===e).forEach(i=>{n.set(i.player_id,(n.get(i.player_id)||0)+1)}),Array.from(n.entries()).map(([i,o])=>{var d;const a=r.players.find(s=>s.id===i);return a?{name:((d=a.students)==null?void 0:d.full_name)||"",team:O(a.team_id),[t]:o,photoUrl:Z(a)}:null}).filter(Boolean).sort((i,o)=>o[t]-i[t]||i.name.localeCompare(o.name,"th"))}function fn(e){const t=G(e,ri[e]),n=e==="MS"&&se(),i=n?G(e,"M18"):G(e,di[e]),o=n?G(e,"M19"):null,a=l=>{var b,m;const f=r.awards.find(w=>w.level===e&&w.award_type===l),u=f?r.players.find(w=>String(w.student_id)===String(f.student_id)):null;return{name:((b=f==null?void 0:f.students)==null?void 0:b.full_name)||((m=u==null?void 0:u.students)==null?void 0:m.full_name)||"",photoUrl:u?Z(u):"",team:u?O(u.team_id):""}},d=a("mvp"),s=a("top_scorer"),c=a("best_gk");return{champion:t.winnerId?O(t.winnerId):"",runnerUp:t.loserId?O(t.loserId):"",third:n?i.loserId?O(i.loserId):"":i.winnerId?O(i.winnerId):"",third2:o!=null&&o.loserId?O(o.loserId):"",thirdLabel:n?"อันดับ 3 ร่วม":"อันดับ 3",consolation:n?"":i.loserId?O(i.loserId):"",mvp:d.name,topScorer:s.name,bestGK:c.name,mvpAward:d,topScorerAward:s,bestGKAward:c}}function rt(e,t,n){if(!(t!=null&&t.name))return`<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;font-size:12.5px"><span style="color:#6b7280">${p(e)}</span><span style="font-weight:700">-</span></div>`;const i=p(t.name.replace(/^(นาย|นางสาว|ด\.ช\.|ด\.ญ\.)\s*/,"").trim().charAt(0)||"?");return`<div style="display:flex;align-items:center;gap:10px;padding:8px;border-radius:11px;background:rgba(255,255,255,.72)">
    ${t.photoUrl?`<img src="${p(t.photoUrl)}" alt="รูป ${p(t.name)}" style="width:46px;height:58px;border-radius:10px;border:2px solid ${n.border};object-fit:cover;flex-shrink:0;box-shadow:0 2px 6px rgba(0,0,0,.14)"/>`:`<div style="width:46px;height:58px;border-radius:10px;border:2px solid ${n.border};background:#fff;display:flex;align-items:center;justify-content:center;color:${n.accent};font-size:18px;font-weight:800;flex-shrink:0">${i}</div>`}
    <div style="flex:1;min-width:0">
      <div style="font-size:11px;color:#6b7280;margin-bottom:2px">${p(e)}</div>
      <div style="font-size:13px;font-weight:800;line-height:1.35;overflow-wrap:anywhere">${p(t.name)}</div>
      ${t.team?`<div style="font-size:10.5px;color:${n.accent};font-weight:700;margin-top:2px">${p(t.team)}</div>`:""}
    </div>
  </div>`}function g(e){let t=document.getElementById("az-toast");t||(t=document.createElement("div"),t.id="az-toast",t.style.cssText="position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:9999;background:#111827;color:#fff;font-size:12.5px;padding:9px 16px;border-radius:10px;box-shadow:0 6px 18px rgba(0,0,0,.2);animation:azToastIn .15s ease",document.body.appendChild(t)),t.textContent=e,t.style.display="block",clearTimeout(t._t),t._t=setTimeout(()=>{t.style.display="none"},1800)}function Ft(e="student-login.html"){const t=new URL(`${e}?next=azfutsal.html`,window.location.href).href;try{if(window.self!==window.top){window.top.location.href=t;return}}catch{}window.location.href=t}function me(e){const t=S[e];return`<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px;background:${t.base};color:#fff">${t.label}</span>`}function De(){return'<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px;background:#fef3c7;color:#b45309">ทีมสำรอง</span>'}function Oe(){return'<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px;background:#e0e7ff;color:#4338ca">ทีมผู้จัด</span>'}function un(){if(!ie)return;ie.dataset.theme=r.theme,document.documentElement.style.colorScheme=r.theme;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=r.theme==="dark"?"#0f172a":"#ec4899")}async function vi(e,t){ie=e,h=t,r.knownStudentCode=(typeof window<"u"?new URLSearchParams(window.location.search).get("studentCode"):null)||null,un(),e.innerHTML='<div style="position:fixed;inset:0;background:#111827;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:13px">กำลังโหลด...</div>',await sn(),$(),wa()}async function I(){await sn(),$()}function $(){const e=r;un(),nn(),ie.innerHTML=`
  <div class="az-futsal-stage" style="position:fixed;inset:0;background:#111827;display:flex;align-items:center;justify-content:center;overflow:hidden">
    <div class="az-futsal-app" style="width:100%;max-width:440px;height:100%;max-height:1000px;background:#fff;position:relative;box-shadow:0 24px 64px rgba(0,0,0,.5);border-radius:20px;overflow:hidden;display:flex;flex-direction:column;color:#111827">
      ${hi()}
      <main class="az-futsal-main" style="flex:1;min-height:0;overflow-y:auto;padding:16px 20px 24px;display:flex;flex-direction:column">
        ${e.tab==="teamStatus"?mo():""}
        ${e.tab==="schedule"?fo():""}
        ${e.tab==="teams"?bo():""}
        ${e.tab==="summary"?yo():""}
        ${e.tab==="myteam"?_o():""}
        ${e.tab==="admin"&&e.identity.isAdmin?Co():""}
        ${e.tab==="staff"&&!e.identity.isAdmin&&(e.identity.scopes||[]).length?xo():""}
      </main>
      ${wi()}
      ${e.certModalOpen?ho():""}
      ${e.editMatch?Jo():""}
      ${e.editMatch&&e.eventPicker?Xo():""}
      ${e.adminLoginOpen?Ro():""}
      ${e.confirmRegOpen?Lo():""}
      ${e.viewProofOpen?Ao():""}
      ${e.rejectPaymentId?ko():""}
      ${e.liveDraw?Ho():""}
      ${e.manualPoolAssign?Ko():""}
      ${e.pendingConfirm?Eo():""}
      ${e.staffScopeEdit?So():""}
      ${e.refundConfirmSign?Mo():""}
      ${e.refundConfirmDone?To():""}
      ${e.refundPayerSettingsOpen?Ea():""}
    </div>
  </div>`,r.identity.isAdmin&&r.adminSection==="staff"&&mt(),r.refundConfirmSign&&ea(),r.refundPayerSettingsOpen&&Zo()}function hi(){const e=r,t=y("EVENT_NAME","AZFUTSALCUP2025"),n=y("INFO_DATE","-"),i=y("INFO_VENUE","-");return`
  <header class="az-theme-header" style="flex-shrink:0;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);border-bottom:1px solid #ececec;padding:16px 20px 14px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
      <div>
        <h1 style="margin:0;font-size:20px;font-weight:800;letter-spacing:-.02em;color:#db2777">${p(t)}</h1>
        <p style="margin:4px 0 0;font-size:12px;color:#6b7280">${p(n)} · ${p(i)}</p>
      </div>
      <div style="display:flex;gap:8px">
        <button data-act="toggleTheme" style="width:38px;height:38px;border-radius:12px;border:1px solid ${e.theme==="dark"?"#475569":"#e5e7eb"};display:flex;align-items:center;justify-content:center;cursor:pointer;background:${e.theme==="dark"?"#1e293b":"#fff"};color:${e.theme==="dark"?"#fbbf24":"#475569"};font-size:18px" aria-label="${e.theme==="dark"?"เปลี่ยนเป็นโหมดสว่าง":"เปลี่ยนเป็นโหมดมืด"}" title="${e.theme==="dark"?"โหมดมืด · กดเพื่อเปลี่ยนเป็นโหมดสว่าง":"โหมดสว่าง · กดเพื่อเปลี่ยนเป็นโหมดมืด"}">${e.theme==="dark"?"☀️":"🌙"}</button>
        <button data-act="account" style="width:38px;height:38px;border-radius:12px;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;background:#f3f4f6;color:#9ca3af" aria-label="บัญชี">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
        <button data-act="admin-gear" style="width:38px;height:38px;border-radius:12px;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;background:${e.identity.isAdmin||(e.identity.scopes||[]).length?"#db2777":"#f3f4f6"};color:${e.identity.isAdmin||(e.identity.scopes||[]).length?"#fff":"#9ca3af"}" aria-label="แอดมิน">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
      </div>
    </div>
  </header>`}function wi(){const e=r,t=(n,i,o)=>`
    <button data-act="tab" data-tab="${n}" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;padding:6px 2px;cursor:pointer;color:${e.tab===n?"#db2777":"#9ca3af"}">
      ${o}<span style="font-size:10.5px;font-weight:${e.tab===n?800:600}">${i}</span>
    </button>`;if(e.tab==="admin"&&e.identity.isAdmin){const n=Nn(e.adminSection).id;return`
    <nav class="az-theme-nav" style="flex-shrink:0;background:#fff;border-top:1px solid #ececec">
      <div style="display:flex;padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
        ${Be.map(i=>`<button data-act="adminGroup" data-v="${i.id}" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;background:none;border:none;padding:6px 2px;cursor:pointer;color:${n===i.id?"#db2777":"#9ca3af"}"><span style="font-size:19px;line-height:1">${i.icon}</span><span style="font-size:10px;font-weight:${n===i.id?800:600}">${i.label}</span></button>`).join("")}
      </div>
    </nav>`}if(e.tab==="staff")return`
    <nav class="az-theme-nav" style="flex-shrink:0;background:#fff;border-top:1px solid #ececec">
      <div style="padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
        <button data-act="adminSignOut" style="width:100%;padding:10px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">ออกจากระบบ</button>
      </div>
    </nav>`;if(e.tab==="myteam"){if(e.identity.isAdmin?!!e.adminManageTeamId:!!(e.identity.student&&(e.teams.find(i=>i.captain_student_id===e.identity.student.id)||e.teamCodeLookupResult&&typeof e.teamCodeLookupResult=="object"))){const i=(o,a,d)=>`
        <button data-act="myTeamTab" data-v="${o}" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;padding:6px 2px;cursor:pointer;color:${e.myTeamTab===o?"#db2777":"#9ca3af"}">
          ${d}<span style="font-size:10.5px;font-weight:${e.myTeamTab===o?800:600}">${a}</span>
        </button>`;return`
      <nav class="az-theme-nav" style="flex-shrink:0;background:#fff;border-top:1px solid #ececec">
        <div style="display:flex;padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
          ${i("roster","ทีม",'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>')}
          ${i("matches","ผลการแข่งขัน",'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>')}
          ${i("finance","การเงิน",'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>')}
        </div>
      </nav>`}return`
    <nav class="az-theme-nav" style="flex-shrink:0;background:#fff;border-top:1px solid #ececec">
      <div style="padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
        <button data-act="tab" data-tab="schedule" style="width:100%;padding:10px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">← กลับหน้าหลัก</button>
      </div>
    </nav>`}return`
  <nav class="az-theme-nav" style="flex-shrink:0;background:#fff;border-top:1px solid #ececec">
    <div style="display:flex;padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
      ${t("teamStatus","สถานะทีม",'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>')}
      ${t("teams","สถิติทีม",'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>')}
      ${t("schedule","ตาราง",'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>')}
      ${t("summary","สรุปผล",'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>')}
    </div>
  </nav>`}function Xe(e){return H[e.level].map(t=>{const n=G(e.level,t.code);return{level:e.level,code:t.code,round:t.round,teamA:n.teamA,teamB:n.teamB,teamAId:n.teamAId,teamBId:n.teamBId,m:n.match}}).filter(t=>t.teamAId===e.id||t.teamBId===e.id)}function le(e){return r.refunds.find(t=>t.team_id===e)||null}function _t(){return y("REFUND_RECEIPT_LOGO_URL","")||new URL("./pp5-form-logo.png",window.location.href).href}function je(e){const t=Number(y("DEPOSIT_AMOUNT",500)),n=Number(y("OPERATION_FEE",100)),i=Number(y("RATE_YELLOW",30)),o=Number(y("RATE_RED",50)),a=new Map(Xe(e).map((b,m)=>[b.code,{...b,index:m}])),d=new Map;r.matchEvents.filter(b=>b.level===e.level&&b.team_id===e.id&&(b.event_type==="yellow"||b.event_type==="red")).forEach(b=>{d.has(b.match_code)||d.set(b.match_code,{yellow_count:0,red_count:0}),d.get(b.match_code)[b.event_type==="yellow"?"yellow_count":"red_count"]+=1});const s=Array.from(d.entries()).map(([b,m])=>{var E;const w=a.get(b),z=G(e.level,b),A=w?w.teamAId===e.id?w.teamB:w.teamA:z.teamAId===e.id?z.teamB:z.teamA;return{match_code:b,round:(w==null?void 0:w.round)||((E=H[e.level].find(M=>M.code===b))==null?void 0:E.round)||"",opponent:A||"ไม่พบข้อมูลคู่แข่งขัน",yellow_count:m.yellow_count,red_count:m.red_count,yellow_deduction:m.yellow_count*i,red_deduction:m.red_count*o,order:(w==null?void 0:w.index)??(Number(String(b).replace(/^M/,""))||999)}}).sort((b,m)=>b.order-m.order).map(({order:b,...m})=>m),c=s.reduce((b,m)=>b+m.yellow_count,0),l=s.reduce((b,m)=>b+m.red_count,0),f=c*i,u=l*o;return{deposit_amount:t,operation_fee:n,yellow_count:c,yellow_rate:i,yellow_deduction:f,red_count:l,red_rate:o,red_deduction:u,refund_amount:Math.max(t-n-f-u,0),deduction_snapshot:s,logo_url:_t()}}function xn(e,t,n){var w,z;const i=Array.isArray(t.deduction_snapshot)?t.deduction_snapshot:[],o=i.length?i.map(A=>`
    <tr>
      <td>${p(A.match_code)}${A.round?` · ${p(A.round)}`:""}<br><span>พบ ${p(A.opponent)}</span></td>
      <td class="num">${Number(A.yellow_count||0)?`${Number(A.yellow_count)} × ${W(t.yellow_rate)}`:"-"}</td>
      <td class="num">${Number(A.red_count||0)?`${Number(A.red_count)} × ${W(t.red_rate)}`:"-"}</td>
      <td class="num">${W(Number(A.yellow_deduction||0)+Number(A.red_deduction||0))}</td>
    </tr>`).join(""):'<tr><td colspan="4" class="empty">ไม่มีรายการหักจากใบเหลืองหรือใบแดง</td></tr>',a=n?`<div><b>สถานะ</b> <span style="color:#b45309;font-weight:800">ตัวอย่าง (ยังไม่ยืนยัน)</span></div><div><b>ข้อมูล ณ เวลา</b> ${p(new Date().toLocaleString("th-TH",{timeZone:"Asia/Bangkok",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}))}</div>`:`<div><b>เลขที่ใบเสร็จ</b> ${p(t.receipt_no)}</div><div><b>วันที่ยืนยันคืนเงิน</b> ${p(new Date(t.confirmed_at).toLocaleString("th-TH",{timeZone:"Asia/Bangkok",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}))}</div>`,d=n?"ตัวอย่างใบเสร็จรับเงินคืนค่าประกันทีม":"ใบเสร็จรับเงินคืนค่าประกันทีม",s=n?"นี่คือตัวอย่างคำนวณจากข้อมูลปัจจุบัน (ใบเหลือง/ใบแดงล่าสุด) ยังไม่ใช่เอกสารทางการ ยอดเงินอาจเปลี่ยนได้ถ้ามีการแก้ไขผลการแข่งขันเพิ่มเติมก่อนผู้จัดกดยืนยันจริง":"เอกสารนี้ออกจากระบบหลังผู้จัดการแข่งขันยืนยันการคืนเงินแล้ว รายละเอียดและยอดเงินเป็นข้อมูลที่บันทึก ณ เวลายืนยัน",c=y("REFUND_PAYER_NAME",""),l=y("REFUND_PAYER_TITLE",""),f=y("REFUND_PAYER_SIGNATURE_URL",""),u=((w=e.captain)==null?void 0:w.full_name)||"",b=t.recipient_signature_url||"",m=t.payment_method==="transfer"?"โอนเงิน":t.payment_method==="cash"?"เงินสด":"";return`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${p(n?`ตัวอย่างใบเสร็จ · ${e.name}`:t.receipt_no)}</title>
  <style>
    @page{size:A4;margin:16mm}*{box-sizing:border-box}body{font-family:Tahoma,"Noto Sans Thai",sans-serif;color:#111827;margin:0;font-size:13px}.sheet{max-width:760px;margin:auto;border:1px solid #d1d5db;padding:28px;position:relative}${n?'.sheet::before{content:"ตัวอย่าง";position:absolute;top:40%;left:0;right:0;text-align:center;font-size:80px;font-weight:900;color:rgba(217,119,6,.14);transform:rotate(-18deg);pointer-events:none}':""}.head{display:flex;align-items:center;gap:18px;border-bottom:2px solid #111827;padding-bottom:16px}.logo{width:82px;height:82px;object-fit:contain}.head h1{font-size:22px;margin:0 0 4px}.muted{color:#6b7280}.meta{display:grid;grid-template-columns:1fr 1fr;gap:7px 22px;margin:18px 0}.meta b{display:inline-block;min-width:105px}table{width:100%;border-collapse:collapse;margin:12px 0}th,td{border:1px solid #d1d5db;padding:9px;vertical-align:top}th{background:#f3f4f6;text-align:left}.num{text-align:right;white-space:nowrap}td span{color:#4b5563;font-size:12px}.empty{text-align:center;color:#6b7280}.summary{margin-left:auto;width:340px}.summary div{display:flex;justify-content:space-between;padding:5px 0}.summary .total{border-top:2px solid #111827;margin-top:5px;padding-top:10px;font-size:17px;font-weight:800}.note{margin-top:22px;padding:10px 12px;background:${n?"#fffbeb":"#f9fafb"};color:${n?"#92400e":"#4b5563"};font-size:11.5px}.signatures{display:flex;justify-content:space-around;gap:30px;margin-top:44px}.sig-box{flex:1;max-width:230px;text-align:center}.sig-img-wrap{height:60px;display:flex;align-items:flex-end;justify-content:center}.sig-img-wrap img{max-height:60px;max-width:100%;object-fit:contain}.sig-rule{border-top:1px solid #111827;margin-top:4px;padding-top:6px}.sig-label{font-weight:700}.sig-name{color:#4b5563;margin-top:2px;font-size:12px}@media print{.sheet{border:0;padding:0}}
  </style></head><body><main class="sheet">
    <header class="head"><img class="logo" src="${p(t.logo_url||_t())}" alt="โลโก้โรงเรียน"><div><h1>${p(d)}</h1><div>${p(y("EVENT_NAME","AZFUTSALCUP"))}</div><div class="muted">${p(y("INFO_VENUE",""))}</div></div></header>
    <section class="meta">${a}<div><b>ทีม</b> ${p(e.name)}</div><div><b>ระดับ</b> ${p(((z=S[e.level])==null?void 0:z.label)||e.level)}</div>${m?`<div><b>วิธีคืนเงิน</b> ${p(m)}</div>`:""}</section>
    <div><b>รายละเอียดการหักจากใบเหลืองและใบแดง</b> <span class="muted">(แสดงเฉพาะนัดและคู่แข่งขัน ไม่ระบุผู้ได้รับใบ)</span></div>
    <table><thead><tr><th>นัดที่แข่งขัน / คู่แข่งขัน</th><th class="num">ใบเหลือง (ใบ × บาท)</th><th class="num">ใบแดง (ใบ × บาท)</th><th class="num">หัก (บาท)</th></tr></thead><tbody>${o}</tbody></table>
    <section class="summary">
      <div><span>ค่าประกันที่รับไว้</span><b>${W(t.deposit_amount)} บาท</b></div>
      <div><span>หักค่าดำเนินการ</span><b>−${W(t.operation_fee)} บาท</b></div>
      <div><span>หักใบเหลือง ${Number(t.yellow_count)} ใบ</span><b>−${W(t.yellow_deduction)} บาท</b></div>
      <div><span>หักใบแดง ${Number(t.red_count)} ใบ</span><b>−${W(t.red_deduction)} บาท</b></div>
      <div class="total"><span>ยอดเงินคืนสุทธิ</span><span>${W(t.refund_amount)} บาท</span></div>
    </section>
    <div class="note">${p(s)}</div>
    <section class="signatures">
      <div class="sig-box">
        <div class="sig-img-wrap">${f?`<img src="${p(f)}" alt="ลายเซ็นผู้จ่ายเงิน">`:""}</div>
        <div class="sig-rule">
          <div class="sig-label">ผู้จ่ายเงิน</div>
          ${c?`<div class="sig-name">(${p(c)}${l?" "+p(l):""})</div>`:""}
        </div>
      </div>
      <div class="sig-box">
        <div class="sig-img-wrap">${b?`<img src="${p(b)}" alt="ลายเซ็นผู้รับเงิน">`:""}</div>
        <div class="sig-rule">
          <div class="sig-label">ผู้รับเงิน</div>
          ${u?`<div class="sig-name">(${p(u)})</div>`:""}
        </div>
      </div>
    </section>
  </main></body></html>`}function qt(e){const t=r.teams.find(i=>i.id===e),n=le(e);if(!t||!n){g("ยังไม่มีใบเสร็จรับเงินคืนของทีมนี้");return}Ge(xn(t,n,!1))}function _i(e){const t=r.teams.find(i=>i.id===e);if(!t)return;const n=je(t);Ge(xn(t,n,!0))}function $i(e){const t=new Map,n=new Map;r.matchEvents.filter(d=>d.level===e.level&&d.team_id===e.id).forEach(d=>{d.event_type==="goal"?t.set(d.player_id,(t.get(d.player_id)||0)+1):(d.event_type==="yellow"||d.event_type==="red")&&(n.has(d.player_id)||n.set(d.player_id,{yellow:[],red:[]}),n.get(d.player_id)[d.event_type].push(d.match_code))});const i=d=>{var s,c;return((c=(s=r.players.find(l=>l.id===d))==null?void 0:s.students)==null?void 0:c.full_name)||""},o=Array.from(t.entries()).map(([d,s])=>({name:i(d),goals:s})).sort((d,s)=>s.goals-d.goals||d.name.localeCompare(s.name,"th")),a=Array.from(n.entries()).map(([d,s])=>({name:i(d),yellow:s.yellow,red:s.red})).sort((d,s)=>s.yellow.length+s.red.length-(d.yellow.length+d.red.length)||d.name.localeCompare(s.name,"th"));return{goalList:o,cardList:a}}function zi(e){const t=Xe(e),n=new Map(t.map((o,a)=>[o.code,{...o,order:a}])),i=new Map;return r.matchEvents.filter(o=>o.level===e.level&&o.team_id===e.id).forEach(o=>{i.has(o.player_id)||i.set(o.player_id,{goals:0,yellow:0,red:0,events:[]});const a=i.get(o.player_id);o.event_type==="goal"?a.goals++:o.event_type==="yellow"?a.yellow++:o.event_type==="red"&&a.red++;const d=n.get(o.match_code),s=d?d.teamAId===e.id?d.teamB:d.teamA:"";a.events.push({type:o.event_type,round:(d==null?void 0:d.round)||"",opponent:s,code:o.match_code,order:(d==null?void 0:d.order)??999,minute:o.minute,isPenalty:!!o.is_penalty})}),i.forEach(o=>o.events.sort((a,d)=>a.order-d.order||(a.minute??0)-(d.minute??0))),i}function ki(e){const t=e.checked_in_by?r.staffNames[e.checked_in_by]||"เจ้าหน้าที่":"",n=e.checked_in_at?new Date(e.checked_in_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}):"";return`<span style="display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:800;color:#16a34a;border:1.5px dashed #16a34a;border-radius:6px;padding:2px 7px;transform:rotate(-2deg);white-space:nowrap">✅ รายงานตัวแล้ว${t?` · รับโดย ${p(t)}`:""}${n?` · ${n}`:""}</span>`}function Si(e,t,n){const i=r.players.filter(c=>c.team_id===e.id);if(!i.length)return"";const o=r.checkins.filter(c=>c.level===t&&c.match_code===n&&c.team_id===e.id);if(!o.length)return'<div style="margin-top:6px;font-size:11px;color:#9ca3af">ยังไม่มีใครในทีมรายงานตัวสำหรับนัดนี้</div>';const a=new Set(o.map(c=>c.player_id)),d=i.filter(c=>a.has(c.id)).map(c=>{var l;return((l=c.students)==null?void 0:l.full_name)||""}).filter(Boolean),s=[...o].sort((c,l)=>new Date(l.checked_in_at)-new Date(c.checked_in_at))[0];return`<div style="margin-top:6px">${ki(s)}<div style="margin-top:4px;font-size:11px;color:#6b7280">รายงานตัวแล้ว: ${p(d.join(", "))} (${d.length}/${i.length} คน)</div></div>`}function Ei(e,t){const n=G(e,t),i=n.teamAId?r.teams.find(d=>d.id===n.teamAId):null,o=n.teamBId?r.teams.find(d=>d.id===n.teamBId):null,a=(d,s)=>{if(!d)return'<div style="flex:1;text-align:center;color:#9ca3af;padding:60px 0;font-size:15px">รอผลรอบก่อน</div>';const c=r.players.filter(u=>u.team_id===s),l=new Set(r.checkins.filter(u=>u.level===e&&u.match_code===t&&u.team_id===s).map(u=>u.player_id)),f=c.filter(u=>l.has(u.id)).length;return`
    <div style="flex:1;min-width:0">
      <div style="text-align:center;font-size:22px;font-weight:800;margin-bottom:4px">${p(d.name)}</div>
      <div style="text-align:center;font-size:14px;color:#6b7280;margin-bottom:16px;font-weight:700">รายงานตัวแล้ว ${f}/${c.length} คน</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${c.map(u=>{var m;const b=l.has(u.id);return`
          <div style="display:flex;align-items:center;gap:14px;padding:10px 14px;border-radius:14px;background:${b?"#dcfce7":"#f9fafb"};border:2px solid ${b?"#16a34a":"#e5e7eb"}">
            <div style="width:52px;height:66px;border-radius:10px;overflow:hidden;background:#e5e7eb;flex-shrink:0;border:1px solid #d1d5db">
              ${Z(u)?`<img src="${p(Z(u))}" style="width:100%;height:100%;object-fit:cover"/>`:""}
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:17px;font-weight:800;color:#111827">${p(((m=u.students)==null?void 0:m.full_name)||"")}</div>
              <div style="font-size:13px;color:#6b7280">เบอร์เสื้อ ${u.jersey_number??"-"}</div>
            </div>
            ${b?'<div style="flex-shrink:0;font-size:28px">✅</div>':'<div style="flex-shrink:0;font-size:13px;color:#9ca3af;font-weight:700">รอสแกน</div>'}
          </div>`}).join("")}
      </div>
    </div>`};return`
  <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:24px">
    ${me(e)}
    <span style="font-size:18px;font-weight:800">${p(n.round)} · ${p(t)}</span>
  </div>
  <div style="display:flex;gap:32px;max-width:1100px;margin:0 auto">
    ${a(i,n.teamAId)}
    <div style="width:2px;background:#e5e7eb"></div>
    ${a(o,n.teamBId)}
  </div>`}function Mi(e,t){var a;(a=document.getElementById("az-live-display-overlay"))==null||a.remove();const n=document.createElement("div");n.id="az-live-display-overlay",n.style.cssText="position:fixed;inset:0;z-index:9999;background:#fff;overflow-y:auto;padding:24px;font-family:Sarabun,Arial,sans-serif",n.innerHTML=`
    <button id="az-live-display-close" style="position:fixed;top:16px;right:16px;z-index:10;padding:10px 16px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">✕ ปิด</button>
    <div id="az-live-display-body" style="padding-top:8px"></div>`,document.body.appendChild(n);const i=()=>{const d=document.getElementById("az-live-display-body");d&&(d.innerHTML=Ei(e,t))};i();const o=setInterval(async()=>{await I(),i()},4e3);n.querySelector("#az-live-display-close").onclick=()=>{clearInterval(o),n.remove()}}const Ti=`
@media print{body>*:not(#az-print-area){display:none!important}.print-actions{display:none!important}#az-print-area{position:static!important;padding:0!important}}
#az-print-area{position:fixed;inset:0;z-index:9999;background:#fff;color:#111827;overflow:auto;padding:24px;font-family:Sarabun,Arial,sans-serif}
.print-actions{position:sticky;top:0;background:#fff;padding-bottom:12px;text-align:right}
.print-actions button{padding:8px 14px;border-radius:10px;border:1px solid #d1d5db;background:#fff;cursor:pointer;font-size:13px;margin-left:8px}
#az-print-confirm{background:#111827;color:#fff;border:none}
.print-title{text-align:center;margin:2px 0 8px}
.print-title h2{margin:0;font-size:18px}
.print-title p{margin:2px 0 0;font-size:12.5px}
.print-table{width:100%;border-collapse:collapse;margin-bottom:6px}
.print-table th,.print-table td{border:1px solid #111827;padding:5px 6px;font-size:11.5px;text-align:center}
.print-table th{background:#f3f4f6}
.print-grid{display:grid;gap:16px}
.print-photo{width:32px;height:40px;border:1px solid #9ca3af;border-radius:8px;overflow:hidden;background:#e5e7eb;display:flex;align-items:center;justify-content:center;margin:0 auto;flex:none;box-shadow:0 1px 3px rgba(0,0,0,.25)}
.print-photo img{width:100%;height:100%;object-fit:cover}
@media print{body{width:210mm}}
.print-table-checkin th,.print-table-checkin td{padding:5px 8px;font-size:11.5px}
.print-table-checkin td.print-stamp-cell{min-width:90px}
.print-photo-lg{width:36px;height:46px}
`;function gn(e,t={}){var o;(o=document.getElementById("az-print-area"))==null||o.remove();const n=document.createElement("div");n.id="az-print-area";const i=t.landscape?"@media print{@page{size:A4 landscape}body{width:297mm}}":"";n.innerHTML=`<style>${Ti}${i}</style>
    <div class="print-actions"><button id="az-print-confirm">🖨️ สั่งพิมพ์ / บันทึก PDF</button><button id="az-print-close">ปิด</button></div>
    ${e}`,document.body.appendChild(n),n.querySelector("#az-print-confirm").onclick=()=>window.print(),n.querySelector("#az-print-close").onclick=()=>n.remove()}function Ai(e,t){const n=S[e],i=G(e,t),o=H[e].find(d=>d.code===t)||{},a=d=>{const s=r.players.filter(c=>c.team_id===d);return s.length?`<table class="print-table" style="table-layout:fixed">
      <colgroup><col style="width:18px"><col style="width:170px"><col style="width:130px"><col style="width:50px"><col style="width:50px"></colgroup>
      <thead><tr><th>#</th><th style="text-align:left">นักกีฬา</th><th>ประตู<br><span style="font-weight:400;font-size:8px">(นาที เช่น 5, 12P)</span></th><th>🟨<br><span style="font-weight:400;font-size:8px">(นาที)</span></th><th>🟥<br><span style="font-weight:400;font-size:8px">(นาที)</span></th></tr></thead><tbody>
      ${s.map((c,l)=>{var u;const f=Z(c);return`<tr><td>${l+1}</td><td style="text-align:left;vertical-align:middle"><div style="display:flex;align-items:center;gap:6px"><div class="print-photo">${f?`<img src="${p(f)}">`:""}</div><div style="min-width:0;flex:1;overflow:hidden"><div style="font-weight:700;font-size:11px;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p(((u=c.students)==null?void 0:u.full_name)||"")}</div><div style="font-size:9px;color:#374151;white-space:nowrap">เบอร์ ${c.jersey_number??"-"}</div></div></div></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`}).join("")}
    </tbody></table>`:'<div style="font-size:12px;color:#6b7280">ยังไม่มีรายชื่อนักกีฬา</div>'};gn(`
    <div class="print-title">
      <h2>${p(y("EVENT_NAME","AZFUTSALCUP2026"))} · แบบฟอร์มบันทึกผลการแข่งขัน (สำรองออฟไลน์)</h2>
      <div style="display:inline-block;margin-top:4px;padding:3px 18px;border:2px solid #111827;border-radius:8px;font-size:19px;font-weight:800">นัด ${p(t)}</div>
      <p style="margin-top:5px">${n.label} · รอบ ${p(o.round||"")}</p>
    </div>
    <div style="display:flex;gap:24px;margin-bottom:14px;font-size:13px">
      <div>ทีม A: <b>${p(i.teamA||".......................")}</b></div>
      <div>ทีม B: <b>${p(i.teamB||".......................")}</b></div>
    </div>
    <div style="display:flex;gap:24px;margin-bottom:16px;font-size:13px">
      <div>เวลารายงานตัว: ______________</div>
      <div>เวลาแข่งจริง: ______________</div>
      <div>สกอร์สุดท้าย: _______ − _______</div>
      <div>ผลจุดโทษ (ถ้ามี): _______ − _______</div>
    </div>
    <div class="print-grid" style="grid-template-columns:1fr 1fr">
      <div><h3>ทีม A: ${p(i.teamA||"")}</h3>${a(i.teamAId)}</div>
      <div><h3>ทีม B: ${p(i.teamB||"")}</h3>${a(i.teamBId)}</div>
    </div>
    <p style="margin-top:8px;font-size:11px;color:#6b7280">*เขียนนาทีที่ทำประตู/ได้ใบเหลือง-แดงลงในช่องเลย (เขียน "P" ต่อท้ายนาทีถ้าประตูนั้นเป็นจุดโทษ เช่น "12P") จะได้กรอกกลับเข้าระบบภายหลังตรงกับที่เกิดขึ้นจริง ไม่ต้องเดา · รหัสนัด "${p(t)}" ด้านบนใช้หาแมตช์ในระบบตอนกรอกกลับได้เร็วขึ้น</p>
  `)}function Ri(e){return e==="HS"?6:5}function Li(e){const t=Math.random()<.5?"#1d4ed8":"#dc2626",n=Math.round(Math.random()*70-25),i=Math.round(Math.random()*10-5),o=Math.round(Math.random()*6-3),a=e!=null&&e.checked_in_by?r.staffNames[e.checked_in_by]||"เจ้าหน้าที่":"",d=e!=null&&e.checked_in_at?new Date(e.checked_in_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}):"";return`<div style="display:inline-block;border:2px solid ${t};color:${t};border-radius:8px;padding:3px 6px;font-size:8.5px;font-weight:800;line-height:1.35;transform:rotate(${n}deg) translate(${i}px,${o}px);opacity:.82;white-space:nowrap;text-align:center">✓ รายงานตัว${a?`<br><span style="font-size:7.5px;font-weight:700">${p(a)}</span>`:""}${d?`<br><span style="font-size:7.5px;font-weight:600">${p(d)} น.</span>`:""}</div>`}function Ii(e){const t=S[e.level],n=r.players.filter(d=>d.team_id===e.id),i=Ri(e.level),o=Xe(e),a=Array.from({length:i},(d,s)=>o[s]?{code:o[s].code,round:o[s].round}:null);gn(`
    <div class="print-title"><h2>${p(y("EVENT_NAME","AZFUTSALCUP2026"))} · แบบฟอร์มรายงานตัวนักกีฬา</h2>
      <p>${t.label} · ${p(e.name)} · รหัสทีม ${p(e.team_code||"-")}</p></div>
    <table class="print-table print-table-checkin" style="table-layout:fixed">
      <colgroup>
        <col style="width:26px">
        <col style="width:242px">
        ${a.map(()=>"<col>").join("")}
        <col style="width:100px">
      </colgroup>
      <thead><tr><th>#</th><th style="text-align:left">นักกีฬา</th>${a.map(d=>`<th>${d?p(d.round):"รอบถัดไป"}<br><span style="font-weight:400;font-size:9px">${d?p(d.code):"(รอผลรอบก่อน)"}</span></th>`).join("")}<th>หมายเหตุ</th></tr></thead>
      <tbody>
        ${n.length?n.map((d,s)=>{var l;const c=Z(d);return`<tr>
            <td>${s+1}</td>
            <td style="text-align:left;vertical-align:middle">
              <div style="display:flex;align-items:center;gap:8px">
                <div class="print-photo print-photo-lg">${c?`<img src="${p(c)}">`:""}</div>
                <div style="min-width:0;flex:1;overflow:hidden">
                  <div style="font-weight:700;font-size:12.5px;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p(((l=d.students)==null?void 0:l.full_name)||"")}</div>
                  <div style="font-size:10px;color:#374151;margin-top:1px;white-space:nowrap">เบอร์เสื้อ ${d.jersey_number??"-"}</div>
                </div>
              </div>
            </td>
            ${a.map(f=>{const u=f&&r.checkins.find(b=>b.level===e.level&&b.match_code===f.code&&b.player_id===d.id);return`<td class="print-stamp-cell">${u?Li(u):"&nbsp;"}</td>`}).join("")}
            <td>&nbsp;</td>
          </tr>`}).join(""):`<tr><td colspan="${3+a.length}">ยังไม่มีรายชื่อนักกีฬา</td></tr>`}
      </tbody>
    </table>
    <p style="margin-top:4px;font-size:10px;color:#6b7280">*ประทับตรา/เซ็นชื่อในช่องนัดที่ตรงกับที่นักกีฬาคนนั้นมารายงานตัวจริง จำนวนคอลัมน์ (${i} นัด) คือจำนวนนัดสูงสุดที่ทีมนี้จะได้เล่นหากเข้าถึงรอบชิงชนะเลิศ · แต่ละทีมมีสมาชิกสูงสุด 10 คน</p>
  `,{landscape:!0})}async function $t(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const n=document.createElement("script");n.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",n.onload=()=>e(window.Html5Qrcode),n.onerror=()=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(n)})}async function Ci(){if(window.L)return window.L;if(!document.getElementById("az-leaflet-css")){const e=document.createElement("link");e.id="az-leaflet-css",e.rel="stylesheet",e.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",document.head.appendChild(e)}return new Promise((e,t)=>{const n=document.createElement("script");n.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",n.onload=()=>e(window.L),n.onerror=()=>t(new Error("โหลดแผนที่ไม่สำเร็จ")),document.head.appendChild(n)})}function K(e="success"){try{const t=new(window.AudioContext||window.webkitAudioContext),n=(i,o,a,d,s)=>{const c=t.createOscillator(),l=t.createGain();c.connect(l),l.connect(t.destination),c.type=a;const f=t.currentTime+d;c.frequency.setValueAtTime(i,f),l.gain.setValueAtTime(s,f),l.gain.exponentialRampToValueAtTime(.01,f+o),c.start(f),c.stop(f+o)};e==="success"?n(880,.12,"sine",0,.08):e==="duplicate"?(n(600,.09,"square",0,.09),n(600,.09,"square",.14,.09)):n(150,.3,"sawtooth",0,.12)}catch{}}function Ni(e,t){var A;(A=document.getElementById("az-checkin-overlay"))==null||A.remove();const n=G(e,t);if(!n.teamAId||!n.teamBId){g("ต้องระบุทีมทั้งสองฝั่งก่อนสแกนรายงานตัว");return}const i=r.players.filter(E=>E.team_id===n.teamAId).map(E=>({...E,teamId:n.teamAId})),o=r.players.filter(E=>E.team_id===n.teamBId).map(E=>({...E,teamId:n.teamBId})),a=[...i,...o],d=document.createElement("div");d.id="az-checkin-overlay",d.style.cssText="position:fixed;inset:0;z-index:9999;background:#0b0f1a;display:flex;flex-direction:column",d.innerHTML=`
    <style>
      @keyframes azCiLaser { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .az-ci-laser { animation: azCiLaser 2s ease-in-out infinite; }
      .az-ci-flash-ok { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .az-ci-flash-err { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div style="flex:1;min-width:0">
        <div style="color:#f1f5f9;font-weight:800;font-size:14px">📷 สแกน QR รายงานตัว</div>
        <div style="color:#94a3b8;font-size:11.5px;overflow-wrap:break-word">${p(t)} · ${p(n.teamA)} vs ${p(n.teamB)}</div>
      </div>
      <button id="az-ci-close" style="color:#94a3b8;background:none;border:none;font-size:26px;line-height:1;cursor:pointer">×</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;max-width:420px;margin:0 auto;width:100%">
      <div id="az-ci-camwrap" style="position:relative;width:100%;aspect-ratio:1;background:#000;border-radius:16px;overflow:hidden">
        <div id="az-ci-reader" style="width:100%;height:100%"></div>
        <div style="position:absolute;inset:0;pointer-events:none;display:flex;align-items:center;justify-content:center">
          <div style="position:relative;width:190px;height:190px;border-radius:16px;border:1px solid rgba(255,255,255,.2);box-shadow:0 0 0 9999px rgba(0,0,0,.4);overflow:hidden">
            <div class="az-ci-laser" style="position:absolute;left:0;width:100%;height:2px;background:#38bdf8"></div>
          </div>
        </div>
      </div>
      <div id="az-ci-feedback" style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:12px;text-align:center;font-size:12px;color:#94a3b8">ยกกล้องส่อง QR ของนักกีฬาเพื่อรายงานตัว</div>
      <div style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:12px">
        <div style="font-size:10.5px;color:#94a3b8;font-weight:800;margin-bottom:8px">ไม่มี QR? กรอกรหัสนักเรียนแทนได้</div>
        <div style="display:flex;gap:8px">
          <input id="az-ci-manual-code" placeholder="รหัสนักเรียน" autocomplete="off" style="flex:1;min-width:0;border:1px solid #334155;border-radius:9px;padding:9px 10px;font-size:13px;background:#0b0f1a;color:#e2e8f0"/>
          <button id="az-ci-manual-submit" style="flex-shrink:0;padding:9px 16px;border-radius:9px;border:none;background:#0ea5e9;color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">เพิ่ม</button>
        </div>
      </div>
      <div style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:12px">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px">
          <span style="font-size:10.5px;color:#94a3b8;font-weight:800;text-transform:uppercase;letter-spacing:.05em">รายงานตัวแล้ว</span>
          <span id="az-ci-count" style="font-size:10.5px;color:#38bdf8;font-weight:800">0 / ${a.length} คน</span>
        </div>
        <div id="az-ci-list" style="display:flex;flex-direction:column;gap:6px;max-height:260px;overflow-y:auto"></div>
      </div>
    </div>`,document.body.appendChild(d);const s=new Set(r.checkins.filter(E=>E.level===e&&E.match_code===t).map(E=>E.player_id));let c=null,l=null,f=0;const u=()=>{const E=d.querySelector("#az-ci-list");d.querySelector("#az-ci-count").textContent=`${s.size} / ${a.length} คน`;const M=a.filter(v=>s.has(v.id));E.innerHTML=M.length?M.map(v=>{var _;return`<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.06)"><span style="color:#e2e8f0;flex:1;min-width:0;overflow-wrap:break-word">${p(((_=v.students)==null?void 0:_.full_name)||"")}</span><span style="color:#38bdf8;font-weight:700;flex-shrink:0">${p(v.teamId===n.teamAId?n.teamA:n.teamB)}</span><button data-ci-undo="${p(v.id)}" style="flex-shrink:0;padding:2px 7px;border-radius:7px;border:1px solid rgba(239,68,68,.35);background:rgba(239,68,68,.1);color:#f87171;font-size:10px;font-weight:700;cursor:pointer">✕</button></div>`}).join(""):'<div style="color:#64748b;text-align:center;font-size:12px;padding:6px 0">ยังไม่มีใครรายงานตัว</div>'};u();async function b(E){var C;const M=a.find(L=>String(L.id)===String(E));if(!M)return;const v=d.querySelector("#az-ci-feedback"),{error:_}=await h.from("azfutsal_checkins").delete().match({level:e,match_code:t,player_id:M.id});if(_){g("ยกเลิกไม่สำเร็จ: "+_.message);return}s.delete(M.id),u(),v.innerHTML=`<span style="color:#94a3b8">ยกเลิกรายงานตัวของ ${p(((C=M.students)==null?void 0:C.full_name)||"")} แล้ว</span>`}d.addEventListener("click",E=>{const M=E.target.closest("[data-ci-undo]");M&&b(M.dataset.ciUndo)});async function m(E){var q,X,x,k;const M=d.querySelector("#az-ci-camwrap"),v=d.querySelector("#az-ci-feedback"),_=T=>{M.classList.add(T?"az-ci-flash-ok":"az-ci-flash-err"),setTimeout(()=>M.classList.remove(T?"az-ci-flash-ok":"az-ci-flash-err"),500)};let C=E;if(E.startsWith("SQ:")){const[,T,N]=E.split(":"),B=Math.floor(Date.now()/1e3)-parseInt(N,10);if(B>60||B<-60){K("error"),_(!1),v.innerHTML='<span style="color:#f87171">QR Code หมดอายุแล้ว ให้นักกีฬาเปิดหน้าใหม่</span>';return}C=T}const L=a.find(T=>{var N;return((N=T.students)==null?void 0:N.student_code)===C});if(!L){K("error"),_(!1),v.innerHTML='<span style="color:#f87171">ไม่พบนักกีฬาคนนี้ในสองทีมที่แข่งนัดนี้</span>';return}if(s.has(L.id)){K("duplicate"),_(!1),v.innerHTML=`<span style="color:#fbbf24">${p(((q=L.students)==null?void 0:q.full_name)||"")} รายงานตัวไปแล้ว</span>`;return}const{error:j}=await h.from("azfutsal_checkins").upsert({level:e,match_code:t,team_id:L.teamId,player_id:L.id,checked_in_by:((X=r.identity.profile)==null?void 0:X.id)||null,checked_in_at:new Date().toISOString()},{onConflict:"level,match_code,player_id"});if(j){K("error"),_(!1),v.innerHTML=`<span style="color:#f87171">บันทึกไม่สำเร็จ: ${p(j.message)}</span>`;return}K("success"),_(!0);const U=L.teamId===n.teamAId?n.teamA:n.teamB,F=Z(L),Q=F?`<img src="${p(F)}" style="width:40px;height:52px;object-fit:cover;border-radius:8px;border:1px solid rgba(255,255,255,.15);flex-shrink:0"/>`:`<div style="width:40px;height:52px;border-radius:8px;background:#1e293b;display:flex;align-items:center;justify-content:center;font-weight:800;color:#64748b;flex-shrink:0">${p((((x=L.students)==null?void 0:x.full_name)||"?").charAt(0))}</div>`;v.innerHTML=`
      <div style="display:flex;align-items:center;gap:10px;text-align:left">
        ${Q}
        <div style="flex:1;min-width:0">
          <div style="color:#4ade80;font-weight:800;font-size:12.5px">✓ รายงานตัวแล้ว</div>
          <div style="color:#e2e8f0;font-size:12.5px;font-weight:700;margin-top:1px;overflow-wrap:break-word">${p(((k=L.students)==null?void 0:k.full_name)||"")}</div>
          <div style="color:#94a3b8;font-size:11px">${p(U)}</div>
        </div>
        <button data-ci-undo="${p(L.id)}" style="flex-shrink:0;padding:8px 10px;border-radius:9px;border:1px solid rgba(239,68,68,.4);background:rgba(239,68,68,.12);color:#f87171;font-weight:700;font-size:11px;cursor:pointer">✕ ยกเลิก</button>
      </div>`,s.add(L.id),u()}const w=d.querySelector("#az-ci-manual-code"),z=()=>{const E=w.value.trim();E&&(m(E),w.value="",w.focus())};d.querySelector("#az-ci-manual-submit").addEventListener("click",z),w.addEventListener("keydown",E=>{E.key==="Enter"&&z()}),(async()=>{const E=d.querySelector("#az-ci-feedback");try{const M=r.teams.find(N=>N.id===n.teamAId),v=r.teams.find(N=>N.id===n.teamBId),_=[M==null?void 0:M.id,v==null?void 0:v.id].filter(Boolean),C=ve(e,t),[{data:L,error:j},{data:U,error:F}]=await Promise.all([h.from("azfutsal_checkins").select("match_code, team_id, player_id").eq("level",e).in("team_id",_),h.from("azfutsal_event_checkins").select("team_id, player_id, confirmed").eq("day",C).in("team_id",_)]);if(j)throw j;if(F)throw F;const Q=N=>{const B=Number(String(t).replace(/^M/,"")),D=[...new Set((L||[]).filter(P=>P.team_id===N&&P.match_code!==t&&ve(e,P.match_code)===C&&Number(String(P.match_code).replace(/^M/,""))<B).map(P=>P.match_code))];return D.length?(D.sort((P,V)=>Number(String(P).replace(/^M/,""))-Number(String(V).replace(/^M/,""))),D[0]):null},q=N=>{const B=new Set,D=Q(N);return D?(L||[]).filter(P=>P.match_code===D&&P.team_id===N).forEach(P=>B.add(P.player_id)):(U||[]).filter(P=>P.team_id===N&&P.confirmed).forEach(P=>B.add(P.player_id)),B};async function X(N,B){if(!N)return{copied:0};const D=q(N.id),P=B.filter(Y=>D.has(Y.id)&&!s.has(Y.id));if(!P.length)return{copied:0};const V=P.map(Y=>{var te;return{level:e,match_code:t,team_id:N.id,player_id:Y.id,checked_in_by:((te=r.identity.profile)==null?void 0:te.id)||null,checked_in_at:new Date().toISOString()}}),{error:J}=await h.from("azfutsal_checkins").upsert(V,{onConflict:"level,match_code,player_id"});if(J)throw J;return P.forEach(Y=>s.add(Y.id)),{copied:P.length}}const x=await X(M,i),k=await X(v,o);u();const T=[];x.copied&&T.push(`${p(n.teamA)} ${x.copied} คน`),k.copied&&T.push(`${p(n.teamB)} ${k.copied} คน`),T.length&&(E.innerHTML=`<span style="color:#4ade80">✓ นำรายชื่อที่เคยรายงานตัว/เช็คอินเข้างานตอนเช้ามาใช้แล้ว: ${T.join(" · ")} — ใครไม่มาจริงกด ✕ ในลิสต์ด้านล่างได้</span>`)}catch(M){E.innerHTML=`<span style="color:#f87171">นำรายชื่ออัตโนมัติไม่สำเร็จ: ${p(M.message)}</span>`}})(),d.querySelector("#az-ci-close").addEventListener("click",async()=>{if(c)try{await c.stop()}catch{}d.remove(),I()}),(async()=>{try{const E=await $t();c=new E("az-ci-reader"),await c.start({facingMode:"environment"},{fps:25,aspectRatio:1},M=>{M===l&&Date.now()-f<2e3||(l=M,f=Date.now(),m(M))},()=>{})}catch(E){g("ไม่สามารถเปิดกล้องได้: "+(E.message||"")),d.remove()}})()}function ji(e){var v;(v=document.getElementById("az-evci-overlay"))==null||v.remove();const t=r.players,n=document.createElement("div");n.id="az-evci-overlay",n.style.cssText="position:fixed;inset:0;z-index:9999;background:#0b0f1a;display:flex;flex-direction:column",n.innerHTML=`
    <style>
      @keyframes azEvciLaser { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .az-evci-laser { animation: azEvciLaser 2s ease-in-out infinite; }
      .az-evci-flash-ok { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .az-evci-flash-err { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div style="flex:1;min-width:0">
        <div style="color:#f1f5f9;font-weight:800;font-size:14px">📷 สแกน QR เช็คอินเข้างาน</div>
        <div style="color:#94a3b8;font-size:11.5px">วันที่ ${e} · ${p(He(e))}</div>
      </div>
      <button id="az-evci-close" style="color:#94a3b8;background:none;border:none;font-size:26px;line-height:1;cursor:pointer">×</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;max-width:420px;margin:0 auto;width:100%">
      <div id="az-evci-camwrap" style="position:relative;width:100%;aspect-ratio:1;background:#000;border-radius:16px;overflow:hidden">
        <div id="az-evci-reader" style="width:100%;height:100%"></div>
        <div style="position:absolute;inset:0;pointer-events:none;display:flex;align-items:center;justify-content:center">
          <div style="position:relative;width:190px;height:190px;border-radius:16px;border:1px solid rgba(255,255,255,.2);box-shadow:0 0 0 9999px rgba(0,0,0,.4);overflow:hidden">
            <div class="az-evci-laser" style="position:absolute;left:0;width:100%;height:2px;background:#38bdf8"></div>
          </div>
        </div>
      </div>
      <div id="az-evci-feedback" style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:12px;text-align:center;font-size:12px;color:#94a3b8">ยกกล้องส่อง QR ของนักกีฬาเพื่อเช็คอินเข้างาน</div>
      <div style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:12px">
        <div style="font-size:10.5px;color:#94a3b8;font-weight:800;margin-bottom:8px">ไม่มี QR? กรอกรหัสนักเรียนแทนได้</div>
        <div style="display:flex;gap:8px">
          <input id="az-evci-manual-code" placeholder="รหัสนักเรียน" autocomplete="off" style="flex:1;min-width:0;border:1px solid #334155;border-radius:9px;padding:9px 10px;font-size:13px;background:#0b0f1a;color:#e2e8f0"/>
          <button id="az-evci-manual-submit" style="flex-shrink:0;padding:9px 16px;border-radius:9px;border:none;background:#0ea5e9;color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">เพิ่ม</button>
        </div>
      </div>
      <div style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:12px">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px">
          <span style="font-size:10.5px;color:#94a3b8;font-weight:800;text-transform:uppercase;letter-spacing:.05em">เช็คอินแล้ววันนี้</span>
          <span id="az-evci-count" style="font-size:10.5px;color:#38bdf8;font-weight:800">0 คน</span>
        </div>
        <div id="az-evci-list" style="display:flex;flex-direction:column;gap:6px;max-height:260px;overflow-y:auto"></div>
      </div>
    </div>`,document.body.appendChild(n);const i=n.querySelector("#az-evci-feedback");qi(i,_=>t.find(C=>String(C.id)===String(_))),Wi(i);const o=new Set(r.eventCheckins.filter(_=>_.day===e).map(_=>_.player_id));let a=[],d=null,s=null,c=0,l=null,f=!1,u=!1;const b=()=>{const _=n.querySelector("#az-evci-list");n.querySelector("#az-evci-count").textContent=`${o.size} คน`;const C=a.map(L=>t.find(j=>j.id===L)).filter(Boolean);_.innerHTML=C.length?C.map(L=>{var j;return`<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.06)"><span style="color:#e2e8f0;flex:1;min-width:0;overflow-wrap:break-word">${p(((j=L.students)==null?void 0:j.full_name)||"")}</span><span style="color:#38bdf8;font-weight:700;flex-shrink:0">${p(O(L.team_id))}</span></div>`}).join(""):'<div style="color:#64748b;text-align:center;font-size:12px;padding:6px 0">ยังไม่มีใครเช็คอิน</div>'};b();function m(_,C){var U,F;const L=Z(_),j=L?`<img src="${p(L)}" style="width:40px;height:52px;object-fit:cover;border-radius:8px;border:1px solid rgba(255,255,255,.15);flex-shrink:0"/>`:`<div style="width:40px;height:52px;border-radius:8px;background:#1e293b;display:flex;align-items:center;justify-content:center;font-weight:800;color:#64748b;flex-shrink:0">${p((((U=_.students)==null?void 0:U.full_name)||"?").charAt(0))}</div>`;i.innerHTML=`
      <div style="display:flex;align-items:center;gap:10px;text-align:left">
        ${j}
        <div style="flex:1;min-width:0">
          <div style="color:#4ade80;font-weight:800;font-size:12.5px">✓ เช็คอินเข้างานแล้ว</div>
          <div style="color:#e2e8f0;font-size:12.5px;font-weight:700;margin-top:1px;overflow-wrap:break-word">${p(((F=_.students)==null?void 0:F.full_name)||"")}</div>
          <div style="color:#94a3b8;font-size:11px">${p(O(_.team_id))}</div>
        </div>
      </div>
      ${bn(_)}
      ${hn(e,_.id,C)}`}async function w(_,C,L){var F,Q;const{error:j}=await h.from("azfutsal_event_checkins").insert({day:e,team_id:_.team_id,player_id:_.id,checked_in_by:((F=r.identity.profile)==null?void 0:F.id)||null,method:"staff",checked_in_at:new Date().toISOString(),confirmed:!0,parent_permission_confirmed:C,attire_confirmed:L});if(j){K("error"),i.innerHTML=`<span style="color:#f87171">บันทึกไม่สำเร็จ: ${p(j.message)}</span>`;return}const U={id:null,day:e,team_id:_.team_id,player_id:_.id,checked_in_by:((Q=r.identity.profile)==null?void 0:Q.id)||null,method:"staff",checked_in_at:new Date().toISOString(),parent_permission_confirmed:C,attire_confirmed:L,confirmed:!0};r.eventCheckins.push(U),K("success"),m(_,U),o.add(_.id),a.unshift(_.id),a=a.slice(0,30),b()}function z(){var q,X;const _=l;if(!_)return;const C=Z(_),L=C?`<img src="${p(C)}" style="width:40px;height:52px;object-fit:cover;border-radius:8px;border:1px solid rgba(255,255,255,.15);flex-shrink:0"/>`:`<div style="width:40px;height:52px;border-radius:8px;background:#1e293b;display:flex;align-items:center;justify-content:center;font-weight:800;color:#64748b;flex-shrink:0">${p((((q=_.students)==null?void 0:q.full_name)||"?").charAt(0))}</div>`,j=pe(),U=fe(),F=(!j||f)&&(!U||u),Q=x=>`flex:1;min-width:130px;padding:8px;border-radius:9px;border:1px solid ${x?"#16a34a":"#334155"};background:${x?"rgba(22,163,74,.18)":"transparent"};color:${x?"#4ade80":"#94a3b8"};font-size:11px;font-weight:700;cursor:pointer`;i.innerHTML=`
      <div style="display:flex;align-items:center;gap:10px;text-align:left">
        ${L}
        <div style="flex:1;min-width:0">
          <div style="color:#38bdf8;font-weight:800;font-size:12.5px">ตรวจสอบก่อนบันทึกเช็คอิน</div>
          <div style="color:#e2e8f0;font-size:12.5px;font-weight:700;margin-top:1px;overflow-wrap:break-word">${p(((X=_.students)==null?void 0:X.full_name)||"")}</div>
          <div style="color:#94a3b8;font-size:11px">${p(O(_.team_id))}${_.jersey_number!=null?` · เบอร์ ${p(String(_.jersey_number))}`:""}</div>
        </div>
      </div>
      <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,.08);display:flex;gap:6px;flex-wrap:wrap">
        ${j?`<button class="az-staging-toggle" data-field="permission" style="${Q(f)}">${f?"✅":"⬜"} ใบอนุญาตผู้ปกครอง</button>`:""}
        ${U?`<button class="az-staging-toggle" data-field="attire" style="${Q(u)}">${u?"✅":"⬜"} แต่งกายเรียบร้อย</button>`:""}
      </div>
      <button id="az-evci-staging-confirm" ${F?"":"disabled"} style="width:100%;margin-top:8px;padding:10px;border-radius:10px;border:none;background:${F?"#16a34a":"#334155"};color:#fff;font-weight:800;font-size:12.5px;cursor:${F?"pointer":"not-allowed"}">${F?"✅ ยืนยันและบันทึกเช็คอิน":"ติ๊กให้ครบก่อนถึงจะบันทึกได้"}</button>`}i.addEventListener("click",async _=>{const C=_.target.closest(".az-staging-toggle");if(C){C.dataset.field==="permission"?f=!f:u=!u,z();return}const L=_.target.closest("#az-evci-staging-confirm");if(L&&!L.disabled){const j=l;l=null,await w(j,f,u)}});async function A(_){var Q;const C=n.querySelector("#az-evci-camwrap"),L=i,j=q=>{C.classList.add(q?"az-evci-flash-ok":"az-evci-flash-err"),setTimeout(()=>C.classList.remove(q?"az-evci-flash-ok":"az-evci-flash-err"),500)};let U=_;if(_.startsWith("SQ:")){const[,q,X]=_.split(":"),x=Math.floor(Date.now()/1e3)-parseInt(X,10);if(x>60||x<-60){K("error"),j(!1),L.innerHTML='<span style="color:#f87171">QR Code หมดอายุแล้ว ให้นักกีฬาเปิดหน้าใหม่</span>';return}U=q}const F=t.find(q=>{var X;return((X=q.students)==null?void 0:X.student_code)===U});if(!F){K("error"),j(!1),L.innerHTML='<span style="color:#f87171">ไม่พบนักกีฬาคนนี้ในระบบ</span>';return}if(o.has(F.id)){K("duplicate"),j(!1),L.innerHTML=`<span style="color:#fbbf24">${p(((Q=F.students)==null?void 0:Q.full_name)||"")} เช็คอินไปแล้ว</span>`;return}if(zt()){l=F,f=!1,u=!1,K("success"),j(!0),z();return}await w(F,!1,!1)}const E=n.querySelector("#az-evci-manual-code"),M=()=>{const _=E.value.trim();_&&(A(_),E.value="",E.focus())};n.querySelector("#az-evci-manual-submit").addEventListener("click",M),E.addEventListener("keydown",_=>{_.key==="Enter"&&M()}),n.querySelector("#az-evci-close").addEventListener("click",async()=>{if(d)try{await d.stop()}catch{}n.remove(),I()}),(async()=>{try{const _=await $t();d=new _("az-evci-reader"),await d.start({facingMode:"environment"},{fps:25,aspectRatio:1},C=>{C===s&&Date.now()-c<2e3||(s=C,c=Date.now(),A(C))},()=>{})}catch(_){g("ไม่สามารถเปิดกล้องได้: "+(_.message||"")),n.remove()}})()}function Bi(){var c;const e=wn();if(!e){g("ไม่พบข้อมูลนักกีฬาของคุณในระบบ");return}(c=document.getElementById("az-evsc-overlay"))==null||c.remove();const t=document.createElement("div");t.id="az-evsc-overlay",t.style.cssText="position:fixed;inset:0;z-index:9999;background:#0b0f1a;display:flex;flex-direction:column",t.innerHTML=`
    <style>
      @keyframes azEvscLaser { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .az-evsc-laser { animation: azEvscLaser 2s ease-in-out infinite; }
      .az-evsc-flash-ok { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .az-evsc-flash-err { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div style="flex:1;min-width:0">
        <div style="color:#f1f5f9;font-weight:800;font-size:14px">📷 เช็คอินเข้างาน</div>
        <div style="color:#94a3b8;font-size:11.5px">ส่องกล้องไปที่ QR ในจุดลงทะเบียนหน้างาน</div>
      </div>
      <button id="az-evsc-close" style="color:#94a3b8;background:none;border:none;font-size:26px;line-height:1;cursor:pointer">×</button>
    </div>
    <div id="az-evsc-scanwrap" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;max-width:420px;margin:0 auto;width:100%">
      <div id="az-evsc-camwrap" style="position:relative;width:100%;aspect-ratio:1;background:#000;border-radius:16px;overflow:hidden">
        <div id="az-evsc-reader" style="width:100%;height:100%"></div>
        <div style="position:absolute;inset:0;pointer-events:none;display:flex;align-items:center;justify-content:center">
          <div style="position:relative;width:190px;height:190px;border-radius:16px;border:1px solid rgba(255,255,255,.2);box-shadow:0 0 0 9999px rgba(0,0,0,.4);overflow:hidden">
            <div class="az-evsc-laser" style="position:absolute;left:0;width:100%;height:2px;background:#38bdf8"></div>
          </div>
        </div>
      </div>
      <div id="az-evsc-feedback" style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:14px;text-align:center;font-size:12.5px;color:#94a3b8">รอสแกน QR ที่จุดลงทะเบียน</div>
    </div>
    <div id="az-evsc-success" style="display:none;flex:1;overflow-y:auto;padding:24px;flex-direction:column;align-items:center;justify-content:center;gap:16px;max-width:420px;margin:0 auto;width:100%;box-sizing:border-box;text-align:center"></div>`,document.body.appendChild(t);let n=null,i=null,o=0,a=!1;async function d(l){var M,v;if(n)try{await n.stop()}catch{}t.querySelector("#az-evsc-scanwrap").style.display="none";const f=t.querySelector("#az-evsc-success");f.style.display="flex";const u=Z(e),b=u?`<img src="${p(u)}" style="width:104px;height:132px;object-fit:cover;border-radius:14px;border:1px solid rgba(255,255,255,.15)"/>`:`<div style="width:104px;height:132px;border-radius:14px;background:#1e293b;display:flex;align-items:center;justify-content:center;font-weight:800;color:#64748b;font-size:34px">${p((((M=e.students)==null?void 0:M.full_name)||"?").charAt(0))}</div>`,m=he(e.id,l),w=!!m&&!m.confirmed;f.innerHTML=`
      ${b}
      <div>
        <div style="color:${w?"#fbbf24":"#4ade80"};font-weight:900;font-size:20px">${w?"⏳ ส่งคำขอเช็คอินแล้ว":"✓ เช็คอินเข้างานสำเร็จ"}</div>
        <div style="color:#e2e8f0;font-size:16px;font-weight:800;margin-top:4px">${p(((v=e.students)==null?void 0:v.full_name)||"")}</div>
        <div style="color:#94a3b8;font-size:13px;margin-top:2px">${p(O(e.team_id))} · วันที่ ${l}</div>
        ${w?'<div style="margin-top:10px;padding:10px 12px;border-radius:10px;background:rgba(217,119,6,.14);border:1px solid #d97706;color:#fbbf24;font-size:12px;text-align:left">รอสตาฟยืนยันใบอนุญาตผู้ปกครอง/การแต่งกายที่จุดลงทะเบียน จึงจะนับว่าเช็คอินสำเร็จ</div>':""}
      </div>
      <div id="az-evsc-jersey-wrap" style="width:100%"></div>
      <button id="az-evsc-done" style="width:100%;padding:14px;border-radius:12px;border:none;background:#16a34a;color:#fff;font-weight:800;font-size:15px;cursor:pointer">✓ เสร็จสิ้น</button>`;const z=f.querySelector("#az-evsc-jersey-wrap"),A=f.querySelector("#az-evsc-done"),E=e.jersey_number!==null&&e.jersey_number!==void 0;z.innerHTML=E?yn(e):vn(e),Vi(z,e,A),A.addEventListener("click",()=>{A.disabled||(t.remove(),$())}),await I()}async function s(l){var E,M;if(a)return;const f=t.querySelector("#az-evsc-camwrap"),u=t.querySelector("#az-evsc-feedback"),b=v=>{f.classList.add(v?"az-evsc-flash-ok":"az-evsc-flash-err"),setTimeout(()=>f.classList.remove(v?"az-evsc-flash-ok":"az-evsc-flash-err"),500)};if(!l.startsWith(ft)){K("error"),b(!1),u.innerHTML='<span style="color:#f87171">ไม่ใช่ QR จุดลงทะเบียนเข้างาน</span>';return}const m=Number(l.slice(ft.length));if(m!==1&&m!==2){K("error"),b(!1),u.innerHTML='<span style="color:#f87171">QR ไม่ถูกต้อง</span>';return}if(he(e.id,m)){K("duplicate"),b(!1),a=!0,await d(m);return}const w=Ki();if(w){u.innerHTML='<span style="color:#94a3b8">📍 กำลังตรวจสอบพิกัด...</span>';const v=await kn();if(v.error){K("error"),b(!1),u.innerHTML=`<span style="color:#f87171">${p(v.error)}</span>`;return}const _=Ji(v.lat,v.lng,w.lat,w.lng);if(_>w.radius){K("error"),b(!1),u.innerHTML=`<span style="color:#f87171">คุณอยู่นอกระยะจุดลงทะเบียน (ห่างประมาณ ${Math.round(_)} เมตร) กรุณาเข้าใกล้จุดลงทะเบียนแล้วลองสแกนใหม่</span>`;return}}const z=zt(),{error:A}=await h.from("azfutsal_event_checkins").insert({day:m,team_id:e.team_id,player_id:e.id,checked_in_by:((E=r.identity.profile)==null?void 0:E.id)||null,method:"self",checked_in_at:new Date().toISOString(),confirmed:!z});if(A){if(A.code==="23505"){K("duplicate"),b(!1),a=!0,await d(m);return}K("error"),b(!1),u.innerHTML=`<span style="color:#f87171">บันทึกไม่สำเร็จ: ${p(A.message)}</span>`;return}a=!0,r.eventCheckins.push({id:null,day:m,team_id:e.team_id,player_id:e.id,checked_in_by:((M=r.identity.profile)==null?void 0:M.id)||null,method:"self",checked_in_at:new Date().toISOString(),parent_permission_confirmed:!1,attire_confirmed:!1,confirmed:!z}),K("success"),b(!0),await d(m)}t.querySelector("#az-evsc-close").addEventListener("click",async()=>{if(n)try{await n.stop()}catch{}t.remove(),a&&$()}),(async()=>{try{const l=await $t();n=new l("az-evsc-reader"),await n.start({facingMode:"environment"},{fps:25,aspectRatio:1},f=>{f===i&&Date.now()-o<2e3||(i=f,o=Date.now(),s(f))},()=>{})}catch(l){g("ไม่สามารถเปิดกล้องได้: "+(l.message||"")),t.remove()}})()}async function Pi(e){var s;(s=document.getElementById("az-evbig-overlay"))==null||s.remove();const t=await tn.toDataURL(Ui(e),{width:320,margin:2,color:{dark:"#111827",light:"#ffffff"}}),n=zn(e),i=document.createElement("div");i.id="az-evbig-overlay",i.style.cssText="position:fixed;inset:0;z-index:9999;background:linear-gradient(160deg,#fdf2f8 0%,#eff6ff 100%);overflow:hidden;font-family:Sarabun,Arial,sans-serif;display:flex;flex-direction:column",i.innerHTML=`
    <style>
      @keyframes azEvbigPulse { 0%,100%{opacity:.55;transform:scale(1)} 50%{opacity:.9;transform:scale(1.06)} }
      @keyframes azEvbigBlink { 0%,100%{opacity:1} 50%{opacity:.25} }
      #az-evbig-countdown-box { transition: background .3s; }
      #az-evbig-countdown-box.az-evbig-urgent { animation: azEvbigBlink 1s ease-in-out infinite; }
    </style>
    <div style="flex-shrink:0;padding:18px 28px;background:linear-gradient(120deg,#db2777,#6366f1 65%,#0ea5e9);color:#fff;display:flex;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 6px 18px rgba(0,0,0,.15)">
      <div style="min-width:0">
        <div style="font-size:23px;font-weight:900;letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">⚽ ${p(y("EVENT_NAME","AZFUTSALCUP"))}</div>
        <div style="font-size:13px;opacity:.92;font-weight:700;margin-top:2px">จุดลงทะเบียนเข้างาน · วันที่ ${e} · ${p(He(e))}</div>
      </div>
      <div style="display:flex;align-items:center;gap:14px;flex-shrink:0">
        ${!n&&xt()?`<div style="font-size:12.5px;font-weight:800;background:rgba(255,255,255,.18);padding:6px 12px;border-radius:999px;white-space:nowrap">🕐 ${p(xt())}</div>`:""}
        <button id="az-evbig-close" style="padding:9px 15px;border-radius:10px;border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.12);color:#fff;font-weight:700;font-size:13px;cursor:pointer;white-space:nowrap">✕ ปิด</button>
      </div>
    </div>
    ${n?`
    <div id="az-evbig-countdown-box" style="flex-shrink:0;text-align:center;background:#1e293b;padding:10px 20px 16px">
      <div id="az-evbig-countdown-label" style="font-size:15px;font-weight:800;color:#cbd5e1;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap">ปิดรับเช็คอินใน</div>
      <div id="az-evbig-countdown" style="font-size:120px;font-weight:900;font-variant-numeric:tabular-nums;line-height:1.05;color:#fff">--:--</div>
    </div>`:""}
    <div style="flex:1;min-height:0;display:flex">
      <div style="flex:0 0 380px;padding:32px 28px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center">
        <div style="position:relative;display:flex;align-items:center;justify-content:center">
          <div style="position:absolute;inset:-16px;border-radius:26px;background:radial-gradient(circle,rgba(14,165,233,.35),transparent 72%);animation:azEvbigPulse 2.4s ease-in-out infinite"></div>
          <img src="${t}" style="position:relative;width:270px;height:270px;border-radius:18px;padding:10px;background:#fff;box-shadow:0 10px 28px rgba(15,23,42,.14)"/>
        </div>
        <div style="font-size:14px;color:#374151;font-weight:800;margin-top:4px">📱 เปิดพอร์ทัลของตัวเอง แล้วกด "เช็คอินเข้างาน" เพื่อสแกน QR นี้</div>
        <div style="display:flex;align-items:baseline;gap:6px;margin-top:8px">
          <span id="az-evbig-count" style="font-size:44px;font-weight:900;color:#16a34a;line-height:1">0</span>
          <span style="font-size:13px;color:#6b7280;font-weight:700">คนเช็คอินแล้ว</span>
        </div>
        <div id="az-evbig-levelcounts" style="display:flex;gap:8px;margin-top:2px"></div>
      </div>
      <div style="flex:1;min-width:0;padding:28px;overflow-y:auto;background:rgba(255,255,255,.55);border-left:1px solid rgba(15,23,42,.06)">
        <div style="font-size:14px;font-weight:800;color:#374151;margin-bottom:14px;display:flex;align-items:center;gap:7px">
          <span style="width:9px;height:9px;border-radius:50%;background:#16a34a;display:inline-block;animation:azEvbigBlink 1.6s ease-in-out infinite"></span>
          เช็คอินล่าสุด
        </div>
        <div id="az-evbig-feed" style="display:flex;flex-direction:column;gap:10px"></div>
      </div>
    </div>`,document.body.appendChild(i);const o=()=>{const c=r.eventCheckins.filter(b=>b.day===e).sort((b,m)=>new Date(m.checked_in_at)-new Date(b.checked_in_at)),l=document.getElementById("az-evbig-count");l&&(l.textContent=String(c.length));const f=document.getElementById("az-evbig-levelcounts");f&&(f.innerHTML=["MS","HS"].map(b=>{const m=ut(b,e);return`<div style="font-size:11px;font-weight:800;padding:4px 10px;border-radius:999px;background:${S[b].soft};color:${S[b].accent}">${S[b].label} ${m.done}/${m.total}</div>`}).join(""));const u=document.getElementById("az-evbig-feed");u&&(u.innerHTML=c.slice(0,40).map(b=>{var A;const m=r.players.find(E=>E.id===b.player_id),w=m?Z(m):null,z=new Date(b.checked_in_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"});return`
      <div style="display:flex;align-items:center;gap:14px;padding:10px 14px;border-radius:14px;background:#f0fdf4;border:2px solid #bbf7d0">
        <div style="width:44px;height:56px;border-radius:9px;overflow:hidden;background:#e5e7eb;flex-shrink:0;border:1px solid #d1d5db">
          ${w?`<img src="${p(w)}" style="width:100%;height:100%;object-fit:cover"/>`:""}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:15px;font-weight:800;color:#111827">${p(((A=m==null?void 0:m.students)==null?void 0:A.full_name)||"")}</div>
          <div style="font-size:13.5px;font-weight:700;color:#16a34a;margin-top:1px">${p(m?O(m.team_id):"")}${(m==null?void 0:m.jersey_number)!=null?` · เบอร์ ${p(String(m.jersey_number))}`:""}</div>
        </div>
        <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:flex-end;gap:5px">
          <div style="font-size:12px;color:#6b7280;font-weight:700">${z}</div>
          <button data-evbig-undo="${p(b.id)}" style="padding:3px 9px;border-radius:7px;border:1px solid #fecaca;background:#fef2f2;color:#dc2626;font-size:10.5px;font-weight:700;cursor:pointer">✕ ยกเลิก</button>
        </div>
      </div>`}).join("")||'<div style="text-align:center;padding:60px 0;color:#9ca3af"><div style="font-size:40px;margin-bottom:8px">🙋</div><div style="font-size:13px;font-weight:700">ยังไม่มีใครเช็คอิน</div><div style="font-size:12px;margin-top:2px">รอนักกีฬาคนแรกมาสแกน QR</div></div>')};o();const a=setInterval(async()=>{await I(),o()},4e3);let d=null;if(n){const c=()=>{const l=document.getElementById("az-evbig-countdown-box"),f=document.getElementById("az-evbig-countdown-label"),u=document.getElementById("az-evbig-countdown");if(!l||!f||!u)return;const b=n.getTime()-Date.now();u.textContent=Xi(b),b<=0?(f.textContent="ปิดรับเช็คอินแล้ว",f.style.color="#fecaca",l.style.background="#dc2626",l.classList.add("az-evbig-urgent")):b<=6e4?(f.textContent="ปิดรับเช็คอินใน",f.style.color="#fecaca",l.style.background="#dc2626",l.classList.add("az-evbig-urgent")):b<=3e5?(f.textContent="ปิดรับเช็คอินใน",f.style.color="#78350f",l.style.background="#f59e0b",l.classList.remove("az-evbig-urgent")):(f.textContent="ปิดรับเช็คอินใน",f.style.color="#cbd5e1",l.style.background="#1e293b",l.classList.remove("az-evbig-urgent"))};c(),d=setInterval(c,1e3)}i.querySelector("#az-evbig-close").addEventListener("click",()=>{clearInterval(a),d&&clearInterval(d),i.remove()}),i.querySelector("#az-evbig-feed").addEventListener("click",async c=>{const l=c.target.closest("[data-evbig-undo]");if(!l)return;const{error:f}=await h.from("azfutsal_event_checkins").delete().eq("id",l.dataset.evbigUndo);if(f){g("ยกเลิกไม่สำเร็จ: "+f.message);return}await I(),o()})}function Di(e){var a;(a=document.getElementById("az-evpend-overlay"))==null||a.remove();const t=document.createElement("div");t.id="az-evpend-overlay",t.style.cssText="position:fixed;inset:0;z-index:9999;background:#0b0f1a;display:flex;flex-direction:column",t.innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div style="flex:1;min-width:0">
        <div style="color:#f1f5f9;font-weight:800;font-size:14px">🕐 รอสตาฟยืนยันการเช็คอิน</div>
        <div style="color:#94a3b8;font-size:11.5px">วันที่ ${e} · ${p(He(e))} · จากการสแกนเองของนักกีฬา</div>
      </div>
      <button id="az-evpend-close" style="color:#94a3b8;background:none;border:none;font-size:26px;line-height:1;cursor:pointer">×</button>
    </div>
    <div id="az-evpend-list" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;max-width:520px;margin:0 auto;width:100%"></div>`,document.body.appendChild(t);const n={},i=()=>{const d=document.getElementById("az-evpend-list");if(!d)return;const s=r.eventCheckins.filter(u=>u.day===e&&!u.confirmed).sort((u,b)=>new Date(u.checked_in_at)-new Date(b.checked_in_at)),c=pe(),l=fe(),f=u=>`flex:1;min-width:130px;padding:8px;border-radius:9px;border:1px solid ${u?"#16a34a":"#334155"};background:${u?"rgba(22,163,74,.18)":"transparent"};color:${u?"#4ade80":"#94a3b8"};font-size:11px;font-weight:700;cursor:pointer`;d.innerHTML=s.length?s.map(u=>{var M,v;const b=r.players.find(_=>_.id===u.player_id);if(!b)return"";n[u.player_id]||(n[u.player_id]={permission:!!u.parent_permission_confirmed,attire:!!u.attire_confirmed});const m=n[u.player_id],w=(!c||m.permission)&&(!l||m.attire),z=Z(b),A=z?`<img src="${p(z)}" style="width:44px;height:56px;object-fit:cover;border-radius:9px;border:1px solid #d1d5db;flex-shrink:0"/>`:`<div style="width:44px;height:56px;border-radius:9px;background:#e5e7eb;display:flex;align-items:center;justify-content:center;font-weight:800;color:#9ca3af;flex-shrink:0">${p((((M=b.students)==null?void 0:M.full_name)||"?").charAt(0))}</div>`,E=new Date(u.checked_in_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"});return`
      <div class="az-pend-row" data-player-id="${p(b.id)}" style="border:1px solid #fde68a;background:#fffbeb;border-radius:14px;padding:12px">
        <div style="display:flex;align-items:center;gap:10px">
          ${A}
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:800;color:#111827">${p(((v=b.students)==null?void 0:v.full_name)||"")}</div>
            <div style="font-size:12px;color:#6b7280">${p(O(b.team_id))}${b.jersey_number!=null?` · เบอร์ ${p(String(b.jersey_number))}`:" · ยังไม่ระบุเบอร์เสื้อ"}</div>
          </div>
          <div style="font-size:11px;color:#b45309;font-weight:700;flex-shrink:0">สแกนเมื่อ ${E}</div>
        </div>
        <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
          ${c?`<button class="az-pend-toggle" data-field="permission" style="${f(m.permission)}">${m.permission?"✅":"⬜"} ใบอนุญาตผู้ปกครอง</button>`:""}
          ${l?`<button class="az-pend-toggle" data-field="attire" style="${f(m.attire)}">${m.attire?"✅":"⬜"} แต่งกายเรียบร้อย</button>`:""}
        </div>
        <button class="az-pend-confirm" ${w?"":"disabled"} style="width:100%;margin-top:8px;padding:9px;border-radius:9px;border:none;background:${w?"#16a34a":"#d1d5db"};color:#fff;font-weight:800;font-size:12.5px;cursor:${w?"pointer":"not-allowed"}">${w?"✅ ยืนยันสำเร็จ":"ติ๊กให้ครบก่อนถึงจะยืนยันได้"}</button>
      </div>`}).join(""):'<div style="text-align:center;padding:60px 0;color:#9ca3af"><div style="font-size:40px;margin-bottom:8px">🎉</div><div style="font-size:13px;font-weight:700">ไม่มีรายการรอยืนยัน</div></div>'};i(),document.getElementById("az-evpend-list").addEventListener("click",async d=>{const s=d.target.closest(".az-pend-row");if(!s)return;const c=s.dataset.playerId,l=n[c];if(!l)return;if(d.target.closest(".az-pend-toggle")){const u=d.target.closest(".az-pend-toggle").dataset.field;l[u]=!l[u],i();return}const f=d.target.closest(".az-pend-confirm");if(f&&!f.disabled){const{error:u}=await h.from("azfutsal_event_checkins").update({confirmed:!0,parent_permission_confirmed:l.permission,attire_confirmed:l.attire}).eq("day",e).eq("player_id",c);if(u){g("ยืนยันไม่สำเร็จ: "+u.message);return}const b=he(c,e);b&&(b.confirmed=!0,b.parent_permission_confirmed=l.permission,b.attire_confirmed=l.attire),delete n[c],g("ยืนยันเช็คอินสำเร็จแล้ว"),i(),I()}});const o=setInterval(async()=>{await I(),i()},4e3);t.querySelector("#az-evpend-close").addEventListener("click",()=>{clearInterval(o),t.remove()})}async function Oi(e){var o,a,d,s;(o=document.getElementById("az-playerqr-overlay"))==null||o.remove();const t=document.createElement("div");t.id="az-playerqr-overlay",t.style.cssText="position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:20px";const n=Z(e),i=n?`<img src="${p(n)}" style="width:64px;height:82px;object-fit:cover;border-radius:10px;border:1px solid #e5e7eb;margin:0 auto"/>`:"";t.innerHTML=`
    <div style="background:#fff;border-radius:20px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="display:flex;justify-content:flex-end;margin-bottom:${n?"-8px":"-4px"}"><button id="az-playerqr-close" style="border:none;background:none;color:#9ca3af;font-size:22px;cursor:pointer;line-height:1">×</button></div>
      ${i}
      <div style="font-size:16px;font-weight:800;margin-top:10px">${p(((a=e.students)==null?void 0:a.full_name)||"")}</div>
      <div style="font-size:12.5px;color:#6b7280;margin-top:2px">${p(O(e.team_id))}${e.jersey_number!=null?` · เบอร์ ${p(String(e.jersey_number))}`:""}</div>
      <div id="az-playerqr-canvas" style="margin-top:14px;display:flex;justify-content:center">
        <div style="width:220px;height:220px;border:1px solid #e5e7eb;border-radius:14px;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:12px">กำลังสร้าง QR...</div>
      </div>
      <div style="font-size:13px;color:#374151;font-weight:700;margin-top:8px;letter-spacing:.05em">${p(((d=e.students)==null?void 0:d.student_code)||"")}</div>
      <div style="font-size:11px;color:#9ca3af;margin-top:6px">ใช้สแกนแทนได้กรณีนักกีฬาไม่ได้พก QR ของตัวเองมา</div>
    </div>`,document.body.appendChild(t),t.querySelector("#az-playerqr-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",c=>{c.target===t&&t.remove()});try{const c=await tn.toDataURL(((s=e.students)==null?void 0:s.student_code)||"",{width:220,margin:2,color:{dark:"#111827",light:"#ffffff"}}),l=document.getElementById("az-playerqr-canvas");l&&(l.innerHTML=`<img src="${c}" style="width:220px;height:220px;border:1px solid #e5e7eb;border-radius:14px;padding:8px"/>`)}catch{const l=document.getElementById("az-playerqr-canvas");l&&(l.innerHTML='<div style="color:#dc2626;font-size:12px;padding:20px">สร้าง QR ไม่สำเร็จ</div>')}}async function Hi(e,t,n){var o;(o=document.getElementById("az-venuemap-overlay"))==null||o.remove();const i=document.createElement("div");i.id="az-venuemap-overlay",i.style.cssText="position:fixed;inset:0;z-index:9999;background:#0b0f1a;display:flex;flex-direction:column",i.innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div style="flex:1;min-width:0">
        <div style="color:#f1f5f9;font-weight:800;font-size:14px">🗺️ พิกัดสถานที่จัดงาน</div>
        <div style="color:#94a3b8;font-size:11.5px">${e.toFixed(6)}, ${t.toFixed(6)} · รัศมี ${n} ม.</div>
      </div>
      <button id="az-venuemap-close" style="color:#94a3b8;background:none;border:none;font-size:26px;line-height:1;cursor:pointer">×</button>
    </div>
    <div id="az-venuemap-canvas" style="flex:1;min-height:0"></div>`,document.body.appendChild(i),i.querySelector("#az-venuemap-close").addEventListener("click",()=>i.remove());try{const a=await Ci();if(!document.getElementById("az-venuemap-overlay"))return;const d=a.map("az-venuemap-canvas").setView([e,t],17);a.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",{attribution:"© Google Maps",maxZoom:21}).addTo(d),a.marker([e,t]).addTo(d),a.circle([e,t],{radius:n,color:"#16a34a",fillColor:"#16a34a",fillOpacity:.15,weight:2}).addTo(d)}catch(a){const d=document.getElementById("az-venuemap-canvas");d&&(d.innerHTML=`<div style="color:#f87171;text-align:center;padding:40px;font-size:13px">${p(a.message||"โหลดแผนที่ไม่สำเร็จ")}</div>`)}}function mn(e){if(!e)return"";const t=new Date(e);if(Number.isNaN(t.getTime()))return"";t.setDate(t.getDate()+1);const n=i=>String(i).padStart(2,"0");return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`}function Je(e){const t=y("START_TIME","");return e===1?t:y("SECOND_DAY_START_TIME",mn(t))}function ve(e,t){return Number(String(t).replace(/^M/,""))<=(e==="HS"?13:10)?1:2}function Se(e){const t=(o,a)=>{const d=[];for(let s=0;s<Math.max(o.length,a.length);s+=1)o[s]&&d.push(o[s]),a[s]&&d.push(a[s]);return d},[n,i]=["MS","HS"].map(o=>H[o].filter(a=>ve(o,a.code)===e).map(a=>[o,a.code]));return t(n,i)}function He(e){const t=Je(e).slice(0,10);return t?new Date(`${t}T00:00:00`).toLocaleDateString("th-TH",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"ยังไม่ได้กำหนดวันที่"}const ft="AZEVENTCHECKIN:";function ce(){return y("EVENT_CHECKIN_REQUIRE_BOTH_DAYS","1")==="1"}function pe(){return y("EVENT_CHECKIN_REQUIRE_PARENT_PERMISSION","0")==="1"}function fe(){return y("EVENT_CHECKIN_REQUIRE_ATTIRE","0")==="1"}function zt(){return pe()||fe()}function dt(e,t){const n=he(e,t);return n?n.confirmed?"✅":"⏳":"❌"}function kt(){const e=Je(2).slice(0,10),t=new Date().toISOString().slice(0,10);return e&&t>=e?2:1}function Ui(e){return`${ft}${e}`}function bn(e){return`<div class="az-jersey-row" data-jersey-id="${p(e.id)}" style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;gap:8px">
    <span style="color:#94a3b8;font-size:11px">เบอร์เสื้อในระบบ: <b style="color:#e2e8f0;font-size:13px">${e.jersey_number??"-"}</b></span>
    <button class="az-jersey-edit-btn" data-jersey-id="${p(e.id)}" style="border:none;background:none;color:#38bdf8;font-size:11px;font-weight:700;cursor:pointer">ไม่ตรง? แก้ไข</button>
  </div>`}function Fi(e){return`<div class="az-jersey-row" data-jersey-id="${p(e.id)}" style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,.08);display:flex;align-items:center;gap:6px">
    <span style="color:#94a3b8;font-size:11px;flex-shrink:0">เบอร์เสื้อจริง:</span>
    <input type="number" min="0" class="az-jersey-input" value="${e.jersey_number??""}" style="width:64px;border:1px solid #334155;border-radius:6px;padding:4px 6px;font-size:12px;background:#0b0f1a;color:#e2e8f0"/>
    <button class="az-jersey-save-btn" data-jersey-id="${p(e.id)}" style="border:none;background:#0ea5e9;color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:6px;cursor:pointer">บันทึก</button>
  </div>`}function qi(e,t){e.addEventListener("click",async n=>{const i=n.target.closest(".az-jersey-edit-btn");if(i){const a=t(i.dataset.jerseyId);if(!a)return;i.closest(".az-jersey-row").outerHTML=Fi(a);return}const o=n.target.closest(".az-jersey-save-btn");if(o){const a=o.closest(".az-jersey-row"),d=t(o.dataset.jerseyId);if(!d||!a)return;const c=a.querySelector(".az-jersey-input").value.trim(),l=c===""?null:Number(c);if(c!==""&&(Number.isNaN(l)||l<0)){g("เบอร์เสื้อไม่ถูกต้อง");return}const{error:f}=await h.from("azfutsal_players").update({jersey_number:l}).eq("id",d.id);if(f){g("บันทึกเบอร์เสื้อไม่สำเร็จ: "+f.message);return}d.jersey_number=l,a.outerHTML=bn(d),g("บันทึกเบอร์เสื้อแล้ว"),I()}}),e.addEventListener("keydown",n=>{var i,o,a;n.key==="Enter"&&((i=n.target.classList)!=null&&i.contains("az-jersey-input"))&&((a=(o=n.target.closest(".az-jersey-row"))==null?void 0:o.querySelector(".az-jersey-save-btn"))==null||a.click())})}function yn(e){return`<div class="az-jersey-self" style="width:100%;background:#151a26;border:1px solid #232838;border-radius:14px;padding:16px;text-align:left;box-sizing:border-box">
    <div style="font-size:12px;color:#94a3b8;font-weight:700;margin-bottom:6px">เบอร์เสื้อในระบบ</div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
      <div style="font-size:30px;font-weight:900;color:#e2e8f0;line-height:1">${e.jersey_number!==null&&e.jersey_number!==void 0?p(String(e.jersey_number)):"-"}</div>
      <button class="az-jersey-self-edit-btn" style="border:none;background:#0ea5e9;color:#fff;font-weight:700;font-size:13px;padding:9px 14px;border-radius:9px;cursor:pointer;white-space:nowrap">ไม่ตรง? แก้ไข</button>
    </div>
  </div>`}function vn(e){const t=e.jersey_number!==null&&e.jersey_number!==void 0;return`<div class="az-jersey-self" style="width:100%;background:${t?"#151a26":"rgba(217,119,6,.14)"};border:1px solid ${t?"#232838":"#d97706"};border-radius:14px;padding:16px;text-align:left;box-sizing:border-box">
    <div style="font-size:12.5px;color:${t?"#94a3b8":"#fbbf24"};font-weight:700;margin-bottom:10px">${t?"แก้ไขเบอร์เสื้อ":"⚠️ ยังไม่มีเบอร์เสื้อในระบบ กรุณาระบุเบอร์ที่ใส่จริงวันนี้เพื่อยืนยันการเช็คอิน"}</div>
    <div style="display:flex;align-items:center;gap:8px">
      <input type="number" min="0" class="az-jersey-self-input" value="${e.jersey_number??""}" placeholder="เช่น 7" style="flex:1;min-width:0;border:1px solid #334155;border-radius:9px;padding:11px 12px;font-size:20px;font-weight:800;background:#0b0f1a;color:#e2e8f0;box-sizing:border-box"/>
      <button class="az-jersey-self-save-btn" style="flex-shrink:0;border:none;background:#16a34a;color:#fff;font-weight:800;font-size:14px;padding:11px 16px;border-radius:9px;cursor:pointer">บันทึก</button>
    </div>
  </div>`}function Vi(e,t,n){const i=()=>{const a=t.jersey_number!==null&&t.jersey_number!==void 0;n&&(n.disabled=!a,n.style.opacity=a?"1":".45",n.style.cursor=a?"pointer":"not-allowed",n.textContent=a?"✓ เสร็จสิ้น":"กรุณาระบุเบอร์เสื้อก่อน")},o=()=>{e.innerHTML=yn(t),i()};e.addEventListener("click",async a=>{if(a.target.closest(".az-jersey-self-edit-btn")){e.innerHTML=vn(t);return}if(a.target.closest(".az-jersey-self-save-btn")){const c=e.querySelector(".az-jersey-self-input").value.trim();if(c===""){g("กรุณากรอกเบอร์เสื้อ");return}const l=Number(c);if(Number.isNaN(l)||l<0){g("เบอร์เสื้อไม่ถูกต้อง");return}const{error:f}=await h.from("azfutsal_players").update({jersey_number:l}).eq("id",t.id);if(f){g("บันทึกเบอร์เสื้อไม่สำเร็จ: "+f.message);return}t.jersey_number=l,o(),g("บันทึกเบอร์เสื้อแล้ว"),I()}}),e.addEventListener("keydown",a=>{var d,s;a.key==="Enter"&&((d=a.target.classList)!=null&&d.contains("az-jersey-self-input"))&&((s=e.querySelector(".az-jersey-self-save-btn"))==null||s.click())}),i()}function hn(e,t,n){const i=pe(),o=fe();if(!i&&!o)return"";const a=!!(n!=null&&n.parent_permission_confirmed),d=!!(n!=null&&n.attire_confirmed),s=c=>`flex:1;min-width:130px;padding:8px;border-radius:9px;border:1px solid ${c?"#16a34a":"#334155"};background:${c?"rgba(22,163,74,.18)":"transparent"};color:${c?"#4ade80":"#94a3b8"};font-size:11px;font-weight:700;cursor:pointer`;return`<div class="az-checkin-extra" data-day="${e}" data-player-id="${p(t)}" style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,.08);display:flex;gap:6px;flex-wrap:wrap">
    ${i?`<button class="az-extra-toggle" data-field="parent_permission_confirmed" style="${s(a)}">${a?"✅":"⬜"} ใบอนุญาตผู้ปกครอง</button>`:""}
    ${o?`<button class="az-extra-toggle" data-field="attire_confirmed" style="${s(d)}">${d?"✅":"⬜"} แต่งกายเรียบร้อย</button>`:""}
  </div>`}function Wi(e){e.addEventListener("click",async t=>{const n=t.target.closest(".az-extra-toggle");if(!n)return;const i=n.closest(".az-checkin-extra");if(!i)return;const o=Number(i.dataset.day),a=i.dataset.playerId,d=he(a,o);if(!d)return;const s=n.dataset.field,c=!d[s],{error:l}=await h.from("azfutsal_event_checkins").update({[s]:c}).eq("day",o).eq("player_id",a);if(l){g("บันทึกไม่สำเร็จ: "+l.message);return}d[s]=c,i.outerHTML=hn(o,a,d),I()})}function wn(){return r.identity.student&&r.players.find(e=>e.student_id===r.identity.student.id)||null}function he(e,t){return r.eventCheckins.find(n=>n.day===t&&n.player_id===e)||null}function ut(e,t){const n=r.players.filter(a=>{var d;return((d=r.teams.find(s=>s.id===a.team_id))==null?void 0:d.level)===e}),i=new Set(r.eventCheckins.filter(a=>a.day===t&&a.confirmed).map(a=>a.player_id)),o=new Set(r.eventCheckins.filter(a=>a.day===t&&!a.confirmed).map(a=>a.player_id));return{done:n.filter(a=>i.has(a.id)).length,pending:n.filter(a=>o.has(a.id)).length,total:n.length}}function St(){const e=new Map([[1,new Set],[2,new Set]]);r.eventCheckins.filter(a=>a.confirmed&&(a.day===1||a.day===2)).forEach(a=>e.get(a.day).add(a.player_id)),r.checkins.forEach(a=>{const d=ve(a.level,a.match_code);e.has(d)&&e.get(d).add(a.player_id)});const t=new Set([...e.get(1),...e.get(2)]),n=new Map(r.teams.map(a=>[a.id,a])),i=new Intl.Collator("th",{numeric:!0,sensitivity:"base"}),o=new Map([...r.teams].sort((a,d)=>{if(a.level!==d.level)return a.level==="MS"?-1:1;const s=a.team_code||a.name||"",c=d.team_code||d.name||"";return i.compare(s,c)||i.compare(String(a.id),String(d.id))}).map((a,d)=>[a.id,d]));return r.players.filter(a=>t.has(a.id)).map(a=>{var d,s,c;return{level:((d=n.get(a.team_id))==null?void 0:d.level)||"",teamOrder:o.get(a.team_id)??Number.MAX_SAFE_INTEGER,jerseyNumber:a.jersey_number!=null&&String(a.jersey_number).trim()!==""&&Number.isFinite(Number(a.jersey_number))?Number(a.jersey_number):Number.MAX_SAFE_INTEGER,studentCode:((s=a.students)==null?void 0:s.student_code)||"",fullName:((c=a.students)==null?void 0:c.full_name)||"",day1:e.get(1).has(a.id),day2:e.get(2).has(a.id)}}).filter(a=>a.level==="MS"||a.level==="HS").sort((a,d)=>a.level!==d.level?a.level==="MS"?-1:1:a.teamOrder-d.teamOrder||a.jerseyNumber-d.jerseyNumber||i.compare(a.fullName,d.fullName)||i.compare(a.studentCode,d.studentCode))}function Gi(e,t){const n=`${e}:${t}`;let i=2166136261;for(let u=0;u<n.length;u+=1)i^=n.charCodeAt(u),i=Math.imul(i,16777619);const o=i>>>0,a=(o%51-25)/10,d=(o>>>6)%9-4,s=(o>>>10)%5-2,c=(78+(o>>>14)%21)/100,l=8.6+(o>>>18)%13/10,f=["Mali","Itim","Sriracha"];return`font-family:'${f[(o>>>22)%f.length]}',cursive;font-size:${l.toFixed(1)}pt;color:#123a72;opacity:${c.toFixed(2)};transform:translate(${d}px,${s}px) rotate(${a.toFixed(1)}deg)`}function Yi(e,t,n){const i=String(e||"").trim().replace(/^(?:ด\.ช\.|ด\.ญ\.|เด็กชาย|เด็กหญิง|นาย|นางสาว|นาง)\s*/u,"").trim(),o=i.split(/\s+/u).filter(Boolean);if(o.length<2)return i;let a=2166136261;for(const d of`${t}:${n}:surname`)a^=d.charCodeAt(0),a=Math.imul(a,16777619);return(a>>>0)%2===0?o.join(" "):o[0]}function _n(e={}){const t=!!e.systemNames,n=St(),i=new URL("./pp5-form-logo.png",window.location.href).href;let o=0;const a=n.some(c=>c.level==="MS"),d=`<colgroup><col class="col-no"><col class="col-code"><col><col class="col-date"><col class="col-date"><col class="col-note"></colgroup><thead><tr><th colspan="6" class="doc-head"><div class="head-wrap"><div class="logo-ring"><img class="logo" src="${i}" alt="โลโก้โรงเรียน"></div><div class="title">ฟุตซอลภายในโรงเรียนมูลนิธิอาซิซสถานครั้งที่ 10</div><div class="subtitle">ประจำปีงบประมาณ 2569</div>${t?'<div class="system-notice">รายชื่อในช่องวันที่สร้างอัตโนมัติเพื่อจัดทำเอกสาร ไม่ใช่ลายเซ็นของนักเรียน</div>':""}</div></th></tr><tr><th>ลำดับที่</th><th>รหัสนักเรียน</th><th>ชื่อสกุล</th><th>12 สิงหาคม</th><th>15 สิงหาคม</th><th>หมายเหตุ</th></tr></thead>`,s=["MS","HS"].map(c=>{const l=n.filter(m=>m.level===c);if(!l.length)return"";const u=`<tr class="level-row"><td colspan="6">${c==="MS"?"ระดับมัธยมศึกษาตอนต้น":"ระดับมัธยมศึกษาตอนปลาย"} (${l.length} คน)</td></tr>${l.map(m=>{o+=1;const w=z=>t?`<td class="system-name-cell"><span class="system-name" style="${Gi(m.studentCode,z)}">${p(Yi(m.fullName,m.studentCode,z))}</span></td>`:"<td></td>";return`<tr><td class="center">${o}</td><td class="center code">${p(m.studentCode)}</td><td>${p(m.fullName)}</td>${w(1)}${w(2)}<td></td></tr>`}).join("")}`;return`<table class="level-document ${c==="HS"&&a?"hs-document":"ms-document"}">${d}<tbody>${u}</tbody></table>`}).join("");return`<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t?"รายชื่อยืนยันจากระบบ":"ใบรายชื่อเปล่า"} · นักกีฬาฟุตซอล ปีงบประมาณ 2569</title>${t?'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Itim&family=Mali:wght@400;500&family=Sriracha&display=swap" rel="stylesheet">':""}<style>
    @page{size:A4 portrait;margin:10mm 9mm 12mm}*{box-sizing:border-box}body{margin:0;color:#111;background:#fff;font-family:"Sarabun","Noto Sans Thai",Tahoma,sans-serif;font-size:11pt}.level-document{width:100%;border-collapse:collapse;table-layout:fixed}.hs-document{break-before:page;page-break-before:always;margin-top:10mm}thead{display:table-header-group}tr{break-inside:avoid;page-break-inside:avoid}.doc-head{border:none!important;padding:0 0 7mm!important;background:#fff!important}.head-wrap{min-height:${t?"48":"42"}mm;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;background:#fff}.logo-ring{width:24.5mm;height:24.5mm;border:0;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#fff;margin:0 auto 3mm}.logo{width:92%;height:92%;max-width:none;object-fit:contain;display:block}.title{font-size:16pt;font-weight:700;line-height:1.45}.subtitle{font-size:13pt;font-weight:700;margin-top:1mm}.system-notice{margin-top:2mm;padding:1.2mm 4mm;border:1px solid #1d4ed8;border-radius:999px;color:#1d4ed8;font-size:9.5pt;font-weight:700;background:#fff}th,td{border:1px solid #111;padding:2.1mm 2mm;vertical-align:middle;height:8mm}th{font-weight:700;text-align:center;background:#fff}.center{text-align:center}.code{font-variant-numeric:tabular-nums}.level-row td{font-weight:700;background:#e8eef7;padding:2mm 3mm}.system-name-cell{position:relative;text-align:center;height:11mm;padding:1mm!important;overflow:hidden}.system-name{display:block;line-height:1.05;overflow-wrap:anywhere}.col-no{width:11mm}.col-code{width:28mm}.col-date{width:31mm}.col-note{width:28mm}@media print{.hs-document{margin-top:0}body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
  </style></head><body>${s}</body></html>`}function Vt(e=!1){if(!St().length){g("ยังไม่มีรายชื่อนักเรียนที่เช็กอินหรือรายงานตัว");return}Ge(_n({systemNames:e}))}function Wt(e=!1){const t=St();if(!t.length){g("ยังไม่มีรายชื่อนักเรียนที่เช็กอินหรือรายงานตัว");return}const n=new Blob(["\uFEFF",_n({systemNames:e})],{type:"text/html;charset=utf-8"}),i=URL.createObjectURL(n),o=document.createElement("a");o.href=i,o.download=e?"รายชื่อยืนยันจากระบบ_ไม่ใช่ลายเซ็น_ปีงบประมาณ2569.html":"ใบรายชื่อเปล่า_นักกีฬาฟุตซอล_ปีงบประมาณ2569.html",document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(i),g(`ดาวน์โหลด${e?"รายชื่อยืนยันจากระบบ":"ใบรายชื่อเปล่า"} ${t.length} คนแล้ว`)}function $n(){return y("EVENT_CHECKIN_OPEN_TIME","")}function $e(){return y("EVENT_CHECKIN_CLOSE_TIME","")}function xt(e){const t=$n(),n=$e();return!t&&!n?"":`เปิดเช็คอิน ${t||"-"} - ${n||"-"} น.`}function zn(e){const t=$e(),n=Je(e).slice(0,10);if(!t||!n)return null;const i=new Date(`${n}T${t}:00`);return Number.isNaN(i.getTime())?null:i}function Qi(e){const t=zn(e);return!!t&&new Date>=t}function Xi(e){const t=Math.max(0,Math.floor(e/1e3)),n=Math.floor(t/3600),i=Math.floor(t%3600/60),o=t%60,a=d=>String(d).padStart(2,"0");return n>0?`${n}:${a(i)}:${a(o)}`:`${a(i)}:${a(o)}`}function Ji(e,t,n,i){const a=e*Math.PI/180,d=n*Math.PI/180,s=(n-e)*Math.PI/180,c=(i-t)*Math.PI/180,l=Math.sin(s/2)**2+Math.cos(a)*Math.cos(d)*Math.sin(c/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}function Ki(){const e=parseFloat(y("EVENT_VENUE_LAT","")),t=parseFloat(y("EVENT_VENUE_LNG","")),n=parseFloat(y("EVENT_VENUE_RADIUS","150"))||150;return Number.isNaN(e)||Number.isNaN(t)?null:{lat:e,lng:t,radius:n}}function Zi(e){return e&&e.code===1?"กรุณาอนุญาตให้เว็บนี้เข้าถึงตำแหน่ง GPS เพื่อเช็คอิน (เปิดสิทธิ์ตำแหน่งในตั้งค่าเบราว์เซอร์แล้วลองใหม่)":e&&e.code===2?"โทรศัพท์ค้นหาพิกัดไม่พบ กรุณาเปิด GPS/บริการตำแหน่งแล้วลองใหม่":e&&e.code===3?"ค้นหาพิกัดใช้เวลานานเกินไป กรุณาลองใหม่อีกครั้ง":"อุปกรณ์นี้ไม่สามารถอ่านพิกัด GPS ได้"}function kn(){return new Promise(e=>{if(!window.isSecureContext){e({error:"การใช้ GPS ต้องเปิดผ่านลิงก์ https:// เท่านั้น"});return}if(!navigator.geolocation){e({error:"อุปกรณ์นี้ไม่รองรับ GPS"});return}navigator.geolocation.getCurrentPosition(t=>e({lat:t.coords.latitude,lng:t.coords.longitude}),t=>e({error:Zi(t)}),{enableHighAccuracy:!0,timeout:15e3,maximumAge:0})})}function eo(e,t="ALL"){return r.teams.filter(n=>t==="ALL"||n.level===t).map(n=>{const i=r.players.filter(d=>d.team_id===n.id);if(!i.length)return null;const o=new Set(r.eventCheckins.filter(d=>d.day===e&&d.confirmed).map(d=>d.player_id)),a=i.filter(d=>o.has(d.id)).length;return a>=i.length?null:{team:n,done:a,total:i.length}}).filter(Boolean)}function to(e){if(!e.length)return"";const t=ce()?[1,2]:[1],n=o=>{const a=new Set(r.eventCheckins.filter(s=>s.day===o&&s.confirmed).map(s=>s.player_id)),d=e.filter(s=>a.has(s.id)).length;return{done:d,total:e.length,complete:d>=e.length}},i=t.every(o=>n(o).complete);return`
  <div style="border:1px solid ${i?"#bbf7d0":"#fde68a"};background:${i?"#f0fdf4":"#fffbeb"};border-radius:14px;padding:12px 14px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <div style="font-weight:700;font-size:13px">📷 สถานะเช็คอินเข้างาน</div>
      <span style="font-size:10.5px;font-weight:800;padding:3px 10px;border-radius:999px;background:${i?"#16a34a":"#d97706"};color:#fff">${i?"ครบแล้ว":"ยังไม่ครบ"}</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:4px">
      ${t.map(o=>{const a=n(o);return`<div style="font-size:12px;color:#374151;display:flex;justify-content:space-between;gap:8px"><span>วันที่ ${o} · ${p(He(o))}</span><b style="color:${a.complete?"#16a34a":"#d97706"}">${a.complete?"✅":"⏳"} ${a.done}/${a.total}</b></div>`}).join("")}
    </div>
  </div>`}function no(){const e=wn();if(!e)return"";const t=ce(),n=he(e.id,1),i=he(e.id,2),o=!!(n!=null&&n.confirmed),a=!!(i!=null&&i.confirmed),d=!!n,s=!!i,c=t?o&&a:o,l=t?d&&s:d;return c?`<div style="margin-bottom:14px;padding:11px 14px;border-radius:12px;background:#f0fdf4;border:1px solid #bbf7d0;color:#16a34a;font-weight:700;font-size:12.5px;display:flex;align-items:center;gap:8px">✅ เช็คอินเข้างานแล้ว${t?" (วันที่ 1 · วันที่ 2)":""}</div>`:l?'<div style="margin-bottom:14px;padding:11px 14px;border-radius:12px;background:#fffbeb;border:1px solid #fde68a;color:#b45309;font-weight:700;font-size:12.5px;display:flex;align-items:center;gap:8px">⏳ ส่งคำขอเช็คอินแล้ว รอสตาฟยืนยันใบอนุญาตผู้ปกครอง/การแต่งกายที่จุดลงทะเบียน</div>':`<button data-act="openEventSelfCheckin" style="width:100%;margin-bottom:14px;padding:12px;border-radius:12px;border:none;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;font-weight:800;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">📷 เช็คอินเข้างาน (วันที่ ${t&&d?2:1})</button>`}function io(){const e=r.eventCheckinDay||kt();return`<div style="display:flex;gap:6px;margin-bottom:10px">
    ${[1,2].map(t=>`<button data-act="setEventCheckinDay" data-v="${t}" style="flex:1;padding:8px;border-radius:9px;border:1px solid ${e===t?"#0ea5e9":"#e5e7eb"};background:${e===t?"#0ea5e9":"#fff"};color:${e===t?"#fff":"#374151"};font-weight:700;font-size:12.5px;cursor:pointer">วันที่ ${t}${t===2&&!ce()?" (ไม่บังคับ)":""}</button>`).join("")}
  </div>`}function Sn(e){const t=r.eventCheckinDay||kt(),n=ut("MS",t),i=ut("HS",t),o=xt(),a=r.eventCheckinIncompleteLevel||"ALL",d=eo(t,a),s=Qi(t);return ne(`
    <div style="font-weight:700;font-size:14px;margin-bottom:10px">📷 เช็คอินเข้างาน</div>
    ${io()}
    ${o?`<div style="font-size:11px;color:#6b7280;margin-bottom:8px">🕐 ${p(o)}</div>`:""}
    <div style="display:flex;gap:14px;margin-bottom:12px;font-size:11.5px;color:#6b7280">
      <div>${S.MS.label}: <b style="color:${S.MS.accent}">${n.done}/${n.total}</b>${n.pending?` <span style="color:#d97706">(รอยืนยัน ${n.pending})</span>`:""}</div>
      <div>${S.HS.label}: <b style="color:${S.HS.accent}">${i.done}/${i.total}</b>${i.pending?` <span style="color:#d97706">(รอยืนยัน ${i.pending})</span>`:""}</div>
    </div>
    <div style="display:flex;gap:8px">
      <button data-act="openEventCheckinScanner" data-day="${t}" style="flex:1;padding:10px;border:none;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;font-weight:800;font-size:12.5px;cursor:pointer">📷 สแกนเช็คอิน</button>
      <button data-act="openEventCheckinBigScreen" data-day="${t}" style="flex:1;padding:10px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;color:#374151;font-weight:800;font-size:12.5px;cursor:pointer">🖥️ จอใหญ่หน้าลงทะเบียน</button>
    </div>
    ${e?`<div style="margin-top:8px;padding:9px;border:1px solid #e5e7eb;border-radius:12px;background:#fafafa">
      <div style="font-size:11px;font-weight:800;color:#475569;margin-bottom:6px">ใบรายชื่อเปล่า</div>
      <div style="display:flex;gap:8px"><button data-act="printAttendanceForm" style="flex:1;padding:8px;border-radius:9px;border:1px solid #bbf7d0;background:#f0fdf4;color:#15803d;font-weight:800;font-size:11.5px;cursor:pointer">🖨️ พิมพ์</button><button data-act="downloadAttendanceForm" style="flex:1;padding:8px;border-radius:9px;border:1px solid #bfdbfe;background:#eff6ff;color:#1d4ed8;font-weight:800;font-size:11.5px;cursor:pointer">⬇️ ดาวน์โหลด</button></div>
      <div style="font-size:11px;font-weight:800;color:#475569;margin:9px 0 4px">ฉบับเติมชื่ออัตโนมัติ <span style="font-weight:600;color:#64748b">(ไม่ใช่ลายเซ็น)</span></div>
      <div style="font-size:9.5px;color:#64748b;margin-bottom:6px">เติมชื่อสีน้ำเงินครบทั้ง 2 วัน พร้อมข้อความกำกับทุกช่อง</div>
      <div style="display:flex;gap:8px"><button data-act="printAttendanceSystemNames" style="flex:1;padding:8px;border-radius:9px;border:1px solid #c4b5fd;background:#f5f3ff;color:#6d28d9;font-weight:800;font-size:11.5px;cursor:pointer">🖨️ พิมพ์ฉบับระบบ</button><button data-act="downloadAttendanceSystemNames" style="flex:1;padding:8px;border-radius:9px;border:1px solid #c4b5fd;background:#f5f3ff;color:#6d28d9;font-weight:800;font-size:11.5px;cursor:pointer">⬇️ ดาวน์โหลดฉบับระบบ</button></div>
    </div>`:""}
    ${zt()?`<button data-act="openEventCheckinPendingReview" data-day="${t}" style="width:100%;margin-top:8px;padding:9px;border-radius:10px;border:1px solid #fde68a;background:#fffbeb;color:#b45309;font-weight:800;font-size:12.5px;cursor:pointer">🕐 รอสตาฟยืนยัน (${(n.pending||0)+(i.pending||0)} คน)</button>`:""}
    ${e?`
    <div style="margin-top:14px;display:flex;gap:6px">
      ${["ALL","MS","HS"].map(c=>`<button data-act="setEventCheckinIncompleteLevel" data-v="${c}" style="flex:1;padding:6px;border-radius:8px;border:1px solid ${a===c?"#db2777":"#e5e7eb"};background:${a===c?"#db2777":"#fff"};color:${a===c?"#fff":"#374151"};font-weight:700;font-size:11.5px;cursor:pointer">${c==="ALL"?"ทั้งหมด":S[c].label}</button>`).join("")}
    </div>
    ${d.length?`
    <div style="margin-top:8px;padding:12px;border-radius:12px;background:${s?"#fef2f2":"#f9fafb"};border:1px solid ${s?"#fecaca":"#e5e7eb"}">
      <div style="font-size:12.5px;font-weight:800;color:${s?"#dc2626":"#6b7280"};margin-bottom:6px">${s?`⚠️ เลยเวลาปิดรับเช็คอิน (${p($e())} น.) แล้ว — ทีมต่อไปนี้มาไม่ครบ พิจารณาสกอร์ตามนโยบายที่ตั้งไว้`:`🕐 ยังมาไม่ครบ ${d.length} ทีม (จะเตือนชัดเจนเมื่อถึงเวลาปิดรับ${$e()?` ${p($e())} น.`:""})`}</div>
      <div style="display:flex;flex-direction:column;gap:4px">
        ${d.map(({team:c,done:l,total:f})=>`<div style="font-size:12px;color:#374151;display:flex;justify-content:space-between;gap:8px"><span>${me(c.level)} ${p(c.name)}</span><b style="color:${s?"#dc2626":"#6b7280"}">${l}/${f}</b></div>`).join("")}
      </div>
    </div>`:`<div style="margin-top:8px;padding:10px 12px;border-radius:12px;background:#f0fdf4;border:1px solid #bbf7d0;color:#16a34a;font-size:12px;font-weight:700">✅ ทุกทีมเช็คอินครบแล้วสำหรับวันที่ ${t}</div>`}
    <div style="margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6">
      <div style="font-size:12px;color:#374151;font-weight:600;margin-bottom:6px">เวลาเปิด-ปิดรับเช็คอิน (ใช้เวลาเดียวกันทั้ง 2 วัน)</div>
      <div style="display:flex;gap:8px;align-items:center">
        <input id="evci-open" type="time" value="${p($n())}" style="flex:1;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
        <span style="font-size:12px;color:#9ca3af">ถึง</span>
        <input id="evci-close" type="time" value="${p($e())}" style="flex:1;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
      </div>
      <div style="font-size:10.5px;color:#9ca3af;margin-top:6px">เวลาปิดรับใช้เป็นเส้นตายเตือนทีมมาไม่ครบด้านบน — ไม่ได้ล็อกปุ่มสแกนอัตโนมัติ ยังสแกนหลังเวลานี้ได้ตามปกติ</div>
      <button data-act="saveEventCheckinWindow" style="width:100%;margin-top:8px;padding:9px;border-radius:10px;border:none;background:#374151;color:#fff;font-weight:700;font-size:12px;cursor:pointer">บันทึกเวลาเปิด-ปิดรับ</button>
    </div>
    <div style="margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6">
      <div style="font-size:12px;color:#374151;font-weight:600;margin-bottom:6px">📍 พิกัดสถานที่จัดงาน (ตรวจตำแหน่งตอนนักกีฬาสแกนเช็คอินเอง)</div>
      <div style="display:flex;gap:8px;margin-bottom:6px">
        <input id="evci-venue-lat" type="text" inputmode="decimal" placeholder="ละติจูด" value="${p(y("EVENT_VENUE_LAT",""))}" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12.5px"/>
        <input id="evci-venue-lng" type="text" inputmode="decimal" placeholder="ลองจิจูด" value="${p(y("EVENT_VENUE_LNG",""))}" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12.5px"/>
      </div>
      <div style="display:flex;gap:8px">
        <button data-act="useCurrentGPSForVenue" style="flex:1;padding:8px;border-radius:9px;border:1px dashed #0ea5e9;background:#f0f9ff;color:#0369a1;font-weight:700;font-size:12px;cursor:pointer">📍 ใช้พิกัดปัจจุบัน (ยืนที่สนามแล้วกด)</button>
        <button data-act="viewVenueOnMap" style="flex-shrink:0;padding:8px 14px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:12px;cursor:pointer">🗺️ ดูแผนที่</button>
      </div>
      <label style="display:block;margin-top:8px;font-size:11.5px;color:#6b7280">รัศมีที่อนุญาต (เมตร)
        <input id="evci-venue-radius" type="number" min="10" value="${p(y("EVENT_VENUE_RADIUS","150"))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
      </label>
      <div style="font-size:10.5px;color:#9ca3af;margin-top:6px">ถ้าปล่อยพิกัดว่างไว้ ระบบจะไม่ตรวจตำแหน่ง (นักกีฬาสแกนเองได้จากที่ไหนก็ได้) — ตั้งไว้เมื่อไปถึงสนามจริงแล้วเท่านั้น</div>
      <button data-act="saveEventVenueGeofence" style="width:100%;margin-top:8px;padding:9px;border-radius:10px;border:none;background:#374151;color:#fff;font-weight:700;font-size:12px;cursor:pointer">บันทึกพิกัดสถานที่</button>
    </div>
    <div style="margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
        <span style="font-size:12px;color:#374151;font-weight:600">บังคับเช็คอินทั้ง 2 วัน</span>
        <button data-act="toggleEventCheckinBothDays" style="flex-shrink:0;font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${ce()?"#dcfce7":"#f3f4f6"};color:${ce()?"#16a34a":"#6b7280"}">${ce()?"บังคับ 2 วัน":"วันแรกพอ"}</button>
      </div>
      <div style="font-size:10.5px;color:#9ca3af;margin-top:6px">ถ้าปิด นักกีฬาจะถือว่าเช็คอินครบแค่เช็คอินวันแรก แต่ยังสแกนวันที่ 2 ได้ตามปกติ</div>
    </div>
    <div style="margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6">
      <div style="font-size:12px;color:#374151;font-weight:700;margin-bottom:8px">บังคับตรวจก่อนนับว่าเช็คอินสำเร็จ</div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px">
        <span style="font-size:12px;color:#374151;font-weight:600">ใบอนุญาตผู้ปกครอง</span>
        <button data-act="toggleEventCheckinRequirePermission" style="flex-shrink:0;font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${pe()?"#dcfce7":"#f3f4f6"};color:${pe()?"#16a34a":"#6b7280"}">${pe()?"บังคับตรวจ":"ไม่บังคับ"}</button>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
        <span style="font-size:12px;color:#374151;font-weight:600">แต่งกายเรียบร้อย</span>
        <button data-act="toggleEventCheckinRequireAttire" style="flex-shrink:0;font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${fe()?"#dcfce7":"#f3f4f6"};color:${fe()?"#16a34a":"#6b7280"}">${fe()?"บังคับตรวจ":"ไม่บังคับ"}</button>
      </div>
      <div style="font-size:10.5px;color:#9ca3af;margin-top:6px">ถ้าเปิด: สตาฟต้องติ๊กครบก่อนถึงจะบันทึกเช็คอินได้ ส่วนนักกีฬาที่สแกนเอง ระบบจะบันทึกเป็น "รอยืนยัน" จนกว่าสตาฟจะไปยืนยันในหน้าจอรีวิว (นักกีฬายืนยันเองไม่ได้)</div>
    </div>
    <div style="margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6">
      <button data-act="resetAllEventCheckins" style="width:100%;padding:9px;border-radius:10px;border:1px solid #fecaca;background:#fef2f2;color:#dc2626;font-weight:700;font-size:12px;cursor:pointer">🗑️ ล้างการเช็คอินเข้างานทั้งหมด (ทั้ง 2 วัน)</button>
    </div>`:""}
  `)}function Et(){const e=[];return(r.filterLevel==="ALL"?["MS","HS"]:[r.filterLevel]).forEach(t=>{H[t].forEach(n=>{const i=G(t,n.code),o=i.match;e.push({level:t,code:n.code,round:n.round,day:ve(t,n.code),teamA:i.teamA,teamB:i.teamB,teamAId:i.teamAId,teamBId:i.teamBId,m:o})})}),e.filter(t=>{var n;return!(r.filterTeam&&!`${t.teamA} ${t.teamB}`.toLowerCase().includes(r.filterTeam.toLowerCase())||r.filterTime&&!(((n=t.m)==null?void 0:n.kickoff_time)||"").includes(r.filterTime))}).sort((t,n)=>{var a,d;if(t.day!==n.day)return t.day-n.day;const i=((a=t.m)==null?void 0:a.kickoff_time)||"99:99",o=((d=n.m)==null?void 0:d.kickoff_time)||"99:99";return i.localeCompare(o)})}function En(){const e=[];return["MS","HS"].forEach(t=>{H[t].forEach(n=>{const i=G(t,n.code);e.push({level:t,code:n.code,round:n.round,day:ve(t,n.code),teamA:i.teamA,teamB:i.teamB,teamAId:i.teamAId,teamBId:i.teamBId,m:i.match})})}),e.sort((t,n)=>{var a,d;if(t.day!==n.day)return t.day-n.day;const i=((a=t.m)==null?void 0:a.kickoff_time)||"99:99",o=((d=n.m)==null?void 0:d.kickoff_time)||"99:99";return i.localeCompare(o)})}function oo(){var f;(f=document.getElementById("az-schedbig-overlay"))==null||f.remove();let e=kt(),t="ALL";const n=document.createElement("div");n.id="az-schedbig-overlay",n.style.cssText="position:fixed;inset:0;z-index:9999;background:#f8fafc;overflow:hidden;font-family:Sarabun,Arial,sans-serif;display:flex;flex-direction:column",n.innerHTML=`
    <div style="flex-shrink:0;padding:16px 24px;background:linear-gradient(120deg,#db2777,#6366f1 65%,#0ea5e9);color:#fff;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;box-shadow:0 4px 16px rgba(0,0,0,.12)">
      <div style="min-width:0">
        <div style="font-size:22px;font-weight:900">⚽ ${p(y("EVENT_NAME","AZFUTSALCUP"))} · ตารางการแข่งขัน</div>
        <div style="font-size:13px;opacity:.9;font-weight:700;margin-top:2px">${p(y("INFO_VENUE",""))}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <div id="az-schedbig-daytabs" style="display:flex;gap:6px"></div>
        <div id="az-schedbig-leveltabs" style="display:flex;gap:6px"></div>
        <button id="az-schedbig-standings" style="padding:9px 15px;border-radius:10px;border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.12);color:#fff;font-weight:700;font-size:13px;cursor:pointer">📊 ตารางคะแนน</button>
        <button id="az-schedbig-close" style="padding:9px 15px;border-radius:10px;border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.12);color:#fff;font-weight:700;font-size:13px;cursor:pointer">✕ ปิด</button>
      </div>
    </div>
    <div id="az-schedbig-body" style="flex:1;min-height:0;overflow-y:auto;padding:24px"></div>`,document.body.appendChild(n);const i=n.querySelector("#az-schedbig-daytabs"),o=n.querySelector("#az-schedbig-leveltabs"),a=n.querySelector("#az-schedbig-body"),d=u=>`padding:8px 14px;border-radius:9px;border:1px solid ${u?"#fff":"rgba(255,255,255,.4)"};background:${u?"#fff":"rgba(255,255,255,.12)"};color:${u?"#db2777":"#fff"};font-weight:800;font-size:12.5px;cursor:pointer;white-space:nowrap`;function s(){i.innerHTML=[1,2].map(u=>`<button class="az-schedbig-day" data-v="${u}" style="${d(e===u)}">วันที่ ${u}</button>`).join(""),o.innerHTML=["ALL","MS","HS"].map(u=>`<button class="az-schedbig-level" data-v="${u}" style="${d(t===u)}">${u==="ALL"?"ทั้งหมด":S[u].label}</button>`).join("")}function c(){const u=En().filter(b=>b.day===e&&(t==="ALL"||b.level===t));a.innerHTML=u.length?`<div style="zoom:1.25;display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:16px;max-width:1600px;margin:0 auto">${u.map(b=>Ke(b,{hideAdminActions:!0})).join("")}</div>`:`<div style="text-align:center;padding:80px 0;color:#9ca3af;font-size:15px">ไม่พบนัดของวันที่ ${e}</div>`}s(),c(),n.addEventListener("click",u=>{const b=u.target.closest(".az-schedbig-day");if(b){e=Number(b.dataset.v),s(),c();return}const m=u.target.closest(".az-schedbig-level");if(m){t=m.dataset.v,s(),c();return}const w=u.target.closest('[data-act="openMatchBigScreen"]');if(w){Mn(w.dataset.level,w.dataset.code);return}});const l=setInterval(async()=>{await I(),c()},4e3);n.querySelector("#az-schedbig-close").addEventListener("click",()=>{clearInterval(l),n.remove()}),n.querySelector("#az-schedbig-standings").addEventListener("click",()=>{Tn()})}function Ue(e,t,n){const i=[...Se(1),...Se(2)],o=i.findIndex(([d,s])=>d===e&&s===t);return o===-1?null:i[o+n]||null}function Mt(){return En().find(e=>e.m&&["running","paused","half_break"].includes(e.m.clock_status))||null}function ao(){const e=Mt();return e?[e.level,e.code]:null}function Mn(e,t){var s;(s=document.getElementById("az-matchbig-overlay"))==null||s.remove();let n=e,i=t;const o=document.createElement("div");o.id="az-matchbig-overlay",o.style.cssText="position:fixed;inset:0;z-index:9999;background:#0b0f1a;display:flex;flex-direction:column;font-family:Sarabun,Arial,sans-serif",o.innerHTML=`
    <div style="position:absolute;top:16px;left:16px;right:16px;z-index:10;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button id="az-matchbig-prev" style="padding:9px 15px;border-radius:10px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-weight:700;font-size:13px;cursor:pointer">◀ คู่ก่อนหน้า</button>
        <button id="az-matchbig-live" style="padding:9px 15px;border-radius:10px;border:1px solid rgba(74,222,128,.4);background:rgba(74,222,128,.12);color:#4ade80;font-weight:700;font-size:13px;cursor:pointer">🔴 คู่ปัจจุบัน</button>
        <button id="az-matchbig-next" style="padding:9px 15px;border-radius:10px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-weight:700;font-size:13px;cursor:pointer">คู่ถัดไป ▶</button>
      </div>
      <div style="display:flex;gap:8px">
        <button id="az-matchbig-standings" style="padding:9px 15px;border-radius:10px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-weight:700;font-size:13px;cursor:pointer">📊 ดูตารางคะแนน</button>
        <button id="az-matchbig-close" style="padding:9px 15px;border-radius:10px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-weight:700;font-size:13px;cursor:pointer">✕ ปิด</button>
      </div>
    </div>
    <div id="az-matchbig-body" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px"></div>`,document.body.appendChild(o);function a(){const c=n,l=i,f=G(c,l),b={round:(H[c].find(V=>V.code===l)||{}).round,teamA:f.teamA,teamB:f.teamB,teamAId:f.teamAId,teamBId:f.teamBId,m:f.match},m=b.m,w=o.querySelector("#az-matchbig-prev"),z=o.querySelector("#az-matchbig-next"),A=Ue(c,l,-1),E=Ue(c,l,1);w&&(w.disabled=!A,w.style.opacity=A?"1":".4",w.style.cursor=A?"pointer":"not-allowed"),z&&(z.disabled=!E,z.style.opacity=E?"1":".4",z.style.cursor=E?"pointer":"not-allowed");const M=m&&m.score_a!==null&&m.score_b!==null,v=m&&["running","paused","half_break"].includes(m.clock_status),_=(m==null?void 0:m.clock_status)==="paused"?"หยุดเวลา":(m==null?void 0:m.clock_status)==="half_break"?"พักครึ่ง":"กำลังแข่งขัน",C=(V,J)=>r.matchEvents.filter(Y=>Y.level===c&&Y.match_code===l&&Y.team_id===V&&Y.event_type===J),L=de(C(b.teamAId,"goal")),j=de(C(b.teamBId,"goal")),U=de(C(b.teamAId,"yellow")),F=de(C(b.teamBId,"yellow")),Q=de(C(b.teamAId,"red")),q=de(C(b.teamBId,"red")),X=!M&&(L.length>0||j.length>0),x=M?m.score_a:X?L.length:null,k=M?m.score_b:X?j.length:null,{aWins:T,bWins:N}=yt(m,b.teamAId,b.teamBId),B=(V,J,Y,te)=>{const oe=[];return V.length&&oe.push(`<div style="font-size:18px;color:#e2e8f0;margin-top:6px">⚽ ${p(V.join(", "))}</div>`),J.length&&oe.push(`<div style="font-size:18px;color:#fbbf24;margin-top:4px">🟨 ${p(J.join(", "))}</div>`),Y.length&&oe.push(`<div style="font-size:18px;color:#f87171;margin-top:4px">🟥 ${p(Y.join(", "))}</div>`),oe.length?`<div style="text-align:${te}">${oe.join("")}</div>`:""},D=vt(m),P=document.getElementById("az-matchbig-body");P&&(P.innerHTML=`
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">${me(c)}<span style="color:#94a3b8;font-size:16px;font-weight:700">${p(b.round||"")} · ${p(l)}</span></div>
      ${v?`<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px"><span style="width:12px;height:12px;border-radius:50%;background:#22c55e;${m.clock_status==="running"?"animation:azLivePulse 1.2s ease-in-out infinite":""}"></span><span style="color:#4ade80;font-weight:800;font-size:18px">${_}</span>${ht(m,{compact:!0,onDark:!0})}</div>`:M?'<div style="color:#94a3b8;font-weight:700;font-size:16px;margin-bottom:20px">จบการแข่งขัน</div>':`<div style="color:#94a3b8;font-weight:700;font-size:16px;margin-bottom:20px">${p((m==null?void 0:m.kickoff_time)||"รอแข่ง")}</div>`}
      <div style="display:flex;align-items:center;justify-content:center;gap:5vw;width:100%;max-width:1400px">
        <div style="flex:1;text-align:right;min-width:0">
          <div style="font-size:min(6vw,64px);font-weight:900;color:${T?"#4ade80":"#fff"};line-height:1.15;overflow-wrap:break-word">${p(b.teamA)||"รอผลรอบก่อน"}</div>
        </div>
        <div style="flex-shrink:0;text-align:center">
          <div style="display:flex;align-items:center;gap:20px;font-size:min(14vw,150px);font-weight:900;color:#fff;line-height:1">
            <span>${x??"-"}</span><span style="color:#475569">:</span><span>${k??"-"}</span>
          </div>
          ${X?'<div style="font-size:14px;color:#94a3b8;font-weight:700;margin-top:6px">ยังไม่บันทึกผล</div>':""}
          ${D?`<div style="margin-top:6px">${D}</div>`:""}
        </div>
        <div style="flex:1;text-align:left;min-width:0">
          <div style="font-size:min(6vw,64px);font-weight:900;color:${N?"#4ade80":"#fff"};line-height:1.15;overflow-wrap:break-word">${p(b.teamB)||"รอผลรอบก่อน"}</div>
        </div>
      </div>
      <div style="display:flex;justify-content:center;gap:5vw;width:100%;max-width:1400px;margin-top:30px">
        <div style="flex:1;min-width:0">${B(L,U,Q,"right")}</div>
        <div style="flex-shrink:0;width:150px"></div>
        <div style="flex:1;min-width:0">${B(j,F,q,"left")}</div>
      </div>`,cn())}a();const d=setInterval(async()=>{await I(),a()},3e3);o.querySelector("#az-matchbig-close").addEventListener("click",()=>{clearInterval(d),o.remove()}),o.querySelector("#az-matchbig-prev").addEventListener("click",()=>{const c=Ue(n,i,-1);c&&([n,i]=c,a())}),o.querySelector("#az-matchbig-next").addEventListener("click",()=>{const c=Ue(n,i,1);c&&([n,i]=c,a())}),o.querySelector("#az-matchbig-live").addEventListener("click",()=>{const c=ao();if(!c){g("ไม่มีคู่ที่กำลังแข่งขันอยู่ตอนนี้");return}[n,i]=c,a()}),o.querySelector("#az-matchbig-standings").addEventListener("click",()=>{Tn()})}function Tn(){var c;(c=document.getElementById("az-standbig-overlay"))==null||c.remove();let e="MS";const t=document.createElement("div");t.id="az-standbig-overlay",t.style.cssText="position:fixed;inset:0;z-index:10000;background:#f8fafc;overflow:hidden;font-family:Sarabun,Arial,sans-serif;display:flex;flex-direction:column",t.innerHTML=`
    <div style="flex-shrink:0;padding:16px 24px;background:linear-gradient(120deg,#db2777,#6366f1 65%,#0ea5e9);color:#fff;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;box-shadow:0 4px 16px rgba(0,0,0,.12)">
      <div style="font-size:22px;font-weight:900">📊 ${p(y("EVENT_NAME","AZFUTSALCUP"))} · ตารางคะแนน</div>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <div id="az-standbig-leveltabs" style="display:flex;gap:6px"></div>
        <button id="az-standbig-close" style="padding:9px 15px;border-radius:10px;border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.12);color:#fff;font-weight:700;font-size:13px;cursor:pointer">✕ ปิด</button>
      </div>
    </div>
    <div id="az-standbig-body" style="flex:1;min-height:0;overflow-y:auto;padding:24px"></div>`,document.body.appendChild(t);const n=t.querySelector("#az-standbig-leveltabs"),i=t.querySelector("#az-standbig-body"),o=l=>`padding:8px 14px;border-radius:9px;border:1px solid ${l?"#fff":"rgba(255,255,255,.4)"};background:${l?"#fff":"rgba(255,255,255,.12)"};color:${l?"#db2777":"#fff"};font-weight:800;font-size:12.5px;cursor:pointer`;function a(){n.innerHTML=["MS","HS"].map(l=>`<button class="az-standbig-level" data-v="${l}" style="${o(e===l)}">${S[l].label}</button>`).join("")}function d(){const l=S[e],f=Pe(e),u=wt(e,1/0),b=Ut(e,"yellow"),m=Ut(e,"red"),w=(z,A)=>z.length?z.map((E,M)=>{const v=A==="goal"?E.goals:E[A],_=A==="goal"?"⚽":A==="yellow"?"🟨":"🟥";return`<div style="display:flex;align-items:center;gap:12px">
        <div style="width:22px;font-weight:800;color:#9ca3af;font-size:14px">${M+1}</div>
        ${ge(E.photoUrl)}
        <div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:700">${p(E.name)}</div><div style="font-size:12.5px;color:#6b7280">${p(E.team)}</div></div>
        <div style="font-size:20px;font-weight:900;color:${A==="red"?"#dc2626":A==="yellow"?"#d97706":l.accent}">${_} ${v}</div>
      </div>`}).join(""):'<div style="color:#9ca3af;font-size:13px">ยังไม่มีข้อมูล</div>';i.innerHTML=`
      <div style="max-width:1400px;margin:0 auto;display:flex;flex-direction:column;gap:20px">
        <div style="background:#fff;border:1px solid ${l.border};border-radius:16px;padding:18px;overflow-x:auto">
          <div style="font-weight:800;font-size:16px;margin-bottom:12px;color:${l.accent}">อันดับทีม · ${l.label}</div>
          <table style="width:100%;border-collapse:collapse;font-size:15px;white-space:nowrap">
            <thead><tr>
              ${["#","ทีม","GP","ชนะ","แพ้","GF","GA","GD","Y","R"].map(z=>`<th style="text-align:${z==="ทีม"?"left":"center"};padding:9px 10px;font-weight:800;color:#6b7280;border-bottom:2px solid #f3f4f6">${z}</th>`).join("")}
            </tr></thead>
            <tbody>
              ${f.length?f.map((z,A)=>`
                <tr style="background:${A%2===0?"#fff":l.soft}">
                  <td style="padding:10px;font-weight:700;color:#9ca3af">${A+1}</td>
                  <td style="padding:10px;font-weight:800">${p(z.team)}</td>
                  <td style="text-align:center;padding:10px">${z.gp}</td>
                  <td style="text-align:center;padding:10px;color:#16a34a;font-weight:800">${z.w}</td>
                  <td style="text-align:center;padding:10px;color:#dc2626;font-weight:800">${z.l}</td>
                  <td style="text-align:center;padding:10px">${z.gf}</td>
                  <td style="text-align:center;padding:10px">${z.ga}</td>
                  <td style="text-align:center;padding:10px;font-weight:800">${z.gd}</td>
                  <td style="text-align:center;padding:10px">${z.y}</td>
                  <td style="text-align:center;padding:10px">${z.r}</td>
                </tr>`).join(""):'<tr><td colspan="10" style="text-align:center;padding:24px;color:#9ca3af">ยังไม่มีผลการแข่งขัน</td></tr>'}
            </tbody>
          </table>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px">
          <div style="background:#fff;border:1px solid ${l.border};border-radius:16px;padding:18px">
            <div style="font-weight:800;font-size:16px;margin-bottom:12px;color:${l.accent}">⚽ ดาวซัลโว · ${l.label}</div>
            <div style="display:flex;flex-direction:column;gap:12px">
              ${w(u,"goal")}
            </div>
          </div>
          <div style="background:#fff;border:1px solid ${l.border};border-radius:16px;padding:18px">
            <div style="font-weight:800;font-size:16px;margin-bottom:12px;color:#d97706">🟨 ผู้ได้รับใบเหลือง · ${l.label}</div>
            <div style="display:flex;flex-direction:column;gap:12px">
              ${w(b,"yellow")}
            </div>
          </div>
          <div style="background:#fff;border:1px solid ${l.border};border-radius:16px;padding:18px">
            <div style="font-weight:800;font-size:16px;margin-bottom:12px;color:#dc2626">🟥 ผู้ได้รับใบแดง · ${l.label}</div>
            <div style="display:flex;flex-direction:column;gap:12px">
              ${w(m,"red")}
            </div>
          </div>
        </div>
      </div>`}a(),d(),t.addEventListener("click",l=>{const f=l.target.closest(".az-standbig-level");if(f){e=f.dataset.v,a(),d();return}});const s=setInterval(async()=>{await I(),d()},5e3);t.querySelector("#az-standbig-close").addEventListener("click",()=>{clearInterval(s),t.remove()})}function An(e,t=null){const n=r.scheduleDay===2?2:1,i=e.filter(o=>o.day===n&&!(t&&o.level===t.level&&o.code===t.code));return i.length?i.map(Ke).join(""):`<div style="text-align:center;padding:32px 0;color:#9ca3af;font-size:13px">ไม่พบนัดของวันที่ ${n} ที่ตรงกับตัวกรอง</div>`}function ro(){return`
  <div style="display:flex;gap:6px;margin-bottom:10px">
    ${[1,2].map(e=>{const t=r.scheduleDay===e,n=e===1?"#0284c7":"#7c3aed";return`<button data-act="setScheduleDay" data-v="${e}" style="flex:1;min-width:0;padding:9px 8px;border-radius:11px;border:1px solid ${t?n:"#e5e7eb"};background:${t?n:"#fff"};color:${t?"#fff":"#374151"};cursor:pointer;text-align:center"><span style="display:block;font-size:12px;font-weight:900">วันที่ ${e}</span><span style="display:block;margin-top:2px;font-size:9.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p(He(e))}</span></button>`}).join("")}
  </div>`}function so(e){return e==="ชิงที่ 3"||e==="ชิงที่ 1"?"รอบชิง":e}function lo(e,t){const n=t==="a"?e.refA:e.refB;return e.pool?"รอจับสลากรอบนี้":n?n.startsWith("W_M")?`ผู้ชนะ ${n.slice(2)}`:n.startsWith("L_M")?`ผู้แพ้ ${n.slice(2)}`:n==="FIRST_ROUND_BYE"?"ทีมที่ได้สิทธิ์บาย":n.startsWith("REC_")?"ทีมจากรอบแก้ตัว":n==="LOTTERY_1"||n==="LOTTERY_2"?"ทีมจับฉลากจากผู้แพ้รอบนี้":"รอผลรอบก่อน":"รอจับสลาก"}function co(e,t){const n=S[e],i=G(e,t.code),o=i.match||{},a=o.score_a!==null&&o.score_a!==void 0&&o.score_b!==null&&o.score_b!==void 0,{aWins:d,bWins:s}=yt(o,i.teamAId,i.teamBId),c=(f,u)=>{const b=(f==="a"?t.refA:t.refB)==="FIRST_ROUND_BYE";return`${p(u||lo(t,f))}${b&&u?' <span style="color:#d97706">⭐</span>':""}`},l=(f,u,b,m)=>`
    <div style="flex:1;min-width:0;${b?"background:#dcfce7;border-radius:10px;":""}padding:7px 8px;text-align:${m}">
      <div style="font-size:13.5px;font-weight:${b?800:600};color:${u?b?"#15803d":"#111827":"#9ca3af"};line-height:1.3;overflow-wrap:break-word">${c(f,u)}</div>
    </div>`;return`
  <div style="border:1px solid ${n.border};background:${n.soft};border-radius:14px;padding:12px 14px;overflow:hidden;box-shadow:0 3px 10px rgba(15,23,42,.07)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      ${me(e)}
      <span style="font-size:11px;color:#9ca3af;font-weight:600">${p(t.round)} · ${t.code}</span>
      <span style="flex:1"></span>
      <span style="font-size:11px;font-weight:700;color:${a?"#6b7280":n.base}">${a?"จบการแข่งขัน":p(o.kickoff_time||"รอแข่ง")}</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      ${l("a",i.teamA,d,"left")}
      <div style="flex-shrink:0;text-align:center;min-width:56px">
        ${a?`<div style="display:flex;align-items:center;justify-content:center;gap:4px;font-size:22px;font-weight:800"><span style="color:${d?"#15803d":"#9ca3af"}">${p(o.score_a)}</span><span style="color:#d1d5db;font-weight:600;font-size:15px">:</span><span style="color:${s?"#15803d":"#9ca3af"}">${p(o.score_b)}</span></div>${vt(o)}`:'<span style="font-size:11px;color:#9ca3af;font-weight:700">VS</span>'}
      </div>
      ${l("b",i.teamB,s,"right")}
    </div>
    ${t.round==="ชิงที่ 3"?'<div style="margin-top:5px;font-size:9.5px;color:#b45309;font-weight:700;text-align:center">ชิงอันดับ 3</div>':""}
    ${t.round==="ชิงที่ 1"?'<div style="margin-top:5px;font-size:9.5px;color:#7c3aed;font-weight:700;text-align:center">ชิงชนะเลิศ</div>':""}
  </div>`}function po(){const e=r.bracketLevel||"MS",t=[];H[e].forEach(a=>{const d=so(a.round);let s=t.find(c=>c.label===d);s||(s={label:d,matches:[]},t.push(s)),s.matches.push(a)});const n=e==="MS"?y("FIRST_ROUND_BYE_MS",""):"",i=r.theme==="dark"?["#172033","#2d1f13","#15243b","#231c3d","#0f2928","#2e2812"]:["#f8fafc","#fff7ed","#eff6ff","#f5f3ff","#f0fdfa","#fffbeb"],o=r.theme==="dark"?["#475569","#9a5b27","#3b6a9f","#6650a4","#247b75","#92762d"]:["#cbd5e1","#fed7aa","#bfdbfe","#ddd6fe","#99f6e4","#fde68a"];return`
  <div>
    <div style="display:flex;gap:6px;margin-bottom:10px">
      ${["MS","HS"].map(a=>`<button data-act="setBracketLevel" data-v="${a}" style="flex:1;padding:9px;border-radius:10px;border:1px solid ${e===a?S[a].base:"#e5e7eb"};background:${e===a?S[a].base:"#fff"};color:${e===a?"#fff":"#374151"};font-size:12.5px;font-weight:800;cursor:pointer">${S[a].label} · ${H[a].length} นัด</button>`).join("")}
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px">
      <div style="font-size:11.5px;color:#6b7280">เลื่อนซ้าย–ขวาเพื่อดูเส้นทางถึงรอบชิง</div>
      ${e==="MS"&&se()?`<div style="font-size:10.5px;color:#b45309;font-weight:700">⭐ ทีมบาย: ${p(O(n)||"รอจับสลาก")}</div>`:""}
    </div>
    <div style="display:flex;gap:6px;overflow-x:auto;padding:2px 1px 9px;scrollbar-width:thin">
      ${t.map((a,d)=>`<button data-act="jumpBracketRound" data-v="${d}" style="flex:0 0 auto;padding:7px 12px;border-radius:999px;border:1px solid ${o[d%o.length]};background:${i[d%i.length]};color:${r.theme==="dark"?"#f1f5f9":"#334155"};font-size:10.5px;font-weight:800;cursor:pointer">${p(a.label)} · ${a.matches.length}</button>`).join("")}
    </div>
    <div id="az-bracket-scroll" style="overflow-x:auto;overflow-y:hidden;padding:2px 2px 12px;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch">
      <div style="display:flex;align-items:stretch;gap:12px;min-width:max-content">
        ${t.map((a,d)=>`
        <div id="az-bracket-round-${d}" style="width:390px;flex:0 0 390px;scroll-snap-align:start;display:flex;flex-direction:column;box-sizing:border-box;padding:9px;border-radius:16px;background:${i[d%i.length]};border:1px solid ${o[d%o.length]};box-shadow:0 4px 14px rgba(15,23,42,.06)">
          <div style="position:sticky;top:0;z-index:1;text-align:center;font-size:11px;font-weight:800;color:#334155;background:rgba(255,255,255,.88);border:1px solid ${o[d%o.length]};border-radius:999px;padding:6px 8px;margin-bottom:9px;box-shadow:0 2px 6px rgba(15,23,42,.05)">${p(a.label)} · ${a.matches.length} นัด</div>
          <div style="display:flex;flex-direction:column;gap:${Math.max(8,d*4+8)}px;padding-top:${d*10}px;flex:1">
            ${a.matches.map(s=>co(e,s)).join("")}
          </div>
        </div>
        ${d<t.length-1?'<div style="width:22px;flex:0 0 22px;align-self:center;text-align:center;color:#94a3b8;font-size:26px;font-weight:300">›</div>':""}`).join("")}
      </div>
    </div>
  </div>`}function fo(){const e=Et(),t=r.scheduleMode==="bracket",n=Mt(),i=e.filter(o=>o.day===(r.scheduleDay===2?2:1)).length;return`
  <section>
    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:2px">
      <h2 style="margin:0;font-size:17px;font-weight:800">${t?"ผังการแข่งขัน":"ตารางการแข่งขัน"}</h2>
      ${t?"":`<span id="az-schedule-count" style="font-size:11px;color:#9ca3af;font-weight:600">${i} นัด</span>`}
    </div>
    <p style="margin:0 0 14px;font-size:12px;color:#6b7280">${p(y("INFO_VENUE",""))}</p>
    ${n?`
    <div style="position:sticky;top:6px;z-index:20;margin-bottom:8px">
      <button data-act="jumpToCurrentMatch" style="width:100%;padding:10px 12px;border-radius:12px;border:1px solid #86efac;background:linear-gradient(135deg,#16a34a,#22c55e);color:#fff;box-shadow:0 5px 16px rgba(22,163,74,.24);font-weight:900;font-size:13px;cursor:pointer">🔴 คู่ปัจจุบัน · ${S[n.level].label} ${n.code} — กดเพื่อเลื่อนไปยังคู่ที่กำลังแข่งขัน</button>
    </div>
    <div id="az-current-match" style="scroll-margin-top:70px;margin-bottom:14px;padding:10px;border:2px solid #22c55e;border-radius:17px;background:#f0fdf4;box-shadow:0 5px 18px rgba(22,163,74,.14)">
      <div style="display:flex;align-items:center;gap:7px;margin:0 2px 8px;color:#15803d;font-size:12px;font-weight:900"><span style="width:9px;height:9px;border-radius:50%;background:#22c55e;animation:azLivePulse 1.2s ease-in-out infinite"></span>กำลังแข่งขันอยู่ขณะนี้</div>
      ${Ke(n)}
    </div>`:`
    <button data-act="jumpToCurrentMatch" disabled style="width:100%;margin-bottom:14px;padding:10px 12px;border-radius:12px;border:1px solid #e5e7eb;background:#f9fafb;color:#9ca3af;font-weight:800;font-size:12.5px;cursor:not-allowed">⚪ ขณะนี้ยังไม่มีคู่ที่กำลังแข่งขัน</button>`}
    <button data-act="openScheduleBigScreen" style="width:100%;margin-bottom:14px;padding:11px;border-radius:12px;border:1px dashed #6366f1;background:#eef2ff;color:#4338ca;font-weight:800;font-size:13px;cursor:pointer">🖥️ เปิดจอใหญ่ดูตารางการแข่งขัน (สกอร์อัปเดตสด)</button>
    ${no()}
    ${y("REGISTRATION_OPEN_MS","0")==="1"||y("REGISTRATION_OPEN_HS","0")==="1"?`
    <button data-act="account" style="width:100%;margin-bottom:14px;padding:12px;border-radius:12px;border:none;background:linear-gradient(135deg,#ec4899,#db2777);color:#fff;font-weight:800;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">
      📝 ลงทะเบียนทีม (สมัครเข้าร่วมการแข่งขัน)
    </button>`:""}
    <div style="display:flex;gap:5px;padding:4px;background:#f3f4f6;border-radius:12px;margin-bottom:12px">
      <button data-act="setScheduleMode" data-v="timeline" style="flex:1;padding:8px;border-radius:9px;border:none;background:${t?"transparent":"#fff"};color:${t?"#6b7280":"#111827"};box-shadow:${t?"none":"0 1px 4px rgba(0,0,0,.08)"};font-size:12px;font-weight:800;cursor:pointer">🕐 ตารางตามเวลา</button>
      <button data-act="setScheduleMode" data-v="bracket" style="flex:1;padding:8px;border-radius:9px;border:none;background:${t?"#fff":"transparent"};color:${t?"#111827":"#6b7280"};box-shadow:${t?"0 1px 4px rgba(0,0,0,.08)":"none"};font-size:12px;font-weight:800;cursor:pointer">🏆 ผังการแข่งขัน</button>
    </div>
    ${t?po():`
    ${ro()}
    <div style="display:flex;gap:6px;margin-bottom:10px">
      ${["ALL","MS","HS"].map(o=>`<button data-act="setLevel" data-v="${o}" style="font-size:12.5px;padding:7px 14px;border-radius:9px;border:1px solid ${r.filterLevel===o?"#db2777":"#e5e7eb"};background:${r.filterLevel===o?"#db2777":"#fff"};color:${r.filterLevel===o?"#fff":"#374151"};font-weight:700;cursor:pointer">${o==="ALL"?"ทั้งหมด":S[o].label}</button>`).join("")}
    </div>
    <div style="display:flex;gap:8px;margin-bottom:14px">
      <input id="az-filterTeam" value="${p(r.filterTeam)}" placeholder="ค้นหาชื่อทีม" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:10px;padding:9px 12px;font-size:13px;outline:none;background:#faf9f8"/>
      <input id="az-filterTime" value="${p(r.filterTime)}" placeholder="เวลา เช่น 09:00" style="width:132px;border:1px solid #e5e7eb;border-radius:10px;padding:9px 12px;font-size:13px;outline:none;background:#faf9f8"/>
    </div>
    <div id="az-schedule-rows" style="display:flex;flex-direction:column;gap:10px">
      ${An(e,n)}
    </div>`}
  </section>`}const Rn=[{key:"full",label:"สิทธิ์เต็มรูปแบบ (แอดมิน)",desc:"เข้าถึงทุกส่วน: ทีม การเงิน ตั้งค่า ผลการแข่งขัน รายงานตัว"},{key:"checkin",label:"รับรายงานตัว",desc:"เปิดกล้องสแกน QR รายงานตัวนักกีฬาก่อนแข่งเท่านั้น"},{key:"result",label:"บันทึกผลการแข่งขัน",desc:"แก้ไขสกอร์ ผู้ทำประตู ใบเหลือง-แดงเท่านั้น"}];function uo(e,t,n){const i=S[e.level],o=t&&e.teamAId&&e.teamBId;if(!o&&!n)return"";const a=e.teamAId?r.teams.find(s=>s.id===e.teamAId):null,d=e.teamBId?r.teams.find(s=>s.id===e.teamBId):null;return`
  <div style="border:1px solid ${i.border};background:${i.soft};border-radius:12px;padding:10px 12px">
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">${me(e.level)}<span style="font-size:11px;color:#9ca3af;font-weight:600">${p(e.round)} · ${e.code}</span></div>
    <div style="font-size:13px;font-weight:700;margin-bottom:8px;overflow-wrap:break-word">${p(e.teamA)||'<span style="color:#c1c5cc">รอผลรอบก่อน</span>'} vs ${p(e.teamB)||'<span style="color:#c1c5cc">รอผลรอบก่อน</span>'}</div>
    <div style="display:flex;gap:8px">
      ${o?`<button data-act="openCheckinScanner" data-level="${e.level}" data-code="${e.code}" style="flex:1;padding:9px;border:none;border-radius:9px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;font-weight:700;font-size:11.5px;cursor:pointer">📷 รับรายงานตัว</button>`:""}
      ${n?`<button data-act="editMatch" data-level="${e.level}" data-code="${e.code}" style="flex:1;padding:9px;border:1px solid ${i.border};border-radius:9px;background:#fff;color:${i.accent};font-weight:700;font-size:11.5px;cursor:pointer">✏️ บันทึกผล</button>`:""}
    </div>
    ${o&&(a||d)?`<div style="display:flex;gap:8px;margin-top:6px">
      ${a?`<button data-act="printCheckinForm" data-id="${a.id}" style="flex:1;padding:7px;border:1px dashed ${i.border};border-radius:9px;background:#fff;color:#6b7280;font-weight:700;font-size:10px;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">📄 เอกสาร ${p(e.teamA)}</button>`:""}
      ${d?`<button data-act="printCheckinForm" data-id="${d.id}" style="flex:1;padding:7px;border:1px dashed ${i.border};border-radius:9px;background:#fff;color:#6b7280;font-weight:700;font-size:10px;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">📄 เอกสาร ${p(e.teamB)}</button>`:""}
    </div>
    <button data-act="openCheckinLiveDisplay" data-level="${e.level}" data-code="${e.code}" style="width:100%;margin-top:6px;padding:7px;border:1px dashed ${i.border};border-radius:9px;background:#fff;color:#6b7280;font-weight:700;font-size:10px;cursor:pointer">🖥️ จอแสดงผลสด (เปิดจอที่สองให้นักกีฬาดู)</button>`:""}
  </div>`}function xo(){const e=r.identity.scopes||[],t=e.includes("checkin"),n=e.includes("result"),i=Et();return`
  <section>
    <h2 style="margin:0 0 4px;font-size:17px;font-weight:800">หน้าสตาฟ</h2>
    <p style="margin:0 0 16px;font-size:12.5px;color:#6b7280">เลือกนัดที่ต้องการ${t&&n?"รับรายงานตัวหรือบันทึกผล":t?"รับรายงานตัว":"บันทึกผล"} — สิทธิ์นี้เข้าถึงเฉพาะส่วนนี้เท่านั้น</p>
    ${t?`<div style="margin-bottom:14px">${Sn(!1)}</div>`:""}
    <div style="display:flex;gap:6px;margin-bottom:14px">
      ${["ALL","MS","HS"].map(o=>`<button data-act="setLevel" data-v="${o}" style="font-size:12.5px;padding:7px 14px;border-radius:9px;border:1px solid ${r.filterLevel===o?"#db2777":"#e5e7eb"};background:${r.filterLevel===o?"#db2777":"#fff"};color:${r.filterLevel===o?"#fff":"#374151"};font-weight:700;cursor:pointer">${o==="ALL"?"ทั้งหมด":S[o].label}</button>`).join("")}
    </div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${i.map(o=>uo(o,t,n)).join("")||'<div style="text-align:center;padding:32px 0;color:#9ca3af;font-size:13px">ยังไม่มีตารางแข่ง</div>'}
    </div>
  </section>`}function Ln(e){var n;const t=r.players.find(i=>i.id===e);return((n=t==null?void 0:t.students)==null?void 0:n.full_name)||""}function de(e){const t=[],n=new Map;return e.forEach(i=>{n.has(i.player_id)||(n.set(i.player_id,[]),t.push(i.player_id)),i.minute!=null&&n.get(i.player_id).push({minute:i.minute,isPenalty:!!i.is_penalty})}),t.map(i=>{const o=Ln(i),a=n.get(i).sort((d,s)=>d.minute-s.minute);return o?o+(a.length?` (${a.map(d=>d.minute+"'"+(d.isPenalty?"P":"")).join(", ")})`:""):""}).filter(Boolean)}function Ke(e,t){const n=S[e.level],i=e.m,o=i&&i.score_a!==null&&i.score_b!==null,a=i&&["running","paused","half_break"].includes(i.clock_status),d=(i==null?void 0:i.clock_status)==="paused"?"หยุดเวลา":(i==null?void 0:i.clock_status)==="half_break"?"พักครึ่ง":"กำลังแข่งขัน",s=(i==null?void 0:i.clock_status)==="paused"?"#d97706":(i==null?void 0:i.clock_status)==="half_break"?"#64748b":"#15803d",c=(i==null?void 0:i.clock_status)==="paused"?"#fef3c7":(i==null?void 0:i.clock_status)==="half_break"?"#e2e8f0":"#dcfce7",l=(_,C)=>r.matchEvents.filter(L=>L.level===e.level&&L.match_code===e.code&&L.team_id===_&&L.event_type===C),f=i?de(l(e.teamAId,"goal")):[],u=i?de(l(e.teamBId,"goal")):[],b=i?de(l(e.teamAId,"yellow")):[],m=i?de(l(e.teamBId,"yellow")):[],w=i?de(l(e.teamAId,"red")):[],z=i?de(l(e.teamBId,"red")):[],{aWins:A,bWins:E}=yt(i,e.teamAId,e.teamBId),M=(_,C,L,j)=>{const U=[];return _.length&&U.push(`<div style="font-size:10.5px;color:#6b7280;margin-top:3px;overflow-wrap:break-word;text-align:${j}">⚽ ${p(_.join(", "))}</div>`),C.length&&U.push(`<div style="font-size:10.5px;color:#6b7280;margin-top:2px;overflow-wrap:break-word;text-align:${j}">🟨 ${p(C.join(", "))}</div>`),L.length&&U.push(`<div style="font-size:10.5px;color:#6b7280;margin-top:2px;overflow-wrap:break-word;text-align:${j}">🟥 ${p(L.join(", "))}</div>`),U.join("")},v=(_,C,L)=>`
    <div style="flex:1;min-width:0;${C?"background:#dcfce7;border-radius:10px;":""}padding:6px 8px;text-align:${L}">
      <div style="font-size:13.5px;font-weight:${C?800:600};color:${C?"#15803d":"#111827"};line-height:1.3;overflow-wrap:break-word">${p(_)||'<span style="color:#c1c5cc">รอผลรอบก่อน</span>'}</div>
    </div>`;return`
  <div style="border:1px solid ${n.border};background:${n.soft};border-radius:14px;padding:12px 14px;overflow:hidden">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      ${me(e.level)}
      <span style="font-size:11px;color:#9ca3af;font-weight:600">${p(e.round)} · ${e.code}</span>
      <span style="flex:1"></span>
      ${a?`<span style="display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:800;color:${s};background:${c};padding:3px 9px;border-radius:999px"><span style="width:7px;height:7px;border-radius:50%;background:${s};${i.clock_status==="running"?"animation:azLivePulse 1.2s ease-in-out infinite":""}"></span>${d}</span>${ht(i,{compact:!0})}`:`<span style="font-size:${o?"10.5px":"13px"};font-weight:${o?700:800};color:${o?"#6b7280":n.base}">${o?"จบการแข่งขัน":p((i==null?void 0:i.kickoff_time)||"รอแข่ง")}</span>`}
      <button data-act="openMatchBigScreen" data-level="${e.level}" data-code="${e.code}" title="เปิดเต็มจอคู่นี้" style="flex-shrink:0;border:none;background:none;color:#9ca3af;font-size:14px;cursor:pointer;line-height:1;padding:2px">🖥️</button>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      ${v(e.teamA,A,"left")}
      <div style="flex-shrink:0;text-align:center;min-width:56px">
        ${o?`<div style="display:flex;align-items:center;justify-content:center;gap:4px;font-size:22px;font-weight:800"><span style="color:${A?"#15803d":"#9ca3af"}">${i.score_a}</span><span style="color:#d1d5db;font-weight:600;font-size:15px">:</span><span style="color:${E?"#15803d":"#9ca3af"}">${i.score_b}</span></div>${vt(i)}`:f.length||u.length?`<div style="display:flex;align-items:center;justify-content:center;gap:4px;font-size:22px;font-weight:800;color:#9ca3af">${f.length}<span style="color:#d1d5db;font-weight:600;font-size:15px">:</span>${u.length}</div><div style="font-size:8.5px;color:#9ca3af;font-weight:700;margin-top:1px;white-space:nowrap">ยังไม่บันทึกผล</div>`:'<span style="font-size:11px;color:#9ca3af;font-weight:700">VS</span>'}
      </div>
      ${v(e.teamB,E,"right")}
    </div>
    ${f.length||u.length||b.length||m.length||w.length||z.length?`
    <div style="display:flex;align-items:flex-start;gap:8px;margin-top:2px">
      <div style="flex:1;min-width:0">${M(f,b,w,"left")}</div>
      <div style="flex-shrink:0;min-width:56px"></div>
      <div style="flex:1;min-width:0">${M(u,m,z,"right")}</div>
    </div>`:""}
    ${r.identity.isAdmin&&!(t!=null&&t.hideAdminActions)?`<button data-act="editMatch" data-level="${e.level}" data-code="${e.code}" style="margin-top:10px;width:100%;padding:7px;border-radius:9px;border:1px solid ${n.border};background:#fff;color:${n.accent};font-weight:700;font-size:12px;cursor:pointer">แก้ไขผล/เวลา</button>`:""}
  </div>`}function go(e){var f;const t=S[e.level],n=r.players.filter(u=>u.team_id===e.id),i=r.payments.find(u=>u.team_id===e.id),o=Number(y("MAX_ROSTER",12)),a=i?i.status:"unpaid",d={verified:["ยืนยันแล้ว","#16a34a","#dcfce7"],pending:["รอตรวจสอบ","#f59e0b","#fef3c7"],rejected:["ถูกปฏิเสธ","#dc2626","#fee2e2"],unpaid:["ยังไม่ชำระ","#6b7280","#f3f4f6"]},[s,c,l]=d[a];return`
  <div style="border:1px solid ${t.border};background:${t.soft};border-radius:12px;padding:12px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px">
      <div style="display:flex;align-items:center;gap:6px;min-width:0">
        <span style="font-size:13.5px;font-weight:700;overflow-wrap:break-word">${p(e.name)}</span>
        ${e.is_reserve?De():""}${e.is_organizer?Oe():""}
      </div>
      <span style="flex-shrink:0;font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:999px;background:${l};color:${c};white-space:nowrap">${s}</span>
    </div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:${n.length?"8px":"0"}">หัวหน้าทีม: ${(f=e.captain)!=null&&f.full_name?p(e.captain.full_name):"-"} · นักกีฬา ${n.length}/${o} คน</div>
    ${n.length?`<button data-act="toggleTeamRoster" data-id="${e.id}" style="font-size:11px;font-weight:700;color:${t.accent};background:none;border:none;padding:0;cursor:pointer">${r.teamStatusExpanded===e.id?"▲ ซ่อนรายชื่อทีม":"▼ ดูรายชื่อทีม"}</button>`:""}
    ${r.teamStatusExpanded===e.id?`
    <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;margin-top:10px">
      ${[...n].sort((u,b)=>(u.jersey_number??999)-(b.jersey_number??999)).map(u=>wo(u)).join("")}
    </div>`:""}
  </div>`}function mo(){const e=r.teamStatusLevel,t=r.teams.filter(s=>s.level===e),n=t.filter(s=>{var c;return((c=r.payments.find(l=>l.team_id===s.id))==null?void 0:c.status)==="verified"}).length,i=t.filter(s=>s.is_reserve).length,o=t.filter(s=>{var c;return((c=r.payments.find(l=>l.team_id===s.id))==null?void 0:c.status)==="pending"}).length,a=s=>{var l;const c=((l=r.payments.find(f=>f.team_id===s.id))==null?void 0:l.status)||"unpaid";return s.is_reserve?2:c==="verified"?0:1},d=[...t].sort((s,c)=>a(s)-a(c)||s.name.localeCompare(c.name,"th"));return`
  <section>
    <h2 style="margin:0 0 4px;font-size:17px;font-weight:800">สถานะทีม</h2>
    <p style="margin:0 0 14px;font-size:12px;color:#6b7280">ภาพรวมการลงทะเบียนและการชำระเงินของทุกทีม</p>
    <div style="display:flex;gap:6px;margin-bottom:12px">
      ${["MS","HS"].map(s=>`<button data-act="setTeamStatusLevel" data-v="${s}" style="font-size:12.5px;padding:7px 14px;border-radius:9px;border:1px solid ${e===s?S[s].base:"#e5e7eb"};background:${e===s?S[s].base:"#fff"};color:${e===s?"#fff":"#374151"};font-weight:700;cursor:pointer">${S[s].label}</button>`).join("")}
    </div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:14px">
      ${n}/${t.length} ทีมยืนยันแล้ว${o?` · ${o} ทีมรอตรวจสอบ`:""}${i?` · ${i} ทีมสำรอง`:""}
    </div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${d.length?d.map(go).join(""):'<div style="text-align:center;padding:32px 0;color:#9ca3af;font-size:13px">ยังไม่มีทีมลงทะเบียนในระดับนี้</div>'}
    </div>
  </section>`}function bo(){const e=r.statsLevel,t=S[e],n=Pe(e),i=wt(e),o=yi(e);return`
  <section>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
      <h2 style="margin:0;font-size:17px;font-weight:800">สถิติทีม</h2>
      <div style="display:flex;gap:6px">
        ${["MS","HS"].map(a=>`<button data-act="setStats" data-v="${a}" style="font-size:12px;padding:6px 12px;border-radius:9px;border:1px solid ${r.statsLevel===a?S[a].base:"#e5e7eb"};background:${r.statsLevel===a?S[a].base:"#fff"};color:${r.statsLevel===a?"#fff":"#374151"};font-weight:700;cursor:pointer">${S[a].label}</button>`).join("")}
      </div>
    </div>
    <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:12px 14px">
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:12.5px;white-space:nowrap">
          <thead><tr>
            ${["ทีม","GP","ชนะ","แพ้","GF","GA","GD","Y","R"].map(a=>`<th style="text-align:${a==="ทีม"?"left":"center"};padding:6px 8px;font-weight:700;color:#6b7280">${a}</th>`).join("")}
          </tr></thead>
          <tbody>
            ${n.length?n.map((a,d)=>`
              <tr style="background:${d%2===0?"#fff":e==="MS"?"#FFF1F8":"#EEFBF1"}">
                <td style="padding:7px 8px;font-weight:600">${p(a.team)}</td>
                <td style="text-align:center;padding:7px 6px">${a.gp}</td>
                <td style="text-align:center;padding:7px 6px;color:#16a34a;font-weight:700">${a.w}</td>
                <td style="text-align:center;padding:7px 6px;color:#dc2626;font-weight:700">${a.l}</td>
                <td style="text-align:center;padding:7px 6px">${a.gf}</td>
                <td style="text-align:center;padding:7px 6px">${a.ga}</td>
                <td style="text-align:center;padding:7px 6px;font-weight:600">${a.gd}</td>
                <td style="text-align:center;padding:7px 6px">${a.y}</td>
                <td style="text-align:center;padding:7px 6px">${a.r}</td>
              </tr>`).join(""):'<tr><td colspan="9" style="text-align:center;padding:16px;color:#9ca3af">ยังไม่มีผลการแข่งขัน</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
    <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:12px 14px;margin-top:12px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:8px">ดาวซัลโว · ${t.label}</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${i.length?i.map(a=>`
          <div style="display:flex;align-items:center;gap:10px">
            ${ge(a.photoUrl)}
            <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${p(a.name)}</div><div style="font-size:11.5px;color:#6b7280">${p(a.team)}</div></div>
            <div style="font-size:15px;font-weight:800;color:${t.accent}">${a.goals}</div>
          </div>`).join(""):'<div style="color:#9ca3af;font-size:12.5px">ยังไม่มีข้อมูลประตู</div>'}
      </div>
    </div>
    <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:12px 14px;margin-top:12px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:8px">ใบเหลือง-ใบแดงมากที่สุด · ${t.label}</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${o.length?o.map(a=>`
          <div style="display:flex;align-items:center;gap:10px">
            ${ge(a.photoUrl)}
            <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${p(a.name)}</div><div style="font-size:11.5px;color:#6b7280">${p(a.team)}</div></div>
            <div style="display:flex;gap:6px;font-size:13px;font-weight:800">
              ${a.yellow?`<span style="color:#d97706">🟨${a.yellow}</span>`:""}
              ${a.red?`<span style="color:#dc2626">🟥${a.red}</span>`:""}
            </div>
          </div>`).join(""):'<div style="color:#9ca3af;font-size:12.5px">ยังไม่มีข้อมูลใบเหลือง-ใบแดง</div>'}
      </div>
    </div>
  </section>`}function yo(){return`
  <section>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:8px">
      <h2 style="margin:0;font-size:17px;font-weight:800">สรุปผล &amp; รางวัล</h2>
      <button data-act="openCert" style="display:flex;align-items:center;gap:5px;font-size:11.5px;padding:8px 12px;border-radius:9px;border:1px solid #db2777;color:#db2777;background:#fff;font-weight:700;cursor:pointer;white-space:nowrap">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        เกียรติบัตร
      </button>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      ${["MS","HS"].map(e=>{const t=S[e],n=fn(e);return`
        <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:16px">
          <div style="font-weight:800;font-size:14px;color:${t.accent};margin-bottom:10px">${t.label}</div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
            <div style="display:flex;align-items:center;gap:10px"><span style="font-size:18px">🥇</span><div><div style="font-size:11px;color:#6b7280">แชมป์</div><div style="font-size:13.5px;font-weight:700">${p(n.champion)||"-"}</div></div></div>
            <div style="display:flex;align-items:center;gap:10px"><span style="font-size:18px">🥈</span><div><div style="font-size:11px;color:#6b7280">รองแชมป์</div><div style="font-size:13.5px;font-weight:700">${p(n.runnerUp)||"-"}</div></div></div>
            <div style="display:flex;align-items:center;gap:10px"><span style="font-size:18px">🥉</span><div><div style="font-size:11px;color:#6b7280">${p(n.thirdLabel)}</div><div style="font-size:13.5px;font-weight:700">${p([n.third,n.third2].filter(Boolean).join(" · "))||"-"}</div></div></div>
          </div>
          <div style="border-top:1px solid rgba(0,0,0,.06);padding-top:10px;display:flex;flex-direction:column;gap:7px">
            ${rt("MVP",n.mvpAward,t)}
            ${rt("ดาวซัลโว",n.topScorerAward,t)}
            ${rt("ผู้รักษาประตูยอดเยี่ยม",n.bestGKAward,t)}
          </div>
        </div>`}).join("")}
    </div>
  </section>`}function In(e,t){const n=S[e.level];return t?Kn({name:e.name,award:rn(e.awardType),templateUrl:t}):`
  <div style="border:1px solid ${n.border};background:${n.soft};border-radius:14px;padding:22px;text-align:center">
    <div style="font-size:11px;letter-spacing:.08em;color:${n.accent};font-weight:700;margin-bottom:8px">เกียรติบัตร</div>
    <div style="font-size:13px;color:#6b7280;margin-bottom:2px">${p(y("EVENT_NAME","AZFUTSALCUP2025"))}</div>
    <div style="font-size:19px;font-weight:800;margin:10px 0 4px">${p(e.name)}</div>
    <div style="font-size:12.5px;color:#6b7280;margin-bottom:10px">${p(e.team)} · ${n.label}</div>
    <div style="font-size:14px;font-weight:700;color:${n.accent}">${p(e.award)}</div>
  </div>`}function vo(e,t,n){const i=S[e.level];return`
  <div data-act="certFull" data-idx="${t}" style="cursor:pointer;margin-bottom:18px">
    <div style="max-width:320px;margin:0 auto;border-radius:10px;box-shadow:0 3px 14px rgba(0,0,0,.12)">${In(e,n)}</div>
    <div style="margin-top:8px;text-align:center;font-size:12.5px;font-weight:700;color:${i.accent}">${p(e.award)}</div>
    <div style="text-align:center;font-size:10.5px;color:#9ca3af;margin-top:2px">แตะเพื่อดูเต็มจอ / พิมพ์</div>
  </div>`}function ho(){const e=y("CERT_ENABLED","1")==="1",t=r.certResults,n=y("CERT_TEMPLATE_URL",""),i=r.certFullscreenIndex;if(i!==null&&t&&t[i]){const o=t[i],a=S[o.level];return`
    <div style="position:fixed;inset:0;z-index:65;background:#fff;display:flex;flex-direction:column">
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;gap:20px;overflow-y:auto">
        <div style="width:100%;max-width:420px">${In(o,n)}</div>
        <div style="font-size:15px;font-weight:700;color:${a.accent};text-align:center">${p(o.award)}</div>
        ${n?`<button data-act="certPrint" data-idx="${i}" style="width:100%;max-width:320px;padding:12px;border-radius:10px;border:none;background:${a.accent};color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">🖨️ พิมพ์เกียรติบัตร</button>`:""}
        <div style="display:flex;gap:10px;width:100%;max-width:320px">
          <button data-act="certBack" style="flex:1;padding:12px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;font-weight:700;font-size:13.5px;cursor:pointer">ย้อนกลับ</button>
          <button data-act="certClose" style="flex:1;padding:12px;border-radius:10px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">ปิด</button>
        </div>
      </div>
    </div>`}return`
  <div style="position:fixed;inset:0;z-index:65;background:#fff;display:flex;flex-direction:column">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #ececec;flex-shrink:0">
      <h3 style="margin:0;font-size:15px;font-weight:800">${r.knownStudentCode?"เกียรติบัตรของฉัน":"ค้นหาเกียรติบัตร"}</h3>
      <button data-act="certClose" style="border:none;background:none;color:#9ca3af;font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="padding:20px;overflow-y:auto;flex:1">
      <div style="max-width:420px;margin:0 auto">
      ${e?`
      ${r.knownStudentCode?"":`
      <p style="margin:0 0 12px;font-size:13px;color:#6b7280">กรอกรหัสนักเรียนของคุณเพื่อค้นหาเกียรติบัตร</p>
      <div style="display:flex;gap:8px;margin-bottom:18px">
        <input id="az-certInput" value="${p(r.certInput)}" placeholder="รหัสนักเรียน" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:10px;padding:11px 14px;font-size:14px"/>
        <button data-act="certSearch" style="padding:0 18px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">ค้นหา</button>
      </div>`}
      ${t&&t.length?t.map((o,a)=>vo(o,a,n)).join(""):r.knownStudentCode?'<div style="text-align:center;padding:24px 0;color:#9ca3af;font-size:13px">ไม่พบข้อมูลเกียรติบัตรของคุณ อาจยังไม่ได้ลงทะเบียนแข่งขันฟุตซอล</div>':r.certInput&&t===null?'<div style="text-align:center;padding:24px 0;color:#9ca3af;font-size:13px">ไม่พบข้อมูล กรุณาตรวจสอบรหัสนักเรียน</div>':""}
      `:'<div style="text-align:center;padding:24px 0;color:#9ca3af;font-size:13px">ยังไม่เปิดใช้งานเกียรติบัตรสำหรับรุ่นนี้</div>'}
      </div>
    </div>
  </div>`}function Gt(e){return`<section><div style="text-align:center;padding:60px 20px;color:#6b7280;font-size:13.5px">${p(e)}</div></section>`}function Z(e){var t,n;return e.photo_url||((t=e.students)==null?void 0:t.image_url)||((n=e.students)==null?void 0:n.photo_url)}function ge(e){return e?`<img src="${p(e)}" style="width:30px;height:38px;border-radius:8px;border:1px solid #d1d5db;object-fit:cover;flex-shrink:0;box-shadow:0 1px 3px rgba(0,0,0,.2)"/>`:'<div style="width:30px;height:38px;border-radius:8px;border:1px solid #d1d5db;background:#e5e7eb;flex-shrink:0"></div>'}function wo(e){var a,d;const t=Z(e),n=p((((a=e.students)==null?void 0:a.full_name)||"?").replace(/^[ดญ]\.[ชญ]\./,"").trim().charAt(0)),i="width:100%;height:100%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:22px;font-weight:800";return`
  <div style="background:#fff;border-radius:16px;box-shadow:0 3px 10px rgba(0,0,0,.1);overflow:hidden">
    <div style="position:relative;margin:8px 8px 0;aspect-ratio:1;border-radius:12px;overflow:hidden;box-shadow:0 5px 14px rgba(0,0,0,.22)">
      ${t?`<img src="${p(t)}" style="width:100%;height:100%;object-fit:cover" onerror="this.replaceWith(Object.assign(document.createElement('div'),{textContent:'${n}',style:'${i}'}))"/>`:`<div style="${i}">${n}</div>`}
      <div style="position:absolute;inset:0;background:linear-gradient(135deg, rgba(255,255,255,.4) 0%, rgba(255,255,255,0) 45%, rgba(0,0,0,0) 70%, rgba(0,0,0,.08) 100%);pointer-events:none"></div>
      ${e.jersey_number!==null&&e.jersey_number!==void 0?`<div style="position:absolute;bottom:4px;right:4px;background:rgba(17,24,39,.75);color:#fff;font-size:11px;font-weight:800;padding:2px 7px;border-radius:999px">#${p(e.jersey_number)}</div>`:""}
    </div>
    <div style="padding:6px 8px 9px;text-align:center">
      <div style="font-size:11.5px;font-weight:700;line-height:1.3;overflow-wrap:break-word">${p(((d=e.students)==null?void 0:d.full_name)||"")}</div>
    </div>
  </div>`}function _o(){const e=r;if(!e.identity.session)return Gt("กรุณาเข้าสู่ระบบ pp5 ก่อน");if(e.identity.isAdmin){if(e.adminManageTeamId){const n=e.teams.find(i=>i.id===e.adminManageTeamId);if(n)return st(n,!0);e.adminManageTeamId=null}return e.adminCreatingTeam?Yt(!0):$o()}if(!e.identity.student)return Gt("หน้านี้สำหรับนักเรียน (หัวหน้าทีม/ตัวแทนทีม) เท่านั้น");const t=e.teams.find(n=>n.captain_student_id===e.identity.student.id);return t?st(t,!1):e.teamCodeLookupResult&&typeof e.teamCodeLookupResult=="object"?st(e.teamCodeLookupResult,!1,!0):Yt(!1)}function $o(){return`
  <section>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;gap:8px">
      <h2 style="margin:0;font-size:17px;font-weight:800">จัดการทีม (แอดมิน)</h2>
      <button data-act="adminNewTeam" style="font-size:12px;padding:8px 12px;border-radius:9px;border:none;background:#db2777;color:#fff;font-weight:700;cursor:pointer;white-space:nowrap">+ สร้างทีมใหม่</button>
    </div>
    <p style="margin:0 0 16px;font-size:12.5px;color:#6b7280">เลือกทีมเพื่อจัดการนักกีฬา/หัวหน้า-รองหัวหน้าทีม/การชำระเงิน</p>
    ${["MS","HS"].map(e=>{const t=r.teams.filter(o=>o.level===e),n=Number(y(e==="MS"?"MAX_TEAMS_MS":"MAX_TEAMS_HS","")||0),i=r.payments.filter(o=>{var a;return o.status==="verified"&&((a=r.teams.find(d=>d.id===o.team_id))==null?void 0:a.level)===e}).length;return`<div style="margin-bottom:14px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <div style="font-weight:700;font-size:12.5px;color:${S[e].accent}">${S[e].label}</div>
          ${n>0?`<span style="font-size:11px;color:#6b7280">${i}/${n} ทีมยืนยันแล้ว</span>`:""}
        </div>
        ${t.length?t.map(o=>`
          <button data-act="adminOpenTeam" data-id="${o.id}" style="display:block;width:100%;text-align:left;border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;margin-bottom:6px;background:#fff;cursor:pointer">
            <div style="display:flex;align-items:center;gap:6px"><span style="font-size:13px;font-weight:700">${p(o.name)}</span>${o.is_reserve?De():""}${o.is_organizer?Oe():""}</div>
            <div style="font-size:11px;color:#6b7280">${r.players.filter(a=>a.team_id===o.id).length} คน${o.team_code?" · "+p(o.team_code):""}</div>
          </button>`).join(""):'<div style="font-size:12px;color:#9ca3af">ยังไม่มีทีม</div>'}
      </div>`}).join("")}
  </section>`}function Yt(e){const t=r.capLookupResult,n=!e&&y("REGISTRATION_OPEN_MS","0")!=="1"&&y("REGISTRATION_OPEN_HS","0")!=="1";return`
  <section>
    ${e?'<button data-act="adminBackToList" style="border:none;background:none;color:#6b7280;font-size:12px;cursor:pointer;margin-bottom:8px">← กลับรายการทีม</button>':""}
    <h2 style="margin:0 0 4px;font-size:17px;font-weight:800">${n?"ดูข้อมูลทีม":`ลงทะเบียนทีม${e?" (แอดมิน)":""}`}</h2>
    ${n?'<p style="margin:0 0 16px;font-size:12.5px;color:#6b7280">ขณะนี้ปิดรับลงทะเบียนทีมใหม่แล้ว กรอกรหัสประจำทีมเพื่อดูข้อมูลทีมของคุณได้ที่นี่</p>':`
    <p style="margin:0 0 16px;font-size:12.5px;color:#6b7280">กรอกชื่อทีม เลือกระดับ${e?" ค้นหาหัวหน้าทีม":""} แล้วค่อยเพิ่มรายชื่อนักกีฬาในขั้นถัดไป</p>
    <div style="display:flex;flex-direction:column;gap:10px">
      <label style="font-size:11.5px;color:#6b7280">ชื่อทีม
        <input id="new-team-name" value="${p(r.newTeamName)}" placeholder="ชื่อทีม" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px"/>
      </label>
      <label style="font-size:11.5px;color:#6b7280">ระดับ
        <select id="new-team-level" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px">
          <option value="MS" ${r.newTeamLevel==="MS"?"selected":""}>ม.ต้น</option>
          <option value="HS" ${r.newTeamLevel==="HS"?"selected":""}>ม.ปลาย</option>
        </select>
      </label>
      ${e?`
      <div style="border-top:1px solid #e5e7eb;padding-top:10px">
        <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">หัวหน้าทีม (พิมพ์ชื่อหรือรหัสนักเรียน)</div>
        <div style="position:relative;margin-bottom:8px">
          <input id="cap-code" value="${p(r.capLookupCode)}" autocomplete="off" placeholder="ชื่อหรือรหัสนักเรียน" style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:13px"/>
          <div id="cap-search-results" style="position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid #e5e7eb;border-radius:10px;margin-top:4px;max-height:220px;overflow-y:auto;z-index:10;display:none;box-shadow:0 6px 16px rgba(0,0,0,.08)"></div>
        </div>
        ${t&&typeof t=="object"?`
          <div style="display:flex;align-items:center;gap:10px;background:#f9fafb;border-radius:10px;padding:8px">
            ${ge(t.image_url||t.photo_url)}
            <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${p(t.full_name)}</div><div style="font-size:11px;color:#6b7280">${p(t.student_code)}</div></div>
          </div>`:""}
      </div>`:""}
      <button data-act="createTeam" data-admin="${e?"1":"0"}" ${r.teamCreating?"disabled":""} style="margin-top:6px;padding:12px;border:none;border-radius:10px;background:${r.teamCreating?"#f3b6d1":"#db2777"};color:#fff;font-weight:700;font-size:14px;cursor:${r.teamCreating?"default":"pointer"}">${r.teamCreating?"กำลังสร้าง...":"สร้างทีม"}</button>
    </div>`}
    ${e?"":`
    <div style="${n?"":"border-top:1px solid #e5e7eb;margin-top:20px;padding-top:16px"}">
      ${n?"":'<div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">เป็นสมาชิกทีมอยู่แล้วแต่ไม่ใช่หัวหน้าทีม? กรอกรหัสประจำทีมเพื่อดูข้อมูลทีมของคุณ (ดูได้อย่างเดียว แก้ไขไม่ได้)</div>'}
      <div style="display:flex;gap:8px">
        <input id="team-code-input" value="${p(r.teamCodeInput)}" placeholder="เช่น HS-6N7D" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font-size:13px;text-transform:uppercase"/>
        <button data-act="lookupTeamCode" style="flex-shrink:0;padding:9px 16px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">ดูข้อมูล</button>
      </div>
      ${r.teamCodeLookupResult==="notfound"?'<div style="margin-top:6px;font-size:12px;color:#dc2626">ไม่พบทีมที่ใช้รหัสนี้ ตรวจสอบรหัสอีกครั้ง</div>':""}
    </div>`}
  </section>`}function st(e,t,n){const i=S[e.level],o=r.players.filter(v=>v.team_id===e.id),a=r.payments.find(v=>v.team_id===e.id),d=le(e.id),s=Number(y("MAX_ROSTER",12)),c=y("REGISTER_EDIT_DEADLINE",""),l=!n&&(t||!c||new Date<new Date(c)),f=r.rosterLookupResult,u=Xe(e),{goalList:b,cardList:m}=$i(e),w=zi(e),z=Pe(e.level).find(v=>v.id===e.id)||{y:0,r:0},A=Math.max(Number(y("DEPOSIT_AMOUNT",500))-Number(y("OPERATION_FEE",100))-z.y*Number(y("RATE_YELLOW",30))-z.r*Number(y("RATE_RED",50)),0),E=v=>e.captain_student_id===v.student_id?` <span style="color:${i.accent};font-weight:700">(หัวหน้าทีม)</span>`:e.vice_captain_student_id===v.student_id?' <span style="color:#6b7280;font-weight:700">(รองหัวหน้าทีม)</span>':"",M=v=>{if(!l)return"";const _=[];return e.captain_student_id!==v.student_id&&_.push(`<button data-act="setCaptain" data-team="${e.id}" data-student="${v.student_id}" style="border:none;background:none;color:${i.accent};font-size:10.5px;cursor:pointer;font-weight:600">ตั้งหัวหน้า</button>`),e.vice_captain_student_id!==v.student_id&&_.push(`<button data-act="setViceCaptain" data-team="${e.id}" data-student="${v.student_id}" style="border:none;background:none;color:#6b7280;font-size:10.5px;cursor:pointer;font-weight:600">ตั้งรองหัวหน้า</button>`),_.join(" · ")};return`
  <section style="display:flex;flex-direction:column;gap:14px">
    <div>
      ${t?'<button data-act="adminBackToList" style="border:none;background:none;color:#6b7280;font-size:12px;cursor:pointer;margin-bottom:8px">← กลับรายการทีม</button>':'<button data-act="tab" data-tab="schedule" style="border:none;background:none;color:#6b7280;font-size:12px;cursor:pointer;margin-bottom:8px">← กลับหน้าหลัก</button>'}
      ${n?'<button data-act="exitTeamCodeView" style="border:none;background:none;color:#6b7280;font-size:12px;cursor:pointer;margin-bottom:8px;margin-left:10px">ค้นหาทีมอื่น</button>':""}
      <div style="display:flex;align-items:center;gap:8px">
        ${me(e.level)}
        ${e.is_reserve?De():""}${e.is_organizer?Oe():""}
        ${r.editingTeamName?`
          <input id="edit-team-name-input" value="${p(r.editTeamNameValue)}" style="flex:1;min-width:0;font-size:15px;font-weight:700;border:1px solid #e5e7eb;border-radius:8px;padding:5px 8px"/>
          <button data-act="saveTeamName" data-team="${e.id}" style="flex-shrink:0;border:none;background:${i.base};color:#fff;font-size:11px;font-weight:700;padding:6px 10px;border-radius:7px;cursor:pointer">บันทึก</button>
          <button data-act="cancelEditTeamName" style="flex-shrink:0;border:none;background:none;color:#9ca3af;font-size:11px;cursor:pointer">ยกเลิก</button>
        `:`
          <h2 style="margin:0;font-size:17px;font-weight:800">${p(e.name)}</h2>
          ${l?`<button data-act="startEditTeamName" data-name="${p(e.name)}" style="flex-shrink:0;border:none;background:none;color:#9ca3af;font-size:13px;cursor:pointer" aria-label="แก้ไขชื่อทีม">✎</button>`:""}
        `}
      </div>
      ${e.team_code?`<div style="margin-top:6px;font-size:12px;color:${i.accent};font-weight:700">รหัสประจำทีม: ${p(e.team_code)}</div>`:""}
      ${e.is_reserve?'<div style="margin-top:4px;font-size:11.5px;color:#b45309">ทีมของคุณอยู่ในสถานะทีมสำรอง (สมัครและชำระเงินเรียบร้อยแล้ว แต่เกินโควตาทีมหลักของรุ่นนี้)</div>':""}
    </div>

    ${n?'<div style="font-size:12px;color:#6b7280;background:#f3f4f6;border-radius:10px;padding:8px 10px">🔒 กำลังดูข้อมูลทีมแบบอ่านอย่างเดียวผ่านรหัสทีม แก้ไขไม่ได้</div>':""}
    ${!l&&!n?`<div style="font-size:12px;color:#dc2626;background:#fee2e2;border-radius:10px;padding:8px 10px">หมดเวลาแก้ไขรายชื่อนักกีฬาแล้ว (ปิดแก้ไขเมื่อ ${p(c)})</div>`:""}
    ${to(o)}

    ${r.myTeamTab==="roster"?`
    <div style="border:1px solid ${i.border};background:${i.soft};border-radius:14px;padding:14px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
        <div style="font-weight:700;font-size:13.5px">รายชื่อนักกีฬา</div>
        <div style="font-size:11.5px;color:#6b7280">${o.length}/${s} คน</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:${l&&o.length<s?"12px":"0"}">
        ${o.length?o.map(v=>{var F,Q;const _=w.get(v.id),C=_&&_.events.length>0,L=r.expandedPlayerId===v.id,j=[];_!=null&&_.goals&&j.push(`⚽${_.goals}`),_!=null&&_.yellow&&j.push(`🟨${_.yellow}`),_!=null&&_.red&&j.push(`🟥${_.red}`);const U=q=>q.type==="goal"?"⚽":q.type==="yellow"?"🟨":"🟥";return`
          <div style="background:#fff;border-radius:10px;padding:8px">
            <div style="display:flex;align-items:center;gap:10px;${C?"cursor:pointer":""}" ${C?`data-act="togglePlayerEventDetail" data-id="${v.id}"`:""}>
              <div style="position:relative;flex-shrink:0">
                ${ge(Z(v))}
                ${l?`<label style="position:absolute;bottom:-3px;right:-3px;width:17px;height:17px;border-radius:50%;background:${i.base};display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.35)">
                  <input type="file" accept="image/*" data-act="uploadPlayerPhoto" data-id="${v.id}" style="display:none"/>
                  <span style="color:#fff;font-size:9px;line-height:1">📷</span>
                </label>`:""}
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700">${p(((F=v.students)==null?void 0:F.full_name)||"")}${E(v)}</div>
                <div style="font-size:11px;color:#6b7280;display:flex;align-items:center;gap:4px;flex-wrap:wrap">
                  <span>${p(((Q=v.students)==null?void 0:Q.student_code)||"")}</span>
                  ${r.editingJerseyId===v.id?`
                    <span>·</span>
                    <input id="edit-jersey-input" type="number" min="0" value="${p(r.editJerseyValue)}" style="width:56px;border:1px solid #e5e7eb;border-radius:6px;padding:2px 5px;font-size:11px"/>
                    <button data-act="saveJersey" data-id="${v.id}" style="border:none;background:none;color:${i.accent};font-size:11px;font-weight:700;cursor:pointer">บันทึก</button>
                    <button data-act="cancelEditJersey" style="border:none;background:none;color:#9ca3af;font-size:11px;cursor:pointer">ยกเลิก</button>
                  `:`
                    <span>${v.jersey_number!==null&&v.jersey_number!==void 0?`· เบอร์ ${v.jersey_number}`:"· ยังไม่ระบุเบอร์"}</span>
                    ${l?`<button data-act="startEditJersey" data-id="${v.id}" data-v="${v.jersey_number??""}" style="border:none;background:none;color:${i.accent};font-size:10.5px;cursor:pointer;font-weight:600">แก้ไข</button>`:""}
                  `}
                </div>
                ${j.length?`<div style="margin-top:3px;font-size:11px;color:#4b5563;font-weight:700">${j.join("  ")}</div>`:""}
                <div style="margin-top:3px;font-size:10.5px;color:#9ca3af">📷 ${ce()?`วันที่1 ${dt(v.id,1)} · วันที่2 ${dt(v.id,2)}`:`เช็คอินเข้างาน ${dt(v.id,1)}`}</div>
                ${M(v)?`<div style="margin-top:2px">${M(v)}</div>`:""}
              </div>
              <button data-act="showPlayerQR" data-id="${v.id}" style="border:none;background:none;color:#0ea5e9;font-size:11.5px;cursor:pointer;font-weight:600;flex-shrink:0">🔳 QR</button>
              ${l?`<button data-act="removePlayer" data-id="${v.id}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600;flex-shrink:0">ลบ</button>`:""}
              ${C?`<span style="flex-shrink:0;color:#9ca3af;font-size:10px">${L?"▲":"▼"}</span>`:""}
            </div>
            ${L&&C?`
            <div style="margin-top:8px;padding-top:8px;border-top:1px solid #f3f4f6;display:flex;flex-direction:column;gap:2px">
              ${_.events.map(q=>`<div style="font-size:11px;color:#4b5563;padding:3px 0">${U(q)} ${p(q.round||"")} vs ${p(q.opponent||"-")}${q.minute!=null?` · นาทีที่ ${q.minute}${q.isPenalty?" (จุดโทษ)":""}`:""}</div>`).join("")}
            </div>`:""}
          </div>`}).join(""):'<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีนักกีฬา</div>'}
      </div>

      ${l&&o.length<s?`
      <div style="border-top:1px solid rgba(0,0,0,.08);padding-top:10px">
        <div style="position:relative;margin-bottom:8px">
          <input id="roster-code" value="${p(r.rosterLookupCode)}" autocomplete="off" placeholder="พิมพ์ชื่อหรือรหัสนักเรียน" style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:13px"/>
          <div id="roster-search-results" style="position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid #e5e7eb;border-radius:10px;margin-top:4px;max-height:220px;overflow-y:auto;z-index:10;display:none;box-shadow:0 6px 16px rgba(0,0,0,.08)"></div>
        </div>
        ${f==="duplicate"?'<div style="font-size:12px;color:#dc2626;margin-bottom:8px">นักเรียนคนนี้ลงทะเบียนทีมอื่นไปแล้ว</div>':""}
        ${f&&typeof f=="object"?`
          <div style="display:flex;align-items:center;gap:10px;background:#fff;border-radius:10px;padding:8px;margin-bottom:8px">
            ${ge(f.image_url||f.photo_url)}
            <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${p(f.full_name)}</div><div style="font-size:11px;color:#6b7280">${p(f.student_code)}</div></div>
            <input id="roster-jersey" value="${p(r.rosterJersey)}" type="number" min="0" placeholder="เบอร์เสื้อ" style="width:88px;border:1px solid #e5e7eb;border-radius:8px;padding:7px 8px;font-size:12.5px"/>
          </div>
          <button data-act="addRosterAthlete" data-team="${e.id}" style="width:100%;padding:9px;border-radius:9px;border:none;background:${i.base};color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">เพิ่มนักกีฬา</button>
        `:""}
      </div>`:""}
    </div>`:""}

    ${r.myTeamTab==="matches"?`
    ${b.length?`
    <div style="border:1px solid ${i.border};background:${i.soft};border-radius:14px;padding:14px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:10px">⚽ สรุปผู้ทำประตูของทีม</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${b.map(v=>`<div style="display:flex;justify-content:space-between;align-items:center;font-size:12.5px"><span>${p(v.name)}</span><span style="font-weight:800;color:${i.accent}">${v.goals} ประตู</span></div>`).join("")}
      </div>
    </div>`:""}

    ${m.length?`
    <div style="border:1px solid #e5e7eb;border-radius:14px;padding:14px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:10px">🟨🟥 สรุปใบเหลือง/ใบแดงของทีม</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${m.map(v=>`
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:12.5px">
            <span>${p(v.name)}</span>
            <span style="text-align:right;color:#6b7280">${v.yellow.length?`<span style="color:#b45309;font-weight:700">🟨×${v.yellow.length}</span> (${p(v.yellow.join(", "))})`:""}${v.yellow.length&&v.red.length?" · ":""}${v.red.length?`<span style="color:#dc2626;font-weight:700">🟥×${v.red.length}</span> (${p(v.red.join(", "))})`:""}</span>
          </div>`).join("")}
      </div>
    </div>`:""}

    <div style="border:1px solid ${i.border};background:${i.soft};border-radius:14px;padding:14px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:${u.length?"10px":"0"}">ผลการแข่งขันของทีมคุณ</div>
      ${u.length?`<div style="display:flex;flex-direction:column;gap:8px">${u.map(v=>Ke(v)+(v.teamAId&&v.teamBId?Si(e,v.level,v.code):"")).join("")}</div>`:'<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีตารางแข่งของทีมนี้ (รอจับสลากประกบคู่)</div>'}
    </div>`:""}

    ${r.myTeamTab==="finance"?`
    <div style="border:1px solid #e5e7eb;border-radius:14px;padding:14px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:8px">ค่าประกันทีม (${W(y("DEPOSIT_AMOUNT",500))} บาท)</div>
      ${a?`
        ${Cn(a.status)}
        ${a.status==="pending"?'<div style="font-size:12px;color:#9ca3af">ส่งหลักฐานแล้ว รอแอดมินตรวจสอบ</div>':""}
        ${a.status==="rejected"?`
          <div style="font-size:11.5px;color:#dc2626;margin-bottom:8px">เหตุผล: ${p(a.admin_note||"-")}${n?"":"  กรุณายืนยันการลงทะเบียนและแนบหลักฐานใหม่"}</div>
          ${n?"":`<button data-act="openConfirmReg" data-team="${e.id}" style="width:100%;padding:11px;border:none;border-radius:10px;background:linear-gradient(135deg,#ec4899,#db2777);color:#fff;font-weight:800;font-size:14px;cursor:pointer">ยืนยันการลงทะเบียนอีกครั้ง</button>`}
        `:""}
        ${a.status!=="rejected"?`
          <div style="margin-top:10px;padding-top:10px;border-top:1px solid #f3f4f6;font-size:12px;color:#6b7280">
            <div>หักค่าดำเนินการ ${W((d==null?void 0:d.operation_fee)??y("OPERATION_FEE",100))} บาท${(d==null?void 0:d.yellow_count)??z.y?` · ใบเหลือง ${(d==null?void 0:d.yellow_count)??z.y} ใบ (−${W((d==null?void 0:d.yellow_deduction)??z.y*Number(y("RATE_YELLOW",30)))})`:""}${(d==null?void 0:d.red_count)??z.r?` · ใบแดง ${(d==null?void 0:d.red_count)??z.r} ใบ (−${W((d==null?void 0:d.red_deduction)??z.r*Number(y("RATE_RED",50)))})`:""}</div>
            <div style="margin-top:4px;font-size:13.5px;font-weight:800;color:${i.accent}">${d?"คืนเงินแล้ว":"คาดว่าจะได้เงินคืน"} ${W((d==null?void 0:d.refund_amount)??A)} บาท</div>
            ${d?`<button data-act="openRefundReceipt" data-team="${e.id}" style="width:100%;margin-top:10px;padding:10px;border-radius:9px;border:none;background:${i.base};color:#fff;font-weight:800;font-size:13px;cursor:pointer">🧾 ใบเสร็จรับเงินคืน ${p(d.receipt_no)}</button>`:`
            <button data-act="openRefundReceiptPreview" data-team="${e.id}" style="width:100%;margin-top:10px;padding:9px;border-radius:9px;border:1px dashed ${i.border};background:${i.soft};color:${i.accent};font-weight:700;font-size:12.5px;cursor:pointer">👁️ ดูตัวอย่างใบเสร็จ (ยังไม่ยืนยัน)</button>
            <div style="margin-top:6px;font-size:11px;color:#9ca3af">ใบเสร็จตัวจริงจะออกให้หลังผู้จัดยืนยันการคืนเงินแล้ว</div>`}
          </div>
        `:""}
      `:n?`
        <div style="font-size:12px;color:#9ca3af">ทีมนี้ยังไม่ได้ชำระค่าประกัน</div>
      `:o.length?`
        <button data-act="openConfirmReg" data-team="${e.id}" style="width:100%;padding:11px;border:none;border-radius:10px;background:linear-gradient(135deg,#ec4899,#db2777);color:#fff;font-weight:800;font-size:14px;cursor:pointer">✅ ยืนยันการลงทะเบียนสมัครเข้าร่วมแข่งขัน</button>
      `:`
        <div style="font-size:12px;color:#9ca3af">เพิ่มนักกีฬาอย่างน้อย 1 คนก่อนยืนยันการลงทะเบียน</div>
      `}
    </div>`:""}
  </section>`}function Cn(e){const t={pending:["รอตรวจสอบ","#f59e0b","#fef3c7"],verified:["ยืนยันแล้ว","#16a34a","#dcfce7"],rejected:["ถูกปฏิเสธ","#dc2626","#fee2e2"]},[n,i,o]=t[e]||["-","#6b7280","#f3f4f6"];return`<span style="display:inline-block;font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;background:${o};color:${i};margin-bottom:8px">${n}</span>`}function Ze(e,t,n={}){return`
  <div style="position:fixed;inset:0;z-index:55;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;padding:20px">
    <div ${n.bodyAttr||""} style="background:#fff;width:100%;max-width:360px;max-height:85vh;overflow-y:auto;border-radius:16px;padding:18px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h3 style="margin:0;font-size:15px;font-weight:800">${p(e)}</h3>
        <button data-act="closeModal" style="border:none;background:none;color:#9ca3af;font-size:16px;cursor:pointer">✕</button>
      </div>
      ${t}
    </div>
  </div>`}const zo=["หลักฐานไม่ชัดเจน อ่านยอดเงิน/เวลาโอนไม่ออก กรุณาถ่ายใหม่ให้ชัด","ยอดเงินที่โอนไม่ตรงกับค่าประกันทีม","ไฟล์ที่แนบไม่ใช่สลิปการโอนเงิน","แนบหลักฐานผิดทีม กรุณาตรวจสอบและอัปโหลดใหม่","ชื่อบัญชีผู้โอนไม่ตรงกับที่แจ้งไว้ กรุณาแนบหลักฐานเพิ่มเติม"];function ko(){const e=r.payments.find(n=>n.id===r.rejectPaymentId),t=e?r.teams.find(n=>n.id===e.team_id):null;return Ze(`ปฏิเสธการชำระเงิน${t?" · "+t.name:""}`,`
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:8px">เลือกข้อความตัวอย่าง (แก้ไขได้) หรือพิมพ์เหตุผลเอง — หัวหน้าทีมจะเห็นข้อความนี้ทันที</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">
      ${zo.map(n=>`<button data-act="pickRejectTemplate" data-text="${p(n)}" style="font-size:11px;padding:6px 10px;border-radius:999px;border:1px solid #e5e7eb;background:#f9fafb;color:#374151;cursor:pointer;text-align:left">${p(n)}</button>`).join("")}
    </div>
    <textarea id="reject-reason-text" rows="3" placeholder="เหตุผลที่ปฏิเสธ" style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font-size:13px;font-family:inherit;resize:vertical">${p(r.rejectReasonText)}</textarea>
    <button data-act="confirmReject" ${r.rejectReasonText.trim()?"":"disabled"} style="margin-top:10px;width:100%;padding:11px;border:none;border-radius:10px;background:${r.rejectReasonText.trim()?"#dc2626":"#f3b6b6"};color:#fff;font-weight:800;font-size:14px;cursor:${r.rejectReasonText.trim()?"pointer":"default"}">ยืนยันการปฏิเสธ</button>
  `)}function So(){const e=r.staffScopeEdit;if(!e)return"";const t=e.scopes||[];return Ze(e.mode==="add"?`มอบสิทธิ์ให้ ${e.name}`:`แก้ไขสิทธิ์ของ ${e.name}`,`
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
      ${Rn.map(n=>`
        <label style="display:flex;align-items:flex-start;gap:10px;border:1px solid ${t.includes(n.key)?"#db2777":"#e5e7eb"};border-radius:10px;padding:10px;cursor:pointer">
          <input type="checkbox" data-act="toggleStaffScope" data-key="${n.key}" ${t.includes(n.key)?"checked":""} style="margin-top:2px;flex-shrink:0"/>
          <div><div style="font-size:13px;font-weight:700">${n.label}</div><div style="font-size:11px;color:#6b7280">${n.desc}</div></div>
        </label>`).join("")}
    </div>
    <button data-act="saveStaffScope" style="width:100%;padding:11px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:14px;cursor:pointer">${e.mode==="add"?"มอบสิทธิ์":"บันทึก"}</button>
  `)}function Eo(){const e=r.pendingConfirm;return e?`
  <div style="position:fixed;inset:0;z-index:70;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:24px">
    <div style="background:#fff;width:100%;max-width:320px;border-radius:16px;padding:20px;box-shadow:0 20px 50px rgba(0,0,0,.3)">
      <div style="font-size:14px;font-weight:700;color:#111827;line-height:1.6;margin-bottom:18px;white-space:pre-line">${p(e.message)}</div>
      <div style="display:flex;gap:8px">
        <button data-act="confirmActionNo" style="flex:1;padding:10px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">ยกเลิก</button>
        <button data-act="confirmActionYes" style="flex:1;padding:10px;border-radius:10px;border:none;background:${e.danger?"#dc2626":"#db2777"};color:#fff;font-weight:700;font-size:13px;cursor:pointer">${p(e.confirmLabel||"ยืนยัน")}</button>
      </div>
    </div>
  </div>`:""}function Mo(){var i;const{teamId:e}=r.refundConfirmSign,t=r.teams.find(o=>o.id===e);if(!t)return"";const n=je(t);return`
  <div style="position:fixed;inset:0;z-index:70;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:20px">
    <div id="refund-confirm-modal" style="background:#fff;border-radius:16px;padding:20px;max-width:440px;width:100%;max-height:90vh;overflow-y:auto">
      <div style="font-weight:800;font-size:15px;margin-bottom:4px">เซ็นรับเงินคืนค่าประกันทีม</div>
      <div style="font-size:12.5px;color:#6b7280;margin-bottom:16px">${p(t.name)} · คืนเงิน ${W(n.refund_amount)} บาท${(i=t.captain)!=null&&i.full_name?` · หัวหน้าทีม: ${p(t.captain.full_name)}`:" · ยังไม่มีหัวหน้าทีม"}</div>

      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <label style="font-size:11.5px;color:#6b7280">สีลายเซ็น</label>
        <input type="color" id="refund-recipient-sig-color" value="#1e3a8a" style="width:40px;height:28px;border:none;padding:0;cursor:pointer;background:none"/>
      </div>
      <canvas id="refund-recipient-sigpad" width="400" height="170" style="width:100%;height:170px;border:1px dashed #e5e7eb;border-radius:8px;background:#fff;touch-action:none;cursor:crosshair;display:block"></canvas>
      <div style="font-size:11px;color:#9ca3af;margin-top:6px;margin-bottom:16px">ให้หัวหน้าทีม (หรือผู้รับเงินแทน) เซ็นชื่อในกรอบด้านบน</div>
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <button data-act="clearRecipientSignature" style="flex:1;padding:9px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;font-weight:700;font-size:12px;cursor:pointer">ล้างลายเซ็น</button>
      </div>

      <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">วิธีคืนเงิน</div>
      <div style="display:flex;gap:8px;margin-bottom:10px">
        <button type="button" class="refund-method-btn" data-method="transfer" style="flex:1;padding:9px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;color:#111827;font-weight:700;font-size:12.5px;cursor:pointer">💳 โอน</button>
        <button type="button" class="refund-method-btn" data-method="cash" style="flex:1;padding:9px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;color:#111827;font-weight:700;font-size:12.5px;cursor:pointer">💵 เงินสด</button>
      </div>
      <div id="refund-method-transfer-block" style="display:none;margin-bottom:14px">
        <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">อัปโหลดสลิปการโอน</div>
        <input type="file" accept="image/*" id="refund-proof-file-transfer" style="width:100%;font-size:11.5px"/>
      </div>
      <div id="refund-method-cash-block" style="display:none;margin-bottom:14px">
        <div style="font-size:11px;color:#6b7280;background:#f9fafb;border-radius:8px;padding:8px">ให้ถ่ายรูปนักเรียนถือเงินสดพร้อมใบเสร็จ แล้วอัปโหลดเป็นหลักฐานได้หลังพิมพ์ใบเสร็จ (ปุ่มจะปรากฏในขั้นถัดไป)</div>
      </div>

      <button data-act="confirmRefundWithSignature" data-team="${t.id}" style="width:100%;padding:11px;border-radius:9px;border:none;background:${S[t.level].base};color:#fff;font-weight:700;font-size:13.5px;cursor:pointer;margin-bottom:8px">ยืนยันคืนเงิน ${W(n.refund_amount)} บาท</button>
      <button data-act="cancelRefundSign" style="width:100%;padding:9px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;font-weight:700;font-size:12.5px;cursor:pointer">ยกเลิก</button>
    </div>
  </div>`}function To(){const{teamId:e}=r.refundConfirmDone,t=r.teams.find(i=>i.id===e),n=le(e);return!t||!n?"":`
  <div style="position:fixed;inset:0;z-index:70;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:20px">
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:360px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">✅</div>
      <div style="font-weight:800;font-size:15px;margin-bottom:4px">คืนเงินสำเร็จ</div>
      <div style="font-size:12.5px;color:#6b7280;margin-bottom:18px">${p(t.name)} · เลขที่ใบเสร็จ ${p(n.receipt_no)}</div>
      <button data-act="printRefundReceiptDone" data-team="${t.id}" style="width:100%;padding:11px;border-radius:9px;border:none;background:#111827;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer;margin-bottom:8px">🖨️ พิมพ์ใบเสร็จ</button>
      ${n.payment_method==="cash"&&!n.proof_url?`
      <div style="font-size:11px;color:#b45309;background:#fffbeb;border-radius:8px;padding:8px;margin-bottom:8px;text-align:left">📷 อย่าลืมถ่ายรูปนักเรียนถือเงินสดพร้อมใบเสร็จ แล้วอัปโหลดเป็นหลักฐาน</div>
      <input type="file" accept="image/*" id="refund-cash-proof-file" style="width:100%;font-size:11.5px;margin-bottom:6px"/>
      <button type="button" data-act="uploadCashRefundProof" data-team="${t.id}" style="width:100%;padding:10px;border-radius:9px;border:none;background:#d97706;color:#fff;font-weight:700;font-size:12.5px;cursor:pointer;margin-bottom:8px">อัปโหลดรูปหลักฐาน</button>`:""}
      <button data-act="closeRefundDone" style="width:100%;padding:10px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;font-weight:700;font-size:13px;cursor:pointer">ปิด</button>
    </div>
  </div>`}function Ao(){return`
  <div style="position:fixed;inset:0;z-index:75;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;padding:16px">
    <button data-act="closeViewProof" style="position:absolute;top:16px;right:16px;width:38px;height:38px;border-radius:12px;border:none;background:rgba(255,255,255,.15);color:#fff;font-size:18px;cursor:pointer">✕</button>
    ${r.viewProofUrl?`<img src="${p(r.viewProofUrl)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:10px"/>`:'<div style="color:#fff;font-size:13px">กำลังโหลด...</div>'}
  </div>`}function Ro(){return`
  <div style="position:fixed;inset:0;z-index:55;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;padding:20px">
    <div style="background:#fff;width:100%;max-width:340px;border-radius:16px;padding:18px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h3 style="margin:0;font-size:15px;font-weight:800">เข้าสู่ระบบแอดมิน</h3>
        <button data-act="closeAdminLogin" style="border:none;background:none;color:#9ca3af;font-size:16px;cursor:pointer">✕</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <input id="admin-login-username" value="${p(r.adminLoginUsername)}" placeholder="ยูสเซอร์เนม" autocomplete="username" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;font-size:13.5px"/>
        <input id="admin-login-password" type="password" placeholder="รหัสผ่าน" autocomplete="current-password" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;font-size:13.5px"/>
        ${r.adminLoginError?`<div style="font-size:12px;color:#dc2626">${p(r.adminLoginError)}</div>`:""}
        <button data-act="submitAdminLogin" style="margin-top:4px;padding:11px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:14px;cursor:pointer">ลงชื่อเข้าใช้</button>
        <button data-act="goToPp5Login" style="padding:9px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;color:#374151;font-weight:600;font-size:12.5px;cursor:pointer">หรือเข้าสู่ระบบด้วยบัญชี ปพ.5</button>
      </div>
    </div>
  </div>`}function Lo(){const e=r.teams.find(a=>a.id===r.confirmRegTeamId);if(!e)return"";const t=S[e.level],n=r.players.filter(a=>a.team_id===e.id),i=W(y("DEPOSIT_AMOUNT",500)),o=y("PROMPTPAY_NUMBER","0825424340");return`
  <div style="position:fixed;inset:0;z-index:70;background:#fff;display:flex;flex-direction:column">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #ececec;flex-shrink:0">
      <h3 style="margin:0;font-size:15px;font-weight:800">ยืนยันการลงทะเบียน</h3>
      <button data-act="closeConfirmReg" style="border:none;background:none;color:#9ca3af;font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="padding:20px;overflow-y:auto;flex:1">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
        ${me(e.level)}
        <h2 style="margin:0;font-size:17px;font-weight:800">${p(e.name)}</h2>
      </div>
      <p style="margin:2px 0 16px;font-size:12px;color:#6b7280">ตรวจสอบรายชื่อนักกีฬาให้ถูกต้องก่อนชำระค่าประกันทีม</p>

      <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:14px;margin-bottom:16px">
        <div style="font-weight:700;font-size:13.5px;margin-bottom:10px">รายชื่อนักกีฬา (${n.length} คน)</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${n.map(a=>{var d,s;return`
            <div style="display:flex;align-items:center;gap:10px;background:#fff;border-radius:10px;padding:8px">
              ${ge(Z(a))}
              <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${p(((d=a.students)==null?void 0:d.full_name)||"")}</div><div style="font-size:11px;color:#6b7280">${p(((s=a.students)==null?void 0:s.student_code)||"")}</div></div>
              <div style="font-size:12.5px;font-weight:700;color:${t.accent};flex-shrink:0">เบอร์ ${a.jersey_number??"-"}</div>
            </div>`}).join("")}
        </div>
      </div>

      <div style="border:1px solid #e5e7eb;border-radius:14px;padding:16px;text-align:center;margin-bottom:16px">
        <div style="font-weight:700;font-size:14px;margin-bottom:4px">ชำระค่าประกันทีม ${i} บาท</div>
        <div style="font-size:11.5px;color:#6b7280;margin-bottom:12px">โอนผ่านพร้อมเพย์เบอร์ ${p(o)}</div>
        ${r.confirmRegQR?`<img src="${r.confirmRegQR}" style="width:220px;height:220px;margin:0 auto 8px;display:block"/>`:'<div style="width:220px;height:220px;margin:0 auto 8px;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:12px">กำลังสร้าง QR...</div>'}
        <div style="font-size:11px;color:#9ca3af">สแกนเพื่อโอนเงิน แล้วแนบสลิปด้านล่าง</div>
      </div>

      <div style="border:1px solid #e5e7eb;border-radius:14px;padding:16px">
        <div style="font-weight:700;font-size:13.5px;margin-bottom:8px">แนบหลักฐานการโอนเงิน</div>
        <input type="file" accept="image/*" id="pay-slip-file" style="font-size:12px;margin-bottom:10px" ${r.paymentUploading?"disabled":""}/>
        <button data-act="uploadPayment" data-team="${e.id}" data-method="transfer" ${r.paymentUploading?"disabled":""} style="width:100%;padding:12px;border-radius:10px;border:none;background:${r.paymentUploading?"#f3b6d1":"linear-gradient(135deg,#ec4899,#db2777)"};color:#fff;font-weight:800;font-size:14px;cursor:${r.paymentUploading?"default":"pointer"}">${r.paymentUploading?"กำลังส่ง...":"ยืนยันการลงทะเบียนและส่งหลักฐาน"}</button>
      </div>
    </div>
  </div>`}const Be=[{id:"settings",icon:"⚙️",label:"ตั้งค่า",sections:[["general","ทั่วไป"],["staff","สิทธิ์"]]},{id:"roster",icon:"👥",label:"ทีม/นักกีฬา",sections:[["teams","ทีม"],["athletes","นักกีฬา"]]},{id:"finance",icon:"💰",label:"การเงิน",sections:[["payments","ชำระเงิน"],["refunds","คืนเงิน"]]},{id:"tourney",icon:"🏆",label:"แข่งขัน",sections:[["ops","เวลา/รางวัล"],["certificates","เกียรติบัตร"],["eventcheckin","เช็คอินเข้างาน"]]}];function Nn(e){return Be.find(t=>t.sections.some(n=>n[0]===e))||Be[0]}function Io(e){for(const t of Be){const n=t.sections.find(i=>i[0]===e);if(n)return n[1]}return""}function Co(){const e=Nn(r.adminSection);return`
  <section style="display:flex;flex-direction:column;gap:12px;flex:1;min-height:0">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <h2 style="margin:0;font-size:17px;font-weight:800">แอดมิน · ${Io(r.adminSection)}</h2>
      <button data-act="tab" data-tab="schedule" style="font-size:11.5px;color:#6b7280;background:none;border:none;cursor:pointer">ออกจากแอดมิน</button>
    </div>
    ${e.sections.length>1?`
    <div style="display:flex;gap:6px">
      ${e.sections.map(([t,n])=>`<button data-act="adminSec" data-v="${t}" style="flex:1;font-size:12px;padding:7px 10px;border-radius:9px;border:1px solid ${r.adminSection===t?"#db2777":"#e5e7eb"};background:${r.adminSection===t?"#db2777":"#fff"};color:${r.adminSection===t?"#fff":"#374151"};font-weight:700;cursor:pointer">${n}</button>`).join("")}
    </div>`:""}
    ${r.adminSection==="general"?No():""}
    ${r.adminSection==="staff"?jo():""}
    ${r.adminSection==="teams"?Bo():""}
    ${r.adminSection==="athletes"?ka():""}
    ${r.adminSection==="payments"?Sa():""}
    ${r.adminSection==="refunds"?Ma():""}
    ${r.adminSection==="certificates"?Ta():""}
    ${r.adminSection==="ops"?Aa():""}
    ${r.adminSection==="eventcheckin"?Sn(!0):""}
  </section>`}function ne(e){return`<div style="border:1px solid #e5e7eb;border-radius:14px;padding:14px">${e}</div>`}function et(e){return`<div style="border:1px solid #e5e7eb;border-radius:14px;padding:14px;flex:1;min-height:0;display:flex;flex-direction:column">${e}</div>`}function No(){var t,n,i;const e=((n=(t=r.identity.session)==null?void 0:t.user)==null?void 0:n.email)===on;return ne(`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-size:12px;color:#6b7280">เข้าสู่ระบบอยู่ในฐานะ: <b>${e?p(y("ADMIN_LOGIN_USERNAME","aaaaaa"))+" (แอดมินสำรอง)":(i=r.identity.teacher)!=null&&i.full_name?p(r.identity.teacher.full_name):"ครู/แอดมิน ปพ.5"}</b></div>
      <button data-act="adminSignOut" style="font-size:11px;padding:6px 12px;border-radius:8px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:600;cursor:pointer;white-space:nowrap">ออกจากระบบ</button>
    </div>
    ${e?`
    <div style="border-top:1px solid #e5e7eb;padding-top:10px;margin-bottom:10px">
      <div style="font-weight:700;font-size:13px;margin-bottom:8px">แก้ไขบัญชีแอดมินสำรอง</div>
      <label style="font-size:11.5px;color:#6b7280;display:block;margin-bottom:8px">ยูสเซอร์เนม
        <input id="admin-acct-username" value="${p(y("ADMIN_LOGIN_USERNAME","aaaaaa"))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:13px"/>
      </label>
      <label style="font-size:11.5px;color:#6b7280;display:block;margin-bottom:8px">รหัสผ่านใหม่ (เว้นว่างถ้าไม่เปลี่ยน)
        <input id="admin-acct-password" type="password" placeholder="รหัสผ่านใหม่" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:13px"/>
      </label>
      <button data-act="saveAdminAccount" style="width:100%;padding:9px;border-radius:9px;border:none;background:#374151;color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">บันทึกบัญชีแอดมินสำรอง</button>
    </div>`:""}
    <div style="margin-bottom:10px">
      <div style="font-weight:700;font-size:14px;margin-bottom:2px">เปิดรับสมัครทีม</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:8px">เปิด/ปิดแยกแต่ละระดับชั้นได้ ม.ปลายจะปิดอัตโนมัติเมื่อทีมทั่วไปครบ ${p(y("MAX_TEAMS_HS","14"))} ทีม</div>
      ${["MS","HS"].map(o=>{const a=y(`REGISTRATION_OPEN_${o}`,"0")==="1";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;${o==="MS"?"border-bottom:1px solid #f3f4f6":""}">
          <div style="font-size:12.5px;font-weight:600;color:${S[o].accent}">${S[o].label}</div>
          <button data-act="toggleRegistration" data-level="${o}" style="flex-shrink:0;font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${a?"#dcfce7":"#f3f4f6"};color:${a?"#16a34a":"#6b7280"}">${a?"เปิดอยู่":"ปิดอยู่"}</button>
        </div>`}).join("")}
    </div>
    <div style="font-weight:700;font-size:14px;margin-bottom:10px">ตั้งค่าทั่วไป</div>
    <label style="font-size:11.5px;color:#6b7280;display:block;margin-bottom:10px">ชื่อกิจกรรม
      <input id="cfg-eventName" value="${p(y("EVENT_NAME","AZFUTSALCUP2025"))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
    </label>
    <label style="font-size:11.5px;color:#6b7280;display:block;margin-bottom:10px">วันที่จัดงาน
      <input id="cfg-date" value="${p(y("INFO_DATE",""))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
    </label>
    <label style="font-size:11.5px;color:#6b7280;display:block;margin-bottom:10px">สถานที่
      <input id="cfg-venue" value="${p(y("INFO_VENUE",""))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
    </label>
    <div style="margin-bottom:10px">
      <div style="font-size:11.5px;color:#6b7280;margin-bottom:5px">โลโก้โรงเรียนสำหรับใบเสร็จรับเงินคืน</div>
      <div style="display:flex;align-items:center;gap:8px">
        <img src="${p(_t())}" alt="โลโก้โรงเรียน" style="width:56px;height:56px;object-fit:contain;border:1px solid #e5e7eb;border-radius:9px;background:#fff;padding:4px"/>
        <input type="file" accept="image/*" id="refund-receipt-logo-file" style="font-size:11px;min-width:0;flex:1"/>
        <button data-act="uploadRefundReceiptLogo" style="font-size:11px;padding:7px 10px;border-radius:8px;border:none;background:#374151;color:#fff;font-weight:700;cursor:pointer;white-space:nowrap">อัปโหลด</button>
      </div>
      <div style="font-size:10.5px;color:#9ca3af;margin-top:4px">หากยังไม่อัปโหลด ระบบจะใช้โลโก้โรงเรียนมาตรฐาน และจะบันทึกโลโก้ปัจจุบันไว้กับใบเสร็จตอนยืนยันคืนเงิน</div>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:10px">
      <label style="font-size:11.5px;color:#6b7280;flex:1">สีธีม ม.ต้น
        <input id="cfg-colorMs" type="color" value="${p(y("COLOR_MS","#ec4899"))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:4px;height:38px;cursor:pointer"/>
      </label>
      <label style="font-size:11.5px;color:#6b7280;flex:1">สีธีม ม.ปลาย
        <input id="cfg-colorHs" type="color" value="${p(y("COLOR_HS","#22c55e"))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:4px;height:38px;cursor:pointer"/>
      </label>
    </div>
    <button data-act="saveGeneral" style="width:100%;padding:10px;border-radius:10px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">บันทึก</button>
  `)+ne(`
    <div style="font-weight:700;font-size:14px;margin-bottom:10px">ตั้งค่าการลงทะเบียน</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="display:flex;gap:8px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">ค่าประกันทีม (บาท)<input id="reg-deposit" type="number" min="0" value="${p(y("DEPOSIT_AMOUNT",500))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">นักกีฬาสูงสุด/ทีม<input id="reg-maxroster" type="number" min="1" value="${p(y("MAX_ROSTER",12))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      <label style="font-size:11.5px;color:#6b7280">เบอร์พร้อมเพย์รับค่าประกันทีม
        <input id="reg-promptpay" value="${p(y("PROMPTPAY_NUMBER","0825424340"))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
      </label>
      <div style="display:flex;gap:8px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">หักค่าประกัน/ใบเหลือง<input id="reg-ratey" type="number" min="0" value="${p(y("RATE_YELLOW",30))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">หักค่าประกัน/ใบแดง<input id="reg-rater" type="number" min="0" value="${p(y("RATE_RED",50))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      <label style="font-size:11.5px;color:#6b7280">ค่าดำเนินการกิจกรรม/ทีม (บาท — หักจากค่าประกันก่อนคำนวณเงินคืน)
        <input id="reg-opfee" type="number" min="0" value="${p(y("OPERATION_FEE",100))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
      </label>
      <div style="display:flex;gap:8px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">โควตาทีม ม.ต้น (เว้นว่าง=ไม่จำกัด)<input id="reg-quota-ms" type="number" min="0" value="${p(y("MAX_TEAMS_MS",""))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">โควตาทีม ม.ปลาย (เว้นว่าง=ไม่จำกัด)<input id="reg-quota-hs" type="number" min="0" value="${p(y("MAX_TEAMS_HS",""))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      <div style="font-size:10.5px;color:#9ca3af;margin-top:-4px">ม.ต้น: ทีมที่ยืนยันเกินโควตาจะถูกติดป้าย "ทีมสำรอง" อัตโนมัติ (ยังลงทะเบียนได้ ไม่ปิดรับสมัคร) · ม.ปลาย: ปิดรับสมัครอัตโนมัติทันทีที่ทีมทั่วไปครบโควตา (ไม่นับทีมผู้จัด)</div>
      <label style="font-size:11.5px;color:#6b7280">ปิดแก้ไขรายชื่อนักกีฬาเมื่อ (เว้นว่าง = ไม่จำกัด)
        <input id="reg-deadline" type="datetime-local" value="${p(y("REGISTER_EDIT_DEADLINE",""))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
      </label>
      <button data-act="saveRegSettings" style="margin-top:4px;width:100%;padding:10px;border-radius:10px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">บันทึกการตั้งค่า</button>
    </div>
  `)}function jo(){return ne(`
    <div style="font-weight:700;font-size:14px;margin-bottom:10px">มอบสิทธิ์ผู้ดูแล/สตาฟ (ครู/นักเรียน)</div>
    <div id="az-staff-list" style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">กำลังโหลด...</div>
    <div style="position:relative">
      <input id="staff-search" placeholder="พิมพ์ชื่อครูหรือนักเรียน..." autocomplete="off" style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font-size:12.5px"/>
      <div id="staff-search-results" style="position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid #e5e7eb;border-radius:10px;margin-top:4px;max-height:220px;overflow-y:auto;z-index:10;display:none;box-shadow:0 6px 16px rgba(0,0,0,.08)"></div>
    </div>
  `)}function Qt(e,t,n){return`
  <div style="flex-shrink:0;margin-bottom:6px">
    <div style="font-size:10.5px;color:#9ca3af;font-weight:700;margin-bottom:4px">${p(n)}</div>
    <div style="display:flex;gap:6px">
      <button data-act="autoSeedPool" data-level="${e}" data-pool="${t}" style="flex:1;padding:8px 4px;border-radius:9px;border:none;background:linear-gradient(135deg,#0891b2,#06b6d4);color:#fff;font-weight:800;font-size:10.5px;line-height:1.35;cursor:pointer">🎲 อัตโนมัติ<br/><span style="font-weight:600;opacity:.9">จัดอันดับ</span></button>
      <button data-act="openLiveDraw" data-level="${e}" data-pool="${t}" style="flex:1;padding:8px 4px;border-radius:9px;border:none;background:linear-gradient(135deg,#4338ca,#6366f1);color:#fff;font-weight:800;font-size:10.5px;line-height:1.35;cursor:pointer">🎬 จับสลากสด<br/><span style="font-weight:600;opacity:.9">โชว์ไลฟ์</span></button>
      <button data-act="openManualPoolAssign" data-level="${e}" data-pool="${t}" style="flex:1;padding:8px 4px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:800;font-size:10.5px;line-height:1.35;cursor:pointer">✍️ กรอกเอง<br/><span style="font-weight:600;opacity:.7">Manual</span></button>
    </div>
  </div>`}function Bo(){const e=r.adminTeamLevel||"MS",t=r.teams.filter(d=>d.level===e),n=e==="MS"&&se(),i=r.matches[e].length>=H[e].length,o=Number(y(e==="MS"?"MAX_TEAMS_MS":"MAX_TEAMS_HS","")||0),a=r.payments.filter(d=>{var s;return d.status==="verified"&&((s=r.teams.find(c=>c.id===d.team_id))==null?void 0:s.level)===e}).length;return et(`
    <div style="flex-shrink:0;display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-weight:700;font-size:14px">จัดการทีม${o>0?` <span style="font-weight:600;font-size:11.5px;color:#6b7280">(${a}/${o} ทีมยืนยันแล้ว)</span>`:""}</div>
      <div style="display:flex;gap:6px">${["MS","HS"].map(d=>`<button data-act="adminTeamLevel" data-v="${d}" style="font-size:11.5px;padding:6px 11px;border-radius:9px;border:1px solid ${e===d?S[d].base:"#e5e7eb"};background:${e===d?S[d].base:"#fff"};color:${e===d?"#fff":"#374151"};font-weight:700;cursor:pointer">${S[d].label}</button>`).join("")}</div>
    </div>
    ${e==="MS"&&!i?`
    <div style="flex-shrink:0;margin-bottom:10px">
      <div style="font-size:11.5px;color:#6b7280;margin-bottom:5px">รูปแบบสายการแข่ง ม.ต้น (เลือกก่อนสร้างตารางแข่ง — ล็อกทันทีที่สร้างแล้ว)</div>
      <div style="display:flex;gap:6px">
        <button data-act="setMsFormat" data-v="12" style="flex:1;padding:8px;border-radius:9px;border:1px solid ${re()==="12"?S.MS.base:"#e5e7eb"};background:${re()==="12"?S.MS.base:"#fff"};color:${re()==="12"?"#fff":"#374151"};font-weight:700;font-size:12px;cursor:pointer">12 ทีม${n?" + บาย 1 (20 นัด)":" (17 นัด)"}</button>
        <button data-act="setMsFormat" data-v="16" style="flex:1;padding:8px;border-radius:9px;border:1px solid ${re()==="16"?S.MS.base:"#e5e7eb"};background:${re()==="16"?S.MS.base:"#fff"};color:${re()==="16"?"#fff":"#374151"};font-weight:700;font-size:12px;cursor:pointer">16 ทีม (25 นัด)</button>
      </div>
    </div>`:""}
    ${e==="MS"&&i?`<div style="flex-shrink:0;font-size:10.5px;color:#9ca3af;margin-bottom:8px">รูปแบบสายการแข่ง: ${n?"13 ทีม (จับบาย 1 ทีมก่อน)":`${re()} ทีม`} (${H.MS.length} นัด) — ล็อกไว้แล้วเพราะสร้างตารางแข่งแล้ว</div>`:""}
    ${i?`<button data-act="randomDraw" data-level="${e}" style="flex-shrink:0;width:100%;margin-bottom:6px;padding:9px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:12.5px;cursor:pointer">สุ่มจับคู่รอบแรกใหม่ (ทันที ไม่มีแอนิเมชัน)</button>`:`<button data-act="seedMatches" data-level="${e}" style="flex-shrink:0;width:100%;margin-bottom:10px;padding:9px;border-radius:9px;border:1px dashed ${S[e].base};background:${S[e].soft};color:${S[e].accent};font-weight:700;font-size:12.5px;cursor:pointer">สร้างตารางแข่งเริ่มต้น (${H[e].length} นัด)</button>`}
    ${i?`<button data-act="openLiveDraw" data-level="${e}" style="flex-shrink:0;width:100%;margin-bottom:${Fe(e)?"6px":"10px"};padding:10px;border-radius:9px;border:none;background:linear-gradient(135deg,#4338ca,#6366f1);color:#fff;font-weight:800;font-size:12.5px;cursor:pointer">🎬 จับสลากสด รอบแรก (สำหรับไลฟ์)</button>`:""}
    ${i&&Fe(e)&&gt(e,"R3")?Qt(e,"R3","รอบ 12 ทีม"):""}
    ${i&&Fe(e)&&gt(e,"R4")?Qt(e,"R4","รอบ 6 ทีม"):""}
    ${i&&Qe(e)?`
      <button data-act="openSemifinalAssign" data-level="${e}" style="flex-shrink:0;width:100%;margin-bottom:6px;padding:10px;border-radius:9px;border:1px solid ${S[e].base};background:${S[e].soft};color:${S[e].accent};font-weight:800;font-size:12px;cursor:pointer">✍️ เลือกคู่รอบรองฯ M22–M23 ใหม่</button>
    `:""}
    <div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:8px;margin-bottom:12px;overflow-y:auto">
      ${t.length?t.map(d=>$a(d)).join(""):'<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีทีมในระดับนี้</div>'}
    </div>
    <button data-act="adminNewTeamFromList" style="flex-shrink:0;width:100%;padding:9px;border-radius:9px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">+ ลงทะเบียนทีมใหม่ (ระบุหัวหน้าทีม)</button>
  `)}function jn(e,t){var d;const n=H[e].find(s=>s.code===t),i=ee(e,t),o={a:null,b:null},a=s=>Te(e,s);if(ct(e,t)&&Qe(e)){const s=bt(e),c=Dt(e,t,"a"),l=Dt(e,t,"b");return o.a={pool:s.filter(f=>!c.includes(f)),value:(i==null?void 0:i.team_a_id)||""},o.b={pool:s.filter(f=>!l.includes(f)),value:(i==null?void 0:i.team_b_id)||""},o}if(ct(e,t))return o;if(n.pool){const s=Te(e,((d=Ye[e])==null?void 0:d[n.pool])||[]),c=Ot(e,n.pool,t,"a"),l=Ot(e,n.pool,t,"b");return o.a={pool:s.filter(f=>!c.includes(f)),value:(i==null?void 0:i.team_a_id)||""},o.b={pool:s.filter(f=>!l.includes(f)),value:(i==null?void 0:i.team_b_id)||""},o}return n.refA?n.refA==="FIRST_ROUND_BYE"?o.a={pool:r.teams.filter(s=>s.level===e).map(s=>s.id),value:(i==null?void 0:i.team_a_id)||y(`FIRST_ROUND_BYE_${e}`,"")}:n.refA==="REC_1"||n.refA==="REC_2"?o.a={pool:a(Lt[e]||[]),value:(i==null?void 0:i.team_a_id)||""}:n.refA==="WC_1"||n.refA==="WC_2"?o.a={pool:a(It[e]||[]),value:(i==null?void 0:i.team_a_id)||""}:(n.refA==="LOTTERY_1"||n.refA==="LOTTERY_2")&&(o.a={pool:Ae(e,lt(e,n.refA)),value:(i==null?void 0:i.team_a_id)||"",lotteryRef:n.refA}):o.a={pool:r.teams.filter(s=>s.level===e).map(s=>s.id),value:(i==null?void 0:i.team_a_id)||""},n.refB?n.refB==="FIRST_ROUND_BYE"?o.b={pool:r.teams.filter(s=>s.level===e).map(s=>s.id),value:(i==null?void 0:i.team_b_id)||y(`FIRST_ROUND_BYE_${e}`,"")}:n.refB==="REC_1"||n.refB==="REC_2"?o.b={pool:a(Lt[e]||[]),value:(i==null?void 0:i.team_b_id)||""}:n.refB==="WC_1"||n.refB==="WC_2"?o.b={pool:a(It[e]||[]),value:(i==null?void 0:i.team_b_id)||""}:(n.refB==="LOTTERY_1"||n.refB==="LOTTERY_2")&&(o.b={pool:Ae(e,lt(e,n.refB)),value:(i==null?void 0:i.team_b_id)||"",lotteryRef:n.refB}):o.b={pool:r.teams.filter(s=>s.level===e).map(s=>s.id),value:(i==null?void 0:i.team_b_id)||""},o}function Tt(e){const t=[...e];for(let n=t.length-1;n>0;n--){const i=new Uint32Array(1);crypto.getRandomValues(i);const o=i[0]%(n+1);[t[n],t[o]]=[t[o],t[n]]}return t}function Bn(e,t,n){const i=n?H[e].filter(a=>a.pool===n).map(a=>a.code):H[e].filter(a=>!a.refA&&!a.pool).map(a=>a.code),o=dn(e,n)?[{code:"BYE",side:"bye",isBye:!0}]:[];return t==="byside"?[...o,...i.map(a=>({code:a,side:"a"})),...i.map(a=>({code:a,side:"b"}))]:[...o,...i.flatMap(a=>[{code:a,side:"a"},{code:a,side:"b"}])]}function Pn(e,t){var n;return t?Te(e,((n=Ye[e])==null?void 0:n[t])||[]):r.teams.filter(i=>i.level===e).map(i=>i.id)}function gt(e,t){var i;const n=((i=Ye[e])==null?void 0:i[t])||[];return n.length>0&&n.every(o=>G(e,o).winnerId)}function Fe(e){return e==="HS"||e==="MS"&&re()==="16"}function Po(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return t}function Dn(e){var i;const t=Po(e),n=S[((i=r.liveDraw)==null?void 0:i.level)||"MS"].base;return{top:16+t%54,left:12+(t>>>8)%68,color:n}}function Do(e){const t=Dn(e),n=p((O(e)||"?").slice(0,2));return`
  <div id="ball-${e}" style="position:absolute;top:${t.top}%;left:${t.left}%;width:52px;height:52px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #fff2, ${t.color});box-shadow:0 4px 10px rgba(0,0,0,.4), inset 0 -4px 8px rgba(0,0,0,.25), inset 0 3px 6px rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.4);flex-shrink:0">${n}</div>`}function Oo(e){return`
  <div id="live-draw-pool" style="position:relative;height:220px;margin:0 34px 12px;border-radius:50% 50% 36px 36px / 100px 100px 30px 30px;background:linear-gradient(180deg, rgba(255,255,255,.14) 0%, rgba(255,255,255,.04) 35%, rgba(255,255,255,.10) 100%), radial-gradient(ellipse at 50% 12%, rgba(255,255,255,.28), transparent 55%), rgba(99,102,241,.08);border:2px solid rgba(255,255,255,.3);box-shadow:inset 0 -26px 46px rgba(0,0,0,.4), inset 0 14px 26px rgba(255,255,255,.16), 0 14px 34px rgba(0,0,0,.45);overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:9%;width:12%;height:100%;background:linear-gradient(105deg, transparent 30%, rgba(255,255,255,.22) 50%, transparent 70%);pointer-events:none"></div>
    <div style="position:absolute;top:0;left:68%;width:7%;height:100%;background:linear-gradient(105deg, transparent 30%, rgba(255,255,255,.14) 50%, transparent 70%);pointer-events:none"></div>
    ${e.map(t=>Do(t)).join("")}
  </div>`}function Ho(){var b;const e=r.liveDraw,t=e.level,n=S[t],i='<div style="height:4px;flex-shrink:0;background:linear-gradient(90deg,#f59e0b,#ec4899,#6366f1,#22c55e,#f59e0b);background-size:200% 100%;animation:stageBarSweep 4s linear infinite"></div>',o="radial-gradient(ellipse 900px 500px at 50% -8%, rgba(99,102,241,.28), transparent 60%), radial-gradient(ellipse 700px 420px at 50% 112%, rgba(219,39,119,.18), transparent 60%), #0b0f1a",a=e.pool?((b=H[t].find(m=>m.pool===e.pool))==null?void 0:b.round)||"":"รอบแรก";if(!e.started){const m=Pn(t,e.pool),w=e.orderStrategy||"bypair",z=Bn(t,w,e.pool),A=m.length>z.length,E=z.some(_=>_.isBye),M=z.filter(_=>!_.isBye).length/2,v=e.testMode!==!1;return`
    <div style="position:fixed;inset:0;z-index:80;background:${o};color:#fff;display:flex;flex-direction:column">
      ${i}
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center">
        <button data-act="closeLiveDraw" style="position:absolute;top:16px;right:16px;border:none;background:rgba(255,255,255,.1);color:#fff;width:34px;height:34px;border-radius:10px;cursor:pointer;font-size:15px">✕</button>
        <div style="font-size:30px;font-weight:800;margin-bottom:2px">🎬 จับสลากสด · ${p(a)}</div>
        <div style="font-size:19px;font-weight:700;color:${n.base};margin-bottom:8px">${p(y("EVENT_NAME","AZFUTSALCUP2025"))} · ${n.label}</div>
        <div style="font-size:13px;color:#9ca3af;margin-bottom:${E?"6px":"16px"}">ทีมในโหล ${m.length} ทีม · ${E?"1 สิทธิ์บาย + ":""}${M} คู่ (${z.length} ฉลาก)</div>
        ${E?'<div style="font-size:12px;color:#fbbf24;font-weight:700;margin-bottom:16px">ฉลากแรกจะเป็นทีมที่ได้สิทธิ์เข้ารอบบาย จากนั้นจึงจับ 12 ทีมที่เหลือประกบคู่ M1-M6</div>':""}
        <div style="display:flex;gap:8px;background:rgba(255,255,255,.06);padding:5px;border-radius:12px">
          <button data-act="setLiveDrawMode" data-v="1" style="padding:9px 16px;border-radius:9px;border:none;font-weight:700;font-size:12.5px;cursor:pointer;background:${v?"#f59e0b":"transparent"};color:${v?"#111827":"#9ca3af"}">🧪 โหมดทดสอบ (ไม่บันทึก)</button>
          <button data-act="setLiveDrawMode" data-v="0" style="padding:9px 16px;border-radius:9px;border:none;font-weight:700;font-size:12.5px;cursor:pointer;background:${v?"transparent":"#dc2626"};color:${v?"#9ca3af":"#fff"}">🔴 จับจริง (บันทึกผล)</button>
        </div>
        <div style="margin-top:8px;font-size:11px;color:${v?"#fbbf24":"#f87171"}">${v?"ซ้อมได้อิสระด้วยรายชื่อทีมจริง จะไม่มีการเขียนอะไรลงฐานข้อมูลเลย":"ผลจะถูกบันทึกลงระบบจริงทันทีที่จับครบแต่ละคู่ ใช้ตอนไลฟ์จริงเท่านั้น"}</div>
        <div style="margin-top:16px;font-size:11px;color:#9ca3af">ลำดับการจับ</div>
        <div style="display:flex;gap:8px;background:rgba(255,255,255,.06);padding:5px;border-radius:12px;margin-top:6px">
          <button data-act="setLiveDrawOrder" data-v="bypair" style="padding:9px 16px;border-radius:9px;border:none;font-weight:700;font-size:12.5px;cursor:pointer;background:${w==="bypair"?"#6366f1":"transparent"};color:${w==="bypair"?"#fff":"#9ca3af"}">จับให้ครบคู่ทีละคู่</button>
          <button data-act="setLiveDrawOrder" data-v="byside" style="padding:9px 16px;border-radius:9px;border:none;font-weight:700;font-size:12.5px;cursor:pointer;background:${w==="byside"?"#6366f1":"transparent"};color:${w==="byside"?"#fff":"#9ca3af"}">จับทีมแรกของทุกคู่ก่อน</button>
        </div>
        ${A?`<div style="margin-top:14px;padding:12px 16px;border-radius:10px;background:#7f1d1d;color:#fecaca;font-size:12.5px;max-width:320px">จำนวนทีม (${m.length}) มากกว่าจำนวนช่อง (${z.length}) กรุณาตรวจสอบทีมก่อนเริ่มจับสลาก</div>`:`<button data-act="startLiveDraw" style="margin-top:18px;padding:14px 32px;border-radius:999px;border:none;background:linear-gradient(135deg,#4338ca,#6366f1);color:#fff;font-weight:800;font-size:15px;cursor:pointer">เริ่มจับสลาก</button>
             <div style="margin-top:10px;font-size:11px;color:#6b7280">สุ่มลำดับทั้งหมดทันทีด้วย crypto RNG แล้วเปิดเผยทีละทีมสดๆ ให้ทุกคนเห็น</div>`}
      </div>
    </div>`}const d=e.slotSeq,s=[...new Set(d.filter(m=>!m.isBye).map(m=>m.code))],c=e.order.length-e.pickIndex,l=e.pickIndex>=d.length||e.pickIndex>=e.order.length,f=e.order.slice(e.pickIndex),u=e.filled.BYE_bye;return`
  <div style="position:fixed;inset:0;z-index:80;background:${o};color:#fff;display:flex;flex-direction:column;overflow-y:auto">
    ${i}
    ${e.testMode?'<div style="background:#f59e0b;color:#111827;text-align:center;padding:6px;font-weight:800;font-size:12px;flex-shrink:0">🧪 โหมดทดสอบ — ไม่มีการบันทึกผลลงระบบจริง</div>':""}
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div>
        <div style="font-weight:800;font-size:20px">🎬 จับสลากสด · ${n.label} · ${p(a)}</div>
        <div style="font-size:12.5px;color:#9ca3af;margin-top:2px">${p(y("EVENT_NAME","AZFUTSALCUP2025"))}</div>
      </div>
      <button data-act="closeLiveDraw" style="flex-shrink:0;border:none;background:rgba(255,255,255,.1);color:#fff;width:34px;height:34px;border-radius:10px;cursor:pointer;font-size:15px">✕</button>
    </div>
    <div style="padding:12px 18px;text-align:center;flex-shrink:0">
      <div style="font-size:11.5px;color:#9ca3af;margin-bottom:2px">เหลือในโหล</div>
      <div style="font-size:28px;font-weight:800">${c}</div>
    </div>
    ${Oo(f)}
    <div style="text-align:center;padding-bottom:14px;flex-shrink:0">
      ${l?'<button disabled style="padding:12px 28px;border-radius:999px;border:none;background:#374151;color:#fff;font-weight:800;font-size:14px;cursor:default">🎉 จับสลากครบทุกคู่แล้ว</button>':e.shaken?`<button data-act="drawNext" ${e.phase==="spinning"?"disabled":""} style="padding:12px 28px;border-radius:999px;border:none;background:${e.phase==="spinning"?"#374151":"linear-gradient(135deg,#4338ca,#6366f1)"};color:#fff;font-weight:800;font-size:14px;cursor:${e.phase==="spinning"?"default":"pointer"}">${e.phase==="spinning"?"กำลังจับ...":"จับทีมถัดไป"}</button>`:'<button data-act="shakePool" style="padding:12px 28px;border-radius:999px;border:none;background:linear-gradient(135deg,#f59e0b,#f97316);color:#fff;font-weight:800;font-size:14px;cursor:pointer">🎲 เขย่าลูกบอล</button>'}
    </div>
    <div id="live-draw-center" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);opacity:0;z-index:90;pointer-events:none;display:flex;flex-direction:column;align-items:center;gap:14px"></div>
    <div style="flex:1;padding:0 18px 18px;display:grid;grid-template-columns:repeat(auto-fill, minmax(150px,1fr));gap:10px;align-content:start">
      ${d.some(m=>m.isBye)?`
      <div style="border:1px solid rgba(251,191,36,.55);border-radius:12px;padding:10px;background:rgba(245,158,11,.12)">
        <div style="font-size:10.5px;color:#fbbf24;font-weight:800;margin-bottom:6px">⭐ สิทธิ์เข้ารอบบาย</div>
        <div style="font-size:12.5px;font-weight:700;min-height:18px;overflow-wrap:break-word">${u?p(O(u)):'<span style="color:#6b7280">จับเป็นฉลากแรก</span>'}</div>
      </div>`:""}
      ${s.map(m=>{const w=e.filled[`${m}_a`],z=e.filled[`${m}_b`],A=E=>{if(!E)return'<span style="color:#4b5563">?</span>';const M=r.teams.find(v=>v.id===E);return p((M==null?void 0:M.name)||"")+(M!=null&&M.is_organizer?' <span style="color:#a5b4fc;font-size:10px">(ผู้จัด)</span>':"")};return`
        <div style="border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:10px;background:rgba(255,255,255,.04)">
          <div style="font-size:10.5px;color:#9ca3af;font-weight:700;margin-bottom:6px">${m}</div>
          <div style="font-size:12.5px;font-weight:700;min-height:18px;overflow-wrap:break-word">${A(w)}</div>
          <div style="font-size:10px;color:#6b7280;margin:2px 0">พบ</div>
          <div style="font-size:12.5px;font-weight:700;min-height:18px;overflow-wrap:break-word">${A(z)}</div>
        </div>`}).join("")}
    </div>
  </div>`}async function Uo(){const e=r.liveDraw;if(!e)return;const t=Pn(e.level,e.pool),n=e.orderStrategy||"bypair",i=Bn(e.level,n,e.pool),o=e.testMode!==!1;r.liveDraw={level:e.level,pool:e.pool,started:!0,testMode:o,orderStrategy:n,order:Tt(t),slotSeq:i,pickIndex:0,filled:{},phase:"idle",shaken:!1},await Qn(),$()}let Ce=null;function Fo(){if(!Ce)try{Ce=new(window.AudioContext||window.webkitAudioContext)}catch{return null}return Ce.state==="suspended"&&Ce.resume().catch(()=>{}),Ce}let ze=null;function qo(){if(!ze){const e="/pp5online/";ze=new Audio(`${e}sounds/azfutsal-rolling-balls.mp3`),ze.loop=!0}return ze}let Ee=null;function Vo(){const e=qo();clearInterval(Ee),e.currentTime=0,e.volume=0,e.play().catch(()=>{});let t=0;Ee=setInterval(()=>{t=Math.min(1,t+.15),e.volume=t,t>=1&&clearInterval(Ee)},30)}function On(){if(!ze)return;const e=ze;clearInterval(Ee);let t=e.volume;Ee=setInterval(()=>{t=Math.max(0,t-.2),e.volume=t,t<=0&&(clearInterval(Ee),e.pause())},25)}function Wo(){const e=Fo();if(!e)return;const t=e.currentTime,n=e.createOscillator();n.type="triangle",n.frequency.setValueAtTime(520,t),n.frequency.exponentialRampToValueAtTime(110,t+.13);const i=e.createGain();i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.001,t+.16),n.connect(i).connect(e.destination),n.start(t),n.stop(t+.17);const o=.09,a=e.createBuffer(1,Math.ceil(e.sampleRate*o),e.sampleRate),d=a.getChannelData(0);for(let f=0;f<d.length;f++)d[f]=(Math.random()*2-1)*Math.pow(1-f/d.length,2);const s=e.createBufferSource();s.buffer=a;const c=e.createBiquadFilter();c.type="highpass",c.frequency.value=2200;const l=e.createGain();l.gain.setValueAtTime(.22,t),l.gain.exponentialRampToValueAtTime(.001,t+o),s.connect(c).connect(l).connect(e.destination),s.start(t),s.stop(t+o+.01)}let qe=null;function tt(){qe&&(clearInterval(qe),qe=null)}function Xt(){const e=document.getElementById("live-draw-pool");if(!e){tt();return}Array.from(e.querySelectorAll('div[id^="ball-"]')).forEach(t=>{t.style.top=14+Math.random()*58+"%",t.style.left=10+Math.random()*72+"%"})}function Go(){const e=r.liveDraw;if(!e||!e.started||e.shaken)return;e.shaken=!0,$();const t=document.getElementById("live-draw-pool");t&&Array.from(t.querySelectorAll('div[id^="ball-"]')).forEach(n=>{n.style.transition="top .22s cubic-bezier(.4,0,.2,1), left .22s cubic-bezier(.4,0,.2,1)"}),tt(),Vo(),Xt(),qe=setInterval(Xt,250)}async function Yo(){const e=r.liveDraw;if(!e||!e.started||e.phase==="spinning"||!e.shaken||e.pickIndex>=e.slotSeq.length)return;if(e.pickIndex>=e.order.length){g("ทีมในโหลหมดแล้ว ช่องที่เหลือเป็นบาย");return}const t=e.order[e.pickIndex],n=e.slotSeq[e.pickIndex];e.phase="spinning",tt(),On(),$();const i=A=>new Promise(E=>setTimeout(E,A)),o=document.getElementById("live-draw-pool");o&&(o.style.filter="brightness(1.15)");const a=document.getElementById(`ball-${t}`);if(a){a.style.transition="transform .1s ease, box-shadow .2s",a.style.boxShadow="0 0 0 6px rgba(255,255,255,.85), 0 0 26px 8px rgba(255,255,255,.55), 0 6px 16px rgba(0,0,0,.5)";for(const[A,E]of[[4,-3],[-5,3],[4,4],[-4,-4],[3,-2],[0,0]])a.style.transform=`translate(${A}px, ${E}px)`,await i(65)}const d=a?a.getBoundingClientRect():null,s=Dn(t),c=n.isBye?"⭐ สิทธิ์เข้ารอบบาย":`${n.code} · ทีม ${n.side.toUpperCase()}`,l=document.getElementById("live-draw-center");if(l){if(l.innerHTML=`
      <div style="position:relative;width:300px;height:300px">
        <div id="capsule-paper" style="position:absolute;inset:18px;border-radius:22px;background:#fff;box-shadow:0 24px 60px rgba(0,0,0,.55);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px;opacity:0;transform:scale(.85);transition:opacity .35s ease, transform .35s ease;z-index:1">
          <div style="color:#9ca3af;font-weight:700;font-size:12.5px;margin-bottom:6px">${p(c)}</div>
          <div id="live-draw-reveal-name" style="color:#111827;font-weight:800;font-size:30px;text-align:center;line-height:1.3"></div>
        </div>
        <div id="capsule-half-l" style="position:absolute;top:0;left:0;width:50%;height:100%;overflow:hidden;border-radius:150px 0 0 150px;transition:transform .5s cubic-bezier(.5,0,.2,1);z-index:2">
          <div style="width:300px;height:300px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #fff, ${s.color});box-shadow:0 24px 60px rgba(0,0,0,.5)"></div>
        </div>
        <div id="capsule-half-r" style="position:absolute;top:0;right:0;width:50%;height:100%;overflow:hidden;border-radius:0 150px 150px 0;transition:transform .5s cubic-bezier(.5,0,.2,1);z-index:2">
          <div style="width:300px;height:300px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #fff, ${s.color});margin-left:-150px;box-shadow:0 24px 60px rgba(0,0,0,.5)"></div>
        </div>
      </div>`,d){const A=d.left+d.width/2-window.innerWidth/2,E=d.top+d.height/2-window.innerHeight/2;l.style.transition="none",l.style.transform=`translate(calc(-50% + ${A}px), calc(-50% + ${E}px)) scale(.15)`,l.style.opacity="1",l.offsetWidth}l.style.transition="transform .6s cubic-bezier(.34,1.56,.64,1), opacity .3s",l.style.transform="translate(-50%,-50%) scale(1)",l.style.opacity="1"}await i(600);const f=document.getElementById("live-draw-reveal-name");f&&(f.textContent=O(t));const u=document.getElementById("capsule-half-l"),b=document.getElementById("capsule-half-r"),m=document.getElementById("capsule-paper");if(u&&(u.style.transform="translateX(-115px)"),b&&(b.style.transform="translateX(115px)"),m&&(m.style.opacity="1",m.style.transform="scale(1)"),Wo(),Xn("high"),e.filled[`${n.code}_${n.side}`]=t,e.pickIndex++,await i(2200),a&&(a.style.boxShadow="",a.style.transform=""),l&&(l.style.transform="translate(-50%,-50%) scale(0)",l.style.opacity="0"),o&&(o.style.filter=""),await i(350),e.phase="idle",e.shaken=!1,n.isBye){if(!e.testMode){const A=`FIRST_ROUND_BYE_${e.level}`,[{error:E},{error:M}]=await Promise.all([h.from("azfutsal_config").upsert({key:A,value:t}),h.from("azfutsal_matches").update({team_b_id:null}).eq("level",e.level).in("match_code",se()?["M17","M19"]:["M12","M13"])]);if(E||M){g("บันทึกทีมบายไม่สำเร็จ: "+((E==null?void 0:E.message)||(M==null?void 0:M.message))),$();return}r.config[A]=t,r.matches[e.level].forEach(v=>{(se()?["M17","M19"]:["M12","M13"]).includes(v.match_code)&&(v.team_b_id=null)}),g(`ทีม ${O(t)} ได้สิทธิ์เข้ารอบบาย`)}$();return}const w=e.filled[`${n.code}_a`],z=e.filled[`${n.code}_b`];if(w&&z&&!e.testMode){const A=(H[e.level].find(E=>E.code===n.code)||{}).round||"";await h.from("azfutsal_matches").upsert({level:e.level,match_code:n.code,round:A,team_a_id:w,team_b_id:z},{onConflict:"level,match_code"}),await I()}else $()}function _e(e,t,n,i,o,a,d,s){const c=r.matchEvents.filter(l=>l.level===e&&l.match_code===t&&l.team_id===n&&l.event_type===o);return`
  <div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
      <span style="font-size:11px;font-weight:700;color:${d}">${a}</span>
      ${n?`<button data-act="openEventPicker" data-team="${i}" data-type="${o}" style="font-size:10.5px;border:1px dashed ${d};background:${s};color:${d};border-radius:8px;padding:3px 8px;cursor:pointer">+ เพิ่ม</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:6px">
      ${c.length?c.map(l=>`<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;background:${s};border-radius:999px;padding:3px 4px 3px 10px">${p(Ln(l.player_id))}${l.minute!=null?` <span style="opacity:.7">(${l.minute}')</span>`:""}${o==="goal"?`<button data-act="toggleEventPenalty" data-id="${l.id}" title="ประตูจากจุดโทษ" style="border:1px solid ${l.is_penalty?d:"#d1d5db"};background:${l.is_penalty?d:"#fff"};color:${l.is_penalty?"#fff":"#9ca3af"};border-radius:999px;width:16px;height:16px;font-size:9px;font-weight:800;line-height:1;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:0">P</button>`:""}<button data-act="removeMatchEvent" data-id="${l.id}" style="border:none;background:none;color:#9ca3af;cursor:pointer;font-size:12px;line-height:1;padding:2px">✕</button></span>`).join(""):'<span style="font-size:11px;color:#c1c5cc">-</span>'}
    </div>
  </div>`}function Qo(){const{team:e}=r.eventPicker,{level:t,code:n}=r.editMatch,i=G(t,n),o=e==="a"?i.teamAId:i.teamBId,a=new Set(r.checkins.filter(l=>l.level===t&&l.match_code===n&&l.team_id===o).map(l=>l.player_id)),d=r.players.filter(l=>l.team_id===o),c=(r.identity.isAdmin||(r.identity.scopes||[]).some(l=>l==="full"||l==="result"))&&a.size===0;return{roster:c?d:d.filter(l=>a.has(l.id)),paperMode:c}}function Hn(){const{roster:e,paperMode:t}=Qo();if(!e.length)return'<div style="font-size:11.5px;color:#9ca3af;padding:6px 0">ยังไม่มีใครในทีมนี้รายงานตัวสำหรับนัดนี้ — สแกน QR รายงานตัวก่อนจึงจะเลือกได้</div>';const n=(r.eventPickerFilter||"").trim().toLowerCase(),i=n?e.filter(a=>{var d;return String(a.jersey_number??"").includes(n)||(((d=a.students)==null?void 0:d.full_name)||"").toLowerCase().includes(n)}):e;return(t?'<div style="padding:8px 10px;border:1px solid #fcd34d;background:#fffbeb;color:#92400e;border-radius:10px;font-size:11px;font-weight:700">📝 โหมดบันทึกย้อนหลังจากกระดาษ — นัดนี้ไม่มีข้อมูลรายงานตัว จึงแสดงรายชื่อทั้งทีม</div>':"")+(i.length?i.map(a=>{var d;return`
    <button data-act="pickEventPlayer" data-player="${a.id}" style="display:flex;align-items:center;gap:12px;padding:10px;border:1px solid #f3f4f6;background:#fff;border-radius:12px;cursor:pointer;text-align:left;width:100%">
      ${ge(Z(a))}
      <div style="min-width:0"><div style="font-size:14px;font-weight:800">#${a.jersey_number??"-"} ${p(((d=a.students)==null?void 0:d.full_name)||"")}</div><div style="font-size:11px;color:#9ca3af;margin-top:2px">แตะเพื่อบันทึกและปิดหน้าต่าง</div></div>
    </button>`}).join(""):'<div style="font-size:11.5px;color:#9ca3af;padding:6px 0">ไม่พบผู้เล่น</div>')}function Xo(){if(!r.eventPicker)return"";const{team:e,type:t}=r.eventPicker,{level:n,code:i}=r.editMatch,o=G(n,i);if(!(e==="a"?o.teamAId:o.teamBId))return"";const d={goal:"ผู้ทำประตู",yellow:"ใบเหลือง",red:"ใบแดง"}[t];return`
  <div data-event-picker-backdrop style="position:fixed;inset:0;z-index:70;background:rgba(15,23,42,.68);display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(3px)">
    <div role="dialog" aria-modal="true" aria-label="เลือก${p(d)}" style="background:#fff;width:100%;max-width:390px;max-height:min(76vh,680px);display:flex;flex-direction:column;border-radius:18px;padding:18px;box-shadow:0 24px 70px rgba(0,0,0,.35)">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px">
        <div><div style="font-weight:900;font-size:17px">เลือก${p(d)}</div><div style="font-size:12px;color:#6b7280;margin-top:3px">${p(e==="a"?o.teamA:o.teamB)} · เลือกแล้วระบบจะบันทึกทันที</div></div>
        <button data-act="closeEventPicker" aria-label="ปิด" style="border:none;background:#f3f4f6;color:#64748b;width:34px;height:34px;border-radius:10px;font-size:17px;cursor:pointer;flex-shrink:0">✕</button>
      </div>
      <div style="display:flex;gap:8px;margin-bottom:10px">
        <input id="event-picker-filter" autofocus placeholder="ค้นหาเบอร์เสื้อหรือชื่อ..." value="${p(r.eventPickerFilter)}" style="flex:1;min-width:0;box-sizing:border-box;border:1px solid #d1d5db;border-radius:11px;padding:10px 12px;font-size:14px"/>
        <input id="event-picker-minute" type="number" min="1" max="99" inputmode="numeric" placeholder="นาที" title="นาทีที่เกิดเหตุการณ์ (เว้นว่างเพื่อใช้เวลาจากนาฬิกา)" style="width:70px;box-sizing:border-box;border:1px solid #d1d5db;border-radius:11px;padding:10px 8px;font-size:14px;text-align:center"/>
      </div>
      <div id="event-picker-list" style="display:flex;flex-direction:column;gap:7px;min-height:80px;overflow-y:auto">
        ${Hn()}
      </div>
    </div>
  </div>`}function Jo(){const{level:e,code:t}=r.editMatch,n=ee(e,t)||{},i=!!r.editMatch.penaltyMode,o=G(e,t),a=jn(e,t),d=o.teamAId?We(e,t,o.teamAId).goal:0,s=o.teamBId?We(e,t,o.teamBId).goal:0,c=d>0||s>0,l=n.score_a!==null||n.score_b!==null,f=c||l?d:"",u=c||l?s:"",b=(m,w,z)=>w?`<label style="font-size:11.5px;color:#6b7280;flex:1">${m}${w.lotteryRef?" · ทีมจากการจับฉลาก":""}<select id="mx-team${m}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12.5px"><option value="">-</option>${w.pool.map(A=>`<option value="${A}" ${String(w.value)===String(A)?"selected":""}>${p(O(A))}</option>`).join("")}</select>${w.lotteryRef?`<button type="button" data-act="drawLotteryTeam" data-level="${e}" data-code="${t}" data-side="${m.toLowerCase()}" style="display:block;width:100%;margin-top:5px;padding:7px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:800;font-size:11px;cursor:pointer">🎲 สุ่มจับฉลาก 1 ทีม (${w.pool.length} ทีม)</button>`:""}</label>`:`<div style="font-size:11.5px;color:#6b7280;flex:1">${m}<div style="margin-top:4px;font-size:13px;font-weight:700">${p(z)||"-"}</div></div>`;return Ze(`${t} · ${S[e].label}`,`
    <div style="display:flex;flex-direction:column;gap:10px">
      <button data-act="refreshMatchEditorData" style="padding:8px;border-radius:9px;border:1px dashed #cbd5e1;background:#f8fafc;color:#475569;font-weight:700;font-size:11.5px;cursor:pointer">🔄 รีเฟรชข้อมูล (ทีม/รายชื่อนักกีฬา/รายงานตัวล่าสุด)</button>
      ${Ht()?`<div>${Ht()}</div>`:""}
      ${o.teamAId&&o.teamBId?`
      <div style="display:flex;flex-direction:column;align-items:center;gap:10px;background:#111827;border-radius:12px;padding:12px">
        ${n.clock_status&&n.clock_status!=="not_started"?ht(n,{countdown:!0}):'<span style="font-size:11.5px;color:#9ca3af;font-weight:700">ยังไม่เริ่มจับเวลา</span>'}
        ${gi(e,t,n)}
      </div>`:""}
      <div style="display:flex;gap:10px">${b("A",a.a,o.teamA)}${b("B",a.b,o.teamB)}</div>
      <div style="display:flex;gap:10px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">สกอร์ A<input id="mx-scoreA" type="number" min="0" value="${f}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">สกอร์ B<input id="mx-scoreB" type="number" min="0" value="${u}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      ${c?'<div style="font-size:10.5px;color:#9ca3af;margin-top:-4px">* สกอร์ซิงก์ตามจำนวนผู้ทำประตูที่บันทึกไว้เสมอ (เพิ่ม/ลบผู้ทำประตูแล้วสกอร์จะอัปเดตตาม) แก้ไขเองได้ก่อนกดบันทึก ยังไม่ถือว่าจบการแข่งขันจนกว่าจะกดบันทึก</div>':""}
      <button data-act="togglePenaltyShootoutMode" style="width:100%;padding:10px;border-radius:10px;border:1px solid ${i?"#7c3aed":"#cbd5e1"};background:${i?"#7c3aed":"transparent"};color:${i?"#fff":"#64748b"};font-size:12.5px;font-weight:800;cursor:pointer">${i?"✓ เปิดโหมดตัดสินด้วยการยิงจุดโทษอยู่ · กดเพื่อปิด":"🎯 เปิดโหมดตัดสินด้วยการยิงจุดโทษ"}</button>
      ${i?`
      <div style="padding:11px;border:1px solid #c4b5fd;border-radius:12px;background:#f5f3ff">
        <div style="font-size:11.5px;font-weight:800;color:#6d28d9;margin-bottom:3px">ผลการดวลจุดโทษ</div>
        <div style="font-size:10.5px;color:#7c3aed;margin-bottom:9px">ใช้เมื่อสกอร์เวลาปกติเสมอเท่านั้น · ไม่ต้องบันทึกชื่อผู้ยิง และไม่นับรวมดาวซัลโว</div>
        <div style="display:flex;gap:10px">
          <label style="font-size:11.5px;color:#6b7280;flex:1">จุดโทษ A<input id="mx-penaltyScoreA" type="number" min="0" value="${p(n.penalty_score_a??"")}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #c4b5fd;border-radius:9px;padding:9px 8px;font-size:16px;font-weight:800;text-align:center"/></label>
          <label style="font-size:11.5px;color:#6b7280;flex:1">จุดโทษ B<input id="mx-penaltyScoreB" type="number" min="0" value="${p(n.penalty_score_b??"")}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #c4b5fd;border-radius:9px;padding:9px 8px;font-size:16px;font-weight:800;text-align:center"/></label>
        </div>
      </div>`:""}
      ${!o.teamAId||!o.teamBId?'<div style="font-size:11px;color:#9ca3af">* ระบุทีมทั้งสองฝั่งก่อน จึงจะบันทึกผู้ทำประตู/ใบเหลือง/ใบแดงได้</div>':`
      <div style="display:flex;flex-direction:column;gap:10px;border-top:1px solid #f3f4f6;padding-top:10px">
        <div style="display:flex;gap:10px">
          <div style="flex:1">${_e(e,t,o.teamAId,"a","goal",`⚽ ประตู (${p(o.teamA)})`,"#16a34a","#dcfce7")}</div>
          <div style="flex:1">${_e(e,t,o.teamBId,"b","goal",`⚽ ประตู (${p(o.teamB)})`,"#16a34a","#dcfce7")}</div>
        </div>
        <div style="display:flex;gap:10px">
          <div style="flex:1">${_e(e,t,o.teamAId,"a","yellow","เหลือง A","#b45309","#FEF9C3")}</div>
          <div style="flex:1">${_e(e,t,o.teamBId,"b","yellow","เหลือง B","#b45309","#FEF9C3")}</div>
        </div>
        <div style="display:flex;gap:10px">
          <div style="flex:1">${_e(e,t,o.teamAId,"a","red","แดง A","#dc2626","#FEE2E2")}</div>
          <div style="flex:1">${_e(e,t,o.teamBId,"b","red","แดง B","#dc2626","#FEE2E2")}</div>
        </div>
      </div>`}
      <div style="display:flex;gap:10px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">เวลาแข่ง<input id="mx-kickoff" placeholder="HH:MM" value="${p(n.kickoff_time||"")}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">รายงานตัว<input id="mx-ready" placeholder="HH:MM" value="${p(n.ready_time||"")}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      <button data-act="saveMatchAndShift" data-level="${e}" data-code="${t}" style="padding:9px;border:1px dashed #db2777;border-radius:10px;background:#fdf2f8;color:#db2777;font-weight:700;font-size:12px;cursor:pointer">⏩ ใช้เวลานี้ + เลื่อนนัดที่เหลือของวันนี้ตามไปด้วย (เช่น คั่นพิธีเปิด)</button>
      ${o.teamAId&&o.teamBId&&(r.identity.isAdmin||(r.identity.scopes||[]).includes("checkin"))?(()=>{const m=r.checkins.filter(z=>z.level===e&&z.match_code===t).length,w=r.players.filter(z=>z.team_id===o.teamAId||z.team_id===o.teamBId).length;return`<button data-act="openCheckinScanner" data-level="${e}" data-code="${t}" style="padding:9px;border:none;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">📷 สแกน QR รายงานตัว (${m}/${w})</button>
        <button data-act="openCheckinLiveDisplay" data-level="${e}" data-code="${t}" style="padding:9px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;color:#374151;font-weight:700;font-size:12.5px;cursor:pointer">🖥️ จอแสดงผลสด (เปิดจอที่สองให้นักกีฬาดู)</button>`})():""}
      <button data-act="saveMatch" data-level="${e}" data-code="${t}" style="margin-top:4px;padding:11px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:14px;cursor:pointer">บันทึก</button>
      <button data-act="printMatchForm" data-level="${e}" data-code="${t}" style="padding:9px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;color:#374151;font-weight:700;font-size:12.5px;cursor:pointer">🖨️ พิมพ์แบบฟอร์มบันทึกผลสำรอง (ออฟไลน์)</button>
    </div>`,{bodyAttr:"data-match-editor-body"})}function Ko(){const{level:e,pool:t}=r.manualPoolAssign,n=t==="SF",i=n?["M22","M23"]:H[e].filter(d=>d.pool===t).map(d=>d.code),o=n?"รองฯ":(H[e].find(d=>d.pool===t)||{}).round||"",a=n?bt(e):[];return Ze(`กรอกเอง (Manual) · ${p(o)} · ${S[e].label}`,`
    <div style="display:flex;flex-direction:column;gap:10px">
      <div style="font-size:11.5px;color:#6b7280">${n?"เลือกผู้ชนะ M19–M21 ให้ครบทั้ง 3 ทีม และเลือกผู้แพ้กลับเข้ารอบอีก 1 ทีม จากนั้นประกบเป็น M22–M23 ห้ามเลือกทีมซ้ำ":"เลือกทีมของแต่ละคู่เอง เช่น หลังจับฉลากสดนอกระบบแล้วมาบันทึกผล ห้ามเลือกทีมซ้ำกันข้ามคู่"}</div>
      ${i.map(d=>{const s=ee(e,d),c=n?{a:{pool:a,value:(s==null?void 0:s.team_a_id)||""},b:{pool:a,value:(s==null?void 0:s.team_b_id)||""}}:jn(e,d),l=f=>`<option value="">- เลือกทีม -</option>${f.pool.map(u=>`<option value="${u}" ${String(f.value)===String(u)?"selected":""}>${p(O(u))}</option>`).join("")}`;return`
        <div style="border:1px solid #e5e7eb;border-radius:12px;padding:10px">
          <div style="font-size:11px;color:#9ca3af;font-weight:700;margin-bottom:6px">${d}</div>
          <div style="display:flex;gap:8px;align-items:center">
            <select id="mp-${d}-a" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12.5px">${l(c.a)}</select>
            <span style="font-size:11px;color:#9ca3af;flex-shrink:0">vs</span>
            <select id="mp-${d}-b" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12.5px">${l(c.b)}</select>
          </div>
        </div>`}).join("")}
      <button data-act="saveManualPoolAssign" style="margin-top:4px;padding:11px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:14px;cursor:pointer">บันทึกทั้งหมด</button>
    </div>`)}function Un(e,t){if(!e||e.dataset.bound)return;e.dataset.bound="1";const n=e.getContext("2d");n.lineWidth=2.5,n.lineCap="round",n.lineJoin="round";let i=!1,o=null;const a=l=>{const f=e.getBoundingClientRect(),u=l.touches?l.touches[0]:l;return{x:(u.clientX-f.left)*(e.width/f.width),y:(u.clientY-f.top)*(e.height/f.height)}},d=l=>{l.preventDefault(),i=!0,o=a(l),n.strokeStyle=t?t():"#111827"},s=l=>{if(!i)return;l.preventDefault();const f=a(l);n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(f.x,f.y),n.stroke(),o=f},c=()=>{i=!1};e.addEventListener("mousedown",d),e.addEventListener("mousemove",s),window.addEventListener("mouseup",c),e.addEventListener("touchstart",d,{passive:!1}),e.addEventListener("touchmove",s,{passive:!1}),e.addEventListener("touchend",c)}function Zo(){Un(R("refund-payer-sigpad"),()=>"#111827")}function ea(){const e=R("refund-confirm-modal");if(!e||e.dataset.bound)return;e.dataset.bound="1";const t=R("refund-recipient-sig-color");Un(R("refund-recipient-sigpad"),()=>(t==null?void 0:t.value)||"#1e3a8a");const n=[...e.querySelectorAll(".refund-method-btn")],i=R("refund-method-transfer-block"),o=R("refund-method-cash-block");n.forEach(a=>a.addEventListener("click",()=>{n.forEach(d=>{d.style.background="#fff",d.style.color="#111827",d.style.borderColor="#e5e7eb"}),a.style.background="#db2777",a.style.color="#fff",a.style.borderColor="#db2777",e.dataset.method=a.dataset.method,i&&(i.style.display=a.dataset.method==="transfer"?"block":"none"),o&&(o.style.display=a.dataset.method==="cash"?"block":"none")}))}async function mt(){const{data:e}=await h.from("azfutsal_admins").select("id, profile_id, note, created_at, scopes").order("created_at"),t=(e||[]).map(s=>s.profile_id),n=t.length?t:["00000000-0000-0000-0000-000000000000"],[{data:i},{data:o}]=await Promise.all([h.from("teachers").select("profile_id, full_name").in("profile_id",n),h.from("students").select("profile_id, full_name").in("profile_id",n)]);r.staffList=(e||[]).map(s=>{var m;const c=(i||[]).find(w=>w.profile_id===s.profile_id),l=(o||[]).find(w=>w.profile_id===s.profile_id),f=s.profile_id===ti,u=c?c.full_name:l?l.full_name:f?`${y("ADMIN_LOGIN_USERNAME","aaaaaa")} (แอดมินสำรอง)`:"(ไม่พบผู้ใช้)",b=s.profile_id===((m=r.identity.profile)==null?void 0:m.id);return{id:s.id,name:u,role:c?"ครู":l?"นักเรียน":f?"บัญชีสำรอง":"-",isSelf:b,scopes:s.scopes&&s.scopes.length?s.scopes:["full"]}});const a=document.getElementById("az-staff-list");if(!a)return;const d=r.staffList.filter(s=>s.scopes.includes("full")).length;a.innerHTML=r.staffList.length?r.staffList.map(s=>{const c=s.scopes.includes("full")&&d<=1,l=s.scopes.includes("full")?"สิทธิ์เต็มรูปแบบ":s.scopes.map(f=>{var u;return(u=Rn.find(b=>b.key===f))==null?void 0:u.label}).filter(Boolean).join(" + ");return`
    <div style="padding:7px 0;border-bottom:1px solid #f3f4f6">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
        <div style="min-width:0"><div style="font-size:13px;font-weight:700">${p(s.name)}${s.isSelf?' <span style="color:#9ca3af;font-weight:600">(คุณ)</span>':""}</div><div style="font-size:11px;color:#6b7280">${s.role} · ${p(l)}</div></div>
        <div style="display:flex;gap:8px;flex-shrink:0">
          <button data-act="editStaffScope" data-id="${s.id}" data-name="${p(s.name)}" data-scopes="${p(s.scopes.join(","))}" style="border:none;background:none;color:#4338ca;font-size:11.5px;cursor:pointer;font-weight:600">แก้ไขสิทธิ์</button>
          ${c?'<span style="font-size:10.5px;color:#9ca3af" title="ต้องมีแอดมินเต็มรูปแบบอย่างน้อย 1 คนเสมอ">ลบไม่ได้</span>':`<button data-act="removeStaff" data-id="${s.id}" data-self="${s.isSelf?"1":"0"}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600">ลบ</button>`}
        </div>
      </div>
    </div>`}).join(""):'<div style="font-size:12px;color:#9ca3af">ยังไม่มีผู้ดูแลระบบ</div>'}async function ta(e){if(!e||e.trim().length<2)return[];const t=`%${e.trim()}%`,[{data:n},{data:i}]=await Promise.all([h.from("teachers").select("profile_id, full_name, teacher_code").or(`full_name.ilike.${t},teacher_code.ilike.${t}`).not("profile_id","is",null).limit(8),h.from("students").select("profile_id, full_name, student_code").or(`full_name.ilike.${t},student_code.ilike.${t}`).not("profile_id","is",null).limit(8)]);return[...(n||[]).map(o=>({profile_id:o.profile_id,name:o.full_name,sub:`ครู · ${o.teacher_code||""}`})),...(i||[]).map(o=>({profile_id:o.profile_id,name:o.full_name,sub:`นักเรียน · ${o.student_code||""}`}))]}const Ne=e=>e===""||e===null||e===void 0||isNaN(Number(e))?null:Number(e),R=e=>document.getElementById(e);function na(e,t){var z,A,E;const n=G(e,t),i=R("mx-teamA"),o=R("mx-teamB"),a=i?i.value||null:n.teamAId,d=o?o.value||null:n.teamBId,s=Ne(R("mx-scoreA").value),c=Ne(R("mx-scoreB").value),l=!!((z=r.editMatch)!=null&&z.penaltyMode),f=l?Ne((A=R("mx-penaltyScoreA"))==null?void 0:A.value):null,u=l?Ne((E=R("mx-penaltyScoreB"))==null?void 0:E.value):null;if(ct(e,t)&&(i||o)){if(!Qe(e)){g("เปลี่ยนคู่ไม่ได้ เพราะ M22 หรือ M23 เริ่มแข่งขันหรือมีข้อมูลรายงานตัวแล้ว");return}const M=bt(e);if(a&&!M.includes(a)||d&&!M.includes(d)){g("เลือกได้เฉพาะทีมจาก M19–M21 เท่านั้น");return}const v=[];for(const C of["M22","M23"]){const L=ee(e,C),j=C===t?a:L==null?void 0:L.team_a_id,U=C===t?d:L==null?void 0:L.team_b_id;j&&v.push(j),U&&v.push(U)}if(new Set(v).size!==v.length){g("ทีมเดิมถูกเลือกซ้ำใน M22–M23");return}const _=Ae(e,Me);if(v.filter(C=>_.includes(C)).length>1){g("เลือกผู้แพ้คืนสิทธิ์ได้เพียง 1 ทีม");return}}if(s!==null&&s<0||c!==null&&c<0){g("สกอร์ต้องไม่ติดลบ");return}if(s===null!=(c===null)){g("กรุณากรอกสกอร์เวลาปกติให้ครบทั้งสองทีม");return}if(l){if(!a||!d){g("กรุณาระบุทีมทั้งสองฝั่งก่อนบันทึกผลจุดโทษ");return}if(s===null||c===null){g("กรุณากรอกสกอร์เวลาปกติก่อนบันทึกผลจุดโทษ");return}if(s!==c){g("โหมดจุดโทษใช้ได้เมื่อสกอร์เวลาปกติเสมอกันเท่านั้น");return}if(f===null||u===null){g("กรุณากรอกผลการดวลจุดโทษให้ครบทั้งสองทีม");return}if(f<0||u<0){g("ผลการดวลจุดโทษต้องไม่ติดลบ");return}if(f===u){g("ผลการดวลจุดโทษต้องมีผู้ชนะ ห้ามเสมอ");return}}else if(s!==null&&c!==null&&s===c){g("สกอร์เสมอ กรุณาเปิดโหมดตัดสินด้วยการยิงจุดโทษ");return}if(s!==null&&c!==null&&a&&d&&y("REQUIRE_EVENTS_BEFORE_SCORE","0")==="1"){const M=We(e,t,a).goal,v=We(e,t,d).goal;if(M!==s||v!==c){g(`ผู้ทำประตูที่บันทึกไว้ (${M}-${v}) ไม่ตรงกับสกอร์ (${s}-${c}) กรุณาระบุผู้ทำประตูให้ครบก่อนบันทึก`);return}}const b={level:e,match_code:t,round:(H[e].find(M=>M.code===t)||{}).round||"",score_a:s,score_b:c,is_penalty_shootout:l,penalty_score_a:f,penalty_score_b:u,winner_team_id:null,loser_team_id:null,ready_time:R("mx-ready").value||null,kickoff_time:R("mx-kickoff").value||null,updated_at:new Date().toISOString()};if(i&&(b.team_a_id=i.value||null),o&&(b.team_b_id=o.value||null),s!==null&&c!==null&&a&&d){const M=l?f>u:s>c;b.winner_team_id=M?a:d,b.loser_team_id=M?d:a}const m=ee(e,t);m?Object.assign(m,b):r.matches[e].push(b);let w=ue().filter(M=>!(M.type==="saveMatch"&&M.payload.level===e&&M.payload.match_code===t));w.push({localId:Re(),type:"saveMatch",payload:b}),ye(w),r.editMatch=null,$(),xe(),g("บันทึกผลการแข่งขันแล้ว")}function ia(e){var b;if(!r.editMatch||!r.eventPicker)return;const{level:t,code:n}=r.editMatch,{team:i,type:o}=r.eventPicker,a=G(t,n),d=i==="a"?a.teamAId:a.teamBId;if(!d)return;const s=Ne((b=R("event-picker-minute"))==null?void 0:b.value);if(s!==null&&s<1){g("นาทีต้องเริ่มตั้งแต่ 1");return}const c=s??ui(ee(t,n)),l=Re(),f={level:t,match_code:n,team_id:d,player_id:e,event_type:o,minute:c,is_penalty:!1};r.matchEvents.push({id:l,...f,created_at:new Date().toISOString()});const u=ue();u.push({localId:l,type:"insertEvent",localEventId:l,payload:f}),ye(u),r.eventPicker=null,r.eventPickerFilter="",$(),requestAnimationFrame(()=>{var w;const m=ie==null?void 0:ie.querySelector("[data-match-editor-body]");m&&Number.isFinite((w=r.editMatch)==null?void 0:w.scrollTop)&&(m.scrollTop=r.editMatch.scrollTop)}),xe(),g("บันทึกเหตุการณ์แล้ว")}function oa(e){const t=r.matchEvents.findIndex(i=>i.id===e);t!==-1&&r.matchEvents.splice(t,1);let n=ue();String(e).startsWith("local_")?n=n.filter(i=>i.localEventId!==e):n.push({localId:Re(),type:"deleteEvent",payload:{id:e}}),ye(n),$(),xe()}async function aa(e,t){const n=r.players.find(i=>i.id===e);if(n){g("กำลังอัปโหลดรูป...");try{const i=await Yn(n.team_id,e,t),{error:o}=await h.from("azfutsal_players").update({photo_url:i}).eq("id",e);if(o){g("บันทึกรูปไม่สำเร็จ: "+o.message);return}await I(),g("อัปโหลดรูปสำเร็จ")}catch(i){g("อัปโหลดรูปไม่สำเร็จ: "+((i==null?void 0:i.message)||""))}}}async function ra(e){const t=new Set(r.matches[e].map(o=>o.match_code)),n=H[e].filter(o=>!t.has(o.code)).map((o,a)=>({level:e,match_code:o.code,round:o.round,order_no:a+1}));if(!n.length)return;const{error:i}=await h.from("azfutsal_matches").insert(n);if(i){g("สร้างตารางไม่สำเร็จ: "+i.message);return}await I(),g("สร้างตารางแข่งเริ่มต้นแล้ว")}async function da(e){const t=r.teams.filter(f=>f.level===e).map(f=>f.id),n=H[e].filter(f=>!f.refA&&!f.pool).map(f=>f.code),i=n.length*2,o=dn(e),a=i+(o?1:0);if(t.length<i){g(`ต้องมีทีมอย่างน้อย ${i} ทีมสำหรับรอบแรก`);return}if(t.length>a){g(`รอบแรกมี ${i} ช่อง รองรับทีมบายเพิ่มได้สูงสุด 1 ทีม`);return}const d=Tt(t),s=o?d.shift():null,c=n.map((f,u)=>({level:e,match_code:f,round:"รอบแรก",team_a_id:d[u*2],team_b_id:d[u*2+1]}));if(s){const f=`FIRST_ROUND_BYE_${e}`,{error:u}=await h.from("azfutsal_config").upsert({key:f,value:s});if(u){g("บันทึกทีมบายไม่สำเร็จ: "+u.message);return}const{error:b}=await h.from("azfutsal_matches").update({team_b_id:null}).eq("level",e).in("match_code",se()?["M17","M19"]:["M12","M13"]);if(b){g("เตรียมช่องทีมบายไม่สำเร็จ: "+b.message);return}}const{error:l}=await h.from("azfutsal_matches").upsert(c,{onConflict:"level,match_code"});if(l){g("สุ่มจับคู่ไม่สำเร็จ: "+l.message);return}await I(),g(s?`ทีม ${O(s)} ได้บาย · สุ่มประกบคู่ 12 ทีมที่เหลือแล้ว`:"สุ่มจับคู่รอบแรกแล้ว")}async function sa(e,t,n){const i=H[e].find(u=>u.code===t),o=n==="a"?i==null?void 0:i.refA:i==null?void 0:i.refB;if(o!=="LOTTERY_1"&&o!=="LOTTERY_2")return;const a=lt(e,o);if(!a.length||!a.every(u=>G(e,u).loserId)){g("ต้องบันทึกผลการแข่งขันต้นทางให้ครบก่อนจับฉลาก");return}const d=Ae(e,a);if(!d.length){g("ไม่พบทีมสำหรับจับฉลาก");return}const s=Tt(d)[0],c=n==="a"?"team_a_id":"team_b_id",{error:l}=await h.from("azfutsal_matches").update({[c]:s}).eq("level",e).eq("match_code",t);if(l){g("บันทึกผลจับฉลากไม่สำเร็จ: "+l.message);return}const f=ee(e,t);f&&(f[c]=s),$(),g(`จับฉลากได้ทีม ${O(s)}`)}async function la(e,t){var l;if(!gt(e,t)){g("รอบก่อนหน้ายังแข่งไม่ครบ จับคู่รอบนี้ไม่ได้");return}const n=Te(e,((l=Ye[e])==null?void 0:l[t])||[]),i=Pe(e).map(f=>f.id).filter(f=>n.includes(f));n.forEach(f=>{i.includes(f)||i.push(f)});const o=H[e].filter(f=>f.pool===t).map(f=>f.code),a=i.length,d=(H[e].find(f=>f.pool===t)||{}).round||"",s=o.map((f,u)=>({level:e,match_code:f,round:d,team_a_id:i[u],team_b_id:i[a-1-u]})),{error:c}=await h.from("azfutsal_matches").upsert(s,{onConflict:"level,match_code"});if(c){g("จัดคู่อัตโนมัติไม่สำเร็จ: "+c.message);return}await I(),g("จัดคู่ตามอันดับแล้ว (อันดับดี พบ อันดับรอง)")}async function ca(){const{level:e,pool:t}=r.manualPoolAssign,n=t==="SF",i=n?["M22","M23"]:H[e].filter(c=>c.pool===t).map(c=>c.code),o=n?"รองฯ":(H[e].find(c=>c.pool===t)||{}).round||"",a=[],d=new Set;for(const c of i){const l=R(`mp-${c}-a`).value||null,f=R(`mp-${c}-b`).value||null;if(!l||!f){g(`กรุณาเลือกทีมให้ครบทุกคู่ (ขาด ${c})`);return}if(l===f||d.has(l)||d.has(f)){g("มีทีมถูกเลือกซ้ำกันมากกว่า 1 คู่ กรุณาตรวจสอบ");return}d.add(l),d.add(f),a.push({level:e,match_code:c,round:o,team_a_id:l,team_b_id:f})}if(n){if(!Qe(e)){g("เปลี่ยนคู่ไม่ได้ เพราะ M22 หรือ M23 เริ่มแข่งขันหรือมีข้อมูลรายงานตัวแล้ว");return}const c=Te(e,Me),l=Ae(e,Me);if(!c.every(f=>d.has(f))||[...d].filter(f=>l.includes(f)).length!==1){g("ต้องเลือกผู้ชนะ M19–M21 ครบ 3 ทีม และผู้แพ้กลับเข้ารอบอีก 1 ทีม");return}}const{error:s}=await h.from("azfutsal_matches").upsert(a,{onConflict:"level,match_code"});if(s){g("บันทึกไม่สำเร็จ: "+s.message);return}r.manualPoolAssign=null,await I(),g("บันทึกการจับคู่แล้ว")}async function pa(e){var d;if(r.teamCreating)return;const t=R("new-team-name").value.trim(),n=R("new-team-level").value;if(!t){g("กรุณากรอกชื่อทีม");return}if(!e&&y(`REGISTRATION_OPEN_${n}`,"0")!=="1"){g(`ขณะนี้ปิดรับสมัครทีม${S[n].label}แล้ว`);return}let i;if(e){const s=r.capLookupResult;if(!s||typeof s!="object"){g("กรุณาค้นหาและเลือกหัวหน้าทีมก่อน");return}i=s.id}else i=r.identity.student.id;if(r.teamCreating=!0,$(),!e&&n==="HS"){const{count:s}=await h.from("azfutsal_teams").select("id",{count:"exact",head:!0}).eq("level","HS").eq("is_organizer",!1),c=Number(y("MAX_TEAMS_HS","14")||14);if((s||0)>=c){r.teamCreating=!1,g("ทีม ม.ปลาย เต็มโควตาแล้ว"),$();return}}const{data:o,error:a}=await h.from("azfutsal_teams").insert({name:t,level:n,captain_student_id:i}).select("id").single();if(r.teamCreating=!1,a){const s=a.code==="23505"?"นักเรียนคนนี้เป็นหัวหน้าทีมอยู่แล้ว สร้างทีมซ้ำไม่ได้":(d=a.message)!=null&&d.includes("HS_TEAM_QUOTA_FULL")?"ทีม ม.ปลาย เต็มโควตาแล้ว":"สร้างทีมไม่สำเร็จ: "+a.message;g(s),$();return}if(n==="HS"){const{count:s}=await h.from("azfutsal_teams").select("id",{count:"exact",head:!0}).eq("level","HS").eq("is_organizer",!1),c=Number(y("MAX_TEAMS_HS","14")||14);(s||0)>=c&&y("REGISTRATION_OPEN_HS","0")==="1"&&await h.from("azfutsal_config").upsert({key:"REGISTRATION_OPEN_HS",value:"0"})}r.newTeamName="",r.capLookupCode="",r.capLookupResult=null,e&&(r.adminCreatingTeam=!1,r.adminManageTeamId=o.id),await I(),g("สร้างทีมแล้ว เพิ่มรายชื่อนักกีฬาต่อได้เลย")}async function Jt(e){if(!e||e.trim().length<2)return[];const t=`%${e.trim()}%`,{data:n}=await h.from("students").select("id, full_name, student_code, image_url, photo_url").or(`full_name.ilike.${t},student_code.ilike.${t}`).limit(8);return n||[]}async function fa(){const e=R("admin-login-username").value.trim(),t=R("admin-login-password").value;if(!e||!t){r.adminLoginError="กรอกยูสเซอร์เนมและรหัสผ่าน",$();return}if(e!==y("ADMIN_LOGIN_USERNAME","aaaaaa")){r.adminLoginError="ยูสเซอร์เนมหรือรหัสผ่านไม่ถูกต้อง",$();return}const{error:n}=await h.auth.signInWithPassword({email:on,password:t});if(n){r.adminLoginError="ยูสเซอร์เนมหรือรหัสผ่านไม่ถูกต้อง",$();return}r.adminLoginOpen=!1,await I(),r.tab=r.identity.isAdmin?"admin":(r.identity.scopes||[]).length?"staff":"schedule",$(),g("เข้าสู่ระบบแล้ว")}async function Kt(e,t,n){const i=n==="captain"?"captain_student_id":"vice_captain_student_id",{error:o}=await h.from("azfutsal_teams").update({[i]:t}).eq("id",e);if(o){g("บันทึกไม่สำเร็จ: "+o.message);return}await I(),g(n==="captain"?"ตั้งหัวหน้าทีมแล้ว":"ตั้งรองหัวหน้าทีมแล้ว")}async function ua(e){var o;const t=r.rosterLookupResult;if(!t||typeof t!="object")return;const n=(o=R("roster-jersey"))==null?void 0:o.value,{error:i}=await h.from("azfutsal_players").insert({team_id:e,student_id:t.id,jersey_number:n?Number(n):null});if(i){g("เพิ่มนักกีฬาไม่สำเร็จ: "+i.message);return}r.rosterLookupCode="",r.rosterLookupResult=null,r.rosterJersey="",await I(),g("เพิ่มนักกีฬาแล้ว")}async function xa(e,t){var c,l;if(r.paymentUploading)return;const n=(l=(c=R("pay-slip-file"))==null?void 0:c.files)==null?void 0:l[0];if(!n){g("กรุณาเลือกไฟล์รูปภาพ");return}r.paymentUploading=!0,$();const i=`${e}/${t}_${Date.now()}_${n.name}`,{error:o}=await h.storage.from("azfutsal-payments").upload(i,n,{upsert:!0});if(o){g("อัปโหลดไม่สำเร็จ: "+o.message),r.paymentUploading=!1,$();return}const a=r.payments.find(f=>f.team_id===e),d={team_id:e,method:t,amount:Number(y("DEPOSIT_AMOUNT",500)),status:"pending",admin_note:null,slip_url:t==="transfer"?i:null,receipt_photo_url:t==="cash"?i:null,receipt_no:t==="cash"?(a==null?void 0:a.receipt_no)||`RCP-${Date.now()}`:null},{error:s}=await h.from("azfutsal_payments").upsert(d,{onConflict:"team_id"});if(r.paymentUploading=!1,s){g("บันทึกไม่สำเร็จ: "+s.message),$();return}r.confirmRegOpen=!1,r.confirmRegQR=null,await I(),g("ยืนยันการลงทะเบียนสำเร็จ ส่งหลักฐานแล้ว")}async function ga(e){r.confirmRegTeamId=e,r.confirmRegOpen=!0,r.confirmRegQR=null,$();try{r.confirmRegQR=await Gn(y("PROMPTPAY_NUMBER","0825424340"),Number(y("DEPOSIT_AMOUNT",500)))}catch{r.confirmRegQR=null}$()}function ma(e){const t=e==="MS"?"MS":"HS",n=Math.random().toString(36).slice(2,6).toUpperCase();return`${t}-${n}`}async function ba(){const e=r.rejectPaymentId,t=r.rejectReasonText.trim();if(!e||!t)return;const{error:n}=await h.from("azfutsal_payments").update({status:"rejected",admin_note:t,reviewed_by:r.identity.profile.id,reviewed_at:new Date().toISOString()}).eq("id",e);if(n){g("บันทึกไม่สำเร็จ: "+n.message);return}r.rejectPaymentId=null,r.rejectReasonText="",await I(),g("ปฏิเสธการชำระเงินแล้ว")}async function ya(e,t){const{error:n}=await h.from("azfutsal_payments").update({status:t,admin_note:null,reviewed_by:r.identity.profile.id,reviewed_at:new Date().toISOString()}).eq("id",e);if(n){g("บันทึกไม่สำเร็จ: "+n.message);return}if(t==="verified"){const i=r.payments.find(a=>a.id===e),o=i?r.teams.find(a=>a.id===i.team_id):null;if(o){const a={};o.team_code||(a.team_code=ma(o.level));const d=Number(y(o.level==="MS"?"MAX_TEAMS_MS":"MAX_TEAMS_HS","")||0);if(d>0&&!o.is_organizer){const s=r.payments.filter(c=>{var l,f;return c.status==="verified"&&c.team_id!==o.id&&((l=r.teams.find(u=>u.id===c.team_id))==null?void 0:l.level)===o.level&&!((f=r.teams.find(u=>u.id===c.team_id))!=null&&f.is_organizer)}).length;a.is_reserve=s>=d}Object.keys(a).length&&await h.from("azfutsal_teams").update(a).eq("id",o.id)}}await I(),g("ยืนยันการชำระเงินแล้ว")}async function va(e,t={}){var c;const{data:n}=await h.from("azfutsal_refunds").select("id").eq("team_id",e).maybeSingle();if(n)return g("ทีมนี้ถูกยืนยันคืนเงินไปแล้ว (อาจมีคนอื่นยืนยันไปก่อนหน้านี้) กำลังรีเฟรชข้อมูล..."),await I(),"already";const i=r.teams.find(l=>l.id===e),o=r.payments.find(l=>l.team_id===e&&l.status==="verified");if(!i||!o)return g("ยืนยันไม่ได้: ไม่พบการชำระค่าประกันที่ผ่านการตรวจสอบ"),"error";const a={team_id:i.id,payment_id:o.id,...je(i),recipient_signature_url:t.recipientSignatureUrl||null,payment_method:t.paymentMethod||null,proof_url:t.proofUrl||null,confirmed_by:(c=r.identity.profile)==null?void 0:c.id,confirmed_at:new Date().toISOString()},{data:d,error:s}=await h.from("azfutsal_refunds").insert(a).select("id, team_id, receipt_no, deposit_amount, operation_fee, yellow_count, yellow_rate, yellow_deduction, red_count, red_rate, red_deduction, refund_amount, deduction_snapshot, logo_url, recipient_signature_url, payment_method, proof_url, confirmed_at, created_at").single();return s?s.code==="23505"||/duplicate key/i.test(s.message)?(g("ทีมนี้ถูกยืนยันคืนเงินไปแล้วโดยผู้อื่นพอดี กำลังรีเฟรชข้อมูล..."),await I(),"already"):(g("ยืนยันคืนเงินไม่สำเร็จ: "+s.message),"error"):(r.refunds=[d,...r.refunds.filter(l=>l.team_id!==e)],g(`ยืนยันคืนเงินทีม ${i.name} แล้ว`),I(),"success")}async function ha(e){r.viewProofOpen=!0,r.viewProofUrl=null,$();const{data:t,error:n}=await h.storage.from("azfutsal-payments").createSignedUrl(e,300);if(n||!t){g("เปิดไฟล์ไม่สำเร็จ"),r.viewProofOpen=!1,$();return}r.viewProofUrl=t.signedUrl,$()}function wa(){ie.addEventListener("click",async e=>{var i,o,a,d,s,c,l,f,u,b,m,w,z,A,E,M,v,_,C,L,j,U,F,Q,q,X;const t=e.target.closest("[data-act]");if(!t)return;const n=t.dataset.act;if(n==="toggleTheme"){r.theme=r.theme==="dark"?"light":"dark",localStorage.setItem("az_theme",r.theme),$();return}if(n==="tab"){r.tab=t.dataset.tab,$();return}if(n==="setScheduleMode"){r.scheduleMode=t.dataset.v==="bracket"?"bracket":"timeline",$();return}if(n==="setScheduleDay"){r.scheduleDay=t.dataset.v==="2"?2:1,$();return}if(n==="jumpToCurrentMatch"){if(!Mt()){g("ไม่มีคู่ที่กำลังแข่งขันอยู่ตอนนี้");return}(i=document.getElementById("az-current-match"))==null||i.scrollIntoView({behavior:"smooth",block:"start"});return}if(n==="setBracketLevel"){r.bracketLevel=t.dataset.v==="HS"?"HS":"MS",$();return}if(n==="jumpBracketRound"){const x=document.getElementById("az-bracket-scroll"),k=document.getElementById(`az-bracket-round-${t.dataset.v}`);x&&k&&x.scrollTo({left:k.offsetLeft-2,behavior:"smooth"});return}if(n==="setLevel"){r.filterLevel=t.dataset.v,$();return}if(n==="setStats"){r.statsLevel=t.dataset.v,$();return}if(n==="setTeamStatusLevel"){r.teamStatusLevel=t.dataset.v,$();return}if(n==="toggleTeamRoster"){r.teamStatusExpanded=r.teamStatusExpanded===t.dataset.id?null:t.dataset.id,$();return}if(n==="adminSec"){r.adminSection=t.dataset.v,$();return}if(n==="adminGroup"){const x=Be.find(k=>k.id===t.dataset.v);x&&(r.adminSection=x.sections[0][0]),$();return}if(n==="myTeamTab"){r.myTeamTab=t.dataset.v,$();return}if(n==="adminTeamLevel"){r.adminTeamLevel=t.dataset.v,$();return}if(n==="adminAthleteLevel"){r.adminAthleteLevel=t.dataset.v,$();return}if(n==="showPlayerQR"){const x=r.players.find(k=>k.id===t.dataset.id);x&&Oi(x);return}if(n==="downloadAthletesExcel"){za(t.dataset.level);return}if(n==="printAttendanceForm"){Vt();return}if(n==="downloadAttendanceForm"){Wt();return}if(n==="printAttendanceSystemNames"){Vt(!0);return}if(n==="downloadAttendanceSystemNames"){Wt(!0);return}if(n==="adminPaymentsLevel"){r.adminPaymentsLevel=t.dataset.v,$();return}if(n==="adminRefundLevel"){r.adminRefundLevel=t.dataset.v,$();return}if(n==="openRefundReceipt"){qt(t.dataset.team);return}if(n==="openRefundReceiptPreview"){_i(t.dataset.team);return}if(n==="confirmRefund"){const x=r.teams.find(k=>k.id===t.dataset.team);if(!x)return;r.refundConfirmSign={teamId:x.id},$();return}if(n==="refreshRefunds"){await I(),g("รีเฟรชข้อมูลแล้ว");return}if(n==="openRefundPayerSettings"){r.refundPayerSettingsOpen=!0,$();return}if(n==="closeRefundPayerSettings"){r.refundPayerSettingsOpen=!1,$();return}if(n==="clearRecipientSignature"){const x=R("refund-recipient-sigpad");x&&x.getContext("2d").clearRect(0,0,x.width,x.height);return}if(n==="cancelRefundSign"){r.refundConfirmSign=null,$();return}if(n==="confirmRefundWithSignature"){const x=t.dataset.team,k=R("refund-confirm-modal"),T=k==null?void 0:k.dataset.method;if(!T){g("กรุณาเลือกวิธีคืนเงิน (โอน/เงินสด)");return}let N=null;if(T==="transfer"){const V=(a=(o=R("refund-proof-file-transfer"))==null?void 0:o.files)==null?void 0:a[0];if(!V){g("กรุณาอัปโหลดสลิปการโอน");return}const J=await Rt(V,{maxWidth:1200,quality:.85}),Y=`refund-proof/${x}_${Date.now()}.jpg`,{error:te}=await h.storage.from("azfutsal-payments").upload(Y,J,{upsert:!0,contentType:"image/jpeg"});if(te){g("อัปโหลดสลิปไม่สำเร็จ: "+te.message);return}N=Y}const B=R("refund-recipient-sigpad");let D=null;if(B){const V=await new Promise(J=>B.toBlob(J,"image/png"));if(V){const J=`refund-recipient-signature_${x}_${Date.now()}.png`,{error:Y}=await h.storage.from("azfutsal-assets").upload(J,V,{upsert:!0,contentType:"image/png"});if(!Y){const{data:te}=h.storage.from("azfutsal-assets").getPublicUrl(J);D=te.publicUrl}}}const P=await va(x,{recipientSignatureUrl:D,paymentMethod:T,proofUrl:N});P==="success"?(r.refundConfirmSign=null,r.refundConfirmDone={teamId:x},$()):P==="already"&&(r.refundConfirmSign=null,$());return}if(n==="printRefundReceiptDone"){qt(t.dataset.team);return}if(n==="closeRefundDone"){r.refundConfirmDone=null,$();return}if(n==="uploadCashRefundProof"||n==="uploadCashRefundProofInline"){const x=t.dataset.team,k=n==="uploadCashRefundProofInline"?`refund-cash-proof-file-${x}`:"refund-cash-proof-file",T=(s=(d=R(k))==null?void 0:d.files)==null?void 0:s[0];if(!T){g("กรุณาเลือกไฟล์รูปภาพ");return}const N=await Rt(T,{maxWidth:1200,quality:.85}),B=`refund-proof/${x}_${Date.now()}.jpg`,{error:D}=await h.storage.from("azfutsal-payments").upload(B,N,{upsert:!0,contentType:"image/jpeg"});if(D){g("อัปโหลดไม่สำเร็จ: "+D.message);return}const P=le(x);if(!P){g("ไม่พบข้อมูลคืนเงินของทีมนี้");return}const{error:V}=await h.from("azfutsal_refunds").update({proof_url:B}).eq("id",P.id);if(V){g("บันทึกไม่สำเร็จ: "+V.message);return}await I(),g("อัปโหลดรูปหลักฐานแล้ว");return}if(n==="closeModal"){r.editMatch=null,r.eventPicker=null,r.eventPickerFilter="",r.certModalOpen=!1,r.certFullscreenIndex=null,r.rejectPaymentId=null,r.rejectReasonText="",r.staffScopeEdit=null,r.manualPoolAssign=null,$();return}if(n==="confirmActionNo"){r.pendingConfirm=null,$();return}if(n==="confirmActionYes"){const x=r.pendingConfirm;r.pendingConfirm=null,$(),x!=null&&x.run&&await x.run();return}if(n==="account"){if(!r.identity.session){Ft();return}if(!r.identity.student){g("หน้านี้สำหรับนักเรียน (หัวหน้าทีม/ตัวแทนทีม) เท่านั้น");return}r.teamCodeInput||(r.teamCodeInput=localStorage.getItem("az_team_code")||""),r.tab="myteam",$();return}if(n==="admin-gear"){if(r.identity.isAdmin){r.tab="admin",$();return}if((r.identity.scopes||[]).length){r.tab="staff",$();return}r.adminLoginOpen=!0,r.adminLoginError="",r.adminLoginUsername="",$();return}if(n==="closeAdminLogin"){r.adminLoginOpen=!1,$();return}if(n==="goToPp5Login"){Ft("index.html");return}if(n==="submitAdminLogin"){await fa();return}if(n==="adminSignOut"){await h.auth.signOut(),r.tab="schedule",await I(),g("ออกจากระบบแล้ว");return}if(n==="editMatch"){const x=ee(t.dataset.level,t.dataset.code);r.editMatch={level:t.dataset.level,code:t.dataset.code,penaltyMode:!!(x!=null&&x.is_penalty_shootout)},r.eventPicker=null,r.eventPickerFilter="",$();return}if(n==="togglePenaltyShootoutMode"){r.editMatch.penaltyMode=!r.editMatch.penaltyMode,$();return}if(n==="openEventPicker"){const x=t.closest("[data-match-editor-body]");r.editMatch&&(r.editMatch.scrollTop=(x==null?void 0:x.scrollTop)||0),r.eventPicker={team:t.dataset.team,type:t.dataset.type},r.eventPickerFilter="",$(),requestAnimationFrame(()=>{var k;return(k=document.getElementById("event-picker-filter"))==null?void 0:k.focus()});return}if(n==="closeEventPicker"){r.eventPicker=null,r.eventPickerFilter="",$(),requestAnimationFrame(()=>{var k;const x=ie==null?void 0:ie.querySelector("[data-match-editor-body]");x&&Number.isFinite((k=r.editMatch)==null?void 0:k.scrollTop)&&(x.scrollTop=r.editMatch.scrollTop)});return}if(n==="pickEventPlayer"){await ia(t.dataset.player);return}if(n==="removeMatchEvent"){await oa(t.dataset.id);return}if(n==="togglePlayerEventDetail"){r.expandedPlayerId=r.expandedPlayerId===t.dataset.id?null:t.dataset.id,$();return}if(n==="toggleEventPenalty"){const x=r.matchEvents.find(T=>T.id===t.dataset.id);if(!x)return;x.is_penalty=!x.is_penalty;let k=ue();if(String(x.id).startsWith("local_")){const T=k.find(N=>N.localEventId===x.id);T&&(T.payload.is_penalty=x.is_penalty)}else k.push({localId:Re(),type:"togglePenalty",payload:{id:x.id,is_penalty:x.is_penalty}});ye(k),$(),xe();return}if(n==="refreshMatchEditorData"){t.disabled=!0,t.textContent="กำลังรีเฟรช...",await I(),g("ดึงข้อมูลล่าสุดแล้ว");return}if(n==="saveMatch"){await na(t.dataset.level,t.dataset.code);return}if(n==="saveMatchAndShift"){const x=t.dataset.level,k=t.dataset.code,T=R("mx-kickoff").value.trim();if(!/^\d{1,2}:\d{2}$/.test(T)){g("กรุณากรอกเวลาแข่งของนัดนี้ให้ถูกต้องก่อน (HH:MM)");return}const N=ve(x,k),B=Se(N),D=B.findIndex(([be,we])=>be===x&&we===k);if(D===-1){g("ไม่พบนัดนี้ในลำดับตารางของวันนี้");return}const P=Number(y("MATCH_MIN",20))||20,V=Number(y("BREAK_MIN",5))||5,[J,Y]=T.split(":").map(Number);let te=new Date;te.setHours(J,Y,0,0);let oe=ue();for(let be=D;be<B.length;be+=1){const[we,nt]=B[be],qn=te.toTimeString().slice(0,5),Vn=new Date(te.getTime()-10*6e4).toTimeString().slice(0,5),it={level:we,match_code:nt,kickoff_time:qn,ready_time:Vn,duration_min:P,break_min:V},At=ee(we,nt);At?Object.assign(At,it):r.matches[we].push(it),oe=oe.filter(ot=>!(ot.type==="saveMatch"&&ot.payload.level===we&&ot.payload.match_code===nt)),oe.push({localId:Re(),type:"saveMatch",payload:it}),te=new Date(te.getTime()+(P+V)*6e4)}ye(oe),r.editMatch=null,$(),xe(),g(`ปรับเวลานัดนี้และเลื่อนอีก ${B.length-D-1} นัดที่เหลือของวันนี้แล้ว`);return}if(n==="seedMatches"){await ra(t.dataset.level);return}if(n==="randomDraw"){await da(t.dataset.level);return}if(n==="drawLotteryTeam"){await sa(t.dataset.level,t.dataset.code,t.dataset.side);return}if(n==="setMsFormat"){if(r.matches.MS.length){g("สร้างตารางแข่ง ม.ต้น ไปแล้ว เปลี่ยนรูปแบบไม่ได้");return}const{error:x}=await h.from("azfutsal_config").upsert({key:"MS_TEAM_FORMAT",value:t.dataset.v});if(x){g("บันทึกไม่สำเร็จ: "+x.message);return}await I(),g(`ตั้งรูปแบบสายการแข่ง ม.ต้น เป็น ${t.dataset.v} ทีมแล้ว`);return}if(n==="openCert"){r.certModalOpen=!0,r.certFullscreenIndex=null,r.knownStudentCode?(r.certInput=r.knownStudentCode,r.certResults=jt(r.knownStudentCode)):(r.certResults=null,r.certInput=""),$();return}if(n==="certClose"){r.certModalOpen=!1,r.certFullscreenIndex=null,$();return}if(n==="certBack"){r.certFullscreenIndex=null,$();return}if(n==="certFull"){r.certFullscreenIndex=Number(t.dataset.idx),$();return}if(n==="certPrint"){const x=(r.certResults||[])[Number(t.dataset.idx)];if(!x)return;Zn({name:x.name,award:rn(x.awardType),templateUrl:y("CERT_TEMPLATE_URL","")},g);return}if(n==="certSearch"){const x=R("az-certInput").value.trim();r.certInput=x,r.certResults=jt(x),r.certFullscreenIndex=null,$();return}if(n==="createTeam"){await pa(t.dataset.admin==="1");return}if(n==="lookupTeamCode"){const x=(c=R("team-code-input"))==null?void 0:c.value.trim().toUpperCase();if(!x)return;const k=r.teams.find(T=>(T.team_code||"").toUpperCase()===x);r.teamCodeLookupResult=k||"notfound",k&&localStorage.setItem("az_team_code",x),$();return}if(n==="exitTeamCodeView"){r.teamCodeLookupResult=null,r.teamCodeInput="",$();return}if(n==="setCaptain"){await Kt(t.dataset.team,Number(t.dataset.student),"captain");return}if(n==="setViceCaptain"){await Kt(t.dataset.team,Number(t.dataset.student),"vice_captain");return}if(n==="startEditTeamName"){r.editingTeamName=!0,r.editTeamNameValue=t.dataset.name,$();return}if(n==="cancelEditTeamName"){r.editingTeamName=!1,r.editTeamNameValue="",$();return}if(n==="saveTeamName"){const x=(l=R("edit-team-name-input"))==null?void 0:l.value.trim();if(!x){g("กรุณากรอกชื่อทีม");return}const{error:k}=await h.from("azfutsal_teams").update({name:x}).eq("id",t.dataset.team);if(k){g("บันทึกไม่สำเร็จ: "+k.message);return}r.editingTeamName=!1,r.editTeamNameValue="",await I(),g("บันทึกชื่อทีมแล้ว");return}if(n==="startEditJersey"){r.editingJerseyId=t.dataset.id,r.editJerseyValue=t.dataset.v,$();return}if(n==="cancelEditJersey"){r.editingJerseyId=null,r.editJerseyValue="",$();return}if(n==="saveJersey"){const x=(f=R("edit-jersey-input"))==null?void 0:f.value,k=x===""||x===void 0?null:Number(x),{error:T}=await h.from("azfutsal_players").update({jersey_number:k}).eq("id",t.dataset.id);if(T){g("บันทึกไม่สำเร็จ: "+T.message);return}r.editingJerseyId=null,r.editJerseyValue="",await I(),g("บันทึกเบอร์เสื้อแล้ว");return}if(n==="adminNewTeam"){r.adminCreatingTeam=!0,r.adminManageTeamId=null,$();return}if(n==="adminBackToList"){r.adminCreatingTeam=!1,r.adminManageTeamId=null,$();return}if(n==="adminOpenTeam"){r.adminManageTeamId=t.dataset.id,$();return}if(n==="addRosterAthlete"){await ua(t.dataset.team);return}if(n==="uploadPayment"){await xa(t.dataset.team,t.dataset.method);return}if(n==="openConfirmReg"){await ga(t.dataset.team);return}if(n==="closeConfirmReg"){r.confirmRegOpen=!1,r.confirmRegQR=null,$();return}if(n==="reviewPayment"){await ya(t.dataset.id,t.dataset.status);return}if(n==="openRejectModal"){r.rejectPaymentId=t.dataset.id,r.rejectReasonText="",$();return}if(n==="pickRejectTemplate"){r.rejectReasonText=t.dataset.text,$();return}if(n==="confirmReject"){await ba();return}if(n==="viewProof"){await ha(t.dataset.path);return}if(n==="closeViewProof"){r.viewProofOpen=!1,r.viewProofUrl=null,$();return}if(n==="toggleRequireEvents"){const x=y("REQUIRE_EVENTS_BEFORE_SCORE","0")==="1";await h.from("azfutsal_config").upsert({key:"REQUIRE_EVENTS_BEFORE_SCORE",value:x?"0":"1"}),await I();return}if(n==="toggleCert"){const x=y("CERT_ENABLED","1")==="1";await h.from("azfutsal_config").upsert({key:"CERT_ENABLED",value:x?"0":"1"}),await I();return}if(n==="saveCertTexts"){const x=[...document.querySelectorAll(".cert-text-input")].map(T=>({key:`CERT_TEXT_${T.dataset.type}`,value:T.value})),{error:k}=await h.from("azfutsal_config").upsert(x);if(k){g("บันทึกไม่สำเร็จ: "+k.message);return}await I(),g("บันทึกข้อความรางวัลแล้ว");return}if(n==="toggleRegistration"){const k=`REGISTRATION_OPEN_${t.dataset.level}`,T=y(k,"0")==="1";await h.from("azfutsal_config").upsert({key:k,value:T?"0":"1"}),await I();return}if(n==="uploadCertTemplate"){const x=(b=(u=R("cert-template-file"))==null?void 0:u.files)==null?void 0:b[0];if(!x){g("กรุณาเลือกรูปภาพ");return}const k=x.name.replace(/[^a-zA-Z0-9._-]/g,"_"),T=`cert-template_${Date.now()}_${k}`,{error:N}=await h.storage.from("azfutsal-assets").upload(T,x,{upsert:!0});if(N){g("อัปโหลดไม่สำเร็จ: "+N.message);return}const{data:B}=h.storage.from("azfutsal-assets").getPublicUrl(T);await h.from("azfutsal_config").upsert({key:"CERT_TEMPLATE_URL",value:B.publicUrl}),await I(),g("อัปโหลดพื้นหลังเกียรติบัตรแล้ว");return}if(n==="uploadRefundReceiptLogo"){const x=(w=(m=R("refund-receipt-logo-file"))==null?void 0:m.files)==null?void 0:w[0];if(!x){g("กรุณาเลือกรูปโลโก้โรงเรียน");return}if(!x.type.startsWith("image/")){g("กรุณาเลือกไฟล์รูปภาพ");return}if(x.size>5*1024*1024){g("ไฟล์โลโก้ต้องไม่เกิน 5 MB");return}const k=x.name.replace(/[^a-zA-Z0-9._-]/g,"_"),T=`refund-receipt/logo_${Date.now()}_${k}`,{error:N}=await h.storage.from("azfutsal-assets").upload(T,x,{upsert:!0});if(N){g("อัปโหลดไม่สำเร็จ: "+N.message);return}const{data:B}=h.storage.from("azfutsal-assets").getPublicUrl(T),{error:D}=await h.from("azfutsal_config").upsert({key:"REFUND_RECEIPT_LOGO_URL",value:B.publicUrl});if(D){g("บันทึกโลโก้ไม่สำเร็จ: "+D.message);return}await I(),g("อัปโหลดโลโก้สำหรับใบเสร็จแล้ว");return}if(n==="saveRefundPayerInfo"){const x=((A=(z=R("refund-payer-name"))==null?void 0:z.value)==null?void 0:A.trim())||"",k=((M=(E=R("refund-payer-title"))==null?void 0:E.value)==null?void 0:M.trim())||"",{error:T}=await h.from("azfutsal_config").upsert([{key:"REFUND_PAYER_NAME",value:x},{key:"REFUND_PAYER_TITLE",value:k}]);if(T){g("บันทึกไม่สำเร็จ: "+T.message);return}await I(),g("บันทึกข้อมูลผู้จ่ายเงินแล้ว");return}if(n==="clearSignaturePad"){const x=R("refund-payer-sigpad");x&&x.getContext("2d").clearRect(0,0,x.width,x.height);return}if(n==="saveDrawnSignature"){const x=R("refund-payer-sigpad");if(!x)return;const k=await new Promise(P=>x.toBlob(P,"image/png"));if(!k){g("ไม่มีลายเซ็นให้บันทึก");return}const T=`refund-payer-signature_${Date.now()}.png`,{error:N}=await h.storage.from("azfutsal-assets").upload(T,k,{upsert:!0,contentType:"image/png"});if(N){g("บันทึกลายเซ็นไม่สำเร็จ: "+N.message);return}const{data:B}=h.storage.from("azfutsal-assets").getPublicUrl(T),{error:D}=await h.from("azfutsal_config").upsert({key:"REFUND_PAYER_SIGNATURE_URL",value:B.publicUrl});if(D){g("บันทึกลายเซ็นไม่สำเร็จ: "+D.message);return}await I(),g("บันทึกลายเซ็นแล้ว");return}if(n==="uploadPayerSignature"){const x=(_=(v=R("refund-payer-sig-file"))==null?void 0:v.files)==null?void 0:_[0];if(!x){g("กรุณาเลือกไฟล์รูปลายเซ็น");return}if(!x.type.startsWith("image/")){g("กรุณาเลือกไฟล์รูปภาพ");return}if(x.size>5*1024*1024){g("ไฟล์ลายเซ็นต้องไม่เกิน 5 MB");return}const k=x.name.replace(/[^a-zA-Z0-9._-]/g,"_"),T=`refund-payer-signature_${Date.now()}_${k}`,{error:N}=await h.storage.from("azfutsal-assets").upload(T,x,{upsert:!0});if(N){g("อัปโหลดไม่สำเร็จ: "+N.message);return}const{data:B}=h.storage.from("azfutsal-assets").getPublicUrl(T),{error:D}=await h.from("azfutsal_config").upsert({key:"REFUND_PAYER_SIGNATURE_URL",value:B.publicUrl});if(D){g("บันทึกลายเซ็นไม่สำเร็จ: "+D.message);return}await I(),g("อัปโหลดลายเซ็นแล้ว");return}if(n==="uploadCertSong"){const x=(L=(C=R("cert-song-file"))==null?void 0:C.files)==null?void 0:L[0];if(!x){g("กรุณาเลือกไฟล์เพลง");return}const k=x.name.replace(/[^a-zA-Z0-9._-]/g,"_"),T=`cert-song_${Date.now()}_${k}`,{error:N}=await h.storage.from("azfutsal-assets").upload(T,x,{upsert:!0});if(N){g("อัปโหลดไม่สำเร็จ: "+N.message);return}const{data:B}=h.storage.from("azfutsal-assets").getPublicUrl(T);await h.from("azfutsal_config").upsert([{key:"CERT_SONG_URL",value:B.publicUrl},{key:"CERT_SONG_NAME",value:x.name}]),await I(),g("อัปโหลดเพลงแล้ว");return}if(n==="saveGeneral"){await h.from("azfutsal_config").upsert([{key:"EVENT_NAME",value:R("cfg-eventName").value},{key:"INFO_DATE",value:R("cfg-date").value},{key:"INFO_VENUE",value:R("cfg-venue").value},{key:"COLOR_MS",value:R("cfg-colorMs").value},{key:"COLOR_HS",value:R("cfg-colorHs").value}]),await I(),g("บันทึกแล้ว");return}if(n==="saveAdminAccount"){const x=R("admin-acct-username").value.trim(),k=R("admin-acct-password").value;if(!x){g("กรอกยูสเซอร์เนม");return}if(k&&k.length<6){g("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");return}if(await h.from("azfutsal_config").upsert({key:"ADMIN_LOGIN_USERNAME",value:x}),k){const{error:T}=await h.auth.updateUser({password:k});if(T){g("เปลี่ยนรหัสผ่านไม่สำเร็จ: "+T.message);return}}await I(),g("บันทึกบัญชีแอดมินสำรองแล้ว");return}if(n==="saveRegSettings"){await h.from("azfutsal_config").upsert([{key:"DEPOSIT_AMOUNT",value:R("reg-deposit").value},{key:"MAX_ROSTER",value:R("reg-maxroster").value},{key:"PROMPTPAY_NUMBER",value:R("reg-promptpay").value.trim()},{key:"RATE_YELLOW",value:R("reg-ratey").value},{key:"RATE_RED",value:R("reg-rater").value},{key:"OPERATION_FEE",value:R("reg-opfee").value},{key:"MAX_TEAMS_MS",value:R("reg-quota-ms").value||""},{key:"MAX_TEAMS_HS",value:R("reg-quota-hs").value||""},{key:"REGISTER_EDIT_DEADLINE",value:R("reg-deadline").value||""}]),await I(),g("บันทึกการตั้งค่าแล้ว");return}if(n==="saveAutoTime"){const x=R("ops-start").value,k=R("ops-start-day2").value,T=Number(R("ops-matchmin").value||20),N=Number(R("ops-breakmin").value||5);if(!x||!k){g("กรุณาเลือกวันและเวลาเริ่มแข่งให้ครบทั้ง 2 วัน");return}if(new Date(k)<=new Date(x)){g("วันที่ 2 ต้องอยู่หลังวันที่ 1");return}await h.from("azfutsal_config").upsert([{key:"START_TIME",value:x},{key:"SECOND_DAY_START_TIME",value:k},{key:"MATCH_MIN",value:String(T)},{key:"BREAK_MIN",value:String(N)}]);const B=[{start:x,codes:Se(1)},{start:k,codes:Se(2)}].flatMap(P=>{let V=new Date(P.start);return P.codes.map(([J,Y])=>{const te=V.toTimeString().slice(0,5),oe=new Date(V.getTime()-10*6e4).toTimeString().slice(0,5);return V=new Date(V.getTime()+(T+N)*6e4),{level:J,match_code:Y,round:(H[J].find(be=>be.code===Y)||{}).round||"",kickoff_time:te,ready_time:oe,duration_min:T,break_min:N}})}),{error:D}=await h.from("azfutsal_matches").upsert(B,{onConflict:"level,match_code"});if(D){g("จัดเวลาไม่สำเร็จ: "+D.message);return}await I(),g("จัดตารางแข่งขัน 2 วันเรียบร้อยแล้ว");return}if(n==="saveHalfDuration"){const x=Number(R("ops-halfmin").value||20);if(x<=0){g("นาทีต่อครึ่งต้องมากกว่า 0");return}await h.from("azfutsal_config").upsert({key:"HALF_DURATION_MINUTES",value:String(x)}),await I(),g("บันทึกนาทีต่อครึ่งแล้ว");return}if(n==="resetAllMatchResults"){r.pendingConfirm={message:`ล้างผลการแข่งขันทั้งหมดจริงหรือไม่?
สกอร์ ผู้ทำประตู ใบเหลือง/ใบแดง และนาฬิกาของทุกนัดจะถูกล้างกลับเป็นค่าเริ่มต้น
การกระทำนี้ย้อนกลับไม่ได้`,danger:!0,confirmLabel:"ล้างผลทั้งหมด",run:async()=>{const x=[],k=[];["MS","HS"].forEach(B=>{H[B].forEach(D=>{x.push({level:B,match_code:D.code,score_a:null,score_b:null,is_penalty_shootout:!1,penalty_score_a:null,penalty_score_b:null,winner_team_id:null,loser_team_id:null,clock_status:"not_started",clock_half:null,clock_started_at:null,clock_elapsed_before:0,clock_half_started_elapsed:0}),(D.refA||D.refB)&&k.push({level:B,match_code:D.code,team_a_id:null,team_b_id:null})})});const{error:T}=await h.from("azfutsal_matches").upsert(x,{onConflict:"level,match_code"});if(T){g("ล้างผลไม่สำเร็จ: "+T.message);return}if(k.length){const{error:B}=await h.from("azfutsal_matches").upsert(k,{onConflict:"level,match_code"});if(B){g("ล้างทีมรอบถัดไปไม่สำเร็จ: "+B.message);return}}const{error:N}=await h.from("azfutsal_match_events").delete().in("level",["MS","HS"]);if(N){g("ลบผู้ทำประตู/การ์ดไม่สำเร็จ: "+N.message);return}await I(),g("ล้างผลการแข่งขันทั้งหมดแล้ว")}},$();return}if(n==="resetAllCheckins"){r.pendingConfirm={message:`ล้างข้อมูลรายงานตัวทั้งหมดจริงหรือไม่?
สถานะรายงานตัว (สแกน QR) ของทุกนัดทุกทีมจะถูกล้างกลับเป็นยังไม่รายงานตัว
การกระทำนี้ย้อนกลับไม่ได้`,danger:!0,confirmLabel:"ล้างข้อมูลรายงานตัว",run:async()=>{const{error:x}=await h.from("azfutsal_checkins").delete().in("level",["MS","HS"]);if(x){g("ล้างข้อมูลรายงานตัวไม่สำเร็จ: "+x.message);return}await I(),g("ล้างข้อมูลรายงานตัวทั้งหมดแล้ว")}},$();return}if(n==="resetAllEventCheckins"){r.pendingConfirm={message:`ล้างข้อมูลเช็คอินเข้างานทั้งหมดจริงหรือไม่?
สถานะเช็คอินเข้างาน (ทั้งสแกนเองและสตาฟสแกนให้) ของนักกีฬาทุกคนทั้ง 2 วันจะถูกล้างทั้งหมด
การกระทำนี้ย้อนกลับไม่ได้`,danger:!0,confirmLabel:"ล้างเช็คอินเข้างาน",run:async()=>{const{error:x}=await h.from("azfutsal_event_checkins").delete().in("day",[1,2]);if(x){g("ล้างข้อมูลไม่สำเร็จ: "+x.message);return}await I(),g("ล้างข้อมูลเช็คอินเข้างานทั้งหมดแล้ว")}},$();return}if(n==="startMatchClock"){Ie(t.dataset.level,t.dataset.code,{clock_status:"running",clock_half:1,clock_started_at:new Date().toISOString(),clock_elapsed_before:0,clock_half_started_elapsed:0}),$();return}if(n==="pauseMatchClock"){const x=t.dataset.level,k=t.dataset.code,T=ee(x,k),N=pt(T)||0;Ie(x,k,{clock_status:"paused",clock_elapsed_before:N,clock_started_at:null}),$();return}if(n==="resumeMatchClock"){Ie(t.dataset.level,t.dataset.code,{clock_status:"running",clock_started_at:new Date().toISOString()}),$();return}if(n==="endHalfClock"||n==="endMatchClock"){const x=t.dataset.level,k=t.dataset.code,T=ee(x,k),N=pt(T)||0;Ie(x,k,{clock_status:n==="endHalfClock"?"half_break":"ended",clock_elapsed_before:N,clock_started_at:null}),$();return}if(n==="startSecondHalfClock"){const x=t.dataset.level,k=t.dataset.code,T=ee(x,k);Ie(x,k,{clock_status:"running",clock_half:2,clock_started_at:new Date().toISOString(),clock_half_started_elapsed:(T==null?void 0:T.clock_elapsed_before)||0}),$();return}if(n==="adminNewTeamFromList"||n==="adminOpenTeamFromList"){r.tab="myteam",n==="adminNewTeamFromList"?(r.adminCreatingTeam=!0,r.adminManageTeamId=null):(r.adminManageTeamId=t.dataset.id,r.adminCreatingTeam=!1),$();return}if(n==="removeTeam"){r.pendingConfirm={message:`ลบทีมนี้?
ข้อมูลนักกีฬาและการชำระเงินของทีมจะถูกลบด้วย`,danger:!0,confirmLabel:"ลบทีม",run:async()=>{const{error:x}=await h.from("azfutsal_teams").delete().eq("id",t.dataset.id);if(x){g("ลบไม่สำเร็จ: "+x.message);return}await I(),g("ลบทีมแล้ว")}},$();return}if(n==="openLiveDraw"){r.liveDraw={level:t.dataset.level,pool:t.dataset.pool||null,started:!1,testMode:!0,orderStrategy:"bypair"},$();return}if(n==="autoSeedPool"){const x=t.dataset.level,k=t.dataset.pool;r.pendingConfirm={message:`จัดคู่รอบนี้อัตโนมัติตามอันดับผลงาน (ทีมอันดับดี พบ ทีมอันดับรอง)?
จะทับข้อมูลคู่แข่งเดิมของรอบนี้ถ้ามี`,danger:!1,confirmLabel:"จัดคู่เลย",run:async()=>{await la(x,k)}},$();return}if(n==="openManualPoolAssign"){r.manualPoolAssign={level:t.dataset.level,pool:t.dataset.pool},$();return}if(n==="openSemifinalAssign"){r.manualPoolAssign={level:t.dataset.level,pool:"SF"},$();return}if(n==="saveManualPoolAssign"){await ca();return}if(n==="setLiveDrawMode"){r.liveDraw&&!r.liveDraw.started&&(r.liveDraw.testMode=t.dataset.v==="1",$());return}if(n==="setLiveDrawOrder"){r.liveDraw&&!r.liveDraw.started&&(r.liveDraw.orderStrategy=t.dataset.v,$());return}if(n==="closeLiveDraw"){tt(),On(),r.liveDraw=null,$();return}if(n==="startLiveDraw"){await Uo();return}if(n==="shakePool"){await Go();return}if(n==="drawNext"){await Yo();return}if(n==="useTopScorer"){const{error:x}=await h.from("azfutsal_awards").upsert({level:t.dataset.level,award_type:"top_scorer",student_id:t.dataset.student},{onConflict:"level,award_type"});if(x){g("บันทึกไม่สำเร็จ: "+x.message);return}await I(),g("ตั้งดาวซัลโวจากผู้นำอัตโนมัติแล้ว");return}if(n==="clearAward"){const{error:x}=await h.from("azfutsal_awards").upsert({level:t.dataset.level,award_type:t.dataset.type,student_id:null},{onConflict:"level,award_type"});if(x){g("บันทึกไม่สำเร็จ: "+x.message);return}await I(),g("ล้างรางวัลแล้ว");return}if(n==="printMatchForm"){Ai(t.dataset.level,t.dataset.code);return}if(n==="openCheckinScanner"){Ni(t.dataset.level,t.dataset.code);return}if(n==="openCheckinLiveDisplay"){Mi(t.dataset.level,t.dataset.code);return}if(n==="setEventCheckinDay"){r.eventCheckinDay=Number(t.dataset.v),$();return}if(n==="setEventCheckinIncompleteLevel"){r.eventCheckinIncompleteLevel=t.dataset.v,$();return}if(n==="openEventCheckinScanner"){ji(Number(t.dataset.day));return}if(n==="openEventCheckinBigScreen"){Pi(Number(t.dataset.day));return}if(n==="openScheduleBigScreen"){oo();return}if(n==="openMatchBigScreen"){Mn(t.dataset.level,t.dataset.code);return}if(n==="openEventCheckinPendingReview"){Di(Number(t.dataset.day));return}if(n==="openEventSelfCheckin"){Bi();return}if(n==="toggleEventCheckinBothDays"){const x=ce();await h.from("azfutsal_config").upsert({key:"EVENT_CHECKIN_REQUIRE_BOTH_DAYS",value:x?"0":"1"}),await I();return}if(n==="toggleEventCheckinRequirePermission"){const x=pe();await h.from("azfutsal_config").upsert({key:"EVENT_CHECKIN_REQUIRE_PARENT_PERMISSION",value:x?"0":"1"}),await I();return}if(n==="toggleEventCheckinRequireAttire"){const x=fe();await h.from("azfutsal_config").upsert({key:"EVENT_CHECKIN_REQUIRE_ATTIRE",value:x?"0":"1"}),await I();return}if(n==="saveEventCheckinWindow"){await h.from("azfutsal_config").upsert([{key:"EVENT_CHECKIN_OPEN_TIME",value:R("evci-open").value||""},{key:"EVENT_CHECKIN_CLOSE_TIME",value:R("evci-close").value||""}]),await I(),g("บันทึกเวลาเปิด-ปิดรับเช็คอินแล้ว");return}if(n==="useCurrentGPSForVenue"){g("กำลังอ่านพิกัด GPS...");const x=await kn();if(x.error){g(x.error);return}const k=R("evci-venue-lat"),T=R("evci-venue-lng");k&&(k.value=x.lat.toFixed(6)),T&&(T.value=x.lng.toFixed(6)),g("อ่านพิกัดสำเร็จ — ตรวจสอบแล้วกดบันทึกพิกัดสถานที่");return}if(n==="viewVenueOnMap"){const x=parseFloat(R("evci-venue-lat").value.trim()),k=parseFloat(R("evci-venue-lng").value.trim()),T=parseFloat(R("evci-venue-radius").value.trim())||150;if(Number.isNaN(x)||Number.isNaN(k)){g('ยังไม่มีพิกัดให้ดู กรอกหรือกด "ใช้พิกัดปัจจุบัน" ก่อน');return}Hi(x,k,T);return}if(n==="saveEventVenueGeofence"){const x=R("evci-venue-lat").value.trim(),k=R("evci-venue-lng").value.trim(),T=R("evci-venue-radius").value.trim();if(x&&Number.isNaN(parseFloat(x))){g("ละติจูดไม่ถูกต้อง");return}if(k&&Number.isNaN(parseFloat(k))){g("ลองจิจูดไม่ถูกต้อง");return}await h.from("azfutsal_config").upsert([{key:"EVENT_VENUE_LAT",value:x},{key:"EVENT_VENUE_LNG",value:k},{key:"EVENT_VENUE_RADIUS",value:T||"150"}]),await I(),g("บันทึกพิกัดสถานที่แล้ว");return}if(n==="printCheckinForm"){const x=r.teams.find(k=>k.id===t.dataset.id);x&&Ii(x);return}if(n==="toggleOrganizer"){const{error:x}=await h.from("azfutsal_teams").update({is_organizer:t.dataset.v==="1"}).eq("id",t.dataset.id);if(x){g("บันทึกไม่สำเร็จ: "+x.message);return}await I();return}if(n==="removePlayer"){r.pendingConfirm={message:"ลบนักกีฬาคนนี้ออกจากทีม?",danger:!0,confirmLabel:"ลบ",run:async()=>{const{error:x}=await h.from("azfutsal_players").delete().eq("id",t.dataset.id);if(x){g("ลบไม่สำเร็จ: "+x.message);return}await I()}},$();return}if(n==="toggleStaffScope"){if(!r.staffScopeEdit)return;const x=t.dataset.key,k=r.staffScopeEdit.scopes||[];r.staffScopeEdit.scopes=t.checked?[...k,x]:k.filter(T=>T!==x),$();return}if(n==="cancelStaffScope"){r.staffScopeEdit=null,$();return}if(n==="saveStaffScope"){const x=r.staffScopeEdit;if(!x)return;if(!x.scopes||!x.scopes.length){g("เลือกสิทธิ์อย่างน้อย 1 อย่าง");return}if(x.mode==="add"){const{error:k}=await h.from("azfutsal_admins").insert({profile_id:x.profile_id,granted_by:r.identity.profile.id,scopes:x.scopes});if(k){g("มอบสิทธิ์ไม่สำเร็จ: "+k.message);return}g(`มอบสิทธิ์ให้ ${x.name} แล้ว`)}else{const k=(U=(j=r.staffList)==null?void 0:j.find(B=>B.id===x.id))==null?void 0:U.isSelf,T=(((Q=(F=r.staffList)==null?void 0:F.find(B=>B.id===x.id))==null?void 0:Q.scopes)||[]).includes("full"),{error:N}=await h.from("azfutsal_admins").update({scopes:x.scopes}).eq("id",x.id);if(N){g("บันทึกไม่สำเร็จ: "+N.message);return}if(g("บันทึกสิทธิ์แล้ว"),k&&T&&!x.scopes.includes("full")){r.staffScopeEdit=null,await I(),r.tab="schedule",$();return}}r.staffScopeEdit=null,await mt(),$();return}if(n==="editStaffScope"){r.staffScopeEdit={mode:"edit",id:t.dataset.id,name:t.dataset.name,scopes:t.dataset.scopes?t.dataset.scopes.split(","):[]},$();return}if(n==="removeStaff"){const x=(r.staffList||[]).filter(N=>(N.scopes||[]).includes("full")).length;if(((X=(q=(r.staffList||[]).find(N=>N.id===t.dataset.id))==null?void 0:q.scopes)==null?void 0:X.includes("full"))&&x<=1){g("ต้องมีแอดมินเต็มรูปแบบอย่างน้อย 1 คนเสมอ ลบคนสุดท้ายไม่ได้");return}const T=t.dataset.self==="1";r.pendingConfirm={message:T?`นี่คือบัญชีที่คุณกำลังใช้อยู่
ถ้าถอนสิทธิ์ตัวเองจะออกจากหน้าแอดมินทันที ยืนยันหรือไม่?`:"ถอนสิทธิ์คนนี้?",danger:!0,confirmLabel:"ถอนสิทธิ์",run:async()=>{const{error:N}=await h.from("azfutsal_admins").delete().eq("id",t.dataset.id);if(N){g("ถอนสิทธิ์ไม่สำเร็จ: "+N.message);return}if(T){await I(),r.tab="schedule",$();return}await mt()}},$();return}}),ie.addEventListener("change",async e=>{var n;const t=e.target;if(t.id==="new-team-level"){r.newTeamLevel=t.value;return}if(t.dataset.act==="uploadPlayerPhoto"&&((n=t.files)!=null&&n[0])){await aa(t.dataset.id,t.files[0]);return}}),ie.addEventListener("input",async e=>{var t;if(e.target.id==="az-filterTeam"&&(r.filterTeam=e.target.value,Zt()),e.target.id==="az-filterTime"&&(r.filterTime=e.target.value,Zt()),e.target.id==="new-team-name"&&(r.newTeamName=e.target.value),e.target.id==="team-code-input"&&(r.teamCodeInput=e.target.value),e.target.id==="roster-jersey"&&(r.rosterJersey=e.target.value),e.target.id==="event-picker-filter"){r.eventPickerFilter=e.target.value;const n=R("event-picker-list");n&&(n.innerHTML=Hn())}if(e.target.id==="athlete-search"){r.adminAthleteSearch=e.target.value;const n=R("athlete-list");n&&(n.innerHTML=Fn())}if(e.target.id==="reject-reason-text"){r.rejectReasonText=e.target.value;const n=document.querySelector('[data-act="confirmReject"]');if(n){const i=!!r.rejectReasonText.trim();n.disabled=!i,n.style.background=i?"#dc2626":"#f3b6b6",n.style.cursor=i?"pointer":"default"}}if(e.target.id==="staff-search"){const n=e.target.value,i=R("staff-search-results");if(!n||n.trim().length<2){i.style.display="none";return}const o=await ta(n);i.innerHTML=o.length?o.map(a=>`<div data-profile="${a.profile_id}" data-name="${p(a.name)}" style="padding:8px 10px;font-size:12.5px;cursor:pointer;border-bottom:1px solid #f3f4f6" class="az-staff-cand"><b>${p(a.name)}</b> <span style="color:#9ca3af">${a.sub}</span></div>`).join(""):'<div style="padding:8px 10px;font-size:12px;color:#9ca3af">ไม่พบ</div>',i.style.display="block",i.querySelectorAll(".az-staff-cand").forEach(a=>a.addEventListener("click",()=>{r.staffScopeEdit={mode:"add",profile_id:a.dataset.profile,name:a.dataset.name,scopes:[]},R("staff-search").value="",i.style.display="none",$()}))}if((t=e.target.classList)!=null&&t.contains("az-award-search")){const n=e.target.dataset.level,i=e.target.dataset.type,o=e.target.value.trim().toLowerCase(),a=R(`award-results-${n}-${i}`);if(!o){a.style.display="none";return}const s=r.players.filter(c=>{var l;return((l=r.teams.find(f=>f.id===c.team_id))==null?void 0:l.level)===n}).filter(c=>{var b,m;const l=(((b=c.students)==null?void 0:b.full_name)||"").toLowerCase(),f=String(((m=c.students)==null?void 0:m.student_code)||"").toLowerCase(),u=String(c.jersey_number??"");return l.includes(o)||f.includes(o)||u.includes(o)}).slice(0,20);a.innerHTML=s.length?s.map(c=>{var l,f;return`<div data-student="${c.student_id}" style="padding:8px 10px;font-size:12.5px;cursor:pointer;border-bottom:1px solid #f3f4f6" class="az-award-cand">${c.jersey_number!==null&&c.jersey_number!==void 0?`<b>#${p(c.jersey_number)}</b> `:""}<b>${p(((l=c.students)==null?void 0:l.full_name)||"")}</b> <span style="color:#9ca3af">${p(((f=c.students)==null?void 0:f.student_code)||"")} · ${p(O(c.team_id))}</span></div>`}).join(""):'<div style="padding:8px 10px;font-size:12px;color:#9ca3af">ไม่พบนักกีฬาที่ตรงกับคำค้น</div>',a.style.display="block",a.querySelectorAll(".az-award-cand").forEach(c=>c.addEventListener("click",async()=>{a.style.display="none";const{error:l}=await h.from("azfutsal_awards").upsert({level:n,award_type:i,student_id:c.dataset.student},{onConflict:"level,award_type"});if(l){g("บันทึกไม่สำเร็จ: "+l.message);return}await I(),g("บันทึกรางวัลแล้ว")}))}if(e.target.id==="cap-code"){const n=e.target.value;r.capLookupCode=n;const i=R("cap-search-results");if(!n||n.trim().length<2){i.style.display="none";return}const o=await Jt(n);i.innerHTML=o.length?o.map(a=>`<div data-id="${a.id}" style="padding:8px 10px;font-size:12.5px;cursor:pointer;border-bottom:1px solid #f3f4f6" class="az-cap-cand"><b>${p(a.full_name)}</b> <span style="color:#9ca3af">${p(a.student_code)}</span></div>`).join(""):'<div style="padding:8px 10px;font-size:12px;color:#9ca3af">ไม่พบ</div>',i.style.display="block",i.querySelectorAll(".az-cap-cand").forEach(a=>a.addEventListener("click",()=>{const d=o.find(s=>String(s.id)===a.dataset.id);r.capLookupResult=d,r.capLookupCode=d.full_name,i.style.display="none",$()}))}if(e.target.id==="roster-code"){const n=e.target.value;r.rosterLookupCode=n;const i=R("roster-search-results");if(!n||n.trim().length<2){i.style.display="none";return}const o=await Jt(n);i.innerHTML=o.length?o.map(a=>`<div data-id="${a.id}" style="padding:8px 10px;font-size:12.5px;cursor:pointer;border-bottom:1px solid #f3f4f6" class="az-roster-cand"><b>${p(a.full_name)}</b> <span style="color:#9ca3af">${p(a.student_code)}</span></div>`).join(""):'<div style="padding:8px 10px;font-size:12px;color:#9ca3af">ไม่พบ</div>',i.style.display="block",i.querySelectorAll(".az-roster-cand").forEach(a=>a.addEventListener("click",()=>{const d=o.find(c=>String(c.id)===a.dataset.id),s=r.players.find(c=>c.student_id===d.id);r.rosterLookupResult=s?"duplicate":d,r.rosterJersey="",r.rosterLookupCode=d.full_name,i.style.display="none",$()}))}})}function Zt(){const e=Et(),t=r.scheduleDay===2?2:1,n=R("az-schedule-count"),i=R("az-schedule-rows");n&&(n.textContent=`${e.filter(o=>o.day===t).length} นัด`),i&&(i.innerHTML=An(e))}function _a(e){const t=r.payments.find(n=>n.team_id===e);return t?t.status==="verified"?`<span style="color:#16a34a;font-weight:600">● ยืนยันแล้ว</span> · ส่ง ${Le(t.created_at)}${t.reviewed_at?" · ยืนยัน "+Le(t.reviewed_at):""}`:t.status==="rejected"?`<span style="color:#ef4444;font-weight:600">● ถูกปฏิเสธ</span> · ส่ง ${Le(t.created_at)}${t.reviewed_at?" · ปฏิเสธ "+Le(t.reviewed_at):""}`:`<span style="color:#f59e0b;font-weight:600">● รอตรวจสอบ</span> · ส่งหลักฐาน ${Le(t.created_at)}`:'<span style="color:#9ca3af;font-weight:600">● ยังไม่ส่งหลักฐานชำระเงิน</span>'}function $a(e){var t,n;return`
  <div style="border:1px solid #f3f4f6;border-radius:10px;padding:8px 10px">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <div style="display:flex;align-items:center;gap:6px"><span style="font-size:13px;font-weight:700">${p(e.name)}</span>${e.is_reserve?De():""}${e.is_organizer?Oe():""}</div>
      <div style="display:flex;gap:8px;align-items:center">
        <button data-act="adminOpenTeamFromList" data-id="${e.id}" style="border:none;background:none;color:#db2777;font-size:11.5px;cursor:pointer;font-weight:600">จัดการ</button>
        <button data-act="removeTeam" data-id="${e.id}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600">ลบ</button>
      </div>
    </div>
    <div style="font-size:11px;color:#6b7280;margin-top:2px">หัวหน้าทีม: ${(t=e.captain)!=null&&t.full_name?p(e.captain.full_name):"-"}${(n=e.vice_captain)!=null&&n.full_name?" · รอง: "+p(e.vice_captain.full_name):""}</div>
    <div style="font-size:10.5px;color:#6b7280;margin-top:3px">${_a(e.id)}</div>
    <div style="margin-top:4px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <button data-act="toggleOrganizer" data-id="${e.id}" data-v="${e.is_organizer?"0":"1"}" style="border:none;background:none;color:#4338ca;font-size:10.5px;cursor:pointer;font-weight:600">${e.is_organizer?"ยกเลิกทีมผู้จัด":"ตั้งเป็นทีมผู้จัด"}</button>
      <button data-act="printCheckinForm" data-id="${e.id}" style="border:none;background:none;color:#0891b2;font-size:10.5px;cursor:pointer;font-weight:600">🖨️ พิมพ์แบบฟอร์มรายงานตัว</button>
    </div>
  </div>`}function en(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;")}function za(e){if(!["MS","HS"].includes(e))return;const t=new Map(r.teams.map(m=>[m.id,m])),n=new Intl.Collator("th",{numeric:!0,sensitivity:"base"}),i=r.players.filter(m=>{var w;return((w=t.get(m.team_id))==null?void 0:w.level)===e}).sort((m,w)=>{var E,M,v,_;const z=n.compare(((E=t.get(m.team_id))==null?void 0:E.name)||"",((M=t.get(w.team_id))==null?void 0:M.name)||"");if(z)return z;const A=Number(m.jersey_number??999)-Number(w.jersey_number??999);return A||n.compare(((v=m.students)==null?void 0:v.full_name)||"",((_=w.students)==null?void 0:_.full_name)||"")});if(!i.length){g(`ยังไม่มีนักกีฬา${S[e].label}ให้ดาวน์โหลด`);return}const o=["ลำดับ","ระดับ","ชื่อทีม","รหัสทีม","สถานะทีม","เบอร์เสื้อ","รหัสนักเรียน","ชื่อ-สกุล","ชั้นเรียน","บทบาทในทีม","วันที่ลงทะเบียน"],a=i.map((m,w)=>{var M,v,_;const z=t.get(m.team_id),A=z!=null&&z.is_organizer?"ทีมผู้จัด":z!=null&&z.is_reserve?"ทีมสำรอง":"ทีมแข่งขัน",E=String(m.student_id)===String(z==null?void 0:z.captain_student_id)?"หัวหน้าทีม":String(m.student_id)===String(z==null?void 0:z.vice_captain_student_id)?"รองหัวหน้าทีม":"นักกีฬา";return[w+1,S[e].label,(z==null?void 0:z.name)||"",(z==null?void 0:z.team_code)||"",A,m.jersey_number??"",((M=m.students)==null?void 0:M.student_code)||"",((v=m.students)==null?void 0:v.full_name)||"",((_=m.students)==null?void 0:_.class_name)||"",E,m.registered_at?new Date(m.registered_at).toLocaleString("th-TH"):""]}),d=(m,w="Body")=>`<Cell ss:StyleID="${w}"><Data ss:Type="String">${en(m)}</Data></Cell>`,s=[`<Row>${o.map(m=>d(m,"Header")).join("")}</Row>`,...a.map(m=>`<Row>${m.map(w=>d(w)).join("")}</Row>`)].join(""),c=`<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Body"><Alignment ss:Vertical="Center"/><Font ss:FontName="Tahoma" ss:Size="10"/><Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/></Borders></Style>
  <Style ss:ID="Header"><Alignment ss:Horizontal="Center" ss:Vertical="Center"/><Font ss:FontName="Tahoma" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/><Interior ss:Color="${S[e].base}" ss:Pattern="Solid"/></Style>
 </Styles>
 <Worksheet ss:Name="${en(S[e].label)}">
  <Table>
   <Column ss:Width="42"/><Column ss:Width="55"/><Column ss:Width="150"/><Column ss:Width="75"/><Column ss:Width="75"/><Column ss:Width="55"/><Column ss:Width="80"/><Column ss:Width="170"/><Column ss:Width="110"/><Column ss:Width="90"/><Column ss:Width="125"/>
   ${s}
  </Table>
  <WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel"><FreezePanes/><FrozenNoSplit/><SplitHorizontal>1</SplitHorizontal><TopRowBottomPane>1</TopRowBottomPane><ActivePane>2</ActivePane><ProtectObjects>False</ProtectObjects><ProtectScenarios>False</ProtectScenarios></WorksheetOptions>
 </Worksheet>
</Workbook>`,l=new Blob(["\uFEFF",c],{type:"application/vnd.ms-excel;charset=utf-8"}),f=URL.createObjectURL(l),u=document.createElement("a"),b=new Date().toISOString().slice(0,10);u.href=f,u.download=`AZFUTSALCUP_รายชื่อนักกีฬา_${e==="MS"?"มต้น":"มปลาย"}_${b}.xls`,document.body.appendChild(u),u.click(),u.remove(),URL.revokeObjectURL(f),g(`ดาวน์โหลดรายชื่อนักกีฬา${S[e].label} ${i.length} คนแล้ว`)}function Fn(){const e=r.adminAthleteLevel||"MS",t=(r.adminAthleteSearch||"").trim().toLowerCase();let n=r.players.filter(i=>{var o;return((o=r.teams.find(a=>a.id===i.team_id))==null?void 0:o.level)===e});return t&&(n=n.filter(i=>{var o,a,d;return[(o=i.students)==null?void 0:o.full_name,(a=i.students)==null?void 0:a.student_code,(d=i.students)==null?void 0:d.class_name,O(i.team_id),i.jersey_number].some(s=>s!=null&&String(s).toLowerCase().includes(t))})),n.length?n.map(i=>{var a,d;const o=bi(i.id);return`
        <div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f3f4f6">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:700">${p(((a=i.students)==null?void 0:a.full_name)||"")}${o?` · ⚽${o}`:""}</div>
            <div style="font-size:11px;color:#6b7280">${p(((d=i.students)==null?void 0:d.student_code)||"")} · ${p(O(i.team_id))}${i.jersey_number!=null?` · เบอร์ ${p(String(i.jersey_number))}`:""}</div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
            <button data-act="showPlayerQR" data-id="${i.id}" style="border:none;background:none;color:#0ea5e9;font-size:11.5px;cursor:pointer;font-weight:600">🔳 QR</button>
            <button data-act="removePlayer" data-id="${i.id}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600">ลบ</button>
          </div>
        </div>`}).join(""):`<div style="font-size:12.5px;color:#9ca3af">${t?"ไม่พบนักกีฬาที่ค้นหา":"ยังไม่มีนักกีฬาลงทะเบียนในระดับนี้"}</div>`}function ka(){const e=r.adminAthleteLevel||"MS",t=r.players.filter(n=>{var i;return((i=r.teams.find(o=>o.id===n.team_id))==null?void 0:i.level)===e}).length;return et(`
    <div style="flex-shrink:0;margin-bottom:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
        <div style="font-weight:700;font-size:14px">นักกีฬาที่ลงทะเบียน (${t})</div>
        <div style="display:flex;gap:6px">${["MS","HS"].map(n=>`<button data-act="adminAthleteLevel" data-v="${n}" style="font-size:11.5px;padding:6px 11px;border-radius:9px;border:1px solid ${e===n?S[n].base:"#e5e7eb"};background:${e===n?S[n].base:"#fff"};color:${e===n?"#fff":"#374151"};font-weight:700;cursor:pointer">${S[n].label}</button>`).join("")}</div>
      </div>
      <input id="athlete-search" value="${p(r.adminAthleteSearch)}" placeholder="ค้นหาชื่อ/รหัสนักเรียน/ห้อง/ทีม/เบอร์เสื้อ..." autocomplete="off" style="width:100%;box-sizing:border-box;margin-top:9px;border:1px solid #e5e7eb;border-radius:9px;padding:9px 10px;font-size:13px"/>
      <div style="display:flex;gap:6px;margin-top:9px">
        ${["MS","HS"].map(n=>`<button data-act="downloadAthletesExcel" data-level="${n}" style="flex:1;padding:8px 6px;border-radius:9px;border:1px solid ${S[n].border};background:${S[n].soft};color:${S[n].accent};font-size:11px;font-weight:800;cursor:pointer">⬇️ Excel ${S[n].label}</button>`).join("")}
      </div>
    </div>
    <div id="athlete-list" style="flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;overflow-y:auto">
      ${Fn()}
    </div>
  `)}function Sa(){const e=r.adminPaymentsLevel||"MS",t=r.payments.filter(i=>{var o;return((o=r.teams.find(a=>a.id===i.team_id))==null?void 0:o.level)===e}),n=t.filter(i=>i.status==="pending").length;return et(`
    <div style="flex-shrink:0;display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-weight:700;font-size:14px">ตรวจสอบการชำระเงินประกัน${n?` <span style="font-weight:600;font-size:11.5px;color:#f59e0b">(${n} รอตรวจสอบ)</span>`:""}</div>
      <div style="display:flex;gap:6px">${["MS","HS"].map(i=>`<button data-act="adminPaymentsLevel" data-v="${i}" style="font-size:11.5px;padding:6px 11px;border-radius:9px;border:1px solid ${e===i?S[i].base:"#e5e7eb"};background:${e===i?S[i].base:"#fff"};color:${e===i?"#fff":"#374151"};font-weight:700;cursor:pointer">${S[i].label}</button>`).join("")}</div>
    </div>
    <div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:10px;overflow-y:auto">
      ${t.length?t.map(i=>{const o=r.teams.find(a=>a.id===i.team_id);return`
        <div style="border:1px solid #f3f4f6;border-radius:10px;padding:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <div style="display:flex;align-items:center;gap:6px"><span style="font-size:13px;font-weight:700">${p((o==null?void 0:o.name)||"")}</span>${o!=null&&o.is_reserve?De():""}${o!=null&&o.is_organizer?Oe():""}</div>
            ${Cn(i.status)}
          </div>
          <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">${i.method==="transfer"?"โอนเงิน":"เงินสด"} · ${W(i.amount)} บาท</div>
          ${i.slip_url||i.receipt_photo_url?`<button data-act="viewProof" data-path="${p(i.slip_url||i.receipt_photo_url)}" style="font-size:11.5px;color:#db2777;background:none;border:none;cursor:pointer;text-decoration:underline;margin-bottom:6px">ดูหลักฐาน</button><br/>`:""}
          ${i.status==="pending"?`
          <div style="display:flex;gap:6px;margin-top:4px">
            <button data-act="reviewPayment" data-id="${i.id}" data-status="verified" style="flex:1;padding:7px;border-radius:8px;border:none;background:#16a34a;color:#fff;font-weight:700;font-size:12px;cursor:pointer">ยืนยัน</button>
            <button data-act="openRejectModal" data-id="${i.id}" style="flex:1;padding:7px;border-radius:8px;border:none;background:#dc2626;color:#fff;font-weight:700;font-size:12px;cursor:pointer">ปฏิเสธ</button>
          </div>`:""}
        </div>`}).join(""):'<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีรายการชำระเงิน</div>'}
    </div>
  `)}function Ea(){const e=y("REFUND_PAYER_NAME",""),t=y("REFUND_PAYER_TITLE",""),n=y("REFUND_PAYER_SIGNATURE_URL","");return`
  <div style="position:fixed;inset:0;z-index:70;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:20px">
    <div style="background:#fff;border-radius:16px;padding:20px;max-width:440px;width:100%;max-height:90vh;overflow-y:auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
        <div style="font-weight:800;font-size:15px">ผู้จ่ายคืนเงิน</div>
        <button data-act="closeRefundPayerSettings" style="border:none;background:none;color:#9ca3af;font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:14px">ชื่อ/ตำแหน่ง/ลายเซ็นนี้จะแสดงในใบเสร็จคืนเงินทุกใบ</div>
      <div style="display:flex;gap:8px;margin-bottom:10px">
        <label style="flex:1;font-size:11.5px;color:#6b7280">ชื่อ-สกุล
          <input id="refund-payer-name" value="${p(e)}" placeholder="เช่น นายฮัมบาลีย์ วาจิ" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:12.5px"/>
        </label>
        <label style="flex:1;font-size:11.5px;color:#6b7280">ตำแหน่ง
          <input id="refund-payer-title" value="${p(t)}" placeholder="เช่น ครูฝ่ายปกครอง" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:12.5px"/>
        </label>
      </div>
      <button data-act="saveRefundPayerInfo" style="width:100%;padding:9px;border-radius:9px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:12.5px;cursor:pointer;margin-bottom:14px">บันทึกชื่อ-ตำแหน่ง</button>
      <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">ลายเซ็นปัจจุบัน</div>
      <div style="margin-bottom:12px">
        ${n?`<img src="${p(n)}" style="height:56px;border:1px solid #e5e7eb;border-radius:8px;background:#fff;padding:4px"/>`:'<div style="font-size:11.5px;color:#9ca3af">ยังไม่มีลายเซ็น</div>'}
      </div>
      <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">วาดลายเซ็นใหม่</div>
      <canvas id="refund-payer-sigpad" width="400" height="150" style="width:100%;max-width:400px;height:150px;border:1px dashed #e5e7eb;border-radius:8px;background:#fff;touch-action:none;cursor:crosshair;display:block"></canvas>
      <div style="display:flex;gap:8px;margin-top:8px;margin-bottom:14px">
        <button data-act="clearSignaturePad" style="flex:1;padding:8px;border-radius:8px;border:1px solid #e5e7eb;background:#fff;font-size:12px;font-weight:700;cursor:pointer">ล้าง</button>
        <button data-act="saveDrawnSignature" style="flex:1;padding:8px;border-radius:8px;border:none;background:#db2777;color:#fff;font-size:12px;font-weight:700;cursor:pointer">บันทึกลายเซ็นที่วาด</button>
      </div>
      <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">หรืออัปโหลดรูปลายเซ็น</div>
      <div style="display:flex;align-items:center;gap:8px">
        <input type="file" accept="image/*" id="refund-payer-sig-file" style="flex:1;min-width:0;font-size:11.5px"/>
        <button data-act="uploadPayerSignature" style="font-size:11px;padding:7px 10px;border-radius:8px;border:none;background:#db2777;color:#fff;font-weight:700;cursor:pointer;white-space:nowrap">อัปโหลด</button>
      </div>
    </div>
  </div>`}function Ma(){const e=r.adminRefundLevel||"MS",t=r.payments.filter(d=>{const s=r.teams.find(c=>c.id===d.team_id);return d.status==="verified"&&(s==null?void 0:s.level)===e}),n=t.filter(d=>le(d.team_id)).length,i=t.reduce((d,s)=>{const c=r.teams.find(u=>u.id===s.team_id),f=le(s.team_id)||je(c);return d+Number(f.refund_amount)},0),o=t.reduce((d,s)=>{const c=le(s.team_id);return d+(c?Number(c.refund_amount):0)},0),a=i-o;return et(`
    <div style="flex-shrink:0;margin-bottom:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
        <div><div style="font-weight:700;font-size:14px">คืนเงินค่าประกันทีม</div><div style="font-size:11px;color:#6b7280;margin-top:2px">ยืนยันแล้ว ${n}/${t.length} ทีม</div></div>
        <div style="display:flex;gap:6px;align-items:center">
          <button data-act="refreshRefunds" title="รีเฟรชข้อมูล" style="width:34px;height:34px;flex-shrink:0;border-radius:9px;border:1px solid #e5e7eb;background:#fff;color:#374151;cursor:pointer;font-size:15px">🔄</button>
          <button data-act="openRefundPayerSettings" title="ตั้งค่าผู้จ่ายคืนเงิน" style="width:34px;height:34px;flex-shrink:0;border-radius:9px;border:1px solid #e5e7eb;background:#fff;color:#374151;cursor:pointer;font-size:15px">⚙️</button>
          ${["MS","HS"].map(d=>`<button data-act="adminRefundLevel" data-v="${d}" style="font-size:11.5px;padding:6px 11px;border-radius:9px;border:1px solid ${e===d?S[d].base:"#e5e7eb"};background:${e===d?S[d].base:"#fff"};color:${e===d?"#fff":"#374151"};font-weight:700;cursor:pointer">${S[d].label}</button>`).join("")}
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:9px">
        <div style="background:#f9fafb;border-radius:9px;padding:8px 6px;text-align:center">
          <div style="font-size:10px;color:#6b7280">ต้องคืนทั้งหมด</div>
          <div style="font-size:13.5px;font-weight:800">${W(i)}</div>
        </div>
        <div style="background:#dcfce7;border-radius:9px;padding:8px 6px;text-align:center">
          <div style="font-size:10px;color:#16a34a">คืนไปแล้ว</div>
          <div style="font-size:13.5px;font-weight:800;color:#16a34a">${W(o)}</div>
        </div>
        <div style="background:#fef3c7;border-radius:9px;padding:8px 6px;text-align:center">
          <div style="font-size:10px;color:#b45309">คงเหลือ</div>
          <div style="font-size:13.5px;font-weight:800;color:#b45309">${W(a)}</div>
        </div>
      </div>
      <div style="font-size:11px;color:#6b7280;background:#f9fafb;border-radius:9px;padding:8px 10px;margin-top:9px">เมื่อกดยืนยัน ต้องให้หัวหน้าทีมเซ็นรับเงิน + เลือกวิธีคืนเงิน (โอน/เงินสด) ก่อนระบบจะล็อกยอดคืนเงินและเปิดปุ่มใบเสร็จให้ทีม</div>
    </div>
    <div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:9px;overflow-y:auto">
      ${t.length?t.map(d=>{const s=r.teams.find(f=>f.id===d.team_id),c=le(d.team_id),l=c||je(s);return`<div style="border:1px solid #e5e7eb;border-radius:11px;padding:11px">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
            <div><div style="font-size:13px;font-weight:800">${p(s.name)}</div><div style="font-size:11px;color:#6b7280;margin-top:2px">ใบเหลือง ${Number(l.yellow_count)} · ใบแดง ${Number(l.red_count)} · คืนสุทธิ <b>${W(l.refund_amount)} บาท</b></div></div>
            ${c?'<span style="font-size:10.5px;font-weight:700;color:#16a34a;background:#dcfce7;border-radius:999px;padding:4px 8px;white-space:nowrap">ยืนยันแล้ว</span>':'<span style="font-size:10.5px;font-weight:700;color:#b45309;background:#fef3c7;border-radius:999px;padding:4px 8px;white-space:nowrap">รอยืนยัน</span>'}
          </div>
          ${c?`<div style="display:flex;gap:6px;margin-top:9px">
            <button data-act="openRefundReceipt" data-team="${s.id}" style="flex:1;padding:8px;border-radius:8px;border:1px solid ${S[e].border};background:${S[e].soft};color:${S[e].accent};font-size:12px;font-weight:800;cursor:pointer">🧾 เปิดใบเสร็จ ${p(c.receipt_no)}</button>
            ${c.proof_url?`<button data-act="viewProof" data-path="${p(c.proof_url)}" style="padding:8px 10px;border-radius:8px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-size:12px;font-weight:800;cursor:pointer;white-space:nowrap">📎 หลักฐาน</button>`:""}
          </div>
          ${c.payment_method==="cash"&&!c.proof_url?`
          <div style="margin-top:8px;font-size:10.5px;color:#b45309;background:#fffbeb;border-radius:7px;padding:6px 8px">📷 ยังไม่มีรูปหลักฐานเงินสด</div>
          <input type="file" accept="image/*" id="refund-cash-proof-file-${s.id}" style="width:100%;font-size:11px;margin-top:6px"/>
          <button type="button" data-act="uploadCashRefundProofInline" data-team="${s.id}" style="width:100%;margin-top:6px;padding:7px;border-radius:7px;border:none;background:#d97706;color:#fff;font-size:11.5px;font-weight:700;cursor:pointer">อัปโหลดรูปหลักฐาน</button>`:""}`:`
          <div style="display:flex;gap:6px;margin-top:9px">
            <button data-act="openRefundReceiptPreview" data-team="${s.id}" style="flex:1;padding:8px;border-radius:8px;border:1px dashed ${S[e].border};background:#fff;color:${S[e].accent};font-size:12px;font-weight:800;cursor:pointer">👁️ ดูตัวอย่าง</button>
            <button data-act="confirmRefund" data-team="${s.id}" style="flex:1;padding:8px;border-radius:8px;border:none;background:${S[e].base};color:#fff;font-size:12px;font-weight:800;cursor:pointer">ยืนยันคืนเงิน ${W(l.refund_amount)} บาท</button>
          </div>`}
        </div>`}).join(""):'<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีทีมที่ยืนยันการชำระค่าประกัน</div>'}
    </div>
  `)}function Ta(){const e=y("CERT_ENABLED","1")==="1",t=y("CERT_TEMPLATE_URL",""),n=y("CERT_SONG_NAME","");return ne(`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-weight:700;font-size:14px">จัดการเกียรติบัตร</div>
      <button data-act="toggleCert" style="font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${e?"#dcfce7":"#f3f4f6"};color:${e?"#16a34a":"#6b7280"}">${e?"เปิดใช้งาน":"ปิดใช้งาน"}</button>
    </div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:10px">ระบบจับคู่รางวัลอัตโนมัติจาก แชมป์/รองแชมป์/อันดับ 3 (คำนวณจากผลการแข่งขัน) และ MVP/ดาวซัลโว/GK ยอดเยี่ยม (ตั้งค่าที่แท็บ "เวลา/รางวัล") นักเรียนที่ไม่ได้รางวัลจะได้ใบ "ผู้เข้าร่วมการแข่งขัน"</div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">พื้นหลังเกียรติบัตร (ไม่บังคับ)</div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
      ${t?`<img src="${p(t)}" style="width:72px;height:48px;object-fit:cover;border-radius:8px;border:1px solid #e5e7eb"/>`:'<div style="width:72px;height:48px;border-radius:8px;border:1px dashed #e5e7eb;display:flex;align-items:center;justify-content:center;font-size:9px;color:#9ca3af">ไม่มีรูป</div>'}
      <input type="file" accept="image/*" id="cert-template-file" style="font-size:11.5px"/>
      <button data-act="uploadCertTemplate" style="font-size:11px;padding:7px 10px;border-radius:8px;border:none;background:#db2777;color:#fff;font-weight:700;cursor:pointer;white-space:nowrap">อัปโหลด</button>
    </div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">เพลงประกอบพิธีมอบรางวัล (ไม่บังคับ)</div>
    <div style="display:flex;align-items:center;gap:8px">
      <input type="file" accept="audio/*" id="cert-song-file" style="font-size:11.5px;flex:1;min-width:0"/>
      <button data-act="uploadCertSong" style="font-size:11px;padding:7px 10px;border-radius:8px;border:none;background:#db2777;color:#fff;font-weight:700;cursor:pointer;white-space:nowrap">อัปโหลด</button>
    </div>
    ${n?`<div style="font-size:11px;color:#6b7280;margin-top:6px">ไฟล์ปัจจุบัน: ${p(n)}</div>`:""}
  `)+ne(`
    <div style="font-weight:700;font-size:14px;margin-bottom:6px">ข้อความรางวัลบนเกียรติบัตร</div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:12px">ใช้ <code>{event}</code> แทนตำแหน่งที่จะแทรกชื่อกิจกรรม (ตอนนี้คือ "${p(y("EVENT_NAME","AZFUTSALCUP2026"))}" — แก้ได้ที่แท็บ "เวลา/รางวัล") แก้ข้อความแล้วกดบันทึกด้านล่าง</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${Object.keys(Ve).map(i=>`
        <label style="font-size:11.5px;color:#6b7280">${p(ei[i])}
          <input class="cert-text-input" data-type="${i}" value="${p(y(`CERT_TEXT_${i}`,Ve[i]))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:12.5px"/>
        </label>`).join("")}
    </div>
    <button data-act="saveCertTexts" style="margin-top:12px;width:100%;padding:10px;border-radius:10px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:13px;cursor:pointer">บันทึกข้อความรางวัล</button>
  `)}function Aa(){const e=n=>{const i=Pe(n),o=Number(y("DEPOSIT_AMOUNT",500)),a=Number(y("RATE_YELLOW",30)),d=Number(y("RATE_RED",50)),s=Number(y("OPERATION_FEE",100));return r.teams.filter(c=>c.level===n).map(c=>{const l=i.find(u=>u.id===c.id)||{y:0,r:0},f=Math.max(o-s-l.y*a-l.r*d,0);return{team:c.name,refund:f}})},t=(n,i,o)=>{var f,u;const a=((f=r.awards.find(b=>b.level===n&&b.award_type===i))==null?void 0:f.student_id)||"",d=r.players.filter(b=>{var m;return((m=r.teams.find(w=>w.id===b.team_id))==null?void 0:m.level)===n}),s=a?d.find(b=>String(b.student_id)===String(a)):null,c=s&&((u=s.students)==null?void 0:u.full_name)||"";let l="";if(i==="top_scorer"){const b=wt(n);if(b.length){const m=b[0].goals,w=b.filter(z=>z.goals===m);if(w.length===1){const z=String(a)===String(w[0].studentId);l=`<div style="margin-top:4px;font-size:10.5px;color:#6b7280;display:flex;align-items:center;justify-content:space-between;gap:6px">
            <span>📊 ผู้นำ: ${p(w[0].name)} (${w[0].goals} ประตู)</span>
            ${z?'<span style="color:#16a34a;font-weight:700;flex-shrink:0">✓ เลือกแล้ว</span>':`<button data-act="useTopScorer" data-level="${n}" data-student="${w[0].studentId}" style="border:none;background:none;color:#db2777;font-weight:700;cursor:pointer;font-size:10.5px;flex-shrink:0">ใช้คนนี้</button>`}
          </div>`}else l=`<div style="margin-top:4px;font-size:10.5px;color:#6b7280">📊 เสมอกัน ${w.length} คนที่ ${m} ประตู — เลือกเองด้านบน</div>`}}return`<label style="font-size:11.5px;color:#6b7280;flex:1">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <span>${o}</span>
        ${a?`<button data-act="clearAward" data-level="${n}" data-type="${i}" style="border:none;background:none;color:#9ca3af;font-size:10.5px;cursor:pointer;text-decoration:underline">ล้าง</button>`:""}
      </div>
      <div style="position:relative;margin-top:4px">
        <input class="az-award-search" data-level="${n}" data-type="${i}" value="${p(c)}" autocomplete="off" placeholder="พิมพ์เลขเสื้อ/รหัส/ชื่อนักกีฬา..." style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12px"/>
        <div id="award-results-${n}-${i}" style="position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid #e5e7eb;border-radius:10px;margin-top:4px;max-height:200px;overflow-y:auto;z-index:20;display:none;box-shadow:0 6px 16px rgba(0,0,0,.08)"></div>
      </div>
      ${l}
    </label>`};return`
    ${ne(`
      <div style="font-weight:700;font-size:14px;margin-bottom:10px">ตั้งค่าเวลา / ไทม์ไลน์</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <label style="font-size:11.5px;color:#6b7280">วันที่ 1 · ม.ต้น M1-M14 และ ม.ปลาย M1-M13
          <input id="ops-start" type="datetime-local" value="${p(y("START_TIME",""))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
        </label>
        <label style="font-size:11.5px;color:#6b7280">วันที่ 2 · รอบเข้ารอบจนถึงรอบชิง
          <input id="ops-start-day2" type="datetime-local" value="${p(Je(2))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
        </label>
        <div style="display:flex;gap:8px">
          <label style="font-size:11.5px;color:#6b7280;flex:1">นัด (นาที)<input id="ops-matchmin" type="number" value="${p(y("MATCH_MIN",20))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/></label>
          <label style="font-size:11.5px;color:#6b7280;flex:1">พัก (นาที)<input id="ops-breakmin" type="number" value="${p(y("BREAK_MIN",5))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/></label>
        </div>
        <div style="font-size:10.5px;color:#6b7280">ผังปัจจุบันวันแรก 27 นัด วันที่สอง 18 นัด · ม.ต้นไม่มีนัดชิงที่ 3 ผู้แพ้ M18/M19 ได้อันดับ 3 ร่วม และ M20 เป็นรอบชิงชนะเลิศ</div>
        <button data-act="saveAutoTime" style="margin-top:4px;width:100%;padding:10px;border-radius:10px;border:none;background:#22c55e;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">จัดตารางอัตโนมัติ 2 วัน</button>
      </div>
    `)}
    ${ne(`
      <div style="font-weight:700;font-size:14px;margin-bottom:4px">นาฬิกาจับเวลาแข่งขันสด</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:10px">ใช้กับปุ่ม "เริ่มการแข่งขัน" ในหน้าบันทึกผลแต่ละนัด นับขึ้นจาก 00:00 ตามจำนวนนาทีต่อครึ่งนี้ และเมื่อครบเวลาแล้วจะแสดง +เวลาทด พร้อมประทับเวลาให้ผู้ทำประตู/ใบเหลือง/ใบแดงอัตโนมัติ</div>
      <label style="font-size:11.5px;color:#6b7280">นาทีต่อครึ่ง
        <input id="ops-halfmin" type="number" min="1" value="${p(y("HALF_DURATION_MINUTES",7))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
      </label>
      <button data-act="saveHalfDuration" style="margin-top:8px;width:100%;padding:10px;border-radius:10px;border:none;background:#22c55e;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">บันทึกนาทีต่อครึ่ง</button>
    `)}
    ${ne(`
      <div style="font-weight:700;font-size:14px;margin-bottom:4px;color:#dc2626">⚠️ ล้างผลการแข่งขันทั้งหมด</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:10px">ใช้ตอนทดสอบระบบบันทึกผล — ล้างสกอร์ ผู้ทำประตู ใบเหลือง/ใบแดง และนาฬิกาจับเวลาของ<b>ทุกนัด</b>กลับเป็นค่าเริ่มต้น (ยังไม่เริ่มแข่ง) รวมถึงทีมที่เข้ารอบต่อไปแบบที่แอดมินเลือกเอง (เช่น รอบแก้ตัว ม.ต้น) กลับเป็นค่าว่าง เพื่อให้จับสลาก/บันทึกผลใหม่ได้ตั้งแต่ต้น<br><b>ไม่กระทบ</b> ทีม/นักกีฬา/การชำระเงิน/การรายงานตัว และ<b>ไม่กระทบ</b>คู่แข่งขันรอบแรกที่จับสลากไว้แล้ว</div>
      <button data-act="resetAllMatchResults" style="width:100%;padding:10px;border-radius:10px;border:none;background:#dc2626;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">🗑️ ล้างผลการแข่งขันทั้งหมด</button>
    `)}
    ${ne(`
      <div style="font-weight:700;font-size:14px;margin-bottom:4px;color:#dc2626">⚠️ ล้างข้อมูลรายงานตัวทั้งหมด</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:10px">ล้างสถานะรายงานตัว (ที่สแกน QR ไว้) ของ<b>ทุกนัดทุกทีม</b>กลับเป็นยังไม่รายงานตัว — แยกจากปุ่มล้างผลด้านบน<br><b>ไม่กระทบ</b> ทีม/นักกีฬา/สกอร์/การชำระเงิน</div>
      <button data-act="resetAllCheckins" style="width:100%;padding:10px;border-radius:10px;border:none;background:#dc2626;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">🗑️ ล้างข้อมูลรายงานตัวทั้งหมด</button>
    `)}
    ${ne(`
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <div>
          <div style="font-weight:700;font-size:14px">บังคับกรอกผู้ทำประตูก่อนบันทึกผล</div>
          <div style="font-size:11px;color:#6b7280;margin-top:2px">เมื่อเปิด ระบบจะไม่ยอมบันทึกสกอร์ถ้าจำนวนผู้ทำประตูที่ระบุไว้ไม่ตรงกับสกอร์ ปิดไว้ถ้าต้องการบันทึกผลเร็วๆ ระหว่างแข่งจริง</div>
        </div>
        <button data-act="toggleRequireEvents" style="flex-shrink:0;font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${y("REQUIRE_EVENTS_BEFORE_SCORE","0")==="1"?"#dcfce7":"#f3f4f6"};color:${y("REQUIRE_EVENTS_BEFORE_SCORE","0")==="1"?"#16a34a":"#6b7280"}">${y("REQUIRE_EVENTS_BEFORE_SCORE","0")==="1"?"เปิดอยู่":"ปิดอยู่"}</button>
      </div>
    `)}
    ${ne(`
      <div style="font-weight:700;font-size:14px;margin-bottom:4px">สรุปเงินประกัน (Deposit)</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:10px">เริ่มต้น ${W(y("DEPOSIT_AMOUNT",500))} บาท − ค่าดำเนินการ ${W(y("OPERATION_FEE",100))} บาท − หักใบเหลือง ${W(y("RATE_YELLOW",30))} / ใบแดง ${W(y("RATE_RED",50))}</div>
      ${["MS","HS"].map(n=>`
        <div style="margin-bottom:10px">
          <div style="font-weight:700;font-size:12.5px;color:${S[n].accent};margin-bottom:6px">${S[n].label}</div>
          ${e(n).map(i=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #f3f4f6;font-size:12.5px"><span>${p(i.team)}</span><span style="font-weight:700">${W(i.refund)} ฿</span></div>`).join("")||'<div style="font-size:12px;color:#9ca3af">ยังไม่มีทีม</div>'}
        </div>`).join("")}
    `)}
    ${ne(`
      <div style="font-weight:700;font-size:14px;margin-bottom:10px">รางวัลรายบุคคล</div>
      ${["MS","HS"].map(n=>`
        <div style="margin-bottom:10px">
          <div style="font-weight:700;font-size:12.5px;color:${S[n].accent};margin-bottom:6px">${S[n].label}</div>
          <div style="display:flex;flex-direction:column;gap:6px">
            ${t(n,"mvp","MVP")}
            ${t(n,"top_scorer","ดาวซัลโว")}
            ${t(n,"best_gk","GK ยอดเยี่ยม")}
          </div>
        </div>`).join("")}
    `)}
  `}async function Ra(){await vi(document.getElementById("azfutsal-root"),Wn)}Ra();
