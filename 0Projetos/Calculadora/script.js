let visor = document.getElementById("visor")

let on = document.getElementById("on");
let reset = document.getElementById("reset");

let off =document.getElementById("off");

let nums = {
    nove: document.getElementsByClassName("num")[0],
    oito: document.getElementsByClassName("num")[1],
    sete: document.getElementsByClassName("num")[2],
    divisao: document.getElementsByClassName("num")[3],
    seis: document.getElementsByClassName("num")[4],
    cinco: document.getElementsByClassName("num")[5],
    quatro: document.getElementsByClassName("num")[6],
    menos: document.getElementsByClassName("num")[7],
    tres: document.getElementsByClassName("num")[8],
    dois: document.getElementsByClassName("num")[9],
    um: document.getElementsByClassName("num")[10],
    mais: document.getElementsByClassName("num")[11],
    vezes: document.getElementsByClassName("num")[12],
    zero: document.getElementsByClassName("num")[13],
    porcentagem: document.getElementsByClassName("num")[14],
    igual: document.getElementsByClassName("num")[15]

}

let digit = 0
let savedDigit = digit
let ligar = false

on.addEventListener("click",() => {visor.innerHTML = digit, ligar=true})
off.addEventListener("click",() =>{visor.innerHTML = "", ligar = false})
reset.addEventListener("click",function(){if(ligar){visor.innerHTML = "",setTimeout(() =>{visor.innerHTML = 0},100)}})


Object.values(nums).forEach(element => {
    element.addEventListener("click", function() {
        console.log("Elemento clicado: ", this.textContent);
    });
});