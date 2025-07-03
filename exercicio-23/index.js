// Importa a biblioteca prompt-sync para permitir entrada de dados pelo terminal
const prompt = require("prompt-sync")()

// Lê o nome do produto digitado pelo usuário
const produto = prompt("Produto: ")

// Lê a quantidade de etiquetas e converte para número
const num = Number(prompt("Nº de etiquetas: "))

// Laço de repetição que imprime duas etiquetas por linha
// Como cada linha imprime 2 etiquetas, fazemos apenas num / 2 repetições
// Ex: se num = 6, o laço repete 3 vezes → 2 etiquetas × 3 linhas = 6
for (let i = 1; i <= num / 2; i++) {
    
    // Imprime duas etiquetas lado a lado
    // padEnd(30) preenche a string com espaços até que ela ocupe 30 caracteres
    // Isso serve para manter o alinhamento, mesmo com nomes de tamanhos diferentes
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}

// Se o número de etiquetas for ímpar, ainda falta imprimir uma última etiqueta
// Ex: num = 5 → o for imprime 4 etiquetas (2 por linha × 2 linhas), sobra 1
if (num % 2 == 1) {
    
    // Imprime a última etiqueta sozinha (também pode usar padEnd aqui se quiser alinhar)
    console.log(produto)
}
