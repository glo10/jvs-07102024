// Traitement 1 en direct
const firstname = 'Glodie'
// Traitement 2, le résultat ne depend de mon code
const myLastname = new Promise((resolve, reject) => {
    const rdm = Math.floor(Math.random() *10000)
    if(rdm % 2 === 0) resolve('Tshimini')
    else reject('KO')
})
// 3ème traitement afficher nom et prénom lorsque j'ai les 2 données sous forme de promesse
Promise.all([Promise.resolve(firstname), myLastname])
.then(fullname => {
    console.log('tableau des résultats', fullname, fullname[0], fullname[1])
}).catch(error => console.error(error))

// Egalement possible de faire de cette manière pour cet exemple très simple
myLastname.then((lastname) => {
    console.log('une seule promesse', firstname, lastname)
})