const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes");
botoesCarrossel.forEach(function(botao, indice) {
    botao.addEventListener("click", function() {
        desativarBotaoSelecionado();
        marcarBotaoComoSelecionado(botao);
        esconderImagemAtiva();
        mostrarImagemDeFundo(indice);
        esconderInformacoesAtivas();
        mostrarInformacoes(indice);
        // Responsivo
        const targetId = this.getAttribute('data-target');
        const imagemAlvo = document.getElementById(targetId);
        // Remove a classe 'principal' de todas os personagens pequenos
        document.querySelectorAll('.personagens').forEach(function(imagem) {
            imagem.classList.remove('principal');
        });
        // Adiciona a classe 'principal' à o personagens pequeno
        imagemAlvo.classList.add('principal'); 
    });
});

function marcarBotaoComoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

