import{s as y}from"./supabase-BV-W2lsh.js";/* empty css             *//* empty css                                  */import{b as zr}from"./anti-pull-refresh-BGrI1pMY.js";import{a as g,g as k}from"./ui-FQqAmrdo.js";import{g as Gr}from"./student-api-GdZ3AenK.js";import{getMyTeacherProfile as Ur,getMyHomeroomRooms as Vr,getTeachers as Yr}from"./api-Cf_Y4s92.js";import{d as Qr,e as Jr,f as Kr,o as lr,g as Xr,h as Zr}from"./storage-D6nkcVz6.js";import{i as en,o as tn,d as rn,c as nn,a as an,u as sn,C as xt,g as on,b as ln}from"./certificate-engine-R4UFir_Q.js";import{o as dn}from"./certificate-editor-CnKFwhYE.js";import{b as cn}from"./browser-JP79f-a9.js";import"./version.js_v_10.22-ffVTG8-v.js";import"./teacher-views-utils-BWmONzsh.js";const un=["council_logo_url","council_theme_color","council_name","council_theme_side_m","council_theme_side_w","council_term_start_semester","council_term_start_year","council_term_end_semester","council_term_end_year","council_min_gpa","council_min_gpa_religious","council_eligible_grade_levels","council_require_teacher_endorsement","council_require_peer_endorsement","council_min_certificates","council_min_attendance_pct","council_apply_opens_at","council_apply_closes_at","council_featured_phase","council_video_max_minutes","council_video_brief","council_doc_plan_areas","council_doc_project_types","council_doc_school_strategies","council_doc_education_standards","council_signer_advisor_name","council_signer_director_name","council_election_thank_you_message","council_visible_to_all","council_test_student_codes","council_modules","academicYear"];async function pn(){const{data:e,error:t}=await y.from("system_config").select("key,value").in("key",un);if(t)throw t;return Object.fromEntries((e??[]).map(r=>[r.key,r.value]))}async function Je(e){const t=Object.entries(e).map(([n,s])=>({key:n,value:s})),{error:r}=await y.from("system_config").upsert(t,{onConflict:"key"});if(r)throw r}async function Ne(){const{data:e,error:t}=await y.from("council_positions").select("*").eq("is_active",!0).order("gender").order("sort_order");if(t)throw t;return e??[]}async function mn({gender:e,positionName:t,seatsCount:r,isElected:n,sortOrder:s}){const{error:i}=await y.from("council_positions").insert({gender:e,position_name:t,seats_count:r,is_elected:!1,sort_order:s});if(i)throw i}async function bn(e,t){const{error:r}=await y.from("council_positions").update(t).eq("id",e);if(r)throw r}async function vn(e){const{error:t}=await y.from("council_positions").update({is_active:!1}).eq("id",e);if(t)throw t}async function xn(){const{data:e,error:t}=await y.from("council_interview_criteria").select("*").eq("is_active",!0).order("sort_order");if(t)throw t;return e??[]}async function fn({name:e,weight:t}){const{error:r}=await y.from("council_interview_criteria").insert({name:e,weight:t});if(r)throw r}async function gn(e){const{error:t}=await y.from("council_interview_criteria").update({is_active:!1}).eq("id",e);if(t)throw t}async function _n({phrase:e,sortOrder:t}){const{error:r}=await y.from("council_endorsement_phrases").insert({phrase:e,sort_order:t??0});if(r)throw r}async function yn(e){const{error:t}=await y.from("council_endorsement_phrases").delete().eq("id",e);if(t)throw t}async function Ce(e){let t=y.from("council_members").select("id, position_id, student_id, academic_year, status, source, can_create_activities, council_positions(gender, position_name, sort_order, is_elected), students(full_name, student_code, main_room, image_url, photo_url)").eq("status","active");const{data:r,error:n}=await t;if(n)throw n;return r??[]}async function lt(e){let t=y.from("council_election_config").select("*");const{data:r,error:n}=await t.order("gender");if(n)throw n;return r??[]}async function dr(e){const{data:t,error:r}=await y.from("council_applications").select(`id, student_id, position_id, status, motivation, photo_url, created_at,
      gpa_general, gpa_religious, intro_video_url, certificates,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      peer_endorsed_by_member_id, peer_endorsement_comment, peer_endorsed_at,
      requested_peer_endorser_id,
      teachers(full_name),
      council_members!council_applications_peer_endorsed_by_member_id_fkey(students(full_name)),
      requested_peer_endorser:council_members!council_applications_requested_peer_endorser_id_fkey(students(full_name)),
      council_positions(position_name, gender, is_elected)`).eq("student_id",e).order("created_at",{ascending:!1});if(r)throw r;return t??[]}async function hn(e){const{data:t,error:r}=await y.from("council_members").select("id, position_id, status, source, term_start_date, term_end_date, can_create_activities, council_positions(position_name, gender, is_elected)").eq("student_id",e).eq("status","active");if(r)throw r;return t??[]}async function wn(e,t){const{error:r}=await y.rpc("set_council_member_can_create",{p_member_id:e,p_value:!!t});if(r)throw r}async function $n({studentId:e,positionId:t,academicYear:r,motivation:n,photoUrl:s,gpaGeneral:i,gpaReligious:a,introVideoUrl:o,certificates:l,requestedPeerEndorserId:p}){const{error:u}=await y.from("council_applications").insert({student_id:e,position_id:t,academic_year:r,motivation:n,photo_url:s,gpa_general:i,gpa_religious:a,intro_video_url:o,certificates:l??[],requested_peer_endorser_id:p??null});if(u)throw u}async function cr(e){if(!(e!=null&&e.length))return[];const{data:t,error:r}=await y.from("council_applications").select("id, position_id, motivation, photo_url, status, created_at, gpa_general, gpa_religious, intro_video_url, council_positions(position_name, gender), students(id, full_name, student_code, main_room, image_url, photo_url)").eq("status","pending").is("endorsed_at",null).order("created_at");if(r)throw r;return(t??[]).filter(n=>{var s;return e.includes((s=n.students)==null?void 0:s.main_room)})}async function ur(){const{data:e,error:t}=await y.from("council_endorsement_phrases").select("*").order("sort_order");if(t)throw t;return e??[]}async function kn({applicationId:e,teacherId:t,comment:r}){const{error:n}=await y.from("council_applications").update({endorsing_teacher_id:t,endorsement_comment:r,endorsed_at:new Date().toISOString()}).eq("id",e);if(n)throw n}async function En({applicationId:e,teacherId:t,comment:r}){const{error:n}=await y.from("council_applications").update({endorsing_teacher_id:t,endorsement_comment:r,endorsed_at:new Date().toISOString(),status:"rejected"}).eq("id",e);if(n)throw n}async function Sn(e,t){const{data:r,error:n}=await y.from("council_applications").select(`id, position_id, motivation, photo_url, status, created_at, requested_peer_endorser_id,
      council_positions!inner(position_name, gender),
      students(id, full_name, student_code, main_room, image_url, photo_url)`).eq("status","pending").is("peer_endorsed_at",null).eq("council_positions.gender",e).eq("requested_peer_endorser_id",t).order("created_at");if(n)throw n;return r??[]}async function An({applicationId:e,memberId:t}){const{error:r}=await y.from("council_applications").update({requested_peer_endorser_id:t}).eq("id",e);if(r)throw r}async function qn({applicationId:e,memberId:t,comment:r}){const{data:n,error:s}=await y.from("council_applications").select("requested_peer_endorser_id").eq("id",e).single();if(s)throw s;if(String(n.requested_peer_endorser_id)!==String(t))throw new Error("ใบสมัครนี้ไม่ได้ระบุให้คุณเป็นผู้รับรอง");const{error:i}=await y.from("council_applications").update({peer_endorsed_by_member_id:t,peer_endorsement_comment:r,peer_endorsed_at:new Date().toISOString()}).eq("id",e);if(i)throw i}async function In(e){let t=y.from("council_applications").select(`id, position_id, status, motivation, photo_url, academic_year, created_at,
      gpa_general, gpa_religious, intro_video_url, certificates,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      peer_endorsed_by_member_id, peer_endorsement_comment, peer_endorsed_at,
      teachers(full_name),
      council_members!council_applications_peer_endorsed_by_member_id_fkey(students(full_name)),
      council_positions(id, position_name, gender, is_elected),
      students(id, full_name, student_code, main_room, image_url, photo_url, profile_id),
      council_interviews(id, scheduled_at, location, interviewer_teacher_id, result, score, scores, comment),
      council_candidates(id, election_config_id, ballot_number)`).order("created_at",{ascending:!1});e&&(t=t.eq("academic_year",e));const{data:r,error:n}=await t;if(n)throw n;return r??[]}async function Cn({applicationId:e,existingInterviewId:t,scheduledAt:r,location:n,interviewerTeacherId:s}){const i={application_id:e,scheduled_at:r,location:n,interviewer_teacher_id:s};if(t){const{error:o}=await y.from("council_interviews").update(i).eq("id",t);if(o)throw o}else{const{error:o}=await y.from("council_interviews").insert(i);if(o)throw o}const{error:a}=await y.from("council_applications").update({status:"interview_scheduled"}).eq("id",e);if(a)throw a}async function Ln({interviewId:e,applicationId:t,score:r,scores:n,result:s,comment:i}){const{error:a}=await y.from("council_interviews").update({score:r,scores:n,result:s,comment:i}).eq("id",e);if(a)throw a;const o=s==="pass"?"interviewed":"rejected",{error:l}=await y.from("council_applications").update({status:o}).eq("id",t);if(l)throw l}async function jn({applicationId:e,studentId:t,electionConfigId:r,campaignStatement:n,photoUrl:s}){var u;const{data:i,error:a}=await y.from("council_candidates").select("ballot_number").eq("election_config_id",r).order("ballot_number",{ascending:!1}).limit(1);if(a)throw a;const o=(((u=i==null?void 0:i[0])==null?void 0:u.ballot_number)??0)+1,{error:l}=await y.from("council_candidates").insert({election_config_id:r,application_id:e,student_id:t,ballot_number:o,campaign_statement:n,photo_url:s});if(l)throw l;const{error:p}=await y.from("council_applications").update({status:"candidate"}).eq("id",e);if(p)throw p}async function Dn({applicationId:e,positionId:t,studentId:r,academicYear:n}){const{error:s}=await y.from("council_members").insert({position_id:t,student_id:r,academic_year:n,source:"appointed",status:"active",term_start_date:new Date().toISOString().slice(0,10)});if(s)throw s;const{error:i}=await y.from("council_applications").update({status:"appointed"}).eq("id",e);if(i)throw i}async function pr(e){const t=(e??"").trim();if(t.length<2)return[];const{data:r,error:n}=await y.from("students").select("id, full_name, student_code, main_room, gender, image_url, photo_url").or(`full_name.ilike.%${t}%,student_code.ilike.%${t}%`).limit(15);if(n)throw n;return r??[]}async function Tn({positionId:e,studentId:t,academicYear:r,termStartDate:n,appointedByTeacherId:s}){const{error:i}=await y.from("council_members").insert({position_id:e,student_id:t,academic_year:r,source:"appointed",status:"active",term_start_date:n||new Date().toISOString().slice(0,10),appointed_by_teacher_id:s??null});if(i)throw i}async function Bn(e,{positionId:t,termStartDate:r,termEndDate:n}){const{error:s}=await y.from("council_members").update({position_id:t,term_start_date:r||null,term_end_date:n||null,updated_at:new Date().toISOString()}).eq("id",e);if(s)throw s}async function Nn(e){const{error:t}=await y.from("council_members").update({status:"removed",term_end_date:new Date().toISOString().slice(0,10),updated_at:new Date().toISOString()}).eq("id",e);if(t)throw t}async function mr({gender:e,academicYear:t}){const{data:r,error:n}=await y.from("council_election_config").select("*").eq("gender",e).eq("academic_year",t).maybeSingle();if(n)throw n;if(r)return r;const{data:s,error:i}=await y.from("council_election_config").insert({gender:e,academic_year:t}).select().single();if(i)throw i;return s}async function Mn({electionConfigId:e,opensAt:t,closesAt:r}){const{error:n}=await y.from("council_election_config").update({opens_at:t,closes_at:r}).eq("id",e);if(n)throw n}async function At(e){const{data:t,error:r}=await y.from("council_candidates").select(`id, ballot_number, campaign_statement, photo_url, student_id, application_id,
      slogan, vision, policies, experience,
      students(full_name, student_code, main_room, image_url, photo_url),
      council_applications(gpa_general, gpa_religious)`).eq("election_config_id",e).order("ballot_number");if(r)throw r;return t??[]}async function Pn({candidateId:e,slogan:t,vision:r,policies:n,experience:s}){const{error:i}=await y.from("council_candidates").update({slogan:t,vision:r,policies:n,experience:s}).eq("id",e);if(i)throw i}async function yt(e){const t=e==="M"?["ชาย","M"]:["หญิง","W"],{count:r,error:n}=await y.from("students").select("id",{count:"exact",head:!0}).in("gender",t).or("is_active.is.null,is_active.eq.true");if(n)throw n;return r??0}async function br(e){const{data:t,error:r}=await y.from("council_votes").select("candidate_id").eq("election_config_id",e);if(r)throw r;const n={};return(t??[]).forEach(s=>{n[s.candidate_id]=(n[s.candidate_id]??0)+1}),n}async function On({electionConfigId:e,gender:t,academicYear:r}){const n=await At(e);if(!n.length)throw new Error("ยังไม่มีผู้สมัครในการเลือกตั้งนี้");const s=await br(e),i=n.reduce((u,b)=>(s[b.id]??0)>(s[u==null?void 0:u.id]??-1)?b:u,null);if(!i)throw new Error("ยังไม่มีผู้ลงคะแนนเลย");const o=(await Ne()).find(u=>u.gender===t&&u.is_elected);if(!o)throw new Error("ไม่พบตำแหน่งที่กำหนดให้มาจากการเลือกตั้งของสภา"+(t==="M"?"ชาย":"หญิง"));const{error:l}=await y.from("council_election_config").update({results_published_at:new Date().toISOString()}).eq("id",e);if(l)throw l;const{error:p}=await y.from("council_members").insert({position_id:o.id,student_id:i.student_id,academic_year:r,source:"elected",status:"active",term_start_date:new Date().toISOString().slice(0,10)});if(p)throw p;return i}async function Rn(e){const[{data:t,error:r},{data:n,error:s}]=await Promise.all([y.from("council_positions").select("*").eq("gender",e).eq("is_active",!0).eq("is_elected",!1).order("sort_order"),y.from("council_members").select("position_id").eq("status","active")]);if(r)throw r;if(s)throw s;const i={};return(n??[]).forEach(a=>{i[a.position_id]=(i[a.position_id]??0)+1}),(t??[]).filter(a=>(i[a.id]??0)<a.seats_count)}async function Hn(e){const{data:t,error:r}=await y.from("council_applications").select(`id, position_id, motivation, photo_url, student_id,
      students(id, full_name, student_code, main_room, image_url, photo_url),
      council_positions!inner(id, position_name, gender, is_elected),
      council_interviews(score, comment)`).eq("status","interviewed").eq("council_positions.gender",e).eq("council_positions.is_elected",!1);if(r)throw r;return t??[]}async function Fn({applicationId:e,positionId:t,proposedByStudentId:r}){const{error:n}=await y.from("council_nominations").insert({application_id:e,position_id:t,proposed_by_student_id:r});if(n)throw n}async function Wn(e){const{data:t,error:r}=await y.from("council_nominations").select(`id, application_id, position_id, status, comment, created_at,
      council_positions!inner(position_name, gender),
      council_applications(motivation, photo_url, students(full_name, student_code, main_room, image_url, photo_url))`).eq("status","proposed").eq("council_positions.gender",e).order("created_at");if(r)throw r;return t??[]}async function zn({nominationId:e,approve:t,teacherId:r,comment:n}){const{data:s,error:i}=await y.from("council_nominations").select("*").eq("id",e).single();if(i)throw i;const{error:a}=await y.from("council_nominations").update({status:t?"approved":"rejected",decided_by_teacher_id:r,decided_at:new Date().toISOString(),comment:n}).eq("id",e);if(a)throw a;if(t){const{data:o,error:l}=await y.from("council_applications").select("student_id, academic_year").eq("id",s.application_id).single();if(l)throw l;const{error:p}=await y.from("council_members").insert({position_id:s.position_id,student_id:o.student_id,academic_year:o.academic_year,source:"appointed",status:"active",term_start_date:new Date().toISOString().slice(0,10)});if(p)throw p;const{error:u}=await y.from("council_applications").update({status:"appointed"}).eq("id",s.application_id);if(u)throw u}}async function Gn(e){let t=y.from("council_activities").select("*, council_members!council_activities_owner_member_id_fkey(students(full_name))").order("activity_date",{ascending:!1,nullsFirst:!1});e&&(t=t.eq("academic_year",e));const{data:r,error:n}=await t;if(n)throw n;return r??[]}async function Un({title:e,detail:t,gender:r,activityDate:n,budget:s,ownerText:i,academicYear:a,openToGeneral:o,ownerMemberId:l,countsForEvaluation:p}){const{error:u}=await y.from("council_activities").insert({title:e,detail:t,gender:r||null,activity_date:n||null,budget:s||null,owner_text:i||null,academic_year:a,open_to_general:!!o,owner_member_id:l||null,counts_for_evaluation:p!==!1});if(u)throw u}async function Gt(e,t){const{error:r}=await y.from("council_activities").update({status:t,updated_at:new Date().toISOString()}).eq("id",e);if(r)throw r}async function Vn(e,t,r){let n=y.from("council_activities").select("id, title, activity_date, status, gender, counts_for_evaluation, open_to_general").in("status",["ongoing","completed"]);r&&(n=n.eq("academic_year",r)),t&&(n=n.or(`gender.is.null,gender.eq.${t}`));const[{data:s,error:i},{data:a,error:o}]=await Promise.all([n.order("activity_date",{ascending:!1}),y.from("council_activity_attendance").select("activity_id, checked_in_at").eq("student_id",e)]);if(i)throw i;if(o)throw o;return{activities:s??[],myAttendance:a??[]}}async function Yn(e){const{data:t,error:r}=await y.from("council_activity_attendance").select("student_id").eq("activity_id",e);if(r)throw r;return new Set((t??[]).map(n=>n.student_id))}async function Qn(e){const{data:t,error:r}=await y.from("council_activity_attendance").select("student_id, checked_in_at, students(full_name, student_code, main_room, image_url, photo_url)").eq("activity_id",e).order("checked_in_at");if(r)throw r;return t??[]}async function vr({activityId:e,studentId:t}){const{data:r}=await y.from("council_members").select("id").eq("student_id",t).eq("status","active").maybeSingle(),{error:n}=await y.from("council_activity_attendance").insert({activity_id:e,student_id:t,member_id:(r==null?void 0:r.id)??null});if(n)throw n}async function Jn({activityId:e,studentId:t}){const{error:r}=await y.from("council_activity_attendance").delete().eq("activity_id",e).eq("student_id",t);if(r)throw r}async function Kn(e){const{data:t,error:r}=await y.from("council_activity_certificate_rules").select("*").eq("activity_id",e).maybeSingle();if(r)throw r;return t}async function Xn({activityId:e,templateId:t,minAttendanceCount:r,requiredDates:n,notes:s}){const{error:i}=await y.from("council_activity_certificate_rules").upsert({activity_id:e,template_id:t||null,min_attendance_count:r||null,required_dates:n??[],notes:s||null,updated_at:new Date().toISOString()},{onConflict:"activity_id"});if(i)throw i}async function Zn(e){const{data:t,error:r}=await y.from("council_activity_certificates").select("*").eq("activity_id",e);if(r)throw r;return t??[]}async function ea({activityId:e,studentId:t,decision:r,comment:n,decidedByTeacherId:s,decidedByMemberId:i}){const{error:a}=await y.from("council_activity_certificates").upsert({activity_id:e,student_id:t,override_decision:r,comment:n||null,decided_by_teacher_id:s||null,decided_by_member_id:i||null,updated_at:new Date().toISOString()},{onConflict:"activity_id,student_id"});if(a)throw a}async function ta(e){const{data:t,error:r}=await y.from("council_routines").select("*").eq("member_id",e).eq("is_active",!0).order("day_of_week");if(r)throw r;return t??[]}async function ra(e,t){if(!(e!=null&&e.length))return new Set;const{data:r,error:n}=await y.from("council_routine_logs").select("routine_id").in("routine_id",e).eq("week_start",t);if(n)throw n;return new Set((r??[]).map(s=>s.routine_id))}async function na({memberId:e,dayOfWeek:t,timeRange:r,task:n,location:s}){const{error:i}=await y.from("council_routines").insert({member_id:e,day_of_week:t,time_range:r,task:n,location:s});if(i)throw i}async function aa(e){const{error:t}=await y.from("council_routines").update({is_active:!1}).eq("id",e);if(t)throw t}async function sa({routineId:e,weekStart:t,done:r}){if(r){const{error:n}=await y.from("council_routine_logs").insert({routine_id:e,week_start:t});if(n)throw n}else{const{error:n}=await y.from("council_routine_logs").delete().eq("routine_id",e).eq("week_start",t);if(n)throw n}}async function ia(e){const{data:t,error:r}=await y.from("council_assignments").select("*").eq("member_id",e).order("due_date",{ascending:!0,nullsFirst:!1});if(r)throw r;return t??[]}async function oa(e){const{data:t,error:r}=await y.from("council_assignments").select(`id, task, due_date, status, created_at,
      council_members!inner(id, position_id, council_positions!inner(gender, position_name), students(full_name, student_code, main_room, image_url, photo_url))`).eq("council_members.council_positions.gender",e).order("created_at",{ascending:!1});if(r)throw r;return t??[]}async function la({memberId:e,task:t,dueDate:r,assignedByStudentId:n}){const{error:s}=await y.from("council_assignments").insert({member_id:e,task:t,due_date:r||null,assigned_by_student_id:n});if(s)throw s}async function da(e,t){const{error:r}=await y.from("council_assignments").update({status:t}).eq("id",e);if(r)throw r}async function ca(e){const{error:t}=await y.from("council_assignments").delete().eq("id",e);if(t)throw t}async function ua(){const{data:e,error:t}=await y.from("council_announcements").select("*, teachers(full_name), students(full_name)").order("pinned",{ascending:!1}).order("created_at",{ascending:!1});if(t)throw t;return e??[]}async function pa({type:e,audience:t,title:r,body:n,pinned:s,postedByTeacherId:i,postedByStudentId:a}){const{error:o}=await y.from("council_announcements").insert({type:e,audience:t,title:r,body:n,pinned:s,posted_by_teacher_id:i||null,posted_by_student_id:a||null});if(o)throw o}async function ma(e){const{data:t,error:r}=await y.from("council_announcement_acks").select("announcement_id").eq("student_id",e);if(r)throw r;return new Set((t??[]).map(n=>n.announcement_id))}async function ba({announcementId:e,studentId:t}){const{error:r}=await y.from("council_announcement_acks").insert({announcement_id:e,student_id:t});if(r)throw r}async function va(){const{data:e,error:t}=await y.from("council_announcement_acks").select("announcement_id");if(t)throw t;const r={};return(e??[]).forEach(n=>{r[n.announcement_id]=(r[n.announcement_id]??0)+1}),r}async function xa(){const{count:e,error:t}=await y.from("students").select("id",{count:"exact",head:!0}).or("is_active.is.null,is_active.eq.true");if(t)throw t;return e??0}async function fa(){const{data:e,error:t}=await y.from("council_evaluation_criteria").select("*").eq("is_active",!0).order("sort_order");if(t)throw t;return e??[]}async function ga({name:e,weight:t}){const{error:r}=await y.from("council_evaluation_criteria").insert({name:e,weight:t});if(r)throw r}async function _a(e){const{error:t}=await y.from("council_evaluation_criteria").update({is_active:!1}).eq("id",e);if(t)throw t}async function ya(e){const{data:t,error:r}=await y.from("council_evaluations").select("*").eq("academic_year",e);if(r)throw r;return t??[]}async function ha({memberId:e,academicYear:t,scores:r,totalScore:n,maxScore:s,decision:i,comment:a,evaluatorTeacherId:o}){const{error:l}=await y.from("council_evaluations").upsert({member_id:e,academic_year:t,scores:r,total_score:n,max_score:s,decision:i,comment:a,evaluator_teacher_id:o,evaluated_at:new Date().toISOString(),updated_at:new Date().toISOString()},{onConflict:"member_id,academic_year"});if(l)throw l}async function wa({evaluationId:e,certificateNo:t}){const{error:r}=await y.from("council_evaluations").update({certificate_no:t,certificate_issued_at:new Date().toISOString()}).eq("id",e);if(r)throw r}async function $a(e){const{data:t,error:r}=await y.from("council_documents").select("*, council_positions(position_name, gender)").eq("academic_year",e).order("created_at",{ascending:!1});if(r)throw r;return t??[]}const dt={title:"title",planArea:"plan_area",projectType:"project_type",schoolStrategy:"school_strategy",educationStandard:"education_standard",responsiblePersons:"responsible_persons",rationale:"rationale",objectives:"objectives",goalsQuantitative:"goals_quantitative",goalsQualitative:"goals_qualitative",workSteps:"work_steps",durationText:"duration_text",locationText:"location_text",budgetItems:"budget_items",stakeholders:"stakeholders",evaluationItems:"evaluation_items",expectedResults:"expected_results",positionId:"position_id"};async function ka(e){const t={};Object.entries(e).forEach(([s,i])=>{dt[s]&&(t[dt[s]]=i)}),t.origin=e.origin,t.academic_year=e.academicYear,t.created_by_student_id=e.createdByStudentId||null,t.created_by_teacher_id=e.createdByTeacherId||null;const{data:r,error:n}=await y.from("council_documents").insert(t).select().single();if(n)throw n;return r}async function Ea(e,t){const r={};Object.entries(t).forEach(([s,i])=>{dt[s]&&(r[dt[s]]=i)}),r.updated_at=new Date().toISOString();const{error:n}=await y.from("council_documents").update(r).eq("id",e);if(n)throw n}async function Sa(e){const{data:t,error:r}=await y.from("council_documents").select("origin").eq("id",e).single();if(r)throw r;const n=t.origin==="council"?"pending_advisor":"pending_dept_head",{error:s}=await y.from("council_documents").update({status:n,updated_at:new Date().toISOString(),last_rejected_stage:null,last_rejected_by_teacher_id:null,last_rejected_at:null,last_rejection_comment:null}).eq("id",e);if(s)throw s}async function qt({id:e,approve:t,teacherId:r,comment:n,stage:s,decidedCol:i,decidedAtCol:a,commentCol:o,signatureCol:l,signatureUrl:p,nextStatus:u}){const b=new Date().toISOString();if(t){const h={status:u,updated_at:b,[i]:r,[a]:b,[o]:n||null};l&&(h[l]=p||null);const{error:f}=await y.from("council_documents").update(h).eq("id",e);if(f)throw f}else{const{error:h}=await y.from("council_documents").update({status:"draft",updated_at:b,last_rejected_stage:s,last_rejected_by_teacher_id:r,last_rejected_at:b,last_rejection_comment:n}).eq("id",e);if(h)throw h}}async function Aa({id:e,approve:t,teacherId:r,comment:n}){return qt({id:e,approve:t,teacherId:r,comment:n,stage:"advisor",decidedCol:"advisor_decided_by_teacher_id",decidedAtCol:"advisor_decided_at",commentCol:"advisor_comment",nextStatus:"pending_dept_head"})}async function qa({id:e,approve:t,teacherId:r,comment:n,signatureUrl:s}){return qt({id:e,approve:t,teacherId:r,comment:n,stage:"dept_head",decidedCol:"dept_head_decided_by_teacher_id",decidedAtCol:"dept_head_decided_at",commentCol:"dept_head_comment",signatureCol:"dept_head_signature_url",signatureUrl:s,nextStatus:"pending_director"})}async function Ia({id:e,approve:t,teacherId:r,comment:n,signatureUrl:s}){return qt({id:e,approve:t,teacherId:r,comment:n,stage:"director",decidedCol:"director_decided_by_teacher_id",decidedAtCol:"director_decided_at",commentCol:"director_comment",signatureCol:"director_signature_url",signatureUrl:s,nextStatus:"approved"})}async function ft(e){const{data:t,error:r}=await y.from("teachers").select("id, full_name, teacher_code, image_url, signature_url, category").contains("positions",[e]).order("full_name");if(r)throw r;return t??[]}async function Ca(e,t){const{data:r,error:n}=await y.from("teachers").select("positions").eq("id",e).single();if(n)throw n;const s=Array.from(new Set([...r.positions??[],t])),{error:i}=await y.from("teachers").update({positions:s}).eq("id",e);if(i)throw i}async function La(e,t){const{data:r,error:n}=await y.from("teachers").select("positions").eq("id",e).single();if(n)throw n;const s=(r.positions??[]).filter(a=>a!==t),{error:i}=await y.from("teachers").update({positions:s}).eq("id",e);if(i)throw i}async function xr(e){const{data:t,error:r}=await y.from("council_advisor_positions").select("position_id").eq("teacher_id",e);if(r)throw r;return(t??[]).map(n=>n.position_id)}async function ja(e,t){const{error:r}=await y.from("council_advisor_positions").delete().eq("teacher_id",e);if(r)throw r;if(t.length){const{error:n}=await y.from("council_advisor_positions").insert(t.map(s=>({teacher_id:e,position_id:s})));if(n)throw n}}async function Da(){const{data:e,error:t}=await y.from("council_advisor_positions").select("teacher_id, position_id");if(t)throw t;return e??[]}async function Ta(e,t){const{error:r}=await y.from("teachers").update({signature_url:t}).eq("id",e);if(r)throw r}async function Ba(e,t){const{error:r}=await y.from("teachers").update({image_url:t}).eq("id",e);if(r)throw r}function Le(e="success"){try{const t=new(window.AudioContext||window.webkitAudioContext),r=t.createOscillator(),n=t.createGain();r.connect(n),n.connect(t.destination),e==="success"?(r.type="sine",r.frequency.setValueAtTime(880,t.currentTime),n.gain.setValueAtTime(.08,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.12),r.start(),r.stop(t.currentTime+.12)):(r.type="sawtooth",r.frequency.setValueAtTime(150,t.currentTime),n.gain.setValueAtTime(.12,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.3),r.start(),r.stop(t.currentTime+.3))}catch{}}async function Na(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const r=document.createElement("script");r.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",r.onload=()=>e(window.Html5Qrcode),r.onerror=()=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(r)})}function ye(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ma(e){var j;const{activityId:t,activityTitle:r,members:n,alreadyChecked:s,onCheckedIn:i,onUndo:a,openToGeneral:o}=e;(j=document.getElementById("council-checkin-overlay"))==null||j.remove();const l=document.createElement("div");l.id="council-checkin-overlay",l.className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col",l.innerHTML=`
    <style>
      @keyframes ccs-laser-move { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .ccs-laser { animation: ccs-laser-move 2s ease-in-out infinite; }
      .ccs-flash-success { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .ccs-flash-error { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="text-slate-100 font-bold text-sm">📷 สแกนเช็คอินกิจกรรม</h3>
        <p class="text-xs text-slate-400 truncate">${ye(r??"")}</p>
      </div>
      <button id="ccs-close" class="text-slate-400 hover:text-white text-2xl leading-none px-2">&times;</button>
    </div>
    <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 max-w-md mx-auto w-full">
      <div id="ccs-camera-container" class="relative w-full aspect-square bg-black rounded-2xl overflow-hidden">
        <div id="ccs-camera-reader" class="w-full h-full"></div>
        <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div class="absolute inset-0 bg-black/30"></div>
          <div class="relative w-48 h-48 rounded-2xl border border-white/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] overflow-hidden">
            <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400 rounded-tl"></div>
            <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 rounded-tr"></div>
            <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400 rounded-bl"></div>
            <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400 rounded-br"></div>
            <div class="ccs-laser absolute left-0 w-full h-0.5 bg-sky-400"></div>
          </div>
        </div>
      </div>
      <div id="ccs-feedback" class="min-h-[70px]">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400">
          ยกกล้องส่อง QR ของ${o?"นักเรียน":"สมาชิกสภา"}เพื่อเช็คอิน
        </div>
      </div>
      <form id="ccs-manual-form" class="flex gap-2">
        <input id="ccs-manual-code" type="text" inputmode="numeric" placeholder="หรือพิมพ์รหัสนักเรียนแล้วกด Enter" class="flex-1 min-w-0 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500" />
        <button type="submit" class="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex-shrink-0">เช็คอิน</button>
      </form>
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3">
        <div class="flex items-center justify-between gap-2 mb-2">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">เช็คอินแล้วรอบนี้</p>
          <span id="ccs-history-count" class="text-[10px] font-bold text-sky-400">0 คน</span>
        </div>
        <div id="ccs-history-list" class="space-y-1.5 text-xs max-h-40 overflow-y-auto pr-1">
          <p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>
        </div>
      </div>
    </div>`,document.body.appendChild(l);const p=[];let u=null,b=null,h=0;const f=new Set(s??[]),m=()=>{const A=l.querySelector("#ccs-history-list"),_=l.querySelector("#ccs-history-count");if(_.textContent=`${p.length} คน`,!p.length){A.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}A.innerHTML=p.map(w=>`
      <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${ye(w.name)}</span>
        <span class="text-emerald-400 font-bold text-[11px] flex-shrink-0">✓ เช็คอินแล้ว</span>
        <button data-ccs-undo="${ye(w.studentId)}" class="px-2 py-0.5 rounded-md border border-red-800/60 bg-red-950/40 text-red-400 text-[10.5px] font-bold flex-shrink-0">✕ ยกเลิก</button>
      </div>`).join("")};async function v(A){var S;const _=n.find(q=>{var T;return((T=q.students)==null?void 0:T.student_code)===A});if(_)return{studentId:_.student_id,name:((S=_.students)==null?void 0:S.full_name)??"—"};if(!o)return null;const $=(await pr(A).catch(()=>[])).find(q=>q.student_code===A);return $?{studentId:$.id,name:$.full_name}:null}async function E(A){const _=l.querySelector("#ccs-camera-container"),w=l.querySelector("#ccs-feedback"),$=q=>{_.classList.add(q?"ccs-flash-success":"ccs-flash-error"),setTimeout(()=>_.classList.remove(q?"ccs-flash-success":"ccs-flash-error"),500)},S=await v(A);if(!S){Le("error"),$(!1),w.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">ไม่พบ${o?"นักเรียน":"สมาชิกสภา"}รหัสนี้</div>`;return}if(f.has(S.studentId)){Le("error"),$(!1),w.innerHTML=`<div class="bg-amber-950/40 border border-amber-800/80 rounded-2xl p-3 text-center text-xs text-amber-400">${ye(S.name)} เช็คอินไปแล้ว</div>`;return}try{await vr({activityId:t,studentId:S.studentId}),f.add(S.studentId),Le("success"),$(!0),w.innerHTML=`<div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 text-center text-xs text-emerald-300">✓ เช็คอิน ${ye(S.name)} สำเร็จ</div>`,p.unshift({name:S.name,studentId:S.studentId}),m(),i==null||i(S.studentId)}catch(q){Le("error"),$(!1),w.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">บันทึกไม่สำเร็จ: ${ye(k(q))}</div>`,g("เช็คอินไม่สำเร็จ: "+k(q),"error")}}async function I(A){let _=A;if(A.startsWith("SQ:")){const[,w,$]=A.split(":"),S=Math.floor(Date.now()/1e3)-parseInt($,10);if(S>60||S<-60){const q=l.querySelector("#ccs-feedback"),T=l.querySelector("#ccs-camera-container");Le("error"),T.classList.add("ccs-flash-error"),setTimeout(()=>T.classList.remove("ccs-flash-error"),500),q.innerHTML='<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">QR Code หมดอายุแล้ว ให้เปิดหน้าใหม่</div>';return}_=w}await E(_)}l.querySelector("#ccs-manual-form").addEventListener("submit",async A=>{A.preventDefault();const _=l.querySelector("#ccs-manual-code"),w=_.value.trim();w&&(await E(w),_.value="",_.focus())}),l.querySelector("#ccs-history-list").addEventListener("click",async A=>{const _=A.target.closest("[data-ccs-undo]");if(!_)return;const w=Number(_.dataset.ccsUndo);_.disabled=!0;try{await Jn({activityId:t,studentId:w}),f.delete(w);const $=p.findIndex(S=>S.studentId===w);$!==-1&&p.splice($,1),m(),a==null||a(w)}catch($){g("ยกเลิกไม่สำเร็จ: "+k($),"error"),_.disabled=!1}}),l.querySelector("#ccs-close").addEventListener("click",async()=>{if(u)try{await u.stop()}catch{}l.remove()}),(async()=>{try{const A=await Na();u=new A("ccs-camera-reader"),await u.start({facingMode:"environment"},{fps:25,aspectRatio:1},_=>{_===b&&Date.now()-h<2e3||(b=_,h=Date.now(),I(_))},()=>{})}catch(A){g("ไม่สามารถเปิดกล้องได้: "+k(A),"error"),l.remove()}})()}const c=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),It=document.getElementById("council-content"),D={M:"ชาย",W:"หญิง"},ce=e=>e==="ชาย"||e==="M"?"M":e==="หญิง"||e==="W"?"W":null,N=(e,t="w-10 h-12")=>e!=null&&e.photo_url||e!=null&&e.image_url?`<img src="${c(e.photo_url||e.image_url)}" class="${t} rounded-[10px] object-cover border border-[var(--line)] shadow-[0_1px_3px_rgba(0,0,0,0.25)] bg-[var(--bg-2)] flex-shrink-0">`:`<div class="${t} rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${c(((e==null?void 0:e.full_name)||"?").charAt(0))}</div>`,fr={pending:"รอดำเนินการ",interview_scheduled:"นัดสัมภาษณ์แล้ว",interviewed:"สัมภาษณ์แล้ว",candidate:"ผู้สมัครเลือกตั้ง",appointed:"ได้รับแต่งตั้ง",rejected:"ไม่ผ่าน"};let d=null,U="overview",ct=!1,B=1,C={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},ve=null,X=null;const gr=5;function Me(){var e;return Number((e=d==null?void 0:d.cfg)==null?void 0:e.council_min_certificates)||gr}function Pe(e){return Array.from({length:e},()=>({file:null,title:"",previewUrl:null,isPdf:!1}))}let M=Pe(gr),he=!1,R=null;function et(){ct=!1,B=1,C={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},ve=null,X&&URL.revokeObjectURL(X),X=null,M.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),M=Pe(Me()),he=!1}function Ct(){return d!=null&&d.student?`council_apply_draft_${d.student.id}`:null}function V(){const e=Ct();if(e)try{localStorage.setItem(e,JSON.stringify({step:B,data:C,certTitles:M.map(t=>t.title),savedAt:Date.now()}))}catch{}}function Pa(){const e=Ct();if(!e)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function Ut(){const e=Ct();e&&localStorage.removeItem(e)}let Oe=null,se=null,L=null,Re=null,He=null,pe="all",ee="M",tt="",we="",De="",Te="",te=null,H=null,ht=null;const ue={};let $e=null,me=!1;const wt={};let P=null,F=null;const ie={};let z=null,$t=null;const ke={},Lt={},Fe={},jt={};let ut=null,le=null,de=null,rt=null,nt="all",at=!1,Be="general",re=null,oe=null;const Vt=[{id:"general",label:"ทั่วไป"},{id:"positions",label:"ตำแหน่ง"},{id:"criteria",label:"เกณฑ์และข้อความ"},{id:"modules",label:"โมดูล"}],Oa={candidates:"ว่าที่ประธาน / ผลเลือกตั้ง",news:"ประกาศ",interview:"ตารางสัมภาษณ์",appoint:"แต่งตั้งตรง",chairteam:"เสนอคณะทำงาน",chairtasks:"มอบหมายงาน",evaluate:"ประเมินการปฏิบัติหน้าที่",certissue:"ออกเกียรติบัตร",docs:"เอกสารโครงการ",perms:"มอบสิทธิ์ครู (ยังไม่สร้างหน้า)"};function Dt(){try{return{...JSON.parse(d.cfg.council_modules||"{}")}}catch{return{}}}async function _r(){re=await xn().catch(()=>[]),x()}async function Ra(){oe=await ur().catch(()=>[]),x()}const Ha={apply:{title:"📝 สมัครสภานักเรียน",subtabs:[{id:"new",label:"สมัครตำแหน่งใหม่"},{id:"mine",label:"ใบสมัครของฉัน"}]},election:{title:"🗳️ การเลือกตั้งประธานสภา",subtabs:[{id:"status",label:"สถานะการเลือกตั้ง"}]}};async function Fa(){var Z,ne;zr();const{data:{session:e}}=await y.auth.getSession();if(!e){window.location.replace("index.html");return}const{data:t}=await y.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single(),r=t==null?void 0:t.role,n=r==="admin"||(t==null?void 0:t.is_also_admin)===!0,i={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[r]||"index.html";document.getElementById("council-back-btn-desktop").href=i,document.getElementById("council-back-btn-mobile").href=i;const[a,o,l,p]=await Promise.all([pn(),Ne(),Ce(),lt()]);hr(a);let u=null,b=[],h=[];r==="student"&&(u=await Gr().catch(()=>null));const f=(a.council_test_student_codes||"").split(/[\s,]+/).map(O=>O.trim()).filter(Boolean),m=r==="student"&&!!u&&f.includes(u.student_code);if(a.council_visible_to_all==="false"&&!n&&!m){Tt(!1),It.innerHTML=`
      <div class="max-w-md mx-auto px-4 py-20 text-center text-[var(--muted-2)]">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-medium text-[var(--ink-2)]">ระบบสภานักเรียนปิดใช้งานชั่วคราว</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบ</p>
      </div>`;return}r==="student"&&u&&([b,h]=await Promise.all([dr(u.id).catch(()=>[]),hn(u.id).catch(()=>[])]));let v=null,E=[],I=[],j=[];r==="teacher"&&(v=await Ur(e.user.id).catch(()=>null),v&&(E=(await Vr(v.id).catch(()=>[])).filter(W=>W.category==="สามัญ").map(W=>W.main_room),[I,j]=await Promise.all([cr(E).catch(()=>[]),ur().catch(()=>[])])));const A=r==="student"&&h.some(O=>{var W;return(W=O.council_positions)==null?void 0:W.is_elected}),_=A||h.some(O=>O.can_create_activities),w=((ne=(Z=h.find(O=>{var W;return(W=O.council_positions)==null?void 0:W.is_elected}))==null?void 0:Z.council_positions)==null?void 0:ne.gender)??null,$=r==="teacher"&&!!v&&(v.position==="council_advisor"||(v.positions??[]).includes("council_advisor")),S=r==="teacher"&&!!v&&(v.position==="student_affairs_head"||(v.positions??[]).includes("student_affairs_head")),q=r==="teacher"&&!!v&&(v.position==="school_director"||(v.positions??[]).includes("school_director")),T=r==="teacher"&&!!v&&(v.position==="executive"||(v.positions??[]).includes("executive"));d={role:r,isAdmin:n,isChair:A,isCouncilAdvisor:$,isStudentAffairsHead:S,isSchoolDirector:q,isExecutive:T,canCreateActivities:_,chairGender:w,student:u,applications:b,membership:h,positions:o,members:l,elections:p,cfg:a,teacher:v,homeroomMainRooms:E,pendingEndorsements:I,endorsementPhrases:j},P=Number(a.academicYear)||new Date().getFullYear()+543,r==="teacher"&&I.length&&(U="endorse"),x()}async function yr(){d!=null&&d.student&&(d.applications=await dr(d.student.id).catch(()=>d.applications))}async function Wa(){d!=null&&d.teacher&&(d.pendingEndorsements=await cr(d.homeroomMainRooms).catch(()=>d.pendingEndorsements))}function Tt(e){document.getElementById("council-sidebar").style.display=e?"":"none",document.getElementById("council-bottom-tabs").style.display=e?"":"none"}function hr(e){const t=e.council_name||"ระบบสภานักเรียน";if(document.title=t,document.getElementById("council-title").textContent=t,document.getElementById("council-title-mobile").textContent=t,e.council_logo_url){const r=document.getElementById("council-logo");r.src=e.council_logo_url,r.classList.remove("hidden"),document.getElementById("council-logo-fallback").classList.add("hidden")}}const gt={main:{label:"หน้าหลัก",icon:"🏠"},council:{label:"งานสภา",icon:"👥"},election:{label:"เลือกตั้ง",icon:"🗳️"},teacherWork:{label:"งานครู",icon:"📋"},system:{label:"ระบบ",icon:"⚙️"}};function za(){const e=[{id:"overview",icon:"🏠",label:"หน้าหลัก",group:"main"}];e.push({id:"news",icon:"📣",label:"ประกาศ",group:"council"}),e.push({id:"roster",icon:"🏛️",label:"สภาของเรา",group:"council"}),e.push({id:"activities",icon:"📅",label:"กิจกรรม",group:"council"}),(d.isChair||d.isAdmin||d.isCouncilAdvisor)&&e.push({id:"chairteam",icon:"👔",label:"เสนอคณะทำงาน",group:"council"}),d.isChair&&e.push({id:"assignments",icon:"📌",label:"มอบหมายงาน",group:"council"}),d.membership.length&&e.push({id:"myduty",icon:"🎫",label:"หน้าที่/งานของฉัน",group:"council"}),d.membership.length&&e.push({id:"mysummary",icon:"📊",label:"สรุปของฉัน",group:"council"}),d.membership.length&&d.cfg.council_require_peer_endorsement==="true"&&e.push({id:"peerEndorse",icon:"✋",label:"รับรองผู้สมัคร (สภา)",group:"council"}),e.push({id:"candidates",icon:"🗳️",label:"ว่าที่ประธาน",group:"election"}),e.push({id:"result",icon:"📊",label:"ผลเลือกตั้ง",group:"election"}),d.role==="teacher"&&d.pendingEndorsements.length&&e.push({id:"endorse",icon:"✋",label:"รับรองผู้สมัคร",badge:d.pendingEndorsements.length,group:"teacherWork"});const t=d.isAdmin||d.isCouncilAdvisor;t&&e.push({id:"apps",icon:"📋",label:"ใบสมัคร",group:"teacherWork"}),(t||d.membership.length)&&e.push({id:"eval",icon:"🎖️",label:"ประเมิน/เกียรติบัตร",group:"teacherWork"}),(t||d.isChair||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"docs",icon:"📄",label:"เอกสารโครงการ",group:"teacherWork"}),(d.isAdmin||d.isExecutive)&&e.push({id:"dashboard",icon:"📊",label:"ภาพรวม",group:"system"}),t&&e.push({id:"settings",icon:"⚙️",label:"ตั้งค่า",group:"system"}),d.isAdmin&&e.push({id:"perms",icon:"🔑",label:"มอบสิทธิ์",group:"system"}),(d.isCouncilAdvisor||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"myCouncilProfile",icon:"✍️",label:"โปรไฟล์ของฉัน",group:"system"});const r=Dt(),n=new Set;return r.candidates===!1&&(n.add("candidates"),n.add("result")),r.news===!1&&n.add("news"),r.evaluate===!1&&n.add("eval"),r.docs===!1&&n.add("docs"),r.chairteam===!1&&n.add("chairteam"),r.chairtasks===!1&&n.add("assignments"),e.filter(s=>!n.has(s.id))}let xe=null;function Ga(e){var i;const t=Object.keys(gt);document.getElementById("council-sidebar-nav").innerHTML=t.map(a=>{const o=e.filter(l=>l.group===a);return o.length?`
      <div class="pb-2">
        <p class="text-[0.6875rem] font-bold text-[var(--primary-45)] tracking-wide px-3 pt-3 pb-1.5">${c(gt[a].label)}</p>
        ${o.map(l=>`
          <button type="button" class="council-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
            ${l.id===U?"bg-[var(--hero-3)] text-white":"text-[var(--primary-45)] hover:bg-[var(--hero-3)] hover:text-white"}" data-view="${l.id}">
            <span>${l.icon}</span> ${c(l.label)}
            ${l.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${l.badge}</span>`:""}
          </button>`).join("")}
      </div>`:""}).join("");const r=t.map(a=>({id:a,...gt[a],items:e.filter(o=>o.group===a)})).filter(a=>a.items.length),n=(i=r.find(a=>a.items.some(o=>o.id===U))||r[0])==null?void 0:i.id;document.getElementById("council-bottom-tabs").innerHTML=`<div class="flex">${r.map(a=>{const o=a.id===n,l=a.items.reduce((p,u)=>p+(u.badge||0),0);return`
    <button type="button" class="council-nav-group-btn relative flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 min-h-[44px] ${o?"text-[var(--primary)]":"text-[var(--muted)]"}" data-group="${a.id}">
      <span class="text-xl">${a.icon}</span>
      <span class="text-[0.625rem] font-medium">${c(a.label)}</span>
      ${l?`<span class="absolute top-1 right-1/4 bg-[var(--gold)] text-white text-[0.5625rem] rounded-full w-4 h-4 flex items-center justify-center font-bold">${l}</span>`:""}
    </button>`}).join("")}</div>`,document.querySelectorAll(".council-nav-link").forEach(a=>{a.addEventListener("click",()=>{U=a.dataset.view,x()})}),document.querySelectorAll(".council-nav-group-btn").forEach(a=>{a.addEventListener("click",()=>{const o=r.find(l=>l.id===a.dataset.group);o.items.length===1?(U=o.items[0].id,xe=null,x()):(xe=xe===o.id?null:o.id,Yt(e))})});const s=e.find(a=>a.id===U);document.getElementById("council-view-title").textContent=(s==null?void 0:s.label)??"หน้าหลัก",Yt(e)}function Yt(e){const t=document.getElementById("council-mobile-sheet");if(!t)return;if(!xe){t.innerHTML="";return}const r=e.filter(n=>n.group===xe);t.innerHTML=`
    <div class="fixed inset-0 z-[70] bg-black/20" id="mobile-sheet-backdrop">
      <div class="absolute left-1/2 -translate-x-1/2" style="bottom: calc(78px + env(safe-area-inset-bottom));">
        <div class="flex flex-col-reverse gap-2 items-stretch" style="width: min(74vw, 260px);">
          ${r.map((n,s)=>`
            <button type="button" class="mobile-sheet-item text-left border ${n.id===U?"border-[var(--primary-soft-line)] bg-[var(--glass-on)] text-[var(--primary)]":"border-[var(--glass-line)] bg-[var(--glass)] text-[var(--ink)]"}
              backdrop-blur-md px-4 py-3 rounded-full text-sm font-bold flex items-center gap-3 min-h-[44px] shadow-[0_8px_22px_rgba(11,20,16,0.18)]" data-view="${n.id}">
              <span class="text-base">${n.icon}</span><span>${c(n.label)}</span>
              ${n.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${n.badge}</span>`:""}
            </button>`).join("")}
        </div>
      </div>
    </div>`,document.getElementById("mobile-sheet-backdrop").addEventListener("click",n=>{n.target.id==="mobile-sheet-backdrop"&&(xe=null,x())}),document.querySelectorAll(".mobile-sheet-item").forEach(n=>{n.addEventListener("click",()=>{U=n.dataset.view,xe=null,x()})})}function Ua(){const{applications:e,membership:t}=d;return!e.length&&!t.length?"":`
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-2xl p-5 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      <p class="text-sm font-bold mb-3">📋 สถานะของฉันในสภานักเรียน</p>
      <div class="space-y-2">
        ${t.map(r=>{var n,s;return`
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-xs text-[var(--primary-soft-line)]">ตำแหน่งปัจจุบัน</p>
            <p class="font-bold">${c(((n=r.council_positions)==null?void 0:n.position_name)??"—")} <span class="text-xs font-normal text-[var(--primary-soft-line)]">(สภา${c(D[(s=r.council_positions)==null?void 0:s.gender]??"")})</span></p>
          </div>`}).join("")}
        ${e.map(r=>{var n;return`
          <div class="bg-white/10 rounded-xl p-3 flex items-center justify-between gap-2">
            <div>
              <p class="text-xs text-[var(--primary-soft-line)]">ใบสมัคร — ${c(((n=r.council_positions)==null?void 0:n.position_name)??"—")}</p>
              <p class="text-[0.6875rem] text-[var(--primary-45)]">${new Date(r.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20">${c(fr[r.status]??r.status)}</span>
          </div>`}).join("")}
      </div>
    </div>`}function Ve(e,t,r,n){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-3">
        <p class="text-sm font-bold text-[var(--ink)]">${e}</p>
        ${r?`<button type="button" class="goto-view text-xs font-bold text-[var(--primary)] hover:underline" data-view="${r}">${c(n)} →</button>`:""}
      </div>
      ${t}
    </div>`}function Va(){return d.isChair?["ยินดีต้อนรับประธานสภานักเรียน","ดูภาพรวมงานสภา เสนอทีมงาน มอบหมายงาน และประกาศข่าวสารได้จากที่นี่"]:d.membership.length?["ยินดีต้อนรับสมาชิกสภานักเรียน","ติดตามหน้าที่ ตารางงาน และผลการประเมินของคุณ"]:d.isCouncilAdvisor?["ครูที่ปรึกษาสภานักเรียน","ดูแลใบสมัคร ตารางสัมภาษณ์ การประเมิน และเอกสารต่างๆ ของสภา"]:d.isAdmin?["จัดการระบบสภานักเรียน","ภาพรวมทั้งระบบ ตั้งค่าตำแหน่ง เกณฑ์คุณสมบัติ และมอบสิทธิ์ผู้ดูแล"]:d.role==="teacher"&&d.pendingEndorsements.length?["รับรองผู้สมัครสภานักเรียน","ตรวจสอบและรับรองใบสมัครของนักเรียนในความดูแลของคุณ"]:["ระบบสภานักเรียน","ติดตามข่าวสาร กิจกรรม ผู้สมัคร และผลการเลือกตั้งของสภานักเรียน"]}function Ya(){const e=d.cfg.council_featured_phase;if(e)return e;const t=new Date,r=d.cfg.council_apply_opens_at?new Date(d.cfg.council_apply_opens_at):null,n=d.cfg.council_apply_closes_at?new Date(d.cfg.council_apply_closes_at):null;return r&&n&&t>=r&&t<=n?"apply":d.elections.some(i=>i.opens_at&&i.closes_at&&t>=new Date(i.opens_at)&&t<=new Date(i.closes_at))?"election":"none"}function Qa(){return d.isChair?"👑 ประธานสภานักเรียน":d.membership.length?"🎫 สมาชิกสภานักเรียน":d.isCouncilAdvisor?"🏫 ครูที่ปรึกษาสภานักเรียน":d.role==="admin"?"🛡️ ผู้ดูแลระบบ (แอดมิน)":d.isAdmin?"🛡️ ผู้ดูแลระบบ (ได้รับสิทธิ์แอดมินเพิ่มเติมจากระบบหลัก ปพ.5 ออนไลน์)":d.role==="teacher"?"👨‍🏫 ครู (ยังไม่ได้รับมอบหมายเป็นครูที่ปรึกษาสภานักเรียน)":d.role==="student"?"🎓 นักเรียน":"ผู้เยี่ยมชม"}function Ja(){const e=d.cfg,t=e.council_term_start_semester&&e.council_term_start_year?`ภาคเรียนที่ ${c(e.council_term_start_semester)}/${c(e.council_term_start_year)} – ภาคเรียนที่ ${c(e.council_term_end_semester||e.council_term_start_semester)}/${c(e.council_term_end_year||e.council_term_start_year)}`:null,r=e.council_visible_to_all!=="false",[n,s]=Va(),i=d.isAdmin||d.isCouncilAdvisor?`
    <div class="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl mb-3
      ${r?"bg-[var(--ok-soft)] text-[#106143] border border-[var(--ok-soft-line)]":"bg-[var(--gold-soft)] text-[var(--gold-ink)] border border-[var(--gold-soft-line)]"}">
      <span>${r?"✅":"🔒"}</span>
      <span>${r?"ระบบเปิดให้นักเรียนทุกคนเห็นเมนูแล้ว":"ระบบยังไม่เปิดให้ทุกคนเห็น — เห็นเฉพาะแอดมิน/ผู้ทดสอบเท่านั้น"}</span>
    </div>`:"";return`
    <p class="text-[0.6875rem] text-[var(--muted-2)] mb-2">กำลังใช้งานในฐานะ: <span class="font-bold text-[var(--ink-2)]">${c(Qa())}</span></p>
    ${i}
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl p-5 sm:p-6 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      ${t?`<span class="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-3">🗓️ ห้วงปฏิบัติหน้าที่ · ${t}</span>`:""}
      <p class="text-lg sm:text-xl font-extrabold leading-snug [text-wrap:pretty]">${c(n)}</p>
      <p class="text-sm text-[var(--primary-soft-line)] mt-1.5 [text-wrap:pretty]">${c(s)}</p>
      ${d.isAdmin||d.isCouncilAdvisor||d.isChair?`
      <div class="flex flex-wrap gap-2 mt-4">
        ${d.isAdmin||d.isCouncilAdvisor?'<button type="button" class="goto-view px-4 py-2 rounded-[10px] bg-[var(--hero-btn)] text-[var(--hero-btn-fg)] text-sm font-bold hover:opacity-90" data-view="settings">⚙️ ตั้งค่าระบบ</button>':""}
        <a href="council-election.html" target="_blank" class="px-4 py-2 rounded-[10px] bg-white/10 border border-white/25 text-white text-sm font-bold hover:bg-white/20">🗳️ หน้าลงคะแนน</a>
      </div>`:""}
    </div>`}function Ka(){if(F===null)return jr(),Ve("📅 กิจกรรมประจำปี",'<p class="text-sm text-[var(--muted-2)] text-center py-8">⏳ กำลังโหลด...</p>');const e={};F.forEach(s=>{e[s.status]=(e[s.status]??0)+1});const t=`
    <div class="grid grid-cols-4 gap-2 mb-3">
      ${Lr.map(([s,i,a,o])=>`
        <div class="rounded-[10px] border ${a} p-2 text-center">
          <p class="text-lg font-bold ${o}">${e[s]??0}</p>
          <p class="text-[0.625rem] text-[var(--muted)]">${i}</p>
        </div>`).join("")}
    </div>`,r=[...F].sort((s,i)=>new Date(s.activity_date||0)-new Date(i.activity_date||0)).slice(0,5),n=r.length?`
    <div class="space-y-0.5">
      ${r.map(s=>{const[i,a,o]=Cr[s.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]"];return`
        <div class="flex items-center justify-between gap-2 py-1.5 border-b border-[var(--line-soft)] last:border-0">
          <div class="min-w-0">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${c(s.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${s.activity_date?new Date(s.activity_date).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"}):"—"} ${s.owner_text?"· "+c(s.owner_text):""}</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-1 rounded-full ${o} ${a}">${i}</span>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีกิจกรรม</p>';return Ve("📅 กิจกรรมประจำปี",t+n,"activities","ดูทั้งหมด")}function Xa(){const e=["M","W"].map(r=>d.members.find(n=>{var s,i;return n.status==="active"&&((s=n.council_positions)==null?void 0:s.gender)===r&&((i=n.council_positions)==null?void 0:i.is_elected)})),t=e.some(Boolean)?`
    <div class="space-y-3">
      ${e.map((r,n)=>{var a,o,l;const s=n===0?"M":"W";if(!r)return`<div class="rounded-xl border border-dashed border-[var(--line)] p-3 text-center text-xs text-[var(--muted-2)]">ยังไม่มีประธานสภา${D[s]}</div>`;const i=s==="W";return`
        <div class="flex items-center gap-3 rounded-xl border p-3 ${i?"bg-[var(--pink-soft)] border-[var(--pink-soft-line)]":"bg-[var(--primary-soft)] border-[var(--primary-soft-line)]"}">
          ${N(r.students,"w-12 h-16")}
          <div class="min-w-0">
            <p class="text-[0.6875rem] font-bold ${i?"text-[var(--pink)]":"text-[var(--primary)]"}">${c(((a=r.council_positions)==null?void 0:a.position_name)??"ประธานสภานักเรียนฝ่าย"+D[s])}</p>
            <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((o=r.students)==null?void 0:o.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${c(((l=r.students)==null?void 0:l.main_room)??"")}</p>
          </div>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีสภานักเรียนชุดปัจจุบัน</p>';return Ve("🏛️ สภานักเรียนชุดปัจจุบัน",t,"roster","ดูโครงสร้าง")}function Za(){if(!d.isAdmin&&!d.isExecutive)return"";if(L===null)return Mt(),Ve("📋 การสมัครสภานักเรียน",'<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p>');const e=L.length,t=L.filter(a=>a.endorsed_at).length,r=L.filter(a=>a.peer_endorsed_at||qe(a)).length,n=L.filter(a=>a.status==="candidate").length,s=(a,o,l)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${l}">${c(a)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${c(o)}</p>
    </div>`,i=`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      ${s(e,"สมัครแล้วทั้งหมด","var(--ink)")}
      ${s(t,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
      ${_e()?s(r,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):s("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
      ${s(n,"ว่าที่สภานักเรียน","var(--primary)")}
    </div>`;return Ve("📋 การสมัครสภานักเรียน",i,"dashboard","ดูรายละเอียด")}function wr(){const e=Ja(),t=Ua(),r=(b,h,f,m)=>`
    <button type="button" class="flow-entry-btn bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-center hover:border-[var(--primary-70)] hover:shadow-[0_4px_12px_rgba(23,32,42,0.07)] transition" data-flow="${b}">
      <p class="text-2xl mb-1">${h}</p>
      <p class="text-sm font-bold text-[var(--primary-dark)]">${c(f)}</p>
      ${m?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${c(m)}</p>`:""}
    </button>`,n=(b,h,f,m)=>`
    <button type="button" class="flow-entry-btn w-full bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl shadow-[0_4px_14px_rgba(23,32,42,0.15)] p-4 text-left text-white hover:opacity-95 transition flex items-center gap-3" data-flow="${b}">
      <p class="text-3xl flex-shrink-0">${h}</p>
      <div class="min-w-0 flex-1">
        <span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-white/20 mb-1">🔥 ช่วงนี้</span>
        <p class="text-base font-extrabold [text-wrap:pretty]">${c(f)}</p>
        ${m?`<p class="text-xs text-white/85 mt-0.5 [text-wrap:pretty]">${c(m)}</p>`:""}
      </div>
      <span class="text-white/70 flex-shrink-0">→</span>
    </button>`,s=d.elections.length>0,i=s||d.isAdmin,a=d.role==="student",o=s?"การเลือกตั้ง":"ตั้งค่าการเลือกตั้ง",l=s?"":"ยังไม่เปิดใช้งาน — แตะเพื่อตั้งค่า",p=a&&i?Ya():"none";let u="";if(a&&i&&p!=="none"){const b=p==="apply"?n("apply","📝","สมัครสภานักเรียน","เปิดรับสมัครสภานักเรียนวาระใหม่"):r("apply","📝","สมัครสภานักเรียน"),h=p==="election"?n("election","🗳️",o,l||"เปิดใช้งานอยู่ ณ ขณะนี้"):r("election","🗳️",o,l);u=`<div class="space-y-3">${p==="apply"?b+h:h+b}</div>`}else(a||i)&&(u=`
    <div class="grid ${a&&i?"grid-cols-2":"grid-cols-1"} gap-3">
      ${a?r("apply","📝","สมัครสภานักเรียน"):""}
      ${i?r("election","🗳️",o,l):""}
    </div>`);return`<div class="space-y-4">
    ${e}
    ${t}
    ${Za()}
    ${u}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      ${Ka()}
      ${Xa()}
    </div>
  </div>`}function es(){if(d.role!=="student")return"";if(!d.student)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ยังไม่ได้เชื่อมบัญชีกับข้อมูลนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;const e=ce(d.student.gender),t=d.positions.filter(i=>i.gender===e),r=new Set(d.applications.filter(i=>i.status!=="rejected").map(i=>i.position_id)),n=t.filter(i=>!r.has(i.id));if(!e)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;if(!ct)return`
      <button id="btn-open-apply" type="button"
        class="w-full bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-left hover:border-[var(--primary-70)] transition flex items-center justify-between gap-3 ${n.length?"":"opacity-50 pointer-events-none"}">
        <div>
          <p class="text-sm font-bold text-[var(--primary-dark)]">📝 สมัครสภานักเรียน${D[e]}</p>
          <p class="text-xs text-[var(--muted-2)] mt-0.5">${n.length?`เปิดรับ ${n.length} ตำแหน่ง`:"ไม่มีตำแหน่งเปิดรับ (สมัครครบแล้ว หรือยังไม่เปิดรับ)"}</p>
        </div>
        <span class="text-[var(--primary-70)]">→</span>
      </button>`;const s=R?ts():B===1?ns(n):B===2?as():B===3?ss():B===4?is():B===5?os():ls(e);return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4">
      <div class="flex items-center justify-between mb-1">
        <p class="text-sm font-bold text-[var(--primary-dark)]">📝 ใบสมัครสภานักเรียน${D[e]}</p>
        <button type="button" id="btn-cancel-apply" class="text-xs text-[var(--muted)] hover:text-[var(--bad)]">ยกเลิก ✕</button>
      </div>
      ${R?"":rs()}
      ${s}
    </div>
    ${he?ds():""}`}function ts(){const e=kt()[R.step-1]??"",t=R.savedAt?new Date(R.savedAt).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"";return`
    <div class="text-center py-4 space-y-3">
      <p class="text-3xl">📝</p>
      <p class="text-sm font-bold text-[var(--ink)]">พบข้อมูลที่กรอกค้างไว้</p>
      <p class="text-xs text-[var(--muted-2)]">กรอกถึงขั้นตอนที่ ${R.step}/${kt().length} · ${c(e)}${t?` · บันทึกล่าสุด ${t}`:""}</p>
      <p class="text-[0.6875rem] text-[var(--gold-ink)] bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-2.5 text-left">⚠️ รูปถ่าย/ไฟล์เกียรติบัตรที่เคยแนบไว้ต้องแนบใหม่อีกครั้ง (เบราว์เซอร์เก็บไฟล์ข้ามการปิดหน้าไม่ได้) ส่วนข้อความอื่นๆ กู้คืนให้ครบ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-draft-discard" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">เริ่มใหม่</button>
        <button type="button" id="btn-apply-draft-resume" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">กู้คืนข้อมูล</button>
      </div>
    </div>`}const Qt=["เลือกตำแหน่ง","เกรดเฉลี่ย & แรงจูงใจ","รูปถ่าย","วิดีโอแนะนำตัว","เกียรติบัตร/รางวัล"];function Bt(){return d.cfg.council_require_peer_endorsement==="true"}function kt(){return Bt()?[...Qt,"เลือกพี่สภารับรอง"]:Qt}function rs(){const e=kt();return`
    <div class="flex items-center gap-1.5 mb-3">
      ${e.map((t,r)=>`<div class="flex-1 h-1.5 rounded-full ${r+1<=B?"bg-[var(--primary)]":"bg-[var(--line-soft)]"}"></div>`).join("")}
    </div>
    <p class="text-xs font-bold text-[var(--muted)] mb-3">ขั้นตอนที่ ${B}/${e.length} · ${e[B-1]}</p>`}function ns(e){return`
    <form id="apply-step1-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ตำแหน่งที่สมัคร <span class="text-[var(--bad)]">*</span></label>
        <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— เลือกตำแหน่ง —</option>
          ${e.map(t=>`<option value="${t.id}" ${C.positionId===String(t.id)?"selected":""}>${c(t.position_name)}</option>`).join("")}
        </select>
        ${e.length?"":'<p class="text-xs text-[var(--gold-ink)] mt-1.5">ไม่มีตำแหน่งเปิดรับในขณะนี้</p>'}
      </div>
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${e.length?"":"disabled"}>ถัดไป →</button>
    </form>`}function as(){const e=d.cfg.council_min_gpa||"2.50",t=d.cfg.council_min_gpa_religious||"2.50";return`
    <form id="apply-step2-form" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยสามัญ <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaGeneral" type="number" step="0.01" min="0" max="4" required value="${c(C.gpaGeneral)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${c(e)}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยศาสนา <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaReligious" type="number" step="0.01" min="0" max="4" required value="${c(C.gpaReligious)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${c(t)}</p>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">แรงจูงใจ / นโยบาย <span class="text-[var(--bad)]">*</span></label>
        <textarea name="motivation" required rows="4" placeholder="เล่าเหตุผลที่อยากสมัคร หรือแนวทางที่จะทำถ้าได้รับเลือก (อย่างน้อย 10 ตัวอักษร)"
          class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(C.motivation)}</textarea>
      </div>
      <div class="flex gap-2">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`}function ss(){return`
    <div class="space-y-3">
      <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">รูปถ่าย <span class="text-[var(--bad)]">*</span></label>
      ${X?`<img src="${X}" class="w-24 h-32 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)]" />`:""}
      <input id="apply-photo" type="file" accept="image/*" class="w-full text-xs" />
      <p class="text-[0.6875rem] text-[var(--muted-2)]">ใช้รูปหน้าตรง ชัดเจน — ระบบจะย่อขนาดให้อัตโนมัติ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step3-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </div>`}function is(){const e=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),t=d.cfg.council_video_max_minutes||"3";return`
    <form id="apply-step4-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ลิงก์วิดีโอแนะนำตัว <span class="text-[var(--bad)]">*</span></label>
        <input name="videoUrl" type="url" required placeholder="https://..." value="${c(C.videoUrl)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ความยาวไม่เกิน ${c(t)} นาที (ลิงก์ YouTube/Google Drive/TikTok ที่เปิดดูได้)</p>
      </div>
      ${e.length?`
        <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3">
          <p class="text-xs font-bold text-[var(--primary-dark)] mb-1.5">🎬 หัวข้อที่ควรพูดถึงในวิดีโอ</p>
          <ul class="text-xs text-[var(--ink-2)] space-y-1 list-disc list-inside">
            ${e.map(r=>`<li>${c(r)}</li>`).join("")}
          </ul>
        </div>`:""}
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`}function os(){const e=M.filter(n=>n.file&&n.title.trim()).length,t=Me(),r=(n,s)=>`
    <div class="rounded-xl border border-[var(--line)] p-3 space-y-2" data-cert-idx="${s}">
      <div class="flex items-center justify-between">
        <p class="text-xs font-bold text-[var(--muted)]">รายการที่ ${s+1}</p>
        ${M.length>1?`<button type="button" class="btn-remove-cert text-xs text-[var(--bad)]" data-idx="${s}">🗑️ ลบ</button>`:""}
      </div>
      <input type="text" class="cert-title-input w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"
        placeholder="ชื่อรางวัล/กิจกรรม เช่น รางวัลชนะเลิศการแข่งขันโต้วาทีระดับจังหวัด" data-idx="${s}" value="${c(n.title)}" />
      <div class="flex items-center gap-2">
        ${n.file?n.isPdf?'<span class="w-10 h-10 rounded-lg bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-lg flex-shrink-0">📄</span>':`<img src="${n.previewUrl}" class="w-10 h-10 rounded-lg object-cover border border-[var(--line)] flex-shrink-0" />`:""}
        <input type="file" accept="image/*,.pdf,application/pdf" class="cert-file-input text-xs flex-1 min-w-0" data-idx="${s}" />
      </div>
    </div>`;return`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เกียรติบัตร/รางวัลจากการแข่งขันหรือกิจกรรมนอกโรงเรียน <span class="text-[var(--bad)]">*</span></label>
        <p class="text-[0.6875rem] ${e>=t?"text-[var(--ok)]":"text-[var(--muted-2)]"}">แนบได้ทั้งรูปภาพและไฟล์ PDF — ต้องมีอย่างน้อย ${t} รายการ (ตอนนี้ครบ ${e}/${t})</p>
      </div>
      <div class="space-y-2.5">${M.map(r).join("")}</div>
      <button type="button" id="btn-add-cert" class="w-full py-2 rounded-xl border border-dashed border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]">＋ เพิ่มรายการ</button>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step5-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">${Bt()?"ถัดไป →":"ตรวจสอบและยืนยัน →"}</button>
      </div>
    </div>`}function ls(e){const t=(d.members||[]).filter(n=>{var s;return((s=n.council_positions)==null?void 0:s.gender)===e&&n.student_id!==d.student.id}).sort((n,s)=>{var i,a;return(((i=n.council_positions)==null?void 0:i.sort_order)??0)-(((a=s.council_positions)==null?void 0:a.sort_order)??0)});if(!t.length)return`
      <div class="space-y-3">
        <div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-3 text-xs text-[var(--gold-ink)]">
          ⚠️ ตอนนี้ยังไม่มีสมาชิกสภานักเรียน${D[e]}ในระบบให้เลือกเป็นผู้รับรอง กรุณาติดต่อครูที่ปรึกษาสภาหรือผู้ดูแลระบบ
        </div>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        </div>
      </div>`;const r=n=>{var s,i,a;return`
    <button type="button" class="btn-pick-peer-endorser w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(C.peerEndorserId)===String(n.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${n.id}">
      ${N(n.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((s=n.students)==null?void 0:s.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${c(((i=n.council_positions)==null?void 0:i.position_name)??"—")} · ${c(((a=n.students)==null?void 0:a.main_room)??"—")}</p>
      </div>
      ${String(C.peerEndorserId)===String(n.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`};return`
    <div class="space-y-3">
      <p class="text-xs text-[var(--muted-2)]">เลือกสมาชิกสภานักเรียน${D[e]}ที่ต้องการให้เป็นผู้รับรองใบสมัครของคุณ — ใบสมัครจะรอเฉพาะคนที่เลือกเท่านั้น</p>
      <div class="space-y-2 max-h-96 overflow-y-auto">${t.map(r).join("")}</div>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step6-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${C.peerEndorserId?"":"disabled"}>ตรวจสอบและยืนยัน →</button>
      </div>
    </div>`}function ds(){var n;const e=d.positions.find(s=>s.id===Number(C.positionId)),t=d.student,r=C.peerEndorserId?(d.members||[]).find(s=>String(s.id)===String(C.peerEndorserId)):null;return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="apply-confirm-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
        <p class="text-base font-bold text-[var(--ink)] mb-3">📋 ตรวจสอบก่อนส่งใบสมัคร</p>
        <div class="space-y-2.5 text-sm">
          <div class="flex items-center gap-3 pb-2.5 border-b border-[var(--line-soft)]">
            ${X?`<img src="${X}" class="w-12 h-16 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)] flex-shrink-0" />`:""}
            <div class="min-w-0">
              <p class="font-bold text-[var(--ink)] truncate">${c((t==null?void 0:t.full_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${c((t==null?void 0:t.student_code)??"")} · ${c((t==null?void 0:t.main_room)??"")}</p>
            </div>
          </div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">ตำแหน่ง</span><span class="font-bold text-[var(--ink)] text-right">${c((e==null?void 0:e.position_name)??"—")}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดสามัญ</span><span class="font-bold text-[var(--ink)]">${c(C.gpaGeneral)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดศาสนา</span><span class="font-bold text-[var(--ink)]">${c(C.gpaReligious)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">รูปถ่าย</span><span class="font-bold ${ve?"text-[var(--ok)]":"text-[var(--bad)]"}">${ve?"✅ แนบแล้ว":"❌ ยังไม่ได้แนบ"}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">วิดีโอ</span><span class="font-bold text-[var(--ink)] truncate">${c(C.videoUrl)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกียรติบัตร/รางวัล</span><span class="font-bold text-[var(--ok)]">✅ ${M.filter(s=>s.file&&s.title.trim()).length} รายการ</span></div>
          ${r?`<div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">พี่สภาที่ขอให้รับรอง</span><span class="font-bold text-[var(--ink)] text-right">${c(((n=r.students)==null?void 0:n.full_name)??"—")}</span></div>`:""}
          <div>
            <p class="text-[var(--muted)] mb-1">แรงจูงใจ</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${c(C.motivation)}</p>
          </div>
        </div>
        <div class="flex gap-2 pt-4 mt-3 border-t border-[var(--line-soft)]">
          <button type="button" id="btn-apply-edit" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">✏️ แก้ไข</button>
          <button type="button" id="btn-apply-confirm-submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✅ ยืนยันการสมัคร</button>
        </div>
      </div>
    </div>`}function cs(){return d.student?!d.applications.length&&!d.membership.length?'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่เคยสมัครสภานักเรียน</p>':`
    <div class="space-y-2">
      ${d.membership.map(e=>{var t,r;return`
        <div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-xl p-3">
          <p class="text-xs text-[var(--ok)] font-bold">ตำแหน่งปัจจุบัน</p>
          <p class="text-sm font-bold text-[#0d4d36]">${c(((t=e.council_positions)==null?void 0:t.position_name)??"—")} <span class="text-xs font-normal">(สภา${c(D[(r=e.council_positions)==null?void 0:r.gender]??"")})</span></p>
        </div>`}).join("")}
      ${d.applications.map(e=>{var t;return`
        <div class="bg-[var(--surface)] rounded-xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <div class="min-w-0">
              <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((t=e.council_positions)==null?void 0:t.position_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--bg-2)] text-[var(--ink-2)]">${c(fr[e.status]??e.status)}</span>
          </div>
          <button type="button" class="btn-view-my-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">📄 ดูใบสมัคร</button>
        </div>`}).join("")}
    </div>
    ${_s()}`:""}function Nt(e){return d.elections.find(t=>t.gender===e&&t.academic_year===P)||null}async function $r(e,t){ue[e]=await At(t).catch(()=>[]),x()}async function us(e,t){const[r,n]=await Promise.all([br(t).catch(()=>({})),yt(e).catch(()=>0)]);wt[e]={tally:r,eligible:n},x()}function kr(){return`<div class="space-y-4">${["M","W"].map(ps).join("")}</div>`}function ps(e){var f;const t=Nt(e),r=d.student?ce(d.student.gender):null,n=d.role==="student"&&r===e;if(!t)return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🗳️ สภา${D[e]}</p>
        <p class="text-xs text-[var(--muted-2)]">ยังไม่เปิดการเลือกตั้ง</p>
        ${d.isAdmin||d.isCouncilAdvisor?`<button type="button" class="btn-create-election mt-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-gender="${e}">เปิดใช้งานการเลือกตั้ง</button>`:""}
      </div>`;const s=new Date,i=t.opens_at?new Date(t.opens_at):null,a=t.closes_at?new Date(t.closes_at):null,o=!!(i&&i<=s&&(!a||a>s)),l=!!(a&&a<=s),p=!!t.results_published_at,u=p?{label:"✅ ประกาศผลแล้ว",cls:"bg-[var(--ok-soft-line)] text-[#106143]"}:l?{label:"🔒 ปิดโหวตแล้ว รอประกาศผล",cls:"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}:o?{label:"🗳️ กำลังเปิดโหวต",cls:"bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"}:{label:"⏳ ยังไม่เปิดโหวต",cls:"bg-[var(--bg-2)] text-[var(--muted)]"};let b="";if(p){ue[e]===void 0&&$r(e,t.id),wt[e]||us(e,t.id);const m=d.members.find(A=>{var _,w;return((_=A.council_positions)==null?void 0:_.gender)===e&&((w=A.council_positions)==null?void 0:w.is_elected)}),v=m?`
      <div class="flex items-center gap-3 bg-[var(--ok-soft)] rounded-xl p-3 mt-2">
        ${N(m.students,"w-12 h-16")}
        <div class="min-w-0">
          <p class="text-[0.6875rem] text-[var(--ok)] font-bold">ผู้ได้รับเลือกตั้ง</p>
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((f=m.students)==null?void 0:f.full_name)??"—")}</p>
        </div>
      </div>`:'<p class="text-xs text-[var(--muted-2)] mt-2">ประกาศผลแล้ว</p>',E=wt[e],I=ue[e];let j="";if(E&&(I!=null&&I.length)){const A=Object.values(E.tally).reduce(($,S)=>$+S,0),_=E.eligible?Math.round(A/E.eligible*100):0;j=`
        <div class="mt-3 space-y-2">
          ${I.slice().sort(($,S)=>(E.tally[S.id]??0)-(E.tally[$.id]??0)).map($=>{var T;const S=E.tally[$.id]??0,q=A?Math.round(S/A*100):0;return`
              <div class="text-xs">
                <div class="flex justify-between mb-0.5"><span class="text-[var(--ink-2)] truncate">${c(((T=$.students)==null?void 0:T.full_name)??"—")}</span><span class="font-bold text-[var(--ink)] flex-shrink-0">${S} คะแนน</span></div>
                <div class="h-2 rounded-full bg-[var(--bg-2)] overflow-hidden"><div class="h-full bg-[var(--primary)]" style="width:${q}%"></div></div>
              </div>`}).join("")}
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-2">👥 ผู้มีสิทธิ์ ${E.eligible} คน · ใช้สิทธิ์ ${A} คน (${_}%)</p>`}b=v+j}else o&&n?b=`
      <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3 mt-2 text-center">
        <p class="text-xs font-bold text-[var(--primary-dark)]">🗳️ กำลังเปิดโหวต — ไปลงคะแนนที่จุดที่โรงเรียนจัดไว้</p>
        <p class="text-[0.6875rem] text-[var(--muted)] mt-1">โหวตผ่านมือถือ/บัญชีตัวเองไม่ได้ ต้องกรอกรหัสนักเรียนที่หน้าจอ ณ จุดลงคะแนนซึ่งมีครูดูแล</p>
      </div>`:l&&!p?b='<p class="text-xs text-[var(--muted-2)] mt-2">รอผู้ดูแลระบบประกาศผล</p>':!o&&!l&&(b=`<p class="text-xs text-[var(--muted-2)] mt-2">${t.opens_at?"เปิดโหวต "+new Date(t.opens_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):""}</p>`);let h="";return(d.isAdmin||d.isCouncilAdvisor)&&(h=`
      <div class="mt-3 pt-3 border-t border-[var(--line-soft)] space-y-2">
        <form class="election-window-form flex flex-wrap gap-2 items-end" data-election-id="${t.id}">
          <label class="text-[0.6875rem] text-[var(--muted-2)]">เปิดโหวต<br><input type="datetime-local" name="opens_at" value="${t.opens_at?t.opens_at.slice(0,16):""}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <label class="text-[0.6875rem] text-[var(--muted-2)]">ปิดโหวต<br><input type="datetime-local" name="closes_at" value="${t.closes_at?t.closes_at.slice(0,16):""}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <button type="submit" class="px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] text-xs font-bold">บันทึกช่วงเวลา</button>
        </form>
        ${l&&!p?`<button type="button" class="btn-publish-results px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-election-id="${t.id}" data-gender="${e}">📢 ประกาศผล+แต่งตั้ง</button>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">🔗 หน้าโหวต (เปิดที่จุดลงคะแนนเท่านั้น): <a href="council-election.html" target="_blank" class="text-[var(--primary)] underline">council-election.html</a></p>
      </div>`),`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between gap-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">🗳️ สภา${D[e]}</p>
        <span class="text-xs font-bold px-2.5 py-1 rounded-full ${u.cls}">${u.label}</span>
      </div>
      ${b}
      ${h}
    </div>`}function ms(e,t){var i,a,o,l,p,u,b;const r=e.photo_url||((i=e.students)==null?void 0:i.image_url)||((a=e.students)==null?void 0:a.photo_url),n=(o=e.council_applications)==null?void 0:o.gpa_general,s=(l=e.council_applications)==null?void 0:l.gpa_religious;return`
    <button type="button" class="candidate-card-btn text-left rounded-2xl overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] shadow-[0_4px_12px_rgba(23,32,42,0.07)] hover:border-[var(--primary-45)] transition" data-gender="${t}" data-id="${e.id}">
      <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
        ${r?`<img src="${c(r)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-4xl font-bold text-[var(--primary-70)]">${c((((p=e.students)==null?void 0:p.full_name)||"?").charAt(0))}</div>`}
        <div class="absolute top-2 left-2 min-w-[2.25rem] h-9 px-1.5 rounded-full bg-[var(--surface)]/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold text-base shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${e.ballot_number}</div>
      </div>
      <div class="p-3">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((u=e.students)==null?void 0:u.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)]">${c(((b=e.students)==null?void 0:b.main_room)??"")}</p>
        ${n!=null||s!=null?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">เกรดสามัญ ${c(n??"—")} · ศาสนา ${c(s??"—")}</p>`:""}
        ${e.slogan?`<p class="text-xs text-[var(--primary-dark)] font-semibold mt-1.5 line-clamp-2">"${c(e.slogan)}"</p>`:""}
      </div>
    </button>`}function bs(){const e=t=>{const r=Nt(t),n=`<p class="text-xs font-bold text-[var(--muted-2)] mb-2">สภา${D[t]}</p>`;if(!r)return`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่เปิดรับผู้สมัคร</p></div>`;const s=ue[t];return s===void 0?($r(t,r.id),`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>`):s.length?`
      <div>
        ${n}
        <div class="grid grid-cols-2 gap-3">${s.map(i=>ms(i,t)).join("")}</div>
      </div>`:`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีผู้สมัคร</p></div>`};return`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">${e("M")}${e("W")}</div>${vs()}`}function vs(){var p,u,b,h,f,m,v,E;if(!$e)return"";const{gender:e,id:t}=$e,r=(ue[e]||[]).find(I=>I.id===t);if(!r)return"";const n=d.isAdmin||d.isCouncilAdvisor,s=Array.isArray(r.policies)?r.policies:[],i=Array.isArray(r.experience)?r.experience:[],a=r.photo_url||((p=r.students)==null?void 0:p.image_url)||((u=r.students)==null?void 0:u.photo_url),o=(b=r.council_applications)==null?void 0:b.gpa_general,l=(h=r.council_applications)==null?void 0:h.gpa_religious;return me?`
      <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="candidate-modal-backdrop">
        <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
          <p class="text-base font-bold text-[var(--ink)] mb-3">✏️ แก้ไขโปรไฟล์ผู้สมัคร — ${c(((f=r.students)==null?void 0:f.full_name)??"")}</p>
          <form id="candidate-edit-form" class="space-y-2.5" data-candidate-id="${r.id}">
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">สโลแกน</label>
              <input name="slogan" value="${c(r.slogan??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">วิสัยทัศน์</label>
              <textarea name="vision" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(r.vision??"")}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">นโยบาย (บรรทัดละ 1 ข้อ)</label>
              <textarea name="policies" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(s.join(`
`))}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน (บรรทัดละ 1 ข้อ)</label>
              <textarea name="experience" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(i.join(`
`))}</textarea>
            </div>
            <div class="flex gap-2 pt-2">
              <button type="button" id="btn-candidate-cancel-edit" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
              <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
            </div>
          </form>
        </div>
      </div>`:`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="candidate-modal-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto">
        <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
          ${a?`<img src="${c(a)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${c((((m=r.students)==null?void 0:m.full_name)||"?").charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${r.ballot_number}</div>
          <button type="button" id="btn-candidate-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${c(((v=r.students)==null?void 0:v.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${c(((E=r.students)==null?void 0:E.main_room)??"")}${o!=null||l!=null?` · เกรดสามัญ ${c(o??"—")} · ศาสนา ${c(l??"—")}`:""}</p>
          </div>
          ${r.slogan?`<p class="text-sm font-bold text-[var(--primary-dark)]">"${c(r.slogan)}"</p>`:""}
          ${r.vision?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${c(r.vision)}</p></div>`:""}
          ${s.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${s.map(I=>`<li>${c(I)}</li>`).join("")}</ul></div>`:""}
          ${i.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${i.map(I=>`<li>${c(I)}</li>`).join("")}</ul></div>`:""}
          ${!r.slogan&&!r.vision&&!s.length&&!i.length?'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>':""}
          ${n?'<button type="button" id="btn-candidate-edit" class="w-full py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mt-2">✏️ แก้ไขโปรไฟล์</button>':""}
        </div>
      </div>
    </div>`}const Er={pending:["รอนัดสัมภาษณ์","bg-[var(--bg-2)] text-[var(--muted)]"],interview_scheduled:["นัดสัมภาษณ์แล้ว รอให้คะแนน","bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"],interviewed:["ผ่านสัมภาษณ์","bg-[var(--ok-soft-line)] text-[#106143]"],candidate:["ผู้สมัครเลือกตั้ง","bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"],appointed:["แต่งตั้งแล้ว","bg-[#e3f1ef] text-[var(--teal)]"],rejected:["ไม่ผ่าน","bg-[var(--bad-soft-line)] text-[#8a2f22]"]},Sr={M:"bg-[#edf4f0] text-[#14563b]",W:"bg-[#fdeef4] text-[#a3134f]"},Et=[{id:"all",label:"ทั้งหมด"},{id:"awaiting_endorsement",label:"รอรับรอง"},{id:"endorsed",label:"รับรองแล้ว"},{id:"scheduled",label:"นัดแล้ว"},{id:"interviewed",label:"ผ่านสัมภาษณ์"},{id:"rejected",label:"ไม่ผ่าน"}];function _e(){return d.cfg.council_require_peer_endorsement==="true"}function qe(e){var r;const t=((r=e.students)==null?void 0:r.id)??e.student_id;return!!t&&d.members.some(n=>n.student_id===t)}function We(e){return!_e()||qe(e)?!0:!!e.peer_endorsed_at}function xs(e){const t=[];return e.endorsed_at||t.push("รอครูที่ปรึกษาสามัญรับรอง"),We(e)||t.push("รอสมาชิกสภาปัจจุบัน (เพศเดียวกัน) รับรอง"),t.join(" และ")}function Jt(e){var r;return((r=((e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||"").match(/^(ม\.\d+|ปวช\.\d+)/))==null?void 0:r[1])??null}function st(e){return e.status==="rejected"?"rejected":e.status==="pending"?e.endorsed_at&&We(e)?"endorsed":"awaiting_endorsement":e.status==="interview_scheduled"?"scheduled":"interviewed"}async function Mt(){L=await In(P).catch(()=>[]),x()}async function Ar(){te=await Yr().catch(()=>[]),x()}function fs(e){const t=te==null?void 0:te.find(r=>r.id===e);return t?`${t.full_name} · รหัส ${t.id}`:""}function gs(e){if(!e)return"";const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);if(t)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${c(t[1])}" allowfullscreen loading="lazy"></iframe></div>`;const r=e.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)||e.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);if(r)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://drive.google.com/file/d/${c(r[1])}/preview" allowfullscreen loading="lazy"></iframe></div>`;const n=e.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);return n?`<div class="rounded-xl overflow-hidden bg-black" style="aspect-ratio:9/16;max-width:280px;margin:0 auto;"><iframe class="w-full h-full" src="https://www.tiktok.com/embed/v2/${c(n[1])}" allowfullscreen loading="lazy"></iframe></div>`:`<a href="${c(e)}" target="_blank" rel="noopener" class="block text-center py-3 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold hover:bg-[var(--primary-soft)]">🎬 เปิดดูวิดีโอแนะนำตัว (แท็บใหม่ — แพลตฟอร์มนี้ไม่รองรับฝังดูในหน้า)</a>`}function qr(){if(!Re)return"";const e=L==null?void 0:L.find(t=>t.id===Re);return e?Ir(e,e.students,{closeId:"btn-admin-app-detail-close",backdropId:"admin-app-detail-backdrop"}):""}function _s(){var t;if(!He)return"";const e=(t=d.applications)==null?void 0:t.find(r=>r.id===He);return e?Ir(e,d.student,{closeId:"btn-my-app-detail-close",backdropId:"my-app-detail-backdrop",isOwner:!0}):""}function ys(e,t){var a,o;(a=document.getElementById("peer-endorser-picker-modal"))==null||a.remove();const r=(o=d.applications)==null?void 0:o.find(l=>l.id===e),n=(d.members||[]).filter(l=>{var p;return((p=l.council_positions)==null?void 0:p.gender)===t&&l.student_id!==d.student.id}).sort((l,p)=>{var u,b;return(((u=l.council_positions)==null?void 0:u.sort_order)??0)-(((b=p.council_positions)==null?void 0:b.sort_order)??0)}),s=l=>{var p,u,b;return`
    <button type="button" class="btn-peer-picker-choose w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(r==null?void 0:r.requested_peer_endorser_id)===String(l.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${l.id}">
      ${N(l.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((p=l.students)==null?void 0:p.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${c(((u=l.council_positions)==null?void 0:u.position_name)??"—")} · ${c(((b=l.students)==null?void 0:b.main_room)??"—")}</p>
      </div>
      ${String(r==null?void 0:r.requested_peer_endorser_id)===String(l.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`},i=document.createElement("div");i.id="peer-endorser-picker-modal",i.className="fixed inset-0 z-[85] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",i.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
      <div class="flex items-start justify-between gap-3 mb-3">
        <p class="text-base font-bold text-[var(--ink)]">🙋 เลือกพี่สภาที่ต้องการให้รับรอง</p>
        <button type="button" id="btn-peer-picker-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      ${n.length?`<div class="space-y-2">${n.map(s).join("")}</div>`:`<p class="text-sm text-[var(--muted-2)] text-center py-8">ยังไม่มีสมาชิกสภานักเรียน${D[t]??""}ในระบบให้เลือก</p>`}
    </div>`,document.body.appendChild(i),i.addEventListener("click",l=>{l.target===i&&i.remove()}),i.querySelector("#btn-peer-picker-close").addEventListener("click",()=>i.remove()),i.querySelectorAll(".btn-peer-picker-choose").forEach(l=>{l.addEventListener("click",async()=>{l.disabled=!0;try{await An({applicationId:e,memberId:Number(l.dataset.id)}),await yr(),g("เลือกพี่สภาที่ต้องการให้รับรองแล้ว ✅","success"),i.remove(),x()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error"),l.disabled=!1}})})}function Ir(e,t,{closeId:r,backdropId:n,isOwner:s=!1}){var a,o,l,p,u,b,h,f,m,v;const i=Sr[(a=e.council_positions)==null?void 0:a.gender]??"bg-[var(--bg-2)] text-[var(--muted)]";return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="${n}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-lg w-full max-h-[85vh] overflow-y-auto p-5">
        <div class="flex items-start justify-between gap-3 mb-3">
          <p class="text-base font-bold text-[var(--ink)]">📄 ใบสมัครสภานักเรียน</p>
          <button type="button" id="${r}" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center gap-3 pb-3 border-b border-[var(--line-soft)]">
          ${N(t,"w-16 h-20")}
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <p class="font-bold text-[var(--ink)] truncate">${c((t==null?void 0:t.full_name)??"—")}</p>
              <span class="text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${i}">${c(D[(o=e.council_positions)==null?void 0:o.gender]??"—")}</span>
            </div>
            <p class="text-xs text-[var(--muted-2)]">${c((t==null?void 0:t.student_code)??"")} · ${c((t==null?void 0:t.main_room)??"")}</p>
            <p class="text-xs text-[var(--primary)] font-semibold mt-0.5">${c(((l=e.council_positions)==null?void 0:l.position_name)??"—")}</p>
          </div>
        </div>
        <div class="space-y-3 pt-3 text-sm">
          <div class="grid grid-cols-2 gap-2">
            <div class="rounded-xl bg-[var(--surface-2)] p-2.5"><p class="text-[0.6875rem] text-[var(--muted)]">เกรดสามัญ</p><p class="font-bold text-[var(--ink)]">${c(e.gpa_general??"—")}</p></div>
            <div class="rounded-xl bg-[var(--surface-2)] p-2.5"><p class="text-[0.6875rem] text-[var(--muted)]">เกรดศาสนา</p><p class="font-bold text-[var(--ink)]">${c(e.gpa_religious??"—")}</p></div>
          </div>
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">แรงจูงใจ / นโยบาย</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-xl p-3 whitespace-pre-line">${c(e.motivation||"—")}</p>
          </div>
          ${e.intro_video_url?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🎬 วิดีโอแนะนำตัว</p>
            ${gs(e.intro_video_url)}
          </div>`:""}
          ${(p=e.certificates)!=null&&p.length?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1.5">🏅 เกียรติบัตร/รางวัล (${e.certificates.length} รายการ)</p>
            <div class="grid grid-cols-3 gap-2">
              ${e.certificates.map(E=>`
                <a href="${c(E.url)}" target="_blank" rel="noopener" class="block rounded-lg border border-[var(--line)] overflow-hidden hover:border-[var(--primary-45)]">
                  ${(E.url??"").endsWith(".pdf")?'<div class="aspect-square bg-[var(--surface-2)] flex items-center justify-center text-2xl">📄</div>':`<img src="${c(E.url)}" class="aspect-square object-cover w-full" />`}
                  <p class="text-[0.5625rem] text-[var(--ink-2)] px-1 py-1 truncate">${c(E.title||"—")}</p>
                </a>`).join("")}
            </div>
          </div>`:""}
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">✅ ความเห็นครูที่ปรึกษาสามัญ${(u=e.teachers)!=null&&u.full_name?" — "+c(e.teachers.full_name):""}</p>
            ${e.endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${c(e.endorsement_comment)}</p>`:'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>
          ${_e()?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🏛️ ความเห็นสมาชิกสภาปัจจุบัน${(h=(b=e.council_members)==null?void 0:b.students)!=null&&h.full_name?" — "+c(e.council_members.students.full_name):""}</p>
            ${qe(e)?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ผู้สมัครเป็นสมาชิกสภาปัจจุบันอยู่แล้ว — ข้ามขั้นตอนนี้</p>':e.peer_endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${c(e.peer_endorsement_comment)}</p>`:e.peer_endorsed_at?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">รับรองแล้ว (ไม่มีความเห็นเพิ่มเติม)</p>':'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>`:""}
          ${s&&_e()&&!qe(e)&&!e.peer_endorsed_at?`
          <div class="rounded-xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-3 space-y-2">
            <p class="text-xs font-bold text-[var(--primary-dark)]">🙋 พี่สภาที่ต้องการให้รับรอง</p>
            <p class="text-sm text-[var(--ink)]">${(m=(f=e.requested_peer_endorser)==null?void 0:f.students)!=null&&m.full_name?c(e.requested_peer_endorser.students.full_name):"ยังไม่ได้เลือก"}</p>
            <button type="button" id="btn-pick-my-app-endorser" class="w-full py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${e.id}" data-gender="${c(((v=e.council_positions)==null?void 0:v.gender)??"")}">
              ${e.requested_peer_endorser_id?"🔄 เปลี่ยนพี่สภา":"➕ เลือกพี่สภา"}
            </button>
          </div>`:""}
        </div>
      </div>
    </div>`}async function hs(){ht=await Da().catch(()=>[]),x()}function ws(){if(!d.isAdmin&&!d.isExecutive)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือผู้บริหารเท่านั้น</p>';if(L===null)return Mt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(H===null)return Pt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ht===null)return hs(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=(()=>{const f=d.cfg.council_term_start_semester,m=d.cfg.council_term_start_year,v=d.cfg.council_term_end_semester,E=d.cfg.council_term_end_year;return!m&&!E?"ยังไม่ได้ตั้งค่าวาระ":`ภาคเรียนที่ ${f??"—"}/${m??"—"} ถึง ภาคเรียนที่ ${v??"—"}/${E??"—"}`})(),t=d.members,r={M:t.filter(f=>{var m;return((m=f.council_positions)==null?void 0:m.gender)==="M"}).length,W:t.filter(f=>{var m;return((m=f.council_positions)==null?void 0:m.gender)==="W"}).length},n=t.filter(f=>{var m;return(m=f.council_positions)==null?void 0:m.is_elected}).sort((f,m)=>{var v,E;return(((v=f.council_positions)==null?void 0:v.sort_order)??0)-(((E=m.council_positions)==null?void 0:E.sort_order)??0)}),s=L.length,i={all:s};L.forEach(f=>{const m=st(f);i[m]=(i[m]??0)+1});const a=L.filter(f=>f.endorsed_at).length,o=L.filter(f=>f.peer_endorsed_at||qe(f)).length,l=L.filter(f=>f.status==="candidate").length,p=L.filter(f=>f.status==="appointed").length,u=Object.fromEntries(d.positions.map(f=>[f.id,f.position_name])),b=H.map(f=>({...f,posNames:ht.filter(m=>m.teacher_id===f.id).map(m=>u[m.position_id]).filter(Boolean)})),h=(f,m,v)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${v}">${c(f)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${c(m)}</p>
    </div>`;return`
    <div class="max-w-4xl mx-auto space-y-5">
      <div>
        <h2 class="text-lg font-bold text-[var(--ink)] mb-0.5">📊 ภาพรวมผู้บริหาร</h2>
        <p class="text-xs text-[var(--muted-2)]">สรุปสภานักเรียนวาระปัจจุบัน สำหรับผู้บริหาร — ดูอย่างเดียว ไม่มีสิทธิ์แก้ไข</p>
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">📋 การสมัครสภานักเรียน</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
          ${h(s,"สมัครแล้วทั้งหมด","var(--ink)")}
          ${h(a,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
          ${_e()?h(o,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):h("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
          ${h(l,"ว่าที่สภานักเรียน (ผู้สมัครเลือกตั้ง)","var(--primary)")}
          ${h(p,"แต่งตั้งแล้ว","var(--teal)")}
        </div>
        <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
          ${Et.map(f=>`
            <span class="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--surface-2)] text-[var(--ink-2)]">
              ${c(f.label)} <span class="text-[var(--muted-2)]">${i[f.id]??0}</span>
            </span>`).join("")}
        </div>
        <p class="text-xs text-[var(--muted-2)] mb-2">รายชื่อล่าสุด — กดดูใบสมัครฉบับเต็มได้</p>
        <div class="space-y-1.5 max-h-96 overflow-y-auto">
          ${L.slice(0,30).map(f=>{var j,A;const[m,v]=Er[f.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],E=f.endorsed_at?"✅":"⬜",I=_e()?f.peer_endorsed_at||qe(f)?" · ✅สภา":" · ⬜สภา":"";return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${N(f.students,"w-8 h-10")}
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${c(((j=f.students)==null?void 0:j.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${c(((A=f.council_positions)==null?void 0:A.position_name)??"—")} · ${E}ครู${I}</p>
              </div>
              <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full ${v}">${c(m)}</span>
              <button type="button" class="btn-view-app-detail flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-lg border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${f.id}">ดู</button>
            </div>`}).join("")||'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีใบสมัคร</p>'}
        </div>
        ${L.length>30?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-2 text-center">แสดง 30 รายการล่าสุดจากทั้งหมด ${L.length} รายการ</p>`:""}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-1">🏛️ สภานักเรียนวาระปัจจุบัน</p>
        <p class="text-xs text-[var(--muted)] mb-3">${c(e)}</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
          ${h(t.length,"สมาชิกสภาทั้งหมด","var(--ink)")}
          ${h(r.M,"สภาชาย","#14563b")}
          ${h(r.W,"สภาหญิง","#a3134f")}
          ${h(n.length,"ตำแหน่งผู้นำ","var(--primary)")}
        </div>
        ${n.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${n.map(f=>{var m,v;return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${N(f.students,"w-9 h-11")}
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${c(((m=f.students)==null?void 0:m.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${c(((v=f.council_positions)==null?void 0:v.position_name)??"—")}</p>
              </div>
            </div>`}).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีตำแหน่งผู้นำที่เลือกตั้งแล้ว</p>'}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">👨‍🏫 รายนามครูที่ปรึกษาสภานักเรียน</p>
        ${b.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${b.map(f=>`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2.5">
              <div class="w-9 h-9 rounded-full bg-[var(--surface-2)] flex-shrink-0 overflow-hidden flex items-center justify-center text-[var(--muted-2)]">${f.image_url?`<img src="${c(f.image_url)}" class="w-full h-full object-cover" />`:"👤"}</div>
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${c(f.full_name)}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${f.posNames.length?c(f.posNames.join(", ")):"ยังไม่ได้กำหนดฝ่ายที่ดูแล"}</p>
              </div>
            </div>`).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีครูที่ปรึกษาสภานักเรียน</p>'}
      </div>
    </div>
    ${qr()}`}function $s(){if(!d.isAdmin&&!d.isCouncilAdvisor)return"";if(L===null)return Mt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(re===null)return _r(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(te===null)return Ar(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=re.reduce((m,v)=>m+Number(v.weight),0),t=e/2;ee!=="M"&&ee!=="W"&&(ee="M");const r=L.filter(m=>{var v;return((v=m.council_positions)==null?void 0:v.gender)===ee}),n=`
    <div class="flex gap-2 mb-3">
      ${["M","W"].map(m=>`
        <button type="button" class="apps-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${m===ee?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${m}">
          สภา${D[m]} <span class="${m===ee?"text-white/80":"text-[var(--muted-2)]"}">${L.filter(v=>{var E;return((E=v.council_positions)==null?void 0:E.gender)===m}).length}</span>
        </button>`).join("")}
    </div>`,s={all:r.length};r.forEach(m=>{const v=st(m);s[v]=(s[v]??0)+1}),Et.some(m=>m.id===pe)||(pe="all");const i=`
    <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
      ${Et.map(m=>`
        <button type="button" class="apps-filter-btn flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition ${m.id===pe?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${m.id}">
          ${c(m.label)} <span class="${m.id===pe?"text-white/80":"text-[var(--muted-2)]"}">${s[m.id]??0}</span>
        </button>`).join("")}
    </div>`,a=[...new Set(r.map(m=>Jt(m.students)).filter(Boolean))].sort((m,v)=>m.localeCompare(v,"th")),o=d.positions.filter(m=>m.gender===ee).sort((m,v)=>m.sort_order-v.sort_order),l=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      <select id="apps-grade-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกระดับชั้น</option>
        ${a.map(m=>`<option value="${c(m)}" ${m===tt?"selected":""}>${c(m)}</option>`).join("")}
      </select>
      <select id="apps-position-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกฝ่าย</option>
        ${o.map(m=>`<option value="${m.id}" ${String(m.id)===String(we)?"selected":""}>${c(m.position_name)}</option>`).join("")}
      </select>
      <select id="apps-advisor-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองครูที่ปรึกษา: ทั้งหมด</option>
        <option value="yes" ${De==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${De==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>
      ${_e()?`
      <select id="apps-peer-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองพี่สภา: ทั้งหมด</option>
        <option value="yes" ${Te==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${Te==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>`:""}
    </div>`,p=`<datalist id="council-teacher-datalist">${te.map(m=>`<option value="${c(m.full_name)} · รหัส ${m.id}"></option>`).join("")}</datalist>`;if(!r.length)return`${n}${i}${l}${p}<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีใบสมัครสภา${D[ee]}</p>`;const u=m=>!(tt&&Jt(m.students)!==tt||we&&String(m.position_id)!==String(we)||De==="yes"&&!m.endorsed_at||De==="no"&&m.endorsed_at||Te==="yes"&&!We(m)||Te==="no"&&We(m)),b=r.filter(m=>(pe==="all"||st(m)===pe)&&u(m));if(!b.length)return`${n}${i}${l}${p}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีใบสมัครในหมวดนี้</p>`;const h=m=>{var w,$,S,q,T,Z,ne,O,W,Ot,Rt,Ht,Ft,Wt;const v=(w=m.council_interviews)==null?void 0:w[0],[E,I]=Er[m.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],j=Sr[($=m.council_positions)==null?void 0:$.gender]??"bg-[var(--bg-2)] text-[var(--muted)]",A=!!((S=m.council_positions)!=null&&S.is_elected),_=st(m);return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-app-card="${m.id}">
      <div class="flex items-center gap-3">
        ${N(m.students)}
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5 flex-wrap">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((q=m.students)==null?void 0:q.full_name)??"—")}</p>
            <span class="flex-shrink-0 text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${j}">${c(D[(T=m.council_positions)==null?void 0:T.gender]??"—")}</span>
          </div>
          <p class="text-xs text-[var(--muted)]">${c(((Z=m.students)==null?void 0:Z.student_code)??"")} · ${c(((ne=m.students)==null?void 0:ne.main_room)??"")} · ${c(((O=m.council_positions)==null?void 0:O.position_name)??"—")}</p>
        </div>
        <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${I}">${E}</span>
      </div>
      <button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${m.id}">📄 ดูใบสมัคร</button>

      ${_==="awaiting_endorsement"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${xs(m)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}

      ${m.status==="pending"&&m.endorsed_at&&We(m)?`
        <form class="schedule-form space-y-2 pt-1 border-t border-[var(--line-soft)]" data-app-id="${m.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-profile-id="${c(((W=m.students)==null?void 0:W.profile_id)??"")}" data-student-name="${c(((Ot=m.students)==null?void 0:Ot.full_name)??"")}" data-position-name="${c(((Rt=m.council_positions)==null?void 0:Rt.position_name)??"")}">
          <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p>
          <div class="grid grid-cols-2 gap-2">
            <input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
            <input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <input type="text" name="interviewerText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)"
            value="${v!=null&&v.interviewer_teacher_id?c(fs(v.interviewer_teacher_id)):""}"
            class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button>
        </form>`:""}

      ${m.status==="interview_scheduled"?`
        <div class="pt-1 border-t border-[var(--line-soft)] space-y-2">
          <p class="text-xs text-[var(--muted)]">📅 ${v!=null&&v.scheduled_at?new Date(v.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"—"} ${v!=null&&v.location?"· "+c(v.location):""} ${v!=null&&v.interviewer_teacher_id?"· กรรมการ "+c(((Ht=te.find(ae=>ae.id===v.interviewer_teacher_id))==null?void 0:Ht.full_name)??""):""}</p>
          <form class="score-form space-y-1.5" data-app-id="${m.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-max-weight="${e}" data-pass-threshold="${t}">
            <p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>
            ${re.map(ae=>{var zt;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${c(ae.name)} <span class="text-[var(--muted-2)]">(เต็ม ${ae.weight})</span></span>
                <input type="number" min="0" max="${ae.weight}" step="0.5" name="c_${ae.id}" data-criterion-id="${ae.id}"
                  value="${((zt=v==null?void 0:v.scores)==null?void 0:zt[ae.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
              </div>`}).join("")}
            <div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]">
              <span class="text-[var(--ink-2)]">คะแนนรวม</span>
              <span class="score-total-display text-[var(--primary)]">${(v==null?void 0:v.score)??0} / ${e} · ต้อง ≥ ${t} จึงผ่าน</span>
            </div>
            <textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${c((v==null?void 0:v.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผล</button>
          </form>
        </div>`:""}

      ${m.status==="interviewed"?`
        <div class="pt-1 border-t border-[var(--line-soft)]">
          ${A?`<button type="button" class="btn-promote-candidate w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${m.id}">🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง</button>`:`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${m.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`}
        </div>`:""}

      ${m.status==="candidate"?`<p class="text-xs text-[var(--primary)] pt-1 border-t border-[var(--line-soft)]">เบอร์ผู้สมัคร ${((Wt=(Ft=m.council_candidates)==null?void 0:Ft[0])==null?void 0:Wt.ballot_number)??"—"} · รอผลเลือกตั้ง</p>`:""}
      ${m.status==="rejected"&&(v!=null&&v.comment)?`<p class="text-xs text-[var(--bad)] pt-1 border-t border-[var(--line-soft)]">${c(v.comment)}</p>`:""}
    </div>`},f=we?`<div class="space-y-3">${b.map(h).join("")}</div>`:o.map(m=>{const v=b.filter(E=>E.position_id===m.id);return v.length?`
          <div class="mb-5">
            <p class="text-xs font-bold text-[var(--muted)] mb-2 px-1">${c(m.position_name)} <span class="text-[var(--muted-2)]">(${v.length})</span></p>
            <div class="space-y-3">${v.map(h).join("")}</div>
          </div>`:""}).join("");return`${n}${i}${l}${p}${f}${qr()}`}const ks=[{label:"ประธาน",match:e=>!!(e!=null&&e.is_elected)},{label:"รองประธาน",match:e=>(e==null?void 0:e.position_name)==="รองประธานสภานักเรียน"},{label:"ฝ่ายงาน",match:e=>((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")},{label:"สำนักงานสภา",match:e=>!(e!=null&&e.is_elected)&&(e==null?void 0:e.position_name)!=="รองประธานสภานักเรียน"&&!((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")}];let J="M";function Es(){J!=="M"&&J!=="W"&&(J="M");const e=d.members.filter(a=>{var o;return((o=a.council_positions)==null?void 0:o.gender)===J}).sort((a,o)=>{var l,p;return(((l=a.council_positions)==null?void 0:l.sort_order)??99)-(((p=o.council_positions)==null?void 0:p.sort_order)??99)}),t=`
    <div class="flex gap-2 mb-4">
      ${["M","W"].map(a=>`
        <button type="button" class="roster-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${a===J?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${a}">สภา${D[a]}</button>`).join("")}
    </div>`,r=d.isAdmin?`<button type="button" id="btn-add-council-member" class="w-full py-2.5 rounded-xl border border-dashed border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mb-4 hover:bg-[var(--primary-soft)]">＋ เพิ่มสมาชิกสภา${D[J]}</button>`:"",n=d.isAdmin||d.isChair&&d.chairGender===J,s=a=>{var o,l,p;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] text-center">
      ${N(a.students,"w-16 h-20 mx-auto")}
      <p class="text-sm font-bold text-[var(--ink)] truncate mt-2">${c(((o=a.students)==null?void 0:o.full_name)??"—")}</p>
      <p class="text-[0.6875rem] text-[var(--muted)] truncate">${c(((l=a.students)==null?void 0:l.main_room)??"")}</p>
      <p class="text-[0.6875rem] text-[var(--primary)] font-semibold truncate mt-0.5">${c(((p=a.council_positions)==null?void 0:p.position_name)??"—")}</p>
      ${n?`
        <button type="button" class="btn-toggle-can-create w-full mt-2 text-[0.625rem] font-bold py-1 rounded-[8px] border ${a.can_create_activities?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--muted)]"}" data-id="${a.id}" data-value="${a.can_create_activities?"":"1"}">${a.can_create_activities?"✅ สร้างกิจกรรมได้":"➕ ให้สิทธิ์สร้างกิจกรรม"}</button>`:""}
      ${d.isAdmin?`
        <div class="flex gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-edit-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">✏️ แก้ไข</button>
          <button type="button" class="btn-remove-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${a.id}">🗑️ ลบ</button>
        </div>`:""}
    </div>`},i=ks.map(a=>{const o=e.filter(l=>a.match(l.council_positions));return o.length?`
      <div class="mb-4">
        <p class="text-xs font-bold text-[var(--muted-2)] mb-2">${a.label}</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${o.map(s).join("")}</div>
      </div>`:""}).join("");return`${r}${t}${i||`<p class="text-xs text-[var(--muted-2)] text-center py-10">ยังไม่มีข้อมูลสมาชิกสภา${D[J]}</p>`}`}function Kt({mode:e,gender:t,member:r}){var l,p,u;(l=document.getElementById("member-modal"))==null||l.remove();const n=d.positions.filter(b=>b.gender===t);let s=e==="edit"?r.students:null,i=null;const a=document.createElement("div");a.id="member-modal",a.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">${e==="add"?`➕ เพิ่มสมาชิกสภา${D[t]}`:"✏️ แก้ไขสมาชิกสภา"}</p>
        <button type="button" id="btn-close-member-modal" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      <div class="space-y-3">
        ${e==="add"?`
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ค้นหานักเรียน (พิมพ์ชื่อหรือรหัส)</label>
            <input type="text" id="member-student-search" placeholder="พิมพ์อย่างน้อย 2 ตัวอักษร" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
            <div id="member-student-results" class="mt-1.5 space-y-1"></div>
          </div>
          <div id="member-student-selected"></div>
        `:`
          <div class="rounded-xl bg-[var(--surface-2)] p-3">
            <p class="text-[0.6875rem] text-[var(--muted)]">นักเรียน</p>
            <p class="text-sm font-bold text-[var(--ink)]">${c(((p=r.students)==null?void 0:p.full_name)??"—")} · ${c(((u=r.students)==null?void 0:u.student_code)??"")}</p>
          </div>
        `}
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ตำแหน่ง <span class="text-[var(--bad)]">*</span></label>
          <select id="member-position-select" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— เลือกตำแหน่ง —</option>
            ${n.map(b=>`<option value="${b.id}" ${e==="edit"&&r.position_id===b.id?"selected":""}>${c(b.position_name)}</option>`).join("")}
          </select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เริ่มวาระ</label>
            <input type="date" id="member-term-start" value="${e==="edit"?c(r.term_start_date??""):new Date().toISOString().slice(0,10)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          ${e==="edit"?`
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">สิ้นสุดวาระ (ถ้ามี)</label>
            <input type="date" id="member-term-end" value="${c(r.term_end_date??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>`:""}
        </div>
        <button type="button" id="btn-save-member" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(a),a.querySelector("#btn-close-member-modal").addEventListener("click",()=>a.remove()),a.addEventListener("click",b=>{b.target===a&&a.remove()});const o=()=>{const b=a.querySelector("#member-student-selected");b&&(b.innerHTML=s?`
      <div class="flex items-center gap-2 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] p-2.5">
        ${N(s,"w-10 h-12")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(s.full_name)}</p>
          <p class="text-[0.6875rem] text-[var(--muted-2)] truncate">${c(s.student_code)} · ${c(s.main_room??"")}</p>
        </div>
      </div>`:"")};if(e==="add"){const b=a.querySelector("#member-student-search"),h=a.querySelector("#member-student-results");b.addEventListener("input",()=>{clearTimeout(i);const f=b.value.trim();if(f.length<2){h.innerHTML="";return}i=setTimeout(async()=>{const m=await pr(f).catch(()=>[]);h.innerHTML=m.length?m.map(v=>`
          <button type="button" class="member-search-result-item w-full text-left flex items-center gap-2 rounded-xl border border-[var(--line)] p-2 hover:bg-[var(--surface-2)]" data-id="${v.id}">
            <span class="text-sm font-bold text-[var(--ink)] flex-1 truncate">${c(v.full_name)}</span>
            <span class="text-[0.6875rem] text-[var(--muted-2)] flex-shrink-0">${c(v.student_code)} · ${c(v.main_room??"")}</span>
          </button>`).join(""):'<p class="text-xs text-[var(--muted-2)] px-1">ไม่พบนักเรียน</p>',h.querySelectorAll(".member-search-result-item").forEach(v=>{v.addEventListener("click",()=>{s=m.find(E=>E.id===Number(v.dataset.id)),h.innerHTML="",b.value="",o()})})},300)})}a.querySelector("#btn-save-member").addEventListener("click",async()=>{var m;const b=Number(a.querySelector("#member-position-select").value);if(!b){g("กรุณาเลือกตำแหน่ง","warning");return}if(e==="add"&&!s){g("กรุณาค้นหาและเลือกนักเรียน","warning");return}const h=a.querySelector("#member-term-start").value,f=a.querySelector("#btn-save-member");f.disabled=!0,f.textContent="กำลังบันทึก...";try{if(e==="add")await Tn({positionId:b,studentId:s.id,academicYear:P,termStartDate:h,appointedByTeacherId:((m=d.teacher)==null?void 0:m.id)??null});else{const v=a.querySelector("#member-term-end").value;await Bn(r.id,{positionId:b,termStartDate:h,termEndDate:v})}g("บันทึกแล้ว ✅","success"),a.remove(),d.members=await Ce().catch(()=>d.members),x()}catch(v){g("บันทึกไม่สำเร็จ: "+k(v),"error"),f.disabled=!1,f.textContent="บันทึก"}})}function Ss(){if(d.role!=="teacher"||!d.teacher)return"";if(!d.pendingEndorsements.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างยืนยันในตอนนี้</div>';const e=t=>{var r,n,s,i;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-endorsement-card="${t.id}">
      <div class="flex items-center gap-3">
        ${N(t.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((r=t.students)==null?void 0:r.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${c(((n=t.students)==null?void 0:n.student_code)??"")} · ${c(((s=t.students)==null?void 0:s.main_room)??"")} · สมัคร${c(((i=t.council_positions)==null?void 0:i.position_name)??"—")}</p>
          ${t.gpa_general!=null||t.gpa_religious!=null?`<p class="text-xs text-[var(--muted)] mt-0.5">เกรดสามัญ ${c(t.gpa_general??"—")} · เกรดศาสนา ${c(t.gpa_religious??"—")}</p>`:""}
        </div>
      </div>
      ${t.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${c(t.motivation)}</p>`:""}
      ${t.intro_video_url?`<a href="${c(t.intro_video_url)}" target="_blank" rel="noopener" class="inline-block text-xs font-bold text-[var(--primary)] hover:underline">🎬 ดูวิดีโอแนะนำตัว</a>`:""}
      <div class="flex flex-wrap gap-1.5">
        ${d.endorsementPhrases.map(a=>`
          <button type="button" class="endorse-phrase-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition"
            data-target="${t.id}" data-phrase="${c(a.phrase)}">${c(a.phrase)}</button>`).join("")}
      </div>
      <textarea class="endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${t.id}" rows="2"
        placeholder="คอมเมนต์ถึงนักเรียนคนนี้ (เลือกจากปุ่มด้านบนแล้วแก้ไขเพิ่มได้)"></textarea>
      <div class="flex gap-2">
        <button type="button" class="btn-endorse-decline flex-1 py-2 rounded-xl border border-[var(--bad-soft-line)] text-[#8a2f22] text-xs font-bold hover:bg-[var(--bad-soft)]" data-id="${t.id}">❌ ไม่รับรอง</button>
        <button type="button" class="btn-endorse-confirm flex-1 py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${t.id}">✅ รับรอง</button>
      </div>
    </div>`};return`<div class="space-y-3">${d.pendingEndorsements.map(e).join("")}</div>`}const pt={};async function As(e,t){pt[t]=await Sn(e,t).catch(()=>[]),x()}function qs(){var s;const e=d.membership[0];if(!e)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภานักเรียนปัจจุบันเท่านั้น</p>';const t=(s=e.council_positions)==null?void 0:s.gender;if(!t)return"";if(pt[e.id]===void 0)return As(t,e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const r=pt[e.id];if(!r.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างรับรองในตอนนี้</div>';const n=i=>{var a,o,l,p;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-peer-endorsement-card="${i.id}">
      <div class="flex items-center gap-3">
        ${N(i.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((a=i.students)==null?void 0:a.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${c(((o=i.students)==null?void 0:o.student_code)??"")} · ${c(((l=i.students)==null?void 0:l.main_room)??"")} · สมัคร${c(((p=i.council_positions)==null?void 0:p.position_name)??"—")}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary-dark)] flex-shrink-0">ขอให้คุณรับรอง</span>
      </div>
      ${i.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${c(i.motivation)}</p>`:""}
      <textarea class="peer-endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${i.id}" rows="2"
        placeholder="ความเห็นถึงนักเรียนคนนี้ (ไม่บังคับ)"></textarea>
      <button type="button" class="btn-peer-endorse w-full py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${i.id}">✅ รับรองในนามสภานักเรียน</button>
    </div>`};return`<div class="space-y-3">${r.map(n).join("")}</div>`}async function Is(e){const t=d.membership[0];if(!t)return;const r=document.querySelector(`.peer-endorse-comment[data-id="${e}"]`),n=(r==null?void 0:r.value.trim())||null;try{await qn({applicationId:Number(e),memberId:t.id,comment:n}),g("รับรองในนามสภานักเรียนแล้ว ✅","success"),delete pt[t.id],x()}catch(s){g("บันทึกไม่สำเร็จ: "+k(s),"error")}}async function Xt(e,t){const r=document.querySelector(`.endorse-comment[data-id="${e}"]`),n=(r==null?void 0:r.value.trim())??"";if(!n){g("กรุณาใส่คอมเมนต์ก่อนยืนยัน","warning");return}try{t==="confirm"?(await kn({applicationId:Number(e),teacherId:d.teacher.id,comment:n}),g("รับรองใบสมัครแล้ว ✅","success")):(await En({applicationId:Number(e),teacherId:d.teacher.id,comment:n}),g('บันทึกผล "ไม่รับรอง" แล้ว',"success")),await Wa(),x()}catch(s){g("บันทึกไม่สำเร็จ: "+k(s),"error")}}const Cr={planned:["ยังไม่จัด","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],completed:["เสร็จแล้ว","text-[#106143]","bg-[var(--ok-soft-line)]","border-[var(--ok-soft-line)]"],cancelled:["ยกเลิก","text-[var(--muted-2)]","bg-[var(--surface-2)]","border-[var(--line)]"]},Lr=[["completed","เสร็จแล้ว","border-[var(--ok-soft-line)] bg-[var(--ok-soft)]","text-[var(--ok)]"],["ongoing","กำลังดำเนินการ","border-[var(--primary-soft-line)] bg-[var(--primary-soft)]","text-[var(--primary)]"],["planned","ยังไม่จัด","border-[var(--gold-soft-line)] bg-[var(--gold-soft)]","text-[var(--gold-ink)]"],["cancelled","ยกเลิก","border-[var(--line-soft)] bg-[var(--surface-2)]","text-[var(--muted-2)]"]],Zt={planned:"ongoing",ongoing:"completed"},Cs={planned:"▶️ เริ่มดำเนินการ",ongoing:"✅ ทำเครื่องหมายเสร็จแล้ว"};async function jr(){F=await Gn(P).catch(()=>[]),x()}async function er(e){ie[e]=await Yn(e).catch(()=>new Set),x()}function Ls(e){return d.isAdmin||d.isChair||d.isCouncilAdvisor?!0:!!(e.owner_member_id&&d.membership.some(t=>t.id===e.owner_member_id))}async function Dr(){z=await ln().catch(()=>[]),x()}async function Tr(e){const[t,r,n,s]=await Promise.all([Kn(e).catch(()=>null),Zn(e).catch(()=>[]),Qn(e).catch(()=>[]),on("council_activity",e).catch(()=>[])]);ke[e]=t,Lt[e]=r,jt[e]=n,Fe[e]=Object.fromEntries(s.map(i=>[i.student_id,i])),x()}function js({rule:e,override:t,attendanceRows:r}){var s;if((t==null?void 0:t.override_decision)==="pass")return"pass";if((t==null?void 0:t.override_decision)==="fail")return"fail";if(!e)return"no_rule";const n=r.length;if(e.min_attendance_count&&n<e.min_attendance_count)return"not_eligible";if((s=e.required_dates)!=null&&s.length){const i=new Set(r.map(o=>(o.checked_in_at||"").slice(0,10)));if(e.required_dates.some(o=>!i.has(o)))return"not_eligible"}return"pass"}function Ds(){var o,l,p;if(F===null)return jr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.canCreateActivities,t=e&&!d.isAdmin&&!d.isChair,r=d.membership[0],n={};F.forEach(u=>{n[u.status]=(n[u.status]??0)+1});const s=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      ${Lr.map(([u,b,h,f])=>`
        <div class="rounded-xl border ${h} p-3 text-center">
          <p class="text-2xl font-bold ${f}">${n[u]??0}</p>
          <p class="text-[0.6875rem] text-[var(--muted)]">${b}</p>
        </div>`).join("")}
    </div>`,i=e?`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">➕ สร้างกิจกรรมใหม่</p>
      <form id="activity-form" class="space-y-2">
        <input name="title" required placeholder="ชื่อกิจกรรม" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        <textarea name="detail" rows="2" placeholder="รายละเอียด (ถ้ามี)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="activity_date" type="date" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
          <input name="budget" type="number" step="0.01" placeholder="งบประมาณ (บาท)" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <select name="gender" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="" ${t&&!((o=r==null?void 0:r.council_positions)!=null&&o.gender)?"selected":""}>สภาชาย+หญิงร่วมกัน</option>
            <option value="M" ${t&&((l=r==null?void 0:r.council_positions)==null?void 0:l.gender)==="M"?"selected":""}>สภาชายเท่านั้น</option>
            <option value="W" ${t&&((p=r==null?void 0:r.council_positions)==null?void 0:p.gender)==="W"?"selected":""}>สภาหญิงเท่านั้น</option>
          </select>
          <input name="owner_text" placeholder="ฝ่าย/ผู้รับผิดชอบ (ข้อความ)" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        </div>
        ${t?`
        <input type="hidden" name="owner_member_id" value="${(r==null?void 0:r.id)??""}" />
        <p class="text-xs text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl px-3 py-2">👤 ผู้รับผิดชอบกิจกรรมนี้คือคุณเอง (ตามสิทธิ์ที่ได้รับมอบหมาย)</p>`:`
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ผู้รับผิดชอบกิจกรรม (สมาชิกสภา — จัดการเช็คชื่อ/เกียรติบัตรของกิจกรรมนี้ได้เอง)</label>
          <select name="owner_member_id" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="">— ไม่ระบุ (แอดมิน/ครูที่ปรึกษาสภา/ประธานจัดการเท่านั้น) —</option>
            ${d.members.map(u=>{var b,h;return`<option value="${u.id}">${c(((b=u.students)==null?void 0:b.full_name)??"—")} (${c(((h=u.council_positions)==null?void 0:h.position_name)??"—")})</option>`}).join("")}
          </select>
        </div>`}
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="open_to_general" class="w-4 h-4" />
          เปิดให้นักเรียนทั่วไป (ไม่ใช่แค่สมาชิกสภา) เช็คชื่อเข้าร่วมได้
        </label>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="counts_for_evaluation" checked class="w-4 h-4" />
          นับกิจกรรมนี้ในเกณฑ์ % เช็คชื่อสำหรับประเมินความเป็นสมาชิกสภา
        </label>
        <!-- ตั้งใจไม่มีปุ่มแก้ไขค่านี้หลังสร้างแล้ว — กันคนที่เป็นทั้งผู้สร้าง+ผู้ถูกประเมิน
             ย้อนกลับมาปลดกิจกรรมที่ตัวเองขาดออกจากตัวหารทีหลัง ตั้งได้ครั้งเดียวตอนสร้างเท่านั้น -->
        <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">สร้างกิจกรรม</button>
      </form>
    </div>`:"";if(!F.length)return`${s}${i}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีกิจกรรม</p>`;const a=u=>{var A,_;const[b,h,f,m]=Cr[u.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]","border-[var(--line)]"],v=d.members.filter(w=>{var $;return!u.gender||(($=w.council_positions)==null?void 0:$.gender)===u.gender}),E=ie[u.id],I=Ls(u),j=(_=(A=u.council_members)==null?void 0:A.students)==null?void 0:_.full_name;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-activity-card="${u.id}">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${c(u.title)}</p>
            <p class="text-xs text-[var(--muted-2)] mt-0.5">${u.activity_date?new Date(u.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} ${u.gender?"· สภา"+D[u.gender]:""} ${u.owner_text?"· "+c(u.owner_text):""} ${j?"· ผู้รับผิดชอบ "+c(j):""}</p>
            ${u.open_to_general?'<span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] mt-1">🙋 เปิดให้นักเรียนทั่วไปเข้าร่วม</span>':""}
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${m} ${f} ${h}">${b}</span>
        </div>
        ${u.detail?`<p class="text-xs text-[var(--ink-2)]">${c(u.detail)}</p>`:""}
        ${I?`
          <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
            <!-- เดิมจำกัดแค่ admin/chair เปลี่ยนสถานะได้ — แต่กิจกรรมที่ค้างสถานะ "planned" ตลอดไป
                 จะไม่ถูกนับใน % เช็คชื่อสำหรับประเมินเลย (นับเฉพาะ ongoing/completed) ผู้รับผิดชอบ
                 ที่ได้รับมอบหมาย (owner) จึงต้องเปลี่ยนสถานะกิจกรรมของตัวเองได้ด้วย ไม่งั้นฟีเจอร์
                 "สร้าง+เช็คชื่อได้เอง" จะใช้ไม่ได้จริงเพราะกิจกรรมไม่มีวันถูกนับผล -->
            ${I&&Zt[u.status]?`<button type="button" class="btn-activity-next text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${u.id}" data-next="${Zt[u.status]}">${Cs[u.status]}</button>`:""}
            ${I&&u.status!=="cancelled"&&u.status!=="completed"?`<button type="button" class="btn-activity-cancel text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${u.id}">ยกเลิก</button>`:""}
            <button type="button" class="btn-activity-attendance text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${u.id}">👥 เช็คชื่อสมาชิก</button>
            <button type="button" class="btn-activity-scan text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${u.id}" data-title="${c(u.title)}" data-open-general="${u.open_to_general?"1":""}">📷 สแกน QR เช็คอิน</button>
            <button type="button" class="btn-activity-cert-manage text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-id="${u.id}">🏅 จัดการเกียรติบัตร</button>
          </div>
          <div class="activity-attendance-panel" data-panel-for="${u.id}">
            ${E?`
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                ${v.map(w=>{var S;const $=E.has(w.student_id);return`<button type="button" class="btn-checkin flex items-center gap-2 text-xs rounded-[10px] border px-2.5 py-2 text-left ${$?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]"}" data-activity-id="${u.id}" data-student-id="${w.student_id}" ${$?"disabled":""}>
                    <span>${$?"✅":"➕"}</span><span class="truncate">${c(((S=w.students)==null?void 0:S.full_name)??"—")}</span>
                  </button>`}).join("")}
                ${v.length?"":'<p class="text-xs text-[var(--muted-2)] col-span-2">ยังไม่มีสมาชิกสภาที่เกี่ยวข้อง</p>'}
              </div>`:""}
          </div>
          ${$t===u.id?Bs(u):""}`:""}
      </div>`};return`${s}${i}<div class="space-y-3">${F.map(a).join("")}</div>`}const Ts={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft)] border-[var(--ok-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft)] border-[var(--bad-soft-line)]"],not_eligible:["ยังไม่ครบเงื่อนไข","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],no_rule:["ยังไม่ตั้งเงื่อนไข","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"]};function Bs(e){if(z===null&&Dr(),ke[e.id]===void 0&&Tr(e.id),z===null||ke[e.id]===void 0)return'<div class="mt-2 pt-2 border-t border-dashed border-[var(--line)]"><p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>';const t=ke[e.id],r=Lt[e.id]??[],n=jt[e.id]??[],s=Object.fromEntries(r.map(u=>[u.student_id,u])),i=Fe[e.id]??{},a={};n.forEach(u=>{a[u.student_id]||(a[u.student_id]={student:u.students,rows:[]}),a[u.student_id].rows.push(u)});const o=`
    <form class="cert-rule-form space-y-2 bg-[var(--surface-2)] rounded-xl p-3" data-activity-id="${e.id}">
      <p class="text-xs font-bold text-[var(--ink-2)]">🏅 เงื่อนไขการรับเกียรติบัตร</p>
      <select name="template_id" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]">
        <option value="">— ยังไม่เลือกเทมเพลต —</option>
        ${z.map(u=>`<option value="${u.id}" ${(t==null?void 0:t.template_id)===u.id?"selected":""}>${c(u.name)}</option>`).join("")}
      </select>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)] flex-shrink-0">ต้องเข้าร่วมอย่างน้อย</span>
        <input type="number" min="0" name="min_attendance_count" value="${(t==null?void 0:t.min_attendance_count)??""}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)]" />
        <span class="text-xs text-[var(--muted)]">ครั้ง</span>
      </div>
      <div>
        <label class="block text-[0.6875rem] text-[var(--muted)] mb-1">วันที่บังคับต้องเข้าร่วม (ถ้ามี บรรทัดละ 1 วัน รูปแบบ YYYY-MM-DD)</label>
        <textarea name="required_dates" rows="2" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)]">${c(((t==null?void 0:t.required_dates)??[]).join(`
`))}</textarea>
      </div>
      <textarea name="notes" rows="2" placeholder="หมายเหตุเงื่อนไข (แสดงให้นักเรียนเห็น เช่น ต้องผ่านการประเมินความประพฤติด้วย)" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)]">${c((t==null?void 0:t.notes)??"")}</textarea>
      <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกเงื่อนไข</button>
    </form>`,l=Object.keys(a),p=l.map(u=>{const b=Number(u),{student:h,rows:f}=a[b],m=s[b],v=js({rule:t,override:m,attendanceRows:f}),[E,I]=Ts[v],j=i[b];return`
      <div class="rounded-xl border border-[var(--line-soft)] p-2.5 space-y-1.5" data-cert-row="${b}">
        <div class="flex items-center gap-2">
          ${N(h,"w-8 h-10")}
          <div class="min-w-0 flex-1">
            <p class="text-xs font-bold text-[var(--ink)] truncate">${c((h==null?void 0:h.full_name)??"—")}</p>
            <p class="text-[0.625rem] text-[var(--muted-2)]">เข้าร่วม ${f.length} ครั้ง</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${I}">${E}</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(m==null?void 0:m.override_decision)==="pass"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${b}" data-decision="pass">✅ ผ่าน (บังคับ)</button>
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(m==null?void 0:m.override_decision)==="fail"?"border-[var(--bad-soft-line)] bg-[var(--bad-soft)] text-[#8a2f22]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${b}" data-decision="fail">❌ ไม่ผ่าน (บังคับ)</button>
          ${m!=null&&m.override_decision?`<button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)]" data-activity-id="${e.id}" data-student-id="${b}" data-decision="">↺ กลับเป็นอัตโนมัติ</button>`:""}
          ${v==="pass"?j?`<button type="button" class="btn-cert-view text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${b}">🏅 ดูเกียรติบัตร</button>`:`<button type="button" class="btn-cert-issue text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${b}">🏅 ออกเกียรติบัตร</button>`:""}
        </div>
      </div>`}).join("");return`
    <div class="mt-2 pt-2 border-t border-dashed border-[var(--line)] space-y-3">
      ${o}
      <div>
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1.5">รายชื่อผู้เข้าร่วม (${l.length} คน)</p>
        <div class="space-y-1.5">${p||'<p class="text-xs text-[var(--muted-2)] text-center py-3">ยังไม่มีใครเช็คชื่อเข้าร่วมกิจกรรมนี้</p>'}</div>
      </div>
    </div>`}const tr={info:["แจ้งให้ทราบ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],ack:["ต้องกดรับทราบ","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],urgent:["ด่วน","text-[#8a2f22]","bg-[var(--bad-soft-line)]","border-[var(--bad-soft-line)]"]};async function Ns(){ut=await ua().catch(()=>[]),x()}async function Ms(){le=await ma(d.student.id).catch(()=>new Set),x()}async function Ps(){const[e,t,r,n]=await Promise.all([va().catch(()=>({})),xa().catch(()=>0),yt("M").catch(()=>0),yt("W").catch(()=>0)]);de=e,rt={all:t,M:r,W:n},x()}function Os(){if(ut===null)return Ns(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';d.role==="student"&&d.student&&le===null&&Ms(),de===null&&Ps();const e=d.isAdmin||d.isCouncilAdvisor||d.isChair,t=ut.filter(l=>l.audience==="all"||l.audience===(d.student?ce(d.student.gender):null)||d.isAdmin||d.isChair),r=nt==="all"?t:t.filter(l=>l.type===nt),n=e?'<button type="button" id="btn-open-ann-form" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ เพิ่มประกาศ</button>':"",s=e&&at?`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📣 ประกาศใหม่</p>
      <form id="announcement-form" class="space-y-2">
        <input name="title" required placeholder="หัวเรื่องประกาศ" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        <textarea name="body" rows="3" placeholder="รายละเอียด" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        <div class="grid grid-cols-2 gap-2">
          <select name="type" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="info">แจ้งให้ทราบ</option>
            <option value="ack">ต้องกดรับทราบ</option>
            <option value="urgent">ด่วน</option>
          </select>
          <select name="audience" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="all">ทุกคน</option>
            <option value="M">สภาชาย</option>
            <option value="W">สภาหญิง</option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-xs text-[var(--muted)]"><input type="checkbox" name="pinned" class="rounded" /> ปักหมุดไว้บนสุด</label>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-cancel-ann" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
          <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เผยแพร่ประกาศ</button>
        </div>
      </form>
    </div>`:"",a=`
    <div class="flex gap-2 overflow-x-auto pb-1 mb-4">
      ${[["all","ทั้งหมด"],["urgent","ด่วน"],["ack","ต้องรับทราบ"],["info","แจ้งให้ทราบ"]].map(([l,p])=>`
        <button type="button" class="ann-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border ${nt===l?"bg-[var(--primary)] text-white border-[var(--primary)]":"bg-[var(--surface)] text-[var(--muted)] border-[var(--line)]"}" data-filter="${l}">${p}</button>`).join("")}
    </div>`;if(!r.length)return`${n}${s}${a}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีประกาศ</p>`;const o=l=>{var I,j;const[p,u,b,h]=tr[l.type]??tr.info,f=(I=l.teachers)!=null&&I.full_name?c(l.teachers.full_name)+" (ครู)":(j=l.students)!=null&&j.full_name?c(l.students.full_name)+" (ประธานสภา)":"ระบบ",m=le==null?void 0:le.has(l.id),v=l.type==="ack"&&d.role==="student"&&d.student,E=rt?rt[l.audience]??rt.all:null;return`
      <div class="rounded-xl border ${l.pinned?"border-[var(--gold-soft-line)] bg-[var(--gold-soft)]/40":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3.5 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          ${l.pinned?'<span class="text-[0.6875rem] font-bold text-[var(--gold-ink)]">📌 ปักหมุด</span>':""}
          <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${h} ${b} ${u}">${p}</span>
          ${l.audience!=="all"?`<span class="text-[0.6875rem] text-[var(--muted-2)]">สภา${D[l.audience]??""}</span>`:""}
        </div>
        <p class="text-sm font-bold text-[var(--ink)]">${c(l.title)}</p>
        ${l.body?`<p class="text-xs text-[var(--ink-2)] whitespace-pre-line">${c(l.body)}</p>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${f} · ${new Date(l.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
        ${l.type==="ack"?`<p class="text-[0.6875rem] text-[var(--muted-2)]">✋ รับทราบแล้ว ${(de==null?void 0:de[l.id])??0}${E!=null?" จาก "+E:""} คน</p>`:""}
        ${v?m?'<p class="text-xs font-bold text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">✅ รับทราบแล้ว</p>':`<button type="button" class="btn-ack-ann text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-id="${l.id}">รับทราบ</button>`:""}
      </div>`};return`${n}${s}${a}<div class="space-y-3">${r.map(o).join("")}</div>`}let Q=null,Ee=null,it=null;const Rs={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"],improve:["ควรปรับปรุง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft-line)] border-[var(--bad-soft-line)]"]};async function Br(){Q=await fa().catch(()=>[]),x()}async function Hs(){const e=await ya(P).catch(()=>[]);Ee=Object.fromEntries(e.map(t=>[t.member_id,t])),x()}function Nr(){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📐 เกณฑ์การประเมินการปฏิบัติหน้าที่ (รวม ${Q.reduce((t,r)=>t+Number(r.weight),0)} คะแนน)</p>
      <div class="space-y-1.5">
        ${Q.map(t=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${c(t.name)}</span>
            <span class="font-bold text-[var(--muted)]">${t.weight} คะแนน</span>
            <button type="button" class="btn-remove-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${t.id}">✕</button>
          </div>`).join("")}
      </div>
      <form id="criterion-form" class="flex gap-2 mt-3">
        <input name="name" placeholder="เพิ่มเกณฑ์ใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" required />
        <input name="weight" type="number" min="1" placeholder="คะแนน" class="w-20 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`}function Fs(){if(Q===null)return Br(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Ee===null)return Hs(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.isAdmin||d.role==="teacher",t=Q.reduce((a,o)=>a+Number(o.weight),0),r=e?Nr():"",n=a=>{var h,f;const o=Ee[a.id],[l,p]=o!=null&&o.decision?Rs[o.decision]:["ยังไม่ประเมิน","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"],u=d.role==="student"&&d.student&&a.student_id===d.student.id;if(!e&&!u)return"";const b=it===a.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-eval-card="${a.id}">
        <div class="flex items-center gap-3">
          ${N(a.students,"w-10 h-12")}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((h=a.students)==null?void 0:h.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${c(((f=a.council_positions)==null?void 0:f.position_name)??"—")}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${p}">${l}</span>
            ${(o==null?void 0:o.total_score)!=null?`<p class="text-xs text-[var(--muted-2)] mt-0.5">${o.total_score}/${o.max_score??t}</p>`:""}
          </div>
        </div>
        ${e?`<button type="button" class="btn-toggle-eval text-xs font-bold text-[var(--primary)]" data-id="${a.id}">${b?"▲ ซ่อนแบบประเมิน":o?"✏️ แก้ไขคะแนน":"📝 ให้คะแนน"}</button>`:""}
        ${e&&b?`
          <form class="eval-score-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-member-id="${a.id}">
            ${Q.map(m=>{var v;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${c(m.name)} <span class="text-[var(--muted-2)]">(เต็ม ${m.weight})</span></span>
                <input type="number" min="0" max="${m.weight}" step="0.5" name="c_${m.id}" value="${((v=o==null?void 0:o.scores)==null?void 0:v[m.id])??""}" class="w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center" />
              </div>`}).join("")}
            <select name="decision" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs bg-[var(--surface)]">
              <option value="">— สรุปผล —</option>
              <option value="pass" ${(o==null?void 0:o.decision)==="pass"?"selected":""}>ผ่าน</option>
              <option value="improve" ${(o==null?void 0:o.decision)==="improve"?"selected":""}>ควรปรับปรุง</option>
              <option value="fail" ${(o==null?void 0:o.decision)==="fail"?"selected":""}>ไม่ผ่าน</option>
            </select>
            <textarea name="comment" rows="2" placeholder="ความเห็นผู้ประเมิน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none">${c((o==null?void 0:o.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผลประเมิน</button>
          </form>`:""}
        ${(o==null?void 0:o.decision)==="pass"?o.certificate_issued_at?`<button type="button" class="btn-view-cert text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-member-id="${a.id}">🏅 ดูเกียรติบัตร</button>`:e?`<button type="button" class="btn-issue-cert text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-member-id="${a.id}">🏅 ออกเกียรติบัตร</button>`:"":""}
      </div>`},i=d.members.filter(a=>e||d.role==="student"&&d.student&&a.student_id===d.student.id).map(n).filter(Boolean).join("");return!e&&!i?`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">คุณยังไม่ได้เป็นสมาชิกสภาที่มีผลประเมิน</p>`:i?`${r}<div class="space-y-3">${i}</div>`:`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีสมาชิกสภาให้ประเมิน</p>`}function Ws({member:e,evaluation:t,cfg:r}){var l,p;const n=c(((l=e.students)==null?void 0:l.full_name)??"—"),s=c(((p=e.council_positions)==null?void 0:p.position_name)??"—"),i=c(r.council_name||"ระบบสภานักเรียน"),a=c(t.certificate_no||""),o=new Date(t.certificate_issued_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"});return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8">
    <title>เกียรติบัตร ${n}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'Sarabun', sans-serif; background: #fdfaf3; padding: 40px; }
      .cert { max-width: 900px; margin: 0 auto; border: 6px double #b5892b; padding: 50px 40px; text-align: center; background: #fffdf8; }
      .badge { width: 74px; height: 74px; border-radius: 50%; border: 2px solid #e2d4ae; background: #fdf7e9; display: grid; place-items: center; margin: 0 auto 14px; font-size: 24px; color: #8a6a1f; font-weight: 700; }
      h1 { color: #8a6a1f; font-size: 34px; margin: 6px 0 18px; }
      .name { font-size: 26px; font-weight: 700; border-bottom: 1px solid #e2d4ae; display: inline-block; padding: 0 24px 8px; margin: 10px 0 18px; }
      .sign { display: flex; justify-content: space-around; margin-top: 60px; }
      .sign div { width: 220px; border-top: 1px solid #999; padding-top: 6px; font-size: 13px; color: #555; }
      @media print { body { background: #fff; padding: 0; } .cert { border-width: 4px; } }
    </style></head>
    <body>
      <div class="cert">
        <div class="badge">🏛️</div>
        <p style="color:#6e5f65;font-size:13px;letter-spacing:1px;">${i}</p>
        <h1>เกียรติบัตร</h1>
        <p style="color:#4a3b41;">มอบเพื่อแสดงว่า</p>
        <p class="name">${n}</p>
        <p style="color:#1d1519;line-height:1.9;max-width:560px;margin:0 auto;">ได้ปฏิบัติหน้าที่ <b>${s}</b> ของ${i} ด้วยความรับผิดชอบ ทุ่มเท และเป็นแบบอย่างที่ดี จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติสืบไป</p>
        <p style="color:#90828a;font-size:12px;margin-top:16px;">ให้ไว้ ณ วันที่ ${o} ${a?"· เลขที่ "+a:""}</p>
        <div class="sign">
          <div>ครูที่ปรึกษาสภานักเรียน</div>
          <div>ผู้อำนวยการโรงเรียน</div>
        </div>
      </div>
    </body></html>`}function rr(e,t){lr(Ws({member:e,evaluation:t,cfg:d.cfg}))}let G=null,K=null,ze=null,Ge=null;const Mr={draft:["ร่าง","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],pending_advisor:["รอครูที่ปรึกษาประจำฝ่ายรับรอง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_dept_head:["รอหัวหน้าฝ่ายกิจการนักเรียน","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_director:["รอผู้อำนวยการ","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],approved:["อนุมัติแล้ว","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"]};async function zs(){G=await $a(P).catch(()=>[]),x()}async function Gs(){Ge=d.teacher?await xr(d.teacher.id).catch(()=>[]):[],x()}const be=e=>(e||"").split(`
`).map(t=>t.trim()).filter(Boolean),Ke=(e,t)=>be(e).map(r=>{const n=r.split("|").map(s=>s.trim());for(;n.length<t;)n.push("");return n.slice(0,t)}),Xe=e=>(Array.isArray(e)?e:[]).map(t=>t.join(" | ")).join(`
`),je=e=>(Array.isArray(e)?e:[]).join(`
`),Pr=e=>Number(e||0).toLocaleString("th-TH"),Or=e=>(e.budget_items||[]).reduce((t,r)=>t+(Number(r[1])||0),0),mt=["title","planArea","projectType","schoolStrategy","educationStandard","responsiblePersons","rationale","objectives","goalsQuantitative","goalsQualitative","workSteps","durationText","locationText","budgetItems","stakeholders","evaluationItems","expectedResults"];function Us(){return["คุณคือผู้ช่วยแปลงไฟล์ใบเสนอโครงการของโรงเรียน (ไฟล์ที่แนบมาในแชทนี้) ให้เป็นข้อมูล CSV ตามสเปคที่กำหนดไว้เป๊ะๆ ด้านล่างนี้ ห้ามแต่งข้อมูลขึ้นเองถ้าไม่มีในไฟล์ต้นฉบับ — เว้นว่างไว้แทน","","สร้างตาราง CSV จำนวน 1 แถวข้อมูล (แถวหัวตาราง 1 แถว + แถวข้อมูล 1 แถว) โดยแถวหัวตารางต้องเป็นข้อความนี้เป๊ะๆ (ห้ามแปล ห้ามสลับลำดับ ห้ามเว้นคอลัมน์):",mt.join(","),"","ความหมายแต่ละคอลัมน์และวิธีใส่ข้อมูล:","- title: ชื่อโครงการ","- planArea: แผนงาน","- projectType: ลักษณะโครงการ (เช่น โครงการต่อเนื่อง/โครงการใหม่)","- schoolStrategy: สนองกลยุทธ์โรงเรียน","- educationStandard: สนองมาตรฐานการศึกษา/ตัวชี้วัด","- responsiblePersons: ผู้รับผิดชอบโครงการ — ถ้ามีหลายคน ให้ขึ้นบรรทัดใหม่ทีละคนภายในเซลล์เดียวกัน","- rationale: หลักการและเหตุผล","- objectives: วัตถุประสงค์ — ขึ้นบรรทัดใหม่ทีละข้อภายในเซลล์เดียวกัน","- goalsQuantitative: เป้าหมายเชิงปริมาณ — ขึ้นบรรทัดใหม่ทีละข้อ","- goalsQualitative: เป้าหมายเชิงคุณภาพ — ขึ้นบรรทัดใหม่ทีละข้อ",'- workSteps: วิธีดำเนินงาน — แต่ละขั้นตอนขึ้นบรรทัดใหม่ 1 บรรทัดต่อ 1 ขั้นตอน แต่ละบรรทัดคั่น 4 ค่าด้วย " | " ตามลำดับ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ',"- durationText: ระยะเวลาดำเนินการโครงการโดยรวม","- locationText: สถานที่ดำเนินงาน",'- budgetItems: งบประมาณ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: รายการ | จำนวนเงิน (ตัวเลขล้วน ห้ามมีคอมมาคั่นหลักหรือคำว่า "บาท")','- stakeholders: หน่วยงาน/ผู้เกี่ยวข้อง — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: หน่วยงาน/บุคคล | จำนวน (คน)','- evaluationItems: การประเมินผลความสำเร็จ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด',"- expectedResults: ผลที่คาดว่าจะได้รับ — ขึ้นบรรทัดใหม่ทีละข้อ","","กฎสำคัญที่ต้องทำตามเป๊ะๆ:",'1. คอลัมน์ไหนมีการขึ้นบรรทัดใหม่ภายในเซลล์ ต้องครอบข้อความทั้งเซลล์ด้วยเครื่องหมายคำพูด " " เสมอ (มาตรฐาน CSV)',"2. มีข้อมูลแค่ 1 แถวข้อมูลเท่านั้น (1 โครงการต่อ 1 ไฟล์)","3. ถ้าหาข้อมูลคอลัมน์ไหนไม่เจอในไฟล์ต้นฉบับ ให้เว้นว่างไว้ ห้ามเดาขึ้นมาเอง","4. ตอบกลับเฉพาะเนื้อหา CSV เท่านั้น ห้ามมีคำอธิบายอื่นปนอยู่ในคำตอบ ให้ครอบคำตอบทั้งหมดด้วย code block รูปแบบนี้: ```csv (เนื้อหา CSV) ```"].join(`
`)}function Vs(e){let t=(e??"").trim();return t.startsWith("```")&&(t=t.replace(/^```[a-zA-Z]*\n?/,"").replace(/```\s*$/,"").trim()),t}function Ys(e){const t=[];let r=[],n="",s=!1;const i=e.replace(/\r\n/g,`
`);for(let a=0;a<i.length;a++){const o=i[a];s?o==='"'?i[a+1]==='"'?(n+='"',a++):s=!1:n+=o:o==='"'?s=!0:o===","?(r.push(n),n=""):o===`
`?(r.push(n),t.push(r),r=[],n=""):n+=o}return r.push(n),t.push(r),t.filter(a=>a.some(o=>o.trim()!==""))}function Qs(e){const t=Vs(e);if(t.startsWith("{")){const a=JSON.parse(t),o={};for(const l of mt){if(!(l in a))continue;const p=a[l];o[l]=Array.isArray(p)?p.map(u=>Array.isArray(u)?u.join(" | "):String(u??"")).join(`
`):String(p??"")}return o}const r=Ys(t);if(r.length<2)throw new Error("ไม่พบข้อมูล — ต้องมีทั้งแถวหัวตารางและแถวข้อมูล");const n=r[0].map(a=>a.trim()),s=r[1],i={};return n.forEach((a,o)=>{mt.includes(a)&&(i[a]=(s[o]??"").trim())}),i}function Js(e){const t=document.getElementById("doc-form");if(!t)return 0;let r=0;for(const n of mt){if(e[n]===void 0)continue;const s=t.elements[n];s&&(s.value=e[n],r++)}return r}function Ks(){var r;(r=document.getElementById("doc-ai-import-modal"))==null||r.remove();const e=document.createElement("div");e.id="doc-ai-import-modal",e.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-lg p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">🤖 ใช้ AI ช่วยกรอกจากไฟล์ใบโครงการเดิม</p>
        <button type="button" id="btn-close-doc-ai-import" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      <ol class="text-xs text-[var(--muted-2)] list-decimal list-inside space-y-1 mb-3">
        <li>คัดลอกคำสั่งด้านล่าง</li>
        <li>วางในแชท ChatGPT (หรือ AI อื่น) พร้อมแนบไฟล์ใบโครงการเดิม (Word/PDF/รูปถ่าย)</li>
        <li>คัดลอกคำตอบที่ได้ (หรือดาวน์โหลดไฟล์ CSV ถ้า AI สร้างไฟล์ให้) แล้วนำกลับมาวาง/อัปโหลดด้านล่างนี้</li>
      </ol>
      <button type="button" id="btn-doc-ai-copy-prompt" class="w-full py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] font-bold text-xs mb-3">📋 คัดลอกคำสั่งสำหรับ AI</button>
      <div class="space-y-3 pt-2 border-t border-[var(--line-soft)]">
        <div>
          <label class="text-xs font-semibold text-[var(--muted)] mb-1 block">อัปโหลดไฟล์ CSV ที่ได้จาก AI</label>
          <input type="file" id="doc-ai-csv-file" accept=".csv,text/csv" class="w-full text-xs border border-[var(--line)] rounded-xl px-3 py-2 bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="text-xs font-semibold text-[var(--muted)] mb-1 block">หรือวางคำตอบที่ AI ตอบกลับมาตรงนี้</label>
          <textarea id="doc-ai-paste" rows="5" placeholder="วางคำตอบ CSV จาก AI ที่นี่" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs font-mono resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea>
          <button type="button" id="btn-doc-ai-import" class="w-full mt-2 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-xs">นำเข้าข้อมูลนี้ลงในฟอร์ม</button>
        </div>
      </div>
    </div>`,document.body.appendChild(e),e.querySelector("#btn-close-doc-ai-import").addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()}),e.querySelector("#btn-doc-ai-copy-prompt").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Us()),g("คัดลอกคำสั่งแล้ว — ไปวางในแชท AI พร้อมแนบไฟล์ใบโครงการได้เลย","success")}catch{g("คัดลอกอัตโนมัติไม่ได้ — ลองคัดลอกเองจากคำสั่งที่แสดง","warning")}});const t=n=>{try{const s=Qs(n),i=Js(s);if(!i)throw new Error("ไม่พบข้อมูลที่ตรงกับฟอร์ม ตรวจสอบว่าหัวตาราง CSV ตรงกับคำสั่งที่กำหนด");g(`นำเข้าข้อมูลแล้ว ${i} ช่อง — กรุณาตรวจสอบความถูกต้องก่อนบันทึกร่าง`,"success"),e.remove()}catch(s){g("นำเข้าข้อมูลไม่สำเร็จ: "+k(s),"error")}};e.querySelector("#doc-ai-csv-file").addEventListener("change",async n=>{var i;const s=(i=n.target.files)==null?void 0:i[0];if(s)try{t(await s.text())}finally{n.target.value=""}}),e.querySelector("#btn-doc-ai-import").addEventListener("click",()=>{const n=e.querySelector("#doc-ai-paste").value;if(!n.trim()){g("กรุณาวางคำตอบจาก AI ก่อน","warning");return}t(n)})}function Xs(){return d.isCouncilAdvisor||d.isAdmin||d.isChair}function Zs(e){return e.status==="pending_advisor"&&(d.isAdmin||d.isCouncilAdvisor&&(Ge==null?void 0:Ge.includes(e.position_id)))}function ei(e){return e.status==="pending_dept_head"&&(d.isAdmin||d.isStudentAffairsHead)}function ti(e){return e.status==="pending_director"&&(d.isAdmin||d.isSchoolDirector)}function ri(){if(!(d.isAdmin||d.role==="teacher"||d.isChair))return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมิน ครู หรือประธานสภาที่ล็อกอินอยู่</p>';if(G===null)return zs(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(d.isCouncilAdvisor&&Ge===null)return Gs(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(K!==null)return ni();const t=Xs()?'<button type="button" id="btn-new-doc" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ ร่างเอกสารโครงการใหม่</button>':"";if(!G.length)return`${t}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีเอกสารโครงการ</p>`;const r=n=>{var o;const[s,i]=Mr[n.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],a=d.student&&n.created_by_student_id===d.student.id||d.teacher&&n.created_by_teacher_id===d.teacher.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3.5 space-y-2 bg-[var(--surface)]">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${c(n.title)}</p>
            <p class="text-xs text-[var(--muted-2)]">${(o=n.council_positions)!=null&&o.position_name?c(n.council_positions.position_name)+" · ":""}${Pr(Or(n))} บาท</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${i}">${s}</span>
        </div>
        ${n.status==="draft"&&n.last_rejected_stage?`<p class="text-xs text-[var(--bad)] bg-[var(--bad-soft)] rounded-[10px] p-2.5">↩️ ถูกตีกลับจากขั้น${c({advisor:"ครูที่ปรึกษาประจำฝ่าย",dept_head:"หัวหน้าฝ่ายกิจการนักเรียน",director:"ผู้อำนวยการ"}[n.last_rejected_stage]??n.last_rejected_stage)}${n.last_rejection_comment?": "+c(n.last_rejection_comment):""}</p>`:""}
        <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-view-doc-detail text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">📄 ดูรายละเอียด</button>
          ${n.status==="draft"&&(a||d.isAdmin)?`<button type="button" class="btn-edit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${n.id}">✏️ แก้ไข</button>`:""}
          ${n.status==="draft"&&(a||d.isAdmin)?`<button type="button" class="btn-submit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${n.id}">📤 เสนอขออนุมัติ</button>`:""}
          ${Zs(n)||ei(n)||ti(n)?`
            <button type="button" class="btn-approve-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white" data-id="${n.id}">✅ อนุมัติ</button>
            <button type="button" class="btn-reject-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${n.id}">❌ ไม่อนุมัติ</button>`:""}
          ${n.status==="approved"?`<button type="button" class="btn-print-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">🖨️ พิมพ์เอกสาร</button>`:""}
        </div>
      </div>`};return`${t}<div class="space-y-3">${G.map(r).join("")}</div>${ai()}`}function Rr(e){try{return JSON.parse(d.cfg[e]||"[]")}catch{return[]}}function Ze({name:e,placeholder:t,configKey:r,value:n,extraClass:s=""}){const i=Rr(r);return i.length?`<select name="${e}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${s}">
    <option value="">— เลือก${c(t)} —</option>
    ${i.map(a=>`<option value="${c(a)}" ${n===a?"selected":""}>${c(a)}</option>`).join("")}
  </select>`:`<input name="${e}" placeholder="${c(t)} (ยังไม่ได้ตั้งค่าตัวเลือกในหน้าตั้งค่า)" value="${c(n??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${s}" />`}function ni(){const e=K==="new",t=e?{}:G.find(s=>s.id===K)??{},r=d.isChair&&!d.isCouncilAdvisor&&!d.isAdmin?"council":t.origin??(d.isChair?"council":"teacher");H===null&&Pt();const n=H!=null&&H.length?`
    <div>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mb-1">ครูที่ปรึกษาสภานักเรียน (คลิกเพื่อเพิ่ม)</p>
      <div class="flex flex-wrap gap-1.5">
        ${H.map(s=>`<button type="button" class="doc-responsible-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition" data-name="${c(s.full_name)}">+ ${c(s.full_name)}</button>`).join("")}
      </div>
    </div>`:"";return`
    <div class="flex items-center gap-3 mb-4">
      <button type="button" id="btn-doc-form-back" class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
      <h2 class="text-base font-bold text-[var(--ink)]">${e?"ร่างเอกสารโครงการใหม่":"แก้ไขร่างเอกสารโครงการ"}</h2>
    </div>
    <button type="button" id="btn-doc-ai-import-open" class="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] text-xs font-bold mb-3">🤖 ใช้ AI ช่วยกรอกจากไฟล์ใบโครงการเดิม</button>
    <form id="doc-form" class="space-y-3" data-origin="${r}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">ข้อมูลทั่วไป</p>
        <input name="title" required placeholder="ชื่อโครงการ" value="${c(t.title??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <div class="grid grid-cols-2 gap-2">
          ${Ze({name:"planArea",placeholder:"แผนงาน",configKey:"council_doc_plan_areas",value:t.plan_area})}
          ${Ze({name:"projectType",placeholder:"ลักษณะโครงการ",configKey:"council_doc_project_types",value:t.project_type})}
        </div>
        ${Ze({name:"schoolStrategy",placeholder:"สนองกลยุทธ์โรงเรียน",configKey:"council_doc_school_strategies",value:t.school_strategy,extraClass:"w-full"})}
        ${Ze({name:"educationStandard",placeholder:"สนองมาตรฐานการศึกษา/ตัวชี้วัด",configKey:"council_doc_education_standards",value:t.education_standard,extraClass:"w-full"})}
        ${n}
        <textarea name="responsiblePersons" rows="2" placeholder="ผู้รับผิดชอบโครงการ (บรรทัดละ 1 ชื่อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(je(t.responsible_persons))}</textarea>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ฝ่ายที่รับผิดชอบ ${r==="council"?'<span class="text-[var(--bad)]">*</span>':""}</label>
          <select name="positionId" ${r==="council"?"required":""} class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— ไม่ระบุ —</option>
            ${d.positions.map(s=>`<option value="${s.id}" ${t.position_id===s.id?"selected":""}>${c(s.position_name)} (สภา${c(D[s.gender]??"")})</option>`).join("")}
          </select>
          ${r==="council"?'<p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">โครงการที่สภาริเริ่มเองต้องระบุฝ่าย เพื่อส่งให้ครูที่ปรึกษาประจำฝ่ายนั้นตรวจก่อน</p>':""}
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หลักการ วัตถุประสงค์ เป้าหมาย</p>
        <textarea name="rationale" rows="3" placeholder="หลักการและเหตุผล" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(t.rationale??"")}</textarea>
        <textarea name="objectives" rows="2" placeholder="วัตถุประสงค์ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(je(t.objectives))}</textarea>
        <textarea name="goalsQuantitative" rows="2" placeholder="เป้าหมายเชิงปริมาณ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(je(t.goals_quantitative))}</textarea>
        <textarea name="goalsQualitative" rows="2" placeholder="เป้าหมายเชิงคุณภาพ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(je(t.goals_qualitative))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">วิธีดำเนินงาน</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ</p>
        <textarea name="workSteps" rows="4" placeholder="เสนอโครงการต่อผู้บริหาร | ธ.ค.2568 | - | นายเปาซี" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Xe(t.work_steps))}</textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="durationText" placeholder="ระยะเวลาดำเนินการ" value="${c(t.duration_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <input name="locationText" placeholder="สถานที่ดำเนินงาน" value="${c(t.location_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">งบประมาณ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: รายการ | จำนวนเงิน(บาท) — รวมยอดคำนวณอัตโนมัติ</p>
        <textarea name="budgetItems" rows="4" placeholder="ค่าอาหาร 115 คน x 5 มื้อ | 17250" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Xe(t.budget_items))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หน่วยงาน/ผู้เกี่ยวข้อง</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: หน่วยงาน/บุคคล | จำนวน(คน)</p>
        <textarea name="stakeholders" rows="3" placeholder="ครูที่ปรึกษา | 9" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Xe(t.stakeholders))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">การประเมินผลความสำเร็จ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด</p>
        <textarea name="evaluationItems" rows="4" placeholder="ผู้เรียนพัฒนาศักยภาพผู้นำ | ร้อยละ 80 | ประเมินจากแบบสังเกตการณ์ | แบบสังเกตการณ์" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Xe(t.evaluation_items))}</textarea>
        <textarea name="expectedResults" rows="2" placeholder="ผลที่คาดว่าจะได้รับ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(je(t.expected_results))}</textarea>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex gap-2">
        <button type="button" id="btn-doc-form-cancel" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกร่าง</button>
      </div>
    </form>`}function Hr(e,t){var a;const r=c(t.council_name||"ระบบสภานักเรียน"),n=(o,l)=>l!=null&&l.length?`
    <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px;">
      <thead><tr>${o.map(p=>`<th style="border:1px solid #ccc;padding:6px;background:#f8f4f4;">${c(p)}</th>`).join("")}</tr></thead>
      <tbody>${l.map(p=>`<tr>${p.map(u=>`<td style="border:1px solid #ccc;padding:6px;">${c(u)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`:"",s=o=>o!=null&&o.length?`<ol style="margin:4px 0;padding-left:20px;">${o.map(l=>`<li>${c(l)}</li>`).join("")}</ol>`:"—",i='style="display:block;margin-bottom:3px;"';return`
    ${t.council_logo_url?`<img src="${c(t.council_logo_url)}" style="height:64px;object-fit:contain;display:block;margin:0 auto 8px;" />`:""}
    <h1 style="text-align:center;font-size:20px;margin-bottom:2px;">แบบเสนอโครงการ</h1>
    <p style="text-align:center;color:#6e5f65;font-size:13px;margin-bottom:20px;">${r} · ปีการศึกษา ${e.academic_year}</p>
    <div style="margin-bottom:12px;"><b ${i}>ชื่อโครงการ</b>${c(e.title)}</div>
    <div style="margin-bottom:12px;"><b ${i}>แผนงาน</b>${c(e.plan_area||"—")} &nbsp;·&nbsp; <b style="display:inline">ลักษณะโครงการ</b> ${c(e.project_type||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>สนองกลยุทธ์โรงเรียน</b>${c(e.school_strategy||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>สนองมาตรฐานการศึกษา/ตัวชี้วัด</b>${c(e.education_standard||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>ผู้รับผิดชอบโครงการ</b>${s(e.responsible_persons)}</div>
    <div style="margin-bottom:12px;"><b ${i}>ฝ่ายที่รับผิดชอบ</b>${c(((a=e.council_positions)==null?void 0:a.position_name)||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>1. หลักการและเหตุผล</b>${c(e.rationale||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>2. วัตถุประสงค์</b>${s(e.objectives)}</div>
    <div style="margin-bottom:12px;"><b ${i}>3. เป้าหมาย</b>
      <div style="margin-top:4px;"><i>3.1 เชิงปริมาณ</i>${s(e.goals_quantitative)}</div>
      <div><i>3.2 เชิงคุณภาพ</i>${s(e.goals_qualitative)}</div>
    </div>
    <div style="margin-bottom:12px;"><b ${i}>4. วิธีดำเนินงาน</b>${n(["ขั้นตอน/กิจกรรม","ระยะเวลา","งบประมาณ","ผู้รับผิดชอบ"],e.work_steps)}</div>
    <div style="margin-bottom:12px;"><b ${i}>5. ระยะเวลาดำเนินการ</b>${c(e.duration_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>6. สถานที่ดำเนินงาน</b>${c(e.location_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>7. งบประมาณ</b>${n(["รายการ","จำนวนเงิน (บาท)"],e.budget_items)}<b>รวมเป็นเงิน ${Pr(Or(e))} บาท</b></div>
    <div style="margin-bottom:12px;"><b ${i}>8. หน่วยงาน/ผู้เกี่ยวข้อง</b>${n(["หน่วยงาน/บุคคล","จำนวน (คน)"],e.stakeholders)}</div>
    <div style="margin-bottom:12px;"><b ${i}>9. การประเมินผลความสำเร็จ</b>${n(["เป้าหมาย","ตัวบ่งชี้ความสำเร็จ","วิธีวัดและประเมินผล","เครื่องมือวัด"],e.evaluation_items)}</div>
    <div style="margin-bottom:12px;"><b ${i}>10. ผลที่คาดว่าจะได้รับ</b>${s(e.expected_results)}</div>
    <div style="display:flex;justify-content:space-around;margin-top:50px;text-align:center;flex-wrap:wrap;gap:20px;">
      <div style="width:200px;"><div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">ผู้เสนอโครงการ</div></div>
      <div style="width:200px;">
        ${e.dept_head_signature_url?`<img src="${c(e.dept_head_signature_url)}" style="height:50px;object-fit:contain;display:block;margin:0 auto 4px;" />`:""}
        <div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">หัวหน้าฝ่ายกิจการนักเรียน</div>
      </div>
      <div style="width:200px;">
        ${e.director_signature_url?`<img src="${c(e.director_signature_url)}" style="height:50px;object-fit:contain;display:block;margin:0 auto 4px;" />`:""}
        <div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">ผู้อำนวยการ${t.council_signer_director_name?" ("+c(t.council_signer_director_name)+")":""}</div>
      </div>
    </div>`}function ai(){if(!ze)return"";const e=G.find(s=>s.id===ze);if(!e)return"";const[t,r]=Mr[e.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],n=[e.advisor_decided_at?`✅ ครูที่ปรึกษาประจำฝ่ายรับรองแล้ว${e.advisor_comment?" — "+c(e.advisor_comment):""}`:"",e.dept_head_decided_at?`✅ หัวหน้าฝ่ายกิจการนักเรียนอนุมัติแล้ว${e.dept_head_comment?" — "+c(e.dept_head_comment):""}`:"",e.director_decided_at?`✅ ผู้อำนวยการอนุมัติแล้ว${e.director_comment?" — "+c(e.director_comment):""}`:""].filter(Boolean);return`
    <div class="fixed inset-0 z-[90] bg-[var(--surface)] flex flex-col" id="doc-detail-backdrop">
      <div class="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--line)] flex-shrink-0">
        <div class="min-w-0">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(e.title)}</p>
          <span class="text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${r} inline-block mt-0.5">${t}</span>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button type="button" id="btn-doc-detail-print" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]">🖨️ พิมพ์</button>
          <button type="button" id="btn-doc-detail-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none">✕</button>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div style="font-family:'Sarabun',sans-serif;line-height:1.8;color:#1d1519;max-width:800px;margin:0 auto;">
          ${Hr(e,d.cfg)}
          ${n.length?`<div style="margin-top:24px;padding-top:16px;border-top:1px dashed #ccc;"><b style="display:block;margin-bottom:6px;font-size:13px;">ประวัติการอนุมัติ</b><div style="font-size:13px;color:#106143;">${n.map(s=>`<p style="margin-bottom:2px;">${s}</p>`).join("")}</div></div>`:""}
        </div>
      </div>
    </div>`}function si(e,t){return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>โครงการ ${c(e.title)}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Sarabun', sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.8; color: #1d1519; }
      @media print { body { padding: 0; } }
    </style></head><body>
      ${Hr(e,t)}
    </body></html>`}function nr(e){lr(si(e,d.cfg))}const ar=e=>{if(!e)return"";const t=new Date(e);if(isNaN(t))return"";const r=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`};function ii(){const e=d.cfg;return`
    <form id="settings-general-form" class="space-y-4 pb-4">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">🏛️ ข้อมูลทั่วไป</p>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ชื่อสภานักเรียน</label>
          <input name="council_name" value="${c(e.council_name||"")}" placeholder="สภานักเรียนโรงเรียน..." class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">โลโก้ (URL รูปภาพ)</label>
          <input name="council_logo_url" value="${c(e.council_logo_url||"")}" placeholder="https://..." class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">สีธีมฝ่ายชาย</label>
            <input type="color" name="council_theme_side_m" value="${c(e.council_theme_side_m||"#14563b")}" class="w-full h-10 border border-[var(--line)] rounded-xl px-1 bg-[var(--surface)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">สีธีมฝ่ายหญิง</label>
            <input type="color" name="council_theme_side_w" value="${c(e.council_theme_side_w||"#a3134f")}" class="w-full h-10 border border-[var(--line)] rounded-xl px-1 bg-[var(--surface)]" />
          </div>
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">⚠️ สีธีมยังเป็นค่าที่บันทึกไว้เฉยๆ ยังไม่ได้ใช้สลับสีจริงในหน้าเว็บ (รอฟีเจอร์สลับธีมตามฝ่ายในเฟสถัดไป)</p>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">🗓️ ห้วงปฏิบัติหน้าที่</p>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex gap-2 items-center">
            <span class="text-xs text-[var(--muted)] flex-shrink-0">เริ่ม ภาค/ปี</span>
            <input name="council_term_start_semester" value="${c(e.council_term_start_semester||"")}" placeholder="2" class="w-14 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
            <input name="council_term_start_year" value="${c(e.council_term_start_year||"")}" placeholder="2568" class="flex-1 min-w-0 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-xs text-[var(--muted)] flex-shrink-0">สิ้นสุด ภาค/ปี</span>
            <input name="council_term_end_semester" value="${c(e.council_term_end_semester||"")}" placeholder="2" class="w-14 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
            <input name="council_term_end_year" value="${c(e.council_term_end_year||"")}" placeholder="2569" class="flex-1 min-w-0 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">✅ เกณฑ์คุณสมบัติผู้สมัคร</p>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เกรดเฉลี่ยขั้นต่ำ (สามัญ)</label>
            <input type="number" step="0.01" min="0" max="4" name="council_min_gpa" value="${c(e.council_min_gpa||"2.50")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เกรดเฉลี่ยขั้นต่ำ (ศาสนา)</label>
            <input type="number" step="0.01" min="0" max="4" name="council_min_gpa_religious" value="${c(e.council_min_gpa_religious||"2.50")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ระดับชั้นที่สมัครได้ (คั่นด้วย ,)</label>
          <input name="council_eligible_grade_levels" value="${c(e.council_eligible_grade_levels||"ม.4,ม.5,ม.6")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">จำนวนเกียรติบัตร/รางวัลขั้นต่ำที่ต้องแนบ</label>
          <input type="number" min="0" step="1" name="council_min_certificates" value="${c(e.council_min_certificates||"5")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="council_require_teacher_endorsement" ${e.council_require_teacher_endorsement!=="false"?"checked":""} class="w-4 h-4" />
          บังคับให้ครูที่ปรึกษาสามัญรับรองก่อนเข้าสัมภาษณ์
        </label>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="council_require_peer_endorsement" ${e.council_require_peer_endorsement==="true"?"checked":""} class="w-4 h-4" />
          บังคับให้สมาชิกสภานักเรียนปัจจุบัน (เพศเดียวกัน) รับรองด้วยก่อนเข้าสัมภาษณ์ — ยกเว้นผู้สมัครที่เป็นสมาชิกสภาปัจจุบันอยู่แล้ว
        </label>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เปิดรับสมัครตั้งแต่</label>
            <input type="datetime-local" name="council_apply_opens_at" value="${c(ar(e.council_apply_opens_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ปิดรับสมัครเมื่อ</label>
            <input type="datetime-local" name="council_apply_closes_at" value="${c(ar(e.council_apply_closes_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">📈 เกณฑ์การประเมินความเป็นสมาชิกสภา</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">คิดจากกิจกรรมที่เกิดขึ้นแล้ว (กำลังดำเนินการ/เสร็จแล้ว) และถูกเลือกไว้ตอนสร้างว่า "นับผล" เท่านั้น — ตัวเลข % เป็นข้อมูลให้ครูที่ปรึกษาสภาดูประกอบการตัดสินใจเท่านั้น ไม่ตัดสิทธิ์อัตโนมัติ</p>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">% เช็คชื่อขั้นต่ำที่ควรผ่าน (เว้นว่าง = ไม่ตั้งเกณฑ์)</label>
          <input type="number" min="0" max="100" step="1" name="council_min_attendance_pct" value="${c(e.council_min_attendance_pct||"")}" placeholder="เช่น 80" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">🌟 จุดเด่นในหน้าหลัก</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">ควบคุมว่าปุ่ม "สมัครสภานักเรียน" หรือ "การเลือกตั้ง" จะโชว์เด่นในหน้าหลักของนักเรียน/ครูทั่วไป — ปล่อยว่างไว้ให้ระบบคำนวณจากช่วงเปิด-ปิดรับสมัคร/เลือกตั้งด้านบนให้อัตโนมัติ</p>
        <select name="council_featured_phase" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
          <option value="" ${e.council_featured_phase?"":"selected"}>— อัตโนมัติจากวันที่ (แนะนำ) —</option>
          <option value="apply" ${e.council_featured_phase==="apply"?"selected":""}>เน้น "สมัครสภานักเรียน"</option>
          <option value="election" ${e.council_featured_phase==="election"?"selected":""}>เน้น "การเลือกตั้ง"</option>
          <option value="none" ${e.council_featured_phase==="none"?"selected":""}>ไม่เน้นอะไรเป็นพิเศษ (แสดงเท่ากัน)</option>
        </select>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">👁️ การมองเห็นระบบ</p>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="council_visible_to_all" ${e.council_visible_to_all!=="false"?"checked":""} class="w-4 h-4" />
          เปิดให้นักเรียน/ครูทุกคนเห็นเมนูสภานักเรียน
        </label>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">รหัสนักเรียนที่ทดสอบได้แม้ปิดระบบ (คั่นด้วย , หรือขึ้นบรรทัดใหม่)</label>
          <textarea name="council_test_student_codes" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(e.council_test_student_codes||"")}</textarea>
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ข้อความขอบคุณหลังโหวต</label>
          <textarea name="council_election_thank_you_message" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(e.council_election_thank_you_message||"")}</textarea>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">✍️ ผู้ลงนามเอกสาร/เกียรติบัตร</p>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ครูที่ปรึกษาสภา</label>
            <input name="council_signer_advisor_name" value="${c(e.council_signer_advisor_name||"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ผู้อำนวยการโรงเรียน</label>
            <input name="council_signer_director_name" value="${c(e.council_signer_director_name||"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex justify-end">
        <button type="submit" class="px-6 py-2.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกการตั้งค่า</button>
      </div>
    </form>`}function oi(){const e={M:d.positions.filter(o=>o.gender==="M").sort((o,l)=>o.sort_order-l.sort_order),W:d.positions.filter(o=>o.gender==="W").sort((o,l)=>o.sort_order-l.sort_order)},t=o=>{const l=o==="M"?"👦 ฝ่ายชาย":"👧 ฝ่ายหญิง",p=e[o].map(u=>`
      <form class="position-row-form flex items-center gap-2 py-2 border-b border-[var(--line-soft)] last:border-0" data-id="${u.id}">
        <input name="position_name" value="${c(u.position_name)}" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-1.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <input name="seats_count" type="number" min="1" value="${u.seats_count}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
        ${u.is_elected?'<span class="text-[0.625rem] font-bold px-2 py-1 rounded-full bg-[var(--gold-soft)] text-[var(--gold-ink)] flex-shrink-0">มาจากเลือกตั้ง</span>':""}
        <button type="submit" class="text-xs font-bold text-[var(--primary)] flex-shrink-0 px-2 py-1.5">บันทึก</button>
        <button type="button" class="btn-delete-position text-[var(--bad)] flex-shrink-0 px-1 text-lg leading-none" data-id="${u.id}" title="ลบตำแหน่ง">✕</button>
      </form>`).join("");return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${l}</p>
        ${p||'<p class="text-xs text-[var(--muted-2)] py-2">ยังไม่มีตำแหน่ง</p>'}
        <form class="position-add-form flex gap-2 mt-3" data-gender="${o}">
          <input name="position_name" placeholder="เพิ่มตำแหน่งใหม่" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
          <input name="seats_count" type="number" min="1" value="1" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-2 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
        </form>
      </div>`},r=[],n=new Set;[...e.M,...e.W].forEach(o=>{n.has(o.position_name)||(n.add(o.position_name),r.push(o.position_name))});const s=e.M.reduce((o,l)=>o+Number(l.seats_count),0),i=e.W.reduce((o,l)=>o+Number(l.seats_count),0),a=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mt-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📊 สรุปรวมจำนวนที่นั่งทั้งสภา</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs">
          <thead><tr class="text-left text-[var(--muted)]"><th class="py-1.5 pr-2">ตำแหน่ง</th><th class="py-1.5 px-2 text-center">ชาย</th><th class="py-1.5 px-2 text-center">หญิง</th><th class="py-1.5 pl-2 text-center">รวม</th></tr></thead>
          <tbody>
            ${r.map(o=>{var u,b;const l=((u=e.M.find(h=>h.position_name===o))==null?void 0:u.seats_count)??0,p=((b=e.W.find(h=>h.position_name===o))==null?void 0:b.seats_count)??0;return`<tr class="border-t border-[var(--line-soft)]"><td class="py-1.5 pr-2 text-[var(--ink-2)]">${c(o)}</td><td class="py-1.5 px-2 text-center">${l}</td><td class="py-1.5 px-2 text-center">${p}</td><td class="py-1.5 pl-2 text-center font-bold text-[var(--primary)]">${l+p}</td></tr>`}).join("")}
            <tr class="border-t-2 border-[var(--line)] font-bold"><td class="py-1.5 pr-2 text-[var(--ink)]">รวมทั้งหมด</td><td class="py-1.5 px-2 text-center">${s}</td><td class="py-1.5 px-2 text-center">${i}</td><td class="py-1.5 pl-2 text-center text-[var(--primary)]">${s+i}</td></tr>
          </tbody>
        </table>
      </div>
    </div>`;return`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${t("M")}${t("W")}</div>${a}`}function li(){if(re===null)return _r(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(oe===null)return Ra(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Q===null)return Br(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(z===null)return Dr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=re.reduce((p,u)=>p+Number(u.weight),0),t=(e/2).toFixed(1),r=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎤 หัวข้อสัมภาษณ์ (รวม ${e} คะแนน · ผ่านเกณฑ์ที่ ≥ ${t})</p>
      <div class="space-y-1.5 mt-2">
        ${re.map(p=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${c(p.name)}</span>
            <span class="font-bold text-[var(--muted)]">${p.weight} คะแนน</span>
            <button type="button" class="btn-remove-interview-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${p.id}">✕</button>
          </div>`).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีหัวข้อ</p>'}
      </div>
      <form id="interview-criterion-form" class="flex gap-2 mt-3">
        <input name="name" placeholder="เพิ่มหัวข้อใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <input name="weight" type="number" min="1" value="10" class="w-20 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`,n=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),s=`
    <form id="settings-video-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎬 วิดีโอแนะนำตัว</p>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)]">ความยาวไม่เกิน</span>
        <input name="council_video_max_minutes" type="number" min="1" value="${c(d.cfg.council_video_max_minutes||"3")}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
        <span class="text-xs text-[var(--muted)]">นาที</span>
      </div>
      <label class="block text-xs font-medium text-[var(--muted)]">หัวข้อที่ต้องพูด (บรรทัดละ 1 หัวข้อ)</label>
      <textarea name="council_video_brief" rows="5" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${c(n.join(`
`))}</textarea>
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,i=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">💬 ข้อความสำเร็จรูปของครูที่ปรึกษาสามัญ</p>
      <div class="space-y-1.5">
        ${oe.map(p=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${c(p.phrase)}</span>
            <button type="button" class="btn-remove-phrase text-[var(--bad)] hover:text-[#8a2f22]" data-id="${p.id}">✕</button>
          </div>`).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีข้อความ</p>'}
      </div>
      <form id="phrase-form" class="flex gap-2 mt-3">
        <input name="phrase" placeholder="เพิ่มข้อความใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`,a=(p,u)=>`
    <div>
      <label class="block text-xs font-medium text-[var(--muted)] mb-1">${p} (บรรทัดละ 1 รายการ)</label>
      <textarea name="${u}" rows="3" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Rr(u).join(`
`))}</textarea>
    </div>`,o=`
    <form id="settings-doc-options-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-3">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">📄 ตัวเลือกฟอร์มเอกสารโครงการ</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] -mt-2">ใช้เป็นตัวเลือกในฟอร์มร่างเอกสารโครงการ (ถ้าไม่ตั้งค่าไว้ ฟอร์มจะให้พิมพ์เองแทน)</p>
      ${a("แผนงาน","council_doc_plan_areas")}
      ${a("ลักษณะโครงการ","council_doc_project_types")}
      ${a("สนองกลยุทธ์โรงเรียน","council_doc_school_strategies")}
      ${a("สนองมาตรฐานการศึกษา/ตัวชี้วัด","council_doc_education_standards")}
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,l=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🏅 เทมเพลตเกียรติบัตรกิจกรรม</p>
      <div class="space-y-1.5 mb-3">
        ${z.map(p=>{var h;const u=(h=p.layout)==null?void 0:h.background,b=u?u.type==="image"?u.imageUrl:null:p.type==="custom"?p.background_image_url:null;return`
          <div class="flex items-center gap-2 text-xs">
            ${b?`<img src="${c(b)}" class="w-10 h-7 object-cover rounded border border-[var(--line)] flex-shrink-0" />`:`<span class="flex-shrink-0">${c((xt[p.preset_key]??"🏅").split(" ")[0])}</span>`}
            <span class="flex-1 text-[var(--ink-2)] truncate">${c(p.name)} ${p.type==="preset"?"· "+c(xt[p.preset_key]??p.preset_key):"· อัปโหลดเอง"}</span>
            <button type="button" class="btn-design-cert-template text-[var(--primary)] hover:text-[var(--primary-dark)] font-bold flex-shrink-0" data-id="${p.id}">🎨 ออกแบบ</button>
            <button type="button" class="btn-remove-cert-template text-[var(--bad)] hover:text-[#8a2f22] flex-shrink-0" data-id="${p.id}">✕</button>
          </div>`}).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีเทมเพลต</p>'}
      </div>
      <form id="cert-template-form" class="space-y-2 pt-2 border-t border-[var(--line-soft)]">
        <input name="name" placeholder="ชื่อเทมเพลต เช่น เกียรติบัตรกิจกรรม YLA" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]" required />
        <div class="flex gap-2">
          <label class="flex-1 flex items-center gap-1.5 text-xs cursor-pointer">
            <input type="radio" name="template_type" value="preset" checked class="cert-template-type-radio" /> ดีไซน์สำเร็จรูป
          </label>
          <label class="flex-1 flex items-center gap-1.5 text-xs cursor-pointer">
            <input type="radio" name="template_type" value="custom" class="cert-template-type-radio" /> อัปโหลดเอง
          </label>
        </div>
        <select name="preset_key" id="cert-template-preset-select" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]">
          ${Object.entries(xt).map(([p,u])=>`<option value="${p}">${c(u)}</option>`).join("")}
        </select>
        <input type="file" name="background_image" id="cert-template-file-input" accept="image/*" class="hidden w-full text-xs" />
        <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่มเทมเพลต</button>
      </form>
    </div>`;return`${r}${s}${Nr()}${i}${o}${l}`}function di(){const e=Dt();return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🧩 เปิด/ปิดโมดูลย่อย</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">ปิดแล้วเมนู/หน้านั้นจะหายไปทั้งระบบทันที (บันทึกอัตโนมัติเมื่อกดสวิตช์)</p>
      ${Object.entries(Oa).map(([t,r])=>`
        <label class="flex items-center justify-between gap-3 py-2 border-b border-[var(--line-soft)] last:border-0">
          <span class="text-sm text-[var(--ink-2)]">${c(r)}</span>
          <input type="checkbox" class="module-toggle w-5 h-5 flex-shrink-0" data-key="${t}" ${e[t]!==!1?"checked":""} />
        </label>`).join("")}
    </div>`}const Ye={},Ue={},ge={};async function sr(e){const[t,r,n]=await Promise.all([Rn(e).catch(()=>[]),Hn(e).catch(()=>[]),Wn(e).catch(()=>[])]);Ye[e]=t,Ue[e]=r,ge[e]=n,x()}function ci(){var s;const e=d.isChair,t=d.isAdmin||d.isCouncilAdvisor;if(!e&&!t)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาหรือครูที่ปรึกษาสภา/แอดมินเท่านั้น</p>';const r='<p class="text-sm text-[var(--muted-2)] text-center py-10">⏳ กำลังโหลด...</p>';let n="";if(e){const i=ce((s=d.student)==null?void 0:s.gender);if(i&&Ye[i]===void 0)sr(i),n+=r;else if(i){const a=Ye[i],o=Ue[i]||[],l=ge[i]||[],p=new Set(l.map(b=>b.application_id)),u=o.filter(b=>!p.has(b.id));n+=`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📋 เสนอคณะทำงาน — สภา${D[i]}</p>
          ${a.length?u.length?`
          <form id="nominate-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
            <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกตำแหน่งที่ว่าง —</option>
              ${a.map(b=>`<option value="${b.id}">${c(b.position_name)}</option>`).join("")}
            </select>
            <select name="applicationId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกผู้ที่ผ่านสัมภาษณ์ —</option>
              ${u.map(b=>{var h,f,m;return`<option value="${b.id}">${c(((h=b.students)==null?void 0:h.full_name)??"—")}${((m=(f=b.council_interviews)==null?void 0:f[0])==null?void 0:m.score)!=null?" (คะแนน "+b.council_interviews[0].score+")":""}</option>`}).join("")}
            </select>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เสนอต่อครูที่ปรึกษาสภา</button>
          </form>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ยังไม่มีผู้ผ่านสัมภาษณ์ที่รอเสนอ</p>':'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ตำแหน่งเต็มหมดแล้ว</p>'}
        </div>`,l.length&&(n+=`
          <div class="mb-4">
            <p class="text-xs font-bold text-[var(--muted-2)] mb-2">รอครูที่ปรึกษาสภาอนุมัติ</p>
            <div class="space-y-2">${l.map(b=>{var h,f,m,v;return`
              <div class="rounded-xl border border-[var(--gold-soft-line)] bg-[var(--gold-soft)] p-3 flex items-center gap-3">
                ${N((h=b.council_applications)==null?void 0:h.students)}
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((m=(f=b.council_applications)==null?void 0:f.students)==null?void 0:m.full_name)??"—")}</p>
                  <p class="text-xs text-[var(--muted)]">${c(((v=b.council_positions)==null?void 0:v.position_name)??"—")}</p>
                </div>
              </div>`}).join("")}</div>
          </div>`)}}return t&&(n+=["M","W"].map(i=>{if(ge[i]===void 0)return sr(i),r;const a=ge[i];return a.length?`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🗳️ รออนุมัติ — สภา${D[i]}</p>
          <div class="space-y-2.5">
            ${a.map(o=>{var l,p,u,b,h;return`
              <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] space-y-2" data-nom-card="${o.id}">
                <div class="flex items-center gap-3">
                  ${N((l=o.council_applications)==null?void 0:l.students)}
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((u=(p=o.council_applications)==null?void 0:p.students)==null?void 0:u.full_name)??"—")}</p>
                    <p class="text-xs text-[var(--muted)]">${c(((b=o.council_positions)==null?void 0:b.position_name)??"—")}</p>
                  </div>
                </div>
                ${(h=o.council_applications)!=null&&h.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${c(o.council_applications.motivation)}</p>`:""}
                <textarea class="nom-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]" data-id="${o.id}" rows="2" placeholder="ความเห็น (ไม่บังคับถ้าอนุมัติ, บังคับถ้าไม่อนุมัติ)"></textarea>
                <div class="flex gap-2">
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] text-xs font-bold" data-id="${o.id}" data-approve="false">❌ ไม่อนุมัติ</button>
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${o.id}" data-approve="true">✅ อนุมัติ</button>
                </div>
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")),n||'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีรายการรอดำเนินการ</p>'}const ui={general:ii,positions:oi,criteria:li,modules:di};function pi(){return d.isAdmin||d.isCouncilAdvisor?(Vt.some(e=>e.id===Be)||(Be="general"),`
    <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
      ${Vt.map(e=>`
        <button type="button" class="settings-tab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${e.id===Be?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="${e.id}">${c(e.label)}</button>`).join("")}
    </div>
    <div>${ui[Be]()}</div>`):'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือครูที่ปรึกษาสภาเท่านั้น</p>'}let ot="duty",Y=null,Ie=null,fe=null;const ir=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];function Fr(){const e=new Date,t=e.getDay(),r=(t===0?-6:1)-t,n=new Date(e);return n.setDate(e.getDate()+r),n.setHours(0,0,0,0),n.toISOString().slice(0,10)}async function mi(){const e=d.membership[0];if(!e){Y=[],Ie=new Set,fe=[],x();return}const[t,r]=await Promise.all([ta(e.id).catch(()=>[]),ia(e.id).catch(()=>[])]);Y=t,fe=r,Ie=await ra(t.map(n=>n.id),Fr()).catch(()=>new Set),x()}function bi(){const e=d.membership[0];return e?Y===null?(mi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>'):`${`
    <div class="flex gap-2 mb-4">
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${ot==="duty"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="duty">หน้าที่</button>
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${ot==="work"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="work">งานของฉัน</button>
    </div>`}${ot==="duty"?vi(e):xi()}`:'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>'}function vi(e){var n;const t=Y.filter(s=>Ie.has(s.id)).length,r=Y.length?Math.round(t/Y.length*100):0;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <div class="flex items-center gap-3">
        ${N(d.student,"w-14 h-18")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((n=e.council_positions)==null?void 0:n.position_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${e.source==="elected"?"🗳️ มาจากการเลือกตั้ง":"✅ ได้รับการแต่งตั้ง"} · ${e.term_start_date?new Date(e.term_start_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</p>
        </div>
      </div>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">📅 รูทีนประจำสัปดาห์นี้</p>
        <span class="text-xs font-bold text-[var(--primary)]">${t}/${Y.length}</span>
      </div>
      <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-3"><div class="h-full bg-[var(--primary)]" style="width:${r}%"></div></div>
      ${Y.length?`<div class="space-y-1.5">${Y.map(s=>{const i=Ie.has(s.id);return`
        <label class="flex items-center gap-2.5 rounded-xl border ${i?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)]"} p-2.5">
          <input type="checkbox" class="routine-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${s.id}" ${i?"checked":""} />
          <div class="min-w-0 flex-1">
            <p class="text-sm ${i?"text-[#106143] line-through":"text-[var(--ink-2)]"} truncate">${c(s.task)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${s.day_of_week!=null?ir[s.day_of_week]:""}${s.time_range?" · "+c(s.time_range):""}${s.location?" · "+c(s.location):""}</p>
          </div>
          <button type="button" class="btn-remove-routine text-[var(--bad)] text-lg leading-none flex-shrink-0" data-id="${s.id}">✕</button>
        </label>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีรูทีน — เพิ่มได้ด้านล่าง</p>'}
      <form id="routine-add-form" class="grid grid-cols-2 gap-2 mt-3">
        <select name="dayOfWeek" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— วัน (ไม่บังคับ) —</option>
          ${ir.map((s,i)=>`<option value="${i}">${s}</option>`).join("")}
        </select>
        <input name="timeRange" placeholder="เวลา เช่น 07:00-07:20" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="task" required placeholder="งานที่ต้องทำ" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="col-span-2 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">+ เพิ่มรูทีน</button>
      </form>
    </div>`}function xi(){const e=fe.filter(n=>n.status!=="done"),t=fe.filter(n=>n.status==="done"),r=n=>`
    <label class="flex items-center gap-2.5 rounded-xl border ${n.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3">
      <input type="checkbox" class="assignment-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${n.id}" ${n.status==="done"?"checked":""} />
      <div class="min-w-0 flex-1">
        <p class="text-sm ${n.status==="done"?"text-[#106143] line-through":"text-[var(--ink)]"}">${c(n.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${n.due_date?"กำหนดส่ง "+new Date(n.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${n.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${n.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
    </label>`;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 text-center">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🎫 QR เช็คอินกิจกรรมของฉัน</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">แสดงให้ผู้ดูแลกิจกรรมสแกนเพื่อเช็คอิน</p>
      <button type="button" id="btn-show-my-council-qr" class="px-6 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">แสดง QR ของฉัน</button>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📋 งานที่ได้รับมอบหมาย (${t.length}/${fe.length} เสร็จแล้ว)</p>
      ${fe.length?`<div class="space-y-2">${[...e,...t].map(r).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีงานที่ได้รับมอบหมาย</p>'}
    </div>`}function fi(e){var l;(l=document.getElementById("council-my-qr-modal"))==null||l.remove();const t=document.createElement("div");t.id="council-my-qr-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center">
      <p class="text-lg font-bold text-[var(--ink)]">🎫 QR เช็คอินของฉัน</p>
      <p class="text-sm font-semibold text-[var(--primary)] mt-1">${c(e.full_name)}</p>
      <div class="w-56 h-56 mx-auto my-4 bg-[var(--surface-2)] border border-[var(--line)] rounded-2xl flex items-center justify-center">
        <canvas id="council-my-qr-canvas" class="w-48 h-48"></canvas>
      </div>
      <p class="text-xs text-[var(--muted-2)]">หมดอายุใน <span id="council-qr-timer">60</span> วินาที (สร้างใหม่อัตโนมัติ)</p>
      <button type="button" id="btn-close-council-qr" class="w-full mt-4 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ปิด</button>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-my-qr-canvas"),n=async()=>{const p=`SQ:${e.student_code}:${Math.floor(Date.now()/1e3)}`;try{await cn.toCanvas(r,p,{width:190,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch{}};n();let s=60;const i=t.querySelector("#council-qr-timer"),a=setInterval(()=>{s-=1,i&&(i.textContent=String(s)),s<=0&&(s=60,n())},1e3),o=()=>{clearInterval(a),t.remove()};t.querySelector("#btn-close-council-qr").addEventListener("click",o),t.addEventListener("click",p=>{p.target===t&&o()})}let bt=null;async function gi(){var t;const e=d.membership[0];if(!e||!d.student){bt={activities:[],myAttendance:[]},x();return}bt=await Vn(d.student.id,(t=e.council_positions)==null?void 0:t.gender,P).catch(()=>({activities:[],myAttendance:[]})),x()}const _i={planned:["ยังไม่จัด","text-[var(--gold-ink)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary)]"],completed:["เสร็จแล้ว","text-[#106143]"],cancelled:["ยกเลิก","text-[var(--muted-2)]"]};function yi(){if(!d.membership[0])return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>';if(bt===null)return gi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const{activities:t,myAttendance:r}=bt,n=new Set(r.map(b=>b.activity_id)),s=t.filter(b=>b.counts_for_evaluation),i=s.filter(b=>n.has(b.id)).length,a=s.length?Math.round(i/s.length*100):null,o=d.cfg.council_min_attendance_pct?Number(d.cfg.council_min_attendance_pct):null,l=o==null||a==null?null:a>=o,p=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📈 ผลเช็คชื่อของฉัน</p>
      ${s.length?`
        <div class="flex items-end gap-2 mb-2">
          <span class="text-3xl font-bold text-[var(--primary)]">${a}%</span>
          <span class="text-xs text-[var(--muted-2)] mb-1">${i}/${s.length} กิจกรรม</span>
        </div>
        <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-2"><div class="h-full ${l===!1?"bg-[var(--bad)]":"bg-[var(--primary)]"}" style="width:${a}%"></div></div>
        ${o!=null?`<p class="text-xs ${l?"text-[var(--ok)]":"text-[var(--bad)]"} font-bold">${l?"✅ ผ่านเกณฑ์ขั้นต่ำ":"⚠️ ยังไม่ถึงเกณฑ์ขั้นต่ำ"} ${o}%</p>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีการตั้งเกณฑ์ขั้นต่ำจากผู้ดูแล</p>'}
      `:'<p class="text-xs text-[var(--muted-2)] py-4 text-center">ยังไม่มีกิจกรรมที่นับผลในระบบ</p>'}
      <p class="text-[0.625rem] text-[var(--muted-2)] mt-2">นับจากกิจกรรมที่เกิดขึ้นแล้วและถูกตั้งค่าให้ "นับผล" เท่านั้น — ผลนี้เป็นข้อมูลให้ครูที่ปรึกษาใช้ประกอบการประเมิน ไม่ได้ตัดสินอัตโนมัติ</p>
    </div>`,u=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📅 กิจกรรม/กำหนดการ</p>
      ${t.length?`<div class="space-y-2">${t.map(b=>{const h=n.has(b.id),[f,m]=_i[b.status]??["—","text-[var(--muted)]"];return`
        <div class="flex items-center gap-3 rounded-xl border border-[var(--line-soft)] p-3">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${c(b.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${b.activity_date?new Date(b.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} · <span class="${m}">${f}</span>${b.counts_for_evaluation?"":' · <span class="text-[var(--muted-2)]">ไม่นับผล</span>'}</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${h?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--bad-soft)] text-[var(--bad)]"}">${h?"✅ เช็คชื่อแล้ว":"✗ ยังไม่เช็คชื่อ"}</span>
        </div>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-8">ยังไม่มีกิจกรรม</p>'}
    </div>`;return`${p}${u}`}const Qe={};async function hi(e){Qe[e]=await oa(e).catch(()=>[]),x()}function wi(){var a;if(!d.isChair)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาเท่านั้น</p>';const e=ce((a=d.student)==null?void 0:a.gender);if(!e)return"";if(Qe[e]===void 0)return hi(e),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const t=Qe[e],r=t.filter(o=>o.status==="done").length,n=d.members.filter(o=>{var l;return((l=o.council_positions)==null?void 0:l.gender)===e}),s=`
    <form id="assignment-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2.5">
      <p class="text-sm font-bold text-[var(--ink-2)]">➕ มอบหมายงานใหม่ — สภา${D[e]}</p>
      <select name="memberId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
        <option value="">— เลือกผู้รับมอบหมาย —</option>
        ${n.map(o=>{var l,p;return`<option value="${o.id}">${c(((l=o.students)==null?void 0:l.full_name)??"—")} (${c(((p=o.council_positions)==null?void 0:p.position_name)??"")})</option>`}).join("")}
      </select>
      <textarea name="task" required rows="2" placeholder="รายละเอียดงาน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <input name="dueDate" type="date" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">มอบหมายงาน</button>
    </form>`;if(!t.length)return`${s}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีงานที่มอบหมาย</p>`;const i=o=>{var l,p,u;return`
    <div class="rounded-xl border ${o.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3 flex items-center gap-3">
      ${N((l=o.council_members)==null?void 0:l.students)}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((u=(p=o.council_members)==null?void 0:p.students)==null?void 0:u.full_name)??"—")}</p>
        <p class="text-xs text-[var(--ink-2)]">${c(o.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${o.due_date?"กำหนดส่ง "+new Date(o.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <div class="flex flex-col items-end gap-1 flex-shrink-0">
        <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full ${o.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${o.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
        <button type="button" class="btn-delete-assignment text-[var(--bad)] text-xs" data-id="${o.id}">ลบ</button>
      </div>
    </div>`};return`${s}<p class="text-xs font-bold text-[var(--muted-2)] mb-2">งานทั้งหมด (${r}/${t.length} เสร็จแล้ว)</p><div class="space-y-2">${t.map(i).join("")}</div>`}let Se=null,Ae=null,St=null;const vt={};async function Pt(){const[e,t,r]=await Promise.all([ft("council_advisor").catch(()=>[]),ft("student_affairs_head").catch(()=>[]),ft("school_director").catch(()=>[])]);H=e,Se=t,Ae=r,x()}async function $i(e){vt[e]=await xr(e).catch(()=>[]),x()}function ki(e){if(vt[e]===void 0)return $i(e),'<p class="text-xs text-[var(--muted-2)] py-2">⏳ กำลังโหลด...</p>';const t=new Set(vt[e]);return`
    <form class="advisor-dept-form mt-3 pt-3 border-t border-[var(--line-soft)]" data-teacher-id="${e}">
      <p class="text-xs font-semibold text-[var(--muted)] mb-2">ติ๊กฝ่ายที่ครูคนนี้รับผิดชอบตรวจ/รับรองเอกสารโครงการ</p>
      <div class="grid grid-cols-2 gap-1.5 mb-2">
        ${d.positions.map(r=>`
          <label class="flex items-center gap-1.5 text-xs text-[var(--ink-2)]">
            <input type="checkbox" name="pos_${r.id}" value="${r.id}" ${t.has(r.id)?"checked":""} />
            ${c(r.position_name)} (${c(D[r.gender]??"")})
          </label>`).join("")}
      </div>
      <button type="submit" class="px-4 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกฝ่าย</button>
    </form>`}function Ei(e,t,r){const n=St===e.id;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)]">
      <div class="flex items-center gap-3">
        ${e.image_url?`<img src="${c(e.image_url)}" class="w-10 h-12 rounded-[10px] object-cover border border-[var(--line)] flex-shrink-0" />`:`<div class="w-10 h-12 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${c((e.full_name||"?").charAt(0))}</div>`}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(e.full_name)}</p>
          <p class="text-xs text-[var(--muted)]">${c(e.teacher_code||"")}${e.category?" · "+c(e.category):""} · ${e.signature_url?"✅ มีลายเซ็นแล้ว":"⚠️ ยังไม่มีลายเซ็น"}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
        <button type="button" class="btn-edit-council-profile text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}" data-name="${c(e.full_name)}" data-image="${c(e.image_url??"")}" data-signature="${c(e.signature_url??"")}">✍️ รูป/ลายเซ็น</button>
        ${r?`<button type="button" class="btn-toggle-advisor-depts text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">${n?"▲ ซ่อนฝ่ายที่ดูแล":"🏛️ ฝ่ายที่ดูแล"}</button>`:""}
        <button type="button" class="btn-remove-teacher-position text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${e.id}" data-position="${t}">ถอดถอน</button>
      </div>
      ${r&&n?ki(e.id):""}
    </div>`}function Si(){if(!d.isAdmin)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินเท่านั้น</p>';if(H===null)return Pt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(te===null)return Ar(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=`<datalist id="council-teacher-datalist">${te.map(r=>`<option value="${c(r.full_name)} · รหัส ${r.id}"></option>`).join("")}</datalist>`,t=(r,n,s,i)=>`
    <div class="mb-5">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${r} (${n.length} คน)</p>
      <form class="perms-add-form bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 mb-2 flex gap-2" data-position="${s}">
        <input type="text" name="teacherText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครู แล้วเลือกจากรายการ..." required
          class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
      </form>
      ${n.length?`<div class="space-y-2">${n.map(a=>Ei(a,s,i)).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มี</p>'}
    </div>`;return`${e}
    ${t("ครูที่ปรึกษาสภานักเรียน",H,"council_advisor",!0)}
    ${t("หัวหน้าฝ่ายกิจการนักเรียน",Se,"student_affairs_head",!1)}
    ${t("ผู้อำนวยการ",Ae,"school_director",!1)}`}function Ai(e){const t=e.getContext("2d"),r=()=>{t.fillStyle="#fff",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#0f172a"};r(),t.lineWidth=4,t.lineCap="round";let n=!1,s=!1;const i=a=>{const o=e.getBoundingClientRect();return{x:(a.clientX-o.left)*e.width/o.width,y:(a.clientY-o.top)*e.height/o.height}};return e.addEventListener("pointerdown",a=>{var l;n=!0,(l=e.setPointerCapture)==null||l.call(e,a.pointerId);const o=i(a);t.beginPath(),t.moveTo(o.x,o.y)}),e.addEventListener("pointermove",a=>{if(!n)return;const o=i(a);t.lineTo(o.x,o.y),t.stroke(),s=!0}),e.addEventListener("pointerup",()=>{n=!1}),e.addEventListener("pointercancel",()=>{n=!1}),{clear:()=>{r(),s=!1},isDrawn:()=>s,toBlob:()=>new Promise(a=>e.toBlob(a,"image/png"))}}function or(e){var s;(s=document.getElementById("council-profile-modal"))==null||s.remove();const t=document.createElement("div");t.id="council-profile-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">✍️ รูปและลายเซ็น — ${c(e.full_name)}</p>
        <button type="button" id="btn-close-council-profile" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      <div class="space-y-4">
        <div>
          <p class="text-xs font-bold text-[var(--muted)] mb-1.5">รูปประจำตัว</p>
          <div class="flex items-center gap-3">
            ${e.image_url?`<img src="${c(e.image_url)}" class="w-14 h-[4.5rem] rounded-[10px] object-cover border border-[var(--line)] flex-shrink-0" />`:`<div class="w-14 h-[4.5rem] rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold border border-[var(--line)] flex-shrink-0">${c((e.full_name||"?").charAt(0))}</div>`}
            <input type="file" id="council-profile-photo-file" accept="image/*" class="text-xs flex-1 min-w-0" />
          </div>
        </div>
        <div>
          <p class="text-xs font-bold text-[var(--muted)] mb-1.5">ลายเซ็น</p>
          ${e.signature_url?`<img src="${c(e.signature_url)}" class="h-16 max-w-full object-contain bg-white border border-[var(--line)] rounded-lg p-1 mb-2" />`:""}
          <canvas id="council-signature-canvas" width="700" height="220" class="w-full h-32 border border-[var(--line)] rounded-xl bg-white touch-none"></canvas>
          <button type="button" id="council-signature-clear" class="text-xs text-[var(--bad)] mt-1">ล้างลายเซ็น</button>
          <p class="text-xs font-medium text-[var(--muted)] mt-2 mb-1">หรืออัปโหลดรูปลายเซ็น</p>
          <input type="file" id="council-signature-file" accept="image/*" class="text-xs" />
        </div>
        <button type="button" id="council-profile-save" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-signature-canvas"),n=Ai(r);t.querySelector("#council-signature-clear").addEventListener("click",()=>n.clear()),t.querySelector("#btn-close-council-profile").addEventListener("click",()=>t.remove()),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#council-profile-save").addEventListener("click",async()=>{var a,o;const i=t.querySelector("#council-profile-save");i.disabled=!0,i.textContent="กำลังบันทึก...";try{const l=(a=t.querySelector("#council-profile-photo-file").files)==null?void 0:a[0];if(l){const b=await Xr(e.id,l);await Ba(e.id,b),d.teacher&&d.teacher.id===e.id&&(d.teacher.image_url=b)}const u=((o=t.querySelector("#council-signature-file").files)==null?void 0:o[0])||(n.isDrawn()?await n.toBlob():null);if(u){const b=await Zr(e.id,u);await Ta(e.id,b),d.teacher&&d.teacher.id===e.id&&(d.teacher.signature_url=b)}g("บันทึกแล้ว ✅","success"),t.remove(),H=null,Se=null,Ae=null,x()}catch(l){g("บันทึกไม่สำเร็จ: "+k(l),"error"),i.disabled=!1,i.textContent="บันทึก"}})}function qi(){if(!d.teacher)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะบัญชีครูเท่านั้น</p>';const e=d.teacher;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-5 text-center">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-4">✍️ โปรไฟล์ของฉัน — ${c(e.full_name)}</p>
      <div class="flex items-center justify-center gap-6 mb-4">
        <div>
          <p class="text-xs text-[var(--muted)] mb-1.5">รูปประจำตัว</p>
          ${e.image_url?`<img src="${c(e.image_url)}" class="w-16 h-20 rounded-[10px] object-cover border border-[var(--line)] mx-auto" />`:`<div class="w-16 h-20 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold border border-[var(--line)] mx-auto">${c((e.full_name||"?").charAt(0))}</div>`}
        </div>
        <div>
          <p class="text-xs text-[var(--muted)] mb-1.5">ลายเซ็น</p>
          ${e.signature_url?`<img src="${c(e.signature_url)}" class="h-20 max-w-[10rem] object-contain bg-white border border-[var(--line)] rounded-lg p-1 mx-auto" />`:'<div class="h-20 w-40 rounded-lg border border-dashed border-[var(--line)] flex items-center justify-center text-xs text-[var(--muted-2)] mx-auto">ยังไม่มีลายเซ็น</div>'}
        </div>
      </div>
      <button type="button" id="btn-edit-my-council-profile" class="px-6 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✏️ แก้ไขรูป/ลายเซ็น</button>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-3">ลายเซ็นนี้จะถูกใช้ประทับอัตโนมัติเมื่อคุณอนุมัติเอกสารโครงการ ไม่ต้องวาดใหม่ทุกครั้ง</p>
    </div>`}const Ii={overview:wr,endorse:Ss,apps:$s,news:Os,activities:Ds,eval:Fs,docs:ri,candidates:bs,roster:Es,result:kr,settings:pi,chairteam:ci,myduty:bi,mysummary:yi,assignments:wi,peerEndorse:qs,perms:Si,myCouncilProfile:qi,dashboard:ws},Ci={apply:{new:es,mine:cs},election:{status:kr}};function x(){if(Oe){Li();return}Tt(!0);const e=za();e.some(r=>r.id===U)||(U="overview"),Ga(e);const t=Ii[U]||wr;It.innerHTML=`<div class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-4">${t()}</div>`,Wr()}function Li(){var r;Tt(!1);const e=Ha[Oe];e.subtabs.some(n=>n.id===se)||(se=e.subtabs[0].id),document.getElementById("council-view-title").textContent=e.title;const t=((r=Ci[Oe])==null?void 0:r[se])??(()=>"");It.innerHTML=`
    <div class="max-w-2xl mx-auto px-4 py-4">
      <div class="flex items-center gap-3 mb-4">
        <button type="button" id="btn-flow-close" title="กลับภาพรวม"
          class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
        <h2 class="text-base font-bold text-[var(--ink)]">${e.title}</h2>
      </div>
      ${e.subtabs.length>1?`
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
        ${e.subtabs.map(n=>`
          <button type="button" class="flow-subtab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${n.id===se?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}"
            data-subtab="${n.id}">${c(n.label)}</button>`).join("")}
      </div>`:""}
      <div>${t()}</div>
    </div>`,document.getElementById("btn-flow-close").addEventListener("click",()=>{Oe=null,se=null,et(),x()}),document.querySelectorAll(".flow-subtab-btn").forEach(n=>{n.addEventListener("click",()=>{se=n.dataset.subtab,x()})}),Wr()}function Wr(){var e,t,r,n,s,i,a,o,l,p,u,b,h,f,m,v,E,I,j,A;document.querySelectorAll(".flow-entry-btn").forEach(_=>{_.addEventListener("click",()=>{Oe=_.dataset.flow,se=null,x()})}),document.querySelectorAll(".goto-view").forEach(_=>{_.addEventListener("click",()=>{U=_.dataset.view,x()})}),document.querySelectorAll(".roster-gender-tab-btn").forEach(_=>{_.addEventListener("click",()=>{J=_.dataset.gender,x()})}),document.querySelectorAll(".btn-view-my-app-detail").forEach(_=>{_.addEventListener("click",()=>{He=Number(_.dataset.id),x()})}),(e=document.getElementById("btn-my-app-detail-close"))==null||e.addEventListener("click",()=>{He=null,x()}),(t=document.getElementById("my-app-detail-backdrop"))==null||t.addEventListener("click",_=>{_.target.id==="my-app-detail-backdrop"&&(He=null,x())}),(r=document.getElementById("btn-pick-my-app-endorser"))==null||r.addEventListener("click",_=>{ys(Number(_.target.dataset.appId),_.target.dataset.gender)}),(n=document.getElementById("btn-add-council-member"))==null||n.addEventListener("click",()=>{Kt({mode:"add",gender:J})}),document.querySelectorAll(".btn-edit-council-member").forEach(_=>{_.addEventListener("click",()=>{var $;const w=d.members.find(S=>S.id===Number(_.dataset.id));w&&Kt({mode:"edit",gender:($=w.council_positions)==null?void 0:$.gender,member:w})})}),document.querySelectorAll(".btn-remove-council-member").forEach(_=>{_.addEventListener("click",async()=>{if(confirm("ลบสมาชิกสภาคนนี้ออกจากทำเนียบ? (จะเก็บประวัติไว้ ไม่ได้ลบข้อมูลทิ้งถาวร)"))try{await Nn(Number(_.dataset.id)),g("ลบแล้ว ✅","success"),d.members=await Ce().catch(()=>d.members),x()}catch(w){g("ลบไม่สำเร็จ: "+k(w),"error")}})}),document.querySelectorAll(".btn-toggle-can-create").forEach(_=>{_.addEventListener("click",async()=>{const w=Number(_.dataset.id),$=_.dataset.value==="1";_.disabled=!0;try{await wn(w,$);const S=d.members.find(T=>T.id===w);S&&(S.can_create_activities=$);const q=d.membership.find(T=>T.id===w);q&&(q.can_create_activities=$),g($?"ให้สิทธิ์สร้างกิจกรรมแล้ว ✅":"ถอนสิทธิ์แล้ว ✅","success"),x()}catch(S){g("บันทึกไม่สำเร็จ: "+k(S),"error"),_.disabled=!1}})}),document.querySelectorAll(".btn-peer-endorse").forEach(_=>{_.addEventListener("click",()=>Is(_.dataset.id))}),(s=document.getElementById("btn-open-apply"))==null||s.addEventListener("click",()=>{ct=!0;const _=Pa();R=_&&_.step>1?_:null,R||(M=Pe(Me())),x()}),(i=document.getElementById("btn-cancel-apply"))==null||i.addEventListener("click",()=>{et(),R=null,x()}),(a=document.getElementById("btn-apply-draft-resume"))==null||a.addEventListener("click",()=>{C={...C,...R.data},B=R.step;const _=R.certTitles||[];M=_.length?_.map(w=>({file:null,title:w||"",previewUrl:null,isPdf:!1})):Pe(Me()),R=null,x()}),(o=document.getElementById("btn-apply-draft-discard"))==null||o.addEventListener("click",()=>{Ut(),et(),R=null,ct=!0,x()}),(l=document.getElementById("btn-apply-back"))==null||l.addEventListener("click",()=>{B=Math.max(1,B-1),V(),x()}),(p=document.getElementById("apply-step1-form"))==null||p.addEventListener("submit",_=>{_.preventDefault();const w=_.target.positionId.value;if(!w){g("กรุณาเลือกตำแหน่ง","warning");return}C.positionId=w,B=2,V(),x()}),(u=document.getElementById("apply-step2-form"))==null||u.addEventListener("submit",_=>{_.preventDefault();const w=_.target,$=w.gpaGeneral.value,S=w.gpaReligious.value,q=w.motivation.value.trim(),T=Number($),Z=Number(S);if(!$||!S||T<0||T>4||Z<0||Z>4){g("กรอกเกรดเฉลี่ยให้ถูกต้อง (0.00–4.00)","warning");return}const ne=Number(d.cfg.council_min_gpa||2.5),O=Number(d.cfg.council_min_gpa_religious||2.5);if(T<ne||Z<O){g(`เกรดเฉลี่ยไม่ถึงเกณฑ์ขั้นต่ำ (สามัญ ≥ ${ne}, ศาสนา ≥ ${O})`,"warning");return}if(q.length<10){g("กรุณากรอกแรงจูงใจอย่างน้อย 10 ตัวอักษร","warning");return}C.gpaGeneral=$,C.gpaReligious=S,C.motivation=q,B=3,V(),x()}),(b=document.getElementById("apply-photo"))==null||b.addEventListener("change",_=>{var $;const w=(($=_.target.files)==null?void 0:$[0])??null;ve=w,X&&URL.revokeObjectURL(X),X=w?URL.createObjectURL(w):null,x()}),(h=document.getElementById("btn-apply-step3-next"))==null||h.addEventListener("click",()=>{if(!ve){g("กรุณาแนบรูปถ่าย","warning");return}B=4,V(),x()}),(f=document.getElementById("apply-step4-form"))==null||f.addEventListener("submit",_=>{_.preventDefault();const w=_.target.videoUrl.value.trim();if(!/^https?:\/\//.test(w)){g("กรุณาใส่ลิงก์วิดีโอที่ถูกต้อง (ขึ้นต้นด้วย http:// หรือ https://)","warning");return}C.videoUrl=w,B=5,V(),x()}),document.querySelectorAll(".cert-title-input").forEach(_=>{_.addEventListener("input",()=>{M[+_.dataset.idx].title=_.value,V()})}),document.querySelectorAll(".cert-file-input").forEach(_=>{_.addEventListener("change",w=>{var T;const $=+_.dataset.idx,S=((T=w.target.files)==null?void 0:T[0])??null,q=M[$];q.previewUrl&&URL.revokeObjectURL(q.previewUrl),q.file=S,q.isPdf=(S==null?void 0:S.type)==="application/pdf",q.previewUrl=S&&!q.isPdf?URL.createObjectURL(S):null,x()})}),(m=document.getElementById("btn-add-cert"))==null||m.addEventListener("click",()=>{M.push(...Pe(1)),V(),x()}),document.querySelectorAll(".btn-remove-cert").forEach(_=>{_.addEventListener("click",()=>{const w=+_.dataset.idx,$=M[w];$.previewUrl&&URL.revokeObjectURL($.previewUrl),M.splice(w,1),V(),x()})}),(v=document.getElementById("btn-apply-step5-next"))==null||v.addEventListener("click",()=>{const _=M.filter($=>$.file&&$.title.trim()).length,w=Me();if(_<w){g(`กรุณาแนบเกียรติบัตร/รางวัลอย่างน้อย ${w} รายการ (พร้อมชื่อรางวัล)`,"warning");return}Bt()?B=6:he=!0,V(),x()}),document.querySelectorAll(".btn-pick-peer-endorser").forEach(_=>{_.addEventListener("click",()=>{C.peerEndorserId=_.dataset.id,V(),x()})}),(E=document.getElementById("btn-apply-step6-next"))==null||E.addEventListener("click",()=>{if(!C.peerEndorserId){g("กรุณาเลือกพี่สภาที่ต้องการให้รับรอง","warning");return}he=!0,V(),x()}),(I=document.getElementById("btn-apply-edit"))==null||I.addEventListener("click",()=>{he=!1,x()}),(j=document.getElementById("apply-confirm-backdrop"))==null||j.addEventListener("click",_=>{_.target.id==="apply-confirm-backdrop"&&(he=!1,x())}),(A=document.getElementById("btn-apply-confirm-submit"))==null||A.addEventListener("click",async()=>{const _=document.getElementById("btn-apply-confirm-submit");_.disabled=!0,_.textContent="กำลังส่ง...";try{let w=null;ve&&(w=await Qr(d.student.id,ve));const $=M.filter(q=>q.file&&q.title.trim()),S=await Promise.all($.map(async q=>({title:q.title.trim(),url:await Jr(d.student.id,q.file)})));await $n({studentId:d.student.id,positionId:Number(C.positionId),academicYear:Number(d.cfg.academicYear)||new Date().getFullYear()+543,motivation:C.motivation,photoUrl:w,gpaGeneral:Number(C.gpaGeneral),gpaReligious:Number(C.gpaReligious),introVideoUrl:C.videoUrl,certificates:S,requestedPeerEndorserId:C.peerEndorserId?Number(C.peerEndorserId):null}),g("ส่งใบสมัครสำเร็จ ✅","success"),Ut(),et(),await yr(),se="mine",x()}catch(w){g("ส่งใบสมัครไม่สำเร็จ: "+k(w),"error"),_.disabled=!1,_.textContent="✅ ยืนยันการสมัคร"}}),document.querySelectorAll(".endorse-phrase-chip").forEach(_=>{_.addEventListener("click",()=>{const w=document.querySelector(`.endorse-comment[data-id="${_.dataset.target}"]`);if(!w)return;const $=w.value.trim();w.value=$?$+" "+_.dataset.phrase:_.dataset.phrase,w.focus()})}),document.querySelectorAll(".btn-endorse-confirm").forEach(_=>{_.addEventListener("click",()=>Xt(_.dataset.id,"confirm"))}),document.querySelectorAll(".btn-endorse-decline").forEach(_=>{_.addEventListener("click",()=>Xt(_.dataset.id,"decline"))}),Hi(),Fi(),Oi(),Ri(),Pi(),Mi(),Ni(),Bi(),Di(),Ti(),ji()}function ji(){var e;document.querySelectorAll(".perms-add-form").forEach(t=>{t.addEventListener("submit",async r=>{var u;r.preventDefault();const n=r.target,s=n.dataset.position,a=n.teacherText.value.trim().match(/· รหัส (\d+)$/);if(!a){g("กรุณาเลือกชื่อครูจากรายการที่แสดง","warning");return}const o=Number(a[1]);if((u={council_advisor:H,student_affairs_head:Se,school_director:Ae}[s])!=null&&u.some(b=>b.id===o)){g("ครูคนนี้อยู่ในรายชื่อนี้แล้ว","warning");return}const p=n.querySelector('button[type="submit"]');p.disabled=!0,p.textContent="กำลังบันทึก...";try{await Ca(o,s),g("เพิ่มแล้ว ✅","success"),H=null,Se=null,Ae=null,x()}catch(b){g("บันทึกไม่สำเร็จ: "+k(b),"error"),p.disabled=!1,p.textContent="เพิ่ม"}})}),document.querySelectorAll(".btn-remove-teacher-position").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ถอดถอนออกจากรายชื่อนี้?"))try{await La(Number(t.dataset.id),t.dataset.position),H=null,Se=null,Ae=null,x()}catch(r){g("ถอดถอนไม่สำเร็จ: "+k(r),"error")}})}),document.querySelectorAll(".btn-toggle-advisor-depts").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);St=St===r?null:r,x()})}),document.querySelectorAll(".advisor-dept-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=Number(t.dataset.teacherId),s=d.positions.filter(a=>{var o;return(o=t[`pos_${a.id}`])==null?void 0:o.checked}).map(a=>a.id),i=t.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await ja(n,s),vt[n]=s,g("บันทึกฝ่ายที่ดูแลแล้ว ✅","success"),x()}catch(a){g("บันทึกไม่สำเร็จ: "+k(a),"error"),i.disabled=!1,i.textContent="บันทึกฝ่าย"}})}),document.querySelectorAll(".btn-edit-council-profile").forEach(t=>{t.addEventListener("click",()=>{or({id:Number(t.dataset.id),full_name:t.dataset.name,image_url:t.dataset.image||null,signature_url:t.dataset.signature||null})})}),(e=document.getElementById("btn-edit-my-council-profile"))==null||e.addEventListener("click",()=>{d.teacher&&or(d.teacher)})}function Di(){var e,t;document.querySelectorAll(".myduty-subtab-btn").forEach(r=>{r.addEventListener("click",()=>{ot=r.dataset.tab,x()})}),(e=document.getElementById("routine-add-form"))==null||e.addEventListener("submit",async r=>{r.preventDefault();const n=r.target,s=n.task.value.trim();if(!s){g("กรุณากรอกงานที่ต้องทำ","warning");return}const i=d.membership[0];try{await na({memberId:i.id,dayOfWeek:n.dayOfWeek.value===""?null:Number(n.dayOfWeek.value),timeRange:n.timeRange.value.trim(),task:s,location:n.location.value.trim()}),Y=null,x()}catch(a){g("เพิ่มไม่สำเร็จ: "+k(a),"error")}}),document.querySelectorAll(".btn-remove-routine").forEach(r=>{r.addEventListener("click",async()=>{if(confirm("ลบรูทีนนี้?"))try{await aa(Number(r.dataset.id)),Y=null,x()}catch(n){g("ลบไม่สำเร็จ: "+k(n),"error")}})}),document.querySelectorAll(".routine-check").forEach(r=>{r.addEventListener("change",async()=>{const n=Number(r.dataset.id),s=r.checked;r.disabled=!0;try{await sa({routineId:n,weekStart:Fr(),done:s}),s?Ie.add(n):Ie.delete(n),x()}catch(i){g("บันทึกไม่สำเร็จ: "+k(i),"error"),r.checked=!s,r.disabled=!1}})}),document.querySelectorAll(".assignment-check").forEach(r=>{r.addEventListener("change",async()=>{const n=Number(r.dataset.id),s=r.checked?"done":"open";r.disabled=!0;try{await da(n,s);const i=fe.find(a=>a.id===n);i&&(i.status=s),x()}catch(i){g("บันทึกไม่สำเร็จ: "+k(i),"error"),r.checked=!r.checked,r.disabled=!1}})}),(t=document.getElementById("btn-show-my-council-qr"))==null||t.addEventListener("click",()=>{d.student&&fi(d.student)})}function Ti(){var e;(e=document.getElementById("assignment-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=Number(r.memberId.value),s=r.task.value.trim();if(!n||!s){g("กรุณาเลือกผู้รับมอบหมายและกรอกรายละเอียดงาน","warning");return}const i=r.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await la({memberId:n,task:s,dueDate:r.dueDate.value||null,assignedByStudentId:d.student.id}),g("มอบหมายงานแล้ว ✅","success");const a=ce(d.student.gender);delete Qe[a],x()}catch(a){g("บันทึกไม่สำเร็จ: "+k(a),"error"),i.disabled=!1,i.textContent="มอบหมายงาน"}}),document.querySelectorAll(".btn-delete-assignment").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบงานที่มอบหมายนี้?"))try{await ca(Number(t.dataset.id));const r=ce(d.student.gender);delete Qe[r],x()}catch(r){g("ลบไม่สำเร็จ: "+k(r),"error")}})})}function Bi(){var e;(e=document.getElementById("nominate-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=Number(r.positionId.value),s=Number(r.applicationId.value);if(!n||!s){g("กรุณาเลือกตำแหน่งและผู้สมัคร","warning");return}const i=r.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังเสนอ...";try{await Fn({applicationId:s,positionId:n,proposedByStudentId:d.student.id}),g("เสนอคณะทำงานแล้ว รอครูที่ปรึกษาสภาอนุมัติ ✅","success");const a=ce(d.student.gender);delete ge[a],delete Ue[a],x()}catch(a){g("เสนอไม่สำเร็จ: "+k(a),"error"),i.disabled=!1,i.textContent="เสนอต่อครูที่ปรึกษาสภา"}}),document.querySelectorAll(".btn-decide-nomination").forEach(t=>{t.addEventListener("click",async()=>{var a,o;const r=Number(t.dataset.id),n=t.dataset.approve==="true",s=((a=document.querySelector(`.nom-comment[data-id="${r}"]`))==null?void 0:a.value.trim())??"";if(!n&&!s){g("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}const i=t.closest("[data-nom-card]");i==null||i.querySelectorAll("button").forEach(l=>{l.disabled=!0});try{await zn({nominationId:r,approve:n,teacherId:((o=d.teacher)==null?void 0:o.id)??null,comment:s}),g(n?"อนุมัติแล้ว ✅":"ไม่อนุมัติแล้ว","success"),delete Ye.M,delete Ye.W,delete Ue.M,delete Ue.W,delete ge.M,delete ge.W,d.members=await Ce().catch(()=>d.members),x()}catch(l){g("บันทึกไม่สำเร็จ: "+k(l),"error"),i==null||i.querySelectorAll("button").forEach(p=>{p.disabled=!1})}})})}function Ni(){var e,t,r,n,s,i;document.querySelectorAll(".settings-tab-btn").forEach(a=>{a.addEventListener("click",()=>{Be=a.dataset.tab,x()})}),(e=document.getElementById("settings-general-form"))==null||e.addEventListener("submit",async a=>{a.preventDefault();const o=a.target,l=o.querySelector('button[type="submit"]');l.disabled=!0,l.textContent="กำลังบันทึก...";try{const p={council_name:o.council_name.value.trim(),council_logo_url:o.council_logo_url.value.trim(),council_theme_side_m:o.council_theme_side_m.value,council_theme_side_w:o.council_theme_side_w.value,council_term_start_semester:o.council_term_start_semester.value.trim(),council_term_start_year:o.council_term_start_year.value.trim(),council_term_end_semester:o.council_term_end_semester.value.trim(),council_term_end_year:o.council_term_end_year.value.trim(),council_min_gpa:o.council_min_gpa.value,council_min_gpa_religious:o.council_min_gpa_religious.value,council_eligible_grade_levels:o.council_eligible_grade_levels.value.trim(),council_min_certificates:o.council_min_certificates.value,council_min_attendance_pct:o.council_min_attendance_pct.value,council_require_teacher_endorsement:o.council_require_teacher_endorsement.checked?"true":"false",council_require_peer_endorsement:o.council_require_peer_endorsement.checked?"true":"false",council_apply_opens_at:o.council_apply_opens_at.value?new Date(o.council_apply_opens_at.value).toISOString():"",council_apply_closes_at:o.council_apply_closes_at.value?new Date(o.council_apply_closes_at.value).toISOString():"",council_featured_phase:o.council_featured_phase.value,council_visible_to_all:o.council_visible_to_all.checked?"true":"false",council_test_student_codes:o.council_test_student_codes.value.trim(),council_election_thank_you_message:o.council_election_thank_you_message.value.trim(),council_signer_advisor_name:o.council_signer_advisor_name.value.trim(),council_signer_director_name:o.council_signer_director_name.value.trim()};await Je(p),d.cfg={...d.cfg,...p},hr(d.cfg),g("บันทึกการตั้งค่าแล้ว ✅","success"),x()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error"),l.disabled=!1,l.textContent="💾 บันทึกการตั้งค่า"}}),document.querySelectorAll(".position-row-form").forEach(a=>{a.addEventListener("submit",async o=>{o.preventDefault();const l=Number(a.dataset.id),p=a.position_name.value.trim(),u=Number(a.seats_count.value);if(!p||!u){g("กรอกชื่อและจำนวนที่นั่งให้ครบ","warning");return}try{await bn(l,{position_name:p,seats_count:u}),d.positions=await Ne(),g("บันทึกแล้ว ✅","success"),x()}catch(b){g("บันทึกไม่สำเร็จ: "+k(b),"error")}})}),document.querySelectorAll(".btn-delete-position").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบตำแหน่งนี้? (ประวัติสมาชิก/ใบสมัครเดิมจะยังอยู่)"))try{await vn(Number(a.dataset.id)),d.positions=await Ne(),x()}catch(o){g("ลบไม่สำเร็จ: "+k(o),"error")}})}),document.querySelectorAll(".position-add-form").forEach(a=>{a.addEventListener("submit",async o=>{o.preventDefault();const l=a.dataset.gender,p=a.position_name.value.trim(),u=Number(a.seats_count.value)||1;if(!p){g("กรอกชื่อตำแหน่ง","warning");return}try{await mn({gender:l,positionName:p,seatsCount:u,isElected:!1,sortOrder:999}),d.positions=await Ne(),g("เพิ่มตำแหน่งแล้ว ✅","success"),x()}catch(b){g("เพิ่มไม่สำเร็จ: "+k(b),"error")}})}),(t=document.getElementById("interview-criterion-form"))==null||t.addEventListener("submit",async a=>{a.preventDefault();const o=a.target,l=o.name.value.trim(),p=Number(o.weight.value);if(!l||!p){g("กรอกชื่อหัวข้อและคะแนนให้ครบ","warning");return}try{await fn({name:l,weight:p}),re=null,x()}catch(u){g("บันทึกไม่สำเร็จ: "+k(u),"error")}}),document.querySelectorAll(".btn-remove-interview-criterion").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้ออกจากเกณฑ์สัมภาษณ์?"))try{await gn(Number(a.dataset.id)),re=null,x()}catch(o){g("ลบไม่สำเร็จ: "+k(o),"error")}})}),(r=document.getElementById("settings-video-form"))==null||r.addEventListener("submit",async a=>{a.preventDefault();const o=a.target,l=o.council_video_max_minutes.value.trim(),p=o.council_video_brief.value.split(`
`).map(u=>u.trim()).filter(Boolean);try{const u={council_video_max_minutes:l,council_video_brief:JSON.stringify(p)};await Je(u),d.cfg={...d.cfg,...u},g("บันทึกแล้ว ✅","success"),x()}catch(u){g("บันทึกไม่สำเร็จ: "+k(u),"error")}}),(n=document.getElementById("settings-doc-options-form"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const o=a.target,l=p=>p.split(`
`).map(u=>u.trim()).filter(Boolean);try{const p={council_doc_plan_areas:JSON.stringify(l(o.council_doc_plan_areas.value)),council_doc_project_types:JSON.stringify(l(o.council_doc_project_types.value)),council_doc_school_strategies:JSON.stringify(l(o.council_doc_school_strategies.value)),council_doc_education_standards:JSON.stringify(l(o.council_doc_education_standards.value))};await Je(p),d.cfg={...d.cfg,...p},g("บันทึกแล้ว ✅","success"),x()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error")}}),(s=document.getElementById("phrase-form"))==null||s.addEventListener("submit",async a=>{a.preventDefault();const l=a.target.phrase.value.trim();if(l)try{await _n({phrase:l,sortOrder:(oe==null?void 0:oe.length)??0}),oe=null,x()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error")}}),document.querySelectorAll(".btn-remove-phrase").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบข้อความนี้?"))try{await yn(Number(a.dataset.id)),oe=null,x()}catch(o){g("ลบไม่สำเร็จ: "+k(o),"error")}})}),document.querySelectorAll(".cert-template-type-radio").forEach(a=>{a.addEventListener("change",()=>{var l,p,u;const o=((l=document.querySelector('input[name="template_type"]:checked'))==null?void 0:l.value)==="custom";(p=document.getElementById("cert-template-preset-select"))==null||p.classList.toggle("hidden",o),(u=document.getElementById("cert-template-file-input"))==null||u.classList.toggle("hidden",!o)})}),(i=document.getElementById("cert-template-form"))==null||i.addEventListener("submit",async a=>{var b,h;a.preventDefault();const o=a.target,l=o.name.value.trim();if(!l)return;const p=o.template_type.value==="custom",u=o.querySelector('button[type="submit"]');u.disabled=!0,u.textContent="กำลังบันทึก...";try{let f=null;if(p){const E=(b=o.background_image.files)==null?void 0:b[0];if(!E){g("กรุณาอัปโหลดรูปพื้นหลังเทมเพลต","warning"),u.disabled=!1,u.textContent="เพิ่มเทมเพลต";return}f=await Kr(E)}const m=p?null:o.preset_key.value,v=rn(p?"custom":m);p&&(v.background={type:"image",imageUrl:f}),await nn({name:l,type:p?"custom":"preset",presetKey:m,backgroundImageUrl:f,layout:v,createdByTeacherId:((h=d.teacher)==null?void 0:h.id)??null}),g("เพิ่มเทมเพลตแล้ว ✅","success"),z=null,x()}catch(f){g("บันทึกไม่สำเร็จ: "+k(f),"error"),u.disabled=!1,u.textContent="เพิ่มเทมเพลต"}}),document.querySelectorAll(".btn-remove-cert-template").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบเทมเพลตนี้?"))try{await an(Number(a.dataset.id)),z=null,x()}catch(o){g("ลบไม่สำเร็จ: "+k(o),"error")}})}),document.querySelectorAll(".btn-design-cert-template").forEach(a=>{a.addEventListener("click",()=>{const o=z==null?void 0:z.find(l=>l.id===Number(a.dataset.id));o&&dn({template:o,previewVariables:{reason:"เข้าร่วมกิจกรรมตัวอย่างจนสำเร็จ"},placeholderTokens:[{token:"{{reason}}",label:"เหตุผล/รายละเอียด"}],onSave:async(l,p)=>{await sn({id:o.id,layout:l,backgroundImageUrl:p}),g("บันทึกดีไซน์แล้ว ✅","success"),z=null,x()}})})}),document.querySelectorAll(".module-toggle").forEach(a=>{a.addEventListener("change",async()=>{const o=Dt();o[a.dataset.key]=a.checked;try{await Je({council_modules:JSON.stringify(o)}),d.cfg={...d.cfg,council_modules:JSON.stringify(o)},g(a.checked?"เปิดใช้งานแล้ว":"ปิดใช้งานแล้ว","success"),x()}catch(l){g("บันทึกไม่สำเร็จ: "+k(l),"error"),a.checked=!a.checked}})})}function Mi(){var e,t,r,n,s,i,a;(e=document.getElementById("btn-new-doc"))==null||e.addEventListener("click",()=>{K="new",x()}),(t=document.getElementById("btn-doc-form-back"))==null||t.addEventListener("click",()=>{K=null,x()}),(r=document.getElementById("btn-doc-form-cancel"))==null||r.addEventListener("click",()=>{K=null,x()}),document.querySelectorAll(".btn-edit-doc").forEach(o=>{o.addEventListener("click",()=>{K=Number(o.dataset.id),x()})}),(n=document.getElementById("btn-doc-ai-import-open"))==null||n.addEventListener("click",()=>Ks()),document.querySelectorAll(".doc-responsible-chip").forEach(o=>{o.addEventListener("click",()=>{const l=document.querySelector('textarea[name="responsiblePersons"]');if(!l)return;const p=l.value.split(`
`).map(u=>u.trim()).filter(Boolean);p.includes(o.dataset.name)||p.push(o.dataset.name),l.value=p.join(`
`)})}),(s=document.getElementById("doc-form"))==null||s.addEventListener("submit",async o=>{o.preventDefault();const l=o.target,p=l.title.value.trim();if(!p){g("กรุณากรอกชื่อโครงการ","warning");return}const u=l.dataset.origin,b=l.positionId.value?Number(l.positionId.value):null;if(u==="council"&&!b){g("กรุณาเลือกฝ่ายที่รับผิดชอบ (ใช้ส่งให้ครูที่ปรึกษาประจำฝ่ายตรวจ)","warning");return}const h={title:p,planArea:l.planArea.value.trim(),projectType:l.projectType.value.trim(),schoolStrategy:l.schoolStrategy.value.trim(),educationStandard:l.educationStandard.value.trim(),responsiblePersons:be(l.responsiblePersons.value),positionId:b,rationale:l.rationale.value.trim(),objectives:be(l.objectives.value),goalsQuantitative:be(l.goalsQuantitative.value),goalsQualitative:be(l.goalsQualitative.value),workSteps:Ke(l.workSteps.value,4),durationText:l.durationText.value.trim(),locationText:l.locationText.value.trim(),budgetItems:Ke(l.budgetItems.value,2),stakeholders:Ke(l.stakeholders.value,2),evaluationItems:Ke(l.evaluationItems.value,4),expectedResults:be(l.expectedResults.value)},f=l.querySelector('button[type="submit"]');f.disabled=!0,f.textContent="กำลังบันทึก...";try{K==="new"?await ka({...h,origin:u,academicYear:P,createdByStudentId:u==="council"&&d.student?d.student.id:null,createdByTeacherId:u==="teacher"&&d.teacher?d.teacher.id:null}):await Ea(K,h),g("บันทึกร่างแล้ว ✅","success"),G=null,K=null,x()}catch(m){g("บันทึกไม่สำเร็จ: "+k(m),"error"),f.disabled=!1,f.textContent="💾 บันทึกร่าง"}}),document.querySelectorAll(".btn-submit-doc").forEach(o=>{o.addEventListener("click",async()=>{o.disabled=!0;try{await Sa(Number(o.dataset.id)),G=null,x()}catch(l){g("บันทึกไม่สำเร็จ: "+k(l),"error"),o.disabled=!1}})}),document.querySelectorAll(".btn-approve-doc, .btn-reject-doc").forEach(o=>{o.addEventListener("click",async()=>{var h,f,m;const l=o.classList.contains("btn-approve-doc"),p=Number(o.dataset.id),u=G.find(v=>v.id===p);if(!u)return;const b=prompt(l?"ความเห็นประกอบ (ถ้ามี)":"เหตุผลที่ไม่อนุมัติ (จำเป็นต้องระบุ)")??"";if(!l&&!b.trim()){g("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}o.disabled=!0;try{const v=((h=d.teacher)==null?void 0:h.id)??null;u.status==="pending_advisor"?await Aa({id:p,approve:l,teacherId:v,comment:b.trim()}):u.status==="pending_dept_head"?await qa({id:p,approve:l,teacherId:v,comment:b.trim(),signatureUrl:((f=d.teacher)==null?void 0:f.signature_url)??null}):u.status==="pending_director"&&await Ia({id:p,approve:l,teacherId:v,comment:b.trim(),signatureUrl:((m=d.teacher)==null?void 0:m.signature_url)??null}),g(l?"อนุมัติแล้ว ✅":"ตีกลับให้แก้ไขแล้ว","success"),G=null,x()}catch(v){g("บันทึกไม่สำเร็จ: "+k(v),"error"),o.disabled=!1}})}),document.querySelectorAll(".btn-print-doc").forEach(o=>{o.addEventListener("click",()=>{const l=G.find(p=>p.id===Number(o.dataset.id));l&&nr(l)})}),document.querySelectorAll(".btn-view-doc-detail").forEach(o=>{o.addEventListener("click",()=>{ze=Number(o.dataset.id),x()})}),(i=document.getElementById("btn-doc-detail-close"))==null||i.addEventListener("click",()=>{ze=null,x()}),(a=document.getElementById("btn-doc-detail-print"))==null||a.addEventListener("click",()=>{const o=G.find(l=>l.id===ze);o&&nr(o)})}function Pi(){var e;(e=document.getElementById("criterion-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=r.name.value.trim(),s=Number(r.weight.value);if(!n||!s){g("กรอกชื่อเกณฑ์และคะแนนให้ครบ","warning");return}try{await ga({name:n,weight:s}),Q=null,x()}catch(i){g("บันทึกไม่สำเร็จ: "+k(i),"error")}}),document.querySelectorAll(".btn-remove-criterion").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบเกณฑ์นี้ออกจากการประเมิน?"))try{await _a(Number(t.dataset.id)),Q=null,x()}catch(r){g("ลบไม่สำเร็จ: "+k(r),"error")}})}),document.querySelectorAll(".btn-toggle-eval").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);it=it===r?null:r,x()})}),document.querySelectorAll(".eval-score-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=Number(t.dataset.memberId),s=t.decision.value;if(!s){g("กรุณาเลือกสรุปผล","warning");return}const i={};let a=0;Q.forEach(p=>{var b;const u=(b=t[`c_${p.id}`])==null?void 0:b.value;u!==""&&u!=null&&(i[p.id]=Number(u),a+=Number(u))});const o=Q.reduce((p,u)=>p+Number(u.weight),0),l=t.querySelector('button[type="submit"]');l.disabled=!0,l.textContent="กำลังบันทึก...";try{await ha({memberId:n,academicYear:P,scores:i,totalScore:a,maxScore:o,decision:s,comment:t.comment.value.trim(),evaluatorTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null}),g("บันทึกผลประเมินแล้ว ✅","success"),Ee=null,it=null,x()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error"),l.disabled=!1,l.textContent="บันทึกผลประเมิน"}})}),document.querySelectorAll(".btn-issue-cert").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.memberId),n=d.members.find(i=>i.id===r),s=Ee[r];if(!(!n||!s)){t.disabled=!0,t.textContent="กำลังออก...";try{const i=`${P}-${String(s.id).padStart(4,"0")}`;await wa({evaluationId:s.id,certificateNo:i}),s.certificate_no=i,s.certificate_issued_at=new Date().toISOString(),rr(n,s),x()}catch(i){g("ออกเกียรติบัตรไม่สำเร็จ: "+k(i),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}}})}),document.querySelectorAll(".btn-view-cert").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.memberId),n=d.members.find(i=>i.id===r),s=Ee[r];n&&s&&rr(n,s)})})}function Oi(){var e;(e=document.getElementById("activity-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=r.title.value.trim();if(!n){g("กรุณากรอกชื่อกิจกรรม","warning");return}const s=r.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="กำลังบันทึก...";try{await Un({title:n,detail:r.detail.value.trim(),gender:r.gender.value||null,activityDate:r.activity_date.value||null,budget:r.budget.value?Number(r.budget.value):null,ownerText:r.owner_text.value.trim(),academicYear:P,openToGeneral:r.open_to_general.checked,ownerMemberId:r.owner_member_id.value?Number(r.owner_member_id.value):null,countsForEvaluation:r.counts_for_evaluation.checked}),g("สร้างกิจกรรมแล้ว ✅","success"),F=null,x()}catch(i){g("บันทึกไม่สำเร็จ: "+k(i),"error"),s.disabled=!1,s.textContent="สร้างกิจกรรม"}}),document.querySelectorAll(".btn-activity-next").forEach(t=>{t.addEventListener("click",async()=>{t.disabled=!0;try{await Gt(Number(t.dataset.id),t.dataset.next),F=null,x()}catch(r){g("บันทึกไม่สำเร็จ: "+k(r),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cancel").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ยืนยันยกเลิกกิจกรรมนี้?")){t.disabled=!0;try{await Gt(Number(t.dataset.id),"cancelled"),F=null,x()}catch(r){g("บันทึกไม่สำเร็จ: "+k(r),"error"),t.disabled=!1}}})}),document.querySelectorAll(".btn-activity-attendance").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);ie[r]===void 0&&er(r)})}),document.querySelectorAll(".btn-activity-scan").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.id);ie[r]===void 0&&await er(r);const n=F.find(i=>i.id===r),s=d.members.filter(i=>{var a;return!(n!=null&&n.gender)||((a=i.council_positions)==null?void 0:a.gender)===n.gender});Ma({activityId:r,activityTitle:t.dataset.title,openToGeneral:!!t.dataset.openGeneral,members:s,alreadyChecked:ie[r],onCheckedIn:i=>{var a;(a=ie[r])==null||a.add(i),x()},onUndo:i=>{var a;(a=ie[r])==null||a.delete(i),x()}})})}),document.querySelectorAll(".btn-checkin").forEach(t=>{t.addEventListener("click",async()=>{var s;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId);t.disabled=!0;try{await vr({activityId:r,studentId:n}),(s=ie[r])==null||s.add(n),x()}catch(i){g("เช็คชื่อไม่สำเร็จ: "+k(i),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cert-manage").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);$t=$t===r?null:r,x()})}),document.querySelectorAll(".cert-rule-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=r.target,s=Number(n.dataset.activityId),i=n.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await Xn({activityId:s,templateId:n.template_id.value?Number(n.template_id.value):null,minAttendanceCount:n.min_attendance_count.value?Number(n.min_attendance_count.value):null,requiredDates:be(n.required_dates.value),notes:n.notes.value.trim()}),g("บันทึกเงื่อนไขแล้ว ✅","success"),delete ke[s],x()}catch(a){g("บันทึกไม่สำเร็จ: "+k(a),"error"),i.disabled=!1,i.textContent="บันทึกเงื่อนไข"}})}),document.querySelectorAll(".btn-cert-override").forEach(t=>{t.addEventListener("click",async()=>{var i,a;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),s=t.dataset.decision||null;t.disabled=!0;try{await ea({activityId:r,studentId:n,decision:s,decidedByTeacherId:((i=d.teacher)==null?void 0:i.id)??null,decidedByMemberId:((a=d.membership[0])==null?void 0:a.id)??null}),delete Lt[r],Tr(r)}catch(o){g("บันทึกไม่สำเร็จ: "+k(o),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-cert-issue").forEach(t=>{t.addEventListener("click",async()=>{var l,p;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),s=F.find(u=>u.id===r),i=ke[r],o=(l=(jt[r]??[]).find(u=>u.student_id===n))==null?void 0:l.students;if(!(i!=null&&i.template_id)){g("กรุณาเลือกเทมเพลตเกียรติบัตรก่อน","warning");return}t.disabled=!0,t.textContent="กำลังออก...";try{const u=await en({templateId:i.template_id,recipientType:"student",studentId:n,recipientName:(o==null?void 0:o.full_name)??"—",variables:{reason:`เข้าร่วมกิจกรรม "${(s==null?void 0:s.title)??""}" ของสภานักเรียนจนสำเร็จ`},title:(s==null?void 0:s.title)??null,issuedByTeacherId:((p=d.teacher)==null?void 0:p.id)??null,sourceSystem:"council_activity",sourceRefId:r});Fe[r]={...Fe[r]??{},[n]:u},x()}catch(u){g("ออกเกียรติบัตรไม่สำเร็จ: "+k(u),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}})}),document.querySelectorAll(".btn-cert-view").forEach(t=>{t.addEventListener("click",()=>{var i;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),s=(i=Fe[r])==null?void 0:i[n];s&&tn({layout:s.layout_snapshot,variables:{name:s.recipient_name??"",date:new Date(s.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:s.certificate_no,...s.variables},docTitle:s.title})})})}function Ri(){var e,t,r;(e=document.getElementById("btn-open-ann-form"))==null||e.addEventListener("click",()=>{at=!0,x()}),(t=document.getElementById("btn-cancel-ann"))==null||t.addEventListener("click",()=>{at=!1,x()}),document.querySelectorAll(".ann-filter-btn").forEach(n=>{n.addEventListener("click",()=>{nt=n.dataset.filter,x()})}),(r=document.getElementById("announcement-form"))==null||r.addEventListener("submit",async n=>{n.preventDefault();const s=n.target,i=s.title.value.trim();if(!i){g("กรุณากรอกหัวเรื่องประกาศ","warning");return}const a=s.querySelector('button[type="submit"]');a.disabled=!0,a.textContent="กำลังเผยแพร่...";try{await pa({type:s.type.value,audience:s.audience.value,title:i,body:s.body.value.trim(),pinned:s.pinned.checked,postedByTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null,postedByStudentId:d.isChair&&d.student?d.student.id:null}),g("เผยแพร่ประกาศแล้ว 📣","success"),at=!1,ut=null,x()}catch(o){g("เผยแพร่ไม่สำเร็จ: "+k(o),"error"),a.disabled=!1,a.textContent="เผยแพร่ประกาศ"}}),document.querySelectorAll(".btn-ack-ann").forEach(n=>{n.addEventListener("click",async()=>{const s=Number(n.dataset.id);n.disabled=!0,n.textContent="กำลังบันทึก...";try{await ba({announcementId:s,studentId:d.student.id}),le==null||le.add(s),de&&(de[s]=(de[s]??0)+1),g("รับทราบแล้ว","success"),x()}catch(i){g("บันทึกไม่สำเร็จ: "+k(i),"error"),n.disabled=!1,n.textContent="รับทราบ"}})})}function Hi(){var e,t,r,n,s,i;document.querySelectorAll(".apps-filter-btn").forEach(a=>{a.addEventListener("click",()=>{pe=a.dataset.filter,x()})}),document.querySelectorAll(".apps-gender-tab-btn").forEach(a=>{a.addEventListener("click",()=>{ee=a.dataset.gender,we="",x()})}),(e=document.getElementById("apps-grade-filter"))==null||e.addEventListener("change",a=>{tt=a.target.value,x()}),(t=document.getElementById("apps-position-filter"))==null||t.addEventListener("change",a=>{we=a.target.value,x()}),(r=document.getElementById("apps-advisor-endorse-filter"))==null||r.addEventListener("change",a=>{De=a.target.value,x()}),(n=document.getElementById("apps-peer-endorse-filter"))==null||n.addEventListener("change",a=>{Te=a.target.value,x()}),document.querySelectorAll(".btn-view-app-detail").forEach(a=>{a.addEventListener("click",()=>{Re=Number(a.dataset.id),x()})}),(s=document.getElementById("btn-admin-app-detail-close"))==null||s.addEventListener("click",()=>{Re=null,x()}),(i=document.getElementById("admin-app-detail-backdrop"))==null||i.addEventListener("click",a=>{a.target.id==="admin-app-detail-backdrop"&&(Re=null,x())}),document.querySelectorAll(".schedule-form").forEach(a=>{a.addEventListener("submit",async o=>{o.preventDefault();const l=Number(a.dataset.appId),p=a.dataset.ivId?Number(a.dataset.ivId):null,u=a.scheduled_at.value,b=a.location.value.trim();if(!u){g("กรุณาระบุวันเวลานัดสัมภาษณ์","warning");return}const h=a.interviewerText.value.trim();let f=null;if(h){const v=h.match(/· รหัส (\d+)$/);if(!v){g("กรุณาเลือกชื่อครูจากรายการที่แสดง (หรือเว้นว่างไว้ถ้ายังไม่ระบุ)","warning");return}f=Number(v[1])}const m=a.querySelector('button[type="submit"]');m.disabled=!0,m.textContent="กำลังบันทึก...";try{const v=new Date(u).toISOString();await Cn({applicationId:l,existingInterviewId:p,scheduledAt:v,location:b,interviewerTeacherId:f}),g("นัดสัมภาษณ์แล้ว ✅","success");const E=a.dataset.profileId;if(E){const I=new Date(v).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"});y.functions.invoke("send-push",{body:{title:"🗓️ นัดสัมภาษณ์สภานักเรียน",body:`${a.dataset.positionName||""} — ${I}${b?" · "+b:""}`,url:"council.html",profileIds:[E]}}).catch(()=>{})}L=null,x()}catch(v){g("บันทึกไม่สำเร็จ: "+k(v),"error"),m.disabled=!1,m.textContent="บันทึกนัดสัมภาษณ์"}})}),document.querySelectorAll(".score-form").forEach(a=>{const o=Number(a.dataset.maxWeight),l=Number(a.dataset.passThreshold),p=a.querySelector(".score-total-display"),u=()=>{let b=0;a.querySelectorAll(".score-input").forEach(h=>{h.value!==""&&(b+=Number(h.value))}),p&&(p.textContent=`${b} / ${o} · ต้อง ≥ ${l} จึงผ่าน`)};a.querySelectorAll(".score-input").forEach(b=>b.addEventListener("input",u)),a.addEventListener("submit",async b=>{b.preventDefault();const h=Number(a.dataset.appId),f=a.dataset.ivId?Number(a.dataset.ivId):null;if(!f){g("ไม่พบข้อมูลการนัดสัมภาษณ์","error");return}const m={};let v=0;a.querySelectorAll(".score-input").forEach(A=>{A.value!==""&&(m[A.dataset.criterionId]=Number(A.value),v+=Number(A.value))});const E=v>=l?"pass":"fail",I=a.comment.value.trim(),j=a.querySelector('button[type="submit"]');j.disabled=!0,j.textContent="กำลังบันทึก...";try{await Ln({interviewId:f,applicationId:h,score:v,scores:m,result:E,comment:I}),g(`บันทึกผลสัมภาษณ์แล้ว ✅ (${E==="pass"?"ผ่าน":"ไม่ผ่าน"})`,"success"),L=null,x()}catch(A){g("บันทึกไม่สำเร็จ: "+k(A),"error"),j.disabled=!1,j.textContent="บันทึกผล"}})}),document.querySelectorAll(".btn-promote-candidate").forEach(a=>{a.addEventListener("click",async()=>{const o=Number(a.dataset.appId),l=L==null?void 0:L.find(p=>p.id===o);if(l){a.disabled=!0,a.textContent="กำลังบันทึก...";try{const p=await mr({gender:l.council_positions.gender,academicYear:P});await jn({applicationId:o,studentId:l.students.id,electionConfigId:p.id,campaignStatement:l.motivation,photoUrl:l.photo_url}),g("ตั้งเป็นผู้สมัครเลือกตั้งแล้ว 🗳️","success"),delete ue[l.council_positions.gender],d.elections=await lt().catch(()=>d.elections),L=null,x()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error"),a.disabled=!1,a.textContent="🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง"}}})}),document.querySelectorAll(".btn-appoint-member").forEach(a=>{a.addEventListener("click",async()=>{var p,u;const o=Number(a.dataset.appId),l=L==null?void 0:L.find(b=>b.id===o);if(l&&confirm(`ยืนยันแต่งตั้ง ${((p=l.students)==null?void 0:p.full_name)??""} เป็น ${((u=l.council_positions)==null?void 0:u.position_name)??""}?`)){a.disabled=!0,a.textContent="กำลังบันทึก...";try{await Dn({applicationId:o,positionId:l.position_id,studentId:l.students.id,academicYear:P}),g("แต่งตั้งสำเร็จ ✅","success"),L=null,d.members=await Ce().catch(()=>d.members),x()}catch(b){g("บันทึกไม่สำเร็จ: "+k(b),"error"),a.disabled=!1,a.textContent="✅ แต่งตั้งเข้าตำแหน่ง"}}})})}function Fi(){var e,t,r,n,s;document.querySelectorAll(".btn-create-election").forEach(i=>{i.addEventListener("click",async()=>{i.disabled=!0;try{const a=await mr({gender:i.dataset.gender,academicYear:P});d.elections=[...d.elections.filter(o=>o.id!==a.id),a],x()}catch(a){g("เปิดใช้งานไม่สำเร็จ: "+k(a),"error"),i.disabled=!1}})}),document.querySelectorAll(".election-window-form").forEach(i=>{i.addEventListener("submit",async a=>{a.preventDefault();const o=Number(i.dataset.electionId),l=i.opens_at.value?new Date(i.opens_at.value).toISOString():null,p=i.closes_at.value?new Date(i.closes_at.value).toISOString():null,u=i.querySelector('button[type="submit"]');u.disabled=!0;try{await Mn({electionConfigId:o,opensAt:l,closesAt:p}),d.elections=await lt().catch(()=>d.elections),g("บันทึกช่วงเวลาแล้ว","success"),x()}catch(b){g("บันทึกไม่สำเร็จ: "+k(b),"error"),u.disabled=!1}})}),document.querySelectorAll(".btn-publish-results").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("ยืนยันประกาศผลและแต่งตั้งผู้ชนะเป็นประธานสภา? การกระทำนี้ย้อนกลับไม่ได้")){i.disabled=!0,i.textContent="กำลังประกาศผล...";try{await On({electionConfigId:Number(i.dataset.electionId),gender:i.dataset.gender,academicYear:P}),g("ประกาศผลแล้ว 🎉","success"),d.elections=await lt().catch(()=>d.elections),d.members=await Ce().catch(()=>d.members),x()}catch(a){g("ประกาศผลไม่สำเร็จ: "+k(a),"error"),i.disabled=!1,i.textContent="📢 ประกาศผล+แต่งตั้ง"}}})}),document.querySelectorAll(".candidate-card-btn").forEach(i=>{i.addEventListener("click",()=>{$e={gender:i.dataset.gender,id:Number(i.dataset.id)},me=!1,x()})}),(e=document.getElementById("btn-candidate-modal-close"))==null||e.addEventListener("click",()=>{$e=null,me=!1,x()}),(t=document.getElementById("candidate-modal-backdrop"))==null||t.addEventListener("click",i=>{i.target.id==="candidate-modal-backdrop"&&($e=null,me=!1,x())}),(r=document.getElementById("btn-candidate-edit"))==null||r.addEventListener("click",()=>{me=!0,x()}),(n=document.getElementById("btn-candidate-cancel-edit"))==null||n.addEventListener("click",()=>{me=!1,x()}),(s=document.getElementById("candidate-edit-form"))==null||s.addEventListener("submit",async i=>{i.preventDefault();const a=i.target,o=Number(a.dataset.candidateId),l=a.slogan.value.trim(),p=a.vision.value.trim(),u=a.policies.value.split(`
`).map(f=>f.trim()).filter(Boolean),b=a.experience.value.split(`
`).map(f=>f.trim()).filter(Boolean),h=a.querySelector('button[type="submit"]');h.disabled=!0,h.textContent="กำลังบันทึก...";try{await Pn({candidateId:o,slogan:l,vision:p,policies:u,experience:b});const{gender:f}=$e;ue[f]=await At(Nt(f).id).catch(()=>ue[f]),me=!1,g("บันทึกโปรไฟล์ผู้สมัครแล้ว ✅","success"),x()}catch(f){g("บันทึกไม่สำเร็จ: "+k(f),"error"),h.disabled=!1,h.textContent="บันทึก"}})}const Wi={auto:"ตามระบบ",light:"สว่าง",dark:"มืด"},zi={auto:"🌓",light:"☀️",dark:"🌙"};function _t(e){const t=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.toggleAttribute("data-dark",t);const r=document.getElementById("council-theme-icon"),n=document.getElementById("council-theme-label");r&&(r.textContent=zi[e]),n&&(n.textContent=Wi[e])}function Gi(){var t;const e=localStorage.getItem("council_theme")||"auto";_t(e),(t=document.getElementById("council-theme-toggle"))==null||t.addEventListener("click",()=>{const r=localStorage.getItem("council_theme")||"auto",n=r==="auto"?"light":r==="light"?"dark":"auto";localStorage.setItem("council_theme",n),_t(n)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("council_theme")||"auto")==="auto"&&_t("auto")})}Gi();Fa();
