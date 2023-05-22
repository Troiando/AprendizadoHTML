function calcularIdade() {
    var dataNascimento = document.getElementById("dataNascimento").value;
    var dataAtual = new Date();
    var dataNascimentoFormatada = new Date(dataNascimento);
    var diff = Math.abs(dataAtual - dataNascimentoFormatada);
    var idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById("idade").textContent = idade + " anos";
}

function selectCavity(element) {
    element.classList.toggle("selected");
  }