import { computeNumbers } from './functions.js'

window.addEventListener('load', () => {
  document.querySelector('input[type=submit]')
    .addEventListener('click', (e) => {
      e.preventDefault()
      const number = document.querySelector('[type=number]')
      const results = computeNumbers(number.value)
      console.log('results', results)
    })
})
