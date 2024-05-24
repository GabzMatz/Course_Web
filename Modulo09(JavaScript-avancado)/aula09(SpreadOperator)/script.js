let pessoa = {
    nome:"Joao",
    idade:21
}

let contato = {

    telefone:11975778909,
    email: "gabriel.matoskogama@gmail.com"

}

let copia = {...contato, ...pessoa, cidade: "Sao Roque"}
console.log(copia)