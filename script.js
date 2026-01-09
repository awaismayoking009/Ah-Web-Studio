window.onload=()=>{
setTimeout(()=>document.getElementById("loader").style.display="none",1500)
}

function toggleMenu(){
document.getElementById("nav").classList.toggle("show")
}

const reveals=document.querySelectorAll(".reveal")
window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100)
el.classList.add("active")
})
})
