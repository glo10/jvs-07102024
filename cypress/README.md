# Lancement des tests

1. Installez cypress à l'aide de la commande `npm i cypress`
2. Modifiez dans le fichier de configuration de cypress ***cypress.config.js*** présent  à la racine de votre projet après l'installation du package.
***Vous devez modifier la partie baseUrl en indiquant l'url de base votre application***
Ci-après le code présent dans ce fichier.
```js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5501/0-exercices',
    viewportHeight: 619,
    viewportWidth: 1304,
    chromeWebSecurity: false
    // experimentalShadowDomSupport: true
  }
})
```
3. Modifiez dans les tests fonctionnels (end-to-end) qui ont l'extension ***\*.cy.js***, la ligne contenant l'instruction ci-après pour indiquer le chemin correspondant à la page à tester. Attention, indiquez à partir de votre base url définie précédemment.

```js
cy.visit('/1-ex/correction/src/html')
```
Par exemple, si votre `baseUrl = 'http://localhost:5500/exercice1'` et que vous devez tester la page de contact qui se trouve au même niveau que votre page d'accueil, vous devez indiquer `cy.visit('/contact.html')`

2. Dans le package.json, ajoutez dans la partie script le code ci-après
```json
  "scripts": {
    "e2e": "cypress open"
  }
```
3. Depuis le terminal, exécutez `npm run e2e` et laissez vous guider par l'interface utilisateur de Cypress pour lancer vos tests.