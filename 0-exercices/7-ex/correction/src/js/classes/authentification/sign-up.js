import Auth from '../base/auth.js'
import Local from '../base/local.js'
import Cookie from '../storage/cookie.js'
import { addOptions } from '../../functions/localization-dom.js'
export default class SignUp extends Auth {
  constructor (filename) {
    super(filename)
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
  connectedCallback() {
    this.fetchTemplate().then(() => {
      this.handleWorkers()
      this.onToggleHelpMessage()
      this.onSubmit()
    })
  }

  handleWorkers () {
    const CountrySelect = this.querySelector('[name=country]')
    console.log('here', CountrySelect)
    // country web worker
    const countryWorker = new Worker('../js/workers/country.js', { type: 'module' })
    console.log('country Worker', countryWorker)
    countryWorker.postMessage(null)
    countryWorker.addEventListener('message', (event) => {
      addOptions(CountrySelect, event.data)
    })
    // city web worker
    const cityWorker = new Worker('../js/workers/city.js', { type: 'module' })
    CountrySelect.addEventListener('change', (e) => {
      cityWorker.postMessage(e.target.value)
    })
    cityWorker.addEventListener('message', async (event) => {
      let newSelectCity = document.createElement('select')
      const selectCity = this.querySelector('[name=city]')
      newSelectCity.name = selectCity.name
      newSelectCity.append(selectCity.options[0])
      addOptions(newSelectCity, event.data)
      selectCity.replaceWith(newSelectCity)
    })
  }

  onSubmit () {
    super.onSubmit()
    this.querySelector(this.submit).addEventListener('click', function (e){
      e.preventDefault()
      const user = {
        lastname: this.querySelector('[name=lastname]').value,
        firstname: this.querySelector('[name=firstname]').value,
        email: this.querySelector('[name=email]').value,
        age: this.querySelector('[name=age]').value,
        country: this.querySelector('[name=country]').value,
        city: this.querySelector('[name=city]').value
      }
      this.store.save('user', user)
      const ck = new Cookie()
      ck.save('name', `${user.firstname} ${user.lastname}`)
        .save('age', user.age)
    })
  }
}
window.customElements.define('sign-up', SignUp)