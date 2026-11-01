# PortfolioMatch Project Guide

คลังข้อมูลสำหรับนัททำรายงานและสไลด์ PortfolioMatch ตามหัวข้ออาจารย์ 10 ข้อ

## เริ่มตรงนี้ — อัปเดต 1 พฤศจิกายน 2569 หลังเชื่อม Supabase

1. เปิด [รายงานบนเว็บ](report.html) เพื่ออ่านเนื้อหาปัจจุบันและดาวน์โหลดภาพประกอบ
2. อ่าน [บันทึกอัปเดตสำหรับนัท](downloads/nut-supabase-update-2026-11-01.md) ก่อนแก้รายงาน/สไลด์เดิม โดยเฉพาะสิ่งที่ทดสอบแล้วกับสิ่งที่ตงยังต้อง retest
3. ใช้ [ร่างรายงานใหม่](downloads/report-draft.md), [ภาพและแหล่งที่มา](downloads/asset-manifest.md), และ [รายการแก้ PDF เดิม](downloads/nut-pdf-corrections.md) ประกอบ
4. ดาวน์โหลด [ชุดไฟล์ทั้งหมด](downloads/portfolio-report-kit.zip) หากต้องการนำไปทำงานแบบออฟไลน์

ข้อมูลล่าสุด: มี **Supabase demo mode** พร้อม Auth, PostgreSQL/RLS, รอบรับสมัครและใบสมัครข้ามเบราว์เซอร์ และ Gemini แบบยินยอม; ยังมี localStorage mode เมื่อไม่ตั้งค่า Supabase. **ยังไม่เก็บ PDF ต้นฉบับ** และยังไม่พร้อมรับข้อมูลผู้สมัครจริง. ภาพหน้าจอ PNG ชุดเดิมถ่าย 31 ต.ค. จาก local demo และใช้เป็นภาพ UI ตัวอย่างเท่านั้น; SVG ทั้งสามภาพเป็นผังอัปเดตหลัง Supabase. ผลทดสอบใหม่อยู่ในบันทึกอัปเดต ไม่ควรอ้างภาพ PNG ว่าเป็นหลักฐาน QA ของ Supabase.

## เปิดเว็บในเครื่อง

เป็น static HTML/CSS/JavaScript ไม่ต้องติดตั้ง dependency:

```bash
python3 -m http.server 4173
```

เปิด <http://localhost:4173>. หน้า `index.html` เป็น FAQ ค้นหาได้; `report.html` เรียงเนื้อหาตาม requirement 10 หัวข้อ.
