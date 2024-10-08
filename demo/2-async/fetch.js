fetch('https://jsonplaceholder.typicode.com/photos')
.then((result) => {
    if(result.ok) {
        return result.json()
    }
    
})
.then(photos => {
    for(let i = 0; i < 10; i++) {
        document.querySelector('#app').innerHTML += `
        <div>
            <h2>${photos[i].title}</h2>
            <img src="${photos[i].url}"  alt="${photos[i].title}">
        </div>
        `
    }
})
.catch(error => console.error('error dans le catch', error))

fetch('./list-item.html')
.then(result => {
    console.log('result', result)
    return result
})
.then(result => result.text())
.then(html => {
    document.querySelector('#app').innerHTML += html
})

.catch(error => console.log('erreur parse JSON', error))