const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")



frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const velocidadeC = parseFloat(frm.inVelocidadeC.value)  // obtém o valor da velocidade do condutor
    const velocidadeP = parseFloat(frm.inVelocidadeP.value)  // obtém o valor da velocidade permitida

    // Calcular o limite de 20% acima da velocidade permitida
    let limiteLeve = velocidadeP * 1.20
    if (velocidadeC <= velocidadeP) {
        resp.innerText = `Situação: Sem multa`
    } else if (velocidadeC <= limiteLeve) {
        resp.innerText = `Situação: Multa Leve`
    } else {
        resp.innerText = `Situação: Multa Grave`
    }
})
