//Funcao this procura no escopo anterior da funcao o nome de um elemento

function media(){
    return(this.notas[0] + this.notas[1]) / 2;

}

var aluno1 = {
    nome : "Joao",
    notas : [7, 10],
    mediaAluno : media,
   
}

var aluno2 = {
    nome : "Jonas",
    notas : [7, 10],
    mediaAluno : media,
}
console.log(aluno1);
console.log(aluno1.nome);
var notas = [0, 10]
console.log(aluno2.mediaAluno(aluno2.notas[0],aluno2.notas[1]))
console.log(aluno2.nome);
console.log(aluno1.mediaAluno(aluno1.notas[0],aluno1.notas[1]))


console.log(media())
