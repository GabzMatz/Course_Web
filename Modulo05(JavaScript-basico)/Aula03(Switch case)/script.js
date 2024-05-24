var nota1 = 9.0;
var nota2 = 10.0;
var conceito ="";
var media = (nota1 + nota2) / 2;



if(media >=8.5){
    conceito = "Otimo";
}
else if(media >= 6){
    conceito = "Bom";
}
else{
    conceito = "Fracasso";
}
console.log(media)
console.log(conceito)

switch(conceito){
    case "Otimo":
        console.log("Parabens");
        break;
    case "Bom" :
        console.log("Poderia ter ido melhor");
        break;
    case "Fracasso" :
        console.log("Precisa estudar muito mais pqp");
        break;
    default:
        console.log("ERROR")

}