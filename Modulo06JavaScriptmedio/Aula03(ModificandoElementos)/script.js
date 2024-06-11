var d = document
var p1 =d.getElementsByClassName("paragrafo");
var p2=d.getElementById("p1")

console.log(p1)
console.log(p2)

console.log(p1[0])

p1.innerHTML // altera diretamente no html e da pra colocar tags diretamente
p1.innerText // altera mostra so o que esta aparende na tela
p1.textContent // altera e mostra o q nao esta aparente na tela
p1.getAttribute("meuatt") //LiNKAR ATRIBUTOd
p1.setAttribute("NovoAtt") // Consigo alterar e e criar atributos
