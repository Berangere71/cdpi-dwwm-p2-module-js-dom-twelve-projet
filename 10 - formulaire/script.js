/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */

/**
 * 1. Je récupère
 *      - le formulaire
 *      - le champ prénom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumis (clic du bouton submit ou touche ENTER)
form.addEventListener("submit", function(event) {
    // 3. J'annule le comportement par défaut du formulaire : qui consiste à envoyer une requête HTTP GET à l'adresse de l'attribut action du formulaire et donc recharger la page
    event.preventDefault();

    // Récupérer les valeurs des champs de formulaire et retirer les espaces en début et en fin
    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    // Vérification de la longueur du prénom
    if (prenomValue.length < 2) {
        document.querySelector("#prenom").nextElementSibling.classList.remove("invisible");
    } else {
        hideError(prenom); // Cache l'erreur si le prénom est valide
    }

    // Vérification de la longueur du nom
    if (nomValue.length < 2 || nomValue.length > 20) {
        document.querySelector("#nom").nextElementSibling.classList.remove("invisible");
    } else {
        hideError(nom); // Cache l'erreur si le nom est valide
    }

    // Validation de l'email avec une expression régulière
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour vérifier le format de l'email
    if (!emailRegex.test(emailValue)) {
        document.querySelector("#email").nextElementSibling.classList.remove("invisible");
    } else {
        hideError(email); // Cache l'erreur si l'email est valide
    }

    // Vous pouvez également vérifier le message si nécessaire
    if (messageValue.length < 10) {
        document.querySelector("#message").nextElementSibling.classList.remove("invisible");
    } else {
        hideError(message); // Cache l'erreur si le message est valide
    }


});

// Fonction pour cacher les messages d'erreur
function hideError(element) {
    element.nextElementSibling.classList.add("invisible");
}

/**
 * HELPERS FUNCTIONS
 */
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}


/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message,from){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"message":"${message}","from":"${from}"}`
      };
      
    fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}