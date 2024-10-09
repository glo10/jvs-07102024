import { createServer } from 'node:http'
import { createReadStream, createWriteStream } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const PORT = 7000
const BASE = `http://localhost:${PORT}/`
const HEADERS = { 'Content-Type': 'application/json' }
const DIR = dirname(fileURLToPath(import.meta.url))
const USERS_FILENAME = resolve(DIR, 'users.json')
const ERROR_MSG = '{"message":"error reading users"}'
const http = createServer().listen(PORT, () => {
  console.info(`Server on ${BASE}`)
})

http
  // Traitement de la requête
  .on('request', (req, res) => {
    console.info('Request from ', req.url, req.method)
    req.setEncoding('utf8')
    if (!/POST/i.test(req.method) || !/\/signup$/.test(req.url)) {
      http.emit('app_error', '{"message":"wrong HTTP Method or endpoint"}', res)
    } else {
      let user = ''
      req
        .on('data', (chunk) => {
          user += chunk
        })
        .on('end', () => {
          http.emit('app_read_users', user, res)
        })
    }
  })
  // Traitement des données reçu
  .on('app_read_users', (user, res) => {
    try {
      user = JSON.parse(user)
      const readUsersJsonFile = createReadStream(USERS_FILENAME, { encoding: 'utf8' })
      let usersData = ''
      readUsersJsonFile
        .on('data', (chunk) => { // lecture du fichier JSON stockant les utilisateurs
          usersData += chunk
        })
        .on('end', () => { // fin lecture
          try {
            const users = JSON.parse(usersData)
            http.emit('app_handle_users', users, user, res)
          } catch (err) {
            console.error('Error parsing JSON data :', err)
            http.emit('app_error', ERROR_MSG, res)
          }
        })
        // Traitement erreur lors du traitement sur le fichier JSON
        .on('error', (error) => {
          console.error('Error reading JSON file :', error.message)
          http.emit('app_error', ERROR_MSG, res)
        })
    } catch (err) {
      console.error('Error parsing request user:', err)
      http.emit('app_error', '{"message":"invalid JSON"}', res)
    }
  })
  // Traitement de l'inscription d'un nouvel utilisateur
  .on('app_handle_users', (users, user, res) => {
    if (users.find(u => u.email === user.email)) {
      http.emit('app_error', '{"message":"user already exists fuckoff"}', res)
    } else {
      users.push(user)
      const writeUsersJsonFile = createWriteStream(USERS_FILENAME, { encoding: 'utf8' })
      writeUsersJsonFile.on('finish', () => {
        http.emit('app_new_user', '{"message":"success"}', res)
      })

      writeUsersJsonFile.on('error', (error) => { // erreur écriture fichier
        console.error('Error writing users file:', error.message)
        http.emit('app_error', '{"message":"error writing users file"}', res)
      })

      writeUsersJsonFile.end(JSON.stringify(users)) // Mise à jour du fichier
    }
  })
  // Réponse au client nouvel utilisateur
  .on('app_new_user', (msg, res) => {
    res.writeHead(201, HEADERS)
    res.write(msg)
    res.end()
  })
  // Réponse client 404
  .on('app_error', (msg, res) => {
    res.writeHead(404, HEADERS)
    res.write(msg)
    res.end()
  })
