/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley

const emoji_elem = document .querySelector (".fa-solid");

// 2. Je recupere le bouton ABONNER

const btn_sub = document .querySelector (".btn-sub");
console.log (btn_sub);

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur
// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
let Abonnez_vous = false ;

btn_sub.addEventListener("click", function () {
    if (Abonnez_vous === false) {
        // L'utilisateur s'abonne
        btn_sub.textContent = "Abonné";
        btn_sub.classList.add("abonne"); // Ajoute la classe pour changer la couleur
        Abonnez_vous = true;
    } 
    else {
        // L'utilisateur se désabonne
        btn_sub.textContent = "Abonnez-vous";
        btn_sub.classList.remove("abonne"); // Enlève la classe pour revenir à la couleur par défaut
        Abonnez_vous = false; // Correction de la variable pour qu'elle reflète l'état
    } });

// 4. J'ecoute le click sur le bouton smiley

emoji_elem.addEventListener("click", function () {

   emoji_elem.classList.toggle("fa-smile-wink");
   emoji_elem.classList.toggle("fa-face-meh");
   emoji_elem.classList.toggle("happy");

});
