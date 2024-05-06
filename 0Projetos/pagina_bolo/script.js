let div1 = document.getElementsByClassName("opcoes_dos_bolos")[0]
let div2 = document.getElementsByClassName("opcoes_dos_bolos")[1]
let div3 = document.getElementsByClassName("opcoes_dos_bolos")[2]


let img_cake1 = document.getElementsByClassName("realcake")[0]
let img_cake2 = document.getElementsByClassName("realcake")[1]
let img_cake3 = document.getElementsByClassName("realcake")[2]

let oldvalue = "15rem"

div1.addEventListener("mouseover", function(){
    img_cake1.style.width= "20rem"
    img_cake1.style.height= "20rem"

})

div2.addEventListener("mouseover", function(){
    img_cake2.style.width= "20rem"
    img_cake2.style.height= "20rem"

})

div3.addEventListener("mouseover", function(){
    img_cake3.style.width= "20rem"
    img_cake3.style.height= "20rem"

})


div1.addEventListener("mouseout",function(){
    img_cake1.style.width= oldvalue
    img_cake1.style.height= oldvalue
})

div2.addEventListener("mouseout",function(){
    img_cake2.style.width= oldvalue
    img_cake2.style.height= oldvalue
})

div3.addEventListener("mouseout",function(){
    img_cake3.style.width= oldvalue
    img_cake3.style.height= oldvalue
})