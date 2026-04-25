/**
 * main.js — NetCiné v2
 * Galerie style Netflix : rangées par genre, hover zoom, modal
 * L1S2 Informatique — JavaScript débutant (DOM, événements)
 *
 * Plan du fichier :
 *  1. Données des films
 *  2. Récupération des éléments du DOM
 *  3. Fonctions utilitaires
 *  4. Construction des cartes
 *  5. Construction des rangées par genre
 *  6. Filtrage / Recherche
 *  7. Modal de détail
 *  8. Écouteurs d'événements
 *  9. Initialisation
 */


/* ============================================================
   1. DONNÉES DES FILMS
   Un tableau d'objets — chaque objet = un film
   ============================================================ */
const films = [
  {
    titre: "The Dark Knight",
    annee: 2008,
    genre: "action",
    note: 5,
    realisateur: "Christopher Nolan",
    description: "Batman affronte le Joker, un anarchiste criminel qui plonge Gotham dans le chaos. Un chef-d'œuvre du film de super-héros qui explore les limites de la morale.",
    emoji: "🦇"
  },
  {
    titre: "Mad Max: Fury Road",
    annee: 2015,
    genre: "action",
    note: 5,
    realisateur: "George Miller",
    description: "Dans un monde post-apocalyptique, Max et Furiosa fuient un tyran à travers le désert. Un déluge de pyrotechnie et d'adrénaline sans temps mort.",
    emoji: "🚗"
  },
  {
    titre: "John Wick",
    annee: 2014,
    genre: "action",
    note: 4,
    realisateur: "Chad Stahelski",
    description: "Un ancien tueur à gages sorti de sa retraite se venge de ceux qui ont tué son chien. Le film d'action le plus chorégraphié de sa génération.",
    emoji: "🐕"
  },
  {
    titre: "Die Hard",
    annee: 1988,
    genre: "action",
    note: 5,
    realisateur: "John McTiernan",
    description: "Un policier new-yorkais se retrouve seul contre une bande de terroristes dans un gratte-ciel de Los Angeles. Le film d'action référence des années 80.",
    emoji: "💥"
  },
  {
    titre: "Pulp Fiction",
    annee: 1994,
    genre: "thriller",
    note: 5,
    realisateur: "Quentin Tarantino",
    description: "Des histoires entremêlées de gangsters, de philosophie et de violence dans une Los Angeles stylisée. L'un des films les plus influents des années 90.",
    emoji: "💼"
  },
  {
    titre: "Fight Club",
    annee: 1999,
    genre: "thriller",
    note: 5,
    realisateur: "David Fincher",
    description: "Un employé insomniaque fonde avec un vendeur de savon charismatique un club de combat clandestin. Une critique acerbe de la société de consommation.",
    emoji: "👊"
  },
  {
    titre: "Goodfellas",
    annee: 1990,
    genre: "thriller",
    note: 5,
    realisateur: "Martin Scorsese",
    description: "L'ascension et la chute d'un gangster au sein de la mafia new-yorkaise. Scorsese à son sommet avec des performances inoubliables.",
    emoji: "🔫"
  },
  {
    titre: "The Silence of the Lambs",
    annee: 1991,
    genre: "thriller",
    note: 5,
    realisateur: "Jonathan Demme",
    description: "Une jeune agente du FBI consulte Hannibal Lecter pour attraper un tueur en série. Un thriller psychologique culte, primé aux Oscars.",
    emoji: "🦋"
  },
  {
    titre: "Parasite",
    annee: 2019,
    genre: "thriller",
    note: 5,
    realisateur: "Bong Joon-ho",
    description: "Une famille pauvre s'infiltre progressivement dans la vie d'une famille riche. Palme d'or et Oscar du meilleur film, un chef-d'œuvre du cinéma coréen.",
    emoji: "🏠"
  },
  {
    titre: "The Matrix",
    annee: 1999,
    genre: "sci-fi",
    note: 5,
    realisateur: "Wachowski Sisters",
    description: "Un hacker découvre que la réalité est une simulation informatique. Un tournant dans l'histoire du cinéma de science-fiction.",
    emoji: "🟢"
  },
  {
    titre: "Interstellar",
    annee: 2014,
    genre: "sci-fi",
    note: 5,
    realisateur: "Christopher Nolan",
    description: "Des astronautes traversent un trou de ver à la recherche d'une nouvelle planète. Une épopée visuellement époustouflante sur l'amour et le temps.",
    emoji: "🪐"
  },
  {
    titre: "Inception",
    annee: 2010,
    genre: "sci-fi",
    note: 5,
    realisateur: "Christopher Nolan",
    description: "Un voleur spécialisé dans l'extraction d'informations dans les rêves reçoit la mission d'implanter une idée. Vertigineux.",
    emoji: "🌀"
  },
  {
    titre: "Blade Runner 2049",
    annee: 2017,
    genre: "sci-fi",
    note: 4,
    realisateur: "Denis Villeneuve",
    description: "Un blade runner découvre un secret enfoui qui pourrait changer le monde. Une suite visuellement époustouflante, lente et contemplative.",
    emoji: "🌆"
  },
  {
    titre: "2001: A Space Odyssey",
    annee: 1968,
    genre: "sci-fi",
    note: 5,
    realisateur: "Stanley Kubrick",
    description: "L'humanité découvre un mystérieux monolithe noir et envoie une mission vers Jupiter. Une œuvre fondatrice de la science-fiction cinématographique.",
    emoji: "🛸"
  },
  {
    titre: "Schindler's List",
    annee: 1993,
    genre: "drame",
    note: 5,
    realisateur: "Steven Spielberg",
    description: "L'histoire vraie d'Oskar Schindler qui sauva des centaines de Juifs polonais pendant l'Holocauste. Un monument du cinéma mondial.",
    emoji: "🕯️"
  },
  {
    titre: "The Shawshank Redemption",
    annee: 1994,
    genre: "drame",
    note: 5,
    realisateur: "Frank Darabont",
    description: "Un banquier innocent passe vingt ans en prison et forge une amitié profonde avec un autre détenu. L'un des films les mieux notés de tous les temps.",
    emoji: "🔑"
  },
  {
    titre: "Forrest Gump",
    annee: 1994,
    genre: "drame",
    note: 4,
    realisateur: "Robert Zemeckis",
    description: "Un homme simple au bon cœur traverse cinquante ans d'histoire américaine sans jamais perdre sa naïveté.",
    emoji: "🏃"
  },
  {
    titre: "The Truman Show",
    annee: 1998,
    genre: "drame",
    note: 4,
    realisateur: "Peter Weir",
    description: "Un homme découvre que toute sa vie est retransmise en direct à la télévision depuis sa naissance. Une métaphore brillante sur la surveillance.",
    emoji: "📺"
  },
  {
    titre: "Alien",
    annee: 1979,
    genre: "horreur",
    note: 5,
    realisateur: "Ridley Scott",
    description: "L'équipage d'un vaisseau spatial est confronté à une créature extraterrestre mortelle. Le film qui a redéfini le film d'horreur de SF.",
    emoji: "👾"
  },
  {
    titre: "Get Out",
    annee: 2017,
    genre: "horreur",
    note: 4,
    realisateur: "Jordan Peele",
    description: "Un jeune homme noir rend visite à la famille de sa petite amie blanche et découvre quelque chose de terriblement inquiétant.",
    emoji: "👁️"
  },
  {
    titre: "The Shining",
    annee: 1980,
    genre: "horreur",
    note: 5,
    realisateur: "Stanley Kubrick",
    description: "Un écrivain s'isole avec sa famille dans un hôtel hanté et sombre peu à peu dans la folie. Le film d'horreur psychologique par excellence.",
    emoji: "🪓"
  },
  {
    titre: "Spirited Away",
    annee: 2001,
    genre: "animation",
    note: 5,
    realisateur: "Hayao Miyazaki",
    description: "Une fillette se retrouve piégée dans un monde magique peuplé d'esprits. L'animation japonaise à son apogée absolue.",
    emoji: "🐉"
  },
  {
    titre: "The Lion King",
    annee: 1994,
    genre: "animation",
    note: 4,
    realisateur: "Roger Allers & Rob Minkoff",
    description: "Un jeune lion doit affronter son destin après la mort de son père. Un classique intemporel de Disney avec une bande originale légendaire.",
    emoji: "🦁"
  },
  {
    titre: "Toy Story",
    annee: 1995,
    genre: "animation",
    note: 5,
    realisateur: "John Lasseter",
    description: "Les jouets d'un enfant ont une vie secrète quand personne ne les regarde. Le premier film entièrement en images de synthèse, un chef-d'œuvre Pixar.",
    emoji: "🤠"
  },
  {
    titre: "Indiana Jones",
    annee: 1981,
    genre: "aventure",
    note: 5,
    realisateur: "Steven Spielberg",
    description: "Un archéologue aventurier part à la recherche de l'Arche d'Alliance pour empêcher les nazis de s'en emparer. L'aventure cinématographique par excellence.",
    emoji: "🎩"
  },
  {
    titre: "Back to the Future",
    annee: 1985,
    genre: "aventure",
    note: 5,
    realisateur: "Robert Zemeckis",
    description: "Marty McFly voyage accidentellement en 1955 avec une DeLorean transformée en machine à voyager dans le temps. Un film d'aventure parfait.",
    emoji: "⚡"
  },
  {
    titre: "The Grand Budapest Hotel",
    annee: 2014,
    genre: "comedie",
    note: 4,
    realisateur: "Wes Anderson",
    description: "Les aventures rocambolesques d'un concierge d'un grand hôtel européen entre les deux guerres. La signature visuelle de Wes Anderson à son meilleur.",
    emoji: "🏨"
  },
  {
    titre: "Amélie Poulain",
    annee: 2001,
    genre: "comedie",
    note: 4,
    realisateur: "Jean-Pierre Jeunet",
    description: "Une jeune Parisienne timide décide d'améliorer la vie des autres tout en cherchant le bonheur. Un bijou du cinéma français, poétique et inventif.",
    emoji: "🌸"
  }
];


/* ============================================================
   2. RÉCUPÉRATION DES ÉLÉMENTS DU DOM
   ============================================================ */
const catalogue         = document.getElementById("catalogue");
const searchInput       = document.getElementById("search-input");
const starsSelect       = document.getElementById("stars-select");
const resultatsRecherche= document.getElementById("resultats-recherche");
const grilleRecherche   = document.getElementById("grille-recherche");
const termeRecherche    = document.getElementById("terme-recherche");
const noResult          = document.getElementById("no-result");
const modalOverlay      = document.getElementById("modal-overlay");
const modalClose        = document.getElementById("modal-close");
const modalContent      = document.getElementById("modal-content");
const heroBouton        = document.getElementById("hero-explorer-btn");


/* ============================================================
   3. FONCTIONS UTILITAIRES
   ============================================================ */

/**
 * genererEtoiles(note)
 * Retourne du HTML avec des étoiles pleines et vides
 */
function genererEtoiles(note) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= note) {
      html += '<span class="etoile-pleine">&#9733;</span>';  // ★
    } else {
      html += '<span class="etoile-vide">&#9733;</span>';    // ★ grisée
    }
  }
  return html;
}

/**
 * normaliser(texte)
 * Minuscules + suppression des accents pour la recherche
 */
function normaliser(texte) {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * obtenirGenresUniques()
 * Retourne la liste des genres présents dans le tableau films[]
 * sans doublons, dans l'ordre d'apparition
 */
function obtenirGenresUniques() {
  const genres = [];
  for (let i = 0; i < films.length; i++) {
    if (!genres.includes(films[i].genre)) {
      genres.push(films[i].genre);
    }
  }
  return genres;
}

/**
 * titreGenre(genre)
 * Retourne un titre lisible pour un genre (ex: "sci-fi" → "Science-Fiction")
 */
function titreGenre(genre) {
  const titres = {
    "action":    "Action",
    "thriller":  "Thriller",
    "sci-fi":    "Science-Fiction",
    "drame":     "Drame",
    "horreur":   "Horreur",
    "animation": "Animation",
    "aventure":  "Aventure",
    "comedie":   "Comédie"
  };
  // Si le genre est dans notre objet, on retourne son titre,
  // sinon on retourne le genre tel quel avec majuscule
  return titres[genre] || genre.charAt(0).toUpperCase() + genre.slice(1);
}


/* ============================================================
   4. CONSTRUCTION D'UNE CARTE DE FILM
   Crée et retourne un élément <div class="carte-film">
   ============================================================ */
function creerCarte(film) {
  // Élément conteneur extérieur (ne zoome pas, garde la place)
  const carte = document.createElement("div");
  carte.classList.add("carte-film");

  // Élément intérieur (celui qui zoome avec CSS)
  const inner = document.createElement("div");
  inner.classList.add("carte-inner");

  // HTML de l'affiche avec overlay d'infos
  inner.innerHTML = `
    <div class="carte-affiche">
      <div class="carte-placeholder">${film.emoji}</div>
      <span class="carte-badge">${titreGenre(film.genre)}</span>
      <div class="carte-overlay">
        <p class="overlay-titre">${film.titre}</p>
        <p class="overlay-annee">${film.annee}</p>
        <div class="overlay-etoiles">${genererEtoiles(film.note)}</div>
      </div>
    </div>
    <div class="carte-infos">
      <p class="carte-titre-bas">${film.titre}</p>
      <p class="carte-real">${film.realisateur}</p>
    </div>
  `;

  carte.appendChild(inner);

  // ÉVÉNEMENT : clic sur la carte → ouvre la modal
  carte.addEventListener("click", function () {
    ouvrirModal(film);
  });

  return carte;
}


/* ============================================================
   5. CONSTRUCTION DES RANGÉES PAR GENRE
   Pour chaque genre, on crée une section avec un titre
   et un scroll horizontal de cartes
   ============================================================ */
function construireCatalogue(listeFilms) {
  // Vider le catalogue
  catalogue.innerHTML = "";

  // Obtenir les genres présents dans la liste filtrée
  const genres = obtenirGenresUniques();

  // Pour chaque genre, créer une rangée
  genres.forEach(function (genre, indexGenre) {
    // Filtrer les films de ce genre
    const filmsGenre = listeFilms.filter(function (film) {
      return film.genre === genre;
    });

    // Si aucun film pour ce genre après filtrage → on saute
    if (filmsGenre.length === 0) { return; }

    // Créer la section rangée
    const rangee = document.createElement("section");
    rangee.classList.add("rangee-genre");
    rangee.id = "section-" + genre;

    // Délai d'animation pour effet cascade des rangées
    rangee.style.animationDelay = (indexGenre * 100) + "ms";

    // En-tête de la rangée
    rangee.innerHTML = `
      <div class="rangee-entete">
        <h2 class="rangee-titre">${titreGenre(genre)}</h2>
        <span class="rangee-badge">${filmsGenre.length} film${filmsGenre.length > 1 ? "s" : ""}</span>
      </div>
      <div class="rangee-films" id="rangee-${genre}"></div>
    `;

    catalogue.appendChild(rangee);

    // Remplir la rangée avec les cartes
    const conteneurFilms = document.getElementById("rangee-" + genre);
    filmsGenre.forEach(function (film) {
      const carte = creerCarte(film);
      conteneurFilms.appendChild(carte);
    });
  });
}


/* ============================================================
   6. FILTRAGE ET RECHERCHE
   ============================================================ */

/**
 * appliquerFiltres()
 * Applique la recherche texte + filtre étoiles
 * Décide si on affiche le catalogue par rangées
 * ou la grille de résultats de recherche
 */
function appliquerFiltres() {
  const recherche = normaliser(searchInput.value.trim());
  const noteMin   = parseInt(starsSelect.value);

  // Filtrer les films
  const filmsFiltres = films.filter(function (film) {
    const titreNorm = normaliser(film.titre);
    const realNorm  = normaliser(film.realisateur);

    const matchRecherche = titreNorm.includes(recherche) || realNorm.includes(recherche);
    const matchNote      = film.note >= noteMin;

    return matchRecherche && matchNote;
  });

  // CAS 1 : L'utilisateur tape quelque chose dans la recherche
  // On affiche la grille de résultats et on cache le catalogue
  if (recherche.length > 0) {
    catalogue.classList.add("hidden");
    resultatsRecherche.classList.remove("hidden");

    termeRecherche.textContent = '"' + searchInput.value.trim() + '"';

    grilleRecherche.innerHTML = "";

    if (filmsFiltres.length === 0) {
      noResult.classList.remove("hidden");
    } else {
      noResult.classList.add("hidden");
      filmsFiltres.forEach(function (film) {
        grilleRecherche.appendChild(creerCarte(film));
      });
    }

  // CAS 2 : Pas de texte de recherche
  // On affiche le catalogue par rangées (avec filtre étoiles seulement)
  } else {
    catalogue.classList.remove("hidden");
    resultatsRecherche.classList.add("hidden");
    construireCatalogue(filmsFiltres);
  }
}


/* ============================================================
   7. MODAL DE DÉTAIL
   ============================================================ */

/**
 * ouvrirModal(film)
 * Injecte les infos du film et affiche la modal
 */
function ouvrirModal(film) {
  modalContent.innerHTML = `
    <div class="modal-hero">
      <span style="position:relative;z-index:1;">${film.emoji}</span>
      <div class="modal-hero-gradient"></div>
    </div>
    <div class="modal-body">
      <h2 class="modal-titre">${film.titre}</h2>
      <p class="modal-meta">
        ${film.annee} &nbsp;&bull;&nbsp; ${film.realisateur}
      </p>
      <div class="modal-etoiles">${genererEtoiles(film.note)}</div>
      <p class="modal-desc">${film.description}</p>
      <span class="modal-genre-badge">${titreGenre(film.genre)}</span>
    </div>
  `;

  modalOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // bloque le scroll de la page
}

/**
 * fermerModal()
 * Cache la modal et rétablit le scroll
 */
function fermerModal() {
  modalOverlay.classList.add("hidden");
  document.body.style.overflow = "";
}


/* ============================================================
   8. ÉCOUTEURS D'ÉVÉNEMENTS
   ============================================================ */

// Recherche en temps réel (à chaque frappe)
searchInput.addEventListener("input", appliquerFiltres);

// Filtre étoiles (au changement de sélection)
starsSelect.addEventListener("change", appliquerFiltres);

// Bouton "Explorer" du hero → scroll vers le catalogue
heroBouton.addEventListener("click", function () {
  catalogue.scrollIntoView({ behavior: "smooth" });
});

// Fermer la modal — bouton croix
modalClose.addEventListener("click", fermerModal);

// Fermer la modal — clic sur le fond sombre
modalOverlay.addEventListener("click", function (e) {
  // On vérifie que le clic est sur l'overlay ET PAS sur la boîte
  if (e.target === modalOverlay) {
    fermerModal();
  }
});

// Fermer la modal — touche Échap
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    fermerModal();
  }
});


/* ============================================================
   9. INITIALISATION
   Au chargement de la page, on construit le catalogue complet
   ============================================================ */
construireCatalogue(films);