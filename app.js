const questions = [
  { category: "overview", q: "PortfolioMatch คืออะไร?", a: "PortfolioMatch คือระบบ AI-assisted Portfolio Screening สำหรับช่วยอาจารย์หรือคณะกรรมการรับสมัครจัดระเบียบและคัดกรอง Portfolio ของผู้สมัคร โดย AI ช่วยสรุปข้อมูลและจับคู่กับ Requirement แต่การตัดสินใจสุดท้ายยังเป็นของอาจารย์" },
  { category: "overview", q: "ชื่อ PortfolioMatch สื่อถึงอะไร?", a: "Portfolio + Match หมายถึงการนำ Portfolio ของผู้สมัครมาเปรียบเทียบกับ Requirement ของสาขาหรือคณะ เพื่อดูว่าผู้สมัครมีความตรงกันมากน้อยเพียงใด" },
  { category: "overview", q: "เป้าหมายหลักของโปรเจกต์คืออะไร?", a: "ลดเวลาที่กรรมการใช้จัดระเบียบและอ่าน Portfolio จำนวนมาก พร้อมช่วยให้เปรียบเทียบผู้สมัครตามเกณฑ์เดียวกันได้ง่ายขึ้น โดยไม่ให้ AI ตัดสินแทนมนุษย์" },
  { category: "overview", q: "ที่มาและความสำคัญของโปรเจกต์คืออะไร?", a: "การรับสมัครแบบ Portfolio มีเอกสารจำนวนมากและกรรมการมีเวลาจำกัด การตัดสินใจอาจขึ้นกับความเร็วในการอ่านมากกว่าคุณภาพของหลักฐาน ระบบจึงช่วยสรุปสัญญาณสำคัญให้เห็นเร็วและตรวจสอบย้อนกลับได้" },
  { category: "overview", q: "ปัญหาหลักที่ระบบต้องการแก้คืออะไร?", a: "ข้อมูลผู้สมัครกระจัดกระจาย ใช้เวลาคัดกรองนาน และแต่ละคนอาจถูกอ่านด้วยมาตรฐานไม่เท่ากัน PortfolioMatch จึงจัดข้อมูลและ Requirement ให้อยู่ในมุมมองเดียวกัน" },
  { category: "overview", q: "ใครคือกลุ่มเป้าหมายของระบบ?", a: "ผู้ใช้หลักมี 2 กลุ่ม คืออาจารย์หรือคณะกรรมการรับสมัครที่ตรวจ Portfolio และนักเรียน/นักศึกษาที่กรอกข้อมูลและส่ง Portfolio" },

  { category: "product", q: "โปรเจกต์มีทั้งหมดกี่หน้า?", a: "มี 6 หน้าหลัก ได้แก่ Dashboard, Applicants, Applicant detail, Create admission, Application form และ Submission success โดยหน้าแรกจะ redirect ไป Dashboard" },
  { category: "product", q: "หน้า Dashboard ทำหน้าที่อะไร?", a: "แสดงภาพรวมการรับสมัคร เช่น จำนวนผู้สมัคร อัตราความตรงกับ Requirement จำนวนที่รอตรวจสอบ รายการ Admission ที่เปิดอยู่ และผู้สมัครล่าสุด" },
  { category: "product", q: "หน้า Applicants ทำหน้าที่อะไร?", a: "แสดงรายชื่อผู้สมัครทั้งหมด พร้อมโรงเรียน คะแนน match สถานะ และทางเข้าหน้ารายละเอียดของแต่ละคน" },
  { category: "product", q: "หน้า Applicant detail แสดงข้อมูลอะไร?", a: "แสดง AI summary, คะแนนรวม, คะแนนแยกตาม Requirement, เหตุผลที่แนะนำให้ Shortlist, Portfolio preview, ข้อมูลการสมัคร และปุ่ม Approve/Reject" },
  { category: "product", q: "หน้า Create admission ใช้ทำอะไร?", a: "ให้อาจารย์กำหนดชื่อรอบรับสมัคร ปีการศึกษา สาขา วันปิดรับสมัคร และเขียน Requirement ด้วยภาษาธรรมชาติ จากนั้นสร้างลิงก์ให้ผู้สมัคร" },
  { category: "product", q: "หน้า Application form ใช้ทำอะไร?", a: "ให้ผู้สมัครกรอกชื่อ อีเมล เบอร์โทรศัพท์ GPAX โรงเรียน อัปโหลด Portfolio แบบ PDF และเขียนคำอธิบายผลงานเพิ่มเติม" },
  { category: "product", q: "ฟีเจอร์หลักของ PortfolioMatch มีอะไรบ้าง?", a: "มี Requirement setup, Portfolio upload, AI summary, Requirement matching, Applicant status, Portfolio review และ Human decision ผ่าน Approve/Reject" },

  { category: "technical", q: "เทคโนโลยีที่ใช้มีอะไรบ้าง?", a: "Frontend ใช้ Next.js, React และ TypeScript ส่วน UI ใช้ CSS และ Lucide Icons โปรเจกต์ปัจจุบันเป็น frontend prototype ที่ build ได้ด้วย Next.js" },
  { category: "technical", q: "System Architecture ของระบบเป็นอย่างไร?", a: "ชั้น Client มีอาจารย์และผู้สมัคร เชื่อมเข้ากับ PortfolioMatch Web App ชั้น Application ซึ่งปัจจุบันเป็น prototype ส่วน AI Service และ Database อยู่ใน Future Services ที่ต้องพัฒนาต่อ" },
  { category: "technical", q: "Frontend กับ Backend อยู่ตรงไหน?", a: "Frontend และหน้าจอ flow มีอยู่ในโปรเจกต์แล้ว แต่ Backend จริงยังไม่มี ส่วนข้อมูลที่เห็นเป็น Mock data และ state ชั่วคราวในหน้าเว็บ" },
  { category: "technical", q: "ในโปรเจกต์มี Database หรือยัง?", a: "ยังไม่มี Database จริง ข้อมูลผู้สมัคร คะแนน และสถานะต่าง ๆ เป็นข้อมูลจำลองที่เขียนไว้ในหน้าเว็บ" },
  { category: "technical", q: "แต่ละ Route ของระบบคืออะไร?", a: "ใช้ <code>/dashboard</code>, <code>/applications</code>, <code>/applications/[id]</code>, <code>/create</code> และ <code>/apply/ux-ai-2026</code> ส่วน <code>/</code> redirect ไป Dashboard" },
  { category: "technical", q: "ถ้าจะพัฒนาต่อให้เป็นระบบจริง ต้องเพิ่มอะไร?", a: "ต้องเพิ่ม Authentication, Backend API, Database, File storage, AI service, validation, permission ของกรรมการ และระบบบันทึกผล Approve/Reject แบบถาวร" },

  { category: "ai", q: "AI ในโปรเจกต์ทำหน้าที่อะไร?", a: "AI มีหน้าที่ช่วยสรุป Portfolio และวิเคราะห์ความตรงกับ Requirement เช่น Design Thinking, Visual Communication, Digital Tools และ Social Impact" },
  { category: "ai", q: "AI ตัดสินรับนักเรียนแทนอาจารย์หรือไม่?", a: "ไม่ใช่ AI เป็นผู้ช่วยคัดกรองและนำเสนอข้อมูลเท่านั้น อาจารย์ต้องตรวจ Portfolio ต้นฉบับและตัดสินใจขั้นสุดท้าย" },
  { category: "ai", q: "คะแนน AI ในหน้าจอมาจากไหน?", a: "ใน Prototype คะแนนและข้อความสรุปเป็นข้อมูลจำลองเพื่อแสดงประสบการณ์ของระบบ ยังไม่ได้เชื่อมต่อ AI Model จริง" },
  { category: "ai", q: "ข้อจำกัดของ AI ที่ควรพูดในการนำเสนอคืออะไร?", a: "AI อาจสรุปผิด มีอคติ หรือมองข้ามบริบทของผลงาน จึงต้องมี Human review และควรใช้คะแนนเป็นข้อมูลประกอบ ไม่ใช่เกณฑ์ตัดสินเพียงอย่างเดียว" },

  { category: "team", q: "กานต์รับผิดชอบอะไร?", a: "กานต์เป็น Project Lead ดูภาพรวมทางเทคนิค โครงสร้างระบบ Flow หลัก การแก้ interaction สำคัญ และอธิบาย Architecture กับเทคโนโลยี" },
  { category: "team", q: "ตงรับผิดชอบอะไร?", a: "ตงดู Frontend QA และ Demo stability ทดสอบทุกหน้าและ breakpoint ตรวจปุ่มหรือ Flow ที่สะดุด เก็บ Screenshot และเตรียม Demo backup" },
  { category: "team", q: "นัทรับผิดชอบอะไร?", a: "นัทดูรายงาน สไลด์ UX, User Flow, Literature Review, Test evidence, บทพูด และการสื่อสารภาพรวม โดยไม่จำเป็นต้องรับผิดชอบ Coding" },
  { category: "team", q: "ทุกคนต้องเข้าใจอะไรเหมือนกัน?", a: "ทุกคนต้องตอบได้ว่า ผู้ใช้คือใคร ปัญหาคืออะไร ระบบช่วยอย่างไร AI ทำอะไรไม่ได้บ้าง มีหน้าอะไรบ้าง และเหตุใดมนุษย์ยังต้องตัดสินใจ" },

  { category: "presentation", q: "ควรเริ่ม Demo ด้วยหน้าไหน?", a: "เริ่มที่ Dashboard เพื่อเล่าปัญหาและภาพรวม จากนั้นไป Create admission → Application form → Applicant detail เพื่อเล่า Flow ตั้งแต่สร้าง Requirement ถึงตัดสินใจ" },
  { category: "presentation", q: "ควรเล่า Demo ตามลำดับอย่างไร?", a: "1) ปัญหาพอร์ตจำนวนมาก 2) อาจารย์กำหนด Requirement 3) ผู้สมัครส่ง Portfolio 4) AI สรุปและจับคู่ 5) อาจารย์ตรวจหลักฐานและ Approve/Reject" },
  { category: "presentation", q: "จุดขายของโปรเจกต์คืออะไร?", a: "ช่วยลดเวลาในการคัดกรอง ทำให้เห็นหลักฐานตาม Requirement เดียวกัน และย้ำแนวคิด Human-in-the-loop ที่ AI ช่วยสรุปแต่คนรับผิดชอบการตัดสินใจ" },
  { category: "presentation", q: "ถ้าอาจารย์ถามว่าทำไมไม่ใช้ AI ตัดสินทั้งหมด ควรตอบอย่างไร?", a: "เพราะการรับสมัครมีบริบทและคุณค่าของผลงานที่อาจวัดด้วยตัวเลขไม่ได้ การให้ AI ช่วยสรุปแต่ให้กรรมการตรวจสอบช่วยลดความเสี่ยงจากความผิดพลาดและอคติ" },
  { category: "presentation", q: "ถ้าถูกถามว่าระบบทำงานจริงหรือยัง ควรตอบอย่างไร?", a: "ตอนนี้เป็น Interactive prototype สำหรับสื่อสารแนวคิดและ User Experience โดยมี Flow หลักครบ แต่ AI, Backend และ Database ยังเป็นส่วนที่ต้องพัฒนาต่อ" },
  { category: "presentation", q: "รายงานต้องมีหัวข้ออะไรบ้าง?", a: "ต้องมีชื่อโครงการ, ที่มาและความสำคัญ, วัตถุประสงค์, กลุ่มเป้าหมาย, ขอบเขต, Literature Review, วิธีดำเนินงานและ Architecture, ผลการดำเนินงาน, การประเมินผลและทดสอบ, สรุปผลและ Future Work" },
  { category: "presentation", q: "ควรเตรียมหลักฐานการทดสอบอะไร?", a: "เตรียม Test Case ของทุก Flow, Screenshot ก่อนและหลัง, ผลการทดสอบปุ่มและฟอร์ม, การทดสอบ Responsive และ Feedback จากผู้ทดลองใช้อย่างน้อยบางส่วน" },
  { category: "presentation", q: "ความเสี่ยงของโปรเจกต์มีอะไรบ้าง?", a: "ความเสี่ยงหลักคือ AI วิเคราะห์ผิด, ข้อมูลส่วนตัวรั่วไหล, คะแนนทำให้เกิดอคติ, ระบบจริงรองรับไฟล์ไม่พอ และผู้ใช้เข้าใจว่า AI เป็นผู้ตัดสิน" },
  { category: "presentation", q: "แนวทางพัฒนาต่อในอนาคตมีอะไรบ้าง?", a: "เพิ่ม Backend และ Database จริง เชื่อม AI Model, ทำระบบ Login และ Permission, เพิ่มการวิเคราะห์ PDF, เก็บ Audit log, เพิ่มการเปรียบเทียบผู้สมัคร และทำ User testing กับกรรมการจริง" },
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
