# PortfolioMatch Project Guide

เว็บไซต์คลังคำถามกลางสำหรับอธิบายเป้าหมาย ขอบเขต User Flow หน้าที่ทีม และแนวทางการนำเสนอของโปรเจกต์ PortfolioMatch โดยเน้นการค้นหาและกรองตามหมวดคำถาม

## เปิดดูในเครื่อง

โปรเจกต์นี้เป็น static HTML/CSS/JavaScript ไม่ต้องติดตั้ง dependency

```bash
cd /home/thanakhorn/Desktop/coding/portwise-project-guide
python3 -m http.server 4173
```

จากนั้นเปิด <http://localhost:4173>

## โครงสร้าง

- `index.html` — โครงสร้างคลังคำถามและช่องค้นหา
- `styles.css` — visual system และ responsive layout
- `app.js` — ฐานคำถาม การค้นหา การกรองหมวด และเปิด/ปิดคำตอบ

## การค้นหา

ช่องค้นหาหลักรองรับคำค้นภาษาไทยและอังกฤษ เช่น `เป้าหมาย`, `มีกี่หน้า`, `architecture`, `ฟีเจอร์`, `กานต์` และ `demo` ผลลัพธ์จะกรองคำถามแบบทันที และกดหมวดเพื่อดูเฉพาะชุดคำถามที่ต้องการได้ นอกจากนี้กด `/` เพื่อโฟกัสช่องค้นหาได้
# PortfolioMatch-knowledge
