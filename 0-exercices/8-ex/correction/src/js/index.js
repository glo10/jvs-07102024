import SignIn from './classes/authentification/sign-in.js'
import SignUp from './classes/authentification/sign-up.js'
import { addOptions } from './functions/localization-dom.js'

window.addEventListener('load', () => {
  let auth = null
  const { href } = location
  if (href.endsWith('index.html') || href.endsWith('/')) {
    auth = new SignIn()
  } else if (location.href.endsWith('sign-up.html')) {
    auth = new SignUp()
    const CountrySelect = document.querySelector('[name=country]')
    // country web worker
    const countryWorker = new Worker('../js/workers/country.js', { type: 'module' })
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
      const selectCity = document.querySelector('[name=city]')
      newSelectCity.name = selectCity.name
      newSelectCity.append(selectCity.options[0])
      addOptions(newSelectCity, event.data)
      selectCity.replaceWith(newSelectCity)
    })
  } else {
    throw new Error('404 not found')
  }
  auth.events()
})
