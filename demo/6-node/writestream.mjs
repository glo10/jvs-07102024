import { get } from 'node:https'
import { createWriteStream } from 'node:fs'

const writeCities = createWriteStream('cities.json')
const request = get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/refs/heads/master/json/countries%2Bstates%2Bcities.json', (res) => {
    // res est un flux de lecture de données qui va être connectée au flux d'écriture
    res.pipe(writeCities)
    res.on('data', (chunk) => {
        console.log('paquet de données', chunk.toString())
    })
    res.on('error', (error) => {
        console.error('erreur de lecture', error.message)
    })
    res.on('close', () => {
        console.log('terminé')
    })
})
request.on('error', (error) => {
    console.error('erreur requête vers le serveur distant', error.message)
})