var analogie = "";
var numCase = 0;

fetch('script/analogies.json').then(function (response) {
    response.json().then(function (data) {
        for (numCase; numCase < data.length; numCase++) {
            const element = data[numCase]
            document.querySelector(".content").innerHTML += "<section class='section_analogie " + element.id + "'> <h2> Si j'étais " + element.analogie + ", je serais... </h2> <h1>" + element.valeurAnalogie + "</h1> <p class='explication'> " + element.explication + "</p><img src=" + element.image + "></section>"
        }
    })
})

const button = document.querySelector("a.scroll-down-button");

button.addEventListener("click", function () {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});

var mentionLegales = document.querySelectorAll("p.legals")

for (let i = 0; i < mentionLegales.length; i++) {
    mentionLegales[i].addEventListener("click", function () {
        const modal = document.querySelector('.mentions_legales');
        modal.classList.remove("modal-invisible");
        modal.classList.add("modal-visible");
    });
}

const closeMentionsLegales = document.querySelector(".closeMentionsLegales")

closeMentionsLegales.addEventListener("click", function () {
    const modal = document.querySelector('.mentions_legales')
    modal.classList.remove("modal-visible")
    modal.classList.add("modal-invisible")
})

/* Valeur de mon formulaire */
const resAnalogie = document.querySelector("#analogie");
const resValeurAnalogie = document.querySelector("#valeurAnalogie");
const resExplication = document.querySelector("#explication");
const resImage = document.querySelector("#image");
const resEmail = document.querySelector("#email");

const submit = document.querySelector("#submit")

submit.addEventListener("click", function () {
    let urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&courriel=" + resEmail.value + "&login=yannick.midey&message=Si jétais " + resAnalogie.value + ", je serais " + resValeurAnalogie.value + "," + resExplication.value + ". L'urld de l'image que vous nous avez fourni : " + resImage.value;
    if (window.confirm("Voici les informations que vous nous avez transmis : Si vous êtes " + resAnalogie.value + ", vous serez " + resValeurAnalogie.value + ". Votre explication : " + resExplication.value + ". L'url de votre image : " + resImage.value + ". Votre adresse mail : " + resEmail.value + ". Etes-vous sûr de vouloir envoyer ses informations ?")) {
        fetch(urlVisitee).then(function (response) {
            response.json().then(function (data) {
                console.log("Réponse reçue : ");
                console.log(data);
            });
        });
        document.getElementById("myForm").reset();
    }
}) 
