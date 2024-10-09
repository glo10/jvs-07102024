import Auth from '../base/auth.js'
import Local from '../base/local.js'
import Cookie from '../storage/cookie.js'

export default class SignUp extends Auth {
  constructor () {
    super()
    this.inputs = [
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
    ]
    this.store = new Local()
  }

  onSubmit () {
    super.onSubmit()
    document.querySelector(this.submit).addEventListener('click', (e) => {
      e.preventDefault()
      const user = {
        lastname: document.querySelector('[name=lastname]').value,
        firstname: document.querySelector('[name=firstname]').value,
        email: document.querySelector('[name=email]').value,
        age: document.querySelector('[name=age]').value,
        country: document.querySelector('[name=country]').value,
        city: document.querySelector('[name=city]').value
      }
      this.store.save('user', user)
      const ck = new Cookie()
      ck.save('name', `${user.firstname} ${user.lastname}`)
        .save('age', user.age)
    })
  }
}
