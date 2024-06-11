let users = ["Gabriel","Mario","Pedro"]

function addUser(nome){


    let promise = new Promise(function (resolve, reject){
        setTimeout(()=> {
            users.push(nome)
            let error = false

            if(!error){
                resolve(console.log("Entrouf"))
            }
            else{
                reject({msg: "erro qualquer"})
            }
        },1000)

    })
    return promise
}

function listUser(){
    console.log(users)

}


async function executar(){
    await addUser('Feliz')
    listUser()
}

executar()