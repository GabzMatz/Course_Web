let users = ["Gabriel","Mario","Pedro"]

function addUser(nome){


    let promise = new Promise(function (resolve, reject){
        setTimeout(()=> {
            users.push(nome)
            let error = true

            if(!error){
                resolve(console.log("Omg"))
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


addUser("Felix").then(listUser).catch((error)=>{
    console.log(error)


})
