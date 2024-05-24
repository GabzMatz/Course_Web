/*
*/
function media(n1,n2){
    var media = (n1 + n2) / 2;
    
    return media;
}
var m = media;
console.log(m(10, 0))

var nota1=media(10, 0);
var nota2=media(7 , 10);


console.log(nota1, nota2)


//Em JS tem varias formas de fazer funcao
var media = function(n1, n2){
    return (n1+n2) /2;
}


console.log(media(10,0))
