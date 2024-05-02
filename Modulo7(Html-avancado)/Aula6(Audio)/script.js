let play = document.getElementById("play")
let stop = document.getElementById("stop")
let fast = document.getElementById("fast")
let back = document.getElementById("back")
let parar = document.getElementById("parar")
let control = document.getElementById("hub-control")


let suba = document.getElementsByClassName("subir")[0]

let music = document.getElementById("music")

suba.addEventListener("click",function(){
    control.style.display = "flex"
    suba.style.display = "none"
})


play.addEventListener("click",function(){

    music.play()

})

stop.addEventListener("click",function(){

    music.pause()
    music.playbackRate = 1

})
fast.addEventListener("click",function(){

    music.playbackRate -= 0.1

})
back.addEventListener("click",function(){

    music.playbackRate += 0.1

})

parar.addEventListener("click",function(){

    music.currentTime = 0
    music.playbackRate = 1



})