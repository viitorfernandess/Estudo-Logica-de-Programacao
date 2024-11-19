// Cria referência ao form e elemento onde será exibida a rsposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" de EventCounts, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()              // evita o envio do form
    // Obtém e converte o conteúdo do campo inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5                     // Calcula o horário na França
    if (horaFranca > 24) {                             // se passar das 24h na França
        horaFranca = horaFranca - 24                   // ... subtrai 24
    }

    // exibe a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
})
