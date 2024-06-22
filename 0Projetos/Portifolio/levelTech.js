
let levelHtml = document.querySelector(".html")
let boxHtml = document.querySelector(".box-html")
levelHtml.addEventListener("mouseover",()=>{
    $(".box-html").fadeIn()
    boxHtml.classList.remove("d-none")

})

levelHtml.addEventListener("mouseout",()=>{
    $(".box-html").fadeOut(0, ()=>{
        boxHtml.classList.add("d-none")    
    })
    
})

let levelJs = document.querySelector(".js")
let boxJs = document.querySelector(".box-js")
levelJs.addEventListener("mouseover",()=>{
    $(".box-js").fadeIn()
    boxJs.classList.remove("d-none")

})

levelJs.addEventListener("mouseout",()=>{
    $(".box-js").fadeOut(0, ()=>{
        boxJs.classList.add("d-none")    
    })
    
})


let levelCss = document.querySelector(".css")
let boxCss = document.querySelector(".box-css")
levelCss.addEventListener("mouseover",()=>{
    $(".box-css").fadeIn()
    boxCss.classList.remove("d-none")

})

levelCss.addEventListener("mouseout",()=>{
    $(".box-css").fadeOut(0, ()=>{
        boxCss.classList.add("d-none")    
    })
    
})



let levelPython = document.querySelector(".python")
let boxPython = document.querySelector(".box-python")
levelPython.addEventListener("mouseover",()=>{
    $(".box-python").fadeIn()
    boxPython.classList.remove("d-none")

})

levelPython.addEventListener("mouseout",()=>{
    $(".box-python").fadeOut(0, ()=>{
        boxPython.classList.add("d-none")    
    })
    
})




let levelJava = document.querySelector(".java")
let boxJava = document.querySelector(".box-java")
levelJava.addEventListener("mouseover",()=>{
    $(".box-java").fadeIn()
    boxJava.classList.remove("d-none")

})

levelJava.addEventListener("mouseout",()=>{
    $(".box-java").fadeOut(0, ()=>{
        boxJava.classList.add("d-none")    
    })
    
})




let levelBootstrap = document.querySelector(".bootstrap")
let boxBootstrap = document.querySelector(".box-bootstrap")
levelBootstrap.addEventListener("mouseover",()=>{
    $(".box-bootstrap").fadeIn()
    boxBootstrap.classList.remove("d-none")

})

levelBootstrap.addEventListener("mouseout",()=>{
    $(".box-bootstrap").fadeOut(0, ()=>{
        boxBootstrap.classList.add("d-none")    
    })
    
})



let levelPostGresSql = document.querySelector(".postGresSql")
let boxPostGresSql = document.querySelector(".box-postGresSql")
levelPostGresSql.addEventListener("mouseover",()=>{
    $(".box-postGresSql").fadeIn()
    boxPostGresSql.classList.remove("d-none")

})

levelPostGresSql.addEventListener("mouseout",()=>{
    $(".box-postGresSql").fadeOut(0, ()=>{
        boxPostGresSql.classList.add("d-none")    
    })
    
})
