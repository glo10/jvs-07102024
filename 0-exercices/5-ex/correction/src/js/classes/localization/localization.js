export default class Localization {
  constructor (endpoint) {
    this.endpoint = endpoint
    this.data = []
  }

  fillOptions (select, data) {
    if (select === null || !Array.isArray(data)) {
      return
    }
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      const option = document.createElement('option')
      option.value = item.name
      option.setAttribute('data-latitude', item.latitude)
      option.dataset.longitude = item.longitude
      const nameFr = ('translations' in item) ? item.translations.fr : item.name
      option.textContent = nameFr
      select.append(option)
    }
  }

  findCitiesFrom (countryName) {
    try {
      return fetch(this.endpoint)
        .then(res => res.json())
        .then((countries) => {
          const country = countries.find(country => country.name === countryName)
          if(country) {
            return country.cities
          }
          throw new Error(`Can't find cities of ${countryName}`)
        })
    } catch (error) {
      console.error('error', error)
      return []
    }
  }

  getData () {
    try {
      return fetch(this.endpoint)
        .then(res => res.json())
    } catch (error) {
      console.error('error from getData', error)
      return []
    }
  }
}
