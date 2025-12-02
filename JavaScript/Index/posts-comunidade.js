function inicializarLikes() {
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => alternarLike(btn))
    })
}

function alternarLike(btn) {
    const icon = btn.querySelector('.like-icon')
    const estaCurtido = btn.classList.contains('liked')

    if (estaCurtido) {
        btn.classList.remove('liked')
        btn.classList.add('unliked')
        icon.src = "../IMG/Post-Perfil/Post/like-off.png"
    } else {
        btn.classList.add('liked')
        btn.classList.remove('unliked')
        icon.src = "../IMG/Post-Perfil/Post/like-on.png"
    }
}

inicializarLikes()
