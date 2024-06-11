var digit = 1

function qualquerclick(){
    console.log(digit)
    digit++
}


function changeH1(i) {
    let h1 = document.getElementsByTagName("h1")[0]
    if(i.value == 0){
        h1.innerText = "Titulo"
    }
    else{
    h1.innerText =i.value
    }
}