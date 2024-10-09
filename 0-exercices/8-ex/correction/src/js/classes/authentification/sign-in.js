import Auth from '../base/auth.js'
import Session from '../storage/session.js'

export default class SignIn extends Auth {
  constructor () {
    super()
    this.inputs = [
      {
        selector: 'input[type=email]',
        msg: 'Saisissez votre adresse e-mail !'
      },
      {
        selector: 'input[type=password]',
        msg: 'Saisissez votre mot de passe !'
      }
    ]
    this.store = new Session()
  }

  onSubmit () {
    super.onSubmit()
    document.querySelector(this.submit).addEventListener('click', () => {
      this.store.save('email', document.querySelector('[name=email]').value)
    })
  }
}
