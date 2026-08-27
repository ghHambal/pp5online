// js/teacher-views-donor-chat.js
// Phase 5 — ประกาศปักหมุด (เฉพาะกลุ่มใหญ่ แอดมินสร้าง) + บันทึกโน้ต (ทุกคน ทุกห้อง)
// ฝั่งครู: ปุ่มลอย (FAB) แบบเดียวกับ feedback widget เปิดเป็นป๊อปอัพ — ไม่ใช่เปลี่ยนหน้าเต็ม
// ฝั่งแอดมิน: หน้าเต็มในแดชบอร์ด (renderDonorChatAdmin) ต่อยอด pattern feedback-admin
import {
  checkDonorChatAccess, getDonorGroupRoomId, getChatMessages, sendChatMessage, deleteChatMessage,
  getTeacherNamesByProfileIds, getChatTiersByProfileIds, getSystemConfig,
  getMyAdminDmRoomId, getOrCreateAdminDmRoomId, getAdminDmRoomsForAdmin,
  getActiveChatAnnouncement, getChatAnnouncementHistory, createChatAnnouncement, unpinChatAnnouncement,
  getMyBookmarkedMessageIds, toggleBookmark, getMyBookmarkedMessages, getMyClasses,
} from './api.js'
import { supabase } from './supabase.js'
import { showToast, showDangerConfirm } from './ui.js'
import { setContent, setTitle, setActiveNav, _htmlEsc } from './teacher-views-utils.js'
import { uploadChatImage } from './storage.js'
import { _parseDonationStickers } from './teacher.js'

let _channel = null
let _pollInterval = null
let _lastSignature = ''

function _teardown() {
  if (_channel) { supabase.removeChannel(_channel); _channel = null }
  if (_pollInterval) { clearInterval(_pollInterval); _pollInterval = null }
  _lastSignature = ''
}
window._cleanupDonorChat = _teardown

const _fmtTime = iso => new Date(iso).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
// ลายเซ็นรายการข้อความ (id:deleted_at) ต่อกัน — ใช้เทียบว่ามีอะไรเปลี่ยนจริงก่อน
// re-render (ข้อความใหม่ หรือข้อความเดิมถูกลบ/ยกเลิกการส่ง) กันจอกระพริบ/เลื่อนโดยไม่จำเป็น
const _msgSignature = messages => messages.map(m => `${m.id}:${m.deleted_at ?? ''}`).join('|')

// แท็บ "🏫 ห้องเรียน" (ในวิดเจ็ตเดียวกัน) เปิดห้องผ่าน js/chat-classroom.js ซึ่งมี
// channel/poll ของตัวเองแยกต่างหาก — ต้อง teardown คู่กันเสมอตอนสลับแท็บ/ปิดวิดเจ็ต
function _teardownAll() {
  _teardown()
  if (typeof window._cleanupClassroomChat === 'function') {
    try { window._cleanupClassroomChat() } catch (e) {}
  }
}

const _fmtDateTime = iso => new Date(iso).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' })

// ─── ฝั่งครู — ปุ่มลอย ──────────────────────────────────────────────────────
export function injectDonorChatWidget(teacher) {
  if (!teacher?.id || document.getElementById('donor-chat-fab')) return

  const fab = document.createElement('button')
  fab.id = 'donor-chat-fab'
  fab.title = 'แชทครูผู้สนับสนุน'
  fab.className = 'fixed z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full text-white shadow-lg flex items-center justify-center overflow-hidden transition-transform hover:scale-105'
  // ซ้อนเหนือปุ่ม feedback (💬) อีกชั้น กันทับกัน
  fab.style.cssText = 'position:fixed;right:max(0.75rem, env(safe-area-inset-right));left:auto;top:auto;bottom:calc(max(0.75rem, env(safe-area-inset-bottom)) + 68px + 64px);background:linear-gradient(135deg,#f59e0b,#b45309);font-size:1.3rem;'
  fab.textContent = '👑'
  document.body.appendChild(fab)
  fab.addEventListener('click', () => openDonorChatWidget(teacher))
}

function _closeWidget() {
  _teardownAll()
  document.getElementById('donor-chat-widget')?.remove()
}

export async function openDonorChatWidget(teacher) {
  document.getElementById('donor-chat-widget')?.remove()
  _teardownAll()

  const m = document.createElement('div')
  m.id = 'donor-chat-widget'
  // มือถือ (ต่ำกว่า sm): เต็มจอสนิท ไม่มีขอบ/มุมโค้ง — desktop (sm ขึ้นไป): การ์ดลอยกลางจอเหมือนเดิม
  m.className = 'fixed inset-0 z-[200] flex items-center justify-center sm:p-4 bg-black/50'
  m.innerHTML = `
    <div class="bg-white sm:rounded-3xl shadow-2xl w-full h-full sm:h-auto sm:max-w-lg overflow-hidden sm:max-h-[85vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#f59e0b,#b45309);padding-top:max(1rem, env(safe-area-inset-top));" class="px-5 pb-4 flex items-center justify-between flex-shrink-0">
        <div class="min-w-0">
          <h3 class="text-white font-bold text-base">👑 แชทครูผู้สนับสนุน</h3>
          <p class="text-white/80 text-xs mt-0.5">กลุ่มแชทเฉพาะครูผู้สนับสนุนภาคเรียนนี้</p>
        </div>
        <div class="flex items-center gap-1 flex-shrink-0">
          <button id="donor-chat-notes-btn" class="text-white/90 hover:text-white text-xl px-1.5" title="โน้ตของฉัน">🔖</button>
          <button id="donor-chat-close" class="text-white/90 hover:text-white text-3xl leading-none px-2">&times;</button>
        </div>
      </div>
      <div id="donor-chat-body" class="flex-1 min-h-0 flex flex-col"></div>
    </div>`
  document.body.appendChild(m)
  m.addEventListener('click', e => { if (e.target === m) _closeWidget() })
  m.querySelector('#donor-chat-close').addEventListener('click', _closeWidget)

  const bodyEl = m.querySelector('#donor-chat-body')
  bodyEl.innerHTML = `<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>`

  const ok = await checkDonorChatAccess(teacher.id, 1).catch(() => false)
  if (!ok) {
    bodyEl.innerHTML = `
      <div class="p-8 text-center">
        <p class="text-4xl mb-3">⭐</p>
        <p class="font-bold text-gray-700 mb-2">สิทธิ์เฉพาะครูผู้สนับสนุน</p>
        <p class="text-sm text-gray-500 mb-4">โดเนทในภาคเรียนนี้เพื่อเข้าร่วมกลุ่มแชทครูผู้สนับสนุน พูดคุย/แลกเปลี่ยนกับครูท่านอื่น และคุยกับแอดมินได้โดยตรง</p>
        <button id="btn-donor-chat-donate" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`
    bodyEl.querySelector('#btn-donor-chat-donate')?.addEventListener('click', () => {
      _closeWidget()
      document.getElementById('btn-donate-float')?.click()
    })
    return
  }

  let activeTab = 'group'
  const showTabsUI = () => {
    bodyEl.innerHTML = `
      <div class="flex border-b border-gray-100 flex-shrink-0">
        <button class="donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition" data-tab="group">👥 กลุ่มใหญ่</button>
        <button class="donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition" data-tab="admin">🛡️ แอดมิน</button>
        <button class="donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition" data-tab="classroom">🏫 ห้องเรียน</button>
      </div>
      <div id="donor-chat-slot" class="flex-1 min-h-0 flex flex-col"></div>`
    const tabs = [...bodyEl.querySelectorAll('.donor-chat-tab')]
    const slotEl = bodyEl.querySelector('#donor-chat-slot')
    const setTab = (tab) => {
      activeTab = tab
      _teardownAll()
      tabs.forEach(t => {
        const on = t.dataset.tab === tab
        t.className = `donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition ${on ? 'text-amber-600 border-b-2 border-amber-500' : 'text-gray-400 hover:text-gray-600'}`
      })
      if (tab === 'group') _loadGroupTab(slotEl, teacher)
      else if (tab === 'admin') _loadAdminTab(slotEl, teacher)
      else _loadClassroomTab(slotEl, teacher)
    }
    tabs.forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)))
    setTab(activeTab)
  }
  showTabsUI()

  m.querySelector('#donor-chat-notes-btn').addEventListener('click', () => {
    _teardownAll()
    _renderMyNotes(bodyEl, showTabsUI)
  })
}

async function _loadGroupTab(slotEl, teacher) {
  _teardown()
  slotEl.innerHTML = `<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>`
  const roomId = await getDonorGroupRoomId()
  if (!roomId) {
    slotEl.innerHTML = `<p class="text-center text-gray-400 py-12">ไม่พบห้องแชท กรุณาติดต่อแอดมิน</p>`
    return
  }
  await _renderRoom(slotEl, roomId, { myProfileId: teacher.profile_id, sendAsRole: 'teacher', isGroupRoom: true, isAdmin: false })
}

async function _loadAdminTab(slotEl, teacher) {
  _teardown()
  slotEl.innerHTML = `<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>`
  const existingRoomId = await getMyAdminDmRoomId(teacher.id).catch(() => null)
  if (existingRoomId) {
    await _renderRoom(slotEl, existingRoomId, { myProfileId: teacher.profile_id, sendAsRole: 'teacher', isGroupRoom: false, isAdmin: false })
    return
  }
  slotEl.innerHTML = `
    <div class="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <p class="text-4xl mb-3">🛡️</p>
      <p class="font-bold text-gray-700 mb-2">ยังไม่มีแชทกับแอดมิน</p>
      <p class="text-sm text-gray-500 mb-4">เริ่มแชทส่วนตัวกับแอดมินได้เลย เห็นเฉพาะคุณครูกับแอดมินเท่านั้น</p>
      <button id="btn-create-admin-dm" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">+ เริ่มแชทกับแอดมิน</button>
    </div>`
  slotEl.querySelector('#btn-create-admin-dm').addEventListener('click', async (e) => {
    const btn = e.currentTarget
    btn.disabled = true
    btn.textContent = 'กำลังสร้าง...'
    try {
      const roomId = await getOrCreateAdminDmRoomId()
      await _renderRoom(slotEl, roomId, { myProfileId: teacher.profile_id, sendAsRole: 'teacher', isGroupRoom: false, isAdmin: false })
    } catch (err) {
      showToast(err.message ?? 'สร้างแชทไม่สำเร็จ', 'error')
      btn.disabled = false
      btn.textContent = '+ เริ่มแชทกับแอดมิน'
    }
  })
}

// ─── แท็บ "🏫 ห้องเรียน" — เลือกห้องที่สอนแล้วเปิดแชทของห้องนั้น (js/chat-classroom.js) ──
async function _loadClassroomTab(slotEl, teacher) {
  slotEl.innerHTML = `<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>`
  const classes = await getMyClasses(teacher.id).catch(() => [])
  if (!classes.length) {
    slotEl.innerHTML = `<p class="text-center text-gray-400 py-12">ยังไม่มีห้องเรียนที่สอน</p>`
    return
  }
  _renderClassPicker(slotEl, teacher, classes)
}

function _renderClassPicker(slotEl, teacher, classes) {
  slotEl.innerHTML = `
    <div class="flex-1 overflow-y-auto p-3 space-y-2">
      <p class="text-xs text-gray-400 px-1 mb-1">เลือกห้องเรียนที่จะเปิดแชท</p>
      ${classes.map(c => `
        <button type="button" class="classroom-pick-btn w-full text-left px-4 py-3 rounded-xl border border-gray-100 hover:bg-amber-50 hover:border-amber-200 transition flex items-center justify-between gap-2" data-class-id="${c.id}">
          <span class="text-sm font-semibold text-gray-700 truncate">${_htmlEsc(c.master_subjects?.subject_name ?? '—')}</span>
          <span class="text-xs text-gray-400 flex-shrink-0">${_htmlEsc(c.class_name ?? '')}</span>
        </button>`).join('')}
    </div>`
  slotEl.querySelectorAll('.classroom-pick-btn').forEach(btn => {
    const cid = parseInt(btn.dataset.classId, 10)
    const cls = classes.find(c => c.id === cid)
    const label = `${cls?.master_subjects?.subject_name ?? ''} (${cls?.class_name ?? ''})`
    btn.addEventListener('click', () => _openClassroomRoomInTab(slotEl, teacher, cid, label, classes))
  })
}

async function _openClassroomRoomInTab(slotEl, teacher, classId, className, classes) {
  slotEl.innerHTML = `
    <div class="flex items-center gap-2 px-3 py-2 border-b border-gray-100 flex-shrink-0">
      <button type="button" id="cc-back-to-list" class="text-sm text-gray-500 hover:text-gray-700 font-semibold flex-shrink-0">← เปลี่ยนห้อง</button>
      <p class="text-xs text-gray-400 truncate">${_htmlEsc(className)}</p>
    </div>
    <div id="cc-tab-room-slot" class="flex-1 min-h-0 flex flex-col"></div>`
  slotEl.querySelector('#cc-back-to-list').addEventListener('click', () => {
    if (typeof window._cleanupClassroomChat === 'function') { try { window._cleanupClassroomChat() } catch (e) {} }
    _renderClassPicker(slotEl, teacher, classes)
  })
  const roomSlot = slotEl.querySelector('#cc-tab-room-slot')
  const { loadTeacherClassroomAccessInto } = await import('./chat-classroom.js')
  await loadTeacherClassroomAccessInto(roomSlot, teacher, classId, className)
}

// ─── ฝั่งแอดมิน — หน้าเต็มในแดชบอร์ด พร้อม room switcher ─────────────────────────
export async function renderDonorChatAdmin() {
  _teardown()
  setActiveNav('donor-chat-admin')
  setTitle('💬 แชทครูผู้สนับสนุน')

  const { data: { user } } = await supabase.auth.getUser()
  const groupRoomId = await getDonorGroupRoomId()
  const dmRooms = await getAdminDmRoomsForAdmin().catch(() => [])

  const chipHtml = (id, label, active) =>
    `<button class="donor-chat-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${active ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}" data-room-id="${id}">${_htmlEsc(label)}</button>`

  setContent(`
    <div class="flex flex-col h-[75vh]">
      <div class="flex items-center gap-2 pb-3 flex-shrink-0">
        <button id="donor-chat-notes-chip" class="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50">🔖 โน้ตของฉัน</button>
        <div id="donor-chat-room-switcher" class="flex items-center gap-2 overflow-x-auto">
          ${groupRoomId ? chipHtml(groupRoomId, '👥 กลุ่มใหญ่', true) : ''}
          ${dmRooms.map(r => chipHtml(r.id, `🛡️ ${r.teachers?.full_name ?? 'ครู'}`, false)).join('')}
          ${!dmRooms.length ? `<span class="text-xs text-gray-400 flex-shrink-0">ยังไม่มีครูสร้างแชทกับแอดมิน</span>` : ''}
        </div>
      </div>
      <div id="donor-chat-admin-body" class="flex-1 min-h-0 flex flex-col border border-gray-100 rounded-2xl overflow-hidden"></div>
    </div>`)

  const switcherEl = document.getElementById('donor-chat-room-switcher')
  const bodyEl = document.getElementById('donor-chat-admin-body')
  let lastActiveRoomId = null

  const activate = async (roomId) => {
    lastActiveRoomId = roomId
    switcherEl.querySelectorAll('.donor-chat-chip').forEach(c => {
      const on = c.dataset.roomId === String(roomId)
      c.className = `donor-chat-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${on ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`
    })
    await _renderRoom(bodyEl, roomId, { myProfileId: user?.id, sendAsRole: 'admin', isGroupRoom: String(roomId) === String(groupRoomId), isAdmin: true })
  }
  switcherEl.querySelectorAll('.donor-chat-chip').forEach(c =>
    c.addEventListener('click', () => activate(c.dataset.roomId)))

  document.getElementById('donor-chat-notes-chip').addEventListener('click', () => {
    _teardown()
    _renderMyNotes(bodyEl, () => activate(lastActiveRoomId ?? groupRoomId))
  })

  if (groupRoomId) await activate(groupRoomId)
  else bodyEl.innerHTML = `<p class="text-center text-gray-400 py-12">ไม่พบห้องแชท</p>`
}

// ─── ตัวแสดงห้องแชท ใช้ร่วมกันทั้งป๊อปอัพครูและหน้าแอดมิน ───────────────────────
async function _renderRoom(containerEl, roomId, { myProfileId, sendAsRole, isGroupRoom, isAdmin }) {
  _teardown()
  containerEl.innerHTML = `
    ${isGroupRoom ? `<div id="chat-announcement-banner" class="flex-shrink-0"></div>` : ''}
    <div id="chat-msg-list" class="flex-1 overflow-y-auto p-4 space-y-3"></div>
    <form id="chat-send-form" class="flex items-center gap-2 p-3 border-t border-gray-100 flex-shrink-0" style="padding-bottom:max(0.75rem, env(safe-area-inset-bottom));">
      <input type="file" id="chat-img-input" accept="image/*" class="hidden" />
      <button type="button" id="chat-img-btn" title="แนบรูปภาพ"
        class="w-10 h-10 flex-shrink-0 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center text-lg">📷</button>
      <input id="chat-msg-input" type="text" maxlength="2000" placeholder="พิมพ์ข้อความ..."
        class="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
      <button type="submit" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">ส่ง</button>
    </form>`

  if (isGroupRoom) _renderAnnouncementBanner(containerEl, roomId, isAdmin)

  // ดึง cfg + สติกเกอร์ครั้งเดียวตอนเปิดห้อง (ไม่ผูกกับ window._pp5DonorTierIndex ที่เป็นยอดสะสมตลอดชีพ)
  const cfg = await getSystemConfig().catch(() => ({}))
  const stickerTiers = _parseDonationStickers(cfg)

  const listEl = containerEl.querySelector('#chat-msg-list')
  const messages = await getChatMessages(roomId)
  await _renderMessages(listEl, messages, myProfileId, stickerTiers, isAdmin)
  listEl.scrollTop = listEl.scrollHeight
  _lastSignature = _msgSignature(messages)

  listEl.addEventListener('click', async (e) => {
    const bmBtn = e.target.closest('.bm-toggle')
    if (bmBtn) {
      const messageId = parseInt(bmBtn.dataset.messageId, 10)
      const wasBookmarked = bmBtn.dataset.bookmarked === '1'
      bmBtn.disabled = true
      try {
        const nowBookmarked = await toggleBookmark(messageId, wasBookmarked)
        bmBtn.dataset.bookmarked = nowBookmarked ? '1' : '0'
        bmBtn.className = `bm-toggle text-xs px-1 ${nowBookmarked ? 'text-amber-500' : 'text-gray-300 hover:text-gray-400'}`
        bmBtn.title = nowBookmarked ? 'เอาออกจากโน้ตของฉัน' : 'บันทึกโน้ต'
      } catch (err) {
        showToast(err.message ?? 'บันทึกโน้ตไม่สำเร็จ', 'error')
      } finally {
        bmBtn.disabled = false
      }
      return
    }
    const delBtn = e.target.closest('.msg-delete-btn')
    if (delBtn) {
      const messageId = parseInt(delBtn.dataset.messageId, 10)
      const isOwn = delBtn.dataset.own === '1'
      const ok = await showDangerConfirm({
        title: isOwn ? 'ยกเลิกการส่งข้อความนี้?' : 'ลบข้อความนี้?',
        message: isOwn ? 'เพื่อนในแชทจะเห็นว่าข้อความนี้ถูกยกเลิกการส่งแล้ว' : 'ข้อความจะถูกลบออกจากแชท (กู้คืนไม่ได้)',
        confirmText: isOwn ? 'ยกเลิกการส่ง' : 'ลบเลย',
      })
      if (!ok) return
      try {
        await deleteChatMessage(messageId)
        await _refreshMessages(roomId, listEl, myProfileId, stickerTiers, isAdmin, { force: true })
      } catch (err) {
        showToast(err.message ?? 'ลบข้อความไม่สำเร็จ', 'error')
      }
    }
  })

  containerEl.querySelector('#chat-send-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const input = containerEl.querySelector('#chat-msg-input')
    const body = input.value.trim()
    if (!body) return
    input.value = ''
    try {
      await sendChatMessage({ roomId, authorRole: sendAsRole, body })
      await _refreshMessages(roomId, listEl, myProfileId, stickerTiers, isAdmin)
    } catch (err) {
      showToast(err.message ?? 'ส่งข้อความไม่สำเร็จ', 'error')
    }
  })

  const imgInput = containerEl.querySelector('#chat-img-input')
  containerEl.querySelector('#chat-img-btn').addEventListener('click', () => imgInput.click())
  imgInput.addEventListener('change', async () => {
    const file = imgInput.files?.[0]
    imgInput.value = ''
    if (!file) return
    const btn = containerEl.querySelector('#chat-img-btn')
    btn.disabled = true
    btn.textContent = '⏳'
    try {
      const imageUrl = await uploadChatImage(roomId, file)
      await sendChatMessage({ roomId, authorRole: sendAsRole, body: null, imageUrl })
      await _refreshMessages(roomId, listEl, myProfileId, stickerTiers, isAdmin)
    } catch (err) {
      showToast(err.message ?? 'ส่งรูปไม่สำเร็จ', 'error')
    } finally {
      btn.disabled = false
      btn.textContent = '📷'
    }
  })

  _channel = supabase.channel(`chat-room-${roomId}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_messages', filter: `room_id=eq.${roomId}` },
      () => _refreshMessages(roomId, listEl, myProfileId, stickerTiers, isAdmin))
    .subscribe()

  // backup polling — realtime เป็น optimization ไม่ใช่ source of truth (ตาม pattern quiz-monitor.js)
  _pollInterval = setInterval(() => _refreshMessages(roomId, listEl, myProfileId, stickerTiers, isAdmin), 5000)
}

// ดึงข้อความทั้งหมดใหม่เสมอ (ไม่ใช่แค่ข้อความใหม่) เทียบลายเซ็นก่อนว่าเปลี่ยนจริงไหม
// (ข้อความใหม่ หรือมีข้อความเดิมถูกลบ/ยกเลิกการส่ง) — จำเป็นเพราะการลบเป็น UPDATE
// ไม่ใช่แถวใหม่ ตัว "append เฉพาะ id ที่มากกว่าเดิม" แบบเดิมจะไม่เห็นการเปลี่ยนแปลงนี้เลย
async function _refreshMessages(roomId, listEl, myProfileId, stickerTiers, isAdmin, { force = false } = {}) {
  const all = await getChatMessages(roomId).catch(() => null)
  if (!all || !listEl.isConnected) return
  const sig = _msgSignature(all)
  if (!force && sig === _lastSignature) return
  const wasAtBottom = listEl.scrollHeight - listEl.scrollTop - listEl.clientHeight < 60
  await _renderMessages(listEl, all, myProfileId, stickerTiers, isAdmin)
  _lastSignature = sig
  if (wasAtBottom) listEl.scrollTop = listEl.scrollHeight
}

async function _renderMessages(listEl, messages, myProfileId, stickerTiers, isAdmin) {
  const teacherProfileIds = messages.filter(m => m.author_role === 'teacher').map(m => m.author_profile_id)
  const messageIds = messages.map(m => m.id)
  const [nameByProfile, tierByProfile, bookmarkedIds] = await Promise.all([
    getTeacherNamesByProfileIds(teacherProfileIds),
    getChatTiersByProfileIds(teacherProfileIds),
    getMyBookmarkedMessageIds(messageIds),
  ])
  listEl.innerHTML = messages.map(m => _bubbleHTML(m, myProfileId, nameByProfile, tierByProfile, stickerTiers, bookmarkedIds, isAdmin)).join('')
}

// ─── ประกาศปักหมุด ────────────────────────────────────────────────────────────
async function _renderAnnouncementBanner(containerEl, roomId, isAdmin) {
  const bannerEl = containerEl.querySelector('#chat-announcement-banner')
  if (!bannerEl) return
  const announcement = await getActiveChatAnnouncement(roomId).catch(() => null)
  const refresh = () => _renderAnnouncementBanner(containerEl, roomId, isAdmin)

  if (announcement) {
    bannerEl.innerHTML = `
      <div class="px-4 py-2.5 flex items-start gap-2" style="background:linear-gradient(135deg,#fef3c7,#fde68a);border-bottom:1px solid #fbbf24;">
        <span class="text-base flex-shrink-0">📌</span>
        <button type="button" id="ann-history-btn" class="flex-1 min-w-0 text-left">
          <p class="text-xs font-bold text-amber-900 truncate">${_htmlEsc(announcement.body)}</p>
        </button>
        <div class="flex items-center gap-2 flex-shrink-0">
          ${isAdmin ? `<button type="button" id="ann-compose-btn" class="text-[11px] font-bold text-amber-700 hover:text-amber-900">➕</button>` : ''}
          ${isAdmin ? `<button type="button" id="ann-unpin-btn" class="text-[11px] font-bold text-amber-700 hover:text-amber-900">✕</button>` : ''}
        </div>
      </div>`
  } else {
    bannerEl.innerHTML = isAdmin ? `
      <div class="px-4 py-2 flex items-center justify-between" style="background:#fafaf9;border-bottom:1px solid #eee;">
        <span class="text-xs text-gray-400">ยังไม่มีประกาศปักหมุด</span>
        <button type="button" id="ann-compose-btn" class="text-xs font-bold text-amber-600 hover:text-amber-700">➕ สร้างประกาศ</button>
      </div>` : ''
  }

  bannerEl.querySelector('#ann-history-btn')?.addEventListener('click', () => _openAnnouncementHistory(roomId))
  bannerEl.querySelector('#ann-compose-btn')?.addEventListener('click', () => _openAnnouncementCompose(roomId, refresh))
  bannerEl.querySelector('#ann-unpin-btn')?.addEventListener('click', async () => {
    try {
      await unpinChatAnnouncement(announcement.id)
      await refresh()
    } catch (err) { showToast(err.message ?? 'ยกเลิกปักหมุดไม่สำเร็จ', 'error') }
  })
}

function _openAnnouncementCompose(roomId, onDone) {
  const ov = document.createElement('div')
  ov.className = 'fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50'
  ov.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
      <h4 class="font-bold text-gray-800 mb-3">📌 สร้างประกาศใหม่</h4>
      <textarea id="ann-compose-text" rows="4" maxlength="2000" placeholder="พิมพ์ข้อความประกาศ..."
        class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 mb-3"></textarea>
      <div class="flex justify-end gap-2">
        <button type="button" id="ann-compose-cancel" class="px-4 py-2 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-50">ยกเลิก</button>
        <button type="button" id="ann-compose-submit" class="px-4 py-2 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white">ประกาศ</button>
      </div>
    </div>`
  document.body.appendChild(ov)
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#ann-compose-cancel').addEventListener('click', () => ov.remove())
  ov.querySelector('#ann-compose-submit').addEventListener('click', async () => {
    const body = ov.querySelector('#ann-compose-text').value.trim()
    if (!body) return
    const btn = ov.querySelector('#ann-compose-submit')
    btn.disabled = true
    try {
      await createChatAnnouncement({ roomId, body })
      ov.remove()
      await onDone()
    } catch (err) {
      showToast(err.message ?? 'สร้างประกาศไม่สำเร็จ', 'error')
      btn.disabled = false
    }
  })
}

async function _openAnnouncementHistory(roomId) {
  const ov = document.createElement('div')
  ov.className = 'fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50'
  ov.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[75vh] flex flex-col overflow-hidden">
      <div class="px-5 py-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <h4 class="font-bold text-gray-800">📌 ประวัติประกาศ</h4>
        <button type="button" id="ann-history-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
      </div>
      <div id="ann-history-list" class="flex-1 overflow-y-auto p-4 space-y-3 text-center text-gray-400 text-sm">กำลังโหลด...</div>
    </div>`
  document.body.appendChild(ov)
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove() })
  ov.querySelector('#ann-history-close').addEventListener('click', () => ov.remove())

  const list = await getChatAnnouncementHistory(roomId).catch(() => [])
  const listEl = ov.querySelector('#ann-history-list')
  listEl.innerHTML = list.length ? list.map(a => `
    <div class="rounded-xl border ${a.is_active ? 'border-amber-300 bg-amber-50' : 'border-gray-100'} p-3 text-left">
      <p class="text-[10px] text-gray-400 mb-1">${_fmtDateTime(a.created_at)}${a.is_active ? ' · กำลังปักหมุด' : ''}</p>
      <p class="text-sm text-gray-700 whitespace-pre-wrap break-words">${_htmlEsc(a.body)}</p>
    </div>`).join('') : `<p class="text-center text-gray-400 text-sm py-8">ยังไม่เคยมีประกาศ</p>`
}

// ─── โน้ตของฉัน ────────────────────────────────────────────────────────────
async function _renderMyNotes(containerEl, onBack) {
  containerEl.innerHTML = `
    <div class="flex items-center gap-2 px-4 py-3 border-b border-gray-100 flex-shrink-0">
      <button type="button" id="notes-back-btn" class="text-sm text-gray-500 hover:text-gray-700 font-semibold">← กลับ</button>
      <h4 class="font-bold text-gray-700 text-sm">🔖 โน้ตของฉัน</h4>
    </div>
    <div id="notes-list" class="flex-1 overflow-y-auto p-4 space-y-3 text-center text-gray-400 text-sm">กำลังโหลด...</div>`
  containerEl.querySelector('#notes-back-btn').addEventListener('click', onBack)

  const listEl = containerEl.querySelector('#notes-list')
  const items = await getMyBookmarkedMessages().catch(() => [])
  if (!items.length) {
    listEl.innerHTML = `<p class="text-center text-gray-400 text-sm py-12">ยังไม่มีข้อความที่บันทึกไว้ — กด 🔖 ใต้ข้อความในแชทเพื่อบันทึก</p>`
    return
  }

  listEl.className = 'flex-1 overflow-y-auto p-4 space-y-3'
  listEl.innerHTML = items.map(item => `
    <div class="rounded-xl border border-gray-100 p-3" data-note-card="${item.id}">
      <div class="flex items-center justify-between mb-1 gap-2">
        <p class="text-[10px] font-bold text-indigo-500 truncate">${_htmlEsc(item.roomLabel)}</p>
        <button type="button" class="bm-toggle text-xs flex-shrink-0 text-amber-500" data-message-id="${item.id}" data-bookmarked="1" title="เอาออกจากโน้ตของฉัน">🔖</button>
      </div>
      ${item.deleted_at
        ? `<p class="text-sm italic text-gray-400">🚫 ${item.deleted_by === item.author_profile_id ? 'ข้อความนี้ถูกยกเลิกการส่งแล้ว' : 'ข้อความนี้ถูกลบแล้ว'}</p>`
        : `${item.image_url ? `<img src="${_htmlEsc(item.image_url)}" class="rounded-lg max-w-full max-h-48 object-contain mb-1" />` : ''}
           ${item.body ? `<p class="text-sm text-gray-700 whitespace-pre-wrap break-words">${_htmlEsc(item.body)}</p>` : ''}`}
      <p class="text-[10px] text-gray-300 mt-1">${_fmtDateTime(item.created_at)}</p>
    </div>`).join('')

  listEl.addEventListener('click', async (e) => {
    const btn = e.target.closest('.bm-toggle')
    if (!btn) return
    const messageId = parseInt(btn.dataset.messageId, 10)
    btn.disabled = true
    try {
      await toggleBookmark(messageId, true) // ทุกอันในหน้านี้ถูกบันทึกอยู่แล้ว กดคือเอาออกเสมอ
      btn.closest('[data-note-card]')?.remove()
      if (!listEl.querySelector('[data-note-card]')) {
        listEl.innerHTML = `<p class="text-center text-gray-400 text-sm py-12">ยังไม่มีข้อความที่บันทึกไว้ — กด 🔖 ใต้ข้อความในแชทเพื่อบันทึก</p>`
      }
    } catch (err) {
      showToast(err.message ?? 'ลบโน้ตไม่สำเร็จ', 'error')
      btn.disabled = false
    }
  })
}

// โปรไฟล์ผู้ส่ง — สติกเกอร์ตามระดับโดเนท (ภาคเรียนนี้) เป็น "รูปโปรไฟล์" วงกลม + ชื่อเล็กๆ ด้านล่าง
function _avatarHTML(m, nameByProfile, tierByProfile, stickerTiers) {
  const isAdmin = m.author_role === 'admin'
  const displayName = isAdmin ? 'แอดมิน' : (nameByProfile[m.author_profile_id] ?? 'ครู')
  let inner = '🛡️'
  let ringColor = '#f59e0b' // amber-500
  if (!isAdmin) {
    const tierIndex = tierByProfile[m.author_profile_id]
    const tier = tierIndex ? stickerTiers[tierIndex - 1] : null
    if (tier) {
      const sticker = String(tier.sticker ?? '')
      inner = /^https?:\/\//.test(sticker)
        ? `<img src="${_htmlEsc(sticker)}" class="w-full h-full object-contain" />`
        : _htmlEsc(sticker || '🏅')
      ringColor = tier.color || '#6366f1'
    } else {
      inner = '👤'
      ringColor = '#9ca3af' // gray-400
    }
  }
  return `
    <div class="flex flex-col items-center w-11 flex-shrink-0">
      <div class="w-9 h-9 rounded-full flex items-center justify-center text-lg overflow-hidden bg-white shadow-sm" style="border:2px solid ${_htmlEsc(ringColor)};">
        ${inner}
      </div>
      <p class="text-[9px] text-gray-400 font-semibold mt-0.5 leading-tight text-center truncate w-11" title="${_htmlEsc(displayName)}">${_htmlEsc(displayName)}</p>
    </div>`
}

function _bubbleHTML(m, myProfileId, nameByProfile, tierByProfile, stickerTiers, bookmarkedIds, isAdmin) {
  const isMine = m.author_profile_id === myProfileId
  const avatar = !isMine ? _avatarHTML(m, nameByProfile, tierByProfile, stickerTiers) : ''

  if (m.deleted_at) {
    const isOwnUnsend = m.deleted_by === m.author_profile_id
    const label = isOwnUnsend ? '🚫 ข้อความนี้ถูกยกเลิกการส่งแล้ว' : '🚫 ข้อความนี้ถูกลบแล้ว'
    return `
      <div class="flex items-end gap-2 ${isMine ? 'justify-end' : 'justify-start'}">
        ${avatar}
        <div class="flex flex-col ${isMine ? 'items-end' : 'items-start'} max-w-[70%]">
          <div class="border border-dashed border-gray-200 rounded-2xl px-4 py-2.5">
            <p class="text-sm italic text-gray-400">${label}</p>
          </div>
          <span class="text-[10px] text-gray-300 px-1 mt-0.5">${_fmtTime(m.created_at)}</span>
        </div>
      </div>`
  }

  const imageHtml = m.image_url
    ? `<img src="${_htmlEsc(m.image_url)}" class="rounded-xl max-w-full max-h-64 object-contain cursor-pointer mb-1" onclick="window.open('${_htmlEsc(m.image_url)}','_blank')" />`
    : ''
  const isBookmarked = bookmarkedIds.has(m.id)
  const bookmarkBtn = `<button type="button" class="bm-toggle text-xs px-1 ${isBookmarked ? 'text-amber-500' : 'text-gray-300 hover:text-gray-400'}" data-message-id="${m.id}" data-bookmarked="${isBookmarked ? '1' : '0'}" title="${isBookmarked ? 'เอาออกจากโน้ตของฉัน' : 'บันทึกโน้ต'}">🔖</button>`
  const canDelete = isMine || isAdmin
  const deleteBtn = canDelete
    ? `<button type="button" class="msg-delete-btn text-xs px-1 text-gray-300 hover:text-red-400" data-message-id="${m.id}" data-own="${isMine ? '1' : '0'}" title="${isMine ? 'ยกเลิกการส่ง' : 'ลบข้อความ'}">🗑️</button>`
    : ''
  return `
    <div class="flex items-end gap-2 ${isMine ? 'justify-end' : 'justify-start'}">
      ${avatar}
      <div class="flex flex-col ${isMine ? 'items-end' : 'items-start'} max-w-[70%]">
        <div class="${isMine ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl px-4 py-2.5">
          ${imageHtml}
          ${m.body ? `<p class="text-sm whitespace-pre-wrap break-words">${_htmlEsc(m.body)}</p>` : ''}
        </div>
        <div class="flex items-center gap-1.5 mt-0.5 px-1">
          <span class="text-[10px] text-gray-300">${_fmtTime(m.created_at)}</span>
          ${bookmarkBtn}
          ${deleteBtn}
        </div>
      </div>
    </div>`
}
