import { createServer } from 'node:http'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import Database from './db.mjs'
import { requests } from './user-table-requests.mjs'

const PORT = 7000
const BASE = `http://localhost:${PORT}/`
const http = createServer().listen(PORT, () => {
  console.info(`Server on ${BASE}`)
})
const headers = { 'Content-Type': 'application/json' }
const DIR = dirname(fileURLToPath(import.meta.url))
const dbFile = resolve(DIR, 'app.sqlite')
let db = new Database(dbFile, requests)

http.on('app:db:closed', () => {
  db.end()
})

http.on('request', async (req, res) => {
  req.setEncoding('utf8')
  if (/post/i.test(req.method)) {
    db = await db.connect()
    if (/\/signup$/.test(req.url)) {
      req.on('data', (data) => {
        http.emit('app:subscribe', data, res)
      })
    } else { // mauvaise requête côté client
      http.emit('app:404', '{"message":"wrong endpoint"}', res)
    }
  } else { // Pas une méthode POST
    http.emit('app:404', '{"message":"wrong HTTP Method"}', res)
  }
})

http.on('app:subscribe', async (data, res) => { // à l'écoute de l'événment app:subscribe
  data = JSON.parse(data)
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

  // cherche à insérer un user dans la bdd
  db.instance.run(db.requests.insert, data, (error) => {
    if (error) { // insertion non réussi
      http.emit('app:404', '{"message":"user already exists"}', res)
    } else { // insertion réussi
      http.emit('success', '{"message":"success"}', res) // emission de l'événement success
    }
  })
})

http.on('success', (data, res) => { // à l'écoute de l'évément success
  res.writeHead(201, headers) // préparation de l'en-tête de la réponse 201 = ressource crée
  res.write(data) // écriture de la réponse
  res.end() // fin de l'écriture de la réponse et donc retour de la réponse au client (le navigateur ou postman)
  http.emit('app:db:closed') // emission de l'événement pour fermer la connexion à la base de données
})

http.on('app:404', (data, res) => { // à l'écoute de l'événement not found
  res.writeHead(404, headers)
  res.write(data)
  res.end()
  http.emit('app:db:closed')
})
