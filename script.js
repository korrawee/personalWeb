//Selectors
const navBar = document.querySelector("nav");
const comment = document.querySelector(".comment");
const loveRate = document.querySelector(".love");
//Events
window.addEventListener('scroll', () =>{
    if(window.scrollY > 20){
        navBar.classList.add('sticky');
    }else{
        navBar.classList.remove('sticky');
    }
});
window.addEventListener("click", addDetail);
//Functions
function addDetail(e){
    const rate = e.target.classList[0];
    if(comment.classList){
        comment.classList.remove();
    }
    switch(rate){
        case "love":
            comment.innerHTML = "<p><h1>COMPUTER ORGANIZATION</h1><br>การใช้พลังงานของคอมพิวเตอร์สถาปัตยกรรมคอมพิวเตอร<br>การเขียนภาษาแอสแซมบลี<br>ความสัมพันธ์ของภาษาแอสแซมบลีและภาษาระดับสูง<br>เรารู้สึกสนใจและอยากเข้าใจการทำงานสถาปัตยกรรมคอมพิวเตอร์ให้มากขึ้น</p>";
            comment.classList.replace(comment.classList[0],"bg-love");
            break;
        case "like":
            comment.innerHTML = "<p><h1>SOFTWARE DEVELOPMENT PRACTIC II</h1><br>การเขียนโปรแกรมให้แก้ไขง่าย<br>หลักการออกแบบโปรแกรม<br>เน้นการปฏิบัติและฝึกฝน<br>ชอบความรู้สึกดี เมื่อแก้ปัญหาหรือสร้างสิ่งที่คิดในหัวออกมาสำเร็จ</p>";
            comment.classList.replace(comment.classList[0],"bg-like");
            break;
        case "dont-like":
            comment.innerHTML = "<p><h1>COMPUTER NETWORKS I</h1><br>ระบบเครื่อข่ายคอมพิวเตอร์<br>การรับส่งข้อมูลระหว่างคอมพิวเตอร์<br>อุปกรณ์รับส่งข้อมูลแบบต่าง ๆ<br>เวลาทำความเข้าใจเนื้อหาของวิชานี้ ไม่รู้สึกมีความสนใจเท่าวิชาที่ชอบ</p>";
            comment.classList.replace(comment.classList[0],"bg-dont-like");
            break;
        case "hate":
            comment.innerHTML = "<p><h1>UBIQUITOUS COMPUTING</h1><br>คอมพิวเตอร์ทุกหนทุกแห่ง<br>อุปกรณ์รอบตัวเราที่มีความสามารถในการประมวนผลข้อมูล<br>วิธีการสื่อสารกันระหว่างอุปกรณ์<br>เรียนแล้วทำความเข้าใจได้ช้า ข้อมูลบนอินเตอร์เน็ตมีน้อย เนื้อหามีรายละเอียดเกี่ยวข้องหลายวิชา</p>";
            comment.classList.replace(comment.classList[0],"bg-hate");
            break;
        }
}