import { createServer } from 'node:http'
import { resolve } from 'node:path'
import Database from './classes/db.mjs'
import { requests } from './database/user-table-requests.mjs'
import { PORT, BASEURL, ROOTDIR, HEADERS, CUSTOM_EVENTS } from './config/parameters.mjs'
import { responseMessage, formValidation } from './functions/utils.mjs'
const http = createServer().listen(PORT, () => {
  console.info(`Server on ${BASEURL}`)
})
// Résolution de chemin pour récupérer le fichier app.sqlite
const dbFile = resolve(ROOTDIR, 'database', 'app.sqlite')
let db = new Database(dbFile, requests)
// Fermeture connexion à la BDD
http.on(CUSTOM_EVENTS.closedb, () => db.end())
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
        http.emit(CUSTOM_EVENTS.end, responseMessage('wrong endpoint'), res)
      }
    } catch (error) {
      // Attention, renvoyer directement l'erreur au client peut avoir des lourdes csq au niveau de la sécurité
      http.emit(CUSTOM_EVENTS.end, responseMessage(`database error : ${error.message}`), res)
    }
  } else { // Pas une méthode POST
    http.emit(CUSTOM_EVENTS.end, responseMessage('wrong HTTP Method'), res)
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
      http.emit(CUSTOM_EVENTS.end, msg, res)
    })
  } catch (error) {
    http.emit(CUSTOM_EVENTS.end, responseMessage(`subscription error : ${error.message}`), res)
  }
})
// Réponse au client
http.on(CUSTOM_EVENTS.end, (data, res) => {
  const status = /success/i.test(data) ? 201 : 404
  res.writeHead(status, HEADERS).end(data)
  http.emit(CUSTOM_EVENTS.closedb)
})
