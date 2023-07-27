// Passo 1: Acesse os elementos do DOM
const formAgenda = document.getElementById("form-agenda");
const nomeContatoInput = document.getElementById("nome-contato");
const numTelefoneInput = document.getElementById("num-telefone");
const tabelaContatos = document.querySelector("table tbody");

formAgenda.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeContato = nomeContatoInput.value;
    const numTelefone = numTelefoneInput.value;

    if (!nomeContato || !numTelefone) {
    alert("Por favor, preencha todos os campos!");
    return;
    }

    const novaLinha = tabelaContatos.insertRow();

    const celulaNomeContato = novaLinha.insertCell();
    const celulaNumTelefone = novaLinha.insertCell();
    celulaNomeContato.textContent = nomeContato;
    celulaNumTelefone.textContent = numTelefone;

    nomeContatoInput.value = "";
    numTelefoneInput.value = "";
});