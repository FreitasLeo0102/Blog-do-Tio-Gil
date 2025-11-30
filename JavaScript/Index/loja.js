document.querySelectorAll(".produto-card").forEach(card => {
    const imgArea = card.querySelector(".produto-img");

    imgArea.addEventListener("mouseenter", () => {
        card.classList.remove("fechado");
        card.classList.add("aberto");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("aberto");
        card.classList.add("fechado");
    });
});
