const palavras = ["javascript", "html", "css", "python", "java"];
let palavraEscolhida = "";
let palavraAdivinhada = [];
let tentativasRestantes = 6;

function iniciarJogo() {
    tentativasRestantes = 6;
    palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
    palavraAdivinhada = Array(palavraEscolhida.length).fill('_');
    atualizarInterface();
}

function atualizarInterface() {
    let containerPalavra = document.getElementById('container-palavra');
    containerPalavra.innerHTML = '';
    palavraAdivinhada.forEach(letra => {
        let span = document.createElement('span');
        span.textContent = letra + ' ';
        containerPalavra.appendChild(span);
    });

    let containerTentativas = document.getElementById('tentativas-restantes');
    containerTentativas.textContent = `Tentativas ${tentativasRestantes}`;


    let containerFeedback = document.getElementById('container-feedback');
    containerFeedback.textContent = '';
}

function verificarLetra() {
    let inputLetra = document.getElementById('input-letra');
    let letra = inputLetra.value.toLowerCase();
    inputLetra.value = '';

    if (letra.length !== 1 || !letra.match(/[a-z]/i)) {
        alert('Por favor, digite uma única letra válida.');
        return;
    }

    if (palavraEscolhida.includes(letra)) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                palavraAdivinhada[i] = letra;
            }
        }
    } else {
        tentativasRestantes--;
    }

    atualizarInterface();
    verificarFimJogo();
}

function verificarFimJogo() {
    if (palavraAdivinhada.join('') === palavraEscolhida) {
        alert('Parabéns! Você ganhou!');
        iniciarJogo();
    } else if (tentativasRestantes === 0) {
        alert(`Game Over! A palavra era: ${palavraEscolhida}`);

        iniciarJogo();
    }
}

// Iniciar o jogo quando a página carregar
document.addEventListener('DOMContentLoaded', iniciarJogo);