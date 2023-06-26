const ipt = document.querySelector(".ipt")
const depart = document.querySelector("#depart")
const arriver = document.querySelector("#arriver")
const date = document.querySelector("#date")
const heure = document.querySelector("#heure")
const soumettre = document.querySelector('.soumettre')


soumettre.addEventListener("click",() =>{
    console.log(ipt.value);
    console.log(depart.value);
    console.log(arriver.value);
    console.log(date.value);
    console.log(heure.value);

    const monTicket = {
        nom:ipt.value,
        mondepart:depart.value,
        monarriver:arriver.value,
        madate:date.value,
        monheure:heure.value
    };

    localStorage.setItem("monTicket", JSON.stringify(monTicket))
})