

const modal = document.querySelector(".modal");

window.addEventListener("scroll", onScrollToSection1);
modal.addEventListener("click", onClickModal);

function onScrollToSection1() {
    // Je récupère les éléments
    const htmlElem = document.documentElement;
    const section1 = document.querySelector(".one");

    // Je récupère la position
    const currentPosX = htmlElem.scrollTop;

    // J'affiche la modale sous condition
    if (currentPosX > section1.offsetTop - (section1.offsetTop)) {
        
        
       // Afficher la modale après 3 secondes
        setTimeout(() => {
        modal.style.display = "flex"; // Affiche la modale en utilisant display
        }, 3000); // Délai de 3000 millisecondes (3 secondes)

        window.removeEventListener("scroll", onScrollToSection1);
    }
}

function onClickModal() {
    console.log("click modal");
    modal.style.display = "none"; // Masque la modale en utilisant display
}

