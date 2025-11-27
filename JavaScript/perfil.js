function getUserFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("user");
}

function getUserData() {
    return {
        joao: {
            nome: "JoaoBlGorna",
            arroba: "@JBlgStevenUnvrs",
            bio: "Jovem-senhor apaixonado por arte, café e animações / ✏️📚, moderador do canal SUniverseForever. Trabalhando por designs melhores! Figma acima de tudo, Gilberto acima de todos!💜",
            local: "Beach City–Delmarva, USA",
            seguindo: "500M",
            seguidores: "0",
            banner: "img/usuarios/joao-banner.png",
            pfp: "img/usuarios/joao-pfp.png"
        },

        talia: {
            nome: "TALGado",
            arroba: "@taliAescura",
            bio: "Gosto de coisas que fazem meu mundo ficar leve e mais meu...",
            local: "Ilhas Escaldadas – Reino Demoníaco",
            seguindo: "5",
            seguidores: "000T",
            banner: "img/usuarios/tali-banner.png",
            pfp: "img/usuarios/tali-pfp.png"
        }
    };
}

function renderProfile(userData) {
    document.getElementById("nome").textContent = userData.nome;
    document.getElementById("arroba").textContent = userData.arroba;
    document.getElementById("bio").textContent = userData.bio;
    document.getElementById("local").textContent = userData.local;
    document.getElementById("seguindo").textContent = userData.seguindo;
    document.getElementById("seguidores").textContent = userData.seguidores;
    document.getElementById("banner").src = userData.banner;
    document.getElementById("pfp").src = userData.pfp;
}

function main() {
    const userID = getUserFromURL();
    const allUsers = getUserData();

    if (!userID || !allUsers[userID]) {
        alert("Perfil não encontrado.");
        return;
    }

    renderProfile(allUsers[userID]);
}

main();
