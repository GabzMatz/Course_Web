function verificarTamanhoDaTela() {
    var larguraDaTela = window.innerWidth;

    var pontoDeQuebra = 950;

    if (larguraDaTela < pontoDeQuebra) {
        console.log("wdkjw")
    } else {
    }
}
verificarTamanhoDaTela()

let euaNivel = document.querySelector(".eua")
window.addEventListener('resize', verificarTamanhoDaTela);
