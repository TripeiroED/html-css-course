 // Sélectionner les éléments du DOM
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');

 // Écouter le clic sur le bouton de recherche (icône de loupe)
searchButton.addEventListener('click', function() {
     // Si le champ de recherche est caché, l'afficher
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block";
         searchInput.focus(); // Placer le curseur dans le champ de recherche
    } else {
         // Si le champ est déjà visible, le masquer
        searchInput.style.display = "none";
    }
});

 // Masquer le champ de recherche quand on appuie sur "Entrée"
searchForm.addEventListener('submit', function(event) {
    searchInput.style.display = "none";
});