// Exemple de données pour les cartes
const characters = [
    {
        name: "Phoenix",
        description: "Agent britannique qui se bat en utilisant des pouvoirs basés sur le feu.",
        image: "photo/phoenix1.jpg",
        skills: ["Curveball", "Hot Hands", "Blaze","Run it Back"]
    },
    {
        name: "Jett",
        description: "Agent agile avec des compétences basées sur la mobilité et l'agilité.",
        image: "photo/Jett.jpg",
        skills: ["Cloudburst", "Updraft", "Tailwind","Blade Storm"]
    },
    {
        name: "Sova",
        description: "Agent russe spécialisé dans la détection et la traque des ennemis.",
        image: "photo/Sova.jpg",
        skills: ["Shock Bolt", "Owl Drone", "Recon Bolt","Hunter's Fury"]
    },
    {
        name: "Brimstone",
        description: "Commandant tactique, Brimstone utilise des compétences de contrôle de zone pour fournir des ressources de soutien et aider son équipe à se déplacer.",
        image: "photo/Brimstone.webp",
        skills: ["Sky Smokes", "Incendiary", "Stim Beacon","Orbital Strike"]
    },
    {
        name: "Viper",
        description: "Viper est un agent spécialisé dans la manipulation des zones avec des gaz toxiques qui peuvent soit ralentir l'ennemi, soit causer des dégâts.",
        image: "photo/Viper.jpg",
        skills: ["Snake Bite", "Poison Cloud", "Toxic Screen", "Viper's Pit"]
    },
    {
        name: "Omen",
        description: "Omen est un agent furtif capable de manipuler les ombres pour se téléporter et déstabiliser les ennemis.",
        image: "photo/Omen.avif",
        skills: ["Paranoia", "Dark Cover", "Shrouded Step", "From the Shadows"]
    },
    {
        name: "Astra",
        description: "Astra contrôle l'espace et le temps avec des compétences cosmiques qui offrent un large éventail de contrôles de zone et de soutien.",
        image: "photo/astra.jpg",
        skills: ["Nova Pulse", "Gravity Well", "Nebula", "Astral Form"]
    },
    {
        name: "Sage",
        description: "Soigneuse chinoise, experte en protection et en soutien d'équipe.",
        image: "photo/Sage.jpg",
        skills: ["Barrier Orb", "Slow Orb", "Healing Orb", "Resurrection"]
    },
    {
        name: "Cypher",
        description: "Sentinelle marocaine, spécialiste en surveillance et pièges.",
        image: "photo/Cypher.jpg",
        skills: ["Trapwire", "Cyber Cage", "Spycam", "Neural Theft"]
    },
    {
        name: "Breach",
        description: "Démolisseur suédois, spécialiste des attaques explosives traversant les obstacles.",
        image: "photo/Breach.webp",
        skills: ["Aftershock", "Flashpoint", "Fault Line", "Rolling Thunder"]
    },
    {
        name: "Raze",
        description: "Duelliste brésilienne, experte en explosifs.",
        image: "photo/Raze.jpg",
        skills: ["Boom Bot", "Blast Pack", "Paint Shells", "Showstopper"]
    },
    {
        name: "Killjoy",
        description: "Ingénieure allemande, spécialisée en gadgets pour le contrôle de zone.",
        image: "photo/Killjoy.webp",
        skills: ["Nanoswarm", "Alarmbot", "Turret", "Lockdown"]
    },
    {
        name: "Skye",
        description: "Australienne, spécialiste du soutien avec des compétences de guérison.",
        image: "photo/Skye.jpg",
        skills: ["Regrowth", "Trailblazer", "Guiding Light", "Seekers"]
    },
    {
        name: "Yoru",
        description: "Infiltrateur japonais, expert en tromperie et furtivité.",
        image: "photo/Yoru.jpg",
        skills: ["Fakeout", "Blindside", "Gatecrash", "Dimensional Drift"]
    },
    {
        name: "KAY/O",
        description: "Androïde conçu pour neutraliser les pouvoirs des autres agents.",
        image: "photo/Kayo.jpg",
        skills: ["FRAG/ment", "FLASH/drive", "ZERO/point", "NULL/cmd"]
    },
    {
        name: "Chamber",
        description: "Tireur d'élite français utilisant des pièges et la précision.",
        image: "photo/Chamber.jpg",
        skills: ["Trademark", "Headhunter", "Rendezvous", "Tour de Force"]
    },
    {
        name: "Neon",
        description: "Duelliste philippine, spécialiste de la vitesse et des attaques électriques.",
        image: "photo/Neon.webp",
        skills: ["High Gear", "Relay Bolt", "Fast Lane", "Overdrive"]
    },
    {
        name: "Fade",
        description: "Traqueuse turque utilisant les ténèbres et la peur pour révéler les ennemis.",
        image: "photo/Fade.jpg",
        skills: ["Prowler", "Seize", "Haunt", "Nightfall"]
    },
    {
        name: "Harbor",
        description: "Contrôleur indien utilisant l'eau pour bloquer la vue et contrôler les combats.",
        image: "photo/Harbor.jpg",
        skills: ["Cascade", "Cove", "High Tide", "Reckoning"]
    },
    {
        name: "Deadlock",
        description: "Sentinelle norvégienne, experte en pièges de contrainte et contrôle des mouvements ennemis.",
        image: "photo/Deadlock.jpg",
        skills: ["Cloudburst", "Updraft", "Tailwind", "Blade Storm"]
    },
    {
        name: "Reyna",
        description: "Duelliste mexicaine, spécialisée dans l'autosoin et la survie en combat rapproché.",
        image: "photo/Reyna.webp",
        skills: ["Leer", "Devour", "Dismiss", "Empress"]
    },
    {
        name: "Clove",
        description: "Agent furtif et contrôleur d'origine inconnue, spécialiste en dissimulation et en empoisonnement pour semer la confusion chez ses ennemis.",
        image: "photo/Clove.jpg",
        skills: ["Venom Mist", "Silent Step", "Sporeshot", "Toxic Bloom"]
    },
    {
        name: "Iso",
        description: "Duelliste chinois, maître des affrontements en un contre un, spécialisé dans la distraction et l'isolation des ennemis.",
        image: "photo/Iso.png",
        skills: ["Undercut", "Double Tap", "Fragmented Reality", "Kill Contract"]
    },
    {
        name: "Gekko",
        description: "Initiateur américain, utilisant des créatures vivantes pour perturber les ennemis et contrôler l'espace.",
        image: "photo/Gekko.png",
        skills: ["Molly", "Wingman", "Dizzy", "Thrash"]
    },
    {
        name: "Vyse",
        description: "Contrôleur britannique, maître des champs électromagnétiques et de la manipulation des appareils électroniques.",
        image: "photo/Vyse.avif",
        skills: ["Magnetic Pulse", "Gravity Well", "EMP Field", "Magnetic Storm"]
    }
];

// Sélectionnez le conteneur des cartes
const cardsContainer = document.getElementById('cards-container');

// Génération des cartes dynamiquement
characters.forEach(character => {
    // Création de la carte
    const card = document.createElement('div');
    card.className = 'character-card';

    // Contenu de la carte
    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <div class="character-info">
            <h2>${character.name}</h2>
            <p>${character.description}</p>
            <h3>Compétences:</h3>
            <ul>
                ${character.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
    `;

    // Ajout de la carte au conteneur
    cardsContainer.appendChild(card);
});
