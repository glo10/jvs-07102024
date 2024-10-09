import { createServer } from 'node:http'
const PORT = 8000
const app = createServer((req, res) => {
    console.log('request', req.method)
    res.writeHead(200, {
        'Content-Type' : 'text/html; charset=utf-8',
    })
    res.end('<h1>Hello World</h1>')
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})