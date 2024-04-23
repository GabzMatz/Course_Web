
//Igual java
/*
Igual java pra fazer comentario



\n existe no em js tbm


    mesma coisa    a = a + 2;
    ==>            a += 2;



    parseInt(TRANSFORMA STRING EM NUMEROS INTEIROS)
    parseFloat(TRANSFORMA STRING EM NUMEROS FLUTUANTE)

*/

console.log("Ola mundo");
var a = 1;
var b = "Ola a todos";
var c = true;

console.log(a,":"+typeof(a));
console.log(b,":"+typeof(b));
console.log(c,":"+typeof(c));

while (a < 20) {
    console.log(a);
    a++;

}
/*
var x = 3;
var y = "3";

console.log(x === y );
*/

var idade = parseInt("21");

var maiorIdade = idade >= 18;
var menorIdade = !maiorIdade;
console.log("Voce e maior de idade",maiorIdade);
console.log("Voce e menor de idade",menorIdade);


