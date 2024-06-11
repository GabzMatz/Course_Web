function optionMove(x){

    let option = x.dataset.chess
    switch (option) {
        case "ChessPieces/PeaoBlack.png":
            x.dataset.clickOne = true
            clearPiece(x)
            moveSet(option, x)
            console.log("Primeiro Click")
            break
    }

}


function moveSet(piece,item){
    let verification = item.dataset.clickOne
    notPieces.forEach(element => {
        element.addEventListener("click",()=>{
            if(verification){
                let value = document.createElement("img")
                value.setAttribute("src", piece)
                element.appendChild(value)
                value.dataset.chess = piece
                verification = false
                searchPieces()
                playerVerification()
                console.log("Segundo Click")
                playerChoice()
            }
            })
        });
    }
function clearPiece(item){
    item.remove()
}