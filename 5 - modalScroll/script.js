/**
 * removeEventListener
 * Scroll Event
 */


const modal = document.querySelector(".modal");

window.addEventListener("scroll", onScrollToSection3);
modal.addEventListener("click", onClickModal);

function onScrollToSection3() {
    // Je récupère les éléments
    const htmlElem = document.documentElement;
    const section3 = document.querySelector(".three");

    // Je récupère la position
    const currentPosX = htmlElem.scrollTop;

    // J'affiche la modale sous condition
    if (currentPosX > section3.offsetTop - (section3.offsetTop / 3)) {
        console.log(section3);
        modal.style.display = "flex"; // Affiche la modale en utilisant display
        // Si vous utilisez "flex", assurez-vous que votre CSS a le bon style pour .modal

        window.removeEventListener("scroll", onScrollToSection3);
    }
}

function onClickModal() {
    console.log("click modal");
    modal.style.display = "none"; // Masque la modale en utilisant display
}



// 4. Je lance la fonction onScrollDisplayModal sur l'evenement scroll de la fenetre 
// "display = none n'apparait pas
// "display = block le fait apparaitre"
// "display = flex quand tu veux le manipuler"

/**
 *  Fonction à passer en parametre de addEventListener("scroll",function)
 *  Obligatoire pour pouvoir utiliser removeEventListener(function)
 */
function onScrollDisplayModal(){
    console.log("Ouiiii je scroollll");

}

// //Pour observer le scroll et la position y:
// // Fonction appelée à chaque scroll
//     function onScrollFunction() {
//       console.log("scrollY =", window.scrollY);
//     }

//     // On écoute l'événement "scroll" sur la fenêtre
//     window.addEventListener("scroll", onScrollFunction);
