// //Sao objetos
// const corredor1 ={
//     nome:"Ayrton Senna",
//     equipe:"Maclaren",
//     idade:29,
//     correr:function(){
//         console.log("Vruuummmmm")
        
        
//     }
    
// }

// const corredor2 ={
//     nome:"Max Verstepen",
//     equipe:"Redbull",
//     idade:26,
//     correr:function(){
//         console.log("Vruuuummmmmmmmmmmmmmmmmmmmmmmmmmmmm")
        
        
//     }
    
// }
class CorredoresF1{
    constructor(n,i,e){
        this.nome = n
        this.idade = i
        this.equipe = e 
    }
    correr(){
        console.log("Vruuuummmmmmmmmmmmmmmmmmmmmmmmmmmmm")
    }
}

const corredor1 = new CorredoresF1("Ayrton Senna", "21", "Mclaren");
const corredor2 = new CorredoresF1("JOnas", "26", "Ferrri");
const corredor3 = new CorredoresF1("MaX Jortati", "29", "MErcedes");
const corredor4 = new CorredoresF1("Lewis", "24", "RedBull");
