/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/




const switchBtn = document.querySelector(".switch");
const body = document.body; // Récupérer le body
const icon = document.querySelector(".icon"); // Récupérer l'icône

switchBtn.addEventListener("click", function() {
    // Passer tout en darkmode
    const allTags = document.querySelectorAll("*");

    allTags.forEach(function(tag) {
        tag.classList.toggle("darkmode");
    });

    // Changer l'icône
    if (body.classList.contains('darkmode')) {
        // Mode sombre activé - afficher la lune
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-^moon');
    } else {
        // Mode clair activé - afficher le soleil
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

