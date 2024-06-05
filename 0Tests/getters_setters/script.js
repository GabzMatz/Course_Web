const person = {
    firstName :"Gabriel",
    lastName : "Matos",
    get fullname(){
        return `${this.firstName} !! ${this.lastName}`
    },
    set fullname(value){
        const parts =  value.split(" ")
        this.firstName = parts[0]
        this.lastName = parts[1]
    }

}

console.log(person.fullname)


person.fullname = "Amanda Jesus"

console.log(person.fullname)



console.log(person)
