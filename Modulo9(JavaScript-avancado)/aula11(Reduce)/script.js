function newALuno(nome,idade){
        return{nome,idade}
}



let alunos = [
    newALuno("Gabriel",21),
    newALuno("Felix",24),
    newALuno("John",32),
    newALuno("Josias",70)
]

function idadeDaTurma(total,aluno){
    return total + aluno.nome


}

console.log(alunos.reduce(idadeDaTurma,0))
