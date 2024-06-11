function speakGeneric(){
    console.log(this.sond)
}

let dog ={
    sond: "Au au",
    speak:speakGeneric
}


let cat ={
    sond: "miau",
    speak:function(){
        console.log(this.sond)

    }
}

dog.speak()
cat.speak()


let bindedFunction = speakGeneric.bind(dog)

bindedFunction()