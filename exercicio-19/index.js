const frm = document.querySelector("form")        // Seleciona o formulário da página
const resp1 = document.querySelector("#outResp1") // Seleciona o local onde vai mostrar a lista de contas
const resp2 = document.querySelector("#outResp2") // Seleciona o local onde vai mostrar o total e a média

// Estas variáveis são declaradas FORA do evento para que seus valores sejam mantidos entre as interações com o usuário

let resposta = ""        // Vai acumular os textos com os valores das contas
let numContas = 0        // Vai contar quantas contas foram registradas
let valorTotal = 0       // Vai somar todos os valores informados (acumulador)

// Se essas variáveis fossem declaradas DENTRO do evento (como dentro de um addEventListener),
// elas seriam reiniciadas toda vez que o formulário fosse enviado,
// ou seja, perderiam as informações anteriores e não acumulariam nada!

// Adiciona um ouvinte de evento para o envio do formulário (submit)
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Impede que a página seja recarregada ao enviar o formulário
    // Isso é importante para manter os dados na tela

    const descricao = frm.inDescricao.value
    // Pega o texto digitado pelo usuário no campo "Descrição da Conta"

    const valor = Number(frm.inValor.value)
    // Pega o valor digitado no campo "Valor da Conta" e converte para número
    // Isso é necessário para fazer cálculos depois (somar, calcular média, etc.)

    numContas++
    // Incrementa o contador de contas em +1
    // Isso indica que mais uma conta foi registrada

    valorTotal = valorTotal + valor
    // Soma o valor da conta atual ao total acumulado
    // Essa variável guarda o valor total de todas as contas digitadas

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    // Concatena (junta) a nova conta com a lista de contas anteriores
    // `toFixed(2)` formata o número com 2 casas decimais
    // `\n` adiciona uma quebra de linha (enter) para exibir cada conta em uma linha

    resp1.innerText = `${resposta} -------------------------------`
    // Atualiza a área de resposta 1 (provavelmente um <pre> ou <div>) com a lista de contas
    // Inclui uma linha de separação visual no final

    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`
    // Atualiza a área de resposta 2 com o total de contas registradas e o valor acumulado
    // Também usa `toFixed(2)` para mostrar o valor com duas casas decimais

    frm.inDescricao.value = ""
    // Limpa o campo de descrição depois que a conta foi registrada

    frm.inValor.value = ""
    // Limpa o campo de valor para evitar confusão na próxima entrada

    frm.inDescricao.focus()
    // Coloca o cursor de volta no campo de descrição
    // Isso facilita para o usuário continuar registrando outras contas rapidamente
})

