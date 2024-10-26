const valorDaConta = parseFloat(prompt("Insira o valor total da conta: "))
const qntDeClientes = prompt("Insira a quantidade de clientes: ")

const valorPorCliente = valorDaConta/qntDeClientes
let valorPorClienteArredindado = valorPorCliente

alert("O valor para cada cliente é de " + valorPorCliente.toFixed(2) + " reais")