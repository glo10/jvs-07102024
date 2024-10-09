export default class Localization {
  constructor (endpoint) {
    this.endpoint = endpoint
    this.data = []
  }

  async findCitiesFrom (id) {
    try {
      id = parseInt(id)
      return this.getData()
      .then((res) => {
        const country = res.find(country => country.id === id)
        return country.cities
      }).catch(error => error)
    } catch (error) {
      return []
    }
  }

  async getData () {
    try {
      return fetch(this.endpoint).then(data => data.json())
    } catch (error) {
      return []
    }
  }
}
