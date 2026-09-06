import{s as y}from"./supabase-BV-W2lsh.js";/* empty css             *//* empty css                                  */import{b as Fr}from"./anti-pull-refresh-BGrI1pMY.js";import{a as g}from"./ui-Dh03k4iX.js";import{g as zr}from"./student-api-q3ZleCC5.js";import{getMyTeacherProfile as Gr,getMyHomeroomRooms as Ur,getTeachers as Vr}from"./api-1xsyVspL.js";import{d as Yr,e as Qr,f as Jr,o as or,g as Kr,h as Xr}from"./storage-D6nkcVz6.js";import{i as Zr,o as ea,d as ta,c as ra,a as aa,u as na,C as vt,g as sa,b as ia}from"./certificate-engine-Ciw2pKHx.js";import{o as oa}from"./certificate-editor-CGT2GcIB.js";import{b as la}from"./browser-JP79f-a9.js";const da=["council_logo_url","council_theme_color","council_name","council_theme_side_m","council_theme_side_w","council_term_start_semester","council_term_start_year","council_term_end_semester","council_term_end_year","council_min_gpa","council_min_gpa_religious","council_eligible_grade_levels","council_require_teacher_endorsement","council_require_peer_endorsement","council_min_certificates","council_min_attendance_pct","council_apply_opens_at","council_apply_closes_at","council_featured_phase","council_video_max_minutes","council_video_brief","council_doc_plan_areas","council_doc_project_types","council_doc_school_strategies","council_doc_education_standards","council_signer_advisor_name","council_signer_director_name","council_election_thank_you_message","council_visible_to_all","council_test_student_codes","council_modules","academicYear"];async function ca(){const{data:e,error:t}=await y.from("system_config").select("key,value").in("key",da);if(t)throw t;return Object.fromEntries((e??[]).map(r=>[r.key,r.value]))}async function Qe(e){const t=Object.entries(e).map(([a,s])=>({key:a,value:s})),{error:r}=await y.from("system_config").upsert(t,{onConflict:"key"});if(r)throw r}async function Be(){const{data:e,error:t}=await y.from("council_positions").select("*").eq("is_active",!0).order("gender").order("sort_order");if(t)throw t;return e??[]}async function ua({gender:e,positionName:t,seatsCount:r,isElected:a,sortOrder:s}){const{error:i}=await y.from("council_positions").insert({gender:e,position_name:t,seats_count:r,is_elected:!1,sort_order:s});if(i)throw i}async function pa(e,t){const{error:r}=await y.from("council_positions").update(t).eq("id",e);if(r)throw r}async function ma(e){const{error:t}=await y.from("council_positions").update({is_active:!1}).eq("id",e);if(t)throw t}async function ba(){const{data:e,error:t}=await y.from("council_interview_criteria").select("*").eq("is_active",!0).order("sort_order");if(t)throw t;return e??[]}async function va({name:e,weight:t}){const{error:r}=await y.from("council_interview_criteria").insert({name:e,weight:t});if(r)throw r}async function xa(e){const{error:t}=await y.from("council_interview_criteria").update({is_active:!1}).eq("id",e);if(t)throw t}async function fa({phrase:e,sortOrder:t}){const{error:r}=await y.from("council_endorsement_phrases").insert({phrase:e,sort_order:t??0});if(r)throw r}async function ga(e){const{error:t}=await y.from("council_endorsement_phrases").delete().eq("id",e);if(t)throw t}async function Ie(e){let t=y.from("council_members").select("id, position_id, student_id, academic_year, status, source, can_create_activities, council_positions(gender, position_name, sort_order, is_elected), students(full_name, student_code, main_room, image_url, photo_url)").eq("status","active");const{data:r,error:a}=await t;if(a)throw a;return r??[]}async function ot(e){let t=y.from("council_election_config").select("*");const{data:r,error:a}=await t.order("gender");if(a)throw a;return r??[]}async function lr(e){const{data:t,error:r}=await y.from("council_applications").select(`id, student_id, position_id, status, motivation, photo_url, created_at,
      gpa_general, gpa_religious, intro_video_url, certificates,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      peer_endorsed_by_member_id, peer_endorsement_comment, peer_endorsed_at,
      requested_peer_endorser_id,
      teachers(full_name),
      council_members!council_applications_peer_endorsed_by_member_id_fkey(students(full_name)),
      requested_peer_endorser:council_members!council_applications_requested_peer_endorser_id_fkey(students(full_name)),
      council_positions(position_name, gender, is_elected)`).eq("student_id",e).order("created_at",{ascending:!1});if(r)throw r;return t??[]}async function _a(e){const{data:t,error:r}=await y.from("council_members").select("id, position_id, status, source, term_start_date, term_end_date, can_create_activities, council_positions(position_name, gender, is_elected)").eq("student_id",e).eq("status","active");if(r)throw r;return t??[]}async function ya(e,t){const{error:r}=await y.rpc("set_council_member_can_create",{p_member_id:e,p_value:!!t});if(r)throw r}async function ha({studentId:e,positionId:t,academicYear:r,motivation:a,photoUrl:s,gpaGeneral:i,gpaReligious:n,introVideoUrl:o,certificates:l,requestedPeerEndorserId:p}){const{error:u}=await y.from("council_applications").insert({student_id:e,position_id:t,academic_year:r,motivation:a,photo_url:s,gpa_general:i,gpa_religious:n,intro_video_url:o,certificates:l??[],requested_peer_endorser_id:p??null});if(u)throw u}async function dr(e){if(!(e!=null&&e.length))return[];const{data:t,error:r}=await y.from("council_applications").select("id, position_id, motivation, photo_url, status, created_at, gpa_general, gpa_religious, intro_video_url, council_positions(position_name, gender), students(id, full_name, student_code, main_room, image_url, photo_url)").eq("status","pending").is("endorsed_at",null).order("created_at");if(r)throw r;return(t??[]).filter(a=>{var s;return e.includes((s=a.students)==null?void 0:s.main_room)})}async function cr(){const{data:e,error:t}=await y.from("council_endorsement_phrases").select("*").order("sort_order");if(t)throw t;return e??[]}async function wa({applicationId:e,teacherId:t,comment:r}){const{error:a}=await y.from("council_applications").update({endorsing_teacher_id:t,endorsement_comment:r,endorsed_at:new Date().toISOString()}).eq("id",e);if(a)throw a}async function $a({applicationId:e,teacherId:t,comment:r}){const{error:a}=await y.from("council_applications").update({endorsing_teacher_id:t,endorsement_comment:r,endorsed_at:new Date().toISOString(),status:"rejected"}).eq("id",e);if(a)throw a}async function ka(e,t){const{data:r,error:a}=await y.from("council_applications").select(`id, position_id, motivation, photo_url, status, created_at, requested_peer_endorser_id,
      council_positions!inner(position_name, gender),
      students(id, full_name, student_code, main_room, image_url, photo_url)`).eq("status","pending").is("peer_endorsed_at",null).eq("council_positions.gender",e).eq("requested_peer_endorser_id",t).order("created_at");if(a)throw a;return r??[]}async function Ea({applicationId:e,memberId:t}){const{error:r}=await y.from("council_applications").update({requested_peer_endorser_id:t}).eq("id",e);if(r)throw r}async function Sa({applicationId:e,memberId:t,comment:r}){const{data:a,error:s}=await y.from("council_applications").select("requested_peer_endorser_id").eq("id",e).single();if(s)throw s;if(String(a.requested_peer_endorser_id)!==String(t))throw new Error("ใบสมัครนี้ไม่ได้ระบุให้คุณเป็นผู้รับรอง");const{error:i}=await y.from("council_applications").update({peer_endorsed_by_member_id:t,peer_endorsement_comment:r,peer_endorsed_at:new Date().toISOString()}).eq("id",e);if(i)throw i}async function Aa(e){let t=y.from("council_applications").select(`id, position_id, status, motivation, photo_url, academic_year, created_at,
      gpa_general, gpa_religious, intro_video_url, certificates,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      peer_endorsed_by_member_id, peer_endorsement_comment, peer_endorsed_at,
      teachers(full_name),
      council_members!council_applications_peer_endorsed_by_member_id_fkey(students(full_name)),
      council_positions(id, position_name, gender, is_elected),
      students(id, full_name, student_code, main_room, image_url, photo_url, profile_id),
      council_interviews(id, scheduled_at, location, interviewer_teacher_id, result, score, scores, comment),
      council_candidates(id, election_config_id, ballot_number)`).order("created_at",{ascending:!1});e&&(t=t.eq("academic_year",e));const{data:r,error:a}=await t;if(a)throw a;return r??[]}async function qa({applicationId:e,existingInterviewId:t,scheduledAt:r,location:a,interviewerTeacherId:s}){const i={application_id:e,scheduled_at:r,location:a,interviewer_teacher_id:s};if(t){const{error:o}=await y.from("council_interviews").update(i).eq("id",t);if(o)throw o}else{const{error:o}=await y.from("council_interviews").insert(i);if(o)throw o}const{error:n}=await y.from("council_applications").update({status:"interview_scheduled"}).eq("id",e);if(n)throw n}async function Ia({interviewId:e,applicationId:t,score:r,scores:a,result:s,comment:i}){const{error:n}=await y.from("council_interviews").update({score:r,scores:a,result:s,comment:i}).eq("id",e);if(n)throw n;const o=s==="pass"?"interviewed":"rejected",{error:l}=await y.from("council_applications").update({status:o}).eq("id",t);if(l)throw l}async function Ca({applicationId:e,studentId:t,electionConfigId:r,campaignStatement:a,photoUrl:s}){var u;const{data:i,error:n}=await y.from("council_candidates").select("ballot_number").eq("election_config_id",r).order("ballot_number",{ascending:!1}).limit(1);if(n)throw n;const o=(((u=i==null?void 0:i[0])==null?void 0:u.ballot_number)??0)+1,{error:l}=await y.from("council_candidates").insert({election_config_id:r,application_id:e,student_id:t,ballot_number:o,campaign_statement:a,photo_url:s});if(l)throw l;const{error:p}=await y.from("council_applications").update({status:"candidate"}).eq("id",e);if(p)throw p}async function La({applicationId:e,positionId:t,studentId:r,academicYear:a}){const{error:s}=await y.from("council_members").insert({position_id:t,student_id:r,academic_year:a,source:"appointed",status:"active",term_start_date:new Date().toISOString().slice(0,10)});if(s)throw s;const{error:i}=await y.from("council_applications").update({status:"appointed"}).eq("id",e);if(i)throw i}async function ur(e){const t=(e??"").trim();if(t.length<2)return[];const{data:r,error:a}=await y.from("students").select("id, full_name, student_code, main_room, gender, image_url, photo_url").or(`full_name.ilike.%${t}%,student_code.ilike.%${t}%`).limit(15);if(a)throw a;return r??[]}async function ja({positionId:e,studentId:t,academicYear:r,termStartDate:a,appointedByTeacherId:s}){const{error:i}=await y.from("council_members").insert({position_id:e,student_id:t,academic_year:r,source:"appointed",status:"active",term_start_date:a||new Date().toISOString().slice(0,10),appointed_by_teacher_id:s??null});if(i)throw i}async function Da(e,{positionId:t,termStartDate:r,termEndDate:a}){const{error:s}=await y.from("council_members").update({position_id:t,term_start_date:r||null,term_end_date:a||null,updated_at:new Date().toISOString()}).eq("id",e);if(s)throw s}async function Ta(e){const{error:t}=await y.from("council_members").update({status:"removed",term_end_date:new Date().toISOString().slice(0,10),updated_at:new Date().toISOString()}).eq("id",e);if(t)throw t}async function pr({gender:e,academicYear:t}){const{data:r,error:a}=await y.from("council_election_config").select("*").eq("gender",e).eq("academic_year",t).maybeSingle();if(a)throw a;if(r)return r;const{data:s,error:i}=await y.from("council_election_config").insert({gender:e,academic_year:t}).select().single();if(i)throw i;return s}async function Ba({electionConfigId:e,opensAt:t,closesAt:r}){const{error:a}=await y.from("council_election_config").update({opens_at:t,closes_at:r}).eq("id",e);if(a)throw a}async function St(e){const{data:t,error:r}=await y.from("council_candidates").select(`id, ballot_number, campaign_statement, photo_url, student_id, application_id,
      slogan, vision, policies, experience,
      students(full_name, student_code, main_room, image_url, photo_url),
      council_applications(gpa_general, gpa_religious)`).eq("election_config_id",e).order("ballot_number");if(r)throw r;return t??[]}async function Na({candidateId:e,slogan:t,vision:r,policies:a,experience:s}){const{error:i}=await y.from("council_candidates").update({slogan:t,vision:r,policies:a,experience:s}).eq("id",e);if(i)throw i}async function _t(e){const t=e==="M"?["ชาย","M"]:["หญิง","W"],{count:r,error:a}=await y.from("students").select("id",{count:"exact",head:!0}).in("gender",t).or("is_active.is.null,is_active.eq.true");if(a)throw a;return r??0}async function mr(e){const{data:t,error:r}=await y.from("council_votes").select("candidate_id").eq("election_config_id",e);if(r)throw r;const a={};return(t??[]).forEach(s=>{a[s.candidate_id]=(a[s.candidate_id]??0)+1}),a}async function Ma({electionConfigId:e,gender:t,academicYear:r}){const a=await St(e);if(!a.length)throw new Error("ยังไม่มีผู้สมัครในการเลือกตั้งนี้");const s=await mr(e),i=a.reduce((u,b)=>(s[b.id]??0)>(s[u==null?void 0:u.id]??-1)?b:u,null);if(!i)throw new Error("ยังไม่มีผู้ลงคะแนนเลย");const o=(await Be()).find(u=>u.gender===t&&u.is_elected);if(!o)throw new Error("ไม่พบตำแหน่งที่กำหนดให้มาจากการเลือกตั้งของสภา"+(t==="M"?"ชาย":"หญิง"));const{error:l}=await y.from("council_election_config").update({results_published_at:new Date().toISOString()}).eq("id",e);if(l)throw l;const{error:p}=await y.from("council_members").insert({position_id:o.id,student_id:i.student_id,academic_year:r,source:"elected",status:"active",term_start_date:new Date().toISOString().slice(0,10)});if(p)throw p;return i}async function Pa(e){const[{data:t,error:r},{data:a,error:s}]=await Promise.all([y.from("council_positions").select("*").eq("gender",e).eq("is_active",!0).eq("is_elected",!1).order("sort_order"),y.from("council_members").select("position_id").eq("status","active")]);if(r)throw r;if(s)throw s;const i={};return(a??[]).forEach(n=>{i[n.position_id]=(i[n.position_id]??0)+1}),(t??[]).filter(n=>(i[n.id]??0)<n.seats_count)}async function Oa(e){const{data:t,error:r}=await y.from("council_applications").select(`id, position_id, motivation, photo_url, student_id,
      students(id, full_name, student_code, main_room, image_url, photo_url),
      council_positions!inner(id, position_name, gender, is_elected),
      council_interviews(score, comment)`).eq("status","interviewed").eq("council_positions.gender",e).eq("council_positions.is_elected",!1);if(r)throw r;return t??[]}async function Ra({applicationId:e,positionId:t,proposedByStudentId:r}){const{error:a}=await y.from("council_nominations").insert({application_id:e,position_id:t,proposed_by_student_id:r});if(a)throw a}async function Ha(e){const{data:t,error:r}=await y.from("council_nominations").select(`id, application_id, position_id, status, comment, created_at,
      council_positions!inner(position_name, gender),
      council_applications(motivation, photo_url, students(full_name, student_code, main_room, image_url, photo_url))`).eq("status","proposed").eq("council_positions.gender",e).order("created_at");if(r)throw r;return t??[]}async function Wa({nominationId:e,approve:t,teacherId:r,comment:a}){const{data:s,error:i}=await y.from("council_nominations").select("*").eq("id",e).single();if(i)throw i;const{error:n}=await y.from("council_nominations").update({status:t?"approved":"rejected",decided_by_teacher_id:r,decided_at:new Date().toISOString(),comment:a}).eq("id",e);if(n)throw n;if(t){const{data:o,error:l}=await y.from("council_applications").select("student_id, academic_year").eq("id",s.application_id).single();if(l)throw l;const{error:p}=await y.from("council_members").insert({position_id:s.position_id,student_id:o.student_id,academic_year:o.academic_year,source:"appointed",status:"active",term_start_date:new Date().toISOString().slice(0,10)});if(p)throw p;const{error:u}=await y.from("council_applications").update({status:"appointed"}).eq("id",s.application_id);if(u)throw u}}async function Fa(e){let t=y.from("council_activities").select("*, council_members!council_activities_owner_member_id_fkey(students(full_name))").order("activity_date",{ascending:!1,nullsFirst:!1});e&&(t=t.eq("academic_year",e));const{data:r,error:a}=await t;if(a)throw a;return r??[]}async function za({title:e,detail:t,gender:r,activityDate:a,budget:s,ownerText:i,academicYear:n,openToGeneral:o,ownerMemberId:l,countsForEvaluation:p}){const{error:u}=await y.from("council_activities").insert({title:e,detail:t,gender:r||null,activity_date:a||null,budget:s||null,owner_text:i||null,academic_year:n,open_to_general:!!o,owner_member_id:l||null,counts_for_evaluation:p!==!1});if(u)throw u}async function zt(e,t){const{error:r}=await y.from("council_activities").update({status:t,updated_at:new Date().toISOString()}).eq("id",e);if(r)throw r}async function Ga(e,t,r){let a=y.from("council_activities").select("id, title, activity_date, status, gender, counts_for_evaluation, open_to_general").in("status",["ongoing","completed"]);r&&(a=a.eq("academic_year",r)),t&&(a=a.or(`gender.is.null,gender.eq.${t}`));const[{data:s,error:i},{data:n,error:o}]=await Promise.all([a.order("activity_date",{ascending:!1}),y.from("council_activity_attendance").select("activity_id, checked_in_at").eq("student_id",e)]);if(i)throw i;if(o)throw o;return{activities:s??[],myAttendance:n??[]}}async function Ua(e){const{data:t,error:r}=await y.from("council_activity_attendance").select("student_id").eq("activity_id",e);if(r)throw r;return new Set((t??[]).map(a=>a.student_id))}async function Va(e){const{data:t,error:r}=await y.from("council_activity_attendance").select("student_id, checked_in_at, students(full_name, student_code, main_room, image_url, photo_url)").eq("activity_id",e).order("checked_in_at");if(r)throw r;return t??[]}async function br({activityId:e,studentId:t}){const{data:r}=await y.from("council_members").select("id").eq("student_id",t).eq("status","active").maybeSingle(),{error:a}=await y.from("council_activity_attendance").insert({activity_id:e,student_id:t,member_id:(r==null?void 0:r.id)??null});if(a)throw a}async function Ya({activityId:e,studentId:t}){const{error:r}=await y.from("council_activity_attendance").delete().eq("activity_id",e).eq("student_id",t);if(r)throw r}async function Qa(e){const{data:t,error:r}=await y.from("council_activity_certificate_rules").select("*").eq("activity_id",e).maybeSingle();if(r)throw r;return t}async function Ja({activityId:e,templateId:t,minAttendanceCount:r,requiredDates:a,notes:s}){const{error:i}=await y.from("council_activity_certificate_rules").upsert({activity_id:e,template_id:t||null,min_attendance_count:r||null,required_dates:a??[],notes:s||null,updated_at:new Date().toISOString()},{onConflict:"activity_id"});if(i)throw i}async function Ka(e){const{data:t,error:r}=await y.from("council_activity_certificates").select("*").eq("activity_id",e);if(r)throw r;return t??[]}async function Xa({activityId:e,studentId:t,decision:r,comment:a,decidedByTeacherId:s,decidedByMemberId:i}){const{error:n}=await y.from("council_activity_certificates").upsert({activity_id:e,student_id:t,override_decision:r,comment:a||null,decided_by_teacher_id:s||null,decided_by_member_id:i||null,updated_at:new Date().toISOString()},{onConflict:"activity_id,student_id"});if(n)throw n}async function Za(e){const{data:t,error:r}=await y.from("council_routines").select("*").eq("member_id",e).eq("is_active",!0).order("day_of_week");if(r)throw r;return t??[]}async function en(e,t){if(!(e!=null&&e.length))return new Set;const{data:r,error:a}=await y.from("council_routine_logs").select("routine_id").in("routine_id",e).eq("week_start",t);if(a)throw a;return new Set((r??[]).map(s=>s.routine_id))}async function tn({memberId:e,dayOfWeek:t,timeRange:r,task:a,location:s}){const{error:i}=await y.from("council_routines").insert({member_id:e,day_of_week:t,time_range:r,task:a,location:s});if(i)throw i}async function rn(e){const{error:t}=await y.from("council_routines").update({is_active:!1}).eq("id",e);if(t)throw t}async function an({routineId:e,weekStart:t,done:r}){if(r){const{error:a}=await y.from("council_routine_logs").insert({routine_id:e,week_start:t});if(a)throw a}else{const{error:a}=await y.from("council_routine_logs").delete().eq("routine_id",e).eq("week_start",t);if(a)throw a}}async function nn(e){const{data:t,error:r}=await y.from("council_assignments").select("*").eq("member_id",e).order("due_date",{ascending:!0,nullsFirst:!1});if(r)throw r;return t??[]}async function sn(e){const{data:t,error:r}=await y.from("council_assignments").select(`id, task, due_date, status, created_at,
      council_members!inner(id, position_id, council_positions!inner(gender, position_name), students(full_name, student_code, main_room, image_url, photo_url))`).eq("council_members.council_positions.gender",e).order("created_at",{ascending:!1});if(r)throw r;return t??[]}async function on({memberId:e,task:t,dueDate:r,assignedByStudentId:a}){const{error:s}=await y.from("council_assignments").insert({member_id:e,task:t,due_date:r||null,assigned_by_student_id:a});if(s)throw s}async function ln(e,t){const{error:r}=await y.from("council_assignments").update({status:t}).eq("id",e);if(r)throw r}async function dn(e){const{error:t}=await y.from("council_assignments").delete().eq("id",e);if(t)throw t}async function cn(){const{data:e,error:t}=await y.from("council_announcements").select("*, teachers(full_name), students(full_name)").order("pinned",{ascending:!1}).order("created_at",{ascending:!1});if(t)throw t;return e??[]}async function un({type:e,audience:t,title:r,body:a,pinned:s,postedByTeacherId:i,postedByStudentId:n}){const{error:o}=await y.from("council_announcements").insert({type:e,audience:t,title:r,body:a,pinned:s,posted_by_teacher_id:i||null,posted_by_student_id:n||null});if(o)throw o}async function pn(e){const{data:t,error:r}=await y.from("council_announcement_acks").select("announcement_id").eq("student_id",e);if(r)throw r;return new Set((t??[]).map(a=>a.announcement_id))}async function mn({announcementId:e,studentId:t}){const{error:r}=await y.from("council_announcement_acks").insert({announcement_id:e,student_id:t});if(r)throw r}async function bn(){const{data:e,error:t}=await y.from("council_announcement_acks").select("announcement_id");if(t)throw t;const r={};return(e??[]).forEach(a=>{r[a.announcement_id]=(r[a.announcement_id]??0)+1}),r}async function vn(){const{count:e,error:t}=await y.from("students").select("id",{count:"exact",head:!0}).or("is_active.is.null,is_active.eq.true");if(t)throw t;return e??0}async function xn(){const{data:e,error:t}=await y.from("council_evaluation_criteria").select("*").eq("is_active",!0).order("sort_order");if(t)throw t;return e??[]}async function fn({name:e,weight:t}){const{error:r}=await y.from("council_evaluation_criteria").insert({name:e,weight:t});if(r)throw r}async function gn(e){const{error:t}=await y.from("council_evaluation_criteria").update({is_active:!1}).eq("id",e);if(t)throw t}async function _n(e){const{data:t,error:r}=await y.from("council_evaluations").select("*").eq("academic_year",e);if(r)throw r;return t??[]}async function yn({memberId:e,academicYear:t,scores:r,totalScore:a,maxScore:s,decision:i,comment:n,evaluatorTeacherId:o}){const{error:l}=await y.from("council_evaluations").upsert({member_id:e,academic_year:t,scores:r,total_score:a,max_score:s,decision:i,comment:n,evaluator_teacher_id:o,evaluated_at:new Date().toISOString(),updated_at:new Date().toISOString()},{onConflict:"member_id,academic_year"});if(l)throw l}async function hn({evaluationId:e,certificateNo:t}){const{error:r}=await y.from("council_evaluations").update({certificate_no:t,certificate_issued_at:new Date().toISOString()}).eq("id",e);if(r)throw r}async function wn(e){const{data:t,error:r}=await y.from("council_documents").select("*, council_positions(position_name, gender)").eq("academic_year",e).order("created_at",{ascending:!1});if(r)throw r;return t??[]}const lt={title:"title",planArea:"plan_area",projectType:"project_type",schoolStrategy:"school_strategy",educationStandard:"education_standard",responsiblePersons:"responsible_persons",rationale:"rationale",objectives:"objectives",goalsQuantitative:"goals_quantitative",goalsQualitative:"goals_qualitative",workSteps:"work_steps",durationText:"duration_text",locationText:"location_text",budgetItems:"budget_items",stakeholders:"stakeholders",evaluationItems:"evaluation_items",expectedResults:"expected_results",positionId:"position_id"};async function $n(e){const t={};Object.entries(e).forEach(([s,i])=>{lt[s]&&(t[lt[s]]=i)}),t.origin=e.origin,t.academic_year=e.academicYear,t.created_by_student_id=e.createdByStudentId||null,t.created_by_teacher_id=e.createdByTeacherId||null;const{data:r,error:a}=await y.from("council_documents").insert(t).select().single();if(a)throw a;return r}async function kn(e,t){const r={};Object.entries(t).forEach(([s,i])=>{lt[s]&&(r[lt[s]]=i)}),r.updated_at=new Date().toISOString();const{error:a}=await y.from("council_documents").update(r).eq("id",e);if(a)throw a}async function En(e){const{data:t,error:r}=await y.from("council_documents").select("origin").eq("id",e).single();if(r)throw r;const a=t.origin==="council"?"pending_advisor":"pending_dept_head",{error:s}=await y.from("council_documents").update({status:a,updated_at:new Date().toISOString(),last_rejected_stage:null,last_rejected_by_teacher_id:null,last_rejected_at:null,last_rejection_comment:null}).eq("id",e);if(s)throw s}async function At({id:e,approve:t,teacherId:r,comment:a,stage:s,decidedCol:i,decidedAtCol:n,commentCol:o,signatureCol:l,signatureUrl:p,nextStatus:u}){const b=new Date().toISOString();if(t){const h={status:u,updated_at:b,[i]:r,[n]:b,[o]:a||null};l&&(h[l]=p||null);const{error:f}=await y.from("council_documents").update(h).eq("id",e);if(f)throw f}else{const{error:h}=await y.from("council_documents").update({status:"draft",updated_at:b,last_rejected_stage:s,last_rejected_by_teacher_id:r,last_rejected_at:b,last_rejection_comment:a}).eq("id",e);if(h)throw h}}async function Sn({id:e,approve:t,teacherId:r,comment:a}){return At({id:e,approve:t,teacherId:r,comment:a,stage:"advisor",decidedCol:"advisor_decided_by_teacher_id",decidedAtCol:"advisor_decided_at",commentCol:"advisor_comment",nextStatus:"pending_dept_head"})}async function An({id:e,approve:t,teacherId:r,comment:a,signatureUrl:s}){return At({id:e,approve:t,teacherId:r,comment:a,stage:"dept_head",decidedCol:"dept_head_decided_by_teacher_id",decidedAtCol:"dept_head_decided_at",commentCol:"dept_head_comment",signatureCol:"dept_head_signature_url",signatureUrl:s,nextStatus:"pending_director"})}async function qn({id:e,approve:t,teacherId:r,comment:a,signatureUrl:s}){return At({id:e,approve:t,teacherId:r,comment:a,stage:"director",decidedCol:"director_decided_by_teacher_id",decidedAtCol:"director_decided_at",commentCol:"director_comment",signatureCol:"director_signature_url",signatureUrl:s,nextStatus:"approved"})}async function xt(e){const{data:t,error:r}=await y.from("teachers").select("id, full_name, teacher_code, image_url, signature_url, category").contains("positions",[e]).order("full_name");if(r)throw r;return t??[]}async function In(e,t){const{data:r,error:a}=await y.from("teachers").select("positions").eq("id",e).single();if(a)throw a;const s=Array.from(new Set([...r.positions??[],t])),{error:i}=await y.from("teachers").update({positions:s}).eq("id",e);if(i)throw i}async function Cn(e,t){const{data:r,error:a}=await y.from("teachers").select("positions").eq("id",e).single();if(a)throw a;const s=(r.positions??[]).filter(n=>n!==t),{error:i}=await y.from("teachers").update({positions:s}).eq("id",e);if(i)throw i}async function vr(e){const{data:t,error:r}=await y.from("council_advisor_positions").select("position_id").eq("teacher_id",e);if(r)throw r;return(t??[]).map(a=>a.position_id)}async function Ln(e,t){const{error:r}=await y.from("council_advisor_positions").delete().eq("teacher_id",e);if(r)throw r;if(t.length){const{error:a}=await y.from("council_advisor_positions").insert(t.map(s=>({teacher_id:e,position_id:s})));if(a)throw a}}async function jn(){const{data:e,error:t}=await y.from("council_advisor_positions").select("teacher_id, position_id");if(t)throw t;return e??[]}async function Dn(e,t){const{error:r}=await y.from("teachers").update({signature_url:t}).eq("id",e);if(r)throw r}async function Tn(e,t){const{error:r}=await y.from("teachers").update({image_url:t}).eq("id",e);if(r)throw r}function Ce(e="success"){try{const t=new(window.AudioContext||window.webkitAudioContext),r=t.createOscillator(),a=t.createGain();r.connect(a),a.connect(t.destination),e==="success"?(r.type="sine",r.frequency.setValueAtTime(880,t.currentTime),a.gain.setValueAtTime(.08,t.currentTime),a.gain.exponentialRampToValueAtTime(.01,t.currentTime+.12),r.start(),r.stop(t.currentTime+.12)):(r.type="sawtooth",r.frequency.setValueAtTime(150,t.currentTime),a.gain.setValueAtTime(.12,t.currentTime),a.gain.exponentialRampToValueAtTime(.01,t.currentTime+.3),r.start(),r.stop(t.currentTime+.3))}catch{}}async function Bn(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const r=document.createElement("script");r.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",r.onload=()=>e(window.Html5Qrcode),r.onerror=()=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(r)})}function _e(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Nn(e){var L;const{activityId:t,activityTitle:r,members:a,alreadyChecked:s,onCheckedIn:i,onUndo:n,openToGeneral:o}=e;(L=document.getElementById("council-checkin-overlay"))==null||L.remove();const l=document.createElement("div");l.id="council-checkin-overlay",l.className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col",l.innerHTML=`
    <style>
      @keyframes ccs-laser-move { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .ccs-laser { animation: ccs-laser-move 2s ease-in-out infinite; }
      .ccs-flash-success { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .ccs-flash-error { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="text-slate-100 font-bold text-sm">📷 สแกนเช็คอินกิจกรรม</h3>
        <p class="text-xs text-slate-400 truncate">${_e(r??"")}</p>
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
    </div>`,document.body.appendChild(l);const p=[];let u=null,b=null,h=0;const f=new Set(s??[]),m=()=>{const S=l.querySelector("#ccs-history-list"),_=l.querySelector("#ccs-history-count");if(_.textContent=`${p.length} คน`,!p.length){S.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}S.innerHTML=p.map(w=>`
      <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${_e(w.name)}</span>
        <span class="text-emerald-400 font-bold text-[11px] flex-shrink-0">✓ เช็คอินแล้ว</span>
        <button data-ccs-undo="${_e(w.studentId)}" class="px-2 py-0.5 rounded-md border border-red-800/60 bg-red-950/40 text-red-400 text-[10.5px] font-bold flex-shrink-0">✕ ยกเลิก</button>
      </div>`).join("")};async function v(S){var E;const _=a.find(A=>{var D;return((D=A.students)==null?void 0:D.student_code)===S});if(_)return{studentId:_.student_id,name:((E=_.students)==null?void 0:E.full_name)??"—"};if(!o)return null;const $=(await ur(S).catch(()=>[])).find(A=>A.student_code===S);return $?{studentId:$.id,name:$.full_name}:null}async function k(S){const _=l.querySelector("#ccs-camera-container"),w=l.querySelector("#ccs-feedback"),$=A=>{_.classList.add(A?"ccs-flash-success":"ccs-flash-error"),setTimeout(()=>_.classList.remove(A?"ccs-flash-success":"ccs-flash-error"),500)},E=await v(S);if(!E){Ce("error"),$(!1),w.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">ไม่พบ${o?"นักเรียน":"สมาชิกสภา"}รหัสนี้</div>`;return}if(f.has(E.studentId)){Ce("error"),$(!1),w.innerHTML=`<div class="bg-amber-950/40 border border-amber-800/80 rounded-2xl p-3 text-center text-xs text-amber-400">${_e(E.name)} เช็คอินไปแล้ว</div>`;return}try{await br({activityId:t,studentId:E.studentId}),f.add(E.studentId),Ce("success"),$(!0),w.innerHTML=`<div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 text-center text-xs text-emerald-300">✓ เช็คอิน ${_e(E.name)} สำเร็จ</div>`,p.unshift({name:E.name,studentId:E.studentId}),m(),i==null||i(E.studentId)}catch(A){Ce("error"),$(!1),w.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">บันทึกไม่สำเร็จ: ${_e(A.message??"")}</div>`,g("เช็คอินไม่สำเร็จ: "+(A.message??""),"error")}}async function q(S){let _=S;if(S.startsWith("SQ:")){const[,w,$]=S.split(":"),E=Math.floor(Date.now()/1e3)-parseInt($,10);if(E>60||E<-60){const A=l.querySelector("#ccs-feedback"),D=l.querySelector("#ccs-camera-container");Ce("error"),D.classList.add("ccs-flash-error"),setTimeout(()=>D.classList.remove("ccs-flash-error"),500),A.innerHTML='<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">QR Code หมดอายุแล้ว ให้เปิดหน้าใหม่</div>';return}_=w}await k(_)}l.querySelector("#ccs-manual-form").addEventListener("submit",async S=>{S.preventDefault();const _=l.querySelector("#ccs-manual-code"),w=_.value.trim();w&&(await k(w),_.value="",_.focus())}),l.querySelector("#ccs-history-list").addEventListener("click",async S=>{const _=S.target.closest("[data-ccs-undo]");if(!_)return;const w=Number(_.dataset.ccsUndo);_.disabled=!0;try{await Ya({activityId:t,studentId:w}),f.delete(w);const $=p.findIndex(E=>E.studentId===w);$!==-1&&p.splice($,1),m(),n==null||n(w)}catch($){g("ยกเลิกไม่สำเร็จ: "+($.message??""),"error"),_.disabled=!1}}),l.querySelector("#ccs-close").addEventListener("click",async()=>{if(u)try{await u.stop()}catch{}l.remove()}),(async()=>{try{const S=await Bn();u=new S("ccs-camera-reader"),await u.start({facingMode:"environment"},{fps:25,aspectRatio:1},_=>{_===b&&Date.now()-h<2e3||(b=_,h=Date.now(),q(_))},()=>{})}catch(S){g("ไม่สามารถเปิดกล้องได้: "+(S.message??""),"error"),l.remove()}})()}const c=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),qt=document.getElementById("council-content"),j={M:"ชาย",W:"หญิง"},de=e=>e==="ชาย"||e==="M"?"M":e==="หญิง"||e==="W"?"W":null,B=(e,t="w-10 h-12")=>e!=null&&e.photo_url||e!=null&&e.image_url?`<img src="${c(e.photo_url||e.image_url)}" class="${t} rounded-[10px] object-cover border border-[var(--line)] shadow-[0_1px_3px_rgba(0,0,0,0.25)] bg-[var(--bg-2)] flex-shrink-0">`:`<div class="${t} rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${c(((e==null?void 0:e.full_name)||"?").charAt(0))}</div>`,xr={pending:"รอดำเนินการ",interview_scheduled:"นัดสัมภาษณ์แล้ว",interviewed:"สัมภาษณ์แล้ว",candidate:"ผู้สมัครเลือกตั้ง",appointed:"ได้รับแต่งตั้ง",rejected:"ไม่ผ่าน"};let d=null,G="overview",dt=!1,T=1,I={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},be=null,K=null;const fr=5;function Ne(){var e;return Number((e=d==null?void 0:d.cfg)==null?void 0:e.council_min_certificates)||fr}function Me(e){return Array.from({length:e},()=>({file:null,title:"",previewUrl:null,isPdf:!1}))}let N=Me(fr),ye=!1,O=null;function Ze(){dt=!1,T=1,I={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},be=null,K&&URL.revokeObjectURL(K),K=null,N.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),N=Me(Ne()),ye=!1}function It(){return d!=null&&d.student?`council_apply_draft_${d.student.id}`:null}function U(){const e=It();if(e)try{localStorage.setItem(e,JSON.stringify({step:T,data:I,certTitles:N.map(t=>t.title),savedAt:Date.now()}))}catch{}}function Mn(){const e=It();if(!e)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function Gt(){const e=It();e&&localStorage.removeItem(e)}let Pe=null,ne=null,C=null,Oe=null,Re=null,ue="all",Z="M",et="",he="",je="",De="",ee=null,R=null,yt=null;const ce={};let we=null,pe=!1;const ht={};let M=null,H=null;const se={};let F=null,wt=null;const $e={},Ct={},He={},Lt={};let ct=null,oe=null,le=null,tt=null,rt="all",at=!1,Te="general",te=null,ie=null;const Ut=[{id:"general",label:"ทั่วไป"},{id:"positions",label:"ตำแหน่ง"},{id:"criteria",label:"เกณฑ์และข้อความ"},{id:"modules",label:"โมดูล"}],Pn={candidates:"ว่าที่ประธาน / ผลเลือกตั้ง",news:"ประกาศ",interview:"ตารางสัมภาษณ์",appoint:"แต่งตั้งตรง",chairteam:"เสนอคณะทำงาน",chairtasks:"มอบหมายงาน",evaluate:"ประเมินการปฏิบัติหน้าที่",certissue:"ออกเกียรติบัตร",docs:"เอกสารโครงการ",perms:"มอบสิทธิ์ครู (ยังไม่สร้างหน้า)"};function jt(){try{return{...JSON.parse(d.cfg.council_modules||"{}")}}catch{return{}}}async function gr(){te=await ba().catch(()=>[]),x()}async function On(){ie=await cr().catch(()=>[]),x()}const Rn={apply:{title:"📝 สมัครสภานักเรียน",subtabs:[{id:"new",label:"สมัครตำแหน่งใหม่"},{id:"mine",label:"ใบสมัครของฉัน"}]},election:{title:"🗳️ การเลือกตั้งประธานสภา",subtabs:[{id:"status",label:"สถานะการเลือกตั้ง"}]}};async function Hn(){var X,re;Fr();const{data:{session:e}}=await y.auth.getSession();if(!e){window.location.replace("index.html");return}const{data:t}=await y.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single(),r=t==null?void 0:t.role,a=r==="admin"||(t==null?void 0:t.is_also_admin)===!0,i={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[r]||"index.html";document.getElementById("council-back-btn-desktop").href=i,document.getElementById("council-back-btn-mobile").href=i;const[n,o,l,p]=await Promise.all([ca(),Be(),Ie(),ot()]);yr(n);let u=null,b=[],h=[];r==="student"&&(u=await zr().catch(()=>null));const f=(n.council_test_student_codes||"").split(/[\s,]+/).map(P=>P.trim()).filter(Boolean),m=r==="student"&&!!u&&f.includes(u.student_code);if(n.council_visible_to_all==="false"&&!a&&!m){Dt(!1),qt.innerHTML=`
      <div class="max-w-md mx-auto px-4 py-20 text-center text-[var(--muted-2)]">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-medium text-[var(--ink-2)]">ระบบสภานักเรียนปิดใช้งานชั่วคราว</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบ</p>
      </div>`;return}r==="student"&&u&&([b,h]=await Promise.all([lr(u.id).catch(()=>[]),_a(u.id).catch(()=>[])]));let v=null,k=[],q=[],L=[];r==="teacher"&&(v=await Gr(e.user.id).catch(()=>null),v&&(k=(await Ur(v.id).catch(()=>[])).filter(W=>W.category==="สามัญ").map(W=>W.main_room),[q,L]=await Promise.all([dr(k).catch(()=>[]),cr().catch(()=>[])])));const S=r==="student"&&h.some(P=>{var W;return(W=P.council_positions)==null?void 0:W.is_elected}),_=S||h.some(P=>P.can_create_activities),w=((re=(X=h.find(P=>{var W;return(W=P.council_positions)==null?void 0:W.is_elected}))==null?void 0:X.council_positions)==null?void 0:re.gender)??null,$=r==="teacher"&&!!v&&(v.position==="council_advisor"||(v.positions??[]).includes("council_advisor")),E=r==="teacher"&&!!v&&(v.position==="student_affairs_head"||(v.positions??[]).includes("student_affairs_head")),A=r==="teacher"&&!!v&&(v.position==="school_director"||(v.positions??[]).includes("school_director")),D=r==="teacher"&&!!v&&(v.position==="executive"||(v.positions??[]).includes("executive"));d={role:r,isAdmin:a,isChair:S,isCouncilAdvisor:$,isStudentAffairsHead:E,isSchoolDirector:A,isExecutive:D,canCreateActivities:_,chairGender:w,student:u,applications:b,membership:h,positions:o,members:l,elections:p,cfg:n,teacher:v,homeroomMainRooms:k,pendingEndorsements:q,endorsementPhrases:L},M=Number(n.academicYear)||new Date().getFullYear()+543,r==="teacher"&&q.length&&(G="endorse"),x()}async function _r(){d!=null&&d.student&&(d.applications=await lr(d.student.id).catch(()=>d.applications))}async function Wn(){d!=null&&d.teacher&&(d.pendingEndorsements=await dr(d.homeroomMainRooms).catch(()=>d.pendingEndorsements))}function Dt(e){document.getElementById("council-sidebar").style.display=e?"":"none",document.getElementById("council-bottom-tabs").style.display=e?"":"none"}function yr(e){const t=e.council_name||"ระบบสภานักเรียน";if(document.title=t,document.getElementById("council-title").textContent=t,document.getElementById("council-title-mobile").textContent=t,e.council_logo_url){const r=document.getElementById("council-logo");r.src=e.council_logo_url,r.classList.remove("hidden"),document.getElementById("council-logo-fallback").classList.add("hidden")}}const ft={main:{label:"หน้าหลัก",icon:"🏠"},council:{label:"งานสภา",icon:"👥"},election:{label:"เลือกตั้ง",icon:"🗳️"},teacherWork:{label:"งานครู",icon:"📋"},system:{label:"ระบบ",icon:"⚙️"}};function Fn(){const e=[{id:"overview",icon:"🏠",label:"หน้าหลัก",group:"main"}];e.push({id:"news",icon:"📣",label:"ประกาศ",group:"council"}),e.push({id:"roster",icon:"🏛️",label:"สภาของเรา",group:"council"}),e.push({id:"activities",icon:"📅",label:"กิจกรรม",group:"council"}),(d.isChair||d.isAdmin||d.isCouncilAdvisor)&&e.push({id:"chairteam",icon:"👔",label:"เสนอคณะทำงาน",group:"council"}),d.isChair&&e.push({id:"assignments",icon:"📌",label:"มอบหมายงาน",group:"council"}),d.membership.length&&e.push({id:"myduty",icon:"🎫",label:"หน้าที่/งานของฉัน",group:"council"}),d.membership.length&&e.push({id:"mysummary",icon:"📊",label:"สรุปของฉัน",group:"council"}),d.membership.length&&d.cfg.council_require_peer_endorsement==="true"&&e.push({id:"peerEndorse",icon:"✋",label:"รับรองผู้สมัคร (สภา)",group:"council"}),e.push({id:"candidates",icon:"🗳️",label:"ว่าที่ประธาน",group:"election"}),e.push({id:"result",icon:"📊",label:"ผลเลือกตั้ง",group:"election"}),d.role==="teacher"&&d.pendingEndorsements.length&&e.push({id:"endorse",icon:"✋",label:"รับรองผู้สมัคร",badge:d.pendingEndorsements.length,group:"teacherWork"});const t=d.isAdmin||d.isCouncilAdvisor;t&&e.push({id:"apps",icon:"📋",label:"ใบสมัคร",group:"teacherWork"}),(t||d.membership.length)&&e.push({id:"eval",icon:"🎖️",label:"ประเมิน/เกียรติบัตร",group:"teacherWork"}),(t||d.isChair||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"docs",icon:"📄",label:"เอกสารโครงการ",group:"teacherWork"}),(d.isAdmin||d.isExecutive)&&e.push({id:"dashboard",icon:"📊",label:"ภาพรวม",group:"system"}),t&&e.push({id:"settings",icon:"⚙️",label:"ตั้งค่า",group:"system"}),d.isAdmin&&e.push({id:"perms",icon:"🔑",label:"มอบสิทธิ์",group:"system"}),(d.isCouncilAdvisor||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"myCouncilProfile",icon:"✍️",label:"โปรไฟล์ของฉัน",group:"system"});const r=jt(),a=new Set;return r.candidates===!1&&(a.add("candidates"),a.add("result")),r.news===!1&&a.add("news"),r.evaluate===!1&&a.add("eval"),r.docs===!1&&a.add("docs"),r.chairteam===!1&&a.add("chairteam"),r.chairtasks===!1&&a.add("assignments"),e.filter(s=>!a.has(s.id))}let ve=null;function zn(e){var i;const t=Object.keys(ft);document.getElementById("council-sidebar-nav").innerHTML=t.map(n=>{const o=e.filter(l=>l.group===n);return o.length?`
      <div class="pb-2">
        <p class="text-[0.6875rem] font-bold text-[var(--primary-45)] tracking-wide px-3 pt-3 pb-1.5">${c(ft[n].label)}</p>
        ${o.map(l=>`
          <button type="button" class="council-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
            ${l.id===G?"bg-[var(--hero-3)] text-white":"text-[var(--primary-45)] hover:bg-[var(--hero-3)] hover:text-white"}" data-view="${l.id}">
            <span>${l.icon}</span> ${c(l.label)}
            ${l.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${l.badge}</span>`:""}
          </button>`).join("")}
      </div>`:""}).join("");const r=t.map(n=>({id:n,...ft[n],items:e.filter(o=>o.group===n)})).filter(n=>n.items.length),a=(i=r.find(n=>n.items.some(o=>o.id===G))||r[0])==null?void 0:i.id;document.getElementById("council-bottom-tabs").innerHTML=`<div class="flex">${r.map(n=>{const o=n.id===a,l=n.items.reduce((p,u)=>p+(u.badge||0),0);return`
    <button type="button" class="council-nav-group-btn relative flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 min-h-[44px] ${o?"text-[var(--primary)]":"text-[var(--muted)]"}" data-group="${n.id}">
      <span class="text-xl">${n.icon}</span>
      <span class="text-[0.625rem] font-medium">${c(n.label)}</span>
      ${l?`<span class="absolute top-1 right-1/4 bg-[var(--gold)] text-white text-[0.5625rem] rounded-full w-4 h-4 flex items-center justify-center font-bold">${l}</span>`:""}
    </button>`}).join("")}</div>`,document.querySelectorAll(".council-nav-link").forEach(n=>{n.addEventListener("click",()=>{G=n.dataset.view,x()})}),document.querySelectorAll(".council-nav-group-btn").forEach(n=>{n.addEventListener("click",()=>{const o=r.find(l=>l.id===n.dataset.group);o.items.length===1?(G=o.items[0].id,ve=null,x()):(ve=ve===o.id?null:o.id,Vt(e))})});const s=e.find(n=>n.id===G);document.getElementById("council-view-title").textContent=(s==null?void 0:s.label)??"หน้าหลัก",Vt(e)}function Vt(e){const t=document.getElementById("council-mobile-sheet");if(!t)return;if(!ve){t.innerHTML="";return}const r=e.filter(a=>a.group===ve);t.innerHTML=`
    <div class="fixed inset-0 z-[70] bg-black/20" id="mobile-sheet-backdrop">
      <div class="absolute left-1/2 -translate-x-1/2" style="bottom: calc(78px + env(safe-area-inset-bottom));">
        <div class="flex flex-col-reverse gap-2 items-stretch" style="width: min(74vw, 260px);">
          ${r.map((a,s)=>`
            <button type="button" class="mobile-sheet-item text-left border ${a.id===G?"border-[var(--primary-soft-line)] bg-[var(--glass-on)] text-[var(--primary)]":"border-[var(--glass-line)] bg-[var(--glass)] text-[var(--ink)]"}
              backdrop-blur-md px-4 py-3 rounded-full text-sm font-bold flex items-center gap-3 min-h-[44px] shadow-[0_8px_22px_rgba(11,20,16,0.18)]" data-view="${a.id}">
              <span class="text-base">${a.icon}</span><span>${c(a.label)}</span>
              ${a.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${a.badge}</span>`:""}
            </button>`).join("")}
        </div>
      </div>
    </div>`,document.getElementById("mobile-sheet-backdrop").addEventListener("click",a=>{a.target.id==="mobile-sheet-backdrop"&&(ve=null,x())}),document.querySelectorAll(".mobile-sheet-item").forEach(a=>{a.addEventListener("click",()=>{G=a.dataset.view,ve=null,x()})})}function Gn(){const{applications:e,membership:t}=d;return!e.length&&!t.length?"":`
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-2xl p-5 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      <p class="text-sm font-bold mb-3">📋 สถานะของฉันในสภานักเรียน</p>
      <div class="space-y-2">
        ${t.map(r=>{var a,s;return`
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-xs text-[var(--primary-soft-line)]">ตำแหน่งปัจจุบัน</p>
            <p class="font-bold">${c(((a=r.council_positions)==null?void 0:a.position_name)??"—")} <span class="text-xs font-normal text-[var(--primary-soft-line)]">(สภา${c(j[(s=r.council_positions)==null?void 0:s.gender]??"")})</span></p>
          </div>`}).join("")}
        ${e.map(r=>{var a;return`
          <div class="bg-white/10 rounded-xl p-3 flex items-center justify-between gap-2">
            <div>
              <p class="text-xs text-[var(--primary-soft-line)]">ใบสมัคร — ${c(((a=r.council_positions)==null?void 0:a.position_name)??"—")}</p>
              <p class="text-[0.6875rem] text-[var(--primary-45)]">${new Date(r.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20">${c(xr[r.status]??r.status)}</span>
          </div>`}).join("")}
      </div>
    </div>`}function Ue(e,t,r,a){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-3">
        <p class="text-sm font-bold text-[var(--ink)]">${e}</p>
        ${r?`<button type="button" class="goto-view text-xs font-bold text-[var(--primary)] hover:underline" data-view="${r}">${c(a)} →</button>`:""}
      </div>
      ${t}
    </div>`}function Un(){return d.isChair?["ยินดีต้อนรับประธานสภานักเรียน","ดูภาพรวมงานสภา เสนอทีมงาน มอบหมายงาน และประกาศข่าวสารได้จากที่นี่"]:d.membership.length?["ยินดีต้อนรับสมาชิกสภานักเรียน","ติดตามหน้าที่ ตารางงาน และผลการประเมินของคุณ"]:d.isCouncilAdvisor?["ครูที่ปรึกษาสภานักเรียน","ดูแลใบสมัคร ตารางสัมภาษณ์ การประเมิน และเอกสารต่างๆ ของสภา"]:d.isAdmin?["จัดการระบบสภานักเรียน","ภาพรวมทั้งระบบ ตั้งค่าตำแหน่ง เกณฑ์คุณสมบัติ และมอบสิทธิ์ผู้ดูแล"]:d.role==="teacher"&&d.pendingEndorsements.length?["รับรองผู้สมัครสภานักเรียน","ตรวจสอบและรับรองใบสมัครของนักเรียนในความดูแลของคุณ"]:["ระบบสภานักเรียน","ติดตามข่าวสาร กิจกรรม ผู้สมัคร และผลการเลือกตั้งของสภานักเรียน"]}function Vn(){const e=d.cfg.council_featured_phase;if(e)return e;const t=new Date,r=d.cfg.council_apply_opens_at?new Date(d.cfg.council_apply_opens_at):null,a=d.cfg.council_apply_closes_at?new Date(d.cfg.council_apply_closes_at):null;return r&&a&&t>=r&&t<=a?"apply":d.elections.some(i=>i.opens_at&&i.closes_at&&t>=new Date(i.opens_at)&&t<=new Date(i.closes_at))?"election":"none"}function Yn(){return d.isChair?"👑 ประธานสภานักเรียน":d.membership.length?"🎫 สมาชิกสภานักเรียน":d.isCouncilAdvisor?"🏫 ครูที่ปรึกษาสภานักเรียน":d.role==="admin"?"🛡️ ผู้ดูแลระบบ (แอดมิน)":d.isAdmin?"🛡️ ผู้ดูแลระบบ (ได้รับสิทธิ์แอดมินเพิ่มเติมจากระบบหลัก ปพ.5 ออนไลน์)":d.role==="teacher"?"👨‍🏫 ครู (ยังไม่ได้รับมอบหมายเป็นครูที่ปรึกษาสภานักเรียน)":d.role==="student"?"🎓 นักเรียน":"ผู้เยี่ยมชม"}function Qn(){const e=d.cfg,t=e.council_term_start_semester&&e.council_term_start_year?`ภาคเรียนที่ ${c(e.council_term_start_semester)}/${c(e.council_term_start_year)} – ภาคเรียนที่ ${c(e.council_term_end_semester||e.council_term_start_semester)}/${c(e.council_term_end_year||e.council_term_start_year)}`:null,r=e.council_visible_to_all!=="false",[a,s]=Un(),i=d.isAdmin||d.isCouncilAdvisor?`
    <div class="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl mb-3
      ${r?"bg-[var(--ok-soft)] text-[#106143] border border-[var(--ok-soft-line)]":"bg-[var(--gold-soft)] text-[var(--gold-ink)] border border-[var(--gold-soft-line)]"}">
      <span>${r?"✅":"🔒"}</span>
      <span>${r?"ระบบเปิดให้นักเรียนทุกคนเห็นเมนูแล้ว":"ระบบยังไม่เปิดให้ทุกคนเห็น — เห็นเฉพาะแอดมิน/ผู้ทดสอบเท่านั้น"}</span>
    </div>`:"";return`
    <p class="text-[0.6875rem] text-[var(--muted-2)] mb-2">กำลังใช้งานในฐานะ: <span class="font-bold text-[var(--ink-2)]">${c(Yn())}</span></p>
    ${i}
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl p-5 sm:p-6 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      ${t?`<span class="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-3">🗓️ ห้วงปฏิบัติหน้าที่ · ${t}</span>`:""}
      <p class="text-lg sm:text-xl font-extrabold leading-snug [text-wrap:pretty]">${c(a)}</p>
      <p class="text-sm text-[var(--primary-soft-line)] mt-1.5 [text-wrap:pretty]">${c(s)}</p>
      ${d.isAdmin||d.isCouncilAdvisor||d.isChair?`
      <div class="flex flex-wrap gap-2 mt-4">
        ${d.isAdmin||d.isCouncilAdvisor?'<button type="button" class="goto-view px-4 py-2 rounded-[10px] bg-[var(--hero-btn)] text-[var(--hero-btn-fg)] text-sm font-bold hover:opacity-90" data-view="settings">⚙️ ตั้งค่าระบบ</button>':""}
        <a href="council-election.html" target="_blank" class="px-4 py-2 rounded-[10px] bg-white/10 border border-white/25 text-white text-sm font-bold hover:bg-white/20">🗳️ หน้าลงคะแนน</a>
      </div>`:""}
    </div>`}function Jn(){if(H===null)return Lr(),Ue("📅 กิจกรรมประจำปี",'<p class="text-sm text-[var(--muted-2)] text-center py-8">⏳ กำลังโหลด...</p>');const e={};H.forEach(s=>{e[s.status]=(e[s.status]??0)+1});const t=`
    <div class="grid grid-cols-4 gap-2 mb-3">
      ${Cr.map(([s,i,n,o])=>`
        <div class="rounded-[10px] border ${n} p-2 text-center">
          <p class="text-lg font-bold ${o}">${e[s]??0}</p>
          <p class="text-[0.625rem] text-[var(--muted)]">${i}</p>
        </div>`).join("")}
    </div>`,r=[...H].sort((s,i)=>new Date(s.activity_date||0)-new Date(i.activity_date||0)).slice(0,5),a=r.length?`
    <div class="space-y-0.5">
      ${r.map(s=>{const[i,n,o]=Ir[s.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]"];return`
        <div class="flex items-center justify-between gap-2 py-1.5 border-b border-[var(--line-soft)] last:border-0">
          <div class="min-w-0">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${c(s.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${s.activity_date?new Date(s.activity_date).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"}):"—"} ${s.owner_text?"· "+c(s.owner_text):""}</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-1 rounded-full ${o} ${n}">${i}</span>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีกิจกรรม</p>';return Ue("📅 กิจกรรมประจำปี",t+a,"activities","ดูทั้งหมด")}function Kn(){const e=["M","W"].map(r=>d.members.find(a=>{var s,i;return a.status==="active"&&((s=a.council_positions)==null?void 0:s.gender)===r&&((i=a.council_positions)==null?void 0:i.is_elected)})),t=e.some(Boolean)?`
    <div class="space-y-3">
      ${e.map((r,a)=>{var n,o,l;const s=a===0?"M":"W";if(!r)return`<div class="rounded-xl border border-dashed border-[var(--line)] p-3 text-center text-xs text-[var(--muted-2)]">ยังไม่มีประธานสภา${j[s]}</div>`;const i=s==="W";return`
        <div class="flex items-center gap-3 rounded-xl border p-3 ${i?"bg-[var(--pink-soft)] border-[var(--pink-soft-line)]":"bg-[var(--primary-soft)] border-[var(--primary-soft-line)]"}">
          ${B(r.students,"w-12 h-16")}
          <div class="min-w-0">
            <p class="text-[0.6875rem] font-bold ${i?"text-[var(--pink)]":"text-[var(--primary)]"}">${c(((n=r.council_positions)==null?void 0:n.position_name)??"ประธานสภานักเรียนฝ่าย"+j[s])}</p>
            <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((o=r.students)==null?void 0:o.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${c(((l=r.students)==null?void 0:l.main_room)??"")}</p>
          </div>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีสภานักเรียนชุดปัจจุบัน</p>';return Ue("🏛️ สภานักเรียนชุดปัจจุบัน",t,"roster","ดูโครงสร้าง")}function Xn(){if(!d.isAdmin&&!d.isExecutive)return"";if(C===null)return Nt(),Ue("📋 การสมัครสภานักเรียน",'<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p>');const e=C.length,t=C.filter(n=>n.endorsed_at).length,r=C.filter(n=>n.peer_endorsed_at||Ae(n)).length,a=C.filter(n=>n.status==="candidate").length,s=(n,o,l)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${l}">${c(n)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${c(o)}</p>
    </div>`,i=`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      ${s(e,"สมัครแล้วทั้งหมด","var(--ink)")}
      ${s(t,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
      ${ge()?s(r,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):s("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
      ${s(a,"ว่าที่สภานักเรียน","var(--primary)")}
    </div>`;return Ue("📋 การสมัครสภานักเรียน",i,"dashboard","ดูรายละเอียด")}function hr(){const e=Qn(),t=Gn(),r=(b,h,f,m)=>`
    <button type="button" class="flow-entry-btn bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-center hover:border-[var(--primary-70)] hover:shadow-[0_4px_12px_rgba(23,32,42,0.07)] transition" data-flow="${b}">
      <p class="text-2xl mb-1">${h}</p>
      <p class="text-sm font-bold text-[var(--primary-dark)]">${c(f)}</p>
      ${m?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${c(m)}</p>`:""}
    </button>`,a=(b,h,f,m)=>`
    <button type="button" class="flow-entry-btn w-full bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl shadow-[0_4px_14px_rgba(23,32,42,0.15)] p-4 text-left text-white hover:opacity-95 transition flex items-center gap-3" data-flow="${b}">
      <p class="text-3xl flex-shrink-0">${h}</p>
      <div class="min-w-0 flex-1">
        <span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-white/20 mb-1">🔥 ช่วงนี้</span>
        <p class="text-base font-extrabold [text-wrap:pretty]">${c(f)}</p>
        ${m?`<p class="text-xs text-white/85 mt-0.5 [text-wrap:pretty]">${c(m)}</p>`:""}
      </div>
      <span class="text-white/70 flex-shrink-0">→</span>
    </button>`,s=d.elections.length>0,i=s||d.isAdmin,n=d.role==="student",o=s?"การเลือกตั้ง":"ตั้งค่าการเลือกตั้ง",l=s?"":"ยังไม่เปิดใช้งาน — แตะเพื่อตั้งค่า",p=n&&i?Vn():"none";let u="";if(n&&i&&p!=="none"){const b=p==="apply"?a("apply","📝","สมัครสภานักเรียน","เปิดรับสมัครสภานักเรียนวาระใหม่"):r("apply","📝","สมัครสภานักเรียน"),h=p==="election"?a("election","🗳️",o,l||"เปิดใช้งานอยู่ ณ ขณะนี้"):r("election","🗳️",o,l);u=`<div class="space-y-3">${p==="apply"?b+h:h+b}</div>`}else(n||i)&&(u=`
    <div class="grid ${n&&i?"grid-cols-2":"grid-cols-1"} gap-3">
      ${n?r("apply","📝","สมัครสภานักเรียน"):""}
      ${i?r("election","🗳️",o,l):""}
    </div>`);return`<div class="space-y-4">
    ${e}
    ${t}
    ${Xn()}
    ${u}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      ${Jn()}
      ${Kn()}
    </div>
  </div>`}function Zn(){if(d.role!=="student")return"";if(!d.student)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ยังไม่ได้เชื่อมบัญชีกับข้อมูลนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;const e=de(d.student.gender),t=d.positions.filter(i=>i.gender===e),r=new Set(d.applications.filter(i=>i.status!=="rejected").map(i=>i.position_id)),a=t.filter(i=>!r.has(i.id));if(!e)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;if(!dt)return`
      <button id="btn-open-apply" type="button"
        class="w-full bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-left hover:border-[var(--primary-70)] transition flex items-center justify-between gap-3 ${a.length?"":"opacity-50 pointer-events-none"}">
        <div>
          <p class="text-sm font-bold text-[var(--primary-dark)]">📝 สมัครสภานักเรียน${j[e]}</p>
          <p class="text-xs text-[var(--muted-2)] mt-0.5">${a.length?`เปิดรับ ${a.length} ตำแหน่ง`:"ไม่มีตำแหน่งเปิดรับ (สมัครครบแล้ว หรือยังไม่เปิดรับ)"}</p>
        </div>
        <span class="text-[var(--primary-70)]">→</span>
      </button>`;const s=O?es():T===1?rs(a):T===2?as():T===3?ns():T===4?ss():T===5?is():os(e);return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4">
      <div class="flex items-center justify-between mb-1">
        <p class="text-sm font-bold text-[var(--primary-dark)]">📝 ใบสมัครสภานักเรียน${j[e]}</p>
        <button type="button" id="btn-cancel-apply" class="text-xs text-[var(--muted)] hover:text-[var(--bad)]">ยกเลิก ✕</button>
      </div>
      ${O?"":ts()}
      ${s}
    </div>
    ${ye?ls():""}`}function es(){const e=$t()[O.step-1]??"",t=O.savedAt?new Date(O.savedAt).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"";return`
    <div class="text-center py-4 space-y-3">
      <p class="text-3xl">📝</p>
      <p class="text-sm font-bold text-[var(--ink)]">พบข้อมูลที่กรอกค้างไว้</p>
      <p class="text-xs text-[var(--muted-2)]">กรอกถึงขั้นตอนที่ ${O.step}/${$t().length} · ${c(e)}${t?` · บันทึกล่าสุด ${t}`:""}</p>
      <p class="text-[0.6875rem] text-[var(--gold-ink)] bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-2.5 text-left">⚠️ รูปถ่าย/ไฟล์เกียรติบัตรที่เคยแนบไว้ต้องแนบใหม่อีกครั้ง (เบราว์เซอร์เก็บไฟล์ข้ามการปิดหน้าไม่ได้) ส่วนข้อความอื่นๆ กู้คืนให้ครบ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-draft-discard" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">เริ่มใหม่</button>
        <button type="button" id="btn-apply-draft-resume" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">กู้คืนข้อมูล</button>
      </div>
    </div>`}const Yt=["เลือกตำแหน่ง","เกรดเฉลี่ย & แรงจูงใจ","รูปถ่าย","วิดีโอแนะนำตัว","เกียรติบัตร/รางวัล"];function Tt(){return d.cfg.council_require_peer_endorsement==="true"}function $t(){return Tt()?[...Yt,"เลือกพี่สภารับรอง"]:Yt}function ts(){const e=$t();return`
    <div class="flex items-center gap-1.5 mb-3">
      ${e.map((t,r)=>`<div class="flex-1 h-1.5 rounded-full ${r+1<=T?"bg-[var(--primary)]":"bg-[var(--line-soft)]"}"></div>`).join("")}
    </div>
    <p class="text-xs font-bold text-[var(--muted)] mb-3">ขั้นตอนที่ ${T}/${e.length} · ${e[T-1]}</p>`}function rs(e){return`
    <form id="apply-step1-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ตำแหน่งที่สมัคร <span class="text-[var(--bad)]">*</span></label>
        <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— เลือกตำแหน่ง —</option>
          ${e.map(t=>`<option value="${t.id}" ${I.positionId===String(t.id)?"selected":""}>${c(t.position_name)}</option>`).join("")}
        </select>
        ${e.length?"":'<p class="text-xs text-[var(--gold-ink)] mt-1.5">ไม่มีตำแหน่งเปิดรับในขณะนี้</p>'}
      </div>
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${e.length?"":"disabled"}>ถัดไป →</button>
    </form>`}function as(){const e=d.cfg.council_min_gpa||"2.50",t=d.cfg.council_min_gpa_religious||"2.50";return`
    <form id="apply-step2-form" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยสามัญ <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaGeneral" type="number" step="0.01" min="0" max="4" required value="${c(I.gpaGeneral)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${c(e)}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยศาสนา <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaReligious" type="number" step="0.01" min="0" max="4" required value="${c(I.gpaReligious)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${c(t)}</p>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">แรงจูงใจ / นโยบาย <span class="text-[var(--bad)]">*</span></label>
        <textarea name="motivation" required rows="4" placeholder="เล่าเหตุผลที่อยากสมัคร หรือแนวทางที่จะทำถ้าได้รับเลือก (อย่างน้อย 10 ตัวอักษร)"
          class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(I.motivation)}</textarea>
      </div>
      <div class="flex gap-2">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`}function ns(){return`
    <div class="space-y-3">
      <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">รูปถ่าย <span class="text-[var(--bad)]">*</span></label>
      ${K?`<img src="${K}" class="w-24 h-32 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)]" />`:""}
      <input id="apply-photo" type="file" accept="image/*" class="w-full text-xs" />
      <p class="text-[0.6875rem] text-[var(--muted-2)]">ใช้รูปหน้าตรง ชัดเจน — ระบบจะย่อขนาดให้อัตโนมัติ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step3-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </div>`}function ss(){const e=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),t=d.cfg.council_video_max_minutes||"3";return`
    <form id="apply-step4-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ลิงก์วิดีโอแนะนำตัว <span class="text-[var(--bad)]">*</span></label>
        <input name="videoUrl" type="url" required placeholder="https://..." value="${c(I.videoUrl)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
    </form>`}function is(){const e=N.filter(a=>a.file&&a.title.trim()).length,t=Ne(),r=(a,s)=>`
    <div class="rounded-xl border border-[var(--line)] p-3 space-y-2" data-cert-idx="${s}">
      <div class="flex items-center justify-between">
        <p class="text-xs font-bold text-[var(--muted)]">รายการที่ ${s+1}</p>
        ${N.length>1?`<button type="button" class="btn-remove-cert text-xs text-[var(--bad)]" data-idx="${s}">🗑️ ลบ</button>`:""}
      </div>
      <input type="text" class="cert-title-input w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"
        placeholder="ชื่อรางวัล/กิจกรรม เช่น รางวัลชนะเลิศการแข่งขันโต้วาทีระดับจังหวัด" data-idx="${s}" value="${c(a.title)}" />
      <div class="flex items-center gap-2">
        ${a.file?a.isPdf?'<span class="w-10 h-10 rounded-lg bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-lg flex-shrink-0">📄</span>':`<img src="${a.previewUrl}" class="w-10 h-10 rounded-lg object-cover border border-[var(--line)] flex-shrink-0" />`:""}
        <input type="file" accept="image/*,.pdf,application/pdf" class="cert-file-input text-xs flex-1 min-w-0" data-idx="${s}" />
      </div>
    </div>`;return`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เกียรติบัตร/รางวัลจากการแข่งขันหรือกิจกรรมนอกโรงเรียน <span class="text-[var(--bad)]">*</span></label>
        <p class="text-[0.6875rem] ${e>=t?"text-[var(--ok)]":"text-[var(--muted-2)]"}">แนบได้ทั้งรูปภาพและไฟล์ PDF — ต้องมีอย่างน้อย ${t} รายการ (ตอนนี้ครบ ${e}/${t})</p>
      </div>
      <div class="space-y-2.5">${N.map(r).join("")}</div>
      <button type="button" id="btn-add-cert" class="w-full py-2 rounded-xl border border-dashed border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]">＋ เพิ่มรายการ</button>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step5-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">${Tt()?"ถัดไป →":"ตรวจสอบและยืนยัน →"}</button>
      </div>
    </div>`}function os(e){const t=(d.members||[]).filter(a=>{var s;return((s=a.council_positions)==null?void 0:s.gender)===e&&a.student_id!==d.student.id}).sort((a,s)=>{var i,n;return(((i=a.council_positions)==null?void 0:i.sort_order)??0)-(((n=s.council_positions)==null?void 0:n.sort_order)??0)});if(!t.length)return`
      <div class="space-y-3">
        <div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-3 text-xs text-[var(--gold-ink)]">
          ⚠️ ตอนนี้ยังไม่มีสมาชิกสภานักเรียน${j[e]}ในระบบให้เลือกเป็นผู้รับรอง กรุณาติดต่อครูที่ปรึกษาสภาหรือผู้ดูแลระบบ
        </div>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        </div>
      </div>`;const r=a=>{var s,i,n;return`
    <button type="button" class="btn-pick-peer-endorser w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(I.peerEndorserId)===String(a.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${a.id}">
      ${B(a.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((s=a.students)==null?void 0:s.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${c(((i=a.council_positions)==null?void 0:i.position_name)??"—")} · ${c(((n=a.students)==null?void 0:n.main_room)??"—")}</p>
      </div>
      ${String(I.peerEndorserId)===String(a.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`};return`
    <div class="space-y-3">
      <p class="text-xs text-[var(--muted-2)]">เลือกสมาชิกสภานักเรียน${j[e]}ที่ต้องการให้เป็นผู้รับรองใบสมัครของคุณ — ใบสมัครจะรอเฉพาะคนที่เลือกเท่านั้น</p>
      <div class="space-y-2 max-h-96 overflow-y-auto">${t.map(r).join("")}</div>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step6-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${I.peerEndorserId?"":"disabled"}>ตรวจสอบและยืนยัน →</button>
      </div>
    </div>`}function ls(){var a;const e=d.positions.find(s=>s.id===Number(I.positionId)),t=d.student,r=I.peerEndorserId?(d.members||[]).find(s=>String(s.id)===String(I.peerEndorserId)):null;return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="apply-confirm-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
        <p class="text-base font-bold text-[var(--ink)] mb-3">📋 ตรวจสอบก่อนส่งใบสมัคร</p>
        <div class="space-y-2.5 text-sm">
          <div class="flex items-center gap-3 pb-2.5 border-b border-[var(--line-soft)]">
            ${K?`<img src="${K}" class="w-12 h-16 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)] flex-shrink-0" />`:""}
            <div class="min-w-0">
              <p class="font-bold text-[var(--ink)] truncate">${c((t==null?void 0:t.full_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${c((t==null?void 0:t.student_code)??"")} · ${c((t==null?void 0:t.main_room)??"")}</p>
            </div>
          </div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">ตำแหน่ง</span><span class="font-bold text-[var(--ink)] text-right">${c((e==null?void 0:e.position_name)??"—")}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดสามัญ</span><span class="font-bold text-[var(--ink)]">${c(I.gpaGeneral)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดศาสนา</span><span class="font-bold text-[var(--ink)]">${c(I.gpaReligious)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">รูปถ่าย</span><span class="font-bold ${be?"text-[var(--ok)]":"text-[var(--bad)]"}">${be?"✅ แนบแล้ว":"❌ ยังไม่ได้แนบ"}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">วิดีโอ</span><span class="font-bold text-[var(--ink)] truncate">${c(I.videoUrl)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกียรติบัตร/รางวัล</span><span class="font-bold text-[var(--ok)]">✅ ${N.filter(s=>s.file&&s.title.trim()).length} รายการ</span></div>
          ${r?`<div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">พี่สภาที่ขอให้รับรอง</span><span class="font-bold text-[var(--ink)] text-right">${c(((a=r.students)==null?void 0:a.full_name)??"—")}</span></div>`:""}
          <div>
            <p class="text-[var(--muted)] mb-1">แรงจูงใจ</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${c(I.motivation)}</p>
          </div>
        </div>
        <div class="flex gap-2 pt-4 mt-3 border-t border-[var(--line-soft)]">
          <button type="button" id="btn-apply-edit" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">✏️ แก้ไข</button>
          <button type="button" id="btn-apply-confirm-submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✅ ยืนยันการสมัคร</button>
        </div>
      </div>
    </div>`}function ds(){return d.student?!d.applications.length&&!d.membership.length?'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่เคยสมัครสภานักเรียน</p>':`
    <div class="space-y-2">
      ${d.membership.map(e=>{var t,r;return`
        <div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-xl p-3">
          <p class="text-xs text-[var(--ok)] font-bold">ตำแหน่งปัจจุบัน</p>
          <p class="text-sm font-bold text-[#0d4d36]">${c(((t=e.council_positions)==null?void 0:t.position_name)??"—")} <span class="text-xs font-normal">(สภา${c(j[(r=e.council_positions)==null?void 0:r.gender]??"")})</span></p>
        </div>`}).join("")}
      ${d.applications.map(e=>{var t;return`
        <div class="bg-[var(--surface)] rounded-xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <div class="min-w-0">
              <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((t=e.council_positions)==null?void 0:t.position_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--bg-2)] text-[var(--ink-2)]">${c(xr[e.status]??e.status)}</span>
          </div>
          <button type="button" class="btn-view-my-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">📄 ดูใบสมัคร</button>
        </div>`}).join("")}
    </div>
    ${gs()}`:""}function Bt(e){return d.elections.find(t=>t.gender===e&&t.academic_year===M)||null}async function wr(e,t){ce[e]=await St(t).catch(()=>[]),x()}async function cs(e,t){const[r,a]=await Promise.all([mr(t).catch(()=>({})),_t(e).catch(()=>0)]);ht[e]={tally:r,eligible:a},x()}function $r(){return`<div class="space-y-4">${["M","W"].map(us).join("")}</div>`}function us(e){var f;const t=Bt(e),r=d.student?de(d.student.gender):null,a=d.role==="student"&&r===e;if(!t)return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🗳️ สภา${j[e]}</p>
        <p class="text-xs text-[var(--muted-2)]">ยังไม่เปิดการเลือกตั้ง</p>
        ${d.isAdmin||d.isCouncilAdvisor?`<button type="button" class="btn-create-election mt-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-gender="${e}">เปิดใช้งานการเลือกตั้ง</button>`:""}
      </div>`;const s=new Date,i=t.opens_at?new Date(t.opens_at):null,n=t.closes_at?new Date(t.closes_at):null,o=!!(i&&i<=s&&(!n||n>s)),l=!!(n&&n<=s),p=!!t.results_published_at,u=p?{label:"✅ ประกาศผลแล้ว",cls:"bg-[var(--ok-soft-line)] text-[#106143]"}:l?{label:"🔒 ปิดโหวตแล้ว รอประกาศผล",cls:"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}:o?{label:"🗳️ กำลังเปิดโหวต",cls:"bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"}:{label:"⏳ ยังไม่เปิดโหวต",cls:"bg-[var(--bg-2)] text-[var(--muted)]"};let b="";if(p){ce[e]===void 0&&wr(e,t.id),ht[e]||cs(e,t.id);const m=d.members.find(S=>{var _,w;return((_=S.council_positions)==null?void 0:_.gender)===e&&((w=S.council_positions)==null?void 0:w.is_elected)}),v=m?`
      <div class="flex items-center gap-3 bg-[var(--ok-soft)] rounded-xl p-3 mt-2">
        ${B(m.students,"w-12 h-16")}
        <div class="min-w-0">
          <p class="text-[0.6875rem] text-[var(--ok)] font-bold">ผู้ได้รับเลือกตั้ง</p>
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((f=m.students)==null?void 0:f.full_name)??"—")}</p>
        </div>
      </div>`:'<p class="text-xs text-[var(--muted-2)] mt-2">ประกาศผลแล้ว</p>',k=ht[e],q=ce[e];let L="";if(k&&(q!=null&&q.length)){const S=Object.values(k.tally).reduce(($,E)=>$+E,0),_=k.eligible?Math.round(S/k.eligible*100):0;L=`
        <div class="mt-3 space-y-2">
          ${q.slice().sort(($,E)=>(k.tally[E.id]??0)-(k.tally[$.id]??0)).map($=>{var D;const E=k.tally[$.id]??0,A=S?Math.round(E/S*100):0;return`
              <div class="text-xs">
                <div class="flex justify-between mb-0.5"><span class="text-[var(--ink-2)] truncate">${c(((D=$.students)==null?void 0:D.full_name)??"—")}</span><span class="font-bold text-[var(--ink)] flex-shrink-0">${E} คะแนน</span></div>
                <div class="h-2 rounded-full bg-[var(--bg-2)] overflow-hidden"><div class="h-full bg-[var(--primary)]" style="width:${A}%"></div></div>
              </div>`}).join("")}
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-2">👥 ผู้มีสิทธิ์ ${k.eligible} คน · ใช้สิทธิ์ ${S} คน (${_}%)</p>`}b=v+L}else o&&a?b=`
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
        <p class="text-sm font-bold text-[var(--ink-2)]">🗳️ สภา${j[e]}</p>
        <span class="text-xs font-bold px-2.5 py-1 rounded-full ${u.cls}">${u.label}</span>
      </div>
      ${b}
      ${h}
    </div>`}function ps(e,t){var i,n,o,l,p,u,b;const r=e.photo_url||((i=e.students)==null?void 0:i.image_url)||((n=e.students)==null?void 0:n.photo_url),a=(o=e.council_applications)==null?void 0:o.gpa_general,s=(l=e.council_applications)==null?void 0:l.gpa_religious;return`
    <button type="button" class="candidate-card-btn text-left rounded-2xl overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] shadow-[0_4px_12px_rgba(23,32,42,0.07)] hover:border-[var(--primary-45)] transition" data-gender="${t}" data-id="${e.id}">
      <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
        ${r?`<img src="${c(r)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-4xl font-bold text-[var(--primary-70)]">${c((((p=e.students)==null?void 0:p.full_name)||"?").charAt(0))}</div>`}
        <div class="absolute top-2 left-2 min-w-[2.25rem] h-9 px-1.5 rounded-full bg-[var(--surface)]/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold text-base shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${e.ballot_number}</div>
      </div>
      <div class="p-3">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((u=e.students)==null?void 0:u.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)]">${c(((b=e.students)==null?void 0:b.main_room)??"")}</p>
        ${a!=null||s!=null?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">เกรดสามัญ ${c(a??"—")} · ศาสนา ${c(s??"—")}</p>`:""}
        ${e.slogan?`<p class="text-xs text-[var(--primary-dark)] font-semibold mt-1.5 line-clamp-2">"${c(e.slogan)}"</p>`:""}
      </div>
    </button>`}function ms(){const e=t=>{const r=Bt(t),a=`<p class="text-xs font-bold text-[var(--muted-2)] mb-2">สภา${j[t]}</p>`;if(!r)return`<div>${a}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่เปิดรับผู้สมัคร</p></div>`;const s=ce[t];return s===void 0?(wr(t,r.id),`<div>${a}<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>`):s.length?`
      <div>
        ${a}
        <div class="grid grid-cols-2 gap-3">${s.map(i=>ps(i,t)).join("")}</div>
      </div>`:`<div>${a}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีผู้สมัคร</p></div>`};return`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">${e("M")}${e("W")}</div>${bs()}`}function bs(){var p,u,b,h,f,m,v,k;if(!we)return"";const{gender:e,id:t}=we,r=(ce[e]||[]).find(q=>q.id===t);if(!r)return"";const a=d.isAdmin||d.isCouncilAdvisor,s=Array.isArray(r.policies)?r.policies:[],i=Array.isArray(r.experience)?r.experience:[],n=r.photo_url||((p=r.students)==null?void 0:p.image_url)||((u=r.students)==null?void 0:u.photo_url),o=(b=r.council_applications)==null?void 0:b.gpa_general,l=(h=r.council_applications)==null?void 0:h.gpa_religious;return pe?`
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
          ${n?`<img src="${c(n)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${c((((m=r.students)==null?void 0:m.full_name)||"?").charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${r.ballot_number}</div>
          <button type="button" id="btn-candidate-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${c(((v=r.students)==null?void 0:v.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${c(((k=r.students)==null?void 0:k.main_room)??"")}${o!=null||l!=null?` · เกรดสามัญ ${c(o??"—")} · ศาสนา ${c(l??"—")}`:""}</p>
          </div>
          ${r.slogan?`<p class="text-sm font-bold text-[var(--primary-dark)]">"${c(r.slogan)}"</p>`:""}
          ${r.vision?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${c(r.vision)}</p></div>`:""}
          ${s.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${s.map(q=>`<li>${c(q)}</li>`).join("")}</ul></div>`:""}
          ${i.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${i.map(q=>`<li>${c(q)}</li>`).join("")}</ul></div>`:""}
          ${!r.slogan&&!r.vision&&!s.length&&!i.length?'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>':""}
          ${a?'<button type="button" id="btn-candidate-edit" class="w-full py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mt-2">✏️ แก้ไขโปรไฟล์</button>':""}
        </div>
      </div>
    </div>`}const kr={pending:["รอนัดสัมภาษณ์","bg-[var(--bg-2)] text-[var(--muted)]"],interview_scheduled:["นัดสัมภาษณ์แล้ว รอให้คะแนน","bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"],interviewed:["ผ่านสัมภาษณ์","bg-[var(--ok-soft-line)] text-[#106143]"],candidate:["ผู้สมัครเลือกตั้ง","bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"],appointed:["แต่งตั้งแล้ว","bg-[#e3f1ef] text-[var(--teal)]"],rejected:["ไม่ผ่าน","bg-[var(--bad-soft-line)] text-[#8a2f22]"]},Er={M:"bg-[#edf4f0] text-[#14563b]",W:"bg-[#fdeef4] text-[#a3134f]"},kt=[{id:"all",label:"ทั้งหมด"},{id:"awaiting_endorsement",label:"รอรับรอง"},{id:"endorsed",label:"รับรองแล้ว"},{id:"scheduled",label:"นัดแล้ว"},{id:"interviewed",label:"ผ่านสัมภาษณ์"},{id:"rejected",label:"ไม่ผ่าน"}];function ge(){return d.cfg.council_require_peer_endorsement==="true"}function Ae(e){var r;const t=((r=e.students)==null?void 0:r.id)??e.student_id;return!!t&&d.members.some(a=>a.student_id===t)}function We(e){return!ge()||Ae(e)?!0:!!e.peer_endorsed_at}function vs(e){const t=[];return e.endorsed_at||t.push("รอครูที่ปรึกษาสามัญรับรอง"),We(e)||t.push("รอสมาชิกสภาปัจจุบัน (เพศเดียวกัน) รับรอง"),t.join(" และ")}function Qt(e){var r;return((r=((e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||"").match(/^(ม\.\d+|ปวช\.\d+)/))==null?void 0:r[1])??null}function nt(e){return e.status==="rejected"?"rejected":e.status==="pending"?e.endorsed_at&&We(e)?"endorsed":"awaiting_endorsement":e.status==="interview_scheduled"?"scheduled":"interviewed"}async function Nt(){C=await Aa(M).catch(()=>[]),x()}async function Sr(){ee=await Vr().catch(()=>[]),x()}function xs(e){const t=ee==null?void 0:ee.find(r=>r.id===e);return t?`${t.full_name} · รหัส ${t.id}`:""}function fs(e){if(!e)return"";const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);if(t)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${c(t[1])}" allowfullscreen loading="lazy"></iframe></div>`;const r=e.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)||e.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);if(r)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://drive.google.com/file/d/${c(r[1])}/preview" allowfullscreen loading="lazy"></iframe></div>`;const a=e.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);return a?`<div class="rounded-xl overflow-hidden bg-black" style="aspect-ratio:9/16;max-width:280px;margin:0 auto;"><iframe class="w-full h-full" src="https://www.tiktok.com/embed/v2/${c(a[1])}" allowfullscreen loading="lazy"></iframe></div>`:`<a href="${c(e)}" target="_blank" rel="noopener" class="block text-center py-3 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold hover:bg-[var(--primary-soft)]">🎬 เปิดดูวิดีโอแนะนำตัว (แท็บใหม่ — แพลตฟอร์มนี้ไม่รองรับฝังดูในหน้า)</a>`}function Ar(){if(!Oe)return"";const e=C==null?void 0:C.find(t=>t.id===Oe);return e?qr(e,e.students,{closeId:"btn-admin-app-detail-close",backdropId:"admin-app-detail-backdrop"}):""}function gs(){var t;if(!Re)return"";const e=(t=d.applications)==null?void 0:t.find(r=>r.id===Re);return e?qr(e,d.student,{closeId:"btn-my-app-detail-close",backdropId:"my-app-detail-backdrop",isOwner:!0}):""}function _s(e,t){var n,o;(n=document.getElementById("peer-endorser-picker-modal"))==null||n.remove();const r=(o=d.applications)==null?void 0:o.find(l=>l.id===e),a=(d.members||[]).filter(l=>{var p;return((p=l.council_positions)==null?void 0:p.gender)===t&&l.student_id!==d.student.id}).sort((l,p)=>{var u,b;return(((u=l.council_positions)==null?void 0:u.sort_order)??0)-(((b=p.council_positions)==null?void 0:b.sort_order)??0)}),s=l=>{var p,u,b;return`
    <button type="button" class="btn-peer-picker-choose w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(r==null?void 0:r.requested_peer_endorser_id)===String(l.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${l.id}">
      ${B(l.students,"w-11 h-14")}
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
      ${a.length?`<div class="space-y-2">${a.map(s).join("")}</div>`:`<p class="text-sm text-[var(--muted-2)] text-center py-8">ยังไม่มีสมาชิกสภานักเรียน${j[t]??""}ในระบบให้เลือก</p>`}
    </div>`,document.body.appendChild(i),i.addEventListener("click",l=>{l.target===i&&i.remove()}),i.querySelector("#btn-peer-picker-close").addEventListener("click",()=>i.remove()),i.querySelectorAll(".btn-peer-picker-choose").forEach(l=>{l.addEventListener("click",async()=>{l.disabled=!0;try{await Ea({applicationId:e,memberId:Number(l.dataset.id)}),await _r(),g("เลือกพี่สภาที่ต้องการให้รับรองแล้ว ✅","success"),i.remove(),x()}catch(p){g("บันทึกไม่สำเร็จ: "+(p.message??""),"error"),l.disabled=!1}})})}function qr(e,t,{closeId:r,backdropId:a,isOwner:s=!1}){var n,o,l,p,u,b,h,f,m,v;const i=Er[(n=e.council_positions)==null?void 0:n.gender]??"bg-[var(--bg-2)] text-[var(--muted)]";return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="${a}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-lg w-full max-h-[85vh] overflow-y-auto p-5">
        <div class="flex items-start justify-between gap-3 mb-3">
          <p class="text-base font-bold text-[var(--ink)]">📄 ใบสมัครสภานักเรียน</p>
          <button type="button" id="${r}" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center gap-3 pb-3 border-b border-[var(--line-soft)]">
          ${B(t,"w-16 h-20")}
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <p class="font-bold text-[var(--ink)] truncate">${c((t==null?void 0:t.full_name)??"—")}</p>
              <span class="text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${i}">${c(j[(o=e.council_positions)==null?void 0:o.gender]??"—")}</span>
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
            ${fs(e.intro_video_url)}
          </div>`:""}
          ${(p=e.certificates)!=null&&p.length?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1.5">🏅 เกียรติบัตร/รางวัล (${e.certificates.length} รายการ)</p>
            <div class="grid grid-cols-3 gap-2">
              ${e.certificates.map(k=>`
                <a href="${c(k.url)}" target="_blank" rel="noopener" class="block rounded-lg border border-[var(--line)] overflow-hidden hover:border-[var(--primary-45)]">
                  ${(k.url??"").endsWith(".pdf")?'<div class="aspect-square bg-[var(--surface-2)] flex items-center justify-center text-2xl">📄</div>':`<img src="${c(k.url)}" class="aspect-square object-cover w-full" />`}
                  <p class="text-[0.5625rem] text-[var(--ink-2)] px-1 py-1 truncate">${c(k.title||"—")}</p>
                </a>`).join("")}
            </div>
          </div>`:""}
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">✅ ความเห็นครูที่ปรึกษาสามัญ${(u=e.teachers)!=null&&u.full_name?" — "+c(e.teachers.full_name):""}</p>
            ${e.endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${c(e.endorsement_comment)}</p>`:'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>
          ${ge()?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🏛️ ความเห็นสมาชิกสภาปัจจุบัน${(h=(b=e.council_members)==null?void 0:b.students)!=null&&h.full_name?" — "+c(e.council_members.students.full_name):""}</p>
            ${Ae(e)?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ผู้สมัครเป็นสมาชิกสภาปัจจุบันอยู่แล้ว — ข้ามขั้นตอนนี้</p>':e.peer_endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${c(e.peer_endorsement_comment)}</p>`:e.peer_endorsed_at?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">รับรองแล้ว (ไม่มีความเห็นเพิ่มเติม)</p>':'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>`:""}
          ${s&&ge()&&!Ae(e)&&!e.peer_endorsed_at?`
          <div class="rounded-xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-3 space-y-2">
            <p class="text-xs font-bold text-[var(--primary-dark)]">🙋 พี่สภาที่ต้องการให้รับรอง</p>
            <p class="text-sm text-[var(--ink)]">${(m=(f=e.requested_peer_endorser)==null?void 0:f.students)!=null&&m.full_name?c(e.requested_peer_endorser.students.full_name):"ยังไม่ได้เลือก"}</p>
            <button type="button" id="btn-pick-my-app-endorser" class="w-full py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${e.id}" data-gender="${c(((v=e.council_positions)==null?void 0:v.gender)??"")}">
              ${e.requested_peer_endorser_id?"🔄 เปลี่ยนพี่สภา":"➕ เลือกพี่สภา"}
            </button>
          </div>`:""}
        </div>
      </div>
    </div>`}async function ys(){yt=await jn().catch(()=>[]),x()}function hs(){if(!d.isAdmin&&!d.isExecutive)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือผู้บริหารเท่านั้น</p>';if(C===null)return Nt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(R===null)return Mt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(yt===null)return ys(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=(()=>{const f=d.cfg.council_term_start_semester,m=d.cfg.council_term_start_year,v=d.cfg.council_term_end_semester,k=d.cfg.council_term_end_year;return!m&&!k?"ยังไม่ได้ตั้งค่าวาระ":`ภาคเรียนที่ ${f??"—"}/${m??"—"} ถึง ภาคเรียนที่ ${v??"—"}/${k??"—"}`})(),t=d.members,r={M:t.filter(f=>{var m;return((m=f.council_positions)==null?void 0:m.gender)==="M"}).length,W:t.filter(f=>{var m;return((m=f.council_positions)==null?void 0:m.gender)==="W"}).length},a=t.filter(f=>{var m;return(m=f.council_positions)==null?void 0:m.is_elected}).sort((f,m)=>{var v,k;return(((v=f.council_positions)==null?void 0:v.sort_order)??0)-(((k=m.council_positions)==null?void 0:k.sort_order)??0)}),s=C.length,i={all:s};C.forEach(f=>{const m=nt(f);i[m]=(i[m]??0)+1});const n=C.filter(f=>f.endorsed_at).length,o=C.filter(f=>f.peer_endorsed_at||Ae(f)).length,l=C.filter(f=>f.status==="candidate").length,p=C.filter(f=>f.status==="appointed").length,u=Object.fromEntries(d.positions.map(f=>[f.id,f.position_name])),b=R.map(f=>({...f,posNames:yt.filter(m=>m.teacher_id===f.id).map(m=>u[m.position_id]).filter(Boolean)})),h=(f,m,v)=>`
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
          ${h(n,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
          ${ge()?h(o,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):h("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
          ${h(l,"ว่าที่สภานักเรียน (ผู้สมัครเลือกตั้ง)","var(--primary)")}
          ${h(p,"แต่งตั้งแล้ว","var(--teal)")}
        </div>
        <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
          ${kt.map(f=>`
            <span class="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--surface-2)] text-[var(--ink-2)]">
              ${c(f.label)} <span class="text-[var(--muted-2)]">${i[f.id]??0}</span>
            </span>`).join("")}
        </div>
        <p class="text-xs text-[var(--muted-2)] mb-2">รายชื่อล่าสุด — กดดูใบสมัครฉบับเต็มได้</p>
        <div class="space-y-1.5 max-h-96 overflow-y-auto">
          ${C.slice(0,30).map(f=>{var L,S;const[m,v]=kr[f.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],k=f.endorsed_at?"✅":"⬜",q=ge()?f.peer_endorsed_at||Ae(f)?" · ✅สภา":" · ⬜สภา":"";return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${B(f.students,"w-8 h-10")}
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${c(((L=f.students)==null?void 0:L.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${c(((S=f.council_positions)==null?void 0:S.position_name)??"—")} · ${k}ครู${q}</p>
              </div>
              <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full ${v}">${c(m)}</span>
              <button type="button" class="btn-view-app-detail flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-lg border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${f.id}">ดู</button>
            </div>`}).join("")||'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีใบสมัคร</p>'}
        </div>
        ${C.length>30?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-2 text-center">แสดง 30 รายการล่าสุดจากทั้งหมด ${C.length} รายการ</p>`:""}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-1">🏛️ สภานักเรียนวาระปัจจุบัน</p>
        <p class="text-xs text-[var(--muted)] mb-3">${c(e)}</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
          ${h(t.length,"สมาชิกสภาทั้งหมด","var(--ink)")}
          ${h(r.M,"สภาชาย","#14563b")}
          ${h(r.W,"สภาหญิง","#a3134f")}
          ${h(a.length,"ตำแหน่งผู้นำ","var(--primary)")}
        </div>
        ${a.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${a.map(f=>{var m,v;return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${B(f.students,"w-9 h-11")}
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
    ${Ar()}`}function ws(){if(!d.isAdmin&&!d.isCouncilAdvisor)return"";if(C===null)return Nt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(te===null)return gr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ee===null)return Sr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=te.reduce((m,v)=>m+Number(v.weight),0),t=e/2;Z!=="M"&&Z!=="W"&&(Z="M");const r=C.filter(m=>{var v;return((v=m.council_positions)==null?void 0:v.gender)===Z}),a=`
    <div class="flex gap-2 mb-3">
      ${["M","W"].map(m=>`
        <button type="button" class="apps-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${m===Z?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${m}">
          สภา${j[m]} <span class="${m===Z?"text-white/80":"text-[var(--muted-2)]"}">${C.filter(v=>{var k;return((k=v.council_positions)==null?void 0:k.gender)===m}).length}</span>
        </button>`).join("")}
    </div>`,s={all:r.length};r.forEach(m=>{const v=nt(m);s[v]=(s[v]??0)+1}),kt.some(m=>m.id===ue)||(ue="all");const i=`
    <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
      ${kt.map(m=>`
        <button type="button" class="apps-filter-btn flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition ${m.id===ue?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${m.id}">
          ${c(m.label)} <span class="${m.id===ue?"text-white/80":"text-[var(--muted-2)]"}">${s[m.id]??0}</span>
        </button>`).join("")}
    </div>`,n=[...new Set(r.map(m=>Qt(m.students)).filter(Boolean))].sort((m,v)=>m.localeCompare(v,"th")),o=d.positions.filter(m=>m.gender===Z).sort((m,v)=>m.sort_order-v.sort_order),l=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      <select id="apps-grade-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกระดับชั้น</option>
        ${n.map(m=>`<option value="${c(m)}" ${m===et?"selected":""}>${c(m)}</option>`).join("")}
      </select>
      <select id="apps-position-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกฝ่าย</option>
        ${o.map(m=>`<option value="${m.id}" ${String(m.id)===String(he)?"selected":""}>${c(m.position_name)}</option>`).join("")}
      </select>
      <select id="apps-advisor-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองครูที่ปรึกษา: ทั้งหมด</option>
        <option value="yes" ${je==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${je==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>
      ${ge()?`
      <select id="apps-peer-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองพี่สภา: ทั้งหมด</option>
        <option value="yes" ${De==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${De==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>`:""}
    </div>`,p=`<datalist id="council-teacher-datalist">${ee.map(m=>`<option value="${c(m.full_name)} · รหัส ${m.id}"></option>`).join("")}</datalist>`;if(!r.length)return`${a}${i}${l}${p}<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีใบสมัครสภา${j[Z]}</p>`;const u=m=>!(et&&Qt(m.students)!==et||he&&String(m.position_id)!==String(he)||je==="yes"&&!m.endorsed_at||je==="no"&&m.endorsed_at||De==="yes"&&!We(m)||De==="no"&&We(m)),b=r.filter(m=>(ue==="all"||nt(m)===ue)&&u(m));if(!b.length)return`${a}${i}${l}${p}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีใบสมัครในหมวดนี้</p>`;const h=m=>{var w,$,E,A,D,X,re,P,W,Pt,Ot,Rt,Ht,Wt;const v=(w=m.council_interviews)==null?void 0:w[0],[k,q]=kr[m.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],L=Er[($=m.council_positions)==null?void 0:$.gender]??"bg-[var(--bg-2)] text-[var(--muted)]",S=!!((E=m.council_positions)!=null&&E.is_elected),_=nt(m);return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-app-card="${m.id}">
      <div class="flex items-center gap-3">
        ${B(m.students)}
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5 flex-wrap">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((A=m.students)==null?void 0:A.full_name)??"—")}</p>
            <span class="flex-shrink-0 text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${L}">${c(j[(D=m.council_positions)==null?void 0:D.gender]??"—")}</span>
          </div>
          <p class="text-xs text-[var(--muted)]">${c(((X=m.students)==null?void 0:X.student_code)??"")} · ${c(((re=m.students)==null?void 0:re.main_room)??"")} · ${c(((P=m.council_positions)==null?void 0:P.position_name)??"—")}</p>
        </div>
        <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${q}">${k}</span>
      </div>
      <button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${m.id}">📄 ดูใบสมัคร</button>

      ${_==="awaiting_endorsement"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${vs(m)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}

      ${m.status==="pending"&&m.endorsed_at&&We(m)?`
        <form class="schedule-form space-y-2 pt-1 border-t border-[var(--line-soft)]" data-app-id="${m.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-profile-id="${c(((W=m.students)==null?void 0:W.profile_id)??"")}" data-student-name="${c(((Pt=m.students)==null?void 0:Pt.full_name)??"")}" data-position-name="${c(((Ot=m.council_positions)==null?void 0:Ot.position_name)??"")}">
          <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p>
          <div class="grid grid-cols-2 gap-2">
            <input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
            <input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <input type="text" name="interviewerText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)"
            value="${v!=null&&v.interviewer_teacher_id?c(xs(v.interviewer_teacher_id)):""}"
            class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button>
        </form>`:""}

      ${m.status==="interview_scheduled"?`
        <div class="pt-1 border-t border-[var(--line-soft)] space-y-2">
          <p class="text-xs text-[var(--muted)]">📅 ${v!=null&&v.scheduled_at?new Date(v.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"—"} ${v!=null&&v.location?"· "+c(v.location):""} ${v!=null&&v.interviewer_teacher_id?"· กรรมการ "+c(((Rt=ee.find(ae=>ae.id===v.interviewer_teacher_id))==null?void 0:Rt.full_name)??""):""}</p>
          <form class="score-form space-y-1.5" data-app-id="${m.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-max-weight="${e}" data-pass-threshold="${t}">
            <p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>
            ${te.map(ae=>{var Ft;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${c(ae.name)} <span class="text-[var(--muted-2)]">(เต็ม ${ae.weight})</span></span>
                <input type="number" min="0" max="${ae.weight}" step="0.5" name="c_${ae.id}" data-criterion-id="${ae.id}"
                  value="${((Ft=v==null?void 0:v.scores)==null?void 0:Ft[ae.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
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
          ${S?`<button type="button" class="btn-promote-candidate w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${m.id}">🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง</button>`:`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${m.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`}
        </div>`:""}

      ${m.status==="candidate"?`<p class="text-xs text-[var(--primary)] pt-1 border-t border-[var(--line-soft)]">เบอร์ผู้สมัคร ${((Wt=(Ht=m.council_candidates)==null?void 0:Ht[0])==null?void 0:Wt.ballot_number)??"—"} · รอผลเลือกตั้ง</p>`:""}
      ${m.status==="rejected"&&(v!=null&&v.comment)?`<p class="text-xs text-[var(--bad)] pt-1 border-t border-[var(--line-soft)]">${c(v.comment)}</p>`:""}
    </div>`},f=he?`<div class="space-y-3">${b.map(h).join("")}</div>`:o.map(m=>{const v=b.filter(k=>k.position_id===m.id);return v.length?`
          <div class="mb-5">
            <p class="text-xs font-bold text-[var(--muted)] mb-2 px-1">${c(m.position_name)} <span class="text-[var(--muted-2)]">(${v.length})</span></p>
            <div class="space-y-3">${v.map(h).join("")}</div>
          </div>`:""}).join("");return`${a}${i}${l}${p}${f}${Ar()}`}const $s=[{label:"ประธาน",match:e=>!!(e!=null&&e.is_elected)},{label:"รองประธาน",match:e=>(e==null?void 0:e.position_name)==="รองประธานสภานักเรียน"},{label:"ฝ่ายงาน",match:e=>((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")},{label:"สำนักงานสภา",match:e=>!(e!=null&&e.is_elected)&&(e==null?void 0:e.position_name)!=="รองประธานสภานักเรียน"&&!((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")}];let Q="M";function ks(){Q!=="M"&&Q!=="W"&&(Q="M");const e=d.members.filter(n=>{var o;return((o=n.council_positions)==null?void 0:o.gender)===Q}).sort((n,o)=>{var l,p;return(((l=n.council_positions)==null?void 0:l.sort_order)??99)-(((p=o.council_positions)==null?void 0:p.sort_order)??99)}),t=`
    <div class="flex gap-2 mb-4">
      ${["M","W"].map(n=>`
        <button type="button" class="roster-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${n===Q?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${n}">สภา${j[n]}</button>`).join("")}
    </div>`,r=d.isAdmin?`<button type="button" id="btn-add-council-member" class="w-full py-2.5 rounded-xl border border-dashed border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mb-4 hover:bg-[var(--primary-soft)]">＋ เพิ่มสมาชิกสภา${j[Q]}</button>`:"",a=d.isAdmin||d.isChair&&d.chairGender===Q,s=n=>{var o,l,p;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] text-center">
      ${B(n.students,"w-16 h-20 mx-auto")}
      <p class="text-sm font-bold text-[var(--ink)] truncate mt-2">${c(((o=n.students)==null?void 0:o.full_name)??"—")}</p>
      <p class="text-[0.6875rem] text-[var(--muted)] truncate">${c(((l=n.students)==null?void 0:l.main_room)??"")}</p>
      <p class="text-[0.6875rem] text-[var(--primary)] font-semibold truncate mt-0.5">${c(((p=n.council_positions)==null?void 0:p.position_name)??"—")}</p>
      ${a?`
        <button type="button" class="btn-toggle-can-create w-full mt-2 text-[0.625rem] font-bold py-1 rounded-[8px] border ${n.can_create_activities?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--muted)]"}" data-id="${n.id}" data-value="${n.can_create_activities?"":"1"}">${n.can_create_activities?"✅ สร้างกิจกรรมได้":"➕ ให้สิทธิ์สร้างกิจกรรม"}</button>`:""}
      ${d.isAdmin?`
        <div class="flex gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-edit-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">✏️ แก้ไข</button>
          <button type="button" class="btn-remove-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${n.id}">🗑️ ลบ</button>
        </div>`:""}
    </div>`},i=$s.map(n=>{const o=e.filter(l=>n.match(l.council_positions));return o.length?`
      <div class="mb-4">
        <p class="text-xs font-bold text-[var(--muted-2)] mb-2">${n.label}</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${o.map(s).join("")}</div>
      </div>`:""}).join("");return`${r}${t}${i||`<p class="text-xs text-[var(--muted-2)] text-center py-10">ยังไม่มีข้อมูลสมาชิกสภา${j[Q]}</p>`}`}function Jt({mode:e,gender:t,member:r}){var l,p,u;(l=document.getElementById("member-modal"))==null||l.remove();const a=d.positions.filter(b=>b.gender===t);let s=e==="edit"?r.students:null,i=null;const n=document.createElement("div");n.id="member-modal",n.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",n.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">${e==="add"?`➕ เพิ่มสมาชิกสภา${j[t]}`:"✏️ แก้ไขสมาชิกสภา"}</p>
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
            ${a.map(b=>`<option value="${b.id}" ${e==="edit"&&r.position_id===b.id?"selected":""}>${c(b.position_name)}</option>`).join("")}
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
    </div>`,document.body.appendChild(n),n.querySelector("#btn-close-member-modal").addEventListener("click",()=>n.remove()),n.addEventListener("click",b=>{b.target===n&&n.remove()});const o=()=>{const b=n.querySelector("#member-student-selected");b&&(b.innerHTML=s?`
      <div class="flex items-center gap-2 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] p-2.5">
        ${B(s,"w-10 h-12")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(s.full_name)}</p>
          <p class="text-[0.6875rem] text-[var(--muted-2)] truncate">${c(s.student_code)} · ${c(s.main_room??"")}</p>
        </div>
      </div>`:"")};if(e==="add"){const b=n.querySelector("#member-student-search"),h=n.querySelector("#member-student-results");b.addEventListener("input",()=>{clearTimeout(i);const f=b.value.trim();if(f.length<2){h.innerHTML="";return}i=setTimeout(async()=>{const m=await ur(f).catch(()=>[]);h.innerHTML=m.length?m.map(v=>`
          <button type="button" class="member-search-result-item w-full text-left flex items-center gap-2 rounded-xl border border-[var(--line)] p-2 hover:bg-[var(--surface-2)]" data-id="${v.id}">
            <span class="text-sm font-bold text-[var(--ink)] flex-1 truncate">${c(v.full_name)}</span>
            <span class="text-[0.6875rem] text-[var(--muted-2)] flex-shrink-0">${c(v.student_code)} · ${c(v.main_room??"")}</span>
          </button>`).join(""):'<p class="text-xs text-[var(--muted-2)] px-1">ไม่พบนักเรียน</p>',h.querySelectorAll(".member-search-result-item").forEach(v=>{v.addEventListener("click",()=>{s=m.find(k=>k.id===Number(v.dataset.id)),h.innerHTML="",b.value="",o()})})},300)})}n.querySelector("#btn-save-member").addEventListener("click",async()=>{var m;const b=Number(n.querySelector("#member-position-select").value);if(!b){g("กรุณาเลือกตำแหน่ง","warning");return}if(e==="add"&&!s){g("กรุณาค้นหาและเลือกนักเรียน","warning");return}const h=n.querySelector("#member-term-start").value,f=n.querySelector("#btn-save-member");f.disabled=!0,f.textContent="กำลังบันทึก...";try{if(e==="add")await ja({positionId:b,studentId:s.id,academicYear:M,termStartDate:h,appointedByTeacherId:((m=d.teacher)==null?void 0:m.id)??null});else{const v=n.querySelector("#member-term-end").value;await Da(r.id,{positionId:b,termStartDate:h,termEndDate:v})}g("บันทึกแล้ว ✅","success"),n.remove(),d.members=await Ie().catch(()=>d.members),x()}catch(v){g("บันทึกไม่สำเร็จ: "+(v.message??""),"error"),f.disabled=!1,f.textContent="บันทึก"}})}function Es(){if(d.role!=="teacher"||!d.teacher)return"";if(!d.pendingEndorsements.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างยืนยันในตอนนี้</div>';const e=t=>{var r,a,s,i;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-endorsement-card="${t.id}">
      <div class="flex items-center gap-3">
        ${B(t.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((r=t.students)==null?void 0:r.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${c(((a=t.students)==null?void 0:a.student_code)??"")} · ${c(((s=t.students)==null?void 0:s.main_room)??"")} · สมัคร${c(((i=t.council_positions)==null?void 0:i.position_name)??"—")}</p>
          ${t.gpa_general!=null||t.gpa_religious!=null?`<p class="text-xs text-[var(--muted)] mt-0.5">เกรดสามัญ ${c(t.gpa_general??"—")} · เกรดศาสนา ${c(t.gpa_religious??"—")}</p>`:""}
        </div>
      </div>
      ${t.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${c(t.motivation)}</p>`:""}
      ${t.intro_video_url?`<a href="${c(t.intro_video_url)}" target="_blank" rel="noopener" class="inline-block text-xs font-bold text-[var(--primary)] hover:underline">🎬 ดูวิดีโอแนะนำตัว</a>`:""}
      <div class="flex flex-wrap gap-1.5">
        ${d.endorsementPhrases.map(n=>`
          <button type="button" class="endorse-phrase-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition"
            data-target="${t.id}" data-phrase="${c(n.phrase)}">${c(n.phrase)}</button>`).join("")}
      </div>
      <textarea class="endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${t.id}" rows="2"
        placeholder="คอมเมนต์ถึงนักเรียนคนนี้ (เลือกจากปุ่มด้านบนแล้วแก้ไขเพิ่มได้)"></textarea>
      <div class="flex gap-2">
        <button type="button" class="btn-endorse-decline flex-1 py-2 rounded-xl border border-[var(--bad-soft-line)] text-[#8a2f22] text-xs font-bold hover:bg-[var(--bad-soft)]" data-id="${t.id}">❌ ไม่รับรอง</button>
        <button type="button" class="btn-endorse-confirm flex-1 py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${t.id}">✅ รับรอง</button>
      </div>
    </div>`};return`<div class="space-y-3">${d.pendingEndorsements.map(e).join("")}</div>`}const ut={};async function Ss(e,t){ut[t]=await ka(e,t).catch(()=>[]),x()}function As(){var s;const e=d.membership[0];if(!e)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภานักเรียนปัจจุบันเท่านั้น</p>';const t=(s=e.council_positions)==null?void 0:s.gender;if(!t)return"";if(ut[e.id]===void 0)return Ss(t,e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const r=ut[e.id];if(!r.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างรับรองในตอนนี้</div>';const a=i=>{var n,o,l,p;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-peer-endorsement-card="${i.id}">
      <div class="flex items-center gap-3">
        ${B(i.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((n=i.students)==null?void 0:n.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${c(((o=i.students)==null?void 0:o.student_code)??"")} · ${c(((l=i.students)==null?void 0:l.main_room)??"")} · สมัคร${c(((p=i.council_positions)==null?void 0:p.position_name)??"—")}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary-dark)] flex-shrink-0">ขอให้คุณรับรอง</span>
      </div>
      ${i.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${c(i.motivation)}</p>`:""}
      <textarea class="peer-endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${i.id}" rows="2"
        placeholder="ความเห็นถึงนักเรียนคนนี้ (ไม่บังคับ)"></textarea>
      <button type="button" class="btn-peer-endorse w-full py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${i.id}">✅ รับรองในนามสภานักเรียน</button>
    </div>`};return`<div class="space-y-3">${r.map(a).join("")}</div>`}async function qs(e){const t=d.membership[0];if(!t)return;const r=document.querySelector(`.peer-endorse-comment[data-id="${e}"]`),a=(r==null?void 0:r.value.trim())||null;try{await Sa({applicationId:Number(e),memberId:t.id,comment:a}),g("รับรองในนามสภานักเรียนแล้ว ✅","success"),delete ut[t.id],x()}catch(s){g("บันทึกไม่สำเร็จ: "+(s.message??""),"error")}}async function Kt(e,t){const r=document.querySelector(`.endorse-comment[data-id="${e}"]`),a=(r==null?void 0:r.value.trim())??"";if(!a){g("กรุณาใส่คอมเมนต์ก่อนยืนยัน","warning");return}try{t==="confirm"?(await wa({applicationId:Number(e),teacherId:d.teacher.id,comment:a}),g("รับรองใบสมัครแล้ว ✅","success")):(await $a({applicationId:Number(e),teacherId:d.teacher.id,comment:a}),g('บันทึกผล "ไม่รับรอง" แล้ว',"success")),await Wn(),x()}catch(s){g("บันทึกไม่สำเร็จ: "+(s.message??""),"error")}}const Ir={planned:["ยังไม่จัด","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],completed:["เสร็จแล้ว","text-[#106143]","bg-[var(--ok-soft-line)]","border-[var(--ok-soft-line)]"],cancelled:["ยกเลิก","text-[var(--muted-2)]","bg-[var(--surface-2)]","border-[var(--line)]"]},Cr=[["completed","เสร็จแล้ว","border-[var(--ok-soft-line)] bg-[var(--ok-soft)]","text-[var(--ok)]"],["ongoing","กำลังดำเนินการ","border-[var(--primary-soft-line)] bg-[var(--primary-soft)]","text-[var(--primary)]"],["planned","ยังไม่จัด","border-[var(--gold-soft-line)] bg-[var(--gold-soft)]","text-[var(--gold-ink)]"],["cancelled","ยกเลิก","border-[var(--line-soft)] bg-[var(--surface-2)]","text-[var(--muted-2)]"]],Xt={planned:"ongoing",ongoing:"completed"},Is={planned:"▶️ เริ่มดำเนินการ",ongoing:"✅ ทำเครื่องหมายเสร็จแล้ว"};async function Lr(){H=await Fa(M).catch(()=>[]),x()}async function Zt(e){se[e]=await Ua(e).catch(()=>new Set),x()}function Cs(e){return d.isAdmin||d.isChair||d.isCouncilAdvisor?!0:!!(e.owner_member_id&&d.membership.some(t=>t.id===e.owner_member_id))}async function jr(){F=await ia().catch(()=>[]),x()}async function Dr(e){const[t,r,a,s]=await Promise.all([Qa(e).catch(()=>null),Ka(e).catch(()=>[]),Va(e).catch(()=>[]),sa("council_activity",e).catch(()=>[])]);$e[e]=t,Ct[e]=r,Lt[e]=a,He[e]=Object.fromEntries(s.map(i=>[i.student_id,i])),x()}function Ls({rule:e,override:t,attendanceRows:r}){var s;if((t==null?void 0:t.override_decision)==="pass")return"pass";if((t==null?void 0:t.override_decision)==="fail")return"fail";if(!e)return"no_rule";const a=r.length;if(e.min_attendance_count&&a<e.min_attendance_count)return"not_eligible";if((s=e.required_dates)!=null&&s.length){const i=new Set(r.map(o=>(o.checked_in_at||"").slice(0,10)));if(e.required_dates.some(o=>!i.has(o)))return"not_eligible"}return"pass"}function js(){var o,l,p;if(H===null)return Lr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.canCreateActivities,t=e&&!d.isAdmin&&!d.isChair,r=d.membership[0],a={};H.forEach(u=>{a[u.status]=(a[u.status]??0)+1});const s=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      ${Cr.map(([u,b,h,f])=>`
        <div class="rounded-xl border ${h} p-3 text-center">
          <p class="text-2xl font-bold ${f}">${a[u]??0}</p>
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
    </div>`:"";if(!H.length)return`${s}${i}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีกิจกรรม</p>`;const n=u=>{var S,_;const[b,h,f,m]=Ir[u.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]","border-[var(--line)]"],v=d.members.filter(w=>{var $;return!u.gender||(($=w.council_positions)==null?void 0:$.gender)===u.gender}),k=se[u.id],q=Cs(u),L=(_=(S=u.council_members)==null?void 0:S.students)==null?void 0:_.full_name;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-activity-card="${u.id}">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${c(u.title)}</p>
            <p class="text-xs text-[var(--muted-2)] mt-0.5">${u.activity_date?new Date(u.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} ${u.gender?"· สภา"+j[u.gender]:""} ${u.owner_text?"· "+c(u.owner_text):""} ${L?"· ผู้รับผิดชอบ "+c(L):""}</p>
            ${u.open_to_general?'<span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] mt-1">🙋 เปิดให้นักเรียนทั่วไปเข้าร่วม</span>':""}
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${m} ${f} ${h}">${b}</span>
        </div>
        ${u.detail?`<p class="text-xs text-[var(--ink-2)]">${c(u.detail)}</p>`:""}
        ${q?`
          <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
            <!-- เดิมจำกัดแค่ admin/chair เปลี่ยนสถานะได้ — แต่กิจกรรมที่ค้างสถานะ "planned" ตลอดไป
                 จะไม่ถูกนับใน % เช็คชื่อสำหรับประเมินเลย (นับเฉพาะ ongoing/completed) ผู้รับผิดชอบ
                 ที่ได้รับมอบหมาย (owner) จึงต้องเปลี่ยนสถานะกิจกรรมของตัวเองได้ด้วย ไม่งั้นฟีเจอร์
                 "สร้าง+เช็คชื่อได้เอง" จะใช้ไม่ได้จริงเพราะกิจกรรมไม่มีวันถูกนับผล -->
            ${q&&Xt[u.status]?`<button type="button" class="btn-activity-next text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${u.id}" data-next="${Xt[u.status]}">${Is[u.status]}</button>`:""}
            ${q&&u.status!=="cancelled"&&u.status!=="completed"?`<button type="button" class="btn-activity-cancel text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${u.id}">ยกเลิก</button>`:""}
            <button type="button" class="btn-activity-attendance text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${u.id}">👥 เช็คชื่อสมาชิก</button>
            <button type="button" class="btn-activity-scan text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${u.id}" data-title="${c(u.title)}" data-open-general="${u.open_to_general?"1":""}">📷 สแกน QR เช็คอิน</button>
            <button type="button" class="btn-activity-cert-manage text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-id="${u.id}">🏅 จัดการเกียรติบัตร</button>
          </div>
          <div class="activity-attendance-panel" data-panel-for="${u.id}">
            ${k?`
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                ${v.map(w=>{var E;const $=k.has(w.student_id);return`<button type="button" class="btn-checkin flex items-center gap-2 text-xs rounded-[10px] border px-2.5 py-2 text-left ${$?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]"}" data-activity-id="${u.id}" data-student-id="${w.student_id}" ${$?"disabled":""}>
                    <span>${$?"✅":"➕"}</span><span class="truncate">${c(((E=w.students)==null?void 0:E.full_name)??"—")}</span>
                  </button>`}).join("")}
                ${v.length?"":'<p class="text-xs text-[var(--muted-2)] col-span-2">ยังไม่มีสมาชิกสภาที่เกี่ยวข้อง</p>'}
              </div>`:""}
          </div>
          ${wt===u.id?Ts(u):""}`:""}
      </div>`};return`${s}${i}<div class="space-y-3">${H.map(n).join("")}</div>`}const Ds={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft)] border-[var(--ok-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft)] border-[var(--bad-soft-line)]"],not_eligible:["ยังไม่ครบเงื่อนไข","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],no_rule:["ยังไม่ตั้งเงื่อนไข","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"]};function Ts(e){if(F===null&&jr(),$e[e.id]===void 0&&Dr(e.id),F===null||$e[e.id]===void 0)return'<div class="mt-2 pt-2 border-t border-dashed border-[var(--line)]"><p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>';const t=$e[e.id],r=Ct[e.id]??[],a=Lt[e.id]??[],s=Object.fromEntries(r.map(u=>[u.student_id,u])),i=He[e.id]??{},n={};a.forEach(u=>{n[u.student_id]||(n[u.student_id]={student:u.students,rows:[]}),n[u.student_id].rows.push(u)});const o=`
    <form class="cert-rule-form space-y-2 bg-[var(--surface-2)] rounded-xl p-3" data-activity-id="${e.id}">
      <p class="text-xs font-bold text-[var(--ink-2)]">🏅 เงื่อนไขการรับเกียรติบัตร</p>
      <select name="template_id" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]">
        <option value="">— ยังไม่เลือกเทมเพลต —</option>
        ${F.map(u=>`<option value="${u.id}" ${(t==null?void 0:t.template_id)===u.id?"selected":""}>${c(u.name)}</option>`).join("")}
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
    </form>`,l=Object.keys(n),p=l.map(u=>{const b=Number(u),{student:h,rows:f}=n[b],m=s[b],v=Ls({rule:t,override:m,attendanceRows:f}),[k,q]=Ds[v],L=i[b];return`
      <div class="rounded-xl border border-[var(--line-soft)] p-2.5 space-y-1.5" data-cert-row="${b}">
        <div class="flex items-center gap-2">
          ${B(h,"w-8 h-10")}
          <div class="min-w-0 flex-1">
            <p class="text-xs font-bold text-[var(--ink)] truncate">${c((h==null?void 0:h.full_name)??"—")}</p>
            <p class="text-[0.625rem] text-[var(--muted-2)]">เข้าร่วม ${f.length} ครั้ง</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${q}">${k}</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(m==null?void 0:m.override_decision)==="pass"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${b}" data-decision="pass">✅ ผ่าน (บังคับ)</button>
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(m==null?void 0:m.override_decision)==="fail"?"border-[var(--bad-soft-line)] bg-[var(--bad-soft)] text-[#8a2f22]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${b}" data-decision="fail">❌ ไม่ผ่าน (บังคับ)</button>
          ${m!=null&&m.override_decision?`<button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)]" data-activity-id="${e.id}" data-student-id="${b}" data-decision="">↺ กลับเป็นอัตโนมัติ</button>`:""}
          ${v==="pass"?L?`<button type="button" class="btn-cert-view text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${b}">🏅 ดูเกียรติบัตร</button>`:`<button type="button" class="btn-cert-issue text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${b}">🏅 ออกเกียรติบัตร</button>`:""}
        </div>
      </div>`}).join("");return`
    <div class="mt-2 pt-2 border-t border-dashed border-[var(--line)] space-y-3">
      ${o}
      <div>
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1.5">รายชื่อผู้เข้าร่วม (${l.length} คน)</p>
        <div class="space-y-1.5">${p||'<p class="text-xs text-[var(--muted-2)] text-center py-3">ยังไม่มีใครเช็คชื่อเข้าร่วมกิจกรรมนี้</p>'}</div>
      </div>
    </div>`}const er={info:["แจ้งให้ทราบ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],ack:["ต้องกดรับทราบ","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],urgent:["ด่วน","text-[#8a2f22]","bg-[var(--bad-soft-line)]","border-[var(--bad-soft-line)]"]};async function Bs(){ct=await cn().catch(()=>[]),x()}async function Ns(){oe=await pn(d.student.id).catch(()=>new Set),x()}async function Ms(){const[e,t,r,a]=await Promise.all([bn().catch(()=>({})),vn().catch(()=>0),_t("M").catch(()=>0),_t("W").catch(()=>0)]);le=e,tt={all:t,M:r,W:a},x()}function Ps(){if(ct===null)return Bs(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';d.role==="student"&&d.student&&oe===null&&Ns(),le===null&&Ms();const e=d.isAdmin||d.isCouncilAdvisor||d.isChair,t=ct.filter(l=>l.audience==="all"||l.audience===(d.student?de(d.student.gender):null)||d.isAdmin||d.isChair),r=rt==="all"?t:t.filter(l=>l.type===rt),a=e?'<button type="button" id="btn-open-ann-form" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ เพิ่มประกาศ</button>':"",s=e&&at?`
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
    </div>`:"",n=`
    <div class="flex gap-2 overflow-x-auto pb-1 mb-4">
      ${[["all","ทั้งหมด"],["urgent","ด่วน"],["ack","ต้องรับทราบ"],["info","แจ้งให้ทราบ"]].map(([l,p])=>`
        <button type="button" class="ann-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border ${rt===l?"bg-[var(--primary)] text-white border-[var(--primary)]":"bg-[var(--surface)] text-[var(--muted)] border-[var(--line)]"}" data-filter="${l}">${p}</button>`).join("")}
    </div>`;if(!r.length)return`${a}${s}${n}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีประกาศ</p>`;const o=l=>{var q,L;const[p,u,b,h]=er[l.type]??er.info,f=(q=l.teachers)!=null&&q.full_name?c(l.teachers.full_name)+" (ครู)":(L=l.students)!=null&&L.full_name?c(l.students.full_name)+" (ประธานสภา)":"ระบบ",m=oe==null?void 0:oe.has(l.id),v=l.type==="ack"&&d.role==="student"&&d.student,k=tt?tt[l.audience]??tt.all:null;return`
      <div class="rounded-xl border ${l.pinned?"border-[var(--gold-soft-line)] bg-[var(--gold-soft)]/40":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3.5 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          ${l.pinned?'<span class="text-[0.6875rem] font-bold text-[var(--gold-ink)]">📌 ปักหมุด</span>':""}
          <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${h} ${b} ${u}">${p}</span>
          ${l.audience!=="all"?`<span class="text-[0.6875rem] text-[var(--muted-2)]">สภา${j[l.audience]??""}</span>`:""}
        </div>
        <p class="text-sm font-bold text-[var(--ink)]">${c(l.title)}</p>
        ${l.body?`<p class="text-xs text-[var(--ink-2)] whitespace-pre-line">${c(l.body)}</p>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${f} · ${new Date(l.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
        ${l.type==="ack"?`<p class="text-[0.6875rem] text-[var(--muted-2)]">✋ รับทราบแล้ว ${(le==null?void 0:le[l.id])??0}${k!=null?" จาก "+k:""} คน</p>`:""}
        ${v?m?'<p class="text-xs font-bold text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">✅ รับทราบแล้ว</p>':`<button type="button" class="btn-ack-ann text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-id="${l.id}">รับทราบ</button>`:""}
      </div>`};return`${a}${s}${n}<div class="space-y-3">${r.map(o).join("")}</div>`}let Y=null,ke=null,st=null;const Os={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"],improve:["ควรปรับปรุง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft-line)] border-[var(--bad-soft-line)]"]};async function Tr(){Y=await xn().catch(()=>[]),x()}async function Rs(){const e=await _n(M).catch(()=>[]);ke=Object.fromEntries(e.map(t=>[t.member_id,t])),x()}function Br(){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📐 เกณฑ์การประเมินการปฏิบัติหน้าที่ (รวม ${Y.reduce((t,r)=>t+Number(r.weight),0)} คะแนน)</p>
      <div class="space-y-1.5">
        ${Y.map(t=>`
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
    </div>`}function Hs(){if(Y===null)return Tr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ke===null)return Rs(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.isAdmin||d.role==="teacher",t=Y.reduce((n,o)=>n+Number(o.weight),0),r=e?Br():"",a=n=>{var h,f;const o=ke[n.id],[l,p]=o!=null&&o.decision?Os[o.decision]:["ยังไม่ประเมิน","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"],u=d.role==="student"&&d.student&&n.student_id===d.student.id;if(!e&&!u)return"";const b=st===n.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-eval-card="${n.id}">
        <div class="flex items-center gap-3">
          ${B(n.students,"w-10 h-12")}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((h=n.students)==null?void 0:h.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${c(((f=n.council_positions)==null?void 0:f.position_name)??"—")}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${p}">${l}</span>
            ${(o==null?void 0:o.total_score)!=null?`<p class="text-xs text-[var(--muted-2)] mt-0.5">${o.total_score}/${o.max_score??t}</p>`:""}
          </div>
        </div>
        ${e?`<button type="button" class="btn-toggle-eval text-xs font-bold text-[var(--primary)]" data-id="${n.id}">${b?"▲ ซ่อนแบบประเมิน":o?"✏️ แก้ไขคะแนน":"📝 ให้คะแนน"}</button>`:""}
        ${e&&b?`
          <form class="eval-score-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-member-id="${n.id}">
            ${Y.map(m=>{var v;return`
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
        ${(o==null?void 0:o.decision)==="pass"?o.certificate_issued_at?`<button type="button" class="btn-view-cert text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-member-id="${n.id}">🏅 ดูเกียรติบัตร</button>`:e?`<button type="button" class="btn-issue-cert text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-member-id="${n.id}">🏅 ออกเกียรติบัตร</button>`:"":""}
      </div>`},i=d.members.filter(n=>e||d.role==="student"&&d.student&&n.student_id===d.student.id).map(a).filter(Boolean).join("");return!e&&!i?`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">คุณยังไม่ได้เป็นสมาชิกสภาที่มีผลประเมิน</p>`:i?`${r}<div class="space-y-3">${i}</div>`:`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีสมาชิกสภาให้ประเมิน</p>`}function Ws({member:e,evaluation:t,cfg:r}){var l,p;const a=c(((l=e.students)==null?void 0:l.full_name)??"—"),s=c(((p=e.council_positions)==null?void 0:p.position_name)??"—"),i=c(r.council_name||"ระบบสภานักเรียน"),n=c(t.certificate_no||""),o=new Date(t.certificate_issued_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"});return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8">
    <title>เกียรติบัตร ${a}</title>
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
        <p class="name">${a}</p>
        <p style="color:#1d1519;line-height:1.9;max-width:560px;margin:0 auto;">ได้ปฏิบัติหน้าที่ <b>${s}</b> ของ${i} ด้วยความรับผิดชอบ ทุ่มเท และเป็นแบบอย่างที่ดี จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติสืบไป</p>
        <p style="color:#90828a;font-size:12px;margin-top:16px;">ให้ไว้ ณ วันที่ ${o} ${n?"· เลขที่ "+n:""}</p>
        <div class="sign">
          <div>ครูที่ปรึกษาสภานักเรียน</div>
          <div>ผู้อำนวยการโรงเรียน</div>
        </div>
      </div>
    </body></html>`}function tr(e,t){or(Ws({member:e,evaluation:t,cfg:d.cfg}))}let z=null,J=null,Fe=null,ze=null;const Nr={draft:["ร่าง","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],pending_advisor:["รอครูที่ปรึกษาประจำฝ่ายรับรอง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_dept_head:["รอหัวหน้าฝ่ายกิจการนักเรียน","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_director:["รอผู้อำนวยการ","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],approved:["อนุมัติแล้ว","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"]};async function Fs(){z=await wn(M).catch(()=>[]),x()}async function zs(){ze=d.teacher?await vr(d.teacher.id).catch(()=>[]):[],x()}const me=e=>(e||"").split(`
`).map(t=>t.trim()).filter(Boolean),Je=(e,t)=>me(e).map(r=>{const a=r.split("|").map(s=>s.trim());for(;a.length<t;)a.push("");return a.slice(0,t)}),Ke=e=>(Array.isArray(e)?e:[]).map(t=>t.join(" | ")).join(`
`),Le=e=>(Array.isArray(e)?e:[]).join(`
`),Mr=e=>Number(e||0).toLocaleString("th-TH"),Pr=e=>(e.budget_items||[]).reduce((t,r)=>t+(Number(r[1])||0),0),pt=["title","planArea","projectType","schoolStrategy","educationStandard","responsiblePersons","rationale","objectives","goalsQuantitative","goalsQualitative","workSteps","durationText","locationText","budgetItems","stakeholders","evaluationItems","expectedResults"];function Gs(){return["คุณคือผู้ช่วยแปลงไฟล์ใบเสนอโครงการของโรงเรียน (ไฟล์ที่แนบมาในแชทนี้) ให้เป็นข้อมูล CSV ตามสเปคที่กำหนดไว้เป๊ะๆ ด้านล่างนี้ ห้ามแต่งข้อมูลขึ้นเองถ้าไม่มีในไฟล์ต้นฉบับ — เว้นว่างไว้แทน","","สร้างตาราง CSV จำนวน 1 แถวข้อมูล (แถวหัวตาราง 1 แถว + แถวข้อมูล 1 แถว) โดยแถวหัวตารางต้องเป็นข้อความนี้เป๊ะๆ (ห้ามแปล ห้ามสลับลำดับ ห้ามเว้นคอลัมน์):",pt.join(","),"","ความหมายแต่ละคอลัมน์และวิธีใส่ข้อมูล:","- title: ชื่อโครงการ","- planArea: แผนงาน","- projectType: ลักษณะโครงการ (เช่น โครงการต่อเนื่อง/โครงการใหม่)","- schoolStrategy: สนองกลยุทธ์โรงเรียน","- educationStandard: สนองมาตรฐานการศึกษา/ตัวชี้วัด","- responsiblePersons: ผู้รับผิดชอบโครงการ — ถ้ามีหลายคน ให้ขึ้นบรรทัดใหม่ทีละคนภายในเซลล์เดียวกัน","- rationale: หลักการและเหตุผล","- objectives: วัตถุประสงค์ — ขึ้นบรรทัดใหม่ทีละข้อภายในเซลล์เดียวกัน","- goalsQuantitative: เป้าหมายเชิงปริมาณ — ขึ้นบรรทัดใหม่ทีละข้อ","- goalsQualitative: เป้าหมายเชิงคุณภาพ — ขึ้นบรรทัดใหม่ทีละข้อ",'- workSteps: วิธีดำเนินงาน — แต่ละขั้นตอนขึ้นบรรทัดใหม่ 1 บรรทัดต่อ 1 ขั้นตอน แต่ละบรรทัดคั่น 4 ค่าด้วย " | " ตามลำดับ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ',"- durationText: ระยะเวลาดำเนินการโครงการโดยรวม","- locationText: สถานที่ดำเนินงาน",'- budgetItems: งบประมาณ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: รายการ | จำนวนเงิน (ตัวเลขล้วน ห้ามมีคอมมาคั่นหลักหรือคำว่า "บาท")','- stakeholders: หน่วยงาน/ผู้เกี่ยวข้อง — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: หน่วยงาน/บุคคล | จำนวน (คน)','- evaluationItems: การประเมินผลความสำเร็จ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด',"- expectedResults: ผลที่คาดว่าจะได้รับ — ขึ้นบรรทัดใหม่ทีละข้อ","","กฎสำคัญที่ต้องทำตามเป๊ะๆ:",'1. คอลัมน์ไหนมีการขึ้นบรรทัดใหม่ภายในเซลล์ ต้องครอบข้อความทั้งเซลล์ด้วยเครื่องหมายคำพูด " " เสมอ (มาตรฐาน CSV)',"2. มีข้อมูลแค่ 1 แถวข้อมูลเท่านั้น (1 โครงการต่อ 1 ไฟล์)","3. ถ้าหาข้อมูลคอลัมน์ไหนไม่เจอในไฟล์ต้นฉบับ ให้เว้นว่างไว้ ห้ามเดาขึ้นมาเอง","4. ตอบกลับเฉพาะเนื้อหา CSV เท่านั้น ห้ามมีคำอธิบายอื่นปนอยู่ในคำตอบ ให้ครอบคำตอบทั้งหมดด้วย code block รูปแบบนี้: ```csv (เนื้อหา CSV) ```"].join(`
`)}function Us(e){let t=(e??"").trim();return t.startsWith("```")&&(t=t.replace(/^```[a-zA-Z]*\n?/,"").replace(/```\s*$/,"").trim()),t}function Vs(e){const t=[];let r=[],a="",s=!1;const i=e.replace(/\r\n/g,`
`);for(let n=0;n<i.length;n++){const o=i[n];s?o==='"'?i[n+1]==='"'?(a+='"',n++):s=!1:a+=o:o==='"'?s=!0:o===","?(r.push(a),a=""):o===`
`?(r.push(a),t.push(r),r=[],a=""):a+=o}return r.push(a),t.push(r),t.filter(n=>n.some(o=>o.trim()!==""))}function Ys(e){const t=Us(e);if(t.startsWith("{")){const n=JSON.parse(t),o={};for(const l of pt){if(!(l in n))continue;const p=n[l];o[l]=Array.isArray(p)?p.map(u=>Array.isArray(u)?u.join(" | "):String(u??"")).join(`
`):String(p??"")}return o}const r=Vs(t);if(r.length<2)throw new Error("ไม่พบข้อมูล — ต้องมีทั้งแถวหัวตารางและแถวข้อมูล");const a=r[0].map(n=>n.trim()),s=r[1],i={};return a.forEach((n,o)=>{pt.includes(n)&&(i[n]=(s[o]??"").trim())}),i}function Qs(e){const t=document.getElementById("doc-form");if(!t)return 0;let r=0;for(const a of pt){if(e[a]===void 0)continue;const s=t.elements[a];s&&(s.value=e[a],r++)}return r}function Js(){var r;(r=document.getElementById("doc-ai-import-modal"))==null||r.remove();const e=document.createElement("div");e.id="doc-ai-import-modal",e.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.querySelector("#btn-close-doc-ai-import").addEventListener("click",()=>e.remove()),e.addEventListener("click",a=>{a.target===e&&e.remove()}),e.querySelector("#btn-doc-ai-copy-prompt").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Gs()),g("คัดลอกคำสั่งแล้ว — ไปวางในแชท AI พร้อมแนบไฟล์ใบโครงการได้เลย","success")}catch{g("คัดลอกอัตโนมัติไม่ได้ — ลองคัดลอกเองจากคำสั่งที่แสดง","warning")}});const t=a=>{try{const s=Ys(a),i=Qs(s);if(!i)throw new Error("ไม่พบข้อมูลที่ตรงกับฟอร์ม ตรวจสอบว่าหัวตาราง CSV ตรงกับคำสั่งที่กำหนด");g(`นำเข้าข้อมูลแล้ว ${i} ช่อง — กรุณาตรวจสอบความถูกต้องก่อนบันทึกร่าง`,"success"),e.remove()}catch(s){g("นำเข้าข้อมูลไม่สำเร็จ: "+(s.message??""),"error")}};e.querySelector("#doc-ai-csv-file").addEventListener("change",async a=>{var i;const s=(i=a.target.files)==null?void 0:i[0];if(s)try{t(await s.text())}finally{a.target.value=""}}),e.querySelector("#btn-doc-ai-import").addEventListener("click",()=>{const a=e.querySelector("#doc-ai-paste").value;if(!a.trim()){g("กรุณาวางคำตอบจาก AI ก่อน","warning");return}t(a)})}function Ks(){return d.isCouncilAdvisor||d.isAdmin||d.isChair}function Xs(e){return e.status==="pending_advisor"&&(d.isAdmin||d.isCouncilAdvisor&&(ze==null?void 0:ze.includes(e.position_id)))}function Zs(e){return e.status==="pending_dept_head"&&(d.isAdmin||d.isStudentAffairsHead)}function ei(e){return e.status==="pending_director"&&(d.isAdmin||d.isSchoolDirector)}function ti(){if(!(d.isAdmin||d.role==="teacher"||d.isChair))return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมิน ครู หรือประธานสภาที่ล็อกอินอยู่</p>';if(z===null)return Fs(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(d.isCouncilAdvisor&&ze===null)return zs(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(J!==null)return ri();const t=Ks()?'<button type="button" id="btn-new-doc" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ ร่างเอกสารโครงการใหม่</button>':"";if(!z.length)return`${t}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีเอกสารโครงการ</p>`;const r=a=>{var o;const[s,i]=Nr[a.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],n=d.student&&a.created_by_student_id===d.student.id||d.teacher&&a.created_by_teacher_id===d.teacher.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3.5 space-y-2 bg-[var(--surface)]">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${c(a.title)}</p>
            <p class="text-xs text-[var(--muted-2)]">${(o=a.council_positions)!=null&&o.position_name?c(a.council_positions.position_name)+" · ":""}${Mr(Pr(a))} บาท</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${i}">${s}</span>
        </div>
        ${a.status==="draft"&&a.last_rejected_stage?`<p class="text-xs text-[var(--bad)] bg-[var(--bad-soft)] rounded-[10px] p-2.5">↩️ ถูกตีกลับจากขั้น${c({advisor:"ครูที่ปรึกษาประจำฝ่าย",dept_head:"หัวหน้าฝ่ายกิจการนักเรียน",director:"ผู้อำนวยการ"}[a.last_rejected_stage]??a.last_rejected_stage)}${a.last_rejection_comment?": "+c(a.last_rejection_comment):""}</p>`:""}
        <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-view-doc-detail text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">📄 ดูรายละเอียด</button>
          ${a.status==="draft"&&(n||d.isAdmin)?`<button type="button" class="btn-edit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${a.id}">✏️ แก้ไข</button>`:""}
          ${a.status==="draft"&&(n||d.isAdmin)?`<button type="button" class="btn-submit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${a.id}">📤 เสนอขออนุมัติ</button>`:""}
          ${Xs(a)||Zs(a)||ei(a)?`
            <button type="button" class="btn-approve-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white" data-id="${a.id}">✅ อนุมัติ</button>
            <button type="button" class="btn-reject-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${a.id}">❌ ไม่อนุมัติ</button>`:""}
          ${a.status==="approved"?`<button type="button" class="btn-print-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">🖨️ พิมพ์เอกสาร</button>`:""}
        </div>
      </div>`};return`${t}<div class="space-y-3">${z.map(r).join("")}</div>${ai()}`}function Or(e){try{return JSON.parse(d.cfg[e]||"[]")}catch{return[]}}function Xe({name:e,placeholder:t,configKey:r,value:a,extraClass:s=""}){const i=Or(r);return i.length?`<select name="${e}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${s}">
    <option value="">— เลือก${c(t)} —</option>
    ${i.map(n=>`<option value="${c(n)}" ${a===n?"selected":""}>${c(n)}</option>`).join("")}
  </select>`:`<input name="${e}" placeholder="${c(t)} (ยังไม่ได้ตั้งค่าตัวเลือกในหน้าตั้งค่า)" value="${c(a??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${s}" />`}function ri(){const e=J==="new",t=e?{}:z.find(s=>s.id===J)??{},r=d.isChair&&!d.isCouncilAdvisor&&!d.isAdmin?"council":t.origin??(d.isChair?"council":"teacher");R===null&&Mt();const a=R!=null&&R.length?`
    <div>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mb-1">ครูที่ปรึกษาสภานักเรียน (คลิกเพื่อเพิ่ม)</p>
      <div class="flex flex-wrap gap-1.5">
        ${R.map(s=>`<button type="button" class="doc-responsible-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition" data-name="${c(s.full_name)}">+ ${c(s.full_name)}</button>`).join("")}
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
          ${Xe({name:"planArea",placeholder:"แผนงาน",configKey:"council_doc_plan_areas",value:t.plan_area})}
          ${Xe({name:"projectType",placeholder:"ลักษณะโครงการ",configKey:"council_doc_project_types",value:t.project_type})}
        </div>
        ${Xe({name:"schoolStrategy",placeholder:"สนองกลยุทธ์โรงเรียน",configKey:"council_doc_school_strategies",value:t.school_strategy,extraClass:"w-full"})}
        ${Xe({name:"educationStandard",placeholder:"สนองมาตรฐานการศึกษา/ตัวชี้วัด",configKey:"council_doc_education_standards",value:t.education_standard,extraClass:"w-full"})}
        ${a}
        <textarea name="responsiblePersons" rows="2" placeholder="ผู้รับผิดชอบโครงการ (บรรทัดละ 1 ชื่อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Le(t.responsible_persons))}</textarea>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ฝ่ายที่รับผิดชอบ ${r==="council"?'<span class="text-[var(--bad)]">*</span>':""}</label>
          <select name="positionId" ${r==="council"?"required":""} class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— ไม่ระบุ —</option>
            ${d.positions.map(s=>`<option value="${s.id}" ${t.position_id===s.id?"selected":""}>${c(s.position_name)} (สภา${c(j[s.gender]??"")})</option>`).join("")}
          </select>
          ${r==="council"?'<p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">โครงการที่สภาริเริ่มเองต้องระบุฝ่าย เพื่อส่งให้ครูที่ปรึกษาประจำฝ่ายนั้นตรวจก่อน</p>':""}
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หลักการ วัตถุประสงค์ เป้าหมาย</p>
        <textarea name="rationale" rows="3" placeholder="หลักการและเหตุผล" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(t.rationale??"")}</textarea>
        <textarea name="objectives" rows="2" placeholder="วัตถุประสงค์ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Le(t.objectives))}</textarea>
        <textarea name="goalsQuantitative" rows="2" placeholder="เป้าหมายเชิงปริมาณ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Le(t.goals_quantitative))}</textarea>
        <textarea name="goalsQualitative" rows="2" placeholder="เป้าหมายเชิงคุณภาพ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Le(t.goals_qualitative))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">วิธีดำเนินงาน</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ</p>
        <textarea name="workSteps" rows="4" placeholder="เสนอโครงการต่อผู้บริหาร | ธ.ค.2568 | - | นายเปาซี" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Ke(t.work_steps))}</textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="durationText" placeholder="ระยะเวลาดำเนินการ" value="${c(t.duration_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <input name="locationText" placeholder="สถานที่ดำเนินงาน" value="${c(t.location_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">งบประมาณ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: รายการ | จำนวนเงิน(บาท) — รวมยอดคำนวณอัตโนมัติ</p>
        <textarea name="budgetItems" rows="4" placeholder="ค่าอาหาร 115 คน x 5 มื้อ | 17250" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Ke(t.budget_items))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หน่วยงาน/ผู้เกี่ยวข้อง</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: หน่วยงาน/บุคคล | จำนวน(คน)</p>
        <textarea name="stakeholders" rows="3" placeholder="ครูที่ปรึกษา | 9" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Ke(t.stakeholders))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">การประเมินผลความสำเร็จ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด</p>
        <textarea name="evaluationItems" rows="4" placeholder="ผู้เรียนพัฒนาศักยภาพผู้นำ | ร้อยละ 80 | ประเมินจากแบบสังเกตการณ์ | แบบสังเกตการณ์" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Ke(t.evaluation_items))}</textarea>
        <textarea name="expectedResults" rows="2" placeholder="ผลที่คาดว่าจะได้รับ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Le(t.expected_results))}</textarea>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex gap-2">
        <button type="button" id="btn-doc-form-cancel" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกร่าง</button>
      </div>
    </form>`}function Rr(e,t){var n;const r=c(t.council_name||"ระบบสภานักเรียน"),a=(o,l)=>l!=null&&l.length?`
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
    <div style="margin-bottom:12px;"><b ${i}>ฝ่ายที่รับผิดชอบ</b>${c(((n=e.council_positions)==null?void 0:n.position_name)||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>1. หลักการและเหตุผล</b>${c(e.rationale||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>2. วัตถุประสงค์</b>${s(e.objectives)}</div>
    <div style="margin-bottom:12px;"><b ${i}>3. เป้าหมาย</b>
      <div style="margin-top:4px;"><i>3.1 เชิงปริมาณ</i>${s(e.goals_quantitative)}</div>
      <div><i>3.2 เชิงคุณภาพ</i>${s(e.goals_qualitative)}</div>
    </div>
    <div style="margin-bottom:12px;"><b ${i}>4. วิธีดำเนินงาน</b>${a(["ขั้นตอน/กิจกรรม","ระยะเวลา","งบประมาณ","ผู้รับผิดชอบ"],e.work_steps)}</div>
    <div style="margin-bottom:12px;"><b ${i}>5. ระยะเวลาดำเนินการ</b>${c(e.duration_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>6. สถานที่ดำเนินงาน</b>${c(e.location_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>7. งบประมาณ</b>${a(["รายการ","จำนวนเงิน (บาท)"],e.budget_items)}<b>รวมเป็นเงิน ${Mr(Pr(e))} บาท</b></div>
    <div style="margin-bottom:12px;"><b ${i}>8. หน่วยงาน/ผู้เกี่ยวข้อง</b>${a(["หน่วยงาน/บุคคล","จำนวน (คน)"],e.stakeholders)}</div>
    <div style="margin-bottom:12px;"><b ${i}>9. การประเมินผลความสำเร็จ</b>${a(["เป้าหมาย","ตัวบ่งชี้ความสำเร็จ","วิธีวัดและประเมินผล","เครื่องมือวัด"],e.evaluation_items)}</div>
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
    </div>`}function ai(){if(!Fe)return"";const e=z.find(s=>s.id===Fe);if(!e)return"";const[t,r]=Nr[e.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],a=[e.advisor_decided_at?`✅ ครูที่ปรึกษาประจำฝ่ายรับรองแล้ว${e.advisor_comment?" — "+c(e.advisor_comment):""}`:"",e.dept_head_decided_at?`✅ หัวหน้าฝ่ายกิจการนักเรียนอนุมัติแล้ว${e.dept_head_comment?" — "+c(e.dept_head_comment):""}`:"",e.director_decided_at?`✅ ผู้อำนวยการอนุมัติแล้ว${e.director_comment?" — "+c(e.director_comment):""}`:""].filter(Boolean);return`
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
          ${Rr(e,d.cfg)}
          ${a.length?`<div style="margin-top:24px;padding-top:16px;border-top:1px dashed #ccc;"><b style="display:block;margin-bottom:6px;font-size:13px;">ประวัติการอนุมัติ</b><div style="font-size:13px;color:#106143;">${a.map(s=>`<p style="margin-bottom:2px;">${s}</p>`).join("")}</div></div>`:""}
        </div>
      </div>
    </div>`}function ni(e,t){return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>โครงการ ${c(e.title)}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Sarabun', sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.8; color: #1d1519; }
      @media print { body { padding: 0; } }
    </style></head><body>
      ${Rr(e,t)}
    </body></html>`}function rr(e){or(ni(e,d.cfg))}const ar=e=>{if(!e)return"";const t=new Date(e);if(isNaN(t))return"";const r=a=>String(a).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`};function si(){const e=d.cfg;return`
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
    </form>`}function ii(){const e={M:d.positions.filter(o=>o.gender==="M").sort((o,l)=>o.sort_order-l.sort_order),W:d.positions.filter(o=>o.gender==="W").sort((o,l)=>o.sort_order-l.sort_order)},t=o=>{const l=o==="M"?"👦 ฝ่ายชาย":"👧 ฝ่ายหญิง",p=e[o].map(u=>`
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
      </div>`},r=[],a=new Set;[...e.M,...e.W].forEach(o=>{a.has(o.position_name)||(a.add(o.position_name),r.push(o.position_name))});const s=e.M.reduce((o,l)=>o+Number(l.seats_count),0),i=e.W.reduce((o,l)=>o+Number(l.seats_count),0),n=`
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
    </div>`;return`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${t("M")}${t("W")}</div>${n}`}function oi(){if(te===null)return gr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ie===null)return On(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Y===null)return Tr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(F===null)return jr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=te.reduce((p,u)=>p+Number(u.weight),0),t=(e/2).toFixed(1),r=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎤 หัวข้อสัมภาษณ์ (รวม ${e} คะแนน · ผ่านเกณฑ์ที่ ≥ ${t})</p>
      <div class="space-y-1.5 mt-2">
        ${te.map(p=>`
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
    </div>`,a=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),s=`
    <form id="settings-video-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎬 วิดีโอแนะนำตัว</p>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)]">ความยาวไม่เกิน</span>
        <input name="council_video_max_minutes" type="number" min="1" value="${c(d.cfg.council_video_max_minutes||"3")}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
        <span class="text-xs text-[var(--muted)]">นาที</span>
      </div>
      <label class="block text-xs font-medium text-[var(--muted)]">หัวข้อที่ต้องพูด (บรรทัดละ 1 หัวข้อ)</label>
      <textarea name="council_video_brief" rows="5" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${c(a.join(`
`))}</textarea>
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,i=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">💬 ข้อความสำเร็จรูปของครูที่ปรึกษาสามัญ</p>
      <div class="space-y-1.5">
        ${ie.map(p=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${c(p.phrase)}</span>
            <button type="button" class="btn-remove-phrase text-[var(--bad)] hover:text-[#8a2f22]" data-id="${p.id}">✕</button>
          </div>`).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีข้อความ</p>'}
      </div>
      <form id="phrase-form" class="flex gap-2 mt-3">
        <input name="phrase" placeholder="เพิ่มข้อความใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`,n=(p,u)=>`
    <div>
      <label class="block text-xs font-medium text-[var(--muted)] mb-1">${p} (บรรทัดละ 1 รายการ)</label>
      <textarea name="${u}" rows="3" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${c(Or(u).join(`
`))}</textarea>
    </div>`,o=`
    <form id="settings-doc-options-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-3">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">📄 ตัวเลือกฟอร์มเอกสารโครงการ</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] -mt-2">ใช้เป็นตัวเลือกในฟอร์มร่างเอกสารโครงการ (ถ้าไม่ตั้งค่าไว้ ฟอร์มจะให้พิมพ์เองแทน)</p>
      ${n("แผนงาน","council_doc_plan_areas")}
      ${n("ลักษณะโครงการ","council_doc_project_types")}
      ${n("สนองกลยุทธ์โรงเรียน","council_doc_school_strategies")}
      ${n("สนองมาตรฐานการศึกษา/ตัวชี้วัด","council_doc_education_standards")}
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,l=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🏅 เทมเพลตเกียรติบัตรกิจกรรม</p>
      <div class="space-y-1.5 mb-3">
        ${F.map(p=>{var h;const u=(h=p.layout)==null?void 0:h.background,b=u?u.type==="image"?u.imageUrl:null:p.type==="custom"?p.background_image_url:null;return`
          <div class="flex items-center gap-2 text-xs">
            ${b?`<img src="${c(b)}" class="w-10 h-7 object-cover rounded border border-[var(--line)] flex-shrink-0" />`:`<span class="flex-shrink-0">${c((vt[p.preset_key]??"🏅").split(" ")[0])}</span>`}
            <span class="flex-1 text-[var(--ink-2)] truncate">${c(p.name)} ${p.type==="preset"?"· "+c(vt[p.preset_key]??p.preset_key):"· อัปโหลดเอง"}</span>
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
          ${Object.entries(vt).map(([p,u])=>`<option value="${p}">${c(u)}</option>`).join("")}
        </select>
        <input type="file" name="background_image" id="cert-template-file-input" accept="image/*" class="hidden w-full text-xs" />
        <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่มเทมเพลต</button>
      </form>
    </div>`;return`${r}${s}${Br()}${i}${o}${l}`}function li(){const e=jt();return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🧩 เปิด/ปิดโมดูลย่อย</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">ปิดแล้วเมนู/หน้านั้นจะหายไปทั้งระบบทันที (บันทึกอัตโนมัติเมื่อกดสวิตช์)</p>
      ${Object.entries(Pn).map(([t,r])=>`
        <label class="flex items-center justify-between gap-3 py-2 border-b border-[var(--line-soft)] last:border-0">
          <span class="text-sm text-[var(--ink-2)]">${c(r)}</span>
          <input type="checkbox" class="module-toggle w-5 h-5 flex-shrink-0" data-key="${t}" ${e[t]!==!1?"checked":""} />
        </label>`).join("")}
    </div>`}const Ve={},Ge={},fe={};async function nr(e){const[t,r,a]=await Promise.all([Pa(e).catch(()=>[]),Oa(e).catch(()=>[]),Ha(e).catch(()=>[])]);Ve[e]=t,Ge[e]=r,fe[e]=a,x()}function di(){var s;const e=d.isChair,t=d.isAdmin||d.isCouncilAdvisor;if(!e&&!t)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาหรือครูที่ปรึกษาสภา/แอดมินเท่านั้น</p>';const r='<p class="text-sm text-[var(--muted-2)] text-center py-10">⏳ กำลังโหลด...</p>';let a="";if(e){const i=de((s=d.student)==null?void 0:s.gender);if(i&&Ve[i]===void 0)nr(i),a+=r;else if(i){const n=Ve[i],o=Ge[i]||[],l=fe[i]||[],p=new Set(l.map(b=>b.application_id)),u=o.filter(b=>!p.has(b.id));a+=`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📋 เสนอคณะทำงาน — สภา${j[i]}</p>
          ${n.length?u.length?`
          <form id="nominate-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
            <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกตำแหน่งที่ว่าง —</option>
              ${n.map(b=>`<option value="${b.id}">${c(b.position_name)}</option>`).join("")}
            </select>
            <select name="applicationId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกผู้ที่ผ่านสัมภาษณ์ —</option>
              ${u.map(b=>{var h,f,m;return`<option value="${b.id}">${c(((h=b.students)==null?void 0:h.full_name)??"—")}${((m=(f=b.council_interviews)==null?void 0:f[0])==null?void 0:m.score)!=null?" (คะแนน "+b.council_interviews[0].score+")":""}</option>`}).join("")}
            </select>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เสนอต่อครูที่ปรึกษาสภา</button>
          </form>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ยังไม่มีผู้ผ่านสัมภาษณ์ที่รอเสนอ</p>':'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ตำแหน่งเต็มหมดแล้ว</p>'}
        </div>`,l.length&&(a+=`
          <div class="mb-4">
            <p class="text-xs font-bold text-[var(--muted-2)] mb-2">รอครูที่ปรึกษาสภาอนุมัติ</p>
            <div class="space-y-2">${l.map(b=>{var h,f,m,v;return`
              <div class="rounded-xl border border-[var(--gold-soft-line)] bg-[var(--gold-soft)] p-3 flex items-center gap-3">
                ${B((h=b.council_applications)==null?void 0:h.students)}
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((m=(f=b.council_applications)==null?void 0:f.students)==null?void 0:m.full_name)??"—")}</p>
                  <p class="text-xs text-[var(--muted)]">${c(((v=b.council_positions)==null?void 0:v.position_name)??"—")}</p>
                </div>
              </div>`}).join("")}</div>
          </div>`)}}return t&&(a+=["M","W"].map(i=>{if(fe[i]===void 0)return nr(i),r;const n=fe[i];return n.length?`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🗳️ รออนุมัติ — สภา${j[i]}</p>
          <div class="space-y-2.5">
            ${n.map(o=>{var l,p,u,b,h;return`
              <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] space-y-2" data-nom-card="${o.id}">
                <div class="flex items-center gap-3">
                  ${B((l=o.council_applications)==null?void 0:l.students)}
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
        </div>`:""}).join("")),a||'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีรายการรอดำเนินการ</p>'}const ci={general:si,positions:ii,criteria:oi,modules:li};function ui(){return d.isAdmin||d.isCouncilAdvisor?(Ut.some(e=>e.id===Te)||(Te="general"),`
    <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
      ${Ut.map(e=>`
        <button type="button" class="settings-tab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${e.id===Te?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="${e.id}">${c(e.label)}</button>`).join("")}
    </div>
    <div>${ci[Te]()}</div>`):'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือครูที่ปรึกษาสภาเท่านั้น</p>'}let it="duty",V=null,qe=null,xe=null;const sr=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];function Hr(){const e=new Date,t=e.getDay(),r=(t===0?-6:1)-t,a=new Date(e);return a.setDate(e.getDate()+r),a.setHours(0,0,0,0),a.toISOString().slice(0,10)}async function pi(){const e=d.membership[0];if(!e){V=[],qe=new Set,xe=[],x();return}const[t,r]=await Promise.all([Za(e.id).catch(()=>[]),nn(e.id).catch(()=>[])]);V=t,xe=r,qe=await en(t.map(a=>a.id),Hr()).catch(()=>new Set),x()}function mi(){const e=d.membership[0];return e?V===null?(pi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>'):`${`
    <div class="flex gap-2 mb-4">
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${it==="duty"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="duty">หน้าที่</button>
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${it==="work"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="work">งานของฉัน</button>
    </div>`}${it==="duty"?bi(e):vi()}`:'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>'}function bi(e){var a;const t=V.filter(s=>qe.has(s.id)).length,r=V.length?Math.round(t/V.length*100):0;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <div class="flex items-center gap-3">
        ${B(d.student,"w-14 h-18")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((a=e.council_positions)==null?void 0:a.position_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${e.source==="elected"?"🗳️ มาจากการเลือกตั้ง":"✅ ได้รับการแต่งตั้ง"} · ${e.term_start_date?new Date(e.term_start_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</p>
        </div>
      </div>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">📅 รูทีนประจำสัปดาห์นี้</p>
        <span class="text-xs font-bold text-[var(--primary)]">${t}/${V.length}</span>
      </div>
      <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-3"><div class="h-full bg-[var(--primary)]" style="width:${r}%"></div></div>
      ${V.length?`<div class="space-y-1.5">${V.map(s=>{const i=qe.has(s.id);return`
        <label class="flex items-center gap-2.5 rounded-xl border ${i?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)]"} p-2.5">
          <input type="checkbox" class="routine-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${s.id}" ${i?"checked":""} />
          <div class="min-w-0 flex-1">
            <p class="text-sm ${i?"text-[#106143] line-through":"text-[var(--ink-2)]"} truncate">${c(s.task)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${s.day_of_week!=null?sr[s.day_of_week]:""}${s.time_range?" · "+c(s.time_range):""}${s.location?" · "+c(s.location):""}</p>
          </div>
          <button type="button" class="btn-remove-routine text-[var(--bad)] text-lg leading-none flex-shrink-0" data-id="${s.id}">✕</button>
        </label>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีรูทีน — เพิ่มได้ด้านล่าง</p>'}
      <form id="routine-add-form" class="grid grid-cols-2 gap-2 mt-3">
        <select name="dayOfWeek" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— วัน (ไม่บังคับ) —</option>
          ${sr.map((s,i)=>`<option value="${i}">${s}</option>`).join("")}
        </select>
        <input name="timeRange" placeholder="เวลา เช่น 07:00-07:20" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="task" required placeholder="งานที่ต้องทำ" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="col-span-2 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">+ เพิ่มรูทีน</button>
      </form>
    </div>`}function vi(){const e=xe.filter(a=>a.status!=="done"),t=xe.filter(a=>a.status==="done"),r=a=>`
    <label class="flex items-center gap-2.5 rounded-xl border ${a.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3">
      <input type="checkbox" class="assignment-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${a.id}" ${a.status==="done"?"checked":""} />
      <div class="min-w-0 flex-1">
        <p class="text-sm ${a.status==="done"?"text-[#106143] line-through":"text-[var(--ink)]"}">${c(a.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${a.due_date?"กำหนดส่ง "+new Date(a.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${a.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${a.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
    </label>`;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 text-center">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🎫 QR เช็คอินกิจกรรมของฉัน</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">แสดงให้ผู้ดูแลกิจกรรมสแกนเพื่อเช็คอิน</p>
      <button type="button" id="btn-show-my-council-qr" class="px-6 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">แสดง QR ของฉัน</button>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📋 งานที่ได้รับมอบหมาย (${t.length}/${xe.length} เสร็จแล้ว)</p>
      ${xe.length?`<div class="space-y-2">${[...e,...t].map(r).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีงานที่ได้รับมอบหมาย</p>'}
    </div>`}function xi(e){var l;(l=document.getElementById("council-my-qr-modal"))==null||l.remove();const t=document.createElement("div");t.id="council-my-qr-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center">
      <p class="text-lg font-bold text-[var(--ink)]">🎫 QR เช็คอินของฉัน</p>
      <p class="text-sm font-semibold text-[var(--primary)] mt-1">${c(e.full_name)}</p>
      <div class="w-56 h-56 mx-auto my-4 bg-[var(--surface-2)] border border-[var(--line)] rounded-2xl flex items-center justify-center">
        <canvas id="council-my-qr-canvas" class="w-48 h-48"></canvas>
      </div>
      <p class="text-xs text-[var(--muted-2)]">หมดอายุใน <span id="council-qr-timer">60</span> วินาที (สร้างใหม่อัตโนมัติ)</p>
      <button type="button" id="btn-close-council-qr" class="w-full mt-4 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ปิด</button>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-my-qr-canvas"),a=async()=>{const p=`SQ:${e.student_code}:${Math.floor(Date.now()/1e3)}`;try{await la.toCanvas(r,p,{width:190,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch{}};a();let s=60;const i=t.querySelector("#council-qr-timer"),n=setInterval(()=>{s-=1,i&&(i.textContent=String(s)),s<=0&&(s=60,a())},1e3),o=()=>{clearInterval(n),t.remove()};t.querySelector("#btn-close-council-qr").addEventListener("click",o),t.addEventListener("click",p=>{p.target===t&&o()})}let mt=null;async function fi(){var t;const e=d.membership[0];if(!e||!d.student){mt={activities:[],myAttendance:[]},x();return}mt=await Ga(d.student.id,(t=e.council_positions)==null?void 0:t.gender,M).catch(()=>({activities:[],myAttendance:[]})),x()}const gi={planned:["ยังไม่จัด","text-[var(--gold-ink)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary)]"],completed:["เสร็จแล้ว","text-[#106143]"],cancelled:["ยกเลิก","text-[var(--muted-2)]"]};function _i(){if(!d.membership[0])return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>';if(mt===null)return fi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const{activities:t,myAttendance:r}=mt,a=new Set(r.map(b=>b.activity_id)),s=t.filter(b=>b.counts_for_evaluation),i=s.filter(b=>a.has(b.id)).length,n=s.length?Math.round(i/s.length*100):null,o=d.cfg.council_min_attendance_pct?Number(d.cfg.council_min_attendance_pct):null,l=o==null||n==null?null:n>=o,p=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📈 ผลเช็คชื่อของฉัน</p>
      ${s.length?`
        <div class="flex items-end gap-2 mb-2">
          <span class="text-3xl font-bold text-[var(--primary)]">${n}%</span>
          <span class="text-xs text-[var(--muted-2)] mb-1">${i}/${s.length} กิจกรรม</span>
        </div>
        <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-2"><div class="h-full ${l===!1?"bg-[var(--bad)]":"bg-[var(--primary)]"}" style="width:${n}%"></div></div>
        ${o!=null?`<p class="text-xs ${l?"text-[var(--ok)]":"text-[var(--bad)]"} font-bold">${l?"✅ ผ่านเกณฑ์ขั้นต่ำ":"⚠️ ยังไม่ถึงเกณฑ์ขั้นต่ำ"} ${o}%</p>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีการตั้งเกณฑ์ขั้นต่ำจากผู้ดูแล</p>'}
      `:'<p class="text-xs text-[var(--muted-2)] py-4 text-center">ยังไม่มีกิจกรรมที่นับผลในระบบ</p>'}
      <p class="text-[0.625rem] text-[var(--muted-2)] mt-2">นับจากกิจกรรมที่เกิดขึ้นแล้วและถูกตั้งค่าให้ "นับผล" เท่านั้น — ผลนี้เป็นข้อมูลให้ครูที่ปรึกษาใช้ประกอบการประเมิน ไม่ได้ตัดสินอัตโนมัติ</p>
    </div>`,u=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📅 กิจกรรม/กำหนดการ</p>
      ${t.length?`<div class="space-y-2">${t.map(b=>{const h=a.has(b.id),[f,m]=gi[b.status]??["—","text-[var(--muted)]"];return`
        <div class="flex items-center gap-3 rounded-xl border border-[var(--line-soft)] p-3">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${c(b.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${b.activity_date?new Date(b.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} · <span class="${m}">${f}</span>${b.counts_for_evaluation?"":' · <span class="text-[var(--muted-2)]">ไม่นับผล</span>'}</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${h?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--bad-soft)] text-[var(--bad)]"}">${h?"✅ เช็คชื่อแล้ว":"✗ ยังไม่เช็คชื่อ"}</span>
        </div>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-8">ยังไม่มีกิจกรรม</p>'}
    </div>`;return`${p}${u}`}const Ye={};async function yi(e){Ye[e]=await sn(e).catch(()=>[]),x()}function hi(){var n;if(!d.isChair)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาเท่านั้น</p>';const e=de((n=d.student)==null?void 0:n.gender);if(!e)return"";if(Ye[e]===void 0)return yi(e),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const t=Ye[e],r=t.filter(o=>o.status==="done").length,a=d.members.filter(o=>{var l;return((l=o.council_positions)==null?void 0:l.gender)===e}),s=`
    <form id="assignment-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2.5">
      <p class="text-sm font-bold text-[var(--ink-2)]">➕ มอบหมายงานใหม่ — สภา${j[e]}</p>
      <select name="memberId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
        <option value="">— เลือกผู้รับมอบหมาย —</option>
        ${a.map(o=>{var l,p;return`<option value="${o.id}">${c(((l=o.students)==null?void 0:l.full_name)??"—")} (${c(((p=o.council_positions)==null?void 0:p.position_name)??"")})</option>`}).join("")}
      </select>
      <textarea name="task" required rows="2" placeholder="รายละเอียดงาน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <input name="dueDate" type="date" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">มอบหมายงาน</button>
    </form>`;if(!t.length)return`${s}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีงานที่มอบหมาย</p>`;const i=o=>{var l,p,u;return`
    <div class="rounded-xl border ${o.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3 flex items-center gap-3">
      ${B((l=o.council_members)==null?void 0:l.students)}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${c(((u=(p=o.council_members)==null?void 0:p.students)==null?void 0:u.full_name)??"—")}</p>
        <p class="text-xs text-[var(--ink-2)]">${c(o.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${o.due_date?"กำหนดส่ง "+new Date(o.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <div class="flex flex-col items-end gap-1 flex-shrink-0">
        <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full ${o.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${o.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
        <button type="button" class="btn-delete-assignment text-[var(--bad)] text-xs" data-id="${o.id}">ลบ</button>
      </div>
    </div>`};return`${s}<p class="text-xs font-bold text-[var(--muted-2)] mb-2">งานทั้งหมด (${r}/${t.length} เสร็จแล้ว)</p><div class="space-y-2">${t.map(i).join("")}</div>`}let Ee=null,Se=null,Et=null;const bt={};async function Mt(){const[e,t,r]=await Promise.all([xt("council_advisor").catch(()=>[]),xt("student_affairs_head").catch(()=>[]),xt("school_director").catch(()=>[])]);R=e,Ee=t,Se=r,x()}async function wi(e){bt[e]=await vr(e).catch(()=>[]),x()}function $i(e){if(bt[e]===void 0)return wi(e),'<p class="text-xs text-[var(--muted-2)] py-2">⏳ กำลังโหลด...</p>';const t=new Set(bt[e]);return`
    <form class="advisor-dept-form mt-3 pt-3 border-t border-[var(--line-soft)]" data-teacher-id="${e}">
      <p class="text-xs font-semibold text-[var(--muted)] mb-2">ติ๊กฝ่ายที่ครูคนนี้รับผิดชอบตรวจ/รับรองเอกสารโครงการ</p>
      <div class="grid grid-cols-2 gap-1.5 mb-2">
        ${d.positions.map(r=>`
          <label class="flex items-center gap-1.5 text-xs text-[var(--ink-2)]">
            <input type="checkbox" name="pos_${r.id}" value="${r.id}" ${t.has(r.id)?"checked":""} />
            ${c(r.position_name)} (${c(j[r.gender]??"")})
          </label>`).join("")}
      </div>
      <button type="submit" class="px-4 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกฝ่าย</button>
    </form>`}function ki(e,t,r){const a=Et===e.id;return`
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
        ${r?`<button type="button" class="btn-toggle-advisor-depts text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">${a?"▲ ซ่อนฝ่ายที่ดูแล":"🏛️ ฝ่ายที่ดูแล"}</button>`:""}
        <button type="button" class="btn-remove-teacher-position text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${e.id}" data-position="${t}">ถอดถอน</button>
      </div>
      ${r&&a?$i(e.id):""}
    </div>`}function Ei(){if(!d.isAdmin)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินเท่านั้น</p>';if(R===null)return Mt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ee===null)return Sr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=`<datalist id="council-teacher-datalist">${ee.map(r=>`<option value="${c(r.full_name)} · รหัส ${r.id}"></option>`).join("")}</datalist>`,t=(r,a,s,i)=>`
    <div class="mb-5">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${r} (${a.length} คน)</p>
      <form class="perms-add-form bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 mb-2 flex gap-2" data-position="${s}">
        <input type="text" name="teacherText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครู แล้วเลือกจากรายการ..." required
          class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
      </form>
      ${a.length?`<div class="space-y-2">${a.map(n=>ki(n,s,i)).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มี</p>'}
    </div>`;return`${e}
    ${t("ครูที่ปรึกษาสภานักเรียน",R,"council_advisor",!0)}
    ${t("หัวหน้าฝ่ายกิจการนักเรียน",Ee,"student_affairs_head",!1)}
    ${t("ผู้อำนวยการ",Se,"school_director",!1)}`}function Si(e){const t=e.getContext("2d"),r=()=>{t.fillStyle="#fff",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#0f172a"};r(),t.lineWidth=4,t.lineCap="round";let a=!1,s=!1;const i=n=>{const o=e.getBoundingClientRect();return{x:(n.clientX-o.left)*e.width/o.width,y:(n.clientY-o.top)*e.height/o.height}};return e.addEventListener("pointerdown",n=>{var l;a=!0,(l=e.setPointerCapture)==null||l.call(e,n.pointerId);const o=i(n);t.beginPath(),t.moveTo(o.x,o.y)}),e.addEventListener("pointermove",n=>{if(!a)return;const o=i(n);t.lineTo(o.x,o.y),t.stroke(),s=!0}),e.addEventListener("pointerup",()=>{a=!1}),e.addEventListener("pointercancel",()=>{a=!1}),{clear:()=>{r(),s=!1},isDrawn:()=>s,toBlob:()=>new Promise(n=>e.toBlob(n,"image/png"))}}function ir(e){var s;(s=document.getElementById("council-profile-modal"))==null||s.remove();const t=document.createElement("div");t.id="council-profile-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
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
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-signature-canvas"),a=Si(r);t.querySelector("#council-signature-clear").addEventListener("click",()=>a.clear()),t.querySelector("#btn-close-council-profile").addEventListener("click",()=>t.remove()),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#council-profile-save").addEventListener("click",async()=>{var n,o;const i=t.querySelector("#council-profile-save");i.disabled=!0,i.textContent="กำลังบันทึก...";try{const l=(n=t.querySelector("#council-profile-photo-file").files)==null?void 0:n[0];if(l){const b=await Kr(e.id,l);await Tn(e.id,b),d.teacher&&d.teacher.id===e.id&&(d.teacher.image_url=b)}const u=((o=t.querySelector("#council-signature-file").files)==null?void 0:o[0])||(a.isDrawn()?await a.toBlob():null);if(u){const b=await Xr(e.id,u);await Dn(e.id,b),d.teacher&&d.teacher.id===e.id&&(d.teacher.signature_url=b)}g("บันทึกแล้ว ✅","success"),t.remove(),R=null,Ee=null,Se=null,x()}catch(l){g("บันทึกไม่สำเร็จ: "+(l.message??""),"error"),i.disabled=!1,i.textContent="บันทึก"}})}function Ai(){if(!d.teacher)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะบัญชีครูเท่านั้น</p>';const e=d.teacher;return`
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
    </div>`}const qi={overview:hr,endorse:Es,apps:ws,news:Ps,activities:js,eval:Hs,docs:ti,candidates:ms,roster:ks,result:$r,settings:ui,chairteam:di,myduty:mi,mysummary:_i,assignments:hi,peerEndorse:As,perms:Ei,myCouncilProfile:Ai,dashboard:hs},Ii={apply:{new:Zn,mine:ds},election:{status:$r}};function x(){if(Pe){Ci();return}Dt(!0);const e=Fn();e.some(r=>r.id===G)||(G="overview"),zn(e);const t=qi[G]||hr;qt.innerHTML=`<div class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-4">${t()}</div>`,Wr()}function Ci(){var r;Dt(!1);const e=Rn[Pe];e.subtabs.some(a=>a.id===ne)||(ne=e.subtabs[0].id),document.getElementById("council-view-title").textContent=e.title;const t=((r=Ii[Pe])==null?void 0:r[ne])??(()=>"");qt.innerHTML=`
    <div class="max-w-2xl mx-auto px-4 py-4">
      <div class="flex items-center gap-3 mb-4">
        <button type="button" id="btn-flow-close" title="กลับภาพรวม"
          class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
        <h2 class="text-base font-bold text-[var(--ink)]">${e.title}</h2>
      </div>
      ${e.subtabs.length>1?`
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
        ${e.subtabs.map(a=>`
          <button type="button" class="flow-subtab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${a.id===ne?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}"
            data-subtab="${a.id}">${c(a.label)}</button>`).join("")}
      </div>`:""}
      <div>${t()}</div>
    </div>`,document.getElementById("btn-flow-close").addEventListener("click",()=>{Pe=null,ne=null,Ze(),x()}),document.querySelectorAll(".flow-subtab-btn").forEach(a=>{a.addEventListener("click",()=>{ne=a.dataset.subtab,x()})}),Wr()}function Wr(){var e,t,r,a,s,i,n,o,l,p,u,b,h,f,m,v,k,q,L,S;document.querySelectorAll(".flow-entry-btn").forEach(_=>{_.addEventListener("click",()=>{Pe=_.dataset.flow,ne=null,x()})}),document.querySelectorAll(".goto-view").forEach(_=>{_.addEventListener("click",()=>{G=_.dataset.view,x()})}),document.querySelectorAll(".roster-gender-tab-btn").forEach(_=>{_.addEventListener("click",()=>{Q=_.dataset.gender,x()})}),document.querySelectorAll(".btn-view-my-app-detail").forEach(_=>{_.addEventListener("click",()=>{Re=Number(_.dataset.id),x()})}),(e=document.getElementById("btn-my-app-detail-close"))==null||e.addEventListener("click",()=>{Re=null,x()}),(t=document.getElementById("my-app-detail-backdrop"))==null||t.addEventListener("click",_=>{_.target.id==="my-app-detail-backdrop"&&(Re=null,x())}),(r=document.getElementById("btn-pick-my-app-endorser"))==null||r.addEventListener("click",_=>{_s(Number(_.target.dataset.appId),_.target.dataset.gender)}),(a=document.getElementById("btn-add-council-member"))==null||a.addEventListener("click",()=>{Jt({mode:"add",gender:Q})}),document.querySelectorAll(".btn-edit-council-member").forEach(_=>{_.addEventListener("click",()=>{var $;const w=d.members.find(E=>E.id===Number(_.dataset.id));w&&Jt({mode:"edit",gender:($=w.council_positions)==null?void 0:$.gender,member:w})})}),document.querySelectorAll(".btn-remove-council-member").forEach(_=>{_.addEventListener("click",async()=>{if(confirm("ลบสมาชิกสภาคนนี้ออกจากทำเนียบ? (จะเก็บประวัติไว้ ไม่ได้ลบข้อมูลทิ้งถาวร)"))try{await Ta(Number(_.dataset.id)),g("ลบแล้ว ✅","success"),d.members=await Ie().catch(()=>d.members),x()}catch(w){g("ลบไม่สำเร็จ: "+(w.message??""),"error")}})}),document.querySelectorAll(".btn-toggle-can-create").forEach(_=>{_.addEventListener("click",async()=>{const w=Number(_.dataset.id),$=_.dataset.value==="1";_.disabled=!0;try{await ya(w,$);const E=d.members.find(D=>D.id===w);E&&(E.can_create_activities=$);const A=d.membership.find(D=>D.id===w);A&&(A.can_create_activities=$),g($?"ให้สิทธิ์สร้างกิจกรรมแล้ว ✅":"ถอนสิทธิ์แล้ว ✅","success"),x()}catch(E){g("บันทึกไม่สำเร็จ: "+(E.message??""),"error"),_.disabled=!1}})}),document.querySelectorAll(".btn-peer-endorse").forEach(_=>{_.addEventListener("click",()=>qs(_.dataset.id))}),(s=document.getElementById("btn-open-apply"))==null||s.addEventListener("click",()=>{dt=!0;const _=Mn();O=_&&_.step>1?_:null,O||(N=Me(Ne())),x()}),(i=document.getElementById("btn-cancel-apply"))==null||i.addEventListener("click",()=>{Ze(),O=null,x()}),(n=document.getElementById("btn-apply-draft-resume"))==null||n.addEventListener("click",()=>{I={...I,...O.data},T=O.step;const _=O.certTitles||[];N=_.length?_.map(w=>({file:null,title:w||"",previewUrl:null,isPdf:!1})):Me(Ne()),O=null,x()}),(o=document.getElementById("btn-apply-draft-discard"))==null||o.addEventListener("click",()=>{Gt(),Ze(),O=null,dt=!0,x()}),(l=document.getElementById("btn-apply-back"))==null||l.addEventListener("click",()=>{T=Math.max(1,T-1),U(),x()}),(p=document.getElementById("apply-step1-form"))==null||p.addEventListener("submit",_=>{_.preventDefault();const w=_.target.positionId.value;if(!w){g("กรุณาเลือกตำแหน่ง","warning");return}I.positionId=w,T=2,U(),x()}),(u=document.getElementById("apply-step2-form"))==null||u.addEventListener("submit",_=>{_.preventDefault();const w=_.target,$=w.gpaGeneral.value,E=w.gpaReligious.value,A=w.motivation.value.trim(),D=Number($),X=Number(E);if(!$||!E||D<0||D>4||X<0||X>4){g("กรอกเกรดเฉลี่ยให้ถูกต้อง (0.00–4.00)","warning");return}const re=Number(d.cfg.council_min_gpa||2.5),P=Number(d.cfg.council_min_gpa_religious||2.5);if(D<re||X<P){g(`เกรดเฉลี่ยไม่ถึงเกณฑ์ขั้นต่ำ (สามัญ ≥ ${re}, ศาสนา ≥ ${P})`,"warning");return}if(A.length<10){g("กรุณากรอกแรงจูงใจอย่างน้อย 10 ตัวอักษร","warning");return}I.gpaGeneral=$,I.gpaReligious=E,I.motivation=A,T=3,U(),x()}),(b=document.getElementById("apply-photo"))==null||b.addEventListener("change",_=>{var $;const w=(($=_.target.files)==null?void 0:$[0])??null;be=w,K&&URL.revokeObjectURL(K),K=w?URL.createObjectURL(w):null,x()}),(h=document.getElementById("btn-apply-step3-next"))==null||h.addEventListener("click",()=>{if(!be){g("กรุณาแนบรูปถ่าย","warning");return}T=4,U(),x()}),(f=document.getElementById("apply-step4-form"))==null||f.addEventListener("submit",_=>{_.preventDefault();const w=_.target.videoUrl.value.trim();if(!/^https?:\/\//.test(w)){g("กรุณาใส่ลิงก์วิดีโอที่ถูกต้อง (ขึ้นต้นด้วย http:// หรือ https://)","warning");return}I.videoUrl=w,T=5,U(),x()}),document.querySelectorAll(".cert-title-input").forEach(_=>{_.addEventListener("input",()=>{N[+_.dataset.idx].title=_.value,U()})}),document.querySelectorAll(".cert-file-input").forEach(_=>{_.addEventListener("change",w=>{var D;const $=+_.dataset.idx,E=((D=w.target.files)==null?void 0:D[0])??null,A=N[$];A.previewUrl&&URL.revokeObjectURL(A.previewUrl),A.file=E,A.isPdf=(E==null?void 0:E.type)==="application/pdf",A.previewUrl=E&&!A.isPdf?URL.createObjectURL(E):null,x()})}),(m=document.getElementById("btn-add-cert"))==null||m.addEventListener("click",()=>{N.push(...Me(1)),U(),x()}),document.querySelectorAll(".btn-remove-cert").forEach(_=>{_.addEventListener("click",()=>{const w=+_.dataset.idx,$=N[w];$.previewUrl&&URL.revokeObjectURL($.previewUrl),N.splice(w,1),U(),x()})}),(v=document.getElementById("btn-apply-step5-next"))==null||v.addEventListener("click",()=>{const _=N.filter($=>$.file&&$.title.trim()).length,w=Ne();if(_<w){g(`กรุณาแนบเกียรติบัตร/รางวัลอย่างน้อย ${w} รายการ (พร้อมชื่อรางวัล)`,"warning");return}Tt()?T=6:ye=!0,U(),x()}),document.querySelectorAll(".btn-pick-peer-endorser").forEach(_=>{_.addEventListener("click",()=>{I.peerEndorserId=_.dataset.id,U(),x()})}),(k=document.getElementById("btn-apply-step6-next"))==null||k.addEventListener("click",()=>{if(!I.peerEndorserId){g("กรุณาเลือกพี่สภาที่ต้องการให้รับรอง","warning");return}ye=!0,U(),x()}),(q=document.getElementById("btn-apply-edit"))==null||q.addEventListener("click",()=>{ye=!1,x()}),(L=document.getElementById("apply-confirm-backdrop"))==null||L.addEventListener("click",_=>{_.target.id==="apply-confirm-backdrop"&&(ye=!1,x())}),(S=document.getElementById("btn-apply-confirm-submit"))==null||S.addEventListener("click",async()=>{const _=document.getElementById("btn-apply-confirm-submit");_.disabled=!0,_.textContent="กำลังส่ง...";try{let w=null;be&&(w=await Yr(d.student.id,be));const $=N.filter(A=>A.file&&A.title.trim()),E=await Promise.all($.map(async A=>({title:A.title.trim(),url:await Qr(d.student.id,A.file)})));await ha({studentId:d.student.id,positionId:Number(I.positionId),academicYear:Number(d.cfg.academicYear)||new Date().getFullYear()+543,motivation:I.motivation,photoUrl:w,gpaGeneral:Number(I.gpaGeneral),gpaReligious:Number(I.gpaReligious),introVideoUrl:I.videoUrl,certificates:E,requestedPeerEndorserId:I.peerEndorserId?Number(I.peerEndorserId):null}),g("ส่งใบสมัครสำเร็จ ✅","success"),Gt(),Ze(),await _r(),ne="mine",x()}catch(w){g("ส่งใบสมัครไม่สำเร็จ: "+(w.message??""),"error"),_.disabled=!1,_.textContent="✅ ยืนยันการสมัคร"}}),document.querySelectorAll(".endorse-phrase-chip").forEach(_=>{_.addEventListener("click",()=>{const w=document.querySelector(`.endorse-comment[data-id="${_.dataset.target}"]`);if(!w)return;const $=w.value.trim();w.value=$?$+" "+_.dataset.phrase:_.dataset.phrase,w.focus()})}),document.querySelectorAll(".btn-endorse-confirm").forEach(_=>{_.addEventListener("click",()=>Kt(_.dataset.id,"confirm"))}),document.querySelectorAll(".btn-endorse-decline").forEach(_=>{_.addEventListener("click",()=>Kt(_.dataset.id,"decline"))}),Ri(),Hi(),Pi(),Oi(),Mi(),Ni(),Bi(),Ti(),ji(),Di(),Li()}function Li(){var e;document.querySelectorAll(".perms-add-form").forEach(t=>{t.addEventListener("submit",async r=>{var u;r.preventDefault();const a=r.target,s=a.dataset.position,n=a.teacherText.value.trim().match(/· รหัส (\d+)$/);if(!n){g("กรุณาเลือกชื่อครูจากรายการที่แสดง","warning");return}const o=Number(n[1]);if((u={council_advisor:R,student_affairs_head:Ee,school_director:Se}[s])!=null&&u.some(b=>b.id===o)){g("ครูคนนี้อยู่ในรายชื่อนี้แล้ว","warning");return}const p=a.querySelector('button[type="submit"]');p.disabled=!0,p.textContent="กำลังบันทึก...";try{await In(o,s),g("เพิ่มแล้ว ✅","success"),R=null,Ee=null,Se=null,x()}catch(b){g("บันทึกไม่สำเร็จ: "+(b.message??""),"error"),p.disabled=!1,p.textContent="เพิ่ม"}})}),document.querySelectorAll(".btn-remove-teacher-position").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ถอดถอนออกจากรายชื่อนี้?"))try{await Cn(Number(t.dataset.id),t.dataset.position),R=null,Ee=null,Se=null,x()}catch(r){g("ถอดถอนไม่สำเร็จ: "+(r.message??""),"error")}})}),document.querySelectorAll(".btn-toggle-advisor-depts").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);Et=Et===r?null:r,x()})}),document.querySelectorAll(".advisor-dept-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const a=Number(t.dataset.teacherId),s=d.positions.filter(n=>{var o;return(o=t[`pos_${n.id}`])==null?void 0:o.checked}).map(n=>n.id),i=t.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await Ln(a,s),bt[a]=s,g("บันทึกฝ่ายที่ดูแลแล้ว ✅","success"),x()}catch(n){g("บันทึกไม่สำเร็จ: "+(n.message??""),"error"),i.disabled=!1,i.textContent="บันทึกฝ่าย"}})}),document.querySelectorAll(".btn-edit-council-profile").forEach(t=>{t.addEventListener("click",()=>{ir({id:Number(t.dataset.id),full_name:t.dataset.name,image_url:t.dataset.image||null,signature_url:t.dataset.signature||null})})}),(e=document.getElementById("btn-edit-my-council-profile"))==null||e.addEventListener("click",()=>{d.teacher&&ir(d.teacher)})}function ji(){var e,t;document.querySelectorAll(".myduty-subtab-btn").forEach(r=>{r.addEventListener("click",()=>{it=r.dataset.tab,x()})}),(e=document.getElementById("routine-add-form"))==null||e.addEventListener("submit",async r=>{r.preventDefault();const a=r.target,s=a.task.value.trim();if(!s){g("กรุณากรอกงานที่ต้องทำ","warning");return}const i=d.membership[0];try{await tn({memberId:i.id,dayOfWeek:a.dayOfWeek.value===""?null:Number(a.dayOfWeek.value),timeRange:a.timeRange.value.trim(),task:s,location:a.location.value.trim()}),V=null,x()}catch(n){g("เพิ่มไม่สำเร็จ: "+(n.message??""),"error")}}),document.querySelectorAll(".btn-remove-routine").forEach(r=>{r.addEventListener("click",async()=>{if(confirm("ลบรูทีนนี้?"))try{await rn(Number(r.dataset.id)),V=null,x()}catch(a){g("ลบไม่สำเร็จ: "+(a.message??""),"error")}})}),document.querySelectorAll(".routine-check").forEach(r=>{r.addEventListener("change",async()=>{const a=Number(r.dataset.id),s=r.checked;r.disabled=!0;try{await an({routineId:a,weekStart:Hr(),done:s}),s?qe.add(a):qe.delete(a),x()}catch(i){g("บันทึกไม่สำเร็จ: "+(i.message??""),"error"),r.checked=!s,r.disabled=!1}})}),document.querySelectorAll(".assignment-check").forEach(r=>{r.addEventListener("change",async()=>{const a=Number(r.dataset.id),s=r.checked?"done":"open";r.disabled=!0;try{await ln(a,s);const i=xe.find(n=>n.id===a);i&&(i.status=s),x()}catch(i){g("บันทึกไม่สำเร็จ: "+(i.message??""),"error"),r.checked=!r.checked,r.disabled=!1}})}),(t=document.getElementById("btn-show-my-council-qr"))==null||t.addEventListener("click",()=>{d.student&&xi(d.student)})}function Di(){var e;(e=document.getElementById("assignment-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,a=Number(r.memberId.value),s=r.task.value.trim();if(!a||!s){g("กรุณาเลือกผู้รับมอบหมายและกรอกรายละเอียดงาน","warning");return}const i=r.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await on({memberId:a,task:s,dueDate:r.dueDate.value||null,assignedByStudentId:d.student.id}),g("มอบหมายงานแล้ว ✅","success");const n=de(d.student.gender);delete Ye[n],x()}catch(n){g("บันทึกไม่สำเร็จ: "+(n.message??""),"error"),i.disabled=!1,i.textContent="มอบหมายงาน"}}),document.querySelectorAll(".btn-delete-assignment").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบงานที่มอบหมายนี้?"))try{await dn(Number(t.dataset.id));const r=de(d.student.gender);delete Ye[r],x()}catch(r){g("ลบไม่สำเร็จ: "+(r.message??""),"error")}})})}function Ti(){var e;(e=document.getElementById("nominate-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,a=Number(r.positionId.value),s=Number(r.applicationId.value);if(!a||!s){g("กรุณาเลือกตำแหน่งและผู้สมัคร","warning");return}const i=r.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังเสนอ...";try{await Ra({applicationId:s,positionId:a,proposedByStudentId:d.student.id}),g("เสนอคณะทำงานแล้ว รอครูที่ปรึกษาสภาอนุมัติ ✅","success");const n=de(d.student.gender);delete fe[n],delete Ge[n],x()}catch(n){g("เสนอไม่สำเร็จ: "+(n.message??""),"error"),i.disabled=!1,i.textContent="เสนอต่อครูที่ปรึกษาสภา"}}),document.querySelectorAll(".btn-decide-nomination").forEach(t=>{t.addEventListener("click",async()=>{var n,o;const r=Number(t.dataset.id),a=t.dataset.approve==="true",s=((n=document.querySelector(`.nom-comment[data-id="${r}"]`))==null?void 0:n.value.trim())??"";if(!a&&!s){g("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}const i=t.closest("[data-nom-card]");i==null||i.querySelectorAll("button").forEach(l=>{l.disabled=!0});try{await Wa({nominationId:r,approve:a,teacherId:((o=d.teacher)==null?void 0:o.id)??null,comment:s}),g(a?"อนุมัติแล้ว ✅":"ไม่อนุมัติแล้ว","success"),delete Ve.M,delete Ve.W,delete Ge.M,delete Ge.W,delete fe.M,delete fe.W,d.members=await Ie().catch(()=>d.members),x()}catch(l){g("บันทึกไม่สำเร็จ: "+(l.message??""),"error"),i==null||i.querySelectorAll("button").forEach(p=>{p.disabled=!1})}})})}function Bi(){var e,t,r,a,s,i;document.querySelectorAll(".settings-tab-btn").forEach(n=>{n.addEventListener("click",()=>{Te=n.dataset.tab,x()})}),(e=document.getElementById("settings-general-form"))==null||e.addEventListener("submit",async n=>{n.preventDefault();const o=n.target,l=o.querySelector('button[type="submit"]');l.disabled=!0,l.textContent="กำลังบันทึก...";try{const p={council_name:o.council_name.value.trim(),council_logo_url:o.council_logo_url.value.trim(),council_theme_side_m:o.council_theme_side_m.value,council_theme_side_w:o.council_theme_side_w.value,council_term_start_semester:o.council_term_start_semester.value.trim(),council_term_start_year:o.council_term_start_year.value.trim(),council_term_end_semester:o.council_term_end_semester.value.trim(),council_term_end_year:o.council_term_end_year.value.trim(),council_min_gpa:o.council_min_gpa.value,council_min_gpa_religious:o.council_min_gpa_religious.value,council_eligible_grade_levels:o.council_eligible_grade_levels.value.trim(),council_min_certificates:o.council_min_certificates.value,council_min_attendance_pct:o.council_min_attendance_pct.value,council_require_teacher_endorsement:o.council_require_teacher_endorsement.checked?"true":"false",council_require_peer_endorsement:o.council_require_peer_endorsement.checked?"true":"false",council_apply_opens_at:o.council_apply_opens_at.value?new Date(o.council_apply_opens_at.value).toISOString():"",council_apply_closes_at:o.council_apply_closes_at.value?new Date(o.council_apply_closes_at.value).toISOString():"",council_featured_phase:o.council_featured_phase.value,council_visible_to_all:o.council_visible_to_all.checked?"true":"false",council_test_student_codes:o.council_test_student_codes.value.trim(),council_election_thank_you_message:o.council_election_thank_you_message.value.trim(),council_signer_advisor_name:o.council_signer_advisor_name.value.trim(),council_signer_director_name:o.council_signer_director_name.value.trim()};await Qe(p),d.cfg={...d.cfg,...p},yr(d.cfg),g("บันทึกการตั้งค่าแล้ว ✅","success"),x()}catch(p){g("บันทึกไม่สำเร็จ: "+(p.message??""),"error"),l.disabled=!1,l.textContent="💾 บันทึกการตั้งค่า"}}),document.querySelectorAll(".position-row-form").forEach(n=>{n.addEventListener("submit",async o=>{o.preventDefault();const l=Number(n.dataset.id),p=n.position_name.value.trim(),u=Number(n.seats_count.value);if(!p||!u){g("กรอกชื่อและจำนวนที่นั่งให้ครบ","warning");return}try{await pa(l,{position_name:p,seats_count:u}),d.positions=await Be(),g("บันทึกแล้ว ✅","success"),x()}catch(b){g("บันทึกไม่สำเร็จ: "+(b.message??""),"error")}})}),document.querySelectorAll(".btn-delete-position").forEach(n=>{n.addEventListener("click",async()=>{if(confirm("ลบตำแหน่งนี้? (ประวัติสมาชิก/ใบสมัครเดิมจะยังอยู่)"))try{await ma(Number(n.dataset.id)),d.positions=await Be(),x()}catch(o){g("ลบไม่สำเร็จ: "+(o.message??""),"error")}})}),document.querySelectorAll(".position-add-form").forEach(n=>{n.addEventListener("submit",async o=>{o.preventDefault();const l=n.dataset.gender,p=n.position_name.value.trim(),u=Number(n.seats_count.value)||1;if(!p){g("กรอกชื่อตำแหน่ง","warning");return}try{await ua({gender:l,positionName:p,seatsCount:u,isElected:!1,sortOrder:999}),d.positions=await Be(),g("เพิ่มตำแหน่งแล้ว ✅","success"),x()}catch(b){g("เพิ่มไม่สำเร็จ: "+(b.message??""),"error")}})}),(t=document.getElementById("interview-criterion-form"))==null||t.addEventListener("submit",async n=>{n.preventDefault();const o=n.target,l=o.name.value.trim(),p=Number(o.weight.value);if(!l||!p){g("กรอกชื่อหัวข้อและคะแนนให้ครบ","warning");return}try{await va({name:l,weight:p}),te=null,x()}catch(u){g("บันทึกไม่สำเร็จ: "+(u.message??""),"error")}}),document.querySelectorAll(".btn-remove-interview-criterion").forEach(n=>{n.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้ออกจากเกณฑ์สัมภาษณ์?"))try{await xa(Number(n.dataset.id)),te=null,x()}catch(o){g("ลบไม่สำเร็จ: "+(o.message??""),"error")}})}),(r=document.getElementById("settings-video-form"))==null||r.addEventListener("submit",async n=>{n.preventDefault();const o=n.target,l=o.council_video_max_minutes.value.trim(),p=o.council_video_brief.value.split(`
`).map(u=>u.trim()).filter(Boolean);try{const u={council_video_max_minutes:l,council_video_brief:JSON.stringify(p)};await Qe(u),d.cfg={...d.cfg,...u},g("บันทึกแล้ว ✅","success"),x()}catch(u){g("บันทึกไม่สำเร็จ: "+(u.message??""),"error")}}),(a=document.getElementById("settings-doc-options-form"))==null||a.addEventListener("submit",async n=>{n.preventDefault();const o=n.target,l=p=>p.split(`
`).map(u=>u.trim()).filter(Boolean);try{const p={council_doc_plan_areas:JSON.stringify(l(o.council_doc_plan_areas.value)),council_doc_project_types:JSON.stringify(l(o.council_doc_project_types.value)),council_doc_school_strategies:JSON.stringify(l(o.council_doc_school_strategies.value)),council_doc_education_standards:JSON.stringify(l(o.council_doc_education_standards.value))};await Qe(p),d.cfg={...d.cfg,...p},g("บันทึกแล้ว ✅","success"),x()}catch(p){g("บันทึกไม่สำเร็จ: "+(p.message??""),"error")}}),(s=document.getElementById("phrase-form"))==null||s.addEventListener("submit",async n=>{n.preventDefault();const l=n.target.phrase.value.trim();if(l)try{await fa({phrase:l,sortOrder:(ie==null?void 0:ie.length)??0}),ie=null,x()}catch(p){g("บันทึกไม่สำเร็จ: "+(p.message??""),"error")}}),document.querySelectorAll(".btn-remove-phrase").forEach(n=>{n.addEventListener("click",async()=>{if(confirm("ลบข้อความนี้?"))try{await ga(Number(n.dataset.id)),ie=null,x()}catch(o){g("ลบไม่สำเร็จ: "+(o.message??""),"error")}})}),document.querySelectorAll(".cert-template-type-radio").forEach(n=>{n.addEventListener("change",()=>{var l,p,u;const o=((l=document.querySelector('input[name="template_type"]:checked'))==null?void 0:l.value)==="custom";(p=document.getElementById("cert-template-preset-select"))==null||p.classList.toggle("hidden",o),(u=document.getElementById("cert-template-file-input"))==null||u.classList.toggle("hidden",!o)})}),(i=document.getElementById("cert-template-form"))==null||i.addEventListener("submit",async n=>{var b,h;n.preventDefault();const o=n.target,l=o.name.value.trim();if(!l)return;const p=o.template_type.value==="custom",u=o.querySelector('button[type="submit"]');u.disabled=!0,u.textContent="กำลังบันทึก...";try{let f=null;if(p){const k=(b=o.background_image.files)==null?void 0:b[0];if(!k){g("กรุณาอัปโหลดรูปพื้นหลังเทมเพลต","warning"),u.disabled=!1,u.textContent="เพิ่มเทมเพลต";return}f=await Jr(k)}const m=p?null:o.preset_key.value,v=ta(p?"custom":m);p&&(v.background={type:"image",imageUrl:f}),await ra({name:l,type:p?"custom":"preset",presetKey:m,backgroundImageUrl:f,layout:v,createdByTeacherId:((h=d.teacher)==null?void 0:h.id)??null}),g("เพิ่มเทมเพลตแล้ว ✅","success"),F=null,x()}catch(f){g("บันทึกไม่สำเร็จ: "+(f.message??""),"error"),u.disabled=!1,u.textContent="เพิ่มเทมเพลต"}}),document.querySelectorAll(".btn-remove-cert-template").forEach(n=>{n.addEventListener("click",async()=>{if(confirm("ลบเทมเพลตนี้?"))try{await aa(Number(n.dataset.id)),F=null,x()}catch(o){g("ลบไม่สำเร็จ: "+(o.message??""),"error")}})}),document.querySelectorAll(".btn-design-cert-template").forEach(n=>{n.addEventListener("click",()=>{const o=F==null?void 0:F.find(l=>l.id===Number(n.dataset.id));o&&oa({template:o,previewVariables:{reason:"เข้าร่วมกิจกรรมตัวอย่างจนสำเร็จ"},placeholderTokens:[{token:"{{reason}}",label:"เหตุผล/รายละเอียด"}],onSave:async(l,p)=>{await na({id:o.id,layout:l,backgroundImageUrl:p}),g("บันทึกดีไซน์แล้ว ✅","success"),F=null,x()}})})}),document.querySelectorAll(".module-toggle").forEach(n=>{n.addEventListener("change",async()=>{const o=jt();o[n.dataset.key]=n.checked;try{await Qe({council_modules:JSON.stringify(o)}),d.cfg={...d.cfg,council_modules:JSON.stringify(o)},g(n.checked?"เปิดใช้งานแล้ว":"ปิดใช้งานแล้ว","success"),x()}catch(l){g("บันทึกไม่สำเร็จ: "+(l.message??""),"error"),n.checked=!n.checked}})})}function Ni(){var e,t,r,a,s,i,n;(e=document.getElementById("btn-new-doc"))==null||e.addEventListener("click",()=>{J="new",x()}),(t=document.getElementById("btn-doc-form-back"))==null||t.addEventListener("click",()=>{J=null,x()}),(r=document.getElementById("btn-doc-form-cancel"))==null||r.addEventListener("click",()=>{J=null,x()}),document.querySelectorAll(".btn-edit-doc").forEach(o=>{o.addEventListener("click",()=>{J=Number(o.dataset.id),x()})}),(a=document.getElementById("btn-doc-ai-import-open"))==null||a.addEventListener("click",()=>Js()),document.querySelectorAll(".doc-responsible-chip").forEach(o=>{o.addEventListener("click",()=>{const l=document.querySelector('textarea[name="responsiblePersons"]');if(!l)return;const p=l.value.split(`
`).map(u=>u.trim()).filter(Boolean);p.includes(o.dataset.name)||p.push(o.dataset.name),l.value=p.join(`
`)})}),(s=document.getElementById("doc-form"))==null||s.addEventListener("submit",async o=>{o.preventDefault();const l=o.target,p=l.title.value.trim();if(!p){g("กรุณากรอกชื่อโครงการ","warning");return}const u=l.dataset.origin,b=l.positionId.value?Number(l.positionId.value):null;if(u==="council"&&!b){g("กรุณาเลือกฝ่ายที่รับผิดชอบ (ใช้ส่งให้ครูที่ปรึกษาประจำฝ่ายตรวจ)","warning");return}const h={title:p,planArea:l.planArea.value.trim(),projectType:l.projectType.value.trim(),schoolStrategy:l.schoolStrategy.value.trim(),educationStandard:l.educationStandard.value.trim(),responsiblePersons:me(l.responsiblePersons.value),positionId:b,rationale:l.rationale.value.trim(),objectives:me(l.objectives.value),goalsQuantitative:me(l.goalsQuantitative.value),goalsQualitative:me(l.goalsQualitative.value),workSteps:Je(l.workSteps.value,4),durationText:l.durationText.value.trim(),locationText:l.locationText.value.trim(),budgetItems:Je(l.budgetItems.value,2),stakeholders:Je(l.stakeholders.value,2),evaluationItems:Je(l.evaluationItems.value,4),expectedResults:me(l.expectedResults.value)},f=l.querySelector('button[type="submit"]');f.disabled=!0,f.textContent="กำลังบันทึก...";try{J==="new"?await $n({...h,origin:u,academicYear:M,createdByStudentId:u==="council"&&d.student?d.student.id:null,createdByTeacherId:u==="teacher"&&d.teacher?d.teacher.id:null}):await kn(J,h),g("บันทึกร่างแล้ว ✅","success"),z=null,J=null,x()}catch(m){g("บันทึกไม่สำเร็จ: "+(m.message??""),"error"),f.disabled=!1,f.textContent="💾 บันทึกร่าง"}}),document.querySelectorAll(".btn-submit-doc").forEach(o=>{o.addEventListener("click",async()=>{o.disabled=!0;try{await En(Number(o.dataset.id)),z=null,x()}catch(l){g("บันทึกไม่สำเร็จ: "+(l.message??""),"error"),o.disabled=!1}})}),document.querySelectorAll(".btn-approve-doc, .btn-reject-doc").forEach(o=>{o.addEventListener("click",async()=>{var h,f,m;const l=o.classList.contains("btn-approve-doc"),p=Number(o.dataset.id),u=z.find(v=>v.id===p);if(!u)return;const b=prompt(l?"ความเห็นประกอบ (ถ้ามี)":"เหตุผลที่ไม่อนุมัติ (จำเป็นต้องระบุ)")??"";if(!l&&!b.trim()){g("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}o.disabled=!0;try{const v=((h=d.teacher)==null?void 0:h.id)??null;u.status==="pending_advisor"?await Sn({id:p,approve:l,teacherId:v,comment:b.trim()}):u.status==="pending_dept_head"?await An({id:p,approve:l,teacherId:v,comment:b.trim(),signatureUrl:((f=d.teacher)==null?void 0:f.signature_url)??null}):u.status==="pending_director"&&await qn({id:p,approve:l,teacherId:v,comment:b.trim(),signatureUrl:((m=d.teacher)==null?void 0:m.signature_url)??null}),g(l?"อนุมัติแล้ว ✅":"ตีกลับให้แก้ไขแล้ว","success"),z=null,x()}catch(v){g("บันทึกไม่สำเร็จ: "+(v.message??""),"error"),o.disabled=!1}})}),document.querySelectorAll(".btn-print-doc").forEach(o=>{o.addEventListener("click",()=>{const l=z.find(p=>p.id===Number(o.dataset.id));l&&rr(l)})}),document.querySelectorAll(".btn-view-doc-detail").forEach(o=>{o.addEventListener("click",()=>{Fe=Number(o.dataset.id),x()})}),(i=document.getElementById("btn-doc-detail-close"))==null||i.addEventListener("click",()=>{Fe=null,x()}),(n=document.getElementById("btn-doc-detail-print"))==null||n.addEventListener("click",()=>{const o=z.find(l=>l.id===Fe);o&&rr(o)})}function Mi(){var e;(e=document.getElementById("criterion-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,a=r.name.value.trim(),s=Number(r.weight.value);if(!a||!s){g("กรอกชื่อเกณฑ์และคะแนนให้ครบ","warning");return}try{await fn({name:a,weight:s}),Y=null,x()}catch(i){g("บันทึกไม่สำเร็จ: "+(i.message??""),"error")}}),document.querySelectorAll(".btn-remove-criterion").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบเกณฑ์นี้ออกจากการประเมิน?"))try{await gn(Number(t.dataset.id)),Y=null,x()}catch(r){g("ลบไม่สำเร็จ: "+(r.message??""),"error")}})}),document.querySelectorAll(".btn-toggle-eval").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);st=st===r?null:r,x()})}),document.querySelectorAll(".eval-score-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const a=Number(t.dataset.memberId),s=t.decision.value;if(!s){g("กรุณาเลือกสรุปผล","warning");return}const i={};let n=0;Y.forEach(p=>{var b;const u=(b=t[`c_${p.id}`])==null?void 0:b.value;u!==""&&u!=null&&(i[p.id]=Number(u),n+=Number(u))});const o=Y.reduce((p,u)=>p+Number(u.weight),0),l=t.querySelector('button[type="submit"]');l.disabled=!0,l.textContent="กำลังบันทึก...";try{await yn({memberId:a,academicYear:M,scores:i,totalScore:n,maxScore:o,decision:s,comment:t.comment.value.trim(),evaluatorTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null}),g("บันทึกผลประเมินแล้ว ✅","success"),ke=null,st=null,x()}catch(p){g("บันทึกไม่สำเร็จ: "+(p.message??""),"error"),l.disabled=!1,l.textContent="บันทึกผลประเมิน"}})}),document.querySelectorAll(".btn-issue-cert").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.memberId),a=d.members.find(i=>i.id===r),s=ke[r];if(!(!a||!s)){t.disabled=!0,t.textContent="กำลังออก...";try{const i=`${M}-${String(s.id).padStart(4,"0")}`;await hn({evaluationId:s.id,certificateNo:i}),s.certificate_no=i,s.certificate_issued_at=new Date().toISOString(),tr(a,s),x()}catch(i){g("ออกเกียรติบัตรไม่สำเร็จ: "+(i.message??""),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}}})}),document.querySelectorAll(".btn-view-cert").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.memberId),a=d.members.find(i=>i.id===r),s=ke[r];a&&s&&tr(a,s)})})}function Pi(){var e;(e=document.getElementById("activity-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,a=r.title.value.trim();if(!a){g("กรุณากรอกชื่อกิจกรรม","warning");return}const s=r.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="กำลังบันทึก...";try{await za({title:a,detail:r.detail.value.trim(),gender:r.gender.value||null,activityDate:r.activity_date.value||null,budget:r.budget.value?Number(r.budget.value):null,ownerText:r.owner_text.value.trim(),academicYear:M,openToGeneral:r.open_to_general.checked,ownerMemberId:r.owner_member_id.value?Number(r.owner_member_id.value):null,countsForEvaluation:r.counts_for_evaluation.checked}),g("สร้างกิจกรรมแล้ว ✅","success"),H=null,x()}catch(i){g("บันทึกไม่สำเร็จ: "+(i.message??""),"error"),s.disabled=!1,s.textContent="สร้างกิจกรรม"}}),document.querySelectorAll(".btn-activity-next").forEach(t=>{t.addEventListener("click",async()=>{t.disabled=!0;try{await zt(Number(t.dataset.id),t.dataset.next),H=null,x()}catch(r){g("บันทึกไม่สำเร็จ: "+(r.message??""),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cancel").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ยืนยันยกเลิกกิจกรรมนี้?")){t.disabled=!0;try{await zt(Number(t.dataset.id),"cancelled"),H=null,x()}catch(r){g("บันทึกไม่สำเร็จ: "+(r.message??""),"error"),t.disabled=!1}}})}),document.querySelectorAll(".btn-activity-attendance").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);se[r]===void 0&&Zt(r)})}),document.querySelectorAll(".btn-activity-scan").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.id);se[r]===void 0&&await Zt(r);const a=H.find(i=>i.id===r),s=d.members.filter(i=>{var n;return!(a!=null&&a.gender)||((n=i.council_positions)==null?void 0:n.gender)===a.gender});Nn({activityId:r,activityTitle:t.dataset.title,openToGeneral:!!t.dataset.openGeneral,members:s,alreadyChecked:se[r],onCheckedIn:i=>{var n;(n=se[r])==null||n.add(i),x()},onUndo:i=>{var n;(n=se[r])==null||n.delete(i),x()}})})}),document.querySelectorAll(".btn-checkin").forEach(t=>{t.addEventListener("click",async()=>{var s;const r=Number(t.dataset.activityId),a=Number(t.dataset.studentId);t.disabled=!0;try{await br({activityId:r,studentId:a}),(s=se[r])==null||s.add(a),x()}catch(i){g("เช็คชื่อไม่สำเร็จ: "+(i.message??""),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cert-manage").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);wt=wt===r?null:r,x()})}),document.querySelectorAll(".cert-rule-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const a=r.target,s=Number(a.dataset.activityId),i=a.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await Ja({activityId:s,templateId:a.template_id.value?Number(a.template_id.value):null,minAttendanceCount:a.min_attendance_count.value?Number(a.min_attendance_count.value):null,requiredDates:me(a.required_dates.value),notes:a.notes.value.trim()}),g("บันทึกเงื่อนไขแล้ว ✅","success"),delete $e[s],x()}catch(n){g("บันทึกไม่สำเร็จ: "+(n.message??""),"error"),i.disabled=!1,i.textContent="บันทึกเงื่อนไข"}})}),document.querySelectorAll(".btn-cert-override").forEach(t=>{t.addEventListener("click",async()=>{var i,n;const r=Number(t.dataset.activityId),a=Number(t.dataset.studentId),s=t.dataset.decision||null;t.disabled=!0;try{await Xa({activityId:r,studentId:a,decision:s,decidedByTeacherId:((i=d.teacher)==null?void 0:i.id)??null,decidedByMemberId:((n=d.membership[0])==null?void 0:n.id)??null}),delete Ct[r],Dr(r)}catch(o){g("บันทึกไม่สำเร็จ: "+(o.message??""),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-cert-issue").forEach(t=>{t.addEventListener("click",async()=>{var l,p;const r=Number(t.dataset.activityId),a=Number(t.dataset.studentId),s=H.find(u=>u.id===r),i=$e[r],o=(l=(Lt[r]??[]).find(u=>u.student_id===a))==null?void 0:l.students;if(!(i!=null&&i.template_id)){g("กรุณาเลือกเทมเพลตเกียรติบัตรก่อน","warning");return}t.disabled=!0,t.textContent="กำลังออก...";try{const u=await Zr({templateId:i.template_id,recipientType:"student",studentId:a,recipientName:(o==null?void 0:o.full_name)??"—",variables:{reason:`เข้าร่วมกิจกรรม "${(s==null?void 0:s.title)??""}" ของสภานักเรียนจนสำเร็จ`},title:(s==null?void 0:s.title)??null,issuedByTeacherId:((p=d.teacher)==null?void 0:p.id)??null,sourceSystem:"council_activity",sourceRefId:r});He[r]={...He[r]??{},[a]:u},x()}catch(u){g("ออกเกียรติบัตรไม่สำเร็จ: "+(u.message??""),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}})}),document.querySelectorAll(".btn-cert-view").forEach(t=>{t.addEventListener("click",()=>{var i;const r=Number(t.dataset.activityId),a=Number(t.dataset.studentId),s=(i=He[r])==null?void 0:i[a];s&&ea({layout:s.layout_snapshot,variables:{name:s.recipient_name??"",date:new Date(s.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:s.certificate_no,...s.variables},docTitle:s.title})})})}function Oi(){var e,t,r;(e=document.getElementById("btn-open-ann-form"))==null||e.addEventListener("click",()=>{at=!0,x()}),(t=document.getElementById("btn-cancel-ann"))==null||t.addEventListener("click",()=>{at=!1,x()}),document.querySelectorAll(".ann-filter-btn").forEach(a=>{a.addEventListener("click",()=>{rt=a.dataset.filter,x()})}),(r=document.getElementById("announcement-form"))==null||r.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,i=s.title.value.trim();if(!i){g("กรุณากรอกหัวเรื่องประกาศ","warning");return}const n=s.querySelector('button[type="submit"]');n.disabled=!0,n.textContent="กำลังเผยแพร่...";try{await un({type:s.type.value,audience:s.audience.value,title:i,body:s.body.value.trim(),pinned:s.pinned.checked,postedByTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null,postedByStudentId:d.isChair&&d.student?d.student.id:null}),g("เผยแพร่ประกาศแล้ว 📣","success"),at=!1,ct=null,x()}catch(o){g("เผยแพร่ไม่สำเร็จ: "+(o.message??""),"error"),n.disabled=!1,n.textContent="เผยแพร่ประกาศ"}}),document.querySelectorAll(".btn-ack-ann").forEach(a=>{a.addEventListener("click",async()=>{const s=Number(a.dataset.id);a.disabled=!0,a.textContent="กำลังบันทึก...";try{await mn({announcementId:s,studentId:d.student.id}),oe==null||oe.add(s),le&&(le[s]=(le[s]??0)+1),g("รับทราบแล้ว","success"),x()}catch(i){g("บันทึกไม่สำเร็จ: "+(i.message??""),"error"),a.disabled=!1,a.textContent="รับทราบ"}})})}function Ri(){var e,t,r,a,s,i;document.querySelectorAll(".apps-filter-btn").forEach(n=>{n.addEventListener("click",()=>{ue=n.dataset.filter,x()})}),document.querySelectorAll(".apps-gender-tab-btn").forEach(n=>{n.addEventListener("click",()=>{Z=n.dataset.gender,he="",x()})}),(e=document.getElementById("apps-grade-filter"))==null||e.addEventListener("change",n=>{et=n.target.value,x()}),(t=document.getElementById("apps-position-filter"))==null||t.addEventListener("change",n=>{he=n.target.value,x()}),(r=document.getElementById("apps-advisor-endorse-filter"))==null||r.addEventListener("change",n=>{je=n.target.value,x()}),(a=document.getElementById("apps-peer-endorse-filter"))==null||a.addEventListener("change",n=>{De=n.target.value,x()}),document.querySelectorAll(".btn-view-app-detail").forEach(n=>{n.addEventListener("click",()=>{Oe=Number(n.dataset.id),x()})}),(s=document.getElementById("btn-admin-app-detail-close"))==null||s.addEventListener("click",()=>{Oe=null,x()}),(i=document.getElementById("admin-app-detail-backdrop"))==null||i.addEventListener("click",n=>{n.target.id==="admin-app-detail-backdrop"&&(Oe=null,x())}),document.querySelectorAll(".schedule-form").forEach(n=>{n.addEventListener("submit",async o=>{o.preventDefault();const l=Number(n.dataset.appId),p=n.dataset.ivId?Number(n.dataset.ivId):null,u=n.scheduled_at.value,b=n.location.value.trim();if(!u){g("กรุณาระบุวันเวลานัดสัมภาษณ์","warning");return}const h=n.interviewerText.value.trim();let f=null;if(h){const v=h.match(/· รหัส (\d+)$/);if(!v){g("กรุณาเลือกชื่อครูจากรายการที่แสดง (หรือเว้นว่างไว้ถ้ายังไม่ระบุ)","warning");return}f=Number(v[1])}const m=n.querySelector('button[type="submit"]');m.disabled=!0,m.textContent="กำลังบันทึก...";try{const v=new Date(u).toISOString();await qa({applicationId:l,existingInterviewId:p,scheduledAt:v,location:b,interviewerTeacherId:f}),g("นัดสัมภาษณ์แล้ว ✅","success");const k=n.dataset.profileId;if(k){const q=new Date(v).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"});y.functions.invoke("send-push",{body:{title:"🗓️ นัดสัมภาษณ์สภานักเรียน",body:`${n.dataset.positionName||""} — ${q}${b?" · "+b:""}`,url:"council.html",profileIds:[k]}}).catch(()=>{})}C=null,x()}catch(v){g("บันทึกไม่สำเร็จ: "+(v.message??""),"error"),m.disabled=!1,m.textContent="บันทึกนัดสัมภาษณ์"}})}),document.querySelectorAll(".score-form").forEach(n=>{const o=Number(n.dataset.maxWeight),l=Number(n.dataset.passThreshold),p=n.querySelector(".score-total-display"),u=()=>{let b=0;n.querySelectorAll(".score-input").forEach(h=>{h.value!==""&&(b+=Number(h.value))}),p&&(p.textContent=`${b} / ${o} · ต้อง ≥ ${l} จึงผ่าน`)};n.querySelectorAll(".score-input").forEach(b=>b.addEventListener("input",u)),n.addEventListener("submit",async b=>{b.preventDefault();const h=Number(n.dataset.appId),f=n.dataset.ivId?Number(n.dataset.ivId):null;if(!f){g("ไม่พบข้อมูลการนัดสัมภาษณ์","error");return}const m={};let v=0;n.querySelectorAll(".score-input").forEach(S=>{S.value!==""&&(m[S.dataset.criterionId]=Number(S.value),v+=Number(S.value))});const k=v>=l?"pass":"fail",q=n.comment.value.trim(),L=n.querySelector('button[type="submit"]');L.disabled=!0,L.textContent="กำลังบันทึก...";try{await Ia({interviewId:f,applicationId:h,score:v,scores:m,result:k,comment:q}),g(`บันทึกผลสัมภาษณ์แล้ว ✅ (${k==="pass"?"ผ่าน":"ไม่ผ่าน"})`,"success"),C=null,x()}catch(S){g("บันทึกไม่สำเร็จ: "+(S.message??""),"error"),L.disabled=!1,L.textContent="บันทึกผล"}})}),document.querySelectorAll(".btn-promote-candidate").forEach(n=>{n.addEventListener("click",async()=>{const o=Number(n.dataset.appId),l=C==null?void 0:C.find(p=>p.id===o);if(l){n.disabled=!0,n.textContent="กำลังบันทึก...";try{const p=await pr({gender:l.council_positions.gender,academicYear:M});await Ca({applicationId:o,studentId:l.students.id,electionConfigId:p.id,campaignStatement:l.motivation,photoUrl:l.photo_url}),g("ตั้งเป็นผู้สมัครเลือกตั้งแล้ว 🗳️","success"),delete ce[l.council_positions.gender],d.elections=await ot().catch(()=>d.elections),C=null,x()}catch(p){g("บันทึกไม่สำเร็จ: "+(p.message??""),"error"),n.disabled=!1,n.textContent="🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง"}}})}),document.querySelectorAll(".btn-appoint-member").forEach(n=>{n.addEventListener("click",async()=>{var p,u;const o=Number(n.dataset.appId),l=C==null?void 0:C.find(b=>b.id===o);if(l&&confirm(`ยืนยันแต่งตั้ง ${((p=l.students)==null?void 0:p.full_name)??""} เป็น ${((u=l.council_positions)==null?void 0:u.position_name)??""}?`)){n.disabled=!0,n.textContent="กำลังบันทึก...";try{await La({applicationId:o,positionId:l.position_id,studentId:l.students.id,academicYear:M}),g("แต่งตั้งสำเร็จ ✅","success"),C=null,d.members=await Ie().catch(()=>d.members),x()}catch(b){g("บันทึกไม่สำเร็จ: "+(b.message??""),"error"),n.disabled=!1,n.textContent="✅ แต่งตั้งเข้าตำแหน่ง"}}})})}function Hi(){var e,t,r,a,s;document.querySelectorAll(".btn-create-election").forEach(i=>{i.addEventListener("click",async()=>{i.disabled=!0;try{const n=await pr({gender:i.dataset.gender,academicYear:M});d.elections=[...d.elections.filter(o=>o.id!==n.id),n],x()}catch(n){g("เปิดใช้งานไม่สำเร็จ: "+(n.message??""),"error"),i.disabled=!1}})}),document.querySelectorAll(".election-window-form").forEach(i=>{i.addEventListener("submit",async n=>{n.preventDefault();const o=Number(i.dataset.electionId),l=i.opens_at.value?new Date(i.opens_at.value).toISOString():null,p=i.closes_at.value?new Date(i.closes_at.value).toISOString():null,u=i.querySelector('button[type="submit"]');u.disabled=!0;try{await Ba({electionConfigId:o,opensAt:l,closesAt:p}),d.elections=await ot().catch(()=>d.elections),g("บันทึกช่วงเวลาแล้ว","success"),x()}catch(b){g("บันทึกไม่สำเร็จ: "+(b.message??""),"error"),u.disabled=!1}})}),document.querySelectorAll(".btn-publish-results").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("ยืนยันประกาศผลและแต่งตั้งผู้ชนะเป็นประธานสภา? การกระทำนี้ย้อนกลับไม่ได้")){i.disabled=!0,i.textContent="กำลังประกาศผล...";try{await Ma({electionConfigId:Number(i.dataset.electionId),gender:i.dataset.gender,academicYear:M}),g("ประกาศผลแล้ว 🎉","success"),d.elections=await ot().catch(()=>d.elections),d.members=await Ie().catch(()=>d.members),x()}catch(n){g("ประกาศผลไม่สำเร็จ: "+(n.message??""),"error"),i.disabled=!1,i.textContent="📢 ประกาศผล+แต่งตั้ง"}}})}),document.querySelectorAll(".candidate-card-btn").forEach(i=>{i.addEventListener("click",()=>{we={gender:i.dataset.gender,id:Number(i.dataset.id)},pe=!1,x()})}),(e=document.getElementById("btn-candidate-modal-close"))==null||e.addEventListener("click",()=>{we=null,pe=!1,x()}),(t=document.getElementById("candidate-modal-backdrop"))==null||t.addEventListener("click",i=>{i.target.id==="candidate-modal-backdrop"&&(we=null,pe=!1,x())}),(r=document.getElementById("btn-candidate-edit"))==null||r.addEventListener("click",()=>{pe=!0,x()}),(a=document.getElementById("btn-candidate-cancel-edit"))==null||a.addEventListener("click",()=>{pe=!1,x()}),(s=document.getElementById("candidate-edit-form"))==null||s.addEventListener("submit",async i=>{i.preventDefault();const n=i.target,o=Number(n.dataset.candidateId),l=n.slogan.value.trim(),p=n.vision.value.trim(),u=n.policies.value.split(`
`).map(f=>f.trim()).filter(Boolean),b=n.experience.value.split(`
`).map(f=>f.trim()).filter(Boolean),h=n.querySelector('button[type="submit"]');h.disabled=!0,h.textContent="กำลังบันทึก...";try{await Na({candidateId:o,slogan:l,vision:p,policies:u,experience:b});const{gender:f}=we;ce[f]=await St(Bt(f).id).catch(()=>ce[f]),pe=!1,g("บันทึกโปรไฟล์ผู้สมัครแล้ว ✅","success"),x()}catch(f){g("บันทึกไม่สำเร็จ: "+(f.message??""),"error"),h.disabled=!1,h.textContent="บันทึก"}})}const Wi={auto:"ตามระบบ",light:"สว่าง",dark:"มืด"},Fi={auto:"🌓",light:"☀️",dark:"🌙"};function gt(e){const t=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.toggleAttribute("data-dark",t);const r=document.getElementById("council-theme-icon"),a=document.getElementById("council-theme-label");r&&(r.textContent=Fi[e]),a&&(a.textContent=Wi[e])}function zi(){var t;const e=localStorage.getItem("council_theme")||"auto";gt(e),(t=document.getElementById("council-theme-toggle"))==null||t.addEventListener("click",()=>{const r=localStorage.getItem("council_theme")||"auto",a=r==="auto"?"light":r==="light"?"dark":"auto";localStorage.setItem("council_theme",a),gt(a)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("council_theme")||"auto")==="auto"&&gt("auto")})}zi();Hn();
