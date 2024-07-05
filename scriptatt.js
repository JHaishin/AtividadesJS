function CriarDiv() {
    var textoDigitado = document.getElementById("areacomentario").value;

    if (textoDigitado.trim() === "") {
        alert("Por favor, digite um comentário antes de adicionar.");
        return;
    }

    let novoTexto = document.createElement("div");
    let novoParagrafo = document.createTextNode(textoDigitado);
    novoTexto.appendChild(novoParagrafo);

    let divPrincipal = document.querySelector("#principal");
    divPrincipal.appendChild(novoTexto);
}

function ApagarDiv() {
    let divPrincipal = document.querySelector("#principal");

    // Remove a última div adicionada (último comentário)
    let filhos = divPrincipal.children;
    if (filhos.length > 1) {
        divPrincipal.removeChild(filhos[filhos.length - 1]);
    }
}

function EditarComentario() {
    // Pegar o último comentário adicionado
    let divPrincipal = document.querySelector("#principal");
    let filhos = divPrincipal.children;
    let ultimoComentario = filhos[filhos.length - 1];

    // Obter o texto atual do comentário
    let textoAtual = ultimoComentario.textContent.trim();

    // Exibir um prompt para editar o comentário
    let novoTexto = prompt("Editar Comentário:", textoAtual);

    // Atualizar o texto do comentário
    if (novoTexto !== null && novoTexto.trim() !== "") {
        ultimoComentario.textContent = novoTexto;
    }
}