console.log($("h1").text("look"))





console.log($("#lista1").html("<li>New item1</li> <li>New Item2</li>"))
console.log($("#lista2").text("<li>New item1</li> <li>New Item2</li>"))



console.log($("#lista3").find(".item2").html("ItemSecret"))


console.log($("input").attr("nome", "secret"))
console.log($("input"))

console.log($("li").attr("nome", function(i, o){
    return i
}))
