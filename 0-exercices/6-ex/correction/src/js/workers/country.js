import { createOptions } from '../functions/localization-dom.js'
import Localization from '../classes/localization/localization.js'
onmessage = async () => {
  const countries = (new Localization('../../data/location.json')).getData()
  return countries.then(items => items)
    .then(items => {
      const options = createOptions(items)
      postMessage(options)
    })
}
