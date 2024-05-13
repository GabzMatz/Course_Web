function newALuno(nome,idade){
        return{nome,idade}
}



let alunos = [
    newALuno("Gabriel",21),
    newALuno("Felix",24),
    newALuno("John",32),
    newALuno("Josias",70)
]

// function frase(aluno){
//     return {aluno.nome + "tem" +aluno.idade + "anos"}

// }
function alunodaqa5anoos(aluno){
    return {
        nome: aluno.nome,
        idade :aluno.idade + 5,
    }

}


console.log(alunos.map(alunodaqa5anoos))
console.log(alunos)