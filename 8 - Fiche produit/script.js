/**
 * let
 * element.getAttribute()
 * element.setAttribute()
 * ++ operator
 * operateur ternaire
 */

// 1. Je recupere toutes les petites vignettes
const vignettes = document.querySelectorAll(".small");
// 2. Je recupere la grande photo
const fullImg = document.getElementById("full");

// 3. Je recupere le bouton AJOUTER
const btnAdd = document.querySelector(".btn-add");

// 4. Je recupere la balise vide de message d'ajout du panier
const panierMsg = document.querySelector(".panier-msg");
// 5. Je crée une variable qui contient le nombre de produits ajoutées ua panier
let panier = 0;

// 6. Je gère le clic sur chaque vignette
vignettes.forEach(function(vignette) {
    vignette.addEventListener("click", function() {
        // On récupère l'attribut src de la vignette cliquée
        const vignetteSrc = vignette.getAttribute("src");
        
        // On change l'attribut src de la grande image avec celui de la vignette
        fullImg.setAttribute("src", vignetteSrc);
    });
});

// 7. Je gère le clic sur le bouton AJOUTER
btnAdd.addEventListener("click", function() {
    // J'incrémente le nombre de produits dans le panier
    panier++;
    
    // Je mets à jour le message du panier en utilisant un opérateur ternaire
    panierMsg.innerText = `Vous avez ${panier} produit${panier > 1 ? "s" : ""} dans le panier.`;
});


// ...