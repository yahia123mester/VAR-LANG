let body = document.body;
let logo = document.getElementsByClassName("logo");
let list = [document.getElementById("HOME"),document.getElementById("MEN"),document.getElementById("WOMEN"),document.getElementById("KIDS"),document.getElementById("ARA"),document.getElementById("ENG")];
let TEXT = document.getElementById("TEXT");
let TEXT2 = document.getElementById("TEXT2");
let ARAB  = document.getElementById("ARA");
let ENGL = document.getElementById("ENG");
ARAB.onclick = ()=>{
LANG("arabic");
localStorage.setItem("lang", "arabic");
};
ENGL.onclick = ()=>{
LANG("english");
localStorage.setItem("lang", "english");
};
onload = ()=>{
    LANG(localStorage.getItem("lang"));
}
function LANG(LANGUE){
    if(LANGUE === "arabic"){
        body.style.cssText = `direction: rtl;`;
        list[0].innerHTML = "الصفحة الرئيسية";
        list[1].innerHTML = "الرجال";
        list[2].innerHTML = "النساء";
        list[3].innerHTML = "الاطفال";
        ARAB.innerHTML = "العربية";
        ENGL.innerHTML = "الانجليزية";
        TEXT.innerHTML = "احذية الجري,أديداس سوريا ";
        TEXT2.innerHTML = "هذه الاحذية ذو جودة عالية مقدمة من شركة اديداس فرع سوريا التي تقدم اجود انواع الاحذية للاطفال وللرجال وللنساء ولجميع الاعمار ";
    }else if(LANGUE === "english"){
        body.style.cssText = `direction: ltr;`;
        list[0].innerHTML = "HOME";
        list[1].innerHTML = "MEN";
        list[2].innerHTML = "WOMEN";
        list[3].innerHTML = "KIDS";
        ARAB.innerHTML = "ARA";
        ENGL.innerHTML = "ENG";
        TEXT.innerHTML = "ADIDAS SYRIA, <br>Running Shoes";
        TEXT2.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo magni eos consectetur eum, dolorum similique.";
    }
}