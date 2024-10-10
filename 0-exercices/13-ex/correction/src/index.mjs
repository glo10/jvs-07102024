import { createServer } from 'node:http'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import Database from './classes/db.mjs'
import { requests } from './database/user-table-requests.mjs'

const PORT = 7000
const BASE = `http://localhost:${PORT}/`
const http = createServer().listen(PORT, () => {
  console.info(`Server on ${BASE}`)
})
const headers = { 'Content-Type': 'application/json' }
// Résolution de chemin pour récupérer le fichier app.sqlite
const DIR = dirname(fileURLToPath(import.meta.url))
const dbFile = resolve(DIR, 'database', 'app.sqlite')
let db = new Database(dbFile, requests)
const responseMessage = (message) => `{"message":"${message}"}`
const formValidation = (data) => {
  data = JSON.parse(data)
  if (!data.email || !data.password) {
    throw new Error('email or password required')
  }
  data = [
    data.lastname,
    data.firstname,
    data.email,
    data.password,
    data.age,
    data.country,
    data.city,
    data.cityLatitude,
    data.cityLongitude
  ]
  return data
}
// Fermeture connexion à la BDD
http.on('app:db:closed', () => db.end())
// Traitement de la requête
http.on('request', (req, res) => {
  req.setEncoding('utf8')
  if (/post/i.test(req.method)) {
    try {
      if (/\/signup$/.test(req.url)) {
        let body = ''
        req.on('data', (chunk) => { body += chunk })
        req.on('end', () => http.emit('app:subscribe', body, res))
      } else { // mauvaise requête côté client
        http.emit('app:end', responseMessage('wrong endpoint'), res)
      }
    } catch (error) {
      // Attention, renvoyer directement l'erreur au client peut avoir des lourdes csq au niveau de la sécurité
      http.emit('app:end', responseMessage(`database error : ${error.message}`), res)
    }
  } else { // Pas une méthode POST
    http.emit('app:end', responseMessage('wrong HTTP Method'), res)
  }
})
// Traitement des données envoyées
http.on('app:subscribe', async (data, res) => { // à l'écoute de l'événment app:subscribe
  try {
    db = await db.connect()
    data = formValidation(data)
    // cherche à insérer un user dans la bdd
    db.instance.run(db.requests.insert, data, (error) => {
      let msg = responseMessage('user already exists')
      if (!error) { // insertion non réussi
        msg = responseMessage('success')
      }
      http.emit('app:end', msg, res)
    })
  } catch (error) {
    http.emit('app:end', responseMessage(`subscription error : ${error.message}`), res)
  }
})
// Réponse au client
http.on('app:end', (data, res) => {
  const status = /success/i.test(data) ? 201 : 404
  res.writeHead(status, headers).end(data)
  http.emit('app:db:closed')
})
