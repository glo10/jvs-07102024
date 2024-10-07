const querySelectorOrigin = Document.prototype.querySelector
Document.prototype.querySelector = function(selector) {
  // Appel méthode originale
  const element = querySelectorOrigin.call(this, selector);
  // Logique supplémentaire : enregistrer la sélection
  console.log(`new querySelector : ${selector}`, element);
  return element
}
const elem = document.querySelector('.content');
