const questions = [
  { category: "overview", q: "PortfolioMatch คืออะไร?", a: "PortfolioMatch คือระบบ AI-assisted Portfolio Screening สำหรับช่วยอาจารย์หรือคณะกรรมการรับสมัครจัดระเบียบและคัดกรอง Portfolio ของผู้สมัคร โดย AI ช่วยสรุปข้อมูลและจับคู่กับ Requirement แต่การตัดสินใจสุดท้ายยังเป็นของอาจารย์" },
  { category: "overview", q: "ชื่อ PortfolioMatch สื่อถึงอะไร?", a: "Portfolio + Match หมายถึงการนำ Portfolio ของผู้สมัครมาเปรียบเทียบกับ Requirement ของสาขาหรือคณะ เพื่อดูว่าผู้สมัครมีความตรงกันมากน้อยเพียงใด" },
  { category: "overview", q: "เป้าหมายหลักของโปรเจกต์คืออะไร?", a: "ช่วยรวมข้อมูลผู้สมัครและเกณฑ์ไว้ใน flow เดียว พร้อม AI สรุปหลักฐานเมื่อผู้สมัครยินยอม กรรมการยังต้องตรวจต้นฉบับและตัดสินเอง; ยังไม่มีผลวัดว่าลดเวลาได้จริง" },
  { category: "overview", q: "ที่มาและความสำคัญของโปรเจกต์คืออะไร?", a: "การรับสมัคร Portfolio มีข้อมูลและเกณฑ์หลายส่วน ต้นแบบจึงรวมข้อมูลและให้ Gemini ช่วยสรุปหลักฐานเมื่อยินยอม แต่ยังไม่มีการวัดเวลา ความแม่นยำ หรือความเป็นธรรมกับผู้ใช้จริง" },
  { category: "overview", q: "ปัญหาหลักที่ระบบต้องการแก้คืออะไร?", a: "ข้อมูลผู้สมัครกระจัดกระจาย ใช้เวลาคัดกรองนาน และแต่ละคนอาจถูกอ่านด้วยมาตรฐานไม่เท่ากัน PortfolioMatch จึงจัดข้อมูลและ Requirement ให้อยู่ในมุมมองเดียวกัน" },
  { category: "overview", q: "ใครคือกลุ่มเป้าหมายของระบบ?", a: "ผู้ใช้หลักมี 2 กลุ่ม คืออาจารย์หรือคณะกรรมการรับสมัครที่ตรวจ Portfolio และนักเรียน/นักศึกษาที่กรอกข้อมูลและส่ง Portfolio" },

  { category: "product", q: "โปรเจกต์มีทั้งหมดกี่หน้า?", a: "มีหน้าหลัก Dashboard, Applicants, Applicant detail, Create admission, Application form, Submission success และ Privacy; กรรมการเห็นหน้า Login ก่อนเมื่อเปิด Supabase demo" },
  { category: "product", q: "หน้า Dashboard ทำหน้าที่อะไร?", a: "แสดงจำนวนผู้สมัคร สถานะ และคะแนนเฉลี่ยเฉพาะรายการที่มีคะแนน. ใน Supabase demo อ่านข้อมูล DB; โหมด localStorage เดิมมีผู้สมัครตัวอย่างที่คะแนนเป็น mock" },
  { category: "product", q: "หน้า Applicants ทำหน้าที่อะไร?", a: "แสดงรายชื่อผู้สมัครทั้งหมด พร้อมโรงเรียน คะแนน match สถานะ และทางเข้าหน้ารายละเอียดของแต่ละคน" },
  { category: "product", q: "หน้า Applicant detail แสดงข้อมูลอะไร?", a: "แสดงข้อมูลผู้สมัคร สถานะ Requirement ชื่อไฟล์ และผล Gemini ถ้ายินยอมและวิเคราะห์สำเร็จ พร้อมปุ่ม Approve/Reject. ใน local demo คะแนนตัวอย่างเป็น mock; ยังเปิด PDF ต้นฉบับย้อนหลังไม่ได้" },
  { category: "product", q: "หน้า Create admission ใช้ทำอะไร?", a: "ให้อาจารย์กำหนดชื่อรอบรับสมัคร ปีการศึกษา สาขา วันปิดรับสมัคร และเขียน Requirement ด้วยภาษาธรรมชาติ จากนั้นสร้างลิงก์ให้ผู้สมัคร" },
  { category: "product", q: "หน้า Application form ใช้ทำอะไร?", a: "ผู้สมัครกรอกข้อมูลและเลือก PDF. ใน Supabase demo ใบสมัครบันทึกผ่าน Next.js Route Handler ไปยัง PostgreSQL; เมื่อยินยอม AI จึงส่ง PDF ชั่วคราวไป Gemini. ระบบไม่เก็บ PDF ต้นฉบับ. หากไม่ตั้งค่า Supabase จะใช้ localStorage เดิม" },
  { category: "product", q: "ฟีเจอร์หลักของ PortfolioMatch มีอะไรบ้าง?", a: "Supabase demo มีกรรมการล็อกอิน, สร้างรอบ, รับใบสมัครข้ามเบราว์เซอร์, ค้นหา/ดูรายละเอียด, Approve/Reject, Dashboard และ Gemini วิเคราะห์ PDF แบบ opt-in. localStorage mode เดิมยังใช้ได้; ยังไม่มี PDF storage, durable rate limit และ audit log" },

  { category: "technical", q: "เทคโนโลยีที่ใช้มีอะไรบ้าง?", a: "Next.js App Router, React, TypeScript, CSS, Lucide, Supabase Auth, PostgreSQL/RLS และ Gemini API. Next.js Route Handler ใช้อ่านรอบ รับใบสมัคร และวิเคราะห์ PDF; localStorage เป็นโหมดเดโมสำรอง" },
  { category: "technical", q: "System Architecture ของระบบเป็นอย่างไร?", a: "React UI ใช้ Supabase Auth ให้กรรมการล็อกอิน; PostgreSQL/RLS เก็บรอบ ใบสมัคร สถานะ และผล AI. Next.js Route Handler รับใบสมัครและส่ง PDF ไป Gemini เฉพาะเมื่อยินยอม. PDF ต้นฉบับไม่ถูกเก็บ. หากไม่ตั้งค่า Supabase ใช้ localStorage เดิม" },
  { category: "technical", q: "Frontend กับ Backend อยู่ตรงไหน?", a: "Frontend คือหน้า Next.js/React. Backend คือ Route Handler /api/campaigns/[slug], /api/applications และ /api/analyze-portfolio; ฐานข้อมูลคือ Supabase PostgreSQL พร้อม RLS, บัญชีกรรมการใช้ Supabase Auth" },
  { category: "technical", q: "ในโปรเจกต์มี Database หรือยัง?", a: "มี Supabase PostgreSQL ใน demo mode แล้ว โดยเก็บ campaigns, applications และ teacher_members; RLS จำกัดสิทธิ์. เปิดโหมดนี้ด้วย environment variables. หากไม่ตั้งค่า Supabase แอปใช้ localStorage mode เดิม" },
  { category: "technical", q: "แต่ละ Route ของระบบคืออะไร?", a: "หน้าหลักคือ /dashboard, /applications, /applications/[id], /create, /apply/ux-ai-2026 และ /privacy. API คือ /api/campaigns/[slug], /api/applications และ /api/analyze-portfolio" },
  { category: "technical", q: "ถ้าจะพัฒนาต่อให้เป็นระบบจริง ต้องเพิ่มอะไร?", a: "ต้องเพิ่มการเก็บ PDF ต้นฉบับ, durable rate limit, audit log, backup/retention, AI retry/recovery, การบังคับ deadline, การทดสอบโหลดและคุณภาพ/ความเป็นธรรมของ AI. Supabase Auth, PostgreSQL/RLS และ API ใบสมัครมีในเดโมแล้ว" },

  { category: "ai", q: "AI ในโปรเจกต์ทำหน้าที่อะไร?", a: "Gemini วิเคราะห์ PDF ตาม Requirement เมื่อผู้สมัครติ๊กยินยอมเท่านั้น แล้วคืนคะแนนเสนอแนะ สรุป หลักฐานตามเกณฑ์ จุดแข็ง และข้อมูลที่ขาด; ผู้สมัครตัวอย่างเดิมยังใช้คะแนน mock" },
  { category: "ai", q: "AI ตัดสินรับนักเรียนแทนอาจารย์หรือไม่?", a: "ไม่ใช่ AI เป็นผู้ช่วยคัดกรองและนำเสนอข้อมูลเท่านั้น อาจารย์ต้องตรวจ Portfolio ต้นฉบับและตัดสินใจขั้นสุดท้าย" },
  { category: "ai", q: "คะแนน AI ในหน้าจอมาจากไหน?", a: "ผู้สมัครตัวอย่าง 4 รายใน localStorage mode มีคะแนน mock. ใบสมัคร Supabase ที่ยินยอมและวิเคราะห์สำเร็จบันทึกผล Gemini ใน DB; รายการที่ไม่ยินยอมหรือวิเคราะห์ไม่สำเร็จไม่มีคะแนน AI" },
  { category: "ai", q: "ข้อจำกัดของ AI ที่ควรพูดในการนำเสนอคืออะไร?", a: "AI อาจสรุปผิด มีอคติ หรือมองข้ามบริบทของผลงาน จึงต้องมี Human review และควรใช้คะแนนเป็นข้อมูลประกอบ ไม่ใช่เกณฑ์ตัดสินเพียงอย่างเดียว" },

  { category: "team", q: "กานต์รับผิดชอบอะไร?", a: "กานต์เป็น Project Lead ดูภาพรวมทางเทคนิค โครงสร้างระบบ Flow หลัก การแก้ interaction สำคัญ และอธิบาย Architecture กับเทคโนโลยี" },
  { category: "team", q: "ตงรับผิดชอบอะไร?", a: "ตงดู Frontend QA และ Demo stability ทดสอบทุกหน้าและ breakpoint ตรวจปุ่มหรือ Flow ที่สะดุด เก็บ Screenshot และเตรียม Demo backup" },
  { category: "team", q: "นัทรับผิดชอบอะไร?", a: "นัทดูรายงาน สไลด์ UX, User Flow, Literature Review, Test evidence, บทพูด และการสื่อสารภาพรวม โดยไม่จำเป็นต้องรับผิดชอบ Coding" },
  { category: "team", q: "ทุกคนต้องเข้าใจอะไรเหมือนกัน?", a: "ทุกคนต้องตอบได้ว่า ผู้ใช้คือใคร ปัญหาคืออะไร ระบบช่วยอย่างไร AI ทำอะไรไม่ได้บ้าง มีหน้าอะไรบ้าง และเหตุใดมนุษย์ยังต้องตัดสินใจ" },

  { category: "presentation", q: "ควรเริ่ม Demo ด้วยหน้าไหน?", a: "เริ่มที่หน้าเข้าสู่ระบบกรรมการ จากนั้น Create admission → เปิดลิงก์สมัครในอีกเบราว์เซอร์ → ส่ง PDF จำลอง → Applicants → Detail → Approve/Reject → Dashboard. Flow UI หลัง Supabase ยังต้องให้ตง QA" },
  { category: "presentation", q: "ควรเล่า Demo ตามลำดับอย่างไร?", a: "กรรมการล็อกอินและสร้างรอบ → ผู้สมัครเปิดลิงก์อีกเบราว์เซอร์ → ส่ง PDF จำลอง (เลือกยินยอม AI หรือไม่) → กรรมการดูรายชื่อ/ผล → Approve/Reject. API/DB ทดสอบแล้ว; UI ข้ามเบราว์เซอร์รอ QA จากตง" },
  { category: "presentation", q: "จุดขายของโปรเจกต์คืออะไร?", a: "รวมข้อมูลและเกณฑ์ใน flow เดียว พร้อม Gemini สรุปหลักฐานแบบ opt-in โดยกรรมการตัดสินเอง; ยังไม่มีผลวัดว่าช่วยลดเวลา หรือเพิ่มความแม่นยำแล้ว" },
  { category: "presentation", q: "ถ้าอาจารย์ถามว่าทำไมไม่ใช้ AI ตัดสินทั้งหมด ควรตอบอย่างไร?", a: "เพราะการรับสมัครมีบริบทและคุณค่าของผลงานที่อาจวัดด้วยตัวเลขไม่ได้ การให้ AI ช่วยสรุปแต่ให้กรรมการตรวจสอบช่วยลดความเสี่ยงจากความผิดพลาดและอคติ" },
  { category: "presentation", q: "ถ้าถูกถามว่าระบบทำงานจริงหรือยัง ควรตอบอย่างไร?", a: "Supabase demo mode บันทึกรอบและใบสมัครข้ามเบราว์เซอร์ได้ระดับ API/DB และ Gemini วิเคราะห์ PDF จำลองสำเร็จ; UI end-to-end ยังรอ QA. ยังไม่เก็บ PDF ต้นฉบับ ไม่มี durable rate limit หรือ audit/retention จึงยังไม่พร้อมรับข้อมูลผู้สมัครจริง" },
  { category: "presentation", q: "รายงานต้องมีหัวข้ออะไรบ้าง?", a: "ต้องมีชื่อโครงการ, ที่มาและความสำคัญ, วัตถุประสงค์, กลุ่มเป้าหมาย, ขอบเขต, Literature Review, วิธีดำเนินงานและ Architecture, ผลการดำเนินงาน, การประเมินผลและทดสอบ, สรุปผลและ Future Work" },
  { category: "presentation", q: "ควรเตรียมหลักฐานการทดสอบอะไร?", a: "เตรียม Test Case ของทุก Flow, Screenshot ก่อนและหลัง, ผลการทดสอบปุ่มและฟอร์ม, การทดสอบ Responsive และ Feedback จากผู้ทดลองใช้อย่างน้อยบางส่วน" },
  { category: "presentation", q: "ความเสี่ยงของโปรเจกต์มีอะไรบ้าง?", a: "ความเสี่ยงหลักคือ AI วิเคราะห์ผิด, ข้อมูลส่วนตัวรั่วไหล, คะแนนทำให้เกิดอคติ, ระบบจริงรองรับไฟล์ไม่พอ และผู้ใช้เข้าใจว่า AI เป็นผู้ตัดสิน" },
  { category: "presentation", q: "แนวทางพัฒนาต่อในอนาคตมีอะไรบ้าง?", a: "เพิ่ม PDF storage, durable rate limit, audit/retention, AI retry, การทดสอบโหลดและผู้ใช้จริง รวมทั้งประเมินคุณภาพ/ความเป็นธรรมของ AI. Supabase Auth, Database/RLS, API ใบสมัคร และ Gemini opt-in มีแล้ว" },
];

const input = document.querySelector("#search-input");
const form = document.querySelector("#search-form");
const clearButton = document.querySelector("#clear-search");
const list = document.querySelector("#question-list");
const empty = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const expandAll = document.querySelector("#expand-all");
let activeCategory = "all";

const normalize = (text) => text.toLowerCase().trim();
const render = () => {
  const query = normalize(input.value);
  const terms = query.split(/\s+/).filter(Boolean);
  const filtered = questions.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const content = normalize(`${item.q} ${item.a} ${item.category}`);
    return matchesCategory && (!query || content.includes(query) || terms.every((term) => content.includes(term)));
  });
  resultCount.textContent = `${filtered.length} คำถาม${query ? ` ที่ตรงกับ “${input.value}”` : ""}`;
  empty.hidden = filtered.length > 0;
  list.innerHTML = filtered.map((item, index) => `<details class="question-item"><summary><span class="question-number">${String(index + 1).padStart(2, "0")}</span><span>${item.q}</span></summary><div class="answer"><p>${item.a}</p></div></details>`).join("");
};

form.addEventListener("submit", (event) => { event.preventDefault(); render(); });
input.addEventListener("input", render);
clearButton.addEventListener("click", () => { input.value = ""; activeCategory = "all"; document.querySelectorAll(".category").forEach((button) => button.classList.toggle("active", button.dataset.category === "all")); render(); input.focus(); });
document.querySelectorAll(".category").forEach((button) => button.addEventListener("click", () => { activeCategory = button.dataset.category; document.querySelectorAll(".category").forEach((item) => item.classList.toggle("active", item === button)); render(); }));
expandAll.addEventListener("click", () => { const items = [...document.querySelectorAll(".question-item")]; const shouldOpen = items.some((item) => !item.open); items.forEach((item) => { item.open = shouldOpen; }); expandAll.textContent = shouldOpen ? "ปิดทั้งหมด" : "เปิดทั้งหมด"; });
document.addEventListener("keydown", (event) => { if (event.key === "/" && document.activeElement !== input) { event.preventDefault(); input.focus(); } });
render();
