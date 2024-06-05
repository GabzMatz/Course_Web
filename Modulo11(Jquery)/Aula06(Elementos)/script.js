// $("#lista1 > .item2").hide()


let lista1 = $("#lista1")
let body = $("body")
console.log(body.find(".item2"))


lista1.find(".item2").hide()


//Traz um array, como se fosse algo como um target

console.log(lista1.children())