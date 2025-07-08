const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numChinchilas = Number(frm.inAnimal.value)
    const anos = Number(frm.inAnos.value)

    if (numChinchilas < 2) {
        resp.innerText = "O número inicial de chinchilas dever maior ou igual a dois."
        return
    }

    let resultado = `Ano 1: ${numChinchilas} Chinchilas\n`
    let total = numChinchilas

    for (let i = 2; i <= anos; i++) {
        total *= 3
        resultado += `Ano ${i}: ${total} chinchilas\n`
    }

    resp.innerText = resultado


})