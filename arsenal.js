// Exemple de données pour les armes
const weapons = [
    {
        name: "Classic.",
        description: "Légère et polyvalente, cette arme par défaut est un grand classique.",
        image: "Armes/Classic.avif"
    },
    {
        name: "Shorty.",
        description: "Particulièrement efficace lorsque vous surprenez vos adversaires au corps à corps.",
        image: "Armes/shorty..webp"
    },
    {
        name: "Frenzy.",
        description: "À courte portée, maintenez la détente. À longue distance... Changez d'arme.",
        image: "Armes/Frenzy..avif"
    },
    {
        name: "Ghost.",
        description: "Élégant, silencieux et efficace à n'importe quelle portée.",
        image: "Armes/Ghost..webp"
    },
    {
        name: "Sheriff.",
        description: "Un six-coups moderne, idéal pour ceux qui visent la tête.",
        image: "Armes/Sheriff..webp"
    },
    {
        name: "Stinger.",
        description: "Quand le Stinger crache sa rafale, c'est fini.",
        image: "Armes/Stinger.webp"
    },
    {
        name: "Spectre.",
        description: "Dans le doute, optez pour le Spectre.",
        image: "Armes/spectre.webp"
    },
    {
        name: "Bucky.",
        description: "Attaquant. Défenseur. Dans tous les cas, c'est vous qui détenez le fusil à pompe pour action maximale.",
        image: "Armes/Bucky.avif"
    },
    {
        name: "JUDGE.",
        description: "Un fusil à pompe automatique et à tir rapide, qui inflige des dégâts élevés.",
        image: "Armes/judge.webp"
    },
    {
        name: "BULLDOG.",
        description: "On peut accéder à une certaine forme de bonheur en réalisant de belles actions avec le Bulldog.",
        image: "Armes/bulldog.webp"
    },
    {
        name: "GUARDIAN.",
        description: "Brille particulièrement entre les mains d'un tireur patient.",
        image: "Armes/guardian.webp"
    },
    {
        name: "PHANTOM.",
        description: "Une arme équilibrée pour de longs tirs stables.",
        image: "Armes/phantom.avif"
    },
    {
        name: "VANDAL.",
        description: "Aussi précise que puissante, cette arme est redoutable en rafales courtes.",
        image: "Armes/vandal.avif"
    },
    {
        name: "MARSHAL.",
        description: "Postez-vous à un angle, respirez, et l'ennemi regrettera de passer dans le coin.",
        image: "Armes/marshal.webp"
    },
    {
        name: "OPERATOR.",
        description: "Installez-vous confortablement pour contrôler des zones importantes.",
        image: "Armes/operator.webp"
    },
    {
        name: "ARES.",
        description: "Ne le croyez pas balourd à cause de sa taille.",
        image: "Armes/ares.avif"
    },
    {
        name: "ODIN.",
        description: "Une machine qui promet la gloire à celui qui la porte et la ruine à celui qui l'affronte.",
        image: "Armes/odin.avif"
    },
    {
        name: "COUTEAU TACTIQUE.",
        description: "La solution intime.",
        image: "Armes/couteau.webp"
    },
    {
        name: "OUTLAW.",
        description: "Double canon, un seul impact. Le choix idéal pour les parties les plus spectaculaires.",
        image: "Armes/outlaw.avif"
    }
];

// Sélectionnez le conteneur des cartes d'armes
const weaponsContainer = document.querySelector('.arsenal-gallery');

// Génération des cartes d'armes dynamiquement
weapons.forEach(weapon => {
    // Création de la carte
    const weaponCard = document.createElement('div');
    weaponCard.className = 'weapon-card';

    // Contenu de la carte
    weaponCard.innerHTML = `
        <img src="${weapon.image}" alt="${weapon.name}">
        <h2>${weapon.name}</h2>
        <p>${weapon.description}</p>
    `;

    // Ajout de la carte au conteneur
    weaponsContainer.appendChild(weaponCard);
});
