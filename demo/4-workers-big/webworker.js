import { computeNumbers } from './functions.js'
// ICI au niveau du worker les méthodes onmessage et postMessage sont globales
onmessage = (event) => {
  // Les données envoyés depuis le script principale sont accessibles depuis event.data
  console.log('worker in process', event.data)
  const { number } = event.data
  // Calcul et traitement lourd
  const result = computeNumbers(number)
  // Envoie du résultat au script principal
  postMessage(result)
}
