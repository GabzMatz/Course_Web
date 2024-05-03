let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")


ctx.beginPath()

ctx.lineWidth = 4
ctx.strokeStyle = "red"


ctx.moveTo(10,10)
ctx.lineTo(400,250)
ctx.stroke()
ctx.beginPath()
ctx.lineWidth = 4
ctx.strokeStyle = "green"


ctx.moveTo(0,250)
ctx.lineTo(400,250)
ctx.lineTo(200,450)
ctx.closePath()
ctx.fillStyle = "red"
ctx.fill()

ctx.stroke()