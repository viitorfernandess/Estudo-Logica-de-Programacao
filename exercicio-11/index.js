// Cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" do evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()  // Evita o envio do form

// Obtém os valores do form
const nome = frm.inNome.value
const masculino = frm.inMasculino.checked
const altura = Number(frm.inAltura.value)

let peso               // declara a variável peso
if (masculino) {
    peso = 22 * Math.pow(altura, 2)  //math.pow eleva ao quadrado
} else {
    peso = 21 * Math.pow(altura, 2)
}

// Apresenta a resposta (altera o conteúdo do elemtno h3 da página)
resp.innerText = `${nome}: Seu peso ideial é ${peso.toFixed(3)} kg `

frm.addEventListener("reset", () => {
resp.innerText = ""     // limpa o conteúdo do elemtno h3 que exibe a resposta
})



})