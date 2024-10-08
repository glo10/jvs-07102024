import Auth from '../base/auth.js'

export default class SignUp extends Auth {
  constructor (inputs, sbtEl, localization) {
    super(inputs, sbtEl)
    this.inputs = inputs
    this.localization = localization
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
}
