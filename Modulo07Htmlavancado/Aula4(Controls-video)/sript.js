let video = document.getElementById("video1")

let fc = document.getElementById("fullcontrol")

video.addEventListener("mouseover",function(){
    console.log("Ele entrou")
    fc.style.display = "block"
})


fc.addEventListener("mouseout",function(){
    fc.style.display = "none"
    console.log("vtmnc")

})



function retrocerder(){
    video.currentTime -= 15



}
function avancar(){
    video.currentTime += 15

}

function play(){
    video.play()
}

function pause(){
    video.pause()
}

function stopped(){
    video.pause()
    video.currentTime = 0
    video.playbackRate =  1;


}

function slow(){
    video.playbackRate -=  0.1;


}

function fast(){
    video.playbackRate +=  0.1;



}