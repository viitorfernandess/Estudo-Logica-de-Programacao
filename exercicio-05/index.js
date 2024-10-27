function tituloDoFilme() {
    var filme = document.getElementById("filme").value
    document.getElementById("resposta").innerHTML = filme
}

function duracaoDoFilme() {
    var duracao = document.getElementById("duracao").value
    document.getElementById("resposta").innerHTML = duracao()
}

var converter = document.getElementById("converter")
converter.onclick = tituloDoFilme