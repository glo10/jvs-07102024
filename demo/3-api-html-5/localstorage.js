/**
 * S'il est existe il est sous forme textuelle
 * donc on ne peut le manipuler comme un objet JS sans le parser
 */
let photos = localStorage.getItem("photos");
if (photos === null) {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
    })
    .then((photos) => {
      // Stockage des photos dans le localStorage
      localStorage.setItem("photos", JSON.stringify(photos));
    })
    .catch((error) => console.error("error dans le catch", error));
}
// parser pour transformer le contenu textuel JSON en objet JS
photos = JSON.parse(photos)
for (let i = 0; i < 10; i++) {
  document.querySelector("#app").innerHTML += `
    <div>
        <h2>${photos[i].title}</h2>
        <img src="${photos[i].url}"  alt="${photos[i].title}">
    </div>
    `;
}
