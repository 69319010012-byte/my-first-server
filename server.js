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
}


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

}


.card h2{

    color:#ff8080;

}


.card p{

    font-size:18px;

    line-height:1.8;

}



/* เทคโนโลยี */

.tech-box{

    text-align:center;

    padding:20px;

    margin-top:25px;

    background:
    rgba(255,0,0,0.2);

    border-radius:20px;

}


.tech-box span{

    font-size:25px;

    color:#ffcccc;

}



/* Footer */

footer{

    text-align:center;

    margin-top:30px;

    color:#ffcccc;

}


</style>


</head>


<body>



<div class="container">


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

</p>


</div>





<div class="card">


<h2>
🌟 About Me
</h2>


<p>

💡 ความสามารถ :
การใช้โปรแกรมฐานข้อมูล,
การสร้างเว็บไซต์

</p>


<p>

🎯 คติประจำใจ :
"ทุกความท้าทายคือโอกาสในการเติบโต"

</p>


<p>

🚀 เป้าหมายในอนาคต :
อยากมีอนาคตที่ดี 
มีงานที่มั่นคง 
และมีความสุขในการใช้ชีวิต

</p>


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



</body>

</html>

    `);

});



// 5. เปิด Server ให้รับการเชื่อมต่อ

server.listen(port, () => {


console.log(

`Server is running on port ${port}`

);


});
