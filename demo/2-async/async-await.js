const fetchPhotos = async () => {
  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
    })
    .then((photos) => {
    console.log('2')
      for (let i = 0; i < 10; i++) {
        document.querySelector("#app").innerHTML += `
        <div>
            <h2>${photos[i].title}</h2>
            <img src="${photos[i].url}"  alt="${photos[i].title}">
        </div>
        `;
      }
    })
    .catch((error) => console.error("error dans le catch", error));
};

const fetchHTML = async () => {
   return fetch("./list-item.html")
    .then((result) => {
      return result;
    })
    .then((result) => result.text())
    .then((html) => {
        console.log('3')
      document.querySelector("#app").innerHTML += html;
    })
    .catch((error) => console.log("erreur parse JSON", error));
};

console.log('1')
await fetchPhotos()
await fetchHTML()
console.log('4')