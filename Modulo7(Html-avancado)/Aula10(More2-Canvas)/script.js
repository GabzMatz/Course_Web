let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")


let x = 250
let y = 250
let raio = 250
let inicio = 0
let fim = 2 * Math.PI


ctx.beginPath()

ctx.lineWidth = 4
ctx.strokeStyle = "red"
ctx.fillStyle = "purple"

ctx.arc(x,y,raio,inicio,fim)
ctx.fill()
ctx.stroke()
