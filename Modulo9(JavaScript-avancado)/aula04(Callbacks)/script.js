// function ola(){
//     console.log("Ola")
// }

// function saudacao(o, nome){

//     o()
//     console.log(nome)
// }


// saudacao(ola,"Gabriel")


let users = ["Gabriel","Mario","Pedro"]

function addUser(nome, fix){
    setTimeout(() => {users.push(nome); fix()}, 1000)
}

function listUser(){
    console.log(users)

}


addUser("Feliz",listUser)
