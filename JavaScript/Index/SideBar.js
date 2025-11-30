function inicializarSidebar() {
    const sidebar = document.getElementById("sidebar")
    const botaoMenu = document.getElementById("menu-hamburguer")

    configurarCliqueMenu(sidebar, botaoMenu)
}

function configurarCliqueMenu(sidebar, botaoMenu) {
    botaoMenu.addEventListener("click", () => {
        alternarSidebar(sidebar)
        alternarBody()
    })
}

function alternarSidebar(sidebar) {
    sidebar.classList.toggle("recolhida")
}

function alternarBody() {
    document.body.classList.toggle("sidebar-fechada")
}

inicializarSidebar()

function aplicarEstadoInicialMobile() {
    if (window.innerWidth <= 700) {
        document.getElementById("sidebar").classList.add("recolhida")
        document.body.classList.add("sidebar-fechada")
    }
}

aplicarEstadoInicialMobile()