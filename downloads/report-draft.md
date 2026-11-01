# PortfolioMatch: ร่างรายงานฉบับอัปเดต Supabase

อัปเดต 1 พฤศจิกายน 2569 · ใช้คู่กับ `nut-supabase-update-2026-11-01.md` และ `nut-pdf-corrections.md`. แทนร่าง localStorage เดิม. ภาพ PNG ยังเป็น mock จาก 31 ต.ค.; SVG เป็นผังใหม่.

## 1. ชื่อโครงการ

PortfolioMatch: ต้นแบบระบบช่วยจัดการและคัดกรองใบสมัคร Portfolio (*An Interactive Prototype for Portfolio Admission Screening*).

## 2. ที่มาและความสำคัญ

การรับสมัคร Portfolio ต้องอ่านข้อมูลผู้สมัครและผลงานเทียบเกณฑ์หลายข้อ. ทีมสร้างต้นแบบให้กรรมการเห็นข้อมูลและสถานะใน flow เดียว และให้ Gemini ช่วยสรุปหลักฐานจาก PDF เฉพาะเมื่อผู้สมัครยินยอม. กรรมการยังตรวจหลักฐานและตัดสินเอง. ยังไม่มีการวัดว่าระบบลดเวลา เพิ่มความแม่นยำ หรือความเป็นธรรม.

## 3. วัตถุประสงค์

1. สาธิต flow ตั้งแต่สร้างรอบรับสมัครจนถึงการพิจารณา Approve/Reject.
2. ตรวจข้อมูลใบสมัครและแชร์รอบ/ใบสมัครระหว่างเบราว์เซอร์ในโหมด Supabase demo.
3. แสดง AI สรุปหลักฐานตามเกณฑ์แบบยินยอมแยก โดยไม่ให้ AI ตัดสินแทนกรรมการ.
4. ระบุข้อจำกัดด้านข้อมูลส่วนบุคคล ความปลอดภัย และความพร้อมก่อนใช้งานจริง.

## 4. กลุ่มเป้าหมาย

กรรมการรับสมัครเข้าสู่ระบบเพื่อสร้างรอบ ดูข้อมูลผู้สมัครและผล AI และเปลี่ยนสถานะ. ผู้สมัครเปิดลิงก์รอบ กรอกข้อมูล เลือก PDF และเลือกว่าจะให้ Gemini วิเคราะห์หรือไม่. โหมด localStorage เดิมยังใช้สาธิตแบบเบราว์เซอร์เดียวเมื่อไม่ตั้งค่า Supabase.

## 5. ขอบเขต

**มีแล้วใน Supabase demo:** Supabase Auth สำหรับกรรมการ, allowlist `teacher_members`, PostgreSQL/RLS, สร้างรอบรับสมัคร, API รับใบสมัคร, ข้อมูลข้ามเบราว์เซอร์, Dashboard, รายชื่อ/รายละเอียด, Approve/Reject, Gemini opt-in และบันทึกผล AI. PDF ต้องเป็นไฟล์ PDF ไม่เกิน 50 MiB; การวิเคราะห์ AI รับไฟล์ต่ำกว่า 45 MB.

**ยังไม่มี:** การเก็บ PDF ต้นฉบับ, rate limit แบบ durable, audit log, backup/retention workflow, job queue สำหรับ AI, การบังคับ deadline ตามวัน, การทดสอบโหลดและความเป็นธรรม. ระบบยังเป็นเดโม ไม่พร้อมใช้ข้อมูลผู้สมัครจริง.

## 6. การทบทวนวรรณกรรม

NIST AI RMF 1.0 ใช้วางกรอบความเสี่ยง AI; UNESCO Guidance for Generative AI in Education and Research ใช้อภิปรายบทบาทมนุษย์; WCAG 2.2 ใช้เป็นแนวทางฟอร์ม. URL อยู่ใน `sources.md`. แหล่งเหล่านี้เป็นหลักการออกแบบ ไม่ใช่หลักฐานว่า PortfolioMatch มีประสิทธิภาพสูงขึ้น. ควรเพิ่มงานวิจัยเฉพาะด้านเมื่อมีแหล่งที่ตรวจสอบได้.

## 7. วิธีดำเนินงานและสถาปัตยกรรม

ออกแบบ User Flow → สร้าง UI ด้วย Next.js App Router, React, TypeScript, CSS และ Lucide → เพิ่ม Next.js Route Handler สำหรับรอบ/ใบสมัคร/AI → เชื่อม Supabase Auth และ PostgreSQL ด้วย RLS → ทดสอบ API, DB และสิทธิ์. กรรมการล็อกอินและอ่าน/เปลี่ยนสถานะผ่าน Supabase ภายใต้ RLS. ผู้สมัครอ่านข้อมูลรอบและส่งใบสมัครผ่าน Route Handler ฝั่งเซิร์ฟเวอร์. หากยินยอม AI เซิร์ฟเวอร์ส่ง PDF ชั่วคราวให้ Gemini และเก็บผลใน DB; PDF ต้นฉบับไม่ถูกเก็บ. เมื่อไม่มีตัวแปร Supabase ใช้ localStorage mode เดิม. ดู `assets/system-architecture.svg` และ `assets/user-flow.svg`.

## 8. ผลการดำเนินงานและทรัพยากร

มี Dashboard, Applicants, Detail, Create, Application Form, Submission Success และ Privacy. โหมด DB เก็บรอบ ใบสมัคร สถานะ และผล AI ข้ามเบราว์เซอร์. ทีม 3 คน: กานต์ flow/integration, ตง Frontend QA/demo, นัท report/presentation. เครื่องมือ: คอมพิวเตอร์ทีม, Next.js/React/TypeScript/CSS/Lucide, Supabase, Gemini API. ภาพ PNG ใน `assets/` ยังเป็น UI mock ก่อน Supabase; คะแนนผู้สมัครตัวอย่าง 92, 86, 74, 61 เป็น mock. **นัทเติมเวลา อุปกรณ์ ค่า API/Supabase และต้นทุน–ประโยชน์จากข้อมูลจริงก่อนส่ง**; ไม่มีตัวเลขยืนยันหรือ ROI.

## 9. การประเมินและทดสอบ

`npm run typecheck` และ `npm run build` ผ่าน. กานต์ทดสอบ production server ในเครื่องกับ Supabase จริง: สร้างรอบ QA, ส่งใบสมัครจำลองแบบไม่ใช้ AI และใช้ AI, Gemini สำเร็จและบันทึกคะแนน 65 พร้อมเกณฑ์ 4 ข้อ; รายการไม่ยินยอมไม่มีคะแนน. token ผิดถูกปฏิเสธ HTTP 403, slug ไม่พบ HTTP 404. RLS ให้กรรมการอ่าน/เปลี่ยนสถานะและไม่ให้บัญชีที่ไม่อยู่ใน allowlist เห็นรายการ. **ยังต้องให้ตง retest flow ผ่าน browser จริงและเก็บ screenshot:** login, create, link ข้ามเบราว์เซอร์, submit, AI UI, Approve/Reject, responsive, logout. รายงาน QA เดิมเป็น baseline localStorage/Gemini ก่อน Supabase.

ความเสี่ยง: ข้อมูลส่วนบุคคล, AI อาจผิดหรือมีอคติ, API โควตาหมด, PDF ไม่ถูกเก็บทำให้ตรวจย้อนหลังในระบบไม่ได้, การวิเคราะห์ค้างหลังรีเฟรช และการยิง endpoint สาธารณะ. แนวทาง: ความยินยอมแยก, สิทธิ์กรรมการและ RLS, ใช้ข้อมูลจำลอง, กรรมการตรวจต้นฉบับนอกระบบ; ก่อนใช้งานจริงเพิ่ม rate limit, storage, audit/retention, recovery และทดสอบคุณภาพ.

## 10. สรุปและพัฒนาต่อ

ต้นแบบแสดง flow รับสมัครข้ามเบราว์เซอร์ด้วย Supabase demo และ Gemini แบบยินยอม โดยกรรมการยังตัดสินเอง. การทดสอบ API/DB ผ่านตามกรณีที่ระบุ แต่ UI end-to-end หลัง Supabase ยังรอ QA. ยังไม่พร้อมรับข้อมูลจริงเพราะไม่มี PDF storage, durable abuse protection, audit/retention และหลักฐานประเมินกับผู้ใช้จริง. งานต่อคือปิดช่องว่างเหล่านี้และวัดประสิทธิภาพกับความเป็นธรรม.
