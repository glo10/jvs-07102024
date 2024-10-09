/**
 * Le localStorage comme le sessionStorage ne peuvent stocker que des String et des nombres
 *  Pour stocker les objets, il faut les serialiser avec JSON.stringify(objet)
 *  Dans le cas de la serialisation, pour exploiter les données lors de la récupération des informations depuis le localStorage
 *  ou le sessionStorage, il faut effectuer l'opération inverse, la déserialisation avec JSON.parse(string)
 * 
 * Ici on veut effectuer qu'une seule fois la requête vers l'API
 *  stocker les données dans le localStorage
 *  Puis les récupérées depuis le localStorage pour économiser les ressources réseaux
 *  lors des prochaines requêtes
 * 
 * Si la donnée existe ici, elle est sérialisée au format textuel
 * donc impossible à manipuler comme un objet JS
 * il faut donc parser les données pour les exploiter comme un objet JS
 */
let photos = localStorage.getItem('photos');
if (photos === null) {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
    })
    .then((photos) => {
      // Stockage des photos dans le localStorage en les sérialisant
      localStorage.setItem('photos', JSON.stringify(photos));
    })
    .catch((error) => console.error('error dans le catch', error));
}
// parser pour transformer le contenu textuel JSON en objet JS (désérialisation)
photos = JSON.parse(photos)
for (let i = 0; i < 10; i++) {
  document.querySelector('#app').innerHTML += `
    <div>
        <h2>${photos[i].title}</h2>
        <img src="${photos[i].url}" alt="${photos[i].title}">
    </div>
    `;
}
