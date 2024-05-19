
let nome = ""

try{
    if(nome == ""){
        throw "o nome nao pode ser vazio"


    }
    nome = "gabriel"
    console.log(nome)
}
catch (erro){
    console.log("erro = ", erro)

}
finally{
    console.log("executa isso aqui sempre")
}