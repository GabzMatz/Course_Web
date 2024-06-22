let butao = document.querySelector("#black-or-white")

let seletorButao = document.querySelector("#seletor")

butao.addEventListener("click",()=>{
    if(seletor.style.animationName == "selectColorWhite"){
        seletor.style.animationName = "selectColorBlack"
    }else{
        seletor.style.animationName = "selectColorWhite"

    }
})
