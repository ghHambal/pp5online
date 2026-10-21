// Run against npm run dev. PLAYWRIGHT_MODULE may point to an external playwright-core installation.
import assert from 'node:assert/strict'
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright-core')
const browser = await chromium.launch({ executablePath: process.env.CHROME_EXECUTABLE || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:true })
const page = await browser.newPage({viewport:{width:1280,height:900}})
const base = process.env.PP5_TEST_BASE_URL || 'http://127.0.0.1:4181/pp5online/'
await page.route('**/js/teacher.js*',route=>route.abort())
await page.route('**/js/assignment-annotations-api.js*',route=>route.fulfill({contentType:'text/javascript',body:`
export async function getAssignmentImageReviews(){ return window.__reviews ?? [] }
export async function saveAssignmentImageReview(input){
 if(window.__saveError)throw new Error('ทดสอบเครือข่ายขัดข้อง');
 const previous=(window.__reviews??[])[0];
 if((previous?.version??0)!==input.version)throw new Error('version conflict');
 let image_url=previous?.image_url;
 if(input.image){image_url=await new Promise(resolve=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.readAsDataURL(input.image)})}
 const saved={id:1,submission_id:input.submission.id,source_url:input.file.url,source_submitted_at:input.submission.submitted_at,
 strokes:JSON.parse(JSON.stringify(input.strokes)),version:input.version+1,
 published_path:input.image?'qa/review.png':previous?.published_path,published_at:input.image?new Date().toISOString():previous?.published_at,image_url};
 window.__reviews=[saved];return saved;
}
`}))
try {
 await page.goto(base+'teacher.html',{waitUntil:'domcontentloaded'})
 await page.evaluate(async base=>{
  const c=document.createElement('canvas');c.width=1000;c.height=1200;const ctx=c.getContext('2d');ctx.fillStyle='white';ctx.fillRect(0,0,1000,1200);ctx.fillStyle='#1e293b';ctx.font='32px sans-serif';ctx.fillText('Worksheet: 2 + 2 = 4',80,90);
  window.__input={submission:{id:99,submitted_at:'2026-10-22T01:00:00Z'},file:{url:c.toDataURL(),name:'worksheet.png'},studentName:'นักเรียนทดสอบ'};
  const {openAssignmentImageEditor}=await import(base+'js/assignment-image-editor.js');window.__openEditor=()=>openAssignmentImageEditor(window.__input);await window.__openEditor();
 },base)
 await page.locator('#air-draft').waitFor({state:'visible'})
 await page.waitForFunction(()=>!document.querySelector('#air-draft').disabled)
 const draw = async()=>{
  const r=await page.locator('#air-canvas').boundingBox()
  await page.mouse.move(r.x+r.width*.2,r.y+r.height*.2);await page.mouse.down();await page.mouse.move(r.x+r.width*.65,r.y+r.height*.3,{steps:12});await page.mouse.up()
 }
 await draw()
 assert.equal(await page.locator('#air-undo').isEnabled(),true)
 await page.locator('#air-undo').click();assert.equal(await page.locator('#air-redo').isEnabled(),true)
 await page.locator('#air-redo').click()
 await page.locator('#air-draft').click();await page.waitForFunction(()=>window.__reviews?.[0]?.version===1)
 assert.equal(await page.evaluate(()=>window.__reviews[0].strokes.length),1)
 assert.equal(await page.evaluate(()=>!!window.__reviews[0].published_path),false)
 await page.locator('#air-close').click();assert.equal(await page.locator('#assignment-image-editor').count(),0)
 await page.evaluate(()=>window.__openEditor());await page.waitForFunction(()=>!document.querySelector('#air-draft').disabled)
 assert.ok((await page.locator('#air-status').textContent()).includes('โหลดรอยตรวจเดิม'))
 await page.locator('#air-tool').selectOption('text');await page.locator('#air-text').fill('ดีมาก ✓')
 let r=await page.locator('#air-canvas').boundingBox();await page.mouse.click(r.x+r.width*.35,r.y+r.height*.4)
 await page.locator('#air-tool').selectOption('eraser');r=await page.locator('#air-canvas').boundingBox();await page.mouse.click(r.x+r.width*.2,r.y+r.height*.2)
 await page.locator('#air-undo').click()
 await page.locator('#air-zoom').selectOption('2')
 await page.locator('#air-input').selectOption('pen')
 await page.locator('#air-tool').selectOption('pen')
 await page.evaluate(()=>{
  const c=document.querySelector('#air-canvas'),r=c.getBoundingClientRect();
  // Synthetic pen events have no native active pointer to capture.
  const capture=c.setPointerCapture;c.setPointerCapture=()=>{};
  for(const pointerType of ['touch','pen'])for(const type of ['pointerdown','pointerup'])c.dispatchEvent(new PointerEvent(type,{pointerType,pointerId:10,isPrimary:true,clientX:r.x+30,clientY:r.y+30,bubbles:true}));
  c.setPointerCapture=capture;
 })
 await page.evaluate(()=>{window.__saveError=true})
 await page.locator('#air-draft').click();await page.waitForFunction(()=>document.querySelector('#air-status').textContent.includes('บันทึกไม่สำเร็จ'))
 assert.equal(await page.locator('#air-undo').isEnabled(),true)
 await page.evaluate(()=>{window.__saveError=false})
 await page.locator('#air-draft').click();await page.waitForFunction(()=>window.__reviews[0].version===2)
 assert.equal(await page.evaluate(()=>window.__reviews[0].strokes.length),3,'original pen + text + pen-only input, with touch ignored')
 await page.setViewportSize({width:375,height:812})
 await page.locator('#air-zoom').selectOption('1')
 assert.ok(await page.evaluate(()=>document.querySelector('#air-viewport').getBoundingClientRect().height>100))
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))
 await page.locator('#air-publish').click();await page.waitForFunction(()=>!!window.__reviews[0].published_path)
 const pixels=await page.evaluate(async()=>{
  const img=new Image();img.src=window.__reviews[0].image_url;await img.decode();const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const ctx=c.getContext('2d');ctx.drawImage(img,0,0);const data=ctx.getImageData(0,0,c.width,c.height).data;let red=0;for(let i=0;i<data.length;i+=4)if(data[i]>150 && data[i+1]<100 && data[i+2]<100)red++;return {red,width:img.width,height:img.height};
 })
 assert.ok(pixels.red>100,'published PNG contains actual red annotations')
 assert.equal(pixels.width,1000)
 if(process.env.QA_SCREENSHOT) await page.screenshot({path:process.env.QA_SCREENSHOT})
 await page.locator('#air-close').click()
 await page.evaluate(async base=>{const {renderStudentImageReviews}=await import(base+'js/assignment-review-view.js');document.querySelector('#app-main-col > main').innerHTML=renderStudentImageReviews({...window.__input.submission,file_urls:[window.__input.file],image_reviews:window.__reviews})},base)
 assert.ok(await page.getByText('✍️ งานที่ครูตรวจแล้ว').isVisible())
 assert.ok(await page.getByText('ผลตรวจงานรอบปัจจุบัน',{exact:false}).isVisible())
 // Reopen, make a change, cancel closing once, then confirm discarding.
 await page.evaluate(()=>window.__openEditor());await page.waitForFunction(()=>!document.querySelector('#air-draft').disabled)
 await page.locator('#air-input').selectOption('all');await draw()
 page.once('dialog',dialog=>dialog.dismiss());await page.locator('#air-close').click();assert.equal(await page.locator('#assignment-image-editor').count(),1)
 page.once('dialog',dialog=>dialog.accept());await page.keyboard.press('Escape');assert.equal(await page.locator('#assignment-image-editor').count(),0)
 assert.equal(await page.evaluate(()=>document.body.style.overflow),'')
 console.log('Browser passed: draw, undo/redo, erase, text, pen/touch filter, draft reload, retry, PNG publish, mobile layout, student preview, unsaved-close protection')
} finally { await browser.close() }
