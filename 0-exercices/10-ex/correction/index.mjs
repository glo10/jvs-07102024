import { EventEmitter } from 'events'
import { sum, divide, minus, multiply } from './math.mjs'
const app = new EventEmitter()
console.log('started')
app.on('app:computed', (data) => {
  console.log('computation')
  const { nb1, nb2 } = data
  console.log(
    `${sum(nb1, nb2)}\n`,
    `${minus(nb1, nb2)}\n`,
    `${multiply(nb1, nb2)}\n`,
    `${divide(nb1, nb2)}\n`
  )
})
setTimeout(() => {
  app.emit('app:computed', {
    nb1: Math.floor(Math.random() * 100),
    nb2: Math.floor(Math.random() * 1000)
  })
}, 5000)

