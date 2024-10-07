/**
 * Hoisting = utilisation des méthodes avant la déclaration qui est faite plus bas
 * On utilise le hoisting principalement avec les variables
 * Attention le comportement est différent entre var et let
 * var affiche undefine
 * let déclenche une erreur
*/
const h1FromTag = document.querySelectorCustom('h1')
const h2FromId = document.querySelectorCustom('#title-2') 

console.log('elements', h1FromTag, sectionsFromCSSClass)

/**
 * A partir de la propriété prototype de l'objet Document
 * On rajoute des nouvelles fonctionnalités
 * Grâce à this on accède aux autres propriétés et fonctions déjà existantes
 * @param {string} selector 
 * @returns Document
 */
Document.prototype.querySelectorCustom = function(selector) {
    console.log('Un nouveau querySelector', selector)
    return this.querySelector(selector)
}