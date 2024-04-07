/*
Objetivo 1 - quando clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html
    
    Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando clicar nele

    Passo 2 - identificar o clique no botão

    Passo 3 - adicionar a classe "ativo" nos projetos escondidos

Objetivo 2 - esconder o botão de mostrar mais
    Passo 1 - pegar o botão e esconder ele

*/

// Objetivo 1 - quando clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando clicar nele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();

    // Objetivo 2 - esconder o botão de mostrar mais
    // Passo 1 - pegar o botão e esconde ele
    esconderBotao();

});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add('ativo');
    });
}