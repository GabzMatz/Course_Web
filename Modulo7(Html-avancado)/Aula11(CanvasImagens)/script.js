let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")

let img = new Image()

img.src = "./imgs/Captura_de_tela_de_2024-04-28_18-02-21-removebg-preview.png"

img.onload = desenharImg
function desenharImg(){
    ctx.drawImage(this,150,150,)


}

