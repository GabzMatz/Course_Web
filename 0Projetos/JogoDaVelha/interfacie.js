document.addEventListener("DOMContentLoaded",()=>{

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
       square.addEventListener("click",handleClick) 
    })

})

function handleClick(event){
    console.log(event.target)

    let square = event.target
    let postion = square.id

    handleMove(postion)
    updateSquares()
}

function updateSquares(){
    let squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{
        let postion = square.id
        let symbols = board[postion]

        if(symbols != ""){
            square.innerHTML = `<div class=${symbols}></div>`

        }

    })


}
