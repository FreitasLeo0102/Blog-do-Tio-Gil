function ativarCard(card) {
  card.classList.add('ativo')
}

function desativarCard(card) {
  card.classList.remove('ativo')
}

function aplicarEventosDesktop() {
  const cards = document.querySelectorAll('.card')

  cards.forEach(card => {
    const img = card.querySelector('.cartaz img')

    img.addEventListener('mouseenter', () => ativarCard(card))
    card.addEventListener('mouseleave', () => desativarCard(card))
  })
}

function aplicarEventosMobile() {
  const cards = document.querySelectorAll('.card')

  cards.forEach(card => {
    const img = card.querySelector('.cartaz img')

    img.addEventListener('click', () => {
      const jaAtivo = card.classList.contains('ativo')

      cards.forEach(c => c.classList.remove('ativo'))

      if (!jaAtivo) ativarCard(card)
    })
  })
}

function inicializarCards() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches

  if (isMobile) {
    aplicarEventosMobile()
  } else {
    aplicarEventosDesktop()
  }
}

inicializarCards()
