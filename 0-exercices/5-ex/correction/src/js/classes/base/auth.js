export default class Auth {
  constructor () {
    this.inputs = 'form input:not([type="submit"]), form select'
    this.submit = '[type=submit]'
    this.store = null
  }

  events () {
    this.onToggleHelpMessage()
    this.onSubmit()
  }

  onToggleHelpMessage () {
    const inputs = document.querySelectorAll(this.inputs)
    for (let i = 0; i < inputs.length; i++) {
      const inputEl = inputs[i]
      if (inputEl) {
        ['focus', 'blur'].forEach(event => {
          inputEl.addEventListener(event, (e) => {
            const msg = event === 'focus' ? inputEl.getAttribute('data-message') : ''
            e.target.parentElement.firstElementChild.innerHTML = msg
          })
        })
      }
    }
  }

  onSubmit () {
    const el = document.querySelector(this.submit)
    el.addEventListener('click', (e) => this.checkValues(e))
  }

  checkValues (e) {
    e.preventDefault()
    const inputs = document.querySelectorAll(this.inputs)
    for (let i = 0; i < inputs.length; i++) {
      var alertUser = e.target.parentElement.querySelector('.alert.alert-danger')
      var isEmpty = false
      const inputEl = inputs[i]
      const msg = inputs[i].getAttribute('data-message')
      if (alertUser === null) {
        const p = document.createElement('p')
        p.classList.add('alert', 'alert-danger', 'my-3', 'text-center')
        p.textContent = msg
        e.target.insertAdjacentHTML('beforebegin', p.outerHTML)
      } else {
        e.target.parentElement.querySelector('p.alert-danger').innerHTML = msg
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
