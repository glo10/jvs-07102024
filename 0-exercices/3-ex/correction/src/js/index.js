import Auth from './classes/auth.js'

window.addEventListener('load', () => {
  let inputs = null
  // Destructuration de l'objet location pour recup uniquement l'URL
  const { href } = location
  if (href.endsWith('index.html') || href.endsWith('/')) { // page d'accueil (contenu formulaire de connexion)
    inputs = [
      {
        el: 'input[type=email]',
        msg: 'Saisissez votre adresse e-mail !'
      },
      {
        el: 'input[type=password]',
        msg: 'Saisissez votre mot de passe !'
      }
    ]
  } else if (href.endsWith('sign-up.html')) { // page d'inscription
    inputs = [
      {
        selector: '[name=lastname]',
        msg: 'Saisissez votre nom !'
      },
      {
        selector: '[name=firstname]',
        msg: 'Saisissez votre prénom !'
      },
      {
        selector: 'input[type=email]',
        msg: 'Saisissez votre adresse e-mail !'
      },
      {
        selector: '[type=password]',
        msg: 'Saisissez votre mot de passe !'
      },
      {
        selector: '[name=age]',
        msg: 'Saisissez votre age !'
      },
      {
        selector: '[name=country]',
        msg: 'Choisissez un pays !'
      },
      {
        selector: '[name=city]',
        msg: 'Choisissez une ville !'
      }
    ]
  } else {
    throw new Error('404 not found')
  }
  const auth = new Auth(inputs)
  auth.events()
})
