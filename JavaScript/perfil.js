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
            pfp: "../IMG/Post-Perfil/Perfil/big/fotopefil-big.png",
            post: "Amo como a Rebeca Sugar trata cada coisa com muito cuidado em Steven Universo, como quando a comunidade tratava a rubi como masculina demais, ela a retratou com um vestido em seu casamento, enquanto safira que era vista como mais feminina, foi retratada utilizando um terno, e quando se fundiram, formando a Garnet, suas roupas ficavam mescladas, quase como uma roupa agênero, quebrando os estigmas heteronormativos do fandom. Rebeca foi muito sensivel e acolhedora, arriscando o destino de sua animação em troca de retratar um relacionamento LGBT em sua mais pura e enxuta essência, com defeitos, qualidades, preconceitos e aceitações",
            img: "../IMG/Post-Perfil/WhatsApp Image 2025-12-03 at 19.20.12.jpeg"

        },

        talita: {
            nome: "TALIgado",
            arroba: "@taliAescura",
            bio: "Gosto de coisas que fazem meu mundo ficar mais leve e mais meu: jogar vôlei, dormir como se fosse um esporte profissional e, acima de tudo, mulheres. Também sou apaixonada por desenhos como The Owl House e She-Ra, que misturam aventura, emoção e personagens fortes que me inspiram.",
            local: "Ilhas Escaldadas-Reino Demoníaco",
            seguindo: "5",
            seguidores: "500M",
            banner: "../IMG/Post-Perfil/Perfil/tali/banner-tali.png",
            pfp: "../IMG/Post-Perfil/Perfil/tali/fotoperfil-tali.png",
            post: ""

        },

        mary: {
            nome: "ManaMary",
            arroba: "@mary.mana",
            bio: "Sou a Mariely! Entre partidas de vôlei e decifrar segredos de Gravity Falls, gosto de recarregar as energias dormindo, ouvindo variadas músicas, comendo comidas gostosas e aproveitando boas bebidas. A vida é um mistério e Gravity Falls apenas revela o quanto ainda não entendemos.",
            local: "Gravity Falls - Oregon",
            seguindo: "5",
            seguidores: "500M",
            banner: "../IMG/Post-Perfil/Perfil/mary/banner-mary.png",
            pfp: "../IMG/Post-Perfil/Perfil/mary/fotoperfil-mary.png",
            post: ""

        },

        thiago: {
            nome: "Thigas",
            arroba: "@ThiaGodman",
            bio: "Sou basqueteiro, gamer e nas horas vagas estudante do if! :) E eu gosto MUITO de Hazbin Hotel",
            local: "BitchCity-PQP, Inferno",
            seguindo: "5",
            seguidores: "500M",
            banner: "../IMG/Post-Perfil/Perfil/thiago/banner-thiago.png",
            pfp: "../IMG/Post-Perfil/Perfil/thiago/fotoperfil-thiago.png",
            post: "A forma que o alastor enganou o vox foi cinema, quando o personagem é bom não tem como",
            img: "../IMG/Post-Perfil/WhatsApp Image 2025-12-04 at 09.30.32.jpeg"

        },

        leo: {
            nome: "LeoLeo",
            arroba: "@B3_Leo",
            bio: "Sou Leo, estudante e apaixonado pelos universos das animações. Desde pequeno me perco nessas histórias, personagens e mundos que nunca deixam de me encantar.",
            local: "Jacu - SP",
            seguindo: "5",
            seguidores: "501M",
            banner: "../IMG/Post-Perfil/Perfil/leo/banner-leo.png",
            pfp: "../IMG/Post-Perfil/Perfil/leo/fotoperfi-leo.png",
            post: "Sempre q eu lembro q Inside Job foi cancelada meu dia fica pior, nunca vou perodar a Netflix por isso"

        },

        tiogil: {
            nome: "TioGilGameplays",
            arroba: "@Tiotiogilgameplays123",
            bio: "May the force be with you! ",
            local: "Patrocínio - MG",
            seguindo: "5",
            seguidores: "502M",
            banner: "../IMG/Post-Perfil/Perfil/tiogil/banner-tiogil.png",
            pfp: "../IMG/Post-Perfil/Perfil/tiogil/fotoperfil-tiogil.png",
            post: "Hj tenho aula no 2 TINF... Alguém me socorre."
        }
    };
}

function renderProfile(userData) {
    document.getElementById("nome").textContent = userData.nome;
    document.getElementById("nome-post").textContent = userData.nome;
    document.getElementById("arroba").textContent = userData.arroba;
    document.getElementById("arroba-post").textContent = userData.arroba;
    document.getElementById("bio").textContent = userData.bio;
    document.getElementById("local").textContent = userData.local;
    document.getElementById("seguindo").textContent = userData.seguindo;
    document.getElementById("seguidores").textContent = userData.seguidores;
    document.getElementById("conteudo-post").textContent = userData.post;
    document.getElementById("img-post").src = userData.img;
    document.getElementById("banner").src = userData.banner;
    document.getElementById("pfp").src = userData.pfp;
    document.getElementById("pfp-post").src = userData.pfp;

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



