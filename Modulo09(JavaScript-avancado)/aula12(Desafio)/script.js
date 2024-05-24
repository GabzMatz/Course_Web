function cria(x, y){
    return{nome:x, idade:y}
    
}

let pessoas = [
    cria("jonas",21),
    cria("Cleiton",23),
    cria("Edward",30)
]



function pessoasMais5(item){
    return item.idade +5 
}

function mapeador(callback){
    
    let newArray = []

    for(let item of this){
        newArray.push(callback(item))
    }

    return newArray
}

pessoas.mapeador = mapeador

console.log(pessoas.mapeador(pessoasMais5))