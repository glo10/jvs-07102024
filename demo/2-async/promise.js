console.log('1')
const randomNumber = Math.floor(Math.random()*1000)
const myPromise = new Promise((resolve, reject) => {
    if(randomNumber % 2 === 0) {
        resolve(randomNumber)
    }
    else {
        reject('Nombre impair')
    }
})

const mp = myPromise
.then(nb => nb)// idem que nb => return nb
.catch(error => error)

console.log('mp est un objet de type promesse', mp)
mp.then(result => console.log(result))
console.log('2')