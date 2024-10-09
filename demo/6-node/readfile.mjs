
import { readFile } from 'node:fs'
import { createServer } from 'node:http'

const app = createServer((req, res) => {
    readFile('album.json', { encoding: 'utf8'}, (error, content) => {
        if(!error) {
            console.log('content', content)
            res.end(content)
        } else {
            console.error('erreur ', error.message)
        }
    })
})

app.listen(3000, () => {
    console.log('Running on http://localhost:3000')
})
