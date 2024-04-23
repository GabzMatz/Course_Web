var nomes = new Array("Igor", "Joao", "Maria","Felipe","Bruno");
var notasA = new Array(8, 2, 4, 10, 6);
var notasB = new Array(7 ,10 ,5 ,10, 6);
var passou = [];

function media(n1,n2){
    
    return (n1 + n2) / 2;

}
function odio(m){

    if(m > 6){
        return true;
    }
    else{
        return false;
    }

}
console.log(odio(10))

for(var i = 0; i < nomes.length ; i++){
    if(odio(media(notasA[i],notasB[i]))){

       passou = passou+ " "+nomes[i];
    }
}
console.log("Quem passou foi :\n",passou)