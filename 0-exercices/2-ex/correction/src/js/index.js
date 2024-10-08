import SignIn from './classes/sign-in.js'
window.addEventListener('load', () => {
  const inputs = [
    {
      selector: 'input[type=email]',
      msg: 'Veuillez saisir votre adresse e-mail !'
    },
    {
      selector: 'input[type=password]',
      msg: 'Veuillez saisir votre mot de passe !'
    }
  ]
  const submitElt = 'input[type=submit]'
  (new SignIn(inputs, submitElt)).events()
})
