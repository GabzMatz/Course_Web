
//Formas de fazer arrays
var Alunos = new Array("Igor", "Gabriel", "Bruno", "Mariana");
var Alunos2 = ["Joana", "Mario", "Felipe", "Marcio", "Karen"]

for(var i = 0 ; i < Alunos.length; i++){
    console.log(Alunos[i]);

}
for(var i = 0 ; i < Alunos2.length; i++){
    console.log(Alunos2[i]);

}

//Forma de fazer um for automatico mas funciona como o index
for(var i in Alunos){
    console.log(i, Alunos[i])


}

//Forma de fazer um for automatico mas funciona para pegar o elemento dentro do Array
for(var i of Alunos){
    console.log(i)


}