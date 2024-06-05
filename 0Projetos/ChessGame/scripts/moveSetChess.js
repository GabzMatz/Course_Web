let items = document.querySelectorAll(".item")
let pieces = []
let notPieces = []
function searchPieces(){
    pieces = []
    notPieces = []
    for(peca of items){
        let real = peca.children
        if(real.length == 1){
            pieces.push(real[0])
        }
        else{
            notPieces.push(peca)
        }
    }
}
searchPieces()

pieces.forEach(piece => {
    piece.addEventListener("click",firtsClick)
});


function firtsClick(){
    optionMove(this)
}

function optionMove(x){
    let option = x.dataset.chess
    switch (option) {
        case "ChessPieces/PeaoBlack.png":
            x.dataset.clickOne = true
            moveSet(option, x)
            clearPiece(x)
            x.dataset.clickOne = false
            break
    }

    searchPieces()
}
function moveSet(piece,item){
    let ver = item.dataset.clickOne
    notPieces.forEach(element => {
        element.addEventListener("click",()=>{
            if(ver){
                let value = document.createElement("img")
                value.setAttribute("src", piece)
                element.appendChild(value)
                value.dataset.chess = piece
                ver = false
            }
            })
        });
    }
function clearPiece(item){
    item.remove()
}