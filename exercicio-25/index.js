const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruit = frm.inFruit.value
    const repeat = Number(frm.inNumber.value)

    if (!fruit || repeat <= 0) {
        resp.innerText = "Por favor, insira uma fruta e uma quantidade válida."
        return
    }

    let result = ""

    for (let i = 1; i <= repeat; i++) {
        result += fruit
        if (i < repeat) {
            result += "*"
        }
    }

    resp.innerText = result
})

