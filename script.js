// Selecionar todos os lápis na caixa
const lapisElements = document.querySelectorAll('.lapis');

// Percorrer cada lápis e adicionar o evento de clique
lapisElements.forEach(lapis => {
  lapis.addEventListener('click', function() {
    // Remover a classe ativo do lápis que está ativo
    lapisElements.forEach(l => l.classList.remove('ativo'));

    // Adicionar a classe ativo ao lápis clicado
    this.classList.add('ativo');

    // Exibir a cor do lápis selecionado no console
    console.log(`Cor selecionada: ${this.style.backgroundColor}`);
  });
});
