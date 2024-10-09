export const addOptions  = (select, options) => {
  options.forEach(item => {
    const opt = document.createElement('option')
    opt.value = item.id
    opt.innerText = item.name
    opt.setAttribute('data-longitude', item.longitude)
    opt.setAttribute('data-latitude', item.latitude)
    select.append(opt)
  })
  return select
}

export function createOptions (items) {
  const options = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const name = ('translations' in item) ? item.translations.fr : item.name
    const option = {
      id: item.id,
      name,
      latitude: item.latitude,
      longitude: item.longitude
    }
    options.push(option)
  }
  return options
}
