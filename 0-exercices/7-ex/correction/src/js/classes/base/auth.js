export default class Auth extends HTMLElement {
  constructor (filename) {
    super()
    this.inputs = []
    this.submit = '[type=submit]'
    this.store = null
    this.filename = filename
  }

  connectedCallback () {
    this.fetchTemplate().then(() => {
      this.onToggleHelpMessage()
      this.onSubmit()
    })
  }

  async fetchTemplate() {
    return fetch(this.filename)
    .then(res => res.text())
    .then((html) => this.innerHTML = html)
  }

  onToggleHelpMessage () {
    const size = this.inputs.length
    for (let i = 0; i < size; i++) {
      const field = this.inputs[i]
      const inputEl = document.querySelector(field.selector)
      if (inputEl) {
        ['focus', 'blur'].forEach(event => {
          inputEl.addEventListener(event, (e) => {
            const msg = event === 'focus' ? field.msg : ''
            e.target.parentElement.firstElementChild.innerHTML = msg
          })
        })
      }
    }
  }

  onSubmit () {
    const el = this.querySelector(this.submit)
    el.addEventListener('click', (e) => this.checkValues(e))
  }

  checkValues (e) {
    e.preventDefault()
    const size = this.inputs.length
    for (let i = 0; i < size; i++) {
      var alertUser = e.target.parentElement.querySelector('.alert.alert-danger')
      var isEmpty = false
      const inputEl = document.querySelector(this.inputs[i].selector)
      if (alertUser === null) {
        const p = document.createElement('p')
        p.classList.add('alert', 'alert-danger', 'my-3', 'text-center')
        p.textContent = this.inputs[i].msg
        e.target.insertAdjacentHTML('beforebegin', p.outerHTML)
      } else {
        e.target.parentElement.querySelector('p.alert-danger').innerHTML = this.inputs[i].msg
      }
      if (inputEl.value.length === 0 || inputEl.value === '-1') {
        isEmpty = true
        break
      }
    }
    if (!isEmpty && alertUser) {
      alertUser.remove()
    }
  }
}
window.customElements.define('base-auth', Auth)
