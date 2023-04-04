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
    // console.log("1")
    window.location.href="https://drive.google.com/u/0/uc?id=1WSBIQkMN-qUIUQN3S_E7WP0IYmIyiLuH&export=download";
    window.open("https://drive.google.com/file/d/1WSBIQkMN-qUIUQN3S_E7WP0IYmIyiLuH/view","_blank") ;
})

document.querySelector("#resume-button-2").addEventListener("click",()=>{
    // console.log("2")
    window.location.href="https://drive.google.com/u/0/uc?id=1WSBIQkMN-qUIUQN3S_E7WP0IYmIyiLuH&export=download";
    window.open("https://drive.google.com/file/d/1WSBIQkMN-qUIUQN3S_E7WP0IYmIyiLuH/view","_blank") ;
})