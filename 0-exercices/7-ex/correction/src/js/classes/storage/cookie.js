import Store from '../base/store.js'

export default class Cookie extends Store {
  save (key, value) {
    const current = new Date()
    current.setTime(current.getTime() + (30 * 24 * 60 * 60 * 1000)) // save for 30 days
    const expires = current.toUTCString()
    document.cookie = `${key}=${value}; expires=${expires};SameSite=Lax; secure;path=/`
    return this
  }

  get (key) {
    return document.cookie
      .split('; ')
      .find((item) => item.startsWith(`${key}=`))?.split('=')[1]
  }

  remove (key) {
    document.cookie = `${key}=;`
    return this
  }
}
