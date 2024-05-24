let pessoa = {
    nome:"Joao",
    idade:21,
    telefone:11975778909,
    email: "gabriel.matoskogama@gmail.com"
}

let pessoa2 = {
    nome:"Feliz",
    idade:24,
    telefone:1199028922,
    email: "felix.silva@gmail.com"
}


var {nome} = pessoa
var {idade, telefone} = pessoa

var {...copia} = pessoa
var {nome,...copia2} = pessoa

// console.log(nome)
// console.log(idade)
// console.log(telefone)
console.log(copia)

console.log(copia2)



//Funciona pra array tbm

var pessoas = [pessoa, pessoa2]

//Se refere aos indixes
var[a,...outros] = pessoas
