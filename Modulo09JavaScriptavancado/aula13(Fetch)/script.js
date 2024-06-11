let url = "https://economia.awesomeapi.com.br/last/USD-BRL";


//fetch(url).then((res)=>{console.log(res.json())})

let conv = document.getElementById("conversor")
let result = document.querySelector("#result")


conv.addEventListener("click",function(){
    let input = document.querySelector("#numero")
    let valor = input.value
    fetch(url).then((res)=>{return res.json()}).then(
        (data) =>{
            let valorEUA =data.USDBRL.ask
            result.innerHTML = `Seu valor ${valor} reais em dolares fica: $${(valorEUA * valor).toFixed(2)}`
        }
    )

})



