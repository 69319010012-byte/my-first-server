// ============================================
// My First Web Server
// Developer : นางสาวมนัสนันท์ มุขโพธิ์เย็น
// Nickname : เฟรม
// Class : HIT.1/1 (VB)
// ============================================

// เรียกใช้งาน HTTP Module
const http = require("http");

// กำหนด Port
const PORT = process.env.PORT || 3000;

// สร้าง Server
const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`<!DOCTYPE html>
<html lang="th">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>My First Web Server - Frame</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Segoe UI,Tahoma,sans-serif;
    background:linear-gradient(135deg,#111,#7a0000,#ff3b3b);
    color:white;
}

.container{
    width:90%;
    max-width:1000px;
    margin:40px auto;
    padding:30px;
    background:rgba(0,0,0,.55);
    border-radius:25px;
    backdrop-filter:blur(10px);
    box-shadow:0 0 25px red;
}

h1{
    text-align:center;
    font-size:42px;
    color:#ff5252;
    text-shadow:0 0 15px red;
}

.subtitle{
    text-align:center;
    margin-top:10px;
    color:#ffd0d0;
}

.profile-img{
    display:block;
    width:250px;
    margin:30px auto;
    border-radius:20px;
    border:4px solid red;
    box-shadow:0 0 20px red;
}

.card{
    background:rgba(255,255,255,.08);
    padding:25px;
    margin-top:25px;
    border-radius:20px;
    border-left:6px solid red;
}

.card h2{
    color:#ff8080;
    margin-bottom:15px;
}

.card p{
    line-height:1.9;
    font-size:18px;
}

.tech{
    text-align:center;
    background:rgba(255,0,0,.15);
    padding:20px;
    margin-top:25px;
    border-radius:20px;
}

.tech h2{
    color:#ffb3b3;
    margin-bottom:15px;
}

.status{
    background:rgba(0,255,0,.08);
    padding:20px;
    border-radius:20px;
    margin-top:25px;
}

footer{
    text-align:center;
    margin-top:35px;
    color:#ffd6d6;
}

.balloon{
    position:fixed;
    bottom:-100px;
    width:50px;
    height:65px;
    border-radius:50%;
    animation:floatUp linear infinite;
}

.balloon::after{
    content:"";
    position:absolute;
    width:2px;
    height:25px;
    background:white;
    left:50%;
    bottom:-25px;
}

@keyframes floatUp{

0%{
transform:translateY(0);
}

100%{
transform:translateY(-120vh);
}

}

</style>

</head>

<body>

<div class="container">

<h1>🚀 My First Web Server</h1>

<p class="subtitle">
Welcome to Node.js Technology Server
</p>

<img class="profile-img"
src="https://png.pngtree.com/png-clipart/20250203/original/pngtree-cartoon-designer-working-on-computer-png-image_19858113.png">

<div class="card">

<h2>👩‍💻 Developer Profile</h2>

<p><b>ชื่อ-นามสกุล :</b> นางสาวมนัสนันท์ มุขโพธิ์เย็น</p>

<p><b>ชื่อเล่น :</b> เฟรม</p>

<p><b>ระดับชั้น :</b> HIT.1/1 (VB)</p>

<p><b>สาขาวิชา :</b> เทคโนโลยีสารสนเทศ</p>

<p><b>รหัสนักศึกษา :</b> 69319010012</p>

</div>

<div class="tech">

<h2>💻 Web Server Technology</h2>

<p>
เว็บไซต์นี้พัฒนาด้วย Node.js
โดยใช้ HTTP Module
สำหรับสร้าง Web Server
เพื่อศึกษาการทำงานของ Request และ Response
</p>

</div>

<div class="card">

<h2>🌟 About Me</h2>

<p>
💡 ความสามารถ :
การใช้โปรแกรมฐานข้อมูล,
การสร้างเว็บไซต์
</p>

<br>

<p>
🎯 คติประจำใจ :
ทุกความท้าทายคือโอกาสในการเติบโต
</p>

<br>

<p>
🚀 เป้าหมาย :
อยากมีอนาคตที่ดี มีงานที่มั่นคง
และมีความสุขในการใช้ชีวิต
</p>

</div>

<div class="status">

<h2>🌐 Server Status</h2>

<p>✅ เครื่องแม่ข่ายทำงานปกติ</p>

<p>✅ Node.js Server Running</p>

<p>✅ Deploy Successfully on Railway</p>

</div>

<footer>

❤️ Created by Frame | HIT.1/1 (VB)

</footer>

</div>

<script>

const colors=[
"#ff4d4d",
"#00d4ff",
"#ffd93d",
"#8aff80",
"#ff66cc"
];

function createBalloon(){

const b=document.createElement("div");

b.className="balloon";

b.style.left=Math.random()*100+"vw";

b.style.background=colors[Math.floor(Math.random()*colors.length)];

b.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(b);

setTimeout(()=>{
b.remove();
},12000);

}

setInterval(createBalloon,700);

</script>

</body>

</html>`);
});

// เปิด Server
server.listen(PORT, () => {
    console.log(
        "=====================================\n" +
        " Server Running Successfully\n" +
        "=====================================\n" +
        "URL : http://localhost:" + PORT + "\n" +
        "=====================================\n"
    );
});
