/**
 * querySelector et querySelectorAll des méthodes généralistes
 * permettant de récupérer un ou plusieurs éléments
 * à partir de tous les sélecteurs HTML qui existent (balise, ID, class, etc)
*/
const h1FromTag = document.querySelector('h1') // premier tag (balise) h1 rencontré dans le DOM
const h2FromId = document.querySelectorCustom('#title-2') // à partir de l'ID
// Toutes les sections à partir de la balise section
const sections = document.querySelectorAll('section')
// A partir de la classe
const contents = document.querySelectorAll('.content')