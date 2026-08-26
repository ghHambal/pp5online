// js/chat-classroom.js
// Phase 6 — แชทห้องเรียน: ครูโดเนทระดับ 3+ (หรือใช้ห้องฟรี 1 ห้อง/ภาคเรียน) คุยกับ
// นักเรียนในห้องที่สอน — ผูกกับ classes.id ตรงๆ (หน่วยเดียวกับหน้า "ห้องเรียนของฉัน")
// ใช้ร่วมกันทั้งฝั่งครู (openTeacherClassroomChat / loadTeacherClassroomAccessInto —
// ตัวหลังถูกเรียกซ้ำจาก teacher-views-donor-chat.js แท็บ "🏫 ห้องเรียน" ในปุ่มลอยเดียวกัน)
// และนักเรียน (renderStudentClassroomChat)
// เรียบง่ายกว่า donor chat โดยตั้งใจ — ไม่มีสติกเกอร์โดเนท/ประกาศปักหมุด/บันทึกโน้ต
// (ไม่ได้อยู่ในสเปคที่ขอ และนักเรียนไม่มีระดับโดเนท จึงไม่ import จาก teacher.js
// เพื่อกันดึง module graph ฝั่งครูเข้ามาที่หน้านักเรียนโดยไม่จำเป็น)
import {
  isClassroomChatUnlocked, getOrCreateClassroomChatRoomId,
  getMyClassroomFreePick, pickClassroomChatFreeRoom,
  getChatMessages, sendChatMessage, getTeacherNamesByProfileIds, getClassStudents,
} from './api.js'
import { getMyEnrolledClasses } from './student-api.js'
import { supabase } from './supabase.js'
import { showToast } from './ui.js'
import { _htmlEsc } from './teacher-views-utils.js'
import { uploadChatImage } from './storage.js'

// student.html ใช้ #stu-content เป็น container หลัก (คนละตัวกับ #main-content
// ของ teacher.html/dashboard.html) — จำลอง fallback pattern เดียวกับ setContent
// ภายใน js/student-views.js เอง เพราะฟังก์ชันนั้นเป็น local ไม่ได้ export ออกมา
function _setStudentContent(html) {
  const el = document.getElementById('stu-content') || document.getElementById('main-content')
  if (el) el.innerHTML = html
}

let _channel = null
let _pollInterval = null
let _lastMessageId = 0

function _teardown() {
  if (_channel) { supabase.removeChannel(_channel); _channel = null }
  if (_pollInterval) { clearInterval(_pollInterval); _pollInterval = null }
  _lastMessageId = 0
}
window._cleanupClassroomChat = _teardown

// ─── ฝั่งครู — ป๊อปอัพเดี่ยว เปิดจากหน้ารายละเอียดห้องเรียน (ทางลัด มี classId อยู่แล้ว) ──
export async function openTeacherClassroomChat(teacher, classId, className) {
  document.getElementById('classroom-chat-widget')?.remove()
  _teardown()

  const m = document.createElement('div')
  m.id = 'classroom-chat-widget'
  m.className = 'fixed inset-0 z-[200] flex items-center justify-center sm:p-4 bg-black/50'
  m.innerHTML = `
    <div class="bg-white sm:rounded-3xl shadow-2xl w-full h-full sm:h-auto sm:max-w-lg overflow-hidden sm:max-h-[85vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#f59e0b,#b45309);padding-top:max(1rem, env(safe-area-inset-top));" class="px-5 pb-4 flex items-center justify-between flex-shrink-0">
        <div class="min-w-0">
          <h3 class="text-white font-bold text-base">🏫 แชทห้องเรียน</h3>
          <p class="text-white/80 text-xs mt-0.5 truncate">${_htmlEsc(className ?? '')}</p>
        </div>
        <button id="classroom-chat-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div id="classroom-chat-body" class="flex-1 min-h-0 flex flex-col"></div>
    </div>`
  document.body.appendChild(m)
  m.addEventListener('click', e => { if (e.target === m) { _teardown(); m.remove() } })
  m.querySelector('#classroom-chat-close').addEventListener('click', () => { _teardown(); m.remove() })

  const bodyEl = m.querySelector('#classroom-chat-body')
  await loadTeacherClassroomAccessInto(bodyEl, teacher, classId, className, {
    onDonateClick: () => { m.remove(); document.getElementById('btn-donate-float')?.click() },
  })
}

// ─── ฝั่งครู — ตัวตรวจสิทธิ์+เรนเดอร์ ใช้ซ้ำได้ทั้งจากป๊อปอัพเดี่ยวข้างบน และแท็บ
// "🏫 ห้องเรียน" ใน widget เดียวกับ donor chat (teacher-views-donor-chat.js) ───────
export async function loadTeacherClassroomAccessInto(containerEl, teacher, classId, className, { onDonateClick } = {}) {
  const goDonate = onDonateClick ?? (() => document.getElementById('btn-donate-float')?.click())
  containerEl.innerHTML = `<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>`

  const unlocked = await isClassroomChatUnlocked(classId).catch(() => false)
  if (unlocked) {
    const roomId = await getOrCreateClassroomChatRoomId(classId).catch(() => null)
    if (!roomId) { containerEl.innerHTML = `<p class="text-center text-gray-400 py-12">เปิดห้องแชทไม่สำเร็จ</p>`; return }
    await _renderRoom(containerEl, roomId, classId, teacher.profile_id, 'teacher')
    return
  }

  const myPick = await getMyClassroomFreePick(teacher.id).catch(() => null)
  if (myPick && myPick.class_id !== classId) {
    containerEl.innerHTML = `
      <div class="p-8 text-center">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-bold text-gray-700 mb-2">ห้องนี้ยังไม่เปิดใช้งานแชท</p>
        <p class="text-sm text-gray-500 mb-4">ภาคเรียนนี้คุณใช้สิทธิ์ห้องฟรีกับ "${_htmlEsc(myPick.classes?.class_name ?? '')}" ไปแล้ว — โดเนทระดับ 3 ขึ้นไปเพื่อเปิดแชทได้ทุกห้องไม่จำกัด</p>
        <button id="btn-classroom-chat-donate" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`
    containerEl.querySelector('#btn-classroom-chat-donate')?.addEventListener('click', goDonate)
    return
  }

  // ยังไม่เคยใช้สิทธิ์ห้องฟรีภาคเรียนนี้เลย
  containerEl.innerHTML = `
    <div class="p-8 text-center">
      <p class="text-4xl mb-3">🎁</p>
      <p class="font-bold text-gray-700 mb-2">ทดลองใช้ฟรี 1 ห้อง/ภาคเรียน</p>
      <p class="text-sm text-gray-500 mb-4">ใช้สิทธิ์ห้องฟรีกับ "${_htmlEsc(className ?? '')}" เลยไหม? เลือกแล้วล็อกไว้ห้องนี้ตลอดภาคเรียน (เปลี่ยนได้ใหม่อัตโนมัติเมื่อขึ้นภาคเรียนหน้า) หรือโดเนทระดับ 3 ขึ้นไปเพื่อใช้ได้ทุกห้องไม่จำกัด</p>
      <div class="flex flex-col gap-2">
        <button id="btn-use-free-room" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">🎁 ใช้ห้องนี้ฟรี</button>
        <button id="btn-classroom-chat-donate" class="px-5 py-2.5 rounded-xl border border-amber-300 text-amber-700 hover:bg-amber-50 font-bold text-sm">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>
    </div>`
  containerEl.querySelector('#btn-classroom-chat-donate')?.addEventListener('click', goDonate)
  containerEl.querySelector('#btn-use-free-room').addEventListener('click', async (e) => {
    const btn = e.currentTarget
    btn.disabled = true
    btn.textContent = 'กำลังตั้งค่า...'
    try {
      const ok = await pickClassroomChatFreeRoom(classId)
      if (!ok) {
        showToast('มีคนเลือกห้องฟรีไปพร้อมกันแล้ว กรุณาลองใหม่', 'error')
        await loadTeacherClassroomAccessInto(containerEl, teacher, classId, className, { onDonateClick: goDonate })
        return
      }
      await loadTeacherClassroomAccessInto(containerEl, teacher, classId, className, { onDonateClick: goDonate })
    } catch (err) {
      showToast(err.message ?? 'ตั้งค่าไม่สำเร็จ', 'error')
      btn.disabled = false
      btn.textContent = '🎁 ใช้ห้องนี้ฟรี'
    }
  })
}

// ─── ฝั่งนักเรียน — เปิดจากหน้าภาพรวม (student-views.js) ─────────────────────────
export async function renderStudentClassroomChat(student) {
  _setStudentContent(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`)

  const classes = await getMyEnrolledClasses(student.id).catch(() => [])
  const checks = await Promise.all(classes.map(c => isClassroomChatUnlocked(c.id).catch(() => false)))
  const unlockedClasses = classes.filter((c, i) => checks[i])

  const heading = `<h2 class="font-bold text-gray-800 mb-4">🏫 แชทห้องเรียน</h2>`

  if (!unlockedClasses.length) {
    _setStudentContent(`
      ${heading}
      <div class="bg-white rounded-3xl border border-gray-100 p-8 text-center shadow-sm">
        <p class="text-4xl mb-3">🏫</p>
        <p class="font-bold text-gray-700 mb-2">ยังไม่มีห้องเรียนที่เปิดแชทให้ใช้งาน</p>
        <p class="text-sm text-gray-500">คุณครูวิชาไหนเปิดใช้งานแชทห้องเรียน จะขึ้นให้เห็นที่นี่โดยอัตโนมัติ</p>
      </div>`)
    return
  }

  _setStudentContent(`
    ${heading}
    <div class="flex flex-col" style="height:calc(100vh - 220px);">
      <div id="stu-classroom-chat-tabs" class="flex items-center gap-2 pb-3 overflow-x-auto flex-shrink-0"></div>
      <div id="stu-classroom-chat-body" class="flex-1 min-h-0 flex flex-col border border-gray-100 rounded-2xl overflow-hidden"></div>
    </div>`)

  const tabsEl = document.getElementById('stu-classroom-chat-tabs')
  const bodyEl = document.getElementById('stu-classroom-chat-body')

  const chipHtml = (c, active) => {
    const label = c.master_subjects?.subject_name ?? c.class_name ?? 'วิชา'
    return `<button class="stu-classroom-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${active ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}" data-class-id="${c.id}">${_htmlEsc(label)}</button>`
  }
  tabsEl.innerHTML = unlockedClasses.map((c, i) => chipHtml(c, i === 0)).join('')

  const activate = async (classId) => {
    tabsEl.querySelectorAll('.stu-classroom-chip').forEach(chip => {
      const on = chip.dataset.classId === String(classId)
      chip.className = `stu-classroom-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${on ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`
    })
    const roomId = await getOrCreateClassroomChatRoomId(classId).catch(() => null)
    if (!roomId) { bodyEl.innerHTML = `<p class="text-center text-gray-400 py-12">เปิดห้องแชทไม่สำเร็จ</p>`; return }
    await _renderRoom(bodyEl, roomId, classId, student.profile_id, 'student')
  }
  tabsEl.querySelectorAll('.stu-classroom-chip').forEach(chip =>
    chip.addEventListener('click', () => activate(chip.dataset.classId)))

  await activate(unlockedClasses[0].id)
}

// ─── ตัวแสดงห้องแชท ใช้ร่วมกันทั้งฝั่งครูและนักเรียน ─────────────────────────────
async function _renderRoom(containerEl, roomId, classId, myProfileId, viewerRole) {
  _teardown()
  containerEl.innerHTML = `
    <div id="cc-msg-list" class="flex-1 overflow-y-auto p-4 space-y-3"></div>
    <form id="cc-send-form" class="flex items-center gap-2 p-3 border-t border-gray-100 flex-shrink-0" style="padding-bottom:max(0.75rem, env(safe-area-inset-bottom));">
      <input type="file" id="cc-img-input" accept="image/*" class="hidden" />
      <button type="button" id="cc-img-btn" title="แนบรูปภาพ"
        class="w-10 h-10 flex-shrink-0 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center text-lg">📷</button>
      <input id="cc-msg-input" type="text" maxlength="2000" placeholder="พิมพ์ข้อความ..."
        class="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
      <button type="submit" class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">ส่ง</button>
    </form>`

  // โปรไฟล์นักเรียน (รูป+เลขที่+ชื่อ) ดึงจาก roster ของห้องนี้ครั้งเดียวตอนเปิดห้อง
  // เลขที่ = ลำดับหลัง sort ตาม student_code (pattern เดียวกับที่ตารางนักเรียนในหน้า
  // รายละเอียดห้องเรียนใช้อยู่แล้ว — getClassStudents คืนมาเรียงตาม student_code)
  const roster = await getClassStudents(classId).catch(() => [])
  const studentByProfile = new Map(roster.map((s, i) => [s.profile_id, { ...s, seatNo: i + 1 }]))

  const listEl = containerEl.querySelector('#cc-msg-list')
  const messages = await getChatMessages(roomId)
  await _renderMessages(listEl, messages, myProfileId, studentByProfile)
  listEl.scrollTop = listEl.scrollHeight
  _lastMessageId = messages.at(-1)?.id ?? 0

  containerEl.querySelector('#cc-send-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const input = containerEl.querySelector('#cc-msg-input')
    const body = input.value.trim()
    if (!body) return
    input.value = ''
    try {
      await sendChatMessage({ roomId, authorRole: viewerRole, body })
      await _pollNewMessages(roomId, listEl, myProfileId, studentByProfile)
    } catch (err) {
      showToast(err.message ?? 'ส่งข้อความไม่สำเร็จ', 'error')
    }
  })

  const imgInput = containerEl.querySelector('#cc-img-input')
  containerEl.querySelector('#cc-img-btn').addEventListener('click', () => imgInput.click())
  imgInput.addEventListener('change', async () => {
    const file = imgInput.files?.[0]
    imgInput.value = ''
    if (!file) return
    const btn = containerEl.querySelector('#cc-img-btn')
    btn.disabled = true
    btn.textContent = '⏳'
    try {
      const imageUrl = await uploadChatImage(roomId, file)
      await sendChatMessage({ roomId, authorRole: viewerRole, body: null, imageUrl })
      await _pollNewMessages(roomId, listEl, myProfileId, studentByProfile)
    } catch (err) {
      showToast(err.message ?? 'ส่งรูปไม่สำเร็จ', 'error')
    } finally {
      btn.disabled = false
      btn.textContent = '📷'
    }
  })

  _channel = supabase.channel(`chat-room-${roomId}`)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_messages', filter: `room_id=eq.${roomId}` },
      () => _pollNewMessages(roomId, listEl, myProfileId, studentByProfile))
    .subscribe()

  _pollInterval = setInterval(() => _pollNewMessages(roomId, listEl, myProfileId, studentByProfile), 5000)
}

async function _pollNewMessages(roomId, listEl, myProfileId, studentByProfile) {
  const all = await getChatMessages(roomId).catch(() => null)
  if (!all || !listEl.isConnected) return
  const fresh = all.filter(m => m.id > _lastMessageId)
  if (!fresh.length) return
  const wasAtBottom = listEl.scrollHeight - listEl.scrollTop - listEl.clientHeight < 60
  await _renderMessages(listEl, fresh, myProfileId, studentByProfile, { append: true })
  _lastMessageId = all.at(-1).id
  if (wasAtBottom) listEl.scrollTop = listEl.scrollHeight
}

async function _renderMessages(listEl, messages, myProfileId, studentByProfile, { append = false } = {}) {
  const teacherProfileIds = messages.filter(m => m.author_role === 'teacher').map(m => m.author_profile_id)
  const nameByProfile = await getTeacherNamesByProfileIds(teacherProfileIds)
  const html = messages.map(m => _bubbleHTML(m, myProfileId, nameByProfile, studentByProfile)).join('')
  if (append) listEl.insertAdjacentHTML('beforeend', html)
  else listEl.innerHTML = html
}

// อวตาร — ครูเป็นไอคอนธรรมดา (ยังไม่ขอรูปจริงสำหรับฝั่งครู) นักเรียนใช้รูปโปรไฟล์จริง
// + "(เลขที่) ชื่อ-สกุล" ใต้รูป ตามที่ขอ — ไม่มีสติกเกอร์โดเนท (นักเรียนไม่มีระดับโดเนท)
function _avatarHTML(m, nameByProfile, studentByProfile) {
  const isTeacher = m.author_role === 'teacher'
  if (isTeacher) {
    const displayName = nameByProfile[m.author_profile_id] ?? 'ครู'
    return `
      <div class="flex flex-col items-center w-11 flex-shrink-0">
        <div class="w-9 h-9 rounded-full flex items-center justify-center text-lg bg-white shadow-sm" style="border:2px solid #f59e0b;">🧑‍🏫</div>
        <p class="text-[9px] text-gray-400 font-semibold mt-0.5 leading-tight text-center truncate w-11" title="${_htmlEsc(displayName)}">${_htmlEsc(displayName)}</p>
      </div>`
  }
  const s = studentByProfile.get(m.author_profile_id)
  const label = s ? `(${s.seatNo}) ${s.full_name ?? ''}` : 'นักเรียน'
  const photoInner = s?.image_url
    ? `<img src="${_htmlEsc(s.image_url)}" class="w-full h-full object-cover" />`
    : '👤'
  return `
    <div class="flex flex-col items-center w-11 flex-shrink-0">
      <div class="w-9 h-9 rounded-full flex items-center justify-center text-lg bg-white shadow-sm overflow-hidden" style="border:2px solid #9ca3af;">${photoInner}</div>
      <p class="text-[9px] text-gray-400 font-semibold mt-0.5 leading-tight text-center truncate w-11" title="${_htmlEsc(label)}">${_htmlEsc(label)}</p>
    </div>`
}

function _bubbleHTML(m, myProfileId, nameByProfile, studentByProfile) {
  const isMine = m.author_profile_id === myProfileId
  const imageHtml = m.image_url
    ? `<img src="${_htmlEsc(m.image_url)}" class="rounded-xl max-w-full max-h-64 object-contain cursor-pointer mb-1" onclick="window.open('${_htmlEsc(m.image_url)}','_blank')" />`
    : ''
  const avatar = !isMine ? _avatarHTML(m, nameByProfile, studentByProfile) : ''
  return `
    <div class="flex items-end gap-2 ${isMine ? 'justify-end' : 'justify-start'}">
      ${avatar}
      <div class="max-w-[70%] ${isMine ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl px-4 py-2.5">
        ${imageHtml}
        ${m.body ? `<p class="text-sm whitespace-pre-wrap break-words">${_htmlEsc(m.body)}</p>` : ''}
      </div>
    </div>`
}
