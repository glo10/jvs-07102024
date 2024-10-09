import SignIn from './classes/authentification/sign-in.js'
import SignUp from './classes/authentification/sign-up.js'
const { href } = location
window.addEventListener('load', () => {
  let content = null
  if (href.endsWith('index.html') || href.endsWith('/')) {
    content = new SignIn('../html/_partials/sign-in.html')
  } else if (href.endsWith('registration.html')) {
    content = new SignUp('../html/_partials/sign-up.html')
  }
  document.querySelector('#app').prepend(content)
})
