let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("result")


console.log(inputAdultos,inputCriancas,inputDuracao,resultado)


function calcular(){

    console.log("canculando")
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value


    let quantCarne = carnepp(duracao) * adultos + (carnepp(duracao)/2 * criancas)
    let quantCerveja = cervejapp(duracao) * adultos
    let quantBebidas = bebidapp(duracao) * adultos + (bebidapp(duracao)/2 * criancas)
    console.log(quantCarne, quantCerveja,quantBebidas)



    resultado.innerHTML = `<p>${quantCarne/1000}kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantCerveja/355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantBebidas/2000)} Garrafas de bebidas</p>`

}


function carnepp(duracao){
    if(duracao >= 6){
        return 650
    }
    else{
        return 400
    }

}


function cervejapp(duracao){
    if(duracao >= 6){
        return 2000
    }
    else{
        return 1200
    }

}

function bebidapp(duracao){
    if(duracao >= 6){
        return 1500
    }
    else{
        return 1000
    }

}


