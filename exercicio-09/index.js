function mostrarValor() {
    var inPreco = document.getElementById("inPreco")
    var inTempo = document.getElementById("inTempo")
    var outValor = document.getElementById("outValor")

    var preco = Number(inPreco.value)
    var tempo = Number(inTempo.value)

    var valor = preco * tempo

    outValor.textContent = "Valor a Pagar R$: " + valor.toFixed(2)
}

var btCalcular = document.getElementById("btCalcular")

btCalcular.addEventListener("click", mostrarValor )