export default class SignIn {
  /**
   * Constructeur appelé lors de la création d'un objet à l'aide de l'opérateur new SignIn
   * @returns void
   */
  constructor (inputs, submitElt) {
    this.inputs = inputs
    this.submit = submitElt
  }

  /**
   * @returns void
   */
  events () {
    this.onToggleHelpMessage()
    this.onSubmitCheckEmptyInputs()
  }

  /**
  * @returns void
  */
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

  /**
   * Gestion de l'événement submit
   * @returns void
   */
  onSubmitCheckEmptyInputs () {
    const el = document.querySelector(this.submit)
    const elts = this.inputs
    el.addEventListener('click', function (e) {
      const size = elts.length
      e.preventDefault()
      for (let i = 0; i < size; i++) {
        const inputEl = document.querySelector(elts[i].selector)
        var alertUser = el.parentElement.querySelector('.alert.alert-danger')
        var isEmpty = false
        if (alertUser === null) {
          const p = document.createElement('p')
          p.classList.add('alert', 'alert-danger', 'my-3', 'text-center')
          p.textContent = elts[i].msg
          el.insertAdjacentHTML('beforebegin', p.outerHTML)
        } else {
          el.parentElement.querySelector('p.alert-danger').innerHTML = elts[i].msg
        }
        if (inputEl.value.length === 0) {
          isEmpty = true
          break
        }
      }
      if (!isEmpty && alertUser) {
        alertUser.remove()
      }
    })
  }
}
