
  function ativarCard(card) {
    card.classList.add('ativo')
    mostrarInfo(card)
  }

  function desativarCard(card) {
    card.classList.remove('ativo')
    esconderInfo(card)
  }

  function mostrarInfo(card) {
    const info = card.querySelector('.info-desenho')
    if (info) info.style.display = 'block'
  }

  function esconderInfo(card) {
    const info = card.querySelector('.info-desenho')
    if (info) info.style.display = 'none'
  }

  function aplicarEventosImagens() {
    const cards = document.querySelectorAll('.card') // variável local dentro da função
    cards.forEach(card => {
      const img = card.querySelector('.cartaz img') // variável local dentro da função
      if (img) {
        img.addEventListener('mouseenter', () => ativarCard(card))
        img.addEventListener('mouseleave', () => desativarCard(card))
      }
    })
  }

  // Função principal que roda tudo
  function inicializarCards() {
    aplicarEventosImagens()
  }

  // chama a função principal
  inicializarCards()