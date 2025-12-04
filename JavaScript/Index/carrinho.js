document.querySelectorAll(".item-carrinho").forEach(item => {
    const btnMais = item.querySelector(".btn-mais")
    const btnMenos = item.querySelector(".btn-menos")
    const qtdSpan = item.querySelector(".qtd")

    btnMais.addEventListener("click", () => {
        let qtd = Number(qtdSpan.textContent)
        qtdSpan.textContent = qtd + 1
    })

    btnMenos.addEventListener("click", () => {
        let qtd = Number(qtdSpan.textContent)
        if (qtd > 1) {
            qtdSpan.textContent = qtd - 1
        }
    })
})
