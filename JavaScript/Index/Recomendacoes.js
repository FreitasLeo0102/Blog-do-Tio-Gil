function ativarCard(card) {
  card.classList.add('ativo')
}

function desativarCard(card) {
  card.classList.remove('ativo')
}

function aplicarEventosCards() {
  const cards = document.querySelectorAll('.card')

  cards.forEach(card => {
    const img = card.querySelector('.cartaz img')

    img.addEventListener('mouseenter', () => ativarCard(card))
    card.addEventListener('mouseleave', () => desativarCard(card))
  })
}

function inicializarCards() {
  aplicarEventosCards()
}

inicializarCards()