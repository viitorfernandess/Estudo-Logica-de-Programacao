function mostrarPromocao() {
    // Cria referência aos elementos da página
    var inMedicamento = document.getElementById("inMedicamento")
    var inPreco = document.getElementById("inPreco")
    var outValor = document.getElementById("outValor")

    // Obtém os conteúdos dos campos de entrada
    var medicamento = inMedicamento.value
    var preco = Number(inPreco.value)

    // Calcula o valor a ser pago (valor sem desconto nos centavos)
    var valor = preco * 2

    // Passo 1: Separar os reais e centavos
    var reais = Math.floor(valor); // Parte inteira (reais)
    var centavos = Math.round((valor - reais) * 100); // Parte decimal (centavos)

    // Passo 2: Aplicar desconto nos centavos (remover os centavos)
    var centavosDescontados = 0
    // Passo 3: Reconstruir o valor final com os centavos descontados
    var valorFinal = reais + centavosDescontados / 100; 

    // Altera o conteúdo da linha de resposta
    outValor.innerHTML = "Promoção de " + medicamento + "<br>Leve 2 por apenas R$: " + valorFinal.toFixed(2)
}

// Cria referência ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular")

// Registra um evento associado ao botão para carregar uma função
btCalcular.addEventListener("click", mostrarPromocao)


