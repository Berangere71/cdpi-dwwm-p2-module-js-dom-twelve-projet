/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"

const btn_btn_accept = document.querySelector (".btn-accept");

// 2. Je recupere la banniere de cookies

const cookies = document.querySelector(".cookies");

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"

// btn_btn_accept.addEventListener ("click", function () {
//  cookies.style.display = "none";

// });

btn_btn_accept.addEventListener("click",function () {

    cookies.classList.add ("fade-out");

    setTimeout ( () => {

        cookies.style.display = "none";
    }, 1000);
});


