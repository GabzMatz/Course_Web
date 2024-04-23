// var media = function(){
//     return (this.nota1 + this.nota2) / 2


// }

// var turma = [
//     {nome : "Igor",
//     nota1 : 8,
//     nota2 : 10,
//     mediaCal : media,
//     },
//     {nome : "Felix",
//     nota1 : 8,
//     nota2 : 10,
//     mediaCal : media,
//     },    
//     {nome : "Igor",
//     nota1 : 8,
//     nota2 : 10,
//     mediaCal : media,
//     }
    

// ]

// var aluno1 = turma[0];
// var aluno2 = turma[1];

// console.log(aluno1.nome)
// console.log(aluno1.mediaCal())

// console.log(aluno2.nome)
// console.log(aluno2.mediaCal())

//--------------------------------------------------------------------------------
// function criarAluno(nome,n1,n2){
//     var turma = {
//         nomealuno : nome,
//         nota1 : n1,
//         nota2 : n2,
//         media : function() {
//             return(this.nota1 + this.nota2) / 2;

//         },
//     }

//     return turma;
// }


// var aluno1 = criarAluno("Jose", 10, 0)
// var aluno2 = criarAluno("Felix", 10, 5)
// console.log(aluno1)
//--------------------------------------------------------------------------------------
function criarAluno(nome,n1,n2){
    this.nomealuno = nome
    this.nota1 = n1
    this.nota2 = n2
    this.media = function(){
        return(this.nota1+this.nota2) /2
    }
}

var aluno1 = new criarAluno("Joao", 10, 5)
var aluno2 = new criarAluno("Felix", 2, 5)
var aluno3 = new criarAluno("Maria", 10, 7)
var aluno4 = new criarAluno("Bruno", 6, 9)


var turma = [aluno1, aluno2, aluno3, aluno4]
console.log(turma)


turma.forEach(function (elemento){
    console.log(elemento)
});

//------------------------------------------------------------------------------------