// ============================================
// My First Web Server
// Developer : นางสาวมนัสนันท์ มุขโพธิ์เย็น
// Nickname : เฟรม
// Class : HIT.1/1 (VB)
// ============================================

// 1. เรียกใช้งาน Module http ของ Node.js และ pg (PostgreSQL)
const http = require('http');
const { Pool } = require('pg');

// 2. ตั้งค่าการเชื่อมต่อ โดยดึง URL มาจาก Environment Variable ของ Railway
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// 3. กำหนด Port สำหรับ Server
const port = process.env.PORT || 3000;

// 4. สร้าง Server รับ Request และส่ง Response
const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    try {
        // 5. ขอเชื่อมต่อและส่งคำสั่ง SQL ไปดึงข้อมูลจากตาราง students
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM students');
        client.release(); // คืนการเชื่อมต่อเมื่อใช้งานเสร็จ

        // 6. นำข้อมูลที่ได้ (result.rows) มาประกอบเป็นตาราง HTML
        let studentTable = `<h2 style="color:#0f172a; margin-top:20px;">📊 ฐานข้อมูลนักศึกษา</h2>`;
        studentTable += `<table border="1" cellpadding="10" style="width:100%; border-collapse:collapse; background:#fff;">`;
        studentTable += `<tr style="background:#6c5ce7; color:white;"><th>รหัสนักศึกษา</th><th>ชื่อ-นามสกุล</th></tr>`;
        
        // วนลูปนำข้อมูลแต่ละแถวมาแสดง
        result.rows.forEach(row => {
            studentTable += `<tr><td>${row.student_id}</td><td>${row.student_name}</td></tr>`;
        });
        studentTable += `</table>`;

        // 7. สร้างหน้าเว็บไซต์พร้อมข้อมูลจากฐานข้อมูล
        res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My First Web Server - Frame</title>
<style>
/* ===== Minimal UI + Floating Balloons ===== */
:root{
  --bg:#f6f7fb;
  --card:#ffffff;
  --muted:#6b7280;
  --accent:#6c5ce7; /* purple accent */
  --glass: rgba(255,255,255,0.6);
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: Inter, "Segoe UI", Roboto, system-ui, -apple-system, "Helvetica Neue", Arial;
  background: radial-gradient(circle at 10% 10%, #f9fafb 0%, var(--bg) 40%);
  color:#111827;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:40px 16px;
}
.container{
  width:100%;
  max-width:880px;
  background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(250,250,255,0.95));
  border-radius:16px;
  padding:32px;
  box-shadow: 0 8px 30px rgba(17,24,39,0.08);
  position:relative;
  overflow:hidden;
}
.header{
  display:flex;
  gap:16px;
  align-items:center;
}
.logo{
  width:64px;
  height:64px;
  border-radius:12px;
  background: linear-gradient(135deg, var(--accent), #00b4d8);
  display:flex;align-items:center;justify-content:center;
  color:white;font-weight:700;font-size:20px;
  box-shadow: 0 6px 18px rgba(108,92,231,0.18);
}
h1{
  font-size:20px;margin:0;color:#0f172a;
}
.subtitle{margin:4px 0 0 0;color:var(--muted);font-size:13px}
.card-grid{display:grid;grid-template-columns:1fr 320px;gap:20px;margin-top:20px}
@media (max-width:820px){ .card-grid{grid-template-columns:1fr} }
.card{background:var(--card);border-radius:12px;padding:18px;box-shadow:0 6px 16px rgba(15,23,42,0.04);}
.profile-img{width:100%;height:auto;border-radius:10px;display:block}
.profile-info p{margin:8px 0;color:#111827;font-size:14px}
.profile-info b{color:#0f172a}
.tech-box{text-align:center;padding:14px;border-radius:10px;background:linear-gradient(90deg, rgba(108,92,231,0.08), rgba(0,180,216,0.06));color:var(--accent);font-weight:600}
.footer{margin-top:18px;text-align:center;color:var(--muted);font-size:13px}
table {
  margin-top:12px;
  width:100%;
  border-collapse:collapse;
  background:#f9fafb;
}
table th, table td {
  padding:10px;
  text-align:left;
  border-bottom:1px solid #e5e7eb;
}
table th {
  background:#6c5ce7;
  color:white;
  font-weight:600;
}
table tr:hover {
  background:#f3f4f6;
}

/* ===== Balloon styles ===== */
.balloon{
  position:absolute;
  bottom:-120px;
  width:48px;height:64px;border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;
  background:var(--accent);opacity:0.95;
  display:flex;align-items:center;justify-content:center;
  transform-origin:center bottom;
  box-shadow: 0 8px 18px rgba(16,24,40,0.08);
}
.balloon::after{
  content:'';position:absolute;bottom:-18px;height:18px;width:2px;background:linear-gradient(#bdbdbd,#9ca3af);left:50%;transform:translateX(-50%);
}
.balloon::before{content:'';position:absolute;top:12%;left:20%;width:26%;height:22%;border-radius:50%;background:linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.05));mix-blend-mode:screen}

@keyframes floatUp {
  0%{transform: translateY(0) translateX(0) rotate(0deg);opacity:1}
  100%{transform: translateY(-130vh) translateX(var(--dx)) rotate(25deg);opacity:0.92}
}

.balloon.slow{animation: floatUp 12s linear infinite}
.balloon.medium{animation: floatUp 10s linear infinite}
.balloon.fast{animation: floatUp 8s linear infinite}

</style>
</head>
<body>
<div class="container">

  <div class="header">
    <div class="logo">F</div>
    <div>
      <h1>My First Web Server</h1>
      <div class="subtitle">Minimal UI • Node.js • PostgreSQL Connected</div>
    </div>
  </div>

  <div class="card-grid">

    <div class="card">
      <img class="profile-img" src="https://png.pngtree.com/png-clipart/20250203/original/pngtree-cartoon-designer-working-on-computer-png-image_19858113.png" alt="profile">

      <div class="profile-info" style="margin-top:12px">
        <p><b>ชื่อ-นามสกุล :</b> นางสาวมนัสนันท์ มุขโพธิ์เย็น</p>
        <p><b>ชื่อเล่น :</b> เฟรม</p>
        <p><b>ระดับชั้น :</b> HIT.1/1 (VB)</p>
        <p><b>สาขาวิชา :</b> เทคโนโลยีสารสนเทศ</p>
        <p><b>รหัสนักศึกษา :</b> 69319010012</p>
      </div>

      <div style="margin-top:12px" class="tech-box">💻 Node.js + PostgreSQL Integration</div>

      <div style="margin-top:12px;color:var(--muted);font-size:14px">
        <p style="margin:8px 0"><b>💡 ความสามารถ :</b> ฐานข้อมูล PostgreSQL, การสร้างเว็บไซต์</p>
        <p style="margin:8px 0"><b>🎯 คติประจำใจ :</b> "ทุกความท้าทายคือโอกาสในการเติบโต"</p>
      </div>

    </div>

    <div class="card">
      <h3 style="margin:0 0 8px 0;color:#0f172a">Server Status</h3>
      <p style="margin:8px 0;color:var(--muted)">✅ เครื่องแม่ข่ายทำงานปกติ</p>
      <p style="margin:8px 0;color:var(--muted)">✅ Node.js Server Running</p>
      <p style="margin:8px 0;color:var(--muted)">✅ PostgreSQL Connected</p>
      <p style="margin:8px 0;color:var(--muted)">✅ Deploy on Railway</p>

      <div style="margin-top:18px;color:var(--muted);font-size:13px">
        ❤️ Created by Frame | HIT.1/1 (VB)
      </div>
    </div>

  </div>

  <!-- Database Table Section -->
  <div class="card" style="margin-top:20px;">
    ${studentTable}
  </div>

</div>

<script>
// Simple balloon generator
(function(){
  const colors = ['#6c5ce7','#00b4d8','#ff7675','#ffd166','#74c69d'];
  const container = document.querySelector('.container');
  const maxBalloons = 8;

  function rand(min,max){return Math.random()*(max-min)+min}

  function createBalloon(){
    const el = document.createElement('div');
    el.className = 'balloon';
    const w = Math.round(rand(36,72));
    const h = Math.round(w * 1.25);
    el.style.width = w+'px';
    el.style.height = h+'px';
    const left = Math.round(rand(5,95));
    el.style.left = left + '%';
    el.style.setProperty('--dx', (Math.round(rand(-30,30))) + 'vw');
    el.style.background = colors[Math.floor(rand(0,colors.length))];
    const speed = Math.random();
    el.classList.add(speed>0.66? 'fast' : (speed>0.33? 'medium' : 'slow'));
    el.style.transform = 'translateY(0) rotate(' + Math.round(rand(-10,10)) + 'deg)';
    container.appendChild(el);
    const duration = parseFloat(getComputedStyle(el).animationDuration) || (8 + Math.random()*6);
    setTimeout(()=>{
      if(el && el.parentNode) el.parentNode.removeChild(el);
    }, (duration*1000)+500);
  }

  setInterval(()=>{
    const existing = container.querySelectorAll('.balloon').length;
    if(existing < maxBalloons && Math.random() > 0.35){
      createBalloon();
    }
    if(Math.random() > 0.92){
      createBalloon();
      createBalloon();
    }
  }, 700);

  for(let i=0;i<4;i++) createBalloon();
})();
</script>

</body>
</html>
        `);
    } catch (err) {
        // กรณีเชื่อมต่อไม่ได้หรือเขียนชื่อตารางผิด
        console.error(err);
        res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Error</title>
<style>
body { font-family: Arial; padding: 40px; background:#f6f7fb; }
h1 { color:#ff7675; }
p { color:#6b7280; line-height:1.6; }
code { background:#f3f4f6; padding:10px; display:block; margin:10px 0; border-radius:8px; overflow-x:auto; }
</style>
</head>
<body>
<h1>❌ เกิดข้อผิดพลาด!</h1>
<p><b>ข้อผิดพลาด:</b> ${err.message}</p>
<p><b>สาเหตุที่อาจจะเกิด:</b></p>
<ul>
  <li>ยังไม่ได้ตั้งค่า DATABASE_URL ใน Environment Variable</li>
  <li>ชื่อตารางหรือคอลัมน์อาจเขียนผิด</li>
  <li>ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ฐานข้อมูล</li>
</ul>
<code>${err.stack}</code>
<p><a href="/" style="color:#6c5ce7; text-decoration:none;">🔄 รีเฟรช</a></p>
</body>
</html>
        `);
    }
});

// 8. เปิด Server ให้รับการเชื่อมต่อ
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Database connection pool created`);
});
