

let box = $(".box")


// box.outerWidth(tre)
box.append("largura: ",box.width(),"<br>",
    "largura + padding: ", box.innerWidth(), "<br>",
    "largura + border + padding: ", box.outerWidth(), "<br>",
    "largura + margem + border + padding: ", box.outerWidth(true))
