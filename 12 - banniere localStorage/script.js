/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 */

const banniere = document.querySelector(".cookies");
const btn = document.querySelector(".btn-accept");

if (getCookies() === true) { // Si les cookies sont déjà acceptés
    banniere.remove();
} else {
    // click button
    btn.addEventListener("click", function() {
        setCookies(true);
        
        // Disparaître la bannière
        banniere.style.opacity = 0;
        setTimeout(function() {
            banniere.remove();
        }, 3000);
    });
}

// Fonction pour définir un cookie
function setCookies(accepted) {
    const expirationDays = 1;
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000)); // 30 jours en millisecondes
    const expires = "expires=" + date.toUTCString();
    document.cookie = "cookiesAccepted=" + accepted + ";" + expires + ";path=/"; // 'path=/' pour que le cookie soit accessible sur tout le site
}

// Fonction pour vérifier si les cookies ont été acceptés
function getCookies() {
    const name = "cookiesAccepted=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1); // Supprime les espaces au début
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length) === "true"; // Renvoie true si le cookie existe et est égal à "true"
        }
    }
    return false; // Renvoie false si le cookie n'est pas trouvé
}