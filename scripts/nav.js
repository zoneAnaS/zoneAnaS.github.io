let nav_btn = document.querySelector("#nav-btn");
let nav_bar_icon=document.querySelector("#nav-bar i");

nav_btn.addEventListener("change",function(){
    if(this.checked){
        nav_bar_icon.classList.remove("fa-bars");
        nav_bar_icon.classList.add("fa-xmark");
       
    }else{
        nav_bar_icon.classList.add("fa-bars");
        nav_bar_icon.classList.remove("fa-xmark");
    }
    
})