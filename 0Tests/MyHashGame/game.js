let items = document.querySelectorAll(".item")
let board = document.querySelector(".board")
let player = 0
let comb= [[],[]]
let restart = document.querySelector("#gameOver")
var text = document.querySelector("#respost")

let combinationWin = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","4","8"],
    ["2","4","6"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
]

function turnedGame(){

    if(player == 0){
        player++
        return "x"
    }
    else{
        player = 0
        return "circle"
    }

}

function startGame(){
    board.classList.add("x");
    items.forEach(box=>{
        position = box.getAttribute("local")
        box.addEventListener("click",clickBox, {once: true})
        
    })



}
function buttonReset(){
    let buttonRestart = document.querySelector("#buttonRestart")
    buttonRestart.addEventListener("click",clear)
}

function clear(){
    for(let x of items){
        x.classList.remove("x")
        x.classList.remove("circle")
    }
    comb= [[],[]]
    restart.style.display = "none"
    startGame()

}

function restartGame(vencedor){
    restart.style.display = "flex"
    text.innerHTML = vencedor
    buttonReset()

}

function winVerification(value){
    comb[player].push(value)

    for (let i = 0; i < combinationWin.length; i++) {
        if (comb[0].includes(combinationWin[i][0]) && comb[0].includes(combinationWin[i][1]) && comb[0].includes(combinationWin[i][2])) {
            let vencedor = "Jogador 1 ganhou";
            restartGame(vencedor);
            return;
        }
        if (comb[1].includes(combinationWin[i][0]) && comb[1].includes(combinationWin[i][1]) && comb[1].includes(combinationWin[i][2])) {
            let vencedor = "Jogador 2 ganhou";
            restartGame(vencedor);
            return;
        }
    }
    if (comb[0].length + comb[1].length === 9) {
        restartGame("Empate");
    }


}

function clickBox(box){
    let valor = box.target.getAttribute("local")
    winVerification(valor)


    board.classList.remove("circle");
    board.classList.remove("x");

    let turnedPLayer = turnedGame()
    let item = box.target
    item.classList.add(turnedPLayer);
    if(turnedPLayer == "circle"){
        board.classList.add("x");

    }
    else{
        board.classList.add("circle");
  
    }
    
}

startGame()