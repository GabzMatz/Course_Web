let jogador = document.getElementById("jogador")


let xinicial = 0
let yinicial = 0


function moverJogador(x,y){
    
    let posx = x + "px"
    let posy = y + "px"
    jogador.style.top = posx
    jogador.style.left = posy
}
setInterval(function(){

    moverJogador(xinicial++,yinicial++)

},10)