# 🎬 NetCiné — Catalogue Cinématographique

> Projet universitaire L1S2 Informatique — TD HTML / CSS / JS  
> Une galerie de films cultes inspirée de l'esthétique Netflix

---

## Aperçu

NetCiné est une page web vitrine qui présente un catalogue de 28 films cultes organisés en rangées horizontales par genre, à la manière de Netflix. Le projet a été conçu pour mettre en pratique les bases du développement web front-end : HTML sémantique, CSS avancé et manipulation du DOM en JavaScript vanilla.

---

## Fonctionnalités

- **Galerie par genre** — rangées horizontales scrollables (Action, Thriller, Sci-Fi, Drame, Horreur, Animation, Aventure, Comédie)
- **Hover Netflix** — zoom fluide au survol d'une carte avec halo rouge et overlay d'informations
- **Recherche en temps réel** — filtre par titre ou réalisateur à chaque frappe clavier
- **Filtre par note** — affiche uniquement les films avec 4 ou 5 étoiles
- **Modal de détail** — clic sur une carte → fenêtre modale avec description complète
- **Navigation rapide** — liens dans la navbar pour sauter directement à un genre
- **Responsive** — s'adapte aux mobiles, tablettes et desktops

---

## Structure du projet

```
NetCine-Cinematographic-Catalog/
│
├── index.html              ← structure HTML sémantique de la page
├── README.md               ← ce fichier
├── .gitignore
│
├── css/
│   └── style.css           ← styles : thème sombre, animations, responsive
│
├── js/
│   └── main.js             ← données films + logique DOM + filtres + modal
│
├── assets/
│   ├── images/
│   │   ├── posters/        ← affiches des films (à ajouter)
│   │   └── icons/
│   └── fonts/
│
├── docs/
└── backups/
```

---

## Technologies utilisées

| Technologie | Usage |
|---|---|
| HTML5 | Structure sémantique (`header`, `main`, `section`, `footer`) |
| CSS3 | Variables, Flexbox, Grid, animations, media queries |
| JavaScript ES6 | DOM, événements, `filter()`, `forEach()`, objets |

Aucune bibliothèque externe. Aucun framework. Tout est écrit à la main.

---

## Concepts CSS clés

**L'effet zoom Netflix** repose sur une double imbrication :

```
.carte-film          ← garde sa place dans le flex (pas de déplacement)
  └── .carte-inner   ← c'est LUI qui zoome via transform: scale(1.25)
```

Cela évite que le zoom pousse les cartes voisines. L'origine du zoom (`transform-origin`) est ajustée pour les cartes en bord de rangée afin qu'elles ne sortent pas de l'écran.

**Variables CSS** — toute la palette de couleurs est centralisée dans `:root` pour faciliter les modifications.

**Scroll horizontal** — chaque rangée utilise `display: flex` avec `overflow-x: auto` et `overflow-y: visible` (ce dernier point est crucial pour que le zoom ne soit pas coupé).

---

## Concepts JavaScript clés

**Séparation des données et de l'affichage** — les 28 films sont stockés dans un tableau d'objets `films[]`. Les fonctions lisent ce tableau et construisent le DOM dynamiquement.

**Filtrage** — la fonction `appliquerFiltres()` utilise `Array.filter()` avec plusieurs conditions combinées. Si une recherche est active, elle bascule vers une grille de résultats ; sinon elle reconstruit le catalogue par rangées.

**Événements** — `addEventListener` est utilisé pour la recherche (`input`), les filtres (`change`), la modal (`click`, `keydown`).

---

## Lancer le projet

1. Cloner ou télécharger le dépôt
2. Ouvrir `index.html` dans un navigateur moderne (Chrome, Firefox, Edge)
3. Aucune installation, aucune dépendance

```bash
git clone https://github.com/votre-utilisateur/NetCine-Cinematographic-Catalog.git
cd NetCine-Cinematographic-Catalog
# ouvrir index.html dans votre navigateur
```

---

## Ajouter des affiches

Les cartes affichent actuellement un emoji en guise de placeholder. Pour ajouter de vraies affiches :

1. Déposer l'image dans `assets/images/posters/` (format `.jpg` recommandé)
2. Dans `main.js`, ajouter la propriété `affiche` à l'objet film :

```javascript
{
  titre: "The Dark Knight",
  affiche: "assets/images/posters/dark-knight.jpg",
  ...
}
```

3. Dans la fonction `creerCarte()`, remplacer le div `.carte-placeholder` par :

```html
<img src="${film.affiche}" alt="Affiche de ${film.titre}" />
```

---

## Pistes d'amélioration

- Ajouter les vraies affiches de films
- Trier les rangées par note décroissante
- Ajouter un filtre par décennie
- Sauvegarder les films favoris avec `localStorage`
- Ajouter une section "Meilleures notes" en haut du catalogue

---

## Auteur

Projet réalisé dans le cadre du TD 3 — L1S2 Informatique  
Université de La Réunion — 2025
