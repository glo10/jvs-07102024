import { createOptions } from '../functions/localization-dom.js'
import Localization from '../classes/localization/localization.js'
onmessage = async (event) => {
  const cityPromise = (new Localization('../../data/location.json')).findCitiesFrom(event.data)
  cityPromise.then((cities) => {
    const options = createOptions(cities)
    postMessage(options)
  })
}
