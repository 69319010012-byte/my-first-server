// ============================================
// My First Web Server
// Developer : นางสาวมนัสนันท์ มุขโพธิ์เย็น
// Nickname : เฟรม
// Class : HIT.1/1 (VB)
// ============================================


// 1. เรียกใช้งาน Module http ของ Node.js
const http = require('http');


// 2. กำหนด Port สำหรับ Server
const port = process.env.PORT || 3000;


// 3. สร้าง Server รับ Request และส่ง Response
const server = http.createServer((req, res) => {


    // กำหนดสถานะการทำงาน
    res.statusCode = 200;


    // กำหนดประเภทข้อมูลที่ส่งกลับ
    res.setHeader(
        'Content-Type',
        'text/html; charset=utf-8'
    );


    // 4. สร้างหน้าเว็บไซต์
    res.end(`

<!DOCTYPE html>

<html lang="th">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">


<title>My First Web Server - Frame</title>


<style>


*{
    box-sizing:border-box;
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

    font-family:
    "Segoe UI",
    Tahoma,
    sans-serif;

    background:
    linear-gradient(
    135deg,
    #150000,
    #660000,
    #ff1a1a
    );

    color:white;

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


/* กล่องหลัก */

.container{

    width:85%;

    max-width:900px;

    margin:40px auto;

    background:
    rgba(0,0,0,0.65);

    padding:35px;

    border-radius:30px;

    box-shadow:
    0 0 30px red;

}


/* หัวข้อ */

h1{

    text-align:center;

    color:#ff4d4d;

    font-size:42px;

    text-shadow:
    0 0 15px red;

}


.subtitle{

    text-align:center;

    font-size:20px;

    color:#ffd6d6;

}



/* รูปภาพ */

.profile-img{

    display:block;

    margin:25px auto;

    width:230px;

    border-radius:25px;

    border:
    4px solid #ff3333;

    box-shadow:
    0 0 25px red;

  width:100%;
  max-width:880px;
  background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(250,250,255,0.95));
  border-radius:16px;
  padding:32px;
  box-shadow: 0 8px 30px rgba(17,24,39,0.08);
  position:relative;
  overflow:hidden;
}



/* กล่องข้อมูล */

.card{

    background:
    rgba(255,255,255,0.12);

    margin-top:25px;

    padding:25px;

    border-radius:20px;

    border-left:
    6px solid #ff3333;

.header{
  display:flex;
  gap:16px;
  align-items:center;
}


.card h2{

    color:#ff8080;

.logo{
  width:64px;
  height:64px;
  border-radius:12px;
  background: linear-gradient(135deg, var(--accent), #00b4d8);
  display:flex;align-items:center;justify-content:center;
  color:white;font-weight:700;font-size:20px;
  box-shadow: 0 6px 18px rgba(108,92,231,0.18);
}


.card p{

    font-size:18px;

    line-height:1.8;

h1{
  font-size:20px;margin:0;color:#0f172a;
}



/* เทคโนโลยี */

.tech-box{

    text-align:center;

    padding:20px;

    margin-top:25px;

    background:
    rgba(255,0,0,0.2);

    border-radius:20px;

.subtitle{margin:4px 0 0 0;color:var(--muted);font-size:13px}
.card-grid{display:grid;grid-template-columns:1fr 320px;gap:20px;margin-top:20px}
@media (max-width:820px){ .card-grid{grid-template-columns:1fr} }
.card{background:var(--card);border-radius:12px;padding:18px;box-shadow:0 6px 16px rgba(15,23,42,0.04);}
.profile-img{width:100%;height:auto;border-radius:10px;display:block}
.profile-info p{margin:8px 0;color:#111827;font-size:14px}
.profile-info b{color:#0f172a}
.tech-box{text-align:center;padding:14px;border-radius:10px;background:linear-gradient(90deg, rgba(108,92,231,0.08), rgba(0,180,216,0.06));color:var(--accent);font-weight:600}
.footer{margin-top:18px;text-align:center;color:var(--muted);font-size:13px}

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


.tech-box span{

    font-size:25px;

    color:#ffcccc;

.balloon::after{
  /* little string */
  content:'';position:absolute;bottom:-18px;height:18px;width:2px;background:linear-gradient(#bdbdbd,#9ca3af);left:50%;transform:translateX(-50%);
}
/* subtle glossy highlight */
.balloon::before{content:'';position:absolute;top:12%;left:20%;width:26%;height:22%;border-radius:50%;background:linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.05));mix-blend-mode:screen;}



/* Footer */

footer{

    text-align:center;

    margin-top:30px;

    color:#ffcccc;

@keyframes floatUp {
  0%{transform: translateY(0) translateX(0) rotate(0deg);opacity:1}
  100%{transform: translateY(-130vh) translateX(var(--dx)) rotate(25deg);opacity:0.92}
}

/* different speeds */
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
      <div class="subtitle">Minimal UI • Node.js • Simple floating balloons</div>
    </div>
  </div>

<h1>
🚀 My First Web Server
</h1>


<p class="subtitle">
Welcome to Node.js Technology Server
</p>



<img class="profile-img"

src="https://png.pngtree.com/png-clipart/20250203/original/pngtree-cartoon-designer-working-on-computer-png-image_19858113.png">


<div class="card">


<h2>
👩‍💻 Developer Profile
</h2>


<p>
<b>ชื่อ-นามสกุล :</b>
นางสาวมนัสนันท์ มุขโพธิ์เย็น
</p>


<p>
<b>ชื่อเล่น :</b>
เฟรม
</p>


<p>
<b>ระดับชั้น :</b>
HIT.1/1 (VB)
</p>


<p>
<b>สาขาวิชา :</b>
เทคโนโลยีสารสนเทศ
</p>


<p>
<b>รหัสนักศึกษา :</b>
69319010012
</p>


</div>





<div class="tech-box">


<span>
💻 Web Server Technology
</span>


<p>

เว็บไซต์นี้พัฒนาด้วย Node.js
โดยใช้ HTTP Module 
สำหรับสร้าง Web Server 
เพื่อเรียนรู้การทำงานของ Server,
Request และ Response
  <div class="card-grid">

</p>
    <div class="card">
      <img class="profile-img" src="https://png.pngtree.com/png-clipart/20250203/original/pngtree-cartoon-designer-working-on-computer-png-image_19858113.png" alt="profile">

      <div class="profile-info" style="margin-top:12px">
        <p><b>ชื่อ-นามสกุล :</b> นางสาวมนัสนันท์ มุขโพธิ์เย็น</p>
        <p><b>ชื่อเล่น :</b> เฟรม</p>
        <p><b>ระดับชั้น :</b> HIT.1/1 (VB)</p>
        <p><b>สาขาวิชา :</b> เทคโนโลยีสารสนเทศ</p>
        <p><b>รหัสนักศึกษา :</b> 69319010012</p>
      </div>

</div>





<div class="card">


<h2>
🌟 About Me
</h2>


<p>

💡 ความสามารถ :
การใช้โปรแกรมฐานข้อมูล,
การสร้างเว็บไซต์
      <div style="margin-top:12px" class="tech-box">💻 พัฒนาโดย Node.js (HTTP Module)</div>

</p>
      <div style="margin-top:12px;color:var(--muted);font-size:14px">
        <p style="margin:8px 0"><b>💡 ความสามารถ :</b> การใช้โปรแกรมฐานข้อมูล, การสร้างเว็บไซต์</p>
        <p style="margin:8px 0"><b>🎯 คติประจำใจ :</b> "ทุกความท้าทายคือโอกาสในการเติบโต"</p>
      </div>

    </div>

<p>
    <div class="card">
      <h3 style="margin:0 0 8px 0;color:#0f172a">Server Status</h3>
      <p style="margin:8px 0;color:var(--muted)">✅ เครื่องแม่ข่ายทำงานปกติ</p>
      <p style="margin:8px 0;color:var(--muted)">✅ Node.js Server Running</p>
      <p style="margin:8px 0;color:var(--muted)">✅ Deploy Successfully on Railway</p>

🎯 คติประจำใจ :
"ทุกความท้าทายคือโอกาสในการเติบโต"
      <div style="margin-top:18px;color:var(--muted);font-size:13px">
        ❤️ Created by Frame | HIT.1/1 (VB)
      </div>
    </div>

</p>


<p>

🚀 เป้าหมายในอนาคต :
อยากมีอนาคตที่ดี 
มีงานที่มั่นคง 
และมีความสุขในการใช้ชีวิต

</p>
  </div>

  <!-- balloons will be injected here -->

</div>





<div class="card">


<h2>
🌐 Server Status
</h2>


<p>

✅ เครื่องแม่ข่ายทำงานปกติ

<br>

✅ Node.js Server Running

<br>

✅ Deploy Successfully on Railway

</p>


</div>



<footer>

❤️ Created by Frame | HIT.1/1 (VB)

</footer>



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
    // random size
    const w = Math.round(rand(36,72));
    const h = Math.round(w * 1.25);
    el.style.width = w+'px';
    el.style.height = h+'px';
    // random left position within container
    const left = Math.round(rand(5,95));
    el.style.left = left + '%';
    // random horizontal drift for final position
    el.style.setProperty('--dx', (Math.round(rand(-30,30))) + 'vw');
    // color
    el.style.background = colors[Math.floor(rand(0,colors.length))];
    // speed
    const speed = Math.random();
    el.classList.add(speed>0.66? 'fast' : (speed>0.33? 'medium' : 'slow'));
    // slight initial tilt
    el.style.transform = 'translateY(0) rotate(' + Math.round(rand(-10,10)) + 'deg)';

    container.appendChild(el);

    // remove after animation to keep DOM small
    const duration = parseFloat(getComputedStyle(el).animationDuration) || (8 + Math.random()*6);
    setTimeout(()=>{
      if(el && el.parentNode) el.parentNode.removeChild(el);
    }, (duration*1000)+500);
  }

  // maintain a steady number of balloons
  setInterval(()=>{
    const existing = container.querySelectorAll('.balloon').length;
    if(existing < maxBalloons && Math.random() > 0.35){
      createBalloon();
    }
    // occasionally burst a few
    if(Math.random() > 0.92){
      createBalloon();
      createBalloon();
    }
  }, 700);

  // initial burst
  for(let i=0;i<4;i++) createBalloon();
})();
</script>

</body>const http = require('http');
// 1. เรียกใชงาน Pool จากไลบรารี pg สําหรับจัดการการเชื่อมตอฐานขอมูล
const { Pool } = require('pg');
// 2. ตั้งคาการเชื่อมตอ โดยดึง URL มาจาก Environment Variable ของ Railway
const pool = new Pool({
connectionString: process.env.DATABASE_URL,
});
const port = process.env.PORT || 3000;
const server = http.createServer(async (req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html; charset=utf-8');

try {
// 3. ขอเชื่อมตอและสงคําสั่ง SQL ไปดึงขอมูลจากตาราง students
const client = await pool.connect();
const result = await client.query('SELECT * FROM students');
client.release(); // คนืการเชื่อมตอเมื่อใชงานเสร็จ
// 4. นําขอมูลที่ได(result.rows) มาประกอบเปนตาราง HTML
let html = `<h1>ฐานขอมูลนักศึกษา (ทดสอบการเชื่อมตอ)</h1>`;
html += `<table border="1" cellpadding="10">`;
html += `<tr><th>69319010012 </th><th> นางสาวมนัสนันท์ มุขโพธิ์เย็๋น </th></tr>`;
// วนลูปนําขอมูลแตละแถวมาแสดง
result.rows.forEach(row => {
html += `<tr><td>${row.student_id}</td><td>${row.student_name}</td></tr>`;
});
html += `</table>`;
res.end(html);
} catch (err) {
// กรณเีชื่อมตอไมไดหรือเขียนชื่อตารางผิด
console.error(err);
res.end(`<h1>เกิดขอผิดพลาด!</h1><p>${err.message}</p>`);
}
});
server.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});
