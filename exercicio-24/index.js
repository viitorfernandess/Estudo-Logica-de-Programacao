// Importa o módulo 'prompt-sync' para permitir entrada de dados via teclado
const prompt = require("prompt-sync")()

// Solicita ao usuário o valor total a ser parcelado e converte para número
const valor = Number(prompt("Valor R$: "))

// Solicita o número de parcelas e converte para número
const num =  Number(prompt("N° de Parcelas: "))

// Calcula o valor base de cada parcela, arredondando para baixo com Math.floor
// Exemplo: 100 / 3 = 33.33... → Math.floor = 33
const valorParcelas = Math.floor(valor / num)

// Calcula o valor da última parcela, somando o resto da divisão
// Isso compensa os centavos que "sobraram" na divisão
const valorFinal = valorParcelas + (valor % num)

// Loop que imprime todas as parcelas, menos a última (penúltima inclusive)
// Todas essas parcelas terão o valor básico arredondado (ex: 33.00)
for (let i = 1; i < num; i++ ) {
    console.log(`${i}ª parcela: ${valorParcelas.toFixed(2)}`)
}

// Imprime a última parcela, que inclui o valor "restante" da divisão
// Assim, o total somado das parcelas bate certinho com o valor original
console.log(`${num}ª parcela> R$ ${valorFinal.toFixed(2)}`)
