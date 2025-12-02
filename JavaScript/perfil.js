function getUserFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("user");
}

function getUserData() {
    return {
        joao: {
            nome: "JoaoBIGorna",
            arroba: "@JBigStevenUnvrs",
            bio: "Jovem-senhor apaixonado por arte, café e animações🖌️📷☕, moderador do canal SUniverseForever. Trabalhando por designs melhores! Figma acima de tudo, Gilberto acima de todos!💜",
            local: "Beach City-Delmarva, USA",
            seguindo: "5",
            seguidores: "500M",
            banner: "../IMG/Post-Perfil/Perfil/big/banner-big.png",
            pfp: "../IMG/Post-Perfil/Perfil/big/fotopefil-big.png"
        },

        talita: {
            nome: "TALIgado",
            arroba: "@taliAescura",
            bio: "Gosto de coisas que fazem meu mundo ficar mais leve e mais meu: jogar vôlei, dormir como se fosse um esporte profissional e, acima de tudo, mulheres. Também sou apaixonada por desenhos como The Owl House e She-Ra, que misturam aventura, emoção e personagens fortes que me inspiram.",
            local: "Ilhas Escaldadas-Reino Demoníaco",
            seguindo: "5",
            seguidores: "500M",
            banner: "../IMG/Post-Perfil/Perfil/tali/banner-tali.png",
            pfp: "../IMG/Post-Perfil/Perfil/tali/fotoperfil-tali.png"
        },

        mary: {
            nome: "ManaMary",
            arroba: "@mary.mana",
            bio: "Sou a Mariely! Entre partidas de vôlei e decifrar segredos de Gravity Falls, gosto de recarregar as energias dormindo, ouvindo variadas músicas, comendo comidas gostosas e aproveitando boas bebidas. A vida é um mistério e Gravity Falls apenas revela o quanto ainda não entendemos.",
            local: "Gravity Falls - Oregon",
            seguindo: "5",
            seguidores: "500M",
            banner: "../IMG/Post-Perfil/Perfil/mary/banner-mary.png",
            pfp: "../IMG/Post-Perfil/Perfil/mary/fotoperfil-mary.png"
        },

        thiago: {
            nome: "Thigas",
            arroba: "@ThiaGodman",
            bio: "Sou basqueteiro, gamer e nas horas vagas estudante do if! :) E eu gosto MUITO de Hazbin Hotel",
            local: "BitchCity-PQP, Inferno",
            seguindo: "5",
            seguidores: "500M",
            banner: "../IMG/Post-Perfil/Perfil/thiago/banner-thiago.png",
            pfp: "../IMG/Post-Perfil/Perfil/thiago/fotoperfil-thiago.png"
        },

        leo: {
            nome: "LeoLeo",
            arroba: "@B3_Leo",
            bio: "Sou Leo, estudante e apaixonado pelos universos das animações. Desde pequeno me perco nessas histórias, personagens e mundos que nunca deixam de me encantar.",
            local: "Jacu - SP",
            seguindo: "5",
            seguidores: "501M",
            banner: "../IMG/Post-Perfil/Perfil/leo/banner-leo.png",
            pfp: "../IMG/Post-Perfil/Perfil/leo/fotoperfi-leo.png"
        },

        tiogil: {
            nome: "TioGilGameplays",
            arroba: "@Tiotiogilgameplays123",
            bio: "Sou Leo, estudante e apaixonado pelos universos das animações. Desde pequeno me perco nessas histórias, personagens e mundos que nunca deixam de me encantar.",
            local: "Jacu - SP",
            seguindo: "5",
            seguidores: "502M",
            banner: "../IMG/Post-Perfil/Perfil/tiogil/banner-tiogil.png",
            pfp: "../IMG/Post-Perfil/Perfil/tiogil/fotoperfil-tiogil.png"
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
