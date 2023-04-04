let nav_btn = document.querySelector("#nav-btn");
let nav_bar_icon=document.querySelector("#nav-bar i");
let nav_links=document.querySelectorAll(".nav-link");

nav_btn.addEventListener("change",function(){
    if(this.checked){
        nav_bar_icon.classList.remove("fa-bars");
        nav_bar_icon.classList.add("fa-xmark");
       
    }else{
        nav_bar_icon.classList.add("fa-bars");
        nav_bar_icon.classList.remove("fa-xmark");
    }
    
})
nav_links.forEach((el)=>{
    el.addEventListener("click",()=>{
        nav_btn.checked=false;
        nav_bar_icon.classList.add("fa-bars");
        nav_bar_icon.classList.remove("fa-xmark");
    })
})


document.querySelector("#resume-button-1").addEventListener("click",()=>{
    window.location.href="https://drive.google.com/u/0/uc?id=1DjQLqOVYTK_GJf1aAnbLDK_U2T63aqt_&export=download";
    window.open("https://drive.google.com/file/d/1DjQLqOVYTK_GJf1aAnbLDK_U2T63aqt_/view?usp=share_link","_blank") ;
})

document.querySelector("#resume-button-2").addEventListener("click",()=>{
    window.location.href="https://drive.google.com/u/0/uc?id=1DjQLqOVYTK_GJf1aAnbLDK_U2T63aqt_&export=download";
    window.open("https://drive.google.com/file/d/1DjQLqOVYTK_GJf1aAnbLDK_U2T63aqt_/view?usp=share_link","_blank") ;
})