function newALuno(nome,idade){
        return{nome,idade}
}



let alunos = [
    newALuno("Gabriel",21),
    newALuno("Felix",24),
    newALuno("John",32),
    newALuno("Josias",70)
]

let jogadores = [
    newALuno("Stwarte",30),
    newALuno("Umbrella",29),
    newALuno("Danoco",32),
    newALuno("Felicia",12)

]


function temMenosde30(aluno){
    return aluno.idade < 30

}


let alunosComMenosde30 = alunos.filter(temMenosde30)

//Mesma coisa, aq em baixo e um filtro na mao


function filtro(callback){
    let alunosFiltrados = []
    for(let aluno of this){
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados
}

alunos.filtro = filtro

console.log(alunos.filtro(temMenosde30))

console.log(jogadores.filter(temMenosde30))


