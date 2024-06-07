function converterMaiusculas() {
    const palavra = document.getElementById('palavra').value.toUpperCase();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    for (let i = 0; i < palavra.length; i++) {
        const letra = palavra.charAt(i);
        resultado.innerHTML += `${letra}<br>`;
    }
}

/*O HTML cria um campo de entrada (input) para o usuário digitar a palavra e um botão para acionar a conversão.
O JavaScript define a função converterMaiusculas() que:
Obtém a palavra do campo de entrada e a converte para maiúsculas usando toUpperCase().
Obtém o elemento div com id "resultado" para exibir a palavra convertida.
Usa um loop for para:
Obter cada letra da palavra usando charAt().
Criar um elemento <br> para quebrar a linha após cada letra.
Adicionar a letra maiúscula e a quebra de linha ao elemento "resultado". */