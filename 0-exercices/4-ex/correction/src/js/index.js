import SignIn from './classes/authentification/sign-in.js'
import SignUp from './classes/authentification/sign-up.js'
import Localization from './classes/localization/localization.js'

window.addEventListener('load', () => {
  let auth = null
  const { href } = location
  if (href.endsWith('index.html') || href.endsWith('/')) {
    auth = new SignIn([
      {
        el: 'input[type=email]',
        msg: 'Saisissez votre adresse e-mail !'
      },
      {
        el: 'input[type=password]',
        msg: 'Saisissez votre mot de passe !'
      }
    ])
  } else if (href.endsWith('sign-up.html')) {
    const localization = new Localization('../data/location.json')
    auth = new SignUp(
      [
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
          selector: '[name=password]',
          msg: 'Saisissez votre mot de passe !'
        },
        {
          selector: '[name=confirm]',
          msg: 'Confirmez votre mot de passe !'
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
      ],
      'input[type=submit]',
      localization
    )
  } else {
    throw new Error('404 not found')
  }
  auth.events()
})
