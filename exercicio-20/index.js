// Seleciona o formulário da página
const frm = document.querySelector("form")

// Seleciona o elemento <h3> onde será exibida a resposta (é primo ou não)
const resp = document.querySelector("h3")

// Adiciona um ouvinte de evento para o envio do formulário
frm.addEventListener("submit", (e) => {
    // Impede que a página recarregue ao enviar o formulário
    e.preventDefault()

    // Pega o valor digitado no campo 'inNumero' e converte para número
    const num = Number(frm.inNumero.value)

    // Variável para marcar se o número tem algum divisor além de 1 e ele mesmo
    let temDivisor = 0

    // Laço para testar se algum número entre 2 e num/2 divide num
    for (let i = 2; i <= num / 2; i++) {
        // Se num for divisível por i, então ele não é primo
        if (num % i == 0) {
            temDivisor = 1   // Marca que encontrou um divisor
            break            // Interrompe o laço porque já sabemos que não é primo
        }
    }

    // Verifica se o número é maior que 1 e se não encontramos nenhum divisor
    if (num > 1 && !temDivisor) {
        // Se sim, o número é primo
        resp.innerText = `${num} é primo`
    } else {
        // Caso contrário, não é primo
        resp.innerText = `${num} não é primo`
    }
})
