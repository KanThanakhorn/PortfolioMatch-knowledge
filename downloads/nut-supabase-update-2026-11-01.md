# ใหม่สำหรับนัท: สถานะหลังเชื่อม Supabase

อัปเดต 1 พฤศจิกายน 2569 · โค้ด PortfolioMatch branch `kan/backend` commit `b08097c` · ใช้แทนข้อความที่ว่า “ไม่มี database / ใช้ได้เบราว์เซอร์เดียว” ในรายงานและสไลด์เดิม

## สิ่งที่เปลี่ยนจากเอกสารเดิม

| หัวข้อ | ก่อนอัปเดต | สถานะปัจจุบัน |
|---|---|---|
| ข้อมูลรอบ/ใบสมัคร | localStorage ในเบราว์เซอร์เดียว | มีสองโหมด: localStorage เดิม และ Supabase demo ที่แชร์ข้อมูลข้ามเบราว์เซอร์ |
| กรรมการ | ไม่มีบัญชี | Supabase Auth + ตาราง `teacher_members` กำหนดสิทธิ์กรรมการ; RLS คุมการอ่าน/เปลี่ยนสถานะ |
| Backend | Route Handler ของ Gemini | เพิ่ม API อ่านรอบและรับใบสมัคร; Gemini Route Handler บันทึกผล AI ใน DB เมื่อยินยอม |
| PDF | เก็บเพียงชื่อไฟล์ | ยังคงเก็บเพียงชื่อไฟล์; ส่ง PDF ชั่วคราวไป Gemini เมื่อผู้สมัครยินยอมเท่านั้น |
| คะแนน | ผู้สมัครตัวอย่างเป็น mock | local demo ยังมี mock; DB demo เก็บผล Gemini สำหรับใบสมัครที่ยินยอมและวิเคราะห์สำเร็จ |

## ข้อความพร้อมปรับใช้ในรายงาน

> PortfolioMatch เป็นระบบต้นแบบรับสมัคร Portfolio ที่มีโหมดฐานข้อมูลสาธิตผ่าน Supabase. กรรมการเข้าสู่ระบบด้วย Supabase Auth และสิทธิ์ที่กำหนดใน `teacher_members` เพื่อสร้างรอบ ดูใบสมัคร และเปลี่ยนสถานะ. ผู้สมัครเปิดลิงก์ของรอบจากอีกเบราว์เซอร์ได้และส่งข้อมูลผ่าน Next.js Route Handler ไปเก็บใน PostgreSQL โดยใช้ Row Level Security จำกัดการเข้าถึงข้อมูล. เมื่อผู้สมัครยินยอมแยกต่างหาก ระบบส่ง PDF ไป Gemini ชั่วคราวเพื่อสรุปหลักฐานและคะแนนเสนอแนะ แล้วบันทึกผลในฐานข้อมูล. กรรมการเป็นผู้ตรวจหลักฐานและตัดสินเอง. ระบบยังไม่เก็บ PDF ต้นฉบับและยังไม่พร้อมรับข้อมูลผู้สมัครจริง.

## ผลที่มีหลักฐาน ณ วันนี้

- Supabase MCP ลง migration สองชุด `portfolio_core_20261101` และ `portfolio_fk_indexes_20261101`; มีตาราง `teacher_members`, `campaigns`, `applications` พร้อม RLS.
- `npm run typecheck` และ `npm run build` ผ่าน.
- ทดสอบ production server ในเครื่องกับ Supabase จริง: เปิดรอบ QA, ส่งใบสมัครจำลอง 2 แบบ (ไม่ยินยอม AI / ยินยอม AI), Gemini ตอบสำเร็จและบันทึกคะแนน 65 พร้อมเกณฑ์ 4 ข้อ. รายการไม่ยินยอมไม่มีคะแนน.
- คำขอวิเคราะห์ด้วย token ไม่ถูกต้องได้ HTTP 403; รอบที่ไม่พบได้ HTTP 404. ทดสอบ RLS ด้วยบทบาทกรรมการจำลองใน transaction: อ่านและเปลี่ยนสถานะได้; บัญชีที่ไม่อยู่ใน allowlist เห็น 0 รายการ. คำเตือน security advisor ไม่มี.
- **ยังไม่มีหลักฐาน browser end-to-end หลัง Supabase:** การล็อกอินด้วยรหัสผ่านจริง, สร้างรอบจาก UI, การเปิดลิงก์อีกเบราว์เซอร์, การแสดงผล AI และ Approve/Reject ผ่าน UI ต้องให้ตง retest. อย่าใส่ Pass ในตาราง QA ส่วนนี้ก่อนมี screenshot.

## สิ่งที่นัทควรแก้ใน PDF/สไลด์เดิม

1. เปลี่ยนประโยค “ไม่มี database / authentication / backend ใบสมัคร / ข้อมูลข้ามเครื่อง” เป็นคำอธิบายสองโหมดด้านบน. แยก localStorage เดิมออกจาก Supabase demo.
2. เพิ่ม Supabase Auth, PostgreSQL, RLS, Next.js Route Handler และ Gemini ใน architecture; ใช้ `assets/system-architecture.svg` ฉบับใหม่.
3. ย้าย database และบัญชีกรรมการออกจาก Future Work. คง PDF storage, durable rate limit, audit log, backup/retention, job queue/recovery, การทดสอบโหลดและ AI fairness ไว้ใน Future Work.
4. เพิ่มผลทดสอบใหม่ในหัวข้อ 9 พร้อมสถานะ “ผ่าน API/DB” และ “รอ UI QA จากตง” แยกกัน. ภาพ PNG เดิมเป็นภาพหน้าจอ mock วันที่ 31 ต.ค. ไม่ใช่หลักฐาน Supabase.
5. หัวข้อ 8 ต้องเติมชั่วโมง อุปกรณ์ ค่าใช้ Gemini/Supabase และต้นทุน–ประโยชน์จากข้อมูลจริงของทีม. ไม่มีตัวเลขค่าใช้จ่ายหรือ ROI ที่ยืนยัน.
6. ตรวจเลขภาพซ้ำและอัปเดต caption ให้ตรงกับ SVG ใหม่. แหล่งอ้างอิงอยู่ใน `downloads/sources.md`.

## ข้อจำกัดที่ต้องพูดชัด

เดโม DB ยังไม่มี durable rate limit, file storage, audit log, backup/retention workflow หรือการทดสอบโหลดจริง. หากรีเฟรชระหว่าง AI ทำงาน อาจไม่มีไฟล์ให้ retry. วันปิดรอบยังเป็นข้อความแสดงผล; `is_open` ใน DB ใช้ปิดรอบได้. คะแนน AI เป็นข้อมูลประกอบ ไม่ใช่คำตัดสิน. ไม่มีผลวัดว่าลดเวลา เพิ่มความแม่นยำ หรือเพิ่มความเป็นธรรมกับผู้ใช้จริง.

แหล่งข้อมูลใน repo หลัก: `assign/workflow/kan-supabase-handoff.md`, `supabase/migrations/`, และผล QA ที่ตงจะเพิ่มใน `assign/retest+screenshot/`.
