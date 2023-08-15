const btnMenu = document.getElementById("menu")
const nav = document.getElementById("nav")
const closeBtn = document.getElementById("close")

btnMenu.addEventListener("click",()=>{
    nav.classList.toggle("active")
})

closeBtn.addEventListener("click",()=>{
    nav.classList.toggle("active")
})