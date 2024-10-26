const preco = prompt("Informe o preço do produto: ")

const pagamentoParcelado = preco/3
const descontoAvista = preco*0.10
const pagamentoAvista = preco-descontoAvista

alert("O valor do pagamento à vista é " + pagamentoAvista + " reais" + " \nO valor do pagamento parcelado é " + pagamentoParcelado.toFixed(2) + " reais")