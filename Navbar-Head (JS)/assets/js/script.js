let btnClose = document.querySelector(".close-btn")
let nav = document.querySelector(".nav-bar")
let btnOpen = document.querySelector(".open")

btnClose.addEventListener("click",function(){
    nav.classList.remove("open-menu");
    nav.classList.add("close-menu")
})
btnOpen.addEventListener("click",function(){
    nav.classList.remove("close-menu");
    nav.classList.add("open-menu")
})