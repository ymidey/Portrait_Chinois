var numCase = 0;

/* Récupération des données contenues dans analogies.json*/
fetch('data/analogies.json').then(function (response) {
    response.json().then(function (data) {
        for (numCase; numCase < data.length; numCase++) {
            const element = data[numCase];
            document.querySelector(".content").innerHTML += "<section class='section_analogie " + element.id + "'> <h2> Si j'étais " + element.analogie + ", je serais... </h2> <h1>" + element.valeurAnalogie + "</h1> <p class='explication'> " + element.explication + "</p><img src=" + element.image + "></section>";
        }
    });
});

/* Code permettant suite à un clic sur le bouton avec la class "scroll-down-button" de réaliser un scroll doux automatique vers le bas */
const button = document.querySelector("a.scroll-down-button");

button.addEventListener("click", function () {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});

/* Code permettant d'ajouter la class "modal-visible" et de retirer la class "modale-invisble" à la div ayant la class "mentions_legales" si un clique est effectué sur l'un des deux paragraphes ayant la class "legals" */
var mentionLegales = document.querySelectorAll("p.legals");
for (let i = 0; i < mentionLegales.length; i++) {
    mentionLegales[i].addEventListener("click", function () {
        const modal = document.querySelector('.mentions_legales');
        modal.classList.remove("modal-invisible");
        modal.classList.add("modal-visible");
    });
}

/* Code permettant de retirer la class "modal-visible" et d'ajouter la class "modal-invisible" a la div ayant la class "mentions_legales" afin de rendre la div contenant mon modal invisible, si un clique est effectué sur le bouton ayant la class "closeMentionsLegals" */
const closeMentionsLegales = document.querySelector(".closeMentionsLegales");
closeMentionsLegales.addEventListener("click", function () {
    const modal = document.querySelector('.mentions_legales');
    modal.classList.remove("modal-visible");
    modal.classList.add("modal-invisible");
});


const content = document.querySelector('.content');
const btn_Up = document.getElementById('scroll-up-button');

/* Code permettant d'afficher le bouton ayant la class "scroll-up-button" */
window.addEventListener('scroll', () => {
    if (window.scrollY >= content.offsetTop) {
        btn_Up.classList.remove('hidden');
    } else {
        btn_Up.classList.add('hidden');
    }
});

/* Code permettant à l'aide d'un clique sur le bouton ayant la class "scroll-up-button" de remonter l'utilisateur tout en haut de la page */
btn_Up.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

