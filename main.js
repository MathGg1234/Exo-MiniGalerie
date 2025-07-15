/*
 MINI GALERIE INTERACTIVE - EXERCICE JS
 Tu dois tout coder dans ce fichier.
 Le CSS doit aussi être généré/injecté par JS !
*/

import { dataImages } from "./modules/config.js";

/* 
============================================================
QUESTION 1 : Création dynamique de styles
============================================================
- Crée un <style> en JS et ajoute-le dans le <head>.
- Dans ce style, ajoute au moins :
  - un reset rapide (margin/padding à 0)
  - un fond clair pour le body
  - un style pour .gallery avec display flex et wrap
  - un style basique pour .item (ex: bordure ou padding)
- Tu peux utiliser style.textContent = "..." pour écrire ton CSS en JS.
*/


/* 
============================================================
QUESTION 2 : Génération du <select>
============================================================
- Dans le formulaire #filterForm, crée un <select id="categorySelect">.
- Récupère les catégories uniques à partir de dataImages.
- Ajoute une option "all" + une option par catégorie.
*/



/* 
============================================================
QUESTION 3 : Génération de la galerie
============================================================
- Crée une fonction renderGallery(filter = "all")
- Elle doit :
   → Vider .gallery
   → Filtrer les images si filter != "all"
   → Pour chaque image, créer un <div class="item">
        contenant <img src="..." alt="...">
        et <span>titre</span>
   → Ajouter chaque item dans .gallery
*/

/* 
============================================================
QUESTION 4 : Animation et transformation en JS
============================================================
- Ajoute un listener "mouseenter" sur chaque .item
  → applique un transform: scale(1.1) rotate(2deg)
- Ajoute un listener "mouseleave" pour revenir à l’état initial
- Fais-le en JS (pas en CSS !)
*/

/* 
============================================================
QUESTION 5 : target vs currentTarget
============================================================
- Ajoute un listener "click" sur chaque .item
  → Quand on clique, affiche un alert avec :
    "Tu as cliqué sur [e.target.tagName] dans [titre de l'image]"
*/

/* 
============================================================
QUESTION 6 : preventDefault() sur formulaire
============================================================
- Sur submit du #filterForm :
   → empêche le rechargement
   → récupère la valeur du <select>
   → appelle renderGallery avec cette catégorie
*/

/* 
============================================================
QUESTION 7 : preventDefault() sur les liens du menu
============================================================
- Sélectionne tous les .nav__link
- Sur clic, empêche la navigation et affiche une alert :
  "Navigation désactivée : [texte du lien]"
*/

/* 
============================================================
QUESTION 8 : Position & message temporaire (BONUS)
============================================================
- Crée dynamiquement un petit <div> en bas à droite
  (position: fixed) pour afficher un message temporaire
- Exemple : "Image cliquée : Montagnes"
- Le message doit disparaître après 2 secondes
*/

/* 
============================================================
QUESTION 9 : Initialisation
============================================================
- Appelle tes fonctions pour :
   → injecter les styles
   → créer le <select>
   → afficher la galerie initiale
- Puis ajoute tous les listeners
*/

/* 
============================================================
BONUS :
============================================================
- Ajoute une option "Random" dans le <select> qui mélange les images
- Ajoute un compteur du nombre d’images affichées
*/
