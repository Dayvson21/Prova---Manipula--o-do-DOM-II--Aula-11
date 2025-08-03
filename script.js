
const form = document.getElementById("form");
const lista = document.getElementById("lista");
const limpar = document.getElementById("limpar");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const contato = document.getElementById("contato").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const email = document.getElementById("email").value;

    if (!/^[a-zA-Z\s]+$/.test(usuario)) {
        alert("O nome de usuário deve conter apenas letras!");
        return;
    }
    if (!/^\d+$/.test(contato)) {
        alert("O campo telefone deve conter apenas números!");
        return;
    }


    if (!usuario || !senha || !contato || !dataNascimento || !email) {
        alert("Todos os campos devem ser preenchidos!");
    }

    const dados = document.createElement("p");
    dados.textContent = `Nome: ${usuario}
    - Telefone: ${contato}
    - Data: ${dataNascimento}
    - Email: ${email}`;
    lista.appendChild(dados);

    form.reset();
});

limpar.addEventListener("click", function () {
    lista.innerHTML = "";
})

