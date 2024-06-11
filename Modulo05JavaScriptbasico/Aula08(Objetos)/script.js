//Dicionario do JavaScript
//Aqui chama objeto

var Cooperativa = new Object();
// mesma coisa
var Cooperativa = {
    alunos: ["Joao","Felipe","Junior"],
    notas: [21],
}

Cooperativa.media = 13;
Cooperativa["Disputa"] = "Cooperativa";


console.log(Cooperativa.alunos)
console.log(Cooperativa["alunos"])
console.log(Cooperativa)