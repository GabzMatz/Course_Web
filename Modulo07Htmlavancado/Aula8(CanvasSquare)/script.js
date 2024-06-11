let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

ctx.moveTo(5,250)
ctx.lineTo(250 ,250)
ctx.lineTo(250,495)
ctx.lineTo(5,495)
ctx.lineTo(5,250)

ctx.lineWidth = 5
ctx.strokeStyle = "orange"
ctx.stroke()



let tela2 = document.getElementById("tela2")

let ctx2 = tela2.getContext("2d")

//1tipo
// ctx2.fillStyle = "blue"
// ctx2.fillRect(150,150,200,200)// Da pra fazer qualquer forma

//2tipo
// ctx2.strokeStyle = "red"
// ctx2.strokeRect(150,150,200,200)
ctx2.rect(150,150,200,200)
ctx2.lineWidth = 5

ctx2.fillStyle = "blue"

ctx2.strokeStyle = "red"

ctx2.fill()
ctx2.stroke()

//ctx2.clearRect(150,150,200,200) da pra apagar alguma parte do triangulo

