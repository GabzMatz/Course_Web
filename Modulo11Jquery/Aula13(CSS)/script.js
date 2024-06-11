setTimeout(()=>{
    // $("h1").addClass("bg-blue")
    $("h1").toggleClass("bg-blue")
    console.log($("h1").css("background-color")) //Forma de pegar elemento do css
},1000)
setTimeout(()=>{
    $("h1").toggleClass("bg-blue")
    // $("h1").removeClass("bg-blue")
    console.log($("h1").css("background-color"))
    $("h1").css("font-size", "90px")
    $("h1").css({"font-size": "30px", "background-color" : "green"})


},2000)
