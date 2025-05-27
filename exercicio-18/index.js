const frm = document.querySelector("form")  // obtém os elementos da página
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()      // evita o envio do form
    const numero = Number(frm.inNumero.value)  // obtém o valor informado

    let resposta = `Entre ${numero} e 1: `     // string para mostrar a resposta

    for (let i = numero; i > 0; i--) {
        resposta += i
        if (i > 1) {
            resposta += ", "
        } else {
            resposta += "."
        }
    }

    resp.textContent = resposta  // exibe o resultado
})
