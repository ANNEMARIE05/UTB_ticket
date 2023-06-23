const modalContainer = document.querySelector(".modal-container")
const modalTriggers = document.querySelectorAll(".modal-trigger")
const bancaire = document.querySelector(".bancaire")
const money = document.querySelector(".money")
const valider = document.querySelector(".valider")
const liens = document.querySelector(".liens")
const lien = document.querySelector(".lien")

const myname = document.querySelector(".myname")
const mydepart = document.querySelector(".mydepart")
const myarriver = document.querySelector(".myarriver")
const mydate = document.querySelector(".mydate")
const myheure = document.querySelector(".myheure")



modalTriggers.forEach(trigger => trigger.addEventListener("click",toggleModal));

function toggleModal(){
    modalContainer.classList.toggle("active")
}
bancaire.addEventListener("click", (e)=>{
    e.preventDefault()
})
money.addEventListener("click", (e)=>{
    e.preventDefault()
})
valider.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.pathname="/html/ticket.html";
})
liens.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href="/index.html";
})
lien.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href="/index.html";
})
let recuperer = localStorage.getItem("monTicket")


recuperer = JSON.parse(recuperer)
myname.textContent=recuperer.nom
mydepart.textContent=recuperer.mondepart
myarriver.textContent=recuperer.monarriver
mydate.textContent=recuperer.madate
myheure.textContent=recuperer.monheure
console.log(recuperer.mondepart)
