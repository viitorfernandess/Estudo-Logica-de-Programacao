const frm = document.querySelector("form")   //obtém elemtnos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {      //escuta o evento submit do form
e.preventDefault()                           //evita o envio do form
const num = Number(frm.inNumero.value)       //obtém o número informado
let estrelas  = ""                           //variável que irá concatenar as estrelas/traços
for(let i =1; i<= num; i++) {
    if(i % 2 == 1) {
        estrelas = estrelas + "*"            //na posição ímpar do i: *
    } else {
        estrelas = estrelas + "-"            //na posição par: -
    }
}
resp.innerText = estrelas                    //exibe as estrelas
})