import { createServer } from 'http'

const PORT = 3000

const webServer = createServer((req, res) => {
  const headers = { 'Content-Type': 'application/json; charset=utf-8' }
  let status = 200
  let message = '{"message": "success"}'
  if (!/\/$/.test(req.url)) { // ie req.url !== '/'
    status = 404
    message = '{"message": "not found"}'
  }
  res.writeHead(status, headers)
  res.end(message)
})
webServer.listen(PORT, () => {
  console.info(`App on http://localhost:${PORT}`)
})
