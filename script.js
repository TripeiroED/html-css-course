function changeMainImage(imageSrc, mainImageId) {
    // Sélectionner l'image principale de la carte en utilisant l'id
    const mainImage = document.getElementById(mainImageId);
    
    // Mettre à jour la source de l'image principale
    mainImage.src = imageSrc;
}
