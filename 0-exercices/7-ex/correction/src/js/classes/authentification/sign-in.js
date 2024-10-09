import Auth from '../base/auth.js'
import Session from '../storage/session.js'
import SignUp from './sign-up.js'

export default class SignIn extends Auth {
  constructor (filename) {
    super(filename)
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
    this.querySelector(this.submit).addEventListener('click', () => {
      this.store.save('email', this.querySelector('[name=email]').value)
    })
  }
}
window.customElements.define('sign-in', SignIn)
