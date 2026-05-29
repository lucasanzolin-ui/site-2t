document.addEventListener('DOMContentLoaded', () => {
    
    // Gerenciamento das Abas da Ficha Detalhada
    const botoesAba = document.querySelectorAll('.aba-btn');
    const conteudosAba = document.querySelectorAll('.aba-conteudo');

    botoesAba.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove classes ativas de todos os botões e conteúdos
            botoesAba.forEach(b => b.classList.remove('ativa'));
            conteudosAba.forEach(c => c.classList.remove('ativo'));

            // Adiciona classe ativa ao botão clicado
            botao.classList.add('ativa');

            // Mostra o conteúdo correspondente baseado no atributo data-aba
            const idAba = botao.getAttribute('data-aba');
            document.getElementById(idAba).classList.add('ativo');
        });
    });

    // Interação do Botão de Compras
    const btnComprar = document.getElementById('btnComprar');
    btnComprar.addEventListener('click', () => {
        alert('Chocolate adicionado ao carrinho com sucesso! 🍫🛒');
    });
});
