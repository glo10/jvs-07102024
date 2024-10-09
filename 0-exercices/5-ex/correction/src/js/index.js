import SignIn from './classes/authentification/sign-in.js'
import SignUp from './classes/authentification/sign-up.js'
import Localization from './classes/localization/localization.js'
import CookieStore from './classes/storage/cookie-store.js'
import LocalStore from './classes/storage/local-store.js'

window.addEventListener('load', () => {
  let auth = null
  const { href } = location
  if (href.endsWith('index.html') || href.endsWith('/')) {
    auth = new SignIn(new LocalStore(sessionStorage))
  } else if (href.endsWith('sign-up.html')) {
    const localization = new Localization('../data/location.json')
    auth = new SignUp(localization, new LocalStore(localStorage), new CookieStore())
  } else {
    throw new Error('404 not found')
  }
  auth.events()
})
