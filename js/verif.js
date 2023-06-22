const modalContainer = document.querySelector(".modal-container")
const modalTriggers = document.querySelectorAll(".modal-trigger")
const btn = document.querySelector(".boutton")
const bttn = document.querySelector(".bouton")
console.log(btn);

modalTriggers.forEach(trigger => trigger.addEventListener("click",toggleModal));

function toggleModal(){
    modalContainer.classList.toggle("active")
}
btn.addEventListener("click", (e)=>{
    e.preventDefault()
})
bttn.addEventListener("click", (e)=>{
    e.preventDefault()
})