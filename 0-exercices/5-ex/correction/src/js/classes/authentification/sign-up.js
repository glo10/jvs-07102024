import Auth from '../base/auth.js'

export default class SignUp extends Auth {
  constructor (localization, store, cookie) {
    super()
    this.localization = localization
    this.store = store
    this.cookie = cookie
  }

  events () {
    super.events()
    this.onLoadCountries()
    this.onChangeCountry()
  }

  onLoadCountries () {
    const select = document.querySelector('[name=country]')
    if (select) {
      this.localization.getData()
        .then(items => {
          this.localization.fillOptions(select, items)
        })
    }
  }

  onChangeCountry () {
    const select = document.querySelector('[name=country]')
    if (select) {
      select.addEventListener('change', (e) => {
        const currentCountryName = e.target.options[e.target.selectedIndex].value
        this.localization.findCitiesFrom(currentCountryName)
          .then(items => {
            const newSelect = document.createElement('select')
            const selectCity = document.querySelector('[name=city]')
            newSelect.name = selectCity.name
            newSelect.append(selectCity.options[0])
            this.localization.fillOptions(newSelect, items)
            selectCity.replaceWith(newSelect)
          })
      })
    }
  }

  onSubmit () {
    super.onSubmit()
    document.querySelector(this.submit).addEventListener('click', (e) => {
      e.preventDefault()
      const cityElt = document.querySelector('[name=city]')
      const city = {
        name : cityElt.value,
        longitude: cityElt.options[cityElt.selectedIndex].getAttribute('data-longitude'),
        latitude: cityElt.options[cityElt.selectedIndex].getAttribute('data-latitude')
      }
      const user = {
        lastname: document.querySelector('[name=lastname]').value,
        firstname: document.querySelector('[name=firstname]').value,
        email: document.querySelector('[name=email]').value,
        age: document.querySelector('[name=age]').value,
        country: document.querySelector('[name=country]').value,
        city
      }
      this.store.save('user', user)
      this.cookie
        .save('city', city.name)
        .save('longitude', city.longitude)
        .save('latitude', city.latitude)
    })
  }
}
