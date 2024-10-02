# Exercice 7 : composants Web

1. Modifiez votre page index.html ainsi que les autres pages par le contenu ci-après.
2. Refactorisez tous les traitements de connexion et d'inscription en créant des customElements pour chaque page. Vous devez charger le formulaire concerné depuis le sous dossier `_partials` et l'ajouter au DOM en utilisant les customElements

## Contenu de la page index.html

```html
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connexion</title>
  <link rel="stylesheet" href="../css/main.css">
</head>

<body>
  <main class="container">
    <div id="app">
      <!-- Formulaire à charger dynamiquement ici via l'utilisation des CustomElements-->
    </div>
  </main>
  <script type="module" src="../js/index.js"></script>
</body>

</html>
```

## Aide utilisation CustomElement

1. Etendre la classe `HTMLElement`
2. A la fin de la déclaration de votre classe qui étend `HTMLElement` ajoutez la ligne suivante pour définir la balise html associée à votre classe. Attention, le nom doit contenir un tiret du 6 pour être valide.
```js
class MyCustomElement extends HTMLElement {
  constructor() {
    super()
    // Permet d'ajouter le HTML (dans le constructeur du statique autrement en dur, via des requêtes asynchrones à faire dans le connectedCallback())
    this.innerHTML = '<h1>Hello Custom Element</h1>'
  }
  connectedCallback(){}
  disconnectedCallback(){}
}
window.customElements.define('custom-tag', MyCustomElement)
```
3. Pour ajouter l'élément au DOM, chargez le script qui gère l'implémentation de votre composant.Ensuite pour l'ajout au DOM :
- Soit utilisez la balise définie directement dans votre HTML

```html
<body>
  <h1>Title</h1>
  <custom-tag>
  <script src="index.js"/>
</body>
```
- Soit par l'intermédiaire de JavaScript avec l'utilisant les méthodes *append()*, *preprend()* à partir de l'objet *document*.

```html
<body>
  <h1>Title</h1>
  <div id="app">
  <script>
    const custom = new CustomElement()
    document.querySelector('#app').prepend(custom)
  </script>
</body>
```