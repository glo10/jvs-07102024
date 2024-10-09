import Auth from '../base/auth.js'

export default class SignIn extends Auth {
  constructor (store) {
    super() //  appel le constructeur de la classe Auth
    this.store = store
  }

  onSubmit () {
    super.onSubmit()
    document.querySelector(this.submit).addEventListener('click', () => {
      this.store.save('email', document.querySelector('[name=email]').value)
    })
  }
}
