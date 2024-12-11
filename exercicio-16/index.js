const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if (ladoA === ladoB && ladoB === ladoC) {
        resp.innerText = `Tipo: Equilátero`
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        resp.innerText = `Tipo: Escaleno`
    } else {
        resp.innerText = `Tipo: Isósceles`
    }
})
