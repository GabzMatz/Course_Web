

let img = document.getElementById("like")

let lista = document.getElementById("lista")


let num = parseInt(lista.getAttribute("num"))

let conteudo =""
for(let i = 0 ; i < 10; i++){
    conteudo += "<li>" + i + "</li>"
 


}

lista.innerHTML = conteudo




img.addEventListener("click", function(){
    let imgOld = img.getAttribute("src");

    img.setAttribute("src","./figmas/icon-progbr.svg") 


}


)