let board = document.querySelector(".board")


rowChess(false)
rowChess(true)
rowChess(false)
rowChess(true)
rowChess(false)
rowChess(true)
rowChess(false)
rowChess(true)

let childrens = document.querySelectorAll(".item")

createPieces("ChessPieces/PeaoBlack.png",7,16)
createPieces("ChessPieces/PeaoWhite.png",47,56)
createPieces("ChessPieces/TowerBlack.png",0,0,0)
createPieces("ChessPieces/TowerBlack.png",0,0,7)
createPieces("ChessPieces/HorseBlack.png",0,0,6)
createPieces("ChessPieces/HorseBlack.png",0,0,1)
createPieces("ChessPieces/BispoBlack.png",0,0,2)
createPieces("ChessPieces/BispoBlack.png",0,0,5)
createPieces("ChessPieces/QueenBlack.png",0,0,3)
createPieces("ChessPieces/KingBlack.png",0,0,4)
createPieces("ChessPieces/TowerWhite.png",0,0,56)
createPieces("ChessPieces/TowerWhite.png",0,0,63)
createPieces("ChessPieces/HorseWhite.png",0,0,57)
createPieces("ChessPieces/HorseWhite.png",0,0,62)
createPieces("ChessPieces/BispoWhite.png",0,0,61)
createPieces("ChessPieces/BispoWhite.png",0,0,58)
createPieces("ChessPieces/QueenWhite.png",0,0,59)
createPieces("ChessPieces/kingWhite.png",0,0,60)

function createPieces(type,x,y,z){

    let childrens = document.querySelectorAll(".item")
    for(let i = 0; i < childrens.length; i++){
        let piece = document.createElement("img")
        if(i > x && i < y){
            piece.setAttribute("src", type)
            childrens[i].appendChild(piece)
            piece.dataset.chess = type
        }
        else if(z == i){
            piece.setAttribute("src", type)
            childrens[i].appendChild(piece)
            piece.dataset.chess = type
        }
    }
}
function rowChess(change){
    for(let i= 0; i < 8; i++){
        let home = document.createElement("div")
        board.appendChild(home)
        home.classList.add("item")

        if(change){
            home.classList.add("black")
            change = false
        }
        else{
            change = true
        }
    }
}

