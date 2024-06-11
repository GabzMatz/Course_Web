let items = document.querySelectorAll(".item")
let pieces
let notPieces
let piecesBlack
let piecesWhite
let playerStatus

searchPieces()
playerChoice()
function searchPieces(){
    pieces = []
    notPieces = []
    piecesBlack = []
    piecesWhite = []
    for(peca of items){
        let real = peca.children
        let type
        if(real.length == 1){
            pieces.push(real[0])
            type = real[0].getAttribute("src")
        }
        else{
            notPieces.push(peca)
        }
        for(i of blacks){
            if(type == i){
                piecesBlack.push(real[0])
            }

        }
        for(i of whites){
            if(type == i){
                piecesWhite.push(real[0])
            }

        }


    }

    
}

function playerChoice(){
    if(board.getAttribute("player") == "black"){
        console.log("preto")
        piecesBlack.forEach(piece => {
        piece.addEventListener("click",firtsClick, {once : true})
    })
    }

    if(board.getAttribute("player") == "white"){
        console.log("branco")
        piecesWhite.forEach(piece => {
            piece.addEventListener("click",firtsClick, {once : true})
        })
    }
    
}
function firtsClick(){

    optionMove(this)

}


function playerVerification(){
   if(board.getAttribute("player") == "black"){
        board.setAttribute("player", "white")
    }else{
        board.setAttribute("player", "black")
    }
    
}
