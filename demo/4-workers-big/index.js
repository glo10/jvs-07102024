window.addEventListener('load', () => {
  // Déclarer un web worker en charge du calcul
  const computedWorker = new Worker('webworker.js', { type: 'module' })
  document.querySelector('[type=submit]')
    .addEventListener('click', (e) => {
      e.preventDefault()
      // onmessage et postMessage sont accessibles depuis une instance de la classe Worker (un objet Worker exemple ici computedWorker)
      const value = document.querySelector('[type=number]').value
      computedWorker.postMessage({ message: 'calcul', number: value })
    })
  computedWorker.onmessage = (event) => {
    console.log('réponse du webworker', event.data.length)
  }
})
