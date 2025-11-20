function atualizarCarrossel(container, index) {
    container.style.transform = `translateX(-${index * 100}%)`
}

function proximoSlide(index, total) {
    return (index + 1) % total
}

function slideAnterior(index, total) {
    return (index - 1 + total) % total
}

function iniciarCarrossel() {
    const container = document.querySelector(".slides")
    const slides = document.querySelectorAll(".slide")
    const btnNext = document.querySelector(".next")
    const btnPrev = document.querySelector(".prev")

    let index = 0

    btnNext.addEventListener("click", () => {
        index = proximoSlide(index, slides.length)
        atualizarCarrossel(container, index)
    })

    btnPrev.addEventListener("click", () => {
        index = slideAnterior(index, slides.length)
        atualizarCarrossel(container, index)
    })
}

iniciarCarrossel()
