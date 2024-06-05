function CreatePeolple(nome, idade){
    return {nome , idade}
}
let peopleAge = [
    CreatePeolple("Gabriel",21),
    CreatePeolple("Amanda",18),
    CreatePeolple("Guilherme",18),
    CreatePeolple("Luiz",17),
]
function filterAge (x){
    return x.idade >= 18
}


function peopleMoreFiveYears(x){
    return x.idade + 5    
}

console.log(peopleAge.filter(filterAge))

console.log(peopleAge.map(peopleMoreFiveYears))