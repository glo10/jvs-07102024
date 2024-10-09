import Store from '../base/store.js'

export default class CookieStore extends Store {
  save (key, value, timeout = (30 * 24 * 60 * 60 * 1000)) { // default save for 30 days
    const current = new Date()
    current.setTime(current.getTime() + timeout)
    const expires = current.toUTCString()
    const secure = /https/.test(location.href)
    const data = `${key}=${value}; expires=${expires};SameSite=Lax;path=/`
    if(secure) data += ';secure'
    document.cookie = data
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
